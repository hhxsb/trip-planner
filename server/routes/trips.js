var express = require('express');
var router = express.Router();

/* GET trips listing. */
router.get('/', function(req, res, next) {
  res.send({
      id: 12312,
      destination: {
          id: 23232,
          name: 'Beijing',
          address: 'somewhere',
      },
      from: {
        id: 23232,
        name: 'Seattle',
        address: 'somewhere else',
      },
  });
});

module.exports = router;
