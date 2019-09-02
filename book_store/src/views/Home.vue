<template>
    <div>
        <Search/>
        <Book/>
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
