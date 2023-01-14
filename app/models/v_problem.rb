class v_problem < ApplicationRecord
  has_many :users, dependent: :destroy
  has_many :users, through: :userg
  
  validates :target, :author, presence: true
end