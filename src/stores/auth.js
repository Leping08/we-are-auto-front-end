import { defineStore } from 'pinia'
import axios from "axios"
import api from "@/api/auth/index.js"

const BACKEND_URL = `${import.meta.env.VITE_APP_BACKEND_URL}/api`;

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem("access_token") || null,
    }),
    getters: {
        isAdmin(state) {
            return state?.user?.role === "admin";
        },
        isAuthenticated(state) {
            return state.token ? true : false;
        }
    },
    actions: {
        async login(data) {
            return await axios.post(`${BACKEND_URL}/login`, data);
        },
        async setUser() {
            if (!localStorage.getItem("access_token")) {
                return;
            }

            try {
                refreshHeaders();
                const response = await api.get("/user/me");
                this.user = response.data;
            } catch (error) {
                throw new Error(error);
            }
        },
        async setToken(token) {
            localStorage.setItem("access_token", token); //Set the token in local storage
            this.token = token;
        },
        async logout() {
            try {
                await api.post(`${BACKEND_URL}/logout`); //Make api call to invalidate backend tokens through Laravel passport
            } catch (error) {
                throw new Error(error);
            }
            this.user = null; //Remove the user object from store
            this.token = null; //Remove the token from store
            localStorage.removeItem("access_token"); //Remove the token from the store
        },
        async register(data) {
            try {
                return await api.post("/register", data);
            } catch (error) {
                throw new Error(error);
            }
        },
    }
})