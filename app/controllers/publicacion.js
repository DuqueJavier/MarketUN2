import Controller from '@ember/controller';

export default Controller.extend({
    vacio: false, publicacionReportada: false, descripcionReporte: '', reportar: true, descripcionEnBlanco: false,

    actions: {
        cerrar() {
            this.get('session').close().then(() => {
                this.transitionToRoute('index');
            }).catch(function (error) {
                // An error happened.
            });
        },
        reportarPublicacion(){
            this.set('reportar', false)
        },
        reportar(publicacion){
            let descripcionInput = this.get('descripcionReporte'); 
            if (descripcionInput.length <10){
                this.set('descripcionEnBlanco', true);
                setTimeout(() => {
                    this.set('descripcionEnBlanco', false);
                }, 6000)
            } else{
                publicacion.set('reportado', true);
                publicacion.set('descripcionReporte', descripcionInput);
                publicacion.save();
                this.set('publicacionReportada', true);
                this.set('descripcionReporte', '');  
            }                      
        },
    },
});
