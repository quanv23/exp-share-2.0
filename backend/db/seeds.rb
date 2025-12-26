# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Category.create!([
  { name: "Food", colour: "#FF5733" },
  { name: "Transport", colour: "#33FF57" },
  { name: "Entertainment", colour: "#3357FF" }
])

Expense.create!([
  { title: "Groceries", amount: 150, category_id: Category.find_by(name: "Food").id, date: Time.current - 2.days },
  { title: "Bus Ticket", amount: 50, category_id: Category.find_by(name: "Transport").id, date: Time.current - 10.days },
  { title: "Movie Night", amount: 80 , category_id: Category.find_by(name: "Entertainment").id, date: Time.current - 5.days },
  { title: "Lunch Out", amount: 18, category_id: Category.find_by(name: "Food").id, date: Time.current - 1.days },
  { title: "Taxi Ride", amount: 32, category_id: Category.find_by(name: "Transport").id, date: Time.current - 3.days },
  { title: "Snacks", amount: 7, category_id: Category.find_by(name: "Food").id, date: Time.current - 4.days },
  { title: "Metro Pass", amount: 12, category_id: Category.find_by(name: "Transport").id, date: Time.current - 8.days },
  { title: "Concert Ticket", amount: 120, category_id: Category.find_by(name: "Entertainment").id, date: Time.current - 15.days },
  { title: "Streaming Subscription", amount: 20, category_id: Category.find_by(name: "Entertainment").id, date: Time.current - 12.days },
  { title: "Coffee", amount: 6, category_id: Category.find_by(name: "Food").id, date: Time.current - 6.days },
  { title: "Bike Rental", amount: 9, category_id: Category.find_by(name: "Transport").id, date: Time.current - 9.days },
  { title: "Sandwich", amount: 10, category_id: Category.find_by(name: "Food").id, date: Time.current - 11.days },
  { title: "Arcade Games", amount: 25, category_id: Category.find_by(name: "Entertainment").id, date: Time.current - 3.days },
  { title: "Gas Refill", amount: 60, category_id: Category.find_by(name: "Transport").id, date: Time.current - 7.days },
  { title: "Board Game", amount: 45, category_id: Category.find_by(name: "Entertainment").id, date: Time.current - 14.days },
  { title: "Breakfast", amount: 9, category_id: Category.find_by(name: "Food").id, date: Date.today - 16 }
])

Note.create!([
  { title: "Note 1", description: "Remember to check for discounts on groceries." },
  { title: "Note 2", description: "Carpooling can save money on transport." },
  { title: "Note 3", description: "Look for free entertainment events in the city." }
])