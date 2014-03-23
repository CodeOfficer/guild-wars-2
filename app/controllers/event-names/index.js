export default Ember.ArrayController.extend({

  needs: ['eventNames'],

  sortProperties: ['state'],

  breadcrumbs: Ember.computed.alias('controllers.eventNames.breadcrumbs'),

  breadcrumbMapName: Ember.computed.alias('controllers.eventNames.breadcrumbMapName'),
  breadcrumbWorldName: Ember.computed.alias('controllers.eventNames.breadcrumbWorldName')

});
