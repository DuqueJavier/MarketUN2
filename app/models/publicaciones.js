import DS from 'ember-data';

export default DS.Model.extend({
    titulo: DS.attr('string'),
    descripcion: DS.attr('string'),
    foto: DS.attr('string'),
    precio: DS.attr('string'),
    reportado: DS.attr('boolean', { defaultValue: false }),
    descripcionReporte: DS.attr('string'),
    correo: DS.attr('string'),
});
