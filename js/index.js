 function onLoad(){
      document.addEventListener("deviceready", onDeviceReady, true);
 }
 function onDeviceReady(){
      navigator.notification.alert("PhoneGap is working!!");
      alert("test alert");
 }