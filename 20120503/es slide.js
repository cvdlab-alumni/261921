// DEF alpha = Bezier:<<0.1,0,0>,<2,0,0>,<0,0,4>,<1,0,5>>;
// DEF beta = Bezier:<<0,0,0>,<3,-0.5,0>,<3,3.5,0>,<0,3,0>>;

// STRUCT:<
// MAP:alpha:(Intervals:1:20),
// MAP:beta :(Intervals:1:20),
// MAP:(ProfileProdSurface:< alpha, beta >):
// (Intervals:1:20 * Intervals:1:20) >;


var domain0 = INTERVALS(1)(20);
var domain1 = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(20)]);

var control1 = [[0.1,0,0],[2,0,0],[0,0,4],[1,0,5]];
var control2 = [[0,0,0],[3,-0.5,0],[3,3.5,0],[0,3,0]];

var alphaF = BEZIER(S0)(control1);
var alphaF2 = BEZIER(S0)(control1);
var betaF = BEZIER(S0)(control2);

var alpha = MAP(alphaF)(domain0);
var beta = MAP(betaF)(domain0);

var prodSurface = MAP(BEZIER(S1)([alphaF, betaF]))(domain1);

var out = STRUCT([alpha, beta, prodSurface]);
DRAW (out);
