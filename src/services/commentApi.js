import api from "./api";

export default {
  getCommentsByPostId(postId) {
    return api.get(`/comment/${postId}`);
  },
  addComment(comment) {
    return api.post(`/comment`, comment);
  },
};
