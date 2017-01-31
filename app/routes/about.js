import Ember from 'ember';

let bookmarks = [{
  id: 1,
  title: 'Microsoft',
  link: 'https://www.microsoft.com/',
  about: 'At Microsoft our mission and values are to help people and businesses throughout the world realize their full potential.'
},
{
  id: 2,
  title: 'Wikipedia',
  link: 'https://en.wikipedia.org/wiki/Main_Page',
  about: 'The Free Encyclopedia'
},
{
  id: 3,
  title: 'Google',
  link: 'https://www.google.com/',
  about: null
}];

export default Ember.Route.extend({
  model() {
    return bookmarks;
  }
});
