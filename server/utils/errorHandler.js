module.exports = function () {
  var service = {
    init: init,
    logErr: logErr
  };
  return service;
  
  function init(err, req, res, next) {
    console.log('error handler initialized');
    var status = err.statusCode || 500;
    if (err.message) {
      res.send(status, err.message);
    } else {
      res.send(status, err);
    }
    next();
  }

  function logErr(err, req, res, next) {
    var status = err.statusCode || 500;
    console.error(status + ' ' + (err.message ? err.message : err));
    if (err.stack) {
      console.error(err.stack);
    }
    next(err);
  }
};
