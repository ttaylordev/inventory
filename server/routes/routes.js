module.exports = function (app) {
  // Controllers
  const customerCtrl = require('./../controllers/customerController');
  const workOrderCtrl = require('./../controllers/workOrderController');
  const jobListCtrl = require('./../controllers/jobListController');


  // // customer EP's
  // create
  app.post('/customer', customerCtrl.create);
  // read
  app.get('/customer', customerCtrl.read);
  // update
  app.put('/customer/:id', customerCtrl.update);
  // delete
  app.delete('/customer/:id', customerCtrl.delete);

  // workOrder EP's
  app.post('/workOrder', workOrderCtrl.create);
  app.get('/workOrder', workOrderCtrl.read);
  app.put('/workOrder/:id', workOrderCtrl.update);
  app.delete('/workOrder/:id', workOrderCtrl.delete);

  // schedule EP, populated
  app.get('/schedule', jobListCtrl.readPop);


}
