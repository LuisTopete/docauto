class Api::WarrantiesController < ApplicationController
  before_action :set_warranties, only: [:show, :update, :destroy]

  def index
    render json: Warranties.all
  end

  def show
    render json: @Warranties
  end

  def create
    @warranties = Warranties.new(warranties_params)
    if @warranties.save 
      render json: @warranties
    else
      render json: { errors: @warranties.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @warranties.update(warranties_params)
      render json: @warranties
    else
      render json: { errors: @warranties.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @warranties.destroy
    render json: { message: 'Warranties Deleted'}
  end

  private 
    def set_warranties
      @warranties = Warranties.find(params[:id])
    end

    def warranties_params
      params.require(:warranties).permit(:dname:, wtype:, exdate:, :solved)
    end
end