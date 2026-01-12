import API from "./api";

// Login user
export const loginUser = async (email, password) => {
  const res = await API.post("/auth/login", {
    email,
    password,
  });
  return res.data;
};

// Register user
export const registerUser = async (name, email, password) => {
  const res = await API.post("/auth/register", {
    name,
    email,
    password,
  });
  return res.data;
};
