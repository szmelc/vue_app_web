<template>
  <div id="user-profile">
    <div><h1>{{ info.data.first_name }}</h1></div>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    this.$http.get('users/me')
      .then(response => (this.info = response))
      .catch(err => alert(err))
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import '@/scss/_variables.scss';
  @import '@/scss/_mixins.scss';

  #user-profile {
    background: $purple;
  }
</style>
