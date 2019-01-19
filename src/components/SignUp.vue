<template>
  <div class="signin-wrapper border border-light">
    <form class="form-signup" @submit.prevent="signUp">
      <h2 class="form-signup-heading">Please sign up</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="inputFirstName" class="sr-only">First Name</label>
      <input v-model="first_name" type="text" id="inputFirstName" class="form-control" placeholder="First name">
      <label for="inputLastName" class="sr-only">Last Name</label>
      <input v-model="last_name" type="text" id="inputLastName" class="form-control" placeholder="Last name">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <label for="inputPasswordConfirmation" class="sr-only">Password Confirmation</label>
      <input v-model="password_confirmation" type="password" id="inputPasswordConfirmation" class="form-control" placeholder="Password confirmation" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">{{ buttonText }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      error: false,
      first_name: '',
      last_name: '',
      password: '',
      password_confirmation: '',
      buttonText: 'Sign Up'
    }
  },
  methods: {
    signUp () {
      this.buttonText = 'Loading...'
      const fd = new FormData()
      fd.append('email', this.email)
      fd.append('first_name', this.first_name)
      fd.append('last_name', this.last_name)
      fd.append('password', this.password)
      fd.append('password_confirmation', this.password_confirmation)
      this.$http.post('/users/me/create', fd)
        .then(response => {
          this.$router.push('/')
          console.log(response)
        })
        .catch(response => {
          this.buttonText = 'Sign Up'
          console.log(response)
        })
    }
  }
}
</script>

<style>

.signin-wrapper {
  background: #fff;
  width: 70%;
  margin: 12% auto;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, .03);
  animation: fadein 0.6s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.form-signup {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signup .form-signin-heading,
.form-signup .checkbox {
  margin-bottom: 10px;
}
.form-signup .checkbox {
  font-weight: normal;
}
.form-signup .form-control {
  position: relative;
  height: auto;
  margin-bottom: 10px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signup .form-control:focus {
  z-index: 2;
}
.form-signup input[type="email"] {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signup input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
