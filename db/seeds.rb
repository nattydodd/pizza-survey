# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 10.times { Response.create!(name: "Test") }

# Question.create(question: 'this is a question', answer: 'this is an answer', style: 'this is a multiple choice', response_id: 1)

Answers = Question.create([{ question: 'this is a question', answer: 'this is an answer', style: 'this is a multiple choice', response_id: 2}, {question: 'this is a question', answer: 'this is an answer', style: 'this is a multiple choice', response_id: 2}])
