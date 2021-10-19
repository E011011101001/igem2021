<template>
  <div>
    <v-app-bar
      fixed
      app
      hide-on-scroll
      height="64"
      elevate-on-scroll
      src="https://2021.igem.org/wiki/images/b/b0/T--Tongji_China--top-background.png"
>
      <router-link to="/" class="d-flex">
        <Logo />
      </router-link>
      <v-spacer />

      <template v-for="(item, index) in items">
        <template v-if="item.submenu">
          <v-menu
            :key="index"
            offset-y
            transition="slide-y-transition"
            bottom
            open-on-hover
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                plain
                class="
                  py-8
                  submenubtn
                  hidden-sm-and-down
                  white--text
                "
                :ripple="false"
                v-on="on"
                v-bind="attrs"
              >
                {{ item.title }}
                <v-icon
                  right
                  small
                  class="mx-0"
                >
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item
                v-for="(subitem, index) in item.submenu"
                :key="index"
                link
                :to="subitem.to"
              >
                <v-list-item-title>{{ subitem.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <v-btn
          v-else
          :key="index"
          depressed
          tile
          plain
          class="py-8 hidden-sm-and-down white--text"
          :to="item.to"
          >{{ item.title }}</v-btn
        > </template
      ><v-spacer />
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Logo from './Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class SiteHeader extends Vue {
  public clipped = false
  public drawer = false
  public items = [
    {
      title: 'Home',
      to: '/'
    },
    {
      title: 'Project',
      submenu: [
        {
          title: 'Description',
          to: '/description'
        },
        {
          title: 'Result',
          to: 'result'
        },
        {
          title: 'Contribution',
          to: 'contribution'
        }
      ]
    },
    {
      title: 'Lab',
      submenu: [
        {
          title: 'Design',
          to: '/design'
        },
        {
          title: 'Engineering',
          to: '/engineering'
        },
        {
          title: 'Experiments Protocol',
          to: '/experiments_protocol'
        },
        {
          title: 'Notebook',
          to: '/notebook'
        },
        {
          title: 'Parts',
          to: '/parts'
        },
        {
          title: 'Improved part',
          to: '/improved_part'
        },
        {
          title: 'Safety',
          to: '/safety'
        }
      ]
    },
    {
      title: 'Human Practice',
      submenu: [
        {
          title: 'Integrated human practise',
          to: '/integrated_human_practise'
        },
        {
          title: 'Education & Public Engagement',
          to: '/education_public_engagement'
        },
        {
          title: 'Implementation',
          to: '/implementation'
        }
      ]
    },
    {
      title: 'Models',
      to: '/models'
    },
    {
      title: 'Team',
      submenu: [
        {
          title: 'Team',
          to: '/team'
        },
        {
          title: 'Attribution',
          to: '/attribution'
        },
        {
          title: 'Collaboration',
          to: '/collaboration'
        },
        {
          title: 'Partnership',
          to: '/partnership'
        },
        {
          title: 'Sponsors',
          to: '/sponsors'
        }
      ]
    },
    {
      title: 'Medal Criteria',
      to: '/medal_criteria'
    }
  ]

  changeThemeColor (): void {
    if (this.$vuetify.theme.dark === true) {
      this.$vuetify.theme.dark = false
    } else {
      this.$vuetify.theme.dark = true
    }
  }
}
</script>

<style scoped>
.submenubtn {
  cursor: default;
}
</style>
