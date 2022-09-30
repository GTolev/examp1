const state = {
	isLoader: false,
};

const getters = {
	loader: (state) => state.isLoader,
};
const mutations = {
	TOGGLE_LOADER: (state, value) => {
		state.isLoader = value;
	},
};

const actions = {
	toggleLoader({commit}, value) {
		commit("TOGGLE_LOADER", value);
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
