<template lang="pug">
v-row
  v-col.col-4
    Anchor(v-if="ele" :ele="ele")
  v-col.col-8
    div(ref="safety").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Safety extends Vue {
  static id = 'Safety'
  ele: HTMLElement | null = null

  mounted (): void {
    const safety = this.$refs.safety as Element
    console.log(safety)
    if (safety) {
      safety.innerHTML = marked(`

# Safety

Team Tongji_China obeys the **safety policy of iGEM 2021**. All the experiments were done in the Open Laboratory of Innovation Practice for College Students. All the equipment and devices belonged to **bio-safety level 1**, and reagent cabinet was equipped for storing hazardous reagents.

<img src="https://2021.igem.org/wiki/images/0/0c/T--Tongji_China--3-7-1.png" style="zoom: 70%" />

<img src="https://2021.igem.org/wiki/images/7/7f/T--Tongji_China--3-7-2.png" style="zoom: 70%" />

<img src="https://2021.igem.org/wiki/images/4/46/T--Tongji_China--3-7-3.png" style="zoom: 70%" />

<center>Our laboratory</center>

We have established detailed **laboratory safety rules**, which were revised by our advisors, instructor and PI. All the team members taking part in experiments were required to obey the laboratory safety rules.

<img src="https://2021.igem.org/wiki/images/8/83/T--Tongji_China--3-7-4_%E5%9F%B9%E8%AE%AD.jpg" style="zoom: 50%" />

<center>Students are learning about safety training</center>

Before the experiments began, all the members were required to attend to the **safety training** of the school. Advisors and instructor also imparted proper experimental operations of equipment (such as PCR amplifier, clean bench and autoclave) and reagents (such as NaOH and nucleic acid dye). All the equipment in the lab would be regularly checked. All the experiments must be done when there are more than two people.

<img src="https://2021.igem.org/wiki/images/1/1b/T--Tongji_China--3-7-5_.jpg" style="zoom: 23%" />

<center>Students are doing experiments in the clean bench</center>

During the stage of project design, the usage of pathogenic bacteria would be avoided. Bacterium-polluted wastes were stored separate from other experimental wastes and would be sterilized before abandoning, to avoid GMO leak to the environment.

## Project safety

Our project in iGEM 2021 is trying to solve odor problems caused by food waste. We construct two kinds of bioengineered E.coli to absorb H2S and NH3, which are the two main ingredients in the odor. Given that the targets we are dealing with have a close relationship with people, we 've considered thoroughly the safety of our project.

#### Chassis organism：*Escherichia coli* TOP10,*Escherichia coli DH5alpha and Escherichia coli BL21(DE3)*

All the E.coli strains we used in experiments belong to risk group 1, namely do not cause disease in healthy adult humans.

#### Chemicals:

The expression of our plasmids needs some harmful chemicals like H2S and Na2S. But we've conducted a series of protective actions like wearing masks. Also, the concentration of the chemicals won't be too high to do harm to people's health.

#### Killing switch

In order to avoid the leakage of our bioengineered bacteria into the environment, we've designed a three-gear adjustable kill switch. It works based on the concentration of H2S and NH3 which consists of odor sensors, Dre recombinase system and toxin-antitoxin system. Under cultural conditions, none of the pathway can be activated. When the bioengineered bacteria are put into work, high density of hydrogen sulfide in the environment induces the expression of Dre recombinase and MazF (antitoxin), followed by terminator removal and MazE (toxin) expression. Once our bioengineered bacteria leak to the environment, low density of hydrogen sulfide inhibits MazF (antitoxin) expression. Without the rescue of MazF(antitoxin), bioengineered bacteria will be killed by the accumulation of MazE (toxin). In this way ,we succeed in adjusting the survival and death of the bacteria by adjusting the concentration of H2S and NH3.**(To learn more)**[链接至3.1design-kill switch]

      `)
      this.ele = safety as HTMLElement
    }
  }
}
</script>
