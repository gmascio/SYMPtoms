class CreateSymptoms < ActiveRecord::Migration[6.1]
  def change
    create_table :symptoms do |t|
      t.string :description
      t.references :user, null: false, foreign_key: true
      t.references :illness, null: false, foreign_key: true

      t.timestamps
    end
  end
end
