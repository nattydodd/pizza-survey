class AddForeignKeyToQuestion < ActiveRecord::Migration[5.0]
  def change
    add_column :questions, :response_id, :integer
  end
end
