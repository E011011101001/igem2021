<template lang="pug">
div.bkgrd
  v-row
    v-col.col-6.offset-1.mt-13
      v-img(
        contain
        src="https://2021.igem.org/wiki/images/2/2b/T--Tongji_China--%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A2_1.png"
      )
        div.text-left.text-primary.food-wast
          h2 Food waste
          p Food waste refers to perishable biomass household waste such as leftovers, expired food, flowers and greenery, and herbal medicine residues.
          p Food waste is waste generated from residents' daily lives and activities such as food processing, whose main sources are household kitchens, restaurants, hotels, canteens, markets and other industries related to food processing.
    v-col.col-4
      v-img(
        contain
        src="https://2021.igem.org/wiki/images/0/07/T--Tongji_China--1-1_%E6%B9%BF%E5%9E%83%E5%9C%BE.png"
      )
  v-row
    v-col.col-4.offset-1
      v-img(
        contain
        src="https://2021.igem.org/wiki/images/5/55/T--Tongji_China--%E5%9B%BE%E5%B1%82_46.png"
      )
    v-col.col-6
      v-img(
        contain
        src="https://2021.igem.org/wiki/images/5/5d/T--Tongji_China--%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A2_3.png"
      )
        div.text-left.text-primary.household
          h2 Household garbage sorting regulations
          p
            | The amount of food waste is increasing year by year after
            b &nbsp; household garbage sorting regulations &nbsp;
            | were implemented in 2019. In 2020, it arrived at 9.6 thousand tons a day, with a 74% growth rate. While in 2021, it climbed to 10.3 thousand tons a day, 89% higher than that of 2019.
            sup [1]
  v-row
    v-col.col-5.offset-1.mt-1
      v-img(
        contain
        src="https://2021.igem.org/wiki/images/8/8d/T--Tongji_China--%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A2_4.png"
      )
        div.text-left.text-primary.food-wast
          h2 Problems behind garbage sorting
          p
            | With such a huge amount of food waste, the problems of odor caused by food waste have come into our view.
            b &nbsp; Unpleasant smells, health problems &nbsp;
            | and influence on
            b &nbsp; downstream industries &nbsp;
            | are the three important ones which influence not only related people but also the downstream industries.
    v-col.col-5.mx-12
      v-img(
        contain
        src="https://2021.igem.org/wiki/images/7/77/T--Tongji_China--problems.png"
      )
  v-row
    v-col(
      align="center"
    )
      v-img(
        contain
        src="https://2021.igem.org/wiki/images/9/99/T--Tongji_China--Against_this_background%2C_we_introduce_our_project_to_you%E2%80%94%E2%80%94.png"
        max-width="80%"
        height="15vh"
      )
  v-row
    v-col(
      align="center"
    )
      v-img(
        contain
        src="https://2021.igem.org/wiki/images/9/9a/T--Tongji_China--LOGO2-16346430500911.png"
        max-width="90%"
      )
  v-row
    v-col(
      align="center"
    )
      v-img(
        contain
        src="https://2021.igem.org/wiki/images/0/02/T--Tongji_China--Heres_how_we_do.png"
        max-width="40%"
        height="15vh"
      )
  v-row
    v-col(
      align="center"
    )
      v-img.mr-4(
        contain
        src="https://2021.igem.org/wiki/images/4/45/T--Tongji_China--%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A2_5.png"
        max-width="75%"
      )
        div.text-left.text-primary.how-we-do(
          ref="how_we_do"
        )
  v-row
    v-col.offset-1
      div.home-reference.text-left
        h2 Reference
        p [1] 上海市生态环境局.二〇一九年上海市固体废物污染环境防治信息公告[EB/OL].2020-06-10
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {
  static id = 'Home'

  mounted () : void {
    const mddiv = this.$refs.how_we_do as HTMLElement
    if (mddiv) {
      mddiv.innerHTML = '<p>Since the implementation of <strong>household garbage sorting regulations</strong> in Shanghai, the amount of food waste has reached a peak. However, <strong>problems caused by odor</strong>  like unpleasant smell and health problems, have  aroused great attention everywhere.This year, <strong>Tongji_China</strong> launches the <strong>&quot;LOOK!&quot;</strong> project to solve the problem. We construct two kinds of bioengineered E.coli to absorb <strong>hydrogen sulfide</strong> <strong>and ammonia</strong>, which are the two main ingredients in the odor. One uses enzymes related to sulfide oxidazation(<strong>Sqr, Sdo, AprBA and Sat</strong>), converting <strong>hydrogen sulfide</strong> to <strong>sulfate</strong>, while the other uses enzymes <strong>AMO, HAO and NOD</strong> to convert <strong>ammonia</strong> to <strong>nitrate</strong>. Besides, a <strong>three-gear adjustable kill switch</strong> based on the concentration of H2S and NH3 is added to ensure biosafety. Also, we <strong>optimize our pathway</strong> by high throughput screening and machine learning. Besides, we take implementation into consideration and construct models to <strong>simulate the real environment</strong>. With such efforts, we hope to solve the problems the odor has brought to people and downstream industries. </p>'
    }
  }
}
</script>

<style scope>
.bkgrd {
  width: 100vw;
  background: url("https://2021.igem.org/wiki/images/c/c4/T--Tongji_China--%E8%83%8C%E6%99%AF.png") repeat;
}
@media(min-width: 960px) {
  .bkgrd {
    margin-left: calc((100vw - 900px) / 2 * -1);
  }
}
@media(min-width: 1264px) {
  .bkgrd {
    margin-left: calc((100vw - 1185px) / 2 * -1);
  }
}
@media(min-width: 1904px) {
  .bkgrd {
    margin-left: calc((100vw - 1785px) / 2 * -1);
  }
}
.bkgrd > h2, .bkgrd > p {
  text-indent: 1em;
}
.bkgrd > p {
  font-size: large;
}
.reference > p {
  text-indent: 0;
}
.food-wast {
  padding: 10%;
}
.household {
  padding-top: 20%;
  padding-left: 10%;
  padding-right: 10%;
}
.how-we-do {
  padding-top: 15%;
  padding-left: 10%;
  padding-right: 10%;
}
</style>
