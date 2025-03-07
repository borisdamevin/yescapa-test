export default defineI18nConfig(() => ({
    locale: 'fr',
    numberFormats: {
        en: {
            currency: {
                style: 'currency',
                currency: 'USD',
                notation: 'standard',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }
        },
        fr: {
            currency: {
                style: 'currency',
                currency: 'EUR',
                notation: 'standard',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }
        }
    },
    messages: {
        en: {
            'from_this_price': 'from'
        },
        fr: {
            'from_this_price': 'à partir de'
        }
    }
}));
