<template lang="pug">
v-row
  v-col.col-3
    Anchor(v-if="ele" :ele="ele")
  v-col.col-9
    div(ref="notebook").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Notebook extends Vue {
  static id = 'Notebook'
  ele: HTMLElement | null = null

  mounted (): void {
    const notebook = this.$refs.notebook as Element
    console.log(notebook)
    if (notebook) {
      notebook.innerHTML = marked(`

# Notebook

Our experiments can be mainly divided into three parts——hydrogen sulfide oxidization module, pathway optimization and kill switch, which are done in parallel. You can see what we have done by week below.

## **Week 1**: 7.18-7.24

### Hydrogen sulfide oxidization module

Pick monoclonal

### Pathway optimization

Haven't started yet

### Kill switch

Haven't started yet



## **Week 2**: 7.25-7.31

### Hydrogen sulfide oxidization module

Addition of terminator to plasmid pET3α-SQR

### Pathway optimization

Haven't started yet

### Kill switch

Haven't started yet



## **Week 3**: 8.1-8.7

### Hydrogen sulfide oxidization module

Add terminator to plasmid pET3α-SQR

### Pathway optimization

Haven't started yet

### Kill switch

Haven't started yet



## **Week 4**: 8.8-8.14

### Hydrogen sulfide oxidization module

Add terminator to plasmid pET3α-SDO-APR-SAT

### Pathway optimization

- Prepared plasmids  containing promoters with different strength from Anderson library.

- Prepared promoters and genes sequences for homologous recombination.

### Kill switch

Obtained the synthesized plasmid pACYC-rox-ter-rox-MazF



## **Week 5**: 8.15-8.21

### Hydrogen sulfide oxidization module

- SDS and qPCR pre-experiments

- Construction of pET3α-SQR-SDO-APR-SAT plasmid

### Pathway optimization

- Performed the first-round and second-round assembly.

- Tested solid medium containing sulfide.

### Kill switch

B1006 was successfully connected to pACYC-rox-ter-rox-MazF



## **Week 6**: 8.22-8.28

### Hydrogen sulfide oxidization module

- Construction of pET3α-SQR-APR, pET3α-SQR-SDO-APR plasmids

- Characterization of plasmids with sulfide treatment

### Pathway optimization

- Prepared promoters sequences for homologous recombination.

- Performed the second-round assembly.

### Kill switch

MazF was replaced with mRFP in pACYC-rox-ter-rox-MazF for later possible characterizations



## **Week 7**: 8.29-9.4

### Hydrogen sulfide oxidization module

- Construction of four plasmids: pET28a-T7-SQR, pET28a-T7-SDO, pET28a-T7-APR, pET28a-T7-SAT

- The mRNA level of the target gene was detected to prove that the target gene can be transcribed normally.
- The protein level of the target gene was detected. The band of the target protein could not be found by Coomassie brilliant blue staining. It was speculated that the expression was not high, and the target protein could not be distinguished from other proteins expressed by E. coli itself by ordinary staining.

### Pathway optimization

- Improved the library construction strategy, using plasmids backbone with different resistance gene in the first and second round respectively to decrease background.
- Performed colony PCR on the library.

### Kill switch

Amplified rox-ter-rox-MazF and assemble it to pET-28a（+），but failed,because of the deletion caused by PCR.



## **Week 8**: 9.5-9.11

### Hydrogen sulfide oxidization module

- Construction of plasmids with T7 promoter for all four genes

- The accuracy of sulfur ion detection kit was verified and the standard curve was drawn
- The ability of engineering bacteria to oxidize sulfur ions in sulfur ion culture medium was tried, and the experimental results were poor. It was found that the existence of LB medium would affect the change of sulfur ion concentration. Subsequent experiments were prepared to transfer the bacteria to glucose solution to verify its function
- In this attempt to verify the protein expression, it is found that the E. coli strain used is wrong, and the plasmid will be transferred to the appropriate strain to try again

### Pathway optimization

- Improved the primers for promoters. Prepared promoters sequences.

- Promoters characterization.

- Performed first-round assembly and sequencing.

### Kill switch

Assembled lacI with the promoter repressed by it to pACYC-rox-ter-rox-MazF



## **Week 9**: 9.12-9.18

### Hydrogen sulfide oxidization module

- Constructed four plasmids with T7 promoter

- The plasmid was transferred into BL21 strain. The results of protein electrophoresis showed that the four target proteins could be expressed normally in E. coli
- New protein function verification methods have been tried, but no effective characterization scheme has been found.

### Pathway optimization

- Promoters characterization.

- Improved the library construction strategy to get more specific PCR product for the second-round assembly.

### Kill switch

- Used the restriction enzymes to get the rox-ter-rox-MazF fragment and cloned it into

pET-28a（+）but failed

- Obtained the plasmid pTrchis2A-CstR-Pcstr-mKate-CpSQR（pTrchis2A-lacI-cstR-trc-op2-op1-op2-mkate-Cpsqr） which contains the CstR and the promoter regulated by it from Professor Liu in Shandong University
- Obtained the synthesized plasmid pKMV-Dre-MazE from the BGI
- B1006 was successfully connected to pKMV-Dre-MazE



## **Week 10**: 9.19-9.25

### Hydrogen sulfide oxidization module

Construct plasmids with T7 promoter in all four genes

### Pathway optimization

- Constructed the J23119-B0034-mRFP-B1006 plasmid.

- Improved the homologous arms to get higher recombination efficiency.

- Prepared promoters and genes sequences for homologous recombination.

- Modeling:

  - Literature research on different machine learning model.

  - Tested the ANN model.

### Kill switch

Characterization of pTrchis2A-lacI-cstR-trc-op2-op1-op2-mkate-CnSqr to observe the function of the CstR



## **Week 11**: 9.16-10.2

### Hydrogen sulfide oxidization module

- Constructed pET3α-T7-SQR-J23119-SDO-APR-SAT plasmid

- A better characterization system was found and the experimental conditions were further improved
- Combined with the new characterization scheme, the standard curve of sulfur ion detection was improved

### Pathway optimization

- Performed the first-round and second-round assembly.

- Performed colony PCR and sequencing on the library.

- Tested the pre-screen method in 96-wells plate.

### Kill switch

- Amplified the CstR-Pcstr from pTrchis2A-lacI-cstR-trc-op2-op1-op2-mkate-CpSqr and constructed the plasmid pKMV-CstR-Pcstr-Dre-MazE


- Went on the characterization of pTrchis2A-lacI-cstR-trc-op2-op1-op2-mkate-CpSqr



## **Week 12**: 10.3-10.9

### Hydrogen sulfide oxidization module

- Replace the promoter of HrtR gene on Heme-GFP plasmid with J23100, J23110, J23116

- The ability of engineering bacteria to oxidize sulfur ions in liquid environment was repeatedly verified

- The ability of simulated engineering bacteria to oxidize hydrogen sulfide in food waste environment was verified

### Pathway optimization

- Constructed the ODE model.

- Constructed the cellular automation model.

### Kill switch

Constructed the plasmid pACYC-rox-ter-rox-MazF-CstR-Pcstr-Dre-MazE but there was a deletion in Pcstr.


      `)
      this.ele = notebook as HTMLElement
    }
  }
}
</script>
