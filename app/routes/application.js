export default Ember.Route.extend({

  actions: {
    gotoBreadcrumb: function(args) {
      this.transitionTo.apply(this, args);
    }
  },

  beforeModel: function() {
    var promises = [
      this.store.find('worldName', {}),
      this.store.find('eventName', {}),
      this.store.find('mapName', {}),
      this.store.find('continent', {})
    ];

    return Ember.RSVP.all(promises);
  }

});
