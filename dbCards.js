// Outline the structure of the database

import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
});

// first argument is name of collection
export default mongoose.model('cards', cardSchema);