//## Exercise 1 #### `POLYLINE`, `EXTRUDE`, `COLOR`
//draw the plant of the following labyrint using `POLYLINE`  
//raise the walls using `EXTRUDE`  
//colors the walls using `COLOR`

//## Exercise 2 #### `CUBOID`, `BOUNDARY`, `COLOR`
//build the roof of the labyrint using `CUBOID`  
//extract the surface of the roof using `BOUNDARY`  
//color the surface of the roof as a glass using `COLOR`
var points1 = [[0,0],[0,9],[3,9],[3,8],[1,8],[1,5],[3,5],[3,4],[1,4],[1,1],[3,1],[3,0],[0,0]];
var leftwall = POLYLINE(points1);
var leftwallColored = COLOR([1,0,0,1]) (leftwall);
var points2 = [[4,0],[4,1],[6,1],[6,4],[4,4],[4,5],[6,5],[6,8],[4,8],[4,9],[7,9],[7,0],[4,0]];
var rightwall = POLYLINE(points2);
var rightwallColored = COLOR([0,1,0,1]) (rightwall);
var walls = STRUCT ([leftwallColored, rightwallColored]);
var extrudedWalls = EXTRUDE([1])(walls);

var roof = ( CUBOID([7, 9, 0.1]) );
var roofBoundary = BOUNDARY(roof);
var roof_placed = T([2])([1]) (roofBoundary);
var roof_placedColored = COLOR([0,0,1,0.3]) (roof_placed);

var labyrint = STRUCT ([extrudedWalls, roof_placedColored]);
DRAW(labyrint);



//## Exercise 3 ###`CUBIC_HERMITE`
//draw a cubical hermite curve with the following control points:
//C(0):  (1,0), C(1):  (1,1), C'(0): (1,0), C'(1): (1,1)
var domain = INTERVALS(1)(20);
// punti controllo (c0, c1, c'0, c'1)
var controlpoints = [[1,0],[1,1],[1,0],[1,1]];
// S0 seleziona la prima coordinata, torna una funzione di mapping
var curvaMapping = CUBIC_HERMITE(S0)(controlpoints);
// mappa la curva sul dominio
var curva3 = MAP(curvaMapping)(domain);
DRAW( COLOR([1,0,0])(curva3) );
// tracciato dei punti di controllo
DRAW(POLYLINE(controlpoints));



//## Exercise 4 #### `BEZIER`
//draw a bezier curve of degree 4 with following control points:  
//P(0): (0,0), P(1): (3,1), P(2): (1,2), P(3): (2,3), P(4): (3,2)
var domain = INTERVALS(1)(20);
// (Grado punti - 1) (sono punti di controllo, non c')
var controlpoints = [[0,0],[3,1],[1,2],[2,3],[3,2]];
var curveMapping = BEZIER(S0)(controlpoints);
// mappa la curva sul dominio
var curva4 = MAP(curveMapping)(domain);
DRAW( COLOR([1,0,0])(curva4) );
// tracciato dei punti di controllo
DRAW(POLYLINE(controlpoints));


//## Exercise 4.2
var domain = INTERVALS(1)(50);
// (Grado punti - 1) (sono punti di controllo, non c')
//punti di controllo con coordinate tridimensionali
var controlpoints = [[0,0,0],[0,0,1],[3,1,2],[1,2,3],[2,3,4],[3,2,5],[3,2,0]];
var curvaMapping = BEZIER(S0)(controlpoints);
// mappa la curva sul dominio
var curva42 = MAP(curvaMapping)(domain);
DRAW( COLOR([0,0,1])(curva42) );
// tracciato dei punti di controllo
DRAW(POLYLINE(controlpoints));



//## Exercise 5 #### `CUBIC_CARDINAL`, `SPLINE`
//draw a cubic cardinal spline with following control points:
//P(0): (-3,6), P(1): (-4,2), P(2): (-3,-1), P(3): (-1,1), P(4): (1.5,1.5)
//P(5): (3,4), P(6): (5,5), P(7): (7,2), P(8): (6,-2), P(9): (2,-3)
var domain = INTERVALS(1)(20);
var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
var splineCardinal = SPLINE(CUBIC_CARDINAL(domain))(controlpoints);
DRAW( COLOR([1,0,0])(splineCardinal) );
// tracciato dei punti di controllo
DRAW( COLOR([0.2,0.2,0.2])(POLYLINE(controlpoints)) );


//## Exercise 5.2 - Duplicando i punti estremi impongo il passaggio della spline per essi
var domain = INTERVALS(1)(20);
var controlpoints = [[-3,6],[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3],[2,-3]];
var splineCardinal = SPLINE(CUBIC_CARDINAL(domain))(controlpoints);
DRAW( COLOR([1,0,0])(splineCardinal) );
// tracciato dei punti di controllo
DRAW( COLOR([0.2,0.2,0.2])(POLYLINE(controlpoints)) );



//## Exercise 6 #### `CUBIC_UBSPLINE`, `SPLINE`
//Draw a cubic uniform b-spline with following control points:
//P(0): (-3,6), P(1): (-4,2), P(2): (-3,-1), P(3): (-1,1), P(4): (1.5,1.5)
//P(5): (3,4), P(6): (5,5), P(7): (7,2), P(8): (6,-2), P(9): (2,-3)
var domain = INTERVALS(1)(20);
var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
var splineCubic = SPLINE(CUBIC_UBSPLINE(domain))(controlpoints);
DRAW( COLOR([1,0,0])(splineCubic) );
// tracciato dei punti di controllo
DRAW( COLOR([0.2,0.2,0.2])(POLYLINE(controlpoints)) );
//la curva interpola i punti intermedi dei segmenti che congiungono i punti di controllo



//## Exercise 7 #### `CUBIC_CARDINAL`, `CUBIC_UBSPLINE`, `SPLINE`, `SIMPLICIAL_COMPLEX`
//Draw curves of exercises 5 and 6 in different color, displying control points too.
var domain = INTERVALS(1)(20);
var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];

var splineCardinal = COLOR([1,0,0])(SPLINE(CUBIC_CARDINAL(domain))(controlpoints));
var splineCubic = COLOR([0,0,1])(SPLINE(CUBIC_UBSPLINE(domain))(controlpoints));

// tracciato dei punti di controllo
var track = COLOR([0.2,0.2,0.2,0.5])(POLYLINE(controlpoints));
//punti di controllo
var drawPoints = COLOR([0.2,0.9,0.2])( SIMPLICIAL_COMPLEX(controlpoints)([[0],[1],[2],[3],[4],[5],[6],[7],[8],[9]]) );

var out = STRUCT([splineCardinal, splineCubic, track, drawPoints]);
DRAW(out);



//## Exercise 8 - for each curve type, create a function drawing:  
//- control points  
//- a polyline joining controlpoints  
//- generated curve  

var disegnaPuntiControllo = function (controlPoints) {
	var punti = controlPoints;
	var circle = CIRCLE(0.03)(32);
	var circle_colored = COLOR ([0.2,0.2,0.2]) (circle);
	punti.forEach(function (item,index,array){
  		var x = item.shift();
  		var y = item.shift();
  		var circle_colored_placed = T([0])([x]) (T([1])([y]) (circle_colored));
  		DRAW(circle_colored_placed);
	});
}

var disegnaHermite = function (controlPoints, color) {
	var domain = INTERVALS(1)(20);
	var curveMapping = CUBIC_HERMITE(S0)(controlPoints);
	var hermiteCurve = MAP(curveMapping)(domain);
	
	//curva colorata
	var colored_curve = COLOR(color)(hermiteCurve);
	// tracciato dei punti di controllo
	var track = COLOR([0.2,0.2,0.2,0.5])(POLYLINE(controlPoints));
	
	var out = STRUCT([ colored_curve, track ]);
	DRAW(out);
	disegnaPuntiControllo(controlPoints);
}

var disegnaBezier = function (controlPoints, color) {
	var domain = INTERVALS(1)(20);
	var curveMapping = BEZIER(S0)(controlPoints);
	var bezierCurve = MAP(curveMapping)(domain);
	
	//curva colorata
	var colored_curve = COLOR(color)(bezierCurve);
	// tracciato dei punti di controllo
	var track = COLOR([0.2,0.2,0.2,0.5])(POLYLINE(controlPoints));
	
	var out = STRUCT([ colored_curve, track ]);
	DRAW(out);
	disegnaPuntiControllo(controlPoints);
}

var disegnaCardinalSpline = function (controlPoints, color) {
	var domain = INTERVALS(1)(20);
	var splineCardinal = SPLINE(CUBIC_CARDINAL(domain))(controlPoints);
	
	//curva colorata
	var colored_curve = COLOR(color)(splineCardinal);
	// tracciato dei punti di controllo
	var track = COLOR([0.2,0.2,0.2,0.5])(POLYLINE(controlPoints));
	
	var out = STRUCT([ colored_curve, track ]);
	DRAW(out);
	disegnaPuntiControllo(controlPoints);
}

var disegnaUniformBSpline = function (controlPoints, color) {
	var domain = INTERVALS(1)(20);
	var splineCubic = SPLINE(CUBIC_UBSPLINE(domain))(controlPoints);
	
	//curva colorata
	var colored_curve = COLOR(color)(splineCubic);
	// tracciato dei punti di controllo
	var track = COLOR([0.2,0.2,0.2,0.5])(POLYLINE(controlPoints));
	
	var out = STRUCT([ colored_curve, track ]);
	DRAW(out);
	disegnaPuntiControllo(controlPoints);
}


//Disegna le curve utilizzando le funzioni implementate
var controlpoints1 = [[1,0],[1,1],[1,0],[1,1]];
var colore1 = [0,1,0];
disegnaHermite(controlpoints1,colore1);

var controlpoints2 = [[0,0],[3,1],[1,2],[2,3],[3,2]];
var colore2 = [1,0,0];
disegnaBezier(controlpoints2,colore2);

var controlpoints3 = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
var colore3 = [0,0,1];
disegnaCardinalSpline(controlpoints3,colore3);

var controlpoints4 = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
var colore4 = [0,1,1];
disegnaUniformBSpline(controlpoints4,colore4);