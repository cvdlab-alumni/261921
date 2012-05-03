//## Exercise 1 #### - ## Exercise 2 ####
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
var roof_placed_colored = COLOR([0,0,1,0.3]) (roof_placed);

var labyrinth = STRUCT ([extrudedWalls, roof_placed_colored]);
DRAW(labyrinth);



//## Exercise 3 ###`CUBIC_HERMITE`
//draw a cubical hermite curve with the following control points:
//C(0):  (1,0), C(1):  (1,1), C'(0): (1,0), C'(1): (1,1)
var domain = INTERVALS(1)(20);
var controlpoints = [[1,0],[1,1],[1,0],[1,1]];
var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
var curva3 = MAP(curveMapping)(domain);
DRAW( COLOR([1,0,0])(curva3) );
DRAW( POLYLINE(controlpoints) );



//## Exercise 4 #### `BEZIER`
//draw a bezier curve of degree 4 with following control points:  
//P(0): (0,0), P(1): (3,1), P(2): (1,2), P(3): (2,3), P(4): (3,2)
var domain = INTERVALS(1)(20);
var controlpoints = [[0,0],[3,1],[1,2],[2,3],[3,2]];
var curveMapping = BEZIER(S0)(controlpoints);
var curva4 = MAP(curveMapping)(domain);
DRAW( COLOR([1,0,0])(curva4) );
DRAW( POLYLINE(controlpoints) );



//## Exercise 5 #### `CUBIC_CARDINAL`, `SPLINE`
//draw a cubic cardinal spline with following control points:
//P(0): (-3,6), P(1): (-4,2), P(2): (-3,-1), P(3): (-1,1), P(4): (1.5,1.5)
//P(5): (3,4), P(6): (5,5), P(7): (7,2), P(8): (6,-2), P(9): (2,-3)
var domain = INTERVALS(1)(20);
var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
var splineCardinal = SPLINE(CUBIC_CARDINAL(domain))(controlpoints);
DRAW( COLOR([1,0,0])(splineCardinal) );
DRAW( COLOR([0.2,0.2,0.2])(POLYLINE(controlpoints)) );



//## Exercise 6 #### `CUBIC_UBSPLINE`, `SPLINE`
//Draw a cubic uniform b-spline with following control points:
//P(0): (-3,6), P(1): (-4,2), P(2): (-3,-1), P(3): (-1,1), P(4): (1.5,1.5)
//P(5): (3,4), P(6): (5,5), P(7): (7,2), P(8): (6,-2), P(9): (2,-3)
var domain = INTERVALS(1)(20);
var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
var splineCubic = SPLINE(CUBIC_UBSPLINE(domain))(controlpoints);
DRAW( COLOR([1,0,0])(splineCubic) );
DRAW( COLOR([0.2,0.2,0.2])(POLYLINE(controlpoints)) );



//## Exercise 7 #### `CUBIC_CARDINAL`, `CUBIC_UBSPLINE`, `SPLINE`, `SIMPLICIAL_COMPLEX`
//Draw curves of exercises 5 and 6 in different color, displying control points too.
var domain = INTERVALS(1)(20);
var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];

var splineCardinal = COLOR([1,0,0])( SPLINE(CUBIC_CARDINAL(domain))(controlpoints) );
var splineCubic = COLOR([0,0,1])( SPLINE(CUBIC_UBSPLINE(domain))(controlpoints) );

var track = COLOR([0.2,0.2,0.2,0.5])( POLYLINE(controlpoints) );
var drawPoints = COLOR([0.2,0.2,0.2])( SIMPLICIAL_COMPLEX(controlpoints)([[0],[1],[2],[3],[4],[5],[6],[7],[8],[9]]) );

var out = STRUCT([splineCardinal, splineCubic, track, drawPoints]);
DRAW(out);