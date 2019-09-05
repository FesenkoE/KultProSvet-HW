import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: 'Book Store',
        books: [],
        orderBook: {},
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
        },
        orderBook({commit}, id) {
            console.log(this.state.books[0]);
        }
    }
})
