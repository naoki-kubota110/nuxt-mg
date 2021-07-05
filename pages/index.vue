<template>
<h1>hello</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  created(){
    console.log("ibdex")
  },
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