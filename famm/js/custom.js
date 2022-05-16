

// client section owl carousel
// $(".client_owl-carousel").owlCarousel({
//     loop: true,
//     margin: 0,
//     dots: false,
//     nav: true,
//     navText: [],
//     autoplay: true,
//     autoplayHoverPause: true,
//     navText: [
//         '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//         '<i class="fa fa-angle-right" aria-hidden="true"></i>'
//     ],
//     responsive: {
//         0: {
//             items: 1
//         },
//         768: {
//             items: 2
//         },
//         1000: {
//             items: 2
//         }
//     }
// });
console.clear();


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

let addbtn=document.querySelectorAll(".option1");

addbtn.forEach(btn => {
    btn.addEventListener('click',function(){
        let imgSrc=this.parentElement.parentElement.nextElementSibling.children[0].src;
        let proName=this.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].innerText;
        let proPrice=this.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1].innerText.substring(1);
        let proId=this.parentElement.parentElement.parentElement.dataset.id;
        console.log(imgSrc,proName,proPrice,proId);
    })
});