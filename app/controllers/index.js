import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    firebaseApp: service(),

    contrasenaNoValida: false, correoNoRegistrado: false, correoEnUso: false, correosNoCoinciden: false, camposEnBlanco: false, vacio: false, error: false, ok: false,
    emailR: '', emailR2: '', nombres: '', apellidos: '', celular: '', contrasena: '',
    email: '', password:'', urlFoto: '',
    
    actions: { 
        registrar(){     
            let urlInput = this.get('urlFoto');       
            let correo1 = this.get('emailR');let correo2 = this.get('emailR2');
            let nombresInput = this.get('nombres');  let apellidosInput = this.get('apellidos');
            let celularInput = this.get('celular');  let contrasenaInput = this.get('contrasena');
            if (nombresInput.length < 2 || apellidosInput.length < 2 || celularInput.length < 2 || correo1.length < 2 || urlInput.length < 2){
                this.set('camposEnBlanco', true);
                setTimeout(() => {
                    this.set('camposEnBlanco', false);
                }, 5000);       
            }else if(correo1 === correo2){              
                this.get('firebaseApp').auth().createUserWithEmailAndPassword(correo1, contrasenaInput).then(
                    (user) =>{
                        var uid = user.uid;
                        let newPerfil = this.get('store').createRecord('perfiles', {
                            urlFoto: urlInput,
                            correo: correo1,
                            nombres: nombresInput,
                            apellidos: apellidosInput,
                            celular: celularInput,
                            uid: uid,
                        });
                        newPerfil.save();
                        this.transitionToRoute('principal');
                    },(error) =>{
                        var errorMessage = error.message;
                        console.log(errorMessage);  
                        if (errorMessage === 'The email address is already in use by another account.'){
                            this.set('correoEnUso', true);
                            setTimeout(() => {
                                this.set('correoEnUso', false);
                            }, 5000); 
                        }                        
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
                this.get('session').open('firebase', {
                    provider: 'password',
                    email,
                    password: pass,
                }).then((currentUser) => {
                    this.set('email', '');
                    this.set('password', '');
                    this.transitionToRoute('principal');
                }, (error) => {
                    console.log(error);
                    var errorMessage = error.message;
                    if (errorMessage === 'There is no user record corresponding to this identifier.The user may have been deleted.' || errorMessage === 'The email address is badly formatted.') {
                        this.set('correoNoRegistrado', true);
                        setTimeout(() => {
                            this.set('correoNoRegistrado', false);
                        }, 5000);
                    } else if (errorMessage === 'The password is invalid or the user does not have a password.'){
                        this.set('contrasenaNoValida', true);
                        setTimeout(() => {
                            this.set('contrasenaNoValida', false);
                        }, 5000);
                    }
                });                      
            }
        }
    },
});
