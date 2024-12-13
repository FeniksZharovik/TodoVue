<template>
    <div>
      <h1>Login</h1>
      <login />
    </div>
  </template>
  
  <script>
  import Login from '@/components/Login.vue';
  
  export default {
    name: 'LoginPage',
    components: {
      Login
    }
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  