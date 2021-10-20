declare module '*.vue' {
  import Vue from 'vue'
  export default class ComponentWithId extends Vue {
    static readonly id: string
  }
}
