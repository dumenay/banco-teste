import collectionsRoute from './collectionsRoute';
import commentsRoute from './commentsRoute';
import subscriptionsRoute from './subscriptionsRoute';
import tagsRoute from './tagsRoute';
import typesRoute from './typesRoute';
import uploadRoute from './uploadRoute';
import uploadtagRoute from './uploadtagRoute';
import usersRoute from './usersRoute';

function Routes(app) {
  collectionsRoute(app);
  commentsRoute(app);
  subscriptionsRoute(app);
  tagsRoute(app);
  typesRoute(app);
  uploadRoute(app);
  uploadtagRoute(app);
  usersRoute(app);
}

export default Routes;
