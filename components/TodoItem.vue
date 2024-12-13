<template>
    <li>
      <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
        {{ task.title }}
      </span>
      <button @click="deleteTask">Delete</button>
      <button @click="toggleCompleted">{{ task.completed ? 'Undo' : 'Complete' }}</button>
    </li>
  </template>
  
  <script>
  export default {
    name: 'TodoItem',
    props: {
      task: Object
    },
    methods: {
      deleteTask() {
        this.$emit('delete');
      },
      toggleCompleted() {
        this.task.completed = !this.task.completed;
        this.$emit('update', this.task);
      }
    }
  };
  </script>
  