class Api::V1::QuestionsController < Api::V1::BaseController
  def index
    answers = Question.where(:response_id => params[:response_id])
    respond_with answers, json: answers
  end

  def show
    question = Question.find(params["id"])
    respond_with question, json: question
  end


  def create
    question = Question.create(question_params)
    respond_with :api, :v1, :responses, :response_id, json: question 
  end

  def destroy
    respond_with Question.destroy(params[:id])
  end

  def update
    question = Question.find(params["id"])
    question.update_attributes(question_params)
    respond_with question, json: question
  end

  private

  def question_params
    params.permit(:response_id, :question, :answer, :style)
  end
end
