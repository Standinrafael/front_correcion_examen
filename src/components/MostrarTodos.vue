<template>
  <div>
    <h1>LISTA DE LIBROS</h1>
  </div>
  <br />
  <fieldset>
    <div v-if="mostrarB">
      <table class="tablaPrincipal">
        <thead>
          <tr>
            <th class="uno" scope="col">ID</th>
            <th class="uno" scope="col">Isbn</th>
            <th class="uno" scope="col">Title</th>
            <th class="uno" scope="col">Author</th>
            <th class="uno" scope="col">Price</th>
            <th class="uno" scope="col">Editar</th>
            <th class="uno" scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="l in lista" v-bind:key="l">
            <th class="uno">{{ l.id }}</th>
            <td class="uno">{{ l.isbn }}</td>
            <td class="uno">{{ l.title }}</td>
            <td class="uno">{{ l.author }}</td>
            <td class="uno">{{ l.price }}</td>
            <td class="uno">
              <a
                id="idEditar"
                @click="editarLibro(l.id, l.isbn, l.title, l.author, l.price)"
                >Editar</a
              >
            </td>
            <td class="uno">
              <a id="idEliminar" @click="alerta(l.id)">Eliminar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </fieldset>
  <br />
  <label for="">{{ mensaje }}</label>

  <br />
  <br />

  <button id="back" @click="regresar">ATRAS</button>
</template>

<script>
import { listaTodosLibros, eliminarLibro } from "@/js/ProcesarLibro";
import router from "@/router/router";
export default {
  data() {
    return {
      lista: [],
      mostrarB: false,
      mensaje: null,
    };
  },
  methods: {
    async mostrasLista() {
      this.lista = await listaTodosLibros();
      console.log(this.lista);
      console.log(this.lista.length);
      if (this.lista.length == 0) {
        this.mensaje = "No hay libros ingresadas";
        this.mostrarB = false;
      } else {
        this.mostrarB = true;
      }
    },
    async LibroEliminar(id) {
      await eliminarLibro(id);
      alert("Se ha eliminado correctamente");
      location.reload();
    },
    alerta(id) {
      var opcion = confirm("Desea eliminar el libro con id: " + id);

      if (opcion == true) {
        this.LibroEliminar(id);
      } else {
        alert("No se ha eliminado nada");
      }
    },
    editarLibro(id, isbn, title, author, price) {
      this.$router.push({
        name: "editar",
        params: {
          ids: id,
          isbns: isbn,
          titles: title,
          authors: author,
          prices: price,
        },
      });
    },
    regresar() {
      router.push("/");
    },
  },
  mounted() {
    this.mostrasLista();
  },
};
</script>
<style scoped>
h1 {
  margin: 0 auto;
  color: brown;
}

table {
  margin: 0 auto;
}
.tablaPrincipal {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.tablaPrincipal thead th,
.tablaPrincipal tbody td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.tablaPrincipal thead th {
  background-color: #f2f2f2;
}

.tablaPrincipal tbody tr:hover {
  background-color: #f5f5f5;
}

#idEditar {
  color: #007bff; /* Color azul para los enlaces */
  text-decoration: none;
  transition: color 0.3s;
}

#idEliminar {
  color: #c31313; /* Color azul para los enlaces */
  text-decoration: none;
  transition: color 0.3s;
}

#idEditar:hover {
  color: #12559e; /* Color azul un poco más oscuro al pasar el cursor */
}

#idEliminar:hover {
  color: #740f0f;
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