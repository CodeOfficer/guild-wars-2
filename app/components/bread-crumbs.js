export default Ember.Component.extend({
  tagName: 'ul',

  classNames: ['breadcrumb'],

  actions: {
    goto: function(content) {
      var path = content.get('path');
      var args = content.get('args');

      args.unshift(path);

      this.sendAction('action', args);
    }
  },
});
