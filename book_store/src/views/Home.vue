<template>
    <div>
        <Search/>
        <div class="book-shelf">
            <Book/>
        </div>
    </div>
</template>

<script>
    import Search from "../components/Search";
    import Book from "../components/Book";

    export default {
        name: 'home',
        components: {
            Search,
            Book
        }
    }
</script>
