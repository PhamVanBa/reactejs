import Api from "./Api";

const url = "/employees";

const getAll = () => {
  return Api.get(url);
};

const getByID = (id) => {
  return Api.get(`${url}/${id}`);
};

const create = (body) => {
  return Api.post(url, body);
};

const updateByID = (id, body) => {
  return Api.put(`${url}/${id}`, body);
};

const deleteByID = (id) => {
  return Api.delete(`${url}/${id}`);
};

// export
const todoApi3 = { getAll, getByID, create, updateByID, deleteByID };
export default todoApi3;
