import { API_URL } from "@env";
import axios from "axios";

const baseURL = API_URL;

const client = axios.create({
    baseURL,
});

export default client;