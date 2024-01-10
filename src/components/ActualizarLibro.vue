<template>
  <div>
    <h1>Editar Libro con ID: {{ ids }}</h1>
  </div>
  <br />
  <div id="central">
    <table id="uno">
      <tr>
        <td><label for="">ISBN: </label></td>
        <td><input type="text" required v-model="isbn" id="idIsbn" /></td>
        <td>
          <label for="" style="display: none">{{ isbn }}</label>
        </td>
      </tr>
      <tr>
        <td><label for="">Title: </label></td>
        <td>
          <input type="text" required v-model="title" id="idTitle" />
        </td>
        <td>
          <label for="" style="display: none">{{ title }}</label>
        </td>
      </tr>
      <tr>
        <td><label for="">Author: </label></td>
        <td><input type="text" required v-model="author" id="idAuthor" /></td>
        <td>
          <label for="" style="display: none">{{ author }}</label>
        </td>
      </tr>
      <tr>
        <td><label for="">Price: </label></td>
        <td><input type="number" required v-model="price" id="idPrice" /></td>
        <td>
          <label for="" style="display: none">{{ price }}</label>
        </td>
      </tr>
    </table>
    <br />
    <table>
      <tr>
        <td><button @click="actualizar()">Actualizar</button></td>
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

  <button id="back" @click="Regresar">ATRAS</button>
</template>

<script>
import { actualizarLibro } from "@/js/ProcesarLibro";
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
  props: {
    ids: null,
    titles: {
      type: String,
    },
    authors: {
      type: String,
    },
    isbns: {
      type: String,
    },
    prices: {
      type: Number,
    },
  },
  methods: {
    valoresDefinidos() {
      document.getElementById("idIsbn").value = this.isbns;
      document.getElementById("idTitle").value = this.titles;
      document.getElementById("idAuthor").value = this.authors;
      document.getElementById("idPrice").value = this.prices;
    },
    async actualizar() {
      const libro = {
        id: this.ids,
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
        this.mensaje = "Llene todos los parametros";
      } else {
        await actualizarLibro(this.ids, libro);
        (this.isbn = null),
          (this.title = null),
          (this.author = null),
          (this.price = null);
        this.mensaje = "Se ha actualizado correctamente";
        this.regresar();
      }
    },
    regresar() {
      this.$router.replace("/mostrar");
    },
    Regresar() {
      router.push("/mostrar");
    },
  },
  mounted() {
    this.valoresDefinidos();
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