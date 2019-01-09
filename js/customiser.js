var img;
var totalHeadImages = 4;
var totalChestImages = 3;
var totalArmImages = 3;
var totalLegImages = 2;
var heads = [];
var chests = [];
var arms = [];
var legs = [];
var HTMLString = "";

window.onload = function(){var grid = new Muuri('.grid', {dragEnabled: false,  dragSort: false});};
$(function(){	
  	console.log("Innit Fired");
	for(var i = 1; i <= totalHeadImages; i++){
		heads.push("helmet" + i);
	}
	for(var i = 1; i <= totalChestImages; i++){
		chests.push("chest" + i);
	}
	for(var i = 1; i <= totalHeadImages; i++){
		HTMLString += "<div class=\"item Item\"><div class=\"item-content\" ><img class=\"image\" data-type=\"head\" src=\"content/Items/Head/helmet" + i + ".png\"></div></div>"
	}
	$("#ItemsContainer").html(HTMLString);
	for(var i = 1; i <= totalChestImages; i++){
		HTMLString += "<div class=\"item Item\"><div class=\"item-content\" ><img class=\"image\" data-type=\"chest\" src=\"content/Items/Chest/chest" + i + ".png\"></div></div>"
	}
	$("#ItemsContainer").html(HTMLString);
	for(var i = 1; i <= totalArmImages; i++){
		HTMLString += "<div class=\"item Item\"><div class=\"item-content\" ><img class=\"image\" data-type=\"arm\" src=\"content/Items/Arms/arms" + i + ".png\"></div></div>"
	}
	for(var i = 1; i <= totalLegImages; i++){
		HTMLString += "<div class=\"item Item\" class=\"Item\"><div class=\"item-content\" ><img class=\"image\" data-type=\"leg\" src=\"content/Items/Legs/legs" + i + ".png\"></div></div>"
	}
	$("#ItemsContainer").html(HTMLString);
	$("#ItemsContainer").html(HTMLString);
	$(".image").draggable({
		proxy: 'clone',
		revert: true,
		revertDuration: 200,
		//onDrag:function(e){
			//var target = e.target;
			//$(target).css("transform", "translateX(0)");
			//console.log(jQuery._data(target, "events"));
			//}
	});
	$("#Customiser").droppable({
		accept: ".image",
		onDrop:function(e, source){
		console.log("dropped");
		console.log($(source).attr("src"));
		UpdateImage(e, source);
	}
	});
	
	if(localStorage && localStorage.getItem('head')){
		$("#characterHead").find("img").attr("src", localStorage.getItem('head'));
	}
	if(localStorage && localStorage.getItem('chest')){
		$("#characterChest").find("img").attr("src", localStorage.getItem('chest'));
	}
	if(localStorage && localStorage.getItem('arms')){
		$("#characterArm1").find("img").attr("src", localStorage.getItem('arms'));
		$("#characterArm2").find("img").attr("src", localStorage.getItem('arms'));
	}
	if(localStorage && localStorage.getItem('legs')){
		$("#characterLeg1").find("img").attr("src", localStorage.getItem('legs'));
		$("#characterLeg2").find("img").attr("src", localStorage.getItem('legs'));
	}
	
  });

  
function UpdateImage(e, ui){
	console.log("Updating Image");
	var type = $(ui).data("type");
	console.log(type);
	if (type == "head"){
		console.log("changing head");
		$("#characterHead").find("img").attr("src", $(ui).attr("src"));
		localStorage.setItem('head', $(ui).attr("src"))
	}
	if (type == "chest"){
		console.log("changing chest");
		$("#characterChest").find("img").attr("src", $(ui).attr("src"));
		localStorage.setItem('chest', $(ui).attr("src"))
	}
	if (type == "arm"){
		console.log("changing arms");
		$("#characterArm1").find("img").attr("src", $(ui).attr("src"));
		$("#characterArm2").find("img").attr("src", $(ui).attr("src"));
		localStorage.setItem('arms', $(ui).attr("src"))
	}
	if (type == "leg"){
		console.log("changing legs");
		$("#characterLeg1").find("img").attr("src", $(ui).attr("src"));
		$("#characterLeg2").find("img").attr("src", $(ui).attr("src"));
		localStorage.setItem('legs', $(ui).attr("src"))
	}
}
