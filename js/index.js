function onLoad(){
    document.addEventListener('deviceready', onDeviceReady, false);
}
function onDeviceReady(){
    alert('Device is now ready');
    app.initialize();
}

var app = {
  // constructor 
  initialize: function() {
    var pushNotification = window.plugins.pushNotification;
    pushNotification.register(app.successHandler, app.errorHandler,{"senderID":"628189894548","ecb":"app.onNotificationGCM"});
  },
   successHandler: function(result) {
    alert('Callback Success! Result = '+result)
  },
  errorHandler:function(error) {
    alert('pushNorification.register error: ' +error);
  },
  onNotificationGCM: function(e) {
    switch( e.event )
    {
      case 'registered':
        if ( e.regid.length > 0 )
        {
            console.log("Regid " + e.regid);
            alert('registration id = '+e.regid);
        }
        break;

      case 'message':
        // this is the actual push notification. its format depends on the data model from the push server
        alert('message = '+e.message+' msgcnt = '+e.msgcnt);
        break;

      case 'error':
        alert('GCM error = '+e.msg);
        break;

      default:
        alert('An unknown GCM event has occurred');
        break;
    }
  }
}