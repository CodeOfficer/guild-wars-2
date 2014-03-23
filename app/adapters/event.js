import ApplicationAdapter from 'appkit/adapters/application';

export default ApplicationAdapter.extend({

  findQuery: function() {
    // catch calls where the query is blank
    if (arguments[2] === undefined) {
      return EmberRSVP.resolve(Ember.A());
    }

    return this._super.apply(this, arguments)
  }

});
