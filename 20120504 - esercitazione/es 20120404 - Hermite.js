//2012-04-04

var domain = INTERVALS(1)(30);
var domain1 = INTERVALS(1)(30);
//([[0,1],[0,1]])intervalli -- ([30,50]) suddivisioni
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);

var controls = [[1,0],[0,1], [0,1],[-1,0]]; 	//p0,p1, t0,t1
var controls1 = [[1,0],[0,1], [0,2],[-2,0]]; 	//p0,p1, t0,t1
var controls2 = [[2,0],[0,2], [0,3],[-3,0]]; 	//p0,p1, t0,t1

//aggiungo una coordinata per poter rappresentare curve nello spazio tridimensinale
var controls1 = [[1,0,0],[0,1,0], [0,2,0],[-2,0,0]]; //p0,p1, t0,t1
var controls2 = [[2,0,0],[0,2,0], [0,3,0],[-3,0,0]]; //p0,p1, t0,t1

//curva c1 = funzione vettoriale di un parametro - genera un array di funzioni coordinate 
//(in questo caso 2, funzioni che generano la x e la y)
var c1 = CUBIC_HERMITE(S0)(controls1);
//immagine della curva (insieme dei punti del piano nel quale la curva mappa i punti del suo dominio)
var curve1 = MAP(c1)(domain1);
//DRAW(curve1);

//curva c1 = funzione vettoriale di un parametro - genera un array di funzioni coordinate 
//(in questo caso 2, funzioni che generano la x e la y)
var c2 = CUBIC_HERMITE(S0)(controls2);
//immagine della curva (insieme dei punti del piano nel quale la curva mappa i punti del suo dominio)
var curve2 = MAP(c2)(domain1);
//DRAW(curve2);

var struct = STRUCT([curve1,curve2]);
DRAW(struct);

//il parametro di controllo è costituito da curve, non punti
var s12 = BEZIER(S1)([c1,c2]);
var surface12 = MAP (s12)(domain2);
DRAW(surface12);

//aggiungendo le derivate impongo una curvatura alla superficie
var s12_3 = CUBIC_HERMITE(S1)([c1,c2,[0,0,3],[0,0,-3]]);
var surface12_3 = MAP (s12_3)(domain2);
DRAW(surface12_3);
