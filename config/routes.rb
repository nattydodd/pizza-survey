Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
       resources :responses, only: [:index, :show, :create, :destroy, :update] do
         resources :questions, only: [:index, :create, :destroy, :update]
       end
    end
  end
end
