<template lang='pug'>
  section.section_full.cases
    .case
      .case_left
        .case_about
          .case_logo(v-if='logo')
            img(:src='logo')
          .case_info(v-else) {{ info }}
          .case_title {{ title }}
          a.case_button(v-if='button', :href='href') {{ button }}
      .case_right
        .case_cover
          img.lozad(:src='src', alt='')

</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  export default {
    props: [
      'title',
      'info',
      'describe',
      'url',
      'src',
      'button',
      'href',
      'logo'
    ]
  }
</script>

<style lang='stylus' scoped>
</style>
