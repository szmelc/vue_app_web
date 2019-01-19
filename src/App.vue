<template>
  <div id="app">
    <template v-if="currentUser">
      <Navbar></Navbar>
    </template>
    <div class="container-fluid">
      <router-view></router-view>
      <template v-if="currentUser">
        <Footer></Footer>
      </template>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Footer,
    Navbar
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
  updated () {
    // this.checkCurrentLogin()
  },
  created () {
    // this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin () {
      if (!this.currentUser && (this.$route.path !== '/' || this.$route.path !== '/sign_in')) {
        this.$router.push('/?redirect=' + this.$route.path)
      }
    }
  }
}

</script>

<style></style>
