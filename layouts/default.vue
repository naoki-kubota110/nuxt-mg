<template>
  <v-app dark>
    <Header/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/defaults/Header.vue'
import Footer from '../components/defaults/Footer.vue'
export default Vue.extend({
  components:{
    Header,
    Footer
  },
})
</script>