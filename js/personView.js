function PersonView(){
    this._html = $("<tr><td></td><td></td><td></td><td></td></tr>");
}

PersonView.prototype = {
    getHtml: function () {
        return this._html;
    },
    setModel: function (model) {
        this._html.find("td:eq(0)").html(model.getName());
        this._html.find("td:eq(1)").html(model.getAge());
        this._html.find("td:eq(2)").html(model.getCity());
    },
    deleteHandler: function(handler){
        $("<button></button>").text("delete").click(handler).appendTo(this._html.find("td:eq(3)"));
    },
    delete: function () {
        this._html.remove();
    }
}