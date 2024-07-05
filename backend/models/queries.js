import { pool } from "../config/config.js";

try {
  await pool.query('SELECT NOW()');
  console.log('Database connection successful');
} catch (error) {
  console.error('Database connection error:', error);
}

const getPosts = async () => {
  const { rows } = await pool.query('SELECT * FROM posts');
  return rows;
};

const addPost = async (post) => {
  const { titulo, img, descripcion } = post

  const query = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *';
  const values = [titulo, img, descripcion, 0];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const likePost = async (id) => {
  const query = 'UPDATE posts SET likes = likes + 1 WHERE id = $1';
  const values = [id];
  const result = await pool.query(query, values);
  return result.rowCount;
}

const deletePost = async (id) => {
  const query = 'DELETE FROM posts WHERE id = $1';
  const values = [id];
  const result = await pool.query(query, values);
  return result.rowCount;
}

export { getPosts, addPost, likePost, deletePost };