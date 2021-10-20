<template lang="pug">
v-row
  v-col.col-1
  v-col.col-10
    div(ref="result").text-left
  v-col.col-1
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import marked from 'marked'

@Component
export default class Result extends Vue {
  static id = 'Result'

  mounted (): void {
    const result = this.$refs.result as Element
    console.log(result)
    if (result) {
      result.innerHTML = marked(`
# Result

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

 <img src="https://2021.igem.org/wiki/images/1/1e/T--Tongji_China---16344962830861.png" style="zoom: 80%" />

<figcaption> [^Figure 1.]:  Result of RT-qPCR for four genes </figcaption>

<br/>

### **The expression level of the target protein was detected by SDS-PAGE** #

We first tried to introduce plasmids linked with 1/2/3/4 target genes into *E.coli* DH5α, and detected their protein expression levels. However, due to the low expression amount and the limitation of Spectrophotometry, we did not find significant differences between the engineered strain and the wild type protein strips.

<img src="https://2021.igem.org/wiki/images/b/b0/T--Tongji_China---16344962954133.jpeg" style="zoom: 50%">
<p align="center" style="font-size: 1em"> Figure 2.  SDS-PAGE bands of four genes regulated by the promoter of J23110</p>


Therefore, four target genes were added with efficient T7 promoter respectively and introduced into *E.coli* BL21(DE3).Under the condition of IPTG induction, all proteins of strain containing target genes and wild-type strain were extracted. SDS-PAGE experiment and Coomassie brilliant blue staining showed that the expression of each target protein could be realized in *E.coli* BL21(DE3).

<img src="https://2021.igem.org/wiki/images/f/fd/T--Tongji_China---16344963137465.jpeg" style="zoom: 50%" />

[^Figure 3.]:  SDS-PAGE bands of four genes regulated by T7 promoter


We had hoped to construct plasmids with T7 promoter for all four genes, and then test the protein expression, but the construction process was very difficult. Finally, due to the limited time, we connected the four genes, but only the SQR gene was regulated by the T7 promoter. In the staining results, only the SQR band was obvious, but it was speculated that the other proteins should be able to express normally.

![img](https://2021.igem.org/wiki/images/7/7b/T--Tongji_China---16344963268247.jpeg)
[^Figure 4.]:  SDS-PAGE bands of T7-SQR-J23110-SDO-APR-SAT

### **Protein function verification experiment**

In view of the  the limiting capacity of our laboratory to detect the intermediates in the sulfide oxidation pathway, we mainly verified the function of our engineered bacteria from the oxidation level of sulfide and the generation level of sulfate.

#### Characterization experiment of S<sup>2-</sup> oxidation amount #

- **Verification of test method:**

  We configured a series of sodium sulfide solutions with concentration gradient and tested them with detection reagents according to certain methods. The standard curve obtained is ideal. It can be considered that our detection method can accurately reflect the relative content of sulfide in the solution within this concentration range.

![](https://2021.igem.org/wiki/images/d/d8/T--Tongji_China---16344963436149.png)
[^Figure 5.]:  stander curve of S<sup>2-</sup>

- **Sulfide oxidation in liquid environment**

  We put the engineered bacteria and wild-type bacteria into a certain concentration of sodium sulfide solution,  take out the bacterial solution every 30 min to detect the residual sulfide concentration. The results show that our engineered bacteria can oxidize sulfide better. (because the bacteria have a certain adsorption effect on sulfide, the initial sulfur ion concentration of the two groups of added bacterial solution is lower than blank)

  ![img](https://2021.igem.org/wiki/images/5/55/T--Tongji_China---163449635323611.png)

[^Figure 6.]:  concentration of S<sup>2-</sup> in liquid environment with different bacteria. ( SSAS: pET3a-T7-SQR-J23110-SDO-APR-SAT； WT: Wild Type； BK: Blank )


- **Hydrogen sulfide oxidation in simulated food  waste environment**

### Characterization experiment of SO42 - Production(待补充) #



## Pathway optimization（待补充） #



## Kill switch

 What we have achieved

        * Strategy design
        * Promoters characterization
        * Mix promoter preparation and first round of assembly
        * Randomness validation

##### Future expectation

* Try to improve the multi-fragments homologous recombination efficiency

* Perform sequencing, phenotyping on the correct clones
* Collect data from phenotyping and train ANN model for prediction

    In order to improve the hydrogen sulfide oxidation efficiency by making subtle control of enzymes concentration, we chose promoters with different strength in Anderson library<sup>[1]</sup> (link: design的相应部分). Firstly, we validated their relative strength for model training**(Figure 7)**. 

![p1](https://2021.igem.org/wiki/images/0/03/T--Tongji_China--figure_7.png)

[^Figure 7 ]: Promoter characterization



    Next, we designed a PCR strategy that promoters have different strength can be obtained in a single PCR reaction**(Figure 8)**. Genes in hydrogen sulfide oxidation pathway were also amplified with high fidelity PCR so that homologous arms can be added.

![p2](https://2021.igem.org/wiki/images/2/2d/T--Tongji_China--figure_8.png)

[^Figure 8 ]: Amplifying promoters with different strength



    Due to the limitation of commercial recombinase, it is almost impossible to recombine four genes with their respective promoters in a single reaction, so we recombine SQR, SDO with their promoters, AprBA, SAT with their promoters, respectively for the first round. Plasmid backbone with ampicillin resistance gene was used. This reaction was not effective enough due to the limitation of recombinase at first , we had improved our homologous arms to get better efficiency **(Figure 9 left)**. 

![p3](https://2021.igem.org/wiki/images/d/d2/T--Tongji_China--figure_9.png)



[^Figure 9 ]: The first round of homologous recombination

    We performed resistance screening to enrich recombined plasmids. Then random recombined promoter-SQR-promoter-SDO sequences and promoter-AprBA-promoter-SAT sequences, amplified and added with homologous arms for the next recombination reaction**(Figure 9 right)**. The randomness of promoters was validated**(Figure 10)**.

![p4](https://2021.igem.org/wiki/images/d/df/T--Tongji_China--figure_10.png)

[^Figure 10 ]: Randomness validation



   Then the promoter-SQR-promoter-SDO sequences and promoter-AprBA-promoter-SAT sequences were assembled with a backbone containing chloramphenicol resistance gene. We got multiple colonies after resistance screening. However, we found that it was hard to assemble these three large fragments. Two-fragments assembly(promoter-AprBA-promoter-SAT and backbone) happened in more than 50% of the colonies, which was not expected**(Figure 11)**. Because of the limited time, we have not solved this problem so far.

![p5](https://2021.igem.org/wiki/images/f/f2/T--Tongji_China--figure_11.png)

[^Figure 11 ]: The second round of homologous recombination

### Plasmid Construction #

Considering the accessibility of the template and the time limitation, we adopted the strategy that assembling the functional components which were separately obtained by gene synthesis. Considering plasmid incompatibility, we chose pACYC as the vector for this part, which has a different replication system from pET-3a. Plasmids were constructed by restriction enzyme digestion and ligation. The construction process we designed is shown below.

![figure 7 质粒构建流程](https://2021.igem.org/wiki/images/f/fb/T--Tongji_China--figure_7_%E8%B4%A8%E7%B2%92%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B.png)

[^Figure 7.]: the initial plasmid construction flow chart

Unfortunately, the synthesis of J23119-CstR-Pcstr-MazE -Dre encountered difficulty so that we couldn't obtain the sequence of J23119-CstR-Pcstr. Considering this part was very necessary for our work, we contacted Professor Huaiwei Liu from Shandong University based on literature and fortunately got his help. Using the plasmid he donated as a template, we successfully amplified the CstR-Pcstr sequence(Figure 3A) and used it for our plasmid construction.

![figure 8质粒构建流程-2](https://2021.igem.org/wiki/images/a/a9/T--Tongji_China--figure_8%E8%B4%A8%E7%B2%92%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B-2.png)

[^Figure 8.]: the modified plasmid construction flow chart

We successfully constructed the plasmid CstR-Pcstr-MazE -Dre and amplified CstR-Pcstr-MazE-Dre(Figure 3B).Then we cloned CstR-Pcstr-MazE-Dre to pACYC-rox-ter-rox-MazF.

![figure 9.胶图](https://2021.igem.org/wiki/images/d/d3/T--Tongji_China--figure_9.%E8%83%B6%E5%9B%BE.png)

[^Figure 9.]: agarose electrophoresis

However, according to the sequencing results, we found that Pcstr was missing, probably due to the complexity of each block. We try to find the cause and settle it further. （待放上新的实验结果）

### CstR with Pcstr Characterization #

To ensure appropriate concentration range of S<sup>2-</sup> used for the characterization of pACYC-rox-ter-rox-MazF-CstR-Pcstr-MazE-Dre, we first characterized the function of CstR with Pcstr using pTrchis2A-CstR-Pcstr-mKate-CpSQR. The expression level regulated by Pcstr at different concentrations of S<sup>2-</sup>  was shown by the fluorescence intensity of mKate(/OD<sub>600 nm</sub>).

At the beginning, bacteria cultured in 5 mL were treated with 0, 20, 40, 80 and 120 mg/L Na<sub>2</sub>S·9H<sub>2</sub>O respectively, and then the fluorescence intensity of mKate was measured with a microplate reader.[（超链接到3.3 protocol界面）]()

![figure 10 表征4.0](https://2021.igem.org/wiki/images/f/f8/T--Tongji_China--figure_10_%E8%A1%A8%E5%BE%814.0.png)

[^Figure10.]: the fluorescence intensity variation with the concentration of Na<sub>2</sub>S·9H<sub>2</sub>O at 10h

![figure 11 4.0-fluoresence](https://2021.igem.org/wiki/images/a/ad/T--Tongji_China--figure_11_4.0-fluoresence.png

[^Figure 11.]: the curve of fluorescence intensity relative to time

![figure 12 4.0-OD600](https://2021.igem.org/wiki/images/6/66/T--Tongji_China--figure_12_4.0-OD600.png)

[^Figure 12.]: the curve of OD<sub>600 nm</sub> relative to time

It can be seen that the presence of S<sup>2-</sup> at different concentrations has no significant effect on the growth of bacteria. However, with the increase of S<sup>2-</sup>, the fluorescence intensity increases at first and then decreases, indicating that when S<sup>2-</sup> is too high, the lifting effect on CstR inhibition is weakened.  We hope to find out an appropriate concentration range in which the strength of Pcstr is positively correlated with the concentration of S<sup>2-</sup>, which tells us that we need to reduce the concentration gradient and concentration range for further characterization. 

We further used 0, 10, 20, 30, 40 and 50 mg/L Na<sub>2</sub>S·9H<sub>2</sub>O to treat 5 mL bacterial solution and then measured the fluorescence intensity of mKate using a microplate reader.（这部分数据待补充） 

## Reference #

[1]  http://parts.igem.org/Promoters/Catalog/Anderson

    `)
    }
  }
}
</script>
