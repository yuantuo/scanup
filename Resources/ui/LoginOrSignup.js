function LoginOrSignup(){
	
	// Create a window with white background
	var self = Ti.UI.createWindow({
    	backgroundColor:'#fff'
	});
	
	
	// A Toolbar created using View to make styling easier
	// Toolbar have 3 parts, left side, a divider and right side
	
	
	//left toolbar with label
	var ToolbarLeft = Ti.UI.createView({
    	top:0,
		left:0,
    	width:'80%',
    	height:'10%',
    	backgroundColor:'#fff',
	});


	var logoimage = Ti.UI.createImageView({
  		image:'/image/logo.png',
  		top: 6,
  		width: 'auto'
	});
	

	ToolbarLeft.add(logoimage);
	
	self.add(ToolbarLeft);


	//divider
	var ToolbarDivider = Ti.UI.createView({
    	top:0,
		left:'81%',
    	width:'1px',
    	height:'10%',
    	backgroundColor:'#e5e5e5',
	});	
	
	self.add(ToolbarDivider)


	// right toolbar
	var ToolbarRight = Ti.UI.createView({
    	top:0,
		right:0,
    	width:'18%',
    	height:'10%',
    	backgroundColor:"#fff"
	});
	
	
	var questionicon = Ti.UI.createImageView({
  		image:'/image/qustionicon.png',
  		top: 0,
  		width: 'auto'
	});
	
	ToolbarRight.add(questionicon);
	self.add(ToolbarRight);
	
	
	// Horizontal Divider
	var HorizontalDivider1 = Ti.UI.createView({
    	top:'10%',
		left:0,
    	width:'100%',
    	height:'1px',
    	backgroundColor:'#e5e5e5',
	});	
	
	
	self.add(HorizontalDivider1);
	
	// End of toolbar
	// Main Screen Login with Fackbook
	
	var FbLoginView = Ti.UI.createView({
    	top:41,
		left:0,
    	width:'100%',
    	height:'70%',
    	backgroundColor:'#f4f4f4',
	});
	
	
	var LoginFbLabel = Titanium.UI.createLabel({
		color:'#000',
		text: 'Log in or sign up with Facebook:',
		font:{fontSize:15,fontFamily:'Helvetica Neue'},
		top: '25%',
		width:'auto'
	});
	
	FbLoginView.add(LoginFbLabel);
		
	var FbLoginIcon = Ti.UI.createImageView({
		image:'/image/login-with-facebook.png',
  		top: '35%',
  		width: 'auto'
	});
	
	FbLoginView.add(FbLoginIcon);

	var FbtextLabel = Ti.UI.createLabel({
		color: '#c7c7c7',
		text: "We'll never post anything without your permission",
		font:{fontSize:10,fontFamily:'Helvetica Neue'},
		top: '50%',
		width: 'auto'
	});

	FbLoginView.add(FbtextLabel);

	
	// Need a Facebook login api here!!
		
	self.add(FbLoginView);
	
	
	// Horizontal Divider 2
	var HorizontalDivider2 = Ti.UI.createView({
    	top:'78%',
		left:0,
    	width:'100%',
    	height:'1px',
    	backgroundColor:'#e5e5e5',
	});	
	
	
	self.add(HorizontalDivider2);	 
	
	
	// User email or sign up
	
	
	var EmailLoginView = Ti.UI.createView({
    	top:'78%',
		left:0,
    	width:'100%',
    	height:'22%',
    	backgroundColor:'#d5d5d5',
	});
	

	
	var EmailLoginLabel = Ti.UI.createLabel({
				
		color: '#949494',
		text: "Use your email address",
		font:{fontSize:16,fontFamily:'Helvetica Neue'},
		top: '10%',
		width: 'auto'
		
	});
	

	EmailLoginView.add(EmailLoginLabel);
	
	
	var loginbtn = Ti.UI.createButton({
		title: 'Login',
   		top: '40%',
   		width: 100,
   		height: '30%',
   		left: '10%',
   		backgroundColor:'#d5d5d5',
   		style: 'PLAIN',
   		borderRadius: 0,
   		borderColor: '#949494',
   		color: '#949494',
   		font: {fontSize:16,fontFamily:'Helvetica Neue'}
	});
	
	
	loginbtn.addEventListener('click', function(){
		
		var Login = require('ui/Login');		
		
		if (Ti.Platform.name === 'iPhone OS'){
			// This will only work on IPHONE NEEDED a MOBILE DEVISE TEST
			new Login().open({
				transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP
			});
		}
		else {
  			new Login().open();
		}
		
	});
	
	EmailLoginView.add(loginbtn);


	var signupbtn = Ti.UI.createButton({
		title: 'Sign up',
   		top: '40%',
   		width: 100,
   		height: '30%',
   		right: '10%',
   		backgroundColor:'#d5d5d5',
   		style: 'PLAIN',
   		borderRadius: 0,
   		borderColor: '#949494',
   		color: '#949494',
   		font: {fontSize:16,fontFamily:'Helvetica Neue'}
	});	
	
	
	signupbtn.addEventListener('click', function(){
		
		var Signup = require('ui/Signup');
		
		
		if (Ti.Platform.name === 'iPhone OS'){
			// This will only work on IPHONE NEEDED a MOBILE DEVISE TEST
			new Signup().open({
				transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP
			});
		}
		else {
  			new Login().open();
		}
		
	});
	
	EmailLoginView.add(signupbtn);	

	self.add(EmailLoginView);
		
	return self;

}

module.exports = LoginOrSignup;