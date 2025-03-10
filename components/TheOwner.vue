<script setup lang="ts">
const props = defineProps({
    name: String,
    language: String,
    image: String
});
</script>

<template>
    <div class="owner">
        <the-avatar :image="image" :alt="name"/>

        <div class="owner__content">
            <h3 class="owner__name">{{ name }}</h3>

            <h4 class="owner__language">{{ language }}</h4>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/sass/owner/styles";
</style>
