import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import axios from "axios"

export default new Vuex.Store({
	state: {
		listFilms: null,
		activeFilm: null
	},
	mutations: {
		setFilms (state, films) {
			state.listFilms = films
		},
		setActiveFilm (state, activeFilm) {
			state.activeFilm = activeFilm
		},
	},
	actions: {
		setFilms({commit}, films) {
			axios
      		.get('https://floating-sierra-20135.herokuapp.com/api/movies')
      		.then(response => {
				let films = response.data.data;
				commit('setFilms', films)
      		});
		},
		setSortedFilms({commit}, sortedFilms) {
			commit('setFilms', sortedFilms)
		},
		setActiveFilm({commit}, activeFilm) {
			console.log(activeFilm)
			commit('setActiveFilm', activeFilm)
		}
	},
	getters: {
		getListFilms: (s) => s.listFilms,
		getActiveFilm: (s) => s.activeFilm,
	}
})