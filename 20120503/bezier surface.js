// var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
// var c0 = BEZIER(S0)([[0,0,0],[10,0,0]]);
// var c1 = BEZIER(S0)([[0,2,0],[8,3,0],[9,2,0]]);
// var c2 = BEZIER(S0)([[0,4,1],[7,5,-1],[8,5,1],[12,4,0]]);
// var c3 = BEZIER(S0)([[0,6,0],[9,6,3],[10,6,-1]]);
// var out = MAP(BEZIER(S1)([c0,c1,c2,c3]))(domain);
// DRAW(out);

var domain0 = INTERVALS(1)(16);
var domain1 = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var domain = PROD1x1([domain0,domain0]);
var c0 = BEZIER(S0)([[0,0,0],[10,0,0]]);
var c1 = BEZIER(S0)([[0,2,0],[8,3,0],[9,2,0]]);
var c2 = BEZIER(S0)([[0,4,1],[7,5,-1],[8,5,1],[12,4,0]]);
var c3 = BEZIER(S0)([[0,6,0],[9,6,3],[10,6,-1]]);

var curve0 = MAP(c0)(domain0);
var curve1 = MAP(c1)(domain0);
var curve2 = MAP(c2)(domain0);
var curve3 = MAP(c3)(domain0);
var curves = STRUCT ([curve0, curve1, curve2, curve3])
DRAW( COLOR([1,0,0])(curves));

var out = MAP(BEZIER(S1)([c0,c1,c2,c3]))(domain);
DRAW( COLOR([0,0,1,0.5])(out) );