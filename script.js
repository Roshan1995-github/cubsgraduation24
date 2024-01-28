console.log("imported")

function databaseLink() {
	// var databaseLink = 'http://cubsseatbooking.test';
	var databaseLink = 'https://cubsgraduation24-14c569002e4e.herokuapp.com';

	return databaseLink;
}


function changeDisplay(elmnt, styl) {
	elmnt.style.display = styl;
}

function logout() {
	sessionStorage.removeItem("token")
	window.location.replace("login.html")
}
















