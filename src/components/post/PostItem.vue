<template>
  <div>
    <h4>{{ localPost.title }}</h4>
    <div
      v-for="(photo, index) in localPost.photos"
      :key="index"
      style="display: inline-block"
    >
      <img :src="photo" alt="post photo" height="300px" width="300px" />
    </div>
    <p>{{ localPost.description }}</p>
    <span>Likes: {{ localPost.likes }}</span>
    <button @click="likePost">Like</button>
    <router-link
      :to="{ name: 'post-detail', params: { id: localPost.post_id } }"
    >
      Details
    </router-link>
  </div>
</template>

<script>
import postApi from "@/services/postApi";
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
    },
  },
  data() {
    return {
      localPost: null,
    };
  },
  beforeMount() {
    this.localPost = this.post;
  },
  methods: {
    likePost: async function () {
      const res = await postApi.likePost(this.post.post_id);
      this.localPost.likes = res.data.post.likes;
    },
  },
};
</script>
