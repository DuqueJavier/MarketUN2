import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    firebaseApp: service(), uid: 'Uz8kEoTjrQMLdyPgy23YLq0s6XJ2',

    beforeModel: function () {
        this.get('firebaseApp').auth().onAuthStateChanged((perfil) => {
            if (perfil) {     
                // User is signed in.
                var uid = perfil.uid;
                this.set('uid', uid);              
            }else{
                this.transitionTo('index');
            }
        });     
    },
    model: function () {
        let uid = this.get('uid');        
        return {
            perfil: this.store.query('perfiles', { orderBy: 'uid', equalTo: uid}),
            publicaciones: this.store.query('publicaciones', { orderBy: 'uidPerfil', equalTo: uid} ),
        }             
    }
});
