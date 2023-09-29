import axios from "axios";

const api = axios.create({
  baseURL: "https://6515fcfd09e3260018c9538f.mockapi.io/musicas",
});



// export const adicionar = (payload) => api.post(`/musicas`, payload);
// export const listarTodas = () => api.get(`/musicas`);
// export const atualizar = (id, payload) => api.put(`/musicas/${id}`, payload);
// export const deletar = (id) => api.delete(`/musicas/${id}`);
// export const listarPorID = (id) => api.get(`/musicas/${id}`);

// const apis = {
//   adicionar,
//   listarTodas,
//   atualizar,
//   deletar,
//   listarPorID,
// };

export default api;

// Path: src/App.js

