import axios from "axios";

const usersInstance = axios.create({
  baseURL: "https://647cd32cc0bae2880ad13cfd.mockapi.io/api/v1/users",
});

export const getAllUsers = async () => {
  const { data } = await usersInstance.get("/");
  console.log('getta',data)
  return data;
};

export const setFollowing = async (id, data) => {
  const { data: result } = await usersInstance.patch(`/${id}`, data);
  return result;
};

export const setUnFollowing = async (id, data) => {
  const { data: result } = await usersInstance.patch(`/${id}`, data);
  return result;
};
