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
    var page = href.substr(1);

    // enable script for calls to external php
    $.getScript('js/ajaxCalls.js');

    // load the page dinamycally inside the template
    $( ".main" ).load(page+'.html', function() {

        // after loading the page we should load the page manager for links inside the main div
        clickPageLinks();

        //************** SPECIFIC PAGE FUNCTIONS ****************//
        // HOME PAGE
        if(page== 'home')  $('#ca-container').contentcarousel(); // carousel
        // COURSE CATEGORIES
        if(page== 'categories') getCategorie(); // load categorie

    });
}
