<template>
  <div>
    <h1>INGRESE LOS DATOS DEL LIBRO PARA SU REGISTRO</h1>
    <br />
    <div id="central">
      <table id="uno">
        <tr>
          <td><label for="">ISBN: </label></td>
          <td><input v-model="isbn" required type="text" /></td>
        </tr>
        <tr>
          <td><label for="">TITLE: </label></td>
          <td><input v-model="title" required type="text" /></td>
        </tr>
        <tr>
          <td><label for="">AUTHOR: </label></td>
          <td><input v-model="author" required type="text" /></td>
        </tr>
        <tr>
          <td><label for="">PRICE: </label></td>
          <td><input v-model="price" required type="number" /></td>
        </tr>
      </table>

      <table>
        <tr>
          <td><button @click="Insertar()">Ingresar Datos</button></td>
        </tr>
        <tr>
          <td>
            <label for="">{{ mensaje }}</label>
          </td>
        </tr>
      </table>
    </div>
    <br />
    <br />

    <button id="back" @click="regresar">ATRAS</button>
  </div>
</template>
<script>
import { insertarLibro } from "@/js/ProcesarLibro";
import router from "@/router/router";

export default {
  data() {
    return {
      isbn: null,
      title: null,
      author: null,
      price: null,
      mensaje: null,
    };
  },
  methods: {
    async Insertar() {
      const libro = {
        isbn: this.isbn,
        title: this.title,
        author: this.author,
        price: this.price,
      };
      if (
        this.isbn == null ||
        this.title == null ||
        this.author == null ||
        this.price == null
      ) {
        console.log("No insertado");
        this.mensaje = "Llene todos los parametros";
      } else {
        await insertarLibro(libro);
        (this.mensaje = "Se ha ingresado correctamente"),
          this.isbn == null,
          this.title == null,
          this.author == null,
          this.price == null;
      }
    },
    regresar() {
      router.push("/");
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 0 auto;
  color: brown;
}

#central table {
  margin: 0 auto;
}

#uno {
  background-color: #ffebcd;
}
td {
  padding: 25px;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

label {
  display: inline-block;
  font-weight: 600;
  margin-bottom: 5px;
  color: #555;
  transition: color 0.3s ease-in-out;
}

button {
  display: inline-block;
  padding: 10px 20px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #007bff; /* Color base para el botón */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.1s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #0056b3; /* Color un poco más oscuro al pasar el cursor */
  transform: translateY(
    -2px
  ); /* Pequeña animación para un efecto de elevación */
}

#back {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #dc3545; /* Color de fondo rojo intenso */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.1s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none; /* Si es un enlace, elimina el subrayado */
}

#back:hover {
  background-color: #c82333; /* Color un poco más oscuro al pasar el cursor */
}
</style>