<script setup lang="ts">
import { useRoute } from 'vue-router';

type Item = {
    id: number;
    name: string
};

const {data} = await useFetch<Item[]>('/api/items');

const route = useRoute();
const id = ref(Number(route.params.id));
const item = computed(() => data.value?.results?.find(item => item.id === id.value));

const classes = {
    host: {
        tailwind: [
            'grid',
            'grid-cols-8',
            'gap-[40px]',
            'w-full'
        ]
    },
    section: {
        tailwind: [
            'grid',
            'grid-cols-subgrid',
            'grid-rows-subgrid',
            'col-span-5'
        ]
    },
    owner: {
        tailwind: [
            'col-span-3'
        ]
    },
    aside: {
        tailwind: [
            'col-span-3'
        ]
    }
};

const getOwnerProps = (item: any) => ({
    name: item.vehicle_owner_first_name,
    language: item.vehicle_owner_language,
    image: item.vehicle_owner_picture_url
});

definePageMeta({
    layout: 'internal'
});
</script>

<template>
    <div :class="classes.host.tailwind">
        <section :class="classes.section.tailwind">
            <the-owner :class="classes.owner.tailwind" v-bind="getOwnerProps(item)"/>
        </section>

        <aside :class="classes.aside.tailwind">
            Aside
        </aside>
    </div>
</template>

<style scoped lang="scss">

</style>
