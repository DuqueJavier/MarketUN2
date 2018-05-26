import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    session: service(),

    beforeModel() {        
        return this.get('session').fetch().catch(() => {});
    },

    loadProfileByUid(uid) {
        return this.store.query('perfiles', {
            orderBy: 'uid',
            equalTo: uid,
        });
    },

    model: function () {
        const uid = this.get('session.currentUser.uid');
        if (!uid) return null;
        else {
            return this.loadProfileByUid(uid);
        }
    },

    actions: {
        refreshModel() {
            this.refresh();
        },
    },
});
