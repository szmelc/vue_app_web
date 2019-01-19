<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">{{ buttonText }}</button>
      <router-link :to="`/sign_up`">Create account</router-link>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: false,
      buttonText: 'Sign in'
    }
  },
  updated () {
    this.checkCurrentLogin()
  },
  created () {
    this.checkCurrentLogin()
  },
  methods: {
    login () {
      this.buttonText = 'Loading...'
      this.$http.post('/auth', { email: this.email, password: this.password })
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed())
    },

    checkCurrentLogin () {
      if (this.currentUser) {
        this.$router.replace(this.$route.query.redirect || '/main')
      }
    },

    loginSuccessful (req) {
      if (!req.data.token) {
        this.loginFailed()
        return
      }
      this.buttontText = 'Signed in'
      localStorage.token = req.data.token
      this.$store.dispatch('login')
      this.error = false

      this.$router.replace(this.$route.query.redirect || '/main')
    },

    loginFailed () {
      this.buttonText = 'Sign in'
      this.error = 'Login failed!'
      this.$store.dispatch('logout')
      delete localStorage.token
    }
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  }
}
</script>

<style lang="css">

.login-wrapper {
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

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
