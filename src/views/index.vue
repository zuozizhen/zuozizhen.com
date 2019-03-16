<template lang='pug'>
#hello
  BaseNavigationTop
  section.home_top
    .content
      .home_top_title
        #home_top_title
          .sub_title
          .main_title.first
            | Hello! I’m Zizhen, a UI designer
          .main_title.second
            | and Indie Developer in China.
    ModifyScroll
  WrapAbout
  WrapProject.elife(
    title = 'Start your Elife',
    info = 'Personal Product',
    button = 'Learn more',
    href = 'https://startelife.com',
    describe = 'A collection of commonly used design tools and other interesting gadgets.',
    url = 'https://startelife.com',
    src = 'https://i.loli.net/2019/03/16/5c8d124cb1a68.jpg'
    )
  WrapProject.smartisan(
    title = 'Smartisan OS 7.0 Design System',
    logo = './static/img/smartisan.svg',
    button = 'Learn more',
    describe = 'Currently working in smartisan, I’m responsible for maintaining the daily iteration of smartisan mall Web and App terminal and following up new requirements.',
    url = 'https://www.smartisan.com',
    src = 'https://i.loli.net/2019/02/24/5c729f7f044db.jpg'
    )
  WrapProject.designer_and_studio(
    title = 'Best designer and studio website',
    info = 'Personal Product',
    button = 'Learn more',
    describe = 'Currently working in smartisan, I’m responsible for maintaining the daily iteration of.',
    url = 'https://designerandstudio.com',
    src = 'https://i.loli.net/2019/02/24/5c729f28a7dc4.jpg'
    )
  WrapProject.cachemoment(
    title = 'CacheMoment',
    logo = './static/img/cachemoment.svg',
    button = 'Learn more',
    describe = 'Currently working in smartisan, I’m responsible for maintaining the daily iteration of.',
    url = 'https://www.cachemoment.com',
    src = 'https://i.loli.net/2019/03/17/5c8d2a2ed4d81.jpg'
    )
  WrapProject.presen(
    title = 'Presen',
    info = 'ART DIRECTOR · Developer · 2017',
    describe = 'Currently working in smartisan, I’m responsible for maintaining the daily iteration of.',
    url = 'https://presen.com',
    src = 'https://i.loli.net/2019/02/24/5c72a73b62b94.jpg'
    )
  WrapProject.petme(
    title = 'Petme',
    info = 'ART DIRECTOR · Developer · 2017',
    describe = 'Currently working in smartisan, I’m responsible for maintaining the daily iteration of.',
    url = 'https://presen.com',
    src = 'https://i.loli.net/2019/02/24/5c72a7606e115.jpg'
    )
  WrapDribbble
  WrapInstagram
  WrapContact

</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import BaseNavigationTop from '../components/BaseNavigationTop.vue';
  import ModifyScroll from '../components/ModifyScroll.vue';
  import WrapAbout from '../components/WrapAbout.vue';
  import WrapProject from '../components/WrapProject.vue';
  import WrapDribbble from '../components/WrapDribbble.vue';
  import WrapInstagram from '../components/WrapInstagram.vue';
  import WrapContact from '../components/WrapContact.vue';


  export default {
    components: {
      BaseNavigationTop,
      ModifyScroll,
      WrapAbout,
      WrapProject,
      WrapDribbble,
      WrapInstagram,
      WrapContact,

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
