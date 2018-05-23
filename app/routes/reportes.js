import Route from '@ember/routing/route';

export default Route.extend({
    
    model: function () {
        return {
            publicaciones: this.store.query('publicaciones', {
                orderBy: 'reportado',
                equalTo: true
            }),
        }
    }, 
    actions:{
        eliminarReporte(publicacion){
            publicacion.reportado = false;
            publicacion.descripcionReporte = '';
            publicacion.save();            
        },

        eliminarPublicacion(publicacion){
            publicacion.deleteRecord();
            publicacion.get('isDeleted');
            publicacion.save();
        }
    },
});
