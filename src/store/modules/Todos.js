import axios from "axios";

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
  // here we are getting const state part of the store
};

const actions = {
  async fetchTodos({ commit }) {
    // we don't call a mutation directly we use commit in here as we need to send data to mutation
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    ); // here we are saving the data in response using const to response we use await as it is promise

    commit("setTodos", response.data);
    // by using commit we are calling the mutation we need first parameter is the mutation we need to call and the second parameter is the data we need to pass to that mutation
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );

    commit("newTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit("removeTodo", id);
  },
  async filterTodos({ commit }, e) {
    //console.log(e);
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit("setTodos", response.data);
  },
  async updateTodo({ commit }, updatedTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos?_limit=${updatedTodo.id}`
    );

    commit("updatedTodo", updatedTodo);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  // setTodos is function which takes two parameters like state, todos which is noting but a array of todos we are getting in actions(fetchTodos function) adding to the state
  // (state.todos = todos) taking the state and setting ti to to the todos that are passed in
  // now todos get sent down to the component
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
