import type {Request, Response} from 'express';
import express from 'express';
import FollowCollection from './collection';

const router = express.Router();

router.post(
    '/',

    async (req: Request, res: Response) => {
        const follow = await FollowCollection.addFollow(req.body.userId, req.session.userId);
        res.status(200).json({
        message: 'You followed the user.',
        follow: follow,
        });
    }
);

router.delete(
    '/',

    async (req: Request, res: Response) => {
        const response = await FollowCollection.deleteFollow(req.body.userId, req.session.userId);
        res.status(200).json({
        message: 'You unfollowed the user.',
        });
    }
);

export {router as followRouter};