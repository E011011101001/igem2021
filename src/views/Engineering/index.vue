<template lang="pug">
v-row
  v-col.col-3
    Anchor(v-if="ele" :ele="ele")
  v-col.col-9
    div(ref="engi").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Engineering extends Vue {
  static id = 'Engineering'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
    const result = this.$refs.engi as Element
    console.log(result)
    if (result) {
      result.innerHTML = marked(`


#  Engineering #



## Design: Realization of hydrogen sulfide degradation pathway  #

 1. End product selection
We selected **sulfate**, which is non-toxic and harmless to bacteria in the working environment and has little impact on the environment, we believe it is an ideal end product for degradation.

 2. Target gene selection
We selected four genes: **SQR**, **SDO**, **AprBA** and **SAT**, which can achieve the purpose of converting sulfide to sulfate.



## Build: Construction of complete plasmid #

We disassembled the main part of the plasmid into two plasmids for synthesis, then added the missing parts and spliced the two plasmids together to obtain a complete plasmid with four genes. After that, we transformed it into *E. coli* DH5α for testing.



## Test:not satisfying #

We performed **qPCR**, **SDS-PAGE electrophoresis**, detected changes in sulfide concentration to test the efficiency of gene expression and the actual effect of **hydrogen sulfide removal**, but the results were **not satisfying**.



## Improve:optimization of promoter #

We revisited our design in the hope of finding the reasons for the experimental failure.

 1. No bands in SDS-PAGE

SDS-PAGE showed that the protein expression of our engineered bacteria isn’t difference from wild type bacteria, so we thought that maybe **our promoter was not strong enough**, resulting in too little protein expression to show the specific bands. Therefore, we decided to switch to a stronger **T7 promoter** and transformed the plasmid into *E.coli* BL21(DE3) to improve the protein expression.

 2. Inefficiency of sulfide convert

We believe that different enzymes expressed by different genes have different efficiencies, thus only four enzymes **maintained in the right ratio** will have the best effect of sulfur removal. If one enzyme effect is outstanding, it will lead to product accumulation and the intermediate products may affect the bacteria. In the contrary, if one enzyme efficiency is too low, it will lead to a decrease in the speed of the whole processing pathway.
In addition, considering that our plasmids are relatively large, large amount of expression will cause a **great load on the growth of bacteria**. Thus, choosing the right promoter strength is important.

Therefore, we decided to **replace different promoters for different genes and combine them to select the optimal pair**. Due to the variety of promoters, it was difficult to construct all of the plasmid. So we decided to realize this idea by **constructing a random promoter libraries** (见张艺灜部分，加超链接), and combining it with **modeling** to predict the best promoter pairing (model部分，加超链接).



## Design:  new plasmids #

1. We reconstructed four plasmids containing each of our four genes with **T7 promoter**. We also used **SDS-PAGE** to detect protein expression and test the efficiency of sulfide removal.
2. We reconstructed the plasmid containing the four genes and **replaced the promoter of SQR with T7**, detected the protein expression using the SDS-PAGE, and carried out the experimental test of sulfide removal.
3. We construct a promoter library based on this, as well as modeling predictions around the promoter pairing problem.

      `)
      this.ele = result as HTMLElement
    }
  }
}
</script>
