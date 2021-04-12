
import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';
import App from './App.vue';
import AddBook from './pages/AddBook.vue';
import Books from './pages/Books.vue'
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
				path: '/*',
				component: NotFound
			},
			{
				name: 'Books',
				path: '/books/*',
				component: Books
			},
		]
	}),
	...App
}).$mount('#app')