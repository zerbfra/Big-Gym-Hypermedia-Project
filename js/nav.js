
var ww = document.body.clientWidth;

$(".nav").css("display", "none");

$(".nav li a").each(function() {
    if ($(this).next().length > 0) {
        $(this).addClass("parent");
    };
})

$(".toggleMenu").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".nav").slideToggle();
});

responsiveMenu();

function slideMenu() {
    $(".nav").slideToggle();
}

function responsiveMenu () {
	if (ww < 768) {
		$(".toggleMenu").css("display", "inline-block");


		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	}
	else if (ww >= 768) {
		$(".toggleMenu").css("display", "none");
		$(".nav").show();
		$(".nav li").removeClass("hover");
		$(".nav li a").unbind('click');
		$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});
	}
}

