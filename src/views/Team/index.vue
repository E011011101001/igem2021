<template lang="pug">
div
  v-img(src="https://2021.igem.org/wiki/images/9/9b/T--Tongji_China--%E5%90%88%E7%85%A7-%E5%8F%AF%E7%94%A8%E4%BD%9C%E8%83%8C%E6%99%AF1.png")
  h1.text-left Team Members
  v-row
    v-col.col-5.offset-md-1
      TMember(
        src="https://2021.igem.org/wiki/images/8/88/T--Tongji_China--hhj.png"
        name="Hongjuan Hu"
        major="Biotechnology"
        hobbies="Music, photograph"
        description="Always loving beauty!"
      )
    v-col.col-5
      TMember(
        src="https://2021.igem.org/wiki/images/d/dd/T--Tongji_China--zyy.png"
        name="Yiying Zhang"
        major="Biotechnology"
        hobbies="iGEM"
        description="She dreams of being a guitarist, a skater and an expert in strolling. She usually has great passion for interesting work but only wants to 'lie down' at the moment."
      )
  v-row
    v-col.col-5.offset-md-1
      TMember(
        src="https://2021.igem.org/wiki/images/0/05/T--Tongji_China--cjy.png"
        name="Jiayi Chen"
        major="Biotechnology"
        hobbies="Painting, binge-watching, biology, design"
        description="She is drawn to a  relaxing and peaceful life，but sometimes she wants to challenge herself."
      )
    v-col.col-5
      TMember(
        src="https://2021.igem.org/wiki/images/b/b7/T--Tongji_China--ljx.png"
        name="Jixuan Lin"
        major="Biotechnology"
        hobbies="Reading literature and philosophy, writing poems sometimes, photoing, and of course sleeping"
        description="Trying to be  alive and keep love by looking forward to the endless"
      )
  v-row
    v-col.col-5.offset-md-1
      TMember(
        src="https://2021.igem.org/wiki/images/7/78/T--Tongji_China--lph.png"
        name="Peihao Li"
        major="Information Security"
        hobbies="Coding, hacking, gaming"
        description="PWN Everything!"
      )
    v-col.col-5
      TMember(
        src="https://2021.igem.org/wiki/images/9/9f/T--Tongji_China--wyj.png"
        name="Yuanjia Wang"
        major="Biotechnology"
        hobbies="Reading, dreaming of cats"
        description="Always trial and error, always no regrets."
      )
  v-row
    v-col.col-5.offset-md-1
      TMember(
        src="https://2021.igem.org/wiki/images/1/1b/T--Tongji_China--wj.png"
        name="Jiang Wu"
        major="Biotechnology"
        hobbies="Doing art projects, growing plants"
        description="Burn the bed and the dreams I never met， I‘ll face the wind and fill my head."
      )
    v-col.col-5
      TMember(
        src="https://2021.igem.org/wiki/images/5/57/T--Tongji_China--zhq.png"
        name="Hanqing Zhao"
        major="Clinical Medicine"
        hobbies="Reading, listening to music"
        description="Be interested in everything except working."
      )
  h1.text-left.my-8 Instructor and Advisors
  v-row
    v-col.col-5.offset-md-1
      TAdvisor(
        src="https://2021.igem.org/wiki/images/3/30/T--Tongji_China--kyz.png"
        name="Yunzhe Kang"
        description="Team leader of Tongji_China 2019 and team instructor of Tongji_China 2020"
      )
    v-col.col-5
      TAdvisor(
        src="https://2021.igem.org/wiki/images/9/96/T--Tongji_China--jjc.png"
        name="Jiacheng Jiang"
        description="Team leader and HP Group Leader of Tongji_China 2020"
      )
  v-row
    v-col.col-5.offset-md-1
      TAdvisor(
        src="https://2021.igem.org/wiki/images/6/6f/T--Tongji_China--lwt.png"
        name="Wenting Lu"
        description="Academic group member of Tongji_China 2020"
      )
    v-col.col-5
      TAdvisor(
        src="https://2021.igem.org/wiki/images/7/7f/T--Tongji_China--lsy.png"
        name="Siyuan Li"
        description="Team leader and Academic Group leader of Tongji_China 2020"
      )
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import TMember from './TMember.vue'
import TAdvisor from './TAdvisor.vue'

@Component({
  components: {
    TMember,
    TAdvisor
  }
})
export default class Team extends Vue {
  static id = 'Team'
}
</script>
