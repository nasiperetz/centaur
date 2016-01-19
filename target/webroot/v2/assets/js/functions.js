;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		// slider intro
		var $sliderIntro = $('.slider-intro');
		var $sliderIntroSlides = $sliderIntro.find('.slides');
		$sliderIntroSlides.owlCarousel({
			items: 1,
			loop: true,
			mouseDrag: false
		});

		$sliderIntro.find('.slider-prev').on('click', function(event){
			event.preventDefault();

			$sliderIntroSlides.trigger('prev.owl.carousel');
		});

		$sliderIntro.find('.slider-next').on('click', function(event){
			event.preventDefault();

			$sliderIntroSlides.trigger('next.owl.carousel');
		});

		// grid
		initWall();

		// mobile menu
		$('.mobile-menu-btn').on('click', function (event) {
			event.preventDefault();
			
			$(this).toggleClass('active');  

			$('.mobile-menu').toggleClass('visible');

			$('.wrapper').toggleClass('mobile-menu-open');

		});

		// nav user dropdown
		$('.nav-user .has-dropdown > a').on('click', function(event){
			event.preventDefault();

			$(this).parent().toggleClass('open');

			$('.wrapper').toggleClass('nav-user-open');
		});

		$('.nav-user-overlay').on('click', function(){
			$('.wrapper').removeClass('nav-user-open');
			$('.nav-user .open').removeClass('open');
		});

		$('.mobile-menu-overlay').on('click', function(){
			$('.wrapper').removeClass('mobile-menu-open');
			$('.mobile-menu').removeClass('visible');
		})
	});

	function initWall() {
		var $wallOuter = $('.grid-outer');
		var $wall = $wallOuter.find('.grid');

		$win.on('resize', resizeContainer);

		function resizeContainer() {
			$wallOuter.width('auto').width(Math.ceil($wallOuter.width() / 5) * 5);
		};

		resizeContainer();

		$wall.isotope({
			filter: '.family',
			masonry: {
				columnWidth: 1
			}
		});

		$('.filter-buttons').on('click', 'a', function(event){
			event.preventDefault();

			var filterValue = $(this).data('filter');

			$wall.isotope({
				filter: filterValue
			});

			$(this).parent().addClass('current').siblings().removeClass('current');
		});
	};
})(jQuery, window, document);
