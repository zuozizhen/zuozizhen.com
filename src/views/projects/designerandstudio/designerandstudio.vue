<template lang='pug'>
#hello
  span 111

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
