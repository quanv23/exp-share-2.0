class Category < ApplicationRecord
  has_many :expenses
  validates :name, presence: true
  validates :colour, presence: true
end
