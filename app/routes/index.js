import Route from '@ember/routing/route';

export default Route.extend({
    model: function () {
        return {
            perfiles: this.store.findAll('perfiles')
        }
    }
});
