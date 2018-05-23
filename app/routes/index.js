import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    firebaseApp: service(), email: '',

    beforeModel: function () {
        this.get('firebaseApp').auth().onAuthStateChanged((perfil) => {
            if (perfil) {
                // User is signed in.
                this.transitionTo('principal');
            }
        });
    },

    model: function () {        
        return {
            perfiles: this.store.findAll('perfiles')
        }
    }
});
