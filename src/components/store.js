import { reactive } from "vue";
import users from "../db/users.json";

export const store = reactive({
    users: users,
    loggedIn: false,
    currentUser: {},
    dark_mode: true,
    themeChange() {
        this.dark_mode = !this.dark_mode;
    },
});
