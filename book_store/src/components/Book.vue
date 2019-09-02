<template>
    <div>
        <div v-for="(book, index) in $store.state.books">
            <div>
                <img :src="book.volumeInfo.imageLinks.smallThumbnail" class="mb-5" style="border: 1px solid gray">
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

</style>