class AddDateToExpenses < ActiveRecord::Migration[8.1]
  def change
    add_column :expenses, :date, :date, null: false, default: -> { 'CURRENT_DATE' }
  end
end
