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

        eliminar(publicacion) {
            publicacion.deleteRecord();
            publicacion.get('isDeleted');
            publicacion.save();
        }
    },
});
