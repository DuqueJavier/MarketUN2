import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    firebaseApp: service(),
    camposEnBlanco: false, error: false,
    titulo: '', descripcion: '', precio: '', foto: '', uidPropietario:'', descripcionReporte: '', reportado: false,

    actions: {
        crear(uidPropietario){
            let tituloInput = this.get('titulo');
            let descripcionInput = this.get('descripcion');
            let precioInput = this.get('precio');
            let fotoinput = this.get('foto');
            let descripcionReporteInput = this.get('descripcionReporte');
            let reportadoInput = this.get('reportado');
            if (tituloInput.length < 2 || descripcionInput.length < 2 || fotoinput.length < 2 || uidPropietario.length < 2) {
                this.set('camposEnBlanco', true);
                setTimeout(() => {
                    this.set('camposEnBlanco', false);
                }, 5000);
            }else{
                let newPublicacion = this.get('store').createRecord('publicaciones', {
                    titulo: tituloInput,
                    descripcion: descripcionInput,
                    foto: fotoinput,
                    precio: precioInput,
                    descripcionReporte: descripcionReporteInput,
                    reportado: reportadoInput,
                    uid: uidPropietario,
                });
                newPublicacion.save();
            }
        }
    },
});
