import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import ValidarUsuarioMixin from '../mixins/validar-usuario';

export default Route.extend(ValidarUsuarioMixin,{

    model: function ({ pub_id }) {
        const codigo = parseInt(pub_id);
    
        return hash({
            perfil: this.modelFor('application').get('firstObject'),
            publicaciones: this.store.query('publicaciones', { orderBy: 'codigo', equalTo: codigo }),
        });
    },
});
