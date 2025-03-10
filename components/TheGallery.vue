<script setup lang="ts">
const props = defineProps({
    images: Object
});
</script>

<template>
    <div class="gallery">
        <img class="gallery__image" :src="image.url" :alt="image.url" :key="image.id"
             v-for="image in images.slice(0, 3)">
    </div>
</template>

<style scoped lang="scss">
@use "../assets/sass/gallery/styles";
</style>
