<template lang="pug">
v-row
  v-col.col-3
    Anchor(v-if="ele" :ele="ele")
  v-col.col-9
    div(ref="a_md").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class A extends Vue {
  static readonly id = 'Ammonia'
  ele: HTMLElement | null = null

  mounted (): void {
    const a = this.$refs.a_md as Element
    if (a) {
      a.innerHTML = marked(`
# **Ammonia degradation**

Ammonia is also one of the main substances in the odor when wet garbage corrupting. To efficiently remove odors and make this process also beneficial to the subsequent compost utilization, we designed a degradation pathway in conjunction with the nitrogen metabolism pathway of microorganisms. <sup>[1]</sup>

<img src="https://2021.igem.org/wiki/images/3/36/T--Tongji_China--NH3%E9%80%9A%E8%B7%AF.jpg" alt="NH3通路" style="max-width:100%" />

[^Figure 1. Microbial transformations of nitrogen compounds]: <sup>[1]</sup>

Based on three principles of destination efficiency, resource utilization, and difficulty in pathway construction, we chose to oxidize ammonia to hydroxylamine, then to nitric oxide, and finally to nitrate, which is the nitrogen element flow direction that fits our goals. In this process, the three enzymes AMO, HAO and NOD are required to play their roles in sequence.

<img src="https://2021.igem.org/wiki/images/c/c0/T--Tongji_China--NH3%E9%99%8D%E8%A7%A3%E8%AE%BE%E8%AE%A1%E5%9B%BE.jpg" alt="NH3降解设计图" style="max-width:100%" />

[^Figure 2. Overview of ammonia degradation pathway]:

As for the chassis, we also chose E. coli as a platform to test the feasibility of the pathway, and plan to optimize the selection of the chassis in the follow-up process.

Ammonia is a nitrogen source favored by E. coli. <sup>[2]</sup> After E. coli absorbs ammonia in an aerobic environment, AMO can oxidize the ammonia into hydroxylamine. AMO has three subunits, of which amoA-amoB plays a major role in catalytic oxidation.

Since the oxidation product hydroxylamine is cytotoxic to E. coli <sup>[3]</sup>, it is necessary to further oxidize hydroxylamine to nitric oxide in time. The enzyme used in this step is HAO, which not only detoxifies E. coli, but also provides electrons to AMO when it oxidizes the hydroxylamine produced by AMO. <sup>[4]</sup>

At this time, the nitric oxide produced by oxidation will be further oxidized to nitrate by NOD (Nitric oxide dioxygenase), which plays an important role in the utilization of wet garbage compost. NOD activity was produced by the flavohemoglobin. When nitric oxide is present, flavohemoglobin exhibits nitric oxide dioxygenase activity. <sup>[5]</sup>

At this point, after the catalysis of three enzymes, the ammonia produced by the decay of wet garbage is finally oxidized into nitrate.

## References

1. Kuypers, M.M.M., H.K. Marchant, and B. Kartal, *The microbial nitrogen-cycling network.* Nat Rev Microbiol, 2018. **16**(5): p. 263-276.

2. Reitzer, L., *Nitrogen assimilation and global regulation in Escherichia coli.* Annu Rev Microbiol, 2003. **57**: p. 155-76.

3. Crossman, L.C., et al., *Heterologous expression of heterotrophic nitrification genes.* Microbiology-Sgm, 1997. **143**: p. 3775-3783.

4. Sayavedrasoto, L.A., N.G. Hommes, and D.J. Arp, *Characterization of the Gene Encoding Hydroxylamine Oxidoreductase in Nitrosomonas-Europaea.* Journal of Bacteriology, 1994. **176**(2): p. 504-510.

5. Gardner, P.R., et al., *Nitric oxide dioxygenase: An enzymic function for flavohemoglobin.* Proceedings of the National Academy of Sciences of the United States of America, 1998. **95**(18): p. 10378-10383.

      `)
      this.ele = a as HTMLElement
    }
  }
}
</script>
