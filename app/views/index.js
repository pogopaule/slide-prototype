export default Ember.View.extend({
  didInsertElement: function() {
    var controller = this.get('controller');
    this.$('.container').bind('transitionend', function() {
      controller.send('transitionEnded');
    });
  }
});
