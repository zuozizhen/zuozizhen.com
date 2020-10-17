// Menu

// $().ready(function($) {
//   $(".btn_menu").on('click', function(e) {
//     $(".menu").toggleClass('menu_open');
//     e.preventDefault();
//     $(this).toggleClass('btn_menu--toggled');
//   });
//   $('.toggle_all').on('click', function(e) {
//     e.preventDefault();
//     $('.btn_menu').toggleClass('btn_menu--toggled');
//   });
// });

// // Back Top
// $(document).ready(function() {
//   $('#goToTop').click(function() {
//     $('html,body').animate({
//       scrollTop: 0
//     }, 'slow');
//   });
// });

// // China Time
// $.each($('.js--time'), function() {
//   var timezone  = $(this).data('timezone').toString(),
//       container = $(this);
//       window.setInterval(function() {
//       container.html(moment().tz(timezone).format('LT'))
//     }, 1000);
// });

// $(function(){
//     tabs($("#home_top_tabs a"), $('#home_top_pic .main_pic_z'), $('#home_top_title .top_title'));
// })

// var tabs = function(tab, main_pic_z, top_title){
//     tab.click(function(){
//         var indx = tab.index(this);
//         tab.removeClass('current');
//         $(this).addClass('current');
//         main_pic_z.removeClass('current');
//         main_pic_z.eq(indx).addClass('current');
//         top_title.removeClass('current');
//         top_title.eq(indx).addClass('current');
//     })
// }

// var $grid = $('#instagram').masonry({
//   itemSelector: '#instagram a',
//   columnWidth: '#instagram a',
//   percentPosition: true
// });

// layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry('layout');
// });

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

// $('#instagram').masonry({
//   // options
//   itemSelector: 'a',
//   columnWidth: 200
// });

// external js: masonry.pkgd.js

// jribbble.shots({token: "935c9bc6c35616b09c4214afb1e6ef80f22aa8175e1766881e00c2289ee2911e",page: 1, per_page: 9,}, function(shotsArray) {
//   document.getElementById("dribbble-shots").innerHTML = shotsArray.reduce(function(html, shot) {
//     return html + '<a href="'+  shot.html_url + '" target="_blank"><img src="' + shot.images.hidpi + '"></a>';
//   }, "");
// });

// var galleryFeed = new Instafeed({
//   get: "user",
//   userId: 3253094037,
//   accessToken: "3253094037.1677ed0.1e5cdf00020e4e49b4a78efe66f9941c",
//   resolution: "standard_resolution",
//   useHttp: "true",
//   limit: 9,
//   template: '<div class="grid-item"><a href="{{link}}"><img src="{{image}}" class="img-responsive"></div></a></div>',
//   target: "instafeed-gallery-feed",
//   after: function() {
//     // disable button if no more results to load
//     if (!this.hasNext()) {
//       $btnInstafeedLoad.attr('disabled', 'disabled');
//     }

//     initMasonry();
//   },
// });

// galleryFeed.run();

// var $btnInstafeedLoad = $('#btn-instafeed-load');
// $btnInstafeedLoad.on('click', function() {
//   galleryFeed.next();
//   // initMasonry();
// });


// function initMasonry() {
//   var $grid = $('.grid');

//   $grid.masonry({
//     // use outer width of grid-sizer for columnWidth
//     columnWidth: '.grid-sizer',
//     itemSelector: '.grid-item',
//     percentPosition: true
//   });

//   // layout Masonry after each image loads
//   $grid.imagesLoaded().progress( function() {
//     $grid.masonry('layout');
//   });
// }

// const observer = lozad(); // lazy loads elements with default selector as '.lozad'
// observer.observe();
