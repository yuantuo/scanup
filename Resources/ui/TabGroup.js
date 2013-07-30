function TapGroups(){
	
	var self = Ti.UI.createTabGroup();
	

	//Scanner
	var Scanner = require('ui/Scanner');
	scanner =  new Scanner();
	
	var tab = Ti.UI.createTab({
				icon: 'KS_nav_views.png',
				title: 'Scanner',
				window: scanner
	});
	
	tab.addEventListener('focus', function(){
		Ti.App.fireEvent('app:startscanner');	
	});
	
	self.currentTab = tab;
	
	self.addTab(tab);
	
	
	// Offers
	var Offers = require('ui/Offers');
	offer = new Offers();
	
	var tab = Ti.UI.createTab({
				icon: 'KS_nav_ui.png',
				title: 'Offers',
				window: offer
	});
	
	tab.addEventListener('focus', function(){
		Ti.App.fireEvent('app:stopscanner');
	});
	
	self.addTab(tab);
	

	// Near by
	var NearBy = require('ui/NearBy');
	nearby = new NearBy();
	
	var tab = Ti.UI.createTab({
				icon: 'KS_nav_views.png',
				title: 'Near by',
				window: nearby
	});
	
	tab.addEventListener('focus', function(){
		Ti.App.fireEvent('app:stopscanner');
	});
	
	self.addTab(tab);	
	

	// Account
	var Account = require('ui/Account');
	account = new Account();
	
	var tab = Ti.UI.createTab({
				icon: 'KS_nav_ui.png',
				title: 'Account',
				window: account
	});
	
	
	tab.addEventListener('focus', function(){
		Ti.App.fireEvent('app:stopscanner');
	});
	
	self.addTab(tab);	
			
	return self;
}

module.exports = TapGroups;