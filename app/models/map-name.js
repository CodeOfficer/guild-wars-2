export default DS.Model.extend({

  map: DS.belongsTo('map', {async: true}),

  name: DS.attr('string')

});
