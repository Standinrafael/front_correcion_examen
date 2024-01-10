<template>
  <div>
    <h1>MENU DE LIBROS</h1>
    <br />
    <h2>Seleccione la opcion que desea realizar:</h2>
    <br />
    <br />
    <table>
      <tr>
        <td><h3 @click="sendToCreate">CREAR LIBRO</h3></td>
        <td><h3 @click="sendToMostrarAll">MOSTRAR LISTA DE LIBROS</h3></td>
        <td><h3 @click="sendToId">BUSCAR LIBRO POR ID</h3></td>
      </tr>
    </table>
  </div>
</template>

<script>
import router from "@/router/router";

export default {
  methods: {
    sendToCreate() {
      router.push("/crear");
    },
    sendToMostrarAll() {
      router.push("/mostrar");
    },
    sendToId() {
      router.push("/buscarID");
    },
  },
};
</script>

<style scoped>
table {
  margin: 0 auto;
}

h1 {
  margin: 0 auto;
  color: brown;
}

td {
  padding: 20px;
}

h3 {
  display: inline-block; /* Para que el elemento se comporte como un bloque */
  padding: 10px 20px; /* Espaciado interno para que se vea más como un botón */
  border: 2px solid #007bff; /* Borde azul para simular un botón */
  background-color: #f7f7f7; /* Color de fondo gris claro */
  color: #333; /* Color de texto oscuro para contrastar con el fondo */
  border-radius: 5px; /* Bordes redondeados para suavizar la apariencia */
  text-align: center; /* Centrar el texto dentro del "botón" */
  text-decoration: none; /* Eliminar cualquier subrayado de enlace si lo hubiera */
  transition: background-color 0.3s, border-color 0.3s; /* Transiciones suaves al cambiar el color */
  cursor: pointer;
}
td h3:hover {
  background-color: #6c757d; /* Color de fondo azul al pasar el cursor */
  color: #fff; /* Cambiar el color de texto a blanco para contraste */
  border-color: #0056b3;
}

div {
  background-color: rgb(191, 239, 247);
  margin: 50px;
  padding-top: 40px;
  padding-bottom: 150px;
}
</style>