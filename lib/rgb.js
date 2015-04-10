module.exports = function(hexcolor, callback){
	var R = parseInt(hexcolor.substring(1, 3),16);
	var G = parseInt(hexcolor.substring(3, 5),16)
	var B = parseInt(hexcolor.substring(5, 7),16);
	
	var RGB ={
		R:R,
		G:G,
		B:B
	}
	callback(RGB);
} 
