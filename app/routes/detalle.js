import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    firebaseApp: service(),

    beforeModel: function () {
        this.get('firebaseApp').auth().onAuthStateChanged((perfil) => {
            if (perfil) {
                // User is signed in.
                var email = perfil.email;
                return email;
            } else {
                this.transitionTo('index');
            }
        });
    },
    model: function () {
        return {
            publicaciones: this.store.findAll('publicaciones')
        }
    }
});
