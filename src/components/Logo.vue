<template lang="pug">
    v-img(
      contain
      src='https://2021.igem.org/wiki/images/1/1d/T--Tongji_China--logo.png'
      max-width="8em"
    )
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Logo extends Vue {
  static id = 'Logo'
}
</script>
