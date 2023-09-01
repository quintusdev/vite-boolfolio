<script>
import axios from 'axios';
import AppLoader from './AppLoader.vue';
import { store } from '../store';

export default {
    name: 'ContactForm',
    components: {
        AppLoader
    },
    data() {
        return {
            store,
            name: '',
            email: '',
            content: '',
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                content: this.content
            }

            /* pulisco preventivamente l'array degli errori */
            this.errors = {};

            /* effetuiamo la chiamata axios in post */
            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                this.success = response.data.success;
                if (!this.success) {
                    this.errors = response.data.errors;
                }
                else {
                    /* puliamo i dati di input */
                    this.name = '';
                    this.email = '';
                    this.content = '';
                }
                this.loading = false;
            });
        }
    },
}
</script>

<template>
    <div>
        <div class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="text-center">Contatti</h2>
                    </div>
                    <div v-if="success" class="alert alert-success">
                        Messaggio inviato correttamente!
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <form @submit.prevent="sendForm()" class="row">
                            <div class="col-12 col-md-6">
                                <label class="control-label">Nome e Cognome</label>
                                <input type="text" name="name" id="name" v-model="name" placeholder="Nome e Cognome"
                                    class="form-control" :class="errors.name ? 'is-invalid' : ''">
                                <p v-for="(error, index) in errors.name" :key="index" class="text-danger">
                                    {{ error }}
                                </p>
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label">E-Mail</label>
                                <input type="mail" name="email" id="email" v-model="email" placeholder="utente@mail.com"
                                    class="form-control" :class="errors.email ? 'is-invalid' : ''">
                                <p v-for="(error, index) in errors.email" :key="index" class="text-danger">
                                    {{ error }}
                                </p>
                            </div>
                            <div class="col-12">
                                <label class="control-label">Richiesta</label>
                                <textarea type="text" name="content" id="content" v-model="content"
                                    placeholder="Scrivi qui le tue richieste" class="form-control"
                                    :class="errors.content ? 'is-invalid' : ''"></textarea>
                                <p v-for="(error, index) in errors.content" :key="index" class="text-danger">
                                    {{ error }}
                                </p>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-sm btn-success my-5" type="submit" :disabled="loading">
                                    {{ loading ? 'Invio in corso' : 'Invia' }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>