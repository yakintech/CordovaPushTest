// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', function () {
        // Enable to debug issues.
        // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

        var notificationOpenedCallback = function (jsonData) {
            console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
        };


        window.plugins.OneSignal.init("onesignalid",
                                       { googleProjectNumber: "projectnumber" },
                                       notificationOpenedCallback);

        // Show an alert box if a notification comes in when the user is in your app.
        window.plugins.OneSignal.enableInAppAlertNotification(true);

        alert("test")
    }, false);



    function onDeviceReady() {


        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var element = document.getElementById("deviceready");
        element.innerHTML = 'Device Ready';
        element.className += ' ready';
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();