import ApplicationSerializer from 'appkit/serializers/application';

export default ApplicationSerializer.extend({

  extractSingle: function(store, primaryType, payload) {

    var id = Em.keys(payload.events)[0];

    payload = payload.events[id];
    payload.id = id;
    payload = {"event_detail": payload};

    return this._super(store, primaryType, payload);
  },

  normalizeHash: {
    event_detail: function(hash) {
      hash.map = hash.map_id;
      delete hash.map_id;

      return hash;
    }
  }

});
