<template lang="pug">
v-row
  v-col.col-3
    Anchor(v-if="ele" :ele="ele")
  v-col.col-9
    div(ref="poc").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class POC extends Vue {
  static id = 'POC'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
    const poc = this.$refs.poc as Element
    console.log(poc)
    if (poc) {
      poc.innerHTML = marked(`

Our experiment has preliminarily proved the possibility of using engineered bacteria to remove hydrogen sulfide in food waste environment to reduce odor. Here, we will show the experimental basis to prove the engineered bacteria's ability and efficiency of oxidizing sulfur ions. During the experiment, we achieved good results in sulfur ion oxidation, but also found the limitations of the current design, which provided a direction for subsequent improvement.

# Introduction

According to the [background](/Team:Tongji_China/Description#background) we have researched, we found that hydrogen sulfide and ammonia are the two main odors that cause malodor in food waste, so we decided to convert these two malodor-emitting odors into non-toxic and odorless substances, so that we could solve the problem through engineered bacteria.

We selected sulfate as our end product, which has no major effect on both bacteria and environment at low doses and is odorless itself.

# Design

We wanted to realize our idea of converting sulfide to sulfate through four genes: SQR, SDO, AprBA, and SAT, so we designed the following treatment route.

<img src="https://2021.igem.org/wiki/images/7/71/T--Tongji_China--POCP1.png" style="max-width:100%" />



<center>Figure 1.  Treatment route of converting sulfide to sulfate.</center>



After experimental testing, we found that the promoter was too weak, resulting in too little protein expression to be effective, so we replaced the SQR gene with a stronger T7 promoter and obtained preliminary laboratory characterization results, then conducted gas treatment experiments simulating the environment of food waste, which also yielded preliminary results.

# Experiment result

## **The expression of the target mRNA and protein**

Through RT-qPCR experiment and SDS-PAGE experiment, we preliminarily verified that the four genes can be transcribed and translated normally in E. coli.(more details can be found in [result](/Team:Tongji_China/Result).

<img src="https://2021.igem.org/wiki/images/4/49/T--Tongji_China---16344961965841.png" alt="-16344961965841" style="max-width:100%" />

<center>Figure 2.  Result of RT-qPCR for four genes</center>

<img src="https://2021.igem.org/wiki/images/f/fd/T--Tongji_China---16344963137465.jpeg" alt="-16344963137465" style="max-width:100%" />

<center>Figure 3.  SDS-PAGE bands of four genes regulated by T7 promoter</center>

### **Protein function verification experiment**

In view of the  the limiting capacity of our laboratory to detect the intermediates in the sulfide oxidation pathway, we mainly verified the function of our engineered bacteria from the oxidation level of sulfide and the generation level of sulfate.

#### **Characterization experiment of S2- oxidation amount**

- **Verification of test method:**

We configured a series of sodium sulfide solutions with concentration gradient and tested them with detection reagents according to certain methods. The standard curve obtained is ideal. It can be considered that our detection method can accurately reflect the relative content of sulfide in the solution within this concentration range.

![-16344963436149](https://2021.igem.org/wiki/images/d/d8/T--Tongji_China---16344963436149.png)



<center>Figure 5.  standard curve of S<sup>2-</sup></center>

- **Sulfide oxidation in liquid environment**

We put the engineered bacteria and wild-type bacteria into a certain concentration of sodium sulfide solution,  take out the bacterial solution every 30 min to detect the residual sulfide concentration. The results show that our engineered bacteria can oxidize sulfide better. (because the bacteria have a certain adsorption effect on sulfide, the initial sulfur ion concentration of the two groups of added bacterial solution is lower than blank)

<img src="https://2021.igem.org/wiki/images/0/02/T--Tongji_China--%E9%85%B6%E6%A0%87%E4%BB%AA.png" alt="酶标仪" style="max-width:100%" />

<img src="https://2021.igem.org/wiki/images/5/55/T--Tongji_China---163449635323611.png" alt="-163449635323611" style="max-width:100%" />

<center>Figure 5 & 6.  concentration of S<sup>2-</sup> in liquid environment with different bacteria. ( SSAS: pET3a-T7-SQR-J23110-SDO-APR-SAT； WT: Wild Type； BK: Blank )</center>

- **Hydrogen sulfide oxidation in simulated food  waste environment**

We have preliminarily confirmed that the engineering bacteria can effectively inhibit the production of hydrogen sulfide in egg liquid, but due to the limited time, it has not been accurately verified. Further experiments need to be designed to detect the ability and efficiency of engineering bacteria to oxidize hydrogen sulfide in wet waste environment.

<img src="https://2021.igem.org/wiki/images/7/72/T--Tongji_China--%E9%B8%A1%E8%9B%8B%E6%B6%B2-16346659014661.png" alt="鸡蛋液-16346659014661" style="max-width:100%" />



<center>Figure 7.  Existence of S<sup>2-</sup> in egg liquid with different bacteria. ( SSAS: pET3a-T7-SQR-J23110-SDO-APR-SAT； WT: Wild Type）</center>



# Limitations and Direction of Improvement

1. Our experiments have proved that our engineering bacteria can metabolize sulfur ions, but they can only verify the function of SQR, and have not effectively proved the ability of other proteins in this metabolic pathway; In the next step, we need to further verify the functions of other proteins to ensure the normal operation of our pathway;
2. We have proved that engineered bacteria can oxidize hydrogen sulfide under experimental conditions, but the experimental conditions are quite different from the actual food waste environment, and the treatment capacity in the actual environment needs to be verified; Next, we will further simulate various food waste environments to verify the ability of engineered bacteria;
3. During the experiment, we found that in addition to malodorous gases such as hydrogen sulfide, food waste is also accompanied by obvious sour gases. In the case of deodorization, our future design may further treat sour gases.
4. Under the current experimental conditions, our engineered bacteria takes about 2 hours to complete sulfur ions oxidation（100 μM）. In practical application, it may be necessary to improve the work efficiency of engineered bacteria and explore more suitable working conditions.
      `)
      this.ele = poc as HTMLElement
    }
  }
}
</script>
