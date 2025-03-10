<script setup lang="ts">
const props = defineProps({
    image: String,
    alt: String
});
</script>

<template>
    <div class="avatar">
        <img class="avatar__image" :src="image" :alt="alt">
    </div>
</template>

<style scoped lang="scss">
@use "../assets/sass/avatar/styles";
</style>
