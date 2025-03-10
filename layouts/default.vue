<script setup lang="ts">
const classes = {
    tailwind: [
        'flex',
        'flex-col',
        'items-center',
        'min-h-screen',
        'h-full',
        'w-full'
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
