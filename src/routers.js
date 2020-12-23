//default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import PageListFilms from '@/pages/PageListFilms'
import PageFilm from '@/pages/PageFilm'
import NotFound from '@/pages/404'

//Routering
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'list-films',
			component: PageListFilms
		},
		{
			path: '/film/:id',
			name: 'film',
			component: PageFilm
		},
		{
			path: '/film',
			redirect: "/"
		},
		{
			path: '*',
			name: 'notFound',
			component: NotFound
		}
	]
})