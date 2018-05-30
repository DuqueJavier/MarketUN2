import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    firebaseApp: service(),

    init() {
        this._super(...arguments);
        this.get('firebaseApp').auth().onAuthStateChanged((user) => {
            this.send('refreshModel');
        });
    },

});
