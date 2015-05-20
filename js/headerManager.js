    $('#menu_nav li').on('click', function(){
        // remove the css to the previous selected, add to the new one
        $('.active').removeClass('active');
        $(this).addClass('active');

        // get the href attribute of the link
        var href = $(this).children().attr('href');

        // get the actual page name
        var page = href.substr(1);

        // load the page dinamycally inside the template
        $( ".main" ).load(page+'.html', function() {
            // specific js load for pages
            if(page== 'home')  $('#ca-container').contentcarousel();
        });

    });
