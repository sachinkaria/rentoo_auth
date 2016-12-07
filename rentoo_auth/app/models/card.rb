class Card < ApplicationRecord

  belongs_to :user

  def as_json(options={})
    super(only: [:id, :title, :situation, :task, :action, :result])
  end

end
