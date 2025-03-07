<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const {locale} = useI18n();
const currentLocale = ref(locale.value);

const props = defineProps({
    title: String,
    subtitle: String,
    price: Number,
    currency: String,
    image: String,
    imageAlt: String
});

const classes = {
    tailwind: {
        host: [
            'flex',
            'flex-col',
            'overflow-hidden',
            'z-10'
        ],
        illustration: [
            'flex-1',
            'overflow-hidden',
            'relative',
            'z-5'
        ],
        titleWrapper: [
            'flex',
            'flex-row'
        ],
        title: [
            'w-full'
        ],
        price: [
            'flex',
            'w-full',
            'max-w-[80px]',
            'flex-col',
            'justify-start',
            'ml-[10px]',
            'text-right'
        ],
        content: [
            'p-[20px]'
        ],
        subtitle: [
            'mt-[12px]'
        ]
    }
};
</script>

<template>
    <div class="card" :class="classes.tailwind.host">
        <figure class="card__illus" :class="classes.tailwind.illustration">
            <img class="card__img" :src="image" :alt="imageAlt">
        </figure>

        <div :class="classes.tailwind.content">
            <div :class="classes.tailwind.titleWrapper">
                <h2 class="card__title" :class="classes.tailwind.title">{{ title }}</h2>

                <div class="card__price" :class="classes.tailwind.price">
                    <span class="card__price-text">{{ $t('from_this_price') }}</span>

                    <span class="card__price-label">
                        {{
                            $n(Number(price), 'currency', currentLocale, {
                                currency: currency
                            })
                        }}
                    </span>
                </div>
            </div>

            <h3 class="card__subtitle" :class="classes.tailwind.subtitle">{{ subtitle }}</h3>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/sass/card/styles";
</style>
