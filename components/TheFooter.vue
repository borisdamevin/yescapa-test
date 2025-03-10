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
    <footer class="footer" :class="classes.host.tailwind">
        <span class="placeholder">Footer</span>
    </footer>
</template>

<style scoped lang="scss">
@use "../assets/sass/footer/styles";

.placeholder {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 600;
    color: #eaeaea;
}
</style>
