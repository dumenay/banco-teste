import tagsController from '../controllers/tagsController';

export default (app) => {
  app.get('/tags', tagsController.get);
  app.get('/tags/:id', tagsController.get);
  app.post('/tags', tagsController.create);
  app.patch('/tags/:id', tagsController.update);
  app.delete('/tags/:id', tagsController.destroy);
};
