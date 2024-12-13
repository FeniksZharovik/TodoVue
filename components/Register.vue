<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      register() {
        const user = { username: this.username, password: this.password };
        // Simpan user lokal (implementasi server bisa ditambahkan di masa depan)
        this.$store.dispatch('login', user);
        this.$router.push('/');
      }
    }
  };
  </script>
  