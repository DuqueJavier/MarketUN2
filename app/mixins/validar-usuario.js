import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
    session: service(),
    
    beforeModel: function () {
        const isAuthenticated = this.get('session.isAuthenticated');
        if (isAuthenticated) {
            const currentUser = this.modelFor('application').get('firstObject');
            if (currentUser.get('administrador')) {
                this.transitionTo('reportes');
            }
        } else {
            this.transitionTo('index');
        }
    },
});
