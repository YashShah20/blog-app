<template>
  <div>
    All Posts
    <PostList :postList="postList" />
  </div>
</template>

<script>
import postApi from "@/services/postApi";
import PostList from "@/components/post/PostList.vue";
export default {
  name: "PostView",
  components: {
    PostList,
  },
  data() {
    return {
      postList: [],
    };
  },
  mounted() {
    this.setPostList();
  },
  methods: {
    setPostList: async function () {
      const res = postApi.getPosts();
      this.postList = (await res).data.posts;
    },
  },
};
</script>
