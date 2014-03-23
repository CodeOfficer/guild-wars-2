export default Ember.ObjectController.extend({

  needs: ['worldName', 'mapName', 'eventNames'],

  breadcrumbMapName: Ember.computed.alias('controllers.mapName.content'),
  breadcrumbWorldName: Ember.computed.alias('controllers.worldName.content'),

  breadcrumbs: function() {
    var trail = this.get('controllers.eventNames.breadcrumbs');
    var breadcrumbs = Ember.A();

    breadcrumbs.pushObjects(trail);
    breadcrumbs.pushObject(Ember.Object.create({
      title: '...',
      path: 'event_name',
      args:[this.get('controllers.worldName.content'), this.get('controllers.mapName.content'), this.get('content')]
    }));

    return breadcrumbs;
  }.property('controllers.worldName.content', 'controllers.mapName.content', 'controllers.eventNames.breadcrumbs', 'content')

});
