var locationDiv = document.getElementById('current-location');

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        locationDiv.innerHTML='Geolocation is not supported by this browser.'
    }
}

function showPosition(position){
    locationDiv.innerHTML = "Latitude: " + position.coords.latitude + '<br>Logitude: '+ position.coords.longitude;
}