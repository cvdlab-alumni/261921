//NUBS = Non-Uniform B-Spline
//le curve di secondo grado hanno la proprietà di interpolare i punti iniziali e finali 
//ed i mediani dei segmenti congiungenti i punti
//sono curve approssimante - solo il secondo grado ha questa proprietà
//NUBS(S0)(nodi)(controllo)

var domain = INTERVALS(1)(30);
//DOMINIO SEMPRE DEFINITO IN 0,1
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);

var controls = [[0,0,0],[2,5,0],[7,3,0],[9,7,0],[12,2,0]];
var knots = [0,0,0,1,2,3,3,3];
var c1 =  NUBS(S0)(2)(knots)(controls);
var curve1 = MAP(c1)(domain);
DRAW(curve1);

var controls2 = [[0,0,0],[2,5,3],[7,3,6],[9,7,-2],[12,2,-3]];
var knots2 = [0,0,0,1,2,3,3,3];
var c2 =  NUBS(S0)(2)(knots2)(controls2);
var curve2 = MAP(c2)(domain);
DRAW(curve2);

var s12 = BEZIER(S1)([c1,c2]);
var surf = MAP (s12)(domain2);
DRAW (surf);