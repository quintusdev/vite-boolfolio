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
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.loading = true;
      /* chiamata AXIOS inserendo il baseUrl e il rimanente indirizzo alla pagina */
      axios.get(`${this.baseUrl}/api/posts`).then((response) => {
        if (response.data.success) {
          this.posts = response.data.results;
          this.loading = false;
        }
      });
    }
  },
}
</script>

<template>
  <div class="row">
    <div class="col-12">
      <h1 class="text-center">BOOLFOLIO</h1>
    </div>
    <AppLoader v-if="loading" />
    <div v-else class="container">
      <div class="row">
        <div class="col-12" v-for="post in posts" :key="post.id">
          <div class="card">
            <div class="card-header">
              {{ post.title }}
            </div>
            <div class="card-image-top">
              <img :src="`${baseUrl}/storage/${post.image}`" class="img-fluid" alt="Immagine del post">
            </div>
            <div class="card-body">
              {{ post.content }}
            </div>
            <div class="card-footer">
              <a href="#" @click="$emit('showPost', post)" class="btn btn-sm btn-primary">Mostra Post</a><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
