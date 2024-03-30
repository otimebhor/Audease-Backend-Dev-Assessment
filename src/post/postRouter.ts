import express from "express";
import { PostController } from "./postController";
import { protect } from "../authorization";

const postController = new PostController();

const router = express.Router();

router.post("/create-post", protect, postController.create); // create a new user
router.get("/", postController.allPosts);
router.get("/:id", postController.getPost);
router.patch("/:id", protect, postController.editPost);
router.delete("/:id", protect, postController.deletePost);

export const PostRouter = router;
