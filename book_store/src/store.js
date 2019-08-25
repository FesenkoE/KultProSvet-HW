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
            state.books.push(...payload)
        }
    },
    actions: {
        initBooks({commit}) {
            fetch('https://www.googleapis.com/books/v1/volumes?q=javascript/', {
                method: 'GET'
            })
                .then(response => response.json())
                .then(json => console.log(json))
                // .then(json => commit('initBooks', json))
        }
    }
})
