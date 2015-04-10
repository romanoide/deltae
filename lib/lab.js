var xyz = require('./xyz')

//CIE-L*ab

module.exports= function(hexcolor, callback){

	xyz(hexcolor,function(XYZ){
		var_X = XYZ.X / 95.047           //ref_X =  95.047   Observer= 2°, Illuminant= D65
		var_Y = XYZ.Y / 100.000          //ref_Y = 100.000
		var_Z = XYZ.Z / 108.883          //ref_Z = 108.883

		if ( var_X > 0.008856 ) 
			var_X = Math.pow(var_X ,( 1/3 ))
		else                    
			var_X = ( 7.787 * var_X ) + ( 16 / 116 )
		if ( var_Y > 0.008856 ) 
			var_Y = Math.pow(var_Y ,( 1/3 ))
		else                    
			var_Y = ( 7.787 * var_Y ) + ( 16 / 116 )
		if ( var_Z > 0.008856 ) 
			var_Z = Math.pow(var_Z ,( 1/3 ))
		else                    
			var_Z = ( 7.787 * var_Z ) + ( 16 / 116 )

		var L = ( 116 * var_Y ) - 16
		var a = 500 * ( var_X - var_Y )
		var b = 200 * ( var_Y - var_Z )

		var Lab={
			L:L,
			a:a,
			b:b
		}
		//console.log(L+" "+a+" "+b+" ");
		callback(Lab);
		
	})
}
