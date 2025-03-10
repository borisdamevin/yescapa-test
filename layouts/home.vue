<script setup lang="ts">
import LayoutDefault from '~/layouts/default.vue'

const classes = {
    header: {
        tailwind: [
            'mb-[20px]',
        ]
    },
    main: {
        tailwind: [
            'flex',
            'flex-1',
            'container'
        ]
    },
    footer: {
        tailwind: [
            'mt-[20px]',
        ]
    }
};
</script>

<template>
    <LayoutDefault>
        <the-header :class="classes.header.tailwind"/>

        <main :class="classes.main.tailwind">
            <slot/>
        </main>

        <the-footer :class="classes.footer.tailwind"/>
    </LayoutDefault>
</template>

<style scoped lang="scss">

</style>
