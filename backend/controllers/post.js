const pool = require("../connection");
const bcrypt = require("bcrypt");
const multer = require("multer");

const diskStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    // just to make sure file is not accessible just by url parameter
    // prevents unwanted bulk access
    // 'images/_2b_10__92nC77cTGsqnVPr6LI0Yu3hIUjkAv9CKsk2MkzCAMSUMvg3KmCU_.png' is better than 'images/1.png'
    const randomHash = bcrypt
    .hashSync(file.originalname, 10)
    .replaceAll(/[$\./]/g, "_"); // replace [$ . / \] by _
    
    const extension = file.originalname.split(".")[1];
    
    const filename = `${randomHash}.${extension}`;
    cb(null, filename);
  },
});

const upload = multer({
  storage: diskStorageEngine,
});

exports.getPosts = async (req, res) => {
  const _posts = await pool.query(
    "select post.*,(select string_agg(url,'|') from photo where post_id=post.post_id) as photos from post order by post_id desc"
  );

  const posts = _posts.rows;

  posts.map((post) => {
    post.photos =
      post.photos != null
        ? post.photos.split("|").map((photo) => {
            return `http://localhost:3000/images/${photo}`;
          })
        : null;
  });

  res.json({ posts: posts });
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  const _post = await pool.query(
    "select post.*,(select string_agg(url,'|') from photo where post_id=post.post_id) as photos from post where post_id=$1",
    [id]
  );
  const [post] = _post.rows;
  if (!post) {
    return res.status(404).json({ error: "post not found..." });
  }
  if (post.photos != null) {
    post.photos = post.photos.split("|").map((photo) => {
      return `http://localhost:3000/images/${photo}`;
    });
  }
  res.json({ post });
};

exports.addPost = [
  // save post images
  upload.array("post_image"),
  async (req, res) => {
    const { user_id } = req.headers;
    const { title, description } = req.body;
    const likes = 0;

    const _post = await pool.query(
      "insert into post (title,description,likes,user_id) values ($1,$2,$3,$4) returning *",
      [title, description, likes, user_id]
    );

    const post_id = _post.rows[0].post_id;

    if (req.files && req.files.length > 0) {
      req.files.map(async (file) => {
        const _photo = await pool.query(
          "insert into photo (post_id,url) values ($1,$2)",
          [post_id, file.filename]
        );
      });
    }

    const [post] = _post.rows;
    res.json({ post });
  },
];

exports.likePost = async (req, res) => {
  const { id } = req.params;
  const _post = await pool.query(
    "update post set likes=likes+1 where post_id=$1 returning *",
    [id]
  );
  const [post] = _post.rows;
  res.json({ post });
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const _post = await pool.query(
    "delete from post where post_id=$1 returning post_id",
    [id]
  );
  const [post] = _post.rows;
  res.json({ post });
};
