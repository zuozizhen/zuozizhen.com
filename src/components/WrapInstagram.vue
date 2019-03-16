<template lang='pug'>
  section.section_full.ins
    .content
      .section_title Instagram
      #instafeed-gallery-feed.grid
        .grid-sizer
      a.view_more(href='https://www.instagram.com/zuozizhen', target='_blank')
        span View more in Instagram
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  export default {
  }
  var galleryFeed = new Instafeed({
  get: "user",
  userId: 3253094037,
  accessToken: "3253094037.1677ed0.8b08678d71d14703994ed3e7a9c2497a",
  resolution: "standard_resolution",
  useHttp: "true",
  limit: 20,
  template: '<div class="grid-item"><a href="{{link}}"><img src="{{image}}" class="img-responsive"></div></a></div>',
  target: "instafeed-gallery-feed",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      $btnInstafeedLoad.attr('disabled', 'disabled');
    }

    initMasonry();
  },
});

galleryFeed.run();

var $btnInstafeedLoad = $('#btn-instafeed-load');
$btnInstafeedLoad.on('click', function() {
  galleryFeed.next();
  // initMasonry();
});


function initMasonry() {
  var $grid = $('.grid');

  $grid.masonry({
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true
  });

  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
}
</script>

<style lang='stylus' scoped>
</style>
