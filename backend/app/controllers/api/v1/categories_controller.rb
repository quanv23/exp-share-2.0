module Api
  module V1
    class Api::V1::CategoriesController < ApplicationController
      # Calls set_category before update and destroy actions
      before_action :set_category, only: [:update, :destroy]

      # GET api/v1/categories
      # Gets all categories
      def index
        @categories = Category.all
        render json: @categories
      end

      # POST api/v1/categories
      # Creates a new category
      def create 
        @category = Category.new(category_params)

        if @category.save
          render json: @category, status: :created
        else
          render json: @category.errors, status: :unprocessable_entity
        end
      end

      # PUT api/v1/categories/:id
      # Updates an existing category by ID
      def update
        if @category.update(category_params)
          render json: @category
        else
          render json: @category.errors, status: :unprocessable_entity
        end
      end

      # DELETE api/v1/categories/:id
      # Deletes a category by ID
      def destroy
        @category.destroy
      end

      private

      def set_category
        @category = Category.find(params[:id])
      end

      def category_params
        params.require(:category).permit(:name, :colour)
      end
    end
  end
end