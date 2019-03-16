<template lang='pug'>
  #app
    transition(name='slide-fade')
      router-view
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

export default {
    name: 'App',
    metaInfo: {
    title: 'Default Title',
    titleTemplate: '%s | My Awesome Webapp'
  }
}

</script>

<style lang='stylus' scoped>
 .slide-fade
  position: absolute
  left: 0
  right: 0
.slide-fade-enter-active
  transition: transform .3s;
.slide-fade-leave-active
  transition: transform .3s;
.slide-fade-enter
  transform: translateY(100vh)
.slide-fade-leave-to
  // transform: translateY(-100vh)
</style>
