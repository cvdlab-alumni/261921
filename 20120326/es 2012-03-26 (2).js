// Sintassi:
//HIDE(model);
//SHOW(model);
//DRAW(model);
//COLOR([0,0,0])(model);

var c = CUBOID ([1,2,3]);
DRAW(c);

var domain = DOMAIN([[1.5, 5.5]])([4]);
var domain2 = DOMAIN([[1.5,5.5],[1,3]])([4,2]);
var domain3 = DOMAIN([[1.5,5.5],[1,3],[0,1]])([4,2,1]);


// ESERCIZIO 1
var domain1 = DOMAIN([[1, 5]])([4]);
var domain2 = DOMAIN([[2,6],[1,3]])([4,2]);
var domain3 = DOMAIN([[3,7],[2,4],[1,2]])([4,2,2]);

DRAW(domain1);
DRAW(domain2);
DRAW(domain3);

// ESERCIZIO 1.1
var domain= DOMAIN([[0,10]])([10]);

var mapping = function (p){
 var u = p[0];
 return [u, 1];
};

var mapped = MAP(mapping)(domain);
DRAW(mapped);

// ESERCIZIO 2
var bisettrice= DOMAIN([[0,10]])([10]);
var mapping2 = function (p){
 var u = p[0];
 return [u, u];
};
var mappedBis = MAP(mapping2)(bisettrice);
DRAW(mappedBis);

//ESERCIZIO 3
var dominio3 = DOMAIN([[0, 10*PI]])([36]);

var mapping3 = function (p){
	var u = p[0];
	return [u, SIN(u)];
}
var mapped3 = MAP(mapping3)(dominio3);
DRAW(mapped3);

//ESERCIZIO 4
var drawCircler = function (r,n){

	var dominio4 = DOMAIN([[0, 2*PI]])([n]);

	var mapping4 = function (p){
		var u = p[0];
		return [r*COS(u), r*SIN(u)];
	}
	var mapped4 = MAP(mapping4)(dominio4);
	
	DRAW(mapped4);
}

//ESERCIZIO 5
var drawCylinder = function(r,h,n,m){

	var dominio5 = DOMAIN([[0, 2*PI],[0,h]])([n,m]);
	
	var mapping5 = function (p){
		var u = p[0];	//0-2pi
		var v = p[1];	//0-h
		return [r*COS(u), r*SIN(u), v];
	}
	
	var mapped5 = MAP(mapping5)(dominio5);
	DRAW(mapped5);
}

//ESERCIZIO 6
var drawSphere = function(r,n,m){

	var dominio6 = DOMAIN([[0, 2*PI],[0,PI]])([n,m]);
	
	var mapping6 = function (p){
		var a = p[0];	//0-2pi
		var b = p[1];	//0-h
		return [r*COS(a)*COS(b), r*COS(a)*SIN(b), r*SIN(a)];
	}
	
	var mapped6 = MAP(mapping6)(dominio6);
	COLOR([0,0,255])(mapped6);
	DRAW(mapped6);
}
drawSphere (1,40,40);