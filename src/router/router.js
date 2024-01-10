import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/PaginaMain"),
  },
  {
    path: "/crear",
    component: () => import("../components/CrearLibro"),
  },
  {
    path: "/mostrar",
    component: () => import("../components/MostrarTodos"),
  },
  {
    path: "/buscarID",
    component: () => import("../components/BuscarId"),
  },
  {
    path: "/editar/:ids-:isbns-:titles-:authors-:prices",
    name: "editar",
    props: true,
    component: () => import("../components/ActualizarLibro"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
