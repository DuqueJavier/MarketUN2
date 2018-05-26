import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import ValidarUsuarioMixin from '../mixins/validar-usuario';

export default Route.extend(ValidarUsuarioMixin,{

    model: function ({ pub_id }) {
        const id = parseInt(pub_id);
        return hash({
            perfil: this.modelFor('application').get('firstObject'),
            publicaciones: this.store.query('publicaciones', { orderBy: 'id', equalTo: id }),
        });
    },
});
