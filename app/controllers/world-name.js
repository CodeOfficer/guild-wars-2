export default Ember.ObjectController.extend({

  needs: ['worldNames'],

  breadcrumbs: function() {
    var trail = this.get('controllers.worldNames.breadcrumbs');
    var breadcrumbs = Ember.A();

    breadcrumbs.pushObjects(trail);
    breadcrumbs.pushObject(Ember.Object.create({
      title: this.get('name'),
      path: 'world_name',
      args:[this.get('content')]
    }));

    return breadcrumbs;
  }.property('controllers.worldNames.breadcrumbs', 'content')

});
