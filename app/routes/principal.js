import Route from '@ember/routing/route';

export default Route.extend({
    model: function(){
    return {
      publicaciones: this.store.findAll('publicaciones')
    }
  }    
});
