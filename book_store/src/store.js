import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        books: [],
        title: 'Book Store'
    },
    mutations: {
        initBooks(state, payload) {
            state.books.push(...payload);
        },
    },
    actions: {
        initBooks({commit}, value) {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}/`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(result => commit('initBooks', result.items))
        }
    }
})
