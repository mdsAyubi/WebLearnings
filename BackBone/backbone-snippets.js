WebSiteModel = Backbone.Model.extend({
	
	defaults: {
		name : "Unknown",
		barcode : -1
	},

	initialize: function(){
		alert("Helo Mom!!!");
	}
});

$(document).ready(function(){
	var page = new WebSiteModel();
	alert ("Page title is: "+page.get("name") +"and barcode is" + page.get("barcode"));
})