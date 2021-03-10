class SymptomsController < ApplicationController
  before_action :set_symptom, only: [:show, :destroy, :update ]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /symptoms
  def index
    @symptoms = Symptom.all

    render json: @symptoms
  end

  # GET /symptoms/1
  def show
    render json: @symptom
  end

  # POST /symptoms
  def create
    @symptom = Symptom.new(symptom_params)
    @symptom.user = @current_user
    if @symptom.save
      render json: @symptom, status: :created 
    else
      render json: @symptom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /symptoms/1
  def update
    
    @symptom = @current_user.symptoms.find(params[:id])
    if @symptom.update(symptom_params)
      render json: @symptom
    else
      render json: @symptom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /symptoms/1
  def destroy
    # @symptom = @current_user.symptoms.find(params[:id])
    @symptom.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_symptom
      @symptom = Symptom.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def symptom_params
      params.require(:symptom).permit(:description, :user_id, :illness_id)
    end
end
