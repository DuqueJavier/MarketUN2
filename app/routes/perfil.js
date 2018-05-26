import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import ValidarUsuarioMixin from '../mixins/validar-usuario';

export default Route.extend(ValidarUsuarioMixin, {

    model: function () {
        const perfil = this.modelFor('application').get('firstObject');
        var correo = perfil.correo;
        return hash({
            perfil: this.modelFor('application').get('firstObject'),
            publicaciones: this.store.query('publicaciones', { orderBy: 'correo', equalTo: correo }),
        });
    },
});
