<script setup lang="ts">
const classes = {
    tailwind: [
        'flex',
        'min-h-screen',
        'h-full',
        'w-full',
        'justify-center'
    ]
};
</script>

<template>
    <div :class="classes.tailwind">
        <slot/>
    </div>
</template>

<style module lang="scss">

</style>
