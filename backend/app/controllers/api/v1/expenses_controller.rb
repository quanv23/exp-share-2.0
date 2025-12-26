module Api
  module V1
    class Api::V1::ExpensesController < ApplicationController 

      # Calls set_expense before update and destroy actions
      before_action :set_expense, only: [:update, :destroy]

      # GET api/v1/expenses
      # Gets all expenses
      def index
        @expenses = Expense.includes(:category).order(date: :desc)
        render json: @expenses, include: :category
      end

      # POST api/v1/expenses
      # Creates a new expense
      def create
        @expense = Expense.new(expense_params)

        # Attempts to save the expense and returns whether it was successful
        if @expense.save
          render json: @expense, status: :created
        else
          render json: @expense.errors, status: :unprocessable_entity
        end
      end

      # PUT api/v1/expenses/:id
      # Updates an existing expense by ID 
      def update
        # Updates the expense with the provided parameters and returns whether it was successful
        if @expense.update(expense_params)
          render json: @expense
        else
          render json: @expense.errors, status: :unprocessable_entity
        end

      end

      # DELETE api/v1/expenses/:id
      # Deletes an expense by ID
      def destroy
        @expense.destroy
      end

      # GET api/v1/expenses/date
      # Gets expenses within a specified date range
      def date
        # Gets start_date and end_date from query parameters
        start_date = params[:start_date]
        end_date = params[:end_date]

        @expenses = Expense.where(date: start_date..end_date)
        render json: @expenses
      end

      # GET api/v1/expenses/category/:id
      # Gets expenses by category ID 
      def category
        category_id = params[:id]
        @expenses = Expense.where(category_id: category_id)
        render json: @expenses
      end

      private

      # Sets the expense based on the provided ID
      def set_expense
        @expense = Expense.find(params[:id])
      end

      # Only uses trusted parameters
      def expense_params
        params.require(:expense).permit(:title, :amount, :category_id, :date, :start_date, :end_date)
      end
    end
  end
end
