import Vuex from 'vuex';
import Vue from 'vue';
import Todos from './modules/Todos';

// load Vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
    modules:{
        Todos
    }
})
