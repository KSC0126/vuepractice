<template>
    <div class="hello">
    <div  v-bind:key="todo.id" v-for="todo in todos">
        {{todo.title}}
    </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'DataComponent',
  data(){
      return{
          todos:[]
      }
  },
  created(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.todos = res.data)
      .catch(err => console.log(err))

  }
    
}
</script>
<style scoped>

</style>


