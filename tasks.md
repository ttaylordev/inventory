

###Front
  ***Scratch***
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
      redirect if not authed (I can reference noServerProject)

      >routing for navMenu.
      workOrder route is not taking injections from customerDir.
      purchaseOrder route is not taking or showing mustaches for injectinos
      How do I recieve data from service??? and place it on customerDisp.html
        within the controller, do a .then, and in that .then I'll assign the information.

###Mvp mini
  dummy data
  get the object, display it


### FutureFeatures
  passport, and sessions
  feature creap!
    allow editing the customer, or the work order from the panes.
  make workOrder use customerDir, then on clicking the edit button bring in the customerDir as a modal.
