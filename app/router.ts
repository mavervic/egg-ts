import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.get('/csrf', controller.home.csrf);

  router.post('/account/signin', controller.home.signin);
};
