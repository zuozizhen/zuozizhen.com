<template lang='pug'>
  .main_scroll
    .c-scrolldown
      .c-line
    span SCROLL TO EXPLORE
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
export default {

}
</script>

<style lang='stylus' scoped>
  $line-height = 80px
  $line-height-abs = - $line-height

  .main_scroll
    position: absolute
    left: 180px
    bottom: 21px
    span
      display block
      position absolute
      left 20px
      bottom 20px
      font-size 11px
      color: #8a8a8a
      width 140px
  .c-scrolldown
    width: 1px
    height: $line-height
    position: absolute
    background-color #333
    bottom: 24px
    left: 0
    right: 0
    margin: 0 auto
    overflow: hidden
  .c-line
    width: 100%
    height: 100%
    display: block
    background: linear-gradient(to bottom, #DFDFDF 50%, rgba(255, 255, 255, 0) 50%)
    background-position: 0 $line-height-abs
    background-size: 100% 200%
    animation: scrolldown 2.2s cubic-bezier(0.76, 0, 0.3, 1) forwards infinite

  @keyframes scrolldown
    0%
      background-position: 0 $line-height-abs
    75%
      background-position: 0 0
    100%
      background-position: 0 $line-height
</style>
