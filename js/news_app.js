//$(function () {
//    $('.slick>ul').slick({
//        dots: true,
//        infinite: true,
//        speed: 500,
//        fade: true,
//        cssEase: 'linear',
//        autoplay: true,
//        autoplaySpeed: 3000
//
//    });
//});
$(function(){
	$slider = $('.slideshow>ul');
	
	$slider.slick({
		autoplay: true,
		autoplaySpeed: 2500,
		dots: true, 
        fade: true,
		
		prevArrow: '<a class="slick-prev" href="#"><i data-icon="ei-arrow-left" data-size="m"></i></a>',
    nextArrow: '<a class="slick-next" href="#"><i data-icon="ei-arrow-right" data-size="m"></i></a>',
		
    customPaging: function(slick,index) {
        // スライダーのインデックス番号に対応した画像のsrcを取得
        var targetImage = slick.$slides.eq(index).find('img').attr('src');
        // slick-dots > li　の中に上記で取得した画像を設定
        return '<img src=" ' + targetImage + ' "/>';
    }	
		
	});
});