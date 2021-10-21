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
import POC from '@/views/POC/index.vue'
import Safety from '@/views/Safety/index.vue'
import Integrated_human_practice from '@/views/Integrated_human_practice/index.vue'
import Education_public_engagement from '@/views/Education_public_engagement/index.vue'
import Implementation from '@/views/Implementation/index.vue'
import Entrepreneurship from '@/views/Entrepreneurship/index.vue'
import Models from '@/views/Models/index.vue'
import Team from '@/views/Team/index.vue'
import Attribution from '@/views/Attribution/index.vue'
import Collaboration from '@/views/Collaboration/index.vue'
import Partnership from '@/views/Partnership/index.vue'
import Medal_criteria from '@/views/Medal_criteria/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '',
    name: Home.id,
    component: Home
  },
  {
    path: '/Description',
    name: Description.id,
    component: Description
  },
  {
    path: '/Results',
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
    path: '/Proof_Of_Concept',
    name: POC.id,
    component: POC
  },
  {
    path: '/Safety',
    name: Safety.id,
    component: Safety
  },
  {
    path: '/Human_Practices',
    name: Integrated_human_practice.id,
    component: Integrated_human_practice
  },
  {
    path: '/Communication',
    name: Education_public_engagement.id,
    component: Education_public_engagement
  },
  {
    path: '/Implementation',
    name: Implementation.id,
    component: Implementation
  },
  {
    path: '/Entrepreneurship',
    name: Entrepreneurship.id,
    component: Entrepreneurship
  },
  {
    path: '/Model',
    name: Models.id,
    component: Models
  },
  {
    path: '/Team',
    name: Team.id,
    component: Team
  },
  {
    path: '/Attributions',
    name: Attribution.id,
    component: Attribution
  },
  {
    path: '/Collaborations',
    name: Collaboration.id,
    component: Collaboration
  },
  {
    path: '/Partnership',
    name: Partnership.id,
    component: Partnership
  },
  {
    // TODO: change
    path: '/Medal_Criteria',
    name: Medal_criteria.id,
    component: Medal_criteria
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/Team:Tongji_China/',
  routes
})

export default router
