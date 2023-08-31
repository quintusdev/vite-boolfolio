<script>
export default {
    name: AppHeader,
    data() {
        return {
            logo: "https://pixabay.com/it/vectors/fiamma-fuoco-vector-logo-disegno-1964066/",
        }
    },
}
</script>

<template>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!-- LINK HOMEPAGE -->
                    <li class="nav-item" v-for="item in menuItems" :key="index">
                        <a class="nav-link" href="#">{{ item.label }}</a>
                    </li>
                </ul>
                <!-- BARRA DI RICERCA -->
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style lang="">
    
</style>