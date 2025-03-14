<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import TheTag from '~/components/TheTag.vue';

const {locale} = useI18n();
const currentLocale = ref(locale.value);

const props = defineProps({
    id: Number,
    title: String,
    subtitle: String,
    price: Number,
    currency: String,
    image: String,
    imageAlt: String,
    city: String,
    seats: Number
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
        illustrationTag: [
            'absolute',
            'top-[10px]',
            'right-[10px]'
        ],
        titleWrapper: [
            'flex',
            'flex-1',
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
            'flex',
            'flex-col',
            'p-[20px]'
        ],
        tags: [
            'flex',
            'flex-row',
            'justify-between',
            'mt-[12px]'
        ],
        tagType: [
            'ml-auto'
        ],
        link: [
            'absolute',
            'top-0',
            'left-0',
            'h-full',
            'w-full',
            'z-10'
        ]
    }
};

const themeTag = (color: any) => {
    switch (color) {
        case 'CoachBuilt':
            color = 'green';
            break;
        case 'Van':
            color = 'yellow';
            break;
        case 'Campervan':
            color = 'pink';
            break;
    }

    return color;
};

</script>

<template>
    <div class="card" :class="classes.tailwind.host">
        <figure class="card__illus" :class="classes.tailwind.illustration">
            <img class="card__img" :src="image" :alt="imageAlt">

            <the-tag :class="classes.tailwind.illustrationTag" :text="$t('seats_number', seats)" theme="blue"
                     shape="full"/>
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

            <div :class="classes.tailwind.tags">

                <the-tag :text="city" icon="location-dot" theme="transparent"/>

                <the-tag :class="classes.tailwind.tagType" :text="subtitle" :theme="themeTag(subtitle)"/>
            </div>
        </div>

        <a :class="classes.tailwind.link" :href="'/vehicules/' + id" target="_parent"></a>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/sass/card/styles";
</style>
