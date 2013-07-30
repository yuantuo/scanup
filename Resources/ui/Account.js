function Account(){
	
	var self = Ti.UI.createWindow({
		title: 'Account',
    	backgroundColor:'#fff'
	});
	
	
	logoutbtn = Ti.UI.createButton({
		title: 'logout'
	});
	
	logoutbtn.addEventListener('click', function(){
		Ti.App.fireEvent('app:closescanner');
		fb.logout();
		var LoginOrSignup = require('ui/LoginOrSignup');
		new LoginOrSignup().open();
	});
	
	self.add(logoutbtn);

	return self;
	
}

module.exports = Account;