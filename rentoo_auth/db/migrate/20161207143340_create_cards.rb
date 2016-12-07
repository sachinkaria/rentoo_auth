class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.text :title
      t.text :situation
      t.text :task
      t.text :action
      t.text :result

      t.timestamps
    end
  end
end
