<template>
    <div id="app">
        <h1 class="app-title">{{ $store.state.title }}</h1>

        <div id="nav">
            <router-link to="/">Home</router-link>            |
            <router-link to="/about">Cart</router-link>
        </div>
        <router-view/>
    </div>
</template>

