<template lang="pug">
div
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

@Component({ components: { Anchor } })
export default class Team extends Vue {
  static id = 'Team'
  ele: HTMLElement | null = null
}
</script>
