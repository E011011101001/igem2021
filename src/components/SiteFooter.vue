<template lang="pug">
div
  v-row
    v-col
      v-img(
        src="https://2021.igem.org/wiki/images/9/98/T--Tongji_China--%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F%E8%83%8C%E6%99%AF.png"
        height="15vh"
      )
        v-row.white--text(align="center")
          v-col
            span E-mail: 1950187@tongji.edu.cn
          v-col.text-right
            v-row(align="center")
              v-col.col-6(
                aligh="right"
              )
                span WeChat official account:
              v-col(align="left")
                v-img.mt-2(
                  contain
                  src="https://2021.igem.org/wiki/images/c/ca/T--Tongji_China--%E5%85%AC%E4%BC%97%E5%8F%B7.jpg"
                  max-width="13vh"
                )
  v-row(justify="center")
    v-col.col-2.mx-4
      v-row
        v-img(
          contain
          src="https://2021.igem.org/wiki/images/4/43/T--Tongji_China--%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6.png"
        )
    v-col.col-2.mx-4
      v-row
        v-img(
          contain
          src="https://2021.igem.org/wiki/images/c/c5/T--Tongji_China--gao_lab.png"
        )
    v-col.col-2.mx-4
      v-row
        v-img(
          contain
          src="https://2021.igem.org/wiki/images/b/b0/T--Tongji_China--geneious.png"
        )
    v-col.col-2.mx-4
      v-row
        v-img(
          contain
          src="https://2021.igem.org/wiki/images/b/b5/T--Tongji_China--%E5%8D%8E%E5%A4%A7BGI.png"
        )
  v-row(justify="center" align="center")
    v-col.col-4.mr-15
      v-row
        v-img(
          contain
          src="https://2021.igem.org/wiki/images/4/4c/T--Tongji_China--%E7%94%9F%E7%A7%91%E9%99%A2.png"
        )
      v-row
        v-img(
          contain
          src="https://2021.igem.org/wiki/images/5/56/T--Tongji_China--%E7%8E%AF%E5%A2%83%E5%AD%A6%E9%99%A2.png"
        )
    v-col.col-2.ml-5
      v-img(
        contain
        src="https://2021.igem.org/wiki/images/2/21/T--Tongji_China--%E5%A4%A9%E5%A8%81%E7%8E%AF%E4%BF%9D.png"
        max-height="15vh"
      )
    v-col.col-2
      v-img(
        contain
        src="https://2021.igem.org/wiki/images/6/6b/T--Tongji_China--snapgene.png"
      )
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class SiteFooter extends Vue {
  static id = 'SiteFooter'
}
</script>

<style scoped>
</style>
