Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  namespace :api do
    namespace :v1 do

      # Expense routes

      # CRUD routes for expenses
      get '/expenses', to: 'expenses#index'
      post '/expenses', to: 'expenses#create'
      put '/expenses/:id', to: 'expenses#update'
      delete '/expenses/:id', to: 'expenses#destroy'

      # Gets all expenses for a specific date range
      get '/expenses/date', to: 'expenses#date' 

      # Gets all expenses with matching category_id
      get 'expenses/category/:id', to: 'expenses#category' 

      # Category routes

      # CRUD routes for categories
      get '/categories', to: 'categories#index'
      post '/categories', to: 'categories#create'
      put '/categories/:id', to: 'categories#update'
      delete '/categories/:id', to: 'categories#destroy'


      # Note routes

      # CRUD routes for notes
      get '/notes', to: 'notes#index'
      post '/notes', to: 'notes#create'
      put '/notes/:id', to: 'notes#update'
      delete '/notes/:id', to: 'notes#destroy'
    end
  end
end
