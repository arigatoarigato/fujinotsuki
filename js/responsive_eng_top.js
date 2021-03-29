let elmBody = document.getElementsByTagName('body')[0];
let navDiv = document.createElement('div');
navDiv.id = 'navArea';

navDiv.innerHTML = '<nav class="typeB"><div class="inner"><ul><li class="map"><a href="map.html"><img src="image/00base/nav_icon_map_colorful_eng.svg"></a></li><li class="spot"><a href="guide.html"><img src="image/00base/nav_icon_kankou_colorful_eng.svg"></a></li><li class="tokusan"><a href="tokusan.html"><img src="image/00base/nav_icon_tokusann_colorful_eng.svg"></a></li><li class="shop"><a href="shop.html"><img src="image/00base/nav_icon_shop_colorful_eng.svg"></a></li></ul><p class="langage2"><a href="#">日本語</a></p><p><a href="site.html">Site map</a></p><p><a href="privacy.html">Privacy policy</a></p><p><a href="terms.html">Terms of use</a></p><p><a href="about.html">About Fujinotsuki</a></p></div></nav><div id="mask"></div>';

elmBody.insertBefore(navDiv, header);

let headerElm = document.getElementById('header');
let btnDiv = document.createElement('div');
btnDiv.classList.add('toggle_btn');
btnDiv.innerHTML = '<span></span><span></span><span></span>';

headerElm.insertBefore(btnDiv, null);

$(function ($) {
  var $nav = $('#navArea');
  var $btn = $('.toggle_btn');
  var $mask = $('#mask');
  var open = 'open'; // class
  // menu open close
  $btn.on('click', function () {
    if (!$nav.hasClass(open)) {
      $btn.addClass(open);
      $nav.addClass(open);
      elmBody.classList.add('scroll_stop');
    } else {
      $btn.removeClass(open);
      $nav.removeClass(open);
      elmBody.classList.remove('scroll_stop');
    }
  });
  // mask close
  $mask.on('click', function () {
    $btn.removeClass(open);
    $nav.removeClass(open);
    elmBody.classList.remove('scroll_stop');
  });
})(jQuery);

   $(function($) {
      var $nav = $('#navArea nav');
      var $btnA = $('#nav_test_btn .typeA');
      var $btnB = $('#nav_test_btn .typeB');
      var $btnC = $('#nav_test_btn .typeC');
      var typeA = 'typeA';
      var typeB = 'typeB';
      var typeC = 'typeC';
      $btnA.on('click', function() {
        $nav.addClass(typeA);
        $nav.removeClass(typeB);
        $nav.removeClass(typeC);
      });
      $btnB.on('click', function() {
        $nav.removeClass(typeA);
        $nav.addClass(typeB);
        $nav.removeClass(typeC);
      });
      $btnC.on('click', function() {
        $nav.removeClass(typeA);
        $nav.removeClass(typeB);
        $nav.addClass(typeC);
      });
    })(jQuery);

