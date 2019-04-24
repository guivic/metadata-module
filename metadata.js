export default ({ store }, inject) => {
	store.registerModule('meta', {
		actions: {
			setMeta({ commit }, meta) {
				commit('SET_META', meta);
			},
		},
		mutations: {
			SET_META(state, meta) {
				state.meta = meta;
			},
		},
		getters: {
			getMeta(state) {
				return state.meta;
			},
		},
		state() {
			return {
				meta: {},
			};
		},
	});

	class Meta {
		set(meta) {
			const currentMeta = store.getters.getMeta;
			return store.dispatch('setMeta', Object.assign({}, currentMeta, meta));
		}

		get() {
			return store.getters.getMeta;
		}
	}

	inject('metadata', new Meta());
};