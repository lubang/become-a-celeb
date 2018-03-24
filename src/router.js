import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import MyHistory from './views/MyHistory.vue';
import Contacts from './views/Contacts.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/history',
      name: 'MyHistory',
      component: MyHistory,
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
    },
  ],
});
