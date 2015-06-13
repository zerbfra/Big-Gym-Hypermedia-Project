/* Google Maps API */

function initializeMap() {
    var myLatlng = new google.maps.LatLng(45.4773533,9.2343561);
    var mapOptions = {
        zoom: 15,
        scrollwheel: false,
        center: myLatlng,
        disableDefaultUI: true
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Palestra Big Gym'
    });
}

/* Facebook API */

function facebookInit() {
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '489456924544138',
            xfbml      : true,
            version    : 'v2.3'
        });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

}

function facebookPrepare() {

    $('#facebookPop').click( function() {
        FB.ui(
            {
                method: 'feed',
                name: 'Big Gym',
                link: 'http://zerbinatifrancesco.it/hypermedia',
                picture: 'http://www.zerbinatifrancesco.it/hypermedia/images/icon.png',
                caption: 'La miglior palestra italiana',
                description: 'Crediamo che il fitness debba essere accessibile a chiunque. Scopri subito il giorno di prova!'
            },
            function(response) {
                if (response && response.post_id) {
                    $("#facebookBtn").html('<a class="popup-with-zoom-anim" href="mailto:provagratuita@big-gym.com"><li class="price_but">Iscriviti</li></a>');
                } else {
                    alert('Devi pubblicare il post per aderire all\'offerta');
                }
            }
        );
    });


}
