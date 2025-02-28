<script setup lang="ts">
const {data: items} = await useAsyncData('items', () => $fetch('/api/items'));
const cars = items.value.results;
</script>

<template>
    <div>
        <ul>
            <li v-for="car in cars" :key="car.id">{{ car.title }}</li>
        </ul>
    </div>
</template>
