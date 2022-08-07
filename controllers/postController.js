import PostModel from '../models/Post.js';

export const create = (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.email,
      title
    });
  } catch (error) {
    
  }
};
