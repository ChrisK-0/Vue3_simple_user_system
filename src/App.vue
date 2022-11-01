<script setup>
import { onMounted } from "vue";
import { store } from "./components/store";

import { useRouter } from "vue-router";
const router = useRouter();

function themeChange() {
    store.themeChange();
}

function logOut() {
    store.loggedIn = false;
    store.currentUser = {};
    router.push({ path: "/login" });
}

onMounted(() => {
    if (!store.loggedIn) {
        router.push({ path: "/login" });
    }
});
</script>

<template>
    <div :class="store.dark_mode ? '' : 'light'">
        <div class="nav">
            <div class="nav-links" v-if="store.loggedIn">
                <router-link to="/">Home</router-link>
                <router-link to="/profile">Profile</router-link>
                <button @click="logOut">Logout</button>
            </div>
            <div class="nav-links" v-if="!store.loggedIn">
                <router-link to="/login">Login</router-link>
                <router-link to="/register">Register</router-link>
            </div>
            <div class="nav-theme">
                <button
                    id="themeBtn"
                    type="button"
                    @click="themeChange"
                    :class="store.dark_mode ? 'dark' : 'light'"
                >
                    {{ store.dark_mode ? "Dark" : "Light" }}
                </button>
            </div>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
