import ApplicationSerializer from 'appkit/serializers/application';

export default ApplicationSerializer.extend({

  extractArray: function(store, type, payload) {
    payload = {"world_names": payload};

    return this._super(store, type, payload);
  }

});
