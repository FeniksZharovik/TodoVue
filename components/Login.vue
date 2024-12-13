<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        const user = { username: this.username, password: this.password };
        this.$store.dispatch('login', user);
        this.$router.push('/');
      }
    }
  };
  </script>
  