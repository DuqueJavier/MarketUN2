import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service(),
    
    camposEnBlanco: false, error: false, publicacionCreada: false,
    titulo: '', descripcion: '', precio: '', foto: '', descripcionReporte: '',

    actions: {
        cerrar() {
            this.get('session').close().then(() => {
                this.transitionToRoute('index');
            }).catch(function (error) {
                // An error happened.
            });
        },
        
        crear(perfil){ 
            var correo = perfil.correo; 
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
                    correo: correo,
                });
                newPublicacion.save();
                this.set('publicacionCreada', true);
            }    
        }
    },
});
