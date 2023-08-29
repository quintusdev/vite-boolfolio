<script>
import AppLoader from './AppLoader.vue';
import axios from 'axios';

export default {
  name: 'AppMain',
  components: { AppLoader },
  data() {
    return {
      baseUrl: 'http://localhost:8000',
      posts: [],
      loading: true
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.loading = true;
      /* chiamata AXIOS inserendo il baseUrl e il rimanente indirizzo alla pagina */
      axios.get(`${this.baseUrl}/api/posts`).then((response) => {
        /* importo i risultati contenuto nell'APi */
        this.posts = response.data.results.data;
        /* imposto il loading a false */
        this.loading = false;
      });
    }
  },
}
</script>

<template>
  <div class="row">
    <div class="col-12">
      <h1 class="text-center">BOOLFOLIO</h1>
      <p v-if="!loading" class="text-center"><strong>{{ posts }}</strong></p>
    </div>
    <AppLoader v-if="loading" />
    <div v-else class="container">
      <div class="row">
        <div class="col-12" v-for="post in posts" :key="post.id">
          <div class="card">
            <div class="card-image-top">
              <img :src="`${baseUrl}/${post.img}`" class="img-fluid" alt="Immagine del post">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
