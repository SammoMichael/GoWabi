var map;
var infowindow;
var searchwords = "spa + barbershop + nail";

// Initiate Map
function initMap() {
    var nyc = {lat: 40.730610, lng: -73.935242};


    map = new google.maps.Map(document.getElementById('map'), {
        center: nyc,
        // zoom: 13,
        styles: [{
            stylers: [{ visibility: 'simplified' }]
        }, {
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
        }]
    });

    infowindow = new google.maps.InfoWindow();

    var populationOptions = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.1,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.075,
        map,
        center: nyc,
        radius: 20000
    };
    // Add the circle for this city to the map.
    cityCircle = new google.maps.Circle(populationOptions);

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: nyc,
        radius: 20000,
        keyword: searchwords
    }, callback);
}

var agencies = [];

function callback(results, status) {
    console.log(results.length);
    console.log(results);
    results.forEach(el => {
        console.log(el);
        var {name, vicinity, types, website } = el;
        var lat = el.geometry.location.lat();
        var lng = el.geometry.location.lng();
        var description = types.join();
        $.ajax({
            method: 'POST',
            url: '/api/locations',
            data: {
                location: {
                    name,
                    description,
                    website_url: website,
                    img_url: "https://google.com",
                    address: vicinity,
                    type: types[0],
                    lat,
                    lng
                }
            }
        });
    });
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {

            //Using setTimeout and closure because limit of 10 queries /second for getDetails */
            (function (j) {
                var request = {
                    placeId: results[i]['place_id']
                };

                service = new google.maps.places.PlacesService(map);
                setTimeout(function() {
                    service.getDetails(request, callback);
                }, j*1000);


            })(i);

            function callback(place, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    createMarker(place);
                    console.log(place.name +  results.length + agencies.length);
                    agencies.push([place.name, place.website, place.rating]);
                    window.results = results
                    
                    if(results.length === agencies.length){
                        console.log(agencies);
                        agencies.forEach(agency => {
                            debugger;
                            
                            var location = { id: agency.id,
                                 name: agency.name,
                                //  lat: agency.geometry.location.lat,
                                //   lng: agency.geometry.location.lng,
                                //   type: agency.types[0]
                            };

                            console.log(location)
                            // var request = new XMLHttpRequest();
                            // request.open('POST', 'http://localhost/3000/api/locations', true);
                            // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                            // request.send(JSON.stringify(agency));
                        });
                    }
                }
            }
        }
    }
}

function createMarker(place) {
    var photos = place.photos;
    if (!photos) {
        return;
    }
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
        icon: photos[0].getUrl({'maxWidth': 50, 'maxHeight': 50})
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name + " : " + place.website);
        infowindow.open(map, this);
    });
}
