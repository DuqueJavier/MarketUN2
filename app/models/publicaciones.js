import DS from 'ember-data';

export default DS.Model.extend({
    titulo: DS.attr('string'),
    descripcion: DS.attr('string'),
    categoria: DS.attr('string'),
    foto: DS.attr('URL'),
    propietario: DS.attr('string'),
    precio: DS.attr('string'),
    entrega: DS.attr('string'),
    reportado: DS.attr('boolean'),
    descripcionReporte: DS.attr('string')
});
