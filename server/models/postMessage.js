import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: { type: String },
    message: { type: String },
    creator: { type: String },
    tags: [{ type: String }],
    selectedFiles: { type: String },
    likeCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: new Date() },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const PostMessage = mongoose.model("PostMessage", PostSchema);

export default PostMessage;
