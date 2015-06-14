/*
 * Big Gym: HYP Project 2014-15
 * pageManager.js
 * Main manager for pages
 * Author: Zerbinati Francesco
 */

// for all <li> elements in menu expect for submenus
$('#menu_nav li:not(#submenu)').on('click', function(){
    // collapse the menu
    slideMenu();
});


// manages click in pages + menu highlighting management
function clickPageLinks() {

    // this event is fired everytime you navigate via a link or when pressing back/forward browser buttons
    window.onpopstate = function() {
        var url = window.location.href;

        // extract the string after #
        var args = url.split('#')[1];

        // get the page (0 in the array of args)
        var page = args.split('&')[0];

        if(page!='') {

            // the element in the header to highlight is a li element that contain as class the "pagename"_page
            var newElm = $('li[class*="'+page+'_page"]');

            // remove class from the previous active menu element
            var prevElm = $('li[class*="active"]');
            prevElm.removeClass('active');

            newElm.addClass('active');

            manager(args);
        }



    };

}

// it manages the content of the main section
function manager(args) {

    // get the actual page name
    var parts = args.split('&');
    var page = parts[0];
    // special is an additional parameter to render the same page in different ways
    // for istance, single_class.html can contains different informations based on
    // different values of special
    var special = parts[1];

    // enable script for calls to external php
    $.getScript('js/ajaxCalls.js', function(){
        // load the page dinamycally inside the template
        $( ".main" ).load(page+'.html', function() {

            //************** SPECIFIC PAGE FUNCTIONS ****************//
            // after loading the whole page we should load the page manager for links inside the main div, this is because
            // the callback function
            switch (page) {
                case 'home':
                    // scripts for "static" content
                    $.getScript('js/staticCalls.js', function() {
                        getInfo('2');
                        getInfo('3');
                        getInfo('4');
                        getInfo('5');
                    });

                    clickPageLinks();

                    break;
                case 'categories':
                    getCategorie(function () { clickPageLinks(); });
                    break;
                case 'classes_al':
                    getCorsi(function () { clickPageLinks(); });
                    break;
                case 'classes_lvl':
                    getCorsiPerLivello(function () { clickPageLinks(); });
                    break;
                case 'classes_cat':
                    getCorsiCat(special,function () { clickPageLinks(); });
                    break;
                case 'single_class':
                    getCorso(special,function () { clickPageLinks(); });
                    break;
                case 'trainers':
                    getIstruttori(function () { clickPageLinks(); });
                    break;
                case 'single_trainer':
                    getIstruttore(special,function () { clickPageLinks(); });
                    $.getScript("js/externalAPIs.js", function() {
                        getTweets();
                    });
                    break;
                case 'pricing':
                    $.getScript("js/externalAPIs.js", function() {
                        facebookInit();
                        facebookPrepare();
                    });
                    break;
                case 'contact':
                    $.getScript("js/externalAPIs.js", function() {
                        initializeMap();
                    });
                    getInfo('6');
                    break;
                default:
                    clickPageLinks();
            }
            //************** END SPECIFIC PAGE FUNCTIONS ***********//

            // scroll to top when loading a new page
            window.scrollTo(0,0);
        });

    });


}
