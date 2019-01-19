<template>
  <div>
    <h1>This is a sample Vue.js 2 app</h1>
    <h2>It's under construction but already has some basic functionalities:</h2>
    <ul>
      <li v-for="functionality in functionalities">
        {{ functionality }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      functionalities: ['Signing up', 'Signing in', 'JWT authentication', 'Uploading user avatars']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
