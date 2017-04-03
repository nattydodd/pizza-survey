class Api::V1::ResponsesController < Api::V1::BaseController
  def index
    respond_with Response.all
  end

  def show
    response = Response.find(params["id"])
    respond_with response, json: response
  end

  def create
    respond_with :api, :v1, Response.create(response_params)
  end

  def destroy
    respond_with Response.destroy(params[:id])
  end

  def update
    response = Reponse.find(params["id"])
    response.update_attributes(response_params)
    respond_with response, json: response
  end

  private

  def response_params
    params.permit(:name)
  end
end
