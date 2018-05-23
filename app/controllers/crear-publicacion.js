import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    firebaseApp: service(),
    camposEnBlanco: false, error: false, publicacionCreada: false,
    titulo: '', descripcion: '', precio: '', foto: '', descripcionReporte: '',

    actions: {
        cerrar() {
            this.get('firebaseApp').auth().signOut().then(function () {
                this.transitionToRoute('index');
            }).catch(function (error) {
                // An error happened.
            });
        },
        
        crear(){            
            this.get('firebaseApp').auth().onAuthStateChanged((perfil) => {
                if (perfil) {
                    // User is signed in.
                    var uid = perfil.uid;
                    let tituloInput = this.get('titulo');
                    let descripcionInput = this.get('descripcion');
                    let precioInput = this.get('precio');
                    let fotoinput = this.get('foto');
                    let descripcionReporteInput = this.get('descripcionReporte');

                    if (tituloInput.length < 2 || descripcionInput.length < 2 || fotoinput.length < 2) {
                        this.set('camposEnBlanco', true);
                        setTimeout(() => {
                            this.set('camposEnBlanco', false);
                        }, 5000);
                    } else {
                        let newPublicacion = this.get('store').createRecord('publicaciones', {
                            titulo: tituloInput,
                            descripcion: descripcionInput,
                            foto: fotoinput,
                            precio: precioInput,
                            descripcionReporte: descripcionReporteInput,
                            uidPerfil: uid,
                        });
                        newPublicacion.save();
                        this.set('publicacionCreada', true);
                    }

                } else {
                    this.transitionTo('index');
                }
            });
            
        }
    },
});
