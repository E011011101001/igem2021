<template lang="pug">
div(ref="o_md").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import marked from 'marked'

@Component
export default class H extends Vue {
  static readonly id = 'Optimization'

  mounted () : void {
    const o = this.$refs.o_md as Element
    if (o) {
      o.innerHTML = marked(`
## Optimization

In order to improve the hydrogen sulfide oxidation efficiency of our bio-engineered bacteria, we hope to further optimize the Sqr-Sdo-AprBA-Sat pathway. Increasing the enzyme concentration of the rate-limiting step can be helpful but the rate-limiting step is hard to identify in our case. High concentrations of all the four enzymes in our pathway can cause a metabolic burden to bacteria, and might also lead to the accumulation of toxic intermediate products<sup>[1]</sup>. Considering all the factors above, we hope to optimize our pathway by making subtle control of enzyme concentration. 

The enzyme concentration could be regulated by the copy number of the enzyme-encoding gene, the transcription efficiency (promoter and terminator), translation efficiency (RBS) and the degradation rate of mRNA and protein. Optimizing microorganisms for chemical production via metabolic engineering through high-strength promoters has been seen with large strain engineering efforts such as rewiring the yeast Saccharomyces cerevisiae for industrial-level heterologous artemisinin production<sup>[2, 3]</sup>. Since there are a lot of available promoter libraries in iGEM parts, we decided to optimize enzyme concentration by regulating promoter strength.

<img src="https://2021.igem.org/wiki/images/3/3d/T--Tongji_China--p1.jpg" alt="p1" style="max-width:100%" />

[^Figure 1. Different ways of pathway optimization]:     

However, to experimentally study all possible combinations of promoters with different expression levels of enzymes can be expensive and time-consuming. Luckily, in past decades, more tools have been developed to solve this problem<sup>[4]</sup>. Here we design a strategy, combing combinatorial random library and machine-learning, to optimize the heterologous Sqr-Sdo-AprBA-Sat pathway in E.coli efficiently. Our strategy is shown below. A random combinatorial library of plasmids, with enzymes of different expression levels, will be constructed by Gibson assembly and pre-screened according to their sulfide-degrading efficiency. Data of degradation efficiency, the growth rate of these pre-screened strains will be collected and the ANN model will then be applied to predict the optimized combination.

<img src="https://2021.igem.org/wiki/images/9/9f/T--Tongji_China--p2-16345442418301.jpg" alt="p2" style="max-width:100%" />

[^Figure 2. Optimization strategy]: 

[1].      Xu, P., et al., *Improving Metabolic Pathway Efficiency by Statistical Model-Based Multivariate Regulatory Metabolic Engineering.* ACS Synth Biol, 2017. **6**(1): p. 148-158.

[2].      Paddon, C.J., et al., *High-level semi-synthetic production of the potent antimalarial artemisinin.* Nature, 2013. **496**(7446): p. 528-32.

[3].      Deaner, M. and H.S. Alper, *Promoter and Terminator Discovery and Engineering.* Adv Biochem Eng Biotechnol, 2018. **162**: p. 21-44.

[4].      Zhou, Y., et al., *MiYA, an efficient machine-learning workflow in conjunction with the YeastFab assembly strategy for combinatorial optimization of heterologous metabolic pathways in Saccharomyces cerevisiae.* Metab Eng, 2018. **47**: p. 294-302.
      `)
    }
  }
}
</script>
