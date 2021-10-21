<template lang="pug">
div(ref="h_md").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import marked from 'marked'

@Component
export default class H extends Vue {
  static readonly id = 'Hydrogen'

  mounted () : void {
    const h = this.$refs.h_md as Element
    if (h) {
      h.innerHTML = marked(`

# Hydrogen sulfide degradation

## Selection of gene and plasmid construction

According to the [background]()(超链接到2.1 description-background) we have researched, we found that hydrogen sulfide and ammonia are the two main odors that cause malodor in food waste <sup>[1]</sup>, so we decided to convert these two malodor-emitting odors into non-toxic and odorless substances so that we could solve the problem through engineered bacteria.
Two main problems need to be solved.

-  What substances to convert the odors into
-  By what reaction pathway

After our extensive literature review and intense discussions, the following technical routes were identified.

1. ### Converse hydrogen sulfide into sulfate

   Hydrogen sulfide is a strongly reducing substance, so it is natural to think that it can be oxidized to deal with it. By reviewing the literature, we found that there are sulfur treatment pathways in some sulfur bacteria (see Figure 1. below) <sup>[2]</sup>, and we can refer to this to design our treatment pathway.

   <img src="https://2021.igem.org/wiki/images/2/23/T--Tongji_China--S_cellular_pathway.png" alt="S cellular pathway" style="max-width:100%" />

   [^Figure 1.]: The updated model of sulfur oxidation in A. ferrooxidans. OMP, outer-membrane proteins; TQO, thiosulfate quinone oxidoreductase; TSD, thiosulfate dehydrogenase; TetH, tetrathionate hydrolase; SQR, sulfide: quinone oxidoreductase; SDO, sulfur dioxygenase; HDR, Hdr-like complex; SAT, ATP sulfurylase; bd,bo3, terminal oxidases; QH2, quinol pool; NADH, NADH dehydrogenase complex I.

   Through further investigation we found that sulfite is cytotoxic, singlet sulfur is produced slowly under aerobic conditions, and the large accumulation of GSSH and H<sub>2</sub>S<sub>n</sub> is toxic and causes the expression of reductase in E. coli, thus requiring conversion downstream. Taking into account, we selected sulfate as our end product, which has no major effect on both bacteria and the environment at low doses and is odorless itself.

2. ### Specific metabolic pathways

   As Figure 2. below, we introduced a plasmid containing four genes into the bacteria to convert hydrogen sulfide to sulfate through a four-step reaction.

<img src="https://2021.igem.org/wiki/images/b/b6/T--Tongji_China--S%E9%80%9A%E8%B7%AF%E8%AE%BE%E8%AE%A1%E5%9B%BE.png" alt="S通路设计图" style="max-width:100%" />

[^Figure 2. The hydrogen sulfide degradation pathway]: 

#### The introduction of the four genes 

- ##### SQR

  Sulfide: quinone oxidoreductase, is an ancient flavoprotein of the disulfide oxidoreductase family that is present in nearly all domains of life. SQRs were first found in sulfide trophic bacteria, later SQR-like enzymes were found in the mitochondria of some fungi, as well as in all animal species whose genomes have been sequenced. Several SQRs have been purified and characterized by biochemical methods. They are considered to be integral monotopic membrane proteins, associating with the membrane through amphipathic helices. The monomeric molecular mass of the enzyme is around 50 kDa. The enzyme usually harbors a covalently-bound FAD cofactor in each monomer. However, FAD can also be non-covalently bound as in the SQR of A. ferrooxidans and some other organisms.
  SQR: Some articles reported the heterologous expression of SQR gene in E. coli, and we refer to its sequence <sup>[3,4]</sup>.

- ##### SDO

  sulfur dioxygenase, was purified from A. ferrooxidans AP19-3, which could catalyze the oxidation of S0 to sulfite in the presence of reduced glutathione (GSH) by using Fe3+ or molecular oxygen as electron acceptor. The GSH-dependent SDO is a homodimer and the molecular mass of each subunit is approximately 23 kDa.
  SDO: An article reported the expression of SDO gene in E. coli, and we refer to its sequence <sup>[5]</sup>.

- ##### AprBA and SAT

  The APS pathway consists of an APS reductase (AprBA) and an ATP sulfurylase (SAT). These enzymes are involved in the dissimilatory sulfate reduction pathway in sulfate-reducing prokaryotes. SAT utilizes ATP and sulfate to generate APS which is further converted to AMP and sulfite by AprBA.
  AprBA and SAT: AprBA gene was cloned and successfully expressed in E. coli, and we refer to the sequences of AprBA and SAT <sup>[6,7]</sup>.

## Characterization of hydrogen sulfide treatment

We plan to verify the gene expression efficiency at the DNA, RNA, and protein levels and to test the ability of our bacteria to convert sulfide to sulfate in an aqueous solution.

### DNA level

Since the plasmid is complicated, we synthesized two plasmids, pET-SQR and pET-SDO-APR-SAT, which were assembled into the plasmid containing four genes after getting them.

### RNA level

We hope to extract bacterial RNA, reverse transcribe it and then subject it to qPCR to detect gene expression. After reviewing the literature, we selected the E. coli ’s 16s gene as the internal reference gene. The primers for each gene are as follows：

| Gene   | 16s                                                          | SQR                                                          | SDO                                                          | Aprba                                                        |                             SAT                              |
| ------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | :----------------------------------------------------------: |
| Primer | 16SrRNA_ecoli_F：<br/>CTGGAACTGAGACACGGTCC <br/> 16SrRNA_ecoli_R: <br/> GGTGCTTCTTCTGCGGGTAA |sqr-qpcr_F: <br/> tttatcgccttgccccagttga <br/> sqr-qpcr_R: <br/> ctcatagaagggctcggagaca|sdo-qpcr_F: <br/> accgaaaccagcacctacac <br/> sdo-qpcr_R:<br/>ccgatccagtatgcgcagta|aprba-qpcr_F: <br/> aacatgcgccctggatagag <br/> aprba-qpcr_R: <br/> gctccactgtcccgtattcc|sat-qpcr_F: <br/> gcgccacccatttcatcatc <br/> sat-qpcr_R: <br/> acgcatactcgggcagaaaa|

[^Table 1. The primer sequences for each genes]: 

### Protein level

To detect protein expression, SDS-PAGE electrophoresis was performed on bacteria after lysis.

### Sulfide treatment

To verify the ability of the bacteria to convert sulfide, we want to directly detect the change of hydrogen sulfide concentration. In practice, the engineered bacteria will convert hydrogen sulfide in a liquid environment. Accordingly, we decide to add sodium sulfide to the aqueous solution to simulate the environment of hydrogen sulfide odor after it dissolves in water, and place the engineered bacteria in such reaction solution, took samples at different times to test the sulfide concentration and sulfate concentration in the water, to test the ability of our bacteria.
There are many methods to detect sulfide and sulfate, according to the actual condition of our laboratory, we chose the most suitable colorimetric method (see [protocol](连接到protocol) （链接到3.3 protocol-characterization）of sulfide and sulfate detection for details).

## References

1. 郭晓琪, 吕永, and 覃卫星, *广州市垃圾转运站恶臭物质氨和硫化氢的含量测定.* 环境卫生工程, 2009. **17**(S1): p. 81-83+86.

2. Wang, R., et al., *Sulfur Oxidation in the Acidophilic Autotrophic Acidithiobacillus spp.* Frontiers in Microbiology, 2019. **9**.

3. Wakai, S., et al., *Purification and characterization of sulfide : quinone oxidoreductase from an acidophilic iron-oxidizing bacterium, acidithiobacillus ferrooxidans.* Bioscience Biotechnology and Biochemistry, 2007. **71**(11): p. 2735-2742.
4. Zhang, Y. and J.H. Weiner, *Characterization of the kinetics and electron paramagnetic resonance spectroscopic properties of Acidithiobacillus ferrooxidans sulfide:quinone oxidoreductase (SQR).* Archives of Biochemistry and Biophysics, 2014. **564**: p. 110-119.

5. Wang, H., et al., *Identification and characterization of an ETHE1-like sulfur dioxygenase in extremely acidophilic Acidithiobacillus spp.* Applied Microbiology and Biotechnology, 2014. **98**(17): p. 7511-7522.

6. Valdes, J., et al., *Acidithiobacillus ferrooxidans metabolism: from genome sequence to industrial applications.* Bmc Genomics, 2008. **9**.

7. Zheng, C.L., et al., *Characterization and Reconstitute of a Fe4S4 Adenosine 5 '-Phosphosulfate Reductase from Acidithiobacillus ferrooxidans.* Current Microbiology, 2009. **58**(6): p. 586-592.

 
      `)
    }
  }
}
</script>
