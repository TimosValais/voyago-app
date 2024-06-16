const users = new Map();

const tryAdd = (username, password) => {
  if (users.has(username)) {
    throw new Error("User already exists");
  }
  users.set(username, password);
};

const register = (username, password) => {
  tryAdd(username, password);
};

const login = (username, password) => {
  if (!users.has(username)) {
    throw new Error("User doesn't exist");
  } else if (users.get(username) !== password) {
    throw new Error("Wrong password");
  }
  return username;
};

export { register, login };
