function PersonListPresenter(view){
	this._mView = view;
    this._nModel = null;
	this._mPerson = null;
		
	this._mView.addPersonHandler(function(name, age, city){
		this._mModel 	= new PersonModel(name, age, city);
		this._mPerson 	= new PersonPresenter(new PersonView());
		this._mPerson.setModel(this._mModel);
		
		this._mView.addPerson(this._mPerson.getView());
	}.bind(this));
}

PersonListPresenter.prototype = {
	getView: function () {
		return this._mView;
	}
}