import Ember from 'ember';

export default Ember.Component.extend({
  show: Ember.computed('currentKw', function() {
    var currentKw = this.get('currentKw');
    var kw = this.get('kw');

    return kw >= currentKw && kw< currentKw+4;
  }),

  showChanged: function() {
    if(this.get('show') && !this.get('week')) {
      this.set('loading', true);
      var component = this;
      Ember.fakeGet().then(function(data) {
        component.set('loading', false);
        component.set('week', data);
      });
    }
  }.observes('show')
});
