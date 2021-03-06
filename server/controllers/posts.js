import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find().sort("createdAt");
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  try {
    await PostMessage.create(post);
    res.status(201).json(postMessageNew);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
