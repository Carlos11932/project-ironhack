
class UsersController < ApplicationController
    before_action :authenticate_user!
    
    def index
    end
    def profile
        @user = current_user
        if @user.player == nil
        	@user.player = Player.create(sumoner_name: @user.name)
        end	
        render "users/profile"
        #redirect_to player_profile_path
    end
end