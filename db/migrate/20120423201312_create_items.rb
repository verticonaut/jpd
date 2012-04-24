class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :sub_category_id
      t.string :name
      t.string :description
      t.string :identifier
      t.integer :price

      t.timestamps
    end
  end
end
