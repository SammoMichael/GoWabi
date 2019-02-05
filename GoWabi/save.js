// var request = new XMLHttpRequest();
// request.open('POST', 'http://localhost/3000/api/locations', true);
// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
// // request.send(JSON.stringify(agency));
// request.send(JSON.stringify({
    // name: "spa",
    // description: "good",
    // website_url: "https://google.com",
    // img_url: "https://google.com",
    // address: "388 Birch St",
    // type: "spa",
    // lat: 13123.123123,
    // lng: 234234.234234
// }));
    
        $.ajax({
            method: 'POST',
            url: 'api/locations',
            data: {
                location: {
                    name: "spa",
                        description: "good",
                        website_url: "https://google.com",
                        img_url: "https://google.com",
                        address: "388 Birch St",
                        type: "spa",
                        lat: 13123.123123,
                        lng: 234234.234234
                }
            }
        });

    // createLocation({ location: {
    //      name: "spa",
    //         description: "good",
    //         website_url: "https://google.com",
    //         img_url: "https://google.com",
    //         address: "388 Birch St",
    //         type: "spa",
    //         lat: 13123.123123,
    //         lng: 234234.234234
    //     }
    // });


// formatted_address, geometry, icon, id, name,
//  permanently_closed, photos, place_id, plus_code, scope, types
//t.string :name
// t.text: description
// t.string: website_url
// t.string: img_url


// t.string: address
// t.string: type
// t.float: lat
// t.float: lng
