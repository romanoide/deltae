# DeltaE Get color the difference from two hex color values

Implements the formulas from:
http://www.easyrgb.com/index.php?X=MATH

##Installation
--

##Usage
```
//Require the package
var color = require('deltae');

var colorA = "#007ace";
var colorB = "#017acf"

//Get the color difference
color.delta(colorA,colorB,function(delta){
	console.log(delta);
});


//You can also onvert rgb to XYZ

color.xyz(colorA, function(XYZ){
	var X = XYZ.X;
	var Y = XYZ.Y;
	var Z = XYZ.Z;
	console.log(X+" "+Y+" "+Z);
})

//Or CIE-Lab

color.lab(colorA,function(LAB){
	var L = LAB.L;
	var a = LAB.a;
	var b = LAB.b;
	console.log(L+" "+a+" "+b);	
});
```