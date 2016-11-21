class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_filter :authenticate_user!, except: [:new, :create]
  protect_from_forgery with: :null_session
end
