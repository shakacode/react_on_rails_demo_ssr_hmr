Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'expo', to: 'expo#index'
  get 'expo/hello-world', to: 'expo#hello_world'
  get 'expo-helmet/*all' => 'expo#helmet'
  get 'expo/*all' => 'expo#navigation'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
