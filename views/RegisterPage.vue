<template>
    <div>
      <h1>Register</h1>
      <register />
    </div>
  </template>
  
  <script>
  import Register from '@/components/Register.vue';
  
  export default {
    name: 'RegisterPage',
    components: {
      Register
    }
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  