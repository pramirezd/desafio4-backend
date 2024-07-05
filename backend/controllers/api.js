import dotenv from 'dotenv';
import { getPosts, addPost, likePost, deletePost } from '../models/queries.js'

dotenv.config();

export const apiGetPosts = async (req, res) => {
    try {
      const result = await getPosts();
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
};
  
export const apiAddPost = async (req, res) => {
    const post = {
      titulo: req.body.titulo,
      img: req.body.url,
      descripcion: req.body.descripcion
    };
  
    try {
      const result = await addPost(post);
      return res.status(201).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
};

export const apiLikePost = async (req, res) => {
    const id = req.params.id;
  
    try {
      const result = await likePost(id);
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
};

export const apiDeletePost = async (req, res) => {
    const id = req.params.id;
  
    try {
      const result = await deletePost(id);
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
};