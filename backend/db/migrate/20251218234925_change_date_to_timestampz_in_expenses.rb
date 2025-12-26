class ChangeDateToTimestampzInExpenses < ActiveRecord::Migration[8.1]
  def change
    change_column :expenses, :date, :timestamptz
  end
end
