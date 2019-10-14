import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    pageNumber: -1,
};
const actions = {
    defaultPushToPostArr({state}, value) {
        state.postArr.push(value);
    },
    increment({state}) {
        state.pageNumber++;
        console.log(state);
    },
    decrement({state}) {
        state.pageNumber--;
    },
    setPageNumber({state}, value) {
        state.pageNumber = value;
    }
};
const mutations = {

};
window.store = new Vuex.Store({
    state,
    actions,
    mutations,
});

