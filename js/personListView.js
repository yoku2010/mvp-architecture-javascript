function PersonListView(){

	this._mHtml = $("<div>"+
		"<h1>Person List</h1>"+
			"<table id='person_table'>"+
			"<tr><th>Name</th><th>Age</th><th>City</th><th>Action</th></tr>"+
			"</table>"+
		"<h2>Add person details:</h2>"+
		"<input type='text' id='id_name' placeholder='Enter name'/>" +
		"<input type='text' id='id_age' placeholder='Enter Age'/>" +
		"<input type='text' id='id_city' placeholder='Enter City'/>" +
		"<input id='submit' type='submit' value='Add'/>"+
		"</div>");
}

PersonListView.prototype = {
	getHtml: function(){
		return this._mHtml;
	},
	addPersonHandler: function(handler){
		this._mHtml.find("#submit").click(function(){
			var name = this._mHtml.find("#id_name").val();
			var age = this._mHtml.find("#id_age").val();
			var city = this._mHtml.find("#id_city").val();
			this._mHtml.find("input[type='text']").val("");
			handler(name, age, city);
		}.bind(this));
	},
	addPerson: function(personView){
		this._mHtml.find("#person_table").append(personView.getHtml());
	}
}