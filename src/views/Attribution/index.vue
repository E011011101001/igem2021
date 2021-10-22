<template lang="pug">
v-row
  v-col.col-3
    Anchor(v-if="ele" :ele="ele")
  v-col.col-9
    div(ref="attribution").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Attribution extends Vue {
  static id = 'Attribution'
  ele: HTMLElement | null = null

  mounted (): void {
    const attribution = this.$refs.attribution as Element
    console.log(attribution)
    if (attribution) {
      attribution.innerHTML = marked(`

## Attributions & Acknowledgements

### Team members

**Hongjuan Hu**:

Team Leader, HP group leader,

Contact with collaboration and partnership,

Wiki writing



**Yiying Zhang**:

Team Leader, Academic Group Leader,

Plasmid construction and primer design,

optimizations of promoter pathways (including wet lab and modeling),

Participating HP,

Wiki writing



**Jiayi Chen**:

The construction and expression of Kill Switch,

Wiki writing,

art design(Logo and poster design)



**Jixuan Lin** :

Expression of removing sulfur,

Participating HP,

Wiki writiing



**Peihao Li** :

Wiki design



**Yuanjia Wang**:

In charge of human practiced(participating and content planing),

In charge of education and public engagement,

Wiki writing



**Jiang Wu**:

Expression of removing sulfur,

Wiki writing and design



**Hanqing Zhao** :

Expression of removing sulfur,

 Plasmid construction and primer design,

wiki writing



### Instructor and advisors

**Yuanzhe Kang** :

Instructor.

Team leader of Tongji_China 2019 and team instructor of Tongji_China 2020. He helped us in building the team Tongji_China 2021. Guidance of project and experiments



**Jiacheng Jiang** :

Advisor.

Team leader and HP Group Leader of Tongji_China 2020. He helped us in topic selction and the content arrangement in Human Practices.



**WenTing Lu** :

Advisor.

Academic group member of Tongji_China 2020. She helped us in molecular cloning experimental design and primer design.



**Siyuan Li** :

Advisor.

Team leader and Academic Group leader of Tongji_China 2020. He helped us in molecular cloning experimental design and primer design.



## Acknowledgements

### **Principal Investigator**

#### School of Life Science and Technology,Tongji Univesity:

- **Prof. Jing Zhang**: Deputy Dean of School, our primary PI. She helped us in various aspects.
- **Dr. Ye Leng**: Associate professor of School. She kept following the process, helped us in contact with other professors and guidance outside the school.
- **Prof. Changsheng Du**: He gave us suggestions on experiments, particularly in the area of molecular cloning and the choice of backteria.
- **Prof. Chunguang Wang**：Professor of School. She provided suggestions on bacteria's working  effeciency and potential application scenarios.
- **Prof. Zhanyun Guo**: Professor of School. He gave us suggestions on experiments, particularly in the area of molecular cloning. He also gave us suggestions and methodological guidance on improving the stability of experimental results in the expression of hydrogen sulfide degradation.

#### School of Environmental Science and Engineering, Tongji University：

- **Prof. Fan Lv**: She introduced the development and market conditions of microbial fermentation and odor degradation of food waste,which inspired our final topic selection and the choice of ingredients. She also gave us suggestions on biogas slurry treatment and qualitative and quantitative detection.

#### School of Political Science & International Relations, Tongji University:

- **Prof. Ming Sun**：He teached us the crteria of language expression and topic selection in designing a questionnaire. He also gave suggestions on our first edition.

#### School of Humanities, Tongji University

- **Prof. Xinghua Lu**：Prof. Lu is a doctor of philosophy mainly focusing on philosophy of art, philosophy of technology and urban philosophy. He evaluated our project from the perspective of philosophy and gave suggestions on the techniques commonly used in synthetic biology. With the effort of Lu, a interdisciplinary communication was successfully held.



### General Support

#### School of Life Science and Technology,Tongji Univesity:

- **Prof. Shaorong Gao**: Dean of School of Life Science and Technology, Tongji University. provided us with lots of experimental materials.
- **Prof. Ping Li**: She shared lab resources with us.
- **Dr. Ming Li**: She shared experimental materials with us.
- **Mrs.Libo Xing**:Teacher in Tongji University, supports us in experimental materials.
- **Mrs.Xin Gui**: Teacher in Tongji University, supports us in experimental materials and lab facilities.

#### State Key Laboratory of Microbial Technology, Shandong University

- **Prof. Huaiwei Liu**: He provided plasmid containing CstR and pCstR to us.



### Others

- **Zhifan Lin**: Junior student from School of Life Science and Technology,Tongji Univesity. He provided as numerous support on the field and literature search at the early stage of our topic selection. He also participated in the code part of making 'Synthesis of Biology'

- **Youjun Shi**: Junior student from School of Life Science and Technology,Tongji Univesity. He participated field and literature search at the early stage of our topic selection. He also participated in the design of making 'Synthetic of Biology'

- **Liwen Jing**: Third year postgraduate student from College of Surveying and Geographic Informatics，Tongji University. He was responsible for team photo shoots.

- **Jiaxing Li**: Junior student from College of Philosophy, Law & Political Science, Shanghai Normal University. She gave us more detailed suggestions on our revised questionnaires and introduced relationships between design and analytical skills after collecting questionnaires.

### Human Prctice Support

- **Dr. Guangpu Guo** : Associate Professor of School of Life Science and Technology,Tongji Univesity. He helped us get in touch with Shanghai Minhang District Youth Science and Technology Centre.
- **Mr. Wenwei Wu**: Head of Amenities Management Office in Hongmei Street. He showed us wet waste localisation process in Shanghai Citizen Environmental Protection Experience Center and helped us get in touch with the head of Shanghai Tianwei Environmental Protection Technology Co.,Ltd to know more information.
- Shanghai Tianwei Environmental Protection Technology Co.,Ltd. Staffs from it introduced the whole waste disposal process, including front-end crushing and back-end composting, which inspired us the location our biological products can be used in.
- **Mrs.Li**: Teacher in Shanghai Minhang District Youth Science and Technology Centre. She supported us in holding science communication activities.

### Financial Support

School of Life Science and Technology of Tongji University provided the experiment fund for us.
      `)
      this.ele = attribution as HTMLElement
    }
  }
}
</script>
