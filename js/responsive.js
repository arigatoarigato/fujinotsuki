
let elmBody = document.getElementsByTagName('body')[0];

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

