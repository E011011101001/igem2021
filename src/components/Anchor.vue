<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const AnchorProps = Vue.extend({
  props: {
    ele: HTMLElement
  }
})

@Component
export default class Anchor extends AnchorProps {
  static id = 'Anchor'

  mounted (): void {
    const ele = this.ele
    if (ele) {
      const anchors = ele.querySelectorAll(
        'h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]'
      )
      console.log(anchors)
    }
  }
}
</script>
