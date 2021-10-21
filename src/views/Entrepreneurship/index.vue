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
export default class Entrepreneurship extends Vue {
  static id = 'Entrepreneurship'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
    const mddiv = this.$refs.mddiv as Element
    console.log(mddiv)
    if (mddiv) {
      mddiv.innerHTML = marked(`
## Entrepreneurship

### Overview:

With the growing amount of food waste and the associated odor and health and psychological problems, this year, Tongji_China launched the "LOOK" project. The biological products containing the concept of our 'LOOK' project will be able to absorb **hydrogen sulfide** and **ammonia** with two kinds of bioengineered E.coli. One uses enzymes related to sulfide oxidization(**Sqr, Sdo, AprBA and Sat**), converting hydrogen sulfide to sulfate, while the other uses enzymes **AMO, HAO and NOD** to convert ammonia to nitrate. Besides, a three-gear adjustable **kill switch** based on the concentration of H2S and NH3 is added to ensure biosafety. Also, we optimize our pathway by high throughput screening and machine learning. With such efforts, we hope to solve the problems the odor has brought to people and downstream industries.

<img src="https://2021.igem.org/wiki/images/9/9c/T--Tongji_China--6.4.1.png" alt="6.4.1" style="max-width:100%" />

### Establishment of application scenario and target customers

To make our project not only limited to a laboratory result, but more likely to improve the current odor problem in food waste through production. The first thing we had to do was to identify our target customers. Our preliminary HP research showed that for **large food waste treatment plants**, the odor problem can be scientifically and systematically controlled and managed due to their high level of **automation**. Besides, **the initial sorting and compacting** is done during the transfer process.

<img src="https://2021.igem.org/wiki/images/8/8e/T--Tongji_China--6.3.1-16346287525821.png" alt="6.3.1" style="max-width:100%" />

However, the food waste before centralised transfer (which we would like to refer to as the front-end and mid-end of food waste treatment), due to its small volume, inevitably requires a combination of human supervision and simple food waste transfer. The oversights emerged can lead to a **disconnect between food waste deposition and transfer**, resulting in odor problems. (Figure 1) We have identified the **possible scenarios** for the use of our own bioproducts as community waste bins, public waste bins and regional waste transfer stations and the **target customers** as residents, students, and workers involved in related waste treatment.

### SWOT Analysis

SWOT analysis can be used for strategic analysis and to establish market competitiveness. If we want to enter the market with our biological products, it is crucial to research the market environment and establish a position, for which we have done a SWOT analysis.

| **Strengths**                                                | **Weaknesses**                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Low cost, easy to use and portable, low environmental impact. | lack of research on the use and preservation effects between time/environment and the target consumers is not firmly established. |
| **Opportunities**                                            | **Threats**                                                  |
| The market for specific applications is at a blank stage, there are no competitors yet, and the application and acceptance of biologics is generally positive. | The existence of similar or similar deodorant products in different areas makes us difficult to insert the concept. |

### Competitive analysis of similar products

As we have stated in 'Treats' part in the previou SWOT analysis, there are a series of deodorant products in the market. It can be roughly divided into three aspects. We will further analyze their characteristics in working and the examples of its commercial forms.

| **The General Treatment Method** | **Characteristics in Working Principles**                    |
| -------------------------------- | ------------------------------------------------------------ |
| Physical Treatment               | Absorption(activated carbon, zeolite, silica gel, etc) and Dilution(by oxygen, etc) |
| Chemical Treatment               | Botanical extracts，deodorizers                              |
| Biological Treatment             | Suppression at source                                        |

To gain a better understanding of how deodorant products are marketed, we looked primarily at Taobao, the largest shopping platform in Asia. This also prepared us for the further development of our own sales format.

<img src="https://2021.igem.org/wiki/images/d/d5/T--Tongji_China--6.3.2.png" alt="6.3.2" style="max-width:100%" />

An Odor treatment plant, which mainly treats odor **physically**, has an average price of 3000RMB. It is often not considered in households, communal bins and other places that generate small volumes of food waste.

<img src="https://2021.igem.org/wiki/images/7/70/T--Tongji_China--6.3.3.png" alt="6.3.3" style="max-width:100%" />

<img src="https://2021.igem.org/wiki/images/e/e0/T--Tongji_China--6.3.4.png" alt="6.3.4" style="max-width:100%" />

These deodorant products in colorful packaging are often worked by **chemical methods**. Plant extract deodorants are the main deodorizing product of choice in the market today because of their low price and wide range of applications. The plant extract is processed into spray, fragrance and balm to use. It achieves the deodorizing effect by covering the odor with fragrance and can meet the deodorizing needs of small volumes such as households for its portability. However, its deodorizing efficiency is not high, and more often the overpowering fragrance can cause uncomfort (such as dry eyes, tingling nose and other allergy symptoms) to people.

<img src="https://2021.igem.org/wiki/images/6/61/T--Tongji_China--6.3.5.png" alt="6.3.5" style="max-width:100%" />

Deodorants of this kind enrich the culture of **photosynthetic fungi, lactic acid bacteria, actinomycetes, yeasts, acetic acid bacteria**, and other microbial groups that can use odor as a nutrient metabolite. They are used frequently in highly polluted areas such as farms and chemical plants for their extremely low price (30 RMB/50 kg), however, their ingredients are often kept secret，which may increase risks to biosecurity. The complexity of the strains tends to destroy the original vegetation production system, and it remains to be seen whether the **disinfectant and germicide** they claim to add will exacerbate the side effects of deodorization.

| The Characteristic of Current Commercial Products            | What our biological products can make up                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Mostly found in **large wet waste treatment plants** (e.g. Shanghai Laogang solid waste site, etc.) with high construction costs. | Our biological products have **low prices** and are easy to use and portable. |
| It is mostly used in the **family** in different forms such as fragrance, essence, oil and perfume, and also in the form of spray in **factories**. It is one of many ways to deodorize garbage | Our biological products' working concentration are **controlled** by the concentration of ions in the environment. There won't be too much fragrance to make consumers feel uncomfortable. |
| It is mostly used in large farms and sewage treatment plants, mostly concentrated in the livestock and chemical industries. Products of this kind works with **a** **biologically active enzyme complex: s**pecific microorganisms (**photosynthetic bacteria, lactic acid bacteria**, etc.) are domesticated, inoculated and enriched to form an active fermentation broth, from which the active enzymes are purified. | Our bio-engineered bacteria with three gear kill switch can **minimizes** the environmental impact of deodorization without destroying the ecosystem of the **original population**. |

### Future

To further validate the potential of our engineered bacteria for downstream production and application, we will use a combination of **modeling and quantitative characterization** in the laboratory to establish a time-dependent profile of hydrogen sulfide concentration in the environment to demonstrate the deodorization capacity of the engineered bacteria. Our results will also be submitted to an impartial scientific commercial organization for validation, resulting in **an** **assessment of deodorization against national pollutant emission standards**.

In response to **public concern and uncertainty** about biological products, we believe that we can work with the Shanghai Greening Administration, the Shanghai Citizen's Street Experience Centre, Shanghai Tianwei Environmental Technology Co Ltd and Tongji University Student Union to enhance the dissemination of synthetic biology concepts and biologics, and to propose more innovative promotion models.

At the same time, we felt the need to conduct a more detailed and targeted interview, as our previous questionnaires confirmed that odor does have an impact on people's health and quality of life, especially in the wet waste industry. With the proven ability of our engineered bacteria to work, we hope to be able to **conduct a pre-placement of our biological product with industry** to solve some potential problems in practical application and make improvements in time.

      `)
      this.ele = mddiv as HTMLElement
    }
  }
}
</script>
