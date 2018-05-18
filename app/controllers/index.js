import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    firebaseApp: service(),
    /*firebase: service('firebase-app'),*/

    correosNoCoinciden: false, camposEnBlanco: false, vacio: false, error: false, ok: false,
    emailR: '', emailR2: '', nombres: '', apellidos: '', celular: '', contrasena: '', 
    email: '', password:'',
    
    actions: { 
        registrar(){
            let correo1 = this.get('emailR');let correo2 = this.get('emailR2');
            let nombresInput = this.get('nombres');
            let apellidosInput = this.get('apellidos');
            let celularInput = this.get('celular');
            let contrasenaInput = this.get('contrasena');
            if (nombresInput.length < 3 || apellidosInput.length < 3 || celularInput.length < 3 || correo1.length < 2){
                this.set('camposEnBlanco', true);
                setTimeout(() => {
                    this.set('camposEnBlanco', false);
                }, 5000);
                return;        
            }else if(correo1 === correo2){
                this.get('firebaseApp').auth().createUserWithEmailAndPassword(correo1, contrasenaInput).then(
                    function () {
                        /*let perfiles = this.get('model');
                        perfiles.pushObject({
                            email: correo,
                            nombres: nombresInput,
                            apellidos: apellidosInput,
                            celular: celularInput,
                        });*/
                        transitionToRoute('principal');
                    }, function (error) {
                        var errorMessage = error.message;
                        console.log(errorMessage);
                    }
                );
            }else{
                this.set('correosNoCoinciden', true);
                setTimeout(() => {
                    this.set('correosNoCoinciden', false);
                }, 5000);
                return;
            }

            
        },
        ingresar(){
            let email = this.get('email');
            let pass = this.get('password').trim();
            if (email === "" || pass === ""){
                this.set('vacio', true);
                setTimeout(() => {
                    this.set('vacio', false);
                }, 5000);
                return;
            }else{
                this.get('firebaseApp').auth().signInWithEmailAndPassword(email, pass).then(
                    function (){
                        transitionToRoute('principal');
                    }, function (error) {
                        var errorMessage = error.message;
                        console.log(errorMessage);
                    }
                );                      
            }
        }
    },
});
