import typesController from '../controllers/typesController';

export default (app) => {
  app.get('/types', typesController.get);
  app.get('/types/:id', typesController.get);
  app.post('/types', typesController.create);
  app.patch('/types/:id', typesController.update);
  app.delete('/types/:id', typesController.destroy);
};
