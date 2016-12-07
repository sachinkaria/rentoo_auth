class CardsController < ApplicationController

  def index
    render json: Card.all
  end

  def create
    respond_with current_user.cards.create(card_params)
  end

  def show
    render json: Card.find(params[:id])
  end

  def update
     respond_with Card.find(params[:id]).update(card_params)
  end

  def destroy
     Card.find(params[:id]).destroy
  end

  private

  def card_params
    params.permit(:title, :situation, :task, :action, :result)
  end

end
