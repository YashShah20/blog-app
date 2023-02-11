<template>
  <div id="app">
    <router-link :to="{ name: 'signin' }">Sign in</router-link>
    <router-link :to="{ name: 'signup' }">Sign Up</router-link>
    <router-link :to="{ name: 'post' }">Posts</router-link>
    <router-link :to="{ name: 'add-post' }">Add post</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
