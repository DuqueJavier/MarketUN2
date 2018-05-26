import DS from 'ember-data';

export default DS.Model.extend({
    nombres: DS.attr('string'),
    apellidos: DS.attr('string'),
    correo: DS.attr('string'),
    celular: DS.attr('number'),
    urlFoto: DS.attr('string'),
    administrador: DS.attr('boolean', { defaultValue: false }),
    uid: DS.attr('string'),
});
