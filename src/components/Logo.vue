<template lang="pug">
  div
    h1 LOGO
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Logo extends Vue {
  static id = 'Logo'
}
</script>
