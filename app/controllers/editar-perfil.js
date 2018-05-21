import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    firebaseApp: service(),
    /*firebase: service('firebase-app'),*/

    correosNoCoinciden: false, camposEnBlanco: false, vacio: false, error: false, ok: false,
    emailR: '', emailR2: '', nombres: '', apellidos: '', celular: '', contrasena: '',

    actions: {
        editar(perfil) {
            let nombresInput = this.get('nombres');       let apellidosInput = this.get('apellidos');
            let celularInput = this.get('celular');   let contrasenaInput = this.get('contrasena');

            if (nombresInput.length < 3 || apellidosInput.length < 3 || celularInput.length < 3 || correo1.length < 2) {
                this.set('camposEnBlanco', true);
                setTimeout(() => {
                    this.set('camposEnBlanco', false);
                }, 5000);
                return;
            } else if (correo1 === correo2) {
                perfil.set('nombres', nombresInput);
                perfil.set('apellidos', apellidosInput);
                perfil.set('celular', celularInput);
                perfil.set('contrasena', contrasenaInput);
                perfil.save();          
                
            } else {
                this.set('correosNoCoinciden', true);
                setTimeout(() => {
                    this.set('correosNoCoinciden', false);
                }, 5000);
                return;
            }
        },
    },
});
