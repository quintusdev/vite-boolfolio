<script>
import { store } from '../store';

export default {
    name: "PostCard",
    props: {
        post: Object,
    },
    data() {
        return {
            store,
            maxNumChar: 60
        }
    },
    methods: {
        /* FUNZIONE PER TRONCARE IL TESTO DOPO X CARATTERI */
        truncateText(text) {
            if (!text) {
                return text;
            }
            /* SE I CARATTERTI SONO > DELLA VARIABILE IMPOSTATA */
            if (text.length > this.maxNumChar) {
                /* RITORNA SOLO LA PRIMA PARTE E L'ULTIMO CHAR DI MAXNUMCHAR + ...*/
                return text.substr(0, this.maxNumChar) + '...';
            }
            /* RITORNO IL TESTO CON I TRE PUNTINI */
            return text;
        }
    },
}
</script>
<template>
    <div class="card">
        <div class="card-header">
            {{ post.title }}
        </div>
        <div class="card-image-top">
            <img :src="`${store.baseUrl}/storage/${post.image}`" class="img-fluid" alt="Immagine del post">
        </div>
        <!-- sezione tipologia -->
        <div class="card-body">
            <p>
                <span v-if="post.type"><strong><em>{{ post.type.name }}</em></strong></span>
                <span v-else><strong><em>Tipologia non assegnata</em></strong></span>
            </p>
            <!-- sezione tecnologia usata -->
            <p v-if="post.tecnologies">
                <span class="badge text-bg-primary me-3" v-for="tecnology in post.tecnologies" :key="tecnology.id">
                    {{ tecnology.name }}
                </span>
            </p>
            <!-- paragarfo del testo -->
            {{ truncateText(post.content) }}
        </div>
        <div class="card-footer">
            <a href="#" class="btn btn-sm btn-primary">Mostra Post</a><br />
        </div>
    </div>
</template>
<style lang="">
    
</style>