import { nanoid } from "nanoid";

const menuItems = [
    {
        id: nanoid(),
        to: "/register",
        text: "Register",
        private: false,
    },
    {
        id: nanoid(),
        to: "/login",
        text: "Login",
        private: false,
    },
];

export default menuItems;