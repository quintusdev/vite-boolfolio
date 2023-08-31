<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  }
}

</script>

<template>
  <AppHeader />
  <!-- COLLEGAMENTO ALLA PAGINA MAIN ATTRAVERSO ROUTER VIEWS -->
  <router-view></router-view>
</template>

<style lang="scss">
@use'./styles/generals.scss' as *;
</style>
