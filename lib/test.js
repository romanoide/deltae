var xyz = require('./xyz');
var lab= require('./lab');
var hexcolor = "#007ace";
var deltae = require('./deltae.js');
var rgb = require('./rgb');

// rgb(hexcolor,function(R,G,B){
// 	xyz(R,G,B, function(X,Y,Z){
// 		console.log(X+" "+Y+" "+Z+" ");
// 		lab(X,Y,Z, function(L,A,B){
// 			deltae(L,A,B,function(){
// 				console.log('message');
// 			});
// 		});

// 	})
// })


module.exports = {
	lab: function(XYZ,callback){
		lab(XYZ,callback);
	},
	xyz: function(hexcolor,callback){
		xyz(hexcolor,callback);

	},
	hexcolor:function(hexcolor,callback){
		rgb(hexcolor,callback);
	},
	delta:function(color,compare,callback){
		

		lab(color,function(LabA){
			lab(compare,function(LabB){
				deltae(LabA,LabB,callback)

			})
		})


		
	}
}

//citas activas porx sem nombre, ap pat, apmat, fecnac,feccit, horari