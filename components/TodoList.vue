<template>
    <div>
      <h2>Your Tasks</h2>
      <ul>
        <todo-item
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @delete="deleteTask(task.id)"
          @update="updateTask(task)"
        />
      </ul>
      <form @submit.prevent="addTask">
        <input v-model="newTask" type="text" placeholder="Add new task" required />
        <button type="submit">Add Task</button>
      </form>
    </div>
  </template>
  
  <script>
  import TodoItem from './TodoItem.vue';
  
  export default {
    name: 'TodoList',
    components: {
      TodoItem
    },
    data() {
      return {
        newTask: ''
      };
    },
    computed: {
      tasks() {
        return this.$store.getters.tasks;
      }
    },
    methods: {
      addTask() {
        if (this.newTask.trim()) {
          const task = {
            id: Date.now(),
            title: this.newTask.trim(),
            completed: false
          };
          this.$store.dispatch('addTask', task);
          this.newTask = '';
        }
      },
      deleteTask(taskId) {
        this.$store.dispatch('deleteTask', taskId);
      },
      updateTask(updatedTask) {
        this.$store.dispatch('updateTask', updatedTask);
      }
    }
  };
  </script>
  