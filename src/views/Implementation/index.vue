<template lang="pug">
v-row
  v-col.col-3
    Anchor(v-if="ele" :ele="ele")
  v-col.col-9
    div(ref="mddiv").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Implementation extends Vue {
  static id = 'Implementation'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
    const mddiv = this.$refs.mddiv as Element
    console.log(mddiv)
    if (mddiv) {
      mddiv.innerHTML = marked(`
# Implementation

We not only want to prove that our project works in laboratory ,but we also want to go further and prove that it can be used in real life, which requires us to consider questions about the practical application.

## 1. Application scenario

After our preliminary human practice, we found that the front and middle ends of food waste treatment have not formed a scientific and systematic deodorisation method due to the small volume, so we set our application scenario as the front and middle ends of wet waste treatment, like food waste bins, waste transfer stations, etc. We envision that our biological product will be distributed to our target group in the form of lyophilised powders. They can pour and spread them directly onto the wet waste pile when required, and that our product will be able to effectively detect the concentration of hydrogen sulfide and Ammonia in the environment.

Besides, since food waste is very valuable resource for us to use, we want to utilize it fully. Therefore we have partnership with SJTang and explored the possibility that producing hydrogen while eliminating H<sub>2</sub>S by co-cultivating our bacteria.

## 2. End users

Once we had identified our application scenario, we targeted our audience at residents, students, and workers involved in related waste treatment. We envision that our biological product will be distributed to our target group in the form of lyophilised powders. They can pour and spread them directly onto the wet waste pile when required, and that our product will be able to effectively detect the concentration of hydrogen sulfide and Ammonia in the environment and begin to deodorise the odor as the environment warms up and a certain change in water and oxygen concentration. A questionnaire was set up to find out how receptive they were to the use of synthetic biology as a means of deodorisation, and the results showed that 45.39% of our audience said they would be willing to try synthetic biology, while there were still concerns about safety and other issues.

## 3. Safety

It works based on the concentration of H<sub>2</sub>S and NH<sub>3</sub> which consists of odor sensors, Dre recombinase system and toxin-antitoxin system. Under cultural conditions, none of the pathway can be activated. When the bio-engineered bacteria are put into work, high density of hydrogen sulfide in the environment induces the expression of Dre recombinase and MazF (antitoxin), followed by terminator removal and MazE (toxin) expression. Once our bio-engineered bacteria leak to the environment, low density of hydrogen sulfide inhibits MazF (antitoxin) expression. Without the rescue of MazF(antitoxin), bio-engineered bacteria will be killed by the accumulation of MazE (toxin). In this way ,we succeed in adjusting the survival and death of the bacteria by adjusting the concentration of H<sub>2</sub>S and NH<sub>3</sub>. [(To learn more)](/Team:Tongji_China/Design)

## 4. Efficiency

Besides safety, the complex situations in real life make us consider whether our engineered bacteria still work in real environment. In order to understand this problem, we consult much literature, ask for help from specialists and try cooperation with other teams.

### 4.1 Initial validation of efficiency

We first simulated a hydrogen sulphide-producing wet waste environment using egg liquor, to which we added our engineered bacterial broth in a mixed culture. The results of the incubation showed that the wild-type egg solution tested significantly positive for sulphur ions after incubation, while the egg solution with our engineered bacteria tested negative for sulphur ions. The results provide preliminary evidence of the potential of using engineered bacteria to inhibit the production of hydrogen sulfide.

### 4.2 More work to promote the efficiency：Living conditions

There are very many other bacteria in the food waste bins and they have to live in an anaerobic state.In the further composting process, food waste will be treated in high temperature. This series of harsh survival environments made us realize that our bio-engineered bacteria is difficult to survive in this scenario. After communicating with Professor Xinping Zeng, we intend to provide a relatively stable living environment for the engineered bacteria in the form of biochar to avoid competition with other bacteria. In addition we will further consider how to improve the survival of the engineered bacteria under extreme conditions such as anaerobic high temperatures.

Besides, this year we have a solid partnership with FAFU-CHINA, whose project aimed at generating linalool by yeast. Therefore, we tried to cultivate our bio-engineered bacteria together with their yeast. They made a model to predict the living conditions of our microorganism.[(To learn more)](https://2021.igem.org/Team:Tongji_China/Partnership)

### 4.3 More work to promote the efficiency：modeling Work efficiency

During our interaction with the professors in our school, they suggested to us that the practical application would require a combination of the rate of gas production and the rate of gas's diffusion into E. coli. Therefore we established a cellular automation model to simulate the dynamics of engineered bacteria spread and odor degradation in practical application. We also simulated the application in different environment, seasons and compared different ways of implementation. [(To learn more)](https://2021.igem.org/Team:Tongji_China/Model)

<img src="https://2021.igem.org/wiki/images/e/ef/T--Tongji_China--6.3-1.png" alt="6.3-1" style="max-width:100%" />


### 5.Other challenges needed to be considered

### **5.1 Simulation of real environments: Interaction of engineered and native bacteria**

In the modelling work we have completed this year, we have simulated the propagation and odour degradation kinetics of engineered bacteria in practical applications by building a cellular automation model and modelling how this is achieved in different environments and seasons. However, this work is purely conceptual and we will also need to add experiments on the efficiency of our engineered bacteria for deodorisation in field use. It will be a challenge to establish the experimental site and the scale of the experiments in the subsequent work. We will work with the School of Environmental Studies at Tongji University and our team of friends to discuss and collaborate further.

### **5.2 Simulation of real environments: Deodorisation efficiency of engineered bacteria in relation to the type of food waste deposited**

In the work we have already completed this year, we predicted the results of our engineered bacteria co-culture application with yeast, and we also realised that the biochar form could provide a relatively stable environment for the engineered bacteria to live in, avoiding competition with other bacteria. However, the question remains as to how to increase the deodorisation efficiency of our engineered bacteria in a real environment and the effect on indigenous bacteria. Further work is needed on the effect of indigenous bacteria species in wet waste on engineered bacteria, and it remains a challenge for us as to how many environmental simulations we can go through to achieve appreciable application results.

### **5.2 Ethics and Marketing in the promotion**

Through our work in education and science communication, we have developed a broader concept of synthetic biology for different age groups. However, the implementation of any new technology or product needs to be researched as thoroughly as possible. As we move forward, we hope to bring together government, industry and education as much as possible, and to develop more innovative models of dissemination. For more information see future section in Entrepreneurship.

      `)
      this.ele = mddiv as HTMLElement
    }
  }
}
</script>
