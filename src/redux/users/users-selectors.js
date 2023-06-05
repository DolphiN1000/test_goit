export const getAllUsers = (store) => store.users.items;

export const getFilteredUsers = ({ users, filter }) => {
  if (!filter) {
    return users.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const finded = users.items.filter(({ user }) => {
    return user.toLowerCase().includes(normalizedFilter);
    //  ||
    // number.toLowerCase().includes(normalizedFilter)
  });
  return finded;
};

// export const addLike = (id) => {
//   setLike(
//     users.map((item) =>
//       item.id === id ? { ...item, liked: !item.liked } : item
//     )
//   );
// };
