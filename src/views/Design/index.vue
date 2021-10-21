<template lang="pug">
div
  v-row
    v-col
    v-col
      v-slide-group(
        v-model="sectionNum"
        mandatory
      )
        v-slide-item(
          v-for="(section, index) in sections"
          :key="index"
          v-slot="{ active, toggle }"
        )
          v-btn(
            :input-value="active"
            :active-class="section.activeClass + ' white--text'"
            :class="section.normalClass"
            depressed
            rounded
            @click="toggle"
          ).mx-2 {{ section.title }}
    v-col
  v-row
    HPage(v-if="sectionNum === 0")
    APage(v-else-if="sectionNum === 1")
    OPage(v-else-if="sectionNum === 2")
    KPage(v-else)

</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import HPage from './H.vue'
import APage from './A.vue'
import OPage from './O.vue'
import KPage from './K.vue'

type Section = {
  title: string
  normalClass: string
  activeClass: string
}

@Component({
  components: {
    HPage,
    APage,
    OPage,
    KPage
  }
})
export default class Design extends Vue {
  static id = 'Design'
  public sectionNum : 0|1|2|3 = 0
  public sections: Array<Section> = [
    {
      title: 'Hydrogen sulfide degradation',
      normalClass: 'light-blue lighten-4',
      activeClass: 'light-blue darken-3'
    },
    {
      title: 'Ammonia degradation',
      normalClass: 'amber lighten-4',
      activeClass: 'amber darken-3'
    },
    {
      title: 'Optimization',
      normalClass: 'light-green lighten-4',
      activeClass: 'light-green darken-1'
    },
    {
      title: 'Kill Switch',
      normalClass: 'lime lighten-4',
      activeClass: 'lime darken-2'
    }
  ]
}
</script>
