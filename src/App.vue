<template>
  <div id="app">
    <div class="container">
      <AddTodo/>
      <FilterTodos />
       <Todos/>
    <!-- <DataComponent/> -->
    </div>
 
    <!-- <Vuexample /> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DataComponent from "./components/DataComponent.vue";
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodos from "./components/FilterTodos.vue";
//import Vuexample from './components/Vuexample.vue'

export default {
  name: "app",
  components: {
    HelloWorld,
    DataComponent,
    Todos,
    AddTodo,
    FilterTodos

    //Vuexample
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: lightgrey;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
