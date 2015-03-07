import Ember from 'ember';
import config from './config/environment';
var Router;

Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('gallery');
  return this.route('rotating-cube');
});

export default Router;