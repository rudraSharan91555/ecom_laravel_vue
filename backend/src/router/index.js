import {createRouter, createWebHistory} from "vue-router";
import AppLayout from '../components/AppLayout.vue'
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Products from "../views/Products.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store";

const routes = [
  {
    path: '/app',
    name: 'app',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'app.dashboard',
        component: Dashboard
      },
      {
        path: 'products',
        name: 'app.products',
        component: Products
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/request-password',
    name: 'requestPassword',
    component: RequestPassword,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/reset-password/:token',
    name: 'resetPassword',
    component: ResetPassword,
    meta: {
      requiresGuest: true
    }
  },
    // {
    //   path: '/:pathMatch(.*)',
    //   name: 'notfound',
    //   component: NotFound,
    // }
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFound,
    }
    
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   if (to.meta.requiresAuth && !store.state.user.token) {
//     next({name: 'login'})
//   } else if (to.meta.requiresGuest && store.state.user.token) {
//     next({name: 'app.dashboard'})
//   } else {
//     next();
//   }

// })

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.user.token;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "login" });
  } else if (to.meta.requiresGuest && isAuthenticated) {
    next({ name: "app.dashboard" });
  } else {
    next();
  }
});

// router.beforeEach((to, from, next) => {
//   console.log("Navigating to:", to.fullPath);

//   const isAuthenticated = store.state.user?.token;

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     console.log("User not authenticated, redirecting to login...");
//     next({ name: 'login' });
//   } else if (to.meta.requiresGuest && isAuthenticated) {
//     console.log("User already logged in, redirecting to dashboard...");
//     next({ name: 'app.dashboard' });
//   } else {
//     console.log("Proceeding to:", to.fullPath);
//     next();
//   }
// });


export default router;
