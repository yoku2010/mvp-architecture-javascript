var list 	= new PersonListPresenter(new PersonListView());
$("body").append(list.getView().getHtml());