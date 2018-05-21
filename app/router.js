import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('principal');
  this.route('registro');
  this.route('perfil');
  this.route('detalle');
  this.route('editar-perfil');
});

export default Router;
