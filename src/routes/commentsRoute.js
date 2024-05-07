import commentsController from '../controllers/commentsController';

export default (app) => {
  app.get('/comments', commentsController.get);
  app.get('/comments/:id', commentsController.get);
  app.post('/comments', commentsController.create);
  app.patch('/comments/:id', commentsController.update);
  app.delete('/comments/:id', commentsController.destroy);
};
