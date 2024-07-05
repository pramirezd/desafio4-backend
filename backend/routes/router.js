import { Router } from "express";
import express from 'express';
import { apiGetPosts, apiAddPost, apiLikePost, apiDeletePost } from "../controllers/api.js";

const router = Router();

router.use(express.json());

router.get('/posts', apiGetPosts);
router.post('/posts', apiAddPost);
router.put('/posts/like/:id', apiLikePost);
router.delete('/posts/:id', apiDeletePost);

export default router;