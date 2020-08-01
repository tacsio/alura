import Axios from "axios";
import { URL_BACKEND } from "../config";

export async function getAllWithVideos() {
  try {
    const response = await Axios.get(`${URL_BACKEND}/categorias?_embed=videos`);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível carregar os dados.");
  }
}

export async function getAll() {
  try {
    const response = await Axios.get(`${URL_BACKEND}/categorias`);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível carregar os dados.");
  }
}
