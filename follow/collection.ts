import type {HydratedDocument, Types} from 'mongoose';
import type {Follow} from './model';
import FollowModel from './model';
import FreetCollection from '../freet/collection';

class FollowCollection {
    static async addFollow(followeeId: Types.ObjectId | string, followerId: Types.ObjectId | string): Promise<HydratedDocument<Follow>> {
        const follow = new FollowModel({
            followeeId,
            followerId
        });
        await follow.save();
        return follow;
    }

    static async deleteFollow(followeeId: Types.ObjectId | string, followerId: Types.ObjectId | string): Promise<boolean> {
        const follow = await FollowModel.deleteOne({followeeId: followeeId, followerId: followerId});
        return follow !== null;
    }


}

export default FollowCollection;