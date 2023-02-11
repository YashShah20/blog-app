const pool = require("../connection");

exports.getCommentsByPostId = async (req, res) => {
  const { post_id } = req.params;
  const _comments = await pool.query(
    "select * from comment where post_id=$1 order by id desc",
    [post_id]
  );
  const comments = _comments.rows;
  res.json({ comments });
};

exports.addComment = async (req, res) => {
  const { user_id } = req.headers;
  const { comment, post_id } = req.body;

  const __comment = await pool.query(
    "insert into comment (comment,post_id,user_id) values ($1,$2,$3) returning *",
    [comment, post_id, user_id]
  );
  const [_comment] = __comment.rows;
  res.json({ comment: _comment });
};

exports.updateComment = (req, res) => {
  res.json({ msg: `update comment ${req.params.id}` });
};
exports.deleteComment = (req, res) => {
  res.json({ msg: `delete comment ${req.params.id}` });
};