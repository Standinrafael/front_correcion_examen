import axios from "axios";

export const insertarLibro = async (body) => {
  return await insertar(body);
};

export const listaTodosLibros = async () => {
  return await listaLibros();
};

export const eliminarLibro = async (id) => {
  return await eliminar(id);
};

export const buscarLibro = async (id) => {
  return await buscarLibroPorID(id);
};

export const actualizarLibro = async (id, body) => {
  return await actualizar(id, body);
};

const insertar = async (body) => {
  const data = axios
    .post(`http://localhost:8080/books`, body)
    .then((r) => r.data);
  return data;
};

const listaLibros = async () => {
  const data = axios.get(`http://localhost:8080/books`).then((r) => r.data);
  console.log(data);
  return data;
};

const eliminar = async (id) => {
  const data = axios
    .delete(`http://localhost:8080/books/${id}`)
    .then((r) => r.data);
  return data;
};

const buscarLibroPorID = async (id) => {
  const data = axios
    .get(`http://localhost:8080/books/${id}`)
    .then((r) => r.data);
  return data;
};

const actualizar = async (id, body) => {
  axios.put(`http://localhost:8080/books/${id}`, body).then((r) => r.data);
};
