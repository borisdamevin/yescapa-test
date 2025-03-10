<script setup lang="ts">
const classes = {
    host: {
        tailwind: [
            'flex',
            'justify-center',
            'items-center'
        ]
    },
};
</script>

<template>
    <header class="header" :class="classes.host.tailwind">
        <span class="placeholder">Header</span>
    </header>
</template>

<style scoped lang="scss">
@use "../assets/sass/header/styles";

.placeholder {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 600;
    color: #eaeaea;
}
</style>
