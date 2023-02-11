import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import Post from "./views/Post.vue";
import PostDetail from "./views/PostDetail.vue";
import AddPost from "./views/AddPost.vue";
export default [
  {
    path: "/signin",
    component: SignIn,
    name: "signin",
  },
  {
    path: "/signup",
    component: SignUp,
    name: "signup",
  },
  {
    path: "/",
    component: Post,
    name: "post",
  },
  {
    path: "/add",
    component: AddPost,
    name: "add-post",
  },
  {
    path: "/post/:id",
    component: PostDetail,
    props: true,
    name: "post-detail",
  },
];
