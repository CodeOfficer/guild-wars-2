import ApplicationAdapter from 'appkit/adapters/application';

export default ApplicationAdapter.extend({

  buildURL: function(type, id) {
    return this._super(type) + "?map_id=%@".fmt(id);
  }

});
