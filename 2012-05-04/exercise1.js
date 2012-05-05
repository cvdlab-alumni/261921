//Valerio Domenico Di Paolo - matr. 261921 - exercise 1

//Ala aereo Miles Magister - 1938
//avendo un'apertura alare di 10.31 mt si è modellata una singola ala per rispettare le proporzioni tra circa 5 mt di
//lunghezza per circa 2 metri di larghezza dopo l'attaccatura

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);
var fuselageColor = [1,1,0];

//punti di controllo per modellare l'ala
//controllo attacco
var p_1 = [[23,3,0],[0,8,0],[0,0,0],[5,3,0],[23,3,0]];
var p_2 = [[20,3,2.5],[0,8,2.5],[0,0,2.5],[5,3,2.5],[20,3,2.5]];
//controllo curvatura
var p0 = [[20,3,10], [0,8,10], [0,0,10], [5,3,10], [20,3,10]];
var p1 = [[19,3,20],[0,8,20],[0,0,20],[5,3,20],[19,3,20]];
var p2 = [[18,3,30],[0,8,30],[0,0,30],[5,3,30],[18,3,30]];
var p3 = [[17,3,40],[0,8,40],[0,0,40],[5,3,40],[17,3,40]];
var p4 = [[16,3,47.5],[0,8,47.5],[0,0,47.5],[5,3,47.5],[16,3,47.5]];
var p5 = [[10,4,49]];

//curve sezione alare - attacco alla fusoliera
var c_1 = BEZIER(S0)(p_1);
var c_2 = BEZIER(S0)(p_2);
//curve sezione alare - controllo curvatura
var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);


var wingF = BEZIER(S1)([c_1,c_2,c0,c1,c2,c3,c3,c4,c4,c5]);
var wing = MAP(wingF)(domain2);
DRAW( COLOR(fuselageColor)(wing) );





//Elementi per il controllo del modello
var linea = [[3,4,-20],[3,4,60]];
var linea2 = [[20,4,-20],[20,4,60]];
var poligonoPunti = STRUCT([POLYLINE(p0), POLYLINE(p1), POLYLINE(p2), POLYLINE(p3), POLYLINE(p4),
					POLYLINE(p_1),POLYLINE(p_2),POLYLINE(linea),POLYLINE(linea2)]);

var curves = STRUCT( CONS(AA(MAP)([c0,c1,c2,c3,c4,c5,c_1,c_2])) (domain1) );
//DRAW(poligonoPunti);
//DRAW(curves);

