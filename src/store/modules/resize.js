const state = {
	sizeWidth: window.innerWidth,
	sizeHeight: window.innerHeight,
	view: "",
};

const getters = {
	sizeWidth: (state) => state.sizeWidth,
	sizeHeight: (state) => state.sizeHeight,
	view: (state) => state.view,
};

const actions = {
	changeSize({commit}, size) {
		commit("SIZE", size);
	},
};

const mutations = {
	SIZE(state, size) {
		state.sizeWidth = size.width;
		state.sizeHeight = size.height;

		if (size.width < '1200') {
			state.view = "mobile"
		}
		else {
			state.view = "desktop";
		}
	},
};

export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations,
};
