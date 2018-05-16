(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"FishTank_atlas_", frames: [[0,2672,759,433],[1442,1212,588,399],[0,1212,1440,1458],[1442,1613,453,332],[0,0,1993,1210]]}
];


// symbols:



(lib._86 = function() {
	this.spriteSheet = ss["FishTank_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4439468fishimage = function() {
	this.spriteSheet = ss["FishTank_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._580b57fbd9996e24bc43bbf2 = function() {
	this.spriteSheet = ss["FishTank_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fish_png_by_heidyy12d5sg0z8 = function() {
	this.spriteSheet = ss["FishTank_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.PNGPIXCOMGoldfishPNGTransparentImage = function() {
	this.spriteSheet = ss["FishTank_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Fish4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PNGPIXCOMGoldfishPNGTransparentImage();
	this.instance.parent = this;
	this.instance.setTransform(-63.5,-40,0.064,0.066);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-40,127.1,80.1);


(lib.Fish3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fish_png_by_heidyy12d5sg0z8();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-38,0.205,0.229);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-38,93,76);


(lib.Fish2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._4439468fishimage();
	this.instance.parent = this;
	this.instance.setTransform(-50,-34.5,0.17,0.173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-34.5,100,69);


(lib.Fish1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._580b57fbd9996e24bc43bbf2();
	this.instance.parent = this;
	this.instance.setTransform(-49,-40,0.068,0.055);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-40,98.2,80.1);


// stage content:
(lib.FishTank2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Fish4
	this.instance = new lib.Fish4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(472.6,344);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:446.6,y:291.1},5).to({x:424.6,y:337},6).to({x:286.5},5).to({x:273.5,y:251.1},7).to({x:187.5,y:209.1},7).to({x:141.5,y:254.1},5).to({y:198.1},8).to({x:116.5,y:141.1},8).to({y:70.1},7).to({x:139.5,y:210.1},7).to({x:125.5,y:253.1},8).to({x:94.5,y:301.1},6).to({y:307.1},4).to({startPosition:0},5).to({x:84.5,y:351},5).to({startPosition:0},6).wait(1));

	// Fish3
	this.instance_1 = new lib.Fish3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:107.5,y:90},4).to({x:161.5,y:147},7).to({y:161},6).to({x:189.5,y:141},5).to({x:238.5,y:131},5).to({x:277.5,y:156},6).to({x:313.5},6).to({x:357.5,y:191},5).to({x:399.5},7).to({y:158},5).to({x:440.5,y:183},7).to({x:459.5,y:100},6).to({x:475.5,y:70},7).to({y:104},6).to({x:485.5,y:152},5).to({x:503.5,y:189},5).to({startPosition:0},5).to({startPosition:0},2).wait(1));

	// Fish2
	this.instance_2 = new lib.Fish2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(63,300.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:91,y:315.6},9).to({x:143,y:345.5},6).to({x:168,y:322.5},5).to({x:195,y:301.5},6).to({x:227,y:247.5},7).to({x:323,y:290.6},6).to({y:339.6},8).to({x:367},7).to({x:389,y:319.6},7).to({x:432,y:292.6},4).to({x:462,y:326.6},5).to({y:287.6},5).to({y:212.6},6).to({x:486,y:303.6},5).to({y:344.5},5).to({startPosition:0},4).to({startPosition:0},4).wait(1));

	// Fish1
	this.instance_3 = new lib.Fish1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(468.1,65.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},1).to({x:452.1,y:197.1},6).to({x:399.1,y:301.1},9).to({x:360.1,y:282.1},8).to({x:266.1,y:314},8).to({x:203.1,y:285.1},7).to({x:128.1,y:319},6).to({x:98.1,y:231.1},9).to({x:64.1,y:149.1},7).to({x:75.1,y:72.1},8).to({x:108.1},5).to({x:97.1,y:116.1},6).to({x:76.2,y:163.1},5).to({x:98.1,y:241.1},5).to({startPosition:0},5).to({startPosition:0},4).wait(1));

	// BackGround
	this.instance_4 = new lib._86();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1,1,0.729,0.921);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274,201,553,399);
// library properties:
lib.properties = {
	id: '327252E04891494E8F61ABB662CA014F',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/FishTank_atlas_.png", id:"FishTank_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['327252E04891494E8F61ABB662CA014F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;