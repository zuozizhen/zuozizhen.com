// Menu

$().ready(function($) {
  $(".btn_menu").on('click', function(e) {
    $(".menu").toggleClass('menu_open');
    e.preventDefault();
    $(this).toggleClass('btn_menu--toggled');
  });
  $('.toggle_all').on('click', function(e) {
    e.preventDefault();
    $('.btn_menu').toggleClass('btn_menu--toggled');
  });
});

// Fullpage
$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['Main Page', 'About', 'Case_1', 'Case_2', 'Case_3', 'Blog', 'Story', 'Contact'],
    menu: '#menu',
    scrollingSpeed: 600,
    navigation: true,
    navigationPosition: 'right',
  });
});

// Back Top
$(document).ready(function() {
  $('#goToTop').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 'slow');
  });
});

// China Time
$.each($('.js--time'), function() {
  var timezone  = $(this).data('timezone').toString(),
      container = $(this);
      window.setInterval(function() {
      container.html(moment().tz(timezone).format('LT'))
    }, 1000);
});

// About Swich
$().ready(function($) {
  $(".about_swich_en").on('click', function() {
    $(".about_cn").removeClass('active');
    $(".about_en").addClass('active');
  });
  $('.about_swich_cn').on('click', function() {
    $(".about_en").removeClass('active');
    $(".about_cn").addClass('active');
  });
});

mediumZoom(document.images)
