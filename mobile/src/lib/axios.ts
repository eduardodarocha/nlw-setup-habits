import axios from "axios";

export const api = axios.create({
  // baseURL: 'http://localhost:3333' //nao usar localhost, usar ip da maquina para emular no celular
  baseURL: 'http://192.168.0.10:3333'
})