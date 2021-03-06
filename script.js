// var locationDiv = document.getElementById('current-location');

// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         locationDiv.innerHTML='Geolocation is not supported by this browser.'
//     }
// } 40.576241, -73.981077 key id 71piwn5wzi0gx3ruuloir9mzi key secret 2kag5tnfpwz5rdarhz3b5bmileu0862pajim41sv4zmxelh9zt

// function showPosition(position){
//     locationDiv.innerHTML = "Latitude: " + position.coords.latitude + '<br>Logitude: '+ position.coords.longitude;
// } 40.709844, -74.008025

var entryArr=[];
fetch('https://data.ny.gov/resource/i9wp-a4ja.json?$limit=2000')
    .then(response=>{
        return response.json()
    })
    .then((data)=>{
        for(var i=0; i<data.length; i++){
            if(data[i].entrance_type=="Elevator"){
                entryArr.push(data[i]);
            }
        }
        console.log(entryArr[0].entrance_latitude, entryArr[0].entrance_longitude);
    })
    .catch(err=>{
        console.log(err);
    })

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.709844, lng: -74.008025},
        zoom: 10
    });

    setMarkers(map);
}

function setMarkers(map){
    for(var i=0; i<entryArr.length; i++){
        var entry = entryArr[i];
        console.log(parseFloat(entry.entrance_latitude), parseFloat(entry.entrance_longitude));
        var marker = new google.maps.Marker({
            position: {lat: parseFloat(entry.entrance_latitude), lng: parseFloat(entry.entrance_longitude)},
            map: map
        })
    }
}
