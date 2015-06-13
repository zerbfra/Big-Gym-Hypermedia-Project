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

/* Twitter API */
function getTweets(){

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://zerbinatifrancesco.it/hypermedia/php/getTwitter.php", //Relative or absolute path to file.php file
        success: function(response) {

            var tweets=JSON.parse(response);
            var el='<ul class="recent-list"><h4>Twitter</h4>';
            for(var i=0;i<tweets.length;i++){

                el+='<li>'+tweets[i]+'</li>';

            }
            el+='</ul>';
            $("#twitter_feed").html(el);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}


/* Facebook API */
function facebookInit() {
    if (typeof FB == 'undefined') {
        console.log('Loading Facebook API...');
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
    } else console.log('Facebook API already loaded');
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

/* Send Mail */
function sendMail() {

    post_data = {
        nome    : $('#nome').val(),
        email  : $('#email').val(),
        oggetto : $('#oggetto').val(),
        testo   : $('#testo').val(),
    };

    console.log(post_data);
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://zerbinatifrancesco.it/hypermedia/php/sendMail.php",
        data: post_data,
        success: function(response) {
            var message=JSON.parse(response);
            alert(message.text);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });


}
