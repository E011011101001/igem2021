<template lang="pug">
v-row
  v-col.col-3
    Anchor(v-if="ele" :ele="ele")
  v-col.col-9
    div(ref="hp").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Integrated extends Vue {
  static id = 'Integrated'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
    const hp = this.$refs.hp as Element
    console.log(hp)
    if (hp) {
      hp.innerHTML = marked(`
# Human Practice

<img src="https://2021.igem.org/wiki/images/b/b6/T--Tongji_China--Where_do_we_get_the_inspiration_.png" alt="Where do we get the inspiration_" style="max-width:100%" />

The inspiration for our project comes from a detail in our life. In our school canteen, students need to **pour the left** into food waste bins. However, the odor coming from food waste bins makes students unwilling to come near them, leading to spilling the left. It not only increases the **safety risks** but also **adds burden** to people who work in school canteens. On the other hand, those people have to stay near food waste bins for a long time, the odor from food waste may **do harm to their health**. Therefore, we realize that **the odor of food waste** is a problem to be solved after the implementation of waste sorting regulations.



<img src="https://2021.igem.org/wiki/images/f/fe/T--Tongji_China--What%E2%80%99s_our_values_.png" alt="What’s our values_" style="max-width:100%" />



## Our Values:

Tongji_China has always been with a **people-oriented attitude**. Besides, the object we are dealing with, food waste, has a close relationship with our lives. Therefore, we take the opinions from **residents and people who work in related fields in different stages of our project** into our consideration. On the other hand, Shanghai, as the financial center of China, is facing the problem of rubbish siege, so the problem of waste sorting cannot be delayed. Given the environmental problems of food waste will bring, we pay much attention to the **environmental influence** our project will result in. Briefly, based on **people-oriented and environment-friendly** attitude, we have carried out a series of human practice that will influence our design meanwhile.

<img src="https://2021.igem.org/wiki/images/f/f6/T--Tongji_China--20211022-115asdf.jpeg" alt="6.1-1 overview" style="max-width:100%" />

## Understand the problem

Before our design, we have conducted a thorough series of human practices to learn about our project completely. Therefore, we designed a questionnaire and made field trips to the different stages of food waste treatment.

<img src="https://2021.igem.org/wiki/images/b/bb/T--Tongji_China--6.1-2%E6%B9%BF%E5%9E%83%E5%9C%BE%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F.png" alt="6.1-2湿垃圾处理方式" style="max-width:100%" />

### A questionnaire

In order to learn about the harm of food waste odor on different people, we've designed different questionnaires for different people. However, as our team members all major in biotechnology, it's hard for us to design a scientific questionnaire. Therefore, we turned to Professor Sun Ming for help.

<img src="https://2021.igem.org/wiki/images/c/cc/T--Tongji_China--6.1-3.jpeg" alt="6.1-3" style="max-width:100%" />

During our talk with Professor Sun Ming, we learned some basic rules to obey in designing questionnaire [(To learn more)](/Team:Tongji_China/Contribution). Therefore we made some changes to the questionnaire according to our research objectives and targets. For example, as our research targets were mostly residents and people who work in related fields, we set some pictures in it to make targets understand more easily. Besides, we tried our best to describe professional vocabulary in an easy-to-understand language. Most importantly, we always put ourselves in others' shoes and avoid any vague expression.

<embed src="https://2021.igem.org/wiki/images/e/e2/T--Tongji_China--Human_Practices-Public_Oriented_Social_Survey-10.20.pdf" width="100%" height="875" 
 type="application/pdf">

### The whole process of food waste treatment

In order to learn about the **whole process** of food waste treatment, we visited different places from the **emergence of food waste, transfer and treatment**. In this way we wanted to find out **what influence the odor of food waste would have on people in different stages** as well as **present odor treatment methods**.

<img src="https://2021.igem.org/wiki/images/c/c4/T--Tongji_China--6.1-25.png" alt="6.1-25" style="max-width:100%" />

#### Front-end

We realize that there are many different places where the odor of food waste emerges. Therefore, we did some field trips to a **neighborhood**, a **school** and a **food market**, exploring people's ideas on food waste in different places.

<img src="https://2021.igem.org/wiki/images/d/de/T--Tongji_China--6.1-4-16347000279811.png" style="max-width:49%" />

<img src="https://2021.igem.org/wiki/images/7/72/T--Tongji_China--Neighborhood_.png" style="max-width:49%" />

<img src="https://2021.igem.org/wiki/images/9/9d/T--Tongji_China--6.1-26-16347000468272.png" style="max-width:49%" />

<img src="https://2021.igem.org/wiki/images/4/42/T--Tongji_China--HP_school.png" style="max-width:49%" />

<img src="https://2021.igem.org/wiki/images/1/1d/T--Tongji_China--6.1-5-16347000558704.png" style="max-width:49%" />

<img src="https://2021.igem.org/wiki/images/0/01/T--Tongji_China--Food_market_.png" style="max-width:49%" />

#### Middle-end:

<img src="https://2021.igem.org/wiki/images/6/66/T--Tongji_China--6.1-7.png" alt="6.1-7" style="max-width:100%" />

We went to **Tian Wei Environmental Company** in Min Hang District that is responsible for the concentrated treatment of food waste in Hong Mei Street. The staff here told us that in the middle end of food waste treatment like waste transfer stations, there is some odor because of the **huge amount of food waste**. Also in our field trips, we found that despite the **plant extraction**, the **unpleasant smell of food waste can't be covered thoroughly**, making a huge influence on the workers. Besides, food waste is fermented to produce fertilizer **in high temperature**, where the organic components in plant extraction may react the odor gases and **form more odorous substances**.



#### Tail-end:

Because of the COVID-2019, we didn't have the chance to visit a waste treatment plant. Luckily, our friend team, CPU_CHINA happened to visit one in Nanjing. Therefore, we asked them to collect some information of odor treatment methods in factory.

<img src="https://2021.igem.org/wiki/images/5/5e/T--Tongji_China--6.1-8.JPG" alt="6.1-8" style="max-width:100%" />

According to their research, we found that as the amount of odor in factory is very large, there has been a complete collect of odor treatment methods. Here are some typical methods.

| Type       | Method                                                    |
| ---------- | --------------------------------------------------------- |
| Physical   | Absorb by activated carbon, etc.                          |
|            | Increase ventilation                                      |
| Chemical   | Burn                                                      |
|            | React with chemical substances                            |
| Biological | Inhibit the generation of odor gases                      |
|            | React with related bacteria catalyzed by specific enzymes |



### What have we learned?

In our questionnaire, we define that most of people consider the odor of food waste to be a question ,which makes our project meaningful. Besides, we collect people's idea on eliminating odor by synthesis biology and find that people are worrying about the safety. Therefore we design a kill switch to reduce their concern. (To learn more) Also, we found that people with different education levels have different understanding of synthesis biology. Therefore we designed different activities for different ages of people.(To learn more)

In the field trips to different stages of food waste treatment, we realized that the odor of food waste **in the front and middle end tended to be neglected** because of the **small volume**. Meanwhile, it can **influence related practitioners to some extent**. Therefore, we determined the **application scenarios** to be **front and middle end** which is of small volume.

Present odor treatment methods

| Stage      | Odor treatment methods                                    | Problems                                               |
| ---------- | --------------------------------------------------------- | ------------------------------------------------------ |
| Front-end  | Clean and transport in time                               | High cost                                              |
|            | Wear masks                                                | Inconvenience, especially in summer                    |
| Middle-end | In-situ processing                                        | Difficult to cover costs                               |
|            | Plant extraction                                          | Unknown in components and unsteady in high temperature |
| Tail-end   | Absorb by activated carbon, etc                           | Limited to large volume                                |
|            | Increase ventilation                                      |                                                        |
|            | Burn                                                      |                                                        |
|            | React with chemical substances                            |                                                        |
|            | Inhibit the generation of odor gases by bacteria          |                                                        |
|            | React with related bacteria catalyzed by specific enzymes | Low efficiency, difficult to cultivate and command     |



## Define the solution

<img src="https://2021.igem.org/wiki/images/c/cd/T--Tongji_China--6.1-12.png" style="max-width:100%" />

After having a thorough understanding of our project, we determined the application scenarios to be front and middle end. Then we started to brainstorm on how to solve the problem. Then we turned to **synthesis biology**, however, we realized that we needed to reflect upon our project from the view of **philosophy and morality**. Therefore, we invited **Professor Xinhua Lu** from College of Humanities in Tongji University to give us a lecture themed on **'Philosophy vs Synthesis biology, human beings and rubbish in biosphere'**. The lecture has attracted over 50 participants online and offline.

<img src="https://2021.igem.org/wiki/images/1/1d/T--Tongji_China--6.1-9-16346887102461.jpeg" alt="6.1-9" style="max-width:100%" />

<img src="https://2021.igem.org/wiki/images/5/51/T--Tongji_China--6.1-10.png" alt="6.1-10" style="max-width:100%" />

<img src="https://2021.igem.org/wiki/images/4/47/T--Tongji_China--6.1-11.jpeg" alt="6.1-11" style="max-width:100%" />

### What have we learned?

During the heated talk ,we've learned that we need to find out the **influence of food waste on human beings** from the perspective of symbiosis between waste and humans. Also,we need to **care for and develop life through arts and literature**. Therefore, we take compost of food waste into our consideration when coming to selecting final products.



## Ideate & design:

After learning about people's opinions on eliminating odor of food waste by synthesis biology, we began to ideate and design our project.

<img src="https://2021.igem.org/wiki/images/d/dd/T--Tongji_China--6.1-13.png" alt="6.1-13" style="max-width:100%" />



### Selection of odor gases and final products

As we all know,there are many complex components in odor gases therefore we need to select the gases we want to treat and the final products.

To do that, we've read huge amounts of literature and visited one of the authors, **Professor Lv Fan** from School of Environmental Science and Engineering in Tongji University. She told us that the gases in odor can be divided into **organic and inorganic ones**, like H<sub>2</sub>S, NH<sub>3</sub> and alkene. She advised us to pay attention to **H<sub>2</sub>S and NH<sub>3</sub>** whose sniffing thresholds are low.

<img src="https://2021.igem.org/wiki/images/d/d9/T--Tongji_China--6.1-14.jpeg" alt="6.1-14" style="max-width:100%" />

We know that the aim of implementation of garbage sorting in Shanghai is to make full use of waste resources, therefore we must take it into consideration when selecting final products. We came to **Tian Wei Environmental Company** and the staff there told us that if we want to treat H<sub>2</sub>S and NH<sub>3</sub>, we can transform them into **SO<sub>4</sub><sup>2-</sup> and NO<sub>3</sub><sup>-</sup>** which are **helpful in composting**.

![6.1-28](https://2021.igem.org/wiki/images/9/9e/T--Tongji_China--6.1-28.png)

<img src="https://2021.igem.org/wiki/images/b/b2/T--Tongji_China--6.1-15.jpeg" alt="6.1-15" style="max-width:100%" />

### Pathway design

After determining the gases and final products, we started our design which is divided into three parts: **hydrogen sulfide degradation, pathway optimization and kill switch**.[(To learn more)](/Team:Tongji_China/Design) To ensure biosafety, we've designed a kill switch consisting of **odor sensors, Dre recombinase system and toxin-antitoxin system**. We needed to synthesize CstR and a promoter promoted by CstR while we had problems in synthesizing the fragment, which influenced the process of our project. After reading some related literature, we found that **Professor Huaiwei Liu from Shandong University** had done some related experiments before. So we talked about our situation with him by e-mail and got the **plasmid PL1-CstR-PR3-mKatessrA** from him,which is helpful for constructing our kill switch.

### What have we learned?

We have conducted a huge amount of human practices when ideating and designing our project. We've **defined the odor gases and final products** after visiting Professor Fan Lv and Tian Wei Environmental Company and had **a rough frame of our processing path**. Besides, when we are designing our project, we got the **key plasmid of kill switch** from Professor Huaiwei Liu from Shandong University.



## Application & evaluation

As the project progresses, we began to take application and evaluation of our bacteria into consideration, therefore we turned to some specialists for help.



<img src="https://2021.igem.org/wiki/images/6/67/T--Tongji_China--6.1-18.png" alt="6.1-18" style="max-width:100%" />

### Efficiency of degrading H<sub>2</sub>S in gases and liquid

#### Characterization in liquid forms

After constructing the plasimid we needed, we began to [characterize](/Team:Tongji_China/Results) our plasimids. In the characterization of hydrogen sulfide degradation, we adopted **Methylene blue spectrophotometric method**, but the results were not steady. Therefore we turned to **Professor ZhanYun Guo** from School of Life Science and Technology in Tongji University for help. He told us that **S<sup>2-</sup> may be easily oxidized by oxygen** in the air, so when we are experimenting ,we can establish an **acidic environment** and add some **reductive substances** like Vitamin C. Besides, he gave us some **reduced glutathione** as positive reference substances.

<img src="https://2021.igem.org/wiki/images/2/28/T--Tongji_China--6.1-29.jpeg" />
<br/>

<img src="https://2021.igem.org/wiki/images/8/8a/T--Tongji_China--6.1-30.jpeg" alt="6.1-30" style="max-width:49%" />

<img src="https://2021.igem.org/wiki/images/8/82/T--Tongji_China--6.1-31.jpeg" alt="6.1-31" style="max-width:49%" />

#### Characterization in gas forms

Besides, we want to test the efficiency of degrading H<sub>2</sub>S in gas form. However, there isn't High Performance Gas Chromatograph in our lab to detect the concentration of gases. Therefore, we turned to **Professor Fan Lv** from Tongji University for help and she was willing to make us **use the instrument** in her lab and we finished the **construction of reaction device** under her guidance.

<img src="https://2021.igem.org/wiki/images/c/c6/T--Tongji_China--6.1-27-16346888059952.jpeg" alt="6.1-27" style="max-width:50%" />

### Application

Not only do we want our project to work successfully in the laboratory, but furthermore we want to be able to apply it in real life, which requires us to consider some **practical applications**. We approached **Professors Leng Ye, Guo Zhanyun, Du Changsheng, Zhang Mengjie and Zhang Jing** from Tongji University to discuss the application aspects of our project. They pointed out the need to consider the **final form of application, the hardware design, the activity of the enzyme activity in the application scenario**, etc. They also suggested that we needed to consider the **rate at which the gas enters the engineered bacteria and how to accelerate this rate**, etc. This gave us more food for thought on the application level.

![6.1-20](https://2021.igem.org/wiki/images/3/36/T--Tongji_China--6.1-20.png)

### Hardware

When it comes to the **carrier of our bacteria**, we turned to **Professor Xinping Zeng** for help. She recommended **biochar** to us. First of all, **food waste itself can convert into biochar**, which utilizes food waste in maximum. Besides, biochar can **absorb and enrich gases** in the food waste at the same time, which improve the efficiency of odor treatment. Last but not least, biochar provides a **relatively independent environment for bacteria** to survive from the complex food waste bins.

![6.1-32](https://2021.igem.org/wiki/images/1/14/T--Tongji_China--6.1-32.jpeg)

### What have we learned?

Through the human practices in application and evaluation, we have a deeper understanding of the application aspects of our project. When we are testing the degrading efficiency of our bacteria, we asked for help from **Professor Zhanyun Guo** and **Professor Fan Lv** and learned about the **improvement of our characterization experiments** and got access to **devices for testing gas concentration**.

When it comes to the application future for our project, we asked for advice from professors in our school and consulted Professor Xinping Zeng for advice in hardware. Then we made a [model](/Team:Tongji_China/Model) to simulate the dynamics of engineered bacteria spread and odor degradation in practical application.

<img src="https://2021.igem.org/wiki/images/2/27/T--Tongji_China--20211022-114718.png" alt="6.1-27" style="max-width:100%" />

## Summary

Our human practices can influence our project too. To **understand the problem**, we conducted a **questionnaire** to collect **people’s ideas** on food waste thus proving our project to be **meaningful**. Besides, we visited different places of the **food waste treatment process**, learning about present deodorizing methods and **opinions from people of related areas** and define our **application scenarios** to be front and middle end. To **define the solution**, we wanted to reflect the **morality problems of our project**, therefore, we held a **lecture between science and philosophy** and realized that we should utilize food waste fully which helps us in **selecting final products**. To **ideate and design the project**, we consulted some specialists to select the **target odor and final products**. Also we got help in **constructing plasmids**. To **apply and evaluate our project**, we improved our **characterization experiments** with professional help. Besides, we got advice for **hardware** from a specialist. 
      `)

      this.ele = hp as HTMLElement
    }
  }
}
</script>
