<template>
    <div class="container">
        <div class="d-flex flex-wrap">
            <div class="mb-3 mr-auto" v-for="(book, index) in $store.state.books">
                <div class="book-card">
                    <div>
                        <img :src="book.volumeInfo.imageLinks.smallThumbnail">
                    </div>
                    <div>
                        <h5><strong>{{ book.volumeInfo.title }}</strong></h5>
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
        display: flex;
        height: 400px;
        width: 300px;
        border: 1px solid #cccccc;
        border-radius: 4px;
    }
</style>