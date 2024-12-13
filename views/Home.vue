<template>
    <div>
      <h1>Welcome to the Task Manager</h1>
      <todo-list v-if="isAuthenticated" />
      <p v-else>
        Please <router-link to="/login">Login</router-link> or 
        <router-link to="/register">Register</router-link> to manage your tasks.
      </p>
    </div>
  </template>
  
  <script>
  import TodoList from '@/components/TodoList.vue';
  
  export default {
    name: 'Home',
    components: {
      TodoList
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated;
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>
  