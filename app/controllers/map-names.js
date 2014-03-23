export default Ember.ArrayController.extend({

  needs: ['worldName'],

  breadcrumbWorldName: Ember.computed.alias('controllers.worldName.content'),

  breadcrumbs: function() {
    var trail = this.get('controllers.worldName.breadcrumbs');
    var breadcrumbs = Ember.A();

    breadcrumbs.pushObjects(trail);
    breadcrumbs.pushObject(Ember.Object.create({
      title: 'Maps',
      path: 'map_names',
      args:[this.get('controllers.worldName.content')]
    }));

    return breadcrumbs;
  }.property('controllers.worldName.breadcrumbs', 'controllers.worldName.content')

});
