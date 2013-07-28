function Login(){
	
	self = Ti.UI.createWindow({
    	backgroundColor:'#fff'
	});
	
	// A Toolbar created using View to make styling easier
	// Toolbar have 3 parts, left side, a divider and right side
	
	//left toolbar with image back
	var ToolbarLeft = Ti.UI.createView({
    	top:0,
		left:0,
    	width:'18%',
    	height:'10%',
    	backgroundColor:'#fff',
	});
	
	
	var backimage = Ti.UI.createImageView({
		image:'/image/back_down.jpg',
  		width: 'auto',
  		height: '50%'
	});
	
	
	backimage.addEventListener('click', function(){
		
		var LoginOrSignup = require('ui/LoginOrSignup');
		
		if (Ti.Platform.name === 'iPhone OS'){
			// This will only work on IPHONE NEEDED a MOBILE DEVISE TEST
			new LoginOrSignup().open({
				transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN
			});
		}
		else {
  			new LoginOrSignup().open();
		}
		
	});
	
	ToolbarLeft.add(backimage);
	
	self.add(ToolbarLeft);
	
	
	//divider
	var ToolbarDivider = Ti.UI.createView({
    	top:0,
		left:'19%',
    	width:'1px',
    	height:'10%',
    	backgroundColor:'#e5e5e5',
	});	
	
		
	self.add(ToolbarDivider)
	
	
	// right toolbar with label login
	// right toolbar
	var ToolbarRight = Ti.UI.createView({
    	top:0,
		right:0,
    	width:'80%',
    	height:'10%',
    	backgroundColor:"#fff"
	});
	
	
	var ToolbarRightLabel = Ti.UI.createLabel({
		text: 'Log in',
		left: '30%',
		color: '#00EB00',
		font: {fontSize:18,fontFamily:'Helvetica Neue', fontWeight:'bold' },
	});
	
	ToolbarRight.add(ToolbarRightLabel);
	
	self.add(ToolbarRight)
	
	
    // Horizontal Divider
	var HorizontalDivider1 = Ti.UI.createView({
    	top:'9%',
		left:0,
    	width:'100%',
    	height:'1px',
    	backgroundColor:'#e5e5e5',
	});	
	
	
	self.add(HorizontalDivider1);

	////////////////////////////////////////	
	
	var MainLoginView = Ti.UI.createView({
    	top:'9%',
		left:0,
    	width:'100%',
    	height:'90%',
    	backgroundColor:'#f4f4f4',
	});
		
	WelcomeLabel = Ti.UI.createLabel({
		text: 'Nice to see you again.',
		textAlign:'center',
		color:'#000',
		font:{fontSize:18,fontFamily:'Helvetica Neue', fontWeight:'bold' },
		top: '10%',
		width:'auto'
	});
	
	
	MainLoginView.add(WelcomeLabel);

	Welcometext = Ti.UI.createLabel({
		text: 'Every time you collect point and let your friends know, you get more chance in winning a Ipad.',
		textAlign:'center',
		color:'#c7c7c7',
		font:{fontSize:12,fontFamily:'Helvetica Neue', fontWeight:'bold' },
		top: '18%',
		left: '5%',
		right: '5%',
		width:'auto'
		
	});
	
	MainLoginView.add(Welcometext);
	
	// Input text field for email and password!
	
	var username = Titanium.UI.createTextField({  
    	color:'#336699',  
    	top:'30%',  
    	left:'10%',
    	right: '10%',  
    	width:'80%',  
    	height:'10%',  
    	hintText:'Email Address',
    	backgroundColor: 'white',
    	borderColor: '#e5e5e5', 
    	paddingLeft: 5, 
    	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE    
	});  
	
	username.addEventListener('blur', function(){
		
		if (username.value != '' && password.value != ''){
			loginBtn.backgroundColor = '#00E070';
			loginBtn.enabled = 'true';
			loginBtn.color = 'white';
		}
		else {
			loginBtn.backgroundColor = '#f4f4f4';
			loginBtn.enabled = 'false';
			loginBtn.color = '#949494';
		}
		
	});

	MainLoginView.add(username); 


	var password = Titanium.UI.createTextField({  
    	color:'#336699',  
    	top:'39%',  
    	left:'10%',
    	right: '10%',  
    	width:'80%',  
    	height:'10%',  
    	hintText:'Password',
    	backgroundColor: 'white',
    	borderColor: '#e5e5e5', 
    	paddingLeft: 5, 
    	passwordMask:true, 
    	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE    
	});  


	password.addEventListener('blur', function(){
		
		if (username.value != '' && password.value != ''){
			loginBtn.backgroundColor = '#00E070';
			loginBtn.enabled = 'true';
			loginBtn.color = 'white';
		}
		else {
			loginBtn.backgroundColor = '#f4f4f4';
			loginBtn.enabled = 'false';
			loginBtn.color = '#949494';
		}
		
	});
	
	MainLoginView.add(password); 
	
	
	var loginBtn = Titanium.UI.createButton({  
    	title:'Log in',  
    	top:'55%',  
    	left:'10%',
    	right: '10%',  
    	width:'80%',  
    	height:'10%', 
   		backgroundColor:'#f4f4f4',
   		style: 'PLAIN',
   		borderRadius: 0,
   		borderColor: '#949494',
   		color: '#949494',
   		font: {fontSize:16,fontFamily:'Helvetica Neue'},
   		enabled: false 
	}); 
	 
	 
	loginBtn.addEventListener('click', function(){
	
		if (username.value != '' && password.value != '')  
    	{  
			alert('User logged in!')
    	}  
    	else  
    	{  
        	alert("Username/Password are required");  
    	} 	
	});
	
	MainLoginView.add(loginBtn);
	
	self.add(MainLoginView);
			
	return self;
	
}

module.exports = Login;
