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
export default class Partnership extends Vue {
  static id = 'Partnership'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
    const poc = this.$refs.poc as Element
    console.log(poc)
    if (poc) {
      poc.innerHTML = marked(`
## CPU_CHINA

<img src="https://2021.igem.org/wiki/images/1/19/T--Tongji_China--7.4-7.png" alt="7.4-7" style="max-width:100%" />

Tongji_China and CPU_CHINA have been in good relationship for many years. Therefore, this year we contacted each other at the very beginning of our project.

### Our timeline

#### April

In April, with instructors of both teams, we held an online meetup to **talk about our topics**. We got familiar with each other and shared our ideas on opponents' topics. We found that the problems we focus on are **about waste**. Tongji_China has focused on the **odor** caused by food waste after the implementation of garbage sorting regulations. While CPU_CHINA noticed the phenomenon that **packaging waste** were piled up near express transfer stations. Since the background of us is similar, **defined the willing to establish partnership** primarily.

<img src="https://2021.igem.org/wiki/images/b/bf/T--Tongji_China--7.4-8.jpeg" alt="7.4-8" style="max-width:100%" />

<img src="https://2021.igem.org/wiki/images/6/62/T--Tongji_China--7.4-9.jpeg" alt="7.4-9" style="max-width:100%" />

<center>Figure1-1 Our first online meetup</center>

#### May

In May, our members came to **Nanjing** and had an **offline communication** with CPU_CHINA. Both of us had a more concrete **design plan** and we exchanged our ideas on the design. On the meetup, Tongji_China asked whether our **genes should be expressed intracellularly or extracellularly**. We proposed that if we wanted to express it extracellularly, secreted expression of SQR and SOD might have the problem of low transmembrane rate and  the enzymes produced by lysis-engineered bacteria recovery had the problem of **enzyme degradation by intracellular proteases**. In this regard, CPU-CHINA **proposed two solutions** respectively: (i) the target protein can be assisted to exit the cell by **constructing a signal peptide library** and screening the signal peptide with the highest efficiency to avoid the encounter between the protease and the cell. (ii) The addition of **protease preparations or EDTA** during the lysis of E. coli could be considered to inhibit protease activity. Given that both of the solutions need great work, we finally decided to **express our genes intracellularly**. 

On the other hand, since we learned that CPU-CHINA was going to **conduct a questionnaire** and we happened to work out a guide on how to design a questionnaire. Therefore, we **shared some experience** to them and proposed some **revising advice**. [(To see more)](/Team:Tongji_China/Contribution)

<img src="https://2021.igem.org/wiki/images/9/92/T--Tongji_China--7.4-12.jpeg" alt="7.4-12" style="max-width:100%" />

<center>Figure1-2 Our trip to Nanjing</center>

#### June

In June, there's **China iGEM online meetup** where teams can communicate their project. In order to do a **perfect presentation understood by everyone**, we held an online meetup to **give a pre-presentation** to each other. After presenting our projects, we had **further understanding** of each other's work and **proposed some advice for presentation**.

<img src="https://2021.igem.org/wiki/images/d/d1/T--Tongji_China--7.4-10.jpeg" alt="7.4-10" style="max-width:100%" />

<center>Figure1-3 Our online meetup to pre-present</center>

#### July

Both of us wanted to **introduce synthesis biology** to more people, **especially to children**. Therefore, **CPU_CHINA launched 'ICII'** (Into China, Into iGEM) that focused on the education of children. Tongji_China took part in the activity and together we **spread the idea of iGEM to children from different cities**. [(To see more)](/Team:Tongji_China/Collaboration)

<img src="https://2021.igem.org/wiki/images/8/85/T--Tongji_China--7.4-16.png" alt="6.3-1" style="max-width: 100%;" title="">

#### August

Since the COVID-19 break out in part of Shanghai ,our predicted trip to **waste treatment factory** had to be delayed. Luckily, CPU_CHINA would visit one in Nanjing, therefore we asked for their help to **collect some information we needed**. Through the information they collected, we realized that **there's already methods to deal with odor in factories**. So we defined our application scenarios to be **the front and middle end**.==(To see more)==

### Summary:

We've established solid partnership with CPU_CHINA after collaborations in different stages of our project. **In the beginning** of our project, we discussed the **topic and our design**, which helps a lot in our following project. Besides, we **pre-presented** to each other to gather advice from the view of audience which **makes our presentation more easy-to-understand**. Besides, we participated in **ICII** launched by CPU_CHINA to make more **children understand the charm of synthesis biology**. Last but not least, CPU_CHINA helps us in **human practices** and collects much useful information which helps us in **defining the implementation scenarios**. 

See our partnership on [CPU_CHINA's wiki](https://2021.igem.org/Team:CPU_CHINA/Partnership)


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

<span style="color: red">==(To learn more)==</span>

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
      `)
      this.ele = poc as HTMLElement
    }
  }
}
</script>
