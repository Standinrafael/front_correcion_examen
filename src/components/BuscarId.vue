<template>
  <div>
    <h1>BUSCAR LIBRO POR ID</h1>
  </div>
  <br />
  <table>
    <tr>
      <td><label for="">Ingrese el ID: </label></td>
      <td><input required v-model="id" type="text" /></td>
    </tr>
  </table>
  <br />
  <table>
    <tr>
      <td><button @click="mostrarLista()">Buscar Libro</button></td>
    </tr>
  </table>

  <fieldset>
    <div>
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
          <tr>
            <th class="uno">{{ lista.id }}</th>
            <td class="uno">{{ lista.isbn }}</td>
            <td class="uno">{{ lista.title }}</td>
            <td class="uno">{{ lista.author }}</td>
            <td class="uno">{{ lista.price }}</td>
            <td class="uno">
              <a
                id="idEditar"
                @click="
                  editarLibro(
                    lista.id,
                    lista.isbn,
                    lista.title,
                    lista.author,
                    lista.price
                  )
                "
                >Editar</a
              >
            </td>
            <td class="bonito">
              <a id="idEliminar" @click="alerta(lista.id)">Eliminar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </fieldset>
  <br />
  <br />

  <button id="back" @click="regresar">ATRAS</button>
</template>



<script>
import { eliminarLibro, buscarLibro } from "@/js/ProcesarLibro";
import router from "@/router/router";
export default {
  data() {
    return {
      lista: [],
      mostrarB: false,
      mensaje: null,
      id: null,
    };
  },
  methods: {
    async mostrarLista() {
      this.lista = await buscarLibro(this.id);
      console.log(this.lista);
      console.log(this.lista.length);
      console.log(this.lista.nombre);
      if (this.lista.length >= 1) {
        this.mostrarB = true;
        this.mensaje = "";
        console.log("tpm");
      } else {
        this.mostrarB = false;
        this.mensaje = "No existe Libro";
        console.log("tpm2");
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
};
</script>

<style scoped>
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

h1 {
  margin: 0 auto;
  color: brown;
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
