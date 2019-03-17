<template lang='pug'>
  nav.top_nav
    router-link.nav_link(to='/') Home
    router-link.nav_link(to='/work') Work
    router-link.nav_link(to='/work') Blog
    router-link.nav_link(to='/work') About
    .logo_z.right(href='/')
      i

</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
export default {

}
$(document).ready(function(){
    var senseSpeed = 20;
    var previousScroll = 0;
    $(window).scroll(function(){
      var scroller = $(this).scrollTop();
      if (scroller-senseSpeed > previousScroll){
          $('.top_nav').removeClass('nav-down').addClass('nav-up');
      } else if (scroller+senseSpeed < previousScroll) {
          $('.top_nav').removeClass('nav-up').addClass('nav-down');
      }
      previousScroll = scroller;
    });
  });

</script>

<style lang='stylus' scoped>
</style>
