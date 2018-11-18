<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  updated () {
    if (!localStorage.token && this.$route.path !== '/') {
      this.$router.push('/?redirect=' + this.$route.path)
    }
  }
}

</script>

<style></style>
