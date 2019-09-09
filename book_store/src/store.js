import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: 'Book Store',
        books: [],
        orderedBook: [],
        openModal: true,
    },
    mutations: {
        initBooks(state, payload) {
            state.books.push(...payload);
        },
        emptyOrderedBook(state) {
            state.orderedBook = {}
        },
        initOrderBook(state, id) {
            state.books.forEach(function (element) {
                if (element.id === id) {
                    state.orderedBook = element;
                }
            });
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
            commit('emptyOrderedBook');
            commit('initOrderBook', id);
        }
    }
})
