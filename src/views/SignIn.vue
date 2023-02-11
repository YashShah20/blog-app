<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        placeholder="enter user name"
        v-model="credentials.name"
      />
      <br />
      <input
        type="password"
        placeholder="enter password"
        v-model="credentials.password"
      />
      <br />
      <button type="submit">Signin</button>
    </form>
  </div>
</template>

<script>
import userApi from "@/services/userApi";
export default {
  data() {
    return {
      credentials: {
        name: 'yshah',
        password: "abc",
      },
    };
  },
  methods: {
    handleSubmit: async function () {
      try {
        const res = await userApi.signin(this.credentials);
        if (res.status === 200) {
          console.log(`signned in successfully!`);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>
