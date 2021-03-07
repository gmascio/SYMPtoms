class Symptom < ApplicationRecord
  belongs_to :user
  belongs_to :illness
end
