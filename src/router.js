import { createRouter, createWebHistory } from 'vue-router';
import LoginView from './views/LoginView.vue';
import HomeView from './views/HomeView.vue';
import ForgetView from './views/ForgetView.vue';
import AppEmailBody from './components/AppEmailBody.vue';
import AppEmailBodyDefault from './components/AppEmailBodyDefault.vue';
import NotFoundView from './views/NotFoundView.vue';
//import MailView from './views/MailView.vue';
const MailView = () => import('./views/MailView.vue'); // если заменить импорт на динамический, компонент будет загружаться только при переходе к нему

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: LoginView,
      alias: '/',
    },
    {
      path: '/home',
      name: 'home', // псевдоним для пути
      component: HomeView,

      beforeEnter() { // вызывается перед переходом на эту страницу, можно добавить какие-то действия
        // console.log('before enter');
      },
    },
    {
      path: '/mail',
      component: MailView,
      children: [
        {
          path: ':mailId',
          component: AppEmailBody,
          props: true, // вместо route.params.mailId делает параметры пропсами defineProps(['mailId']);
        },
        {
          path: '',
          name: 'mail',
          component: AppEmailBodyDefault,
        },
      ],
    },
    {
      path: '/forget',
      component: ForgetView,
      meta: {
        cantEnter: true, // пример, добавлены данные для защиты маршрута
      },
    },
    {
      path: '/:pathMatch(.*)*', // несуществующий маршрут, можно перенаправить на существующий: redirect: '/login', или на свою страницу 404. вместо pathMatch можно указать другое имя или без имени '/:(.*)*'
      component: NotFoundView,
    },
  ],
});

// защита маршрута проверкой meta
router.beforeEach(async (to, from) => { // вызывается при каждом переходе в приложении
  // console.log('before each');
  if (to.meta.cantEnter) {
    return { name: 'home' }; // если нет псевдонима то указать путь { path: '/home'}. можно указать return false, тогда не будет перехода и останется на той же странице
  }
});

export default router;
