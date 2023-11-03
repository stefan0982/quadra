import axios from "axios";

export const dogClient = axios.create({
  baseURL: 'https://dog.ceo/api'
});
