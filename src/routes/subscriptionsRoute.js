import subscriptionsController from '../controllers/subscriptionsController';

export default (app) => {
  app.get('/subscriptions', subscriptionsController.get);
  app.get('/subscriptions/:iduser/:idsub', subscriptionsController.get);
  app.post('/subscriptions', subscriptionsController.create);
  app.patch('/subscriptions/:iduser/:idsub', subscriptionsController.update);
  app.delete('/subscriptions/:iduser/:idsub', subscriptionsController.destroy);
};
