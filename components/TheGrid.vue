<script setup lang="ts">
const classes = {
    tailwind: [
        'grid',
        'grid-cols-4',
        'gap-[20px]',
        'w-full'
    ]
};
</script>

<template>
    <div :class="classes.tailwind">
        <slot/>
    </div>

</template>

<style scoped lang="scss">

</style>
