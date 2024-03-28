import db from '../data/database.mjs';
import { ObjectId } from 'mongodb';

const registerUser = async (req, res, next) => {
   res.send().status(200);
}

const loginUser = async (req, res, next) => {
   res.send().status(200);
}

const logoutUser = async (req, res, next) => {
   res.send().status(200);
}

export default { registerUser, loginUser, logoutUser };