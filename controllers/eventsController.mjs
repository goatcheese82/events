import db from '../data/database.mjs';
import { ObjectId } from 'mongodb';

const getAllEvents = async (req, res) => {
   let collection = db.collection("events");
   let results = await collection.find({})
      .toArray()
   res.send(results).status(200);
}

const getEventById = async (req, res) => {
   let query = new ObjectId(req.params.id);
   let collection = db.collection("events");
   let result = await collection.findOne(query);

   if (!result) res.send("Not found").status(404);
   else res.send(result).status(200);
}

const createEvent = async (req, res, next) => {
   //#swagger.tags=['Events']
   const event = {
      title: req.body.title,
      duration: req.body.duration,
      priority: req.body.priority,
      image: req.body.image,
   }
   const result = await db.collection('events').insertOne(event);
   res.send(result).status(204);
}

const updateEvent = async (req, res, next) => {
   const filter = { _id: new ObjectId(req.params.id) };
   const collection = db.collection("events");
   const event = {
      $set: {
         title: req.body.title,
         duration: req.body.duration,
         priority: req.body.priority,
         image: req.body.image,
      }
   }
   const options = { returnOriginal: false }
   try {
      const result = await collection.findOneAndUpdate(filter, event, options);
      res.send(result).status(200);
   } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Server Error')
   }
}

const deleteEvent = async (req, res, next) => {
   const filter = { _id: new ObjectId(req.params.id) };
   let collection = db.collection("events");
   try {
   const result = await collection.findOneAndDelete(filter);
   res.status(200).send('Your event was deleted.');
   } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Something went wrong');
   }
}

export default { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent };