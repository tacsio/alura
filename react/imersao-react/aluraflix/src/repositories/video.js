import Axios from "axios";
import { URL_BACKEND } from "../config";

export async function create(payload) {
  try {
    const response = await Axios.post(`${URL_BACKEND}/videos`, payload);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível cadastrar os dados.");
  }
}
