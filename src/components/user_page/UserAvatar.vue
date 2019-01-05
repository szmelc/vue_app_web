<template>
  <div class="user-avatar">
    <div class="avatar">
      <img :src="avatar" class="user-avatar-img" alt="User Avatar"/>
      <Loader v-if="loading"/>
    </div>
    <input type="file" @change='uploadFile'>
  </div>
</template>

<script>
import Loader from '../Loader'
export default {
  name: 'UserAvatar',
  props: ['avatar'],
  components: {
    Loader
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    uploadFile (e) {
      this.loading = true
      const selectedFile = e.target.files[0]
      const avatar = document.querySelector('.user-avatar-img')
      avatar.style.filter = 'grayscale(80%)'
      const fd = new FormData()
      fd.append('image', selectedFile, selectedFile.name)
      this.$http.post('/users/me/update', fd)
        .then(response => {
          this.loading = false
          this.avatar = response.data.avatar.url
          avatar.style.filter = 'grayscale(0%)'
        })
        .catch(response => console.log(response))
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/scss/_variables.scss';
  @import '@/scss/_mixins.scss';
  .user-avatar {
    position: relative;
    display: inline-block;
   .avatar {
     position: relative;
   }
  }
</style>
