import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    firebaseApp: service(),
    /*firebase: service('firebase-app'),*/

    camposEnBlanco: false, vacio: false, error: false,
    nombres: '', apellidos: '', celular: '', contrasena: '',

    actions: {
        cerrar() {
            this.get('firebaseApp').auth().signOut().then(function () {
                this.transitionToRoute('index');
            }).catch(function (error) {
                // An error happened.
            });
        },

        editar(perfil) {
            let nombresInput = this.get('nombres');       let apellidosInput = this.get('apellidos');
            let celularInput = this.get('celular');   let contrasenaInput = this.get('contrasena');

            if (nombresInput.length < 3 || apellidosInput.length < 3 || celularInput.length < 3) {
                this.set('camposEnBlanco', true);
                setTimeout(() => {
                    this.set('camposEnBlanco', false);
                }, 5000);
                return;
            } else{
                perfil.set('nombres', nombresInput);
                perfil.set('apellidos', apellidosInput);
                perfil.set('celular', celularInput);
                perfil.set('contrasena', contrasenaInput);
                perfil.save();          
            }
        },
    },
});
