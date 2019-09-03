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
                            Author: {{ book.volumeInfo.authors[0] }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Book"
    }
</script>

<style scoped>
    .book-card {
        height: 500px;
        width: 450px;
        box-shadow: 0 0 10px 0 #cccccc;
        border-radius: 4px;
        padding: 0 15px;
    }

    .book-body {
        display: flex;
        margin-top: 25px;
        justify-content: space-between;
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
        width: 170px;
        height: 250px;
    }
    
    .book-description {
        flex: 1;
    }
</style>