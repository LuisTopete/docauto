class Api::VProblemsController < ApplicationController
  before_action :set_vproblem, only: [:show, :update, :destroy]

  def index
    render json: VProblem.all
  end

  def show
    render json: @vproblem
  end

  def create
    @vproblem = VProblem.new(vproblem_params)
    if @vproblem.save 
      render json: @vproblem 
    else
      render json: { errors: @vproblem.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @vproblem.update(vproblem_params)
      render json: @vproblem 
    else
      render json: { errors: @vproblem.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @vproblem.destroy
    render json: { message: 'VehicleProblem Deleted'}
  end

  private 
    def set_vproblem
      @vproblem = VProblem.find(params[:id])
    end

    def vproblem_params
      params.require(:vproblem).permit(:datetime, :img, :aproblem, :solved)
    end
end
