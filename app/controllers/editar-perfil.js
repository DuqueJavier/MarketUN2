import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service(),
    camposEnBlanco: false, vacio: false, error: false, perfilEditado: false,
    nombres: '', apellidos: '', celular: '', contrasena: '', urlFoto: '',

    actions: {
        cerrar() {
            this.get('session').close().then(() => {
                this.transitionToRoute('index');
            }).catch(function (error) {
                // An error happened.
            });
        },

        editar(perfil) {
            let nombresInput = this.get('nombres'); let apellidosInput = this.get('apellidos');
            let celularInput = this.get('celular'); let contrasenaInput = this.get('contrasena');
            let fotoInput = this.get('urlFoto');

            if (nombresInput.length < 1){
                nombresInput = perfil.get('nombres')
            }
            if (apellidosInput.length < 1){
                apellidosInput = perfil.get('apellidos')
            }
            if (celularInput.length < 1) {
                celularInput = perfil.get('celular')
            }
            if (contrasenaInput.length < 1){
                contrasenaInput = perfil.get('contrasena')
            }
            if (fotoInput.length < 1) {
                fotoInput = perfil.get('urlFoto')
            }
            perfil.set('nombres', nombresInput);
            perfil.set('apellidos', apellidosInput);
            perfil.set('celular', celularInput);
            perfil.set('contrasena', contrasenaInput);
            perfil.set('urlFoto', fotoInput);
            perfil.save(); 
            this.set('nombres', '');
            this.set('apellidos', '');
            this.set('celular', '');
            this.set('contrasena', '');
            this.set('urlFoto', '');
        },
    },
});
