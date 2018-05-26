import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    firebaseApp: service(),

    beforeModel: function () {
        this.get('firebaseApp').auth().onAuthStateChanged((perfil) => {
            if (perfil) {
                var uid = perfil.uid;
                this.set('uid', uid);
                if (uid != 'l2VjPfk2urPDsY894qOeanAyKyt2') {
                    this.transitionTo('principal');
                }
            } else {
                this.transitionTo('index');
            }
        });
    },
    
    model: function () {
        return {
            publicaciones: this.store.query('publicaciones', {
                orderBy: 'reportado',
                equalTo: true
            }),
        }
    }, 
    
});
