<template>
    <div>
        <h1>Eventos Malditos en Derry</h1>
        <label for="event-type">Filtrar por tipo de evento:</label>
        <select v-model="selectedType" id="event-type">
            <option value="all">Todos</option>
            <option value="muertes">Muertes</option>
            <option value="desapariciones">Desapariciones</option>
            <option value="fenomenos">Fenómenos Paranormales</option>
        </select>
        <button @click="resetFilter">Reiniciar Filtro</button>

        <div v-if="!selectedEvent">
            <ul>
                <li v-for="event in filteredEvents" :key="event.id" @click="showDetails(event)">
                    {{ event.type }}: {{ event.description }}
                </li>
            </ul>
        </div>
        <div v-show="selectedEvent">
            <h2>Detalles del Evento</h2>
            <slot name="event-details" :event="selectedEvent">
                <p v-if="selectedEvent"><strong>Tipo:</strong> {{ selectedEvent.type }}</p>
                <p v-if="selectedEvent"><strong>Descripción:</strong> {{ selectedEvent.description }}</p>
                <p v-if="selectedEvent"><strong>Fecha:</strong> {{ selectedEvent.date }}</p>
                <p v-if="selectedEvent"><strong>Víctimas:</strong> {{ selectedEvent.victims.join(', ') }}</p>
            </slot>
            <button @click="selectedEvent = null">Volver a la lista</button>
        </div>
    </div>
    <router-link :to="{ name: 'Home' }">Go back</router-link>
</template>

<script>
    export default {
        data() {
            return {
                events: [
                    { id: 1, type: 'muertes', description: 'Muerte misteriosa en el lago', date: '1985-06-15', victims: ['John Doe'] },
                    { id: 2, type: 'desapariciones', description: 'Desaparición de un niño en el bosque', date: '1990-08-20', victims: ['Billy'] },
                    { id: 3, type: 'fenomenos', description: 'Luces extrañas en el cielo', date: '2000-12-01', victims: [] },
                    { id: 4, type: 'muertes', description: 'Incendio en la casa de la colina', date: '1975-03-10', victims: ['Jane Doe', 'Tom'] },
                    { id: 5, type: 'desapariciones', description: 'Grupo de adolescentes desaparece', date: '2010-07-25', victims: ['Alice', 'Bob', 'Charlie'] },
                ],
            selectedType: 'all',
            selectedEvent: null,
        };
    },
    computed: {
        filteredEvents() {
            if (this.selectedType === 'all') {
                return this.events;
            }
            return this.events.filter(event => event.type === this.selectedType);
        },
    },
    methods: {
        showDetails(event) {
            this.selectedEvent = event;
        },
        resetFilter() {
            this.selectedType = 'all';
            this.selectedEvent = null;
        },
    },
};
</script>

<style scoped>
h1 {
    color: #ff0000;
}
ul {
    list-style-type: none;
}
li {
    cursor: pointer;
    margin: 5px 0;
}
li:hover {
    text-decoration: underline;
}
</style>

