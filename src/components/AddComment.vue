<template>
  <div>
    <form action="">
      <!-- <input type="text" disabled :value="post_id" /> -->
      <textarea v-model="comment" placeholder="add your comment here...">
      </textarea>
      <button @click="addComment">comment</button>
    </form>
  </div>
</template>

<script>
import commentApi from "@/services/commentApi";
export default {
  props: {
    post_id: {
      type: Number,
    },
  },
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    addComment: async function () {
      const comment = {
        post_id: this.post_id,
        comment: this.comment,
      };
      const res = await commentApi.addComment(comment);
      this.$emit('commentAdded')
      console.log(res.data);
    },
  },
};
</script>
