<script setup>
// import { store } from "./store";

// let userName = "";
// let userPw = "";

// function login() {
//     console.log(userName);
//     console.log(userPw);
// }
</script>

<script>
import { store } from "./store";

export default {
    data() {
        return {
            userName: "",
            userPw: "",
        };
    },
    methods: {
        login() {
            let userCredentials = "none";
            let loginSpan = document.querySelector("#login-msg");

            // Create copy of users
            let users = store.users;

            for (let id in users) {
                if (users[id].name === this.userName) {
                    userCredentials = {
                        id: id,
                        user: users[id],
                    };
                }
            }

            if (userCredentials !== "none") {
                if (this.userPw === userCredentials.user.password) {
                    // Login success
                    loginSpan.innerText = "Login successful";
                    store.currentUser = {
                        id: userCredentials.id,
                        name: userCredentials.user.name,
                    };
                    store.loggedIn = true;
                    this.$router.push({ path: "/" });
                } else {
                    // Login failure
                    loginSpan.innerText = "Wrong password";
                }
            } else {
                loginSpan.innerText = "No account with that name";
            }

            // console.log(userCredentials);

            // Clear initial credentials
            this.userName = "";
            this.userPw = "";
            userCredentials = "none";
        },
    },
};
</script>

<template>
    <h2>Login</h2>

    <div class="login-form">
        <label>
            Name
            <input type="text" v-model="userName" />
        </label>

        <label>
            Password
            <input type="text" v-model="userPw" />
        </label>

        <button type="submit" @click="login">Login</button>
        <span id="login-msg"></span>
    </div>
</template>

<style lang="scss">
.login-form {
    display: flex;
    flex-direction: column;

    label {
        margin: 8px 0;

        display: flex;
        flex-direction: column;

        input {
            margin-top: 4px;
            border: none;
        }
    }

    button {
        margin-top: 12px 0;
        padding: 4px 0;

        font-size: 1.4rem;
        border: none;
    }

    #login-msg {
        margin: 14px 0;
        padding: 4px;

        text-align: center;
        font-size: 1.1rem;
        color: red;
    }
}
</style>
