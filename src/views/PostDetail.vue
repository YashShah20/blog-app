<template>
  <div>
    single post {{ id }}
    <hr />
    Post details: {{ post }}
    <hr />
    Comments: {{ comments.length > 0 ? comments : "No comments yet" }}
    <hr />
    Add comment:
    <AddComment :post_id="id" @commentAdded="setComments()" />
    <hr />
    <button @click="deletePost">Delete</button>
    <hr />
    <router-link :to="{ name: 'post' }">back</router-link>
  </div>
</template>

<script>
import AddComment from "@/components/AddComment.vue";
import postApi from "@/services/postApi";
import commentApi from "@/services/commentApi";
export default {
  props: {
    id: {
      type: Number,
    },
  },
  components: {
    AddComment,
  },
  data() {
    return {
      post: null,
      comments: null,
    };
  },
  methods: {
    setPost: async function () {
      const res = await postApi.getPostById(this.id);
      this.post = res.data.post;
    },
    setComments: async function () {
      const res = await commentApi.getCommentsByPostId(this.id);
      this.comments = res.data.comments;
    },
    deletePost: async function () {
      const res = await postApi.deletePost(this.post.post_id);
      if (res.status === 200) {
        this.$router.replace({ name: "post" });
      }
    },
  },
  mounted() {
    this.setPost();
    this.setComments();
  },
};
</script>
