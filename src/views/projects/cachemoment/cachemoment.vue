<template lang='pug'>
#hello
  section.work_content
    .content
      .work_info
        .work_title
          | CacheMoment
        .work_desc
          // I have been focusing on designing effective digital products to enhance the corporate brand value. I have 1+ years of experience in UI/UX design with proven online products such as web, applications, corporate back office systems.. My advantage is good at integrating different skills. I can independently complete the website design and development, there are some complete online.
        .link_content
          .dark
            a.view_more.link(href='https://www.behance.net/gallery/58498171/Moment', target='_blank')
              span View in Behance
            a.view_more.link(href='https://www.cachemoment.com', target='_blank')
              span Visit website
      .work_pic
        img(src='https://i.loli.net/2018/12/25/5c2225fc83296.jpg', alt='')


</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';


  export default {
    components: {

    },
    name: 'App',
    metaInfo: {
      title: 'Default Title',
      // all titles will be injected into this template
      titleTemplate: '%s | My Awesome Webapp'
    },
  }
</script>

<style lang='stylus' scoped>
</style>
