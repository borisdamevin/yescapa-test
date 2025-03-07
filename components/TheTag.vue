<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
    text: String,
    icon: String,
    theme: String
});

const classes = {
    host: {
        theme: {
            'tag--green': props.theme === 'green',
            'tag--yellow': props.theme === 'yellow',
            'tag--pink': props.theme === 'pink',
            'tag--transparent': props.theme === 'transparent'
        },
        tailwind: {
            'px-[10px]': props.theme !== 'transparent',
            'py-[4px]': true
        }
    },
    icon: {
        tailwind: [
            'mr-[8px]'
        ]
    }
};
</script>

<template>
    <div class="tag" :class="[classes.host.theme, classes.host.tailwind]">
        <font-awesome-icon class="tag__icon" :class="classes.icon.tailwind" :icon="['fas', icon]" v-if="icon"/>

        <span>{{ text }}</span>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/sass/tag/styles";
</style>
