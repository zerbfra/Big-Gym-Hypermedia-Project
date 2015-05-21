    $('.interactive_link').on('click', function(){

        // get the href attribute of the link
        var href = $(this).attr('href');

        // get the actual page name
        var page = href.substr(1);

        // load the page dinamycally inside the template
        $('.main').load(page+'.html', function() {
            // specific js load for pages
            if(page== 'home')  $('#ca-container').contentcarousel();
        });

    });
