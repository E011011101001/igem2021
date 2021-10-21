<template lang="pug">
v-card(
  height="44em"
)
  v-img(
    :src="src"
    max-height="32em"
  )
  v-card-title {{ name }}
  v-divider
  v-card-text.text-left.text-subtitle-1 {{ description }}
  vcar
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const TAdvisorVue = Vue.extend({
  props: {
    src: String,
    name: String,
    description: String
  }
})

@Component
export default class TAdvisor extends TAdvisorVue {
  static id = 'TAdvisor'
}
</script>
