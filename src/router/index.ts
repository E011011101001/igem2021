import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '@/views/Home/index.vue'
import Description from '@/views/Description/index.vue'
import Result from '@/views/Result/index.vue'
import Contribution from '@/views/Contribution/index.vue'
import Desgin from '@/views/Design/index.vue'
import Engineering from '@/views/Engineering/index.vue'
import Exp from '@/views/Experiments_protocol/index.vue'
import Notebook from '@/views/Notebook/index.vue'
import Parts from '@/views/Parts/index.vue'
import Improved_part from '@/views/Improved_part/index.vue'
import Safety from '@/views/Safety/index.vue'
import Integrated_human_practise from '@/views/Integrated_human_practise/index.vue'
import Education_public_engagement from '@/views/Education_public_engagement/index.vue'
import Implementation from '@/views/Implementation/index.vue'
import Models from '@/views/Models/index.vue'
import Team from '@/views/Team/index.vue'
import Attribution from '@/views/Attribution/index.vue'
import Collaboration from '@/views/Collaboration/index.vue'
import Partnership from '@/views/Partnership/index.vue'
import Sponsors from '@/views/Sponsors/index.vue'
import Medal_criteria from '@/views/Medal_criteria/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: Home.id,
    component: Home
  },
  {
    path: '/Description',
    name: Description.id,
    component: Description
  },
  {
    path: '/Result',
    name: Result.id,
    component: Result
  },
  {
    path: '/Contribution',
    name: Contribution.id,
    component: Contribution
  },
  {
    path: '/Design',
    name: Desgin.id,
    component: Desgin
  },
  {
    path: '/Engineering',
    name: Engineering.id,
    component: Engineering
  },
  {
    // TODO: change
    path: '/Experiments',
    name: Exp.id,
    component: Exp
  },
  {
    path: '/Notebook',
    name: Notebook.id,
    component: Notebook
  },
  {
    path: '/Parts',
    name: Parts.id,
    component: Parts
  },
  {
    path: '/Improved',
    name: Improved_part.id,
    component: Improved_part
  },
  {
    path: '/Safety',
    name: Safety.id,
    component: Safety
  },
  {
    // TODO: change
    path: '/#',
    name: Integrated_human_practise.id,
    component: Integrated_human_practise
  },
  {
    // TODO: change
    path: '/#',
    name: Education_public_engagement.id,
    component: Education_public_engagement
  },
  {
    path: '/Implementation',
    name: Implementation.id,
    component: Implementation
  },
  {
    path: '/Models',
    name: Models.id,
    component: Models
  },
  {
    path: '/Team',
    name: Team.id,
    component: Team
  },
  {
    path: '/Attribution',
    name: Attribution.id,
    component: Attribution
  },
  {
    path: '/Collaboration',
    name: Collaboration.id,
    component: Collaboration
  },
  {
    path: '/Partnership',
    name: Partnership.id,
    component: Partnership
  },
  {
    path: '/Sponsors',
    name: Sponsors.id,
    component: Sponsors
  },
  {
    // TODO: change
    path: '/#',
    name: Medal_criteria.id,
    component: Medal_criteria
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
