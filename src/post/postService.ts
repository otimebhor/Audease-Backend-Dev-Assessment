import express from "express";
import { Op } from "sequelize";
import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import Post from "./postModel";
dotenv.config();

export class PostService {
  async createPost(data: any, userId: number) {
    const newPost = await Post.create({
      title: data.title,
      content: data.content,
      userId: userId,
    });
    if (!newPost) {
      throw new Error("Failed to create post");
    }

    return newPost;
  }
  async getAllPosts() {
    const posts = await Post.findAll();
    return posts;
  }

  async singlePost(post_id: any) {
    const post = await Post.findOne({
      where: {
        id: post_id,
      },
    });
    if (!post) {
      throw new Error("Post not Found");
    }

    return post;
  }

  async editPost(data: any, post_id: any, userId: number) {
    const post = await Post.findByPk(post_id);
    if (!post) {
      throw new Error("Post not  Found");
    }
    if (post) {
      if (userId != post.userId) {
        throw new Error("You are not allowed to perform this action.");
      }
      const updated = await Post.update(data, { where: { id: post_id } });

      if (updated) {
        const updatedPost = await Post.findByPk(post_id);

        return { message: "Post updated successfully", post: updatedPost };
      } else {
        throw new Error("Post could not be updated.");
      }
    }
  }

  async deletePost(post_id: any, userId: number) {
    const post = await Post.findByPk(post_id);
    if (!post) {
      throw new Error("Post not  Found");
    }
    if (post) {
      if (userId != post.userId) {
        throw new Error("You are not allowed to perform this action.");
      }
      const deleted = await Post.destroy({ where: { id: post_id } });

      if (deleted) {
        const deletedPost = await Post.findByPk(post_id);

        return { message: "Post deleted successfully" };
      } else {
        throw new Error("Post could not be deleted.");
      }
    }
  }
}
