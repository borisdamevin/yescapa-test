<script setup lang="ts">
const {data: items} = await useAsyncData('items', () => $fetch('/api/items'));
const cars = items.value.results;

const classes = {
    tailwind: {
        main: [
            'max-w-[1920px]',
            'flex',
            'flex-1'
        ]
    }
};

const getCardProps = (item: any) => ({
    title: item.title,
    subtitle: item.vehicle_type,
    price: item.starting_price,
    currency: item.currency_used,
    image: item.pictures[0].url,
    imageAlt: item.title
});
</script>

<template>
    <main :class="classes.tailwind.main">
        <the-grid>
            <the-card v-for="car in cars" :key="car.id" v-bind="getCardProps(car)"/>
        </the-grid>
    </main>
</template>
