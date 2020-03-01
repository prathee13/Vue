import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as action from './action'

Vue.use(Vuex)

// const state = {
//     jokes: []
// }

export default new Vuex.Store({
    state: {
        jokes: []
    },
    mutations: mutations,
    actions: action
})