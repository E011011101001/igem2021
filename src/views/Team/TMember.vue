<template lang="pug">
v-card(
  height="45em"
)
  v-img(
    max-height="32em"
    :src="src"
  )
  v-card-title {{ name }}
  v-card-subtitle.text-left.text-subtitle-1
    div Major: {{ major }}
    |  Hobbies: {{ hobbies }}
  v-divider
  v-card-text.text-left.text-subtitle-1 {{ description }}
  vcar
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const TMemberVue = Vue.extend({
  props: {
    src: String,
    name: String,
    major: String,
    hobbies: String,
    description: String
  }
})

@Component
export default class TMember extends TMemberVue {
  static id = 'TMember'
}
</script>
