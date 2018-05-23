import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    firebaseApp: service(),

    actions: {
        cerrar() {
            this.get('firebaseApp').auth().signOut().then(function () {
                this.transitionToRoute('index');
            }).catch(function (error) {
                // An error happened.
            });
        },
    },
});
