class AddImageToIllnesses < ActiveRecord::Migration[6.1]
  def change
    add_column :illnesses, :image, :string
  end
end
