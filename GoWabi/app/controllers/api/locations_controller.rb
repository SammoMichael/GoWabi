class Api::LocationsController < ApplicationController
  # protect_from_forgery with: :null_session
  # before_action :require_logged_in, only: [:create]
  
  def index
    locations = bounds ? Location.in_bounds(bounds) : Location.all
    @locations = locations
    render :index
  end

  def show
    @location = Location.find(params[:id])
  end

  def create
    @location = Location.create(location_params)
     render json: {notice: notice, status: 200}
  end

  private

  def location_params
    params.require(:location).permit(
      :lat,
      :lng,
      :description,
      :img_url,
      :website_url,
      :name,
      :address, 
      :category,
    )
  end

  def bounds
    params[:bounds]
  end

end
