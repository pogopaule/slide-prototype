export default Ember.ArrayController.extend({

  queryParams: ['kw'],
  kw: 3,

  containerStyle: Ember.computed('kw', function() {
    return 'left:-' + this.get('kw')*250 + 'px;';
  }),

  actions: {
    left: function() {
       this.decrementProperty('kw');
     },
     right: function() {
       this.incrementProperty('kw');
     },
     fastforward: function() {
       this.incrementProperty('kw', 5);
     },
     fastbackward: function() {
       this.decrementProperty('kw', 5);
     }
  }

});
