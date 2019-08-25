<template>
    <div class="container search-block">
        <div class="row">
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Search book">
                {{ $store.state }}
            </div>
            <div class="col-md-2">
                <button
                        class="btn btn-primary btn-block"
                        @click="initBooks">Send
                </button>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-2"><i class="fas fa-shopping-cart"></i></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        methods: {
            initBooks() {
                this.$store.dispatch('initBooks');
            }
        }
    }
</script>

<style scoped>

</style>