<template>
  <div>
    <div>add post</div>
    <form enctype="multipart/form-data" @submit.prevent="handleSubmit">
      <input type="text" v-model="title" placeholder="title" /> <br />
      <textarea placeholder="description" v-model="description"></textarea>
      <br />
      <input
        type="file"
        multiple
        name="post_image"
        placeholder="upload images"
        @change="handleFileChange"
      />
      <br />
      <button type="submit">add</button>
    </form>
  </div>
</template>

<script>
import postApi from "@/services/postApi";
export default {
  data() {
    return {
      title: "ChatGPT",
      description: "The new AI chatbot",
      images: null,
    };
  },
  methods: {
    handleSubmit: async function () {
      try {
        const post = new FormData();
        post.append("title", this.title);
        post.append("description", this.description);

        if (this.images != null) {
          for (const i of Object.keys(this.images)) {
            post.append("post_image", this.images[i]);
          }
        }

        const res = await postApi.addPost(post);
        console.log(res);
        this.$router.replace({ name: "post" });
      } catch (error) {
        console.log(error.message);
      }
    },
    handleFileChange: function (event) {
      this.images = event.target.files;
    },
  },
};
</script>
