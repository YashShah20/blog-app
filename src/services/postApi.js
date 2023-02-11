import api from "./api";

export default {
  getPosts() {
    return api.get(`/post`);
  },
  getPostById(id) {
    return api.get(`/post/${id}`);
  },
  addPost(post) {
    return api.post(`/post`, post);
  },
  likePost(id) {
    return api.put(`/post/${id}`);
  },
  deletePost(id) {
    return api.delete(`/post/${id}`);
  },
};
