
//menu dropdown click-away function
$ (function() {
	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth<768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});

//placing the main content in the placeholder of the main html

(function (global){
	var test = {};

	var homeHtml = "snippets/home-snippets.html";

	//convenience function for inserting innerHTML for 'select' (important!)

	var insertHtml = function (selector, html) {
		var targeElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	// show loading icon inside element identified by 'selector'

	var showLoading = function (selector) {
		var html = "<div class= 'text-center'>";
		html += "<img src= 'images/ajax-loader.gif'></div>";
		insertHtml(selector, html);
			};

// Remove the class 'active' from home and switch to Menu button
var switchMenuToActive = function () {
  // Remove 'active' from home button
  var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;

  // Add 'active' to menu button if not already there
  classes = document.querySelector("#navMenuButton").className;
  if (classes.indexOf("active") == -1) {
    classes += " active";
    document.querySelector("#navMenuButton").className = classes;
  }
};


	//on page load (before images or css)

	document.addEventListener ("DomContentLoaded", function (event){

	//inside this..on first load, show homw view
	
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		homeHtml,
		function(responseText){
			document.querySelector ("#main-content")
			.innerHTML = responseText;
		},
		false);	
	});

	global.$test = test;

})(window);