$(function() {
			$('.slick').slick({
				arrows: true,
				prevArrow: '<div class="prev">＜</div>',
				nextArrow: '<div class="next">＞</div>',
				slidesToShow: 3,
				//        centerMode:true,
				//        variableWidth: true,
				centerPadding: 0,
				dots: true,
				dotsClass: 'slide-dots',
				infinite: true,
				responsive: [{
					breakpoint: 769,
					settings: {
						slidesToShow: 1,
					},
				}]
			});
		});