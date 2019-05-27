Rails.application.routes.draw do
  root to: 'pages#home'

  get "admin", to: "posts#admin"
  delete "posts/:id", to: "posts#destroy", as: :delete
  resources :posts
  resources :contacts, only: [:new, :create]


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
