<template>
  <div>
    <div v-for="post in postList" :key="post.post_id">
      <PostItem :post="post" />
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  name: "PostList",
  props: {
    postList: {
      type: Array,
    },
  },
  components: {
    PostItem,
  },
};
</script>
