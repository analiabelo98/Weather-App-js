
//location function
window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
                console.log(position);

                long = position.coords.longitude;
                lat = position.coords.latitude;

                const proxy = 'http://cors-anywhere.herokuapp.com/';
                const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4b5bb6ce51cd3d772f2ed94399fc5a88`;
            
            //get info
            fetch(api)
            //convert to JASON
               .then(response => {
                   return response.json();
                })
                .then(data => {
                    console.log(data);
                });
        });
    }else {
        h1.textContent = "Hey this in not working!";
    }
});

