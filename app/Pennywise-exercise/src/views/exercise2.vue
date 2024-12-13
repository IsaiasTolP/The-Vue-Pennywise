<template>
    <div>
        <h1>Selecciona el número de globitos</h1>
        <input 
            type="range"
            v-model.number="BalloonCount"
            min="1"
            max="20"
            step="1"
        />
        <p>{{ BalloonCount }}</p>

        <div class="balloon-container">
            <div 
                class="balloon"
                v-for="index in BalloonCount"
                :key="index">
            </div>
        </div>
    </div>
    
    <router-link :to="{ name: 'Home' }">Go back</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

    export default defineComponent ({
        data() {
            return {
                BalloonCount: 1 as number,
            }
        }
    });
</script>

<style scoped>

.balloon-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
}
.balloon {
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
    margin: 5px;
}
</style>