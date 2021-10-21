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
export default class Description extends Vue {
  static id = 'Description'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
    const poc = this.$refs.poc as Element
    console.log(poc)
    if (poc) {
      poc.innerHTML = marked(`
# Abstract

Since the implementation of **household garbage sorting regulations** in Shanghai, the amount of food waste has reached a peak. However, **problems caused by odor** like unpleasant smell and health problems, have aroused great attention everywhere.This year, **Tongji_China** launches the **"LOOK!"** project to solve the problem. We construct two kinds of bioengineered E.coli to absorb **hydrogen sulfide** **and ammonia**, which are the two main ingredients in the odor. One uses enzymes related to sulfide oxidazation(**Sqr, Sdo, AprBA and Sat**), converting **hydrogen sulfide** to **sulfate**, while the other uses enzymes **AMO, HAO and NOD** to convert **ammonia** to **nitrate**. Besides, a **three-gear adjustable kill switch** based on the concentration of H2S and NH3 is added to ensure biosafety. Also, we **optimize our pathway** by high throughput screening and machine learning. Besides, we take implementation into consideration and construct models to **simulate the real environment**. With such efforts, we hope to solve the problems the odor has brought to people and downstream industries.

# Inspiration

Since **household garbage sorting regulations** were implemented in Shanghai, there have been many problems needed solving coming to people's view. Among them, **the odor of food waste** is one of the most common ones. We've heard many complaints about the odor, especially in summer. For example, in our school canteen, we need to pour the rest into the food waste bin after having meals. But the odor from the bins makes us unwilling to approach it. This makes us wonder, can we solve the odor of food waste? And this is what **Tongji_China** has done this year——**LOOK！a little odor killer**.

# Background

The **amount** of food waste is **increasing year by year** after household garbage sorting regulations were implemented in 2019. In 2020, it arrived at 9.6 thousand tons a day, with a 23.97% growth rate.While in 2021, it climbed to 10.3 thousand tons a day, 89% higher than that of 2019. [1]

## Treatment paths for food waste



There's a complete treatment path for food waste in Shanghai.



<img src="https://2021.igem.org/wiki/images/8/8b/T--Tongji_China--2-1%E6%B9%BF%E5%9E%83%E5%9C%BE%E5%A4%84%E7%90%86%E6%B5%81%E7%A8%8B.png" alt="2-1湿垃圾处理流程" style="max-width:100%" />



With such a huge amount of food waste, the problems of odor caused by food waste have come into our view.

## Unpleasant smell

There's no doubt that food waste is very smelly, especially in summer. After our online and offline research, we find that the unpleasant smell caused by food waste is very common. Waste treatment accounted for an average of 11.3% of all odor complaints in 2018-2020, making it the sector with the **highest number of odor complaints** in the last three years.

<img src="https://2021.igem.org/wiki/images/2/2d/T--Tongji_China--2-2_%E6%8A%95%E8%AF%89.png" alt="2-2 投诉" style="max-width:100%" />



<center>Industry distribution of odor complaints from 2018-2020[2]</center>

Besides,in the first season of 2018 only, there were **121 complaints** from residents nearby about the odor in Lao Gang District, a waste treatment centre in Shanghai.

## Health problems

Besides the unpleasant smell, the chemical substances in the odor may also lead to some **health problems** like respiratory, endocrine and nervous systems, and may be associated with the risk of cancer[3].Aatamila et al [4] found that odor from waste disposal centres may lead to a great impact on health symptoms such as shortness of breath, eye irritation, hoarseness, fever, and muscle pain.Gao et al [5] detected a total of 20 odorous substances in waste transfer stations, with a high proportion of emissions of benzene, toluene, methylene chloride, etc. The carcinogenic risk of 1,3-butadiene and benzene ranged from 10<sup>-6^ to 10^-4</sup>.



<img src="https://2021.igem.org/wiki/images/7/7f/T--Tongji_China--2-3_%E5%81%A5%E5%BA%B7.png" alt="2-3 健康" style="max-width:30%" />



## The Influence on downstream industries

According to our human practices at **Tian Wei Environmental Company**, which focuses on recycling food waste, we have learned that the odor of food waste can have great influence on **downstream industries**. To make the best use of resources, most of the wet waste is used for **composting**. However, the odor of food waste makes the compost too stinky to use.



<img src="https://2021.igem.org/wiki/images/5/57/T--Tongji_China--2-4_%E5%A0%86%E8%82%A5.png" alt="2-4 堆肥" style="max-width:30%" />



## Limitations of present odor elimination methods

After learning about the problems the odor has brought, we have done some research to learn about present treatment methods.

 ![chart](https://2021.igem.org/wiki/images/1/1a/T--Tongji_China--chart.png)

## Mechanism of odor gases generation

(1) Generation of H<sub>2</sub>S

- Sulphur-containing organic substances (e.g. sulphur-containing amino acids, sulforaphane, etc.) in water are degraded by anaerobic bacteria to become hydrogen sulphide [6].

- Reduction of sulphate in the presence of sulphate-reducing bacteria [7]

(2) Generation of NH<sub>3</sub>

- Ammonification reaction: organic nitrogen - ammonia (deaminase)

- N<sub>2</sub> in the environment is fixed to ammonia by some microbial nitrogen fixation

# Goals & Methods

In order to eliminate the odor effectively and safely, our design is divided into the following four parts.

## **Hydrogen sulfide oxidization module**

In order to remove hydrogen sulfide produced in food waste, we hope to oxidize **hydrogen sulfide** to **sulfate**, which is odorless, non-toxic and beneficial as an essential component in compost. We construct a hydrogen sulfide oxidation pathway in **E.coli** by expressing four enzymes related to **sulfur oxidation** from Acidithiobacillus spp.

## Ammonia oxidization module

For ammonia processing, we chose **nitrate** as our final product after thorough considerations. To build up an efficient **ammonia oxidation** pathway in E.coli, we hope to express three enzymes from Ammonia-oxidizing bacteria: **AMO** , **HAO** and **NOD**[8]

## Pathway optimization

To further improve the hydrogen sulfide and Ammonia oxidation efficiency of our bio-engineered bacteria, we have designed a high throughout strategy to optimize the expression level of these enzymes.

## Kill switch

To ensure biosafety, we have designed a three-gear adjustable kill switch based on odor sensors[9], Dre recombinase system[10] and toxin-antitoxin system[11]. It can live under culture and working conditions. Also it dies when leaking to the environment.

## Model

When it comes to the application level, we’ve built several models to predict the application future of our project.

### Model 1 :

We bulit a ODE model to predict whether our three-gear-adjustable kill switch can work as expected. We have also done some parameter analysis to find the possible improving direction. This model helped with our bio-safety considerations.

### Model 2:

We established a cellular automation model to simulate the dynamics of engineered bacteria spread and odour degradation in practical application. We also simulated the application in different environment, seasons and compared different ways of implementation. This model offered a guide for the improvement and application of our project.

# Reference:

[1] 上海市生态环境局.二〇一九年上海市固体废物污染环境防治信息公告[EB/OL].2020-06-10

[2] 生态环境部大气环境司.2018-2020年全国恶臭/异味污染投诉情况分析[EB/OL].2021-08-02

[3] 方晶晶,章骅,吕凡,邵立明,何品晶.生活垃圾收运过程中恶臭暴露的健康风险评估[J].中国环境科学,2015,35(03):906-916.

[4] Aatamila M, Verkasalo P K, Korhonen M J, et al. Odour annoyance and physical symptoms among residents living near waste treatment centres[J]. Environmental Research, 2011, 111(1): 164-170.

[5] Gao S, Bai Z P, Wang X Y, et al. Cancer risk assessment of volatile organic compounds in an ornament market in Tianjin, China[C]//2012 International Conference on Biomedical Engineering and Biotechnology. IEEE, 2012: 1247-1250.

[6] 任南琪,王爱杰,甄卫东.厌氧处理构筑物中SRB的生态学[J].哈尔滨建筑大学学报,2001(01):39-44.

[7] 赵宇华,叶央芳,刘学东.硫酸盐还原菌及其影响因子[J].环境污染与防治,1997(05):41-43.

[8] Kim, D., et al., *Transcriptomic Identification and Biochemical Characterization of HmpA, a Nitric Oxide Dioxygenase, Essential for Pathogenesis of Vibrio vulnificus.* Front Microbiol, 2019. 10: p. 2208.

[9] Liu, H., et al., *Synthetic Gene Circuits Enable Escherichia coli To Use Endogenous H(2)S as a Signaling Molecule for Quorum Sensing.* ACS Synth Biol, 2019. 8(9): p. 2113-2120.

[10] Anastassiadis, K., et al., *Dre recombinase, like Cre, is a highly efficient site-specific recombinase in E. coli, mammalian cells and mice.* Dis Model Mech, 2009. 2(9-10): p. 508-15.

[11] Simanshu, D.K., et al., *Structural basis of mRNA recognition and cleavage by toxin MazF and its regulation by antitoxin MazE in Bacillus subtilis.* Mol Cell, 2013. 52(3): p. 447-58.
      `)
      this.ele = poc as HTMLElement
    }
  }
}
</script>
