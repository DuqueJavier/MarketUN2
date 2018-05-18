import Controller from '@ember/controller';
import { set, get } from '@ember/object';

export default Controller.extend({
    correosNoCoinciden: false, camposEnBlanco: false, vacio: false, error: false, ok: false,
    correo1: '', correo2: '',
    /*firebase: service();*/
    
    actions: {
        registrar(){
            const correo1 = this.get('emailR').trim();const correo2 = this.get('emailR2').trim();
            const nombresInput = this.get('nombres').trim();
            const apellidosInput = this.get('apellidos').trim();
            const celularInput = this.get('celular').trim();
            const contrasenaInput = this.get('contrasena').trim();
            if (nombresInput.length < 3 || apellidosInput.length < 3 || celularInput.length < 3 || correo1.length < 2){
                this.set('camposEnBlanco', true);
                setTimeout(() => {
                    this.set('camposEnBlanco', false);
                }, 5000);
                return;        
            }else if(correo1 === correo2){
                firebase.auth().createUserWithEmailAndPassword(correo1, contrasenaInput).catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                    // transitionTo Perfil
                });
            }else{
                this.set('correosNoCoinciden', true);
                setTimeout(() => {
                    this.set('correosNoCoinciden', false);
                }, 5000);
                return;
            }
            /*transitionToRoute('principal');

            /*const perfiles = this.get('model');
            perfiles.pushObject({
                email: correo,
                nombres: nombresInput,
                apellidos: apellidosInput,
                celular: celularInput,
            });*/
        },
        ingresar(){
            const email = this.get('email').trim();
            const pass = this.get('password').trim();
            if (email === "" || pass === ""){
                this.set('vacio', true);
                setTimeout(() => {
                    this.set('vacio', false);
                }, 5000);
                return;
            }else{
                firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
                    this.set('error', true);
                    setTimeout(() => {
                        this.set('error', false);
                    }, 5000);
                    return;
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                    //transitionTo principal
                });
            }
        }
    },
});
