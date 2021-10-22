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
export default class Collaboration extends Vue {
  static id = 'Collaboration'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
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

See our collaboration on [GA_State_SW_Jiaotong's collaboration](https://2021.igem.org/Team:GA_State_SW_Jiaotong/Collaboration).

## Tongji_Software

![tongji-software](https://2021.igem.org/wiki/images/a/ab/T--Tongji_China--tongji-software.png)

See our collaboration on [Tongji_Software's collaboration](https://2021.igem.org/Team:Tongji_Software/Collaboration).

We have been in good relationship with Tongji_Software for a long time, so we have discussed with them for many times for our design and human practices. Before the 8th CCiC(Conference of China iGEMer Community), we made a pre-presentation together and asked for advice from teachers of our school. Besides, we made a collaboration on education in the seeding program for high school students. We gave online lecture on college lives, synthesis biology and the current iGEM project.

## SJTU-BioX-Shanghai

<img src="https://2021.igem.org/wiki/images/4/4c/T--Tongji_China--a9e8ef95983f46f080f69526cf37d97.png" alt="a9e8ef95983f46f080f69526cf37d97" style="max-width:40%" />

SJTU-BioX-Shanghai contacted us when learning that we conducted the seeding program since they wanted to give lectures to more people. So we held an online meetup to talk about our ideas and experience. We happened to find that both our teams wanted to give a lecture to college students so we planned to  hold a lecture together. However, because of the COVID-19, we couldn't give a lecture together, therefore we introduced each other's project when giving our own lecture.

### SJTU-BioX-Shanghai helped us:

Since iGEM is a crossing-field competition, SJTU-BioX-Shanghai proposed that the targets of education shouldn't be limited to biology-related majors. On one hand, iGEM aims at introducing synthesis biology to more people. On the other hand, crossing fields may bring us more inspiration and solution methods. Therefore we took their advice and decided to involve students with more majors.

### We helped SJTU-BioX-Shanghai:

We put forward that we need to focus on the reflection of audience, therefore we introduced that a post-lecture questionnaire we used in the seeding program which guided this lecture. SJTU-BioX-Shanghai adopted our advice and designed a questionnaire for different majors in order to learn about the accpetance of their audience.

### Together makes us stronger:

According to our collaboration on education, we learned from each other and got much experience on education. Besides, in our lectures facing college students, we described each other's project and publicize each other's work.

See our collaboration on [SJTU-BioX-Shanghai's collaboration](https://2021.igem.org/Team:SJTU-BioX-Shanghai/Collaboration).

## ICII

We realize that we need to introduce synthesis biology to more people. Therefore, we’ve designed different activities for different ages of people. [(To see more)](/Team:Tongji_China/Communication)

When it comes to education for primary school students, we participated in ICII (Into China, Into iGEM) hosted by NAU-CHINA and CPU_CHINA. Here is what we’ve done.

<video width="100%" controls>
  <source src="https://2021.igem.org/wiki/images/a/a4/T--Tongji_China--output.mp4" type="video/mp4">
</video>

## FAFU-CHINA

<img src="https://2021.igem.org/wiki/images/5/5f/T--Tongji_China--7.4-6.png" alt="7.4-6" style="max-width:30%" />

We not only hope to eliminate the odor of food waste but also want to **synthesize aroma substances**, breaking people's long-term bias on food waste. On the **China iGEM online meet-up**,  we learned that **FAFU-CHINA** were doing **a project generating aroma**, therefore, we made a communication with members of FAFU-CHINA, putting forward the idea of partnership.

<img src="https://2021.igem.org/wiki/images/b/b8/T--Tongji_China--7.4-1.png" alt="7.4-1" style="max-width:100%" />

### Initial stage of the project

After proposing the idea of partnership, the two teams held **an online meetup** when both of us **shared the content and progress of our project**. During our talk, we happened to find that both of us wanted to **do a social survey**. Therefore, we **exchanged the content of our questionnaire** and **put forward some advice** respectively.

<img src="https://2021.igem.org/wiki/images/8/82/T--Tongji_China--7.4-2.png" alt="7.4-2" style="max-width:100%" />

<img src="https://2021.igem.org/wiki/images/b/bb/T--Tongji_China--7.4-3.png" alt="7.4-3" style="max-width:100%" />

#### FAFU-CHINA helps us

FAFU-CHINA suggested us referring to some **proven questionnaire information** already available such as CGSS(China general social survey), ISSP(International Social Survey Program), EASS(East Asian Social Survey). Besides they recommended some books on questionnaire like 'Wan Juan Fang Fa' published by Chongqing University. Meanwhile, FAFU-CHINA suggested us to **pre-publish** to learn about opinions of more people.

#### We help FAFU-CHINA

We put forward some ideas on the questionnaire of FAFU-CHINA as well. We proposed that the description of the questionnaire should be **clear and easy-to-understand**, or they can try some **examples** to make concrete description. Besides, we thought that they can **combine multiple-choice and fill-in-the-blank questions** and understand targets' ideas more completely.

#### Together makes us stronger

We've finished **a complete and scientific questionnaire** after the discussion of questionnaire designing. As the questionnaires are important for the projects of both of us, the cooperation on questionnaire helps us **receive statistics in line with reality** and define the **following trend of the project**.



### Middle stage of the project

We still kept in frequent contact in the following progress of the project. As both of our projects **have close relationship with human beings** in the application scenarios, we though it essential to talk about the **reasonableness of our projects from the view of morality**. Given that we are in different cities, we **held a talk about morality in our school respectively** and worked as the **online organizers of opponent's activity**, making more people participated into the talk about morality.

<img src="https://2021.igem.org/wiki/images/b/bf/T--Tongji_China--7.4-4.png" alt="7.4-4" style="max-width:100%" />

#### FAFU-CHINA helps us

On June 15th of 2021, we invited **Professor Xinghua Lu** from College of Humanities in Tongji University to give us a talk between synthesis biology and philosophy themed on **'Philosophy vs Synthesis biology, human beings and rubbish in biosphere'**. **FAFU-CHINA**, the online organizer, **helped organize the online part of the project**. We had a new opinion on the project and synthesis biology from the view of philosophy. With help of FAFU-CHINA, we **make more people involved into the talk**, making the **spark of thoughts overcome the restriction of distance**.

#### We help FAFU-CHINA

FAFU-CHINA invited **Professor Liye Zhan** from Fujian Agriculture and Forestry University who has worked in psychological health education and has much experience in human practices. We talked about the problems of **privacy and morality of targets** in the questionnaire. Under suggestion of Professor Liye Zhan, we **explained our aims** before collecting questionnaires and **respect the willingness** of targets. Also, we studied **related laws** together. All the circulation and collection of our questionnaires are based on serious discussion.

#### Together makes us stronger

We realized that it's unavoidable to face **morality problems** when solving problems in real life by means of **synthesis biology**. In order to learn opinions of people **in different areas**, we organized **activities related to morality** and **worked as online organizer**, making more people involved and learning about more opinions.



### Ended stage of the project

When it comes to the post-project, we held an online meetup about the application problems.

#### FAFU-CHINA helps us

As the initial idea of our partnership, we hope to synthesize aroma as well as eliminating the odor of food waste. The linalool producted by FAFU-CHINA does well in covering unpleasant smell of polysulfides. Therefore we decided to co-cultivate the bio-engineered bacteria used for oxidizing H<sub>2</sub>S and generating linalool to eliminate the odor as well as generate aroma. FAFU-CHINA build a model to simulate the environment where the two kinds of bacteria are co-cultivated. The results are as follows:

| group | temperature | xylose | glucose | pH   | alcohols | biomass |
| ----- | ----------- | ------ | ------- | ---- | -------- | ------- |
| 1     | 30          | 8      | 16      | 7    | 0        | 0.663   |
| 2     | 37          | 8      | 16      | 7    | 0        | 1       |
| 3     | 30          | 8      | 16      | 6    | 0        | 0.943   |
| 4     | 37          | 8      | 16      | 6    | 0        | 1.093   |
| 5     | 30          | 8      | 16      | 5.5  | 0        | 1.58    |
| 6     | 32.5        | 8      | 16      | 5.5  | 0        | 1.68    |
| 7     | 35          | 8      | 16      | 5.5  | 0        | 1.024   |
| 8     | 37          | 8      | 16      | 5.5  | 0        | 0.963   |
| 9     | 30          | 8      | 16      | 5.25 | 0        | 1.289   |
| 10    | 37          | 8      | 16      | 5.25 | 0        | 0.967   |
| 11    | 30          | 8      | 16      | 5    | 0        | 1.360   |
| 12    | 37          | 8      | 16      | 5    | 0        | 0.497   |
| 13    | 30          | 12     | 12      | 7    | 0        | 0.557   |
| 14    | 37          | 12     | 12      | 7    | 0        | 0.968   |
| 15    | 30          | 12     | 12      | 6    | 0        | 0.925   |
| 16    | 37          | 12     | 12      | 6    | 0        | 1.000   |
| 17    | 30          | 12     | 12      | 5.5  | 0        | 1.32    |
| 18    | 32.5        | 12     | 12      | 5.5  | 0        | 1.48    |
| 19    | 35          | 12     | 12      | 5.5  | 0        | 1.96    |
| 20    | 37          | 12     | 12      | 5.5  | 0        | 0.899   |
| 21    | 30          | 12     | 12      | 5.25 | 0        | 1.113   |
| 22    | 37          | 12     | 12      | 5.25 | 0        | 0.877   |
| 23    | 30          | 12     | 12      | 5    | 0        | 1.288   |
| 24    | 37          | 12     | 12      | 5    | 0        | 0.321   |
| 25    | 30          | 8      | 16      | 7    | 1.1      | 0.234   |
| 26    | 37          | 8      | 16      | 7    | 1.1      | 0.643   |
| 27    | 30          | 8      | 16      | 6    | 1.1      | 0.356   |
| 28    | 37          | 8      | 16      | 6    | 1.1      | 0.654   |
| 29    | 30          | 8      | 16      | 5.5  | 1.1      | 1.134   |
| 30    | 32.5        | 8      | 16      | 5.5  | 1.1      | 1.278   |
| 31    | 35          | 8      | 16      | 5.5  | 1.1      | 0.634   |
| 32    | 37          | 8      | 16      | 5.5  | 1.1      | 0.654   |
| 33    | 30          | 8      | 16      | 5.25 | 1.1      | 0.625   |
| 34    | 37          | 8      | 16      | 5.25 | 1.1      | 0.634   |
| 35    | 30          | 8      | 16      | 5    | 1.1      | 0.999   |
| 36    | 37          | 8      | 16      | 5    | 1.1      | 0.135   |

[FAFU-CHINA's wiki](https://2021.igem.org/Team:FAFU-China/Model)

#### We help FAFU-CHINA

At the same time, we started to **do experiments to test** our envisaged application scenarios. Therefore we received the linalool from FAFU-CHINA and planned to **react the linalool and our bio-engineered bacteria with H~2~S**. Then we will test the **components of treated gases** in order to define whether the odor is treated after processing.

#### Together makes us stronger

The exploration in application makes both of our project **more complete**. For FAFU-CHINA, applying the aroma generating microorganism provides **an alternative future** for their project. For Tongji_China, eliminating odor as well as generating aroma helps us solve the problem **more completely** and provides a more **pleasant working environment** for related people, which is **in line with our values**.

<img src="https://2021.igem.org/wiki/images/e/ee/T--Tongji_China--7.4-5.png" alt="7.4-5" style="max-width:100%" />

See our partnership on [FAFU-CHINA's wiki](https://2021.igem.org/Team:FAFU-China/Partnership)

### Summary

We've established solid partnership with FAFU-CHINA after learning that their project can help ours in application. **At the initial stage**, we talked about our design **on questionnaire** and received scientific statistics which **define the following trend of the project**. **At the middle stage**, we **co-organized** some online and offline **lectures on morality** to talk about the morality problems we meet in the project. **At the ended stage**, we explored the possibility that we can **co-cultivate our bacteria** to **deodorizing while generating aroma by means of model**. 

## SJTang

We met with SJTang during the 8th CCiC(Conference of China iGEMer Community). They constructed bioengineered bacteria to produce hydrogen by modifying E.coli and R.palustris. We realized that food waste is kind of valuable resources which we can utilize. So we wanted to develop more application scenarios of our project. So we talked to SJTang and came  to a consensus that we would co-cultivate the modified hydrogen-producing bacteria and our deodorizing bacteria to realize deodorizing while producing hydrogen. On the other hand, since our implementation scenarios are in waste bins where much bacteria live, it's essential to test co-cultivating environments.

Then SJTang got our bio-engineered bacteria and helped us with the experiment.

<img src="https://2021.igem.org/wiki/images/3/32/T--Tongji_China--7.4-13.png" alt="7.4-13" style="max-width:100%" />

<center>Growth curve of 3 different strains. HoxG1 for Hydrogenase expression, T7-Sqr and SSAS for sulfide oxidization.</center>
<br/>

The experiment showed that our SSAS bacteria used for degrading S<sup>2-</sup> have similar growth rates with E.coli modified by SJTang's hydrogenase. So SJTang used SSAS and their hydrogenase strain for co-cultivation and did some futher experiments.

<img src="https://2021.igem.org/wiki/images/d/d2/T--Tongji_China--7.4-14.png" alt="7.4-14" style="max-width:100%" />

<center>Growth curve of different strains. Both SSAS and HoxG1 use E.coli BL21 as chassis.</center>
<br>

After doing experiments, SJTang found that this two kinds of bacteria had similar living conditions. So they induced the expression of sulfide oxidization enzymes and tested the efficiency of removing S<sup>2-</sup> in the presence of the other bacteria. The results are as follows:

<img src="https://2021.igem.org/wiki/images/0/09/T--Tongji_China--7.4-15.png" alt="7.4-15" style="max-width:100%" />

<center>S2- concentration test. Use OD 665nm for concentration domination. The higher the OD 665nm value, the greater the S2- concentration.</center>
<br>


The results show that after adding the E.coli modified by SJTang's hydrogenase, the concentration of S2- in the solution increases, although without an obvious difference. However it indicates us that we need to consider more when applying our bacteria into a complex environment. The specific reasons for this result require the cooperation of the two teams to conduct a further exploration afterward.

To see our collaboration on [SJTang's collaboration](https://2021.igem.org/Team:SJTang/Partnership)

## DUT_China

On the **China iGEM online meet-up**, we shared about our kill switch which aroused great interests from DUT_China. Therefore, they had a heated discussion on the design of kill switch with us. They were **inspired by our design of kill switch** and  **designed a kill switch** for E.coli BL21/pET28a-PD-MD-hA (Secretory) in the environment.                                                                                                                                                         

To see our collaboration on [DUT_China's collaboration](https://2021.igem.org/Team:DUT_China/Collaboration)
      `)
      this.ele = poc as HTMLElement
    }
  }
}
</script>
