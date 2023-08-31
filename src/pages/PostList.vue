<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';
import PostCard from '../components/PostCard.vue';

export default {
  name: 'PostList',
  components: { AppLoader, PostCard },
  data() {
    return {
      baseUrl: 'http://localhost:8000',
      posts: [],
      loading: true,
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
        /* SE IL DATA.SUCCESS E' TRUE  */
        if (response.data.success) {
          /* VISUALIZZO I POST DALLA API E IMPOSTO IL LOADER A FALSE */
          this.posts = response.data.results;
          this.loading = false;
        }
      })
    },

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
          <PostCard :post="post" />
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
