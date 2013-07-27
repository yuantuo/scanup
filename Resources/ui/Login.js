function Login(){
	
	self = Ti.UI.createWindow({
		title: 'Login',
    	backgroundColor:'#fff'
	});
	
	
	label = Ti.UI.createLabel({
		text: 'Login',
		textAlign:'center'
	});
	
	self.add(label);
		
	cancelbtn = Ti.UI.createButton({
		title: 'Back',
		top: '80%',
	});
	
	cancelbtn.addEventListener('click', function(){
		
		var LoginOrSignup = require('ui/LoginOrSignup');
		
		// This will only work on IPHONE NEEDED a MOBILE DEVISE TEST
		new LoginOrSignup().open({
			transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN
		});
	});
	
	self.add(cancelbtn);
	
	return self;
	
}

module.exports = Login;
