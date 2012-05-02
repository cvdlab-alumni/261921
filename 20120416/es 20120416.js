// 2012-04-16
// esempio pg. 15 slide 2012-04-16

var link = T([0,1])([-1,-19])( CUBOID([2, 20]) );

var joint = function (alpha){
	return COMP([ T([1])([-18]), R([0,1])([alpha * PI/180]) ])
}

var arm = function (a1,a2,a3) {
	return STRUCT([ link, joint(a1), link, joint(a2), link, joint(a3), link ])
}

//DRAW(arm(90,90,90));
//DRAW(arm(45,15,30));
DRAW(arm(60,45,30));