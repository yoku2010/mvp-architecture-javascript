function PersonPresenter(view){
    this._mView = view;
    this._nModel = null;

    this._mView.deleteHandler(function () {
        this._mView.delete();
    }.bind(this));
}

PersonPresenter.prototype = {
    constructor: PersonPresenter,
    getView: function () {
        return this._mView;
    },
    setModel: function (model) {
        this._mModel = model;
        this._mView.setModel(this._mModel);
    }
}