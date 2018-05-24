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

    loadProfileByUid(uid) {
        return this.store.query('perfiles', {
            orderBy: 'uid',
            equalTo: uid,
            }).then((perfiles) => {
               return perfiles.get('firstObject');
        });
    },
});
