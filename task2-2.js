const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    resolve(
      allUsers.map((user) =>
        user.name === userName ? { ...user, active: !user.active } : user
      )
    );
  });
};

const logger = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);

// ВТОРОЙ СПОСОБ
// const toggleUserState = (allUsers, userName) => {
//   const updatedUsers = allUsers.map((user) =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );
//   return Promise.resolve(updatedUsers);
// };

// toggleUserState(users, "Mango").then((result) => console.table(result));
// toggleUserState(users, "Lux").then((result) => console.table(result));
