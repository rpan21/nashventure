'use strict';
module.exports = function(app) {
  var nashventure = require('../controllers/nashventuresController');


  app.route('/tasks/:urlID')
    .get(nashventure.read_a_task);
};
