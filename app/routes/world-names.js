export default Ember.Route.extend({

  model: function() {
    return this.store.all('worldName');
  }

});