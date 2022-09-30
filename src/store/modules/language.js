const state = {
	locales: ["en", "bg"],
	language: "en",
};

const getters = {
	language: (state) => state.language,
};

const actions = {
	async changeLanguage({commit}, payload) {
		commit("CHANGE", payload);
		localStorage.setItem('language', payload)
	},
};

const mutations = {
	CHANGE(state, payload) {
		if (state.locales.indexOf(payload) !== -1) {
			state.language = payload;
			localStorage.setItem('language', payload)
		} else state.language = "en";
	},
};

export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations,
};
