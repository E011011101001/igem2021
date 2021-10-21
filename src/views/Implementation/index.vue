<template lang="pug">
v-row
  v-col.col-4
    Anchor(v-if="ele" :ele="ele")
  v-col.col-8
    div(ref="mddiv").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Implementation extends Vue {
  static id = 'Implementation'
  ele: HTMLElement | null = null

  mounted (): void {
    const mddiv = this.$refs.mddiv as Element
    console.log(mddiv)
    if (mddiv) {
      mddiv.innerHTML = marked(`
# Implementation

We not only want to prove that our project works in laboratory ,but we also want to go further and prove that it can be used in real life, which requires us to consider questions about the practical application.

## 1. Application scenario

After our preliminary human practice, we found that the front and middle ends of food waste treatment have not formed a scientific and systematic deodorisation method due to the small volume, so we set our application scenario as the front and middle ends of wet waste treatment, like food waste bins, waste transfer stations, etc.

Besides, since food waste is very valuable resource for us to use, we want to utilize it fully. Therefore we have partnership with SJTang and explored the possibility that producing hydrogen while eliminating H~2~S by co-cultivating our bacteria.

## 2. End users

Once we had identified our application scenario, we targeted our audience at residents, students, and workers involved in related waste treatment. A questionnaire was set up to find out how receptive they were to the use of synthetic biology as a means of deodorisation, and the results showed that 45.39% of our audience said they would be willing to try synthetic biology, while there were still concerns about safety and other issues.

## 3. Safety

It works based on the concentration of H~2~S and NH~3~ which consists of odor sensors, Dre recombinase system and toxin-antitoxin system. Under cultural conditions, none of the pathway can be activated. When the bio-engineered bacteria are put into work, high density of hydrogen sulfide in the environment induces the expression of Dre recombinase and MazF (antitoxin), followed by terminator removal and MazE (toxin) expression. Once our bio-engineered bacteria leak to the environment, low density of hydrogen sulfide inhibits MazF (antitoxin) expression. Without the rescue of MazF(antitoxin), bio-engineered bacteria will be killed by the accumulation of MazE (toxin). In this way ,we succeed in adjusting the survival and death of the bacteria by adjusting the concentration of H~2~S and NH~3~.==(To learn more)==链接至3.1 design-kill switch

## 4. Efficiency

Besides safety, the complex situations in real life make us consider whether our engineered bacteria still work in real environment. In order to understand this problem, we consult much literature, ask for help from specialists and try cooperation with other teams.

### 4.1 Living conditions

There are very many other bacteria in the food waste bins and they have to live in an anaerobic state.In the further composting process, food waste will be treated in high temperature. This series of harsh survival environments made us realize that our bio-engineered bacteria is difficult to survive in this scenario. After communicating with Professor Xinping Zeng, we intend to provide a relatively stable living environment for the engineered bacteria in the form of biochar to avoid competition with other bacteria. In addition we will further consider how to improve the survival of the engineered bacteria under extreme conditions such as anaerobic high temperatures.

Besides, this year we have a solid partnership with FAFU-CHINA, whose project aimed at generating linalool by yeast. Therefore, we tried to cultivate our bio-engineered bacteria together with their yeast. They made a model to predict the living conditions of our microorganism.==(To learn more)==链接至7.4 partnership

### 4.2 Work efficiency

During our interaction with the professors in our school, they suggested to us that the practical application would require a combination of the rate of gas production and the rate of gas's diffusion into E. coli. Therefore we established a cellular automation model to simulate the dynamics of engineered bacteria spread and odor degradation in practical application. We also simulated the application in different environment, seasons and compared different ways of implementation. ==(To learn more)==链接至4.models

<img src="https://2021.igem.org/wiki/images/e/ef/T--Tongji_China--6.3-1.png" alt="6.3-1" style="zoom:60%;" />


      `)
      this.ele = mddiv as HTMLElement
    }
  }
}
</script>
