
// 好きなヘッダーを選んでね
var startPos = 0,　winScrollTop = 0;
var hideclass = "hide";
$(window).on('scroll', function () {
  winScrollTop = $(this).scrollTop();
  if (winScrollTop >= startPos) {
    $('.header').addClass(hideclass);
  } else {
    $('.header').removeClass(hideclass);
  }
  startPos = winScrollTop;
});
