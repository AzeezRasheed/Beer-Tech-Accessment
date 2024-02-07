import { BACKEND_URL } from "@/utils/BackendURL";
import axios from "axios";

const createProduct = async (formData) => {
  const response = await axios.post(`${BACKEND_URL}/products/`, formData);
  return response.data;
};

const getProducts = async () => {
  // const location = useLocation()
  const response = await axios.get(`${BACKEND_URL}/products/`);
  console.log("test",response.data);
  return response.data;
};

const getProduct = async (id) => {
  const response = await axios.get(`${BACKEND_URL}/products/${id}`);
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(`${BACKEND_URL}/products/${id}`);
  console.log(id);
  return response.data;
};

const updateProduct = async (formData, id) => {
  console.log(formData, id);
  const response = await axios.patch(`${BACKEND_URL}/products/${id}`, formData);
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};

export default productService;
