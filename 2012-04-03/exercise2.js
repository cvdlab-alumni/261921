//Valerio Domenico Di Paolo - matr. 261921 - exercise 2

//Modello della base: piano rialzato su cui poggia la struttura
var base1 = SIMPLEX_GRID ([[1],[2],[1]]);
var base2 = SIMPLEX_GRID ([[-1,8],[1],[1]]);
var base3 = SIMPLEX_GRID ([[-1,8],[-10,12],[1]]);
var base4 = SIMPLEX_GRID ([[-9,12],[1],[1]]);
var base5 = SIMPLEX_GRID ([[-9,12],[-10, 7],[1]]);
var base6 = SIMPLEX_GRID ([[-21,15],[17],[1]]);
var base7 = SIMPLEX_GRID ([[-36,3],[1],[1]]);
var base8 = SIMPLEX_GRID ([[-36,3],[-4,13],[1]]);
var base9 = SIMPLEX_GRID ([[-39,8],[-4,12],[1]]);
var base10 = SIMPLEX_GRID ([[-47,4],[-4,1],[1]]);
var base11 = SIMPLEX_GRID ([[-51,1],[-4,2],[1]]);
var bL1 = SIMPLEX_GRID ([[-1,0.2],[-1,9],[1]]);
var bR1 = SIMPLEX_GRID ([[-47,4],[-16+0.2,0.2],[1]]);
var bR2 = SIMPLEX_GRID ([[-51+0.2,0.2],[-5,11-0.2],[1]]);
var bB1 = SIMPLEX_GRID ([[-1-0.2,20-0.2],[-1,9],[0.1]]);
var bB2 = SIMPLEX_GRID ([[-47,4-0.2],[-5,11-0.2],[0.1]]);

//Scale
var stepheight = (1/7);
var stepwidth = (3/7);
var tStepL = T([0])([stepwidth]);
var TStepD = T([2])([-stepheight]);
//Gradini
var step = SIMPLEX_GRID ([[-36,stepwidth],[-1,3],[-1+stepheight,stepheight]]);
var step2 = tStepL(step);
var step3 = tStepL(step2);
var step4 = tStepL(step3);
var step5 = tStepL(step4);
var step6 = tStepL(step5);
var step7 = tStepL(step6);
//Struct per la costruzione della scala
var stairs = STRUCT([step,TStepD,step2,TStepD,step3,TStepD,step4,TStepD,step5,TStepD,step6,TStepD,step7]);

//Modello della base, completa di scala e bordo vasche
var base = STRUCT([base1,base2,base3,base4,base5,base6,base7,base8,base9,base10,base11,bL1,bR1,bR2,bB1,bB2,stairs]);

//Vasche
var vasca1 = SIMPLEX_GRID ([[-1-0.2,20-0.2],[-1,9],[-0.1,0.6]]);
var vasca2 = SIMPLEX_GRID ([[-47,4-0.2],[-5,11-0.2],[-0.1,0.6]]);
var vasche = STRUCT([vasca1, vasca2]);

//Sedile

var supporto = SIMPLEX_GRID([ REPLICA(8)([0.4,-1.6]), [0.5], [-1,0.4] ]);
var supporto_p = T([0,1])([0.2,0.1])(supporto);
var seduta = SIMPLEX_GRID([ [0.4*8 + 1.6*7 + 0.2*2], [0.7], [-1,-0.4,0.1] ]);

var sedile = T([0,1])([7.8,13.9])(STRUCT([supporto_p,seduta]));

//Modello della base completa, con incluse le vasche ed il sedile
var baseVasche = STRUCT([base, vasche, sedile]);

//Parametri utilizzati per la costruzione del modello
//Altezza delle pareti
var h = 3;
//Spessore delle pareti
var thickness = 0.2;

//tetti
var roof1 = SIMPLEX_GRID ([[10],[-13,10],[-1,-h,0.25]]);

var roof2 = SIMPLEX_GRID ([[-24,7.1],[-4,13],[-1,-h,0.25]]);
var roof3 = SIMPLEX_GRID ([[-31.1,0.9],[-4,3.5],[-1,-h,0.25]]);
var roof4 = SIMPLEX_GRID ([[-31.1,0.9],[-13.5,3.5],[-1,-h,0.25]]);
var roof5 = SIMPLEX_GRID ([[-32,15],[-4,13],[-1,-h,0.25]]);
var roofs = STRUCT([roof1, roof2, roof3, roof4, roof5]);

//pareti esterne - complesso a sinistra
var extLeft1 = SIMPLEX_GRID ([[-1,7],[-1+thickness,thickness],[-1,h]]);
var extLeft2 = SIMPLEX_GRID ([[-1,thickness],[-1,21],[-1,h]]);
var extLeft3 = SIMPLEX_GRID ([[-1,8-thickness],[-22+thickness,thickness],[-1,h]]);
var extLeft4 = SIMPLEX_GRID ([[-9+thickness,thickness],[-17,5],[-1,h]]);
var extLeft = STRUCT([extLeft1, extLeft2,extLeft3, extLeft4]);
//pareti esterne - complesso a destra
var extRight1 = SIMPLEX_GRID ([[-41,10],[-5+thickness,thickness],[-1,h]]);
var extRight2 = SIMPLEX_GRID ([[-51+thickness,thickness],[-5,11-thickness],[-1,h]]);
var extRight3 = SIMPLEX_GRID ([[-38,13],[-16+thickness,thickness],[-1,h]]);
var extRight = STRUCT([extRight1, extRight2,extRight3]);
//parete esterna bianca
var extWhiteWall = SIMPLEX_GRID ([[-6.5,20],[-15,thickness],[-1,h]]);
//Struct comprendente le pareti esterne
var extwalls = STRUCT([extLeft,extRight,extWhiteWall]);

//pareti interne
var intWall1 = SIMPLEX_GRID ([[-25,9],[-7.5+thickness,thickness],[-1,h]]);
var intWall2 = SIMPLEX_GRID ([[-37.5,5],[-11.4,thickness],[-1,h]]);
//Struct comprendente le pareti interne
var intWalls = STRUCT([intWall1, intWall2]);

//FRAME DI BASE - utilizzati per la costruzione di tutte le strutture a telaio
//frame1 - base sull'asse delle x
var frame1= SIMPLEX_GRID([ [0.1, -0.8, 0.1], [0.1], [-1,h] ]);
var frame2= SIMPLEX_GRID([ [-0.1, 0.8, -0.1], [0.1], [-1,0.1,-h+0.2,0.1] ]);
var frame = (STRUCT([frame1, frame2]));
//Frame2 - base sull'asse delle y
var frame3= SIMPLEX_GRID([ [0.1], [0.1, -0.8, 0.1],[-1,h] ]);
var frame4= SIMPLEX_GRID([ [0.1], [-0.1, 0.8, -0.1], [-1,0.1,-h+0.2,0.1] ]);
var frame2 = (STRUCT([frame3, frame4]));

//Frame sala
var tFrame = T([0])([1]);
var frameSala1 = STRUCT([frame, tFrame,frame,tFrame,frame,tFrame,frame,tFrame,frame,tFrame,frame,(T([0])([2])(frame))]);
var frameSala = T([1])([17])(T([0])([1])(frameSala1));

//Front Frame
var frontFrameWidth = 11/3;
var tFrontFrame = T([0])([frontFrameWidth]);
var frontFrame = (S([0])([frontFrameWidth])(frame));
var frontFrames1 = STRUCT([frontFrame, tFrontFrame,frontFrame,tFrontFrame,frontFrame]);
var frontFrames = T([0])([30])((T([1])([5]))(frontFrames1));

//Back Frame
var backFrame = frame;
var tbackFrame = T([0])([1]);
var backFrames1 = STRUCT([backFrame,tbackFrame,backFrame,tbackFrame,backFrame,tbackFrame,backFrame,
                tbackFrame,backFrame,tbackFrame,backFrame,tbackFrame,backFrame,
                tbackFrame,backFrame,tbackFrame,backFrame,tbackFrame,backFrame]);
var backFrames = T([0])([30])(T([1])([13.5])(backFrames1));

//roofLight Frame
var roofLightWidth = 3;
var roofLightframe = (S([1])([roofLightWidth])(frame2));
var tRoofLightFrame = T([1])([roofLightWidth]);
//roofLight Frames - 2 serie
var roofLightFramesBase = STRUCT([roofLightframe, tRoofLightFrame,roofLightframe]);
var roofLightFrames1 = T([1])([7.5])(T([0])([31])(roofLightFramesBase));
var roofLightFrames2 = T([1])([7.5])(T([0])([32])(roofLightFramesBase));
var roofLightFramesSet = STRUCT([roofLightFrames1,roofLightFrames2]);

//fullLenghtWindow
var fullLenghtFrame = frame2;
var tfullLF = T([1])([1]);
var fullLenghtFrameBase = STRUCT([fullLenghtFrame, 
                tfullLF,fullLenghtFrame,tfullLF,fullLenghtFrame,tfullLF,fullLenghtFrame,
                tfullLF,fullLenghtFrame,tfullLF,fullLenghtFrame,tfullLF,fullLenghtFrame,
                tfullLF,fullLenghtFrame,]);

var fullLenghtFrames = T([1])([6.5])(T([0])([44.5])(fullLenghtFrameBase));


var setFrames = STRUCT ([frontFrames, backFrames, roofLightFramesSet, fullLenghtFrames, frameSala]);

//rimuovere lo struct "roofs" dal model per poter visualizzare il modello senza tetto e verificare
//il posizionamento delle pareti interne e dei pannelli
var model = STRUCT([baseVasche,extwalls,intWalls,setFrames,roofs]);

DRAW(model);