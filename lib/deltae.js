var DeltaE = require('delta-e');

module.exports = function(LabA,LabB, callback){
	var color1 = {L: LabA.L, 
		A: LabA.a, 
		B: LabA.b};

	var color2 = {L: LabB.L, 
		A: LabB.a, 
		B: LabB.b};

	//console.log();
	callback(DeltaE.getDeltaE00(color1, color2));
}