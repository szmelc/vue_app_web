<template>
<div class="profile">
  <UserProfile :first_name='first_name' :last_name='last_name' :avatar='avatar' />
</div>
</template>

<script>
import UserProfile from './UserProfile'
export default {
  name: 'User',
  components: {
    UserProfile
  },
  data () {
    return {
      avatar: null,
      first_name: null,
      last_name: null
    }
  },
  async created () {
    this.$http.get('users/me')
      .then(response => this.buildUser(response.data))
      .catch(err => alert(err))
  },
  methods: {
    buildUser (response) {
      debugger
      this.first_name = response.first_name
      this.last_name = response.last_name
      this.avatar = response.avatar
      debugger
    }
  }
}

</script>

<style>

</style>
