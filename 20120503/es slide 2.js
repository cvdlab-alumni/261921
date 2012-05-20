var trasla = function (array, coord, dx){
	var newArray = array;
	newArray.forEach(function (item, index, array) {
		item[coord] = ((item[coord]) + dx);
	})
	return newArray;
}

var trasla_val = function (array, coord, dx){
	var newArray = new Array();
	var i = 0;
	//copia i valori nel nuovo array, incrementando del valore dx i valori in posizione coord.
	array.forEach(function (item, index, array) {
		var sub_array = [];
		for (i=0; i<item.length; i++){
			if (i == coord) { 
				sub_array.push( item[i] + dx );
			}
			else sub_array.push( item[i] );
		}
		newArray.push(sub_array);
	})
	return newArray;
}

var domain0 = INTERVALS(1)(20);
var domain1 = PROD1x1([INTERVALS(1)(20), INTERVALS(1)(20)]);

var control1 = [[0.1,0,0],[2,0,0],[0,0,4],[1,0,5]];
var control2 = [[0,0,0],[3,-0.5,0],[3,3.5,0],[0,3,0]];

var alphaF = BEZIER(S0)(control1);
var alphaF2 = BEZIER(S0)((trasla_val(control1, 1, 5)));

var betaF = BEZIER(S0)(control2);

var alpha = MAP(alphaF)(domain0);
var alpha2 = MAP(alphaF2)(domain0);
var beta = MAP(betaF)(domain0);

var prodSurface = MAP(BEZIER(S1)([alphaF, betaF]))(domain1);
var prodAlpha_Alpha2 = MAP(BEZIER(S1)([alphaF, alphaF2]))(domain1);

var alpha_colored = COLOR([1,0,0]) (alpha);
var alpha2_colored = COLOR([1,0,0]) (alpha2);
var prodAlpha_Alpha2_colored = COLOR([0,0,1,0.5])(prodAlpha_Alpha2);

var out = STRUCT([alpha_colored, alpha2_colored, prodAlpha_Alpha2_colored]);
DRAW (out);