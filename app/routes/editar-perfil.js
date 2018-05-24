import Route from '@ember/routing/route';
import ValidarUsuarioMixin from '../mixins/validar-usuario';
import { hash } from 'rsvp';

export default Route.extend(ValidarUsuarioMixin, {

    model: function () {
        return hash({
            perfil: this.modelFor('application').get('firstObject'),
        });
    }, 
});
