import { Author, Message } from '../models';

const MessagesController = {
  async index(req, res){
    try {
      const result = await Message
        .find()
        .populate('author');
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async show(req, res) {
    try {
      const message = await Message
       .findById(req.params.id)
       .populate('author');
      res.send(message);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async store(req, res){
    try {
      const author = await Author.findById(req.body.author);
      let message = new Message({content: req.body.content, title: req.body.title, author: author._id});
      let result = await message.save();
      author.messages.push(message);
      await author.save();
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async update(req, res){
    try {
      const message = await Message.findById(req.params.id).exec();
      message.set(req.body);
      let result = await message.save();
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async remove(req, res){
    try {
      let result = await Message.deleteOne({ _id: req.params.id}).exec();
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

module.exports = MessagesController;
