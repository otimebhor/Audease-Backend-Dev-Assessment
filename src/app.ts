import express from 'express'
import { AuthRouter } from './auth/authRouter';
import { PostRouter } from './post/postRouter';
export const app = express();

app.use(express.json());


// // Routes
app.use('/api/auth', AuthRouter);
app.use('/api/posts', PostRouter);




