import axios from "axios";

const usersInstance = axios.create({
  baseURL: "https://647cd32cc0bae2880ad13cfd.mockapi.io/api/v1/users",
  params: {
    limit: 3,
  },
});

export const getAllUsers = async (page) => {
  const { data } = await usersInstance.get("/", {
    params: {
      page,
    },
  });
  return data;
};

export const setFollow = async ({ id, isUserFollowing, followers }) => {
  const { data: result } = await usersInstance.patch(`/${id}`, {
    isFollowing: isUserFollowing,
    followers: isUserFollowing ? followers + 1 : followers - 1,
  });
  return result;
};
