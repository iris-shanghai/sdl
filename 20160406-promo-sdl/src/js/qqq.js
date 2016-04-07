(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 924,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib._001 = function() {
	this.spriteSheet = ss["qqq_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._002 = function() {
	this.spriteSheet = ss["qqq_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["qqq_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pinzi = function() {
	this.spriteSheet = ss["qqq_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.QRC = function() {
	this.spriteSheet = ss["qqq_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.sui = function() {
	this.spriteSheet = ss["qqq_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.tiee = function() {
	this.spriteSheet = ss["qqq_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.top = function() {
	this.spriteSheet = ss["qqq_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.未标题2 = function() {
	this.spriteSheet = ss["qqq_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tiee();
	this.instance.setTransform(-219,-114.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-219,-114.5,438,229);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tiee();
	this.instance.setTransform(-219,-114.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-219,-114.5,438,229);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sui();
	this.instance.setTransform(-320,-296);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-296,640,592);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pinzi();
	this.instance.setTransform(-154,-233.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-154,-233.5,308,467);


// stage content:
(lib.qqq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.top();
	this.instance.setTransform(0.1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122));

	// Layer 4
	this.instance_1 = new lib.QRC();
	this.instance_1.setTransform(88.1,674.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(122));

	// Layer 9
	this.instance_2 = new lib.tiee();
	this.instance_2.setTransform(114.1,168.7);

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(333.1,283.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(261.1,307.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},37).to({state:[{t:this.instance_4}]},21).to({state:[{t:this.instance_2}]},18).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},0).to({_off:true,x:261.1,y:307.3},21).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},21).to({_off:true,x:114.1,y:168.7},18).wait(46));

	// Layer 7
	this.instance_5 = new lib.logo();
	this.instance_5.setTransform(30.1,136.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(122));

	// Layer 6
	this.instance_6 = new lib._002();
	this.instance_6.setTransform(0.1,508.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(122));

	// Layer 5
	this.instance_7 = new lib._001();
	this.instance_7.setTransform(0.1,-81.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(122));

	// Layer 8
	this.instance_8 = new lib.Symbol1("synched",0);
	this.instance_8.setTransform(352.1,542.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:462.3},34).to({y:602.3},36).to({y:542.3},51).wait(1));

	// Layer 3
	this.instance_9 = new lib.Symbol2("synched",0);
	this.instance_9.setTransform(312.1,634.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:360},121).wait(1));

	// Layer 1
	this.instance_10 = new lib.未标题2();
	this.instance_10.setTransform(-3.9,-3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(312.1,380.7,648.1,1033.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;