export default Ember.ArrayController.extend({

  needs: ['worldNames'],

  sortProperties: ['name'],

  breadcrumbs: Ember.computed.alias('controllers.worldNames.breadcrumbs'),

  europeanWorldNames: function() {
    var content = this.get('arrangedContent');
    return content.filter(function(worldName) {
      return worldName.get('isEU');
    });
  }.property('arrangedContent'),

  americanWorldNames: function() {
    var content = this.get('arrangedContent');
    return content.filter(function(worldName) {
      return worldName.get('isUS');
    });
  }.property('arrangedContent')

});
