import type {Types, PopulatedDoc, Document} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {User} from '../user/model';

export type Follow = {
    _id: Types.ObjectId;
    followeeId: Types.ObjectId; 
    followerId: Types.ObjectId; 
}

const FollowSchema = new Schema<Follow>({
    followeeId: {
        // Use Types.ObjectId outside of the schema
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      },
      followerId: {
        // Use Types.ObjectId outside of the schema
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      },
})

const FollowModel = model<Follow>('Follow', FollowSchema);
export default FollowModel;