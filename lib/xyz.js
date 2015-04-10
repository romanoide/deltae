var hex = require('./rgb')

module.exports = function(hexcolor, callback){

	hex(hexcolor,function(RGB){
		console.log(RGB);
		var_R = ( RGB.R / 255 )        //R from 0 to 255
		var_G = ( RGB.G / 255 )        //G from 0 to 255
		var_B = ( RGB.B / 255 )        //B from 0 to 255

		if ( var_R > 0.04045 ) 
			var_R = Math.pow((( var_R + 0.055 ) / 1.055 ) ,2.4)
		else                   
			var_R = var_R / 12.92
		if ( var_G > 0.04045 ) 
			var_G = Math.pow((( var_G + 0.055 ) / 1.055 ) ,2.4)
		else                   
			var_G = var_G / 12.92
		if ( var_B > 0.04045 ) 
			var_B = Math.pow((( var_B + 0.055 ) / 1.055 ) ,2.4)
		else                   
			var_B = var_B / 12.92

		var_R = var_R * 100
		var_G = var_G * 100
		var_B = var_B * 100

		//Observer. = 2°, Illuminant = D65
		var X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805
		var Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722
		var Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505

		var XYZ = {
			X:X,
			Y:Y,
			Z:Z
		}
		//lab(X,Y,Z);
		//console.log(XYZ);
		callback(XYZ);
	})
}