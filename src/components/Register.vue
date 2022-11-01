<script>
import { store } from "./store";

export default {
    data() {
        return {
            registerName: "",
            registerPw: "",
        };
    },
    methods: {
        register() {
            let users = store.users;

            let registerCredentials = {
                name: this.registerName,
                password: this.registerName,
            };
            let registerSpan = document.querySelector("#register-msg");

            // Check if name already exists
            for (let id in users) {
                if (users[id].name === this.registerName) {
                    registerSpan.innerText = "Given name is already taken";
                    return;
                }
            }

            // Turn users object into an array
            let usersIds = Object.keys(users);

            // Find highest index to continue from
            let highestId = 0;
            for (let idNr in usersIds) {
                if (+usersIds[idNr] >= highestId) {
                    highestId = usersIds[idNr];
                }
            }
            // Increment highest ID by 1
            highestId++;

            return;

            // Write to db
            // Dont have one, using JSON file. Cannot write to local files
            // using JS.

            // Successful registration
            store.currentUser = {
                id: registerCredentials.id,
                name: registerCredentials.user.name,
            };
            store.loggedIn = true;
            this.$router.push({ path: "/" });

            // Clear initial credentials
            this.registerName = "";
            this.registerPw = "";
            registerCredentials = "none";
        },
    },
};
</script>

<template>
    <h2>Register</h2>

    <div class="register-form">
        <label>
            Name
            <input type="text" v-model="registerName" />
        </label>

        <label>
            Password
            <input type="text" v-model="registerPw" />
        </label>

        <button type="submit" @click="register">Register</button>
        <span id="register-msg"></span>
    </div>
</template>

<style lang="scss">
.register-form {
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

    #register-msg {
        margin: 14px 0;
        padding: 4px;

        text-align: center;
        font-size: 1.1rem;
        color: red;
    }
}
</style>
