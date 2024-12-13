import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    user: JSON.parse(localStorage.getItem('user')) || null
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id)
      if (index !== -1) {
        state.tasks[index] = updatedTask
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      }
    },
    setUser(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logout(state) {
      state.user = null
      localStorage.removeItem('user')
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task)
    },
    deleteTask({ commit }, taskId) {
      commit('deleteTask', taskId)
    },
    updateTask({ commit }, updatedTask) {
      commit('updateTask', updatedTask)
    },
    login({ commit }, user) {
      commit('setUser', user)
    },
    logout({ commit }) {
      commit('logout')
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    tasks: state => state.tasks
  }
})
