export default Ember.Route.extend({

  model: function(params) {
    return this.modelFor('world_name');
  }

});
