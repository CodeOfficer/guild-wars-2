export default Ember.Route.extend({

  model: function() {
    return this.store.all('setting').get('firstObject');
  }

});
