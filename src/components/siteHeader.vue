<template>
  <div>
    <v-app-bar
      fixed
      app
      hide-on-scroll
      height="64"
      elevate-on-scroll
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
                class="py-8 submenubtn hidden-sm-and-down"
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
                <v-list-item-title>{{ item.title }}</v-list-item-title>
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
          class="py-8 hidden-sm-and-down"
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
      icon: 'mdi-folder-home-outline',
      title: 'Home',
      to: '/'
    },
    {
      icon: 'mdi-account',
      title: 'About',
      to: '/about'
    },
    {
      icon: 'mdi-tools',
      title: 'Services',
      to: '/services',
      submenu: [
        {
          title: 'Services Page',
          to: '/services'
        },
        {
          title: 'Static Websites',
          to: '/#'
        },
        {
          title: 'Mobile Applications',
          to: '/#'
        },
        {
          title: 'Corporate websites',
          to: '/#'
        },
        {
          title: 'Editorial Sites',
          to: '/#'
        },
        {
          title: 'Ecommerce and Store',
          to: '/#'
        },
        {
          title: 'Block Chain Devemopment',
          to: '/#'
        }
      ]
    },
    {
      icon: 'mdi-cash-usd',
      title: 'Pricing',
      to: '/pricing'
    },
    {
      icon: 'mdi-folder-image',
      title: 'Gallery',
      to: '/gallery'
    },
    {
      icon: 'mdi-blogger',
      title: 'Blog',
      to: '/blog'
    },
    {
      icon: 'mdi-contacts',
      title: 'Contact',
      to: '/contact'
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
