import { Author } from '../models';

const AuthorsController = {
  async index(req, res){
    try {
      const authors = await Author
        .find()
        .populate('messages');
      res.send(authors);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async show(req, res){
    try {
      const author = await Author
        .findById(req.params.id)
        .populate('messages');
      res.send(author);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async store(req, res){
    try {
      let author = new Author({name: req.body.name});
      let result = await author.save();
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async update(req, res){
    try {
      const author = await Author.findById(req.params.id).exec();
      author.set(req.body);
      let result = await author.save();
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async remove(req, res){
    try {
      let result = await Author.deleteOne({ _id: req.params.id}).exec();
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

module.exports = AuthorsController;
