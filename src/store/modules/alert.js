const state = {
	alert: null,
	path: "",
};

const getters = {
	alert: (state) => state.alert,
};

const actions = {
	changeSuccessAlert({commit}, alert) {
		commit("ALERT_SUCCESS", alert);
	},

	clearSuccessAlert({commit}) {
		commit("ALERT_SUCCESS", null);
	}
};

const mutations = {
	ALERT_SUCCESS(state, alert) {
		state.alert = alert;
	},
};

export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations,
};
