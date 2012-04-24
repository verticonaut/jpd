class CreateSubCategories < ActiveRecord::Migration
  def change
    create_table :sub_categories do |t|
      t.integer :category_id
      t.string :name

      t.timestamps
    end
  end
end
