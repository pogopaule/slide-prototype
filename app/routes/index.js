export default Ember.Route.extend({
  model: function() {
    var weeks = [];
    for(var i=0; i<104; i++) {
      weeks.pushObject(Ember.Object.create({kw: i}));
    }
    return weeks;
  },

  actions: {
    transitionEnded: function() {
      this.set('controller.currentKw', this.get('controller.kw'));
    }
  }
});
