<template>
    <div class="order-book">
        <div class="order-book__body">
            <div class="order-book__body__img">
                <img :src="$store.state.orderedBook.volumeInfo.imageLinks.smallThumbnail" alt="...">
            </div>
            <div class="order-book__body__description">
                <p>{{ $store.state.orderedBook.volumeInfo.description }}</p>
            </div>
        </div>

        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text"
                       class="form-control"
                       id="name"
                       placeholder="enter name"
                       v-model="name">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email"
                       class="form-control"
                       id="email"
                       placeholder="enter email"
                       v-model="email">
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="email"
                       class="form-control"
                       id="phone"
                       placeholder="enter phone"
                       v-model="phone">
            </div>
        </form>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" :disabled="btnDisable">Send</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderForm",
        data() {
            return {
                book: this.$store.state.orderedBook,
                btnDisable: false,
                name: '',
                email: '',
                phone: '',
            }
        },
        action: {

        }
    }
</script>

<style scoped>
    .order-book__body {
        display: flex;
        margin-bottom: 25px;
    }

    .order-book__body__img > img {
        height: auto;
        width: 200px;
    }

    .order-book__body__description p {
        font-size: 14px;
    }

    .order-book__body__description {
        margin-left: 10px;
        text-align: justify;
    }

    .order-book > form {
        text-align: left;
    }

</style>