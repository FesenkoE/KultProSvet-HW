<template>
    <div>
        <Search/>
        <div class="book-shelf">
            <Book/>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Order Form</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <OrderForm />
                    </div>
                </div>
            </div>
        </div>
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
