
import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';
import App from './App.vue';
import AddBook from './pages/AddBook.vue';
import UpdateBook from './pages/UpdateBook.vue';
import AddAuthor from './pages/AddAuthor.vue'
Vue.config.devtools = true

Vue.use(Router)

new Vue({
	router: new Router({
		routes: [
			{
				name: 'Home',
				path: '/home/*',
				component: Home
			},
			{
				name: 'AddBook',
				path: '/add_book/*',
				component: AddBook
			},
			{
				name: 'UpdateBook',
				path: '/update_book/*',
				component: UpdateBook
			},
			{
				name: 'AddAuthor',
				path: '/add_author/*',
				component: AddAuthor
			},
			{
				path: '/*',
				component: NotFound
			}
		]
	}),
	...App
}).$mount('#app')