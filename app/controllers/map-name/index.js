export default Ember.ObjectController.extend({

  needs: ['mapName'],

  breadcrumbs: Ember.computed.alias('controllers.mapName.breadcrumbs'),

  breadcrumbWorldName: Ember.computed.alias('controllers.mapName.breadcrumbWorldName')

});
