import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import ValidarUsuarioMixin from "../mixins/validar-usuario";

export default Route.extend(ValidarUsuarioMixin, {

  model: function(){ 
    return hash({      
      perfil: this.modelFor('application').get('firstObject'),
      publicaciones: this.store.findAll('publicaciones'),
    });
  },
});
