class Item < ActiveRecord::Base
  attr_accessible :description, :identifier, :name, :price, :sub_category_id

  belongs_to :sub_category
end
