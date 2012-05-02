
// Confronto tra modello con e senza funzione boundary applicata

var model1 = CUBOID([1,1,1]);
var boundary1 = T([0])([0]) (BOUNDARY(model1));
var colored1 = COLOR([0,0,1,0.5]) (boundary1);
DRAW(colored1);

var model2 = CUBOID([1,1,1]);
var boundary2 = T([0])([3]) (model2);
var colored2 = COLOR([0,0,1,0.5]) (boundary2);
DRAW(colored2);