/*
 * Big Gym: HYP Project 2014-15
 * statiCalls.js
 * Set of functions to retrieve data from database fetched via php (static data)
 * Author: Zerbinati Francesco
 */

function getInfo(info) {

        $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://zerbinatifrancesco.it/hypermedia/php/getInfo.php", //Relative or absolute path to file.php file
        data: {id:info},
        success: function(response) {
            var json=JSON.parse(response);
            var content = '';
            $.each(json[0], function(key, value){
                content += value;
            });

            // based on id I will fill the related divs
            switch(info) {
                case '1':
                    $("#info").html(content);
                break;
                case '2':
                    $("#home1").html(content);
                break;
                case '3':
                    $("#home2").html(content);
                break;
                case '4':
                    $("#promo").html(content);
                break;
                case '5':
                    $("#partners").html(content);
                break;
                case '6':
                    $("#inform").html(content);
                break;

            }

        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}
