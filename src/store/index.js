import {createStore} from "vuex";
import alert from "./modules/alert";
import loader from "./modules/loader";
import notice from "./modules/notification";
import language from "./modules/language";
import resize from "./modules/resize";

export default createStore({
	modules: {
		alert,
		resize,
		language,
		loader,
		notice,
	},
	strict: process.env.NODE_ENV !== 'production',
});
