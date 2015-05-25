// for all <li> elements in menu expect for submenus
$('#menu_nav li:not(#submenu)').on('click', function(){
    // remove the css to the previous selected, add to the new one
    $('.active').removeClass('active');
    $(this).addClass('active');

    // collapse the menu
    slideMenu();

    // get the href attribute of the link
    var href = $(this).children().attr('href');
    // manage the page, loading what you want inside the main div
    manager(href);

});


// for all links in main pages
function clickPageLinks() {
    $('.interactive_link').on('click', function(){

        // get the href attribute of the link
        var href = $(this).attr('href');
        // manage the page, loading what you want inside the main div
        manager(href);

    });
}


function manager(href) {

    // get the actual page name
    var params = href.substr(1);
    var parts = params.split('&');
    var page = parts[0];
    // special is an additional parameter to render the same page in different ways
    // for istance, single_class.html can contains different informations based on
    // different values of special
    var special = parts[1];

    // enable script for calls to external php
    $.getScript('js/ajaxCalls.js');

    // load the page dinamycally inside the template
    $( ".main" ).load(page+'.html', function() {

        //************** SPECIFIC PAGE FUNCTIONS ****************//
        // after loading the whole page we should load the page manager for links inside the main div, this is because
        // the callback function
        switch (page) {
            case 'home':
                $('#ca-container').contentcarousel(); // carousel
                break;
            case 'categories':
                getCategorie(function () { clickPageLinks(); });
                break;
            case 'classes_al':
                getCorsi(function () { clickPageLinks(); });
                break;
            case 'single_class':
                getCorso(special,function () { clickPageLinks(); });
                break;
            default:
                clickPageLinks();
        }
        //************** END SPECIFIC PAGE FUNCTIONS ***********//




        });
        }
