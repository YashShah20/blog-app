const pool = require("../connection");

exports.signin = async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await pool.query("select * from users where name=$1", [name]);
    if (user.rowCount != 1) {
      return res.status(404).json({ error: "invalid credentials" });
    }

    const _password = user.rows[0].password;

    if (_password === password) {
      res.json({ msg: "ok" });
    } else {
      res.status(404).json({ error: "invalid credentials" });
    }
  } catch (error) {
    console.log(error.message);
  }
};


exports.signup = async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await pool.query(
      "insert into users (name,password) values ($1,$2)",
      [name, password]
    );

    if (user.rowCount === 1) {
      res.json({ msg: "ok" });
    } else {
      res.status(400).json({ error: "something went wrong" });
    }
  } catch (error) {
    console.log(error.message);
  }
  res.json({ msg: "user signup" });
};
