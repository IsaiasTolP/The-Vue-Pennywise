<template>
    <div>
        <h1>El juego de Pennywise</h1>
        <p>Ejercicios</p>
        <ul>
            <li><router-link :to="{ name: 'Exercise1' }">Ejercicio 1</router-link></li>
            <li><router-link :to="{ name: 'Exercise2' }">Ejercicio 2</router-link></li>
            <li><router-link :to="{ name: 'Exercise3' }">Ejercicio 3</router-link></li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Home',
    }
</script>