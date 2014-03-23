export default Ember.ObjectController.extend({

  needs: ['worldName'],

  breadcrumbs: Ember.computed.alias('controllers.worldName.breadcrumbs')

});
