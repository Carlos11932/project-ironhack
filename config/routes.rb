Rails.application.routes.draw do

devise_for :users
 get '/profile', to: 'users#profile', as: :profile
 root to: 'users#profile'
 get "player", to: "player#show", as: :player_profile
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
