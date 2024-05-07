import uploadtagController from '../controllers/uploadtagController';

export default (app) => {
  app.get('/uploadtag', uploadtagController.get);
  app.get('/uploadtag/:id', uploadtagController.get);
  app.post('/uploadtag', uploadtagController.create);
  app.patch('/uploadtag/:id', uploadtagController.update);
  app.delete('/uploadtag/:id', uploadtagController.destroy);
};
