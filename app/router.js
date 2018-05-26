import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('principal');
  this.route('registro');
  this.route('perfil');
  this.route('editar-perfil');
  this.route('crear-publicacion');
  this.route('reportes');
  this.route('publicacion', { path: ':pub_id' });
});

export default Router;
