export default Ember.ObjectController.extend({

  needs: ['eventName'],

  breadcrumbs: Ember.computed.alias('controllers.eventName.breadcrumbs'),

  breadcrumbMapName: Ember.computed.alias('controllers.eventName.breadcrumbMapName'),
  breadcrumbWorldName: Ember.computed.alias('controllers.eventName.breadcrumbWorldName')

});
