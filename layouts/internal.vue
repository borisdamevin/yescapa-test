<script setup lang="ts">
import LayoutDefault from '~/layouts/default.vue'

const classes = {
    main: {
        tailwind: [
            'flex',
            'container'
        ]
    }
};
</script>

<template>
    <LayoutDefault>
        <the-header/>

        <main :class="classes.main.tailwind">
            <slot/>
        </main>

        <the-footer/>
    </LayoutDefault>
</template>

<style scoped lang="scss">

</style>
