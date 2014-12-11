import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

function random(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

Ember.fakeGet = function() {
  var delay = random(200, 4000);
  return new Ember.RSVP.Promise(function(resolve, reject) {
    Ember.run.later(function() {
      resolve(delay);
    }, delay);
  });
}

loadInitializers(App, config.modulePrefix);

export default App;
