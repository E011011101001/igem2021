<template>
  <div class="anchor">
    <ul>
      <li
        v-for="(item, index) in anchors"
        :key="index"
        @click="scroll(item.e)"
        :class="index === curIdx ? 'active' : ''"
      >
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const AnchorProps = Vue.extend({
  props: {
    ele: HTMLElement
  }
})

interface AnchorItem {
  id: string
  content: string | null
  level: number
  e: HTMLElement
}

@Component
export default class Anchor extends AnchorProps {
  static id = 'Anchor'

  _ele: HTMLElement | null = null

  curIdx = 0

  scroll (ele: HTMLElement): void {
    const { offsetTop } = ele
    window.scroll({ top: offsetTop - 50, behavior: 'smooth' })
  }

  clean (): void {
    if (this._ele) {
      this._ele.onscroll = null
      this._ele = null
    }
  }

  observe (ele: HTMLElement, anchors: AnchorItem[]): void {
    if (this._ele) {
      this.clean()
    }
    const scroll = () => {
      const { scrollTop } = document.scrollingElement || ele
      const idx =
        anchors.findIndex(({ e }) => e.offsetTop - 60 >= scrollTop) - 1
      this.curIdx = idx < 0 ? 0 : idx
      // console.log('onsc', scrollTop, idx)
    }
    ele.onscroll = scroll
    this._ele = ele
  }

  get anchors (): AnchorItem[] {
    this.clean()
    const ele = this.ele
    if (ele) {
      const anchors = Array.from(
        ele.querySelectorAll('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]')
      ).map(e => {
        const level = Number(e.tagName[1])
        return {
          id: e.id,
          content: e.textContent,
          level,
          e: e as HTMLElement
        }
      })
      console.log(anchors)
      this.observe(document.body, anchors)
      return anchors
    }
    return []
  }

  beforeDestory (): void {
    this.clean()
  }
}
</script>

<style scoped>
.anchor {
  position: sticky;
  top: 20%;
  border-right: 2px solid #25137f;
  padding-right: 24px;
  max-height: 50vh;
  overflow: scroll;
}
.anchor li {
  cursor: pointer;
}
.active {
  font-weight: bold;
  color: #e96e00;
}
</style>
