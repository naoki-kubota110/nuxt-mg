<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn @click="$router.push('/signup')">Sign Up</v-btn>
      <v-btn @click="$router.push('/login')">Login</v-btn>
    </v-app-bar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'タスク一覧',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '登録情報',
          to: '/userInfo'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Tolello'
    }
  }
})
</script>