//Valerio Domenico Di Paolo - matr. 261921 - exercise 1

var perimetro = [[0,0],[0,2],[1,2],[1,22],[9,22],[9,17],[39,17],[39,16],[51,16],[51,6],[52,6],[52,4],[39,4],[39,0],[0,0]];
var perimeter = POLYLINE(perimetro);

var vasca = [[1,1],[1,10],[21,10],[21,1],[1,1]];
var pool = POLYLINE(vasca);

var cort = [[47,5],[47,16],[51,16],[51,5],[47,5]];
var open = POLYLINE(cort);


var wall1 = POLYLINE([[38,16],[47,16]]);
var wall2 = POLYLINE([[30,13.5],[40,13.5]]);
var wall3 = POLYLINE([[37.5,11.5],[42.5,11.5]]);
var wall4 = POLYLINE([[25,7.5],[34,7.5]]);
var wall5 = POLYLINE([[30,5],[47,5]]);

var fullLenghtWindow = POLYLINE([[44.5,7],[44.5,14]]);
var roofLight = POLYLINE([[31,7.5],[31,13.5],[32,13.5],[32,7.5],[31,7.5]]);


var step1 = POLYLINE([[39,1],[38.66,1],[38.66,4],[39,4]]);
var step2 = POLYLINE([[38.66,1],[38.33,1],[38.33,4],[38.66,4]]);
var step3 = POLYLINE([[38.33,1],[38,1],[38,4],[38.33,4]]);
var step4 = POLYLINE([[38,1],[37.66,1],[37.66,4],[38,4]]);
var step5 = POLYLINE([[37.66,1],[37.33,1],[37.33,4],[37.66,4]]);
var step6 = POLYLINE([[37.33,1],[37,1],[37,4],[37.33,4]]);
var step7 = POLYLINE([[37,1],[36.66,1],[36.66,4],[37,4]]);

var stairs = STRUCT([step1,step2,step3,step4,step5,step6,step7]);

var sep1 = POLYLINE([[1,17],[7,17]]);
var sep2 = POLYLINE([[8,17],[9,17]]);
var sep3 = POLYLINE([[5,17],[5,19]]);
var sep4 = POLYLINE([[5,20],[5,22]]);
var sep5 = POLYLINE([[5,20.5],[6,20.5]]);
var sep6 = POLYLINE([[7,20.5],[9,20.5]]);
var sep7 = POLYLINE([[7,21.5],[7,22]]);

var separators = STRUCT([sep1,sep2,sep3,sep4,sep5,sep6,sep7]);

//parete esterna e sedili
var extWall = POLYLINE([[6.5,15],[26.5,15]]);
var seats = POLYLINE([[7,14],[7,14.5],[22,14.5],[22,14],[7,14]]);
var eElements = STRUCT([extWall,seats]);

var walls = STRUCT([separators, wall1,wall2,wall3,wall4,wall5,roofLight,fullLenghtWindow,eElements,stairs]);

var floorMap = STRUCT([perimeter,pool,open,walls])
//DRAW(floorMap);

var coloredFloorMap = COLOR([0,0,0])(floorMap);
DRAW(coloredFloorMap);