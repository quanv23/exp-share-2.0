module Api
  module V1
    class Api::V1::NotesController < ApplicationController 
      # Calls set_note before update and destroy actions
      before_action :set_note, only: [:update, :destroy]

      # GET api/v1/notes
      # Gets all notes 
      def index
        @notes = Note.all
        render json: @notes
      end

      # POST api/v1/notes
      # Creates a new note
      def create
        @note = Note.new(note_params)

        if @note.save
          render json: @note, status: :created
        else
          render json: @note.errors, status: :unprocessable_entity
        end
      end

      # PUT api/v1/notes/:id
      # Updates an existing note by ID
      def update
        if @note.update(note_params)
          render json: @note
        else
          render json: @note.errors, status: :unprocessable_entity
        end
      end

      # DELETE api/v1/notes/:id
      # Deletes a note by ID
      def destroy
        @note.destroy
      end

      private

      def set_note
        @note = Note.find(params[:id])
      end

      # Strong parameters for category creation
      def note_params
        params.require(:note).permit(:title, :description)
      end

    end
  end
end