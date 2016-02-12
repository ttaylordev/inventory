###Included
  joblist
  addNewJob
  landing
  purchaseOrder
  workOrder
  menubar

###To add
  inventorySummary
    swaps Modal
  alertsView
  locationsModal
    selects what is to be displayed in each pane....
      eachPane: inventory, swapModal,
  display
    items
    vehicles
  adminPanel
    display
      users
      items
    notifications
      lowStock
        frequentlyUsed
        flaggedItems
      vehicles
    CRUD  functionality
      users
      items
      locations
      vehicles
<!-- TODO: front end endpoints -->
<!-- create a model,   -->
<!-- load em' all and use a .then to filter what I need from the object -->



###Front
  ***FromScratch***
    **InventoryDisp**
      route, view etc
    **locationSwitchModal**
    **swapModal**

  ***Styles***
    @addNewJob
    @landing
      center sign in --might have to add wrappers
      modify logo
      style logo position -- might need wrappers
    @alert
      style it
  ***HTML***
    @purchaseOrder
      add a submit button
        link it through the controller -> service -> server -> database --> then back through .then's
      take CustomerDir out of purchaseOrder
        populate it with: {
          user: "", -require
          location/vehicle: "", -require
          itemsRequested: [{
            itemName:"byID..." -require at least one.
          },]

        }
  ***Angular***
    **Views**
    **Modals**
      @addNewJob
      @workOrder \Make it appear within the jobList dropdowns
      @alert
    **Routing**
      @addNewJob
    **Connectivity**
      @workOrder \Make it appear within the jobList dropdowns
    **Services**

###Back
  ***Endpoints***

  ***Controllers***
   @Mentor:



      ***Later***
      redirect if not authed (I can reference noServerProject)

      >routing for navMenu.
      workOrder route is not taking injections from customerDir.
      purchaseOrder route is not taking or showing mustaches for injectinos
      How do I recieve data from service??? and place it on customerDisp.html
        within the controller, do a .then, and in that .then I'll assign the information.

###Mvp mini

  ***First***
    dummy data
    get the object, display it



  ***Last***
    get Auth working: use passport, through authSvc
      if(auth) --use noServerProject as a reference.


### FutureFeatures
  passport, and sessions
  feature creap!
    allow editing the customer, or the work order from the panes.
  make workOrder use customerDir, then on clicking the edit button bring in the customerDir as a modal.
