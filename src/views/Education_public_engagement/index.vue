<template lang="pug">
v-row
  v-col.col-3
    Anchor(v-if="ele" :ele="ele")
  v-col.col-9
    div(ref="edu").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Education extends Vue {
  static id = 'Education'
  ele: HTMLElement | null = null

  mounted (): void {
    const edu = this.$refs.edu as Element
    console.log(edu)
    if (edu) {
      edu.innerHTML = marked(`

# Education & Public Engagement

 Education and Public Engagement is a vital part in iGEM. By educating the public about the concept of synthetic biology, we could collect public feedback towards science and more groups would be able to participate in synthetic biology as well, which may get rid of people's **prejudice towards science**. At the same time, we think that a new perspective or a new position, such as **interdisciplinary** and communications between **industry and academia**, can promote the development of synthetic biology better. As a result, spreading the concept of synthetic biology to all ages as much as possible is of great importance. In the work of Tongji_China, our education and popularization cover **primary, secondary, and university students as well as other social groups.**

## Pupils&Middle School Students

For lower age groups, such as pupils and middle school students, building and **keeping their interests** towards biology ought to be put on the top priority. After that, they may receive and explore knowledge better.

### Online Games: 'Synthesis of Biology'

At the beginning of 2021, a small game called 'Synthesis of a Watermelon' became a meme nationwide. Its similarity towards ancient games such as '2048' and Tetris was not the only reason that accounted for the popularity of  ‘Watermelon Synthesis’ . The circle fruits were set to be scrollable, which resulted in many uncontrollable and interesting consequences. Under such circumstances, many people were strongly obsessed with this game and some stayed up late till synthesizing the watermelon successfully.

<img src="https://2021.igem.org/wiki/images/e/e9/T--Tongji_China--%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211015183444.jpg" alt="微信图片_20211015183444" style="max-width:40%" />

<img src="https://2021.igem.org/wiki/images/2/28/T--Tongji_China--%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211015183441.jpg" alt="微信图片_20211015183441" style="max-width:40%" />

Based on the popularity of  'Synthesis of a Watermelon', members of Tongji_China thought it could be a good opportunity to communicate general knowledge of biology. The colorful pictures and the rolling contacts in the game can attract pupils' attention, which may also lead their attention to relevant knowledge. We painted relevant icons, combined with open-source codes and introduced the following five aspects to the public:

**'Synthesis of Insulin'**: Based on the central principle of gene expression, the game gives a general introduction of how the insulin is synthesized.

**'Synthesis of Man-made Meat'**: Take an protein product as an example. We would like to show the basic process of product design.

**'Synthesis of Biosphere'**: According to the volume, the life system can be shown from micro to macro when you play this module.

**'Synthesis of the Lovely'**: Seven Interesting animals are shown in this module.

**'Synthesis of Dodo'**:  Due to the change of living conditions, several species are in survival crisis. In this module, some of them are shown according to the level of endangerment they are faced.

<img src="https://2021.igem.org/wiki/images/4/43/T--Tongji_China--%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211015183431-16344897095322.jpg" alt="微信图片_20211015183431" style="max-width:100%" />

###  Science Popularization Activities at Shanghai Minhang District Youth Science and Technology Centre

In a bid to promote biology to lower age groups, this year, members from Tongji_China came to the Youth Centre located at Minhang District, Shanghai. Over twenty students from biology community joined in this science popularization activity, which was called **'Into the micro-world'**.

Just as its name implies, we popularized the concept of biology on a micro-scale during the activities. Bacteria and fungus were introduced through slides and the operation of microscopes. At the same time, the concept of genes, law of segregation and law of independent assortment were primarily interpreted through games. With such efforts, the concept of synthetic biology was tactfully integrated as well, which showed the probability of how techniques like gene editing could be devoted to the health and progress of human society.

<img src="https://2021.igem.org/wiki/images/c/c3/T--Tongji_China--%E6%98%BE%E5%BE%AE%E8%A7%82%E5%AF%9F%E6%8C%87%E5%AF%BC.jpg" alt="显微观察指导" style="max-width:100%" />

<img src="https://2021.igem.org/wiki/images/6/6a/T--Tongji_China--%E5%88%86%E5%AD%90%E9%83%A8%E5%88%86%E4%BA%92%E5%8A%A8%EF%BC%88wyj%EF%BC%89.jpg" alt="分子部分互动（wyj）" style="max-width:100%" />

  It was also worth mentioning that our science communication activity also participated in the **ICIII (Into China, Into iGEM)**, a large inter-university and inter-city event organised by NAU_China and CPU_China. More information can be found on the *collaboration* page.

## Senior high school students: The Seeding Program

Senior high school students are those who master some theoretical knowledge in basic principles and get some practice as well. We hope to introduce **the concept of synthetic biology and the basic experimental methods** to them, which can provide a new perspective in the development of some principles and majors.

As a traditional enrollment activity in Tongji University, 'The Seeding Program' aims at excellent Grade 11 students nationwide to provide them with the opportunity and platform to know about their future major and college life. This year, members from Tongji_China again participated in this program. By giving online lectures on college lives, synthetic biology and the current iGEM project, we not only showed how to make an idea from brainstorming to the ground, but also shared the college lives as senior schoolmates. The popularization of iGEM and synthetic biology has also been added into the literature, making the program a unique way to communicate science.

<img src="https://2021.igem.org/wiki/images/2/24/T--Tongji_China--%E8%8B%97%E5%9C%83%E8%AE%A1%E5%88%922-16344896449591.png" alt="苗圃计划2" style="max-width:100%" />

## College Students: Talk Between Synthetic Biology and Philosophy

For college students, we would like to convey **the thought of interdisciplinary** in iGEM to those energetic and promising. This is helpful to further expand the audience of synthetic biology. On the other hand, interdisciplinary offers great opportunities for the emergence of inspiration and innovation. Particularly, how to prove the science valuable and how to understand **the feedback of science to society** are emphasized during the talk between philosophy and natural science.

For the following questions and other ones related to synthetic biology, we were honored to invite Professor **Lu Xinhua** from College of Humanities, Tongji University to make a speech about '**Philosophy against Synthetic Biology: Human Beings and their Garbage in the Biosphere**'.

<img src="https://2021.igem.org/wiki/images/a/a9/T--Tongji_China--%E5%93%B2%E5%AD%A6%E8%AE%B2%E5%BA%A7.jpg" alt="哲学讲座" style="max-width:100%" />

**How do we look upon ourselves in nature when we master the ability in gene editing therapy?**

**May human become a new 'God' or coexist with nature?**

**How do we look upon the relationship between humans and genetically modified creatures?**

As a newborn discipline in the area of natural science, synthetic biology, itself involves techniques that can achieve our goals after we modify genes. On the other hand, we should think over the philosophical and ethical it may incur.  Professor Lu launched a series of interesting and thoughtful prospectives, which aroused heated and further discussions between interdisciplinary students and teachers. Particularly, Professor **Wang Chunguang** and **Guo Guangpu** from College of Life Science and Technology talked further about whether gene editing therapy had made humans 'cross the border', whether the philosophy should tell the science to quit, and the concept of transhumanism.

<img src="https://2021.igem.org/wiki/images/4/44/T--Tongji_China--%E5%93%B2%E5%AD%A6%E8%AE%B2%E5%BA%A72.jpg" alt="哲学讲座2" style="max-width:100%" />

## Science and the Public

###     Social Media: A New Way to Science Communication

With the development of the new media, information sharing has become more convenient and efficient. In China, the WeChat Public Platform is one of the most influential ‘we media’ platforms, the users of which involve all age groups and industries, which made science communication and education popularization **easier and low-barrier**. We took advantage of the capability of the internet to expand our audience through Wechat. We have posted a number of tweets on the platform by our team account, including **synthetic biology introduction, project introduction and popularized scientific knowledge**, etc. Through these tweets, numerous people can know more about synthetic biology. At the same time, after communications with enterprises, the public and the cooperative partners in relevant areas, the tweets that we have posted can help to broaden our minds and optimize our design.

<img src="https://2021.igem.org/wiki/images/0/08/T--Tongji_China--638d2eb5-65d4-424f-8072-a70a5de9fa82.png" alt="638d2eb5-65d4-424f-8072-a70a5de9fa82" style="max-width:100%" />

<img src="https://2021.igem.org/wiki/images/e/e7/T--Tongji_China--896b7015-308b-429c-b921-af443f62a2d4-16344897184553.png" alt="896b7015-308b-429c-b921-af443f62a2d4" style="max-width:100%" />

## Questionnaires: Further expand our target group

Social media indeed is one of the significant ways to communicate and share information. However, they are groups that the WeChat Public Platform cannot reach, such as the groups who do not use smart devices often due to their job. The people who engage in the waste disposal industry are just people of that group. If we want to confirm how practical our project is, interviewing people of that kind is quite important.

<img src="https://2021.igem.org/wiki/images/c/c4/T--Tongji_China--image_%281%29.png" alt="image (1)" style="max-width:40%" />

<img src="https://2021.igem.org/wiki/images/2/2d/T--Tongji_China--image.png" alt="image" style="max-width:40%" />

Based on the background of our investigation, members of Tongji_China invited several individual laborers and environmental workers to complete questionnaires, which made our project meaningful and more people may be aware of the concept of synthetic biology.

For **biological products** designed by synthetic biology and **the concept of synthetic biology** we collected feedback from the public, especially those who work in waste disposal industry. The results are as follows:

![img](https://2021.igem.org/wiki/images/0/02/T--Tongji_China---16345112938501.png)

| Knowledge of basic concepts of synthetic biology | Completely Unknown | Heard of Concept | I have read several related news report and scientific articles | I am a research/production staff in related fields |
| :----------------------------------------------: | :----------------: | :--------------: | :----------------------------------------------------------: | :------------------------------------------------: |
|               Genetic Engineering                |       15.96%       |      32.62%      |                            36.88%                            |                       14.54%                       |
|             Bio-engineered Bacteria              |       36.52%       |      30.14%      |                            18.79%                            |                       14.54%                       |
|                    Biosafety                     |       26.24%       |      28.37%      |                            32.98%                            |                       12.41%                       |
|                Synthetic Biology                 |       31.91%       |      33.33%      |                            20.57%                            |                       14.18%                       |

More result of questionnaires can be found in **Human Practice**<span style="color: red">加超链接</span>.


      `)
      this.ele = edu as HTMLElement
    }
  }
}
</script>
