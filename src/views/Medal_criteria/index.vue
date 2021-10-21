<template lang="pug">
v-row
  v-col.col-4
    Anchor(v-if="ele" :ele="ele")
  v-col.col-8
    div(ref="mc").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Medal extends Vue {
  static id = 'Medal'
  ele: HTMLElement | null = null

  mounted (): void {
    const mc = this.$refs.mc as Element
    console.log(mc)
    if (mc) {
      mc.innerHTML = marked(`
# Medal criteria

## Bronze

**Competition deliverable:**

We've finished our wiki, the presentation video and filled in the judging form on time.

**Attributions**: https://2021.igem.org/Team:Tongji_China/Attributions

We've recorded each members' attributions and those who contribute to our project in detail.

**Project Description**: https://2021.igem.org/Team:Tongji_China/Description

We've described our project from abstract, inspiration, background and goals&methods.

**Contribution**: https://2021.igem.org/Team:Tongji_China/Contribution

We've finished a guide to design a questionnaire in order to help the future iGEM teams when designing questionnaires. Also we updated some information of existed parts.

## Silver

**Engineering Success**: https://2021.igem.org/Team:Tongji_China/Engineering

We've done successful engineering in expression of H~2~S oxidization related enzymes.

**Collaboration**: https://2021.igem.org/Team:Tongji_China/Collaborations

We've collaborated with GA_State_SW_Jiaotong, Tongji_Software, SJTU-BioX-Shanghai and ICII(Into China, Into iGEM), during which we've got much improvement for our project.

**Human Practices**: https://2021.igem.org/Team:Tongji_China/Human_Practices

We've done a series of human practices based on our values to explore the meaning of our project to the world.

**Proposed Implementation**: https://2021.igem.org/Team:Tongji_China/Implementation

We've taken implementation of our project into consideration and finished much work to test our application meanings.

## Gold

**Integrated Human Practices**: https://2021.igem.org/Team:Tongji_China/Human_Practices

We've finished a series of human practices in different stages of our project, most of them determines our choice in purpose, design and execution.

**Project Modeling**: https://2021.igem.org/Team:Tongji_China/Model

We've built two models, one is for predicting whether our three-gear-adjustable kill switch can work as expected, the other one is for simulating the spread and working efficiency of our bacteria.

**Partnership**: https://2021.igem.org/Team:Tongji_China/Partnership

We've established solid partnership with CPU_CHINA, FAFU-CHINA and SJTang. Our long-term partnership has great meaning to both of our teams.

**Proof of Concept**:  https://2021.igem.org/Team:Tongji_China/Proof_Of_Concept

We've tested the efficiency of our bacteria of eliminating the odor of eggs.

**Education & Communication:** https://2021.igem.org/Team:Tongji_China/Communication

In order to introduce synthesis biology to more people, we've designed different activities to different ages of people, from primary school students to college student and received many reflections.

      `)
      this.ele = mc as HTMLElement
    }
  }
}
</script>
