Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :locations, only: [:index, :show, :create]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end

