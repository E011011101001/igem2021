<template lang="pug">
v-row
  v-col.col-3
    Anchor(v-if="ele" :ele="ele")
  v-col.col-9
    div(ref="result").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Result extends Vue {
  static id = 'Result'
  ele: HTMLElement | null = null

  mounted (): void {
    const result = this.$refs.result as Element
    console.log(result)
    if (result) {
      result.innerHTML = marked(`
# Result #

The experimental section of our project mainly includes three parts: hydrogen sulfide degradation, pathway optimization and kill switch. We have achieved certain phased results respectively.

- **Hydrogen sulfide degradation**

In the experimental part of hydrogen sulfide oxidation, we verified the expression of mRNA and protein of the target gene, proved its ability to oxidize sulfide in liquid environment, and further verified its function in the simulated food waste environment

- **Pathway optimization**

We believe that different enzymes expressed by different genes have different efficiencies, thus only four enzymes maintained in the right ratio will have the best effect of sulfur removal. Therefore, we decided to replace different promoters for different genes and combine them to select the optimal pair.

- **Kill switch**

To prevent our engineered bacteria from leaking into the environment, we designed a H<sub>2</sub>S sensitive three-gear kill switch to ensure this.



## **Hydrogen sulfide degradation** #

### **The mRNA expression level of the target gene was detected by RT-qPCR** #

We extracted RNA of our engineered bacteria and wild-type bacteria for RT qPCR experiment. The relative content of target mRNA in each group was calculated based on 16s gene of *E.coli*. The experimental results can prove that our engineering bacteria can transcribe the mRNA of the introduced gene normally. (There is no target gene in the wild type, the relative expression of engineering bacteria is very high and the difference is large)

 <img src="https://2021.igem.org/wiki/images/4/49/T--Tongji_China---16344961965841.png" alt="img" style="zoom:80%;" />

[^Figure 1.]:  Result of RT-qPCR for four genes

### **The expression level of the target protein was detected by SDS-PAGE** #

We first tried to introduce plasmids linked with 1/2/3/4 target genes into *E.coli* DH5α, and detected their protein expression levels. However, due to the low expression amount and the limitation of Spectrophotometry, we did not find significant differences between the engineered strain and the wild type protein strips.

<img src="https://2021.igem.org/wiki/images/b/b0/T--Tongji_China---16344962954133.jpeg" alt="img" style="zoom:40%;" />

[^Figure 2.]:  SDS-PAGE bands of four genes regulated by the promoter of J23110


Therefore, four target genes were added with efficient T7 promoter respectively and introduced into *E.coli* BL21(DE3).Under the condition of IPTG induction, all proteins of strain containing target genes and wild-type strain were extracted. SDS-PAGE experiment and Coomassie brilliant blue staining showed that the expression of each target protein could be realized in *E.coli* BL21(DE3).

<img src="https://2021.igem.org/wiki/images/2/2e/T--Tongji_China--RES-16344963137465.jpeg" alt="img" style="zoom:40%;" />

[^Figure 3.]:  SDS-PAGE bands of four genes regulated by T7 promoter


We had hoped to construct plasmids with T7 promoter for all four genes, and then test the protein expression, but the construction process was very difficult. Finally, due to the limited time, we connected the four genes, but only the SQR gene was regulated by the T7 promoter. In the staining results, only the SQR band was obvious, but it was speculated that the other proteins should be able to express normally.

<img src="https://2021.igem.org/wiki/images/5/59/T--Tongji_China--RES-16344963268247.jpeg" alt="img" style="zoom:40%;" />

[^Figure 4.]:  SDS-PAGE bands of T7-SQR-J23110-SDO-APR-SAT

### **Protein function verification experiment**

In view of the  the limiting capacity of our laboratory to detect the intermediates in the sulfide oxidation pathway, we mainly verified the function of our engineered bacteria from the oxidation level of sulfide and the generation level of sulfate.

#### Characterization experiment of S<sup>2-</sup> oxidation amount #

- **Verification of test method:**

  We configured a series of sodium sulfide solutions with concentration gradient and tested them with detection reagents according to certain methods. The standard curve obtained is ideal. It can be considered that our detection method can accurately reflect the relative content of sulfide in the solution within this concentration range.

![img](https://2021.igem.org/wiki/images/0/0d/T--Tongji_China--RES-16344963436149.png)

[^Figure 5.]:  standard curve of S<sup>2-</sup>

- **Sulfide oxidation in liquid environment**

  We put the engineered bacteria and wild-type bacteria into a certain concentration of sodium sulfide solution,  take out the bacterial solution every 30 min to detect the residual sulfide concentration. The results show that our engineered bacteria can oxidize sulfide better. (because the bacteria have a certain adsorption effect on sulfide, the initial sulfur ion concentration of the two groups of added bacterial solution is lower than blank)

  ![img](https://2021.igem.org/wiki/images/f/fe/T--Tongji_China--RES-163449635323611.png)

[^Figure 6.]:  concentration of S<sup>2-</sup> in liquid environment with different bacteria. ( SSAS: pET3a-T7-SQR-J23110-SDO-APR-SAT； WT: Wild Type； BK: Blank )


- **Hydrogen sulfide oxidation in simulated food  waste environment**

  We have preliminarily confirmed that the engineering bacteria can effectively inhibit the production of hydrogen sulfide in egg liquid, but due to the limited time, it has not been accurately verified. Further experiments need to be designed to detect the ability and efficiency of engineering bacteria to oxidize hydrogen sulfide in wet waste environment.

  <img src="https://2021.igem.org/wiki/images/6/62/T--Tongji_China--RES%E9%B8%A1%E8%9B%8B%E6%B6%B2-16346659014661.png" alt="鸡蛋液" style="zoom:40%;" />


[^Figure 7.]:  Existence of S<sup>2-</sup> in egg liquid with different bacteria. ( SSAS: pET3a-T7-SQR-J23110-SDO-APR-SAT； WT: Wild Type）



## Pathway optimization #

What we have achieved

* Strategy design
* Promoters characterization
* Mix promoter preparation and first round of assembly
* Randomness validation

##### Future expectation

* Try to improve the multi-fragments homologous recombination efficiency

* Perform sequencing, phenotyping on the correct clones
* Collect data from phenotyping and train ANN model for prediction

In order to improve the hydrogen sulfide oxidation efficiency by making subtle control of enzymes concentration, we chose promoters with different strength in Anderson library<sup>[1]</sup> (link: design的相应部分). Firstly, we validated their relative strength for model training **(Figure 8)**.

<img src="https://2021.igem.org/wiki/images/b/bf/T--Tongji_China--figure_7.jpg" alt="p1" style="zoom:45%;" />

[^Figure 8 ]: Promoter characterization

Next, we designed a PCR strategy that promoters have different strength can be obtained in a single PCR reaction **(Figure 9)**. Genes in hydrogen sulfide oxidation pathway were also amplified with high fidelity PCR so that homologous arms can be added.

<img src="https://2021.igem.org/wiki/images/2/29/T--Tongji_China--figure_8.jpg" alt="p2" style="zoom:45%;" />

[^Figure 9 ]: Amplifying promoters with different strength

Due to the limitation of commercial recombinase, it is almost impossible to recombine four genes with their respective promoters in a single reaction, so we recombine SQR, SDO with their promoters, AprBA, SAT with their promoters, respectively for the first round. Plasmid backbone with ampicillin resistance gene was used. This reaction was not effective enough due to the limitation of recombinase at first , we had improved our homologous arms to get better efficiency **(Figure 10 left)**.

<img src="https://2021.igem.org/wiki/images/c/c1/T--Tongji_China--RESfigure_9.jpg" alt="p3" style="zoom:90%;" />

[^Figure 10 ]: The first round of homologous recombination

We performed resistance screening to enrich recombined plasmids. Then random recombined promoter-SQR-promoter-SDO sequences and promoter-AprBA-promoter-SAT sequences, amplified and added with homologous arms for the next recombination reaction **(Figure 10 right)**.


Then the promoter-SQR-promoter-SDO sequences and promoter-AprBA-promoter-SAT sequences were assembled with a backbone containing chloramphenicol resistance gene. We got multiple colonies after resistance screening. However, we found that it was hard to assemble these three large fragments. Two-fragments assembly (promoter-AprBA-promoter-SAT and backbone) happened in more than 50% of the colonies, which was not expected **(Figure 11)**. Because of the limited time, we have not solved this problem so far.

<img src="https://2021.igem.org/wiki/images/3/34/T--Tongji_China--figure_11.jpg" alt="p5" style="zoom:45%;" />

[^Figure 11 ]: The second round of homologous recombination

## Kill switch

## 1.Plasmid Construction

Considering the accessibility of the template and the time limitation, we adopted the strategy of assembling the functional components separately obtained by gene synthesis. Considering plasmid incompatibility, we chose pACYC as the vector for this part, which has a different replication system from pET-3a. Plasmids were constructed by restriction enzyme digestion and ligation and In-Fusion. The construction process we designed is shown below.

<img src="https://2021.igem.org/wiki/images/3/3a/T--Tongji_China--RES%E8%B4%A8%E7%B2%92%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B.png" alt="质粒构建流程" style="zoom: 30%;" />

[^Figure 12. The initial plasmid construction flow chart]:

Unfortunately, the synthesis of J23119-CstR-Pcstr-MazE -Dre encountered difficulty so that we couldn't obtain the sequence of J23119-CstR-Pcstr. Considering this part was very necessary for our work, we contacted Professor Huaiwei Liu from Shandong University based on literature and fortunately got his help. Using the plasmid he donated as a template, we successfully amplified the CstR-Pcstr sequence (Figure 3A) and used it for our plasmid construction.

<img src="https://2021.igem.org/wiki/images/a/a2/T--Tongji_China--RES%E8%B4%A8%E7%B2%92%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B-2.png" alt="质粒构建流程-2" style="zoom: 30%;" />

[^Figure 13. The modified plasmid construction flow chart]:

We successfully constructed the plasmid CstR-Pcstr-MazE -Dre and amplified CstR-Pcstr-MazE-Dre (Figure 3B).Then we cloned CstR-Pcstr-MazE-Dre to pACYC-rox-ter-rox-MazF.

<img src="https://2021.igem.org/wiki/images/c/c0/T--Tongji_China--RES%E8%83%B6%E5%9B%BE-16347103179871.png" alt="胶图" style="zoom:30%;" />

[^Figure 14. Agarose electrophoresis]:

However, according to the sequencing results, we found that Pcstr was missing, probably due to the complexity of each block. Meanwhile, we found the terminator between the two rox sites was partly moved after we cultured the final plasmid. We assumed that it could be the leakage of Pcstr that turned on the expression of Dre, which then cut off the terminator. This means we need to optimize our design.

## 2.Promoter optimization

To optimize the design of our kill switch, we tried to find a proper combination of the three key promoters, PR (Pcstr), PL (PlacI), and J23110, by testing their strength respectively first (Figure 4.).

<img src="https://2021.igem.org/wiki/images/b/bc/T--Tongji_China--RES%E5%90%AF%E5%8A%A8%E5%AD%90%E8%A1%A8%E5%BE%81.png" alt="启动子表征" style="zoom:23%;" />

[^Figure 15. The strength of the three key promoters]:

From our results, we found that the intensity of Pcstr is significantly higher than J23110, and PlacI is very lower than J23110. This may explain why we encountered the leakage of Pcstr —— the inhibition of the CstR may be too low to block Pcstr while the intensity of Pcstr is in a high level. Although this is not consistent with the literature, the facts tell us that it is.  Considering the time limitation and the workload of changing different promoters to test the best combination, we constructed a [[model]]() (链接到modeling）to achieve this.

## 2.CstR with Pcstr Characterization

To ensure appropriate concentration range of S<sup>2-</sup> used for the characterization of pACYC-rox-ter-rox-MazF-CstR-Pcstr-MazE-Dre, we first characterized the function of CstR with Pcstr using pTrchis2A-CstR-Pcstr-mKate-CpSQR. The expression level regulated by Pcstr at different concentrations of S<sup>2-</sup>  was shown by the fluorescence intensity of mKate (/OD<sub>600 nm</sub>).

At the beginning, bacteria cultured in 5 mL were treated with 0, 6.5, 13.0, 26.0 and 39.0 mg/L Na<sub>2</sub>S (0, 20, 40, 80 and 120 mg/L Na<sub>2</sub>S·9H<sub>2</sub>O) respectively, and then the fluorescence intensity of mKate was measured with a microplate reader.[（超链接到protocol界面）]()

<img src="https://2021.igem.org/wiki/images/a/a2/T--Tongji_China--CstR%E8%A1%A8%E5%BE%81-16346494229474.png" alt="CstR表征" style="zoom:15%;" />

[^Figure 16. ]: (A)The fluorescence intensity variation relative to the concentration of Na<sub>2</sub>S; (B)the curve of fluorescence intensity relative to time; (C)the curve of OD<sub>600 nm</sub> relative to time

It can be seen that the presence of S<sup>2-</sup> at different concentrations has no significant effect on the growth of bacteria. However, with the increase of S<sup>2-</sup>, the fluorescence intensity increases at first and then decreases, indicating that when S<sup>2-</sup> is too high, the lifting effect on CstR inhibition is weakened.  We hope to find out an appropriate concentration range in which the strength of Pcstr is positively correlated with the concentration of S<sup>2-</sup>, which tells us that we need to reduce the concentration gradient and concentration range for further characterization.

We further used 0, 3.25, 6.50, 9.75, 13.00, 16.25 mg/L Na<sub>2</sub>S (0, 10, 20, 30, 40 and 50 mg/L Na<sub>2</sub>S·9H<sub>2</sub>O) to treat 5 mL bacterial solution and then measured the fluorescence intensity of mKate using a microplate reader(Figure 6.).

<img src="https://2021.igem.org/wiki/images/0/06/T--Tongji_China--RES%E5%B0%8F%E6%A2%AF%E5%BA%A6%E6%B5%8B%E8%AF%95-16346505249295.png" alt="小梯度测试" style="zoom: 30%;" />

[^Figure 17. ]: The fluorescence intensity variation relative to the concentration of Na<sub>2</sub>S with a smaller range

It can be seen from the figure that in a smaller concentration range, there is a positive correlation between fluorescence intensity and Na<sub>2</sub>S concentration, visible to naked eyes, which implies that we can use data within this concentration range to guide our characterization experiments.

But unfortunately, as mentioned above, we encountered difficulties in constructing the final kill switch plasmid, thus the characterization of which failed to be carried out smoothly. Given this problem, we intend to build a [model](链接到modeling)（链接到modeling） trying to settle it.

## Reference

[1]  http://parts.igem.org/Promoters/Catalog/Anderson


    `)
      this.ele = result as HTMLElement
    }
  }
}
</script>
