(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"testmore_atlas_", frames: [[702,0,210,423],[0,0,700,150]]}
];


// symbols:



(lib.orphanageowner_normal = function() {
	this.spriteSheet = ss["testmore_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.textbox = function() {
	this.spriteSheet = ss["testmore_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.textbox();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,700,150), null);


(lib.RPGText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.txt = new cjs.Text("click", "19px 'Times New Roman'", "#333333");
	this.txt.name = "txt";
	this.txt.lineHeight = 23;
	this.txt.lineWidth = 526;
	this.txt.parent = this;
	this.txt.setTransform(37.1,24.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// box
	this.instance = new lib.textbox();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.RPGText, new cjs.Rectangle(0,0,700,150), null);


// stage content:
(lib.testrework = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		//var typewriter = createjs.Sound.play("typewritersound");
				
		//this.rpgText.txt.text = "Yay, this works!!";
				
		//nested/multidimensional array (an array within an array)
		var textBlocks = [
				["Foster Dad", 	"Sorry Torin but we can't afford a booster board right now"],
				["Torin", 	    "What do you mean!?"],
									];
		
		//using constants because Speaker will always be in the first index. Text will be 2nd
		const SPEAKER = 0;
		const TEXT = 1;
		//defining variables that will be used within my text functions
		var currentTextBlockIndex = 0; //starting the index off at 0
		var currentTextBlockString;
		var currentTextBlock;
		
		//this.addEventListener(MouseEvent.CLICK, startText)??
		addEventListener("click", nextTextBlock);
		
		/*
		function startText() {
			removeEventListener("click", startText);
			currentTextBlock = textBlocks[currentTextBlockIndex][TEXT];
			console.log("clicky?")
			//characterIcon.gotoAndStop(textBlocks[currentTextBlockIndex][SPEAKER]);
			addEventListener("click", nextTextBlock);
			return currentTextBlock
			//this code is only run through at the beginning
		}
		*/		
		//this.rpgText.txt.text = startText();
		
		//function updateText() {
		//	this.rpgText.txt.text = startText();
		//		//removeEventListener(MouseEvent.CLICK, updateText);
		//	}
		//this.rpgText.txt.text = startText();
		//need to put this in a function that only goes from a button press
		//does not just happen automatically
				
				
		function nextTextBlock() {	
			console.log("nextTextBlock() was called");	
			currentTextBlock = textBlocks[currentTextBlockIndex][TEXT]; // set the text
			//create timer to print text letter by letter
			var idx = 0;
			var string = "";
			var timerFunctionReference = setInterval(letterByLetter ,50);
			function letterByLetter() {
				string += currentTextBlock[idx++];
				var typewriter = createjs.Sound.play("typewritersound");
				typewriter.on("complete", this.handleComplete, this);
				typewriter.volume = 1;
				if(string.length > 0) removeEventListener("click", nextTextBlock);
				if(idx >= currentTextBlock.length){ clearInterval(timerFunctionReference);
				addEventListener("click", nextTextBlock);}
				console.log(string);
				updateText(string);
			}
			console.log(currentTextBlock)
			currentTextBlockIndex++; //increases the index by 1
			if(currentTextBlockIndex >= textBlocks.length){ 
				currentTextBlockIndex = 0; 
					}	
			//addEventListener("click", nextTextBlock);
			if(string.length == currentTextBlock.length) addEventListener("click", nextTextBlock);
			return currentTextBlock;
				}
		console.log(currentTextBlockIndex);
		
				
		rt = this.rpgText;
		function updateText(msg){
			rt.txt.text = msg;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// boxlayer
	this.rpgText = new lib.RPGText();
	this.rpgText.name = "rpgText";
	this.rpgText.parent = this;
	this.rpgText.setTransform(350,325,1,1,0,0,0,350,75);

	this.timeline.addTween(cjs.Tween.get(this.rpgText).wait(1));

	// Layer_2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(350,325,1,1,0,0,0,350,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.orphanageowner_normal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(340,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,200,700,423);
// library properties:
lib.properties = {
	id: '4152B7DF1D449A45940510BAD34B3D7B',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/testmore_atlas_.png", id:"testmore_atlas_"},
		{src:"sounds/typewritersound.mp3", id:"typewritersound"}
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
an.compositions['4152B7DF1D449A45940510BAD34B3D7B'] = {
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