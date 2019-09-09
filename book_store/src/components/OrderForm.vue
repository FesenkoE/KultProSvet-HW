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
                <p class="errors">{{ errors.name }}</p>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email"
                       class="form-control"
                       id="email"
                       placeholder="enter email"
                       v-model="email">
                <p class="errors">{{ errors.email }}</p>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="email"
                       class="form-control"
                       id="phone"
                       placeholder="enter phone"
                       v-model="phone">
                <p class="errors">{{ errors.phone }}</p>
            </div>
        </form>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" :disabled="this.btnDisabled" @click="checkForm">Send</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderForm",
        data() {
            return {
                book: this.$store.state.orderedBook,
                name: '',
                email: '',
                phone: '',
                errors: {
                    name: '',
                    email: '',
                    phone: ''
                }
            }
        },
        computed: {
            btnDisabled() {
                return this.name === '' ||
                    this.email === '' ||
                    this.phone === '';
            }
        },
        methods: {
            checkForm() {
                if (this.name.length < 2 || !this.name) {
                    this.errors.name = 'not empty and min 2 character';
                } else {
                    this.errors.name = '';
                }

                let pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;

                if (this.email.search(pattern) !== 0) {
                    this.errors.email = 'Invalid email';
                } else {
                    this.errors.email = '';
                }

                let phonePattern = /\+380[0-9]{9}$/;

                if (this.phone.search(phonePattern) !== 0) {
                    this.errors.phone = 'Invalid phone';
                } else {
                    this.errors.phone = '';
                }
            }
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

    .errors {
        color: red;
        font-size: 12px;
    }

</style>