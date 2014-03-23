export default Ember.ArrayController.extend({

  needs: ['worldName', 'mapName'],

  breadcrumbMapName: Ember.computed.alias('controllers.mapName.content'),
  breadcrumbWorldName: Ember.computed.alias('controllers.worldName.content'),

  breadcrumbs: function() {
    var trail = this.get('controllers.mapName.breadcrumbs');
    var breadcrumbs = Ember.A();

    breadcrumbs.pushObjects(trail);
    breadcrumbs.pushObject(Ember.Object.create({
      title: 'Events',
      path: 'event_names',
      args:[this.get('controllers.worldName.content'), this.get('controllers.mapName.content')]
    }));

    return breadcrumbs;
  }.property('controllers.worldName.content', 'controllers.mapName.breadcrumbs', 'controllers.mapName.content')

});
