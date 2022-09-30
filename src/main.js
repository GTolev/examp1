import { createApp } from 'vue'
import App from './App.vue'
import "./assets/scss/global.scss"
import router from "./router/index"
import store from "./store";
import i18n from "./i18n.js";
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';


const defaultDocumentTitle = "next-it";

router.afterEach((to) => {
	if (to.meta && to.meta.title) {
		document.title = `${to.meta.title} — ${defaultDocumentTitle}`;
	} else {
		document.title = defaultDocumentTitle;
	}
});

createApp(App).use(router)
		.use(store)
		.use(i18n)
		.use(SetupCalendar, {})
		.component('Calendar', Calendar)
		.component('DatePicker', DatePicker)
		.mount('#app')
