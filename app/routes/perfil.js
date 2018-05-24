import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import ValidarUsuarioMixin from '../mixins/validar-usuario';

export default Route.extend(ValidarUsuarioMixin, {

    model: function () {
        const uid = this.modelFor('application').get('firstObject').get('uid');
        return hash({
            perfil: this.modelFor('application').get('firstObject'),
            publicaciones: this.store.query('publicaciones', { orderBy: 'uidPerfil', equalTo: uid }),
        });
    },
});
