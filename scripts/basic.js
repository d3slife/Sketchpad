$(document).ready(function(){
	var container = $("<div class='container'></div>");
	var bContainer = $("<div class='bContainer'></div>");
	var tile = "div"
	var btn = $("<button type='button'>Reset Button!</button>");
		
	$("body").append(container);
	container.append(bContainer);
	bContainer.append(btn);
	scatter(tile, 16);
	
	$(document).on("mouseenter", ".tile", function(){
		$(this).css("background-color", "orange");
	});
	
	btn.click(function(){
		var cellsNumber = prompt("Hello stranger! Please enter number of cells.");
		$(".tile").remove();
		var contWidth = $("div.container").css("width").substr(0, $("div.container").css("width").indexOf("p"));
		var cellDim =  contWidth / cellsNumber - 2;
		scatter(tile, cellsNumber);
		$(".tile").css("width", cellDim + "px");
		$(".tile").css("height", cellDim + "px");
	});
	
	function scatter(elem, density) {
		for(var index = density * density; index > 0; index--) {
			var tempDiv = document.createElement(elem);
			$(tempDiv).attr("class", "tile");
			container.append(tempDiv);
		}
		
	};
});

