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
export default class POC extends Vue {
  static id = 'POC'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
    const poc = this.$refs.poc as Element
    console.log(poc)
    if (poc) {
      poc.innerHTML = marked(`
Our experiment has preliminarily proved the possibility of using engineered bacteria to remove sulfide ion in liquid and hydrogen sulfide in  gas-liquid coexistence environment to reduce odor. However, this is not enough to indicate that our engineered bacteria can be effective in the actual application environment. As in the actual use process, in addition to temperature, humidity, solution osmotic pressure and other conditions will change.  And more importantly, our engineered bacteria will have to face competition with indigenous bacteria, which will bring great challenges to our engineered bacteria to function according to their primary settings.



## Basic verification

Through RT-qPCR experiment and SDS-PAGE experiment, we preliminarily verified that the four genes can be transcribed and translated normally in E. coli.

We configured a series of sodium sulfide solutions with concentration gradient and tested them with detection reagents according to certain methods. The standard curve obtained is ideal. It can be considered that our detection method can accurately reflect the relative content of sulfide in the solution within this concentration range.

(More relative experiment details can be found in [result](/Team:Tongji_China/Results).

##**Protein function verification**

In view of the  the limiting capacity of our laboratory to detect the intermediates in the sulfide oxidation pathway, we mainly verified the function of our engineered bacteria from the oxidation level of sulfide and the generation level of sulfate.

###**1. Sulfide oxidation in liquid environment**

We put the engineered bacteria and wild-type bacteria into a certain concentration of sodium sulfide solution,  take out the bacterial solution every 30 min to detect the residual sulfide concentration. The results show that our engineered bacteria can oxidize sulfide better. (because the bacteria have a certain adsorption effect on sulfide, the initial sulfur ion concentration of the two groups of added bacterial solution is lower than blank)

<img src="https://2021.igem.org/wiki/images/7/78/T--Tongji_China---163449635323611-16348679527942.png" alt="-163449635323611" style="max-width:100%" />

<center>Figure 2.  Concentration of S<sup>2-</sup> in liquid environment with different bacteria. ( SSAS: pET3a-T7-SQR-J23110-SDO-J23110-APR-J23110-SAT； WT: Wild Type； BK: Blank )</center>

### **2. Sulfide oxidation in gas-liquid coexistence environment**

Since it is hydrogen sulfide gas that causes the sense of smell and damages people’s health in the actual situation, we are desire to further simulate the situation where hydrogen sulfide gas already exists and there is a solution equilibrium between liquid and gas phase. One difficulty of gas reaction is to establish a reasonable reaction system and detection plan. We refer to the previously successful experimental system of sulfur ion removal in a liquid environment, and inject an appropriate amount of hydrogen sulfide gas into the gas in the closed centrifuge tube, and test the concentration of sulfide ions in the liquid. In view of the fact that the solution is not saturated at this time, the concentration of sulfide ions in the solution can reflect the amount of residual sulfide ions in the entire system. 

It can be observed that the residual sulfide ions in the system with engineered bacteria are less, while the sulfide ions in the system inoculated with wild-type strains are relatively more, indicating that our engineered bacteria also show a certain degree of hydrogen sulfide treatment ability in a gas-liquid coexistence environment. However, it is worth pointing out that the difference between the engineered bacteria and the wild type is not quite obvious, which is the part we will continue to explore and improve in the future.

(More relative experiment details can be found in [result](/Team:Tongji_China/Results).

### **3. Hydrogen sulfide oxidation in simulated food  waste environment**

In order to test whether our engineered bacteria can work efficiently in a more complex and competitive environment, we built an easy-to-operate reaction system that can well simulate the actual wet waste composting process.In this system, we was pleasantly surprised to discover our engineered bacteria still work. 
Although there are still many conditions that need to be explored and continuously improved, we have every reason to believe that our design will be able to fully achieve our expected goals-like'LOOK! ’(Little Odor Killer) works the same. After reading this, you may be very curious about how we did the proof of concept. Let us use 5 ‘H’ （How）to satisfy your curiosity.

- #### **How do we conduct proof-of-concept experiments?**

Constructing a reasonable reaction system is the first step in the proof of concept. We use eggs to represent the wet garbage mixture, and directly put our engineered bacteria in the egg liquid, simulating the process of putting the bacteria in the wet garbage in the actual application scenario. We put each reaction system in an incubator for fermentation, and measure the hydrogen sulfide removal ability of engineering bacteria by detecting the sulfide ion concentration in the mixture after a period of time.

- #### **How do we check the experimental results and what kind of results have been obtained?**

As a bacterial agent with hydrogen sulfide treatment capability, our engineered bacteria can theoretically not only reduce the odor of wet garbage before it been released to the environment, but also effectively control the hydrogen sulfide gas that has been produced and diffused in wet garbage. In practical applications, the former is more fundamental, while the latter is more targeted. However, in the laboratory inspection process, taking into account the gas diffusion properties, the former method can be used to more accurately check the hydrogen sulfide processing capacity of the engineering bacteria in the reaction system. It is not difficult to understand that after the same time of cultivation, the group inoculated with wild-type strains should contain more hydrogen sulfide or sulfide ions than the group inoculated with engineered bacteria.
The experimental results perfectly meet this expectation. From the figure, we can clearly see that the group inoculated with wild-type strains showed a darker blue color in the methylene blue reaction, indicating that the system contained more sulfide ions. However, due to time constraints, we did not have time to repeat this experiment many times, which is what we need to further improve in our follow-up work.

<img src="https://2021.igem.org/wiki/images/7/72/T--Tongji_China--%E9%B8%A1%E8%9B%8B%E6%B6%B2-16346659014661.png" alt="鸡蛋液-16346659014661" style="max-width:100%" />

<center>Figure 4.  Existence of S<sup>2-</sup> in egg liquid with different bacteria. ( SSSAS: pET3a-T7-SQR-J23110-SDO-J23110-APR-J23110-SAT; WT: Wild Type）</center>

- #### How do the eggs simulate the wet garbage environment and make the verification process easy to operate and repeatable?

As we mentioned in the [description](/Team:Tongji_China/Description) page, the main contributors to odorous gases in wet garbage are hydrogen sulfide and ammonia, and the main source of the former is sulfur-containing amino acids in wet garbage. As a kind of high-protein content, cheap and easy-to-obtain food, eggs are a very good source of sulfur-containing amino acids, which can well represent high-protein foods that contribute hydrogen sulfide gas in wet garbage. Moreover, the egg liquid is easy to mix and transfer, which can ensure the uniformity and consistency of the composition of each group in the experiment as much as possible, making our experimental results more reliable and reproducible.
In order to make the composition of the bacteria in the reaction system at the beginning of the experiment as consistent as possible in the real life situation, we obtained egg liquid and placed it in the daily life area for a few minutes, and then inoculated the engineered bacteria or the wild-type strain for subsequent steps.

- #### How should we put engineering bacteria?

As we said, putting our engineered bacteria at different times can have different effects. Early injection can more effectively reduce hydrogen sulfide overflow, while after the odor is generated, a certain odor will inevitably be emitted. However, the factors that need to be considered for these two methods of use are also various. For the former, we need to consider more about whether our engineered bacteria can settle in the wet garbage, multiply and play a role in the composting process; while for the latter, we can use the engineered bacteria when they are cultivated to a good states, which is relatively more flexible. 
Deciding how to use the bacterial agent needs to integrate various factors. In addition to the efficiency of treating odor, the ease of use, cost, safety, etc. must also be considered. The experimental results of our proof-of-concept can give a preliminary indication of the treatment efficiency under the two delivery methods, especially in the case of the inoculant at the beginning of wet waste composting, and provide guidance for our hardware design and actual use.

- #### How will the experiment and project design of the proof-of-concept part be further improved?

Although we have obtained preliminary but expected results, further repeated verification is essential. On this basis, the optimization of reaction methods, reaction conditions, detection methods, etc. all need to be further carried out. For example, we will try to add other wet garbage to the reaction system to more realistically simulate the actual situation. In addition, different delivery methods, factors affecting processing efficiency, etc., are all we strongly hope to explore further.



      `)
      this.ele = poc as HTMLElement
    }
  }
}
</script>
