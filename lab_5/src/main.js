
import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';
import App from './App.vue'
Vue.config.devtools = true

Vue.use(Router)

new Vue({
	router: new Router({
		routes: [
			{
				name: 'Home',
				path: '*/home/*',
				component: Home
			},
			{
				path: '/*',
				component: NotFound
			}
		]
	}),
	...App
}).$mount('#app')