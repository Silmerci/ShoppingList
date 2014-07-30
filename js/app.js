$(document).ready(function() {
	function getItem() {
		$('.add').keydown(function (enter) {
			console.log("typed character in list")
			if (enter.keyCode == 13) {
				postItem();
			}
		})
	}

	getItem();

})

