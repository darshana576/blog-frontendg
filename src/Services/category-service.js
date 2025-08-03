import { myAxios, privateAxios } from "./helper";

export const getAllCategories = async () => {
  return myAxios.get("api/v1/categories/").then((response) => {
    return response.data;
  });
};

export const addCategory = async (category) => {
  return privateAxios
    .post("api/v1/categories/", category)
    .then((response) => response.data);
};

export const deleteCategory = async (id) => {
  return privateAxios
    .delete(`api/v1/categories/${id}`)
    .then((response) => response.data);
};

export const getCategory = async (id) => {
  return myAxios.get(`api/v1/categories/${id}`).then((response) => response.data);
};

export const editCategory = async (id, category) => {
  return privateAxios
    .put(`api/v1/categories/${id}`, category)
    .then((response) => response.data);
};
