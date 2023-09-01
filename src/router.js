/* importo i metodi CREATEROUTER  e CREATEWEBHISTORY da vue router*/
import { createRouter, createWebHistory } from 'vue-router';

/* importo le componenti che rappresentano le pagine */
import HomePage from "./pages/HomePage.vue";
import PostList from "./pages/PostList.vue";
import ContactUs from "./pages/ContactUs.vue";

/* creiamo il router */
const router = createRouter({
    history: createWebHistory(), /* usiamo la history di Vue Router perchè è più veloce*/
    routes: [
        /* imposto la rotta per la homepage */
        { path: '/', name: "home", component: HomePage },
        /* imposto la rotta per la lista dei posts */
        { path: '/posts', name: "posts", component: PostList },
        /* imposto la rotta per la pagina contatti */
        { path: '/contacts', name: "contacts", component: ContactUs }
    ]
});

export { router }