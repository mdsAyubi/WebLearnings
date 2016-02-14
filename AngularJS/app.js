var myApp = angular.module("myApp",["ngRoute"]);

myApp.config(function($routeProvider) {

	$routeProvider
	.when("/books",{
		templateUrl:"partials/books-list.html",
		controller:"BookListCtrl"
	})
	.when("/kart", {
		templateUrl:"partials/kart-list.html",
		controller:"KartListCtrl"
	})
	.otherwise({
		redirectTo: "/books"
	})

});

myApp.controller("KartListCtrl", function($scope){
	$scope.kart = [];

	$scope.buy = function(book) {
		console.log("buy",book);
	}
});


myApp.controller("HeaderCtrl", function($scope) {
	$scope.appDetails = {};
	$scope.appDetails.title = "BooKart";
	$scope.appDetails.tagline = "We have 1 million books for you";
});

myApp.controller("BookListCtrl", function($scope) {

	$scope.books = [
		{
			imgUrl:"adultery.jpeg",
			name:"Adultery",
			price:205,
			rating:4,
			binding:"Paperback",
			publisher: "Random",
			releaseDate: "12-08-2014",
			details:"Blah..."
		},
		{
			imgUrl:"adultery.jpeg",
			name:"Adultery",
			price:205,
			rating:4,
			binding:"Paperback",
			publisher: "Random",
			releaseDate: "12-08-2014",
			details:"Blah..."
		},
		{
			imgUrl:"adultery.jpeg",
			name:"Adultery",
			price:205,
			rating:4,
			binding:"Paperback",
			publisher: "Random",
			releaseDate: "12-08-2014",
			details:"Blah..."
		}
	];

	$scope.addToCart = function(book){
		console.log("added to cart..."+book);
	}
});


