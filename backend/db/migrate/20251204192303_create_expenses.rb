class CreateExpenses < ActiveRecord::Migration[8.1]
  def change
    create_table :expenses do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :amount, null: false
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
