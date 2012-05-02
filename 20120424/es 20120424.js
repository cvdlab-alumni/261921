// 2012 04 24

//CURVE DI HERMITE
//esempio
var manici = [[0,0],[10,0],[0,10],[10,10]];
var dominio = INTERVALS(1)(30);
var curva = CUBIC_HERMITE(S0)(manici);
var out = MAP(curva)(dominio);
DRAW(out);

//CURVE DI BEZIER
//esempio
var manici = [[0,0],[10,0],[0,10],[10,10]];
var dominio = INTERVALS(1)(30);
var curva = BEZIER(S0)(manici);
var out = MAP(curva)(dominio);
DRAW(out);


//4 curve
var p1 = [[0,0],[10,10]];
var p2 = [[0,0],[10,0],[10,10]];
var p3 = [[0,0],[10,0],[0,10],[10,10]];
var p4 = [[0,0],[10,0],[10,10],[0,10],[0,0]];

var domain = INTERVALS(1)(30);
var t = T([0])([15]);

var out = STRUCT([
MAP(BEZIER(S0)(p1))(domain), POLYLINE(p1), t,
MAP(BEZIER(S0)(p2))(domain), POLYLINE(p2), t,
MAP(BEZIER(S0)(p3))(domain), POLYLINE(p3), t,
MAP(BEZIER(S0)(p4))(domain), POLYLINE(p4)
]);

DRAW(out);