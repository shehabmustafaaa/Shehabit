/* global $ */
$(function () {
	// Navbar - Add Class Active


	$('.navbar-nav li a').click(function(e) {
		e.preventDefault();
		$(this)
		.addClass('active')
		.parent()
		.siblings()
		.find('a')
		.removeClass('active');
		$('html,body').animate({
			scrollTop:$('#' + $(this).data('scroll') ).offset().top -60
		},1000)
	});
	

	$('.tabs .tabs-links a').on('click', function (e) {
		var currentAttrValue = $(this).attr('href');

		// Show/Hide Tabs
		// Show/Hide Tabs
		$('.tabs ' + currentAttrValue).siblings().slideUp(400);
		$('.tabs ' + currentAttrValue).delay(400).slideDown(400);

		// Change/remove current tab to active
		$(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});


	$(window).scroll(function () {
		// [5,6] Sync Navbar Links with sections
		$('.block').each(function () {

			if ($(window).scrollTop() > $(this).offset().top -61)  {

				var blockID = $(this).attr('id');

				$('.navbar a').removeClass('active');

				$('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');
			}
		});
	});

});



$(window).on('load', function () {
	$('.loading-overlay .spinner').delay(600).fadeOut(400, function () {
		$(this)
			.parent()
			.fadeOut(500, function () {
				$(this).remove();
			});
	});


});
// $('body').niceScroll({
// 	cursorcolor: "#ff8b38",
// 	cursorwidth: "10px",
// 	cursorborder: "1px solid #ff8b38",
// 	cursorborderradius: "1px",
// 	zindex: 9999
// });