import Vue, { AsyncComponent } from 'vue';
import Router, { RouteConfig } from 'vue-router';
import Meta from 'vue-meta';

const index: AsyncComponent = (): any =>
  import('@/views/index.vue');

const cachemoment: AsyncComponent = (): any =>
  import('@/views/projects/cachemoment/cachemoment.vue');
const presen: AsyncComponent = (): any =>
  import('@/views/projects/presen/presen.vue');
const designerandstudio: AsyncComponent = (): any =>
  import('@/views/projects/designerandstudio/designerandstudio.vue');
const smartisanweb: AsyncComponent = (): any =>
  import('@/views/projects/smartisanweb/smartisanweb.vue');

Vue.use(Router);
Vue.use(Meta);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/projects/cachemoment',
    name: 'cachemoment',
    component: cachemoment,
  },
];

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes,
});

export default router;