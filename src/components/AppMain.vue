<script>
export default {
  name: 'AppMain',
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
        /* importo i risultati contenuto nell'APi */
        this.posts = response.data.results.data;
        /* imposto il loading a false */
        this.loading = false;
      })
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-12">
      <h1 class="text-center">I nostri Progetti</h1>
    </div>
  </div>
</template>

<style></style>
