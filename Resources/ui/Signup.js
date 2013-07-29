function Signup(){
	
	self = Ti.UI.createWindow({
    	backgroundColor:'#fff',
    	width: '100%',
    	height: '100%'
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
		text: 'Sign up',
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
	
	
	var MainSignupView = Ti.UI.createView({
    	top:'9%',
		left:0,
    	width:'100%',
    	height:'92%',
    	backgroundColor:'#f4f4f4',
	});
		
	
	// Input text field for email and password!
	
	var username = Titanium.UI.createTextField({  
    	color:'#336699',  
    	top:'11%',  
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
		
		if (username.value != '' && password.value != '' && gender.value != ''){
			RegBtn.backgroundColor = '#00E070';
			RegBtn.enabled = 'true';
			RegBtn.color = 'white';
		}
		else {
			RegBtn.backgroundColor = '#f4f4f4';
			RegBtn.enabled = 'false';
			RegBtn.color = '#949494';
		}
		
	});
	
	MainSignupView.add(username);
	
	var gender = Titanium.UI.createTextField({ 
		value: '', 
    	color:'#336699',  
    	top:'20%',  
    	left:'10%',
    	right: '10%',  
    	width:'80%',  
    	height:'10%',  
    	hintText:'Gender',
    	backgroundColor: 'white',
    	borderColor: '#e5e5e5', 
    	paddingLeft: 5,
    	enabled: 'false', 
    	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE    
	}); 


	gender.addEventListener('click', function(){
		
		//Hide the god down keyborad!!
		username.blur();
		  
		if (!gender.hintText == '') {
			
			//setup data ojb for my picker.
			var data = {
						'Colume': 1,
						1: ['', 'Male', 'Female']
			};
		
			var genderpicker = require('ui/CustomPicker');
	   		new_picker = new genderpicker(gender, data, 'Gender');	
	    	MainSignupView.add(new_picker);
			new_picker.show();
			gender.hintText = '';
		}
		
	});
	
	
	Ti.App.addEventListener('app:pickerdone', function(){
		
		if (username.value != '' && password.value != '' && gender.value != ''){
			RegBtn.backgroundColor = '#00E070';
			RegBtn.enabled = 'true';
			RegBtn.color = 'white';
		}
		else {
			RegBtn.backgroundColor = '#f4f4f4';
			RegBtn.enabled = 'false';
			RegBtn.color = '#949494';
		}
		
	});
	
	
	MainSignupView.add(gender);
	
	//DOB Version 2 Not sure if Needs DOB INFO
	
	// Password
	var password = Titanium.UI.createTextField({  
    	color:'#336699',  
    	top:'30%',  
    	left:'10%',
    	right: '10%',  
    	width:'80%',  
    	height:'10%',  
    	hintText:'Password',
    	passwordMask:true,  
    	backgroundColor: 'white',
    	borderColor: '#e5e5e5', 
    	paddingLeft: 5, 
    	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE    
	}); 


	password.addEventListener('blur', function(){
		
		if (username.value != '' && password.value != '' && gender.value != ''){
			RegBtn.backgroundColor = '#00E070';
			RegBtn.enabled = 'true';
			RegBtn.color = 'white';
		}
		else {
			RegBtn.backgroundColor = '#f4f4f4';
			RegBtn.enabled = 'false';
			RegBtn.color = '#949494';
		}
		
	});
	
	MainSignupView.add(password);


	// reg btn
	var RegBtn = Titanium.UI.createButton({  
    	title:'Sign up',  
    	top:'50%',  
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
	
	
	RegBtn.addEventListener('click', function(){
		alert(username.value + ' have reg!');	
	});
	
	MainSignupView.add(RegBtn);
	

	self.add(MainSignupView);
	
	return self;
}

module.exports = Signup;