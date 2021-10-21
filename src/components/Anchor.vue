<template>
  <div class="anchor" ref="anchor">
    <ul>
      <li
        v-for="(item, index) in anchors"
        :key="index"
        @click="scroll(item.e, index)"
        :class="`${(index === curIdx && 'active') || ''} indent-${item.level}`"
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

  $refs!: { anchor: HTMLDivElement }

  curIdx = 0

  scroll (ele: HTMLElement, idx: number): void {
    const { offsetTop } = ele
    window.scroll({ top: offsetTop - 50, behavior: 'smooth' })
    this.curIdx = idx
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
      let idx = anchors.findIndex(({ e }) => e.offsetTop - 60 >= scrollTop) - 1
      if (idx < 0) {
        idx = anchors.length - 1
        if (anchors[idx].e.offsetTop - 60 > scrollTop) {
          idx = 0
        }
      }
      if (idx !== this.curIdx) {
        this.curIdx = idx
        const anchor = this.$refs.anchor
        const { scrollTop, clientHeight } = anchor
        const { children } = anchor.firstChild as HTMLElement
        const { offsetTop } = children[idx] as HTMLElement
        if (Math.abs(offsetTop - (scrollTop + clientHeight / 2)) > 50) {
          anchor.scroll({
            top: offsetTop - clientHeight / 2,
            behavior: 'smooth'
          })
        }
      }
    }
    ele.onscroll = scroll
    this._ele = ele
  }

  get anchors (): AnchorItem[] {
    this.clean()
    const ele = this.ele
    if (ele) {
      const anchors = Array.from(
        ele.querySelectorAll('h1[id],h2[id],h3[id],h4[id],h5[id]')
      ).map(e => {
        const level = Number(e.tagName[1])
        return {
          id: e.id,
          content: e.textContent,
          level,
          e: e as HTMLElement
        }
      })
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
  transition: all 0.3s;
  text-align: left;
  font-size: 14px;
}
.anchor li.indent-2 {
  padding-left: 1em;
}
.anchor li.indent-3 {
  padding-left: 2em;
}
.anchor li.indent-4 {
  padding-left: 3em;
}
.anchor li.indent-5 {
  padding-left: 4em;
}
.anchor li.indent-6 {
  padding-left: 5em;
}
.anchor li.indent-7 {
  padding-left: 6em;
}
.anchor li.indent-8 {
  padding-left: 7em;
}

.anchor li.active {
  font-weight: bold;
  font-size: 16px;
  color: #e96e00;
}
</style>
