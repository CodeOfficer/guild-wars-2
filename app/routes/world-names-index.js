export default Ember.Route.extend({

  model: function() {
    return this.modelFor('world_names');
  }

});
