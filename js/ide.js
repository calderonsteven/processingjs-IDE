var editor = ace.edit("code");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/java");

editor.getSession().on('change', function(e) {
    runSketch();
    persist();
});

$("#editor-container").hover(
	function(){
		$("#editor-container").removeClass("span4");
		$("#editor-container").addClass("span6");

		$("#sketch-container").removeClass("span8");
		$("#sketch-container").addClass("span4");
	}, 
	function(){
		$("#editor-container").removeClass("span6");
		$("#editor-container").addClass("span4");

		$("#sketch-container").removeClass("span4");
		$("#sketch-container").addClass("span8");
	}
);

runSketch();
loadLastSketch();

//save saveSketch
function persist(){
	var code = editor.getValue();
	localStorage.code = code;
}

function loadLastSketch(){
	if(localStorage.code){
		var code = localStorage.code;
		editor.setValue(code);
	}
}