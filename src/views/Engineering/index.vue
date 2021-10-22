<template lang="pug">
v-row
  v-col.col-3
    Anchor(v-if="ele" :ele="ele")
  v-col.col-9
    div(ref="engi").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Engineering extends Vue {
  static id = 'Engineering'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
    const result = this.$refs.engi as Element
    console.log(result)
    if (result) {
      result.innerHTML = marked(`
#  Engineering #

<img src="https://2021.igem.org/wiki/images/9/99/T--Tongji_China--%E6%88%AA%E5%B1%8F2021-10-21_%E4%B8%8B%E5%8D%8811.48.45.png" alt="截屏2021-10-21 下午11.48.45" style="max-width:50%" />

# Hydrogen sulfide degradation pathway

## Design: Realization of hydrogen sulfide degradation pathway  #

 1. End product selection  
We selected **sulfate**, which is non-toxic and harmless to bacteria in the working environment and has little impact on the environment, we believe it is an ideal end product for degradation.

 2. Target gene selection 
We selected four genes: **SQR**, **SDO**, **AprBA** and **SAT**(**figure 1**), which can achieve the purpose of converting sulfide to sulfate.

<img src="https://2021.igem.org/wiki/images/0/0c/T--Tongji_China--%E8%AE%BE%E8%AE%A1%E5%9B%BE.png" alt="设计图" style="max-width:100%" />

<center>Figure 1.pathway that convert sulfide to sulfate  </center>

## Build: Construction of complete plasmid #

We disassembled the main part of the plasmid into two plasmids for synthesis, then added the missing parts and spliced the two plasmids together to obtain a complete plasmid with four genes. After that, we transformed it into *E. coli* DH5α for testing.

<img src="https://2021.igem.org/wiki/images/d/d6/T--Tongji_China--S%E9%80%9A%E8%B7%AF%E8%B4%A8%E7%B2%92%E6%8F%92%E5%9B%BE-1-4831573.png" alt="S通路质粒插图-1" style="max-width:100%" />

<center>Figure 2.Construct plasmid with four genes </center>

## Test:not satisfying #

We performed **qPCR**, **SDS-PAGE electrophoresis**, detected changes in sulfide concentration to test the efficiency of gene expression and the actual effect of **hydrogen sulfide removal**, but the results were **not satisfying**.

## Improve:optimization of promoter #

We revisited our design in the hope of finding the reasons for the experimental failure.

 1. No bands in SDS-PAGE 

SDS-PAGE showed that the protein expression of our engineered bacteria isn’t difference from wild type bacteria, (**figure 3**)so we thought that maybe **our promoter was not strong enough**, resulting in too little protein expression to show the specific bands. Therefore, we decided to switch to a stronger **T7 promoter** and transformed the plasmid into *E.coli* BL21(DE3) to improve the protein expression.

<img src="https://2021.igem.org/wiki/images/f/f7/T--Tongji_China--figure_2-4831669.jpeg" alt="figure 2" style="max-width:100%" />

<center>Figure 3.SDS-PAGE of pET3a-SQR-SDO-AprBA-SAT  </center>

2. Inefficiency of sulfide convert 

We believe that different enzymes expressed by different genes have different efficiencies, thus only four enzymes **maintained in the right ratio** will have the best effect of sulfur removal. If one enzyme effect is outstanding, it will lead to product accumulation and the intermediate products may affect the bacteria. In the contrary, if one enzyme efficiency is too low, it will lead to a decrease in the speed of the whole processing pathway.
In addition, considering that our plasmids are relatively large, large amount of expression will cause a **great load on the growth of bacteria**. Thus, choosing the right promoter strength is important.

Therefore, we decided to **replace different promoters for different genes and combine them to select the optimal pair**. Due to the variety of promoters, it was difficult to construct all of the plasmid. So we decided to realize this idea by [constructing a random promoter libraries](/Team:Tongji_China/Results) to find the best promoter pairing.





## Design:  new plasmids #

1. We reconstructed four plasmids containing each of our four genes with **T7 promoter**. We also used **SDS-PAGE** to detect protein expression and test the efficiency of sulfide removal.

   <img src="https://2021.igem.org/wiki/images/b/bc/T--Tongji_China--S%E9%80%9A%E8%B7%AF%E8%B4%A8%E7%B2%92%E6%8F%92%E5%9B%BE-2.png" alt="S通路质粒插图-2" style="max-width:100%" />

   <center>Figure 4. T7-SQR/T7-SDO/T7-AprBA/T7-SAT  </center>

   <img src="https://2021.igem.org/wiki/images/c/c7/T--Tongji_China--figure_3.jpeg" alt="figure 3" style="max-width:100%" />

   <center>Figure 5. SDS-PAGE bands </center>

2. We reconstructed the plasmid containing the four genes and **replaced the promoter of SQR with T7**, detected the protein expression using the SDS-PAGE, and carried out the experimental test of sulfide removal.

   <img src="https://2021.igem.org/wiki/images/6/6e/T--Tongji_China--S%E9%80%9A%E8%B7%AF%E8%B4%A8%E7%B2%92%E5%9B%BE%E8%B0%B1-3.png" alt="S通路质粒图谱-3" style="max-width:100%" />

   <center>Figure 6. T7-SQR-J23110-SDO-APR-SAT  </center>

   <img src="https://2021.igem.org/wiki/images/3/3e/T--Tongji_China--figure_6.png" alt="figure 4" style="max-width:100%" />

   <center>Figure 7. Concentration of sulfide  SASS:T7-SQR-J23110-SDO-APR-SAT;BK:blank;WT:wild type</center>

   <img src="https://2021.igem.org/wiki/images/6/6c/T--Tongji_China--figure_4-4831934.jpeg" alt="figure 4" style="max-width:100%" />

   <center>Figure 6. SDS-PAGE bands   SASS:T7-SQR-J23110-SDO-APR-SAT;Mix: Put the protein of four plasmids which include four genes with T7 promoter respectively</center>

3. We construct a promoter library based on this, hoping to optimize the pairing of promoters and genes.

# The three-gear kill switch

## Design

Biosafety has always been an important part in iGEM. To prevent our engineered bacteria from leaking into the environment, we designed a H<sub>2</sub>S sensitive three-gear kill switch to ensure this.  H<sub>2</sub>S is an important factor in the working environment of our engineered bacteria, so we chose to use H<sub>2</sub>S concentration to control the on-off of the kill switch.  By searching for the biosensors of various gas molecules, we found a HS<sub>n</sub>H-sensing biosensor (the product of SQR oxidized H<sub>2</sub>S happens to be HS<sub>n</sub>H) -- a gene regulator, CstR, which can sense HS<sub>n</sub>H and turn on the expression of the downstream genes<sup> [1]</sup>. 

If we design a two-gear switch, namely, the switch is off when H<sub>2</sub>S concentration is high and on when H<sub>2</sub>S concentration is low, then we need to maintain high concentration of H<sub>2</sub>S in the culture environment, but this is obviously not realistic.  Therefore, we designed a three-gear kill switch based on the Dre/rox recombinant enzyme system <sup>[2]</sup>(referring to the work of [the Edinburgh UG in 2017](http://2017.igem.org/Team:Edinburgh_UG)) and the MazEF toxin-antitoxin system<sup>[3]</sup>, which can achieve more flexible regulation of the survival of our engineered bacteria. (Figure 7.)

<img src="https://2021.igem.org/wiki/images/0/06/T--Tongji_China--%E8%87%AA%E6%9D%80%E5%BC%80%E5%85%B3%E8%AE%BE%E8%AE%A1%E5%9B%BE-16348432326012.png" alt="自杀开关设计图" style="max-width:100%" />

<center>Figure 7. The design of our three-gear kill switch PR(Pcstr): the promoter which CstR can combine with and inhibit; PL: the constitutive promoter which regulate the  expression of CstR</center>

**Expected effects:**

Under the culture condition, H<sub>2</sub>S concentration is not high enough to turn on any of the three pathways, so the bacteria will grow normally. When the concentration of H<sub>2</sub>S is high, H<sub>2</sub>S will remove the inhibition of CstR on the downstream gene expression by combining with it, then Dre will be expressed, and the terminator before MazF will be removed, resulting in the expression of MazF toxin. Meanwhile, due to the expression of the antitoxin MazE, the bacteria will not die.  When working bacteria leak into the environment, H<sub>2</sub>S concentration in the environment will return to the normal (low) level, the inhibition of CstR will not be removed, and MazE will no longer be expressed. At this time, because MazF has been expressed, a large amount of MazF will kill the bacteria over time. (Figure 8.)

<img src="https://2021.igem.org/wiki/images/6/6a/T--Tongji_China--kill_switch-2-16348432326013.png" alt="kill switch-2" style="max-width:100%" />

<center>Figure 8.  The work circuit of our kill switch </center>

**<img src="https://2021.igem.org/wiki/images/7/75/T--Tongji_China--kill_switch_%E5%8A%A8%E7%94%BB-16348432326014.gif" alt="kill switch 动画" style="max-width:100%" />**

 **How to build**:

Considering the accessibility of the template and the time limitation, we adopted the strategy of assembling the functional components separately obtained by gene synthesis. Considering plasmid incompatibility, we chose pACYC as the vector for this part, which has a different replication system from pET-3a. Plasmids were constructed by restriction enzyme digestion and ligation and In-Fusion. The construction process we designed is shown below.

<img src="https://2021.igem.org/wiki/images/b/b4/T--Tongji_China--%E8%B4%A8%E7%B2%92%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B-16348433429455.png" alt="质粒构建流程" style="max-width:100%" />

<center>Figure 9. The initial plasmid construction flow chart </center>

## Build

Unfortunately, the synthesis of J23119-CstR-Pcstr-MazE-Dre encountered difficulty so that we couldn't obtain the sequence of J23119-CstR-Pcstr. Considering this part was very necessary for our work, we contacted Professor Huaiwei Liu from Shandong University based on literature and fortunately got his help. So we modified our plasmid construction. Using the plasmid(pACYC-rox-ter-rox-MazF-CstR-Pcstr-MazE-Dre) he donated as a template, we successfully amplified the CstR-Pcstr sequence(Figure 11A) and used it for our latter construction.

<img src="https://2021.igem.org/wiki/images/e/ef/T--Tongji_China--%E8%B4%A8%E7%B2%92%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B-2-16348434482806.png" alt="质粒构建流程-2" style="max-width:100%" />

<center>Figure 10. The modified plasmid construction flow chart </center>

We successfully constructed the plasmid CstR-Pcstr-MazE-Dre and amplified CstR-Pcstr-MazE-Dre(Figure 11B).Then we cloned CstR-Pcstr-MazE-Dre to pACYC-rox-ter-rox-MazF.

<img src="https://2021.igem.org/wiki/images/b/b2/T--Tongji_China--%E8%83%B6%E5%9B%BE-16347103179871-16348434482817.png" alt="胶图" style="max-width:100%" />

<center>Figure 11. Agarose electrophoresis  </center>

However, according to the sequencing results, we found that Pcstr was missing (not found in the PCR product). We speculated that probably due to the complexity of Pcstr, it was moved by the leaky Dre or other enzymes after transformation. Meanwhile, we found the terminator between the two rox sites was partly moved after we cultured the final plasmid. 
For this situation, We assumed that it could be the leakage of Pcstr that turned on the expression of Dre, which then cut off the terminator. This means we need to optimize our design. But this may prove that our Dre can cut off the sequence between rox sites correctly. If our assumption is right, namely the deletion only appears after the transformation and culture of bacteria, we can presume that the build is successful to an extent, but cannot work as expected.

## Test

### 1.promoter strength testing

To verify our assumption and optimize our design, we tried to find a proper combination of the three key promoters, PR(Pcstr), PL(PlacI), and J23110, by testing their strength respectively first(Figure 12.).

<img src="https://2021.igem.org/wiki/images/0/01/T--Tongji_China--%E5%90%AF%E5%8A%A8%E5%AD%90%E8%A1%A8%E5%BE%81-163484404035511.png" alt="启动子表征" style="max-width:100%" />

<center>Figure 12. The strength of the three key promoters </center>

From our results, we found that the intensity of Pcstr is significantly higher than J23110, and PlacI is very lower than J23110. This may explain why we encountered the leakage of Pcstr —— the inhibition of the CstR may be too low to block Pcstr while the intensity of Pcstr is at a high level. Although this is not consistent with the literature, the facts tell us that it is. 
At the same time, we also tested a series of promoters and compared them（Figure 13.）.

<img src="https://2021.igem.org/wiki/images/4/40/T--Tongji_China--%E4%B8%8D%E5%90%8C%E5%90%AF%E5%8A%A8%E5%AD%90-163484416277212.jpg" alt="不同启动子" style="max-width:100%" />

<center>Figure 13. Characterization of promoters </center>

### 2.CstR with Pcstr Characterization 

To ensure appropriate concentration range of S<sup>2-</sup> used for the characterization of pACYC-rox-ter-rox-MazF-CstR-Pcstr-MazE-Dre, we first characterized the function of CstR with Pcstr using pTrchis2A-CstR-Pcstr-mKate-CpSQR. The expression level regulated by Pcstr at different concentrations of S<sup>2-</sup>  was shown by the fluorescence intensity of mKate(/OD<sub>600 nm</sub>).

At the beginning, bacteria cultured in 5 mL were treated with 0, 6.5, 13.0, 26.0 and 39.0 mg/L Na<sub>2</sub>S (0, 20, 40, 80 and 120 mg/L Na<sub>2</sub>S·9H<sub>2</sub>O) respectively, and then the fluorescence intensity of mKate was measured with a microplate reader(Figure 14.).

<img src="https://2021.igem.org/wiki/images/c/c5/T--Tongji_China--CstR%E8%A1%A8%E5%BE%81-update.png" alt="CstR表征-update" style="max-width:100%" />

<center>Figure 14. The preliminary characterization of Pcstr (A)The fluorescence intensity variation relative to the concentration of Na<sub>2</sub>S; (B)The photo of the bacteria solution treated by gradient concentrations of Na<sub>2</sub>S; (C)The curve of fluorescence intensity relative to time; (D)The curve of OD<sub>600 nm</sub> relative to time</center>

It can be seen that the presence of S<sup>2-</sup> at different concentrations has no significant effect on the growth of bacteria. However, with the increase of S<sup>2-</sup>, the fluorescence intensity increases at first and then decreases, indicating that when S<sup>2-</sup> is too high, the lifting effect on CstR inhibition is weakened.  We hope to find out an appropriate concentration range in which the strength of Pcstr is positively correlated with the concentration of S<sup>2-</sup>, which tells us that we need to reduce the concentration gradient and concentration range for further characterization. 

We further used 0, 3.25, 6.50, 9.75, 13.00, 16.25 mg/L Na<sub>2</sub>S (0, 10, 20, 30, 40 and 50 mg/L Na<sub>2</sub>S·9H<sub>2</sub>O) to treat 5 mL bacterial solution and then measured the fluorescence intensity of mKate using a microplate reader(Figure 15.).

<img src="https://2021.igem.org/wiki/images/d/d2/T--Tongji_China--%E5%B0%8F%E6%A2%AF%E5%BA%A6%E6%B5%8B%E8%AF%95-update.png" alt="小梯度测试-update" style="max-width:100%" />

<center>Figure 15. The further characterization of Pcstr The fluorescence intensity variation relative to the concentration of Na<sub>2</sub>S with a smaller range</center>

It can be seen from the figure that in a smaller concentration range, there is a positive correlation between fluorescence intensity and Na<sub>2</sub>S concentration, visible to naked eyes, which implies that we can use data within this concentration range to guide our characterization experiments.

## Learn

From our results, we learnt that the promoter optimization was a necessity to our design, and CstR with Pcstr could react positively to S<sup>2-</sup> as expected but the range needed to be tested.

## Design

We tended to change different promoters to test the best combination. But considering the time limitation and the heavy workload, we tried to construct a <a href="/Team:Tongji_China/Model">model</a> to simulate the process.

## References

1. Liu, H., et al., *Synthetic Gene Circuits Enable Escherichia coli To Use Endogenous H(2)S as a Signaling Molecule for Quorum Sensing.* ACS Synth Biol, 2019. **8**(9): p. 2113-2120.

2. Anastassiadis, K., et al., *Dre recombinase, like Cre, is a highly efficient site-specific recombinase in E-coli, mammalian cells and mice.* Disease Models & Mechanisms, 2009. **2**(9-10): p. 508-515.

3. Simanshu, D.K., et al., *Structural Basis of mRNA Recognition and Cleavage by Toxin MazF and Its Regulation by Antitoxin MazE in Bacillus subtilis.* Molecular Cell, 2013. **52**(3): p. 447-458.
      `)
      this.ele = result as HTMLElement
    }
  }
}
</script>
