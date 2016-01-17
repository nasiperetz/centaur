;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		$('.dropdown-trigger').on('click', function(event) {
			event.preventDefault();

			$('.nav-access').toggleClass('open');

		});

		var $listing = $('.items');

		$win.on('load resize', function() {
			$listing.isotope({
				masonry: {
					columnWidth: 1
				}
			});
		}).trigger('resize');

		var navMenu 	= 'nav-mobile-open';
		var navAccess 	= 'nav-access-open';

		$('.btn-account').on('click', function(event) {
			event.preventDefault();

			$('.wrapper').removeClass(navMenu).toggleClass(navAccess);
		});

		$('.btn-menu').on('click', function(event) {
			event.preventDefault();

			$('.wrapper').removeClass(navAccess).toggleClass(navMenu);
		});

		// Custom Select
		$(".select").simpleselect({
			fadingDuration: 100,
			displayContainerInside: "document"
		});
	});
})(jQuery, window, document);
