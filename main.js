$(function () {
    $('.acTitle').on('click', function () {
    $(this).next().slideToggle();
  });
});


$(window).scroll(function () {
  var height = $(window).height();
  if ($(window).scrollTop() > height) {
    $('#header').addClass('view');
  } else {
    $('#header').removeClass('inview');
  }
});
