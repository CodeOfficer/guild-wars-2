export default Ember.Controller.extend({

  breadcrumbs: function() {
    return Ember.A([
      Ember.Object.create({
        title: 'Home',
        path: 'index',
        args:[]
      })
    ]);
  }.property()

});
