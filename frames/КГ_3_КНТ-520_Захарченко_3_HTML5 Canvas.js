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
(lib.КГ_3_КНТ520_Захарченко_3_HTML5Canvas = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:20.1,regY:20.1,scaleX:0.4687,scaleY:0.4687,rotation:129.3447,x:175.7,y:104.9},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:275.4671,x:191.6,y:155.05},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:344.1738,x:202.9,y:145.9},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:383.4972,x:215.1,y:139.55},0).wait(1).to({rotation:413.9498,x:226.4,y:137.5},0).wait(1).to({rotation:443.2407,x:236.15,y:141.45},0).wait(1).to({rotation:486.0665,x:246.2,y:150.8},0).wait(1).to({rotation:526.091,x:252.2,y:162.3},0).wait(1).to({rotation:561.0141,x:259.95,y:159.8},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:591.4754,x:268.65,y:155.75},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:618.2224,x:277.3,y:154.4},0).wait(1).to({rotation:641.8573,x:285.35,y:156.3},0).wait(1).to({rotation:662.8459,x:292.25,y:160.5},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:681.5502,x:298.45,y:164.45},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:698.2566,x:303.9,y:161.45},0).wait(1).to({rotation:713.1953,x:309.6,y:160.4},0).wait(1).to({rotation:726.5545,x:315.3,y:160.15},0).wait(1).to({rotation:738.4902,x:319.35},0).wait(1).to({rotation:749.1336,x:322.2,y:160.2},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:758.645,x:325.1,y:160.3},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:767.9658,x:328.2,y:160.5},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:777.3813,x:331.25,y:160.95},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:786.8227,x:335.35,y:161.85},0).wait(1).to({rotation:796.2095,x:341.6,y:163.6},0).wait(1).to({rotation:805.4551,x:345.1,y:164.55},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:814.474,x:347.8,y:165.15},0).wait(1).to({rotation:823.1901,x:350.45,y:165.55},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:831.5428,x:353.1,y:165.75},0).wait(1).to({rotation:839.4904,x:355.9,y:165.65},0).wait(1).to({rotation:847.0102,x:359.15,y:165.2},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:854.0965,x:362,y:164.55},0).wait(1).to({rotation:860.7569,x:364.4,y:163.95},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:867.0083,x:366.25,y:163.45},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:872.8731,x:367.5,y:163.1},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:878.3772,x:368.9,y:162.7},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:883.5472,x:370.1,y:162.4},0).wait(1).to({rotation:888.4095,x:371.3,y:162.1},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:892.9893,x:372.45,y:161.8},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:897.3103,x:373.55,y:161.55},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:901.3942,x:374.8,y:161.3},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:905.2608,x:376.25,y:161.1},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:908.9282,x:377.85,y:161},0).wait(1).to({rotation:912.4128,x:379.35,y:160.85},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:915.7292,x:380.7},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:918.8907,x:381.95,y:160.8},0).wait(1).to({rotation:921.9758,x:383.2},0).wait(1).to({rotation:925.7688,x:384.6,y:160.85},0).wait(1).to({rotation:930.3168,x:386.3,y:160.95},0).wait(1).to({rotation:935.4366,x:388.2,y:161.1},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:940.9821,x:390.3,y:161.3},0).wait(1).to({rotation:946.8334,x:392.35,y:161.6},0).wait(1).to({rotation:952.8889,x:394.65,y:161.9},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:959.061,x:397.9,y:162.4},0).wait(1).to({rotation:965.2719,x:400.95,y:162.95},0).wait(1).to({rotation:971.4513,x:403.65,y:163.4},0).wait(1).to({rotation:977.5341,x:406.05,y:163.8},0).wait(1).to({rotation:983.4589,x:408.3,y:164.25},0).wait(1).to({rotation:989.1669,x:410.35,y:164.6},0).wait(1).to({rotation:994.6004,x:412.3,y:164.85},0).wait(1).to({rotation:999.702,x:414.35,y:165.1},0).wait(1).to({rotation:1004.4136,x:416.2,y:165.3},0).wait(1).to({rotation:1008.6757,x:417.85,y:165.4},0).wait(1).to({rotation:1012.4261,x:419.3,y:165.6},0).wait(1).to({rotation:1015.5994,x:420.5,y:165.65},0).wait(1).to({rotation:1018.2105,x:421.5,y:165.7},0).wait(1).to({rotation:1020.975,x:422.55,y:165.75},0).wait(1).to({rotation:1024.0472,x:423.6,y:165.85},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:1027.3851,x:424.85,y:165.9},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:1030.9268,x:426.1,y:165.95},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:1034.5894,x:427.45,y:166},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:1038.2699,x:428.75,y:166.1},0).wait(1).to({rotation:1041.8504,x:430.05},0).wait(1).to({rotation:1045.206,x:431.95},0).wait(1).to({rotation:1048.2155,x:433.6,y:166.15},0).wait(1).to({rotation:1050.7724,x:435},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:1052.7931,x:436.05,y:166.2},0).wait(1).to({rotation:1054.2316,x:436.75,y:166.15},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:1055.8077,x:437.4},0).wait(1).to({rotation:1057.9636,x:438.3},0).wait(1).to({rotation:1060.6389,x:439.35,y:166.2},0).wait(1).to({rotation:1063.7038,x:440.55,y:166.15},0).wait(1).to({rotation:1066.9608,x:441.85},0).wait(1).to({rotation:1070.1735,x:443.05},0).wait(1).to({rotation:1073.116,x:444.15,y:166.1},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,rotation:1075.6156,x:445.05,y:166.15},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,rotation:1077.571,x:445.75,y:166.1},0).wait(1).to({rotation:1078.9446,x:446.25},0).wait(1).to({rotation:1079.7433,x:446.55},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(433.4,242.3,23.700000000000045,-65.5);
// library properties:
lib.properties = {
	id: '8655B6BD578B974E93FA8AE08E281B05',
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
an.compositions['8655B6BD578B974E93FA8AE08E281B05'] = {
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