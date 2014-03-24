import ApplicationSerializer from 'appkit/serializers/application';

export default ApplicationSerializer.extend({

  extractSingle: function(store, primaryType, payload) {

    var id = Em.keys(payload.maps)[0];

    payload = payload.maps[id];
    payload.id = id;
    payload = {"map": payload};

    return this._super(store, primaryType, payload);
  }

});
