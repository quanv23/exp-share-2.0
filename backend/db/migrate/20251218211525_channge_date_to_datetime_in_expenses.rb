class ChanngeDateToDatetimeInExpenses < ActiveRecord::Migration[8.1]
  def change
    change_column :expenses, :date, :datetime
  end
end
