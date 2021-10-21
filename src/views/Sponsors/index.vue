<template lang="pug">
div
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

@Component({ components: { Anchor } })
export default class Sponsors extends Vue {
  static id = 'Sponsors'
  ele: HTMLElement | null = null
}
</script>
