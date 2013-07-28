function CustomPicker(element, data, hinttext){
	
	
	self = Ti.UI.createView({
		height: '50%',
		width: '100%',
		bottom: '0px',
		opacity: '0.8',
		backgroundColor: 'black'
	});
	
	topview = Ti.UI.createView({
		height: '20%',
		width:'100%',
		top: '0px',
		backgroundColor: 'black'
	});
	
	donebtn = Ti.UI.createButton({
		title:'Done',  
    	top:'20%', 
    	right: '5%', 
    	width: '15%',  
    	height:'60%',  
    	borderRadius:1,
    	backgroundColor:'#00EB00',
   		style: 'PLAIN',  
    	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14} 
	});
	
	donebtn.addEventListener('click', function(){
		self.hide();
		element.hintText = hinttext;
		Ti.App.fireEvent('app:pickerdone');
	});
	
	topview.add(donebtn);

	self.add(topview);
	
	//picker view
	
	
	pickerview = Ti.UI.createView({
		height: '80%',
		width:'100%',
		top: '20%',
		backgroundColor: 'black'
	});
	
	
	arr =[];
	
	for (var i = 1; i <= data['Colume']; i++) {
		
		var name = 'column' + i;
		
		name = Ti.UI.createPickerColumn();
		
		for (var j=0; j < data[i].length; j++ ){
						
			var row = Ti.UI.createPickerRow({
 					   		title: data[i][j]
  			});
  			
  			name.addRow(row);
		};
		
		arr.push(name);
	}
	
		
	var picker = Ti.UI.createPicker({
  		columns: arr,
  		selectionIndicator: true,
  		useSpinner: true, // required in order to use multi-column pickers with Android
  		top:0
	});
	
	
	picker.addEventListener('change',function(e) {
		col = e.columnIndex + 1;
    	element.value = data[col][e.rowIndex];
	});

	pickerview.add(picker);
	
	self.add(pickerview);
	
	self.hide();
	
	return self;
	
}

module.exports = CustomPicker;
