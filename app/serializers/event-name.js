import ApplicationSerializer from 'appkit/serializers/application';

export default ApplicationSerializer.extend({

  extractArray: function(store, type, payload, id, requestType) {
    payload = {"event_names": payload};

    return this._super(store, type, payload, id, requestType);
  }

});
