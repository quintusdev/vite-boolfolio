/* importo i metodi CREATEROUTER  e CREATEWEBHISTORY da vue router*/
import { createRouter, createWebHistory } from 'vue-router';

/* importo le componenti che rappresentano le pagine */
import HomePage from "./pages/HomePage.vue";
import PostList from "./pages/PostList.vue";

/* creiamo il router */
const routes = createRouter({
    history: createWebHistory(), /* usiamo la history di Vue Router perchè è più veloce*/
    routes: [
        /* imposto la rotta per la homepage */
        { path: '/', name: "home", component: HomePage },
        /* imposto la rotta per la lista dei posts */
        { path: '/posts', name: "posts", component: PostList }
    ]
});

export { router }