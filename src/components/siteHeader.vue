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
                  font-weight-medium
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
          class="py-8 hidden-sm-and-down white--text font-weight-medium"
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
          to: '/Description'
        },
        {
          title: 'Result',
          to: '/Result'
        },
        {
          title: 'Contribution',
          to: '/Contribution'
        }
      ]
    },
    {
      title: 'Lab',
      submenu: [
        {
          title: 'Design',
          to: '/Design'
        },
        {
          title: 'Engineering',
          to: '/Engineering'
        },
        {
          title: 'Experiments Protocol',
          to: '/Experiments_protocol'
        },
        {
          title: 'Notebook',
          to: '/Notebook'
        },
        {
          title: 'Parts',
          to: '/Parts'
        },
        {
          title: 'Improved part',
          to: '/Improved_part'
        },
        {
          title: 'Safety',
          to: '/Safety'
        }
      ]
    },
    {
      title: 'Human Practice',
      submenu: [
        {
          title: 'Integrated human practise',
          to: '/Integrated_human_practise'
        },
        {
          title: 'Education & Public Engagement',
          to: '/Education_public_engagement'
        },
        {
          title: 'Implementation',
          to: '/Implementation'
        }
      ]
    },
    {
      title: 'Models',
      to: '/Models'
    },
    {
      title: 'Team',
      submenu: [
        {
          title: 'Team',
          to: '/Team'
        },
        {
          title: 'Attribution',
          to: '/Attribution'
        },
        {
          title: 'Collaboration',
          to: '/Collaboration'
        },
        {
          title: 'Partnership',
          to: '/Partnership'
        },
        {
          title: 'Sponsors',
          to: '/Sponsors'
        }
      ]
    },
    {
      title: 'Medal Criteria',
      to: '/Medal_criteria'
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
