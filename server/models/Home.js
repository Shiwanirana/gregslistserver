import mongoose from "mongoose";
const Schema = mongoose.Schema

const Home = new Schema(
  {
    bedroom: {type: Number, required: true},
    bathroom: {type: Number, required: true},
    level : { type: Number, required: true},
    year: {type: Number, required: true, min: 2000, max: 2020},
    price: {type: Number, required: true},
    description: {type: String, maxlength: 144 },
    imgUrl: {type: String, default: "http://placehold.it/200x200"}
  }
)

export default Home