<template lang="pug">
v-row
  v-col.col-1
  v-col.col-10
    div(ref="hp").text-left
  v-col.col-1
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import marked from 'marked'

@Component
export default class Integrated extends Vue {
  static id = 'Integrated'

  mounted () : void {
    const hp = this.$refs.hp as Element
    console.log(hp)
    if (hp) {
      hp.innerHTML = marked(`

      `)
    }
  }
}
</script>
