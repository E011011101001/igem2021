<template lang="pug">
v-row
  v-col.col-1
  v-col.col-10
    div(ref="parts").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import marked from 'marked'

@Component
export default class Parts extends Vue {
  static id = 'Parts'

  mounted (): void {
    window.scrollTo(0, 0)
    const parts = this.$refs.parts as Element
    if (parts) {
      parts.innerHTML = marked(`
| Basic Parts                                             | Description                                                  |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| [BBa_K3823001](http://parts.igem.org/Part:BBa_K3823001) | SQR(Sulfide:  Quinone Oxidoreductase) from Acidithiobacillus spp. |
| [BBa_K3823002](http://parts.igem.org/Part:BBa_K3823002) | SDO(sulfur  dioxygenase) from Acidithiobacillus spp.         |
| [BBa_K3823003](http://parts.igem.org/Part:BBa_K3823003) | AprBA(APS  reductase) from Acidithiobacillus spp.            |
| [BBa_K3823004](http://parts.igem.org/Part:BBa_K3823004) | SAT(ATP  sulfurylase) from Acidithiobacillus spp.            |
| [BBa_K3823006](http://parts.igem.org/Part:BBa_K3823006) | CstR，A  transcription factor sensing hydrogen sulfide       |
| [BBa_K3823008](http://parts.igem.org/Part:BBa_K3823008) | Pcstr:  an artificial hydrogen sulfide sensitive promoter with binding sequences of  CstR |
| [BBa_K3823011](http://parts.igem.org/Part:BBa_K3823011) | Sqr  from C. pinatubonensis                                  |


<br/>
<br/>
<br/>

| Composite Parts                                              | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [BBa_K3823009](http://parts.igem.org/Part:BBa_K3823009)      | SQR-SDO-AprBA-SAT                                            |
| [BBa_K3823014]([Part:BBa K3823014 - parts.igem.org](http://parts.igem.org/Part:BBa_K3823014)) | T7-SQR-J23110-SDO-AprBA-SAT                                  |
| [BBa_K3823012](http://parts.igem.org/Part:BBa_K3823012)      | hydrogen  sulfide sensitive, three-gear adjustable kill switch |
| [BBa_K3823010](http://parts.igem.org/Part:BBa_K3823010)      | MazE  antitoxin and Dre recombinase regulated by a hydrogen sulfide switch |

      `)
    }
  }
}
</script>
