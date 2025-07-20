import axios from "axios";

const API = axios.create({
  baseURL: "https://reqres.in/api", // Ganti dengan API kamu
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (email, password) => {
  try {
    const response = await API.post("/login", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Login failed";
  }
};

export const cekData = async (nisn) => {
  try {
    const response = await API.post("/cekRombel", { nisn });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Data nout found, please check your NISNs";
  }
};
