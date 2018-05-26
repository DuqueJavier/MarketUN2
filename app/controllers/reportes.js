import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service(),

    actions: {
        cerrar() {
            this.get('session').close().then(() => {
                this.transitionToRoute('index');
            }).catch(function (error) {
                // An error happened.
            });
        },
        eliminarReporte(publicacion) {
            publicacion.set('reportado', false);
            publicacion.set('descripcionReporte', '');
            publicacion.save();
        },

        eliminarPublicacion(publicacion) {
            publicacion.deleteRecord();
            publicacion.get('isDeleted');
            publicacion.save();
        }
    },
});
