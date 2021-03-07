class IllnessesController < ApplicationController
  before_action :set_illness, only: [:show, :update, :destroy]

  # GET /illnesses
  def index
    @illnesses = Illness.all

    render json: @illnesses
  end

  # GET /illnesses/1
  def show
    render json: @illness
  end

  # POST /illnesses
  def create
    @illness = Illness.new(illness_params)

    if @illness.save
      render json: @illness, status: :created, location: @illness
    else
      render json: @illness.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /illnesses/1
  def update
    if @illness.update(illness_params)
      render json: @illness
    else
      render json: @illness.errors, status: :unprocessable_entity
    end
  end

  # DELETE /illnesses/1
  def destroy
    @illness.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_illness
      @illness = Illness.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def illness_params
      params.require(:illness).permit(:name, :description)
    end
end
