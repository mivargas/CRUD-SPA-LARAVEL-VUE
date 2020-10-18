import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Estudiantes from "../views/Estudiantes.vue";
import Estudiante from "../views/Estudiante.vue";
import EstudianteEdit from "../views/EstudianteEdit.vue";
import EstudianteCreate from "../views/EstudianteCreate.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/estudiantes",
    name: "Estudiantes",
    component: Estudiantes,
    props: true
  },
  {
    path: "/estudiante/:id",
    name: "Estudiante",
    component: Estudiante,
    props: true
  },
  {
    path: "/estudiante/:id/edit",
    name: "EstudianteEdit",
    component: EstudianteEdit,
    props: true
  },
  {
    path: "/estudiante/create",
    name: "EstudianteCreate",
    component: EstudianteCreate
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
