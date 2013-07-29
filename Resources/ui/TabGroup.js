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
	
	self.addTab(tab);
	

	// Near by
	var NearBy = require('ui/NearBy');
	nearby = new NearBy();
	
	var tab = Ti.UI.createTab({
				icon: 'KS_nav_views.png',
				title: 'Near by',
				window: nearby
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
	
	self.addTab(tab);	
	
			
	return self;
}

module.exports = TapGroups;