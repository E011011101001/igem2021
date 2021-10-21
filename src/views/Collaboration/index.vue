<template lang="pug">
v-row
  v-col.col-4
    Anchor(v-if="ele" :ele="ele")
  v-col.col-8
    div(ref="poc").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Collaboration extends Vue {
  static id = 'Collaboration'
  ele: HTMLElement | null = null

  mounted (): void {
    const poc = this.$refs.poc as Element
    console.log(poc)
    if (poc) {
      poc.innerHTML = marked(`
# Collaboration

We realize that igem is not only a competition for solving practical problems using synthetic biology, but it also provides a community for every igemer to interact and collaborate. We have therefore worked well with a number of igem teams over the course of this year's competition and both teams have benefited from our collaborative efforts.

## GA_State_SW_Jiaotong

![f24f1a161a9fcd1252682c23fbd94e8](https://2021.igem.org/wiki/images/3/3d/T--Tongji_China--f24f1a161a9fcd1252682c23fbd94e8.jpg)

On 5 June 2021, GA_State_SW_Jiaotong and Tongji_China held an online discussion on the development of the project and the design of the questionnaire.

### GA_State_SW_Jiaotong helped us:

GA_State_SW_Jiaotong put forward plenty of constructive advice on the designing of our questionnaire. For example, food waste doesn't have much to do with ages, so they suggested us decreasing the sorting of ages. Besides, they suggested us trying offline publicity to increase the diversity of respondents.

### We helped GA_State_SW_Jiaotong :

We proposed some advice on their designing and modeling. For example, we introduced our kill switch to them, giving them an alternative design of kill switch.

### Together makes us stronger

We've finished **a complete and scientific questionnaire** after the discussion of questionnaire designing. As the questionnaires are important for the projects of both of us, the cooperation on questionnaire helps us **receive statistics in line with reality** and define the **following trend of the project**. Besides, we gave GA_State_SW_Jiaotong some advice on designing and modeling.



## Tongji_Software

![tongji-software](https://2021.igem.org/wiki/images/a/ab/T--Tongji_China--tongji-software.png)

We have been in good relationship with Tongji_Software for a long time, so we have discussed with them for many times for our design and human practices. Before the 8th CCiC(Conference of China iGEMer Community), we made a pre-presentation together and asked for advice from teachers of our school. Besides, we made a collaboration on education in the seeding program for high school students. We gave online lecture on college lives, synthesis biology and the current iGEM project.

## SJTU-BioX-Shanghai

<img src="https://2021.igem.org/wiki/images/4/4c/T--Tongji_China--a9e8ef95983f46f080f69526cf37d97.png" alt="a9e8ef95983f46f080f69526cf37d97" style="zoom:10%;" />

SJTU-BioX-Shanghai contacted us when learning that we conducted the seeding program since they wanted to give lectures to more people. So we held an online meetup to talk about our ideas and experience. We happened to find that both our teams wanted to give a lecture to college students so we planned to  hold a lecture together. However, because of the COVID-19, we couldn't give a lecture together, therefore we introduced each other's project when giving our own lecture.

### SJTU-BioX-Shanghai helped us:

Since iGEM is a crossing-field competition, SJTU-BioX-Shanghai proposed that the targets of education shouldn't be limited to biology-related majors. On one hand, iGEM aims at introducing synthesis biology to more people. On the other hand, crossing fields may bring us more inspiration and solution methods. Therefore we took their advice and decided to involve students with more majors.

### We helped SJTU-BioX-Shanghai:

We put forward that we need to focus on the reflection of audience, therefore we introduced that a post-lecture questionnaire we used in the seeding program which guided this lecture. SJTU-BioX-Shanghai adopted our advice and designed a questionnaire for different majors in order to learn about the accpetance of their audience.

### Together makes us stronger:

According to our collaboration on education, we learned from each other and got much experience on education. Besides, in our lectures facing college students, we described each other's project and publicize each other's work.

## ICII

We realize that we need to introduce synthesis biology to more people. Therefore, we’ve designed different activities for different ages of people. <span style="color: red;">**==(To see more:链接至6.2 education)==**</span>

When it comes to education for primary school students, we participated in ICII(Into China, Into iGEM) hosted by NAU-CHINA and CPU_CHINA. Here is what we’ve done.



      `)
      this.ele = poc as HTMLElement
    }
  }
}
</script>
