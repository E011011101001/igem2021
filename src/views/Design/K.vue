<template lang="pug">
v-row
  v-col.col-3
    Anchor(v-if="ele" :ele="ele")
  v-col.col-9
    div(ref="k_md").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class H extends Vue {
  static readonly id = 'Optimization'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
    const k = this.$refs.k_md as Element
    if (k) {
      k.innerHTML = marked(`

# The three-gear kill switch

Biosafety has always been an important part in iGEM. To prevent our engineered bacteria from leaking into the environment, we designed a H<sub>2</sub>S sensitive three-gear kill switch to ensure this.  H<sub>2</sub>S is an important factor in the working environment of our engineered bacteria, so we chose to use H<sub>2</sub>S concentration to control the on-off of the kill switch.  By searching for the biosensors of various gas molecules, we found a HS<sub>n</sub>H-sensing biosensor (the product of SQR oxidized H<sub>2</sub>S happens to be HS<sub>n</sub>H) -- a gene regulator, CstR, which can sense HS<sub>n</sub>H and turn on the expression of the downstream genes (Figure 1.)<sup>[1]</sup>.

<div style="text-align: center;">
<img src="https://2021.igem.org/wiki/images/a/ad/T--Tongji_China--%E6%96%87%E7%8C%AE%E6%8F%92%E5%9B%BE.jpeg" alt="文献插图" style="max-width:100%" />
</div>

[^Figure 1. the schematic presentation of CstR ]: PR(Pcstr): the promoter which CstR can combine with and inhibit; PL: the constitutive promoter which regulate the  expression of CstR

If we design a two-gear switch, namely, the switch is off when H<sub>2</sub>S concentration is high and on when H<sub>2</sub>S concentration is low, then we need to maintain high concentration of H<sub>2</sub>S in the culture environment, but this is obviously not realistic.  Therefore, we designed a three-gear kill switch based on the Dre/rox recombinant enzyme system <sup>[2]</sup>(referring to the work of [the Edinburgh UG in 2017](http://2017.igem.org/Team:Edinburgh_UG)) and the MazEF toxin-antitoxin system<sup>[3]</sup>, which can achieve more flexible regulation of the survival of our engineered bacteria. (Figure 2.)

<img src="https://2021.igem.org/wiki/images/6/6c/T--Tongji_China--%E8%87%AA%E6%9D%80%E5%BC%80%E5%85%B3%E8%AE%BE%E8%AE%A1%E5%9B%BE.png" alt="自杀开关设计图" style="max-width:100%" />

[^Figure 2. The design of our three-gear kill switch]:

Under the culture condition, H<sub>2</sub>S concentration is not high enough to turn on any of the three pathways, so the bacteria will grow normally. When the concentration of H<sub>2</sub>S is high, H<sub>2</sub>S will remove the inhibition of CstR on the downstream gene expression by combining with it, then Dre will be expressed, and the terminator before MazF will be removed, resulting in the expression of MazF toxin. Meanwhile, due to the expression of the antitoxin MazE, the bacteria will not die.  When working bacteria leak into the environment, H<sub>2</sub>S concentration in the environment will return to the normal (low) level, the inhibition of CstR will not be removed, and MazE will no longer be expressed. At this time, because MazF has been expressed, a large amount of MazF will kill the bacteria over time. (Figure 3.)

<img src="https://2021.igem.org/wiki/images/e/e9/T--Tongji_China--kill_switch-2.png" alt="kill switch-2" style="max-width:100%" />

[^Figure 3.  The work circuit of our kill switch]:

<img src="https://2021.igem.org/wiki/images/4/4f/T--Tongji_China--kill_switch_%E5%8A%A8%E7%94%BB.gif" alt="kill switch 动画" style="max-width:100%" />

## References

1. Liu, H., et al., *Synthetic Gene Circuits Enable Escherichia coli To Use Endogenous H(2)S as a Signaling Molecule for Quorum Sensing.* ACS Synth Biol, 2019. **8**(9): p. 2113-2120.

2. Anastassiadis, K., et al., *Dre recombinase, like Cre, is a highly efficient site-specific recombinase in E-coli, mammalian cells and mice.* Disease Models & Mechanisms, 2009. **2**(9-10): p. 508-515.

3. Simanshu, D.K., et al., *Structural Basis of mRNA Recognition and Cleavage by Toxin MazF and Its Regulation by Antitoxin MazE in Bacillus subtilis.* Molecular Cell, 2013. **52**(3): p. 447-458.



      `)
      this.ele = k as HTMLElement
    }
  }
}
</script>
