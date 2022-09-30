import { createI18n } from "vue-i18n";

import en from "/src/locales/en/en.js";
import bg from "/src/locales/bg/bg.js";

const defaultLocale = localStorage.getItem('language') ? localStorage.getItem('language'): 'en';

const i18n = createI18n({
    locale: defaultLocale,
    messages: {
        en,
        bg
    },
    fallbackLocale: 'en',
});

export default i18n;
