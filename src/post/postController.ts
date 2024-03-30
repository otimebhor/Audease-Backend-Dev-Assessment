import express, { Request, Response } from "express";
import { PostService } from "./postService";

interface AuthenticatedRequest extends Request {
  user?: { id: number };
}
const postService = new PostService();
export class PostController {
  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const newPost = await postService.createPost(req.body, req.user!.id);
      return res.status(201).json(newPost);
    } catch (error: any) {
      console.error(error);
      return res
        .status(500)
        .json({ message: error.message || "Internal Server Error" });
    }
  }

  async allPosts(req: Request, res: Response) {
    const posts = await postService.getAllPosts();
    return res.status(201).json(posts);
  }

  async getPost(req: Request, res: Response) {
    try {
      const post = await postService.singlePost(req.params.id);
      return res.status(201).json(post);
    } catch (error: any) {
      console.error(error);
      return res
        .status(500)
        .json({ message: error.message || "Internal Server Error" });
    }
  }

  async editPost(req: AuthenticatedRequest, res: Response) {
    try {
      const post = await postService.editPost(
        req.body,
        req.params.id,
        req.user!.id
      );
      return res.status(201).json(post);
    } catch (error: any) {
      console.error(error);
      return res
        .status(500)
        .json({ message: error.message || "Internal Server Error" });
    }
  };

  async deletePost(req: AuthenticatedRequest, res: Response) {
    try {
      const post = await postService.deletePost(
        req.params.id,
        req.user!.id
      );
      return res.status(201).json(post);
    } catch (error: any) {
      console.error(error);
      return res
        .status(500)
        .json({ message: error.message || "Internal Server Error" });
    }
  }
}
