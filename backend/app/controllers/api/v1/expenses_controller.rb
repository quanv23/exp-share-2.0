module Api
  module V1
    class Api::V1::ExpensesController < ApplicationController 

      # Calls set_expense before update and destroy actions
      before_action :set_expense, only: [:update, :destroy]

      def index
        @expenses = Expense.all
        render json: @expenses
      end

      def create
        # Creates a new expense with the provided parameters
        @expense = Expense.new(expense_params)

        # Attempts to save the expense and returns whether it was successful
        if @expense.save
          render json: @expense, status: :created
        else
          render json: @expense.errors, status: :unprocessable_entity
        end
      end

      def update
        # Updates the expense with the provided parameters and returns whether it was successful
        if @expense.update(expense_params)
          render json: @expense
        else
          render json: @expense.errors, status: :unprocessable_entity
        end

      end

      def destroy
        # Deletes the expense by id
        @expense.destroy
      end

      def date
        # Retrieves expenses within a specified date range
        start_date = params[:start_date]
        end_date = params[:end_date]

        @expenses = Expense.where(date: start_date..end_date)
        render json: @expenses
      end

      def category
        # Retrieves expenses matching a specific category_id
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
