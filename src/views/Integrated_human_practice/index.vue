<template lang="pug">
v-row
  v-col.col-4
    Anchor(v-if="ele" :ele="ele")
  v-col.col-8
    div(ref="hp").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Integrated extends Vue {
  static id = 'Integrated'
  ele: HTMLElement | null = null

  mounted (): void {
    const hp = this.$refs.hp as Element
    console.log(hp)
    if (hp) {
      hp.innerHTML = marked(`

      `)

      this.ele = hp as HTMLElement
    }
  }
}
</script>
