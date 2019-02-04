class Api::LocationsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    locations = bounds ? Location.in_bounds(bounds) : Location.all
    @locations = locations
    render :index
  end

  def show
    @location = Location.find(params[:id])
  end

  def create
    @location = Location.create!(location_params)
    render :show
  end

  private

  def location_params
    params.require(:location).permit(
      :lat,
      :lng,
      :description,
      :img_url
      :website_url
      :name
      :address 
      :type
    )
  end

  def bounds
    params[:bounds]
  end

end
