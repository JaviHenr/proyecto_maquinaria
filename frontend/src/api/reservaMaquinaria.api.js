import axios from "axios";

export const getMaquinariasRequest = async () =>
    await axios.get("http://localhost:4000/maquinarias");
export const getReservaMaquinariasRequest = async () =>
  await axios.get("http://localhost:4000/reservaMaquinarias"); 

export const createMaquinariaRequest = async (maquinaria) =>
    await axios.post("http://localhost:4000/maquinaria", maquinaria);
export const createReservaMaquinariaRequest = async (reservaMaquinaria) =>
    await axios.post("http://localhost:4000/reservaMaquinaria", reservaMaquinaria);

export const deleteMaquinariaRequest = async (id) =>
    await axios.delete(`http://localhost:4000/maquinaria/${id}`);
export const deleteReservaMaquinariaRequest = async (id) =>
    await axios.delete(`http://localhost:4000/reservaMaquinaria/${id}`);

export const getMaquinariaRequest = async (id) =>
    await axios.get(`http://localhost:4000/maquinaria/${id}`);
export const getReservaMaquinariaRequest = async (id) =>
    await axios.get(`http://localhost:4000/reservaMaquinaria/${id}`);

export const updateMaquinariaRequest = async (id, maquinaria) =>
    await axios.put(`http://localhost:4000/maquinaria/${id}`, maquinaria);
export const updateReservaMaquinariaRequest = async (id, reservaMaquinaria) =>
    await axios.put(`http://localhost:4000/reservaMaquinaria/${id}`, reservaMaquinaria);
