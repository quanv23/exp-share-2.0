class RemoveDescriptionFromExpenses < ActiveRecord::Migration[8.1]
  def change
    remove_column :expenses, :description, :string
  end
end
