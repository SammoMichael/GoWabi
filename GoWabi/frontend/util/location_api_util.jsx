export const fetchLocations = data => (
  $.ajax({
    method: 'GET',
    url: 'api/locations',
    data
  })
);

export const fetchLocation = id => (
  $.ajax({
    method: 'GET',
    url: `api/locations/${id}`
  })
);

export const createLocation = location => (
  $.ajax({
    method: 'POST',
    url: 'api/locations',
    data: { location }
  })
);

