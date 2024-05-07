import collectionsController from '../controllers/collectionsController';

export default (app) => {
  app.get('/collections', collectionsController.get);
  app.get('/collections/:id', collectionsController.get);
  app.post('/collections', collectionsController.create);
  app.patch('/collections/:id', collectionsController.update);
  app.delete('/collections/:id', collectionsController.destroy);
};
