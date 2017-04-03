class ChangeColumnNameType < ActiveRecord::Migration[5.0]
  def change
    rename_column :questions, :type, :style
  end
end
