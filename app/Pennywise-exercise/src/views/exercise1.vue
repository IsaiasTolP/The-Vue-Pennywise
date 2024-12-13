<template>
    <div id="image-gallery">
        <h1>Elige una imagen del payaso asesino</h1>
        <div id="image-list">
            <img v-for="(image, index) in images"
                :key="index"
                :src="image"
                :alt="'Imagen Pennywise ' + (index + 1)"
                class="image"
                :class="{ 'fav': favImgIdx === index }"
                @click="selectFavImg(index)"
            />
        </div>
        <div v-if="favImgIdx !== null">
            <p>Tu Pennywise favorito es el de la imagen nº {{ favImgIdx + 1 }}</p>
            <form @submit.prevent="saveAlias">
                <input type="text" v-model="alias" placeholder="Añada un alias a la imagen seleccionada">
                <button type="submit">Guardar alias</button>
                <p v-if="aliases[favImgIdx]">Pennywise alias: {{ aliases[favImgIdx] }}</p>
            </form>
        </div>
        <div v-else>
            <p>Haz click en una imagen para seleccionarla como favorita</p>
        </div>
    </div>
    <router-link :to="{ name: 'Home' }">Go back</router-link>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                favImgIdx: null,
                alias: '',
                aliases: [],
                images: [
                    'https://hips.hearstapps.com/hmg-prod/images/it-2017-con-bill-skarsgard-como-pennywise-1603103558.jpg?crop=0.75xw:1xh;center,top&resize=1200:*',
                    'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/it/it-pennywise/136716092-3-esl-ES/It-Vuelve-Pennywise-el-payaso-mas-aterrador.jpg?resize=640:*',
                    'https://cdn.artphotolimited.com/images/64e8c732bd40b83013471dde/300x300/pennywise-shhh.jpg',
                    'https://frikipolis.com/wp-content/uploads/2024/03/pennywise-it-sideshow5.jpg'
                ]
            }
        },
        methods: {
            selectFavImg(index: number) {
                this.favImgIdx = index;
                this.alias = this.aliases[index] || '';
            },
            saveAlias() {
                if (this.favImgIdx !== null) {
                    this.aliases[this.favImgIdx] = this.alias;
                    this.alias = '';
                }
            }
        }
    }
</script>

<style scoped>
    .image {
        width: 300px;
        height: 300px;
        margin: 10px;
    }
    .fav {
        border: 2px solid red;
    }
</style>