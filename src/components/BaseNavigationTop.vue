<template lang='pug'>
  nav.top_nav
    router-link.nav_link(to='/') Home
    router-link.nav_link(to='/work') Work
    router-link.nav_link(to='/work') Blog
    router-link.nav_link(to='/work') About
    .logo_z.right(href='/')
      i
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
export default {

}
</script>

<style lang='stylus' scoped>
</style>
