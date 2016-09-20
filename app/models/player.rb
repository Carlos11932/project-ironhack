class Player < ApplicationRecord
  belongs_to :user
  has_many :player_teams
  has_many :teams, through: :player_teams

  def show
  	
  end
end
