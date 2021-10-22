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
export default class CA extends Vue {
  static id = 'CA'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
    const poc = this.$refs.poc as Element
    console.log(poc)
    if (poc) {
      poc.innerHTML = marked(`
# ODE Model

## Background 

The hydrogen sulfide sensor is an important part of our three-gear adjustable [kill switch](/Team:Tongji_China/Design). CstR can bind to Pcst and repress gene expression. Polysulfide, which is oxidized from hydrogen sulfide by SQR, can interact with CstR, lower the affinity of CstR to its operon and activate gene expression. To achieve the goal of three-gear adjustable kill switch, thorough comprehension towards the hydrogen sulfide sensor is needed.

<img src="https://2021.igem.org/wiki/images/e/e0/T--Tongji_China--4.2.1.jpg" alt="4.2.1" style="max-width:100%" />

<center>Figure 1 The mechanism of hydrogen sulfide sensor </center>



## Modelling 

#### Goals 

By constructing the model of hydrogen sulfide sensor, we hope to achieve the following goal:

1. To understand how the sensor will behave in different polysulfide concentrations.

2. To understand how the reaction parameters can affect the performance of the sensor.

3. To understand how we can improve the performance of our kill switch.    

#### Assumptions

In order to simplify our system, we make a list of assumptions after thoroughly consideration.

1. At the beginning, P<sub>cst</sub> is repressed by CstR in all the plasmids.

2. At the beginning, there is no mKate mRNA and mKate protein in the cell.

3. The volume of immobilized cells stays constant, and division of cells isn’t taken into account in this model.

#### Model   

The kinetics of polysulfide-CstR binding and CstR-P<sub>cst</sub> binding has not been studied in details as far as we known so we decided to model the apparent relationship between polysulfide and mKate expression. The apparent kenetics of these process can be described using Hill equation as follow. 

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><mi>d</mi><mo stretchy="false">[</mo><mi>o</mi><mi>p</mi><mi>e</mi><mi>n</mi><mi>P</mi><mi>c</mi><mi>s</mi><mi>t</mi><mo stretchy="false">]</mo></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>V</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi></mrow></msub><mo stretchy="false">[</mo><mi>H</mi><msub><mi>S</mi><mi>n</mi></msub><mi>H</mi><msup><mo stretchy="false">]</mo><mi>n</mi></msup></mrow><mrow><msub><mi>K</mi><mi>d</mi></msub><mo>+</mo><mo stretchy="false">[</mo><mi>H</mi><msub><mi>S</mi><mi>n</mi></msub><mi>H</mi><msup><mo stretchy="false">]</mo><mi>n</mi></msup></mrow></mfrac></mrow><annotation encoding="application/x-tex">\frac{d[open Pcst]}{dt}=\frac{V_{max}[HS_nH]<sup>n}{K_d+[HS_nH]</sup>n}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.355em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.6550000000000002em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">t</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="mopen mtight">[</span><span class="mord mathnormal mtight">o</span><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight">n</span><span class="mord mathnormal mtight" style="margin-right:0.13889em;">P</span><span class="mord mathnormal mtight">cs</span><span class="mord mathnormal mtight">t</span><span class="mclose mtight">]</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1.53em;vertical-align:-0.52em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.07153em;">K</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3487714285714287em;margin-left:-0.07153em;margin-right:0.07142857142857144em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">d</span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.15122857142857138em;"><span></span></span></span></span></span></span><span class="mbin mtight">+</span><span class="mopen mtight">[</span><span class="mord mathnormal mtight" style="margin-right:0.08125em;">H</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.16454285714285719em;"><span style="top:-2.357em;margin-left:-0.05764em;margin-right:0.07142857142857144em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right:0.08125em;">H</span><span class="mclose mtight"><span class="mclose mtight">]</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.5935428571428571em;"><span style="top:-2.786em;margin-right:0.07142857142857144em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.16454285714285719em;"><span style="top:-2.357em;margin-left:-0.22222em;margin-right:0.07142857142857144em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ma</span><span class="mord mathnormal mtight">x</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mopen mtight">[</span><span class="mord mathnormal mtight" style="margin-right:0.08125em;">H</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.16454285714285719em;"><span style="top:-2.357em;margin-left:-0.05764em;margin-right:0.07142857142857144em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right:0.08125em;">H</span><span class="mclose mtight"><span class="mclose mtight">]</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7385428571428572em;"><span style="top:-2.931em;margin-right:0.07142857142857144em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><mi>d</mi><mo stretchy="false">[</mo><mi>m</mi><mi>K</mi><mi>a</mi><mi>t</mi><mi>e</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo stretchy="false">]</mo></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msub><mi>k</mi><mi>m</mi></msub><mi>k</mi><mi>a</mi><mi>t</mi><mi>e</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>∗</mo><mo stretchy="false">[</mo><mi>o</mi><mi>p</mi><mi>e</mi><mi>n</mi><mi>P</mi><mi>c</mi><mi>s</mi><mi>t</mi><mo stretchy="false">]</mo><mo>−</mo><msub><mi>k</mi><mrow><mi>R</mi><mi>N</mi><mi>A</mi><mo separator="true">,</mo><mi>d</mi><mi>e</mi></mrow></msub><mo>∗</mo><mo stretchy="false">[</mo><mi>m</mi><mi>K</mi><mi>a</mi><mi>t</mi><mi>e</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">\frac{d[mKateRNA]}{dt}=k_mkateRNA*[openPcst]-k_{RNA,de}*[mKateRNA]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.355em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.6550000000000002em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">t</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="mopen mtight">[</span><span class="mord mathnormal mtight">m</span><span class="mord mathnormal mtight" style="margin-right:0.07153em;">K</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight" style="margin-right:0.10903em;">RN</span><span class="mord mathnormal mtight">A</span><span class="mclose mtight">]</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.84444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.151392em;"><span style="top:-2.5500000000000003em;margin-left:-0.03148em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal">ka</span><span class="mord mathnormal">t</span><span class="mord mathnormal">e</span><span class="mord mathnormal" style="margin-right:0.10903em;">RN</span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal">o</span><span class="mord mathnormal">p</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord mathnormal">cs</span><span class="mord mathnormal">t</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.980548em;vertical-align:-0.286108em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361079999999999em;"><span style="top:-2.5500000000000003em;margin-left:-0.03148em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">RN</span><span class="mord mathnormal mtight">A</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.286108em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal">m</span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord mathnormal">e</span><span class="mord mathnormal" style="margin-right:0.10903em;">RN</span><span class="mord mathnormal">A</span><span class="mclose">]</span></span></span></span>

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><mi>d</mi><mo stretchy="false">[</mo><mi>m</mi><mi>K</mi><mi>a</mi><mi>t</mi><mi>e</mi><mo stretchy="false">]</mo></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msub><mi>k</mi><mrow><mi>k</mi><mi>a</mi><mi>t</mi><mi>e</mi></mrow></msub><mo>∗</mo><mo stretchy="false">[</mo><mi>m</mi><mi>K</mi><mi>a</mi><mi>t</mi><mi>e</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo stretchy="false">]</mo><mo>−</mo><msub><mi>K</mi><mrow><mi>k</mi><mi>a</mi><mi>t</mi><mi>e</mi><mo separator="true">,</mo><mi>d</mi><mi>e</mi></mrow></msub><mo>∗</mo><mo stretchy="false">[</mo><mi>m</mi><mi>K</mi><mi>a</mi><mi>t</mi><mi>e</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">\frac{d[mKate]}{dt}=k_{kate}*[mKateRNA]-K_{kate,de}*[mKate]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.355em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.6550000000000002em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">t</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="mopen mtight">[</span><span class="mord mathnormal mtight">m</span><span class="mord mathnormal mtight" style="margin-right:0.07153em;">K</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">e</span><span class="mclose mtight">]</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.84444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.33610799999999996em;"><span style="top:-2.5500000000000003em;margin-left:-0.03148em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ka</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal">m</span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord mathnormal">e</span><span class="mord mathnormal" style="margin-right:0.10903em;">RN</span><span class="mord mathnormal">A</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.969438em;vertical-align:-0.286108em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361079999999999em;"><span style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ka</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">e</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.286108em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal">m</span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord mathnormal">e</span><span class="mclose">]</span></span></span></span>

#### Parameters 

   After constructing the model, we tried to find the proper constants for each reaction and set reasonable initial values for the reactant. Due to the limited amount of experimental data and information available, some of the reaction constants had to be estimated by either fitting data or using numerical averages of a similar part. Values of these parameters are listed below.

| **parameter**            | **value**  | **unit** | **description**                                              | **source** |
| ------------------------ | ---------- | -------- | ------------------------------------------------------------ | ---------- |
| ***n***                  | 3          | \\        | Hill Coefficient of the apparent  polysulfide-P<sub>cst</sub>reaction | [1]        |
| ***K<sub>d</sub>***               | 9.5*10<sup>12</sup> | M<sup>3</sup>     | Apparent dissociation constant of  polysulfide and P<sub>cst</sub>    | [1]        |
| ***V<sub>max</sub>***             | 1          | M/s      | The maximum reaction rate                                    | \\          |
| ***K<sub>kate,mRNA</sub>***       | 0.02       | s<sup>-1</sup>    | The transcription rate of mKate                              | [2]        |
| ***K<sub>kate,de</sub>***         | 0.003      | s<sup>-1</sup>    | The degradation rate of mKate mRNA                           | [3]        |
| ***K<sub>kate</sub>***            | 0.06       | s<sup>-1</sup>    | The translation rate of mKate                                | [4]        |
| ***K<sub>kate,de</sub>***         | 0.02       | s<sup>-1</sup>    | The degradation rate of mKate                                | [3]        |
| [ ***Closed  P<sub>cst</sub>*** ] | 2*10<sup>4</sup>    | M        | Calculated from the copy number of pBR322                    | \\          |
| [***HS<sub>n</sub>H***]           | 1*10<sup>5</sup>    | M        | \\                                                            | \\          |

<center>Table 1 Reaction parameters and initial values for the reactant </center>



#### Validation and analysis  

To validate our model, we firstly compared the mKate expression simulated by our model with our experimental data and found that they showed good consistency. The experimental data has higher mKate expression in the first few hours, indicating leaky expression, which is not described in our model. Leaky expression be a serious problem when it can lead to unexpected toxin protein expression. 

<img src="https://2021.igem.org/wiki/images/0/0b/T--Tongji_China--4.2.2.jpg" alt="4.2.2" style="max-width:100%" />

<center>Figure 2 Comparison of simulation data and experimental data  </center>

To understand how the sensor would behave in different polysulfide concentrations, we run a scan with 6 different initial concentrations of polysulfide from 10 μM to 35μM by evenly spaced intervals. As expected, a higher concentration of polysulfide produces higher output of mKate. However, the difference between selected concentrations is very little in the first few hours. This might affect the promptness of the kill switch.

<img src="https://2021.igem.org/wiki/images/d/d8/T--Tongji_China--4.2.3.jpg" alt="4.2.3" style="max-width:100%" />

<center>Figure 3 Sensor behaviors in different polysulfide concentrations  </center>

Next, we hope to figure out how these reaction parameters affect the performance of the sensor. Sensitivity analysis reveals that K<sub>d</sub> have the greatest influence on the output. K<sub>d</sub> is a parameter which is related to CstR expression level, the affinity between HS<sub>n</sub>H and the affinity between CstR and P<sub>cst</sub>. When K<sub>d</sub>  is large (10<sup>-11</sup>~10<sup>-9</sup>) , increasing K<sub>d</sub> can significantly down-regulate the downstream output, while increasing a small K<sub>d</sub> do not have much influence. 



<img src="https://2021.igem.org/wiki/images/f/f9/T--Tongji_China--4.2.4.jpg" alt="4.2.4" style="max-width:100%" />

<center>Figure 4 Sensitivity analysis </center>

<img src="https://2021.igem.org/wiki/images/5/55/T--Tongji_China--4.2.5.jpg
" alt="4.2.5" style="max-width:100%" />

<center>Figure 5 Sensitivity analysis of Kd </center>



## Conclusion

This model answers several concerned questions and reminds us of some important points in kill switch improvement. 

1. The leaky expression and lack of promptness are problems which should be taken seriously when doing further improvement.
2. K<sub>d</sub> is an important parameter when we hope to regulate downstream expression of genes. It may be adjusted by regulating CstR expression.



## Reference

[1] Liu, H., Fan, K., Li, H., Wang, Q., Yang, Y., Li, K., Xia, Y., & Xun, L. (2019). Synthetic Gene Circuits Enable *Escherichia coli* To Use Endogenous H2S as a Signaling Molecule for Quorum Sensing. *ACS synthetic biology*, *8*(9), 2113–2120. 

[2] http://2010.igem.org/Team:Warsaw/Stage1/PromMeas

[3] https://bionumbers.hms.harvard.edu/bionumber.aspx?s=n&v=2&id=106253

[4] Zhu, M., Mori, M., Hwa, T., & Dai, X. (2019). Disruption of transcription-translation coordination in Escherichia coli leads to premature transcriptional termination. *Nature microbiology*, *4*(12), 2347–2356.
      `)
      this.ele = poc as HTMLElement
    }
  }
}
</script>
