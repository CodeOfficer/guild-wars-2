import DebugAdapter from 'appkit/adapters/debug';

export default DS.ActiveModelAdapter.extend({

  host: 'https://api.guildwars2.com',

  namespace: 'v1',

  buildURL: function(type, id) {
    return this._super(type, id) + ".json";
  }

});
