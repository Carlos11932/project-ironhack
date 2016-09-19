class User < ApplicationRecord
	has_one :player
	has_many :teams
end
