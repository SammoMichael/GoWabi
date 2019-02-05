@benches.each do |locaton|
  json.set! location.id do
    json.partial! 'location', location: location
  end
end
