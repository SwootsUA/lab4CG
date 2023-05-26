(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADJAAQAABUg7A6Qg7A7hTAAQhTAAg7g7Qg6g6AAhUQAAhSA6g7QA7g7BTAAQBTAAA7A7QA7A7AABSg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhpCGIgDAAIgEgCIgDgCIgCgCIgCgBIgBgCIgBgCIgBgCIAAgDIgBgCIAAgCIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIABgBIAAAAIABgBIAAgBIAAAAIABgBIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAAAIAAgBIABgBIAAAAIAAgDIAAgCIABgCIABgDIABgCIABgCIAAgBIAAAAIAAgBIAAgBIABgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIABgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIAAgCIABgBIAAgCIABgBIABgCIAAgBIAAgBIABAAIAAgBIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgCIAAgBIABgCIAAgCIABgBIABgBIAAgBIAAgBIABgBIAAgBIAAAAIABgBIAAgBIAAgBIABAAIAAgCIABgCIABgDIABgCIABgCIAAgCIABgCIABgDIABgEIABgDIABgDIABgBIABgCIAAgBIABgCIABgBIAAgCIABgBIAAgBIABgCIABgCIAAgCIACgDIABgCIABgBQACgIAEgGIAHgMIAFgIIAJgOIAIgNIAGgJIAAAAIAHgLQACgFAFgEQAFgFAHgBQAGAAAGADQAFADADAFQACAEAAAEIAAABIAAAAIABACIABABIAAABIABACIABACIAAABIABABIAAAAIAAABIABABIAAABIAAAAIAAABIABABIAAAAIAAABIAAABIABABIAAAAIABABIAAABIAAABIABABIAAAAIAAABIABABIAAAAIAAABIABABIAAABIABABIAAAAIAAABIAAABIAGAKIADAFIAGAJQAEAGADAHIAGAKIAEAKQAGAIADAIIAIAPIADAHIAHASIAIATIAFAPIADAFIADAFIABAFIACAGIADAGIACAGQAEADACAFQACAFAAAFQgBAFgDAFQgEAEgFACQgFACgFAAQgGgBgFgEIgEgDIgEgGIgDgFIgCgHIgCgFIgDgHIgBgGIgGgLIgEgKIgEgMIgGgOIgEgLIAAgBIgEgIIgEgJIgEgIIgGgJQgDgFgCgFIAAgCIgFgIIgEgHIgFgHIgEgHIgFgJIAAgBIgBgCIgBgCIgBgCIgBgDIgCgCIgBgCIAAgBIAAgBIgBAAIAAgBIAAAAIgGAJIgFAJIgGAJIgFAJIgFAKIgBACIgBABIAAACIgBACIgBABIgBABIAAABIgBACIAAABIgBACIAAABIgBACIAAABIgBABIAAACIgBABIgBACIAAAAIgBABIAAABIgBADIgBAEIgBACIAAACIgBACIgBACIgBADIgBABIAAACIgBABIAAACIgBABIAAACIgBABIAAABIgBABIAAACIgBABIAAACIgBABIAAABIgBADIgBACIgBACIAAACIgBADIgBACIgBACIAAABIAAABIAAABIgBAAIAAABIAAABIAAABIAAABIgBACIAAABIgBACIAAABIgBABIAAABIAAABIAAABIAAABIAAAAIAAABIgBABIAAABIAAABIAAACIAAACIgBABIAAACIgBABIgBACIAAABIAAAAIgBABIAAABIAAAAIgBABIAAABIAAABIAAABIAAABIgBACIAAABIAAACIAAABIAAABIgBABIgBACIAAACIAAACIgBADIgBACIgBADIgBACIgBACIgBAAIAAABIAAABIgBABIgBABIAAAAIgBABIAAABIgBAAIgBABIAAABIgBABIgBAAIAAABIgBAAIgBABIgEABIgDABIgFAAg");
	this.shape_1.setTransform(0.48,-0.4031);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033CC").s().p("AiNCOQg7g7AAhTQAAhSA7g7QA6g7BTAAQBUAAA6A7QA7A7AABSQAABTg7A7Qg6A7hUAAQhTAAg6g7gAAAiJQgIABgFAFQgEADgDAGIgGALIAAAAIgGAJIgJAMIgIAPIgFAIIgHALQgEAHgDAIIAAABIgBACIgCACIAAADIgCACIAAACIgBAAIAAABIgBACIgBACIAAACIAAABIgBABIgBACIgBADIgBADIgCADIgBAEIAAADIgBABIgBABIgBADIAAADIgBACIAAABIgBABIAAABIAAABIgBABIAAAAIAAABIgBABIAAAAIgBABIAAACIgBABIgBACIAAACIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIgBAAIAAABIAAABIgBABIgBACIAAACIgBABIAAABIgBACIAAABIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIAAABIAAABIgBAAIAAABIAAABIgBAAIAAABIAAABIAAABIAAABIAAAAIgBABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIgBAAIAAABIAAABIgBAAIAAABIAAABIAAABIAAAAIgBADIgCACIgBACIAAACIgBADIAAADIAAAAIAAABIAAAAIgBABIAAAAIAAABIAAABIAAAAIAAACIAAABIgBABIAAABIAAABIAAAAIAAAAIgBABIAAABIAAABIgBAAIAAABIgBABIAAABIAAABIgBAAIAAABIgBABIAAAAIAAABIAAABIAAABIAAABIAAABIAAACIAAACIABACIABADIABACIABABIABACIACACIAEACIADACIAEAAIAFAAIADgBIAEgBIABgBIABgBIAAAAIAAgBIABAAIABgBIABgBIAAgBIABAAIAAgBIABAAIABgBIABgBIAAgBIAAgBIABgBIABgCIABgBIAAgDIABgDIABgCIABgCIAAgCIABgCIABgBIAAgBIAAgBIAAgCIAAgBIABgCIAAgCIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIABgBIAAAAIAAgBIAAgCIABgCIABgBIAAgBIAAgCIABgCIAAgCIAAgBIAAAAIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIAAgBIABgCIABgBIAAgBIABgCIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAAAIABgCIABgCIAAgDIABgCIAAgCIABgCIABgDIAAgBIACgCIAAgBIABgBIAAgCIABgCIAAgBIABgBIAAgBIAAgBIABgCIAAgCIABgBIAAgCIACgCIABgCIABgCIAAgCIABgCIABgEIABgDIAAAAIAAgBIABgBIABgCIAAgCIABgBIAAgCIAAgBIABgBIABgBIABgCIAAgCIABgCIAAAAIABgBIABgBIABgCIAAgCIAAgCIABgBIAGgKIAFgJIAFgJIAGgJIAFgJIABAAIAAABIAAAAIABABIAAAAIABADIABACIABACIABADIABACIABACIABABIAFAJIAEAHIAFAGIAEAIIAFAIIAAABQABAGADAFIAGAIIAEAIIAFAJIADAJIAAAAIAFAMIAFAOIAFALIAEALIAFALIACAGIACAGIADAGIACAHIACAFIAFAGIAEADQAFAEAGABQAFAAAFgCQAFgCADgEQAEgFABgFQAAgGgCgEQgDgFgEgDIgBgGIgDgGIgCgGIgCgGIgCgEIgDgFIgFgQIgIgSIgIgTIgCgHIgIgOQgEgIgFgIIgEgKIgGgKQgDgHgFgGIgGgKIgCgEIgGgKIAAgBIgBgBIAAgBIAAgBIgBgBIAAAAIAAgBIgBAAIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIgBgBIgBgBIAAgBIgBgCIgBgBIAAgCIgBgBIAAgBIAAgBQAAgDgCgEQgDgFgFgDQgFgDgGAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-21.1,42.2,42.2);


(lib.ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADJAAQAABTg7A7Qg7A7hTAAQhTAAg7g7Qg6g7AAhTQAAhTA6g7QA7g6BTAAQBTAAA7A6QA7A7AABTg");
	this.shape.setTransform(20.1,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhpCGIgDAAIgEgCIgDgCIgCgCIgCgBIgBgCIgBgCIgBgCIAAgDIgBgCIAAgCIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIABgBIAAAAIABgBIAAgBIAAAAIABgBIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAAAIAAgBIABgBIAAAAIAAgDIAAgCIABgCIABgDIABgCIABgCIAAgBIAAAAIAAgBIAAgBIABgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIABgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIAAgCIABgBIAAgCIABgBIABgCIAAgBIAAgBIABAAIAAgBIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgCIAAgBIABgCIAAgCIABgBIABgBIAAgBIAAgBIABgBIAAgBIAAAAIABgBIAAgBIAAgBIABAAIAAgCIABgCIABgDIABgCIABgCIAAgCIABgCIABgDIABgEIABgDIABgDIABgBIABgCIAAgBIABgCIABgBIAAgCIABgBIAAgBIABgCIABgCIAAgCIACgDIABgCIABgBQACgIAEgGIAHgMIAFgIIAJgOIAIgNIAGgJIAAAAIAHgLQACgFAFgEQAFgFAHgBQAGAAAGADQAFADADAFQACAEAAAEIAAABIAAAAIABACIABABIAAABIABACIABACIAAABIABABIAAAAIAAABIABABIAAABIAAAAIAAABIABABIAAAAIAAABIAAABIABABIAAAAIABABIAAABIAAABIABABIAAAAIAAABIABABIAAAAIAAABIABABIAAABIABABIAAAAIAAABIAAABIAGAKIADAFIAGAJQAEAGADAHIAGAKIAEAKQAGAIADAIIAIAPIADAHIAHASIAIATIAFAPIADAFIADAFIABAFIACAGIADAGIACAGQAEADACAFQACAFAAAFQgBAFgDAFQgEAEgFACQgFACgFAAQgGgBgFgEIgEgDIgEgGIgDgFIgCgHIgCgFIgDgHIgBgGIgGgLIgEgKIgEgMIgGgOIgEgLIAAgBIgEgIIgEgJIgEgIIgGgJQgDgFgCgFIAAgCIgFgIIgEgHIgFgHIgEgHIgFgJIAAgBIgBgCIgBgCIgBgCIgBgDIgCgCIgBgCIAAgBIAAgBIgBAAIAAgBIAAAAIgGAJIgFAJIgGAJIgFAJIgFAKIgBACIgBABIAAACIgBACIgBABIgBABIAAABIgBACIAAABIgBACIAAABIgBACIAAABIgBABIAAACIgBABIgBACIAAAAIgBABIAAABIgBADIgBAEIgBACIAAACIgBACIgBACIgBADIgBABIAAACIgBABIAAACIgBABIAAACIgBABIAAABIgBABIAAACIgBABIAAACIgBABIAAABIgBADIgBACIgBACIAAACIgBADIgBACIgBACIAAABIAAABIAAABIgBAAIAAABIAAABIAAABIAAABIgBACIAAABIgBACIAAABIgBABIAAABIAAABIAAABIAAABIAAAAIAAABIgBABIAAABIAAABIAAACIAAACIgBABIAAACIgBABIgBACIAAABIAAAAIgBABIAAABIAAAAIgBABIAAABIAAABIAAABIAAABIgBACIAAABIAAACIAAABIAAABIgBABIgBACIAAACIAAACIgBADIgBACIgBADIgBACIgBACIgBAAIAAABIAAABIgBABIgBABIAAAAIgBABIAAABIgBAAIgBABIAAABIgBABIgBAAIAAABIgBAAIgBABIgEABIgDABIgFAAg");
	this.shape_1.setTransform(20.58,19.6969);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033CC").s().p("AiOCOQg6g6AAhUQAAhTA6g7QA7g6BTAAQBUAAA6A6QA7A7AABTQAABUg7A6Qg6A7hUAAQhTAAg7g7gAAAiJQgHABgGAFQgEAEgCAEIgHALIAAAAIgHAJIgIAOIgIAOIgFAHIgHANQgEAGgDAHIgBACIAAACIgCADIAAACIgBACIgBABIAAACIgBABIgBACIgBABIAAABIgBACIAAACIgBABIgBADIgBADIgBAEIgBACIgBAEIgBACIgBABIgBACIAAACIgBADIgBACIAAAAIAAABIAAAAIgBABIAAABIAAABIgBAAIAAACIAAABIgBABIgBABIgBABIAAACIgBACIAAACIAAABIAAABIgBAAIAAABIAAAAIgBABIAAABIAAABIAAABIgBABIAAACIgBABIAAABIgBABIAAACIAAACIAAABIAAABIgBABIAAAAIAAAAIAAABIAAABIAAABIgBAAIAAABIgBABIAAABIAAABIgBABIAAAAIAAABIAAAAIAAABIAAABIgBABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIgBABIAAAAIAAABIAAABIgBABIAAABIAAAAIAAACIAAABIAAAAIAAABIgBACIgBACIgBADIgBACIgBACIAAACIAAABIAAABIAAABIgBAAIAAABIAAABIAAAAIAAABIAAAAIAAABIgBABIAAACIAAAAIgBABIAAABIAAABIAAAAIAAABIgBABIAAAAIgBABIAAAAIAAABIgBABIAAABIAAABIAAABIAAABIgBABIAAABIAAAAIAAABIAAABIABADIAAADIABACIABABIABACIABACIACACIAEACIADABIAEABIAEAAIAEgBIAEgCIAAAAIABAAIABgBIAAAAIABgBIABgBIABgBIABgBIAAgBIABAAIAAgBIABgBIABAAIAAgBIAAgBIAAAAIABgCIABgDIABgCIABgCIACgDIAAgDIAAgCIABgBIABgBIAAgBIAAgCIAAgBIAAgBIABgCIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAAAIAAgBIABAAIAAgCIABgBIABgCIAAgCIAAgCIABgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIABgBIAAgBIABgCIAAgCIABgBIAAgCIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIABgBIABgDIABgCIAAgCIABgCIAAgDIACgBIABgDIAAgBIABgCIAAgBIABgCIAAgBIAAgBIABgBIAAgBIABgCIAAgCIABgBIAAgBIABgCIAAgBIACgEIABgCIABgBIAAgCIABgDIAAgDIABgCIABgBIAAgBIABgCIABgBIAAgBIABgCIABgBIAAgCIABgBIAAgCIABgBIAAgBIABgCIAAgBIABgCIAAgBIABgCIABgBIAAgBIABgDIAFgJIAGgKIAFgIIAGgJIAFgKIABABIAAAAIABABIAAABIAAABIABACIABACIAAACIACADIABACIABACIABAAIAEAJIAFAIIAEAHIAFAHIAEAIIABACQABAFAEAFIAFAJIAFAIIADAJIAFAIIAAABIAEALIAGAOIAEAMIAEAKIAFALIACAGIADAHIACAFIACAGIACAGIAFAFIAEAEQAFADAGABQAFABAFgCQAFgCAEgFQADgEAAgGQABgFgCgFQgCgEgFgEIgBgFIgDgGIgCgGIgCgFIgCgGIgDgFIgGgOIgHgTIgIgSIgDgHIgHgPQgDgJgGgHIgEgKIgGgLQgDgGgFgGIgFgJIgDgGIgGgKIAAAAIAAgBIAAAAIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBAAIAAgBIAAgBIgBAAIAAgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIAAgBIAAgBIgBAAIAAgBIAAAAIgBgBIAAgBIgBgCIgBgCIgBgBIAAgBIgBgCIAAAAIAAgBQAAgFgDgDQgDgFgFgDQgEgDgGAAIgBAAg");
	this.shape_2.setTransform(20.1,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-1,-1,42.2,42.2), null);


// stage content:
(lib.КГ_3_КНТ520_Захарченко_2_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ball();
	this.instance.setTransform(143.1,82.95,0.4688,0.4688,0,0,0,20.2,20.2);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(446.7,166.15,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},89).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,regY:0,rotation:1080,guide:{path:[143.2,83,141.9,82.7,141.8,82,141.6,81.3,142.5,80.9,143.3,80.6,144.2,80.7,151.6,81.7,158.5,85.9,164.9,90,170,96.3,174.5,101.9,178.1,109.4,181.1,115.5,183.9,123.8,189.9,141.7,192.6,160.2,196,153.9,199.4,149.8,203.7,144.6,208.8,142,211.7,140.5,215.7,139.5,218.1,138.8,222.9,138,225,137.7,226.2,137.6,228.1,137.4,229.5,137.8,231.3,138.1,233.1,139.3,234.3,140,236.3,141.6,243.5,147.3,247.1,151.9,252.2,158.3,252.5,164.9,259.9,159.2,265.9,156.7,273.8,153.4,280.7,154.7,285.1,155.6,289.9,158.7,292.8,160.7,297.9,165,300.8,162,306,161,309.4,160.2,315.4,160.2,321.3,160.1,324.2,160.3,329,160.5,332.8,161.2,333.9,161.5,343.2,164.1,349.6,165.8,353.8,165.8,357.8,165.7,364,164.1,372.3,161.8,374,161.4,381.6,160.1,392.3,161.5,398.4,162.4,410.6,164.6,418.6,165.7,428.8,166.1,434.8,166.2,446.7,166.1]},mode:"synched",startPosition:0},89).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(432.9,239.2,24.200000000000045,-62.39999999999998);
// library properties:
lib.properties = {
	id: 'F5D402A39D0F3146970EF2AD1B23224C',
	width: 600,
	height: 338,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['F5D402A39D0F3146970EF2AD1B23224C'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;