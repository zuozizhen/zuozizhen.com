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

$(function(){
    tabs($("#home_top_tabs a"), $('#home_top_pic .main_pic_z'), $('#home_top_title .top_title'));
})

var tabs = function(tab, main_pic_z, top_title){
    tab.click(function(){
        var indx = tab.index(this);
        tab.removeClass('current');
        $(this).addClass('current');
        main_pic_z.removeClass('current');
        main_pic_z.eq(indx).addClass('current');
        top_title.removeClass('current');
        top_title.eq(indx).addClass('current');
    })
}

// // About Swich
// $().ready(function($) {
//   $(".about_swich_en").on('click', function() {
//     $(".about_cn").removeClass('active');
//     $(".about_en").addClass('active');
//   });
//   $('.about_swich_cn').on('click', function() {
//     $(".about_en").removeClass('active');
//     $(".about_cn").addClass('active');
//   });
// });
