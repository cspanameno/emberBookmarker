import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('bookmarks', function() {
    this.route('new');

    this.route('edit', {
      path: '/edit/:bookmark_id'
    });
  });

  this.route('page-not-found', {
    path: '/*wildcard'
  });
});

export default Router;
