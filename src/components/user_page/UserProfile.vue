<template>
  <div id="user-profile">
    <UserAvatar :avatar='avatar' />
    <div><h1>{{ `${first_name} ${last_name}` }}</h1></div>
  </div>
</template>

<script>
import UserAvatar from './UserAvatar'
export default {
  name: 'Profile',
  components: {
    UserAvatar
  },
  props: ['first_name', 'last_name', 'avatar']
}
</script>

<style lang="scss" scoped>
  @import '@/scss/_variables.scss';
  @import '@/scss/_mixins.scss';

  #user-profile {
    padding: 10px 12px;
    margin: auto;
    width: 98%;
    @include black-box-shadow;
  }
</style>
