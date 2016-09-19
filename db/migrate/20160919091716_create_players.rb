class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :sumoner_name
      t.integer :sumoner_id
      t.integer :most_played_champ_id
      t.string :player_league
      t.string :player_icon
      t.string :most_played_champ_img
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
