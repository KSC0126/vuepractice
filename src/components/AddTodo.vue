<template>
    <div>
        <div class="AddTodo">
            <h3>Add Todo</h3>
            <form @submit="onSubmit">
                <input type="text" v-model="title">
                <input type="submit" value="submit" >
            </form>

        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name:"AddTodo",
    data() {
        return {
            title: "",
        }
    },
    methods: {
        ...mapActions(["addTodo"]),
        onSubmit(e) {
            e.preventDefault();
            this.addTodo(this.title);
            this.title='';
        }
        
    },

}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid darkgray;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: darkgray;
  color: #fff;
  border: 1px darkgray solid;
  cursor: pointer;
}

</style>
