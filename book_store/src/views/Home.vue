<template>
    <div>
        <Search/>
        <div class="book-shelf">
            <Book/>
        </div>
        <OrderForm />
    </div>
</template>

<script>
    import Search from "../components/Search";
    import Book from "../components/Book";
    import OrderForm from "../components/OrderForm";

    export default {
        name: 'home',
        components: {
            Search,
            Book,
            OrderForm
        }
    }
</script>
