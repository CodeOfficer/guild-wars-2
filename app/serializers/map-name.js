import ApplicationSerializer from 'appkit/serializers/application';

export default ApplicationSerializer.extend({

  extractArray: function(store, type, payload) {
    payload = {"map_names": payload};

    return this._super(store, type, payload);
  },

  normalizeHash: {
    map_names: function(hash) {
      hash.map = hash.id;

      return hash;
    }
  }

});
