export default Ember.ArrayController.extend({

  needs: ['mapNames'],

  sortProperties: ['name'],

  breadcrumbs: Ember.computed.alias('controllers.mapNames.breadcrumbs'),

  breadcrumbWorldName: Ember.computed.alias('controllers.mapNames.breadcrumbWorldName')

});
