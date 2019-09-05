<template>
    <div class="container">
        <div class="d-flex flex-wrap">
            <div class="mb-3 mr-3" v-for="(book, index) in $store.state.books">
                <div class="book-card">
                    <div class="book-title">
                        <h6><strong>{{ book.volumeInfo.title }}</strong></h6>
                    </div>
                    <div class="book-body">
                        <div class="book-image">
                            <img :src="book.volumeInfo.imageLinks.smallThumbnail">
                        </div>
                        <div class="book-description">
                            <p v-if="book.volumeInfo.authors">Author: {{ book.volumeInfo.authors[0] }}</p>
                            <p v-if="book.volumeInfo.publishedDate">Published: {{ book.volumeInfo.publishedDate | newFormat}}</p>
                        </div>
                    </div>
                    <div class="btn-order">
                        <button class="btn btn-success btn-block"
                                data-toggle="modal"
                                data-target="#exampleModalCenter"
                                @click="orderBook(book.id)"
                                :bookId="bookId">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Book",
        props: ['bookId'],
        filters: {
            newFormat(date) {
                let newDate = new Date(date);
                let day = newDate.getDate();
                day = (day < 10) ? '0' + day : day;
                let month = newDate.getMonth();
                month = (month < 10) ? '0' + month : month;
                let year = newDate.getFullYear();
                return `${day}.${month}.${year}`;
            }
        },
        methods:
            mapActions([
                'orderBook'
            ]),
    }
</script>

<style scoped>
    .book-card {
        width: 260px;
        box-shadow: 0 0 10px 0 #cccccc;
        border-radius: 4px;
        padding: 10px 15px;
    }

    .book-body {
        margin-top: 25px;
        justify-content: space-between;
        height: 290px;
    }

    .book-title {
        padding: 10px 5px;
        border-bottom: 1px solid #cccccc;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    h6 {
        margin: 0;
    }

    .book-card  img {
        width: 150px;
        height: 200px;
    }
    
    .book-description {
        margin-top: 15px;
    }

    .book-description p {
        margin-bottom: 5px;
    }
</style>