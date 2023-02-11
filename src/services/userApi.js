import api from "./api";

export default {
  signin(credentials) {
    return api.post(`/user/signin`, credentials);
  },
  signup(user) {
    return api.post(`user/signup`, user);
  },
};
