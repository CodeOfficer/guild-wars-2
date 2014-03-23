export default Ember.ObjectController.extend({

  needs: ['worldName', 'mapNames'],

  breadcrumbWorldName: Ember.computed.alias('controllers.worldName.content'),

  breadcrumbs: function() {
    var trail = this.get('controllers.mapNames.breadcrumbs');
    var breadcrumbs = Ember.A();

    breadcrumbs.pushObjects(trail);
    breadcrumbs.pushObject(Ember.Object.create({
      title: this.get('content.name'),
      path: 'map_name',
      args:[this.get('controllers.worldName.content'), this.get('content')]
    }));

    return breadcrumbs;
  }.property('controllers.worldName.content', 'controllers.mapNames.breadcrumbs', 'content')

});
