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
  { title: "Groceries", description: "Weekly grocery shopping", amount: 150, category_id: Category.find_by(name: "Food").id, date: Date.today - 2 },
  { title: "Bus Ticket", description: "Monthly bus pass", amount: 50, category_id: Category.find_by(name: "Transport").id, date: Date.today - 10 },
  { title: "Movie Night", description: "Cinema tickets and snacks", amount: 80 , category_id: Category.find_by(name: "Entertainment").id, date: Date.today - 5 },
  { title: "Lunch Out", description: "Sandwich and drink", amount: 18, category_id: Category.find_by(name: "Food").id, date: Date.today - 1 },
  { title: "Taxi Ride", description: "Ride to downtown", amount: 32, category_id: Category.find_by(name: "Transport").id, date: Date.today - 3 },
  { title: "Snacks", description: "Chips and soda", amount: 7, category_id: Category.find_by(name: "Food").id, date: Date.today - 4 },
  { title: "Metro Pass", description: "Single-day metro pass", amount: 12, category_id: Category.find_by(name: "Transport").id, date: Date.today - 8 },
  { title: "Concert Ticket", description: "Live concert event", amount: 120, category_id: Category.find_by(name: "Entertainment").id, date: Date.today - 15 },
  { title: "Streaming Subscription", description: "Monthly streaming service", amount: 20, category_id: Category.find_by(name: "Entertainment").id, date: Date.today - 12 },
  { title: "Coffee", description: "Latte from café", amount: 6, category_id: Category.find_by(name: "Food").id, date: Date.today - 6 },
  { title: "Bike Rental", description: "Hourly city bike rental", amount: 9, category_id: Category.find_by(name: "Transport").id, date: Date.today - 9 },
  { title: "Sandwich", description: "Lunch sandwich", amount: 10, category_id: Category.find_by(name: "Food").id, date: Date.today - 11 },
  { title: "Arcade Games", description: "Coins for arcade", amount: 25, category_id: Category.find_by(name: "Entertainment").id, date: Date.today - 13 },
  { title: "Gas Refill", description: "Fuel for the car", amount: 60, category_id: Category.find_by(name: "Transport").id, date: Date.today - 7 },
  { title: "Board Game", description: "New board game purchase", amount: 45, category_id: Category.find_by(name: "Entertainment").id, date: Date.today - 14 },
  { title: "Breakfast", description: "Bagel and coffee", amount: 9, category_id: Category.find_by(name: "Food").id, date: Date.today - 16 }
])