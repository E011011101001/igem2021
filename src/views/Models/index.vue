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
export default class Models extends Vue {
  static id = 'Models'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
    const poc = this.$refs.poc as Element
    console.log(poc)
    if (poc) {
      poc.innerHTML = marked(`
# Cellular Automation Model

## Abstract

The goal of our project 'LOOK!' is to control the the odour released by kitchen waste, mainly in its front-end processing. In order to guide the implementation of our odour processing bacteria, we built a cellular automaton model to simulate the process of bio-engineered bacteria release and odour degradation.

Based on this model, we can determine the general optimized release strategy, generate different strategies for different use cases and find efficient ways to improve our project.

## 1. Background

### 1.1 About our project

Since the implementation of household garbage sorting regulations in Shanghai, the amount of food waste has reached a peak. However, problems caused by odor like unpleasant smell and health problems, have aroused great attention everywhere. We construct two kinds of bioengineered E.coli to absorb hydrogen sulfide and ammonia, which are the two main [ingredients in the odor](/Team:Tongji_China/Description).

By developing this model, we hope to achieve these following goals which can contribute to our project design, biosafety consideration and implementation.

**Goal 1**: To find the factors which have the largest effect on odour degradation rate and offer a guidance for engineered bacteria design.

**Goal 2**: To compare different ways of application and offer a guidance for hardware design.

**Goal 3**: To find the optimized spraying strategy in different cases.

**Goal 4**: To find the optimized strength and threshold of kill switch, considering both bio-safety and degradation efficiency.

### 1.2 About cellular automation model

Cellular automation (CA) are discrete, abstract computational systems that have proved useful both as general models of complexity and as more specific representations of non-linear dynamics in a variety of scientific fields<sup>[1]</sup>. Considering the aggregation of bacteria and the complexity of its working environment, the cellular automaton can meet our needs. In terms of algorithm complexity and accuracy, the cellular automaton also performs better than the partial differential equation.

## 2. Establishment of the basic model

### 2.1 Dynamics of engineered bacteria population

To describe the population growth of engineered bacteria after they are released into working environment (e.g. dustbin, garbage carrying vehicles), we use a modified logistic growth model to quantify the bacterial  growth. The population change in a discrete time is determined by a environmental limitaion factor (**K**), intrinsic rate of increase(**r**) and the current population quantity(**N**).

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mrow><mi>g</mi><mi>r</mi><mi>o</mi><mi>w</mi></mrow></msub><mo>=</mo><mi>r</mi><mo>∗</mo><mi>N</mi><mo>∗</mo><mfrac><mrow><mi>K</mi><mo>−</mo><mi>N</mi></mrow><mi>K</mi></mfrac></mrow><annotation encoding="application/x-tex">V_{grow}=r*N*\frac{K-N}{K}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.969438em;vertical-align:-0.286108em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.15139200000000003em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">g</span><span class="mord mathnormal mtight">ro</span><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.286108em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.46528em;vertical-align:0em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1.217331em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.872331em;"><span style="top:-2.6550000000000002em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.07153em;">K</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.07153em;">K</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>

<center>Equation 2.1.1 The growth model. K represents the environmental capacity, r represents the intrinsic rate of increase and N0 represent the current population quantity</center>

Considering the spread of engineered bacteria in the working environment, we set a rule to quantify this process. The bacteria cluster has a possibility to migrate from a spot with higher population density to a spot with lower population density.

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mrow><mi>s</mi><mi>p</mi><mi>r</mi><mi>e</mi><mi>a</mi><mi>d</mi></mrow></msub><mo>=</mo><mi>b</mi><mi>p</mi><mo>∗</mo><mo stretchy="false">(</mo><msub><mi>N</mi><mrow><mi>n</mi><mi>e</mi><mi>i</mi><mi>b</mi><mi>o</mi><mi>u</mi><mi>r</mi></mrow></msub><mo>−</mo><msub><mi>N</mi><mrow><mi>c</mi><mi>e</mi><mi>n</mi><mi>t</mi><mi>r</mi><mi>e</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">V_{spread}=bp*(N_{neibour}-N_{centre})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.969438em;vertical-align:-0.286108em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361079999999999em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">s</span><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight">re</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">d</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.286108em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span class="mord mathnormal">b</span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.33610799999999996em;"><span style="top:-2.5500000000000003em;margin-left:-0.10903em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight">ib</span><span class="mord mathnormal mtight">o</span><span class="mord mathnormal mtight">u</span><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2805559999999999em;"><span style="top:-2.5500000000000003em;margin-left:-0.10903em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ce</span><span class="mord mathnormal mtight">n</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">re</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>

<center>Equation 2.1.2 The bacterial spread model. bp is a constant related to the transfer ability of the bacteria and N represents population quantity.</center>

To ensure bio-safety, we design a kill switch which is able to kill the bacteria once they are released into the external environment. This process is determined by the density of odour.  We suppose that when the odour is controlled under a low concentration in the working environment, the kill switch might partly open and affect the bacterial population. This is described by the following equation.

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi><mi>f</mi><mspace width="0.5em"/><mi>C</mi><mo>&lt;</mo><mi>t</mi><mi>h</mi><mo>:</mo><msub><mi>V</mi><mrow><mi>s</mi><mi>u</mi><mi>i</mi><mi>c</mi><mi>i</mi><mi>d</mi><mi>e</mi></mrow></msub><mo>=</mo><mi>d</mi><mo>∗</mo><mi>N</mi><mo>∗</mo><mfrac><mrow><mi>t</mi><mi>h</mi><mo>−</mo><mi>C</mi></mrow><mrow><mi>t</mi><mi>h</mi></mrow></mfrac></mrow><annotation encoding="application/x-tex">if \\enspace C&lt;th : V_{suicide}=d*N*\frac{th-C}{th}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span class="mord mathnormal">i</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.5em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathnormal">t</span><span class="mord mathnormal">h</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.33610799999999996em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">s</span><span class="mord mathnormal mtight">u</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight">c</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathnormal">d</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1.2251079999999999em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8801079999999999em;"><span style="top:-2.6550000000000002em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">h</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">h</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight" style="margin-right:0.07153em;">C</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>

<center>Equation 2.1.3 The suicide model. th is the odour threshold when the kill switch is pulled on. d is the maximum death rate when the kill switch is pulled on. C is the odour concentration.  </center>

To sum up, the bacteria dynamics can be described as the equation below.

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mrow><mi>b</mi><mi>a</mi><mi>c</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>g</mi><mi>r</mi><mi>o</mi><mi>w</mi></mrow></msub><mo>+</mo><msub><mi>V</mi><mrow><mi>s</mi><mi>p</mi><mi>r</mi><mi>e</mi><mi>a</mi><mi>d</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mrow><mi>s</mi><mi>u</mi><mi>i</mi><mi>c</mi><mi>i</mi><mi>d</mi><mi>e</mi></mrow></msub></mrow><annotation encoding="application/x-tex">V_{bac}=V_{grow}+V_{spread}-V_{suicide}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.33610799999999996em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ba</span><span class="mord mathnormal mtight">c</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.969438em;vertical-align:-0.286108em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.15139200000000003em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">g</span><span class="mord mathnormal mtight">ro</span><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.286108em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.969438em;vertical-align:-0.286108em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361079999999999em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">s</span><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight">re</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">d</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.286108em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.33610799999999996em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">s</span><span class="mord mathnormal mtight">u</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight">c</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>

<center> Equation 2.1.4 Dynamics of the bio-engineered bacteria population</center>

<img src="https://2021.igem.org/wiki/images/a/a3/T--Tongji_China--4.1.1.jpg" style="max-width:100%" />

<center>Figure 2.1 Bacterial dynamics</center>



### 2.2 Dynamics of odour production and degradation

Odour production from catabolism of some kinds of bacteria is an continuous process. Here we use a linear function of time to describe odour production, assuming steady odour production rate in a period of time.

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mrow><mi>p</mi><mi>r</mi><mi>o</mi></mrow></msub><mo>=</mo><mi>p</mi></mrow><annotation encoding="application/x-tex">V_{pro}=p</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.969438em;vertical-align:-0.286108em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.15139200000000003em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight">ro</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.286108em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.19444em;"></span><span class="mord mathnormal">p</span></span></span></span>

<center> Equation 2.2.1 Odour production</center>


In term of odour degradation, we use the Michaelis-Menten equation to describe the apparent degradation reaction undertaked by bio-engineered bacteria, instead of describing series of complex enzymatic reactions. The maximum reaction rate is determined by the odour processing ability of engineered bacteria(f) and engineered bacteria concentration(N).

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mrow><mi>d</mi><mi>e</mi></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>V</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi mathvariant="normal">.</mi><mi>d</mi><mi>e</mi></mrow></msub><mo>∗</mo><mi>C</mi></mrow><mrow><msub><mi>K</mi><mrow><mi>m</mi><mo separator="true">,</mo><mi>d</mi><mi>e</mi></mrow></msub><mo>+</mo><mi>C</mi></mrow></mfrac></mrow><annotation encoding="application/x-tex">V_{de}=\\frac{V_{max.de}*C}{K_{m,de}+C}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.33610799999999996em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1.4422709999999999em;vertical-align:-0.5480799999999999em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.894191em;"><span style="top:-2.6550000000000002em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.07153em;">K</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3487714285714287em;margin-left:-0.07153em;margin-right:0.07142857142857144em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.29011428571428566em;"><span></span></span></span></span></span></span><span class="mbin mtight">+</span><span class="mord mathnormal mtight" style="margin-right:0.07153em;">C</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.41586em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3487714285714287em;margin-left:-0.22222em;margin-right:0.07142857142857144em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ma</span><span class="mord mathnormal mtight">x</span><span class="mord mtight">.</span><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.15122857142857138em;"><span></span></span></span></span></span></span><span class="mbin mtight">∗</span><span class="mord mathnormal mtight" style="margin-right:0.07153em;">C</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.5480799999999999em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mo separator="true">,</mo><mi>d</mi><mi>e</mi></mrow></msub><mo>=</mo><mi>f</mi><mo>∗</mo><mi>N</mi></mrow><annotation encoding="application/x-tex">V_{max,de}=f*N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.969438em;vertical-align:-0.286108em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361079999999999em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ma</span><span class="mord mathnormal mtight">x</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.286108em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span>

<center>Equation 2.2.2, 2.2.3 Odour degradation model. Vmax represents the maximum reaction rate. C represents odour concentration. Km represents Michaelis constant. f represent the odour processing ability of engineered bacteria.</center>

Considering the free expansion of odour, we use the below rule to describe the process of gas diffusion from high concentration to low concentration.

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mo separator="true">,</mo><mi>d</mi><mi>e</mi></mrow></msub><mo>=</mo><mi>f</mi><mo>∗</mo><mi>N</mi></mrow><annotation encoding="application/x-tex">V_{max,de}=f*N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.969438em;vertical-align:-0.286108em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361079999999999em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ma</span><span class="mord mathnormal mtight">x</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.286108em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span>


<center>Equation 2.2.4 The odour diffusion model. bps is a constant related to the diffusion ability of gas and C represents odour concentration.</center>

To sum up, the odour dynamics can be described as the equation below.

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mi>s</mi></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>p</mi><mi>r</mi><mi>o</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mrow><mi>d</mi><mi>e</mi></mrow></msub><mo>+</mo><msub><mi>V</mi><mrow><mi>d</mi><mi>i</mi><mi>f</mi><mi>f</mi></mrow></msub></mrow><annotation encoding="application/x-tex">V_{s}=V_{pro}-V_{de}+V_{diff}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.151392em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">s</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.969438em;vertical-align:-0.286108em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.15139200000000003em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight">ro</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.286108em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.33610799999999996em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:0.969438em;vertical-align:-0.286108em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361079999999999em;"><span style="top:-2.5500000000000003em;margin-left:-0.22222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right:0.10764em;">ff</span></span></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.286108em;"><span></span></span></span></span></span></span></span></span></span>

<center> Equation 2.2.5 Dynamics of odour production and degradation</center>

<img src="https://2021.igem.org/wiki/images/1/17/T--Tongji_China--4.1.2.jpg" style="max-width:100%" />

<center>Figure 2.2 Odour dynamics</center>



### 2.3 cellular automation setting

There are different ways to set lattice(cells in the map), identify neighbours and set boundary in cellular automation model.

Square lattice is simple, intuitional and easy to code, so it's chosen in our model. Moore Neighbour is also used for better intuitiveness in the simulation of bacteria spread and odour diffusion.

Due to the limitation of computing power, it's difficult to create a large map with high precision. Periodic boundary, which enable a two-dimensional surface to form a topological circle, is used in our model so that we can simulation a larger space.

<img src="https://2021.igem.org/wiki/images/1/16/T--Tongji_China--4.1.3.jpg" style="max-width:100%" />

<center>Figure 2.3 CA setting</center>



## 3.  Parameters and model validation

### 3.1 Initiate parameters setting

To set the initiate value of these parameters, firstly we take hydrogen sulfide as our targeted odour. we did literature research, essential experiment, human practise and modelling. The original data we got was converted to fit in our model better.  Parameters we used and their initiate values are listed below.

| Parameter | Description                                                  | Value   | Units                | Source                                                       |
| --------- | ------------------------------------------------------------ | ------- | -------------------- | ------------------------------------------------------------ |
| K         | Environment capacity(different from the logistic model)      | 0.05    | OD <br/> (1 OD = 10<sup>8</sup> CFU) | we assume that the maximum bacteria number can reach 1 OD in a single 1 cm<sup>2</sup> square |
| r         | Intrinsic growth coefficient                                 | 0.01    | S<sup>-1</sup>                | [2]                                                          |
| bp        | Bacteria spread coefficient                                  | 0.05    | S<sup>-1</sup>                | [3]                                                          |
| bps       | Odour spread coefficient                                     | 0.5     | S<sup>-1</sup>                | \\                                                            |
| d         | Bacteria suicide coefficient                                 | 0.5     | S<sup>-1</sup>                | our ODE model **(link: ODE model)**                          |
| K<sub>m,de</sub>   | Km of hydrogen sulfide degradation reaction, catalysed by bio-engineered bacteria | 500     | μg/L                 | \\                                                            |
| f         | Odour degradation coefficient                                | 600     | S<sup>-1</sup>OD<sup>-1</sup>          | our experiment data **(link: result)**                       |
| p         | Odour production rate                                        | 10      | μg/L/min             | [4]                                                          |
| th        | Odour concentration threshold when the kill switch turns on  | 7       | μg/L                 | [5]                                                          |
| N<sub>0</sub>      | Initiate number of engineered bacteria in each cell          | 0.5     | OD                   | usual concentration of bacterium agents **(link hp)**        |
| n         | Initiate number of engineered bacteria clusters in the map   | 200     | \\                    | usual concentration of bacterium agents **(link hp)**        |
| t         | simulation time                                              | 60      | min                  | \\                                                            |
| s         | simulation space                                             | 100*100 | mm<sup>2</sup>                | \\                                                            |

### 3.2 Model validation

We simulate the dynamic change of bio-engineered bacteria and odour for 60 minutes (60 iterations) in the 100*100 map. We use heatmaps to better visualize this process (Figure 3.2.1).

<img src="https://2021.igem.org/wiki/images/1/14/T--Tongji_China--4.1.4.jpg" alt="4.1.4" style="max-width:100%" />

The bacteria-time curve and odour-time curve are calculated using the average value of each cell. The bacteria population grows slowly at the beginning and reach a plateau after a rapid growth phase. For odour concentration, there are slightly increase at the beginning. However, it soon gets in to a  rapid degradation phase and keeps in low concentration in the end. The trend of our simulation curve **(Figure 3.2.2,a,b)** is consistent with a published experiment data<sup>[6]</sup> **(Figure 3.2.2,c,d)** , implying that our model has the ability to uncover rules in real environment to some degree.

<img src="https://2021.igem.org/wiki/images/6/66/T--Tongji_China--4.1.5.jpg" style="max-width:100%" />

<center>Figure 3.2.2 Simulation curve of bacteria and odour concentration. The experiment data comes from Zheng *et. al.*, 2011, Proceedings of the Chinese Society for Environmental Sciences conference. </center>



## 4. Problem solving

### 4.1 Sensitivity analysis

###### **Goal 1: To find the factors which have the largest effect on odour degradation and offer a guidance for engineered bacteria design.**

***N0*** is the initiate number of engineered bacteria in each cell and ***n*** is the initiate number of engineered bacteria clusters in the map, which represent the initial concentration of the bacterium agent.  Increasing N0 does not have a significant effect on odour degradation rate while increasing n has a significant effect. This indicate that average distribution and concentration of the bacterium agent matters.

<img src="https://2021.igem.org/wiki/images/8/82/T--Tongji_China--4.1.6.jpg" alt="4.1.6" style="max-width:100%" />

<center>Figure 4.1.1 sensitivity analysis of N0</center>

<img src="https://2021.igem.org/wiki/images/3/3e/T--Tongji_China--4.1.7.jpg" style="max-width:100%" />

<center>Figure 4.1.2  sensitivity analysis of n</center>

***f*** is the odour degradation coefficient, which represents the odour degradation ability of our bio-engineered bacteria. We hope to figure out to what extent the increase in degradation ability can affect odour treatment.  When *f* increase from 10 to 50, the odour degradation rate improves significantly. However, the odour degradation rate does not show significant increase when f>50 (Figure 4.1.3), which may be limited by the odour production rate and odour diffusion rate (Figure 4.1.4).

These result reminds us that improving the degradation ability of bio-engineered bacteria can be a cost-effective choice at the beginning but it is not always useful especially when it's high enough.

<img src="https://2021.igem.org/wiki/images/2/2f/T--Tongji_China--4.1.8.jpg" alt="4.1.8" style="max-width:100%" />

<center>Figure 4.1.3 sensitivity analysis of f </center>

<img src="https://2021.igem.org/wiki/images/c/c0/T--Tongji_China--4.1.9.gif" alt="4.1.9" style="max-width:100%" />

<center>Figure 4.1.4 sensitivity of f is limited by odour diffusion rate </center>



### 4.2 Different application ways of engineered bacteria

###### **Goal 2: To compare different ways of application and offer a guidance for hardware design.**

The most common application way of bio-engineered bacteria is spraying, which is cheap and convenient. At the same time, the immobilized microorganism technology(IMT) is attracting more and more attention as a novel microbial remediation technique. Coated bio-engineered bacteria on activated carbon or bio-carbon can increase the viability of bacteria<sup>[7]</sup> and local concentration of odour. However, it can also cause lower distribution uniformity and higher cost. Spraying and immobilized bacteria are two of  the alternative ways of application in our project. We hope to compare these two ways in application by modelling.

| Feature                 | Spraying | Immobilized bacteria |
| ----------------------- | -------- | -------------------- |
| Gas absorption          | no       | yes                  |
| Bacteria spread         | yes      | no                   |
| Viability of bacteria   | low      | high                 |
| Distribution uniformity | high     | low                  |
| Cost                    | low      | high                 |

<center>Table 4.2.1 Feature of spraying and immobilized bacteria </center>

To achieve this goal, we adjusted the rules of the basic model in the following aspect:

* In case of immobilized bacteria, odour can spread from low density to high density spots due to the gas absorption ability of activated carbon or  bio-carbon.

* In case of immobilized bacteria, the value of ***r***(Intrinsic growth coefficient) and ***K***(environment capacity) is higher because activated carbon or  bio-carbon can provide a substract attached for growth and function as a shelter .

* ***N*** and ***n***, which are related to distribution uniformity, are different in these two cases.

  <img src="https://2021.igem.org/wiki/images/4/46/T--Tongji_China--4.1.13.jpg" alt="4.1.13" style="max-width:100%" />

  <center>Figure 4.3.1 Immobilized bacteria and spraying</center>

  | Parameter                   | Value for immobilized bacteria | Value for spraying bacteria |
  | --------------------------- | ------------------------------ | --------------------------- |
  | K                           | 0.5                            | 0.05                        |
  | r                           | 0.1                            | 0.01                        |
  | bp                          | 0                              | 0.05                        |
  | bps                         | 0.5                            | 0.5                         |
  | sbp(absorption coefficient) | 0.5                            | 0                           |
  | d                           | 0.5                            | 0.5                         |
  | K<sub>m,de</sub>                     | 500                            | 500                         |
  | f                           | 600                            | 600                         |
  | p                           | 10                             | 10                          |
  | th                          | 7                              | 7                           |
  | N<sub>0</sub>                        | 2                              | 0.5                         |
  | n                           | 50                             | 200                         |
  | t                           | 60                             | 60                          |
  | s                           | 100*100                        | 100*100                     |

  <center>Table 4.2.2  Values of parameters</center>

Our simulation result are showed intuitively as below **(Figure 4.3.2,Figure4.3.3)**.

  ![4.1.11](https://2021.igem.org/wiki/images/b/b7/T--Tongji_China--model-new11.gif)

  ![4.1.12](https://2021.igem.org/wiki/images/0/09/T--Tongji_China--model-new12.gif)



  <center>Figure 4.3.2 , Figure 4.3.3 Spraying bacteria(up) and immobilized bacteria(down). Bacteria spread(left) and odour degradation(right)</center>

Under the condition above, spraying bacteria shows better odour degradation efficiency, with lower final concentration. Upregulating the initiate number of bacteria-immobilized biochar can not reverse its disadvantage. Indicating from our result, spraying may be a cheaper and more efficient way of application.

  <img src="https://2021.igem.org/wiki/images/b/be/T--Tongji_China--4.1.14.jpg" alt="4.1.14" style="max-width:100%" />

  <center>Figure 4.2.4 The odour degradation curve of Immobilized bacteria and spraying bacteria</center>



### 4.3  Optimizing the spraying strategy

###### Goal 3: To find the optimized spraying strategy in different cases

In our basic model, we assume that the odour is produced at a steady rate. However, in practical application, the odour is produced at alterable rate, which is influenced by temperature, the fermentation stage and so on. To offer a more precise guidance for application, we acquired the odour production rate - time curve from literature<sup>[8]</sup>**(Figure 4.3.1)** and tried to figure out whether we can find a optimized initiate concentration considering both the efficiency and cost.

<img src="https://2021.igem.org/wiki/images/1/1a/T--Tongji_China--4.1.15.jpg" alt="4.1.15" style="max-width:100%" />

<center>Figure 4.3.1 Odour production rate changes over time.  Experiment data from Yang *et. al.*, 2019</center>

However, our simulation result shows that in the range of variation causing by different stage of fermentation, the concentration of input bacteria will not affect the apparent odour degradation efficiency significantly.

<img src="https://2021.igem.org/wiki/images/2/26/T--Tongji_China--4.1.16.jpg" alt="4.1.16" style="max-width:100%" />

<center>Figure 4.3.2 Different concentration of input bacteria in different stage of fermentation</center>

Next, we wonder whether adding bacteria for several times can improve the odour degradation efficiency. When the viability and spread rate of bacterial is high, adding bacteria for several times do not have a contribution to odour degradation. However, when the the viability and spread rate of bacterial is lower, adding bacteria for several times or adding larger amount of bacteria does help.

<img src="https://2021.igem.org/wiki/images/2/25/T--Tongji_China--4.1.17.jpg" alt="4.1.17" style="max-width:100%" />

<center>Figure 4.3.3  Adding bacteria for several times</center>



### 4.4 Optimizing the strength and threshold of the kill switch

######  Goal 4: To find the optimized strength and threshold of kill switch, considering both bio-safety and working efficiency.

To ensure bio-safety, we design a three-gear-adjustable kill switch, which is regulated by odour concentration in the environment.

There are two important parameters that determines the performance of our kill-switch in this CA model: the suicide coefficient ***(d)*** which describes the possibility that a bacterium will die in 1 min when the kill switch is on; the threshold ***(th)*** which tells us when the kill switch will be turned on. When ***d*** is too high or ***th*** is too low, the bacteria viability and odour degradation rate may be affected while the opposite may have bad impact on biosafety. For this purpose, we hope to know to what extent  ***d*** and ***th*** can affect odour degradation rate.

Our result shows that changing ***d*** and ***th*** has great influenced the end concentration of bacteria. However, the odour degradation rate is not affected (ignoring the abnormal value). This reminds us that when we design the killing strength and turn-on threshold of kill switch, we should put biosafety into the first consideration. High suicide coefficient and low threshold in a reasonable range is preferable.

<img src="https://2021.igem.org/wiki/images/e/ec/T--Tongji_China--4.1.18.jpg" alt="4.1.18" style="max-width:100%" />



<center>Figure 4.4  Optimizing the strength and threshold of kill switch</center>



## 5. Conclusion and Discussion

### 5.1 Conclusion

By developing, validating and analysing the CA model, we answered several questions which are important to our project design, biosafety consideration and implementation.

**Goal 1: To find the factors which have the largest effect on odour degradation rate and offer a guidance for engineered bacteria design.**

Average distribution and concentration of the bacterium agent matters. Improving the degradation ability of bio-engineered bacteria can be a cost-effective choice at the beginning but it is not always useful especially when it's high enough.

**Goal 2: To compare different ways of application and offer a guidance for hardware design.**

Spraying may be a cheaper and more efficient way of application.

**Goal 3: To find the optimized spraying strategy in different cases.**

When the the viability and spread rate of bacterial is low, adding bacteria for several times or adding larger amount of bacteria does help.

**Goal 4: To find the optimized strength and threshold of kill switch, considering both bio-safety and degradation efficiency.**

Put biosafety into the first consideration. High suicide coefficient and low threshold in a reasonable range is preferable.

### 5.2 Discussion

Although a series of concerned questions are answered by our CA model, there are still some inadequacies. Due to the lack of literature and experiment data, it's hard to determine the values of parameters. As a result, it's hard to give compelling quantitative result. Besides, some other factors which may have a influence on the result are not described in our model, for example, the inhomogeneity of odour production and competitive local bacteria. We hope to improve our model in the future continuously and try to answer more complex questions.

## reference

[1] Cellular Automata [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/index.html)

[2] Zhu, M., Mori, M., Hwa, T., & Dai, X. (2019). Disruption of transcription-translation coordination in Escherichia coli leads to premature transcriptional termination. *Nature microbiology*, *4*(12), 2347–2356.

[3] Zhu, M., Mori, M., Hwa, T., & Dai, X. (2019). Disruption of transcription-translation coordination in Escherichia coli leads to premature transcriptional termination. *Nature microbiology*, *4*(12), 2347–2356.

[4] 崔玉雪.(2011).用于填埋场臭气控制的微生物除臭剂开发与除臭机理研究(硕士学位论文,华东师范大学).

[5] *Emission standards for odor pollutants* GB/T14544-93

[6] 郑骥,房蕾,李来庆,王敬贤,张继琳 & 李琳.(2011).生物菌剂处理生活垃圾填埋场渗滤液实验研究.中国环境科学学会.(eds.)*2011中国环境科学学会学术年会论文集（第一卷）*(pp.766-770).中国环境科学出版社.

[7] 钱林波,元妙新 & 陈宝梁.(2012).固定化微生物技术修复PAHs污染土壤的研究进展. *环境科学*(05),1767-1776. doi:10.13227/j.hjkx.2012.05.055.

[8] 杨惠媛.(2019).*生活垃圾初期降解过程污染物释放特征及环境影响分析*(硕士学位论文,昆明理工大学).





      `)
      this.ele = poc as HTMLElement
    }
  }
}
</script>
