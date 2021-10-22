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
  CA(v-if="sectionNum === 0")
  ODE(v-else)

</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import CA from './CA.vue'
import ODE from './ODE.vue'

type Section = {
  title: string
  normalClass: string
  activeClass: string
}

@Component({
  components: {
    CA,
    ODE
  }
})
export default class Models extends Vue {
  static id = 'Models'
  public sectionNum: 0 | 1 = 0
  public sections: Array<Section> = [
    {
      title: 'CA Model',
      normalClass: 'light-blue lighten-4',
      activeClass: 'light-blue darken-3'
    },
    {
      title: 'ODE Model',
      normalClass: 'amber lighten-4',
      activeClass: 'amber darken-3'
    }
  ]
}

</script>
