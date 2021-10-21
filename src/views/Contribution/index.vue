<template lang="pug">
v-row
  v-col.col-4
    Anchor(v-if="ele" :ele="ele")
  v-col.col-8
    div(ref="contribution").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Contribution extends Vue {
  static id = 'Contribution'
  ele: HTMLElement | null = null

  mounted (): void {
    const contribution = this.$refs.contribution as Element
    if (contribution) {
      contribution.innerHTML = marked(`

# Contribution

## 1. New data for existing parts

In order to improve the hydrogen sulfide oxidation efficiency by making subtle control of enzymes concentration, we chose promoters with different strength in Anderson library (BBa_J23100: http://parts.igem.org/Part:BBa_J23100). We validated their relative strength in E.coli(DH5α) for model training**(Figure 1)**.  Our result shows a similar trend with previous characterization. However, we find that J23104 is a stronger promoter than J23100 and it shows bad repeatability in three replications while other promoters shows good repeatability. Characterization of J23104 in K. rhaeticus by KEYSTONE_A 2020 has a similar phenomenon.

<img src="https://2021.igem.org/wiki/images/2/28/T--Tongji_China--2.3.1.jpg" alt="2.3.1" style="zoom:33%;" />

[^Figure 1 Characterization of promoters from the Anderson library]:

We also characterized two promoter P~lacI~ and P~cst~ in our kill switch(link: design kill switch) and compared their strength with promoters in the Anderson library.  P~cst~ has a considerable strength with J23110 while PlacI is a weak promoter**(Figure 2)**.

<img src="https://2021.igem.org/wiki/images/0/05/T--Tongji_China--2.3.2.jpg" alt="2.3.2" style="zoom:25%;" />



[^Figure 1 Characterization of Pcst and PlacI]:



## 2. A guide for questionnaire design

### *3 Steps on Making your Questionnaire more Effective and Scientific*



#### Preface

Have you considered whether the questionnaire will be able to reach your demands?

Have you molded your subjects subliminally during the design?

Neither highly regard nor underestimate the ability of your questionnaire. All of us should be down-to-earth, to receive a correct evaluation.

This year, Tongji_China wanted to collect people's opinions on the odor of wet waste in their lives and their knowledge of synthetic biology by handing out questionnaires. To do this, we visited Professor Ming Sun from the School of Political Science & International Relations, Tongji University. He introduced a few principles that need to be followed in the questionnaire design process to us. We also asked a student studying social work at the School of Philosophy and Law and Politics at Shanghai Normal University, who gave us more detailed comments on the wording of our questionnaire.

With this in mind, Tongji_China would like to organize and publicize these comments and principles to show our support to other teams in questionnaire design.



#### Step 1 **Before you are determined to design the questionnaire, ask yourself,**

##### **(1)What's the purpose of your questionnaire?**

It is important to consider why to design and distribute your questionnaires. At iGEM, it is also imperative to know how our project may affect society and what society can teach and improve our project. Under such circumstances, a questionnaire may be useful to evaluate it, if the questionnaire itself can work to the best of its ability.

##### **(2) Have you got enough references, on your topic or design?**

The reference can be acquired from literature, interviews, field researches, and so on.

According to our interview with Prof. Sun, the basic information we can acquire from questionnaires can be divided into three aspects: characteristics, attitudes and behaviors. The following is a table with examples.

| Characteristics                   | Attitudes                                     | Behaviors                                    |
| --------------------------------- | --------------------------------------------- | -------------------------------------------- |
| Gender, age,level of education... | sense of well-being, sense of satisfaction... | Frequency of fitness, travel destinations... |

There are also a series of established questionnaire materials can be used as references, such as CGSS (Chinese General Social Survey), ISSP (International Social Survey Programme) and EASS (East Asia General Social Survey) and "Wanvol Methodology" (Chongqing University Press)



#### Step 2 **When designning a questionnaire, ask yourself,**

##### **(1) Have you ever considered subjects' literacy, level of education and comprehension skills？**

The characterization of subjects determines our questionnaires' verbal descriptions. We should choose plain and easy-understanding words and terms as much as possible. For example,

avoidance of professional terms and detailed descriptions can catch subjects' attention and convey our intention more effectively. In addition, compared with online questionnaires, an offline questionnaire requires more simplicity.

Even if the subjects are experts and academics, the concise wording allows them to quickly get to the point and understand our intentions.

Images and symbols(such as arrows, bold, underlines and changing colors) can be useful in attract attention and improve the comprehension. The followings are what Tongji_China this year's applications.

<img src="https://2021.igem.org/wiki/images/4/4f/T--Tongji_China--2.3.3.png" style="zoom: 70%;" />

<img src="https://2021.igem.org/wiki/images/c/cd/T--Tongji_China--2.3.4.png" style="zoom: 70%;" />

##### **(2) Are your verbal descriptions appropriate?**

The appropriateness in design not only emphasizes simplicity and ease for subjects to understand, but we should also pay attention to that a single question should focus on a single topic and there should be no overlap between each option, as this will affect the reliability of the results. **Here is a wrong example and the revised of it.**

**Previous:**

We would like to know the subject’s participation in the waste disposal and the influence of garbage sorting policies.

| Which of the following best describes your identity?         |
| ------------------------------------------------------------ |
| (1)Shanghai resident                                         |
| (2)Non-shanghai resident, but are permanent residents of Shanghai who come to Shanghai for work or study |
| (3)Workers in waste disposal industry                        |
| (4) Others                                                   |

However, setting choice(3) in this question is inappropriate since there may be overlaps between choice(1)(2) and (3), causing meaningless results.

**After:**

We obtain sources of subjects through back-office geolocation analysis and replace the previous question with a single question to know their degree of participation towards waste disposal.

| Are you engaged in waste disposal industry related work?     |
| ------------------------------------------------------------ |
| (1) I work in a waste disposal industry.                     |
| (2) I am not a worker related, but have participated in this kind of volunteer services before. |
| (3) No relevant experiences.                                 |

##### **(3) Will you use any analytical or statistic skills?**

Besides launching questionnaries, another work to do is to consider what to do with the raw data. For example, a Likert scale can be used to analysed the mental state and attitude of subjects. However, the Likert scale won't work in reliability analysis and validity analysis unless you apply three factors or sub-questions below one topic.



#### Step 3 Befor**e handing out your questionnaires, ask yourself,**

##### **(1) Have you ever considered the worst condition of subjcts?**

When we hand out the questionnaires, there may be a series of bad conditions beyond our imaginations, including the public's willingness, patience and whether they will be influenced not to tell the truth. For us, the only thing we can do is to make sure that the designed questionnaires are unbiased and effective, as much as possible. The following examples show that we can implement questions with different levels of expression to examine whether people fill in the questions seriously.

eg2:

| Please briefly rate the odor of wet waste in your daily life. |      |      |      |      |      |      |      |      |      |                |
| ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------------- |
| Almost no odor                                               | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | Severe odorous |

eg3:

| Which of the following three statements best describes your perception of the odor of wet waste? |
| ------------------------------------------------------------ |
| (1) Absolutely none.                                         |
| (2) It emits odor to some extent, but it's tolerable         |
| (3) The odor has effected my working efficieny or my mental state during work |
| (4) The odor has affected my health (shortness of breath, eye irritation, hoarseness, fever and muscle aches) |

##### **(2) Have you ever revised your questionnaires enough?**

According to Prof. Sun, pre-launch is the most important step before we hand out questionnaires. With a small volume of subjects, we can review our questionnaires again with real results.



      `)
      this.ele = contribution as HTMLElement
    }
  }
}
</script>
