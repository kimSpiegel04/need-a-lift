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

fetch('https://data.ny.gov/resource/i9wp-a4ja.json?$limit=2000')
    .then(response=>{
        return response.json()
    })
    .then((data)=>{
        var arr=[];
        for(var i=0; i<data.length; i++){
            if(data[i].entrance_type=="Elevator"){
                console.log(data[i]);
                arr.push(data[i]);
            }
        }
        console.log(arr.length);
    })
    .catch(err=>{
        console.log(err);
    })