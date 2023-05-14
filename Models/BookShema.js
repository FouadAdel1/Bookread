import mongoose from "mongoose";
const { Schema } = mongoose;

const BookSchema = Schema({
  id: { type: Number, unique: true },
  name: { type: String, required: true },
  author_id: { type: Schema.Types.ObjectId, ref: "Author" },
  category_id: { type: Schema.Types.ObjectId, ref: "Category" },
  img: { type: String },
});

const Book = mongoose.model("Book", BookSchema);