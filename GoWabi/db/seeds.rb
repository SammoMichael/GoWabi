# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 100.times do
#   User.create full_name: Faker::StarWars.character,
#                   email: Faker::Internet.unique.email,
#                   gender: (rand > 0.5 ? 'male' : 'female'),
#                   salary: Faker::Number.between(1, 5000)
# end

# User.create!(
#   username: 'guest',
#   password: 'password'
# )

Location.create!(
  name: 'red door',
  category: 'spa',
  description: 'good',
  website_url: "https://google.com",
  img_url: "https://google.com",
            address: "388 Birch St",
                  lat: 13123.123123,
                  lng: 234234.234234

)