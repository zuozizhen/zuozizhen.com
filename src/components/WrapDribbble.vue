<template lang='pug'>
  section.section_full.dribbble
    .content
      #dribbble-shots
      a.view_more(href='https://dribbble.com/zuonx', target='_blank')
        span View more in Dribbble
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  export default {
  }
  jribbble.shots({token: "935c9bc6c35616b09c4214afb1e6ef80f22aa8175e1766881e00c2289ee2911e",page: 1, per_page: 9,}, function(shotsArray) {
      document.getElementById("dribbble-shots").innerHTML = shotsArray.reduce(function(html, shot) {
        return html + '<a href="'+  shot.html_url + '" target="_blank"><img src="' + shot.images.hidpi + '"></a>';
      }, "");
    });
</script>

<style lang='stylus' scoped>
</style>
