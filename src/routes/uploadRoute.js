import uploadController from '../controllers/uploadController';

export default (app) => {
  app.get('/upload', uploadController.get);
  app.get('/upload/:id', uploadController.get);
  app.post('/upload', uploadController.create);
  app.patch('/upload/:id', uploadController.update);
  app.delete('/upload/:id', uploadController.destroy);
};
