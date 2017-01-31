export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.get('/users');
  this.get('/users/:id');
  this.post('/users');
  this.put('/users/:id');
  this.patch('/users/:id');
  this.del('/users/:id');

  //this.get('/bookmarks');
  this.get('/bookmarks/:id');
  this.post('/bookmarks');
  this.put('/bookmarks/:id');
  this.patch('/bookmarks/:id');
  this.del('/bookmarks/:id');

  this.get('/users', function (db, request) {
    let users = [];

    if (Object.keys(request.queryParams).length === 0) {
      users = db.users.all();
    } else {
      let filterByIsAdmin = request.queryParams['isAdmin'];
      users = db.users.where({isAdmin: filterByIsAdmin});
    }
    return users;
  });

  this.get('/bookmarks', function (db, request) {
    let bookmarks = [];

    if (Object.keys(request.queryParams).length === 0) {
      bookmarks = db.bookmarks.all();
    } else {
      bookmarks = db.bookmarks.where({about: null, id: 3});
    }

    return bookmarks;
  });
}
