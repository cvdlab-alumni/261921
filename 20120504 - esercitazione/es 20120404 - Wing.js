//wing profile

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);

var p0 = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];

var c1 = BEZIER(S0)(p0);
var curve1 = MAP(c1)(domain1);
//DRAW(curve1);

//prende i punti e restituisce un complesso simpliciale fatto da quei punti
function POLYPOINT (points) {
	//return SIMPLICIAL_COMPLEX(points)(AA(LIST)(points));
	//return SIMPLICIAL_COMPLEX(points)([[0],[1],[2],[3],[4]]); 
	return SIMPLICIAL_COMPLEX(points)(points.map(function (p,i) {
		return [i];
	}));
}

//polypoints
var p1 = COLOR([1,0,0])(POLYPOINT(p0));

DRAW(p1);

var t = T([2])([7])
var struct = STRUCT([p1,t,p1,t,p1]);
DRAW(struct);


var p0 = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];
var p1 = p0.map(function (p) {return [p[0],p[1],p[2]+10] });
var p2 = p0.map(function (p) {return [p[0],p[1]-5,p[2]+20] });
var p3 = p0.map(function (p) {return [p[0],p[1]+5,p[2]+30] });
var p4 = p0.map(function (p) {return [p[0],p[1],p[2]+40] });


var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);

var curves = STRUCT( CONS(AA(MAP)([c0,c1,c2,c3,c4])) (domain1) );
DRAW(curves);

var wing = BEZIER(S1)([c0,c1,c2,c3,c4]);
var surf = MAP(wing)(domain2);
DRAW(surf);

//usando BEZIER con selettore S2 si ottiene un solido, si deve utilizzare un dominio tridimensionale