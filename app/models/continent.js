export default DS.Model.extend({

  continent_dims: DS.attr(),
  floors: DS.attr(),
  max_zoom: DS.attr(),
  min_zoom: DS.attr(),
  name: DS.attr('string')

});
