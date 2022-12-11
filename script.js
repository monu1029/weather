
function loadCoupon(){
    document.getElementById('main-coupon').style.visibility = 'visible';
    document.getElementById('main-flipkart-1').style.opacity= '0.7';

}
function closeCoupon(){
    document.getElementById('main-coupon').style.visibility = 'hidden';
    document.getElementById('main-flipkart-1').style.opacity= '1';

}




// Instantiate the Bootstrap carousel
// $('.multi-item-carousel').carousel({
//     interval: false
//     });
//     // for every slide in carousel, copy the next slide's item in the slide.
//     // Do the same for the next, next item.
//     $('.multi-item-carousel .item').each(function(){
//     var next = $(this).next();
//     if (!next.length) {
//     next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
//     if (next.next().length>0) {
//     next.next().children(':first-child').clone().appendTo($(this));
//     } else {
//     $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//     }
//     });

const ChangeMode =() =>{
    let mybody = document.body;
    mybody.classList.toggle('light-dark')
}

// let x = document.getElementById('out')
// let Weather = document.getElementById('Weather')

// function geolocation(){
//          if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition(showPosition)
//          }else{
//             x.innerText = " Geo not working properly"
//          }
// }

// function showPosition(data){
//     console.log(data)

//     let lat = data.coords.latitude;
//     let lon = data.coords.longitude;

//     let out = `latitude is ${lat} and longitude id ${lon}`;

//     x.innerText = out


// const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=29.6878495&lon=76.95812849999999&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

// fetch (url ,{method: 'Get'})

// .then((res) => res.json())

// .then((data)=>{
//     console.log(data)

//     let city = data.city.name
//     let temp =data.list[0].temp.day

//     Weather.innerText = ` your city name is ${city} and temp is ${temp}`




// })

    