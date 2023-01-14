class Warranty < ApplicationRecord
    has_many :users, dependent: :destroy
    has_many :users, through: :cars
    
    validates :target, :author, presence: true
  end
end
