//Valerio Domenico Di Paolo - matr. 261921 - exercise 3


// I punti di controllo per la generazione delle curve del profilo degli
//stabilizzatori orizzontali e di quello verticale sono stati modellati
//indipendentemente per cercare di mantenere la differente proporzione e lunghezza


var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);

var fuselageColor = [1,1,0];

//HORIZONTAL STABILIZER
//punti di controllo di riferimento per lo stabilizzatore orizzontale
var p0 = [[10,2.5,0],[0,5,0],[0,0,0],[10,2.5,0]];
//punti per generare le altre curve di controllo per la sezione dello stabilizzatore
var p1 = p0.map(function (p) {return [p[0],p[1],p[2]+3] });
var p2 = p0.map(function (p) {return [p[0],p[1],p[2]+6] });
var p3 = p0.map(function (p) {return [p[0],p[1],p[2]+9] });
var p4 = p0.map(function (p) {return [p[0],p[1],p[2]+11] });
var p5 = [[6,2.5,12]];
//curve controllo sezione orizzontale
var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);

var horizontalStabilizerF = BEZIER(S1)([c0,c1,c2,c3,c4,c4,c5]);
var horizontalStabilizer = MAP(horizontalStabilizerF)(domain2);
var rightHorizontalStabilizer = R([1,2])(PI) (T([1])([-5])(horizontalStabilizer));
var horizontalStabilizers = STRUCT ([horizontalStabilizer, rightHorizontalStabilizer]);



// VERTICAL STABILIZER
//punti di controllo di riferimento per lo stabilizzatore verticale
var pa = [[12.5,2,0],[0,4,0],[0,0,0],[12.5,2,0]];
//punti per generare le altre curve di controllo per la sezione dello stabilizzatore
var pb = pa.map(function (p) {return [p[0],p[1],p[2]+2] });
var pc = pa.map(function (p) {return [p[0],p[1],p[2]+4] });
var pd = pa.map(function (p) {return [p[0],p[1],p[2]+6] });
var pe = pa.map(function (p) {return [p[0],p[1],p[2]+8] });
var pf = [[10,2,9]];
//curve controllo sezione verticale
var ca = BEZIER(S0)(pa);
var cb = BEZIER(S0)(pb);
var cc = BEZIER(S0)(pc);
var cd = BEZIER(S0)(pd);
var ce = BEZIER(S0)(pe);
var cf = BEZIER(S0)(pf);

var verticalStabilizerF = BEZIER(S1)([ca,cb,cc,cd,ce,cf]);
var verticalStabilizer = MAP(verticalStabilizerF)(domain2);
var verticalStabilizer_translated = T([2])([1.5]) (T([1])([-2])(verticalStabilizer));
var verticalStabilizer_placed = R([1,2])(-PI/2) (verticalStabilizer_translated);


//MODELLO STABILIZZATORE
var stabilizers = STRUCT([horizontalStabilizers,verticalStabilizer_placed]);
var stabilizers_colored = COLOR(fuselageColor)(stabilizers);

DRAW(stabilizers_colored);


//Elementi per il controllo del modello
//var poligonoPunti = STRUCT([POLYLINE(p0), POLYLINE(p1), POLYLINE(p2), POLYLINE(p3), POLYLINE(p4),POLYLINE(p5)]);
//var curves = STRUCT( CONS(AA(MAP)([c0,c1,c2,c3,c4,c5])) (domain1) );
//DRAW(poligonoPunti);
//DRAW(curves);