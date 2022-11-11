$(function () {
	$('.content_menu_icon').click(function () {
		$(this).parent().parent().siblings('.click_menu').css("opacity", "1")
		$(this).parent().parent().siblings('.click_menu').children('div').children('ul').slideDown();

		$('.close_menu_icon').show()
		$(this).hide()
	})

	$('.close_menu_icon').click(function () {
		
		$(this).parent().parent().css("opacity", "0")
		$(this).siblings('ul').slideUp()
		$(this).parent().parent().siblings('.content_inner').children().children('i').show()
		
		setTimeout(function () {
			$(this).hide()
		},300)
	})

	$(document).scroll(function () {
            var height = $(window).scrollTop();
            if (height > 150) {
                $('.tech_header').css("top","0")
            } else if (height <= 150) {
               $('.tech_header').css("top","-60px")
            }
        });


})