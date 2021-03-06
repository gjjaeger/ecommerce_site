import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('customer-index');
  this.route('store-index');
  this.route('payment');
  this.route('sales');
  this.route('graph');
});

export default Router;
