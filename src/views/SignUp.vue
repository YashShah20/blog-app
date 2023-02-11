<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="user.name" /> <br />
      <input type="password" v-model="user.password" /> <br />
      <button type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>
import userApi from "@/services/userApi";
export default {
  data() {
    return {
      user: {
        name: "Yash Shah",
        password: "abc",
      },
    };
  },
  methods: {
    handleSubmit: async function () {
      const res = await userApi.signup(this.user);
      if (res.status === 200) {
        window.alert(`Please note : ${JSON.stringify(res.data)}`);
      }
    },
  },
};
</script>
