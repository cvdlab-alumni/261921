//Valerio Domenico Di Paolo - matr. 261921 - exercise 4

// Il modello del Miles Magister è costruito in due metà sull'asse delle z mediante due pezzi speculari,
//viene prima modellato un lato dalla fusoliera alla coda e successivamente viene generato il modello speculare
//mediante variazioni parametriche dei punti di controllo delle curve che generano le superfici
//sono stati applicati windscreen davanti ai vani piloti
//Si è cercato di rispettare le proporzioni tra lunghezza e larghezza della fusoliera.
//La lunghezza reale è infatti di 7,5 metri e il vano pilota nella fusoliera è circa largo meno di un metro

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);

//spessore preponderante sezione
var thickness = 5;
var thickness_left = -5;
//altezza sezione principale
var height = 10;

//parametri colori
var engineColor = [0.8,0.8,0.8];
var fuselageColor = [1,1,0];


//parte iniziale, blocco motore
var start = [[0,8,-1]];
var p0_a = [[0,4,1],[2,5,1],[2,9,1],[0,height,1]];
var p0_b = [[0,0,2],[2.5,3,2],[2.5,9,2],[0,height,2]];
var p1 = [[0,0,10],[thickness,3,10],[thickness,9,10],[0,height,10]];
//sezione dal blocco motore alla prima cabina
//var p2 = p1.map(function (p) {return [p[0],p[1],p[2]+1] });
var p2 = [[0,0,11],[thickness,3,11],[thickness,9,11],[0,height,11]];
//blocco primo cockpit
//inizia dai punti p2 - finisce in p3
//var p2 = [[0,0,11],[thickness,3,11],[thickness,9,11],[0,height,11]];
var p2_a = [[0,0,13],[thickness,3,13],[thickness,9,13],[0,height+1,13]];
var p2_b = [[0,0,15],[thickness,3,15],[thickness,9,15],[thickness-1,height,15]];
var p2_c = [[0,0,17],[thickness,3,17],[thickness,9,17],[thickness-1,height,17]];
var p3 = [[0,0,19],[thickness,3,19],[thickness,9,19],[0,height,19]];
//blocco secondo cockipit
//inizia dai punti p3 - finisce in p4
//var p3 = [[0,0,19],[thickness,3,19],[thickness,9,19],[0,height,19]];
var p3_a = [[0,0,21],[thickness,3,21],[thickness,9,21],[0,height+1,21]];
var p3_b = [[0,0,23],[thickness,3,23],[thickness,9,23],[thickness-1,height,23]];
var p3_c = [[0,0,25],[thickness,3,25],[thickness,9,25],[thickness-1,height,25]];
//var p4 = [[0,0,27],[thickness,3,27],[thickness,9,27],[0,height,27]];
//coda aereo
var p4 = [[0,0,27],[thickness,3,27],[thickness,9,27],[0,height,27]];
var p5 = [[0,3,62],[thickness-1,6,62],[thickness-1,9,62],[0,height,62]];
//parte terminale
var p6 = [[0,3,62],[thickness-1,6,62],[thickness-1,9,62],[0,height,62]];
var p7 = [[0,7,71],[thickness-3,6,71],[thickness-3,9,72],[0,height,71]];
var p8 = [[0,10,72]];

//curve blocco motore
var cstart = BEZIER(S0)(start);
var c0_a = BEZIER(S0)(p0_a);
var c0_b = BEZIER(S0)(p0_b);
var c1 = BEZIER(S0)(p1);
//curve parte centrale cockpit
var c2 = BEZIER(S0)(p2);
var c2_a = BEZIER(S0)(p2_a);
var c2_b = BEZIER(S0)(p2_b);
var c2_c = BEZIER(S0)(p2_c);
var c3_a = BEZIER(S0)(p3_a);
var c3_b = BEZIER(S0)(p3_b);
var c3_c = BEZIER(S0)(p3_c);
var c3 = BEZIER(S0)(p3);
//curve coda
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);
//curve parte terminale
var c6 = BEZIER(S0)(p6);
var c7 = BEZIER(S0)(p7);
var c8 = BEZIER(S0)(p8);
//superfici blocco motore
var screwF = BEZIER(S1)([cstart,c0_a]);
var screw = MAP(screwF)(domain2);
var engineSurfaceF = BEZIER(S1)([c0_a,c0_b,c1]);
var engineSurface = MAP(engineSurfaceF)(domain2);
//fusoliera -dalla fine blocco motore al primo cockpit-
var fusoliera0F = BEZIER(S1)([c1,c2]);
var fusoliera0 = MAP(fusoliera0F)(domain2);
//fusoliera - parte primo cockpit
var fusoliera1F = BEZIER(S1)([c2,c2_a,c2_b,c2_c,c3]);
var fusoliera1 = MAP(fusoliera1F)(domain2);
//fusoliera - parte secondo cockpit
var fusoliera2F = BEZIER(S1)([c3,c3_a,c3_b,c3_c,c4]);
var fusoliera2 = MAP(fusoliera2F)(domain2);
//parte della coda (si restringe nella parte inferiore)
var tailF = BEZIER(S1)([c4,c5]);
var tail = MAP(tailF)(domain2);
//terminale coda
var tail2F = BEZIER(S1)([c6,c7,c8]);
var tail2 = MAP(tail2F)(domain2);



//LEFT PART  - il modello è speculare, vengono solo cambiati i segni di 2 punti di controllo di
//curve che servono a controllare la superficie del modello, i punti di controllo sono in parte
//parametrizzati
var startL = [[0,8,-1]];
var p0_aL = [[0,4,1],[-2,5,1],[-2,9,1],[0,height,1]];
var p0_bL = [[0,0,2],[-2.5,3,2],[-2.5,9,2],[0,height,2]];
var p1L = [[0,0,10],[thickness_left,3,10],[thickness_left,9,10],[0,height,10]];
var p2L = [[0,0,11],[thickness_left,3,11],[thickness_left,9,11],[0,height,11]];
var p2_aL = [[0,0,13],[thickness_left,3,13],[thickness_left,9,13],[0,height+1,13]];
var p2_bL = [[0,0,15],[thickness_left,3,15],[thickness_left,9,15],[thickness_left+1,height,15]];
var p2_cL = [[0,0,17],[thickness_left,3,17],[thickness_left,9,17],[thickness_left+1,height,17]];
var p3L = [[0,0,19],[thickness_left,3,19],[thickness_left,9,19],[0,height,19]];
var p3_aL = [[0,0,21],[thickness_left,3,21],[thickness_left,9,21],[0,height+1,21]];
var p3_bL = [[0,0,23],[thickness_left,3,23],[thickness_left,9,23],[thickness_left+1,height,23]];
var p3_cL = [[0,0,25],[thickness_left,3,25],[thickness_left,9,25],[thickness_left+1,height,25]];
var p4L = [[0,0,27],[thickness_left,3,27],[thickness_left,9,27],[0,height,27]];
var p5L = [[0,3,62],[thickness_left+1,6,62],[thickness_left+1,9,62],[0,height,62]];
var p6L = [[0,3,62],[thickness_left+1,6,62],[thickness_left+1,9,62],[0,height,62]];
var p7L = [[0,7,71],[thickness_left+3,6,71],[thickness_left+3,9,72],[0,height,71]];
var p8L = [[0,10,72]];

//curve blocco motore
var cstartL = BEZIER(S0)(startL);
var c0_aL = BEZIER(S0)(p0_aL);
var c0_bL = BEZIER(S0)(p0_bL);
var c1L = BEZIER(S0)(p1L);
//curve parte centrale cockpit
var c2L = BEZIER(S0)(p2L);
var c2_aL = BEZIER(S0)(p2_aL);
var c2_bL = BEZIER(S0)(p2_bL);
var c2_cL = BEZIER(S0)(p2_cL);
var c3_aL = BEZIER(S0)(p3_aL);
var c3_bL = BEZIER(S0)(p3_bL);
var c3_cL = BEZIER(S0)(p3_cL);
var c3L = BEZIER(S0)(p3L);
//curve coda
var c4L = BEZIER(S0)(p4L);
var c5L = BEZIER(S0)(p5L);
//curve parte terminale
var c6L = BEZIER(S0)(p6L);
var c7L = BEZIER(S0)(p7L);
var c8L = BEZIER(S0)(p8L);

//superfici blocco motore
var screwFL = BEZIER(S1)([cstartL,c0_aL]);
var screwL = MAP(screwFL)(domain2);
var engineSurfaceFL = BEZIER(S1)([c0_aL,c0_bL,c1L]);
var engineSurfaceL = MAP(engineSurfaceFL)(domain2);
//fusoliera -dalla fine blocco motore al primo cockpit-
var fusoliera0FL = BEZIER(S1)([c1L,c2L]);
var fusoliera0L = MAP(fusoliera0FL)(domain2);
//fusoliera - parte primo cockpit
var fusoliera1FL = BEZIER(S1)([c2L,c2_aL,c2_bL,c2_cL,c3L]);
var fusoliera1L = MAP(fusoliera1FL)(domain2);
//fusoliera - parte secondo cockpit
var fusoliera2FL = BEZIER(S1)([c3L,c3_aL,c3_bL,c3_cL,c4L]);
var fusoliera2L = MAP(fusoliera2FL)(domain2);
//parte della coda (si restringe nella parte inferiore)
var tailFL = BEZIER(S1)([c4L,c5L]);
var tailL = MAP(tailFL)(domain2);
//terminale coda
var tail2FL = BEZIER(S1)([c6L,c7L,c8L]);
var tail2L = MAP(tail2FL)(domain2);


//WINDSCREEN PART
var cockpitControls1 = [[-2,0,2],[0,0,0],[2,0,2]];
var cockpitControls2 = [[-2,0,2],[0,5,2],[2,0,2]];
var ck1 = BEZIER(S0)(cockpitControls1);
var ck2 = BEZIER(S0)(cockpitControls2);
var glassF = BEZIER(S1)([ck1,ck2]);
var glass = MAP(glassF)(domain2);
var glass1_placed = T([2])([11])( T([1])([10])(glass));
var glass2_placed = T([2])([19])( T([1])([10])(glass));
var glass1_colored = COLOR([0,0,0.8,0.6]) (glass1_placed);
var glass2_colored = COLOR([0,0,0.8,0.6]) (glass2_placed);
var windscreen = STRUCT([glass1_colored, glass2_colored]);


// MODELLO - unione mediante struct del blocco motore e della fusoliera, dai cockpit alla coda
var engineBlock = STRUCT([screw, engineSurface]);
var engineBlocK_colored = COLOR(engineColor) (engineBlock);
var fuselage = STRUCT ([fusoliera0,fusoliera1,fusoliera2, tail, tail2]);
var fuselage_colored = COLOR(fuselageColor)(fuselage);
var aircraft_side1 = STRUCT([engineBlocK_colored,fuselage_colored]);

var engineBlockL = STRUCT([screwL, engineSurfaceL]);
var engineBlocKL_colored = COLOR(engineColor) (engineBlockL);
var fuselageL = STRUCT ([fusoliera0L,fusoliera1L,fusoliera2L, tailL, tail2L]);
var fuselageL_colored = COLOR(fuselageColor)(fuselageL);
var aircraft_side2 = STRUCT([engineBlocKL_colored,fuselageL_colored]);

var aircraft = STRUCT([aircraft_side1, aircraft_side2, windscreen]);





//ALA SINISTRA
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


//ALA DESTRA
var right = -1;
//punti di controllo per modellare l'ala
//controllo attacco
var p_1R = [[23,3,0*right],[0,8,0*right],[0,0,0*right],[5,3,0*right],[23,3,0*right]];
var p_2R = [[20,3,2.5*right],[0,8,2.5*right],[0,0,2.5*right],[5,3,2.5*right],[20,3,2.5*right]];
//controllo curvatura
var p0R = [[20,3,10*right], [0,8,10*right], [0,0,10*right], [5,3,10*right], [20,3,10*right]];
var p1R = [[19,3,20*right],[0,8,20*right],[0,0,20*right],[5,3,20*right],[19,3,20*right]];
var p2R = [[18,3,30*right],[0,8,30*right],[0,0,30*right],[5,3,30*right],[18,3,30*right]];
var p3R = [[17,3,40*right],[0,8,40*right],[0,0,40*right],[5,3,40*right],[17,3,40*right]];
var p4R = [[16,3,47.5*right],[0,8,47.5*right],[0,0,47.5*right],[5,3,47.5*right],[16,3,47.5*right]];
var p5R = [[10,4,49*right]];
//curve sezione alare - attacco alla fusoliera
var c_1R = BEZIER(S0)(p_1R);
var c_2R = BEZIER(S0)(p_2R);
//curve sezione alare - controllo curvatura
var c0R = BEZIER(S0)(p0R);
var c1R = BEZIER(S0)(p1R);
var c2R = BEZIER(S0)(p2R);
var c3R = BEZIER(S0)(p3R);
var c4R = BEZIER(S0)(p4R);
var c5R = BEZIER(S0)(p5R);


var pos_ali = 8;
//ala sinistra
var wingFL = BEZIER(S1)([c_1,c_2,c0,c1,c2,c3,c3,c4,c4,c5]);
var wingL = MAP(wingFL)(domain2);
var wingL_r = R([0,2])(-PI/2)(wingL);
var wingL_placed = T([0])([-2.8])( T([2])([pos_ali])(wingL_r) );
//ala destra
var wingFR = BEZIER(S1)([c_1R,c_2R,c0R,c1R,c2R,c3R,c3R,c4R,c4R,c5R]);
var wingR = MAP(wingFR)(domain2);
var wingR_r = R([0,2])(-PI/2)(wingR);
var wingR_placed = T([0])([2.8])( T([2])([pos_ali])(wingR_r) );









//MODELLO STABILIZZATORE
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
var stabilizers_r = R([0,2])(-PI/2)(stabilizers);
var stabilizers_placed = T([1])([8])( T([2])([58.5])(stabilizers_r) );




//DISEGNO DEL MODELLO

var wingL_colored = COLOR(fuselageColor)(wingL_placed);
var wingR_colored = COLOR(fuselageColor)(wingR_placed);
var stabilizers_colored = COLOR(fuselageColor)(stabilizers_placed);

var aircraftModel = STRUCT([aircraft,wingL_colored,wingR_colored,stabilizers_colored]);
DRAW(aircraftModel);



//Elementi per il controllo del modello
//var poligonoPunti = STRUCT([POLYLINE(p0_a), POLYLINE(p0_b),POLYLINE(p1),
//					POLYLINE(p2), POLYLINE(p2_a),POLYLINE(p2_b),POLYLINE(p2_c),
//					POLYLINE(p3),POLYLINE(p3_a),POLYLINE(p3_b),POLYLINE(p3_c),
//					POLYLINE(p4),POLYLINE(p5),POLYLINE(p6),POLYLINE(p7),POLYLINE(p8)]);
//var curves = STRUCT( CONS(AA(MAP)([c0_a,c0_b,c1,c2,c3,c4,c5,c6,c7,c8])) (domain1) );
//DRAW(poligonoPunti);
//DRAW(curves);