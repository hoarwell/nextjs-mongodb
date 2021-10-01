import { connectToDatabase } from '../../util/mongodb';
import { ObjectId } from 'mongodb';

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const { _id } = req.query;
    const movie = await db.collection('movies').findOne({_id: new ObjectId(_id)});
    res.json(movie);
}
