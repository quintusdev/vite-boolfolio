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
      loading: true,
      maxNumChar: 60
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
      })
    },
    truncateText(text) {
      if (text.length > this.maxNumChar) {
        return text.substr(0, this.maxNumChar) + '...';
      }

      return text;
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-12">
      <h1 class="text-center text-blue"><strong><em>BOOLFOLIO</em></strong></h1>
    </div>
    <AppLoader v-if="loading" />
    <div v-else class="container">
      <div class="row">
        <div class="col-12 col-md-3 my-1 min-height-200px" v-for="post in posts" :key="post.id">
          <div class="card">
            <div class="card-header">
              {{ post.title }}
            </div>
            <div class="card-image-top">
              <img :src="`${baseUrl}/storage/${post.image}`" class="img-fluid" alt="Immagine del post">
            </div>
            <div class="card-body">
              <p>
                <span v-if="post.type"><strong><em>{{ post.type.name }}</em></strong></span>
                <span v-else><strong><em>Tipologia non assegnata</em></strong></span>
              </p>
              <p v-if="post.tecnologies">
                <span class="badge text-bg-primary me-3" v-for="tecnology in post.tecnologies" :key="tecnology.id">
                  {{ tecnology.name }}
                </span>
              </p>
              {{ truncateText(post.content) }}
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-sm btn-primary">Mostra Post</a><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.min-height-200px {
  min-height: 200px !important;
}
</style>
