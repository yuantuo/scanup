//This need to be in a module!! tok
var fb = require('facebook');
fb.appid = '199388276895928';
fb.permissions = ['publish_stream']; // Permissions your app needs
fb.forceDialogAuth = true;
fb.addEventListener('login', function(e) {
	if (e.success) {
		var TabGroups = require('ui/TabGroup');
		new TabGroups().open();
        			//alert('Logged In');
	} else if (e.error) {
    	alert(e.error);
	} else if (e.cancelled) {
    	alert("Canceled");
	}
});

var LoginOrSignup = require('ui/LoginOrSignup');
new LoginOrSignup().open();

