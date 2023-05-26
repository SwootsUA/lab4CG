(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"КГ_3_КНТ_520_Захарченко_Film_HTML5 Canvas_atlas_1", frames: [[0,0,1135,756],[1137,0,518,531]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap3 = function() {
	this.initialize(ss["КГ_3_КНТ_520_Захарченко_Film_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Plane = function() {
	this.initialize(ss["КГ_3_КНТ_520_Захарченко_Film_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.WarpedAsset_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("Ay7S7QiAgohmhXQgSgPgQgQQhehfgxh+Qgxh9AGiGQACg7ANg4Qhehfgxh9Qgxh9AGiGQAGiGA7h4QA7h5BnhXQBnhWCAgmQCCgmCFARIAqAHQAggPAigLQBvgkB0AFQANhqAvhhQA7h5BohWQBmhWCBgmQCBgnCGASQCDARBzBFQB0BGBNBuQBNBuAbCDQAIAjADAkQAQg/Adg8QA7h5BohXQBmhWCBgmQCBgmCGARQCEASBzBFQB0BFBNBvQBNBtAbCDQAbCEgdCEQgdCDhOBsIgMAQQA2AxArA8QBNBtAbCDQAbCEgdCEQgdCDhOBsQhPBuh1BDQhzBEiFAPQiGAQiBgoQiAgohmhXIghggQgbgagXgdIgJAMQhPBuh0BDQh0BEiFAPQhLAJhJgJQgYARgZAPQhzBDiFAQQiGAPiAgoQhDgVg8ghQgwArg5AhQh0BDiFAQQglAEglAAQhgAAhcgdg");
	this.shape.setTransform(-0.0068,-0.007);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.4,-124,366.8,248);


(lib.WarpedAsset_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("A3QYqQg2gJg0gRQg0gSgwgaQgwgagrgiQgegXgbgbQgngngfgtQgggtgXgyQgYgxgPg1QgOg1gGg2QgGg3AEg3QAEg3AOg1QANg2AWgyQAWgyAeguQAeguAmgoQAmgoAsghIAagSIgCgSQgGg3AEg3QAEg3ANg1QANg2AWgyQAWgyAegtQAfguAlgoQAmgoAtghQArghAxgZQAVgKAWgJIgIgZQgOg1gGg2QgGg3AEg3QAEg3AOg1QANg2AWgyQAWgyAeguQAeguAmgoQAmgoAsghQAsghAxgZQAwgYA1gRQA0gQA2gHQA3gIA3ADQA3ACA2AMQA2AMAyAUQAzAVAvAcQAYAPAWARQARgDARgCQA3gHA3ACQAbABAcAEIABgUQAEg3ANg1QANg1AWgyQAWgyAeguQAfguAkgoQAmgoAtghQArghAxgZQAxgZA0gQQA1gRA2gHQA3gHA3ACQA3ADA2ALQA1AMAzAVQAzAUAuAdQAvAdApAkQApAlAjArQAiArAaAwIANAYQAcgSAdgQQAxgYA0gRQA1gQA2gHQA3gHA3ACQA3ACA2AMQA1AMAzAUQAzAVAuAcQAvAdApAlQApAkAjAsQAiAqAaAxQAaAwASAzQASA0AJA2QAJA3gBA3QgBA3gKA2QgKA2gTAzQgMAhgPAgIAJAZQASA0AIA2QAJA2AAA3QgBA3gKA3QgKA1gTAzQgTAzgcAwQgbAvgjAqQgXAbgZAZQgCAygJAyQgKA2gTAzQgTAzgbAwQgcAvgjAqQgjArgqAjQgqAkgwAcQgvAbgzATQgzAUg2AKQgdAGgcADQgHAYgJAYQgTAzgcAwQgbAvgjAqQgkArgqAjQgqAkgvAbQgvAcg0ATQgzAUg2AKQg2ALg3ABQg3ABg3gJQg2gIg0gSQg0gSgwgZQgwgbgrghQgegYgbgbQgRgRgQgSQgLAWgMAWQgcAwgjAqQgjAqgpAkQgqAjgwAcQgvAcgzATQgzATg2ALQg2AKg3ABQg4ABg2gIQg2gJg0gRQg0gSgwgaQgwgagsgiQgXgSgWgVIgNARQgkAqgqAkQgqAjgvAcQgvAcg0ATQgzATg2ALQg2AKg3ABIgLAAQgyAAgxgHg");
	this.shape.setTransform(0.0213,0.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203,-158.5,406.1,317.1);


(lib.stop = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AAqirIB7AAIAAFXIh7AAgAikirIB7AAIAAFXIh7AAg");
	this.shape.setTransform(-26.175,1.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(15,1,1).p("AkgkgIJBAAIAAJBIpBAAg");
	this.shape_1.setTransform(-26.4,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF99").s().p("AAqCsIAAlXIB7AAIAAFXgAikCsIAAlXIB7AAIAAFXg");
	this.shape_2.setTransform(-26.175,1.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AkgEhIAApBIJBAAIAAJBgAAsCrIB7AAIAAlXIh7AAgAiiCrIB8AAIAAlXIh8AAg");
	this.shape_3.setTransform(-26.4,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("AikirIB7AAIAAFXIh7AAgAAqirIB7AAIAAFXIh7AAg");
	this.shape_4.setTransform(-23.325,-1.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AkgEhIAApBIJBAAIAAJBgAAsCrIB7AAIAAlXIh7AAgAihCrIB6AAIAAlXIh6AAg");
	this.shape_5.setTransform(-23.55,-1.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("AAqCsIAAlXIB7AAIAAFXgAikCsIAAlXIB7AAIAAFXg");
	this.shape_6.setTransform(-28.575,3.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AkgEhIAApBIJBAAIAAJBgAAsCqIB7AAIAAlWIh7AAgAiiCqIB7AAIAAlWIh7AAg");
	this.shape_7.setTransform(-28.8,3.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{x:-26.175,y:1.175}},{t:this.shape_1,p:{x:-26.4,y:1.3}},{t:this.shape,p:{x:-26.175,y:1.175}}]}).to({state:[{t:this.shape_5},{t:this.shape_2,p:{x:-23.325,y:-1.275}},{t:this.shape_4},{t:this.shape_1,p:{x:-23.55,y:-1.15}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape,p:{x:-28.575,y:3.025}},{t:this.shape_1,p:{x:-28.8,y:3.15}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2,p:{x:-26.175,y:1.175}},{t:this.shape,p:{x:-26.175,y:1.175}},{t:this.shape_1,p:{x:-26.4,y:1.3}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-37.5,78.10000000000001,77.1);


(lib.play = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#999999").ss(15,1,1).p("AkgkgIJBAAIAAJBIpBAAg");
	this.shape.setTransform(-28,0.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF99").s().p("AiqjEIFVDEIlUDFg");
	this.shape_1.setTransform(-26.55,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AkgEhIAApBIJBAAIAAJBgAibDGIFUjFIlVjEg");
	this.shape_2.setTransform(-28,0.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF99").s().p("AiqjEIFVDEIlVDFg");
	this.shape_3.setTransform(-22.55,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AkgEhIAApBIJBAAIAAJBgAibDGIFUjGIlVjEg");
	this.shape_4.setTransform(-24,-2.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC33").s().p("AiqjEIFVDEIlVDFg");
	this.shape_5.setTransform(-29,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AkgEhIAApBIJBAAIAAJBgAibDGIFVjFIlVjEg");
	this.shape_6.setTransform(-30.45,2.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:-28,y:0.55}}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape,p:{x:-24,y:-2.75}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape,p:{x:-30.45,y:2.45}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:-28,y:0.55}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.8,-39.1,79.2,78);


(lib.Plane2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Plane();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,518,531);


(lib.minute_arrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.988)").s().p("AizAIIADgCIAOgGIAIgHIAHgFIAIgGIAIgFIAFgDIAPgMIAQgPIAQgOQAGgHAIgFIAKgGIADgDIADgCIAEgEIADgDIAEgDIAEgDIALgMIAMgJIALgJIAOgKIALgGIADgBIABgBIACgBIACgCIACgBIACgCIACgBIACgBIABgBIACAAQAYgSAcgIQANgEANADQAYAEAQASQAOAQADAVQADASgHASQgIASgQAMQgLAIgMAGIgEADIgEADIgDACIgEACIgEABIgDADIgDACIgEADIgEACIgEACIgEACIgCABIgCABIgCABIgBACIgCABIgCABIABgBIgBABIgBABIABgBIgCABIgCACIgKAKIgMAJIgMALIgMAKIgKAHIgRAQIgRAPIgTAPIgSANIgMAIIgKAIIgJAHIgMAHIgMAHIgIAEIgFAFIgGAFIgFAEIgGAFIgDADQgJAQgPAKIgMAHgAiUCfIABAAIAAAAIgBAAg");
	this.shape.setTransform(17.9829,18.9229);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,37.9);


(lib.hour_arrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.988)").s().p("AAlFxQgKgDgIgFQgTgBgQgMQgWgPgGgZIgCgEQgDgKAAgLIAAgCIAAgCIAAgCIAAgCQgEgUABgVIAAgmIAAgmIAAgoIABglIAAgHIgDgLIgBgKIAAgKIAAgIIAAgKIAAgGIAAgDIAAgCIgBgCIAAgDIgCgEIgBgDIAAgCIgBgDIgBgDIAAgDIAAgEIgBgFIAAgEIgDgGIgCgHIgBgGIgBgHIgBgGIAAgEIgEgNIgDgRIgBgPIAAgPIAAgOIAAgIIgBgFIgBgEIAAgFIAAgFIgBgFIAAgDQgIgbACgcIABgeQgBgdACgdQABgMAFgKQALgVAVgKQAbgOAbALQAYAJAMAWQANAXgCAaIgBAVIAAA6IACAJIACAHIAAAHIABAHIAAAGIAAAHIAAACIACAMIABALIAAAKIAAAKIAAALIAAACIACAHIACAHIACAHIABAHIAAAHIAAACIADAGIACAHIABAHIABAHIABAHIABAEQACAFAAAFIACALIACAOIABAQIAAANIAAAMQAEATAAAUIgBApIAAAmIAAAVIACgBIAAC1QgLAFgLACIgLABQgKAAgJgDg");
	this.shape.setTransform(8.8382,37.165);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.7,74.4);


(lib.PuppetShape_15copy3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("Ag4SDIh8gQQgXgDh3AEQhlADhFgUIhegcQg2gSgmgUQg0AThtAUQilAfiug0QiqgziOhhQg9grgtg9QgigwghhLQgLgYgGgUQgriQgBh7QgCh1BMh3IAbgqQAQgXANgOQgdgugUhBIgfh4QgOg7ALhMQAKhGAhhdQAph1Abg3QArhbA0gxQA0gvBDgnQAQgKBwg6QBFgkBSgBQBVgCBDAkQB8BABVBvIAXAhQAhALAaALQAxAUAiAeQAMAKAKANIgEgSQgGglAHgvQALhKAJgdQATg8AtgsQAzgyBBgqQBDgrBFgdQB+g1CmgHQCfgHCMAzQBOAdA6A6QA5A7AWBJQAZBTAHA6QAIBKgPA/IgJAkQgFAVACAPQAIgUAKgsQAKgrAJgWQA0h9B6hVQBuhOCVgJQB1gHCIAxQAkANBIAUQBAAVArAlQAzAqAcA1QAaAxAJBAQAHApgRA+QgPA3AKAXQAaA2AMAlQAXBBgIA0QgLBDgWAvQgZA3gsAoIgOAMQAdAXAQAQQAVAXANAZQAeA9AJAqQANA4gOA4QgMAtgqAsQgoAqgDAPQgEATAABMQgEBNgaArQgXAmgvA3QgxA5gVAgQgnBAgoAsQg4A7g+AdQhWAog5ANQhRAThDgTQhBgRg0grQgZgVg7hBQgFgFgFgLIgKgRQgFgIgHgUQgHgTgHgJIgFANQgSA5gfAzQgdAxguAyQguAwhIAZQhIAXhRgGQg9gGgdgFQgwgHgngMQgKAFgTAEIgeAIQgzAQg3AAIgagBg");
	this.shape.setTransform(-9.1328,20.2499);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("Ag6SEQgRgBhrgOQgXgDh3AEQhkADhFgUIhdgbQg1gSgngVQgzAUhsAUQiiAgiwgzQiogwiOhhQg9gqgtg8QgjgwghhJQgKgVgIgYQgsiPgCh6QgDh4BJh1IAbgrQAPgXAOgPQgegsgUhBQgHgWgYhjQgPg7ALhMQAKhFAfhdQAohyAbg5QAqhZA0gxQAzgwBDgoQATgLBsg5QBEgkBSgDQBUgCBEAhQB7A+BYBtIAWAhQAfAKAdALQAxASAiAdQAOANAOAPQgEgLgCgOQgGglAHgvQAMhKAJgdQAUg9AsgrQA0gxBBgrQBCgrBGgcQB8g0CmgHQCegHCMA0QBOAdA5A6QA5A6AXBJQAZBRAHA8QAJBIgPBAIgIAkQgFAVACAPQAIgTAKgsQAKgsAJgWQA1h/B4hTQBuhNCVgLQBzgHCJAvQAlANBJAUQA/AWAsAkQAyApAdA1QAbAyAKA/QAHApgPA/QgOA4AKAXIAmBcQAWBCgJA0QgLBDgWAvQgZA3gtAoIgNAMQAdAWAPARQAVAXAOAaQAeA7AKArQANA3gNA5QgKAugoAtQgpAsgDAPQgEAVgBBLQgFBNgaArQgXAmgwA3QgyA5gUAgQhcCQhrAxQhVAmg6ANQhQAThDgSQhBgSg0grQgZgVg7hAQgFgGgGgLQgGgMgDgEQgGgJgIgTQgHgUgGgIIgFANQglBuhaBgQgtAwhIAYQhIAYhRgHIhZgJQgwgHgmgMQgLAFgSAEIgfAIQgzAQg5AAIgXAAg");
	this.shape_1.setTransform(-8.7041,19.5972);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("Ag9SEQgUgBhngNQgWgCh4ADQhkADhEgUQhJgUgUgHQg0gRgngVQgyAUhsAVQiiAgitgxQimguiPhfQg+gqgtg8QgjgvgjhIQgOgggEgNQgtiKgDh+QgEh4BHh2IAagrQAPgYAOgOQgegtgVhAQgIgagYhfQgPg7ALhMQAJhFAfhcQAmhwAcg6QAphZA0gxQAygxBCgoQAZgPBlg2QBEgkBRgEQBTgDBFAgQB8A8BYBrIAXAgIA8AUQAxARAjAcQARAOAPATQgFgPgDgSQgFglAHgvQAMhKAKgdQAVg9AsgrQA0gxBAgqQBCgrBGgcQB9g0ClgGQBOgDBFAKQBLALBLAcQBNAdA5A6QA5A6AXBIQAaBRAHA7QAJBIgOBAIgIAkQgEAVACAPQAHgTALgsQAKgsAJgWQA0h+B5hUQBthNCVgMQBzgICJAvQAlAMBJAVQA/AVAsAkQAzApAdA1QAbAxAMA/QAIApgOBAQgNA5AKAYQAZA4AMAlQAVBCgJA0QgLBDgWAvQgaA3gsAoIgOANQAdAWAQARQAVAWAOAaQAfA8AKAqQANA4gLA4QgKAvgnAuQgnAugEAQQgEAVgBBMQgGBMgbAsQgXAmgwA2QgzA6gUAfQgqA/goAqQg4A6g+AcQhVAlg6ANQhQARhDgSQhBgSg0gqQgbgWg6g/QgGgGgFgKIgJgRQgGgJgIgTQgHgTgHgJIgFANQgmBvhaBeQguAwhHAYQhIAYhRgHQhygJg8gSQgLAFgSAEIgeAIQg2ASg7AAIgTgBg");
	this.shape_2.setTransform(-8.2961,18.9696);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("Ag/SFQgXgBhlgMQgVgCh4AEQhjADhEgUIhcgcQg0gRgmgVQg0AVhpAVQihAhisgvQingtiNheQg+gpgtg7QglgvgihHQgOgdgFgPQguiJgFh/QgEh4BEh2IAagsQAPgYANgOQgfgtgVhBQgKgggWhZQgOg6AJhMQAJhFAfhbQAlhuAbg7QAphYAygyQAygwBCgpQAWgOBng4QBEgkBQgFQBSgEBFAfQB7A4BbBqIAYAgIA7ASQAxAQAkAbQAUAQASAVQgIgRgDgXQgEglAIgvQAMhJALgfQAVg8AsgqQA0gyBAgpQBCgrBFgcQB+gzCjgGQCcgFCMA0QBMAdA5A6QA5A6AXBIQAaBPAIA8QAKBIgNBAIgIAkQgEAVACAPQAHgTALgtQAKgrAJgWQA1h9B4hVQBuhOCTgLQBzgKCKAuQAlANBJAUQA/AVAsAkQAzApAeA0QAcAxAMA/QAIApgMBAQgLA7AJAYQAhBUADAKQAVBDgJA0QgMBDgWAvQgaA3gsAoIgNAMQAdAYAPAQQAWAWANAaQAgA7AKArQAOA3gLA5QgIAvgmAvQgmAxgEAQQgEAWgDBMQgGBMgbAsQgYAmgwA3QgzA6gVAeQgqA/gpApQg4A5g/AbQhTAkg7ANQhQARhCgTQhBgRg0gqQgbgWg7g/QgGgGgFgLIgKgQQgGgJgIgTQgHgTgHgJIgFANQgnBuhbBeQgvAwhHAYQhHAXhQgGQg7gFgegEQgvgGgmgLQgLAEgSAFIgeAIQg3ASg/AAIgNAAg");
	this.shape_3.setTransform(-7.8842,18.333);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("AhBSGQgcgBhggLQgUgCh6ADQhiADhEgUQhMgVgPgGQgzgQgmgVQgyAUhqAWQieAiitgtQilgsiNhcQg+gogug6QgmgwgjhGQgLgYgIgTQgviIgFh/QgGh5BCh2IAZgsQAPgYANgPQgfgtgWhBQgJgdgYhbQgOg7AJhLQAJhFAdhbQAkhsAbg8QAohXAygyQAxgxBBgpQAegTBfg0QBDglBQgFQBSgGBEAeQB9A2BcBoIAYAfIA7ARQAxAQAkAaQAXAQAUAYQgJgTgDgbQgEglAIgwQANhJALgeQAWg8AsgrQA0gxBAgpQBCgrBEgbQB+gzCigFQCegFCJA1QBMAcA5A6QA4A5AYBIQAbBPAIA8QAKBIgMBAIgIAkQgEAVACAPQAIgTAKgtQALgrAJgWQA0h+B4hUQBthOCTgNQBygKCLAtQAlAMBJAVQA/AVAtAjQAzApAfA0QAcAxAOA+QAJApgLBCQgKA7AJAYIAkBgQATBDgJA0QgMBDgWAvQgaA4gsAoIgOAMQAdAXAQARQAWAXAOAZQAfA7ALArQAOA4gJA5QgIAuglAxQglAygEARQgEAXgEBNQgHBLgbAsQgZAngvA2Qg1A7gUAdQhfCLhtAuQhTAkg7AMQhPAQhDgTQhAgSg1gpQgdgXg5g+QgFgFgGgLIgKgRQgGgIgIgUQgIgTgHgJIgFANQgoBuhcBeQgvAvhGAYQhIAXhPgFQhxgJg8gRQgLAFgSAEIgeAJQg5AThAAAIgJAAg");
	this.shape_4.setTransform(-7.4291,17.6874);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("AhESGQgbAAhhgLQgQgBh9ADQhgAChFgTIhagbQgzgRglgUQg3AWhkAVQidAjisgsQijgpiOhcQg+gogug5QgngwgjhEQgNgbgHgQQgwiGgHiAQgGh5BAh3IAYgsQAPgZAMgPQgfgtgWhBQgMgjgVhVQgPg7AJhLQAIhEAdhbQAihqAbg8QAohXAygyQAwgyBAgpQAigWBagxQBDglBPgGQBSgHBEAcQB8AzBeBnIAYAfIA8APQAxAOAkAaQAaASAXAbQgMgVgDghQgEgmAJgvQANhHAMghQAWg7AtgrQBthnCMg4QB/gzChgEQCbgFCKA1QBMAeA4A5QA4A5AZBHQAbBPAJA7QAKBIgMBAIgHAkQgEAVACAPQAIgTAKgtQALgrAJgWQA1h+B3hUQBshOCTgOQB0gKCKAsQAlAMBJAVQA/AVAtAjQAzAoAgA0QAcAwAPA/QAKApgKBBQgJA9AJAZIAjBhQATBDgKA0QgMBDgWAwQgaA4gsAoIgOAMQAdAWAQARQAWAXAOAaQAgA6ALAsQAPA3gJA5QgHAvgjAyQglA0gDASQgFAXgEBNQgIBLgcAsQgYAngwA2Qg2A8gUAdQhgCJhtAtQhSAjg8ALQhPAPhCgSQhBgSg0gpQgdgXg6g+QgFgFgGgLIgLgRQgGgIgIgUQgIgSgHgJIgFANQgpBuhdBcQgvAvhHAYQhGAXhQgFQhvgIg9gRQgTAIgnAKQg7AUhBAAIgHAAg");
	this.shape_5.setTransform(-7.0229,17.0597);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("AjDR+QgRgCh7ADQhhADhDgUIhagbQgygRgmgUQg2AXhjAVQicAjirgpQiggniPhbQg+gogvg4QgogvgjhEQgNgXgHgUQgyiDgIiBQgHh6A9h3QAhg/ASgWQgggtgWhBQgNgkgVhUQgPg6AJhMQAHhEAchaQAhhoAcg9QAnhWAxgzQAwgyA/gpQAigWBZgyQBDglBOgHQBRgIBEAbQB8AwBgBlIAZAeIA8APQAxANAlAYQAdAUAbAeQgRgXgDgmQgDgnAJgvQAOhHANghQAWg7AtgrQBthmCMg4QB/gyCggEQCbgECJA2QBLAdA4A5QA4A5AZBGQAbBOAKA8QALBHgMBBIgGAkQgEAVACAPQAHgTALgtQAKgrAKgWQA0h9B3hVQBuhOCRgOQBygMCLArQAmAMBJAVQA/AVAtAjQA0AoAgAzQAdAwAQA/QAKApgIBCQgIA+AJAZIAiBiQASBDgJA1QgNBDgWAvQgaA4gsApQgJAGgEAGQAdAXAPARQAWAXAOAZQAgA6ANAsQAPA4gIA5QgHAvgiAzQgjA2gEASQgFAYgFBNQgJBLgcAsQgZAogwA1Qg2A9gUAcQhiCHhsAsQhTAig7ALQhPAOhCgSQhBgSg0gpQgfgYg5g8QgFgGgGgKIgKgRQgHgIgIgUQgJgTgHgJIgFAOQgrBuhdBbQgvAvhGAXQhHAYhPgFQg3gEgggEQgvgGglgKQgTAIgnAKQg8AVhGAAQggAAhdgJg");
	this.shape_6.setTransform(-6.5766,16.4112);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("AjFR/QgNgBh/ADQhfAChEgTQhDgTgWgIQgygQglgVQgwAWhoAYQidAjiogoQifgliQhaQg9gngwg3QgogvgkhDQgOgbgHgQQgyiAgJiDQgJh6A7h3QAihAARgWQgggtgXhAQgOgngVhRQgPg7AIhLQAHhEAbhZQAghnAcg+QAmhVAwgzQAvgzBAgqQAkgYBWgwQBCglBOgIQBQgJBEAZQB+AvBgBiIAZAeIA8ANQBaAWA7BDQgUgYgDgsQgCgmAIgvQAQhIANghQAXg7AtgqQAzgxA/goQBCgpBEgbQB7gyCjgEQCZgDCJA2QBLAeA4A4QA4A4AZBHQAcBNAKA8QALBHgKBAIgHAkQgDAVACAPQAGgTAMgtQALgqAJgWQA1h9B2hVQBthPCRgPQBzgMCKArIBwAgQA/AVAtAjQAzAnAhA0QAeAvAQA/QALApgGBCQgHA/AJAaIAiBjQARBEgKA0QgMBDgXAwQgbA4grAoIgOANQAdAYAQAQQAWAXAPAaQAgA5AMAtQAQA3gHA6QgGAvggA0QgjA5gEARQgFAZgGBNQgJBMgdArQgZAogwA2Qg4A+gTAaQhiCEhuAsQhTAhg6ALQhQAOhBgTQhAgSg1gpQgfgYg5g8QgGgFgGgLIgKgQQgHgJgIgTQgJgTgHgJIgFANQgrBuhfBbQgvAuhHAYQhGAXhOgFQhugGg9gRQgTAIgnALQg7AVhGABIgEAAQghAAhYgJg");
	this.shape_7.setTransform(-6.1502,15.7684);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,255,255,0.498)").s().p("AjGSBQgNgBh/ADQhfAChDgUQhDgTgVgHQgygQglgVQgyAXhkAXQibAliognQicgiiRhaQg+gmgwg2QgqgvgkhCQgOgZgGgRQg0h/gKiEQgKh8A5h2IAXgtQAOgZAMgQQgggugYhAQgOgpgVhPQgPg7AIhKQAGhEAbhYQAehmAcg+QAmhUAvg0QAvgzA/grQAngaBSgvQBCgkBMgJQBQgKBFAXQB8AsBjBhIAaAdIA8AMQAxALAmAWQAkAVAfAjQgWgZgDgwQgCgmAKgvQAPhGAOgjQAXg7AtgqQBvhnCJg1QB9gxCggDQCbgDCGA3QBLAdA4A4QA3A4AaBGQAcBNAKA7QAMBIgKA/IgGAlQgDAVACAOQAHgSALgtQALgqAJgXQA2h9B1hUQBshPCRgQQBzgNCLAqIBwAgQA/AVAuAiQBhBMAjB8QAMArgFBCQgGBAAJAZQAcBSAFATQARBEgLA1QgNBDgWAwQgbA3gsAqIgNAMQAdAYAQARQAWAWAPAaQAhA4ANAtQAPA3gGA7QgFAwgfA1QgiA7gEARQgGAagHBNQgKBLgcAsQgbApgvA1Qg7BAgRAXQhjCDhuArQhRAgg8AKQhOAOhCgTQhBgSg1gpQghgZg3g6QgGgGgGgLQgHgMgEgEQgGgIgJgUQgJgSgHgKIgGAOQgsBuhfBaQgwAuhGAWQhFAXhPgDQg0gDgigEQgugGgmgKQgKAFgSAFIgdAJQg7AXhGABIgJAAQgmAAhOgIg");
	this.shape_8.setTransform(-5.8663,15.1501);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,255,255,0.498)").s().p("AjGSDIiLACQheAChDgUQhBgSgXgIQgwgRglgUQg4AZheAWQiaAlingkQiYghiThYQg/gmgwg1QgqgvgkhBQgOgXgIgTQg1h/gLiCQgKh9A3h1QAcg+AUgaQghgtgYhAQgPgqgVhOQgQg8AHhKQAHhDAahYQAdhkAcg/QAlhUAvg0QAugzA+grQAngbBRguQBBgmBNgKQBOgKBFAWQB+ApBjBfIAaAcIA8ALQAxAKAnAWQAkAUAhAiQgVgagCgwQgCgnAKgvQAQhGAOgjQAYg7AtgqQBthlCLg2QB9gxCfgCQCXgDCJA3QBJAeA4A4QA3A4AbBFQAcBMALA8QAMBHgJBAIgFAkQgDAVABAPQAHgTAMgtQAKgqAKgWQA1h9B1hVQBthQCQgQQBzgNCLAoIBwAgQA/AVAuAjQBhBJAmB+QAMAqgEBDQgEBBAJAaQAbBSAEAUQARBEgLA1QgNBDgWAwQgbA4gsApQgJAIgEAFQAdAYARAQQAWAXAOAaQAhA4ANAuQARA3gFA7QgFAvgeA3QghA9gEARQgGAagIBOQgLBLgcAsQgbApgvA0Qg8BCgRAWQhlCAhuArQhRAfg8AKQhOAMhBgSQhAgSg2gpQghgZg4g6QgGgFgGgLIgLgQQgGgJgKgTQgJgTgHgJIgFANQgtBthgBbQgxAthFAXQhGAXhOgEQhqgFg/gRQgSAJgnALQg7AWhGACIgJAAQgnAAhNgGg");
	this.shape_9.setTransform(-5.7257,14.5254);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,255,255,0.498)").s().p("AjGSFIiLACQhdABhDgTQg+gSgZgIQgwgQgkgUQgyAXhjAYQiYAmingiQiZggiRhWQhzhFhLiDQgQgcgGgOQg2h9gNiEQgMh7A2h3QAag9AVgdQgigsgYhAQgPgqgWhOQgPg8AGhKQAGhDAZhYQAdhiAbg/QAlhTAug0QAugzA9gsQAogdBPgtQBBgmBLgLQBPgLBEAVQB9AmBmBdIAbAcIA8AJQAxAJAoAVQAkAUAiAgQgUgbgCgvQgCgoALgvQAQhEAPglQAZg7AtgpQBshlCLg1QB+gxCdgCQCYgBCHA3QBKAeA3A3QA3A4AbBFQAdBLALA8QANBGgJBAIgFAlQgDAUACAPQAGgSAMgtQALgqAJgWQA3h+B0hUQBshQCQgRQB0gOCKAoIBwAfQBAAWAuAiQA0AnAiAzQAfAvATA9QANAqgCBEQgDBCAIAaQAaBRAFAWQAQBEgLA1QgNBDgXAxQgaA4gsApIgNANQAdAXARARQAWAXAPAaQAhA4AOAuQAQA4gEA6QgEAwgcA4QghA/gEARQgGAbgJBOQgLBLgdAsQgbApgwA0Qg9BDgRAVQhlB+hvAqQhQAfg8AJQhOALhCgSQhAgSg1goQgjgag3g5QgGgGgGgKIgLgRQgHgJgJgTQgKgTgGgJIgGAOQgvBuhgBYQgxAthFAXQhFAXhOgDQhogFhAgRQgTAJgmAMQg7AWhGADIgQAAQgnAAhGgFg");
	this.shape_10.setTransform(-5.581,13.8871);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,255,255,0.498)").s().p("AjGSGQgqgChhAEQhcABhCgTQg+gRgZgJQgvgQglgUQgyAYhgAZQiYAmilggQiXgeiShVQg/glgwgzQgsgvglg/QgPgZgIgQQg3h8gNiEQgOh8A0h3QAbhAATgaQgigtgZhAQgRgsgUhLQgQg8AGhKQAGhDAYhXQAbhgAchAQAkhSAtg1QAtg0A9grQApgeBNguQBBglBKgMQBOgMBFATQB/AkBlBaIAOAOIANAOIA9AIQAxAIAoAUQAlATAjAfQgTgbgBgwQgBgoALgvQAQhEAQglQAag7AtgpQBthkCJg1QB/gxCbgBQCYgBCGA4QBJAfA3A3QA3A2AbBFQAdBLAMA8QANBFgIBBIgFAkQgCAVABAPQAHgSAMguQALgpAJgXQA1h7B1hXQBthPCOgSQB0gPCLAnIBxAfQA/AVAuAiQBjBKAoB8QAOAqgCBDQgBBEAIAbQAaBPAFAYQAPBFgLA1QgOBDgXAxQgaA4gsAqIgNANQA5AuAaAsQAhA3APAvQARA3gEA7QgDAwgbA4QggBCgEARQgGAcgKBOQgMBKgdAsQgcAqgvA0QhCBHgNAQQhmB8hvAqQhQAdg9AJQhNALhCgSQhAgTg1goQglgag2g4QgFgGgHgKIgLgRQgHgIgKgTQgJgTgHgJIgGANQgwBuhhBYQgxAshEAXQhGAXhNgDQhlgEhDgRQgSAJgmAMQg7AXhFADIgYABQgnAAg/gFg");
	this.shape_11.setTransform(-5.4038,13.2741);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(51,255,255,0.498)").s().p("AjGSIQgqgDhgAFQhcABhCgTQg9gSgZgIQgvgQgkgUQg3AahaAYQiXAnikgfQiVgciThUQh2hEhMh/QgPgZgHgQQg4h5gPiFQgPh9Ayh3QAZg+AUgdQgjgtgZhAQgSgtgUhKQgdhvAwiwQAahfAbhAQAjhSAtg1QAsg0A8gsQAqgfBMgtQBAgmBKgMQBNgNBFASQB+AgBoBZQAGAFAIAJIANANIA9AHQBcANBHA9QgSgcgBgwQAAgoAMgvQAQhDARgmQAag7AtgpQBthkCIg0QB/gxCbAAQCXgBCGA5QBIAfA3A2QA3A3AbBEQAeBKAMA8QAOBGgHBAIgFAkQgCAVABAPQAHgRAMgvQAKgpAKgXQA2h8B0hWQBrhPCPgTQB0gQCLAmIBxAgQA/AVAvAiQBiBIArB9QAPAqAABDQAABFAIAbQAYBRAFAYQAOBFgKA1QgOBDgXAxQgbA4grAqIgNANQAcAYASARQAWAXAPAaQAiA4AOAvQASA3gDA7QgDAxgaA5QgfBFgEAQQgGAcgKBOQgOBKgdAsQgcArgvAzIhQBYQhoB6huAoQhQAdg9AIQhNALhBgTQhAgSg2goQgkgag3g4IgMgQIgMgQQgGgJgKgTQgKgTgHgJIgGANQgvBthkBYQgxAshFAXQhFAXhMgDQhngDhAgRQgSAJgnAMQg6AYhFAEIgfABQgmAAg5gEg");
	this.shape_12.setTransform(-5.2145,12.6632);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(51,255,255,0.498)").s().p("AjGSJQgqgChhAEQhaABhCgTQg9gRgYgJQgvgQgkgTQgzAZhdAaQiWAoiigeQiUgaiThSQh2hEhNh9IgXgpQg5h3gQiGQgQh9Avh3QAahBASgbQgigtgahAQgSgtgVhKQgdhwAuiuQAZheAbhAQAjhRAsg1QAsg1A7gsQArghBKgsQA/gmBKgNQBMgOBFARQB9AdBrBXIAcAbQAlACAXAEQBcALBJA7QgRgdAAgwQAAgoAMgwQARhDASgmQAag6AugqQBthkCHgzQB+gvCcAAQCVAACGA5QBHAeA3A3QA2A2AdBEQAeBJAMA8QAPBFgHBBIgEAkQgCAVABAPQAHgSAMguQALgpAJgXQA2h8B0hVQBshQCNgUQB1gQCKAlIByAfQA/AVAvAiQBjBIAsB8QAPAqACBEQABBGAIAbQAXBPAGAbQANBFgLA1QgNBDgYAyQgaA4gsAqIgNANQA5AvAbAsQAiA3APAwQASA3gCA8QgCAwgZA6QgfBIgEAPQgGAdgLBOQgOBKgdAtQgdAqgvA0IhRBXQhoB4hwAnQhPAcg9AIQhNAKhBgTQg/gSg3gnQgkgbg3g3QgGgGgHgKIgLgRQgHgJgKgTQgLgTgHgJIgGANQgwBthkBYQgyAshEAWQhEAXhNgCQhlgDhBgQQgSAJgnAMQg6AYhFAEIgmABQgkAAgzgDg");
	this.shape_13.setTransform(-5.0411,12.0313);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(51,255,255,0.498)").s().p("AjGSLQgqgChgAEQhaABhCgTQg8gSgYgIQgugQgjgTQgyAZhdAaQiUAoijgbQiUgZiRhRQh4hChNh7QgOgXgKgSQg5h1gSiHQgRh+Ath3QAahBARgcQgjgtgag/QgTgugUhJQgfhwAuitQAYhcAbhBQAhhQAsg1QArg1A7gtQArgiBJgsQA/gmBJgOQBLgOBFAOQB+AcBsBUIAcAaIA9AEQBeALBJA4QgQgeAAgwQABgpANgvQARhDASgmQAbg6AugqQBshiCIg0QB/gvCZABQCWABCEA4QBHAfA3A2QA2A2AdBDQAeBKANA7QAPBFgGBBIgEAkQgCAUACAPQAFgPANgwQALgpAKgXQA2h8BzhWQBshQCNgUQB1gRCKAlIByAfQBAAVAvAiQBkBHAtB8QAQArACBDQADBJAHAZQAXBLAGAgQANBFgLA2QgOBDgXAyQgbA4grArIgNANQA3AtAdAuQAiA3APAwQASA4gBA7QgBAxgYA7QgeBKgEAPQgGAdgMBPQgPBKgdAsQgdAsgwAyQg2A4gbAfQhpB2hxAnQhOAbg9AHQhNAJhBgTQg/gSg3gnQgmgbg2g3QgFgFgHgLIgMgQQgHgJgLgTQgKgTgHgJIgGANQgyBuhkBWQgzAshEAWQhEAXhMgCQhmgDg/gQQgSAKgmAMQg6AYhFAGQgVABgcAAQghAAgsgCg");
	this.shape_14.setTransform(-4.8755,11.4306);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(51,255,255,0.498)").s().p("AnqR8Qg5gQgbgJQgtgQgkgTQgzAahaAaQiTAqiigaQiTgXiRhQQh4hChOh5QgOgVgKgTQg7h2gTiFQgSh/Ash3QAWg/AUgfQgkgtgag/QgUgvgUhJQgfhwAsirQAwjBBOhgQAqg1A6gtQAsgjBHgrQA/gnBIgPQBKgQBFAOQB/AZBsBSIAdAZIA9AEQBeAIBMA3QgQggACgwQABgpANgvQAShCATgnQAbg6AugpQBrhiCJgzQB8gvCbABQCUABCFA5QBGAgA3A1QA2A2AdBDQAfBIANA8QAPBFgFBAIgDAkQgCAVABAPQAGgQANgvQALgpAKgXQA2h8BzhWQBrhQCNgVQB3gSCIAkQBeAYAVAHQA/AVAwAiQBjBHAwB7QAQArAEBDQAEBLAHAZQAWBKAGAiQANBGgMA2QgOBDgXAxQgbA5grArQgJAIgEAFQA5AvAcAtQAiA3AQAwQASA4gBA7QAAAxgXA8QgeBOgDANQgHAegMBPQgPBJgeAtQgeAsgvAyQg3A4gcAfQhpB0hxAmQhOAag+AHQhMAIhBgTQg/gSg3gnQgngbg2g2QgFgFgHgLIgMgQQgIgJgKgTQgLgUgHgIIgGANQgzBuhlBVQgzArhDAXQhFAWhLgBQhigChDgQQgSAJgmANQg6AYhEAGQgvAEhPgDQgqgChgAEIgFAAQhWAAg/gTg");
	this.shape_15.setTransform(-4.7029,10.7996);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,255,255,0.498)").s().p("AxLSIQiSgWiQhOQh6hBhOh3IgZgoQg8hzgUiHQgTiBAph1QAXhAASgfQgkgugag+QgVgwgUhIQgghwAriqQAvi+BNhiQAqg1A5guQArgjBHgsQA/gmBHgQQBKgQBEAMQB/AWBuBQIAdAYIA9ADQBfAGBNA1QgOggACgxQABgpAOgvQAShBAUgpQAcg5AugpQBthjCGgxQB+gvCZACQCUACCDA6QBGAfA2A1QA2A1AdBDQAgBHANA8QAQBFgEBAIgDAlQgCAUACAPIASg/QALgoAKgXQA3h9ByhVQBqhQCNgWQB2gTCKAjQBcAXAXAIQA/AVAwAiQBkBHAxB6QASAsAEBDQAFBMAHAZQAWBJAGAkQAMBFgMA3QgOBDgYAyQgbA5grArIgMANQA4AuAdAuQAiA3ARAxQASA4AAA7QAAAygWA8QgdBSgDALQgHAfgNBPQgQBJgeAtQgeAsgwAyQg3A4gcAeQhpBzhzAlQhOAZg9AGQhMAIhAgTQhAgTg3gmQgngcg2g1IgNgQIgMgQQgHgJgLgTQgLgTgHgJIgGANQg0BthmBVQgzArhEAWQhDAXhLgBQhjgChBgPQgSAJgmANQg6AZhEAHQgwAEhOgDQgrgBhfAEQhYAAhBgTQg3gQgcgKQgtgQgjgTQgzAbhZAbQhcAahkAAQg4AAg7gIg");
	this.shape_16.setTransform(-4.5372,10.2942);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(51,255,255,0.498)").s().p("AxESMQiPgUiShNQh6hBhQh1QgPgXgKgRQg9hxgViIQgUiBAnh1QAUg9AUgjQglgugbg9QgVgygUhHQgghwApipQAsi6BNhkQApg2A5guQAsgkBFgrQA+gnBHgQQBJgSBFALQB9ATBxBOIAeAYIA9ABQBeAFBQAyQgag+AfhsQAThBAUgoQAdg6AugpQBrhhCHgyQB/guCXACQCSADCEA6QBGAgA2A1QA1A0AeBCQAgBHAOA8QAQBEgEBBIgCAkQgCAVACAPIASg/QALgoALgYQA2h8ByhWQBshRCLgWQB2gTCKAiQBWAVAdAKQA/AVAwAiQBkBFA0B7QASAsAGBEQAGBNAHAZQAVBKAGAkQALBFgMA3QgdCJhPBRIgMANQA4AuAdAvQAjA2ARAyQATA3AAA8QABAygUA9IggBfQgHAfgOBQQgRBIgeAtQgfAtgvAyIhUBWQhsBxhyAjQhNAZg9AGQhMAHhAgTQhAgTg3gmQgogcg2g0IgNgQIgMgRQgIgJgLgSQgLgUgHgIIgGANQg1BthnBUQgzAqhDAXQhEAWhKgBQhggBhEgPQgRAJgmAOQg5AZhEAHQgwAGhPgDQgqgBhfADQhXAAhCgTQg0gPgegKQgsgQgjgTQg1AdhWAaQhfAchnAAQg0AAg2gHg");
	this.shape_17.setTransform(-4.3539,9.8409);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(51,255,255,0.498)").s().p("Aw+SPQiPgSiRhLQh7hBhQhzQgQgWgJgRQg/hxgXiHQgViBAmh2QAUg/ATgiQglgtgcg+QgWgygUhHQgghxAninQAri4BMhkQApg2A3gvQAugmBDgqQA9gnBGgRQBJgSBEAJQB+ARByBLIAeAYQApgBAVABQBfADBRAwQgNghADgxQADgqAOgvQAThBAWgpQAdg6AugpQBshgCGgxQCBguCUADQCUADCBA7QBFAfA2A1QA1A0AeBCQAgBGAPA8QARBEgDBBIgCAkQgBAVABAOIASg/QAMgnAKgYQA2h7ByhWQBqhRCMgYQB2gUCKAhQBUAUAgALQBAAVAwAiQBlBGA0B6QATAsAHBEQAIBQAGAXQAUBJAGAmQALBFgMA3QgOBDgYAzQgbA5grAsIgMANQA5AwAdAuQAiA2ASAyQATA4ABA8QABAzgTA9IgfBhIgWBvQgRBIgfAtQgeAtgwAyIhVBWQhsBuhzAjQhNAYg9AFQhLAHhBgTQg/gSg3gmQgqgcg1g1IgNgPIgNgRQgHgJgLgSIgTgcIgGAMQg3BuhnBTQgzAqhDAWQhEAXhKgBQhigBhBgOQgRAJgmAOQg5AZhEAIQgxAGhNgCQgrgBheADQhXAAhBgTQg1gPgcgKQgsgQgjgTQg1AehUAZQhiAfhpAAQgwAAgzgHg");
	this.shape_18.setTransform(-4.1862,9.3891);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(51,255,255,0.498)").s().p("Aw4STQiNgQiShLQh7g/hRhyQgUgcgGgLQhAhwgYiHQgWiAAkh3QATg/ATgjQgmgugcg9QgXgzgThGQghhwAlinQApi0BMhnQAog2A3gvQAtgmBCgrQA+gnBFgRQBIgTBEAIQB+AOBzBJIAfAWIA9gBQBhABBSAvQgXhDAhhqQAUhBAWgpQAeg5AugpQBthhCEgwQB9gtCYADQCSAECBA7QBEAgA2A0QA1A0AfBBQAgBGAQA8QARBEgDBAIgCAkQAAAVABAPIATg/QALgnAKgYQA3h8BxhWQBqhRCLgYQB5gVCIAhQBRATAjAMQA/AVAxAhQBmBHA1B4QAUAtAIBDQAKBUAGAVQATBIAGAoQAKBFgMA4QgOBDgYAzQgbA5grAsQgJAIgEAGQA4AuAfAvQAjA2ARAzQAUA4ACA8QACAzgSA/IgfBiIgXBvQgRBIgfAuQggAugvAxIhWBVQhsBth0AiQiiAxh0giQg/gSg3gmQgqgdg1gzIgOgQIgNgRQgHgJgLgSIgTgcIgHANQg3BshoBUQg0AphCAWQhEAXhJAAQheAAhEgPQgSAJglAPQg5AZhEAJQgzAHhLgCQgrAAheACQhWgBhBgSQgzgPgdgKQgsgQgigTQg1AehTAaQhkAghtAAQgtAAgugFg");
	this.shape_19.setTransform(-3.9876,8.9351);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(51,255,255,0.498)").s().p("AwySWQiNgPiQhIQh9g/hRhvQgSgZgIgOQhChwgYiGQgYiBAih3QARg8AUgnQhEhSgqiRQghhyAkilQAnizBLhmQAog2A2gvQAtgnBBgrQA9gnBFgTQBHgTBEAGQB9ALB2BHIAfAWIA+gDQBgAABVAsQgWhCAihrQAVhBAWgqQAfg5AugpQBshgCFgvQB+guCVAFQCSAECBA8QBEAgA1AzQA1A0AfBBQBECOgEB3IgBAkQgBAVACAPIASg/QALgnALgZQA3h7BwhWQBqhRCLgZQB2gWCLAgQBQASAlANQA/AVAxAhQBmBGA3B5QAUAsAJBEQAMBXAFATQATBIAGApQAJBGgMA3QgOBDgYAzQgbA6grAsIgMAOQA4AvAfAvQAjA2ASAzQAUA4ACA9QADAzgSA/IgdBkIgYBxQgSBHgfAuQggAvgwAwIhXBVQhsBrh1AiQiiAuhzgiQg/gSg3gmQgrgcg1g0IgOgPIgNgRQgHgJgMgSIgTgcIgHAMQg3BthpBTQg1AphCAWQhDAWhKABQhfAAhCgPIg2AYQg6AahDAKQgzAHhMgBQgqgBheADQhVgBhBgTQhngdg1geQg3AghQAZQhmAihvAAQgqAAgrgFg");
	this.shape_20.setTransform(-3.8293,8.4897);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(51,255,255,0.498)").s().p("AwrSaQiNgOiQhHQh9g+hShuQgQgVgKgRQhDhtgaiHQgZiCAgh3QARg/ATglQhFhSgqiRQgihzAiijQAmixBKhmQAng3A2gvQAtgoBAgrQA9gnBEgTQBGgVBEAFQB+AJB2BEIAgAWQAlgEAZAAQBhgCBWAqQgKgkAFgxQAEgrAQgvQAVhAAXgqQAfg5AugpQBshgCFgvQB/gtCUAFQCPAFCCA9QBDAfA1A0QA1A0AfBAQBFCLgCB5IgBAkQgBAVABAPIATg/QALgnALgYQA3h8BwhWQBrhSCJgZQB2gWCLAeQBOASAnANQBAAVAxAiQBmBGA5B3QAVAtAKBEQAOBcAEAPQATBGAFAsQAJBFgMA4QgdCKhPBTIgMAOQA3AwAgAvQAjA2ATA0QAUA4ADA9QADA0gQA/QgJAjgUBDIgZBxQgTBHgfAuQggAvgwAxQgNAOhLBGQhtBph1AhQigAth0gjQg/gSg4glQgrgeg1gyIgOgQIgNgQQgJgKgLgSIgTgcIgHANQg6BuhpBRQg0AohCAWQhDAXhJAAQhcABhEgOIgbAMIgcAMQg5AahDAKQg0AIhLgBQgrAAhdADQhUgBhBgTQhlgdg2geQgzAehSAcQhpAjhzAAQglAAgmgDg");
	this.shape_21.setTransform(-3.6457,8.0283);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(51,255,255,0.498)").s().p("AwmSdQiLgMiPhFQh+g9hThtQgSgXgJgPQhDhrgciIQgaiDAeh2QAQg9ATgnQhFhTgsiQQgihzAhiiQAjitBKhpQAng4A0gvQAugpA/gqQA8goBDgUQBGgVBEAEQB8AGB5BBIAhAVIA+gFQBhgEBYApQgShHAjhpQAWhAAYgrQAgg4AugpQBthgCDguQCAgtCSAGQCRAFB/A9QBDAgA1A0QA0AzAgA/QBECJAAB6IAAAkQgBAWABAOIATg/QAMgnAKgYQA4h8BvhVQBqhTCJgZQB3gXCLAeQBMAQApAOQA/AVAyAiQBnBGA6B3QAWAtALBDQARBjADAJQASBHAFAtQAJBFgNA5QgeCKhOBTIgMAOQA4AwAgAwQBHBsAHBzQAEA1gQA/IgcBoIgZByQgUBHggAuQggAvgwAxQgRARhIBDQhtBmh3AhQhLAUg+ADQhKAEhAgTQg/gTg4gkQgtgeg0gyIgOgPIgNgRQgIgJgMgSIgTgcIgHAMQg7BthqBRQg0AphCAWQhDAWhJABQheABhBgOIgaANIgcAMQg5AahDALQg0AIhLABIiIACQhTgChBgSQhlgeg0gdQg4AhhNAaQhrAlh2AAQghAAgjgDg");
	this.shape_22.setTransform(-3.4369,7.5879);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(51,255,255,0.498)").s().p("AwfShQiLgLiPhEQh+g8hUhrQgRgWgKgPQhFhtgdiFQgbiDAdh3QAPg/ASgmQhHhUgriPQgjhzAgihQAhirBJhqQAng3AzgwQAugqA+gqQA8goBCgUQBFgVBEACQB+ADB5A/IAhAUIA+gGQBigGBaAnQgRhJAkhpQAWg/AZgsQAhg4AugpQBsheCDgvQCAgsCSAGQCPAGB/A+QBDAgA0AzQA0AzAhA/QBFCHABB7IAAAkIABAkQAHgVAMgqQALgmALgZQA4h7BuhWQBrhSCIgbQB4gYCKAdQBLAQArAPQA/AVAyAhQBnBGA8B3QAXAtAMBDIAUBtQASBGAFAvQAIBGgMA4QgeCKhPBVIgMAOQA3AvAhAxQAkA2ATA0QAVA5AFA9QAEA1gPBAQgIAkgTBFIgaBzQgVBGggAvQghAwgvAwQgaAZhAA7QhuBkh3AgQhLATg/ADQhJADhAgTQg/gTg4gkQgtgeg0gxIgOgQIgOgQQgIgKgMgSIgUgcIgHANQg7BthrBQQg1AohCAWQhCAWhJACQhZABhGgOIg1AaQg5AbhDALQg2AJhJAAIiIADQhSgChAgTQgxgOgdgLQgpgPghgSQg0AfhPAdQhuAnh6AAQgdAAgegCg");
	this.shape_23.setTransform(-3.2528,7.1492);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(51,255,255,0.498)").s().p("AwZSkQiJgJiPhDQh/g7hUhpQgQgTgMgSQhHhsgdiFQgdiCAbh4QAQhCARgkQhJhVgriOQgkhzAeigQAfinBJhsQBFhnB/hWQA7goBCgVQBEgWBEABQB+ABB6A8IAhATQAmgFAZgCQBjgIBbAlQgPhLAlhoQAWg/AagsQAhg4AvgpQBrheCDguQB/gsCTAHQCOAHB+A+QBCAgA0AzQA1AyAgA/QBGCIACB5IAAAkQAAAVACAOIASg+QAMgmALgZQA4h8BuhVQBphSCJgcQB4gZCKAdQBKAPAtAPQA/AWAyAhQBpBGA8B2QAXAuAOBDQAMBKAJAkQARBEAFAxQAIBGgNA5QgeCIhOBXIgMAOQA3AwAiAxQBIBrAJB2QAFA1gNBBQgIAlgTBGQgWBggFATQgVBGggAvQgiAwgvAwQgdAdg+A3QhuBih4AfQhLATg+ACQhJADhAgTQg/gTg4gkQgvgeg0gxQgGgGgIgKIgOgQQgIgJgMgTIgUgcIgHANQg9BuhrBPQhuBRiTADQhZADhFgOIg2AaQg5AbhCAMQg3AJhIABIiIADQhRgChAgTQhfgbg4gfQg1AhhNAcQhwAqh9AAQgZAAgagCg");
	this.shape_24.setTransform(-3.0695,6.7103);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(51,255,255,0.498)").s().p("AwSSnQiKgHiNhBQiAg6hVhoQgPgSgNgTQhIhrgfiFQgfiCAbh4QANg+ASgpQhJhWgsiNQglhzAdieQAdimBJhtQBEhnB+hWQA6goBBgWQBEgXBDgBQB+gBB8A6IAiASQAmgGAYgCQBlgKBcAjQgNhMAlhoQAXg/AbgtQAhg3AvgpQBthfCBgsQCAgsCRAIQCNAHB+A+QBBAhA0AyQA0AyAhA/QBHCGADB5QAAAxACAXIATg/QALglAMgZQA3h7BuhWQBrhUCHgbQB6gaCIAcQBJAPAvAQQA/AVAyAhQBpBGA+B2QAYAuAOBDQAOBLAJAkQARBEAEAyQAHBGgMA5QgeCIhOBZIgNAOQA4AwAiAxQBIBsALB2QAFA2gNBBQgHAlgSBIQgUBXgJAdQgVBFghAvQgiAxgvAvQgeAeg+A2QhvBgh5AeQibAmh1gjQg/gTg5gkQgvgeg0gxIgcggIgVgbIgUgcIgHANQg+BshsBPQhuBRiSAEQhYADhGgNQgRAJgkARQg5AbhCANQg3AKhIABQh4ADgQAAQhQgDhAgSQhegcg3geQg1AhhLAdQhzAriAAAIgrgBg");
	this.shape_25.setTransform(-2.9034,6.2742);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(51,255,255,0.498)").s().p("AwMSrQiIgGiPg/Qh/g6hWhmQgUgYgJgMQhKhrgfiEQggiDAZh4QANhAARgoQhLhWgsiNQglh0AbicQAbiiBIhvQBEhoB8hXQB7hVCFgDQCAgEB7A3IAjASIA/gKQBkgLBeAhQgMhOAnhoQAXg+AcguQAig3AvgpQBrhdCDgtQCAgrCQAIQCMAIB9A/QBBAgA0AyQA0AyAhA+QBHCEAFB7QABAwACAYIATg/QALglAMgZQA3h7BuhWQBphTCHgdQB7gaCIAbQBIAOAwAQQA/AVAzAiQBqBGA+B0QAaAvAPBDQAPBLAJAlQAQBEAFAzQAGBGgNA6QgdCHhPBaIgMAOQA3AvAjAzQBIBrAMB4QAGA2gMBBQgGAmgTBJQgSBSgLAiQgWBGghAvQgiAxgwAvQggAhg8AyQhwBfh5AdQibAlh1gkQg/gTg5gjQgwgfgzgwIgdggQgJgKgMgRIgVgdIgHANQg+BthtBOQhvBPiRAGQhWADhHgNIg1AaQg5AchCANQg3ALhIACQhtADgaAAQhQgDhAgTQhcgbg3geQg1AhhKAeQh1AtiGAAIggAAg");
	this.shape_26.setTransform(-2.6823,5.8371);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(51,255,255,0.498)").s().p("AwGSuQiHgEiOg+QiAg4hXhlQgPgRgOgTQhLhoghiGQghiDAYh4QALg9ASgsQhNhYgsiKQgmh2AaiZQAaihBGhuQBEhrB6hWQB5hVCGgGQB/gGB8A0IAkARQAugJARgCQBlgNBgAfQgKhRAnhmQAXg+AdguQAjg3AvgqQBrhcCCgsQCCgrCOAJQCLAIB9A/QBAAhA0AyQAzAxAiA+QBHCBAHB9IADBHIATg/QALgkAMgaQA5h7BthWQBphTCGgdQB7gcCIAbQBIAOAxAQQA/AWAzAhQBqBFBAB1QAaAwARBCIAZBxQAQBDAEA1QAGBGgNA6QgeCHhOBbIgNAPQA3AuAkA0QBIBsAOB4QAGA3gLBBQgCARgWBfQgSBSgMAkQgXBEghAwQgiAxgwAvQgjAjg7AwQhwBdh6AbQiZAkh2gkQg/gTg5gkQgxgegzgwIgPgPIgOgRQgJgKgMgRIgVgcIgIANQhABshtBOQhvBOiQAGQhTAEhJgNQgPAJgmASQg4AchCAOQg4AMhIACQhkAEgjgBQhOgDhAgTQhagag4gfQgzAhhKAeQh3AwiHAAIgcAAg");
	this.shape_27.setTransform(-2.507,5.398);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(51,255,255,0.498)").s().p("AwASxQiFgDiPg8QiBg4hXhjQgRgSgMgSQhMhogjiEQgiiBAWh7QAKg7ASgvQhOhXgtiKQgmh2AYiZQAZidBFhwQBDhrB5hXQB3hUCGgKQCAgIB9AxIAjAQQAugJASgDQBlgOBiAdQgJhTAohmQAziDBWhKQBrhcCBgrQB/grCQAKQCMAJB7A/QCCBDBGB+QBICAAJB9QABAwACAXIATg/QAMgkAMgaQA4h6BthWQBohTCHgfQB5gcCKAaQBGANAzARQA/AWA0AhQBqBFBBB1QAbAwASBBIAaBzQAjCSgXBmQgfCJhNBbIgNAPQA2AtAlA2QBJBqAPB6QAGA4gKBCQgDAZgUBYQgRBOgOAoQgXBFghAvQgjAygwAvQglAkg6AvQhyBah5AbQiYAhh3gkQg/gTg5gjQgxgfgzgvIgeggIgWgbIgUgcIgIAMQhBBthuBNQhvBNiQAHQhVAEhGgMQgLAGgqAVQhnA0iSAGQheAEgpgBQhOgDg/gTQhYgZg5ggQg0AjhIAdQh6AziNAAIgQAAg");
	this.shape_28.setTransform(-2.321,4.9712);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(51,255,255,0.498)").s().p("Av6S0QiGgCiNg6QiCg2hXhiQgXgbgHgJQhNhmgkiFQgjiDAUh5QAKg9ARguQhPhYgtiJQgnh3AWiWQAWiaBGhzQBChsB3hXQB2hUCFgMQB/gLB/AuIAkAQQAogJAYgEQBlgRBkAbQgGhUAohmQA0iCBXhLQBphbCDgrQB/gqCPAKQCLAKB6BAQCCBDBGB8QBJCBAJB7QACAwADAXIASg+QAMgkAMgaQA4h7BthWQBohTCGggQB8gcCIAZQBFAMA0ASQA/AWA0AhQBrBFBDB0QAcAwASBCIAbBzQAiCRgXBpQgdCHhPBeQgJAJgDAFQA2AvAlA1QBKBsAPB5QAIA5gJBCQgFAigSBRQgRBKgPAtQgXBDgiAxQgkAygwAuQgnAmg5AtQhwBYh8AaQiXAgh3gkQg/gTg5gjQgygfgzgvIgeggIgWgbIgVgcIgIANQhCBthvBMQhvBMiPAIQhXAEhEgMQgLAHgpAUQhnA1iSAIQhYAEgugCQhNgEhAgSQhWgZg5ggQg1AkhFAeQh9A1iQAAIgIAAg");
	this.shape_29.setTransform(-2.0911,4.5559);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(51,255,255,0.498)").s().p("A0FR+QiBg0hahhIgdgjQhPhmgmiEQgkiCATh7QAKg+AQguQhRhZgtiHQgoh5AViUQAViZBEhyQBDhvB0hVQB2hVCDgOQCAgOB/AsIAlAPQAogKAYgFQBngSBlAZQgFhXAphlQA1iBBYhLQBrhbCAgrQCBgpCNAKQCIAKB7BBQCABDBIB7QBJB9ALB+QADAwACAYQAZhWASgnQA5h6BrhWQBohTCGghQB8gdCIAYQBFANA1ASQA/AVA0AhQBtBGBDBzQAdAwATBBQAHAaAVBbQAhCTgXBoQgeCIhOBeIgNAPQA5AxAjAzQBJBrASB7QAHA6gIBCQgFAngRBOQgQBIgQAvQgYBDgjAxQgkAzgvAuQgoAmg5AsQhwBVh+AaQiWAeh3gkQg/gUg5giQgygfg0guIgeggQgKgLgMgQIgWgdIgIANQhDBthvBLQhxBMiNAIQhUAFhGgMQgRAKgjASQhoA2iRAJQhUAEgygCQhMgEhAgTQhVgZg4gfQgxAjhIAfQh/A4iTAAQiGAAiMg5g");
	this.shape_30.setTransform(-1.93,4.144);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(51,255,255,0.498)").s().p("Az+SEQiAgzhbhgIgfgjQhQhlgmiDQgmiCARh8QAJg/AQgtQhThbgsiGQgph5ATiSQAUiWBDh0QBChwBzhVQBzhVCEgRQCAgQCAApIAmAOQAggJAggGQBogUBmAXQgDhYAqhlQA1iBBZhMQBqhaCBgqQCCgqCLALQCJAMB6BBQB+BEBIB5QBKB8ANB+IAFBHQAXhRAUgrQA6h7BqhWQBphUCEggQB8geCIAXQBFAMA2ASQA/AWA1AhQBsBEBFB0QAeAyAUBAQALAjASBSQAgCSgXBrQgfCJhOBdIgMAPQA5AzAkAzQBKBrARB8QAJA6gHBCQgFAtgRBJQgQBIgRAwQgYBDgjAxQhBBch1BXQhxBUh+AZQiUAch5glQh2gkhohfIgfgfQgKgLgNgQIgVgdIgIANQhEBshwBLQhxBLiMAJQhQAGhKgMIgzAcQhpA4iQAJQhQAFg2gDQhLgEhAgTQhUgZg4gfQg1AmhCAeQiAA4iQACIgKAAQiBAAiGg2g");
	this.shape_31.setTransform(-1.7203,3.7049);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(51,255,255,0.498)").s().p("Az2SLQiBgyhchfQgRgSgOgRQhShlgniCQgniCAQh8QAHg7ARgyQhThZgviHQgph5ASiSQASiUBCh0QBBhxByhVQBwhVCFgUQCAgTCBAnIAmANQAhgKAfgHQBogWBpAWQgChaArhlQA1h/BchOQBqhaCAgpQCAgpCMALQCKAMB3BCQB9BDBJB5QBKB5APCAIAGBHQAXhSAUgqQA6h7BqhWQBohUCEghQB9gfCIAXQCMAXBjA+QBtBFBGByQAfAyAVBAQANAqARBNQAgCPgZBvQgeCHhOBgIgMAPQA4AxAlA1QBLBtASB7QAJA7gGBCQgFAxgQBHQgPBGgTAzQgYBCgkAxQhDBeh0BVQhzBTh9AXQiSAbh6glQh4glhoheIgegfQgIgIglgwIgIANQhGBthwBKQhxBKiMAKQhRAFhIgLQgUANgfAPQhrA5iOAKQhNAFg4gDQhKgEhAgTQhTgZg4gfQgyAlhDAgQh/A6iPADIgOAAQh/AAiCgyg");
	this.shape_32.setTransform(-1.5255,3.3071);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(51,255,255,0.498)").s().p("AzvSRQiBgyhdhdQgTgTgMgPQhThjgpiDQgpiBAQh+QAHg9APgwQhVhdguiDQgqh6AQiQQAQiQBCh2QBAhyBxhWQBwhVCDgWQCBgVCBAkIAmAMQAigLAfgHQBpgXBqATQAAhaArhmQA3h/BchOQBrhaCAgpQCBgoCKAMQCIANB4BBQB7BEBKB3QBLB6APB+IAHBIQAVhOAWguQA5h6BrhXQBphUCCgiQB/ggCGAWQCMAWBlBAQBvBGBGBxQAfAyAWBAQAPAuAQBJQAgCOgaBxQgdCGhPBiIgMAQQA5AxAlA1QBLBtATB8QAKA8gGBCQgEA0gQBGQghCTg/BZQhFBhh0BRQhxBRh/AXQiRAah7gmQh2gkhqheQgJgIgWgYQgKgKgkgtIgIANQhGBshxBKQhyBJiKAKQhPAGhKgLQgOAJglAUQhrA6iNALQhMAFg6gDQhJgEg/gTQhQgYg5ggQgxAkhEAhQh9A7iNAFIgYAAQh6AAh9gvg");
	this.shape_33.setTransform(-1.3199,2.885);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(51,255,255,0.498)").s().p("AznSXQiDgxhchcQgOgNgSgUQhVhjgqiCQgpiCANh9QAHg8APgzQhXhcguiDQgsh6AQiOQAOiQBBh2QA/hyBwhXQBxhWCAgXQCAgYCDAhIAnAMQAegLAjgIQBrgZBqARQABhdAthlQA2h9BfhQQBphZCAgpQCBgoCKANQCIAOB2BBQB8BGBJB0QBMB5ARB+IAHBIQAVhNAWgvQA6h6BqhXQBphUCCgiQB+giCHAWQCLAXBnA/QBuBEBIByQAgAzAWBAQASAxAPBHQAfCNgaBzQgdCFhPBkIgMAQQA3AwAnA3QBLBsAVB+QAKA8gFBDQgEA2gPBFQggCQhBBcQhGBjh1BQQhyBOiAAWQiQAYh6gmQh6glhnhcIggggQgQgQgegnIgIAMQhIBthyBJQhyBIiJALQhNAGhKgKQgUAMgfARQhsA8iMALQidAMhwgiQhOgXg6ggQgzAnhAAfQh6A8iOAHIgaAAQh5AAh6gsg");
	this.shape_34.setTransform(-1.1436,2.4696);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(51,255,255,0.498)").s().p("AzfSdQiBgvhghbIgggiQhXhjgqiAQgriAAMiAQAGg6APg1QhYhdgviCQgsh6ANiNQAOiOBAh3QA/h0BthWQBuhVCCgbQB/gaCEAfIAoALQAggMAhgIQBrgcBsAPQAEhfAthkQA4h8BfhRQBphZCAgoQCCgoCIAOQCHAOB2BDQB4BDBMB2QBLB1ATCAQAFAgADAoQAShFAag3QA6h6BphWQBnhUCEgkQB9giCIAVQCLAVBoBBQBwBFBIBxQAhAzAXA/QATAzAPBGQAeCNgaB1QgdCEhPBmIgMAPQA3AxAoA3QBLBuAWB+QATBwgfCMQggCOhDBfQhIBlh0BNQh0BNiAAUQiOAXh7gmQh6glhohcIggggQgNgNgigqIgIANQhHBrh0BJQhyBIiJAMQhOAGhJgKQgTANggARQhsA8iMANQiYANhzgkQhNgWg5ghQg2Aqg8AdQh5A9iMAJIgiABQh1AAh1gqg");
	this.shape_35.setTransform(-0.9505,2.0784);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(51,255,255,0.498)").s().p("AzYSjQiBguhhhaQgOgNgSgUQhZhjgsh/QgsiBALiAQAGg6AOg2QhaheguiAQgth8AMiKQALiLBAh4QA+h2BshVQBthWCBgdQB/gcCFAbIAoALQAfgNAigJQBsgdBuANQAFhgAthkQA5h9BhhRQBphYCAgoQCBgnCIAOQCHAPB1BDQB4BEBLB0QBMBzAUCBQAFAeAEAqQAShFAag3QA6h6BphWQBohVCCgjQB+gjCHAUQCIAUBsBCQBwBFBKBwQA+BeAeCPQAeCLgbB4QgeCFhOBmIgLAPQA1AvAqA6QBMBtAWB/QAVB0gfCKQgfCNhFBhQhKBnh0BLQhzBLiBAUQiNAVh8gnQh7glhohbIggggQgTgTgcgkIgJANQhKBthzBGQhzBHiHAMQhMAIhKgKQgcARgXANQhtA9iKAOQiVANh2gkQhIgWg9ghQgyApg9AfQh6A/iJAJQgWACgXAAQhuAAhwgng");
	this.shape_36.setTransform(-0.7273,1.6852);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(51,255,255,0.498)").s().p("AzRSpQiBgshhhaQgSgQgPgQQhahjgth+Qgth/AJiCQAFg7AOg2QhbhdgviBQguh7AKiKQAKiMA+h2QA/h3BqhVQBrhWCBgfQCCgfCDAZIAoAKQAhgOAhgJQBsgfBvALQAIhjAuhjQA5h8BihSQBohXCBgoQCCgnCGAPQCGAPB0BEQB4BFBLByQBMByAWCBQAGAdADArQAShDAbg5QA6h5BphXQBnhVCCgkQB/gkCHAUQCHATBtBDQBxBFBLBwQBCBjAeCKQAdCKgcB6QgeCGhOBmIgLAQQA0AuArA8QBMBrAYCCQAXB6gfCHQgdCIhJBmQhLBoh0BJQhzBJiDATQiLAUh9gnQh8gmhnhaQgPgNgSgTQgVgWgbghIgIAMQhLBth0BGQhzBGiHANQhNAIhIgKQgXAQgbAPQhuA/iKAOQiRAOh4glQhKgXg5ggQg0Aqg7AfQh4BAiIALQgZACgaAAQhsAAhrgkg");
	this.shape_37.setTransform(-0.5367,1.291);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(51,255,255,0.498)").s().p("AzJSvQiBgrhjhZQgPgNgSgTQhchhguh+QgviAAJiCQAEg9AOg0Qhdhggvh+Qgvh9AJiHQAIiJA9h3QA9h3BqhXQBqhVCAgiQCAgiCGAXIAoAIQAcgLAmgMQBtghBxAJQAJhlAvhjQA6h6BkhUQBphXB/gnQCDgmCFAPQCEAQB1BEQB1BGBNBwQBMBwAYCDQAGAgADAnQAShDAbg4QA7h7BohVQBnhWCBgkQCAglCGATQCIATBuBDQByBFBLBvQBGBnAdCIQAcCIgcB9QgdCEhOBpIgMAQQA2AwAqA6QBMBtAZCBQAYB8geCHQgeCJhKBmQhLBph1BJQh0BHiDARQiIATh/goQiAgnhlhYQgLgKgVgWQgWgVgbgiIgJANQhMBth0BFQhyBEiHAPQhHAIhOgJQgXAPgbAPQhvBBiIAOQiMAPh9gmQhHgWg6ghQgxApg8AhQh1BBiIANQgeACgeAAQhnAAhmghg");
	this.shape_38.setTransform(-0.314,0.8921);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(51,255,255,0.498)").s().p("AzCS1QiAgphlhZQgRgPgQgQQhdhhgwh9Qgvh+AHiFQADg4AOg6Qhehegwh/Qgwh9AHiGQAIiIA8h3QA8h4BohWQBohWCAgkQCBgkCGAUIApAHQAegNAkgLQBugjByAHQALhmAvhjQA7h7BmhUQBnhWCAgmQCAgnCHAQQCFARByBEQB1BFBNBwQBMBuAaCEQAHAlADAiQAQg/Adg8QA7h5BohXQBnhWCBglQCAglCGASQCFASBxBEQBzBFBNBvQBJBrAcCEQAcCHgdCAQgdCEhOBqIgMAQQA2AwArA7QBMBtAaCCQAaB/geCGQgdCFhMBqQhNBrh1BHQhzBFiFARQiHAQiAgnQh9gmhohZQgPgOgSgSQgbgbgWgcIgJAMQhOBuh0BEQhzBEiGAPQhJAIhLgJQgZARgZAOQhuBCiJAPQiJAQh+goQhFgVg7ghQgyArg5AgQh1BCiGAOQgiAEghAAQhjAAhigfg");
	this.shape_39.setTransform(-0.1095,0.4917);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.4,-124,366.8,259.9);


(lib.PuppetShape_14copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("ADZQoIhLgdQgmgPgcgRIgyARQg+ATgzAGQg7AGg/gKIiMgUQhVgQhAgcQhfgqg5gpQhGAZhOAJQiQAPiQgWQg9gJhKghQgpgShKglQhDgegjgVQg0gegmgnIgOgOIgNgOIhEhaQgkg4gMg9QgMg/ARhRQAJglAghlQAMgkAmhJQhChzgXiIQgNhIAKhGQALhMAjg/QA+huBihoQAmgoA2gaQArgWA9gPQArgKA8gKIBqgQQA7gKA6AGQBAAFA2AXIAjAQQAWgGAtADQB2AHA2BYQgPgaAIghQAEgQAVgyQARgnA3gKQAhgGAfAFQAEABAOgVIAggxQA0hNAygTQBKgcA0gOQBDgRA7gCQBAgCBBAQQA/APA1AdQBFAkAiASQA6AhAoAiQAwApAfA4QAeA2AIA6QACALgBAXIABAgQAHgRALgoQAMgkAOgTQAqg5AlgdQAzgoA4gDQBEgDAvgGQA4gHBCgQQBqgbCXBHQATAJBVAXQBDASArAgQBwBVAICCQACAsgYBAQgTAzAMARQAjAuAPAeQAdA8gJA2QgLA/gZAsQgaAvguAjIgNALQA0AvAYA2QAbA5AHA2QAIA7gPA8QgKAsgqA1QgmAwgCAWIgGBjQgJBHgdArQgdAsgmAvIhHBSQgiAngxAcQgpAWg7ASQgzAPg7gGQg0gGhBgYQiDgwhhhXIgfggQgPgQgcgpIgHANQgcA4gsA2QghApg9A9Qg4A5hKAYQgoANgmAAQgmAAgjgNg");
	this.shape.setTransform(-3.1769,11.7514);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("ADcQqIhMgcQgmgPgcgRIgzARQg9ATg0AGQg7AFg/gJIiMgUQhVgPhBgcQhhgrg4gnQhHAZhMAIQiRAQiSgXQg8gJhLghQgpgThLgmQhCgegjgWQg1gfglgnQgYgYgEgFIhChbQgkg4gMg9QgMg/AShRQAJgmAhhjQAMglAmhHQhBhxgYiJQgNhIAKhGQAKhMAkhAQBAhyBghmQAmgoA2gbQAsgVA9gQQAugMA7gJIBrgPQA8gJA6AHQBAAHA2AYIAjAQQAXgGAsAEQBzAIA1BWQgNgYAGgeQADgQAUgyQAQgnA1gNQAWgGArgBQAEAAAyhGQA1hLAygUQBKgcAzgNQBEgSA7gCQBAgCBBAQQBAAPA2AdQBGAkAhATQA6AhAoAkQAwAqAeA4QAeA3AHA6QABALAAAXIABAgQAGgRAMgoQALglAOgSQAqg5AlgeQAzgpA4gEQBGgEAtgGQA6gIBAgQQBqgaCXBGQATAJBVAXQBEASAqAgQBwBUAICEQADArgZBAQgTA0ANAQQAjAuAPAfQAdA8gKA1QgKBAgZAsQgZAvgvAkIgNAKQAzAvAZA2QA2B2gbBwQgLAsgpA1QgmAwgCAVIgHBjQgJBHgcArQgdAsgnAvIhGBSQgiAogxAcQgqAYg7ARQgzAQg7gGQg1gFhCgYQiBgvhhhXQgJgIgWgYQgPgQgcgqIgHAOQgcA3gsA2QghApg8A9Qg3A5hLAYQgpANgmAAQglAAgigNg");
	this.shape_1.setTransform(-3.3228,11.9699);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("ADeQtIhMgcQgngPgcgRIgyARQg+ATg1AGQg6AFg/gJIiMgUQhWgOhBgcQhkgsg2gmQhGAZhOAIQiPAQiUgXQg9gJhLgiQgqgThLgmQhBgfglgWQgzgggmgoIgOgPQgJgIgEgHQg6hPgIgMQgig5gMg+QgMg+AShQQAJgpAhhgQAOgoAkhDQhBhygYiHQgMhIAKhGQAKhMAkhBQBAh2BghlQAmgoA3gbQAsgWA9gQQAwgNA6gJIBugOQCAgQBtAyIAiARQAOgEATAAIAiADQBuAKAzBPQgJgUAFgZQACgQATgzQAOgmAzgRQARgFAygGQAGgBAzhGQA2hLAygTQBJgcA1gOQBDgSA8gCQBBgCBBAPQBAAPA2AeIBpA4QA5AhApAmQAvArAeA4QAdA4AGA6QABAKAAAYQgBAWABAKIASg6QALgkAOgTQApg5AlgeQAzgqA4gFQBJgGArgGQA7gIA/gQQBrgZCWBFQATAJBWAYQBDASAqAgQBwBUAICDQADArgYBAQgTA0ANARQAiAuAPAeQAdA8gJA2QgLBAgYAsQgaAwguAjIgNALQAzAuAZA2QAbA6AHA2QAIA6gPA8QgLAtgqAzQgmAwgCAVIgGBjQgJBHgcArQgdArgnAwIhGBTQg/BKh5AlQhiAeiFgvQiBgvhhhYIgeggQgOgPgdgqIgHANQgbA4gsA2QghAog8A+Qg3A4hKAYQgpANgnAAQglAAgigMg");
	this.shape_2.setTransform(-3.4584,12.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("ADgQvIhNgbQgmgQgdgQIgzARQg8ATg2AFQg6AFhAgKQgrgGhhgMQhWgOhBgcQhigqg5gnQhHAYhNAJQiRAQiUgXQg9gKhLgiQgrgThLgnQhBgeglgYQg0ghglgpIgOgPQgJgIgEgHQg5hPgIgOQgig5gLg9QgLg/AShPQAKgsAghcQANgnAlhEQhAhvgYiKQgNhGAKhHQALhMAjhBQBBh4BfhlQAngpA2gbQAtgXA+gRQAwgNA7gJQAhgFBOgIQCCgNBsAzIAiASQAVgFAuAFQBqALAzBLQgHgRADgWQACgPARg0QANgmAygTQAOgFA2gLQAHgCA1hHQA2hJAygUQBLgcA0gOQBEgRA8gCQBBgCBCAPQBAAPA3AdQBXAuASALQA6AiAoAnQAvAsAdA5QAcA4AGA7IAAAhQgBAWABALIASg6QALglANgTQApg5AmgfQAygqA4gGQBLgIApgGQA8gJA/gPQBqgZCXBFQARAIBYAYQBDATAqAgQBvBTAJCDQADAsgYBAQgTAzANARQAjAyAOAbQAdA9gJA1QgLBAgYAtQgaAvguAlIgNAKQA0AuAYA2QAbA6AHA1QAIA7gPA8QgLAsgpA0QgnAvgCAVIgGBjQgJBHgcArQgcArgoAwIhGBTQg+BLh6AnQhmAfiDgvQiAguhhhZIgeggQgNgNgdgsIgIANQgbA4grA2QghAqg8A7Qg3A4hJAYQgqAOgmAAQglAAgigMg");
	this.shape_3.setTransform(-3.5807,12.4075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("ADjQxQg6gTgTgHQgngPgdgQIgzARQg9ATg3AFQg5AEhAgJIiMgTQhYgNhAgcQhlgrg3gmQhEAZhQAJQiTARiTgZQg+gKhMgiQgqgThMgnQg/gegogaQgyghgmgqQgWgYgFgGQg4hSgHgMQgig6gKg9QgLg/AShPQAKgrAghcQAOgqAkhBQg+hqgaiOQgMhGAKhHQAKhMAjhBQBEh+BdhiQAngpA3gcQAsgWA/gSQAygOA7gJQAogFBIgGQA+gFA7AKQBAAKA1AbIAiASQAXgEAsAFQBmAMAzBHQgFgPACgSQACgQAQgzQAMgmAwgWQANgFA3gQQAJgCA2hHQA4hJAygTQBJgcA2gOQBDgRA9gCQBCgCBBAOQBBAPA4AdQBPApAbARQA6AjAoAoQAuAtAcA5QAcA5AFA7IgBAhQgBAWACALIASg6QALglANgTQAng5AmggQAygqA4gHQBRgKAkgGQA9gKA/gOQBqgYCWBEQASAIBXAYQBDASAqAgQBvBVAJCCQADArgYBBQgSAzAMARQAlAzAMAbQAdA8gJA2QgKA/gYAtQgaAwguAlIgNAKQAzAuAZA2QAaA6AIA1QAIA7gPA7QgLAtgqAzQgnAvgCAVIgGBiQgIBIgdArQgcArgoAwIhFBSQg/BOh6AnQhoAhiCgvQh+gthjhaIgPgQIgPgQQgLgNgegsIgHANQgbA4grA1QgiArg6A7Qg3A3hJAYQgqAOgnAAQgkAAgigMg");
	this.shape_4.setTransform(-3.727,12.5889);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("ADlQ0IhNgaQgogPgdgQIgzARQg9ATg3AEQg5AFhBgKQgrgGhhgLQhXgOhBgbQhlgqg3gmQhEAYhRAJQiRASiWgaQg/gLhMgiQgqgThNgoQg+gegpgbQgygigmgqIgagfQg2hQgJgPQggg6gLg+QgKg+AShPQAKgtAghZQAPgpAkhBQg/hrgZiMQgNhGALhHQAKhLAjhDQBGiEBbhfQAngpA3gcQAsgWBAgTQBVgZCMgJQA9gEA8AMQA/AMA2AbIAiATQAOgDATABIAiAEQBiANAyBEQgEgNACgPQABgQAPg0QALgmAvgYQAKgFA7gUQAJgEA4hHQA5hHAygUQBIgcA4gOQBDgRA9gCQCGgFB3A9QBMAnAgAUQA5AjAoApQAuAvAbA5QAcA6ADA6IAAAiQgBAWABALIASg6QALglANgTQAng6AmggQAygrA4gIIB1gSQBAgKA8gOQBrgXCVBDQARAIBYAYQBDATArAgQBuBUAJCCQADArgXBBQgTAzANARQAkA0ANAaQAcA9gIA1QgLBAgYAtQgZAxguAlIgNAJQA0AxAYAzQAaA6AIA1QAHA7gOA7QgLAtgrAyQgmAvgCAVIgGBiQgIBIgdArQgbAqgpAxIhFBTQhBBQh4AnQhqAhiCgtQh9gthjhbIgeggQgMgOgdgrIgHANQgbA4gqA2QgiAqg6A7Qg3A4hJAXQgqAOgoAAQgkAAghgLg");
	this.shape_5.setTransform(-3.8559,12.7923);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("ADnQ2IhNgaQgogOgegQIgzARQg8ATg4AEQg5AEhBgKQgrgGhhgLQhYgMhAgbQhngrg3gmQhFAZhQAJQiSASiXgbQg/gLhMgiQgrgThNgoQg+gfgpgcQgygiglgsIgagfQgzhMgLgUQggg7gKg9QgKg+AShPQAKgsAghZQASgvAhg6Qg9hpgaiOQgNhGAKhHQALhLAjhDQBFiHBbheQAogqA3gcQAsgXBBgTQBYgbCLgHQCDgFBsA5IAhATQAVgEAuAHQBhAOAxBCQgDgMABgOQABgQAOg0QAKglAugaQAKgGA7gYQALgEA5hHQA5hHAygTQBKgcA3gOQBDgRA9gCQCIgGB3A9QBHAkAmAYQA4AjApArQAtAwAaA5QAbA7ADA6QABAJgCAZQgBAWACALIARg6QALgmANgTQAmg5AngiQAxgrA4gJIB2gTQBCgLA6gNQBqgXCXBDQARAIBYAYQBDATAqAgQBuBUAJCCQADArgXBAQgSA0AMARQAkA0ANAaQAdA9gJA1QgKBBgYAtQgZAwguAmIgOAJQA0AvAYA1QAbA6AHA1QAIA7gPA7QgLAsgqAzQgnAugCAVIgGBiQgIBIgcArQgbApgpAyIhFBTQhBBRh5AoQhrAjiDgtQh8gshjhcIgPgPIgOgRQgKgLgMgRIgTgdIgHANQgbA4gqA2QghAqg6A7Qg2A3hKAYQgqAOgoAAQgkAAghgLg");
	this.shape_6.setTransform(-4.0059,13.0171);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("ADpQ4IhOgZQgogOgegQIgzARQg8ATg5AEQg4AEhCgKQgrgHhhgKQhYgMhBgbQhmgpg4gmQhGAYhQAKQhMAJhKgDQhHgChNgOQg/gLhMgiQgrgUhOgpQg+gegpgdQgygjglgsIgOgQQgIgKgEgGQgxhMgMgWQgfg6gKg+QgJg+AShOQAKguAghXQAQgsAjg8Qg+hqgZiNQgMhFAKhIQAKhLAjhDQBHiLBZhdQApgpA4gdQArgXBCgUQBcgcCKgFQCEgDBqA7IAiAUQAYgEAqAHQBfAPAwBAQgCgKAAgMQABgRANgzQAKgmAsgcQAPgKA3gXQALgFA6hHQA6hGAzgUQBHgcA6gOQBDgRA+gCQCHgFB5A8QBIAkAmAYQA5AlAoAsQAtAxAZA5QAaA7ADA7IgBAiQgCAVACALIARg6QALglAMgTQAmg6AngiQAxgsA5gKIB1gVQBGgMA3gMQBtgXCTBDQAQAHBaAZQBCATArAgQBtBUAKCCQADArgXBBQgSAzAMASQAkAzANAbQAcA9gIA1QgLBBgXAtQgZAwguAmIgOAKQA0AuAYA1QAbA7AHA0QAIA6gPA8QgLAsgqAyQgnAvgCAUIgGBiQgIBIgcArQgbApgpAyIhFBTQhDBUh3AoQhuAkiBgtQh6gqhlhdIgdghQgKgLgLgQIgUgeIgHAOQgaA4gqA1QghArg6A6Qg2A3hJAYQgqAOgpAAQgiAAgigLg");
	this.shape_7.setTransform(-4.1415,13.2277);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,255,255,0.498)").s().p("ADrQ6IhOgYQgogOgegQIg0ARQg8ATg5ADQg4AEhCgKQgrgGhhgKQhZgLhAgbQg1gVgdgOQgsgVgigXQhFAYhQAKQhNAJhLgCQhGgDhOgOQhAgLhMgjQgrgUhPgpQg9gfgqgeQgygkglgtQgUgXgFgIQgvhKgOgZQgeg7gJg+QgKg+AThNQAKgvAghWQAQgqAjg9Qg8hogaiOQgNhFAKhIQALhLAihEQBJiQBYhaQApgqA4gdQArgXBCgVQA2gRA9gIQA0gGBCgBQCEgBBrA9IAhAUQAWgDAtAHQBcAQAvA9QgBgIAAgKQAAgRANg0QAJgmArgdQASgNA0gYQAMgGA8hHQA7hFAygUQBIgcA6gOQBDgRA/gCQCGgFB7A8QBGAiApAbQA5AlAnAtQAsAzAZA5QAaA7ACA7IgCAiQgBAWABALQAEgJAOgxQAKgmANgTQBRh/BkgVIB2gWQBLgOAygKQBsgXCVBCQAPAHBaAZQBCATArAhQBtBTAKCDQAEArgXBAQgSA0AMARQAjAyANAdQAdA8gJA2QgKBBgYAtQgZAxguAmIgNAJQA0AvAYA1QAbA6AHA0QAIA7gPA7QgLAsgqAyQgoAugCAUIgFBiQgIBIgcArQgbApgpAyIhFBTQhEBWh3AoQhxAniAgtQh5gqhlheIgdggQgJgLgLgRIgUgdIgHANQgaA4gpA1QgiArg5A6Qg2A3hJAXQgrAOgoAAQgjAAghgKg");
	this.shape_8.setTransform(-4.2885,13.4099);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,255,255,0.498)").s().p("ADuQ9IhOgYQgpgNgfgQIg0AQQg7ATg6ADQg4AEhCgKQgrgGhhgJQhZgLhBgbQhpgqg3glQhGAZhRAKQhNAJhKgCQhIgDhNgPQhBgMhNgiIh6g+Qg+gfgqggQgxgkglguIgNgQQgIgJgEgHQgthIgOgcQgeg8gJg9QgIg/AShMQALgwAghTQAQgsAjg7Qg8hmgaiQQgNhFAKhHQALhLAihFQBKiTBXhZQApgrA4gdQAsgXBDgWQBjggCIABQA/ABA9AQQA+AQA1AfIAhAVQAWgDAsAIQBaAPAvA8IgBgPQAAgSAMgzQAJgmApgfQATgPAzgaQAMgGA+hHQA7hFAzgUQBIgcA6gOQBDgQBAgDQCIgFB6A8QBFAhArAdQA5AlAnAvQAsAzAYA6QAZA8ABA7IgCAiQgBAVABAMIASg7QALgmAMgTQBQiABlgWQBSgTCigdQBsgWCUBCQANAGBcAaQBDATAqAgQBtBUAKCCQAEArgXBAQgSA0AMARQAlA4ALAXQAdA9gIA2QgLBAgXAuQgaAxgtAmIgNAKQAzAuAZA1QAaA7AIAzQAIA7gPA7QgMAsgqAyQgnAugCAUIgGBhQgIBIgcArQgaApgqAyIhFBUQhDBXh3ApQh0Aoh/gsQh4gqhmhfQgGgFgIgKIgOgRQgJgLgMgRIgTgdIgGANQgaA4gpA2QgiAsg4A4Qg2A3hJAYQgrANgpAAQgiAAghgJg");
	this.shape_9.setTransform(-4.415,13.6474);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,255,255,0.498)").s().p("ADwQ/IhPgYQgogNgfgQQgSAHgiAKQg8ATg7ADQg3ADhCgKQgrgGhhgJQhagKhBgaQg2gWgcgNQgtgVgigXQhFAZhSAJQhNAKhLgDQhIgChOgPQhBgMhMgjIh8g/Qg9gfgrghQgwglglguIgZghQguhKgNgbQgdg8gIg9QgJg/AShMQAMgwAghTQATgxAgg1Qg7hkgbiRQgNhEALhIQAKhLAjhGQBLiXBWhXQApgrA5geQArgWBEgXQBogjCGAEQA/ACA9ARQA9ASA2AfIAgAWQAWgDAtAJQBYAQAuA6IgBgMQAAgTALgzQAIgnAoggQAWgRAwgbQANgGA/hIQA8hEA0gUQBHgcA7gOQBDgRBAgCQCIgFB8A7QBFAhAsAeQA5AmAmAvQAsA1AXA6QAZA8AAA8IgCAiQgCAVACAMIARg7QALgmAMgTQBPiBBlgYQAxgMBGgNIB+gYQBrgWCVBBQAPAHBbAaQBCATArAgQBsBTALCDQADAqgWBBQgTAzANASQAkA3AMAYQAcA+gIA1QgKBBgXAtQgaAygtAmIgOAKQA1AvAXA0QAbA6AHA0QAJA6gPA7QgMAtgqAxQgoAtgCAUQgCAXgDBLQgIBIgcArQgaAogqAzIhFBUQhEBZh2ApQh3Aph+grQh2gohnhhIgOgPIgOgRQgKgLgLgRIgSgdIgHANQgaA4gpA1QghArg4A6Qg2A2hJAYQgrAOgpAAQgiAAghgJg");
	this.shape_10.setTransform(-4.5887,13.8547);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,255,255,0.498)").s().p("ADzRBIhPgXQgpgNgfgQQgSAIgjAJQg7ATg7ADQg3AChDgKQgrgGhhgIQhagKhCgaQg0gUgegOQgtgVgigXQhCAYhVALQiWATiZgeQhCgNhNgjQgVgKhng1Qg9gggrghQgxgmgkgvIgNgQQgIgKgEgHQgshJgOgdQgcg9gIg9QgJg/AThLQALgwAghSQATgwAhg2Qg6higbiTQgNhEAKhIQALhKAihGQBKiZBXhZQAqgqA5gfQArgXBEgXQBpgjCIAFQCCAGBsBCIAgAWQAXgCAsAJQBWARAuA5IgBgMQAAgTALgzQAIgnAnghQAXgUAvgbQAMgHBChIQA8hDAzgUQCQg4B3gFQCJgGB8A7QBFAhAtAfQA5AnAmAxQBaBxgBB3IgCAiQgCAVACAMQAEgLANgwQAKgmAMgUQBOh/BmgbQAzgNBEgOIB/gYQBtgVCTBBQANAFBdAbQBCATAqAhQBtBTAKCCQAEArgXBAQgSA0AMASQAkA0AMAbQAdA9gJA2QgKBBgXAtQgZAyguAmIgNAKQA1AwAXAzQAbA7AHAzQAJA6gPA7QgMAsgqAxQgoAugCATQgCAXgDBLQgIBJgcAqQgaAogqAzIhFBUQhFBch2ApQh4Aqh+grQh1gohnhgIgPgQIgNgRQgJgKgLgRIgTgdIgHANQgZA4goA1QgiAsg4A4Qg1A2hJAYQgrAPgqAAQgiAAgggKg");
	this.shape_11.setTransform(-4.7612,14.0583);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(51,255,255,0.498)").s().p("AD1REIhQgXQgpgNgfgPQgLAEgPAFIgbAHQg7ATg8ADQg2AChEgKQgrgGhhgHQhbgKhBgaQg0gUgfgOQgtgVgjgXQhDAZhUAKQhNAKhMgDQhJgDhOgPQhDgNhNgkQgYgLhlg0Qg8gggsgjQgwgmgkgwQgSgWgHgMQgqhHgPggQgbg9gIg9QgIg/AThLQAMgxAfhQQATgwAhg1Qg6higbiSQgNhEAKhIQALhKAihHQBLicBWhYQAqgrA6geQArgYBFgXQBsgmCIAIQCDAJBqBEIAgAWQAYgCAqAJQBVASAuA4IgBgKQgBgUAKgzQAIgnAmgjQAYgWAugbQAMgIBEhIQA9hCAzgVQCQg4B4gFQCKgFB9A6QBEAgAuAhQA5AoAmAxQBYB0gBB2IgDAjQgCAVACALQAEgLANgwQAKgmAMgTQBNiBBngcQA1gPBCgNIB/gZQBrgUCVBAQAMAFBdAbQBCATArAhQBsBTALCCQAEArgXBAQgSA0AMASQAlA3ALAZQAdA9gJA2QgKBAgXAuQgZAyguAnIgNAKQA1AuAXA0QAbA7AHAzQAJA6gPA7QgMAsgqAxQgoAtgCAUQgCAWgDBLQgIBJgcArQgZAogrAyQg3BCgNASQhGBeh2AqQh7Arh9gqQh1gohmhhIgPgQIgNgQQgJgLgLgRIgSgdIgHANQgZA4goA1QgiAsg3A4Qg0A2hJAYQgsAOgqAAQgiAAgggIg");
	this.shape_12.setTransform(-4.8855,14.2909);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(51,255,255,0.498)").s().p("AD4RGIhQgWQgqgNgfgPQgSAHgjAKQg7ASg9ADQg2AChEgKQgqgGhigHQhbgJhCgaIhTgiQgugVgigWQhCAYhWAKQhNALhMgEQhJgDhPgPQhEgOhNgjQgigQhcgxQg8gfgsgkQgvgnglgxIgYgiQgqhJgOgfQgbg9gHg+QgIg+AThLQAMgyAghPQATgyAhgyQg6hhgbiTQgNhDAKhIQALhKAihIQBMiiBVhUQArgrA5gfQArgXBGgZQBwgoCGALQCCAKBrBGIAgAXQAWgBAsAJQBTASAuA4IgBgJQgBgUAJgzQAIgoAkgkQAagZAsgbQANgHBFhKQA9hBA0gVQCPg3B6gGQCLgFB9A6QBFAfAvAiQA5AoAlAzQBXB2gDB2IgDAjQgCAVACAMQAFgMAMgwQALgmALgUQBMiABngfQA2gPBCgOIB/gYQBtgUCTA/QAKAEBgAcQBCAUArAhQBrBSALCDQAEAqgWBAQgSA0AMASQAlA5AKAYQAdA9gJA1QgKBBgXAuQgZAygtAnIgNAKQA1AwAXAyQAbA7AHAzQAIA6gPA6QgLAtgrAwQgoAugCATQgCAWgDBLQgHBJgcArQgZAngrAzQg2BAgPAVQhHBgh1ApQh8Ath9gqQg/gVg4gkQgxgggzgwIgOgQIgNgQQgJgLgLgRIgSgdIgHANQgZA4gnA1QgiAtg3A3Qg1A2hIAYQgsAOgrAAQghAAgfgIg");
	this.shape_13.setTransform(-5.0355,14.4737);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(51,255,255,0.498)").s().p("AD6RIIhQgWQgrgMgfgPQgSAHgjAJQg7ATg9ACQg1AChFgKQgrgGhigHQhbgIhCgaQg4gVgbgNQgugUgjgXQhAAXhYAMQhOALhMgEQhKgDhPgQQhDgOhOgkQgkgQhagxQg8gggtglQgugnglgyQgUgbgEgHQgohIgPghQgag+gIg+QgHg+AThKQAMgyAghOQAUgyAggyQg4hdgdiWQgNhDALhIQAKhKAihIQBOilBUhUQArgsA6gfQArgXBGgZQBvgpCKANQCCAMBqBIIAgAXQAWgBArAKQBTATAsA1IgBgHQgBgVAJgyQANhEBkhAQAMgIBHhJQA+hBA1gVQCOg4B7gFQCLgGB/A6QBEAgAwAiQA5AqAlAzQBWB5gEB1IgDAiQgDAVACAMQAFgMANgvQAKgmALgUQBKiBBpggQA2gRBCgOQAlgIBbgQQBrgUCUA/QAKAEBgAcQBCATArAhQBrBUALCBQAEArgWBAQgRA0ALASQAkA4AMAZQAcA9gIA2QgKBBgXAuQgZAyguAnIgNAKQA1AvAXAzQAbA7AHAyQAJA6gPA7QgMAtgqAwQgoAsgCATQgDAWgCBLQgIBJgbAsQgaAngrAzQg1BBgPAUQhHBhh1ArQiAAuh8gqQg+gUg4glQgxgfgzgxQgGgGgIgKIgNgRQgIgKgLgRIgSgdIgHANQgYA4goA1QghAtg3A3Qg0A2hJAXQgsAPgrAAQghAAgfgIg");
	this.shape_14.setTransform(-5.1922,14.7025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(51,255,255,0.498)").s().p("AD8RKIhRgVQgqgMgggPIgaAJIgbAHQg7ATg+ACQg0AChGgLQgqgGhigGQhcgIhCgZIhUghQgugVgjgWQhDAXhVAMQhOAKhNgDQhKgEhPgQQhEgOhOgkQgmgShZgwQg8gggtgnQgugnglgzIgXgjQgohHgOgjQgag+gHg+QgHg+AThKQANgzAfhMQAVgyAggxQgfg0gWhAQgSg2gOhIQgNhCALhJQAKhKAihJQBOinBThUQAsgsA6gfQAqgXBIgbQBzgrCIAQQCDAOBpBKQANAJASAPQAVgBAtAKQBQATAtA1IgBgGQgBgWAJgyQAMhHBjhBQAKgHBKhLQA/hAA1gVQCKg3CAgGQCLgGCAA6QCQBABDBiQBVB6gFB1IgEAiQgCAVABANQAGgOAMguQAKgnALgTQBKiBBpgjQA3gSBBgOQAogIBYgQQBugTCRA+QAKAFBgAcQBDATAqAhQBrBTALCCQAEAqgVBAQgSA0AMATQAkA4ALAZQAcA9gIA2QgKBBgXAuQgZAzguAmIgNAKQA2AwAWAyQAbA7AIAyQAJA6gPA6QgMAtgrAwQgoAtgCATQgCAWgDBLQgHBJgcArQgZAngrA0Qg0A+gQAWQhJBjh0ArQiAAwh9gpQg+gVg4gkQgwgggzgxQgGgFgIgLIgNgQQgIgKgLgSIgSgdIgHANQgYA4gnA1QghAtg3A3Qg0A2hJAXQgtAPgrAAQggAAgfgIg");
	this.shape_15.setTransform(-5.3322,14.9106);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,255,255,0.498)").s().p("AD/RNIhSgVQgqgMgggPQgSAIgkAJQg7ASg+ACQgzAChHgLQgqgGhigFQhdgIhBgZIhVghQgugVgjgWQhAAXhZAMQiYAVidgiQhFgOhOgkQgqgThWgwQg8ghgtgnQgugogkgzQgSgZgFgKQgmhGgPgmQgag+gGg+QgHg+AThKQANg0AghKQAUgxAggxQgfg0gVhAQgSg2gOhIQgNhCAKhJQALhKAihKQBOiqBThTQAsgsA6ggQArgXBIgbQB1gsCJARQCDASBoBKIAfAZQAXgBAqAKQBQATAsA1IgBgGQgCgWAJgyQANhKBhhCQAKgHBMhLQA/g/A1gVQCLg4CBgFQCMgGCAA6QCQA/BDBlQBUB8gHB1IgDAiQgDAVACAMQAFgNAMguQAKgnALgUQBIiBBrgkQA3gTBBgPQAwgLBQgNQBsgTCUA+QAJAEBhAcQBCAUAqAhQBqBSANCCQAEArgWBAQgRA0ALATQAkA4ALAZQAcA+gIA1QgKBBgXAuQgZAzgtAnIgNAKQA1AvAXAzQAbA7AHAyQAJA6gPA6QgLAtgrAvQgoAtgDASQgCAWgDBLQgGBKgcArQgZAmgrA0QgzA9gSAYQhJBlhzArQiEAxh7goQg/gUg4glQgvgfgzgyQgGgGgIgKIgMgQQgJgKgKgSIgSgdIgHANQgYA5gnA0QgiAug1A2QgzA1hJAXQgtAPgsAAQggAAgegHg");
	this.shape_16.setTransform(-5.4855,15.0984);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(51,255,255,0.498)").s().p("AEBRPQg6gOgXgGQgrgMghgPQgRAIglAJQg6ASg/ACQgzABhHgLQgrgGhigEQhdgIhBgYQg6gWgbgLQgugUgkgXQg/AXhaANQiXAUiggiQhFgPhOgkQgtgVhUgvQh0hAhHhmIgXgjQglhHgPgmQgYg+gHg+QgGg/AThJQANg0AghJQAWgzAfgvQgfg0gWg/QgRg1gOhJQgbiHBFiYQBPivBShRQAsgsA7ggQAqgXBJgcQB2guCKAUQCCATBpBNQAHAFAXAUQAWAAAsAKQBOAUArAzIAAgFQgCgWAIgyQANhNBfhDQAKgGBOhNQBAg/A1gVQCKg3CDgFQCNgGCBA5QCQA/BDBnQBSCAgHBzIgEAjQgDAVACAMQAFgNAMgvQAKgnAMgUQBHiBBqgmQA4gUBBgPQAygLBPgNQBtgTCSA+IBqAgQBCATArAiQBpBSANCCQAEArgWA/QgRA1AMATQAlA8AJAVQAcA/gIA1QgKBBgXAuQgZAzgtAnIgNAKQA1AvAXAyQAbA8AIAxQAJA6gPA6QgMAtgrAvQgoAtgCASQgDAWgCBLQgHBJgbArQgZAngsA0QgzA+gRAXQhKBnhzAsQiFAyh7goQg/gUg4glQgugfg0gyQgGgGgHgKIgNgRQgIgKgLgRIgRgdIgGANQgYA4gnA0QghAug1A2Qg0A1hIAYQgtAPgsAAQggAAgfgHg");
	this.shape_17.setTransform(-5.6495,15.3438);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(51,255,255,0.498)").s().p("AEERRQg/gOgTgGQgrgLghgPQgSAIgkAJQg7ATg/ABQgyABhIgLQgqgGhjgEQhdgHhCgYQg8gWgZgLQgvgUgkgXQhCAYhXAMQiYAViggjQhGgPhPglQgugVhTgvQh0hBhGhoQgRgYgGgMQgkhHgPgmQgYg/gGg+QgGg/AThIQAOg1AfhIQAXg0AegtQgfgzgVhAQgRgzgPhLQgbiFBFiaQBPixBThRQAsgsA7ghQAqgXBKgdQB6gwCJAXQCBAVBpBPIAeAZQAYAAApALQBNAUArAzIAAgFQgDgXAIgyQAOhPBdhDQAGgEBUhQQBAg+A2gVQCJg4CEgFQCNgGCCA5QCSBABCBpQBRCAgJB0IgEAjQgDAVACAMQAGgOAMguQAKgnALgUQBGiBBrgoQA4gVBBgQQAzgLBOgNQBsgSCTA9IBrAgQBBAUArAhQBqBTAMCBQAEArgVA/QgRA1ALATQAlA8AKAWQAbA+gIA1QgKBBgWAvQgZAzguAnIgNALQA2AvAXAxQAbA8AHAxQAJA6gPA6QgLAtgrAvQgoAsgDASQgCAWgDBLQgGBKgcAqQgYAngsA0QgyA9gSAZQhMBphyArQiIA0h6gnQg/gVg3glQgugfgzgyIgOgQIgMgQQgIgKgLgSQgLgVgGgIIgGANQgYA4gmA1QghAtg1A3QgzA0hJAYQguAPgtAAQgeAAgegHg");
	this.shape_18.setTransform(-5.7833,15.5364);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(51,255,255,0.498)").s().p("AEGRUQg9gOgVgGQgrgLghgPQgSAIglAJQg7ASg/ABQgxABhJgLQgqgGhjgDQhdgHhCgYQg+gWgYgKQgvgUgkgXQg+AXhbANQhPALhOgDQhMgEhRgSQhGgQhPgkQgxgXhRguQhzhBhHhqQgTgegDgHQgjhGgPgpQgYg/gGg+QgGg/AThHQAOg1AghIQAYg1AdgrQgfgzgVhAQgRg0gOhJQgbiEBEicQBQi1BShQQAsgsA8ghQApgWBLgeQB8gxCJAZQCCAXBoBQIAdAaQAXAAAqALQBMAUArAyIAAgEQgDgZAIgwQANhTBdhEIBahUQBBg9A2gVQCKg4CFgFQCOgGCCA4QCSBABDBsQBPCDgJBzIgFAjQgDAVACAMQAGgOALguQAKgnALgUQBGiCBrgqQA5gWBBgPQA0gNBNgMQBtgRCSA8IBrAhQBBATArAiQBpBTANCBQAEAqgVBAQgRA0ALATQAkA8ALAXQAbA+gIA1QgKBCgXAuQgZAzgtAnIgNALQAbAXAQAVQAVAYAMAcQAcA8AHAxQAKA6gQA5QgMAtgqAvQgoAsgDASQgCAWgDBLQgGBKgcArQgYAmgsA1QgzA8gRAZQhMBrhyAsQiLA1h5gnQg/gUg3gmQgtgeg0gzQgGgFgHgLIgMgQQgIgKgKgSQgMgVgGgIIgGANQgXA4gmA1QghAtg1A3QgzA0hIAYQgvAPgtAAQgeAAgegGg");
	this.shape_19.setTransform(-5.9556,15.7492);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(51,255,255,0.498)").s().p("AEJRVIhTgSQgrgMgigOQgSAIgkAJQg8ASg/ABQgxABhJgLIiNgKQhegGhCgXQhAgXgWgKQgwgUgkgWQg/AXhbANQiaAWigglQhHgQhPglQgzgXhQguQg8gigugrQgrgqgkg3QgSgbgFgKQgihGgPgqQgXg/gFg+QgGg/AThIQAOg0AghHQAZg2AcgpQgegzgVhAQgRgzgPhKQgaiEBEicQAmhXAjg7QAqhIAvguQAtgsA8giQApgWBLgfQB9gyCLAbQCCAZBmBSIAeAaQAVABArAMQBLAUArAyIgBgEQgCgZAHgxQAOhVBahFQAcgUBBhBQBBg8A3gWQCHg2CIgGQCNgHCFA4QCTA/BCBwQBOCDgLB1IgFAiQgDAVACANQAGgPAMgtQAKgoAKgUQBEiBBtgtQA4gXBCgPQAzgNBOgMQBugRCRA8IBrAgQBCAUAqAiQBpBSANCCQAEAqgVA/QgRA1AMATQAlBAAJATQAbA/gIA1QgKBBgXAuQgZA0gtAnIgNAMQA2AuAXAxQAbA8AIAwQAJA6gPA6QgMAtgrAuQgoAsgCASQgDAWgCBLQgHBJgbArQgYAngsA1QgzA8gSAZQhLBshzAtQiMA3h5gnQg/gTg3gmQgrgeg1g0IgNgQIgMgRQgIgKgKgRQgMgWgFgHIgGANQgYA4glA1QghAug0A1QgzA1hIAXQgvAQguAAQgeAAgdgHg");
	this.shape_20.setTransform(-6.1203,15.9605);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(51,255,255,0.498)").s().p("AELRYQg+gNgVgFQgrgLgigOQgSAHglAJQg7AThAAAQgwABhKgLIiNgJQhegFhDgYQg8gVgagLQgwgUgkgWQg+AXhcANQibAWihglQhIgRhPglQg1gYhPguQg8gjgugsQgrgqgkg4QgRgagFgLQghhGgPgrQgWhAgGg+QgFg+AThIQAPg1AghFQAag4AbgnQgegygVhAQgQgxgQhMQgbiDBFieQAmhYAig7QArhJAvguQAtgsA8giQAqgXBMgfQA9gZBFgGQBFgFBCAOQCBAcBnBTIAdAaQAZACAnALQBKAVArAxIgBgEQgDgZAIgxQAHgsAbgpQAagoArggQAbgVBDhBQBBg7A3gWQCIg3CJgGQCPgGCEA4QCTA+BCBzQBMCFgLB0IgFAjQgDAVACANQAGgPALguQAKgoALgUQBDiBBtguQA5gZBBgQQA2gNBMgLQBugRCQA8QAjAOBIASQBBAUArAiQBpBSANCBQAEAqgUBAQgRA1ALATQAlA+AJAVQAbA/gIA1QgKBBgWAvQgZA0gtAnIgOAMQAcAXAQATQAUAZANAcQAbA8AIAwQAKA5gQA6QgMAtgqAuQgpAsgCASQgDAVgCBLQgGBKgbArQgYAmgtA1QgyA7gSAbQhOBvhwAsQiPA4h4gmQg/gTg3gmQgrgeg1g0QgGgGgHgKIgMgRQgIgJgKgTQgLgVgFgHIgGANQgXA4gmA0QggAug0A2QgzA0hIAXQgvAQgvAAQgdAAgdgGg");
	this.shape_21.setTransform(-6.2857,16.1426);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(51,255,255,0.498)").s().p("AENRaIhTgSQgsgKgigPQgSAIglAJQg7AShBAAQguABhMgLQgJgCiEgHQhegFhDgXIhXggQgwgUgkgWQg/AXhbANQhPAMhQgEQhNgEhSgTQhIgRhPglQg2gZhPguQg8gigtgtQgrgrgkg5QgQgZgGgNQghhGgOgrQgWhBgFg+QgFg+AThHQAPg1AghFQAag4AcgmQgfgygVhBQgQgxgPhLQgaiCBEifQAmhaAig6QAqhLAvgtQAugtA9giQAngWBPghQA+gZBFgGQBFgFBDAPQCBAdBmBVIAdAbQAUACAsALQBJAWAqAxIAAgFQgDgaAHgxQAOhbBYhFQAcgWBDhAQBCg6A3gXQCGg2CMgGQCRgGCDA3QCUA+BCB1QBLCJgNByIgFAjQgDAVACANQAGgQALgtQAKgoALgUQBDiBBtgwQA5gZBBgRQA3gOBLgKQBsgQCTA6QAjAOBIATQBBAUArAiQBoBSANCBQAEAqgUBAQgRA1AMATQAkA/AJAVQAbA+gIA1QgKBCgWAvQgZA0gtAnIgOAMQAbAWARAUQAUAYANAcQAcA8AIAwQAJA6gPA5QgMAtgrAuQgoAsgDARQgDAVgBBMQgGBKgcArQgYAmgsA1QgyA7gTAbQhOBxhwAsQiRA6h4gmQg/gTg3gnQgpgdg1g0QgGgGgHgLIgMgQQgIgKgKgSQgLgUgGgJIgFAOQgXA4glA0QghAvgzA1QgyAzhJAYQgvAQgvAAQgdAAgdgGg");
	this.shape_22.setTransform(-6.4343,16.3673);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(51,255,255,0.498)").s().p("AEQRcQg9gMgWgFQgtgLgigOQgSAIglAJQg7AThBAAQgvAAhLgMIiNgHQhggFhCgXQhFgYgSgIQgxgTgkgWQg9AVheAPQibAXijgnQhJgRhQglQg4gbhNgtQg8gjgtguQgrgrgkg6IgVgmQgghHgPgsQgVhBgFg+QgFg/AUhGQAPg1AghEQAbg4AaglQgegygVhAQgPgwgQhNQgaiABDihQAnhcAhg5QArhMAvguQAugtA9giQAogWBPghQA+gbBHgFQBGgFBDAQQCBAgBlBWIAcAbQAXACApAMQBIAVAqAxIAAgEQgEgbAIgxQAHgtAZgqQAagqAqgiQAdgWBEhAQBCg6A4gWQCHg3CMgGQCQgHCFA4QCWA/BAB3QBKCKgOByIgFAjQgDAVACANQAGgPALguQAKgoAKgUQBCiCBugyQA5gaBCgQQA3gPBLgKQBugPCQA6QAjAOBIASQBCAUAqAiQBoBSAOCCQAEAqgUA/QgQA1ALAUQAlBBAIASQAaA/gIA1QgKBCgWAvQgZA0gtAnIgNAMQAcAXAQATQAUAZANAbQAbA9AIAvQAKA6gPA5QgMAtgrAuQgoArgDASQgDAVgBBLQgGBKgbArQgYAmgtA1QgyA7gTAbQhOBzhxAtQhFAcg9AHQhHAHhBgUQg/gTg3gnQgogdg2g1IgMgQIgMgRQgIgJgJgTQgLgTgGgJIgGANQgXA4gkA0QghAvgzA1QgyAzhIAYQgwAQgwAAQgcAAgcgGg");
	this.shape_23.setTransform(-6.6083,16.5773);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(51,255,255,0.498)").s().p("AESReIhUgQQgsgLgjgOQgSAIglAJQg7AShCAAQgsAAhOgLQgMgCiBgGQhggEhDgXIhXgfQgxgTgkgXQg9AWhfAPQibAYikgoQhKgShQglQg6gchMgtQg8gjgtgwQgqgrgkg7QgQgbgFgLQgfhFgPgvQgUhBgEg+QgFg/AUhGQAPg2AghCQAbg5AbgkQgegxgVhBQgPgugRhOQgaiABEihQAmhcAhg7QArhMAwgvQAugtA+giQAngWBQgiQA/gbBHgFQBHgGBDASQB/AhBmBZIAcAcQAZACAmAMQBIAWApAvIAAgEQgEgbAHgxQAIguAYgqQAZgsArgiQAdgXBFhAQBCg5A5gXQCFg1COgHQCQgHCHA3QBIAeA1AtQA5AwAgA9QBJCMgPBzIgFAjQgEAUACANQAHgQALgsQAKgpAKgVQBAiABwg1QA5gaBBgRQA5gPBKgKQBwgPCOA5QAjAOBIATQBCAUAqAiQBnBTAOCAQAFAqgUBAQgQA0ALAVQAlBBAHATQAbA/gIA1QgKBCgWAuQgZA1gtAnIgOAMQA2AtAXAxQAcA8AIAvQAKA5gPA6QgMAtgrAuQgoArgDARQgDAVgBBLQgGBLgbArQgYAlgtA2QgxA6gTAcQhQB1hwAtQhGAcg9AIQhHAIhCgUQg/gTg2gnQgogdg2g2QgGgGgGgKIgMgQQgIgKgJgSQgLgVgFgIIgGAOQgXA4gjA0QghAvgzA0QgxA0hJAYQgvAQgwAAQgcAAgdgGg");
	this.shape_24.setTransform(-6.7494,16.8019);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(51,255,255,0.498)").s().p("AEVRgIhUgQQgtgKgjgOQgSAIgmAJQg7AShCAAQgrgBhPgLQgMgCiBgFQhggDhDgXQg/gWgZgJQgxgUgkgWQg7AWhhAPQidAYikgoQhKgThQglQg8gchLgtQg8gkgtgwQgqgrgjg8QgRgdgEgKQgfhFgOgwQgUhBgEg/QgEg/AThFQAPg2AhhCQAbg3AbglQgegxgVhAQgPgugQhPQgbh9BEilQAnheAgg6QArhNAwguQAvguA+giQAmgVBRgkQA/gcBIgFQBIgFBEATQCAAkBjBaIAcAcQAZADAmAMQBGAVAqAwIAAgEQgEgcAHgxQAPhkBThFQAegYBFg/QBDg4A5gYQCHg2COgGQCRgHCHA3QBIAeA2AuQA5AwAfA+QBICOgQByIgGAkQgDAUACANQAHgPALguQAJgoALgVQA+iABxg3QBogyCWgUQBvgOCPA5QAjAOBIASQBBAVArAiQBnBSAOCBQAFAqgUA/QgQA1ALAUQAmBHAGAOQAaA/gIA1QgKBBgWAvQgZA1gtAnIgNAMQAcAXAQATQAUAYANAcQAcA8AIAvQAKA5gPA5QgMAugrAtQgpAsgCAQQgDAVgBBLQgGBLgbArQgYAmgtA1QgxA6gTAdQhRB3hvAtQhHAdg8AHQhIAJhCgTQg/gUg3gnQgngcg2g2QgGgGgGgKIgMgRQgHgJgJgTQgKgUgHgIIgFANQgXA4gjA0QghAvgyA0QgyA0hIAXQgwAQgxAAQgbAAgcgFg");
	this.shape_25.setTransform(-6.913,17.0118);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(51,255,255,0.498)").s().p("AEXRjQg/gLgVgFQgugKgigOQgSAIgmAJQg8AShCAAQgrgBhPgLQgPgDh+gDQhhgEhDgWQhEgXgUgIQgygTgkgWQg9AWhfAOQidAZilgpQhLgThQglQg9gdhKgtQg8glgugxQgpgsgjg8QgRgdgEgLQgehEgOgyQgThBgEg/QgEg/AThFQAQg1AghCQAcg4AagjQgegwgUhBQgOgtgRhPQgbh8BEimQAmhfAhg7QArhOAwguQAvguA+giQAngWBRgkQBAgdBJgEQBJgFBDAUQCAAlBiBcIAcAcQAUADArAMQA1ARAjAeQAMAKALAMIgBgEQgEgeAIgvQAPhnBShFQAegZBGg/QBDg3A6gYQCEg2CRgGQCTgHCHA3QBIAeA3AuQA5AyAeA/QAiBFANA7QAQBEgJA9IgGAjQgEAVACANQAHgQALgtQAKgpAKgVQA+iABxg5QBpg0CVgTQBvgNCPA4QAkAOBIATQBAAUArAiQBnBSAOCBQAFAqgUA/QgQA1ALAVQAmBFAGAQQAaA/gIA1QgKBCgWAuQgZA2gtAnIgNALQAcAXAQATQAUAYANAcQAcA8AIAvQAKA5gPA5QgMAugqAtQgpArgDARQgDAUgBBMQgFBKgbArQgYAmguA2QgwA5gUAdQhRB5hvAtQiYBAh2gkQhAgTg2gnQgngcg2g3QgFgGgHgKIgLgRQgIgJgJgTQgKgUgGgIIgFANQgXA5gjAzQggAvgyA0QgxAzhJAYQgxAQgyAAQgaAAgbgEg");
	this.shape_26.setTransform(-7.059,17.2108);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(51,255,255,0.498)").s().p("AEaRlQg8gKgZgFQgtgKgkgOQgSAIgmAJQg8AShCgBQgoAAhTgMQgPgCh+gEQhggChEgXIhYgeQgygTglgWQg7AVhhAQQidAZingrQiDghighiQg8glgugyQgpgsgjg+QgPgagFgNQgdhGgOgxQgThCgEg/QgDg/AUhEQAPg3AhhAQAeg7AYgeQgegxgUhAQgOgsgShQQgbh7BEioQAnhhAgg6QArhPAxgvQAvgtA/gjQAmgWBSglQBAgdBKgEQBJgFBEAVQCAAoBhBdIAbAcQAZAEAmAMQA1ARAjAeQAMAKAKAMIAAgFQgEgdAHgwQAQhrBQhEIBmhYQBDg2A6gYQCCg2CVgHQCUgGCGA2QBJAdA2AwQA5AyAeBAQBFCRgRByIgGAjQgEAVACANQAHgRALgsQAKgpAKgVQA+iBBxg6QBpg2CVgSQBvgOCPA4QAkAOBIATQBBAVArAiQBlBRAPCBQAFAqgTA/QgQA2ALAUQAkBFAHAQQAaBAgIA1QgKBCgWAuQgZA2gtAnIgNAMQAcAWAQATQAUAYANAcQAcA8AIAuQALA6gPA5QgMAtgrAtQgpArgCARQgDAUgBBMQgGBLgbArQgXAmguA1QgxA6gTAdQhSB6hvAuQhIAfg9AIQhJAKhCgTQg/gTg3goQgkgbg3g4QgGgGgHgKIgLgRQgHgJgJgTQgKgTgGgJIgFANQgXA5giAzQghAwgxA0QgxAzhIAXQgyARgyAAQgaAAgagFg");
	this.shape_27.setTransform(-7.2099,17.4424);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(51,255,255,0.498)").s().p("AEbRnIhVgPQgugKgjgNQgSAIgmAJQg9AShCgBQgngBhTgMQgQgCh9gDQhhgChEgWIhZgeQgygTglgWQg7AVhhAQQidAZiogrQiHgiiehiQg8gmgugyQgogtgjg+QgQgdgFgLQgchHgOgxQgShCgDg/QgGhwBHiJQAdg5AZggQgegxgUhAQgNgqgShSQgbh5BEiqQAnhiAfg6QAshQAwgvQAwguA/gkQAkgUBVgnQBAgdBKgEQBLgFBEAWQB/AqBhBeIAaAeQAaAEAlAMQBFAWApAwIgBgHQgEgdAHgwQAPhuBQhEIBmhYQBEg2A7gYQCDg2CUgHQCUgGCIA2QBJAdA3AxQA5AyAeBBQAgBHANA7QAOBFgKA9IgGAkQgEAUACAOQAHgRALgtQAJgpAKgVQA9iAByg9QBqg3CVgSQBvgNCPA3QAkAOBIATQBBAVAqAiQBlBRAQCCQAFAqgTA/QgQA1AKAVQAlBDAHASQAZBAgIA1QgKBCgWAuQgYA2gtAnIgNAMQAcAXAQATQAUAXANAcQAcA8AIAuQALA5gPA5QgMAugrAtQgpAqgCARQgDAUgBBMQgGBLgbArQgXAlguA2QgxA6gTAdQhTB8huAvQhKAfg8AJQhKALhCgUQg/gTg3goQgjgag4g5QgFgGgHgKIgLgRQgHgJgJgTQgJgTgGgJIgGANQgWA5giAzQggAwgyAzQgwAzhIAYQgyAQgzAAQgZAAgbgEg");
	this.shape_28.setTransform(-7.3322,17.6309);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(51,255,255,0.498)").s().p("AEeRpQg6gJgcgFQgtgJgkgOQgTAIgmAJQg8AThDgCQgmgBhUgMQgRgCh9gCQhhgChEgWIhZgeQgygTgmgWQg6AVhiAQQifAaingsQiMgkibhiQg9glgtg0Qgogtgjg/QgQgggEgJQgbhFgOg0QgRhCgEg/QgFhxBHiHQAeg5AZgfQgegwgVhBQgNgqgShRQgah5BDirQAohkAeg5QAshRAxgvQAwguA/gkQAjgUBXgoQBBgeBLgEQBLgEBEAXQB+ArBhBgIAaAeQAXAEAnANQA0ARAkAeQALAKAKALIgBgFQgEgeAHgxQAQhwBOhEQBXhMARgNQBDg1A8gYQCCg1CWgHQCUgHCKA2QBJAdA3AxQA6A0AcBBQAgBIAMA8QAOBEgKA+IgHAjQgEAVACAOQAIgSAKgsQAKgqAKgUQA8iBByg+QBqg5CWgSQBwgMCOA3QAjANBIAUQBBAUArAjQBkBSAQCAQAFAqgTA/QgQA1ALAVQAkBFAHARQAZBAgIA1QgKBCgWAvQgYA1gtAoIgNAMQAbAWARATQAUAXANAcQAcA8AJAuQAKA5gPA5QgMAtgqAtQgpArgDAQQgDAVgBBLQgFBLgbArQgXAmgvA2QgwA5gUAeQhUB+htAuQhLAgg8AJQhLAMhBgTQhAgTg2goQgkgbg2g5QgGgGgGgKIgLgRQgHgJgJgTQgJgTgGgJIgGANQgVA5giAzQggAwgxAzQgxAzhIAYQgyAQgzAAQgZAAgagEg");
	this.shape_29.setTransform(-7.4785,17.8321);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(51,255,255,0.498)").s().p("AEgRrQg9gJgZgFQgugJgkgNQgSAIgnAIQg8AThDgCQglgBhWgMQgQgCh9gCQhigBhEgWIhageQgygTglgWQg7AWhiAQQifAaipgsQiNglibhiQg9gmgtg1QgngtgjhBQgNgYgHgRQgahFgOg1QgRhCgDhAQgGhwBIiGQAfg6AYgeQgdgwgVhAQgMgogThTQgah4BDisQAnhlAfg6QArhSAxgvQAxguA/glQAigTBZgpQBBgfBMgEQBMgDBEAYQB/AtBfBiIAZAeQAWAEAoANQA0ASAjAdQAMALALALQgHghAHg1QARhzBMhDQBJhBAggZQBEg0A8gZQCBg1CYgHQCWgHCKA2QBJAdA4AzQA5AzAcBDQAgBJALA7QANBFgLA+IgHAkQgDAUACAOQAHgRAKgtQAKgqAKgVQA8iAByhAQBrg7CVgRQBwgMCOA2QAjAOBJATQBAAVArAjQBkBRAQCBQAFApgTA/QgPA2AKAVQAnBMAEALQAZBAgIA0QgKBCgWAvQgZA2gsAnIgOAMQAcAXAQATQAVAXANAbQAcA9AJAtQALA5gPA5QgMAtgrAtQgpArgDAQQgDAUgBBMQgFBLgaArQgXAlgvA3QgwA5gUAeQhTB/hvAwQhLAgg8AKQhLAMhCgTQhAgTg2gpQgjgag3g5QgFgGgHgKIgKgRQgHgJgJgTQgJgTgGgJIgFANQgWA5giAzQggAwgwAzQgwAzhIAYQgyAQg0AAQgZAAgagEg");
	this.shape_30.setTransform(-7.6368,18.0571);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(51,255,255,0.498)").s().p("AEjRuQg8gJgbgFQgugJgkgNQgTAIgmAJQg9AThDgCQgigChZgMQgTgCh6gBQhjgBhDgWQhKgXgRgHQgzgSglgWQg5AVhlARQifAaipgtQiRgmiZhiQg8gngug1QgmgugjhBQgNgZgGgQQgahGgOg1QgQhDgDhAQgFhxBIiEQAeg4AZgfQgegvgUhBQgMgmgThVQgah2BDivQAnhmAeg6QArhTAygvQAxguBAglQAfgSBcgrQBBgfBNgEQBNgEBEAaQB9AvBgBjIAZAeQAaAGAkAMQAzASAjAeQAMAKAKAMQgHgiAHg2QAIg2ASgoQAXg0ArgnQBGg+AlgcQBEgzA9gZQCAg1CagHQCVgHCLA1QBKAdA4A0QA5A0AcBDQAeBKALA8QANBFgLA+IgHAkQgEAUACAOQAHgSALgsQAJgqAKgVQA6h/B0hDQBtg+CTgPQBwgLCOA1QAkAOBIATQBAAVArAjQBkBRAQCBQAGApgTBAQgQA1ALAVQAlBKAFANQAZBAgIA1QgKBCgWAvQgZA2gtAnIgNAMQAcAXAQASQAVAYANAbQAcA8AJAtQALA5gPA5QgMAtgqAtQgpAqgDAQQgDAVgBBLQgFBLgbAsQgXAlguA2QgxA5gUAfQhVCChtAvQhMAhg8AKQhMANhCgTQhAgTg1gpQghgZg5g6QgFgGgGgLIgLgQQgHgJgIgTQgJgUgGgJIgGAOQgVA5ghAzQggAwgwAzQgwAyhIAYQgyAQg1AAQgYAAgZgDg");
	this.shape_31.setTransform(-7.7835,18.2432);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(51,255,255,0.498)").s().p("AElRwQg8gIgbgFQgugJglgNQgKAFgSAEIgdAIQg9AThDgDQgjgBhYgNQgSgCh8gBQhiAAhEgWQhKgXgRgGQgzgSgmgWQg4AVhmARQigAbiqguQiSgoiZhiQg9gngtg3QgmgugihCQgNgZgHgQQgZhGgNg3QgQhCgDhAQgEhxBIiEQAig8AWgaQgegvgUhAQgMgmgThVQgah2BDivQAnhoAeg6QArhTAygwQAxguBAglQAigTBagrQBCggBNgDQBOgEBDAbQB+AyBeBkIAZAeQAZAFAlANQAzASAiAeQAMAKAKAMQgHgjAIg2QAHg3ASgoQAWg1ArgnQBBg7ArgfQBEgzA+gZQB+g1CdgHQCXgHCKA1QBLAdA4A0QA5A1AbBEQAeBLALA7QAMBGgMA+IgHAkQgEAUACAPQAHgSALgtQAJgqAKgVQA6iAB0hEQBthACUgOQBxgLCMA1QAkANBIAUQBBAVArAjQBjBQAQCBQAGAqgSA/QgQA2AKAVIAqBXQAZBBgIA0QgKBDgWAvQgZA1gtAoIgNAMQAcAXAQASQAVAXANAbQAdA9AIAsQALA5gPA5QgLAtgrAtQgpAqgDAQQgDAUgBBMQgEBLgbArQgXAmgvA2QgwA5gUAfQhWCDhtAwQhNAhg8ALQhMAOhCgTQhAgTg2gpQgfgYg5g8QgGgGgGgKIgKgRQgHgIgIgUQgIgTgHgJIgFANQgVA5ghAzQgfAwgxAzQgvAzhIAXQg0ARg2AAQgXAAgYgDg");
	this.shape_32.setTransform(-7.9305,18.4917);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(51,255,255,0.498)").s().p("AEnRyQg9gIgagFQgvgIgkgNQgTAIgnAIQg9AThEgCQgegBhcgNQgVgDh5AAQhjAAhEgVIhbgdQg0gSglgWQg4AUhmASQiiAbipguQiYgqiVhhQg9gogtg3QgmgvgihDQgOgagFgQQgZhFgNg4QgPhDgDhAQgEhyBJiCQAhg7AWgaQgdgugVhBQgKgjgUhYQgbh0BDixQAohrAeg4QArhVAygvQAxgvBBglQAegRBeguQBCggBOgDQBPgDBEAbQB9A0BdBlIAZAfQAZAGAkANQAzASAiAeQAMAKAKALQgIgiAIg3QAIg6AQgnQAWg2AsgoQA9g3AwgjQBEgyA+gZQB/g1CdgHQCZgHCKA1QBLAdA4A1QA5A1AbBFQAdBLAKA8QAMBGgMA/IgIAjQgEAVACAOQAIgSAKgsQAKgrAJgVQA5h/B1hHQBshBCVgOQBwgKCOA0QAkAOBIATQBAAVArAkQBiBQASCBQAFApgSA/QgQA2ALAWQAlBMAEALQAZBBgIA0QgLBDgVAvQgZA2gtAnIgNAMQAcAXAQASQAVAXANAbQAdA8AIAtQALA5gOA4QgMAugrAsQgoAqgDAQQgEAUAABMQgFBLgbAsQgXAlguA2QgxA5gUAfQhWCGhtAvQhOAjg7ALQhOAOhCgTQhAgSg1gpQgggZg4g8QgFgFgGgLIgLgRQgGgIgIgUQgIgTgHgJIgFANQgVA6ghAyQgfAxgwAyQgvAyhIAYQg0ARg2AAQgXAAgYgDg");
	this.shape_33.setTransform(-8.0757,18.6917);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(51,255,255,0.498)").s().p("AEqR0Qg7gHgdgFQgvgIglgNQgKAFgSAEIgeAHQg9AThEgDQgdgBhegNQgUgCh5AAQhjABhFgVIhbgdQg0gTgmgVQgzAThrATQijAciqgvQibgsiThhQg9gogtg4QglgugihEQgOgcgFgPQgyiQgEhyQgEhyBKiAQAkg+ATgWQgdgvgVhBQgKghgUhZQgbh1BDixQAohrAdg6QArhVAzgwQAxguBCgmQAagPBigwQBDghBOgDQBQgDBEAdQB9A2BcBmIAYAfQAeAIAfAMQAzASAiAeQALAKAKALQgIgjAIg4QAIg7APgmQAWg3AsgoQCCh4BvguQCAg1CdgHQCbgHCJA1QBMAdA4A1QA6A3AZBFQAdBMAKA8QALBHgNA+IgIAkQgEAUACAPQAIgSAKgtQAKgqAJgVQA4h/B2hJQBthDCVgNQBzgKCKA0QAkANBIAUQBAAVArAjQBjBRARCAQAFAqgSA/QgPA2AKAVIApBYQAZBBgJA0QgKBCgWAwQgZA2gsAoIgOAMQAcAWARASQAUAXANAbQAdA8AJAsQALA5gOA4QgMAugqAsQgpAqgDAQQgDAUgBBMQgEBMgbArQgXAlgvA3QgwA4gUAgQhXCHhtAwQhOAjg8ALQhOAPhCgSQhBgTg0gpQgfgYg5g9QgFgGgGgKIgKgRQgHgIgIgUQgHgTgHgJIgFANQgUA5ghAzQgfAxgwAyQguAyhIAYQg0ARg4AAQgWAAgXgDg");
	this.shape_34.setTransform(-8.2231,18.8841);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(51,255,255,0.498)").s().p("AEsR2Qg+gHgagFQgvgIglgMQgTAIgoAIQg9AThEgDQgagBhhgOQgWgDh4ACQhjABhFgVIhcgdQg0gSgmgWQgzAUhsATQiiAcirgwQiegsiShhQg9gpgtg5QgkgugihGQgMgXgHgUQgwiOgEh1QgDh0BJh9QAkg+AUgWQgegugUhBQgJgdgWhdQgahyBDi1QAohsAcg5QAshWAygwQAygvBCgmQAagPBjgxQBDgiBPgCQBQgDBEAeQB9A3BbBoIAYAgQAgAJAdALQAyASAiAeQALAKALALQgJgjAIg5QAJg9AOglQAVg4AsgpQB/h2B0gwQB/g0CggHQCZgHCMA0QBMAcA5A3QA5A3AZBGQAcBOAJA7QALBIgNA+IgIAkQgFAVACAOQAIgTAKgsQAKgrAJgVQA4h/B2hKQBthFCVgMQBxgKCMAzQAkAOBIAUQBAAVAsAjQBhBRASCAQAFApgRA/QgPA2AKAWQAmBSACAHQAYBBgIA0QgKBDgWAvQgZA2gtAoIgNAMQAdAWAPASQAVAXANAaQAdA9AJArQAMA5gPA4QgLAugrAsQgoAqgDAQQgEAUAABLQgFBMgaArQgXAmgvA2QgxA5gUAgQhXCJhsAwQhQAkg8AMQhOAPhCgSQhBgSg0gqQgdgXg6g+QgGgGgFgKIgKgRQgHgIgIgUQgHgTgHgJIgFANQgmBshcBjQgvAxhIAYQg1ASg4AAQgWAAgWgDg");
	this.shape_35.setTransform(-8.3766,19.1162);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(51,255,255,0.498)").s().p("AEuR4IhYgLQgvgIgmgMQgKAEgSAEIgeAIQg+AThEgDQgYgChjgNQgVgDh5ACQhkABhFgVQhNgXgPgFQg0gSgmgWQg2AVhpASQiiAditgxQigguiRhhQg9gogtg7QgkgugihHQgMgXgHgUQgviRgDh0QgDh0BKh8QAkg9ATgWQgdgugUhBQgJgcgWheQgahxBCi2QAphvAcg4QArhXAzgwQAygvBCgmQAZgOBlgyQBDgiBQgDQBRgCBEAfQB9A4BaBqIAXAgQAeAJAfALQAyATAiAeQALAKAKALQgJgkAIg5QAJhAAOgkQAVg5AsgpQB6hzB7gyQB+g1ChgHQCagHCMA0QBMAcA5A4QA6A4AYBHQAcBOAIA7QALBIgOA/IgIAkQgEAUABAPQAIgTAKgsQAKgsAKgVQA3h+B2hNQBthGCVgMQB0gJCJAzQAkANBJAUQBAAVArAkQBhBQASCAQAGAqgSA/QgPA2AKAWQAlBQADAJQAYBBgIA0QgLBCgVAvQgaA3gsAoIgNAMQAcAWAQASQAVAXANAaQAdA9AJArQAMA4gOA5QgMAugqArQgpAqgDAQQgEAUAABLQgEBMgbAsQgWAlgwA3QgwA5gUAfQhZCLhrAxQhRAkg7AMQhPARhDgTQhAgSg1gqQgcgWg6g/QgGgGgFgKIgKgRQgGgJgIgTQgHgTgHgJIgFANQgUA6ggAyQgeAxgvAyQgvAxhIAYQg1ASg5AAQgVAAgWgDg");
	this.shape_36.setTransform(-8.5215,19.3066);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(51,255,255,0.498)").s().p("AExR7Qg8gHgdgEQgvgIgmgMQgLAFgSAEIgeAHQg9AThGgDQgWgBhlgOQgWgDh4ACQhkAChFgUIhcgdQg1gSgmgVQg2AUhpATQijAditgyQijguiQhhQg+gqgsg7QgjgvgihHQgNgZgFgTQgviPgCh3QgDhzBKh8QAmg/ASgTQgdgugUhBQgIgagXhgQgbhwBDi3QAohvAcg6QAshXAzgxQAzgvBCgmQAXgNBng0QBEgjBRgCQBRgCBEAgQB9A7BYBrIAYAgQAhAKAbAKQAyATAhAeQAMAKAKAMIgDgOQgFgjAHgvQAJhBAMgjQAVg6AsgqQB4hwB/g1QB+g0CigIQCbgHCNA0QBMAdA6A4QA5A5AYBHQAaBQAJA7QAJBHgNA/IgJAkQgEAVACAPQAHgTALgsQAKgrAJgWQA2h/B3hOQBuhICVgLQBxgJCMAyQAkANBIAVQBAAVArAkQBhBQASCAQAGAqgRA+QgQA3AKAWIAoBZQAYBCgJA0QgKBCgWAvQgZA3gsAoIgOAMQAdAXAQAQQAVAXANAbQAdA8AJArQAMA4gOA5QgMAtgqAsQgpAqgDAPQgDAUAABMQgEBMgbArQgXAmgvA3QgxA5gUAfQhZCNhrAxQhTAlg6ANQhPARhDgTQhBgSg0gqQgbgWg7g/QgFgGgGgLQgGgMgDgFQgGgIgIgUQgHgTgHgJIgFAOQgTA5ggAyQgeAxgvAyQguAxhIAYQg2ASg6AAQgUAAgVgCg");
	this.shape_37.setTransform(-8.6715,19.4946);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(51,255,255,0.498)").s().p("Ag6R+QgUgBhngOQgXgDh3ADQhkAChFgUIhdgcQg1gSgngVQg1AThqATQijAeivgyQikgwiQhhQg9gqgtg8QgjgvghhJQgMgXgGgUQgtiPgDh5QgCh3BLh4QAmg9ASgUQgdgtgUhBQgIgagXhgQgOg7ALhMQAKhGAhhbQAohxAcg4QArhZA0gwQAygvBDgnQARgKBug4QBEgjBRgCQBTgDBEAiQB7A8BZBtIAXAgQAbAJAgAMQAyATAiAeQAMALAKAMIgDgPQgGgkAHgvQAJhEAMghQAUg7AsgqQA1gyA9gqQBEgtBDgcQB9g0CkgIQCdgHCMA0QBOAcA5A6QA5A5AXBIQAaBQAIA7QAJBIgOA/IgJAlQgEAUACAPQAIgTAKgsQAKgsAJgVQA1h/B4hQQBwhKCTgKQBzgICKAxQAkANBJAVQA/AVArAkQAzAqAdA1QAaAyAJA/QAGApgRA/QgPA3AKAWIAnBaQAYBBgJA0QgKBDgWAvQgZA3gtAnIgNANQAcAWAQARQAVAXANAaQAeA9AJAqQAMA4gOA4QgLAugqAsQgpAqgDAPQgEAUAABLQgEBMgaAsQgXAlgvA3QgxA5gVAgQhaCQhqAwQhTAmg7ANQhQARhDgSQhBgSg0gqQgagWg7hAQgFgGgFgKQgGgNgEgEQgGgJgHgTQgHgTgHgJIgFANQgTA6gfAyQgeAxgvAyQguAxhIAYQhIAYhRgIQg7gGgegFQgwgHgmgMQgKAEgTAEIgeAIQg0AQg5AAIgWgBg");
	this.shape_38.setTransform(-8.8257,19.7353);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(51,255,255,0.498)").s().p("Ag5SBQgQgBhrgPQgXgDh4ADQhkADhFgUIhegcQg1gRgngWQggANguAKQgbAGg3AKQikAeiugzQiogyiOhgQg9gqgsg9QgjgvghhKQgNgcgFgQQgsiQgCh6QgCh2BMh3IAbgrQAPgXAOgOQgdgtgVhBQgFgTgZhmQgOg7ALhNQAKhGAhhbQAph0Abg3QArhaA0gwQAzgwBDgnIB/hCQBFgkBRgBQBUgCBEAiQB7A+BXBuIAXAhQAeAKAdALQAyAUAhAeQAMAKALANIgEgRQgGgkAHgvQAKhIAKgeQAUg8AsgrQA1gyA/gqQBDgsBEgdQB+g0ClgHQCdgHCNAzQBNAcA6A6QA5A6AXBJQAZBRAIA7QAIBJgOA/IgJAlQgFAUACAPQAIgTAKgsQAKgsAJgWQA1h+B4hSQBwhMCUgKQBzgHCJAxQAlANBIAUQBAAWArAkQAyAqAdA1QAaAyAJA/QAGApgRA/QgOA3AJAWQAbA2AMAkQAXBCgIA0QgLBCgVAwQgaA3gsAnIgNAMQAdAYAPAQQAVAWANAaQAeA9AJAqQAMA4gOA4QgLAugqAsQgpAqgDAPQgEATABBMQgEBMgbAsQgWAlgwA3QgxA6gUAfQgoBAgoArQg3A7g+AcQhVAng6ANQhQAShDgSQhBgSg0gqQgagWg7hAQgFgGgFgLIgJgRQgGgIgIgUQgHgTgGgIIgFANQgkBthaBhQguAxhHAYQhJAYhRgHQg6gGgfgFQgwgHgmgMQgLAFgSAEIgeAHQg0AQg4AAIgYAAg");
	this.shape_39.setTransform(-8.9757,19.9922);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.4,-124,366.8,259.3);


(lib.PuppetShape_13copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("Ah8cXQg+gDg0gSQg2gRgzgjQgbgSgighQgtgvgWgqIgZgwQgNgcgFgXQgGgfAAgUQAAgbALgSQAVghAFgmIACgTQAAgJgFgCQgFgDgPgCIghgFIgugHQgfgFgTgKQgVgLgYgVQgPgNgZgbQgRgSgOgiQgIgVgMgpQgKgjgDgXQgFgeABgjIACgnQgEgCgCgHIgEgMQgdhCAFhRIAEghQgMADgPAAQhJgBg8gMQgbgFghgNIg5gcQg3gcgxgqQg0gugegsQgggwgXg3QgWg1gKg6QgIguABhCQABg8AIgwQAJgxARg2QAPgtAYg0QAYgwAdgsQAZgjAogwQAsgzAdgdQAfgeA7gqQAlgbAPgGQAFgNAOgaQANgcAageQAPgSAkgkIAIgIQglgmgWgpQgihAgLhBQgFgbAAgmIABhDQAAgfANglQAIgZAUgoQAehAAxgwIAxgwQAdgZAZgNQAagNAngMIBIgUQAMgEAFAAQAKgCAEAEQAJgVAgg2QAphDAhgoQAtg3ApglQAsgnA3gjQAyggA6gYQA0gVA9gNQA0gMBAgCQA8gCA6AIQA3AHA8AVQA9AWAuAaQAsAZA0ApQArAkAmAvQAdAkAfA7IAwBcQAYAuASArQAJAWAMAlIAYALQAvAVArAnQAvApAZAtQAeAzAOA3QAOAzgCA7QgCA6gSAuQgXA6gdAYIgVATQgMAJgKgCQAEAFAFAEIANAHIAQANIASAOIAsAhQAZATAWAaIArA5IAYAfQAPATAIARQAXAyAJAmQAKAnAAA1QAAAmgCANQAgAWAKAIQAvAmAfAuQAgAtAXA4QAWA4AIA5QAIA6gDA6QgDAygRA+QgOA1gaA1QgaA2ghAqQgeAngvAqQglAhg7AbQg1AXg0AHQgqAHg6gJQgOgCgSgHIgUgHQAlAgAUAlQAcA5AMAwQAOA0ABA/QADA6gJA8QgJA9gdA6QgbA2g2AvQg1Awg9APQg+APg1gEQg/gDgsgLQgugLgpgcQgHgFgKgKQgKgLgFgDQACAHAFAKQATAqgDA0QgBAngfBEQgRAkgwA2QghAkgzAmQglAcg/AZQgqARhCAOQggAGgwABIgigBg");
	this.shape.setTransform(-360.638,-274.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("AiIcUQg9gDg1gSQg4gTgxgiQghgXgbgdQgsgvgXgqQgRgggIgRQgMgcgFgXQgGgfAAgUQAAgbALgRQAWghAEgmIADgUQAAgIgFgDQgFgCgPgCIghgFIgtgHQgggGgTgKQghgQg0g4QgQgSgOgiQgIgXgLgnQgKgkgDgWQgFgfACgiIABgnQgEgDgCgHIgEgMQgchCAFhRIADgfQgKADgNAAQhHgBg+gMQgcgGgggNIg5gcQg1gbgzgsQgygsggguQgfgugXg6QgVg1gKg7QgHgrABhEQABg6AJgyQAIgtATg5QAOgvAZgyQAYgwAegsQAWggArgyQAngtAigiQAighA4gnIAagTQAPgKAMgEIATgnQANgbAageQAOgRAmglIAIgIQgmgmgWgrQgghBgLhAQgFgcAAgmIAChDQAAgeANglQAJgZAUgoQAghAAxgvIAygvQAcgZAagMQAagNAngMIBIgSIARgEQAKgCAEAEQAJgTAhg3QAmhAAkgrQAsg2AqglQAsgoA3giQA0ghA4gWQA0gVA9gNQA6gMA6gCQA9gBA5AIQA1AHA+AWQA7AUAvAcQAvAaAxApQAtAmAjAsQAeAlAeA7IAwBcQAWAqATAvQANAeAIAdIAYALQAwAVAqAnQAuAqAaAtQAdA0APA2QAMAxgBA8QgDA9gSArQgXA6gdAYQgOAOgHAFQgLAJgLgBQAEAFAGADIAMAIIARANIASAOIAsAhQAaAWAUAZIArA4IAYAfQAOAUAIARQAVAwALAoQAIAjAAA5QAAAkgCAPQAeAUALAKQAuAmAgAuQAfAtAWA5QAWA2AIA7QAIA3gEA8QgEA0gRA8QgQA4gZAyQgYAwgkAvQgfAnguApQgnAig6AZQg2AWgzAIQgsAGg4gKQgNgCgTgHIgSgGQAjAeAUAmQAbA0ANA0QANA1ACA+QABA9gIA5QgJA9geA6QgbA0g2AwQg2Avg9APQhAAPgzgDQhEgFgngJQgxgMgmgcQgHgEgKgKIgPgOIAGAQQASAsgDAzQgCAmggBEQgSAmgvA0QghAjg0AmQgmAdg+AXQgtASg/AMQgjAHgsAAIgjgBg");
	this.shape_1.setTransform(-358.4146,-273.0378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("AiUcRQg+gEg0gRQg5gUgwgiQgdgUgeggQgsgtgXgtQgihBgHgiQgHgfABgUQAAgbALgSQAWggAFgmIACgUQAAgJgFgCQgFgDgPgCIgggFIgugHQgfgGgUgKQgigSgxg3QgRgSgNgiQgIgWgLgoQgKgjgDgXQgEgfABgiIACgnQgDgDgDgHIgDgMQgdhEAHhPIADgcQgKACgMAAQhJgCg8gMQgcgGgggOQgTgIgmgUQg2gcgxgsQgzgtgegtQgfgvgXg5QgVg3gJg5QgHguAChBQACg8AJgwQAJgwASg2QARgyAYgvQAXgvAfgsQAUgdAtg1QApgvAhgfQAfgeA7gqIAagSQAPgKALgEIAUgnQAOgbAZgeQARgTAjgiIAKgJQgogogWgrQgfhBgLhBQgEgcABglIAChDQAAgfAOgkQAJgXAVgqQAihBAwgtQAlgjANgLQAdgYAagNQAbgMAmgLIBIgRIASgEQAJgBAEAEQAJgUAhg2QAkg7AmgvQApgyAtgpQAugoA2giQAygfA6gXQAxgUBAgOQA3gLA9gCQA6gBA8AIQA2AIA9AVQA7AWAvAbQAuAaAxApQAqAkAmAvQAcAkAgA8IAvBdQAXAsASAsQALAbAJAhIAYAKQAxAXApAmQAsAoAbAvQAcAxAQA5QANAygDA8QgCA9gSArQgYA6gcAXQgOAOgHAFQgMAJgKgBQAEAFAGADIAMAIIARANIASAPIArAiQAaAVAUAaIAqA5IAYAfQAOAUAIARQAWAzAIAlQAJAlgBA3QAAAggDASQAdAVAMAKQAtAlAhAvQAeAtAWA5QAVA2AIA7QAHA4gFA7QgDAzgSA9QgOAygcA3QgaAzgjAsQgiApgsAmQgoAig4AYQg2AWg0AHQgsAFg4gJQgNgCgTgHIgQgHQAiAfATAkQAdA4ALAxQAMAyACBAQABBBgJA1QgJA9gfA5QgcA1g2AvQg2Avg8AOQg+APg1gDQg/gEgsgKQgvgLgogcIgSgPIgPgOIAGARQARArgEAzQgDAnggBDQgRAlgwA0QgfAhg2AnQglAchAAYQguASg+ALQghAGgrAAIgmgBg");
	this.shape_2.setTransform(-356.2342,-271.3602);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("AigcOQg/gEgzgSQg5gVgvghQgegWgegfQgsgwgWgqQgihBgGgjQgHgfABgUQAAgbAMgSQAVgfAFgnIADgUQAAgIgFgDQgFgCgPgDIgggFIgugHQgegGgUgKQgVgLgYgWQgOgNgZgbQgQgSgNgiQgIgWgLgpQgJgigDgYQgEgeACgiIABgnQgGgFgDgRQgchEAHhPIADgcQgLACgKAAQhFgChAgNQgbgFgggPQgTgIgmgUQg0gcgzgtQgzgugdgtQgegugXg6QgUg1gJg7QgGguAChCQACg4AJgzQAKgvATg3QAPgvAagxQAYgvAegrQAUgdAug1QAtgyAdgcQAggdA7gpIAagSQAPgKALgEIAUgnQANgbAbgeQAOgQAmglIAJgJQgngogWguQgghBgJhAQgEgcABgmIADhDQABgfAOgkQAKgZAVgnQAig/AxguIAzgtQAdgYAagMQAbgMAngKIBIgQQAZgHAGAGQAGgPAkg6QAkg8AmguQArgyArgoQAqglA6gkQAygfA6gXQA3gVA6gMQA0gLBAgCQA8AAA6AIQA2AIA8AVQA9AXAuAaQAvAcAvAoQArAkAlAvQAcAlAfA8IAvBcQAUAoAUAxQAHAQAOAsIAXAKQAvAXArAmQAtArAaAtQAcAyAPA4QANAygDA7QgCA8gTAsQgXA5gdAYQgOAOgHAFQgLAJgKgBQAEAFAFAEIANAIIAQANIATAQIArAiQAYAUAVAbQAXAdATAdIAXAfQAOAUAIARQAVAzAIAlQAJAngCA1QgBAlgDANQAeAVAMAKQAtAnAfAuQAeAtAWA4QAVA7AHA3QAGA2gFA9QgEA0gSA7QgQA2gbAzQgbAygjArQgiAqgtAlQglAgg7AZQg1AVg1AHQguAGg2gLQgNgCgSgHIgQgGQAhAfATAjQAcA3ALAxQAMA1ABA+QABA9gJA5QgLA+gdA3QgdA1g2AuQg2Aug9APQg9APg1gDQhAgFgsgJQgugLgpgdQgHgEgKgLIgQgOIAFARQARAqgEA1QgEAnggBCQgSAjgxA1QgfAig2AmQgnAdg+AWQgvASg9ALQgeAGgoAAIgsgCg");
	this.shape_3.setTransform(-354.026,-269.6486);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("AitcLQg8gEg1gTQg4gUgwgjQgcgTgggiQgsgwgVgqIgYgxQgMgcgEgXQgGgfAAgUQABgbAMgSQAVgeAGgoIACgUQAAgIgFgDQgFgCgOgDIghgFIgtgHQgfgHgUgKQgggRgzg5QgQgSgMgiQgJgXgKgnQgJgjgDgXQgEgeACgjIADgnQgEgDgCgHIgEgLQgchDAIhQIADgaQgKACgJgBQhEgChBgNQgbgGgggPQgTgJglgUQg2gdgxgrQgygugdguQgfgxgVg4QgUg0gJg8QgGgrADhEQADg7AJgwQAKgvATg3QARgxAZgvQAYgvAfgrQAYghArgvQAlgrAlgjQAhggA6gmQAigZASgGIAUgnQANgbAbgeQAPgRAlgjIALgKQgpgqgXgvQgehCgIhAQgEgcACgmIAEhDQABgeAPgkQAKgZAVgmQAig/AzgtIAzgtQAdgXAagLQAbgMAngKIBIgPIASgDQAJgBAEAEQALgYAfgwQAkg7AnguQAqgzAsgnQAsgnA4giQA0ggA4gVQA1gUA8gNQA2gLA/gBQA2gBA/AJQA1AIA9AWQA5AVAxAcQAuAbAwAqQArAkAlAwQAZAgAhBAIAuBdQAVApATAvQALAeAJAeIAYALQAwAYApAlQAtApAaAvQAcAzAOA3QANAygCA7QgEA7gRAtQgYA6gdAXQgOAOgHAFQgLAJgKgBQAEAFAFAEIANAIIARANIASAQIArAiQAZAWAUAaQAQAVAZAlIAXAgQAOAUAHARQAWA2AHAjQAIAmgCA1QgBAjgDAPQAcAUANALQAsAmAfAvQAdApAWA9QAUA2AHA7QAGA3gFA8QgEA0gTA7QgQA0gcA0QgaAwglAtQggAngvAnQgnAhg6AXQg1AVg1AGQgrAGg4gLQgOgCgSgHIgOgGQAhAeARAjQAcA3ALAxQAMA2AAA9QAAA/gJA2QgLA+geA4QgdA0g2AuQg2Atg9APQhAAPgygEQg/gDgtgLQgwgLgogcQgGgEgLgLIgQgOIAFARQAQArgGA0QgDAlghBDQgTAlgwAzQgfAgg3AnQgoAcg9AWQgxASg8ALQgcAFgkAAQgXAAgbgCg");
	this.shape_4.setTransform(-351.8487,-267.9277);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("Ai4cIQg/gFgzgSQg3gUgxgkQgfgXgbgeQgrgugWgtQghhAgHgkQgGgfABgUQABgbAMgSQAWgfAFgnIADgTQAAgJgFgCQgFgDgPgCIgggGIgugHQgfgHgTgKQgVgLgXgWQgOgOgZgbQgQgSgMgiQgHgVgLgqQgJgkgDgWQgDgfACgiIACgmQgDgDgCgHIgEgMQgbhDAHhQIADgZQgJABgIAAQhLgDg6gNQgbgGgggPQgTgJglgUQg2gegwgsQgzgvgbgtQgcgrgYg+QgTg1gIg7QgGgvAEhBQACg4ALgyQAJguAUg3QAPgsAbg0QAagwAegpQAXgfAsgxQAogtAjggQAggeA7goQAlgZAPgFIAUgnQAOgbAbgdQAPgSAlgjIALgKQgqgsgWgwQgehCgHhBQgDgcACglIAFhDQABgeAQgkQAJgWAWgpQAkg/AzgrIAzgsQAegXAagLQAbgLAngJIBIgOIASgDQAJAAAEAEQAJgSAhg2QAng9AkgsQAsgzArgmQAsgmA3giQAygeA7gXQAxgTA/gNQA4gLA9gBQA+gBA4AKQA0AIA+AWQA5AWAwAcQAvAcAvApQArAlAkAvQAcAkAeA8IAuBdQAVAqASAvQAJAYALAkIAXALQAxAYAoAlQAsApAbAvQAcA0AOA2QAMAxgCA9QgDA7gSAsQgZA6gcAXQgOAOgHAFQgLAJgKgBQAEAGAGADIAMAJIARANIASAQIArAjQAZAVAUAcQAMAQAcAqIAXAgQANAUAHASQAUAvAIApQAIAlgDA3QgBAfgDASQAcAVAMAKQAuAoAdAtQAeAtAUA5QAUA4AGA6QAGA2gGA9QgFAygTA9QgRA1gcAyQgcAygkAqQghAngvAmQgpAhg4AWQg1AVg1AFQgsAFg3gKQgOgDgSgHIgMgFQAfAdARAiQAcA2ALAyQALA1AAA+QAAA8gJA5QgLA7ggA6QgcA0g3AuQg2Atg9AOQg9APg1gEQg+gDgugKQgugLgqgdQgNgJgVgUIAFARQAPAtgGAyQgEAmgiBBQgSAlgxAyQggAig2AlQgnAbg+AXQguARg/ALQgdAEgkAAQgXAAgagCg");
	this.shape_5.setTransform(-349.6556,-266.2548);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("AjEcFQhAgGgxgSQg3gUgxgkQgcgUgfgiQgtgzgTgoQgghAgHgkQgGggABgTQABgbAMgSQAVgfAGgnIADgTQABgJgGgCQgFgDgOgCIgggGIgugIQgfgHgTgKQgVgLgXgWQgOgOgYgcQgQgSgMgiQgIgWgKgpQgIgigDgYQgEgeADgiIADgnQgEgDgCgHIgDgLQgbhDAIhQIADgXIgQABQhKgEg7gOQgbgGgggPQgPgHgpgWQg3gggugqQgygwgcgtQgcgugWg8QgUg2gHg6QgFgrADhEQAEg9AKguQALguATg3QAQgtAbgyQAZguAfgrQAYgfAsgwQAqgvAhgeQAggdA7gnQAmgaAPgFIAUgmQAOgbAbgdQAQgSAkgiIANgLQgsgugWgzQgdhAgGhCQgDgcADgmIAFhCQACgeAQgkQAKgYAXgmQAkg+AzgrQArgkAKgHQAegWAagLQApgQBhgQIARgCQAKgBAEAFQALgYAfgwQAog+AjgpQAqgyAtgnQArgmA4giQAugcA/gYQA3gVA5gLQA1gKBAgBQA7gBA7AKQA1AIA9AXQA4AUAxAeQAvAcAvApQAsAnAiAtQAbAkAfA9QAeBAAPAdQAUApATAwQAKAbAJAhIAXALQAyAZAnAlQAtAqAZAuQAcAyAOA4QAMAwgCA9QgEA9gSArQgXA5gdAYIgVATQgMAIgKAAQAFAFAFAEIANAJIARAOIASAQIArAjQAYAWAUAbQAKANAeAuIAWAgQAOAUAGASQAUAxAHAoQAHAjgDA4QgCAigDAPQAZASAPANQAsAnAeAvQAcAqAWA8QATA3AGA7QAFA5gGA6QgFAwgUA+QgRA0geAzQgbAxglAqQgjAogtAkQgoAgg6AWQgzAUg3AGQgsAFg3gMQgOgCgSgIIgKgEQAeAdAQAhQAbA2ALAyQAMA2gBA8QAAA7gKA6QgLA7ggA6QgcAzg4AtQg3Aug8AOQhAAOgygDQg/gEgtgKQgugKgqgdQgNgJgVgUQABAKADAHQAOArgGA0QgFAmgiBAQgTAkgxAzQghAhg1AlQgoAbg+AWQgrAQhCALQgbAEgiAAQgYAAgdgCg");
	this.shape_6.setTransform(-347.4834,-264.5599);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("AjQcCQg+gFgzgUQg5gVgvgjQgcgWgeggQgrgxgVgqQgghCgGgjQgGggABgTQABgbAMgSQAWgeAGgnIADgUQAAgIgFgDQgFgDgPgCIgggGIgtgIQgfgHgUgLQgUgLgXgWQgOgOgYgcQgQgSgMgiQgHgWgKgpQgIgjgCgXQgEgeADgiIADgnQgEgDgBgHIgEgMQgbhEAJhOIADgWIgPAAQhFgDg/gOQgbgHgfgPQgTgIglgWQg3gfgugsQgygvgcguQgdgwgUg6QgUg3gGg5QgFgpAEhGQAEg8ALgvQAJgqAWg6QATgyAZgtQAagwAegoQAXgfAtgwQArgvAhgdQAigfA5glQAmgZAPgFIAUgmQAOgbAbgdQAQgSAlghIANgMQgtgwgXg1QgchCgFhBQgCgcADgmIAHhCQACgeARgjQAKgXAXgnQAmg9AzgqIA1gqQAegWAbgKQAmgOBkgQIARgCQAKAAAEAEQAHgPAjg4QAjg2AogwQAqgxAtgnQAogjA7gkQAwgdA9gXQA5gVA4gLQA4gLA8AAQA9AAA5AKQA3AJA6AWQA8AXAtAcQAvAcAvApQArAnAjAuQAZAiAgA/IAsBeQAVAqASAvQAHATAMApIAXAKQAvAYApAmQAtAqAZAuQAcA0AOA2QAMAxgDA9QgDA8gSArQgYA5gcAYQgOAOgHAFQgMAJgKgBQAFAGAFAEIANAJIAjAeIAqAlQAXAUAVAdQAQAVAYAnIAVAgQANAUAHASQATAxAHAoQAHAkgEA3QgDAmgDALQAaASAOANQAsAnAeAvQAcAsAUA6QAUA5AEA5QAFA3gHA8QgGAygUA8QgTA2gcAwQgbAvgmAsQggAkgxAnQgoAfg6AWQg1AUg1AFQgqAEg5gMQgOgDgSgHIgJgEQAdAcAQAgQAbA3ALAyQALAzgBA/QgBA8gKA5QgLA6ghA6QgdAzg3AtQg1Asg9AOQg+APg1gDQhEgFgogJQgugLgrgcIgSgPIgQgOQABAKADAHQANAsgHAzQgFAmgjBAQgTAkgyAyQgiAig0AjQgmAahAAXQguARg/AJQgbAEggAAQgaAAgdgDg");
	this.shape_7.setTransform(-345.2847,-262.8667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,255,255,0.498)").s().p("Ajcb/Qg9gFg0gUQg6gXgtgiQgdgXgdggQgrgxgUgrQgghCgGgiQgFggAAgUQACgbAMgRQAWgeAGgnIADgUQAAgIgFgDQgFgDgOgCIgggGIgugJQgegHgUgLQgUgLgXgWQgOgOgYgcQgPgSgMgjQgIgWgJgoQgIgkgCgWQgDgfADgiIADgmQgDgDgCgHIgEgMQgahDAJhPIACgVIgNAAQhJgFg6gOQgcgGgfgPQgTgJglgWQgzgdgxguQgxgwgbguQgcgtgVg9QgTg4gGg5QgFguAFhBQAEg6ALgwQALgvAVg1QATgxAZguQAbgvAfgoQAVgcAvgzQArgtAhgeQAggdA7gmIAbgRQAPgJALgDIAVgmQAOgbAbgdQAQgRAkgiIAPgNQgvgygXg4QgahBgFhCQgCgcAEglIAIhCQADgeARgjQALgXAYgmQAlg8A1gqIA1goQAfgWAbgJQAbgKAngHIBHgKQAZgFAGAHQAIgRAig1QAjg3ApgvQApgwAtgnQApgjA7gkQAygeA7gWQA6gVA3gKQA6gKA6AAQA6AAA8AKQA0AIA9AYQA6AWAvAdQAsAbAxArQArAnAiAuQAaAiAfA/QAdBBAPAdQAWAuAQArQAKAdAIAfIAXALQAwAYApAmQAtAsAYAtQAbAyAOA4QANAygEA7QgDA8gSArQgYA5gdAYQgOAOgHAFQgLAJgKgBQAEAGAGAEIANAJIAQAPIASAQQAUAQAXAVQAYAWATAcQAMAQAbAsIAWAgQAMAUAHASQATAzAGAmQAGAjgEA4QgDAlgDAMQAZASAPANQAsAoAcAuQAcArAUA8QATA5AEA5QAFA6gIA4QgGAygVA8QgSA0geAxQgcAxgmApQgeAjgzAoQgoAeg7AWQgzATg2AFQgsAEg4gMQgNgDgSgIIgIgDQAcAbAQAgQAaA2ALAzQALA0gBA+QgCA/gKA2QgMA7ghA4QgeAzg3AsQg2Asg8AOQg/AOg0gDQg+gDgugKQgugLgrgdQgHgEgLgKIgRgPIAEASQAMAsgIAyQgFAkgjBCQgUAkgxAxQgdAdg6AoQgoAbg+AVQgvAQg/AJQgYAEgfAAQgbAAgggDg");
	this.shape_8.setTransform(-343.1097,-261.1741);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,255,255,0.498)").s().p("Ajob8Qg+gHgzgTQg4gWgvgkQgagTgfgkQgrgxgUgrQgghCgGgjQgFgfABgUQACgbAMgRQAWggAGgmIADgTQABgJgFgCQgFgDgPgDIgggGIgtgJQgfgHgTgLQgggSgwg5QgQgTgLgiQgIgWgJgpQgHgjgCgXQgDgeADgiIADgmQgDgEgCgGIgDgMQgahEAJhPIACgTIgLAAQhHgFg9gPQgbgGgfgQQgTgJgkgVQg1gfgvguQgwgvgcgvQgbgtgVg9QgSg3gGg6QgEgrAFhEQAFg6ALgwQANgxAUgzQAQgsAdgyQAbgwAegnQAWgbAvgzQAugvAegbQAigeA6glIAbgQQAPgJALgEIAVglQAOgbAbgcQAQgSAlghIARgNQg0g3gVg6QgahDgDhBQgBgcAEglIAJhCQAEgeARgiQALgXAZglQAng8A1goIA2goQAfgUAagJQAbgJAngGIBIgKIARgBQAKAAADAFQAMgYAfguQAlg5AmgsQAogvAvgoQArgkA5giQA0geA5gVQAygTA+gLQA0gKBBAAQBAABA1AJQA2AJA7AYQA6AXAvAcQAuAdAuAqQArAmAiAvQAaAjAeA/IAsBdQATAqASAwQAIAVAKAnIAXALQAvAYApAmQAtAsAYAtQAbAxAOA5QANAygEA7QgDA7gTAsQgYA5gcAYIgVATQgLAIgKAAQAEAGAGAEIANAJIAQAPIASARIAqAlQAWAUAVAfQAPAVAYAnIAVAhQAMAUAHASQARAxAHAoQAGAmgFA1QgCAfgFARIAoAgQAsApAcAsQAcAuATA6QASA4AEA6QAEA7gIA3QgGAxgWA8QgSAzgfAyQgcAvgnArQglAngtAiQgpAfg6AUQg0ATg1AFQgtADg3gMQgNgDgSgIIgGgCQAbAbAPAeQAbA4AJAxQALA0gCA+QgBA8gLA5QgMA5giA5QgdAyg4AtQg3Asg8ANQg+AOg0gDQg/gDgtgLQgugKgsgdQgHgFgLgKIgRgOIAEARQALAugJAxQgGAlgjBAQgUAkgyAwQghAhg2AjQgnAbg/AVQguAPhAAKQgWADgdAAQgcAAgjgDg");
	this.shape_9.setTransform(-340.9067,-259.4875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,255,255,0.498)").s().p("Aj0b5Qg9gHg0gUQg4gWgugkQgbgVgfgjQgqgxgUgrQgfhCgGgjQgFgfABgUQACgcAMgQQAWgeAHgoIADgTQABgJgFgCQgFgDgPgDIgggGIgtgJQgfgHgTgLQgUgMgXgWQgOgPgXgcQgPgSgLgjQgIgWgIgoQgIgjgCgXQgCgeADgiIAEgnQgGgFgDgQQgZhDAJhQIADgSIgKAAQhIgGg7gOQgcgHgfgQQgTgKgkgVQg2gggtgtQgvgugcgwQgcgwgTg8QgSg1gGg7QgDgtAFhCQAGg9ALgsQALgtAWg4QATguAbgvQAdgyAdglQAaggAsgtQArgsAhgdQAigeA6gkQAngYAOgFQAGgNAPgYQAPgbAagcQARgRAkghIATgPIgCgCQg1g5gWg/QgYhCgBhBQgBgcAFglIALhBQAEgeASgiQAMgYAZgjQApg7A0gmIA3gnQAfgUAbgIQAmgMBjgJQAZgCAFAGQALgVAggwQAjg1AogvQApgwAugmQAtgmA3ggQAzgdA5gVQA0gTA9gLQA1gKBAAAQA9ABA4AKQA2AKA7AXQA4AXAwAdQAwAeAsApQAqAmAjAwQAaAlAdA9IAqBeQAVAsAQAtQAIAVAKAnIAXALQAwAZAoAmQAsArAYAuQAbAxAOA5QAMAygDA7QgEA6gSAtQgYA4gdAZQgOANgHAFQgLAJgKAAQAFAGAFAEIANAKIARAPIASARIAqAmQAWAVAVAeQARAYAUAlIAVAhQAMAUAGASQASA1AFAkQAGAngFA0QgDAegFASQAbAUAMAMQArAnAdAuQAbAuATA6QASA6ADA4QADA7gIA3QgHAygWA7QgUA2geAvQgeAxgmAnQggAjgyAlQgoAdg7AWQgxARg5AFQgrADg4gMQgNgDgSgIIgEgCQAZAaAPAeQAaA4AKAxQAKA2gCA8QgCA+gMA2QgMA7giA3QgdAyg4AsQg3Arg8AOQg/AOg0gDQhBgEgrgKQgwgLgqgcQgNgJgWgUIADARQALAtgJAyQgHAlgkA/QgVAmgxAuQgjAhg1AiQgmAag/AVQgyAQg9AIQgWAEgbAAQgeAAgjgEg");
	this.shape_10.setTransform(-338.7271,-257.7935);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,255,255,0.498)").s().p("AkAb2Qg9gIg0gUQg4gXgtgkQgcgVgdgiQgqgwgUgtQgfhDgGgiQgEggABgTQABgcANgQQAXggAGgmIADgUQAAgIgFgDQgEgCgPgDIgggGIgtgKQgegHgUgLQgggTgvg6QgPgTgLgiQgHgWgJgpQgHgkgCgWQgCgeAEgiIAEgmQgGgFgDgRQgZhDAKhPIACgRIgIAAQhGgGg9gPQgbgHgfgQQgPgIgogXQg1gggtguQgvgvgcgwQgagugUg9QgSg4gFg5QgEgrAHhEQAFg6ANgvQAKgqAXg6QARgrAdgyQAcgvAfgnQAYgdAugwQAugvAfgaQAhgcA8glIAagQQAPgJAMgDIAVglQAOgaAbgcQAPgQAmgiIAUgQIgIgKQg1g9gTg8QgWhDAAhBQAAgbAGglIAMhBQAFgeASghQAMgWAagkQApg5A3gmQAqgeANgHQAfgTAbgIQAbgHAngFQAUgCAzgEIARAAQAJAAAEAFQAJgTAhgxQAggwArgzQApgvAugmQAtglA3ggQAwgdA9gWQA1gSA8gLQA3gKA9ABQA+ABA3ALQA4AKA5AXQA4AXAwAeQAwAeArApQArAnAhAvQAZAiAeBAIAqBeQASAnASAzQAKAaAIAiIAXALQAvAYAoAnQAsAqAYAvQAcA0ANA2QAMAzgEA6QgEA7gSAsQgYA4gdAZIgUASQgMAJgKgBQAFAGAGAFIANAKIAQAPIASASIAqAmQAYAXASAdIAlA9IAVAhQAMAVAGASQAQA0AFAlQAGAmgGA1QgFAkgDAMQAYASAPANQAqAnAcAvQAbAsATA9QARA4ADA6QADA4gJA5QgIA1gWA4QgSAwghA0QgeAwgmAnQglAngvAhQgpAdg6AUQgzASg2AEQgtADg2gNQgOgDgSgJIgDgBQAZAZAOAeQAaA3AJAyQALA2gDA8QgCA9gMA3QgMA3gjA6QgdAxg5AsQg3Arg8AOQg+AOg1gDQg+gEgugKQgtgKgtgdIgTgPIgRgPIADASQAKAtgKAxQgHAjgkBBQgUAigzAxQgfAeg5AlQgoAag+AUQguAPhBAJQgVADgaAAQgfAAgkgEg");
	this.shape_11.setTransform(-336.5621,-256.0913);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(51,255,255,0.498)").s().p("AkMbzQg9gHgzgVQg3gXgvgkQgcgXgcghQgqgxgUgsIgVgyQgLgcgEgXQgEggABgUQABgbANgRQAWgeAHgnIADgUQABgIgFgDQgFgCgPgEIgfgGIgtgKQgfgIgTgLQgUgLgWgXQgNgOgYgdQgPgSgKgjQgHgWgIgpQgHgjgCgXQgCgeAEgiIAEgmQgGgFgCgRQgZhDAKhPIACgQIgGAAQhJgGg6gQQgbgHgfgQQgSgJglgXQg2ghgrgtQgxgwgZgvQgbgvgTg9QgRg2gFg7QgDguAHhBQAGg3ANgxQAKgqAYg6QASgrAdgxQAZgsAigqQAUgYAyg0QAqgqAkgeQAggcA8gkQAngYAPgEIAVglQAPgaAagcQARgRAlggIAXgSIgQgSQgzg9gSg+QgUhEABhAQABgbAHglIANhAQAFgdAUghQANgWAagjQAqg4A3gkIA3gkQAggSAbgHQApgLBfgEIARAAQAJABAEAFQALgXAfgsQAhgyAqgwQApgvAugmQAtglA3ggQA0geA5gTQA1gTA7gKQA4gKA9ABQA7ACA6AKQA0AKA8AYQA7AZAtAcQAvAfAsApQApAmAiAwQAZAiAeBBIApBeQAUAqAQAwQAFAPAMAtIAXALQAwAZAnAmQArArAZAuQAbAzANA4QALAxgDA8QgEA7gTAsQgZA4gbAYIgVATQgLAJgKgBQAEAGAGAFIANAKQAVAWANALIAqAnQAWAVAUAfIAlA+IAUAhQALAVAGASQARA3AEAiQAEAlgGA2QgEAggEAPIAnAgQAqApAcAtQAbAvARA6QARA5ACA5QADA7gJA2QgIAvgXA9QgVAzgfAxQgdAugpApQgjAkgwAiQgpAcg7AVQg1ARg0ADQgtADg2gNQgNgDgSgJIgCgBQAYAaANAcQAaA1AJA0QAKA1gDA9QgCA5gNA7QgNA3gjA5QgfAzg4AqQg3Arg7ANQg/AOg0gEQhCgDgqgKQgvgLgsgcQgNgJgXgVIADASQAJArgLAzQgIAmgkA9QgVAjgyAwQgiAfg3AjQgmAZhAAVQguAOhBAJQgTACgYAAQggAAgngEg");
	this.shape_12.setTransform(-334.3678,-254.4012);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(51,255,255,0.498)").s().p("AkYbvQg9gIgzgVQg2gWgvgmQgbgVgegjQgogvgVguIgVgyQgLgdgDgXQgEgfABgUQACgbAMgRQAYggAGglIADgUQABgIgFgDQgFgCgPgEIgfgGIgtgKQgfgIgTgLQgTgMgWgXQgOgOgXgdQgPgSgKgjQgGgVgJgqQgGgjgCgXQgCgeAEgiIAFgmQgEgDgBgHIgDgMQgZhFALhNIACgOIgFgBQhHgGg8gQQgbgHgfgRIg2ggQg0gggtgvQgwgwgagwQgZgugTg+QgRg3gEg6QgDgrAHhDQAIg7AMguQALgrAYg4QATguAcguQAbgtAhgoQAUgYAzgzQAsgsAhgcQAlgeA5ghQAngXAOgEIAVglQAPgaAbgbQARgSAkgfIAbgUQgOgOgMgRQgxg9gQg/QgShEAEg/QABgcAIgkIAPg/QAGgdAVggQAMgVAcgjQArg2A3giQAqgbAOgHQAggRAbgHQAcgGAmgCQAWgCAvAAIARAAQAKABADAFQALgVAfgtQAggwArgxQAoguAvgmQArgkA5ggQAzgdA4gUQA1gTA9gKQA6gJA7ACQA8ABA4ALQA3ALA5AYQA4AXAvAfQAuAdAtArQAqAoAhAuQAaAlAbA+IApBeQAUAtAPAtQAIAYAJAkIAXALQAwAbAmAlQAtAsAXAtQAbAzANA3QALAvgEA+QgEA7gSAsQgYA4gdAYQgOAOgHAFQgLAJgKgBQAFAGAGAFIANALQAGAEAKAMIASARIAqAoQAVAVAUAgIAkA+IAUAiQALAVAGASQAQA0AEAlQAEAkgHA2QgEAhgFAOQAbAVALALQAqAoAcAvQAZAsASA8QARA6ACA4QABA7gJA3QgIAygYA5QgUAzghAwQgfAwgnAmQgjAkgxAiQgpAcg7ATQgzARg3ADQgsADg2gOQgNgDgSgJQAWAZANAcQAaA2AJAyQAJA3gDA7QgDA7gNA4QgNA5gjA4QgfAxg4ArQg3Apg8AOQg+AOg1gDQg+gEgugKQgwgLgrgcQgIgFgLgKIgSgOIADARQAIAtgMAxQgIAkglA/QgWAlgyAtQgjAfg2AjQgoAZg+ATQgxAPg+AIQgTACgWAAQghAAgogFg");
	this.shape_13.setTransform(-332.1826,-252.6987);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(51,255,255,0.498)").s().p("AkkbsQg9gIgzgVQg2gXgvglQgcgXgcgiQgpgzgTgqIgVgzQgLgcgDgXQgEggABgTQACgcAMgQQAYgfAGgmIAEgUQAAgIgFgDQgEgDgPgDIgggHIgtgKQgegIgTgMQgegSgvg8QgPgTgKgiQgHgWgHgpQgHgjgBgXQgCgeAFgiIAEglQgDgEgCgGIgDgMQgYhDALhPIACgOIgEAAQhJgIg5gQQgbgHgegQQgSgKglgXQgzghgtguQgxgzgYguQgagwgSg8QgQg3gEg6QgCgvAIhAQAHg8ANgsQANguAXg1QASgsAegvQAcgvAggmQAWgaAxgwQAtgsAhgbQAigcA8giQAngXAOgEIAVgkQAPgaAbgaQARgSAlgeIAfgYQgUgWgTgaQguhBgNg9QgPhGAGg9QACgbAJgjIARg/QAIgcAVggQAOgVAcggQAug1A3gfIA4ggQAggQAbgFQAbgGAmAAIBFAAIAQABQAJACADAFQANgXAdgrQAdgrAug0QAqgwAsgjQAqgiA6giQAygcA6gUQA2gSA7gKQA3gJA+ACQA/ACA1ALQA0AKA8AZQA7AaAsAcQAvAgArApQAnAmAjAxQAYAkAdA/IAoBfQASApAQAwQAGARAKArIAXAMQAvAZAnAmQArArAZAuQAaA0ANA3QALAygEA7QgEA7gSArQgYA4gdAZQgOANgHAFQgLAJgKAAQAFAGAGAFIANALQAVAWANAMIApAoQAWAWATAfQARAdATAiIATAiQALAVAFASQAPAyAEAoQAEAkgHA1QgFAigFAOQAeAXAIAJQApAmAcAxQAaAuAQA6QAQA5ACA5QABA6gKA4QgJAxgYA6QgTAvgjAzQggAwgnAlQggAgg1AlQgqAcg5ASQg1ARg1ACQgtACg2gOQgMgDgRgIQAWAYAMAbQAaA3AIAyQAJA1gEA8QgDA9gNA3QgOA4gjA3QgfAxg5AqQg3Aqg8ANQg+AOg0gDQhCgEgrgKQgwgLgrgcQgNgJgYgUIACARQAHAugLAwQgKAnglA7QgVAjgzAuQgiAfg3AiQgmAZhAAUQgvAOhBAIQgRACgVAAQgiAAgqgGg");
	this.shape_14.setTransform(-329.9954,-251.0181);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(51,255,255,0.498)").s().p("AkvbpQg8gIg0gWQg2gXgvgmQgdgYgaghQgpgxgTgtQgPghgGgRQgLgcgDgXQgEggACgUQACgbAMgRQAYgeAHgmIADgUQABgIgFgDQgFgDgPgDIgfgHIgtgLQgegIgTgMQgUgMgVgXQgNgOgXgdQgPgTgKgjQgGgWgHgoQgGgkgBgWQgCgfAFghIAEgmQgFgFgDgRQgXhDALhPIACgMIgCAAQhGgHg8gRQgbgIgfgRQgRgJgkgYQgzgfgtgwQgvgxgZgwQgagwgRg9QgRg4gDg5QgCgpAJhGQAHg4ANgvQAMgqAZg5QAUguAdgtQAcguAhgmQARgVA2g1QAtgqAigcQAlgdA5gfQAkgVARgFIAVgkQAQgZAagaQATgTAigcIAogdQgfgegbgqQgphCgKg+QgLhDAIg+QAEgbALgjIAUg8QAJgcAWgeQAPgUAcgfQAwgyA3gdQAqgWAPgHQAggOAbgEQAbgEAlABIBDADIARACQAIACADAFQAOgZAbgnQAdgqAug0QAqgwAsgiQAsgkA3gfQAxgbA7gUQAygSA/gKQA5gJA7ADQA9ACA3AMQAyAJA+AaQA6AaAsAdQAsAdAuAsQAoAoAhAwQAaAmAaA9IAnBfQAUAuAOArQAIAdAHAfIAXAMQAxAbAlAlQArAqAYAvQAaAzANA3QALAzgEA6QgEA8gTArQgYA3gdAZIgUASQgMAJgJAAIAKAMIANALIARAQIARASQAXAVASAUQAXAYASAeIAjA/IASAiQALAVAFATQAPA0ADAlQAEAkgIA1QgFAggFAPQAcAXAJAJQAqAoAaAvQAaAvAQA6QAQA7AAA3QACA4gLA6QgKAygYA4QgVAygiAvQgeAtgpAoQglAjgxAgQgpAcg7ASQgzAQg2ADQgtABg2gOQgMgDgSgJQAWAYANAbQAYA1AJA0QAJA2gEA8QgEA8gOA3QgNA3glA4QgfAwg5AqQg3Aqg8AMQg+AOg0gDQg+gEgvgKQgugKgtgdQgOgJgYgVIACASQAHAsgNAyQgKAmglA7QgWAjgzAtQgiAgg3AhQgnAYhAAUQgxAOg+AHQgSACgUAAQgiAAgqgGg");
	this.shape_15.setTransform(-327.81,-249.3229);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,255,255,0.498)").s().p("Ak7bmQg9gIgzgXQg1gWgvgnQgdgYgbghQgngxgUgtIgVgzQgKgcgDgXQgEggACgUQACgbANgRQAYgfAGglIADgUQABgIgFgDQgFgDgOgDIgggIIgsgKQgfgJgSgLQgUgNgVgXQgNgOgXgdQgOgTgKgjQgGgXgHgoQgGgjgBgXQgBgeAFghIAFgmQgEgDgBgHIgDgMQgYhEAMhOIACgLQhIgIg6gRQgagHgfgRQgPgJgngYQgzgigsgvQgvgygYgvQgagxgRg8QgPg3gDg6QgCgqAJhEQAHg3AOgxQANgtAZg1QAUgtAdguQAbgrAjgoQAYgcAwgtQAtgrAigaQAggZA+giQAmgUAPgEIAVgjQAPgZAbgaQASgRAjgcQARgOAkgYQgvgmgkhDQgjhEgGg9QgGhCAMg9QAFgbAMghIAYg6QAKgbAXgcQAPgSAfgdQAxgvA4gZIA5gaQAhgMAagDQAmgDBaALIAQADQAIADADAFQARgeAWghQAbgmAvg2QAogtAtgkQApghA7ghQAxgcA6gTQA0gRA9gKQA3gIA9ADQA+ACA2AMQA3AMA4AZQA4AYAtAfQAuAfArAqQApAoAgAxQAaAmAZA9IAmBfQASAqAPAwQAHAWAIAlIAWAMQAxAaAlAmQArArAXAvQAbAzAMA3QALAxgEA8QgEA6gUAsQgXA4gdAYIgVATQgLAJgKgBQAFAHAGAFIANALIAQARIASASIApApQAWAZARAeQAOAXAVAoIASAjQALAVAFASQAOA1ADAlQADAmgJAzQgHAkgDALQAaAVALALQAoAmAbAxQAaAwAPA5QAPA5ABA6QAAA7gLA1QgJAwgaA7QgVAvgiAxQghAvgoAlQgjAigzAhQgpAbg7ARQgxAQg5ACQgsACg2gPQgMgEgQgIQAVAYAMAaQAZA4AHAxQAIA1gEA9QgDA5gPA5QgNA2gmA5QgfAwg5ApQg3Apg8ANQg8ANg3gDQhCgDgqgKQgwgLgsgdQgOgIgYgVIACASQAFAtgNAwQgKAkgmA9QgXAkgyAsQgjAfg3AhQgnAYhAATQgvANhAAHQgRACgSAAQgkAAgrgGg");
	this.shape_16.setTransform(-325.6112,-247.6186);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(51,255,255,0.498)").s().p("AlHbjQg8gJgzgXQg2gXgugnQgegYgZghQgogygTgsQgdhBgFgmQgDggABgTQACgbANgRQAXgdAIgnIADgUQABgIgFgDQgFgDgOgDIgggIIgsgLQgegIgTgMQgTgMgWgYQgLgNgYgfQgOgTgKgiQgGgXgGgoQgGgigBgYQgBgeAFghIAGgmQgGgGgCgQQgXhEAMhOIACgKQhEgHg8gRQgbgIgegRQgRgKglgYQgzghgsgwQgugygYgvQgZgugRg/QgQg6gCg4QgBgrAJhDQAJg9ANgqQANgtAZg1QAUgsAegvQAdgtAhglQAbgeAugqQAsgoAkgbQAkgaA7geQAmgTAPgEIAVghQAZgoBEgzQAOgMAsgbQgEgDABgGIACgMIACgIQgSgNgOgOQgpgpgchHQgchHAAg4QgBhAARg7QAHgaAPgfIAbg3QAUgqBAg0QA0gqA3gVQAtgRANgDQAggKAZgBQAaAAAjAFIA/AMQAWAFADAHQAVgkARgYQAXghAyg5QAnguAtgiQArgiA3gfQAygcA5gSQA3gSA6gIQA5gIA7ADQA6ACA5ANQA2AMA5AZQA5AaAsAeQAqAdAuAtQAnAnAgAyQAXAjAbBBIAlBfQARAoAPAxQAEAPAKAtIAWAMQAxAaAlAmQArAsAXAtQAaAzAMA4QALAxgEA8QgEA6gUAsQgYA3gcAZIgVASQgLAJgKAAQAFAGAGAGIANALIAQARIASATIAoAqQATAUAVAiIAhBAIASAjQALAVAEATQAOAyACAnQADAkgJA1QgGAggFAOIAlAhQApApAZAvQAZAtAPA8QAPA4AAA6QAAA4gMA5QgKAwgaA5QgTAtglAzQgiAwgnAjQgkAigzAgQgqAag6ASQgzAPg3ACQgsAAg2gOQgLgEgPgHQAUAXALAaQAYA2AIAyQAIA1gFA9QgFA7gOA3QgOA3gmA3QggAvg5AqQg3Aog8ANQg+ANg0gDQg/gDgugLQgsgJgwgeQgOgJgYgUIABARQAFAsgOAyQgKAkgmA7QgXAjgzAtQgiAeg4AhQgmAYhBATQgwANhAAHQgPABgSAAQgjAAgugGg");
	this.shape_17.setTransform(-323.4357,-245.9076);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(51,255,255,0.498)").s().p("AlTbfQg8gJgzgXQg1gXgvgnQgdgZgZghQgogxgTguQgchDgFgjQgDggABgTQADgcANgQQAYgeAHgnIADgTQABgIgFgEQgFgDgOgDIgggIIgsgLQgegJgTgMQgTgMgVgYIgjgrQgOgUgJgiQgGgWgHgpQgFgjgBgXQAAgeAFghIAFgmQgDgDgCgHIgCgMQgXhCAMhPIABgHQhCgHg5gSQgbgIgegRIg2ghQg0gjgqgvQgvgygYgwQgXgsgShBQgOg3gDg6QgBgrAKhDQAIg4AOgvQAOgtAZg1QAUgsAegtQAdgsAjgmQAXgZAzgtQAsgmAlgaQAjgYA8gbQAjgQARgDIAVgfQAdgpA9gpIA3gfQgDgDAAgFIAAgLQABgcALgcIAGgPQg3grgXghQgggsgQhFQgRhJAHgyQAIg/AVgzQAPgjArhDQAZgmBCgsQA5glA0gNIA5gPQAggHAYACQAmADBPAaQAVAHADAIIAjg7QAQgZA2g+QAmgrAtgkQArgiA3gdQAwgbA6gTQA1gRA8gIQA2gIA9ADQA+AEA1AMQA1ANA5AZQA7AcApAdQAtAgAqArQAoApAfAwQAaApAWA7IAkBfQAQAnAPAzQAGAWAHAlIAXAMQAxAbAkAlQAqArAXAvQAaAxAMA5QALAygFA7QgEA6gTAsQgZA3gcAZQgOANgHAFQgLAJgJAAIAKAMIAOAMIAQARIARATQAaAaAOARQAUAWATAhQAPAaASAmIASAjQAKAVAEATQANAxACAoQACAngJAyQgGAdgGARIAlAhQAoAoAZAwQAYAsAQA9QAOA7gBA3QgBA6gLA3QgLAwgaA5QgWAwgjAvQgiAugoAkQgmAjgxAeQgpAZg7ASQg1APg1ABQgsABg2gQQgMgDgOgHQATAXALAZQAYA1AHAzQAIA1gFA9QgFA5gPA5QgOA1gmA4QghAvg5ApQg4Aog6AMQg9ANg2gDQg9gCgwgLQgtgKgwgdIgTgPIgTgPIABASQAEAtgPAwQgLAlgmA6QgYAkgyArQghAdg5AiQgqAYg+ARQgvAOhBAGIgfABQgkAAgvgHg");
	this.shape_18.setTransform(-321.2589,-244.248);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(51,255,255,0.498)").s().p("AlebcQg+gKgygXQg2gYgtgnQgdgZgZghQgogzgSgsQgdhDgEgjQgDggABgTQADgcANgQQAXgeAIgnIAEgTQAAgIgFgEQgEgDgPgDIgfgIIgtgMQgdgJgTgMQgTgMgVgYQgMgOgWgeQgXgfgMhWQgFgjAAgXQgBgeAFghIAGglQgDgEgCgGIgCgMQgXhEANhOIABgEQhEgJg2gRQgbgIgegRQgRgKgkgYQgzgigrgwQgugzgXgvQgYgugRg/QgOg1gCg9QgBguAKg/QAJg7AOgsQAPguAZgzQAVgsAegtQAdgrAjgmQAagaAxgqQAwgnAigXQAlgZA6gXQAhgNAUgDIAVgdQAdgpA7giQAKgGARgIIAbgMQgDgDAAgFIgBgJQgCgYAHgaQAIgdAQgUIAIgMQgTgKgQgQIgogoQgWgXgMgUQgZgtgLhCQgLhIAKgwQANg9AYgvQAQghAvg/QAcglBBglQA4ggA2gMIA5gLQAfgEAYADQArAHBGAeIANAGQAHAEACAGIARgeIAQgcQASgaA0g7QAkgqAugkQAngfA6ggQAugaA8gTQA2gRA6gIQA3gHA8ADQA8AEA3ANQA1AMA4AbQA3AZAtAgQArAfAsAsQAkAmAiA0QAYAmAXA+IAjBfQARAsANAuQAEAQAJArIAWAMQAuAaAnAmQApArAYAvQAaA0ALA3QALAygFA6QgFA8gTAqQgWA2geAaIgVASQgLAJgKAAQAFAHAGAGIANAMQAVAYANAMQAZAbAOAQQAVAXASAhQALAUAVAtIASAjQAJAVAFATQAMA0ABAlQACAmgKAzQgGAdgGARQAVARAPAOQAnAoAaAyQAZAuANA7QAOA5gBA5QgBA6gMA2QgLAwgbA5QgVAtglAyQgjAtgoAkQgkAggzAgQgrAag6AQQgzAOg2ABQgqABg4gQQgLgDgNgGQASAVAKAYQAYA2AHAzQAHA0gFA9QgGA6gOA4QgPA1gnA4QghAvg5AoQg3Ang7ANQg/ANg0gDQg+gDgvgKQgvgLgugdQgOgIgZgVIABARQADAtgPAxQgMAkgnA6QgZAkgyAqQgjAeg2AgQgrAZg+AQQguANhBAGIgdACQglAAgwgIg");
	this.shape_19.setTransform(-319.076,-242.5297);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(51,255,255,0.498)").s().p("AlqbZQg/gLgwgWQg3gbgsglQgbgYgbgiQgog0gSgsQgOgigFgQQgKgdgCgXQgEggACgUQACgbANgQQAZgeAHgmIAEgUQABgIgGgEQgEgDgPgDIgfgIIgsgMQgegJgSgMQgTgNgVgYQgNgOgVgeQgOgUgJgiQgGgXgFgoQgFgjAAgXQgBgeAGghIAGglQgDgDgCgHIgCgMQgXhEAOhNIABgFQhDgJg3gRQgagJgegRQgSgKgjgYQg0gkgpgvQgtgxgYgyQgYgxgPg8QgOg4gCg5QAAgpAKhFQAJg1AQgyQAPgtAZgzQAWgsAegtQAcgpAlgmQAgggAsgjQAuglAlgYQApgZA2gUQAhgMAUgDIAVgcQAggpA4gdIAagMIAbgKQgDgDgBgNQgEgXAFgXQAEgaANgUIAYguIAGgIQgegLgZgbIglgoQgUgXgKgTQgXgsgHhDQgHhKALgqQAQg6AZgvQARgfAxg8QAdgjBDgjQA4gdA1gJQAqgHAPgBQAfgDAYAEQAnAIBGAiQASAJACAIIARgdIAQgbQAMgTAUgYIAkgqQAogtAqggQArghA1gdQAygbA4gSQA0gQA9gIQA1gHA+AEQA3ADA7AOQA1AMA4AbQA2AZAtAhQArAeArAtQAmAoAfAyQAXAlAYBAIAiBfQAPAlAOA1QAGAUAHAnIAWAMQAwAbAkAmQAqAsAXAtQAaA0ALA3QALAvgFA+QgFA7gTAqQgYA3gdAZQgNANgHAFQgLAJgKAAQAGAIASARIAhAmQAaAbAOAQQAVAZARAgQASAjAOAeIAQAjQAKAWAEATQAMAzABAmQABAkgLA0QgHAfgFAPQAZAUALALQAnApAZAxQAXAtAOA9QAOA6gCA4QgBA4gNA4QgLAtgcA7QgXAvgkAvQgiAsgpAkQgnAigxAdQgpAZg8AQQgyAOg4ABQgrAAg2gQQgKgDgNgHQARAWAKAYQAYA3AGAyQAIA1gHA8QgFA5gQA4QgOA1goA3QghAvg5AoQg4Ang7AMQg8ANg3gDQg/gDgugLQgvgLgugcQgOgJgZgVIAAASQADAtgQAwQgLAhgoA8QgYAjg0ArQggAcg6AiQgqAYg+AQQgsANhEAGIgZABQgmAAgzgIg");
	this.shape_20.setTransform(-316.8936,-240.829);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(51,255,255,0.498)").s().p("Al1bVQg+gKgxgXQg3gagsgnQgagWgcgkQgngzgSgtQgchDgDgjQgDggABgTQADgcANgQQAYgfAHglIAEgUQABgIgFgEQgFgDgOgEIgggIIgsgMQgdgJgSgNQgTgMgVgYQgMgPgWgeQgNgTgJgjQgFgWgGgpQgEgiAAgXQAAgeAGghIAGglQgFgGgCgQQgWhFANhNIABgEQg/gIg5gTQgagIgegSQgRgKgjgYQgzgjgqgxQgtgygXgxQgXgwgQg+QgNg3gBg6QAAguALhAQAKg2APgwQAOgpAbg3QAWgrAfgtQAdgpAlglQAfgfAugkQAwgmAjgVQApgZA3gTQAjgLASgCIAVgbQAjgqA1gaIAbgKIAbgKQgDgCgCgMQgJgwAVgnIASgrQALgZALgJIAJgJIgBAAQgpgFgfgmIgigoQgUgXgJgUQgVgrgEhCQgEhKAMgpQARg4AbguQASgdAyg7QAfgiBCgfQA5gbA1gHIA4gHQAfgCAXAGQAqAKBBAkQARAKADAIIAQgeQAJgSAGgIQAMgTAUgXIAkgqQAlgrAsgiQAsgiA0gbQAwgaA6gTQA0gQA8gHQA2gHA9AEQA+AFA0ANQA0AMA5AbQA3AaAsAhQAsAfApAtQAmAnAfAzQAWAkAYBBIAiBfQAPApANAxIAMA7IAWAMQAwAbAkAmQAqArAXAvQAZAzAMA3QAKAxgFA8QgEA4gUAuQgZA2gcAZIgUATQgMAIgJABQAEAHAHAGIANAMIAhAmQAXAYARAUQAWAbAPAeQAPAdAQAlIAQAjQAKAWAEATQAKAzABAmQABAngLAxQgGAcgHARQAcAYAIAIQAlAoAaAyQAYAvAMA7QANA2gCA8QgCA6gNA2QgMAxgcA2QgWAtgmAxQgkAtgoAiQgiAeg2AgQgrAZg6APQg1APg1gBQgrAAg2gQQgKgDgMgGQAQAVAKAXQAYA2AGAzQAGA0gGA9QgFA3gRA6QgPA1goA2QghAug6AoQg2Amg9ANQg/ANgzgDQg/gEgugKQgxgLgtgdQgOgJgZgUIAAARQABAtgQAwQgNAlgnA4QgYAig0ArQgiAdg4AgQgnAWhCASQgvANhBAFIgWABQgnAAg0gJg");
	this.shape_21.setTransform(-314.693,-239.1305);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(51,255,255,0.498)").s().p("AmBbSQg8gKgzgZQg1gZgtgnQgdgZgZgiQgng1gRgrQgchEgDgjQgDghACgSQADgcANgQQAXgeAJgmIADgUQABgIgFgDQgEgDgPgEIgfgJIgsgMQgdgKgSgMQgTgNgVgYQgMgOgVgfQgOgTgIgjQgFgWgFgpQgEgiAAgXQAAgeAGghIAGglQgFgFgCgRQgWhEAPhNIABgEQg/gJg5gTQgagIgegSQgQgKgkgZQgygjgqgxQgtg0gWgwQgXgwgPg+QgMg1gBg9QAAgsAMhBQAKg3AQgvQAOgrAcg1QAWgrAggsQAfgrAjgjQAhggAtgiQArgiAogYQArgZA2gRQAfgKAWgDIAVgaQAjgqA2gYQAKgEARgFIAbgJQgDgDgCgMQgJgtASgmIAQgpQAJgXAJgKQANgTAHgIQANgNAQAKQAUALACAAQACgBgKgMQgIgKgQAFQgWAHgIgBQgngHgdgmIgggoQgTgYgIgTQgUgtgChAQgChJANgpQASg2AdguQAVghAwg0QAggiBCgdQA6gaA0gFIA4gFQAfgBAXAGQAtAMA7AlQARAKACAIQAHgLAJgTIAPgaQAMgSAUgXIAkgqQAlgrArghQApggA3gdQAzgcA4gQQA0gQA8gIQAzgGBAAEQA5AEA4AOQAzANA6AbQA4AcAqAfQArAfArAuQAlAoAfAyQAVAjAYBCQAWBCALAdQAQAsAMAuQAFAWAHAmIAVAMQAvAbAlAmQApAqAYAwQAZA0ALA2QAKAxgFA8QgFA6gTAsQgXA1geAaQgNAOgHAFQgLAIgKABQAFAHAGAGIAOANIAQASIARAVIAnAsQAVAbAPAfQANAZASApIAQAkQAIAWAEASQALA1AAAlQAAAlgMAyQgGAcgHARQAZAVAKALQAmApAZAxQAXAuANA8QAMA6gDA4QgCA5gOA3QgMAugcA5QgYAuglAuQgjAtgqAiQgkAeg1AfQgrAZg6APQgzANg2gBQgqAAg4gQQgJgDgMgHQAQAVAKAXQAXA4AFAxQAHA1gHA8QgGA4gRA5QgPA0gpA3QghAtg6AnQg3Amg8AMQg8ANg2gDQhDgDgrgKQgsgKgygeQgOgJgZgVIAAASQAAAugRAuQgNAlgoA4QgYAig0AqQgjAeg4AfQgpAXhAAQQgwANhAAEIgWAAQgnAAg0gIg");
	this.shape_22.setTransform(-312.546,-237.4142);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(51,255,255,0.498)").s().p("AmNbOQg9gLgxgYQg2gagsgnQgbgYgbgjQgng1gRgrQgNgjgFgQQgKgegCgXQgDgfACgTQADgbANgRQAZgfAHglIAEgUQABgIgFgDQgFgDgOgFIgfgIIgsgNQgdgKgSgNQgfgUgpg+QgOgTgIgjQgFgVgFgqQgEgiABgXQAAgeAGggIAHglQgDgEgCgGIgCgMQgVhDAOhOIABgEQhAgKg3gTQgagJgdgSQgQgKgkgaQgygjgpgxQgtg2gWguQgVgugPhAQgNg6ABg5QAAgqANhCQAJg0ASgyQANgoAdg3QAagxAdgnQAfgqAkgiQAggfAugjQAvgjAlgWQApgXA4gRQAhgLAUgCIAWgaQAjgpA2gXQAKgFARgFIAbgIQgDgCgCgMQgJgrARgmIAPgoQAHgXAIgJQALgTAGgIQAKgOAQAHQATAGADgBQADgCgJgMQgGgKgQAEQgVAFgHgBQglgHgcgoQgKgOgVgaQgSgYgIgUQgSgtgBg/QgBhIAOgoQAUg4AdgrQAUgfAzg1QAfghBDgcQA8gYAzgFQArgDANAAQAfgBAWAHQAsAMA6AmIAMAIQAGAFABAGQAIgLAIgSQAJgSAFgIQAMgSAUgXIAkgqQAlgrArggQAqghA2gcQAygbA5gRQA1gQA7gHQA0gGA+AEQA7AEA3AOQAyANA6AcQA3AbAsAgQArAhApAsQAnAqAdAxQAXAnAWA+IAgBgQAOAlAOA1IALA6IAWANQAwAcAjAlQAqAsAXAuQAYAzAMA4QAKAxgFA8QgFA5gUAsQgYA2gdAaIgUASQgLAJgKAAIAMAOIANANIAQASIARAVQAVAYARAVQATAXASAkQAOAdAQAlIAPAkQAJAWADATQAKAwAAAqQAAAngNAvQgGAdgIAPQAbAYAJAJQAlAoAZAzQAWAvAMA7QAMA4gDA6QgDA4gOA3QgNAwgcA2QgYAvgmAuQgjAqgqAjQgjAdg3AgQgtAZg4ANQgyANg3gBQgrAAg2gRQgKgDgLgGQAQAUAJAXQAWA1AGAzQAFA1gHA9QgHA6gQA2QgQA0gpA2QghAsg6AoQg4Amg7AMQg9AMg2gDQg8gCgxgMQgxgLgtgcQgPgJgZgVIgBASQgBAtgRAvQgOAlgnA3QgZAig0AqQgkAeg3AdQgqAYg/APQgtALhDAGIgTABQgnAAg4gKg");
	this.shape_23.setTransform(-310.346,-235.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(51,255,255,0.498)").s().p("AmYbLQg+gMgwgYQgzgYgvgpQgcgagZghQglgzgSguIgTgzQgJgdgCgXQgDggACgTQADgbANgQQAZgfAHglIAEgUQABgJgFgDQgFgDgOgEIgfgJIgsgOQgdgKgSgMQgTgOgUgYQgMgPgUgeQgWgfgIhWQgEgiABgYQAAgdAHghIAHgkQgGgGgBgQQgVhEAOhNIABgFQg+gKg3gTQgagJgegSQgPgKgkgaQgxgjgqgyQgsg1gVgwQgXgxgNg+QgMg2ABg7QAAgpAOhDQALg4ARgvQAPgrAcgzQAXgqAhgtQAcgnAnglQAhgeAugiQAqghAqgYQAogXA5gRQAegJAYgDIAVgaQAkgoA2gXQAKgEARgEIAbgIQgDgDgCgLQgJgqARgnIANgmQAHgWAHgKIAPgbQAJgOAPAEQASAEAEgDQACgCgHgNQgFgKgPAEQgWAEgHgCQgkgJgagnQgJgOgUgbQgSgZgHgTQgRgtABhAQAAhGAPgpQAUg1AegsQAXgiAygxQAfgfBEgcQA7gXA0gDIA3gDQAfAAAWAHQAqANA7AoQARALACAIQAIgMAIgRQAIgSAFgIQAMgSAUgXIAkgpQAigoAugjQAqghA2gcQAwgaA6gRQA0gQA8gHQA2gGA9AFQA8AFA2AOQAzANA5AcQA4AbAqAgQAsAhAoAsQAmApAdAyQAXAoAWA9IAgBgQAOAnANAzQADAMAIAvIAVANQAwAcAkAlQApAtAWAuQAZAzALA4QAKAxgFA7QgFA5gUAtQgYA2gcAZIgVATQgLAIgJABQAFAHAGAHIANANIAhAoQAXAaAPAUQAUAZAQAiQAPAfAOAkIAPAkQAJAWADATQAJAzgBAmQAAAngNAwQgIAcgHAQQAZAWALALQAkAoAYAzQAXAuALA8QALA3gDA7QgEA6gOA1QgMAsgeA6QgYAsgnAvQghAogtAlQgmAeg0AdQgpAXg8AOQgzANg2gBQgsgBg1gRQgJgDgLgGQAPAUAJAWQAWA3AFAyQAGA2gIA6QgHA6gRA3QgQAygpA3QgiAsg6AnQg4Alg7AMQg9ANg2gDQg9gDgwgLQgtgKgygdQgOgJgagVIgBARQgBAugSAuQgOAkgoA3QgZAjg0ApQglAeg2AdQgpAWhBAQQgvAMhBAEIgRABQgrAAg2gKg");
	this.shape_24.setTransform(-308.1966,-234.0121);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(51,255,255,0.498)").s().p("AmjbHQg8gLgygZQg1gagtgoQgZgXgbglQgmgzgRguQgbhEgDgjQgDggADgTQADgbANgQQAYgdAIgnIAEgUQABgIgFgEQgEgDgPgEIgfgJIgrgOQgdgKgSgNQgdgVgpg+QgOgTgHgjQgFgXgEgoQgDgiAAgXQABgeAHggIAHglQgFgFgCgRQgUhEAOhMIABgGQg+gKg3gUQgagKgdgSQgQgKgjgaQgzglgngxQgqg0gWgxQgWgxgNg+QgLg3ABg7QABgpAOhDQAMg5ARgtQARgsAbgyQAZgsAfgqQAegnAngkQAcgaAzgmQAvgiAmgVQApgXA4gRQAhgJAUgCIAWgZQAlgpA1gVIA2gQQgCgDgDgLQgJgpAQgnIANglQAHgWAGgKIANgbQAIgNAPABQARACADgDQADgEgGgMQgEgKgQACQgVADgHgCQgigKgZgoIgcgqQgRgZgGgTQgQgtABg/QADhKAPglQAVg1AfgrQAXggAzgxQAhggBDgZQA5gVA1gDIA4gCQAeABAXAHQAsAPA3AoQARAMABAHQAIgLAIgRIANgaQAMgSAUgXIAkgpQAjgpAtgiQAsgiA0gaQAwgaA6gRQA1gPA7gHQAzgGBAAFQA6AEA4APQA3APA0AbQA2AaAsAhQArAhApAtQAkAoAfAzQAVAlAXBBIAfBfQAOAmAMA1IALA7IAWAMQAwAdAjAlQApAsAWAvQAYAzAMA3QAJAygFA7QgGA7gSAqQgaA4gbAYIgUASQgMAJgJABQAFAHAGAHIAOAOIAgAoQAaAeAMARQASAXASAkQAMAaAQApIAOAlQAJAWADATQAIAxgBAoQgBAngNAwQgKAfgFAMIAiAhQAkAoAZAzQAVAvALA8QALA5gEA4QgDA4gQA3QgOAygdA0QgYArgnAvQglAsgqAgQgnAegzAcQgqAXg8AOQgxAMg4gBQgrgBg2gSQgIgDgLgFQAPAUAIAVQAWA0AFA0QAFA3gHA6QgIA4gSA4QgPAygrA3QgiAsg6AmQg3Akg8AMQg9ANg1gDQg9gDgxgLQgwgLgvgcQgPgJgagVIgBARQgCAtgTAvQgPAlgoA1QgbAkgyAoQgkAdg4AdQgnAVhCARQgzALg+AEIgSAAQgqAAg1gKg");
	this.shape_25.setTransform(-306.0053,-232.2855);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(51,255,255,0.498)").s().p("AmvbDQg9gMgxgZQg1gagsgoQgZgXgbglQgmg0gRgtQgahDgDgkQgCggACgTQADgbANgRQAYgdAJgmIAEgUQABgJgFgDQgFgEgOgEIgfgJIgrgOQgdgKgSgNQgegWgog+QgNgUgHgjQgEgVgEgpQgDgiABgXQABgdAHghIAHgkQgFgGgCgQQgUhDAPhNIACgGQhAgMg1gTQgagKgdgSIgzglQgwgkgpgzQgrg2gUgwQgWgygMg9QgLg4ACg5QABgqAPhCQAMg4ASguQARgsAcgxQAYgrAhgrQAfgpAmghQAbgZA0gmQAvghAmgWQApgWA5gQQAegJAXgCIAWgZQAlgpA1gUQALgEAQgEIAcgHQgDgDgCgLQgJgqAPglIANglQAHgWAFgKIAMgaQAHgOAOAAQAQAAADgEQADgEgFgNQgDgJgQABQgWACgGgCQgigOgXgnQgIgOgSgbQgQgagGgTQgQguAEg+QAEhIAQgmQAVg1AggqQAUgcA3g0QAggeBEgZQA9gVAygBQApgCAPABQAeABAWAIQArAPA3AqIALAIQAGAGABAFQAIgLAIgRQAIgSAFgIQALgSAUgWIAkgpQAigoAugjQAogfA4gdQAxgZA5gSQA3gPA5gGQA5gGA6AFQA6AFA4APQA0AOA3AcQA2AbArAhQAqAfAqAvQAlApAdAyQAXAnAVA/IAfBgQANAlANA1IAKA7IAWANQAwAdAiAlQApArAWAwQAYAyALA4QAKAvgFA+QgFA5gUAsQgXA1geAaIgUATQgLAJgJABQAFAHAGAHIAOAOIAPAUIARAVQAaAfAMAQQAUAdAOAfQAPAgANAkIAOAlQAIAXADASQAIAwgCAqQgCAmgNAwQgJAcgHAPIAjAhQAkAqAXAyQAUArAMA/QAKA4gEA6QgEA3gQA3QgOAvgeA2QgaAugmAsQgkAqgsAhQgkAcg2AdQgrAXg7ANQg0AMg1gCQgrgBg2gSQgIgDgKgFQAOATAIAVQAWA2AFAzQAEA3gIA5QgIA6gSA2QgQAygrA2QgjAsg6AmQg4Akg7ALQg9ANg1gDQg/gEgvgKQgwgLgvgdQgPgJgagVIgCASQgCAsgUAvQgQAmgoA0QgZAigzAoQglAdg4AdQgrAWg/APQgvALhBAEIgQAAQgrAAg3gLg");
	this.shape_26.setTransform(-303.8269,-230.5864);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(51,255,255,0.498)").s().p("Am6bAQg7gMgzgaQgzgZgtgqQgcgagYgiQgmg1gQgsIgSgzQgJgdgCgXQgCggACgUQADgaANgRQAZgeAIglIAEgUQABgJgFgDQgEgEgPgEIgfgKIgrgOQgcgKgSgNQgdgWgog+QgNgUgHgjQgEgWgEgoQgCgiABgXQABgeAHggIAIglQgFgFgCgQQgUhEAPhMIACgHQhBgNg0gTQgagKgcgTQgSgLghgaQgvgkgpgzQgqg2gUgwQgVgxgMg/QgLg3ADg6QACgtAPg/QAOg7ARgqQASgtAcgwQAYgqAhgrQAfgoAngiQAegbAygjQAygjAjgTQArgXA3gOQAjgJASgBIAXgaQAlgoA1gTQALgEAQgEIAbgHQgCgDgDgLQgIgnAPgnIAMglQAGgVAFgKIALgaQAHgOAMgBQAQgCADgEQADgFgFgNQgDgJgPAAQgWAAgGgCQgggOgWgoIgZgrQgQgZgFgTQgOgvAEg9QAFhHARgnQAYg2AfgoQAYgfA0guQAhgeBFgYQA7gUA0AAIA3AAQAeACAWAIQAqAQA3AqIAKAJQAGAGABAFQAIgLAHgRQAIgSAFgIQAMgRAUgXIAjgpQAlgqAqggQAqgfA3gdQAvgYA8gSQAzgPA9gGQA0gGA/AFQA8AGA1APQA1AOA2AcQA2AbArAiQAtAiAmAsQAmAqAcAyQAXAoAUA9IAfBgQAOAqALAwQAEAVAGAnIAWAMQAxAfAhAkQAoArAXAwQAXAxAMA5QAJAxgGA8QgFA5gTAsQgYA1gdAaIgUATQgLAJgJABQAEAHAUAWIAhAqQAUAXARAYQAUAbAOAiQAKAXARAtIAOAlQAHAWADATQAIAzgDAnQgCAngOAvQgIAZgIARQAaAZAIAJQAlAqAWAxQAVAuAKA9QAKA6gFA4QgFA5gQA1QgOAtgfA3QgZAsgoAtQgmAsgqAeQgnAeg0AbQgsAWg5ANQgyALg4gCQgrgCg1gSQgIgDgKgGQANAUAJAVQAVA3AEAyQAFA0gJA8QgIA2gTA6QgRAygrA1QgkAtg5AkQg4Ajg7AMQg+AMg0gDQhAgDgvgLQgugKgxgeQgPgJgagVIgCASQgDAtgUAuQgPAigpA3QgbAjgzAnQgjAbg6AeQgqAWhAAPQgxALg/ADIgPAAQgqAAg5gLg");
	this.shape_27.setTransform(-301.6758,-228.8745);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(51,255,255,0.498)").s().p("AnFa8Qg9gNgxgZQg1gbgrgpQgbgZgZgiQglg1gRgtIgRg0QgJgdgCgXQgCggACgSQAEgcANgQQAYgdAIgnIAFgUQABgIgFgDQgFgEgOgFIgfgJIgrgPQgcgLgSgNQgSgOgTgZQgMgQgTgeQgNgUgGgiQgFgXgDgoQgCghABgXQABgdAIghIAIgkQgDgEgCgGIgCgMQgThEAPhLIABgIQg/gMg0gVQgagKgcgTQgSgMgggZQgwglgogzQgog0gVgyQgUgygMg+QgKg2ADg8QACgrAQhAQAOg5ARgsQASgrAdgyQAYgpAigrQAhgoAmghQAegbAygiQA1glAhgQQAqgXA4gOQAggIAVgBIAWgaQAngoA0gTIAbgHIAbgHQgCgDgCgLQgJgmAPgnIALglQAHgVAEgKQAFgIAFgSQAGgOANgCQAOgDADgFQADgFgEgNQgDgKgPAAQgVgBgGgDQgfgPgVgoIgYgrQgOgagGgTQgMgtAFg/QAHhJARgkQAXg0AhgoQAUgaA5gzQAigdBEgWQA8gTAzAAQAqAAANABQAeACAWAJQArARA0ArQAQAMABAJQAIgMAIgRQAHgSAFgHQAMgSAUgXIAjgoQAlgqAqggQAtgiA0gaQAwgYA7gSQA4gQA4gFQA2gFA8AFQA4AFA6AQQA1APA1AbQA4AeApAgQAsAhAnAtQAlApAdA0QAXAoATA9IAfBgQAOAtAKAuIAKA7IAVANQAwAcAiAmQApAsAWAvQAYAzAKA4QAJAwgFA8QgFA7gUAqQgXA1gdAbQgOAOgGAEQgLAJgKABQAFAJAHAGIANAQIAQATIAQAWQAZAgAMARQAVAdANAgQALAbAPAqIANAlQAIAXACASQAHAygDAoQgCAkgPAwQgJAdgHAPIAhAhQAkArAWAxQAVAvAKA8QAJA5gFA5QgFA4gRA2QgOAsggA3QgbAtgnAsQgkAogsAhQglAbg3AcQgrAWg6ANQg0ALg2gDQgpgDg3gRIgSgJQANATAIAVQAWA2ADAzQAEAygJA+QgJA4gSA4QgSAxgrA1QgkAsg5AkQg7Akg4AKQg/AMg0gDQg/gDgvgLQgugKgygeQgPgJgagUIgCARQgFAvgUAsQgPAjgqA2QgbAigzAnQgmAcg3AcQgrAXg/ANQgtALhEADIgLAAQgqAAg8gMg");
	this.shape_28.setTransform(-299.4742,-227.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(51,255,255,0.498)").s().p("AnQa4Qg+gNgwgZQg1gcgrgoQgbgagYgjQglgzgQguQgZhEgDgkQgCggACgTQAEgbANgQQAZgeAIgmIAEgUQABgIgFgEQgEgEgOgEIgfgKIgrgPQgcgLgSgNQgdgXgmg+QgVghgFhUQgCgiABgXQABgdAIggIAIgkQgFgGgBgQQgUhDAQhMIACgJQg+gNg1gVQgagKgcgUQgQgKgigbQgvglgog0Qgpg2gTgxQgUgzgLg9QgJg2ADg8QADgpAQhCQAQg8ARgoQARgqAegyQAZgqAigqQAhgnAmghQAdgZA0gkQAtgeApgWQAqgVA4gOQAhgJAUAAIAXgZQAmgoA1gTQAKgDARgEIAbgGQgDgEgCgKQgIgmAOgnIALgkQAHgVAEgKIAKgaQAFgOAMgDQAOgEADgFQADgGgEgNQgCgJgQgCQgVgCgGgDQgegRgTgoQgGgOgRgdQgOgbgFgTQgLguAGg9QAIhGARgmQAag1AggnQAWgbA4gwQAjgdBEgVQA6gRA1AAQApABAOABQAeADAWAJQAsATAyArQAPANABAHQAIgLAIgRQAHgSAFgIQAMgRATgXIAkgoQAjgpAsghQAogeA5gdQAwgZA7gQQA0gPA8gGQA2gFA8AGQA+AGAzAPQA1APA2AcQA1AcAsAhQAsAjAmAsQAjAoAeA1QAVAlAVBAIAeBhQANAoALAyIAKA8IAVAMQAvAdAjAmQApAvAUAtQAYAyALA4QAJAxgGA8QgFA5gUAsQgYA1gcAaIgUATQgLAJgJABQAEAHAHAIIANAPIAgArQAZAgAMARQASAbAPAjQAPAkALAhIAMAmQAIAWACATQAGA0gDAlQgDAngQAuQgHAYgKATQAaAYAIAKQAjAqAWAyQAUAuAJA8QAJA5gGA5QgGA6gRAzQgOAuggA2QgbAtgoAqQgnArgqAeQgmAbg2AbQgtAWg5ALQgyALg3gDQgsgDg0gSIgRgIQAMATAIAUQAVA3AEAyQADA0gJA8QgJA2gTA4QgSAygsA0QgkArg6AkQg4Ajg6ALQg8AMg3gDQg/gDgvgLQgvgKgygeQgPgJgagVIgDASQgEAsgWAuQgQAkgpA0QgbAigzAnQgmAcg4AcQgpAVhBAPQgwAKhBADIgKAAQguAAg5gNg");
	this.shape_29.setTransform(-297.3175,-225.4368);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(51,255,255,0.498)").s().p("Anca1Qg9gOgwgZQg2gdgpgoQgcgagYgiQgkg1gRgtQgMgjgFgRQgIgdgCgXQgCggADgTQADgbANgQQAZgfAIglIAEgUQABgIgFgEQgEgEgOgFIgfgKIgqgPQgcgLgSgOQgSgOgSgZQgLgPgTgfQgNgUgGgjQgEgWgCgoQgCgjABgWQACgdAIggIAJgkQgDgDgCgHIgCgLQgShDAPhMIACgKQg+gNg1gWQgZgKgcgUQgQgLgigaQgxgogkgyQgpg2gTgyQgUgzgJg8QgKg4AEg6QADgqARhBQAOg0AUgwQAQgnAgg1QAZgoAjgqQAggnAnghQAegaAzgiQAugfApgUQAngUA7gPQAggIAVgBIAXgYQAmgoA1gSQALgDAQgEIAbgGQgCgCgCgLQgJgoAOglIALgkQAGgVAEgKQAEgJAFgRQAGgOALgEQANgEADgHQADgFgDgOQgCgJgQgDQgVgDgGgDQgdgTgRgoIgWgrQgOgagEgTQgLgwAHg8QAJhHATgkQAYgyAigpQAYgcA4guQAigcBFgUQA7gRA0ACQArABAMACQAeADAVAJQAsAUAxAsQAPAMABAIQAJgLAHgRQAIgTAEgGQALgSAUgWIAkgoQAlgrAqgfQAngdA5geQAygYA5gRQA3gOA5gGQA0gEA/AFQA7AGA2AQQA0APA2AcQAzAaAuAkQAqAiAoAtQAkAqAcAzQAXApATA9QATBCAKAeQANApALAyQAEAVAFAmIAVANQAwAdAiAmQAoAtAVAuQAZA1AJA2QAKAxgGA7QgGA6gTArQgYA1gdAbIgUASQgLAJgJACIAZAfIAQAVIAQAWQAXAeANAUQASAbAPAjQALAdAOApIAMAmQAHAWACATQAFAwgDAqQgDAkgRAwQgKAdgHANIAhAiQAiApAWA0QAUAtAJA9QAIA7gGA3QgGA4gSA1QgOAsgiA3QgaArgpArQgnAqgrAeQgoAcg0AZQgsAWg6ALQgzAKg2gDQgpgDg3gTQgHgDgKgFQANATAHAUQAVA1ADA0QADA2gKA6QgKA4gTA2QgSAygsAzQgkArg6AkQg5Aig6ALQhAAMgzgDQg/gEgvgKQgvgLgygdQgPgKgbgVIgCASQgFAqgWAwQgRAkgqAzQgbAigzAnQgmAbg4AdQgqAUhBAOQgwAKhAADIgGAAQgtAAg/gNg");
	this.shape_30.setTransform(-295.1434,-223.7229);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(51,255,255,0.498)").s().p("AnnaxQg9gOgwgZQgzgbgsgqQgcgbgXgiQglg1gPgtQgNgjgEgRQgJgdgBgXQgCghACgSQAEgbANgQQAZgeAIglIAEgVQABgIgFgEQgEgEgOgFIgfgKQgggLgKgFQgcgLgRgOQgcgWgmg/QgMgVgGgiQgEgYgCgnQgBghABgXQACgdAIggIAJgkQgFgFgBgQQgThDAQhMIACgKQg7gOg3gWQgZgKgcgUQgRgMgggbQguglgng1Qgng1gUgzQgSgwgKhAQgJg7AFg3QADglAShFQAPg3ATgtQAUgtAdguQAagoAjgqQAfgmApghQAcgYA1gjQAtgeAqgUQAqgVA4gNQAhgIAUAAQAKgMANgNQAngoA1gRIAbgGIAbgGQgCgDgDgLQgIgnAOgmIAKgjIAKgfQAEgJAFgRQAFgOALgFQAMgFADgHQADgFgDgOQgCgJgQgEQgUgEgGgEQgcgUgQgnIgVgrQgNgbgEgUQgKgxAJg6QAKhGATglQAagzAigmQAYgcA4gtQAkgbBEgTQA8gQAzACIA3AEQAeAEAVAJQAsAVAvAsQAPAOABAHQAIgMAHgQQAIgSAEgHQALgSAUgWIAkgoQAkgrArgeQAtghA0gaQAzgZA4gPQA2gPA6gFQA2gFA8AGQA9AHA0APQA0APA2AdQA1AcArAiQArAiAnAtQAjApAdA0QAWAoAUA+IAcBhQAOAsAJAvQAFAWAEAlIAVANQAwAeAiAmQAnArAWAwQAXAyALA5QAJAygGA6QgGA6gUArQgXA1gdAbIgUASQgLAJgJACIAMAQIANAPIAgAsIAkAzQARAaAPAlQANAkALAiIALAmQAHAWACATQAFAygEAoQgEAngRAsQgJAbgJAQQAXAWAKAMQAjApAVAzQATAsAJA/QAIA6gHA3QgHA4gSA1QgQAtghA2QgXAngsAvQgmAogtAeQgnAbg2AaQgqAUg7ALQgzAKg3gEQgqgCg1gUQgIgDgJgFQAMATAIAUQAUA2ADAzQADA0gLA7QgJA3gVA3QgRAxgtA0QgmArg5AiQg4Aig7ALQg/AMg0gDQg/gEgvgKQgwgLgxgeQgPgJgbgVIgDASQgGArgXAvQgTAmgoAwQgZAhg2AnQgoAdg2AaQgqAVhBANQgwAKhBACIgJAAQgtAAg7gOg");
	this.shape_31.setTransform(-292.9645,-222.0519);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(51,255,255,0.498)").s().p("AnzatQg7gNgxgbQg1gcgqgpQgbgbgYgiQgjg0gRgvQgYhDgCglQgFhDAXgbQAZgeAIglIAEgUQABgJgFgEQgFgEgrgPIgrgQQgbgMgRgOQgcgWgmg/QgMgVgFgiQgEgYgBgnQgDg/ANg2IAJgjQgCgEgCgGIgCgMQgShEAQhKIADgMQhBgQgygVQgZgKgcgUQgRgMgfgbQgwgpgkgyQgng2gTgyQgSgygJg/QgIg5AFg4QAEgqAShAQAPg1AUgvQATgqAfgwQAbgqAigoQAignAngfQAegZA0ghQAwgfAngTQAogUA6gNQAhgHAUAAQALgNAMgMQAmgmA2gSIAbgGIAbgGQgDgEgBgJQgJgmAOgnIAKgjIAKgfQADgJAFgRQAFgOAKgFQAMgGADgHQADgGgDgOQgCgKgPgEQgVgFgFgEQgbgWgPgnQgGgOgOgdQgMgbgEgUQgJgtAJg+QALhEAUgmQAbgyAigmQAZgcA5grQAjgbBFgSQA8gPA0ADIA2AEQAeAFAUAKQAtAVAuAtIAJAJQAFAGABAGQAJgMAGgQIAMgZQALgSAUgWIAkgoQAjgpAsggQAsggA1gaQAygZA5gPQAygOA+gGQA2gEA8AGQA4AGA5AQQAyAPA4AeQA1AcArAiQAqAiAnAuQAkAqAcAzQAVAmAUBAIAcBhQALAkAMA3IAIA7IAVANQAuAdAjAnQAnAsAWAwQAXAzAKA4QAJAxgGA7QgGA6gTArQgYA0gdAbIgTATQgLAJgJABQAEAHAVAaIAfAsQAWAeAOAVQASAdANAjQAMAfAMAoIALAlQAGAXACATQAEA1gEAkQgFAogRAsQgLAcgHAOQAZAZAIAJQAhApAVA0QAUAyAHA5QAHA4gHA5QgHA6gTAzQgPArgiA2QgaArgrArQgoApgrAcQgnAbg2AZQgsAVg6AKQgzAJg2gEQgogDg3gTQgHgDgJgFQAMASAHAUQAUA2ACAzQACAxgKA+QgLA6gUA0QgSAwguA0QgkAqg7AiQg3Ahg8AMQg9ALg2gDQg7gDgzgLQgwgLgxgeQgKgFgMgKIgVgPIgDARQgHArgXAvQgSAjgqAzQgbAig0AlQgmAbg5AcQgtAWg+ALQgxAKg/ABIgGAAQgtAAg/gOg");
	this.shape_32.setTransform(-290.7891,-220.3389);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(51,255,255,0.498)").s().p("An9aqQg8gPgxgaQg0gcgqgqQgagZgZgkQgkg1gPguIgRgzQgIgegBgXQgCggADgTQADgaAOgQQAZgeAIgmIAEgUQABgJgFgEQgFgEgNgFIgegLIgqgQQgcgMgRgOQgRgOgSgaQgLgPgSgfQgUgigChUQgCg+AOg2IAJgkQgDgDgBgHIgCgLQgShDARhLIADgNQhAgPgygWQgagLgbgUQgSgNgegaQgugoglg0Qgng2gSgzQgSgwgIhAQgIg5AGg5QAEgqAShAQAQg1AVgtQATgsAfgvQAZgmAlgqQAignAngfQAhgbAxgeQAsgdAsgUQApgUA5gNQAggGAVgBIAXgYQAngmA1gRIA3gLQgCgDgDgLQgIgmANgnIAKgjIAKgeIAIgbQAEgOAKgGQAMgGADgHQACgHgCgNQgCgKgPgFQgUgGgFgFQgbgVgOgoIgTgsQgLgcgEgTQgIgtAKg+QANhFAUgkQAdgzAiglQAbgdA3goQAjgbBGgRQA9gOAyAEQAmADAQACQAeAFAVAKQArAWAuAuQANANACAIQAIgLAHgRQAHgRAFgIQALgRATgWIAkgoQAjgpAsggQAsggA1gZQAxgYA6gQQA1gPA7gEQAzgFA/AHQA8AHA1AQQA1AQA1AcQA1AdAqAiQAsAjAlAtQAkAqAcA0QAWApASA9QASBCAKAeQANAsAJAwQADAOAFAtIAVANQAuAeAjAmQAnAtAVAvQAXAzAKA4QAJAxgGA7QgFA4gUAtQgYA0gdAbIgTATQgLAJgJACQAEAHAIAJIANARIAPAVIAQAYQAUAbAQAZQARAcANAkQALAdAMAqIALAmQAFAXACATQAEAvgFAqQgFAmgSAtQgKAbgJAPIAhAiQAiArAUAyQASAvAHA8QAHA6gHA4QgIA3gTA1QgQArgiA2QgcAqgqAqQgmAngtAeQgoAbg2AYQgqAUg8AKQg0AJg1gFQgpgDg2gUQgHgCgIgFQALASAHATQAUA2ABAzQACA0gLA7QgKA2gVA4QgTAwguAzQgkApg7AiQg3Ahg8ALQg9ALg2gDQg/gDgwgLQgwgLgxgeQgPgJgcgVIgDARQgJAtgWAtQgTAjgpAyQgcAhg1AmQgoAcg3AaQgrAVg/AMQgzAJg+ABIgDAAQguAAhAgOg");
	this.shape_33.setTransform(-288.6346,-218.6162);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(51,255,255,0.498)").s().p("AoIamQg9gOgwgbQg0gdgqgpQgXgYgbgmQgjg1gQguQgXhFgCgjQgCggADgTQAEgbANgPQAZgeAIgmIAFgUQABgJgFgEQgFgEgNgFIgfgLIgpgRQgcgMgRgOQgRgPgSgZQgKgQgSgfQgTghgChUQgBghACgXQADgdAJgfIAJgjQgDgEgBgGIgCgMQgShDARhKIADgPQg+gQg0gXQgZgLgbgVQgRgMgfgbQgsgmgmg2Qgmg2gSgzQgSgzgHg+QgHg4AGg6QAFgrATg+QASg5ATgpQAVgrAfgvQAZgnAlgpQAggkAqghQAbgWA3giQAxgeAngSQAqgUA5gMQAggGAVAAIAXgYQAognA0gQIAbgGIAbgEQgCgEgCgKQgIgmAMgmIALgjIAJggQADgIAEgSQAFgOAKgGQALgHACgIQADgGgDgOQgBgKgPgGQgUgHgFgEQgZgYgOgnIgRgtQgLgbgDgTQgIgxAMg6QANhFAVgjQAcgyAkglQAdgeA2gmQAkgaBGgQQA5gNA2AEQAnAEAPADQAdAFAVAKQAqAWAuAvQANAPABAHQAJgMAGgQQAHgSAFgHQALgRATgWIAjgoQAlgpArggQAsgfA1gaQAygYA5gQQA3gOA5gEQA0gEA/AGQA7AHA1ARQAzAPA3AeQA0AcArAjQArAjAmAtQAiApAdA1QAUAmATBAIAcBhQANArAJAwIAIA8IAUAMQAwAgAhAlQAmAsAWAwQAXAzAKA4QAIAwgGA8QgFA3gUAuQgYA0gdAbIgTATQgLAJgJABIAZAjIAfAuQATAaAQAaQASAdAMAkQAKAdAMAqIAKAmQAGAXABAUQAEAygGAnQgFAkgSAuQgLAbgJAPQAbAcAFAGQAhAqAUAzQASAvAHA9QAGA5gIA4QgIA5gTAyQgRAsgiA1QgcApgqAqQgnAmguAfQgmAZg3AYQgqATg8AKQgzAJg2gFQgpgDg2gUIgQgIQALASAHATQATA2ACAzQACA0gMA7QgKA0gWA5QgUAxgtAyQgjAng9AkQg6Ahg5AKQg+ALg1gDQhBgEgugLQgsgKg2geIgrgfIgDARQgJAtgYAtQgSAhgqA0QgcAgg1AmQgqAdg1AYQgrAVhAAMQg2AJg7AAIgDAAQgsAAhCgPg");
	this.shape_34.setTransform(-286.4723,-216.9004);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(51,255,255,0.498)").s().p("AoUaiQg9gQgvgaQgzgcgqgrQgbgbgXgjQgjg0gQgvQgMgjgEgQQgIgdgBgYQgCgfADgUQAEgaANgQQAagfAIglIAEgUQABgJgFgEQgEgEgOgGIgegLQg8gXgZgUQgRgPgSgaQgKgPgSggQgTghgBhUQgBg+APg1IAKgjQgDgEgBgGIgCgMQgShCARhLIAEgQQg+gPg0gYQgZgMgbgUQgRgNgfgbQgugqgjgzQglg1gSg1QgQgwgIhAQgGg4AHg5QAEgpAUhBQATg5ATgpQATgoAigxQAYgkAngrQAigmAogeQAigaAxgeQAugcAqgTQAngSA7gNQAfgGAWAAIAYgYQAogmA0gPQALgEAQgCIAbgFQgCgDgCgLQgIglAMgnQAIgYALgpQAEgJAEgSQAEgOAJgHQALgHADgIQACgHgCgOQgBgKgPgGQgUgJgEgEQgZgYgNgoIgQgsQgLgcgDgTQgGgwAMg7QAPhFAVgjQAcgvAlgmQAcgdA4gmQAlgaBFgOQA6gNA1AFIA2AHQAeAGAUALQAtAYApAuQAOAPABAHQAIgMAHgQQAHgSAEgHQALgRAUgWIAigoQAmgqAqgeQAsgfA2gaQAxgYA6gPQA2gOA6gFQAxgEBBAHQA5AHA3ARQA1AQA1AdQA1AeAqAiQAqAiAmAuQAjAqAcA0QAUAnATBAIAbBhQALAkALA3IAHA8IAVANQAvAeAhAmQAoAvAUAuQAWAyAKA5QAJAzgHA5QgGA6gTAqQgXA0gdAcIgUATQgLAJgJACIAMARIANARIAfAvQAZAkAKARQARAcAMAlQAMAiAKAmIAJAmQAGAXABATQACAygGAnQgGAmgSAtQgKAZgKAQQAYAZAIAKQAgApAUA0QASAuAGA9QAGA5gJA4QgIA5gUAyQgQAqgkA3QgcApgrApQgoAngsAdQgpAZg1AXQguAUg5AJQgyAIg2gFQgqgEg1gVIgQgHQALASAHATQATA2ABAzQABA1gMA6QgMA2gVA2QgUAwguAyQgkAog8AiQg3Agg8AKQg9ALg2gDQhAgDgvgLQgsgKg2gfIgrgfIgEASQgJArgZAuQgUAkgoAwQgeAig0AkQgmAag5AbQgsAUhAALQgtAJhEABQgvAAhCgQg");
	this.shape_35.setTransform(-284.2865,-215.1977);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(51,255,255,0.498)").s().p("AofaeQg7gOgxgcQgzgdgqgqQgZgZgYglQgjg1gQguIgQg0QgHgdgBgXQgCghADgSQAEgbANgQQAYgdAKgmIAEgVQABgJgFgEQgEgEgOgGIgegLIgpgRQgbgNgRgOQgbgYgjhAQgLgUgEgjQgDgXgBgnQAAhAAPgzIAKgjQgDgEgBgGIgCgMQgRhCARhKIAEgSQg8gPg1gZQgZgMgbgUQgPgMgggdQgsgngkg2Qgmg6gQgwQgQgwgHhBQgGg5AHg3QAGgrAUg/QASg2AVgsQAVgqAgguQAYgjAogsQAkgmAmgdQAegXA2ggQAxgdAngRQArgTA4gLQAegGAXAAIAXgXQAngmA2gPQAKgDARgDIAbgEQgCgEgDgKQgIglAMgnIAKgjIAJgfIAHgbQAEgOAJgHQALgIACgIQACgHgCgPQgBgKgPgHQgTgJgEgFQgYgbgLgmIgQgsQgKgcgCgUQgFgwANg6QAPhDAWgkQAegwAkgkQAdgcA5gmQAmgZBEgNQA+gMAxAGQAoAFAOADQAdAGAUALQAsAZApAuQANAOABAJQAJgMAGgQQAHgTAEgGQALgRAUgWIAjgnQAlgqArgeQAqgfA3gaQAxgYA6gPQA3gOA5gEQA3gEA7AIQA8AHA0AQQAzAQA2AeQA2AeApAiQAtAlAjAsQAkArAaAzQAVAnATBAIAaBhQAMAoAJAzQADAVAEAnIAVANQAvAfAhAmQAnAuAUAuQAYA2AIA1QAIAwgGA8QgFA3gUAuQgXAzgeAcIgTATQgLAKgJABIAMASIANARIAfAwQAZAlAJAQQASAfALAjQAKAdALAsIAJAmQAFAXABAUQACAwgHAoQgFAmgUAtQgKAZgKAPQAYAZAHAKQAgAqAUA0QARAwAGA7QAFA6gJA3QgKA6gTAxQgRArgkA0QgcApgrApQgpAngtAcQgmAYg4AYQgtASg5AJQg0AIg1gGQgsgEgygUIgRgJQALASAHAUQASA1ACA0QAAAzgMA7QgLA0gXA5QgUAvgvAxQglAog8AhQg2Afg8ALQg+ALg1gDQg9gDgygLQgwgMgzgdQgJgGgigZIgFARQgJAsgZAtQgVAkgpAvQgdAhg1AlQgkAYg7AcQgtAUg/ALQgwAJhBAAQgwAAhBgRg");
	this.shape_36.setTransform(-282.1091,-213.506);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(51,255,255,0.498)").s().p("Am5arQgvAAhCgRQg7gPgxgbQgygdgrgrQgZgbgYgjQghgygRgyQgWhFgCgjQgBggADgTQAEgaANgQQAYgdAKgnIAEgUQABgJgFgEQgFgFgrgRQgdgMgMgGQgbgNgQgOQgRgPgRgaQgKgQgRgfQgLgVgEgiQgDgWAAgoQAAggADgYQADgcAJgfIALgjQgDgDgBgHIgCgLQgRhDARhKIAFgTQg/gRgzgYQgYgMgbgVQgQgNgfgcQgsgogjg1Qgmg7gOgwQgRg0gFg9QgGg4AIg4QAFgmAWhEQATg4AVgpQATgmAigxQAcgoAlgmQAhgkAqgfQAlgbAvgbQAugbAqgTQApgSA6gKQAggGAVAAIAXgXQApgmA0gOQAKgDARgDIAbgEQgCgDgCgLQgJgjAMgoIAThCIAHgbQAEgPAIgHQAKgIADgJQACgHgCgPQgBgKgOgIQgTgKgEgFQgXgagLgnIgOgtQgKgcgCgUQgFgvAPg7QARhEAWgiQAegwAlgjQAbgaA7gnQAngZBEgMQA+gLAxAHQAoAGAOADQAdAGAUAMQAsAZAoAvQAMAPABAIQAJgMAGgQQAHgTAEgGQALgRATgWIAjgnQAmgqAqgeQAuggA0gYQAxgYA6gPQA0gNA8gEQA0gEA+AIQA8AIA0AQQAzAQA2AeQA1AeApAjQAqAiAmAvQAkAsAaAyQATAlAUBCIAaBhQAMAsAIAvIAHA8IAVANQAwAhAfAlQAnAtAUAvQAXA0AJA3QAJAxgHA7QgGA4gUAsQgYA0gcAcIgUATQgLAJgIACQAEAJAIAJIANASIAfAwQAYAlAKARQAQAeAMAlQAJAdAKArIAJAnQAFAXAAAUQACAygHAmQgHAogTAqQgLAagKAOQAZAcAGAIQAgAqATA0QARAxAFA6QAFA5gKA3QgKA4gUAzQgRArgkA0QgdApgsAoQgnAmgvAcQgkAXg6AYQgsASg6AIQgyAIg3gGQgpgFg1gUQgIgDgIgFQAKASAHATQASA2ABAzQAAA0gNA6QgMA3gXA1QgTAugwAyQglAog8AhQg4Aeg7ALQg7AKg4gDQg8gDgzgLQgvgLg0geQgPgKgdgVIgEARQgLAtgZArQgTAigrAxQgfAjg0AiQgmAag6AaQgqAThBALQgtAIg4AAIgMAAg");
	this.shape_37.setTransform(-279.931,-211.7757);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(51,255,255,0.498)").s().p("AnEaoQgvAAhCgRQg+gRgtgbQgygcgrgsQgZgagYgkQgig1gPguIgPg0QgIgegBgXQgBggADgTQAEgbANgPQAYgdAKgmIAEgVQABgJgFgFQgFgEgqgSQg7gXgZgXQgRgPgQgaQgKgPgRggQgSgiABhTQAAggADgXQAEgcAJgfIAKgjQgEgFgBgQQgRhDARhJIAGgVQg+gRg0gaQgZgMgagVQgRgNgdgcQgugrgggzQgkg4gQgzQgPgvgGhCQgFg4AJg4QAGgrAWg+QASg2AWgrQAVgpAiguQAZgkAogpQAfgiAsggQAggXA1gfQAvgbApgSQAsgSA3gJQAhgGAUABQANgOALgJQAoglA0gPIAbgFIAcgEQgCgDgDgLQgIgkAMgnQAHgZALgpQADgJADgSQAEgPAJgIQAJgIADgJQACgIgCgOQgBgKgOgJQgSgLgEgGQgVgagLgoQgDgOgLgfQgIgcgCgUQgEgvAPg6QAShEAXgiQAggwAlgiQAbgaA8glQAlgYBGgMQA8gKAzAIQAnAGAOADQAdAHAUAMQArAaAnAwQANAPABAHQAIgLAGgRQAHgSAEgGQAKgRAUgWIAjgnQAmgrArgcQArgeA2gbQAxgXA6gPQA3gNA5gEQA1gDA9AHQA8AIA0ARQA1ARA0AeQA1AdApAjQArAlAkAtQAkAsAaAyQAVAqARA9IAaBhQAKAlAKA3IAGA8IAVANQAvAgAgAmQAmAtAVAvQAWA0AJA3QAIAygGA6QgGA3gUAuQgYA1gcAaIgUATQgKAKgJACIAZAkIAfAxIAhA3QAQAdAMAmQAKAhAIAoIAJAnQAEAXABAUQAAAygHAlQgHAmgUAtQgMAZgKAOQAYAaAHAKQAgAqASA0QAQAwAFA7QAEA8gKA1QgJA2gWA0QgQAogmA2QgdApgsAoQgpAlgtAbQgnAXg4AXQgrARg7AJQgzAHg2gGQgogEg2gWIgPgIQAKASAGATQASA3AAAyQAAA0gNA6QgMA1gYA3QgUAtgwAyQglAmg8AiQg5Afg6AJQg+ALg1gDQhDgFgsgKQgvgLg0geIgtggIgEASQgLAsgaAsQgUAigrAwQgcAgg3AkQgmAag6AaQgpAShDAMQgtAHg3AAIgNAAg");
	this.shape_38.setTransform(-277.7855,-210.0504);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(51,255,255,0.498)").s().p("AnPalQgtgBhEgRQg7gQgwgcQgzgegpgrQgbgcgWgiQghg1gQgvQgWhEgBgkQgBghADgSQAEgbANgQQAagfAIgkIAFgVQABgJgFgEQgGgGgqgRQg5gXgagXQgagXghhCQgSgjAChRQABg+AQg1IAKgiQgEgGgBgPQgRhCAShKIAGgXQg7gRg3gaQgZgNgagVQgPgNgegcQgrgpgig2Qglg7gOgxQgPgxgFhAQgEg3AJg5QAGgoAXhAQATg3AWgqQAVgnAigvQAdgmAlgnQAigjAqgeQAggXA1gdQAxgcAogQQApgRA6gKQAegFAWABIAYgXQAqgmAzgNIAbgFIAbgEQgCgDgCgLQgIgkALgnIAShCIAGgcQAEgPAIgHQAKgJACgKQACgHgBgPQgBgKgOgJQgSgNgEgFQgUgagKgpIgNgtQgIgcgBgUQgDgwAQg5QAThDAXgiQAggvAmgiQAcgaA8glQAmgXBFgKQA9gJAyAIIA1AKQAdAHATAMQArAbAnAwQAMAPABAIQAJgMAFgQQAHgSADgHQALgRAUgVIAjgnQAogrApgcQApgdA4gbQAygYA5gOQA3gNA6gEQAygDBAAIQA7AIA0ARQAzAQA2AfQA2AfAoAiQAqAkAlAtQAjAsAaAzQAVApAQA+IAaBiQAMAvAHAsIAHA8IAUAOQAuAfAhAnQAmAtAUAvQAWAzAJA5QAIAugGA9QgHA5gTAsQgYA0gcAbIgUAUQgLAJgJACIAaAlIAeAxQAWAiALAWQAQAfALAkQAKAkAIAmIAIAnQAEAXAAAUQAAAwgHAnQgIAogVAqQgMAagJAOIAeAjQAgAtARAyQAQAvAEA8QAFA3gLA5QgLA5gVAxQgSArglAzQgdAogtAoQgnAjgwAdQglAWg6AXQgpAQg9AJQgyAGg2gGQgsgFgygVQgIgDgIgGQAKASAGATQASA2AAAzQgBA2gOA4QgLAzgZA5QgVAugwAwQgmAmg8AhQg4Aeg6AKQg9AKg2gDQg9gDgzgMQgugLg1geIgtggIgFASQgMAsgaArQgVAkgrAuQgeAhg1AjQgjAXg9AcQgrAShBALQgrAHg4AAIgOAAg");
	this.shape_39.setTransform(-275.6097,-208.3705);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(51,255,255,0.498)").s().p("AnaahQgvAAhCgSQg8gRgvgcQgzgegpgrQgbgcgVgjQghgygQgxQgVhHgCgiQgBggADgTQAEgaAOgQQAZgfAIgkIAFgVQABgJgFgFQgGgGgpgRIgogTQgagNgQgPQgagYghhBQgRgiAChTQABg9ARg0IALgiQgFgGgBgQQgQhDAShIIAGgZQg/gTgzgaQgYgMgagWQgQgNgdgcQgrgqghg2Qgjg5gPgzQgOg0gEg9QgEg4AJg4QAHgnAXhBQAVg4AWgoQAWgpAigsQAcgmAmgmQAkgkApgdQAfgVA2geQAtgZAsgSQArgSA4gIQAbgEAZAAIAYgXQAqglAzgNIAbgFIAbgDQgCgEgCgKQgIgkALgoIAShCQADgJADgSQAEgPAIgIQAJgKACgKQACgHgBgPQgBgKgNgKQgSgNgEgFQgUgdgIgnIgMguQgIgdgBgTQgCguARg7QAThAAZgkQAfgtAogjQAegbA6giQAogXBEgJQA9gIAyAJQAnAHAOAEQAdAHATAMQArAcAlAwQAMAQABAHQAIgLAFgQQAHgTAEgGQAKgRAUgWIAkgmQAkgpAsgeQArgeA2gaQAxgXA7gOQAzgNA9gEQAzgDA/AIQA5AIA2ASQA0ARA1AeQA1AeAoAjQAqAkAlAuQAiAqAbA1QATAnASBAIAZBhQALArAIAxQADAVADAnIAUAOQAwAhAfAlQAmAtAUAwQAVAxAKA6QAIAvgHA9QgGA4gUAsQgYA1gcAbIgTATQgLAKgJACIAMASIANATIAeAyQAVAhAMAYQAPAcALAoQAMApAGAhIAHAnQAEAXAAAUQgBAzgIAkQgIAogVAqQgLAXgLAQIAeAkQAfArARAzQAQAxADA7QAEA5gLA3QgMA7gVAuQgSAqgmA0QgdAngtAoQgqAkguAbQgpAXg2AVQgrAQg7AIQgzAGg1gHQgrgFgzgWQgIgDgJgFQALASAGATQARA2AAAzQgCA4gOA2QgNA0gYA2QgUAtgxAxQgmAmg8AgQg5Aeg6AJQg8AKg3gDQg9gDgzgMQgugKg1gfIgXgPIgWgQIgFARQgNAsgaArQgWAjgrAvQggAigzAhQgmAZg7AZQgsAThAAKQgrAHgyAAIgUgBg");
	this.shape_40.setTransform(-273.4224,-206.6385);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(51,255,255,0.498)").s().p("AnlaeQgtgBhDgSQg7gQgwgdQg0gfgogqQgYgagYglQgig2gOguQgVhHgBgiQgCgfADgUQAFgaANgQQAageAIglIAFgVQABgJgFgFQgHgGgogSQgdgMgLgHQgagNgQgQQgagYgghBQgRgjADhRQACg9ARg0IALgiQgDgEgBgGIgBgMQgRhAAShLIAIgaQhDgWgwgZQgYgMgZgWQgQgNgdgdQgsgsgfg0Qgjg7gOgxQgNgxgEhBQgDg4AKg3QAHgsAYg8QATg1AYgqQAWgoAjguQAcgkAngnQAfgfAuggQAhgWA0gcQAxgaAogRQArgQA4gJQAdgEAYABIAYgXQApgkA0gNQAKgDARgCIAbgDQgCgEgDgKQgIgkAMgoQAHgYAKgqQADgJADgSQAEgQAHgIQAJgKADgKQACgHgBgQQgBgKgNgKQgSgOgDgGQgTgdgIgoIgLgtQgHgdgBgTQgBgwASg5QAVhDAYggQAjgwAlgfQAdgZA9gjQAngWBFgJQA/gHAvAKQAnAHAOAEQAdAIATANQArAdAkAwQALAQAAAHQAJgLAGgRQAGgSAEgGQALgRATgWIAkgmQAlgpArgeQAsgeA2gZQAxgXA6gOQA1gNA7gDQA5gDA5AIQA5AIA3ASQA1ASAzAeQA1AfAoAiQAqAkAkAuQAjAsAZAzQATAlATBDIAYBhQAMAtAGAvQADAVADAnIAVAOQAuAhAgAlQAmAuATAvQAWAzAJA4QAIAwgHA8QgHA7gTApQgWAygeAeIgTAUQgLAJgJACIAMATIANAUIAeAyQAVAjALAWQAPAfALAmQAIAbAJAvIAHAoQADAXAAAUQgBAugJApQgJAmgVArQgOAagJANIAeAkQAeAqARA0QAQAxADA7QADA4gMA4QgLA2gXAzQgSAqgmAyQgcAlgvAqQgsAlgsAZQgpAXg3AUQgsARg6AGQg0AGg0gHQgrgFgygWQgIgEgJgFQAKARAGAUQARA3gBAyQgBAzgPA7QgNAzgZA3QgUAsgyAxQgoAng7AeQg3Adg7AKQg9AKg2gDQg+gEgygLQgwgLg0gfIgtgfIgFARQgOAsgaArQgXAkgrAtQggAigzAgQgqAag4AYQgsAThAAJQgrAGgyAAIgUAAg");
	this.shape_41.setTransform(-271.2536,-204.9016);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(51,255,255,0.498)").s().p("AnwabQgtgBhDgTQg8gRgvgcQgzgfgogrQgbgcgVgjQghg0gPgwQgVhEgBglQgBggADgTQAEgaANgQQAagfAIgkIAFgVQABgJgFgFQgFgGgqgSIgngUQgagOgQgPQgYgYghhCQgQgiADhSQADg8ARg1IAMghQgDgEgBgGIgCgMQgQhCAShIIAJgeQg9gSg2gdQgYgMgagWIgsgrQgqgrggg2Qghg3gOg1QgOg0gCg9QgDg2AKg6QAJgrAXg8QAVg1AYgqQAYgqAhgqQAegnAmgkQAighArgdQAcgTA6gfQA0gbAlgOQArgRA4gHQAegFAXACIAYgXQAqgkAzgNIA2gHQgCgDgCgLQgJgkAMgoIAQhCQADgJAEgTQADgPAIgJQAIgJADgLQACgIgBgPQAAgLgOgLQgQgOgEgGQgSgfgHgmQgCgPgIgfQgHgdAAgTQAAgxASg4QAVhAAagiQAiguAnggQAdgYA9gjQAmgVBHgIQA8gGAyAKQAlAIAPAEQAdAIATANQArAeAiAwQALARABAHQAIgMAGgQQAGgSAEgHQALgRATgVIAkgmQAmgpAqgeQAtgeA1gZQAzgXA5gNQAwgMBAgEQA1gDA9AJQA5AIA2ASQAzARA1AfQA0AfApAjQArAmAjAsQAhArAaA1QAUAnARBAIAYBiQAMAtAGAvIAGA8IAUANQAsAfAiAoQAkAtAVAwQAWA1AIA3QAIAxgHA6QgGA5gUAsQgXAygdAdIgTAUQgLAJgJADIAaAmIAdA0QAZAqAHAQQAOAcALAoQAJAiAHAqIAGAnQADAXAAAUQgCAwgJAnQgKAogVApQgLAVgMASQAWAZAHALQAfAsAPAzQAQAxACA6QADA6gMA2QgMA3gXAyQgUArglAwQgcAlgwApQgrAkgtAZQgnAWg5AUQgvARg3AGQgyAFg2gHQgqgFg0gXQgHgDgJgGQAKASAGAUQAQA1gBA0QgCA1gPA4QgOA0gZA2QgUAsgzAwQgnAmg8AeQg2Acg8AKQg6AKg5gDQg+gEgygLQgvgLg1gfQgLgGgjgaIgFASQgNAqgcAsQgYAmgqAqQgfAgg1AjQgqAag4AXQgsAShAAKQgmAFgsAAIgfAAg");
	this.shape_42.setTransform(-269.0868,-203.2062);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(51,255,255,0.498)").s().p("An7aXQgwgChAgSQg8gRgvgdQgygegogsQgZgagXglQgig3gNguQgVhEgBgkQgBggADgTQAEgbANgPQAZgeAJgmIAFgVQABgJgFgFQgGgGgogTQgdgNgLgHQgagOgPgPQgQgQgPgaQgKgRgPgfQgQgiAEhSQADg+ASgyIAMgiQgFgGgBgPQgQhBAThJIAJgfQg/gUg0gdQglgUg3g5Qgrgrgfg3Qgig7gMgxQgNgygChAQgCg3AKg4QAIgmAZhBQAWg1AXgpQAZgrAigpQAbgjApgnQAighAsgdQAdgTA5gdQAygaAngPQApgPA6gIQAhgEAUABIAYgWQApgkA0gMIA2gIQgCgDgCgLQgIgjALgoIARhDIAGgcQADgPAIgJQAIgKACgLQACgIAAgQQgBgKgMgMQgRgPgDgFQgRgfgHgoIgJguQgGgdAAgTQAAgvAUg5QAXhBAZghQAkguAmgfQAegYA9ghQApgWBEgFQA8gGAyALQAmAIAOAFQAcAIATANQArAfAhAwQALAQABAIQAIgMAGgQQAGgSAEgGQALgRATgVIAkgnQAmgpAqgdQArgdA3gaQA0gXA4gNQAygMA+gDQA2gDA8AJQA4AIA3ATQAzARA0AfQA1AfAoAjQAoAiAmAxQAhArAaA0QAUApAQA/IAYBiQAKAoAIA0IAFA8IAUAOQAtAfAgAoQAmAuAUAvQAVA1AIA2QAIAxgHA7QgHA4gTAsQgYA0gcAcIgTAUQgLAJgJADIAaAnIAdA0QAVAlAKAWQAPAfAJAmQAKAnAFAlQAKA2gCAdQgBAugLAoQgKAqgWAnQgLAWgMAQQAVAZAIALQAdAqARA1QAPAxABA7QADA4gNA3QgMA2gXAzQgUApgnAyQgdAmgvAnQgtAlgsAXQgpAXg3ASQgpAPg9AHQg0AFg0gHQgpgGg0gXIgRgJQALATAFATQAQA2gCAzQgCA2gPA3QgPA1gZA0QgWAtgyAvQgmAkg9AfQg3Acg7AKQg/AJg0gDQg+gEgygLQgtgLg4gfIguggIgGARQgMArgeArQgXAjgrAtQghAhg0AhQgsAbg2AVQgrAShBAKQgmAFgsAAIgfgBg");
	this.shape_43.setTransform(-266.9202,-201.4796);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(51,255,255,0.498)").s().p("AoGaUQgxgChAgTQg9gTgtgcQgygfgogrQgagcgVgkQghg0gOgwQgVhHgBgiQgBgfAEgUQAEgaANgQQAZgeAJglIAFgVQABgKgFgFQgHgHgngSQg6gcgWgWQgagagdhAQgQgiAFhSQADg8ATg0IALghQgCgEgBgGIgCgLQgQhCAThIIAKghQg/gVg0gdQgYgNgZgXQgOgNgdgeQgpgrgfg2Qggg6gNgzQgNgygBhAQgCgzALg8QAIgoAag/QAVgzAZgqQAXgmAkgtQAfgmAmgjQAiggAtgdQAhgVA1gbQA3gbAjgNQArgPA4gHQAbgEAZACQANgNALgJQAqgkA0gMQAKgCAQgCIAcgDQgCgDgDgLQgIgkALgnIAQhDIAGgcQAEgQAHgJQAIgKADgLQACgJgBgPQAAgLgMgMQgRgQgDgFQgQgggGgnIgIguQgGgeABgTQABgwAUg4QAahCAYgfQAjgsAogfQAegYA+ggQAngVBGgFQA7gFAzALIA0AOQAcAJASANQArAeAgAyQAKARABAHQAJgMAFgQQAGgSAFgHQAKgRAUgVIAjgmQAlgoAsgeQAqgcA4gaQAwgWA7gOQA1gMA7gDQA4gDA6AKQA5AIA2ATQA1ASAyAeQA1AgAoAjQArAmAiAtQAjAsAYA0QAVAqAPA9IAXBiQAKAlAIA3IAFA8IAUAOQAuAiAfAmQAlAtATAwQAWA0AIA3QAHAxgHA7QgGA4gUAsQgXA0gdAcIgTAUQgLAJgIADIAZAoIAdA1QAWAnAJAUQAPAhAJAlQAHAiAHAqQAIA3gBAcQgCAtgLAqQgLAogWAoQgNAYgLAOIAcAkQAdApAQA2QAPAwABA8QACA4gNA3QgNA4gYAwQgUArgmAwQgdAkgwAoQgqAigvAZQgnAVg6AUQgsAPg6AGQgyAFg2gIQgqgHgzgWQgHgDgKgHQAKATAGATQAPA2gCAzQgCAygQA7QgPA1gaA0QgVAsgzAvQgnAkg9AeQg1Abg9AKQg7AJg4gDQg7gDg1gMQgsgKg5ggQgNgIghgYIgFARQgQAsgcAqQgaAlgqAqQghAhg0AgQgmAYg8AYQgtASg/AJQgjAEgsAAIgiAAg");
	this.shape_44.setTransform(-264.7321,-199.7763);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(51,255,255,0.498)").s().p("AoRaQQgvgChBgUQg4gQgygeQg0ghgmgqQgXgZgYgnQggg1gPgwQgUhFgBgjQgBggAEgTQAEgaANgQQAZgeAJglIAFgWQABgJgFgFQgHgIgngSQg4gbgXgYQgYgZgehCQgQgiAGhRQAEg8ASg0IAMghQgCgDgBgHIgCgLQgPhBAShIQAFgTAGgRQhAgWgzgdQgYgNgYgWQgQgPgbgdQgqgtgdg1Qggg6gMg0QgMg0gBg8QgBg2AMg6QAIglAbhBQAXg3AYgmQAVgkAngvQAbggAqgoQAmgiApgaQAagQA8geQA0gaAmgNQAtgQA2gGQAdgDAYABIAYgVQAqgkAzgLQALgDAQgBIAbgDQgCgDgCgLQgIgkAKgnIAQhDIAGgdQAEgQAHgJQAIgLACgLQACgIAAgQQAAgLgNgNQgPgQgDgGQgQghgEgnQgCgOgGggQgFgdABgUQACgwAVg3QAYg/AbghQAlgsAngfQAcgVBAghQApgUBFgFQA8gEAyAMIAzAOQAcAKATANQArAhAeAwQALASAAAGQAJgMAFgQQAGgSAFgGQAKgRAUgVIAjgmQAmgpArgdQArgdA3gZQA0gXA4gMQA0gMA8gDQA0gCA9AJQA6AJA1ASQA2AUAxAdQA1AgAoAjQArAnAiAtQAiAtAYAzQAUAqAQA9IAWBiQALAuAGAvIAFA8IAUAOQAtAhAgAmQAlAwATAuQAVAyAIA5QAHAxgHA7QgGA5gUArQgXAygdAeIgTAUQgLAJgIADIAZApIAdA1QAVAoAJAUQAOAeAJAoQAIAhAFAsQAIA1gCAeQgDAvgLAoQgKAmgYApQgLAUgNASIAcAkQAdAsAPA0QAOAxABA6QABA5gNA2QgOA4gXAwQgUAogoAyQgcAjgxAoQgqAigwAZQgqAVg2ASQgtAPg5AGQg0AEg0gIQgrgHgygWQgIgEgKgHQAKATAGAUQAQA3gDAyQgDA0gRA5QgPAzgaA1QgVArg0AvQgpAlg7AdQg6Acg5AIQg6AJg5gDQg7gDg1gNQgvgLg2gfQgJgFgkgbIgHARQgPAqgeAsQgZAjgrArQggAgg1AhQgnAYg7AXQgsAShBAIQgjAFgrAAIgjgBg");
	this.shape_45.setTransform(-262.5548,-198.0413);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(51,255,255,0.498)").s().p("AocaNQgvgDhBgTQg7gSgvgeQg0gggmgrQgYgbgWglQghg1gNgwQgLgjgDgRQgHgdAAgXQgBghADgSQAFgbANgPQAagfAIglIAFgVQABgJgFgFQgHgIgngTIgmgVQgZgPgPgPQgYgagdhBQgQgjAHhRQAEg8ATgzIAMghQgEgFgBgQQgPhCAThHQAFgUAGgSIgBAAQg+gWg0geQgXgOgZgXQgNgMgdgfQgpgtgdg2Qggg9gLgxQgMgzAAg9QAAg3AMg5QAKgqAag8QAWgyAagqQAXglAlgtQAfgkAngjQAmghAqgaQAggUA3gaQAxgYApgOQAsgPA3gFQAegEAWACIAYgVQAqgkA0gKQAKgDAQgBIAbgDIgEgOQgIgkAKgnIAQhDIAGgdQADgQAHgKQAIgKADgMQABgIAAgRQAAgKgMgOQgPgRgDgGQgOgigEgmIgHguQgEgdABgUQACgwAWg3QAZg/AbggQAlgrAogfQAdgVBAggQArgUBDgDQA+gEAvANIA0APQAcAJASAOQApAgAfAyQALARAAAHQAJgMAFgQQAGgSAEgGQALgRATgVIAkgmQAkgnAtgfQAsgdA2gYQAygXA6gMQA1gMA7gDQA1gCA8AKQA6AJA1ASQAzASA0AgQA1AgAnAjQAqAlAjAvQAgAqAaA2QAUAqAPA+IAWBiQAKAoAHA0IAEA8IAUAOQAuAiAeAmQAmAwASAuQAWA0AHA4QAHAugHA9QgGA2gUAuQgYA0gcAcIgTAUQgLAJgJADIAaAqIAcA2QAWApAIATQAOAhAJAmQAIAkAEApQAIA4gDAbQgEAzgLAkQgLAngYAoQgNAXgMAOIAdAlQAcArAPA1QANAwABA7QABA4gOA3QgNA1gZAyQgTAngqAzQgcAjgyAnQgqAhgwAZQgoAUg5ATQgrAOg7AFQgyAFg1gJQgsgIgxgWQgIgDgKgIQAKAUAGAUQAPA4gEAxQgDA0gRA4QgQA1gaAzQgWArg0AuQgoAjg8AdQg4Abg7AJQg7AJg3gDQg8gDg1gNQgwgMg1geIguggIgGARQgSAsgdApQgYAigsAsQgiAhg0AfQgqAag4AVQguASg/AIQgfAEgnAAIgrgBg");
	this.shape_46.setTransform(-260.3726,-196.3311);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(51,255,255,0.498)").s().p("AonaKQgygDg+gUQg5gRgxgfQgxgfgogsQgagegUgiQggg2gOgwQgUhEAAgkQgBggADgTQAFgaANgQQAZgeAJglIAEgWQACgJgEgGQgHgGgngVQg4gcgXgYQgZgbgbhAQgOgkAGhPQAFg7ATg0IANggQgDgEgBgGIgBgMQgPg/AShJQAGgWAIgTIgEgBQg/gXgxgeQgYgOgXgXQgQgOgbgeQgngrgdg4Qgfg8gLgyQgLgwABhAQAAg5AMg3QAKgoAbg9QAYg1AZgnQAYglAlgsQAcggArgmQAogjAogXQAcgRA7gcQAvgWAsgPQAqgPA5gFQAagDAZACIAYgVQAsgjAygLIAbgDIAbgDIgFgOQgIgjAKgoIAQhDIAGgdQADgRAHgJQAIgLACgMQACgJAAgQQABgLgMgOQgPgRgDgHQgNgigEgmIgGgvQgDgdAAgUQAEgxAXg1QAag/AbggQAkgpArgfQAdgWBAgeQAqgTBEgDQA8gDAxAOQAmAKANAFQAcAKASAOQApAhAeAxQAKARABAHQAJgLAFgQQAGgSAEgHQAKgQAUgVIAkgmQAmgpAqgcQAtgeA1gYQA0gWA4gMQAzgMA+gCQA1gCA8AJQA8ALAzASQAxARA1AgQA0AgAoAkQAqAmAjAuQAfAqAaA2QAVAqAOA+IAWBiQAKAqAGAzQACAOACAuIAUAOQAvAjAdAlQAkAuATAwQAWA1AHA3QAHAugHA9QgHA5gUArQgWAygdAeIgTAUQgLAKgJADIAZAqQAGAIAXAvQAUAmAKAXQAOAkAHAjQAIApAEAlIAEAoQACAXgDATQgDAwgNAoQgLAmgZAoQgNAWgMAPIAcAlQAcArAOA1QANAuABA9QAAA6gPA1QgNA2gZAxQgVApgpAwQgdAjgyAmQgqAhgwAYQgmATg7ATQgtAPg5AEQgwAEg3gJQgqgHgzgXQgIgEgKgHQAKASAFAVQAPA3gEAyQgEA4gRA0QgPAxgcA2QgVAqg1AvQgpAjg7AcQg6Abg5AIQg7AJg4gDQg8gDg0gNQgxgMg1geIguggIgHARQgRArgeApQgbAlgrApQggAgg1AgQgnAXg8AXQgtARhAAIQgfAEglAAIgtgBg");
	this.shape_47.setTransform(-258.2,-194.6029);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(51,255,255,0.498)").s().p("AozaGQgvgDhBgVQg6gSgvgeQgygggngsQgXgagXgmQgfg0gPgxQgThHgBgiQAAggADgTQAFgaANgQQAZgfAJgkIAFgWQABgJgFgGQgGgHgngUIgngWQgYgPgOgQQgYgagchCQgOgiAHhRQAGg8ATgyIANggQgDgEAAgGIgCgLQgPhAAThIQAGgXAIgUIgEgCQhAgYgwgeQgXgOgYgXQgPgOgageQgpgtgbg3Qgeg7gLgzQgKgyABg+QAAg0AOg8QAKgqAcg6QAXg1AagmQAYglAmgsQAfgjApgjQAkgfAsgaQAggTA3gZQAzgXAogNQAogOA7gFQAcgCAXACIAZgVQAqgjA0gKIAagEIAbgCIgEgOQgJgkAKgnIAQhEIAGgdQADgRAHgKQAHgLADgMQACgIAAgRQABgLgMgOQgOgSgDgHQgNgngCgiIgFgvQgEgdACgUQAEgxAYg1QAbg+AbgfQAlgqAqgeQAfgWBAgdQApgSBFgCQA+gCAvAOQAkAKAPAGQAbAKASAOQApAiAdAyQAKARABAHQAIgLAGgRQAFgSAEgGQALgRATgVIAkgmQAngpAqgcQAugdA0gYQAxgVA7gNQA0gMA8gBQAzgCA/AKQA4AJA2ATQA0ATAzAfQA0AgAnAkQAnAjAlAxQAiAsAYA1QAUApAOA/IAWBiQAKAtAFAwIAEA8IAUAOQAvAkAcAlQAkAuAUAwQAUAzAIA5QAHAvgIA8QgGA5gUArQgYAzgcAdIgTAUQgLAKgIADIAZArIAcA3QAWAsAHASQAOAhAHAnQAIAsADAhIAEApQABAXgCATQgFAxgMAnQgOApgXAlQgOAWgMAOQAXAeAEAHQAcArAOA1QAMAuAAA+QgBA5gOA1QgPA4gZAvQgSAlgrAzQgfAkgxAlQgrAhgvAXQgqATg4ASQgsANg6AFQgxADg2gJQgpgHgzgYQgJgDgKgIQAKATAFAVQAOA5gEAwQgEA1gSA3QgQAzgcA0QgWAqg1AtQgmAhg+AeQg5Aag6AIQg8AJg3gDQg9gEgzgMQgugMg4gfIguggIgHARQgSArgfApQgdAmgpAnQggAfg2AgQgnAYg8AWQgsARhBAIQgeADgkAAIgvgBg");
	this.shape_48.setTransform(-255.9354,-192.8986);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(51,255,255,0.498)").s().p("ApCaCQgvgDhAgUQg8gUgtgdQgzghgmgrQgZgdgVgkQggg4gNgtQgKgkgDgQQgGgeAAgXQgBggAEgSQAEgbANgQQAageAIglIAFgWQABgJgEgGQgIgIgmgUQg3gegVgXQgYgbgahBQgPgkAJhPQAFg6AUgzIANghQgEgFgBgQQgOhAAThHQAGgZAJgXIgGgCQg8gWg0ghQgXgOgXgXQgQgPgZgeQgmgsgcg4Qgeg8gJgyQgKg2ABg7QACg3AOg4QAJgkAehAQAXgxAbgpQAbgoAkgoQAfgiApgjQAmgfArgZQAagPA+gcQAxgVApgOQApgNA6gEQAegDAWADIAYgVQArgiAzgLIA1gFIgEgOQgJgjAKgoIAPhEIAGgeQAEgQAGgKQAHgLADgNIADgaQAAgLgLgPQgOgSgCgHQgNgkgCgmQAAgPgEgfQgDgdACgUQAFgxAZg1QAcg+AcgeQAlgqAqgdQAggWA/gbQAqgTBFgBQA9gBAvAPIAzAQQAbALARAOQAqAiAcAyQAKARAAAIQAJgMAFgQQAGgSAEgGQALgRATgVIAkglQAkgoAtgdQAsgdA2gYQAxgVA7gNQA1gLA7gCQA1gCA9ALQA+ALAwASQAxASA1AgQA1AhAmAjQArAnAhAtQAiAuAXAzQAUArAOA9IAVBjQAJAoAGA1IAEA8IATAOQAvAjAdAmQAkAuATAwQAUAzAIA5QAHAygIA5QgHA5gUArQgVAxgeAfIgTAUQgLAKgIADIAZAsIAcA4QATAoAJAWQANAgAHApQAGAfAFAvIADApQABAWgDAUQgFAxgNAmQgOAogYAmQgNAVgNAPIAbAlQAbAtAOAzQAMAwgBA8QAAA3gQA3QgPA2gZAwQgVAngqAwQgeAkgyAlQgrAggwAXQgnASg6ASQguANg4AEQgzADg0gJQgpgHgzgYQgJgEgLgIQAKATAFAWQAOA1gEA0QgFAzgSA4QgQAygdA1QgXAqg0AsQgqAjg7AbQg3AZg8AJQg5AIg6gDQg+gEgzgMQgwgMg2gfQgSgLgcgVIgHARQgSApggArQgaAigsAqQghAgg2AfQgpAYg6AVQguARg/AHQgbADggAAQgaAAgdgCg");
	this.shape_49.setTransform(-253.3658,-191.1647);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(51,255,255,0.498)").s().p("ApRZ/QgxgEg+gVQg8gUgtgdQgzgiglgrQgWgYgYgoQgfg2gNgwQgThFgBgjQAAghADgSQAEgaAOgQQAagfAIglIAFgWQABgJgEgGQgHgHgmgVQg1gdgXgaQgWgZgchDQgNgjAJhPQAGg5AUg0IAOggQgDgEgBgGIgBgLQgPg/AUhIQAHgbAKgXIgJgEQg+gYgxgfQgWgPgXgXQgPgPgageQgngvgag2Qgdg/gJgwQgJg0ACg8QACg2APg5QALgoAcg7QAZgyAbgoQAXgiApgtQAggjApggQAkgfAtgZQAegRA6gYQAtgUAtgPQAsgNA3gDQAcgCAYACQAKgKAOgKQArgjAzgJIA1gFIgFgOQgHgjAIgpIAQhEIAFgdQAEgRAGgKQAHgMADgNIADgaQAAgLgKgPQgNgTgDgHQgMglgBglIgEgvQgCgdACgUQAHgxAZg0QAdg9AbgfQApgrAogaQAggVBAgcQAogRBHgBQA9AAAvAPQAiALARAGQAaALARAPQApAjAbAyQAKAQABAIQAJgLAFgQQAGgSAEgHQAKgRATgUIAkgmQAngpAqgbQArgcA4gZQAygVA6gMQAzgLA9gCQA2gBA7AKQA2AJA5AUQA1AVAxAeQAxAeAqAnQAqAmAhAuQAgArAZA2QAUAsANA8IAVBjQALAxADAsQADAUABAoIAUAOQAtAkAdAmQAjAtAUAxQAUA0AHA4QAHAwgIA7QgHA5gUArQgVAxgeAfIgTAUQgKAKgJADIAZAtIAbA4QAUAoAIAXQAOAiAGAoQAGAkAEAqQAEA3gDAcQgHAwgNAnQgNAlgaAoQgNAVgOAPQATAXAIAOQAbAtANA0QAMAugBA9QgBA6gQA0QgQA4gaAuQgVAogqAvQgfAkgxAjQgqAfgyAXQgkASg9ASQgvANg3ADQgwADg2gKQgpgHg0gYQgJgEgLgJQAKAUAFAWQANA2gEAzQgGA1gSA2QgSA0gbAyQgXApg2AtQgnAhg/AcQg3AYg6AJQg6AIg5gDQg/gEgzgNQgtgLg4ggQgQgJgfgXIgIARQgSAqghApQgbAkgsAoQgfAfg3AgQgpAXg7AWQgsAQhCAHQgaADggAAQgaAAgdgCg");
	this.shape_50.setTransform(-250.8001,-189.4331);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(51,255,255,0.498)").s().p("ApfZ7QgvgDhBgWQg7gTgtgeQgxgggngtQgXgagWgnQggg2gNgwIgNg0QgGgeAAgWQAAghADgSQAFgaANgQQAagfAIglIAFgVQABgKgEgGQgGgIgngVIglgWQgYgQgOgRQgXgbgZhBQgOgjAKhQQAHg6AUgyIANgfQgCgEgBgGIgBgLQgPg/AUhIQAIgeAMgaQgHgBgIgDQg9gZgwggQgWgPgXgXQgPgQgYgeQgngwgZg1Qgbg8gJgzQgIgwAChAQADg3AQg4QAKgkAfg+QAZgzAbgmQAZgjAogrQAdgeAtgkQAlgeAsgYQAbgPA9gaQA2gWAlgKQArgNA3gDQAdgBAXACQAKgKAOgKQAtgjAwgIIA1gFIgEgOQgIgkAJgnIAPhFIAFgeQAEgQAGgLQAHgMADgNQACgJABgRQAAgLgKgQQgNgTgCgIQgLgkgBgnQAAgOgCggQgCgeADgTQAGgvAag2QAfg/AcgcQAngpAqgbQAggVBAgaQArgSBEABQA/ABAtAPQAkAMAOAGQAaALASAPQApAkAaAxQAKASAAAHQAJgLAFgRQAGgSAEgGQAKgRAUgUIAkgmQAlgnAsgdQAugeA1gWQAygVA6gMQA2gLA6gCQA2AAA7AKQA3AJA3AUQA0AUAyAgQAxAeApAmQApAmAjAvQAhAtAXA0QASApAPA/IAVBjQAJAtAFAwIADA8IATAPQAuAjAdAnQAjAvATAvQAUA0AHA4QAHAwgIA7QgHA3gUAtQgXAygdAfIgTATQgKALgJADIAaAtIAbA5QAQAjALAdQANAjAGAnQAHApACAlIACAoQAAAYgDAUQgGAxgOAlQgNAlgbAoQgMAUgPAQIAbAlQAaArANA2QALAwgCA7QgBA4gQA2QgQA2gaAvQgVAlgrAxQgeAigzAlQgtAggvAVQgoATg6AQQgtAMg5AEQgyADg0gLQgogHg0gZQgJgEgMgJQAKAVAFAVQANA2gFAzQgGA1gTA2QgRAwgdA2QgXAog2AtQgpAhg9AbQg2AYg8AIQg7AJg4gEQg/gEgygNQgwgLg2ggQgRgKgfgXIgIARQgSAqghApQgcAkgsAoQgjAgg0AeQgpAXg7AVQgsAQhBAHQgaADgcAAQgdAAgegDg");
	this.shape_51.setTransform(-248.2289,-187.7262);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(51,255,255,0.498)").s().p("ApuZ4QgtgEhCgWQg4gSgwggQgxghgngsQgYgdgVgkQgfg3gNgvQgThFAAgjQAAghADgSQAFgaANgQQAagfAIglIAFgWQABgKgEgFQgGgIgmgWQg1gegWgaQgWgagZhCQgIgWAAgiQAAgVAFglQAHg6AVgyIAOgfQgDgEAAgGIgCgLQgNg/AThHQAJgiAOgcQgJAAgLgFQg8gZgwghQgWgPgWgYQgOgPgZgeQglgugZg5Qgbg9gIgyQgIg0AEg8QAEg3AQg2QALgnAgg7QAZgwAcgoQAagkAogpQAegeAsgjQApgfAqgVQAbgOA9gZQAxgUApgMQAqgMA4gCQAagCAZADIAZgUQArghAygJIAagDIAagBIgEgOQgIgkAJgoIAOhEIAGgfQADgRAGgLQAHgMADgNIADgaQABgLgKgRQgNgTgCgIQgKgoAAgjIgCgvQgBgeADgTQAHguAbg2QAgg+AcgcQAngoArgcQAhgUBAgaQArgRBEACQA7ABAwAQQAkAMAOAHQAaALARAPQApAkAaAyQAJARABAIQAJgLAFgRQAFgSAEgGQALgRATgUIAkgmQAlgnAtgdQAtgdA1gWQAxgVA7gMQA0gLA9gBQA3gBA6ALQA4AKA2AUQAyATAzAgQAyAfApAmQAnAlAjAwQAfAqAZA3QASApAPBAIAUBiQAJAqAFA0QABANABAvIAUAPQAtAjAdAnQAkAuASAwQATAyAIA6QAGAxgHA6QgIA5gTArQgXAygdAfIgTAUQgKAKgJADIAZAuIAOAcIANAeQAVAuAGASQANAjAFAoQAGAkACAqIACApQAAAXgDAUQgHAxgPAmQgPAogZAkQgNATgPAQQARAXAJAPQAaAsAMA1QALAvgCA8QgDA6gQAzQgRA3gaAuQgWAogqAuQggAigyAjQgpAegzAXQgmARg8ARQgsAMg6ADQgwADg2gLQgrgJgxgYQgJgEgMgJQAKAVAFAWQAMA2gFAyQgGA0gUA3QgRAwgeA1QgYApg2ArQgmAfg/AcQg4AYg7AIQg7AIg4gEQg6gDg3gNQgvgMg3ggQgMgHgkgZIgIARQgTApghApQgcAjgsAoQgkAhg0AdQgpAXg7AVQgrAPhCAHQgYACgaAAQgeAAgigCg");
	this.shape_52.setTransform(-245.6833,-186.0196);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(51,255,255,0.498)").s().p("Ap9Z0QgsgEhDgWQg6gUgtgfQgxgfgnguQgXgbgWgmQgeg2gNgwQgThHAAgiQAAggADgSQAFgbANgPQAagfAJglQAEgSAAgEQACgKgFgGQgHgIglgWQgzgdgWgbQgYgdgXhAQgMgkAKhOQAIg3AVg0IAOgfQgCgEgBgGIgBgLQgOg/AUhGQAKgkAPgdIgEgIQgMgBgNgGQg4gYgygjQgVgPgWgYQgOgQgXgeQglgxgXg2QgZg7gHg0QgHgzAFg9QAFg3ARg2QAKghAihAQAbgwAdgmQAagjApgoQAkgiAngdQAkgbAvgYQAfgPA5gVQAtgSAtgMQAngLA7gCQAcgBAWAEIAYgUQAsghAxgJIA0gDQgCgFgCgJQgJgkAIgoIAOhFIAGgeQADgSAGgLQAHgMADgNIADgcQABgLgKgRQgLgUgCgIQgKglABgnIgBgvQAAgdADgTQAIgvAbg1QAgg9AdgcQApgpArgZQAhgVBAgYQAqgQBEACQA8ACAwARQAlANAMAGQAaAMARAPQApAkAZAyQAJAUABAFQAJgLAFgQQAFgTAEgGQAKgQAUgVIAkglQAngpArgbQAtgdA1gWQAygVA6gMQA1gKA8gBQAzgBA+ALQA6ALAzATQAyATA0AhQAyAhAoAkQAqAoAgAuQAgAsAYA1QASAoAOBBIAUBiQAIAqAFA0IACA8IAUAPQAuAkAcAmQAkAwARAvQATAyAIA6QAGAygIA5QgHA5gUArQgWAwgdAhIgTAUQgLAKgIADIAZAvIAaA6QAUAtAHAUQAMAkAFAnQAGApABAmQACA4gEAcQgIAugPAoQgPAngaAlQgOAUgOAPQASAYAIAOQAaAtALA0QAKAwgCA7QgDA5gRA0QgQA2gbAvQgXAngrAuQgdAgg1AlQgtAfgvAVQgqARg4APQguAMg4ADQgxACg2gLQgogIgzgZQgKgEgMgKQAKAVAFAXQAMA4gGAwQgHA2gUA0QgUA2gcAvQgYAog2ArQgqAhg8AZQg4AYg6AIQg8AHg3gDQg7gDg2gOQgtgLg6ggQgWgNgagUIgIARQgUAogiAqQgfAngpAkQgkAgg0AdQgtAYg4ATQgvARg+AFQgXACgaAAQgeAAgjgDg");
	this.shape_53.setTransform(-243.1424,-184.2875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(51,255,255,0.498)").s().p("AqKZxQgvgEhAgWQg7gVgsgeQgygjgmgrQgXgdgVglQgfg2gMgwQgShFAAgjQAAghADgSQAFgaANgQQAZgeAJgmIAFgWQABgKgEgFQgHgJglgWQg1gggUgZQgWgcgXhBQgNgjAMhOQAIg5AWgwIAOgfQgCgEgBgGIgBgLQgOg/AUhFQAKgkARgeQgNgTgEgLQgLgBgNgFQg6gbgtgiQgjgbgrg7QgigugWg5QgYg9gFgxQgGgzAHg9QAHg4ASg0QAOgnAhg3QAagtAfgoQAaggArgoQAggdAsgfQAmgbAtgVQAVgJBDgZQAygSAogJQAsgLA0AAQAaAAAYAEQAQgOAIgGQArghAxgHIAZgCIAagBIgEgOQgJgjAHgpIANhFIAGgfQADgSAGgLQAKgTADgjQABgLgKgRQgLgUgBgJQgJgnABglIAAgvQAAgeAEgTQAIgvAdg0QAgg8AegcQApgoArgaQAggSBCgZQArgQBEADQA7ADAwARIAwATQAbANARAPQApAmAYAxQAIATABAGQAJgLAFgQQAFgSAEgHQALgQATgVIAkglQAngoArgbQArgcA4gXQAxgVA7gMQA2gKA6gBQA2AAA7ALQA8ALAyAUQAxASA0AiQA0AiAmAkQAoAmAiAvQAgAtAXA1QASAoAOBAIATBjQAJAsAEAyIACA8IATAPQAwAmAaAlQAkAwARAvQAUA2AHA1QAFAvgHA9QgHA3gVAtQgWAwgdAgQgbAdgLAFIAZAvIAaA7QARAmAJAcQAMAkAFAnQAFAnABApQACA2gGAeQgHAtgQApQgQAngaAkQgOATgPAQIAaAlQAYAsAMA2QAKAwgDA7QgDA6gRAzQgRAzgcAxQgWAmgsAuQggAigyAjQgsAegxAVQgmAQg8AQQgwAMg2ABQgvACg3gLQgpgIgzgZQgKgFgNgLQAKAWAFAXQAMA4gHAxQgGA0gVA2QgTAygeAyQgXAng4ArQgpAgg9AaQg6AXg4AIQg+AHg1gEQg8gEg2gNQgtgLg5ghQgVgMgbgVIgJARQgUApgiApQgdAjgsAnQgjAgg1AdQgtAYg4ATQgtAQhAAFQgVACgYAAQggAAglgDg");
	this.shape_54.setTransform(-240.6097,-182.5547);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(51,255,255,0.498)").s().p("AqXZuQgxgEg+gXQg6gUgtgfQgwghgnguQgYgcgUglQgfg2gMgwIgMg0QgGgeAAgXQAAggAEgSQAFgaANgQQAZgdAJgmIAFgWQABgKgFgGQgGgIglgWQgwgbgYgdQgXgcgVhAQgNglAOhLQAJg4AXguIAOgeQgCgEgBgGIgBgKQgOg7AUhEQAKglATgfQgJgNgIgQQgSghgCgSQgNgCgLgFQg1gXgtgkQgkgdgmg4QgfgtgVg5QgVg8gEgxQgEguAJhBQAIg1AVg0QANgjAlg5QAggwAcghQAbggAsgkQAdgZAwggQAmgZAugTQAPgGBIgYQAzgPAmgJQAngJA4ABQAYABAYAEIAYgTQAtghAtgGIAZgCIAagBQgDgFgCgJQgJgiAGgpIAMhFIAFggQADgRAGgMQAHgNADgOQACgJABgTQABgLgIgSQgLgVgCgIQgIgpADgkQABgPgBggQABgdAEgUQAJgwAdgyQAig9AdgbQArgoAqgYQAggSBCgYQAsgPBDADQA8AEAvARQAiANAOAHQAbANAQAPQAoAlAYAzQAJAUAAAFQAJgLAFgQQAGgSAEgHQAKgQAUgVIAkglQAkgmAugdQAugdA1gWQAvgTA9gNQA0gJA8gBQAzgBA+AMQA4AKA1AVQA1AVAwAgQAyAgAoAlQAnAmAjAwQAfAtAYA1QATArAMA+IATBjQAJAsAEAxIABA9IAUAPQAuAmAbAlQAiAuATAxQATA0AHA4QAGAugIA9QgJA6gTAqQgWAxgdAgIgTAUQgLAKgIAEIAZAvIAaA8QAUAzAFAQQAMAlAEAmQAEAmABApQABA3gFAfQgJAugQAnQgRAogaAjQgMARgRARIAZAmQAYAtAMA1QAJAugDA9QgEA5gRA0QgSA1gcAuQgWAmgsAuQghAjgyAgQguAfgvAUQgrARg4AOQguALg4ACQgxABg1gLQgpgJgygZQgLgFgNgLQAKAWAFAYQAMA4gHAwQgHAygVA4QgTAxgfAyQgYAog4AqQgqAgg8AZQg4AWg6AIQg5AHg6gEQg8gEg1gNQgugMg5ggQgSgKgfgXIgIARQgWAqgiAnQgeAlgqAlQgkAgg1AdQgqAXg6AUQgvAQg/AFQgWABgYAAQggAAgkgDg");
	this.shape_55.setTransform(-238.058,-180.7668);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(51,255,255,0.498)").s().p("AqjZsQgwgFg/gWQg7gWgsgeQgwghgnguQgYgegUgkQgeg1gMgxQgRhCAAgmQAAghAEgSQAFgaANgPQAagcAJgmIAFgVQABgKgEgFQgHgIgkgSQgwgZgXgcQgWgagWg+QgMglAPhGQALg1AXgqIAPgbQgCgDgBgGIgCgJQgPg4AQg3QALglAIgSQAMgeATgSIgTgNQgcgXgRg+QgHgcABgPQgJgBgOgFQg0gUgpgiQgkgdgjg1QgfgwgRg0QgTg6gDgxQgCgtAKg/QAJgzAWg1QAPghAmg3QAggtAfghQAcgeAsgjQAfgYAvgdQAjgVAxgTQASgGBFgUQAwgOAogIQApgHA0ACQAWABAaAFQAJgJAOgKQAtggAsgGIAygBQgCgFgCgJQgLgjAHgoIALhGIAFgfQADgSAGgMQAJgTAEglQABgLgJgSQgKgVgBgJQgHgpACgkIACgvQABgeAEgTQAKguAdg0QAjg7AegcQAqgmAsgZQAggSBCgXQArgOBEAEQA8AEAvASIAwAUQAaANARAQQAoAmAXAyQAIASAAAHQAJgLAFgQQAGgSAEgHQAKgQAUgVIAkgkQAngoArgbQAsgcA3gXQAxgUA7gLQA4gKA4AAQA1gBA8AMQA6ALAzAVQAzAUAyAhQAxAfAoAnQApAmAhAwQAgAtAWA1QATAqANA+IASBkQAIAoAEA1QABAOAAAvIAUAPQArAjAeAoQAjAwARAvQAUA2AGA2QAGAvgIA8QgHA4gVAsQgWAxgdAgQgbAdgLAGQAQAdAJATQAFAKAUAzQASApAHAZQALAkAFApQAEAnAAAoQAAA3gGAeQgJAvgRAnQgQAmgbAkQgPAUgPAOIAZAmQAYArALA3QAJAwgEA7QgEA4gSA0QgTA3gbAsQgXAmgsAtQghAigzAhQguAegvATQgpARg6AOQgsALg6ABQgxACg1gMQgpgJgxgZQgMgGgOgLQALAXAFAYQALA3gIAxQgHAxgWA4QgSAwggAzQgZAog3ApQgqAgg9AYQg5AWg5AIQg6AGg5gDQg9gEg0gOQgtgLg5ghQgSgKgfgXIgJARQgVAogjApQggAlgpAkQgiAgg2AdQgoAWg8AWQgvAQg/AFQgUABgWAAQghAAgngDg");
	this.shape_56.setTransform(-235.4705,-178.921);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(51,255,255,0.498)").s().p("AqyZoQgvgEhAgXQg5gUguggQgwgigmguQgXgbgVgmQgdg3gMgwQgShDABglQAAggAEgSQAFgaANgPQAagdAJglIAFgVQABgKgEgFQgFgGgmgUQgugYgYgcQgXgbgTg9QgMgjAPhFQAMg2AXgnIAPgaQgEgFgBgMQgPg3AMgyIANg0QAKgeAOgRQAUgXAOgJIgMgDQgOgFgRgPQgbgYgKg5QgGgZACgQQgHAAgQgFQgzgTgpghQgigcgkg0QgegwgRgzQgTg9gCguQgCgxALg7QAKg1AWgyQAPgjAng0QAdgoAiglQAdgeAsghQAjgbAsgZQAmgWAugQQASgHAagHIArgLQAvgNApgIQAogHA1ADQATABAcAGQANgMAKgHQAsggAtgFIAYgBIAaAAQgDgFgCgJQgLgiAGgpIAMhGIAEggQADgSAGgMQAKgTADglQABgMgIgSQgKgWgBgIQgGgqADgkQACgPAAggQACgeAEgTQALguAegzQAig6AggcQApglAtgZQAkgTA/gVQArgOBEAFQA9AFAuASIAwAVQAaANAQAQQApAnAVAyQAIARAAAHQAJgLAFgQQAGgSAEgGQAKgRAUgUIAkglQAmgnAsgbQAugdA1gVQAygUA7gLQA1gKA7AAQA0AAA9ALQA5AMA0AUQAxAUAzAiQAyAfAnAnQAoAmAiAwQAfAuAXA0QASAsANA9IASBjQAIAsADAyIACA9IATAPQAuAnAaAlQAiAtASAyQAUA2AGA2QAFAzgIA4QgIA4gTAsQgXAxgdAgIgTAUQgKALgJAEIAZAxIAZA9QASAsAHAYQALAlADAnQAEAsAAAkQAAA3gHAeQgKAxgRAlQgQAlgcAlQgPATgPAOIAYAmQAYArAKA3QAJAvgFA8QgEA6gTAzQgSA1gdAtQgXAngsArQghAigzAgQgvAfgvASQgkAOg/AQQgtAKg5ABQgyABgzgMQgqgJgxgZQgMgGgOgMQALAXAFAZQAKA3gIAxQgIAygWA3QgTAwggAyQgYAmg4AqQgrAfg8AYQg4AWg6AHQg6AHg5gEQg9gEg0gOQgugLg5ghQgSgKgfgXIgJAQQgWAogjApQgfAlgqAkQgjAgg1AdQgpAWg8AVQguAQhAAFQgUABgVAAQgiAAgngEg");
	this.shape_57.setTransform(-232.8028,-177.1738);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(51,255,255,0.498)").s().p("ArBZlQgvgFhAgXQg6gVgtggQgwgigmgtQgWgbgVgnQgeg3gMgwIgLg0QgGgeABgWQABghADgRQAFgaAOgPQAZgdAJglIAFgVQACgJgEgFQgHgJgkgRQgugZgXgbQgXgcgTg8QgLgkAPhDQAMg0AYgnIAPgaQgCgDgBgFIgCgIQgPg0AJgyQAHglADgNQAHgcAMgRQAUgbAKgIQASgRAXAFQAXAFAKgBQALgBgPgDQgHgBgNgGQgLgEgMgBQgTgCgKgDQgNgFgPgPQgYgXgJg3QgDgZACgOQgGAAgRgFQg0gRgoghQgjgdgigzQgfgvgQgzQgSg/gCgtQgCguAMg9QAKg0AXgyQAOggApg3QAegpAigjQAegfArgfQAfgXAxgcQAogWAsgPQASgGAagGIArgLQAzgOAlgGQAngGA1ADQAOABAhAGIAXgSQAsgfAtgGQAJgBAPABIAZAAIgEgOQgLgiAGgpIALhGIAEghQADgSAGgMQAHgNADgPIAEgdQABgLgIgTQgJgWgBgJQgGgpAEglIADgvQACgeAFgTQALgvAfgyQAjg5AggcQAogkAvgZQAegQBFgXQArgNBEAGQA8AFAuATQAhANAPAIQAaANAQAQQAnAnAWAzQAIAUAAAFQAJgLAFgQQAGgSAEgHQAKgQAUgVIAkgkQAngnAsgbQAvgdA0gVQAxgUA7gLQA2gJA7AAQAzAAA9AMQA2AKA3AWQA0AWAwAgQAzAiAmAlQAnAmAiAwQAeArAYA3QASAsANA9IARBkQAIAtADAxQABANAAAvIATAPQAsAlAcAnQAiAvASAxQATA4AGA0QAFAvgHA8QgIA5gUArQgWAwgeAhIgTAUQgKALgIAEIAYAyQAJATAQArQARAqAHAaQAKAkAEApQADAjgBAtQgBA3gGAeQgKAugSAnQgSAngcAjQgOASgQAPIAYAmQAYAtAJA1QAJAxgGA6QgEA4gTA0QgTA0gdAuQgYAmgsAsQggAgg1AiQgvAdgvASQgmAPg9AOQguAKg4ABQgwABg1gMQgqgKgxgZQgLgGgQgNQAMAYAEAZQAKA4gIAwQgJAzgWA2QgVAxgfAwQgaAog3AnQgqAeg9AYQg5AWg5AHQg7AHg4gFQg9gEg0gNQgugMg5ghQgVgLgdgWIgJAQQgWAogjApQgkAogmAgQgkAgg1AdQgpAWg7AUQguAQhBAEQgTACgVAAQgjAAgmgEg");
	this.shape_58.setTransform(-230.1143,-175.4488);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(51,255,255,0.498)").s().p("ArQZhQgvgFhAgXQg6gWgsgfQgwgigmguQgXgcgUgmQgeg4gLgvQgRhGABgiQAAggAEgSQAFgaANgPQAagcAJgmIAFgVQABgKgEgFQgGgHgkgTQgugYgWgcQgWgcgTg8QgLgkARhDQAMgzAYgnIAQgZQgEgFgCgLQgPg1AIgvIAJgxQAHgcAKgQQASgcAIgIQASgSAVAEQAXADAKgEQAKgDgLgEIgQgIQgKgFgNgBQgSgCgJgDQgNgFgOgPQgXgYgGg2QgDgWADgPQgLgBgNgEQgygRgpghQgjgcgig0QgegugQg0QgSg8gCgvQgBgxAMg6QAKgyAYg0QAQgjAngzQAhgsAggfQAbgcAvgiQAggXAwgbQAlgVAvgPQAUgGBEgRQAogKAvgIQAlgGA3ADQAWACAZAGQAKgJANgJQAsgfAtgFIAYgBIAZAAQgCgFgCgJQgLgiAGgpIAKhHIAFggQADgTAGgMQAHgNADgPIAEgdQABgMgHgTQgJgWgBgJQgFgqAFglIADgvQADgdAFgUQAMgsAfg0QAmg6AegaQArgkAtgYQAjgSBBgTQAsgNBDAGQA9AGAsATQAiAPAOAHQAaAOAQAQQAoAoAUAyQAIAUAAAFQAKgLAEgQQAGgTADgGQALgQAUgVIAkgkQAngnAsgbQAsgbA3gWQAugTA/gMQAzgJA9AAQA2ABA6AMQA4ALA1AWQAzAUAxAiQAzAiAlAlQAnAmAiAwQAgAvAVA0QARAoAOBBIARBjQAHAqAEA0IAAA9IATAPQAsAkAcAoQAiAvASAxQASA0AGA4QAFAvgHA8QgIA4gUAsQgWAwgeAhIgTAVQgKAKgIAEQAQAfAIAUIAZA+QARAuAGAXQAKAmADAoQADAngBApQgBA1gIAhQgLAvgSAlQgRAlgdAlQgUAWgLAKQARAaAHANQAWArAKA3QAIAwgGA7QgFA5gTAzQgUA1gcAsQgXAkguAtQgiAhgzAgQgwAdgvASQgjANhAAPQgtAKg4AAQgyABg0gNQgpgJgxgaQgMgGgPgNIgBgBQALAYAFAbQAJA1gJAzQgIAygXA2QgTAsgiA1QgZAmg5AoQgpAdg+AYQg5AVg5AHQg7AHg4gFQg9gEgzgNQgtgMg8ghQgUgMgdgWIgKARQgWAngkApQgfAjgrAlQgmAhgzAbQgnAVg+AVQguAPhAAFIgjABQgkAAgrgFg");
	this.shape_59.setTransform(-227.508,-173.7167);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(51,255,255,0.498)").s().p("ArgZeQgxgGg9gXQg6gWgtggQgwgjglgtQgYgdgTglQgdg2gLgxQgRhFAAgjQABghAEgRQAFgaANgPQAagdAIglIAFgVQACgKgEgFQgHgIgjgTQgsgZgXgcQgWgdgRg7QgLgkARhCQANg0AYglIAQgZIgFgQQgQgyAIgwIAHgwQAGgbAKgRQAQgcAIgIQAPgSAVABQAWACAKgFQAKgFgIgFIgOgKQgIgGgNgBQgSgBgJgEQgLgGgOgPQgWgYgEg1QgCgaADgKQgJAAgOgFQgzgQgoghQgjgdghgzQgegvgQgzQgRg6gCgxQgBguANg9QALg0AXgxQAPggApg2QAegnAjgkQAcgbAvgiQAggWAwgaQApgWAsgOIBXgWQAwgLAogGQAngGA1AEIAuAIQALgKANgIQAsgfAsgFQAJgBAQABIAYAAIgEgOQgLgkAGgnIAKhHIAFghQADgTAGgMQAGgNAEgQIAEgdQACgMgHgTQgJgXAAgJQgEgsAEgjIAFgvQADgdAFgUQANgvAggwQAkg4AhgbQArgkAugXQAigRBCgTQAsgNBDAHQA8AHAsATQAjAQANAHQAaAOAQAQQAmAmAVA0QAIATAAAGQAJgLAFgQQAFgSAEgGQALgRAUgUIAkgkQAogoArgaQAtgcA2gVQAxgTA8gLQAzgJA9AAQA0ABA9AMQA7ANAxAUQAyAVAyAiQAxAgAnAnQAmAlAiAyQAgAuAVA0QASAsAMA9IARBkQAHAqAEA0QABAUgBApIATAPQAsAmAbAnQAiAwARAwQATA0AGA4QAFAwgIA7QgIA4gUAsQgWAvgeAiQgaAdgLAGIAYA0IAYA/QAPAnAIAeQAKAkADAqQACAqgBAnQgDA6gHAcQgMAugSAmQgUAngcAiQgOARgQAPIAXAnQAXAtAIA1QAHAxgFA6QgHA4gTAzQgUA1gdAsQgZAmgsArQghAgg1AgQgvAcgvASQgpAPg7AMQgrAKg6AAQguAAg3gMQgrgLgvgZQgMgGgPgNIgDgCQAMAZAEAbQAJA3gJAxQgKA1gXAzQgVAvghAyQgaAmg4AnQgrAdg9AXQg4AVg5AGQg7AHg4gFQg/gFgygNQgwgNg4ggQgVgMgdgWIgJARQgWAlgmAqQghAlgpAjQgjAeg2AdQgtAYg5ASQgsAPhCAEIgjACQgkAAgrgFg");
	this.shape_60.setTransform(-224.8247,-171.9917);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(51,255,255,0.498)").s().p("ArvZaQgwgGg/gYQg5gVgtghQgwgjglgtQgUgZgXgpQgdg4gLgvQgQhHABgiQAAgfAEgTQAFgZANgQQAZgbAKgnIAFgVQABgKgEgFQgGgIgjgUQgrgWgXgfQgVgcgSg8QgKgkAShBQANgzAZgmIAQgYQgEgFgCgLQgPgzAHguIAHgwQAGgaAJgRQAPgcAHgJQAPgSATABQAWAAAKgGQALgGgIgGQgEgDgHgHQgIgGgNgCQgRgCgIgEQgMgGgNgPQgUgYgDg0QgBgXADgMQgKgCgNgEQgygPgpgiQgjgdghgzQgegvgOgzQgSg8AAgvQgCgvAOg8QALgzAYgyQAQgiApgzQAfgpAighQAhgfAqgdQAhgXAwgaQAogUAtgOIAsgLIArgKQA1gMAjgFQApgGAzAFQASACAcAGIAXgSQAtgeAsgFQAJgBAPABIAZAAIgEgOQgLgjAFgoIALhHIAFghQADgTAGgNQAGgNADgQIAFgdQACgMgHgUQgIgXgBgJQgDgrAGgkIAFgvQADgdAGgUQAOgvAggwQAlg3AhgbQAtgkAsgWQAjgRBCgSQArgMBEAIQA+AHAqAUQAjAQANAHQAZAOAQAQQAnAoAUAzQAHASAAAHQAJgLAFgQQAGgSAEgGQAKgRAUgUIAlgkQAmgmAsgcQAtgbA3gVQAxgTA8gLQAwgIBAAAQA1AAA7ANQA6ANAzAVQAyAUAxAiQA0AkAkAkQAnAnAhAwQAfAuAWA1QARAqANA/IAQBjQAIAvACAwQABAUgBAoIATAQQArAlAcAoQAiAxAQAwQATA0AGA3QAEAygIA5QgIA5gUArQgWAxgdAhIgTAUQgLALgIAEQAQAgAIAUIAYBAQAQAqAGAcQAJAjADArQACAsgCAlQgDA2gIAgQgNAwgSAkQgTAngdAhQgPATgQANQAQAZAHAOQAVAtAJA2QAHAwgGA6QgGA4gVAzQgTAzgeAuQgYAkguAsQghAfg1AgQgvAcgwASQgrAPg4ALQgtAJg5AAQgwAAg1gNQgogJgygaQgLgGgQgOIgDgCQAMAaAEAbQAIA4gJAwQgKAygYA1QgXAyggAuQgYAlg6AoQgtAeg7AVQg7AVg3AFQg8AHg3gFQg/gFgxgNQgsgLg9giQgPgJgjgZIgKAQQgYAogkAnQgkAngnAhQglAfg1AbQgqAWg8AUQgtAOhBAEIgfABQgnAAgrgFg");
	this.shape_61.setTransform(-222.1765,-170.2821);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(51,255,255,0.498)").s().p("Ar/ZWQgvgGg/gYQg7gXgrgfQgxgkgjgtQgXgdgUgmQgcg2gMgxQgQhHABghQABggADgSQAFgaAOgPQAZgdAJglIAFgWQABgKgEgFQgHgJgigTQgqgYgXgfQgVgdgQg7QgKglAShAQAPg0AYgjIAQgYQgBgCgEgOQgPgxAGgvIAHgvQAFgaAIgRQARgeAFgHQAOgSATgBQAUAAALgIQALgGgHgGIgKgLQgHgHgNgCQgQgCgJgFQgLgGgMgQQgUgZgBgzQAAgWAEgMQgHAAgQgFQgzgQgoghQgigdghgzQgdgugPg0QgRg7AAgwQgBgvAOg8QALg0AZgxQAQgiApgyQAggpAighQAegcAugfQAlgZAsgXQApgVAsgNQASgFAagFIArgKQAvgKApgGQAngFA0AFQAOACAhAHQAQgNAHgFQAtgeArgFQAKgBAPABIAZABIgFgPQgLgiAFgpIALhIIAFghQADgTAGgNQAJgTAFgoQACgMgGgUQgHgYgBgJQgDgqAHglIAGgvQADgdAHgUQAPgwAgguQAmg3AhgaQAvglArgUQAjgQBCgSQAugMBBAJQA9AIArAUQAjAQAMAIQAaAOAPAQQAmAoAUAzQAHAVABAEQAJgKAFgQQAFgSAEgHQALgRATgUIAlgjQAogoArgaQAtgaA3gWQAzgTA6gKQAygJA+ABQA1ABA7ANQA7AMAxAWQAzAWAxAhQAyAjAlAlQAlAkAjAzQAdAsAXA3QARApAMBAIAQBkQAHAnADA3IgBA9IATAQQAsAlAbAoQAiAwAQAwQASAzAGA5QAFAygIA5QgIA2gVAuQgWAwgdAiIgTAUQgKALgIAEQAQAhAIAUIAXBAQAQAsAGAbQAJAoACAnQACAjgDAuQgEA4gIAeQgOAxgSAjQgSAkgfAkQgPARgRAOQAQAZAHAOQAWAuAHA1QAHAxgHA5QgHA5gUAyQgWA3gcApQgaAmgtAqQggAeg2AgQgvAcgxARQgnAOg8AMQgqAIg7AAQgxAAg0gNQgpgKgxgbQgMgGgPgNIgDgDQALAaAEAcQAIA3gKAxQgKAygZA1QgUAtgjAyQgaAmg5AmQgsAdg8AVQg5AUg5AGQg9AGg2gEQg7gFg2gOQgtgLg8giQgYgOgagUIgKAQQgWAlgnAqQgjAlgpAiQgnAhgzAZQgrAWg7ATQgsAOhCAEIgfABQgmAAgtgGg");
	this.shape_62.setTransform(-219.5449,-168.5267);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(51,255,255,0.498)").s().p("AsNZTQgugGhAgZQg5gWgtghQgxgkgjgtQgVgagWgoQgcg4gLgvQgQhFABgkQABggADgSQAFgaAOgPQAZgdAJglIAFgWQABgKgEgFQgHgJghgUQgrgZgVgeQgWgdgPg8QgJgkAThAQAOgyAZglIARgXQgEgFgCgLQgOgyAGguIAGguQAFgaAIgRQAPgdAFgIQANgSATgBQAUgCALgIQAKgHgFgGIgKgMQgGgHgNgCQgQgDgIgGQgKgGgMgQQgSgZAAgzQAAgUAEgNQgHgBgQgFQgxgOgpgjQgjgdgfgzQgegvgOgzQgQg8gBgvQAAgwAOg7QAMgxAZgzQAQghAqgzQAigqAggfQAggeAsgdQAhgWAxgZQAogTAtgOQASgFAagFIAsgJQAzgLAkgEQApgGAzAGQAUADAaAGIAXgRQAtgeAsgEQAJgBAPAAIAZABIgFgOQgLgjAFgpIALhIIAFghQADgUAGgNQAJgUAGgoQACgMgGgUQgHgYAAgJQgCgqAGgmQADgPAEggQAEgdAHgTQAPgtAigwQAmg2AigbQAqggAwgXQAjgQBDgRQAtgLBCAJQA7AIAsAVQAkARALAHQAaAOAPARQAnApASAyQAHATAAAGQAJgKAFgRQAGgSAEgGQAKgQAUgUIAlgkQAngnAsgaQAwgcA0gUQAzgTA6gKQAzgIA9ABQAzAAA9AOQA5AMAzAWQAxAVAyAiQAyAiAmAnQAnAnAgAwQAdAsAXA3QARAqAMA/IAQBkQAGApADA2IgBA8IATAQQArAmAbAoQAhAwARAxQASA0AFA3QAFAvgIA8QgIA3gVAtQgWAwgdAiQgbAegKAGQAQAhAIAUQAHARAQAwQAQAxAFAWQAIAkACAsQABAngDAqQgEA2gJAgQgNAugUAmQgWAogcAfQgNAPgTAQIAXAnQAUAtAIA2QAHAxgIA6QgIA6gUAwQgWA2gdAqQgZAkguArQggAdg3AgQgtAagyASQgsAPg4AKQgvAJg2gBQgvAAg2gOQgpgLgwgaQgMgGgPgNIgGgFQAMAbAEAeQAIA2gLAxQgLA0gYAzQgWAvgiAvQgaAlg6AmQgqAcg+AVQg6AUg4AGQg6AGg5gFQg6gEg3gOQgugNg7ghQgUgMgegWIgLAQQgXAngnAoQgkAmgoAhQgnAfgzAaQgrAWg7ASQgwAPg/ADIgaAAQgnAAgwgFg");
	this.shape_63.setTransform(-216.9074,-166.824);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(51,255,255,0.498)").s().p("AsdZPQgvgGg/gZQg5gWgsghQgwgkgkgtQgWgcgUgnQgcg3gLgwQgQhFABgkQABggADgSQAFgaAOgPQAZgdAJglIAFgWQABgKgEgGQgGgJgigUQgpgZgWgfQgUgcgPg9QgJglATg/QAPgyAagjQAJgPAHgJIgFgPQgPgwAGgwIAGguQAFgaAHgQQAOgdAGgIQANgSARgCQAUgDALgIQAKgIgFgGIgIgNQgGgHgNgDQgPgEgJgFQgKgHgKgRQgRgaACgwQABgWAEgLQgHgBgQgFQgzgPgngiQgigdgggzQgcgugOg0QgRg9AAguQAAgvAPg7QAMgyAZgyQAQgfAqg1QAjgqAhgeQAfgdAtgeQAggVAygZQAlgTAxgNIBXgTQAugKAqgFQAngEA0AGQANABAhAIIAYgRQAugeAqgEIAxAAIgEgOQgLgjAFgpQAEgnAGghIAFgiQAEgTAGgNQAIgTAHgqQACgMgGgUQgGgYAAgKQgBgqAHgmIAHgvQAFgdAHgTQAQgvAiguQAog2AhgZQAtgiAugVQAmgQBAgQQAtgKBCAKQA7AIAsAWQAhAQAOAIQAZAPAPAQQAmAqASAyQAHAWAAADQAKgKAEgRQAGgSAEgGQAKgQAUgUIAlgkQAngmAtgbQAwgcA0gTQA0gUA4gJQA1gIA8ABQAzACA9ANQA4AMA0AWQAvAVA0AjQAyAjAlAlQApArAdAtQAeAuAWA1QATAvAKA7QAFAcAKBIQAHArACAzIgBA9IATAQQArAnAbAnQAhAxAQAwQASA1AFA3QAFAygJA5QgHA2gVAtQgVAvgeAjIgTAVQgLAKgIAFIAYA2IAXBCQAOAtAGAbQAIAlACArQABAsgEAlQgEA2gKAgQgNAugVAmQgVAlgeAhQgRATgPAMQARAdAFALQAUAsAHA2QAHAzgIA4QgIA2gVA0QgWA1geAqQgaAlguAqQgjAfg0AeQgvAbgxAQQgoANg7ALQguAJg3gCQgxAAg0gOQgngKgygbQgMgHgPgNIgHgGQANAcADAeQAHA2gLAyQgMAzgYAzQgWAugjAwQgaAkg7AmQgqAbg+AVQg7AUg2AFQg6AGg5gFQg9gFg0gOQgwgMg6giQgXgMgcgWIgKARQgYAlgnApQglAmgoAgQglAeg1AbQgtAXg6ARQguAOhBADIgXAAQgnAAgzgGg");
	this.shape_64.setTransform(-214.2607,-165.1065);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(51,255,255,0.498)").s().p("AstZLQgwgHg9gZQg6gXgrggQgvgkglguQgVgcgVgnQgbg2gMgxQgPhHABghQABggADgSQAGgaANgPQAZgdAJgmIAFgWQABgKgEgGQgGgKgigUQgogagWgfQgUgegNg7QgJglAUg+QARg0AYghIARgXQgDgFgCgLQgPgwAGguIAGguQAEgZAHgRQAOgdAFgIQAMgSASgDQATgDALgJQAKgIgEgHIgIgNQgGgIgMgDQgPgEgIgGQgKgIgKgQQgPgaADgxQABgTAFgMIgXgGQgzgQgmghQgjgegfgyQgdgvgNg0QgPg8AAgvQAAgsAPg+QAMgxAagzQAPgeAsg1QAjgrAggdQAegbAvgfQAigVAwgYQAogUAugMQAPgEBJgOQApgIAvgGQAmgEA1AHQAMABAiAIIAXgRQAwgeApgDQAJgBAPAAIAZABIgFgOQgLgjAFgpIALhJIAFgiQADgTAGgNQAJgVAHgpQACgMgFgVQgGgYAAgJQAAgrAHgmIAIgvQAGgcAHgTQAPgtAkgvQApg3AhgYQArghAxgVQAlgQBBgOQArgLBEALQA8AKAqAVQAgAQAPAJQAZAPAPAQQAmApARA0QAHAQAAAJQAKgLAEgQQAGgTAEgGQAKgQAVgUIAlgkQAngmAsgaQAugbA2gUQAzgTA6gJQA1gIA7ABQA1ACA7ANQA6AOAyAVQAyAWAxAiQAwAiAmAnQAoAoAfAwQAeAtAVA2QARArAMA/IAPBkQAGAnACA4IgBA8IASAQQArAmAbAoQAgAvARAzQARA0AGA4QAEAugIA8QgJA6gUAqQgWAwgdAiQgbAegLAHIAYA2IAWBCQAPAtAFAcQAIAkABArQABApgEAqQgGA4gKAeQgOAugVAlQgVAngeAfQgOAPgTAQQAQAbAGAMQAUAvAGA0QAHAxgJA6QgIA2gWA0QgVA0gfAqQgYAjgwArQgkAgg0AcQgwAcgwAPQgnANg8AKQgrAIg7gBQgwgBg0gOQgngKgzgbQgLgGgPgOIgIgHQANAdADAfQAHA3gMAwQgMA0gZAyQgXAugjAvQgcAlg5AkQgtAbg8AUQg4ATg5AGQg7AFg4gEQg8gFg1gOQgtgMg9giQgSgLghgYIgKARQgaAngmAnQgoAogmAdQgmAfg1AaQguAXg4AQQgvAOhAADIgTAAQgsAAgzgHg");
	this.shape_65.setTransform(-211.6221,-163.3681);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(51,255,255,0.498)").s().p("As8ZHQgugGg/gaQg6gYgrggQgvglgkgtQgVgbgVgoQgcg3gKgxQgQhDABglQABggAEgSQAFgaANgPQAZgdAJgmIAFgWQACgKgEgGQgHgKghgVQgpgbgUgfQgUgegNg6QgHglAUg+QARgzAZgiIARgWIgFgQQgOgvAEgvIAGgtQAEgZAHgRQAOgeAFgGQAMgTAQgDQATgEALgJQAKgJgEgHIgHgOQgFgIgMgEQgPgEgIgHQgJgIgJgRQgOgaAEgvQACgUAFgLQgIgBgOgFQgxgPgpgiQgjgfgegxQgbgugOg1QgPg9AAguQABgxAPg5QANgyAZgyQARgfArgzQAjgqAhgeQAfgbAugeQAmgYAtgVQAmgSAwgNQANgDBLgOQAvgJApgEQAngEA0AHIAtAJIAYgRQAugdAqgDIAxABIgEgPQgLgjAFgpQAEgnAGgiIAGgjQADgTAGgNQAJgWAHgoQACgMgFgVQgFgZAAgKQABgrAIglIAJgvQAFgdAHgTQASguAjgtQAqg1AhgZQAvgiAtgSQAkgPBDgPQAtgKBBALQA8AKArAWQAfAQAPAJQAYAQAQAQQAmArARAyQAHAVAAAEQAJgKAFgRQAFgSAEgGQALgRAUgTIAlgkQAngmAtgaQAvgbA1gUQAzgSA6gJQA0gIA8ACQA1ABA7AOQA2AMA2AXQAzAXAvAiQAvAhAnAoQAlAlAiAzQAeAuAVA1QARAtALA9IAOBkQAHAoABA3IgBA9IASAQQArAnAbAnQAgAwAQAyQARAyAGA5QAEAxgJA6QgJA5gTArQgWAwgeAiIgTAVQgKALgIAFIAXA3QAJAXANAsQAPAxAFAYQAHAnAAApQABAngFAsQgFA2gLAgQgPAvgVAkQgWAlgeAhQgQAQgRAOIAVAnQAUAwAFAzQAGAygJA5QgIA2gWAzQgWAyggAtQgZAjgvAqQghAdg3AeQgwAagwAQQgpANg7AKQgtAHg4gBQgxgCgzgNQgsgMgugaQgLgGgPgOIgKgJQANAfAEAfQAFA4gLAwQgNAygZAzQgXAugkAvQgcAkg6AjQgpAag/AVQg4ASg6AGQg4AFg7gFQg7gFg2gOQgsgMg+giQgWgNgdgWIgKAQQgbAognAmQgkAlgpAgQgoAgg0AYQguAXg4AQQgvAOhAACIgUAAQgrAAgzgHg");
	this.shape_66.setTransform(-208.9508,-161.6443);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(51,255,255,0.498)").s().p("AtLZDQgugGg/gaQg5gXgsgiQgtgjgmgvQgWgcgTgnQgcg3gKgwIgLg0QgEgeABgXQABggADgRQAFgaANgQQAagdAIgmIAFgWQACgKgEgGQgGgKghgWQgpgcgTgfQgTgdgNg8QgIglAWg9QARgyAZghIASgXIgFgPQgPgxAFgtIAFgtQAEgZAHgQQAMgcAGgJQALgSARgEQASgFALgJQAKgKgEgHIgGgOQgFgIgMgFQgOgFgIgIQgIgIgJgRQgNgbAHguQACgSAGgMIgXgGQgygPgngiQgjgegdgxQgdgwgMg0QgQg8ACgvQAAguAQg8QAMgwAbgzQAQgeAsg0QAigoAjgfQAfgcAugdQAmgXAtgVQAlgSAygMQAQgEBHgNQAxgJAngDQApgEAyAHQARADAdAHIAXgRQAugcArgEIAxABIgFgOQgLgjAFgqQAFgmAGgjIAFgjQAEgUAFgNQAIgSAJgsQACgMgEgWQgFgZAAgKQACguAIgiIAKgvQAGgdAHgTQATgtAjgtQAog0AkgZQAtggAwgUQAjgOBEgOQAqgJBEALQA6ALAsAWQAgAQAOAJQAZAQAPARQAlAqARAzQAHAVAAAEQAJgLAFgQQAFgSAEgGQALgRAUgTIAlgkQAnglAtgaQAugbA3gUQAwgSA9gJQAzgHA9ABQA2ACA6AOQA7AOAwAWQAwAUAyAkQAwAiAmAoQAnAoAfAwQAeAvAVA1QARAsALA9IAOBkQAGAsABAzQABAVgCAoIASAQQArAoAaAnQAhAzAPAvQASA0AEA4QAFAwgJA7QgJA5gUArQgWAvgdAjIgTAVQgLAKgIAFIAYA4QAHAVAOAvQANAsAGAeQAHAoAAAoQgBAtgEAmQgHA2gKAgQgPAtgXAmQgXAngeAeQgNAOgUAQQAQAeAEAJQAUAuAGA2QAFAygKA4QgJA4gWAxQgXAzgfArQgcAlgtAnQgiAdg2AeQgyAagvAPQgsAOg3AIQgvAIg2gCQgwgCg0gOQgogLgygbQgLgGgPgOIgLgKQANAfAEAhQAFA4gMAvQgNAygaAzQgYAsgkAwQgaAig8AlQgsAbg9ATQg4ASg5AFQg4AFg7gFQg5gEg4gPQgsgMg+gjQgWgNgegVIgLAQQgZAlgpAoQgkAkgqAhQgqAggxAXQgrAVg8ASQgwANhAABIgRABQgrAAg1gIg");
	this.shape_67.setTransform(-206.3066,-159.9451);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(51,255,255,0.498)").s().p("AtbY/QgygHg7gZQg4gXgtgiQgugkgkgvQgUgagVgpQgbg3gLgwQgPhFABgkQABggAEgRQAFgaANgQQAageAIglIAFgWQACgLgEgGQgGgKghgXQgngagUghQgTgfgLg6QgHglAVg9QASgzAagfIARgXIgFgPQgOgwAEgtIAFgsQAEgZAHgRQAMgcAFgIQALgTAQgFQASgEALgLQAKgJgDgIIgGgOQgFgJgLgFQgOgGgHgIQgIgIgIgSQgMgbAIgtQADgRAGgNIgXgGQgxgOgogjQgigegegxQgbgugNg2QgPg9ACguQAAgsAQg9QAOgzAagwQARgfAsgzQAkgqAhgdQAhgcAtgcQAlgXAugUQApgTAugLIAsgJIAsgHQAugIApgEQArgDAwAIQAOACAgAIIAYgRQAtgcArgEIAxACIgFgPQgKgkAEgpQADgcAIgtIAFgjQAEgUAGgOQAIgUAJgrQACgMgEgWQgFgZABgJQADgvAIgiIAKgvQAHgdAIgSQASgtAlgtQAogzAkgZQAxghAtgSQAlgOBCgNQAsgJBCAMQA8AMAqAWQAhASANAIQAYAQAPARQAlAqAQAzQAHARAAAIQAJgLAFgQQAGgSAEgGQALgRAUgTIAlgkQAqgnAqgYQAugaA3gUQAwgSA9gJQAwgHBAACQA0ACA8AOQA7AOAwAWQAxAWAxAjQAwAiAmAoQAlAnAgAxQAdAtAWA3QAQAqALA/IAOBlQAGAsABAzQABANgDAwIASAQQArAnAaAoQAhAzAPAvQARA0AFA4QAEAygJA5QgJA5gUArQgVAvgfAjQgZAegMAHQAQAjAHAVQAGAPAQA2QAOAyAEAYQAHAngBAqQAAApgGAqQgHA1gLAiQgRAugWAkQgVAjghAhQgRASgQAMQAOAaAGAOQATAtAFA2QAFAygKA4QgJA3gXAyQgWAxggAsQgcAlguAnQgkAeg1AcQgzAbgtAOQgpAMg7AJQgrAHg6gCQgxgCgzgOQgqgMgvgbQgMgGgPgNIgLgLQAOAfACAiQAFA3gNAwQgMAvgcA1QgXAsglAvQgbAjg8AjQgrAbg+ASQg2ARg7AGQg4AFg6gFQg/gFgzgOQgvgNg8giQgSgLghgYIgLAQQgcAngnAmQgoAmgnAeQgpAggzAYQgrAUg8ARQgwANhAACIgNAAQguAAg2gJg");
	this.shape_68.setTransform(-203.6453,-158.2034);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(51,255,255,0.498)").s().p("AtqY7QgsgHhBgaQg3gXgtgjQgwglgigtQgWgdgTgnQgagzgLg0QgPhFABgjQABghAEgRQAFgaANgPQAZgfAJglIAFgWQABgLgDgGQgHgLgggXQgmgbgUggQgSgfgLg7QgHglAWg8QAUgzAZgfIARgWIgFgPQgOguAEguIAFgtQAEgYAGgRQANgeAEgHQALgSAPgFQASgGALgKQAKgKgDgIIgGgPQgEgJgLgGQgNgGgHgJQgIgIgHgSQgKgbAJgtQAEgSAFgKQgFgBgRgGQg0gPglgiQghgdgegyQgcgvgMg1QgOg8ABgvQACguAQg7QAOgzAagwQASghArgxQAjgnAjgfQAfgaAvgdQAhgUAygXQApgSAvgLQARgEAbgEIAsgHQApgHAugEQApgEAyAJIAtAKIAZgQQAugdAqgCIAxABIgFgPQgKgkAEgpQADgaAIgwIAFgjQAEgUAGgNQAIgUAJgsQADgMgEgWQgEgZAAgKQAFgzAIgeIALgvQAHgdAIgSQASgrAmgvQAqgzAjgXQAvggAvgSQAmgOBCgMQArgJBDANQA6AMArAXQAfAQAPAKQAYAPAPASQAlArAQAyQAGAUAAAFQAKgKAFgQQAFgSAEgHQALgQAUgUIAmgjQAngmAtgZQAxgbAzgTQA0gSA5gIQAzgHA+ACQAzACA8AOQA5AOAyAXQAwAVAyAkQAxAkAlAmQApAsAcAtQAdAsAVA3QAQAsALA+QAFAcAJBJQAGAuAAAxQABANgDAwIASAQQAqAnAbApQAgAyAPAwQAQAxAGA7QAEAvgKA8QgJA5gUArQgWAwgdAiQgbAfgKAGQAPAkAIAVQAHAUANAxQANApAFAiQAHAogBApQgCAugFAmQgHA0gNAiQgQAtgXAlQgWAkghAgQgTATgPAKQAPAbAFANQATAuAFA2QAEAxgKA4QgJA1gYA0QgYA0gfApQgbAkgvAnQgkAfg1AbQgwAZgxAPQgsAMg4AIQgtAHg4gCQgvgCg1gPQgpgMgwgbQgLgGgPgOIgOgMQAPAhACAiQAEA4gNAvQgNAwgbAzQgYAsgmAvQgbAig8AjQgtAag8ASQg3ARg6AFQg5AFg5gFQhAgGgygOQgtgMg+gjQgVgLgfgXIgLAQQgbAlgpAnQgrApgkAbQgrAggyAXQgsAUg7ARQgvANhBABIgMAAQgrAAg6gJg");
	this.shape_69.setTransform(-201.0228,-156.4965);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(51,255,255,0.498)").s().p("At5Y3QgvgHg+gbQg5gXgqgiQgugkgkgvQgWgdgTgmQgbg4gKgwQgPhIABggQACghADgRQAFgaANgPQAagfAIglIAFgXQACgLgEgGQgHgMgfgWQglgagUgiQgTgggJg6QgGglAXg8QATgyAagfIARgWIgFgPQgOgtAEgvQAFg8AKgZQALgcAFgIQALgTAPgGQARgGAKgKQAKgLgCgHIgGgQQgEgKgKgGQgNgHgGgJQgHgJgHgSQgJgcALgrQAEgSAGgKIgXgGQgxgOgngjQghgdgegzQgagsgNg3QgOg+ACgtQABgsARg+QANgvAbgzQASggAsgxQAogsAegaQAdgZAygeQAigUAygWQAkgRAzgMIBYgOQAsgHAsgEQAogCAzAIQAQADAdAIIAYgQQAugdArgCIAYAAIAYABIgEgOQgLgjAFgqQADgmAHglIAGgjQAEgUAGgOQAJgXAIgpQADgMgDgXQgEgZABgKQAEgxAJggIAMgvQAHgcAJgTQAUguAlgqQArgzAjgXQAwggAvgRQAogPA/gKQAugIBBANQA6ANArAXQAgARANAJQAYAQAPARQAkAsAQAyQAGATAAAGQAKgKAFgRQAFgSAEgGQALgQAVgUIAlgjQAogmAsgYQAvgbA2gTQA0gSA5gHQAzgIA9ADQA2ADA6AOQA5AOAyAWQAzAYAuAiQAxAjAlAnQAlAoAgAxQAeAvATA1QASAvAJA7IAOBlQAFApABA2IgDA9IASAQQAsAqAYAmQAgAxAPAxQARAzAEA5QAEAzgJA4QgJA3gUAtQgWAwgeAiQgYAdgNAJIAXA6QAGARAOA0QANAvAEAdQAGAngBAqQgCAwgGAkQgIA3gMAfQgSAvgWAjQgZAmgfAeQgQAPgTANQAQAdAEALQASAvAFA1QADAxgKA5QgKA2gYAyQgYAzggApQgaAjgwAoQgjAcg3AdQgvAYgyAPQgpAMg7AIQgvAHg2gDQgugCg1gPQgrgNgugaQgMgHgPgNIgNgNQAOAiACAhQAEA4gOAvQgPAzgbAwQgZAuglAtQgbAig8AiQgtAZg9ASQg0AQg8AFQg7AFg3gFQg8gFg3gPQgtgMg+gjQgagQgagTIgLAQQgbAlgqAnQgqAngmAcQgqAggyAWQgsAVg8AQQgwANhAABIgEAAQgwAAg9gKg");
	this.shape_70.setTransform(-198.3782,-154.7801);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(51,255,255,0.498)").s().p("AuIY0QgxgIg8gbQg5gYgrghQgugmgjguQgWgdgSgmQgcg5gJgvQgPhDABglQACghADgRQAFgaANgPQAZgeAJgmIAFgXQACgLgEgHQgIgNgegVQglgdgSghQgSgegJg7QgGgmAXg7QAUgxAagfIASgVIgFgPQgOgvAEgtIAEgsQAEgYAGgRQAKgbAFgJQALgTAPgGQAQgHALgLQAKgLgDgIIgFgQQgEgKgKgGQgMgIgGgKQgGgJgFgTQgIgbAMgqQADgQAIgLIgXgGQgxgOgngjQgigfgcgxQgcgwgLg0QgOg+ACgsQACguARg8QAOgxAbgxQASggAsgxQAmgpAhgcQAfgaAwgcQAggTA0gXQAogRAwgLQARgEAbgDIAsgHQAugHAqgDQAlgCA1AJQAQADAdAIIAZgQQAvgcApgDIAYABIAZABIgFgOQgKglAEgpQAEgnAHgkIAFgjQAEgUAGgPQAGgOAFgSIAHggQADgNgDgWQgDgaABgKQAEgtALgkIAMguQAIgcAIgTQAXgwAkgoQAtgzAigWQAvgfAwgRQAmgNBCgLQAvgHA/AOQA6AMArAYQAdAQAQALQAXAQAPARQAkArAQAzQAGATAAAGQAJgKAGgRQAFgSAEgGQALgQAVgUIAlgiQAmgkAvgbQAwgbA1gSQAwgRA9gIQA0gHA8ACQAzADA8APQA6AOAxAXQAxAWAxAkQAwAjAlAnQAmAoAeAxQAeAwAUA0QARAuAJA8IANBlQAGAsAAAzQAAAUgDApIASARQArApAZAnQAfAyAPAwQARAzAEA6QAEAxgJA5QgKA4gUAsQgWAvgdAkQgZAdgNAIIAXA7IAUBGQANAzADAZQAGAkgCAuQgBAngHAtQgKA3gMAfQgSAugXAjQgZAmgfAeQgSAQgRAMQARAhACAHQASAvAEA1QADAvgLA7QgLA4gXAvQgYAyghAqQgaAjgxAoQgjAcg3AcQgwAYgxAOQgpALg7AJQgsAGg4gDQgtgCg3gQQgqgMgvgbQgLgGgPgOIgQgPQAPAjACAkQADA2gOAwQgPAxgcAyQgZAsgmAtQgaAhg+AjQgsAZg9ARQg3AQg6AFQg7AEg3gFQg9gFg1gPQgugMg+gjQgVgNgfgWIgMAPQgbAkgqAoQgrAngmAcQgmAcg3AaQguAVg6APQguAMhBABIgFAAQgyAAg6gKg");
	this.shape_71.setTransform(-195.7135,-153.0568);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(51,255,255,0.498)").s().p("AuXYwQgxgJg8gaQg2gXgtgjQgvgmgiguQgVgbgUgoQgag3gKgxQgPhDACgmQABghADgQQAGgaAMgQQAZgeAJgmIAFgXQACgLgEgHQgHgMgegXQgkgcgTgiQgRgggIg6QgGglAYg7QAUgwAbggIASgVIgFgPQgOguADgtIAFgrQADgZAGgQQAKgcAFgJQAKgTAPgGQARgHAKgLQAKgLgDgJIgEgRQgDgKgKgHQgMgIgGgKQgFgKgFgTQgGgaANgrQAFgPAGgKIgWgHQgzgOglgjQghgdgdgzQgagvgMg0QgNg+ACgtQACgwARg5QAPgzAbgvQATghAsgwQAggkAnggQAggbAvgbQAhgTAzgWQAogRAwgLIBYgNQAsgHAsgCQAngCA0AJQAQADAdAJIAYgQQAugcAqgDIAYABIAZABIgEgOQgLgjAEgrQADgbAIgxIAGgjQAEgUAGgPQAGgOAFgSIAHghQADgMgDgXQgCgaABgKQAGgxAKghIANguQAIgcAJgTQAVgsAngrQAsgxAkgXQAxgeAvgQQAlgOBDgKQAsgGBCAOQA7AOApAXQAeARAPALQAXAQAPARQAkAsAPAyQAFASABAHQAJgKAFgQQAGgSAEgGQALgRAVgTIAlgjQApgmAsgYQAugaA3gSQAygSA7gHQA2gHA6ADQA4ADA4AOQA4AOAyAYQAyAXAvAjQAxAkAkAnQAmApAeAwQAfAxASAzQARAsAKA+QAEAdAIBIQAGAsAAA0IgEA9IASAQQAoAmAcArQAfAyAPAwQAQAzAFA5QADAwgJA7QgJA4gVAsQgVAwgeAiQgZAegMAJIAWA7QAJAdALAqQALAuAFAeQAFAogCAqQgDAugHAnQgKA2gNAgQgSAtgYAkQgZAkggAeQgPAPgUANIATApQARAuAEA2QADAwgMA5QgLA3gYAxQgZAzggAoQgcAkgwAmQglAeg1AZQgyAZgvANQgpALg7AIQgtAGg4gDQgugDg1gQQgpgLgwgcQgLgHgPgNIgRgRQAPAkABAlQADA4gPAuQgQA0gbAuQgbAuglArQgbAhg9AiQgpAWhBATQg5AQg3AEQg4AFg6gGQg+gFg1gPQgvgNg8gjQgagPgbgUIgMAQQgdAmgpAlQgoAlgpAeQgpAdg1AYQguAVg6APQgvAMhAAAQg1AAg8gKg");
	this.shape_72.setTransform(-193.0662,-151.32);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(51,255,255,0.498)").s().p("AumYsQgvgIg+gcQg4gZgrghQguglgigvQgVgcgUgoQgag3gKgxQgOhDABglQACggADgRQAFgaANgQQAZgfAIglIAGgYQABgLgDgHQgHgNgegXQgjgcgTgjQgRgggHg5QgFgnAYg5QAVgxAageIASgVIgEgPQgPguAEgsQAEg8AJgYQAKgcAFgJQAKgTAOgHQAQgIAKgLQAKgMgCgIIgEgSQgDgKgJgIQgLgJgGgKQgFgKgDgTQgGgaAPgqQAEgNAIgMIgWgGQgygPgmgiQghgegdgzQgZgugMg1QgNg+ACgtQADgtARg8QAQg0AbguQAUgiArguQAiglAlgfQAjgcAtgZQAkgVAxgUQArgSAtgJIBYgMQAvgHApgCQApgCAxAKQALACAiAKIAZgQQAugbAqgDIAYABIAYABIgEgOQgKgjAEgrQADgeAHguIAGgkQAEgUAGgPQAIgRALgxQADgMgCgXQgCgaABgLQAGguAMgjIANguQAJgcAJgTQAXgsAmgqQArgwAmgXQAxgeAvgQQApgNA/gJQAtgGBAAPQA7AOAqAYQAfASANAKQAYAQAOARQAkAsAPAzIAGAZQAJgLAFgQQAGgSAEgGQALgQAVgUIAmgiQApgmAsgYQAxgbA0gRQA0gSA5gHQA2gGA6ADQA1ADA6APQA4AOAzAYQAxAXAwAjQAxAlAjAmQAoArAcAuQAcAtAVA4QAQArAKA/IAMBlQAGAwgBAwIgEA9IASAQQApAoAaApQAfAzAPAwQAQA0AEA4QAEAwgKA7QgJA4gVAsQgVAwgeAiQgZAegMAJIAWA7QAFARAOA3QALAoAEAlQAFAqgDAoQgCApgIAsQgKA0gNAiQgSAsgZAlQgbAmgfAcQgSAQgSALQAPAfAEAKQARAuADA2QACAzgMA2QgKA1gZAzQgaAyggApQgaAhgyAoQgjAcg3AbQgxAYgxANQgjAJhBAJQgrAGg6gEQgugCg1gQQgqgNgugbQgMgHgPgNIgSgSQAOAlACAlQACA4gPAvQgQAygdAvQgaAtgmArQgcAhg9AhQgsAXg+ARQg1APg7AFQg3AEg7gFQg7gGg4gPQgvgNg8gjQgYgNgdgWIgMAQQgdAkgqAnQgsAmgmAcQgqAdgzAXQgrAUg+AQQgwAMg/AAQgzAAg+gLg");
	this.shape_73.setTransform(-190.4162,-149.5974);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(51,255,255,0.498)").s().p("Au2YoQgvgJg9gbQg6gbgpghQgtgkgjgvQgXgfgRglQgZg1gLgzQgOhCABgnQACggADgRQAFgaANgQQAZgeAIgmIAGgYQABgLgDgHQgHgOgegXQgigdgSgiQgQghgHg5QgEgmAYg6QAUguAcggIASgUIgEgOQgOgtADguQADg4AKgcQAKgcAEgJQAKgTAOgHQAQgJAKgLQAKgLgCgJIgEgSQgDgLgJgIQgKgJgFgMQgFgKgDgTQgEgbAQgoQAFgOAIgKIgXgGQgxgOgmgjQghgfgcgxQgagwgLg0QgMg8ACgvQACguASg7QAPgxAcgxQATgfAtgwQAjgmAlgeQAegYAygdQAlgVAwgTQAogQAwgKIBYgMQA1gHAjAAQAmgDA1AKIAsANIAZgQQAtgaArgDIAYAAIAZABIgEgOQgLgjAEgrQAEgmAHgnIAGgkQADgUAHgPQAGgOAFgSIAJgiQADgMgCgYQgCgZACgLQAHgwALgiIAPguQAJgcAJgSQAWgtAogpQAsgwAmgWQAzgeAtgPQAjgLBGgKQAugGA+AQQA6AOArAZQAdARAPAKQAYARAOASQAjAsAPAzIAGAZQAJgLAFgQQAGgSAEgGQAMgRAUgTIAmgiQAoglAtgZQAugYA3gUQA1gRA5gGQAzgHA9ADQAzADA8AQQA5APAxAXQAwAXAxAkQAwAjAkAoQAlAoAfAyQAdAwATA1QAQAqAKBAQAEAeAIBHQAFAvgBAwIgEA9IASARQArArAXAmQAhA1ANAuQAQA2AEA2QADAygKA5QgIA3gVAtQgXAwgdAjQgaAegLAJIAWA7QAFAQAOA5QAMA1ACAYQAFAogDArQgDAtgJAoQgJAxgPAlQgTAugZAiQgZAjgiAfQgQAOgUANQAMAYAGARQARAvACA0QADAwgMA6QgNA2gYAxQgZAxghApQgbAhgyAoQglAdg1AZQgvAXgzANQgmAKg+AIQgsAFg5gDQgvgDg0gQQgrgNgtgbQgMgHgPgNIgUgTQAPAkACAnQABA3gPAvQgQAvgdAyQgaArgnAtQgbAfg/AhQguAYg8AQQg3AQg5ADQg3AEg7gFQg7gGg4gPQgvgNg9gjQgYgNgdgWIgMAQQgdAkgrAnQgsAmgmAaQgrAfgzAWQgvAVg6AOQguALhCAAQgzAAg+gLg");
	this.shape_74.setTransform(-187.7505,-147.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(51,255,255,0.498)").s().p("AtUYwQgxAAhAgMQgwgJg8gcQg3gYgsgkQgsgjgkgwQgTgbgUgpQgZg2gLgzQgOhFACgjQABggAEgRQAFgaAMgQQAZggAJgkIAFgYQACgMgEgHQgHgOgdgYQghgcgSgkQgQgggGg6QgEglAZg5QAVgvAcgfIASgUIgEgPQgOgtADgsQAEg8AIgYQAKgcAEgJQAKgTANgIQAQgIAKgMQAKgMgCgJIgDgTQgDgLgIgIQgKgKgEgLQgEgLgDgTQgCgaAQgoQAFgNAJgKIgXgHQgxgOgmgjQghgfgcgxQgZgugLg2QgMg+ACgtQADgsASg9QAPgwAdgxQATggAtgvQAlgnAjgdQAigaAugaQAmgVAvgTQApgQAwgJIBYgMQAtgGAsgBQAogCAyALQAPADAeAKIAYgQQAvgbAqgCIAYAAIAYACIgEgPQgKgjAEgrQAEgnAGgmIAHgkQAEgVAGgOQAJgVALguQADgMgBgYQgCgaACgLQAIgwAMgiIAPguQAJgbAKgTQAXgrAogpQAugxAkgVQAvgbAygQQAmgMBDgIQAsgGBAAQQA7APAqAZQAfASANAKQAXARAOARQAjAsAOAzQAGARAAAIQAKgKAFgQQAGgSAEgGQAMgRAUgTIAmgiQAngkAugZQAygbA0gRQA1gRA4gHQA1gFA7ADQA3ADA4AQQA6APAwAXQAxAYAwAjQAxAmAiAmQAmAqAeAwQAcAvAUA1QARAwAIA6IAMBmQAFAsgBA0QAAAUgEApIARARQAqAoAZApQAeAyAPAxQAQA3ADA1QAEAygKA5QgKA4gUAsQgWAvgeAkQgZAegMAJIAWA9QAJAeAJAqQALAxADAcQAEAtgDAoQgFAxgIAkQgLA1gOAhQgSAqgbAmQgaAkgiAdQgQAOgUANQAPAfADAKQAQAtACA3QACAygNA3QgMA2gZAwQgbAzggAnQgcAigxAmQgkAcg3AaQg0AYguALQgnAKg9AIQguAFg2gEQgugEg1gQQgpgMgwgcQgLgHgPgOIgVgUQAQAmAAAoQABA4gQAuQgPAvgfAxQgZApgoAuQgdAgg+AgQgrAWg+ARQg7AOg2AEQgzAEg/gGQg+gFg1gQQgvgNg9gjQgZgOgcgVIgNAPQgdAlgsAmQgkAgguAgQgsAfgyAWQgxAUg4AOQgsALg6AAIgKAAg");
	this.shape_75.setTransform(-185.1262,-146.1491);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(51,255,255,0.498)").s().p("AtjYtQgygBg/gMQgvgJg9gcQg4gZgqgjQgvgmghguQgWgfgRglQgag2gKgyQgNhDABgmQACggADgRQAFgaANgQQAZghAIgkIAFgYQACgLgEgHQgGgNgdgaQgigegQgjQgQgjgFg3QgDgmAZg4QAXgwAbgcIASgUIgFgPQgNgtACgtQAEg7AJgYQAIgbAFgKQAKgTANgIQAPgKAKgLQAKgNgCgJIgCgTQgDgMgIgIQgJgKgEgNQgEgLgBgTQgCgZASgoQAGgMAIgKIgWgHQgxgNgmgjQgigggagxQgagxgKgzQgMg8ADgvQADgsASg9QAPgvAdgyQAUggAtgvQAogpAhgaQAggZAwgbQAlgTAxgUQAsgRAsgHQASgEAbgCIAsgFQApgFAvgCQAmgBA0ALQAQADAdAKQANgJAMgHQAvgaApgCIAYAAIAYACIgEgPQgKgkAEgrQADggAIgtIAGgkQAEgVAHgPQAIgUAMgvQADgMAAgYQgCgaACgLQAKgzALgfIAQguQAKgbAKgTQAXgrAogpQAuguAmgWQAygcAvgPQAmgLBDgIQAtgFA/ARQA5AOArAaQAeASAOAKQAXARAOASQAjAsAOAzIAGAZQAKgKAFgQQAGgTAEgGQAMgQAUgTIAmgiQAqgmAsgXQAvgZA2gSQAzgQA7gHQAygGA+AEQAzADA8AQQA2AOA0AZQAyAYAuAjQAuAjAlApQAmAqAdAwQAeAwASA1QAPAqAKBAQAFAeAGBHQAFAsgBA0QAAAUgEApIARARQAqArAYAnQAdAwAQAzQAPA2AEA3QADAvgKA8QgJA1gVAuQgVAugfAlQgZAegMAJQAPAnAHAXQAGAVALA0QALAyADAcQAEApgEArQgFAwgJAmQgMA2gOAgQgSApgcAmQgaAjgiAdQgSAQgTALQANAbAFAOQAPAtACA3QACAygOA3QgMA1gZAxQgZAwgjAqQgaAggzAoQgkAbg4AaQgzAXgvAMQgrAKg5AGQgsAFg4gEQgvgEg0gQQgngMgygdQgLgHgPgNIgVgVQAPAnAAAoQABA1gRAwQgRAwgeAwQgcAtgnApQgcAfg+AgQgrAVg/ARQg3AOg5AEQg4AEg6gGQhAgGgzgPQgtgNhAgkQgZgOgcgVIgNAPQgeAlgsAlQgpAkgpAdQgrAdg0AXQgyAUg3ANQgsALg6AAIgKAAg");
	this.shape_76.setTransform(-182.4708,-144.426);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(51,255,255,0.498)").s().p("AtyYqQgwgBhBgMQgvgKg9gcQg2gZgsgjQgvgnggguQgVgcgSgoQgZg1gLgzQgNhDABglQACghADgRQAFgaANgQQAZghAIgkIAFgYQACgMgDgHQgHgOgcgaQgggbgRgmQgPgggFg6QgDgnAbg3QAUgtAdgeIATgUIgFgPQgNgtACgsQADg3AJgcQAJgbAFgKQAJgTANgJQAPgKAJgMQAKgMgBgJIgCgUQgDgMgHgKQgIgKgEgNQgDgLgBgTQAAgaATgmQAHgNAIgIIgXgHQgzgOgjgiQghgfgbgzQgagxgKgzQgMg8AEguQADguATg7QAPgwAdgxQATgfAugvQAkgmAlgdQAggZAxgaQAegRA4gWQArgRAugHQARgEAbgCIAsgFQAwgFApAAQAngCAzAMIAsANIAZgPQAvgbAqgCIAYABIAYACIgEgPQgKgjADgsQADgiAIgrIAHglQAEgVAGgPQAJgUAMgwQAEgMgBgYQAAgbACgLQAIgtAOglIAQgtQAKgbALgTQAYgrAogoQAwgvAlgUQAwgbAxgPQAjgLBGgHQAvgFA+ARQA7AQAoAZQAdASAPALQAXARAOASQAjAuANAxQAFASABAHQAJgLAGgQQAFgSAFgGQAMgQAUgTIAmgiQApgkAtgYQA0gbAygQQAzgQA6gHQAzgGA9AEQA1AEA6AQQA5APAxAYQAyAZAuAjQAtAjAmApQAmAqAdAwQAcAvATA2QAQArAJA/IALBlQAFAxgCAwIgEA9IARARQApApAYAqQAfAyAOAxQAPA1ADA3QADAvgKA8QgJA4gVAsQgWAwgdAjQgZAegNAJIAWA+QAIAdAJAtQAKAtADAhQADApgEAsQgFAtgJApQgNA1gPAhQgTArgcAkQgdAlggAbQgPAMgWAOQAOAeADALQAQAvABA1QABAvgNA6QgNA0gaAyQgaAwgiApQgeAjgwAkQglAcg3AYQgwAXgyAMQgpAKg7AGQgsAEg4gEQgwgEgzgQQgqgNgugcQgMgHgPgOIgXgXQAQApgBApQAAA3gRAuQgQAwggAwQgbArgoAqQgeAgg9AeQgsAWg+APQg1ANg6AEQg2ADg9gFQhDgHgwgOQgugNg+gkQghgTgVgRIgNAQQggAmgrAjQgtAngmAZQgrAeg0AWQgvATg6AOQgrAKg6AAIgLAAg");
	this.shape_77.setTransform(-179.8299,-142.7008);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(51,255,255,0.498)").s().p("AuCYmQg1gCg8gMQgtgJg+gdQg5gbgpgiQgwgogfgtQgUgcgTgoQgYgzgLg1QgNhFACgjQABghAEgRQAFgaAMgQQAZggAIglIAGgYQACgMgEgIQgGgOgcgaQghgdgPglQgPghgEg5QgCglAbg4QAWgvAcgcIATgTIgFgPQgNgsACgtQADg4AIgbIANglQAJgUANgIQAPgKAJgMQAKgNgBgKIgCgUQgCgNgHgJQgNgTAAgkQABgZAUgmQAHgMAJgIQgIgBgPgGQgzgOgjgiQgjgigZgwQgZgvgKg1QgLg9ADguQAEguATg6QAQgyAdgvQATgfAugvQAmgnAkgbQAhgaAwgZQAigSA0gUQAngPAygJQASgDAbgDIAsgEQAvgFApAAQApAAAxALIAtANIAYgPQAvgaAqgCQAJAAAPABIAYACIgEgPQgKglAEgqQADgjAIgrIAGglQAFgVAGgPQAIgSAOgyQADgMAAgZQAAgaACgMQAKgwANgiIARgtQALgbAKgSQAagsAognQAwguAlgUQAwgaAygPQAngKBDgHQAtgEA/ARQA5AQAqAaQAeATANAKQAXARAOASQAiAtAOAyIAGAZQAJgKAGgQQAFgSAFgGQAMgQAUgTIAngiQApglAtgXQAxgaA1gQQAxgQA8gHQA4gGA4AFQAzADA8ARQA4APAxAYQAvAXAxAlQAuAkAlApQAjAmAfA0QAdAvASA2QAQAqAJBAIALBmQAEAsgCA0IgFA9IASASQAoApAZApQAeAyAOAyQAPA2ADA2QADAvgKA8QgKA3gVAtQgUAsgfAnQgZAegNAJQAQArAGAUQAGAWAKA1QAKAqACAkQADAqgEArQgFArgKArQgNA0gQAiQgUAqgbAkQgeAmggAaQgSAPgTALIAQApQAPAuABA2QAAAxgNA4QgPA4gZAuQgZAvgjApQgfAkgwAjQgkAbg3AYQgzAXgwALQgjAJhBAHQguAEg2gFQgvgEg0gQQgogNgwgcQgLgHgPgOIgZgYQAPApAAAqQAAA2gSAvQgRAvggAwQgcArgoAqQgeAfg9AeQgpAUhCAQQg6ANg0ADQg4AEg7gGQg8gGg4gQQgtgMg/gkQgagPgcgVIgNAPQghAmgrAjQgyApgiAXQgqAdg1AWQguATg8AOQgqAJg3AAIgPAAg");
	this.shape_78.setTransform(-177.1721,-140.987);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(51,255,255,0.498)").s().p("AuRYjQg0gCg9gNQgtgJg+gdQg3gagqgjQgugnghguQgVgdgSgoQgZg3gJgxQgOhEACgkQACggADgSQAFgaAMgQQAYgfAKgmIAFgZQACgMgEgHQgGgQgcgZQgfgfgPgkQgPgigCg4QgCgoAbg1QAXguAcgcIATgTIgFgPQgOguADgqQADg5AIgaQAIgaAFgLQAJgUAMgJQAjgagCgUIgBgVQgCgMgGgKQgIgLgCgOQgCgLABgUQABgaAWgkQAHgLAJgIIgXgHQgygOgkgiQgigigZgwQgZgxgKgzQgKhAADgrQAEguATg6QAPguAegzQAUggAuguQAkglAmgcQAigaAwgZQAjgSAzgUQApgPAwgIQASgDAbgCIAsgEQAsgEAtgBQApAAAxAMIAsAOQALgIAOgHQAvgaAqgCIAXABIAZACIgEgPQgLglAEgrQADgiAIgsQAKg1AIgUIAMgjIAKgiQAEgMAAgZQAAgaADgMQAJguAPgkIARgtQALgbALgSQAbgsAogmQAwgtAmgUQAwgaAygOQAogLBCgFQAsgEA/ASQA6AQApAaQAfAUAMAKQAXARAOASQAiAtANAyQAFAPABAKQAKgKAFgQQAHgSAEgGQAMgQAUgTIAngiQAogkAugYQAugYA4gSQAygPA8gHQAwgFA/AEQA0AEA7ARQA1AOA0AaQAwAYAwAkQAwAmAiAnQAmAqAcAwQAbAtAUA4QARAwAHA7QADAVAIBQQAEAtgCA0QgBAagEAjIARARQApAsAYAnQAdAzAOAxQAPA0ADA4QADA0gKA3QgJA1gVAvQgWAugeAlQgZAegMAKQARAyADANQAGAXALA0QAJAvACAhQADAtgFAoQgGAugKAoQgNAzgRAjQgUArgcAjQgcAjgjAcQgQAMgVAOQALAaAFAPQAOAvABA1QAAAygOA3QgOA2gaAvQgaAwgkAoQgcAigyAkQgmAbg2AYQgzAXgwAKQgnAKg9AFQgsAEg4gFQgxgEgygRQgpgNgvgcQgLgHgPgOIgZgYIgBgBQAPArAAAqQgCA2gSAvQgRAuggAxQgeArgnAoQgdAfg/AdQguAVg8AOQg3ANg4ADQg3ADg8gFQg9gHg2gPQgxgOg8gjQgcgQgagUIgOAPQgdAigvAnQg1ArgfAUQgrAdg1AWQguATg8ANQgqAJg3AAIgPAAg");
	this.shape_79.setTransform(-174.5104,-139.2545);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(51,255,255,0.498)").s().p("AugYfQg1gCg8gNQgugJg9gdQg2gagrgkQgtgnghguQgVgegSgnQgYg0gKg0QgNhDACgmQABggAEgRQAFgaAMgQQAYggAJgmIAFgZQACgMgDgHQgHgPgbgbQgegegPglQgOghgCg6QgBgmAbg2QAXgtAcgcIAUgTIgFgPQgNgrABgtQADg4AIgbQAIgbAFgKQAJgUAMgJQAhgbAAgUIgBgWQgCgNgGgKQgLgUADglQACgZAXgjQAHgLAJgHIgWgIQgygNgkgjQghghgagxQgYgvgKg1QgKg+AEgtQADgvAUg5QARgzAdgtQAUggAuguQApgpAhgZQAjgZAvgZQAjgSA0gTQAmgOAzgJQANgCBMgGQAvgEAqAAQApAAAxAMIAsAOIAZgPQAvgZAqgCIAwADIgEgPQgKgkAEgsQACgfAIgvIAIgmQAEgVAHgPQAGgPAGgUIAKgiQADgMABgZQABgbADgMQAKguAPgkIASgtQAMgaALgSQAZgqAqgnQAxgtAmgUQAxgZAygNQAjgKBGgGQAugDA+ASQA5ARApAaQA6AlAWAdQAiAuANAxQAFAVAAAEQAKgKAGgQQAGgSAEgGQAMgQAVgTIAmgiQAqgkAtgXQAugZA4gRQAygPA7gHQA3gFA5AFQA0AEA7AQQA7ASAuAXQAvAYAwAkQAtAjAmAqQAmArAbAwQAcAuATA3QAQAsAIA+QADAWAHBQQAEAogCA5IgFA9IARASQAnAnAZAsQAdAxAOAzQAPA0ADA4QACAwgKA7QgKA4gVAsQgUAugfAlQgYAdgOALIAVBAQAIAeAIAuQAIArACAkQADArgGArQgFAtgMApQgNAzgRAjQgVAqgdAkQgcAjgjAbQgSAOgUAMQAMAaAEAPQAOAvAAA2QAAAxgPA3QgOA1gaAwQgcAxgiAmQgeAigxAkQglAag4AYQgzAXgvAKQgjAIhCAGQgtAEg3gFQgvgEg0gSQglgMgygdQgMgHgOgOIgagZIgBgBQAQArgCArQgCA2gSAuQgTAxgfAtQgdAqgpAqQgeAeg+AcQgwAWg6ANQg5AMg2ADQg5ADg6gGQg5gFg6gRQgpgLhFglQgbgRgbgTIgNAPQgeAhgwAnQgvAmglAZQgwAfgxATQgyAUg4AMQgoAIg3AAIgRAAg");
	this.shape_80.setTransform(-171.8802,-137.5218);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(51,255,255,0.498)").s().p("AuvYdQgwgBhBgOQgwgKg7gdQg2gbgqgjQgtgnghgvQgTgagUgqQgYg3gKgyQgNhFACgjQACggADgRQAFgaAMgQQAYghAJglIAGgZQACgNgEgIQgGgPgbgbQgdgdgPgnQgOgkgBg3QgBgmAcg1QAYguAcgbIAUgSIgFgPQgNgrABgtQACg2AJgdQAIgaAEgLQAJgUAMgKQAhgbAAgVIgBgWQgBgNgFgLQgLgWAFgjQADgZAYgiQAHgLAJgHIgWgHQgxgNglgkQghghgZgxQgYgvgJg1QgLg7AEgwQAEgsAUg8QAQgvAfgxQAUgfAuguQAogoAjgZQAjgaAvgYQAkgSAzgTQAogOAxgIIAtgEIAtgEQApgDAvAAQArAAAvANQARAEAbAKQALgHAOgIQAxgZAogBQAKgBAOACIAYACIgEgPQgKgkAEgtQADgmAIgoQAKg3AIgUQAIgTAPgyQAEgNABgZQABgbADgLQANg0AOgeIATgtQALgbAMgSQAbgsApgkQAwgrAngUQAvgZA1gNQAmgKBDgEQAugDA+ATQA5AQApAbQA5AlAWAdQAiAuAMAxIAGAZQAKgKAFgQQAHgSAEgGQAMgQAUgTIAnghQAqgkAtgXQAwgZA2gQQA0gQA6gGQA2gFA6AFQA0AFA6AQQA5AQAwAZQAxAZAuAkQArAhAnAsQAmArAcAvQAbAvATA3QAPAtAIA9QAFAhAFBFQAEArgCA2IgGA9IARASQAoAqAYApQAeA1ANAvQAOA2ADA3QADAtgLA+QgJA2gVAtQgVAtgfAnQgYAdgOALQARAwAEARQAGAXAJA1QAIAvACAhQACAugGAoQgGAxgMAmQgOA1gRAgQgXAtgbAhQgeAkgjAaQgTAOgTALQAMAcAEANQAOAwgBA1QAAAvgQA5QgPA3gaAtQgaAvgkApQgfAigxAjQgiAYg6AaQg0AVgvALQgnAIg+AFQguAEg2gGQgugEg0gRQgqgOgugdQgMgHgOgNIgZgZIgDgDQAQAtgCArQgDA2gSAuQgUAwggAuQgeAqgoAoQgdAdhAAdQgsAUg+AOQg2AMg4ADQg5ADg7gGQg6gGg5gRQgwgOg9gjQgXgMgggYIgOAPQgfAjgvAlQgwAnglAYQgsAdg0AUQgsASg/AOQgnAIgwAAIgZgBg");
	this.shape_81.setTransform(-169.2311,-135.9704);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(51,255,255,0.498)").s().p("Au/YbQgxgCg/gNQgxgLg6gdQg2gagqglQgugngggvQgVgegRgmQgYg2gKgzQgMhDABglQACghAEgQQAFgaAMgQQAYghAJglIAFgaQACgMgDgIQgGgQgbgbQgcgdgPgoQgNgigBg4QAAgnAcg0QAZgtAcgbIATgTIgEgOQgOgtACgrQACg2AIgdQAIgbAFgKQAIgUALgKQAhgdAAgUIAAgWQAAgOgFgLQgKgWAGgkQAEgaAZghQAGgIALgIIgWgIQgxgMglglQgggggagyQgYgygIgyQgKg8AEgvQAEgtAUg7QASgxAdguQAUgfAvguQAkgkAngdQAhgZAygZQAmgTAxgRQAmgOAzgHQARgDBJgFQAsgDAtAAQAoABAyANIAsAPQANgJAMgGQAvgZAqgBQAJgBAOACIAYACIgDgPQgKgkADgtQAEgmAIgpQAJg0AJgXQAFgMATg6QAEgMABgZQACgbACgMQAMguAQgkIAUgtQAMgaALgSQAcgqAqglQAzgsAlgTQAzgZAwgMQAmgJBEgEQAtgCA+ATQA5ARApAbQA5AlAWAdQAhAuANAxQAFAVAAAEQAKgKAGgQQAGgSAFgGQAMgQAUgSIAogiQAqgkAsgWQAygZA1gQQAxgPA9gGQAzgFA8AFQA2AFA4ARQA5AQAwAZQAzAaAsAjQAwAnAiAmQAmAtAbAuQAdAzARAzQAPAtAIA9QAEAgAGBGQADAsgCA1QgBATgFArIARARQAoArAXApQAeAzANAxQAOAzADA6QACAxgKA5QgLA4gUAsQgWAvgeAlQgYAdgOALQARAzAEAPQAGAYAJA1QAIAyABAeQABAtgGAqQgGAsgNAqQgOAzgSAjQgVAogeAkQgeAkgjAaQgTAOgUAKQALAZAEARQAOAvgBA2QgBAxgQA3QgOA0gcAwQgbAvgkAoQgcAggzAkQgmAag3AXQgxAVgyALQgqAJg7AEQguADg2gFQgvgFgzgRQgqgPgugcQgLgHgPgOIgZgYIgEgFQAQAsgDAvQgDA0gTAwQgUAwggAsQgdApgqApQgeAdg/AcQgtATg+AOQg2ALg4ADQg2ADg9gGQg7gGg5gRQgugNg/glQgdgQgagTIgOAPQgiAjgtAkQg0ApgiAVQgsAdg1AVQguASg8AMQgmAIgsAAIgfgBg");
	this.shape_82.setTransform(-166.5905,-134.4208);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(51,255,255,0.498)").s().p("AvOYaQgvgChBgOQgvgLg8geQg3gbgpgkQgsgmghgwQgTgbgTgpQgYg3gKgyQgMhBACgnQABggAEgSQAFgZAMgRQAYghAJglIAFgaQACgMgDgIQgGgQgagcQgcgegOgoQgMgiAAg4QAAgnAdgzQAYgtAdgbIATgSIgEgOQgOgtACgrQACg2AIgdQAHgZAFgMQAIgUAMgKQAggeAAgUIABgXQgBgOgEgLQgJgYAIgjQAFgZAaggQAHgJALgHIgWgHQgxgNglglQgigjgYgvQgXgvgJg2QgKg9AFgtQAEguAVg6QARgxAeguQAVggAugtQAognAjgaQAegWA1gbQApgTAvgQQAsgPAugGIBZgHQAxgEAoACQAqAAAwAOQALADAhAMQALgIAOgHQAxgZAogBQAKAAAOABIAYACIgEgPQgKgmAEgrQADgmAIgpIAIgnQAEgVAHgQIANgjIALgjQAEgMACgaQACgbADgMQAOgxAPggIAUgtQAMgaAMgSQAcgqArglQAxgrAngSQAygYAygMQAogKBCgCQAtgDA+AUQA4ARApAcQA5AlAVAdQAjAwALAwQAFAPABAKQAKgKAGgQQAGgSAFgGQAMgQAUgTIAoghQAngiAwgYQAugXA4gSQA0gPA6gFQA1gFA7AGQA1AFA5AQQA5ASAvAYQAzAaAsAjQAvAmAiAoQAmAsAbAvQAcAwASA2QAPAuAIA8QADAYAGBOQAEAsgDA1QgBASgFAsIARASQAnArAYApQAdA0AMAwQAPA2ACA3QACAxgKA5QgJA0gWAwQgWAwgeAkQgZAegNAKQARAyADARQAHAcAIAxQAIAtAAAkQACAqgHAtQgIAwgMAnQgPAygSAjQgVAogfAkQgeAjgkAaQgVAPgSAJIAPAqQANAvgCA2QAAAvgRA5QgOAygcAxQgdAxgjAmQgdAggzAkQglAZg4AYQgyAVgxAKQgpAIg8AEQgxADgzgGQgtgFg1gRQgngNgwgeQgMgHgPgOIgZgYIgFgGIAAABQAQAugEAtQgDA2gUAuQgSAsgjAwQgeAqgpAnQgfAcg/AcQguAUg8AMQgzALg8ADQg3ACg8gGQg6gGg5gQQgxgPg9gkQgbgOgcgWIgOAPQgkAmgsAiQg6AsgcASQgwAegyASQgzAUg3AKQgkAIgtAAIgggBg");
	this.shape_83.setTransform(-163.9313,-132.8685);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(51,255,255,0.498)").s().p("AvZYYQgygCg+gPQgvgLg8gdQg1gbgrglQgsgnghgvQgUgdgRgnQgYg1gKg0QgMhDACglQABggAEgSQAFgaAMgQQAZgiAHglIAGgZQACgNgDgJQgGgQgagcQgbgegOgoQgLgkABg3QAAglAdg1QAZgsAdgaIAUgSIgFgOQgNgtABgrQABgzAJgfQAHgaAFgMQAIgUALgLQAggfABgUIABgXQAAgOgEgMQgIgXAJgkQAGgZAbgfQAGgIAMgHIgWgHQgygOgjgkQghgigZgxQgXgvgIg1QgKg+AFgtQAFgwAUg3QASgxAegvQAUgeAwguQAigiApgeQAigZAygYQAogTAvgQQAvgPArgFQAYgDBCgEQAsgDAtACQAoAAAyAOIArAPIAagOQAxgYAogCIAwAEIgEgPQgKgnAEgrQADgmAIgpQALg4AIgUQAJgUAQgzQAEgNACgZQACgbAEgMQAPgyAPggIAVgsQAMgaANgSQAcgpArglQAygqAngSQA0gZAwgKQAqgKBAgCQAtgCA+AUQA4ASApAcQA4AlAWAeQAhAtANAyIAFAZQAKgKAGgQQAGgSAFgGQAMgQAVgSIAnghQApgjAvgXQAygZA0gPQAwgOA+gGQA2gFA6AGQA0AFA6ARQA3ARAxAZQAwAZAuAlQAtAkAlApQAkArAcAxQAcAwARA1QAPArAIBAQADAXAGBPQADAogCA5IgHA+IARASQAnAqAXAqQAdA1ANAwQAOA3ACA2QACAvgLA7QgJA0gWAwQgVAugfAmQgXAdgOAMQAOAtAFAVQAGAYAIA1QAIAxAAAiQABAtgHAqQgIAvgNAoQgQA1gSAgQgYArgdAhQgfAjgjAZQgRAMgWAMQAKAcAEAOQAMAwgBA1QgCAxgQA2QgQA2gbAuQgcAvgkAnQgdAfg0AkQgjAZg6AYQg0AUgwAKQgkAHhAAFQgvADg1gGQgtgFg1gSQgogOgwgdQgLgHgPgOIgZgZIgHgHIABADQAPAugEAuQgEA2gUAtQgTAtgjAvQgbAlgtAqQgeAchAAcQgsASg/ANQg1ALg5ACQg3ADg8gHQg7gGg4gRQgugNhAglQgZgOgfgXIgOAQQgiAjguAkQg4AqgfATQguAdg0ATQgrARg/ANQglAHgrAAIghgBg");
	this.shape_84.setTransform(-161.6136,-131.312);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(51,255,255,0.498)").s().p("AvkYWQgygCg/gPQgwgMg6gdQg2gbgpglQgsgmghgxQgSgbgTgpQgYg0gKg1QgMhFACgjQACgfADgSQAFgaAMgRQAZgjAIgjIAGgaQACgNgEgJQgFgQgZgdQgcgfgMgoQgLglABg1QABgnAegyQAYgsAegaIAUgSIgFgOQgNgsABgrQACg1AIgeIALgmQAIgUALgLQAggeABgWIACgYQAAgPgEgLQgGgZAKgjQAGgXAcggQAIgIALgFIgWgIQgygOgjgkQghgigYgxQgYgxgHg0QgKg8AFguQAGgwAUg4QASgxAeguQAUgeAwguQArgoAhgYQAigYAygYQAogTAwgQQArgOAvgGQASgCBIgEQAvgCAqABQAoACAyANIAsAQIAZgOQAxgZAoAAQAKgBAOACIAYACIgEgPQgKglAEgtQAEgnAIgpQAKg3AJgVQAGgOATg5QAEgNADgZQADgbADgNQAPgvARgiIAVgsQANgaAMgSQAcgoAsglQAygqAogSQAygXAzgLQAogIBCgCQAugCA8AVQA3ARAqAdQA4AlAWAeQAhAvAMAwQAFAVAAAEQAKgKAGgQQAHgRAEgGQAMgQAWgTIAnghQApgjAvgWQAwgYA2gQQAygOA8gFQA4gFA4AGQA0AFA6ASQA7ASAtAYQAxAZAtAlQAuAmAjAoQAkAqAcAxQAbAwASA2QAQAwAHA7QAEAhAEBFQAEArgEA2QgBAVgGApIARASQAnAqAXArQAcAzANAxQAOA2ACA3QACAygKA5QgKA0gWAwQgVAtgfAnQgXAdgOAMQAQA0ADAPQAGAYAIA1QAGAyABAiQAAArgIAsQgHArgOAsQgQAzgTAiQgYApgeAiQgeAiglAaQgTANgUALIANAqQANAxgDA0QgCAxgQA2QgRA2gbAtQgdAvgkAnQgeAggzAjQgnAag2AWQg2AVguAJQgoAIg9ADQgrADg5gHQgugFg0gSQgngOgwgdQgLgHgPgOIgZgZIgHgIIABAEQAOAwgEAsQgFA2gVAtQgTAsgjAvQgdAmgsApQggAcg/AaQgsATg+AMQg3ALg3ACQg5ACg6gHQg9gGg3gRQgugOhAgkQgZgOgfgXIgOAPQgiAigwAlQgzAngkAWQguAcg0AUQguARg9AMQgjAGgpAAIgkgBg");
	this.shape_85.setTransform(-159.393,-129.7708);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(51,255,255,0.498)").s().p("AvvYVQg1gEg7gOQgtgLg9gfQg2gcgpgkQgrglgigyQgUgegRgnQgYg1gJgzQgMhCACgnQACghADgQQAFgaAMgQQAYgiAJgmIAFgaQACgNgDgJQgGgTgYgbQgbgfgMgoQgKglACg1QABgmAfgzQAZgrAegaIATgRIgEgOQgOgsABgrQACg1AIgeQANg0ARgRQAgggABgVIACgYQABgPgDgMQgGgZALgkQAIgYAdgdQAHgHALgGIgVgIQgygOgkgkQgggigYgyQgXgvgIg1QgIg9AEguQAGguAVg5QARgwAfgvQATgdAxgvQArgnAigYQAhgYAzgYQAogTAwgPQAsgOAvgGQASgCAbgBIAtgCQApgCAwABQAqACAvAOIAsAQQAPgJAKgFQAygZAoAAIAwADIgEgPQgKgkAEguQADggAJgwQAKg2AKgXIANgkIAMgkQAFgMADgaQADgbADgMQAPgwASgiIAWgsQANgZANgSQAcgoAtgkQA1gqAlgRQAxgWA0gLQArgJA/gBQAtgBA9AVQA3ASAqAdQA3AlAWAeQAhAuAMAxIAFAZQAKgKAGgPQAHgSAFgGQAMgQAVgSIAoghQAqgjAugWQAugXA4gQQA0gOA6gFQA2gFA6AHQAyAEA8ATQA3ARAxAZQAxAaAsAlQAuAlAjApQAlArAbAwQAbAwASA2QAOAtAIA+QAEAgAEBGQADAtgDA1QgBAUgGApIAQATQAnArAXAqQAcAyANAyQANAzACA6QACAwgLA7QgKA0gVAwQgUAsggAoQgXAcgPANQAQA0ADAQQAHAeAGAwQAHAxAAAjQAAAogIAvQgJAxgOAmQgRAzgTAiQgXAoggAjQggAjgkAYQgTAOgUAKQAJAXAEATQAMAtgDA4QgCAwgRA3QgRA1gcAuQgeAxgjAkQgdAfg0AjQgnAag3AVQgzAUgwAKQglAHhAAEQgwACg0gGQgwgHgygRQgogOgvgdQgLgHgPgPIgagYIgJgLIADAHQANAtgEAvQgGA2gUAsQgXAvghAsQgeAngsAnQggAdg+AZQguASg9ALQgzAKg7ADQg4ACg7gHQg6gGg6gRQgugOhAglQgggRgYgUIgPAQQgjAjgvAjQg7ArgdASQgrAbg3AUQgwASg7ALQgiAGgoAAIgngBg");
	this.shape_86.setTransform(-157.1586,-128.205);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(51,255,255,0.498)").s().p("Av6YTQgygEg+gPQgugLg8gfQg2gcgpgkQgqgmgigxQgTgdgSgoQgXg2gJgzQgNhBADgnQABggAEgSQAFgZALgRQAZgiAIglIAGgbQACgNgDgJQgGgSgYgdQgZgegMgpQgLgnAEgzQACgmAegzQAbgsAcgYIAUgRIgEgOQgOgsABgrQABgyAIghQAHgaAFgMQAIgUAKgMQAfghACgUIACgZQABgPgCgMQgFgaANgkQAIgXAegcQAHgHAMgGIgVgIQgxgNgkgmQghgjgXgwQgXgwgIg1QgIg8AFguQAGgvAVg5QATgxAegtQAWggAvgsQAngkAlgbQAkgZAxgWQAkgSA0gQQAqgOAxgFQASgCAbgBIAtgCQAvgCAqACQAqACAwAOQAJADAiAOIAagOQAwgYApgBIAwAEIgEgQQgJgkADguQADghAJgwQAMg3AJgWQAFgMAVg8QAEgMADgaQAEgbAEgMQAQgyARggIAXgsQAOgZAMgSQAegoAsgjQAzgpAogRQAygWAzgKQApgIBAgBQAtgBA/AVQA2ATAqAcQAcAUAOAMQAVASANASQAhAuAMAyQAGAVAAAEQAJgKAHgQQAHgSAFgGQAMgQAVgSIAoggQAqgjAugWQAygYA1gPQA0gOA6gEQA0gFA7AHQA0AFA6ASQA2ARAyAaQAuAYAvAnQAvAnAiAnQAlAtAaAvQAbAvASA3QAPAuAHA9QAEAhAEBFQADAvgEAzQgCAUgGApIARATQAoAtAVAoQAdA2ALAvQANAzADA6QABAwgLA7QgKA0gVAwQgYAwgdAkQgXAdgOAMQAPA0ADAQQAIAjAFAsQAGAzAAAhQgBAsgIAsQgJAugOApQgSAzgUAiQgYAqgfAgQghAjgjAYQgSAMgWALIANArQALAugDA2QgCAvgSA4QgQA0gdAvQgdAtglAoQgfAggyAhQgnAag3AVQgxATgzAKQgsAIg5ADQgtACg3gHQgvgGgzgSQglgNgygfQgMgHgOgOIgZgZIgKgMIACAJQANAvgFAtQgGA3gVArQgXAvgiArQgeAmgsAoQggAcg/AYQgrASg+ALQg2AKg5ACQg7ACg4gHQg+gHg2gQQgwgPg/gkQgfgSgZgTIgPAPQggAhgzAlQg6ArgeARQgwAdgyASQgyASg6AKQgfAGgoAAIgqgBg");
	this.shape_87.setTransform(-154.9347,-126.6756);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(51,255,255,0.498)").s().p("AwEYRQgzgEg9gPQgvgMg7geQg4gfgmgiQgsgogggvQgUgegRgoQgXgygKg2QgLhDACglQABggAEgSQAFgaALgQQAYgjAJglIAGgaQACgOgDgJQgFgRgYgfQgZgegLgqQgKglADg1QADgmAfgyQAZgpAfgaIAUgRIgFgOQgOgsABgrQABgzAJggQANgzAQgTQAfghACgVIADgaQABgPgCgNQgEgaAOgjQAJgYAfgaQAHgHAMgFIgVgJQgxgOgkglQgfghgYgyQgXgwgHg1QgIg8AFgvQAHgxAVg2QATgyAegsQAVgfAwgsQAmgjAngcQAigYAzgXQAlgRAzgRQArgNAwgFQATgCAbgBIAtgCQApgBAwACQAmACAzAPQAJADAjAOIAZgOQAwgXAqgCIAwAEIgEgPQgKglAEguQADgjAJguQAKg2ALgYQAKgZAQgvQAFgNAEgaQAEgbAEgMQAQgwASgiIAXgrQAOgaANgRQAegnAtgkQA0goAogRQAzgVAygKQAogIBBAAQAvAAA9AWQA0ARArAeQAcAUAOAMQAWASANATQAhAuALAxIAGAZQAJgKAHgQQAHgRAFgGQAMgQAWgSIAnghQApghAwgXQAxgXA2gPQAwgOA+gFQAzgDA8AGQAzAGA7ASQA6ATAtAYQAvAZAuAmQAvAnAiAoQAkAsAbAwQAbAwARA2QAPAuAHA9QADAYAEBOQADApgEA5QgBASgHAsIARASQAnAtAWApQAbA0AMAxQAOA0ABA5QACAxgLA5QgKA2gWAuQgUAsggAoQgVAbgRAPQANAsAGAZQAFAZAHA2QAFAzAAAiQgBArgJAtQgIAqgQAtQgSA0gUAhQgbArgeAfQgiAjgjAXQgPAKgZANQAKAbADAQQAKAtgDA3QgDA0gSAzQgRA1gdAtQgdAvgkAmQgfAfgzAiQgmAZg5AVQg0AUgwAJQgoAHg8ADQgvACg1gHQgxgHgxgSQgngOgwgeQgMgHgPgOIgZgZQgFgFgGgJIADALQAMAvgFAtQgGA1gWAtQgWAtgkAsQgfAngsAmQghAdg+AXQgtARg9ALQg4AKg2ABQg2ACg9gHQg+gHg2gQQgwgPg/glQgfgRgZgUIgPAPQgjAigxAkQg1AmgkAWQguAcg1ASQgxASg6AKQgfAGgnAAIgrgCg");
	this.shape_88.setTransform(-152.7306,-125.1221);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(51,255,255,0.498)").s().p("AwPYPQgygEg+gQQgugLg7ggQg2gbgpgmQgrgngggwQgUgfgRgmQgWgzgKg2QgMhEACgkQACghADgQQAFgbAMgQQAYgjAIglIAGgbQACgOgCgIQgGgUgXgdQgYgggLgpQgJglAEg1QADgmAfgxQAbgpAegaIAUgRIgFgNQgNgsABgrQAAgvAJgkQANg0AQgTQAegjADgUIADgaQACgQgBgMQgEgaAQgkQAJgWAggcQAHgFANgGIgVgIQgzgPgiglQgggigXgxQgXgwgGg1QgIg+AGgsQAGgvAWg4QATgyAegsQAVggAxgrQAqgnAjgYQAhgXA0gXQAmgRAzgRQAsgNAvgFQAYgCBCgBQAqgCAwADQAmACAzAQIAsARIAZgPQAygXAogBIAvAFIgDgQQgKglAEguQADgjAJguQAMg5AJgWIAbhJQAFgMAEgaQAEgbAFgNQAQguATgkIAYgrQAOgZAOgRQAfgoAsgiQA1goAngQQA2gWAwgJQArgHA+ABQAuAAA9AWQA4AUAoAcQAcAUANALQAWAUANASQAgAtAMAyQAFATABAGQAJgKAHgQQAHgRAFgGQAMgQAWgSIAoghQApggAvgYQAxgXA2gOQAzgOA7gEQA0gEA8AHQA2AGA3ATQA3AQAxAbQAxAbAsAkQAsAlAkAqQAiApAdAzQAbAyAQA0QAOAsAIA/QACAWAFBQQACAxgDAxQgCASgGAsIAQATQAmAsAWAqQAcAzAMAyQAMA3ACA2QABAxgLA6QgKA1gVAuQgWAugfAnQgVAbgRAPQAPAzAEATQAGAdAFAzQAFAuAAAmQgCAtgJArQgJAugQAqQgSAxgVAjQgaAqgfAgQgiAigkAYQgTAMgVAKIAMArQAKAwgEA1QgDAugSA4QgSA1gdAtQgbArgnApQgeAeg1AjQgmAZg4AUQgzATgxAJQglAHhAADQgsACg4gIQgxgGgxgSQgngOgwgeQgLgHgPgPIgZgYQgGgGgGgJIADAMQALAugFAvQgHA0gXAtQgVArglAtQgfAmgsAnQggAbhAAXQgsASg+AKQg4AKg2ABQg3ABg9gHQg6gGg6gSQgugOhBglQgbgQgdgVIgPAOQglAlgwAhQg3AngiAVQgwAcgzASQgvAQg9ALQgfAFgmAAQgVAAgXgCg");
	this.shape_89.setTransform(-150.5275,-123.5499);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(51,255,255,0.498)").s().p("AwaYOQgxgEg/gQQgugMg7ggQg2gdgogkQgrgogggwQgTgdgSgoQgWg1gKg0QgLhBACgnQACggADgSQAFgaAMgQQAYgkAIgkIAGgbQACgOgDgJQgFgUgXgeQgYgggJgpQgJglAFg1QADgmAggwQAbgqAegZIAUgQQgDgGgBgIQgOgrABgsQAAgvAJgkQANg0AQgTQAeglADgTIADgbQACgQAAgMQgCgcAQgiQAKgWAhgaQAHgHANgEIgWgJQgygOgiglQgfgjgXgxQgXgwgGg1QgHhAAFgqQAHgvAWg4QASgvAggvQAUgdAyguQAmgjAngbQAkgYAygWQApgSAwgPQApgMAygFQAYgDBCgBQAwgBAqADQAoADAxAPIAsARQAMgHANgGQAxgXApgBIAwAEIgEgQQgJglADguQAEglAJgtQALg2AKgYQALgZARgwQAEgMAFgbQAEgbAFgNQATgxASggIAYgrQAPgZANgRQAggoAtghQAygmAqgSQA1gVAxgIQApgHBBABQAtAAA9AWQA3AUApAdQA2AnAVAeQAgAtANAzQAEARABAHQAJgJAHgQQAIgRAFgGQANgQAVgSIAoggQApghAwgXQAxgXA2gOQAzgOA7gEQAxgDA+AHQA0AGA6ATQA2ARAxAaQAwAbAtAlQAuAoAhAnQAkArAbAyQAZAtASA5QAPAvAHA8IAHBmQACAtgEA1QgDAbgGAjIARATQAmAsAWAqQAbA3ALAvQANAzABA5QACAygMA5QgKA1gVAvQgWAugfAmQgVAcgRAOQANAtAFAaQAFAYAGA4QAFA0gBAhQgCArgKAuQgKAwgPAnQgTAxgWAjQgZApghAhQgjAjgjAWQgRALgYALIAMArQAKAygEAzQgEAvgSA3QgRAygfAwQgeAvglAkQgeAfg0AhQgnAZg4AVQg0ATgwAIQgsAIg5ABQgxACgzgIQgvgGgygTQgogOgwgeQgLgHgPgOIgZgZQgGgGgIgMIAFAPQAKAxgGAsQgHA0gXAtQgYAugjAqQgfAlguAnQgfAahBAYQgtAQg8AKQg2AJg5ACQgzABhAgHQg8gHg4gSQgtgNhDgmQgcgQgcgWIgPAPQgkAjgyAiQg4AoghATQguAbg2ATQgxARg7AKQgeAFgkAAQgWAAgZgCg");
	this.shape_90.setTransform(-148.2839,-122.0101);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(51,255,255,0.498)").s().p("AwkYMQgzgFg9gQQgugMg7ggQg1gcgpgmQgqgmghgyQgRgagTgrQgXg2gJgzQgLhAACgoQACggADgRQAFgaALgRQAYgjAJglIAGgcQACgOgDgJQgGgVgVgdQgXgfgJgrQgJglAGg1QAEgmAggwQAcgqAdgXIAVgQIgFgOQgNgrAAgrQABgzAIggQANg1APgTQAeglADgUQAHgoAAgQQgBgeARggQALgWAhgZQAIgGANgEIgVgJQgygOgigmQgggjgXgxQgVgwgHg1QgHg9AGguQAHgwAWg2QATgwAgguQAWgfAwgrQAmgkAogaQAggWA1gYQAngRAzgPQAngMA0gFQASgCBJgBQApgBAwADQAqAEAwAPIArARIAagNQAygXAoAAIAvAEIgDgQQgKgmAEgtQAEgmAJgtQALg3AKgYIAPglIAOgkQAEgMAFgbQAFgbAFgNQASgvAUgiIAZgrQAPgZANgRQAggnAtghQA5goAkgOQA0gUAzgJQArgHA+ACQAvAAA8AXQA1AUApAdQA4AoAUAeQAgAtAMAyQAFATAAAGQAKgKAHgQQAHgRAFgGQANgQAWgSIAoggQAsgiAtgVQAvgWA4gPQA1gOA5gDQA3gDA5AHQAzAGA6ATQA5ATAuAZQAxAcArAkQAuAmAiAqQAjAqAbAyQAaAwARA3QAPAwAGA6QAEAiADBFQACApgEA5IgJA+IAQATQAmAsAVArQAcA1ALAwQAMAzACA6QABAwgMA7QgKA1gWAvQgVAtgfAnQgYAegOAMQANAvAFAYQAGAeAEAzQAFA0gCAiQgCAtgKAsQgLAvgPAoQgVA0gVAgQgaApggAgQgiAiglAXQgVAMgUAKQAIAcADAPQAJAwgEA1QgFAygSA0QgSAygeAvQggAwgjAjQgeAdg1AjQgmAYg5AVQgxASgzAJQgpAGg8ACQgvACg1gIQgsgGg2gTQgpgPgugeQgLgIgPgNIgZgZQgHgHgJgNQAEAHACAKQAJAwgGAtQgJA1gXAsQgXArglAsQgfAlguAmQgfAahBAXQgwARg6AJQg5AJg1AAQg2ACg9gHQg9gIg3gRQgtgNhDgnQgfgSgZgUIgQAPQghAgg1AlQg/ArgbAQQgyAcgyARQgwAQg8AKQgdAFgjAAQgXAAgagCg");
	this.shape_91.setTransform(-146.0908,-120.4641);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(51,255,255,0.498)").s().p("AwvYKQgxgEg/gRQgugNg7gfQg2gegnglQgsgpgfgvQgTgfgRgmQgWgzgJg2QgMhBADgnQABggAEgSQAFgaALgRQAYgjAJglIAFgcQADgOgDgJQgFgUgWgfQgWgggJgqQgHgkAGg2QAFgmAggvQAbgpAegYIAVgQIgFgOQgNgsAAgqQAAgvAJgkQAMgzARgVQAdgnADgTIAFgcQADgQAAgNQAAgdASghQAMgWAigYQAGgFAPgFIgWgJQgxgOgigmQgggkgWgxQgUgugIg3QgGg8AGguQAHgtAWg5QAUgxAggtQAVgdAxgtQAmgjAogbQAjgXAzgWQAogRAygPQAqgMAxgEQAUgCAaAAIAtgBQAtAAAtADQApAEAwAQQAOAEAeANQANgIANgFQAygXAoAAIAvAEIgDgPQgKgnAEgtQAEgmAIgtQANg5AKgWQALgaARgwQAFgMAFgbQAGgbAFgNQATgxAUggIAZgrQAPgZAOgQQAggmAugiQA3gmAngPQA2gVAwgHQAogHBBACQAuACA9AWQA5AWAlAcQA2AnAWAfQAgAuAMAxIAFAZQAKgKAGgPQAJgSAEgGQANgQAVgRIApggQAqgiAwgVQA0gXAzgNQAygOA8gDQA3gDA4AIQA0AGA6ATQA5AUAtAYQAwAbAtAmQAtAmAhApQAkAsAaAxQAbAvAQA3QAPAtAGA+QAFAqABA9QADAvgFAzIgJA+IAQATQAlAsAWArQAaAzAMAzQAMA0ACA5QABAvgMA7QgLA3gVAtQgXAugeAnQgVAcgRAOQAOAyAEAWQAGAhADAwQAFAxgCAlQgDAwgKApQgLAvgQApQgUAwgXAkQgaApgiAfQgiAiglAXQgPAJgaAMIALArQAIAvgEA2QgFAxgTA1QgSAzgeAuQggAwgkAiQggAfgzAhQgnAZg5ATQgyATgyAIQgrAHg6ABQgvABg1gIQgxgHgwgTQgpgPgvgeQgLgHgPgOIgZgZQgIgIgIgNQAEAJABAKQAKAugIAvQgIA0gYAsQgYAtglApQggAmgtAkQghAag/AXQgvAPg8AKQg1AIg4ABQg5ABg7gHQg7gHg5gSQgvgOhBgmQgdgQgcgVIgPAPQgpAkguAgQg9AqgeARQgyAcgyAQQg0ASg5AIQgcAEgiAAQgYAAgbgCg");
	this.shape_92.setTransform(-143.85,-118.9194);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(51,255,255,0.498)").s().p("Aw6YIQgygEg9gRQgwgOg5gfQg0gcgpgnQgtgqgdguQgTgdgRgoQgXg3gIgyQgMhBADgoQABgfAEgSQAFgaALgRQAXgiAJgnIAGgcQACgOgCgKQgFgVgVgeQgWgfgIgsQgHgmAHgzQAFgnAgguQAdgqAegWIAUgQIgEgOQgOgpAAgtQAAgxAJgiQALgzARgWQAdglAEgVQAJgrAAgPQABgeATggQAMgVAkgYQAGgFAOgEQgPgIgGgBQgxgPgigmQghglgUgwQgWgxgFg0QgHg8AHguQAHgvAXg3QAVgzAegqQAWgeAxgtQAkggArgdQAngZAvgUQAogRAygOQAqgMAygEQASgCAbAAIAuAAQAxAAAoAEQApADAwAQIAsASIAagNQAxgWApgBIAvAEIgDgPQgJgnAEgtQADglAJguQAMg4ALgYQALgZASgxQAFgMAGgbQAFgbAGgOQAUgyAUgeIAZgrQAQgYAOgRQAhgmAughQA2glAogPQA1gTAygIQAqgGA/ACQAuACA8AXQA4AVAmAdQA1AmAWAgQAgAuAMAxQAFARAAAIQAKgJAHgQQAIgRAFgGQANgQAWgSIAogfQAqghAwgWQAygWA2gOQA1gNA5gDQA0gCA7AHQA1AHA4ATQA1ARAxAbQAuAaAuAnQAvAoAgAoQAjArAbAxQAaAwARA3QAOAvAGA8QAEApACA+QACAsgFA2QgDAZgHAlIARATQAjArAXAtQAbA1ALAxQAMA0ABA5QABAwgMA6QgLA3gVAtQgWAugfAnQgYAegOANQALAlAGAiQAGAjADAwQAEA1gCAhQgDAvgLAqQgJAqgTAuQgUAwgXAjQgbApgiAgQgjAhglAWQgPAKgaAMIAKArQAJAvgFA2QgFAugUA3QgSAygfAvQgfAuglAkQgfAeg1AhQgpAZg2ATQg0ATgxAHQgoAGg9ABQgsACg4gJQgtgHg0gTQgpgPgugeQgMgHgOgOIgZgZQgIgIgLgRQAFAKACANQAJAvgIAuQgKA1gYAqQgYAsglArQggAkguAlQggAZhBAWQgtAQg9AIQg1AJg5AAQg6ABg5gHQg7gHg5gSQgvgOhBgmQgegRgbgVIgQAPQglAigzAiQg5AngiATQgtAag4ATQgyAQg6AJQgaAEghAAQgZAAgegDg");
	this.shape_93.setTransform(-141.6463,-117.3534);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(51,255,255,0.498)").s().p("AxDYGQgvgFhAgRQgwgOg5gfQg0gegpglQgpgnghgyQgTgegQgnQgXg3gIgyQgMhBADgnQACggADgSQAFgaALgRQAYglAIgkIAGgcQADgOgDgKQgFgVgUgfQgVgggIgrQgGgmAHg0QAGgmAgguQAdgpAegXIAVgPIgFgOQgNgsAAgqQAAgxAIgiQAMgzAQgWQAegpAEgTIAGgcIAEgeQACgdAUgiQANgVAkgXQAGgEAOgEIgUgJQgygPghgmQgggkgVgxQgVgwgFg1QgGg+AGgtQAIgvAXg3QATgvAhguQAVgdAygsQApgkAmgZQAlgYAxgVQAngQAzgPQAsgMAwgDQATgCBIAAQApAAAxAEQAoAEAxARIArASIAagNQAygWApAAIAvAEIgDgQQgJglAEgwQACggAKgzQANg4AKgYQAMgaASgwQAFgNAGgbQAGgbAGgNQATguAWgjQAlg9ATgWQAignAugfQA0gkAqgPQA3gUAwgGQAngGBDADQAuACA8AXQA1AVAoAeQA1AnAWAfQAgAvAMAwQAFATAAAGQAKgKAHgPQAIgRAFgGQANgQAWgSIApgfQAsgiAugUQAwgWA4gOQA0gNA6gCQA1gDA6AIQA1AHA4ATQA3ATAvAaQAvAbAtAmQAtAmAhAqQAkAtAaAwQAYAuASA5QAOAuAGA9QAEApACA+QABAsgFA2IgJA+IAQATQAlAuAVAqQAaA1ALAxQAMAyABA7QABAygMA5QgLA2gWAuQgWAvgfAlQgWAdgQAOQAMAvAFAZQAFAfAEA0QADAzgDAkQgDAsgLAuQgMAvgRAoQgUAxgYAjQgbAogiAgQgmAigjAVQgSAKgYALQAHAYADATQAIAwgGA1QgFAwgUA1QgUA2gdAqQgeAtgnAlQggAeg0AhQgoAYg4ATQg1ATgvAHQgpAGg8ABQgyABgygJQgvgHgygTQgqgPgugeQgLgIgPgOIgZgZQgIgIgMgTQAGALACAPQAIAvgJAuQgJAzgZAsQgaAsgkAqQgiAlgtAjQghAahAAUQgtAQg9AIQgzAHg7ABQg1ACg+gIQg+gIg2gRQgtgPhEgmQghgUgYgSIgQAPQgjAgg1AkQg8AoggARQgyAcgzAQQgzARg6AIQgbAEgdAAQgbAAgegDg");
	this.shape_94.setTransform(-139.5463,-115.7826);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(51,255,255,0.498)").s().p("AxMYEQgygFg9gSQgwgNg4ggQg1gegoglQgqgngggyQgSgegRgnQgWg2gJgzQgLhCACgnQACggAEgRQAEgaALgRQAXgjAKgnIAGgcQACgPgCgKQgFgVgUgfQgVghgGgrQgGgkAIg1QAGgnAhgtQAegpAdgWIAVgPIgFgOQgNgrAAgqQAAgxAIgjQAMgyAQgXQAegrAEgRQAKgvABgMQADgfAVggQAOgVAkgWQAIgFANgCQgOgIgHgCQgxgPghgnQgfgkgVgxQgVgxgFg0QgGg9AHguQAIgvAXg3QAUgvAggtQAWgeAygsQAngiAogaQAmgYAxgVQAogRAygNQAogLA0gEQAZgCBCABQAtAAAtAFQAsAFAtAQIArASQAKgGAQgHQAygWApAAIAvAFIgDgQQgJgnAEguQADgkAKgwQANg4AKgYQAMgaATgxQAEgMAHgcQAHgaAFgOQAVgwAVggQAog+ASgVQAhgkAvghQA1gkAqgOQA0gTAzgHQAngFBDADQAtACA8AYQA4AWAmAdQA2AoAUAfQAgAvAMAwIAGAZQAJgKAIgPQAIgSAFgGQANgPAWgSIApgfQApggAxgWQA1gXAzgMQAxgMA9gDQAzgCA8AIQAzAHA6ATQA3ATAvAbQAvAbAsAmQAsAmAiAqQAkAsAZAxQAaAxAQA2QAOAvAGA8QAEAjACBEQABAwgFAzQgDAZgHAlIAQATQAkAtAWArQAaA1AKAxQANA4AAA1QAAAxgLA6QgMA4gVAsQgWAugfAnQgXAdgQAOQAOAzADAVQAGAjACAxQADA2gDAiQgEAugLArQgNAxgRAnQgWAxgXAiQgcAngiAgQglAigkAVQgOAIgcAMQAHAdACAPQAIAugGA3QgGAwgUA1QgSAxggAvQggAuglAjQggAfg0AfQgnAYg5AUQg0ARgxAHQgqAGg7ABQgvAAg1gIQgxgIgwgSQgrgRgsgdQgMgIgPgOIgZgZQgIgIgOgWQAHAMACARQAHAxgJAsQgKAzgZAsQgZAsgmApQgiAmgtAiQgUAPgbAMQgSAIghAKQgvAQg7AHQgyAHg7ABQg3ABg9gIQg7gHg5gSQgvgPhCgmQghgUgYgSIgQAOQgmAigzAiQg+AogeARQg0AcgxAPQg0ARg5AIQgaADgdAAQgcAAgfgDg");
	this.shape_95.setTransform(-137.4963,-114.2741);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(51,255,255,0.498)").s().p("AxVYCQgzgFg8gSQgtgNg7ghQg1gegoglQgqgpgfgwQgTgegRgoQgWg4gIgxQgLg+ACgqQACggAEgSQAEgaALgRQAXgjAJgmIAHgdQACgPgCgKQgFgXgTgeQgUgggHgsQgFglAJg1QAHgmAhgtQAegoAegVIAUgPIgEgPQgOgqAAgrQgBgvAJgkQAMgzAQgXQAdgqAFgTQALgxACgKQAEggAVgfQAPgVAkgVQAKgGAMgBQgOgIgHgCQgygQgggmQgfglgUgxQgUgvgGg2QgFg+AHgsQAIguAXg4QAUguAhguQAVgeAzgsQAogkAogYQAlgYAxgUQAmgPA1gPQArgLAxgEQAZgBBDABQApAAAxAFQApAFAwARIArASIAagNQAzgVAoAAIAXABIAYADIgDgQQgJgnAEguQADgkAKgwQAMg3AMgZQALgaAUgyQAFgMAHgcQAHgbAFgNQAWgvAVghIAcgqQAQgYAPgQQAhglAwgfQA1gkAqgOQA0gSAzgHQAqgFBAAEQAuADA8AYQA2AVAnAeQA1AoAVAfQAgAvAMAwQAFATAAAGQAKgKAHgPQAJgRAFgGQANgQAWgRIApgfQAogfAygXQAygVA2gNQAygNA9gCQA1gCA6AIQAyAHA6AUQA5AUAtAaQAuAaAtAnQAsAmAiArQAjAtAaAwQAZAvAQA4QAOAvAGA8QAEAiACBFQAAAxgFAyIgKA+IAQATQAlAvAUAqQAZAyAMA0QAMA5AAA0QAAAugMA9QgMA3gVAtQgWAtgfAoQgYAegOANQAMAuAEAbQAFAkADAwQACAzgDAlQgEArgMAvQgOAxgRAmQgYA0gWAfQgcApgjAeQgjAggnAWQgSALgYAKQAHAbADAQQAGAwgGA1QgGAzgUAyQgUA0gfAsQggAtgmAkQgeAdg2AgQgpAZg3ASQg0ARgxAHQglAGhAABQgwAAg0gJQgvgHgzgUQgqgPgtgeQgLgIgPgOIgZgZQgKgJgMgWQAHAOABARQAHAwgKAsQgLAzgZAsQgaAsgmAoQgiAlguAiQggAZhCAUQgsAOg+AIQgxAGg8ABQg3ABg9gIQg8gIg4gSQgxgQhAglQghgTgZgTIgQAOQgmAig0AiQg8AnggARQgxAbg1AQQgxAQg8AIQgZAEgcAAQgdAAgfgEg");
	this.shape_96.setTransform(-135.3971,-112.7387);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(51,255,255,0.498)").s().p("AxeYAQgwgFg/gSQgvgOg5ghQgzgcgpgnQgrgqgegvQgSgcgSgqQgVg1gJg1QgLhCACglQACggAEgSQAEgaALgRQAYgkAIgmIAHgdQACgPgCgKQgFgWgSggQgUghgFgsQgFgmAJgzQAHgmAigsQAcgnAggWIAVgPIgFgOQgNgsAAgqQgBguAJglQALgzAQgYIAVgfQAKgRADgNIAIgdIAGgfQAFgeAWggQAOgUAngWQAKgFALgCQgQgJgEgBQgxgPghgnQgegkgVgyQgUgxgEg1QgFg+AHgsQAHgsAZg5QAWgyAfgqQAYggAwgpQAngjApgZQAkgXAzgVQAqgRAxgNQAwgMAtgCQASgBBJABQAsABAuAFQArAFAuARIArATIAagNQAzgVAoAAIAYACIAYADIgDgQQgJgmAEgwQADglAKgvQAMg3AMgaIAghMQAFgMAHgcQAHgaAGgOQAWgwAWggIAcgpQARgYAPgQQAjgmAvgeQA3gjAogOQA3gSAwgFQAogFBDAEQAtADA8AYQA2AWAnAeQA0AoAWAfQAgAwALAvIAGAZQAKgJAHgQQAJgRAFgGQANgPAWgSIApgfQArggAwgVQA0gVA0gNQA0gMA6gCQAxgCA+AIQA2AIA3AUQA1ASAxAcQAuAbAtAmQAvAqAeAnQAjAtAZAwQAaAxAQA2QAOAxAFA7QAEAoABA/QACAtgHA2QgCATgIArIAQATQAkAuAVArQAaA2AKAxQALA0ABA5QAAAygMA4QgMA2gWAuQgWAugfAnQgWAdgQAPQAMAtAEAcQAFAkACAxQACAwgEAoQgEAvgNArQgOAygSAmQgWAygYAhQgfApggAdQgmAhglAVQgQAJgbALQAIAfABAMQAHAxgHA0QgGAxgVA0QgUA1gfAqQgfAtgnAkQggAeg1AfQgnAXg5ATQgwAQg1AIQguAGg4AAQgtAAg3gJQgwgIgxgTQgtgSgqgcQgLgHgPgOIgZgZQgLgLgNgXQAHAOACAUQAGAwgKAsQgMA1gaAqQgaAqgmApQgjAlguAhQghAZhBATQgvAPg7AGQgwAGg9ABQg4AAg8gHQg4gHg8gTQgwgQhBgmQgigUgYgSIgQAOQglAgg2AjQhAAqgdAPQgvAZg3ASQg0AQg5AHQgZADgbAAQgdAAgggEg");
	this.shape_97.setTransform(-133.291,-111.1626);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(51,255,255,0.498)").s().p("AxnX/QgwgGg/gSQgvgOg5ghQg1gfgnglQgrgrgdgvQgUgfgPgmQgWg1gJg1QgKhDACglQACgfADgSQAFgaALgRQAXglAJgmIAGgdQADgPgCgKQgEgWgTghQgTghgFgsQgEgmAKgzQAHgmAigsQAegnAfgVIAVgPIgFgOQgNgqgBgsQgBgsAJgnQAMgzAQgYQAdgrAFgTIAIgeIAHgfQAHggAWgeQAQgVAmgUQAJgFANgBQgNgIgHgCQgwgQgignQgeglgUgxQgUgzgEgzQgFg9AIgtQAIguAYg3QAVgwAhgsQAVgeAzgrQApgjAogYQAkgYAzgUQAmgPA1gOQAsgLAxgDQAZgBBCACQAoABAyAGQApAEAwASIArATIAagMQA1gVAmAAIAwAEIgDgPQgJgoAEguQADglAKgwQAOg5ALgYIAghMQAFgMAIgcQAHgbAHgOQAVguAYgiQAqg9ASgTQAkgmAvgdQA1giArgOQA0gRAzgGQAqgFBAAFQAuADA7AZQA1AVAoAfQAzAmAXAhQAgAwALAvIAGAZQAKgJAIgQQAIgRAFgGQAOgPAWgRIApgfQAsghAvgTQAwgVA5gNQAxgMA9gCQA2gCA5AJQAyAHA6AVQA5AUAtAaQAxAeApAkQArAmAiArQAkAuAYAwQAaAwAPA3QAPAwAFA7QADAqABA9QABAtgGA2QgDAYgIAmIAQAUQAlAuAUArQAYAzALAzQAMA3AAA3QAAAygMA4QgLA1gXAvQgWAugfAnQgaAggMAMQAMAzADAXQAFAkACAxQACAzgEAmQgFAtgNAtQgQAygRAmQgXAwgZAiQgdAogjAeQgjAfgoAWQgQAJgbALQAGAaADASQAGAwgHA1QgHAxgVA0QgVA0gfAqQggAtgmAjQgjAhgzAcQgmAXg6ATQgzARgyAGQgvAHg3gBQgxAAgygJQgtgIg1gUQgrgRgsgdQgMgIgOgNIgZgaQgJgIgRgcQAIAPADAVQAEAwgKAtQgMA0gaAqQgaAqgoApQglAmgsAfQggAYhCATQgsANg+AIQg1AGg4AAQgzABhBgIQg9gJg3gSQgygQg/glQgigTgYgUIgRAPQgnAhg1AiQhBApgcAPQgwAZg2ARQg1AQg5AHQgXADgaAAQgeAAgigEg");
	this.shape_98.setTransform(-131.216,-109.6181);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(51,255,255,0.498)").s().p("AxxX9Qg0gHg7gSQgugOg5ghQg4gigkgjQgogngggyQgTgegQgoQgWg2gIg0QgKhEACgkQACgfADgSQAFgaALgSQAYgnAIgjIAHgdQACgPgCgLQgEgXgSghQgSghgEgsQgEgnAKgyQAJgmAhgrQAfgnAfgVIAVgOIgFgOQgNgpgBgsQgBgtAJgnQALgzAQgYQAdgsAGgTIAQg9QAIghAXgdQAQgVAngTQAJgFANgBQgQgJgEgBQgxgRgggnQgegkgUgyQgUgygDg0QgFg7AIgvQAIguAZg3QAUgvAigtQAWgdAzgrQApgjAngZQAkgWA0gUQArgRAwgMQAqgKAzgEQATgBBJADQAqAAAwAHQArAFAuASIArATIAagMQAzgVAoABQAMAAAkAEIgEgQQgIgmAEgwQADgnALguQALg1ANgdIAhhMQAFgMAIgcQAIgbAHgOQAXgwAXggQAqg7ATgVQAkgkAvgeQA3ghAqgOQA2gRAxgFQAogEBDAFQAwAEA4AYQA2AXAnAeQA0ApAVAfQAgAvAMAwIAGAYQAJgJAIgPQAJgRAFgGQAOgQAWgRIAqgeQAsghAvgTQAygWA2gMQA2gMA5gBQAzgCA7AJQAzAIA5AUQA4AUAuAbQAtAbAtAnQAvAqAeAoQAhAqAbAzQAYAtARA6QAOAyAFA6QADAqABA9QABAsgHA3QgCATgIArIAPAUQAkAuAUArQAZA3AKAwQALA0AAA5QAAAxgMA6QgMA2gWAuQgWAtgfAoQgaAggNAMQAMAxADAZQAFAmACAwQABA3gEAiQgFAsgOAvQgPAvgTAoQgWAvgaAkQggApghAcQgkAfgoAWQgSAKgZAJQAHAdABAPQAGAxgHA0QgIAzgVAyQgUAyggAsQggAsgnAkQggAdg2AfQgoAXg4ASQg0ARgxAHQgmAFhAAAQgvAAg1gKQgvgIgygUQgpgQgugeQgMgIgPgOIgZgZQgMgMgOgZQAIAPADAWQAEAwgLAtQgNA0gbAqQgaApgoApQgiAkgwAhQgUAOgbALQgTAHggAKQgrANg/AHQg1AGg4AAQg1AAg/gIQg8gJg5gSQgvgPhCgnQgjgUgXgSIgRAOQgpAigzAgQg/AogfAQQgyAag1AQQgxAPg9AHQgWADgZAAQgfAAgjgEg");
	this.shape_99.setTransform(-129.124,-108.0679);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(51,255,255,0.498)").s().p("Ax6X7QgzgHg8gSQgwgPg3ghQg0gegngnQgpgogfgyQgSgbgRgqQgVg1gJg1QgKhBACgnQACggADgRQAFgbALgRQAXglAJgmIAGgdQADgPgCgLQgEgXgRgiQgSghgDgsQgEgoAMgxQAIglAigrQAhgoAdgTQAKgIALgGIgEgPQgOgpgBgsQgBguAJgmQALgyAQgZIAVghQAKgSAEgNIASg9QAIgiAYgdQARgVAngSQAKgFAMAAQgNgIgGgDQgygQgfgoQgeglgTgxQgTgwgEg2QgEg8AIguQAKgwAYg1QAVgvAhgsQAYggAxgpQAogiApgZQAogYAwgSQApgQAzgMQArgLAygCQASgBBKACQAwADAqAFQAnAFAyATIAqAUQAQgJALgEQA0gUAnAAIAYACIAXADIgDgQQgIgnAEgwQADgnALguQANg3AMgbIAhhNQAFgMAJgcQAIgbAHgOQAXgvAYggQAng4AXgYQAlgkAvgdQA2ghArgNQA1gRAygFQAugEA9AGQAvAEA6AZQA5AZAjAcQAzAoAWAgQAfAtANAyIAFAYQAKgJAIgPQAJgRAFgGQAOgPAWgRIAqgfQArgfAxgUQAygVA2gMQA0gMA6gBQA1gCA6AKQAzAHA5AVQA6AVArAaQAvAcArAnQAvAqAeAnQAgAqAcA0QAXAuARA5QAOAvAFA8QADAjABBFQABAxgHAyQgDAagIAkIAPAUQAkAvAUArQAZA2AJAxQALA0AAA5QAAAygNA5QgLA0gWAwQgXAugfAnQgWAcgQAQQALAuADAdQAFAlABAyQABAzgFAmQgGAugNAsQgQAxgTAnQgYAxgZAhQgdAnglAeQglAfgnAVQgSAKgaAJQAHAcABAQQAGAugIA3QgIAxgVA0QgWAygfAsQgiAtgmAiQgiAeg0AeQgkAVg8AUQg1AQgxAHQgtAFg4gBQgxAAgzgKQgsgHg1gVQgqgRgtgeQgMgHgPgOIgZgZQgLgLgPgaQAIAQABAWQAEAugMAuQgNA0gbAqQgZAngqAqQgiAigwAiQggAWhDAUQguANg8AGQg4AFg1AAQg3AAg9gIQg/gJg2gSQgugPhDgnQghgTgagUIgRAOQgpAjg0AfQhCApgcAPQg0AagyAPQg0AQg7AGQgUACgYAAQggAAglgEg");
	this.shape_100.setTransform(-127.024,-106.5264);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(51,255,255,0.498)").s().p("AyDX5Qg1gHg6gTQgwgPg3ghQg0gegngnQgpgogfgyQgSgcgQgqQgVg0gJg1QgKhBACgnQACggADgSQAFgaALgRQAXgmAJglIAGgeQADgQgCgLQgDgVgSgkQgQgggDguQgDgnAMgxQAJgmAjgqQAfgmAfgUIAVgOIgFgOQgNgpgBgsQgBgtAJgnQALgzAQgZIAUghQALgTAEgNIATg9QAKgiAYgdQARgUAogSQAIgEAOgBIgUgLQgwgQgggoQgegngSgwQgTgwgDg2QgEg8AIguQAJgsAZg5QAWgwAhgrQAXgeAygqQAqgiAogYQAlgXAzgTQAlgPA2gNQApgKA1gDQAPAABNACQAyADAoAGQAoAFAxATIAqAUQAMgHAPgFQA0gVAnABIAYABIAYADIgDgQQgJgmAEgxQAFgoAKgtQAMg3ANgcIAihNQAFgMAJgcQAJgbAHgOQAWgsAagjQArg7AUgUQAnglAtgbQA6giAogMQA2gQAygEQAqgEBAAGQAxAFA3AZQA1AWAoAfQAzAoAWAgQAfAuAMAxQAFATABAGQAKgJAIgQQAJgRAFgGQAOgPAWgRIAqgeQAtggAvgTQAwgUA5gNQA1gLA5gBQAwgCA/AKQA1AIA2AVQA1ATAwAcQAwAdAqAmQAsAoAgAqQAiArAaAzQAYAvAQA4QAOAuAFA9QACAcABBMQABAugHA1QgCATgKArIAQAUQAjAuAUAsQAZA3AJAwQALA2AAA4QAAAugNA8QgMA2gWAuQgXAvgfAnQgTAagTARQAKArAEAiQAFAnAAAvQABA1gFAlQgGAsgPAvQgPAvgUAoQgYAwgbAiQgdAmglAfQgjAdgqAXQgUAKgXAIQAGAhABALQAFAwgIA1QgIAwgWA1QgVAyghArQggAtgnAiQgjAfgzAcQgpAYg4ARQg3ARgvAGQgtAFg4gBQgtAAg3gKQgwgJgxgUQgpgQgvgfQgLgIgPgOIgZgZQgLgKgQgaQAJARAAAUQADAvgMAuQgNAxgdAsQgbAqgoAnQglAkguAfQgjAYg/ARQgxANg6AFQg5AGg0gBQg3AAg9gIQg6gIg7gTQgvgQhCgnQgkgUgXgTIgRAPQgpAhg1AgQg3AjgnAUQgxAag2APQg1AQg6AGQgUACgVAAQgiAAgmgFg");
	this.shape_101.setTransform(-124.949,-104.9564);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(51,255,255,0.498)").s().p("AyMX3Qg3gIg3gSQgxgQg2ggQgzgfgognQgrgrgcgvQgTgegQgoQgVgzgIg2QgLhCADgmQACggADgSQAFgaALgSQAWglAJgmIAHgeQADgQgCgLQgDgXgRgiQgQgggCgvQgCgnAMgxQAJglAjgqQAhgnAegTIAVgOIgFgOQgNgrgBgqQgBguAIgmQAMgzAPgZIAUghQALgTAEgNIAVg/QALghAYgdQATgVAngQQAJgFAOAAQgOgJgGgCQgwgRgfgoQgdglgTgyQgSgwgDg2QgEg+AJgsQAJguAZg3QAVguAigtQAWgbA0gsQAqgjAogXQAkgXA0gTQAngPA1gNQAvgKAvgCIAuABIAuACQAsACAuAHQArAGAuATIAVAJIAWALQAOgIAMgEQAzgUApAAIAXACIAYADIgDgQQgIgnAEgwQADgkALgyQAPg6ALgZIAihOQAGgMAJgcQAJgbAHgNQAZgvAYghIAfgoQASgWAQgQQAlgkAwgbQA2ggAsgNQA0gPAzgFQAogDBDAGQAxAGA3AYQA2AYAmAeQAzApAWAgQAfAwAMAuIAGAZQAKgJAIgQQAJgQAGgGQAOgPAWgRIAqgeQAqgfAygUQA1gVA0gLQA2gLA4gBQA2gBA5AJQA2AKA1AUQA3AUAuAcQAwAdApAmQAsAnAgArQAkAuAXAwQAZAwAPA3QAOAyAEA5QAEAqAAA+QAAAwgHAzQgDAUgJArIAPATQAjAvAUAsQAYA0AKAzQALA1AAA4QgBAxgMA6QgNA2gWAuQgXAugeAnQgTAZgUATQALA0ADAZQAEAgABA3QAAA2gGAkQgGAugPAtQgQAxgUAnQgZAwgaAhQgfAngkAeQgnAfgnAUQgUAKgYAIQAHAhABALQAEAygJAzQgIAxgWA0QgWAyggArQggArgoAjQgiAeg1AdQgoAXg5ASQg0AQgxAGQgqAFg8gBQgtgBg3gKQgugIgzgVQgqgRgtgeQgOgJgmgmQgLgKgQgaQAIARABAUQABAvgMAuQgOAzgdAqQgZAmgrAqQgjAigwAgQgiAXhAARQguAMg9AGQg1AFg4AAQg5gBg7gIQg7gIg6gUQgvgQhDgmQgegRgdgWIgRAOQgoAgg2AhQhAAnggAQQg1AbgyANQgyAPg8AGQgUACgWAAQgiAAgmgFg");
	this.shape_102.setTransform(-122.8583,-103.4032);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(51,255,255,0.498)").s().p("AyVX1QgzgHg8gTQgvgQg3ghQgzgfgognQgqgqgdgwQgSgcgQgqQgVg1gIg1QgLhCADgmQACggADgRQAFgbALgRQAXgpAIgjIAHgeQADgQgCgLQgDgYgQgjQgQgigBgsQgCgoANgwQALgmAigpQAhgmAegTIAWgNIgFgOQgNgogCgtQgBgvAJglQALgyAQgbQAdgwAGgSIAWg/QAMghAZgdQASgUApgRQAJgEANAAIgTgLQgwgSgfgoQgdgngSgwQgTgzgCgzQgDg9AJgtQAJgsAag4QAXgxAhgqQAWgdA0gqQApgiApgYQAlgWAzgUQAqgPAzgMQArgKAygBQAUgBBIAEQAvADAsAGQAsAHAsATIArAUQAMgGAPgGQA0gTAnAAQAMAAAkAFIgDgQQgJgrAFgtQADglALgxQAOg4AMgcIAjhNQAGgLAKgdQAJgbAHgOQAYgtAagiQAtg6AUgUQAmgjAwgbQA6ghAogLQA2gQAygDQArgDA/AHQAvAEA6AaQA1AXAmAfQAyAnAXAiQAfAtAMAxIAGAZQAKgJAJgPQAJgRAFgGQAPgPAWgRIAqgeQAqgdAygVQAzgUA2gMQA0gKA7gBQAzgBA7AKQA2AJA2AUQA1AUAvAdQAuAcArAnQAsAoAgAqQAjAvAYAvQAXAuAQA6QAOAxAEA6QADAjAABFQABAqgIA5QgCATgKAsIAPAUQAiAtAVAtQAYA2AJAyQAKAyAAA7QAAAzgNA4QgNA2gWAuQgXAugeAnQgWAcgRAQQAKAsADAiQAEAlAAAzQAAA1gGAlQgHAvgOAsQgRAvgUAoQgZAwgcAiQgeAmgmAeQglAegpAUQgRAJgbAKQAGAbABARQAFAwgKA1QgKAzgVAxQgWAyghArQghArgnAiQghAdg2AeQgqAYg3AQQg0AQgyAGQgrAFg7gBQgugCg2gJQgugJgzgVQgngPgwggQgMgIgPgOIgZgZQgLgLgPgaQAHARAAAVQACAugOAvQgPA0gcAoQgcApgpAnQglAigvAfQghAWhCARQgwAMg6AFQg4AFg1gBQg0AAhAgJQg4gIg9gTQgwgQhCgnQgggTgbgUIgSAOQgmAfg5AiQhCAogdAOQg1AagzAOQg0APg7AGQgSABgUAAQgiAAgpgFg");
	this.shape_103.setTransform(-120.7833,-101.8524);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(51,255,255,0.498)").s().p("AyeXzQgygHg9gUQgvgQg3ghQg0gggmgmQgqgrgdgwQgTgfgPgnQgVg2gIg0QgKg+ACgqQAEhAARgdQAWgmAKgmIAHgfQACgQgBgLQgDgXgQgkQgPgigBgsQAAgnANgxQALgnAjgnQAeglAhgUIAVgNIgEgOQgOgogBgtQgCgqAJgqQALgzAQgaIAUgiQALgTAEgNIAXhAQANghAagdQAUgVAogPQAJgEAOAAIgUgLQgvgSgfgpQgdgmgRgyQgSgxgCg1QgDg+AJgrQAKguAag3QAVgvAjgrQAYgfAygoQAsgjAngWQAngXAygSQAqgQAygLQAsgKAygBQAZgBBDAFQArACAwAIQApAGAvAUIArAUQAMgGAOgGQA0gTAoABIAYABIAXADIgCgQQgJgoAFgwQADglALgxQAOg3ANgdIAjhOQAGgLAKgdQAKgbAHgOQAXgrAcgkQAug6AUgTQAmgiAwgcQA5gfAqgMQA4gPAwgDQAogDBCAIQAuAFA6AaQA1AXAnAfQAzApAVAgQAfAuANAwIAGAZQAKgJAIgPQAKgRAFgGQAOgPAXgQIAqgeQAvggAugSQA0gUA1gLQA1gLA5AAQA1gBA6AKQA0AJA3AVQA1AUAvAdQAsAaAtApQArAoAhArQAgArAaAzQAZAyAOA1QANAtAFA/QADAjAABFQAAArgIA4QgDAZgJAmIAPAUQAiAuAUAtQAXAzAKA0QALA4gBA1QgBAwgNA7QgMA2gXAuQgUAsghAqQgVAagSASQAKAzADAbQAEApgBAvQAAA0gGAnQgIAvgPAsQgQAugWAqQgYAtgdAkQgfAmgmAdQgpAggmASQgSAKgaAIIAGAtQAEAugJA3QgJAwgXAzQgXA1ggAnQgiAsgnAiQgiAeg1AdQgoAWg5ARQg1ARgxAFQgmAEhAgBQgxgBgzgKQgugJgzgVQgtgTgqgdQgMgHgPgPIgZgZQgLgKgQgaQAGAQABAWQAAAxgNAsQgQAzgdApQgbAngqAoQglAigwAeQgjAWhAAQQgyANg4AEQg4AEg1AAQg3gBg9gJQg8gJg5gTQgsgPhGgoQglgVgXgSIgRAOQgqAhg2AgQhGApgaANQg0AZg0AOQg1APg6AFQgQACgTAAQgjAAgrgGg");
	this.shape_104.setTransform(-118.6956,-100.3036);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(51,255,255,0.498)").s().p("AyoXxQgxgHg9gVQgvgPg3gjQgygegogoQgpgpgdgxQgTgfgPgnQgVg2gIg0QgKhEADglQACgfADgSQAFgaAKgSQAXgnAIglIAIgfQACgQgBgMQgDgYgPgjQgOghAAguQgBgnAOgxQAMgnAjgmQAgglAggTIAVgNIgEgOQgOgqgCgrQgBguAJgmQALg0AQgaIAUgiQALgTAEgNIAZhAQANghAagdQATgTAqgQQAKgEANAAQgMgIgHgEQgvgSgegpQgegngQgxQgRgxgDg1QgCg8AKguQAJgtAag3QAWgtAjgtQAXgeAzgoQAqgiApgYQApgXAxgRQAsgQAwgKQArgKAzgBQAUAAAbABIAtADQAnACA0AJQArAHAuATIAqAVIAbgMQAzgTApABIAvAFIgDgRQgIgoAEgwQAFguALgpQANg4ANgcIAkhOQAGgMALgcQAKgbAHgOQAbgvAZggQArg2AYgWQAmgiAxgbQA5gfAqgLQA2gPAygDQAqgDBAAIQAuAGA6AaQA1AYAmAfQAzAoAWAhQAfAtAMAxIAGAZQAKgJAJgPQAJgRAGgGQAPgPAWgQIArgeQAtgfAvgSQAxgUA5gLQA2gLA4AAQAyAAA8AKQA0AKA3AUQA3AWAtAbQAyAgAnAkQArAoAgArQAhArAaAzQAXAwAPA4QAOAxAEA6QADAjAABFQgBAtgHA3QgDATgKArIAPAUQAkAzARApQAYA3AJAwQAKA2gBA4QAAAugNA8QgMA1gXAvQgXAvgfAnQgXAcgQAQQAJAwAEAfQADAiAAA3QgBAygHApQgHAtgQAuQgQAtgXArQgbAwgbAgQgfAlgmAeQgnAfgpATIgsASQAEAaABASQAEAwgKA1QgKAxgWAzQgVAvgjAtQghArgoAiQghAcg2AeQgoAWg6ARQgzAQgzAFQgpAFg9gCQgxgBgzgKQgwgKgxgUQgsgTgrgdQgOgKgmgmQgLgKgQgaQAGAQAAAWQgBAxgNAsQgRAzgdApQgcAogqAmQgiAfgzAhQgiAVhBAQQgqALhBAFQg0AEg5gBQg2AAg9gKQg6gIg8gUQgxgQhBgnQglgVgXgSIgRAOQguAjgzAdQg9AlgkARQg1AZgzAOQg3APg4AFQgQABgRAAQglAAgsgGg");
	this.shape_105.setTransform(-116.5965,-98.7436);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(51,255,255,0.498)").s().p("AyxXvQgzgIg7gUQgtgPg5gjQgzgggmgnQgogogfgzQgRgcgQgqQgVg3gIgzQgKg+ADgqQACggADgRQAFgaAKgSQAYgqAIgjIAHgfQADgQgBgMQgDgYgPgkQgOgjABgsQAAgpAPgvQAMgnAjgmQAiglAegSIAWgMIgFgOQgNgogCgtQgBgqAIgqQALgyAQgdIAUgiQAMgTAEgOQAHgSATguQAPgkAagZQAUgVApgOQAKgEAOABQgOgKgFgCQgvgUgegoQgcgmgSgzQgRgygBg0QgCg+AKgrQAKguAag2QAXgvAigrQAYgeAzgoQArgjAogWQAmgWA0gTQAogOA0gLQAsgJAygBQAhgBA8AFQAvADAsAIQApAHAvAUIAqAVIAbgLQA2gTAmAAIAwAFIgDgQQgJgpAFgvQAFguALgqQANg2AOgeIAkhPQAGgLALgdQALgbAIgOQAbgwAZgeQAvg5AVgTQAmghAxgbQA7gfAogLQA2gNAzgDQAtgDA9AJQAvAGA5AaQA0AXAnAgQAyAoAWAhQAgAwAMAuIAGAZQAKgJAJgPQAKgQAFgGQAPgPAXgRIAqgdQAugfAvgSQAygTA3gMQA0gKA7AAQAyAAA8ALQA1AJA2AVQA0AVAwAdQAtAdArAnQAsAoAfArQAiAsAYAyQAYAwAPA4QANAyAEA5QADApgBA/QAAArgIA5QgEAZgJAmIAPAUQAiAxATAqQAXA3AJAxQAKA2gBA4QgBAxgNA5QgNA4gWAsQgXAugfAoQgXAcgQAQQAJAwADAgQAEAmgBAzQgCA2gHAlQgHAvgRAtQgRAvgXAoQgZAugdAiQghAnglAcQgnAegqATQgUAKgYAIQAEAbABARQADAygKAzQgLAzgWAxQgWAwgiArQgjAsgnAhQghAdg2AdQgoAWg6ARQg2AQgwAFQgqAEg8gCQgygCgygKQgxgKgwgUQgrgSgtgeQgOgKgmgmQgKgKgQgaQAFASAAAVQgBAvgPAtQgQAxgeAqQgeApgpAlQglAhgxAeQgjAWhAAPQgxALg6AEQguAEg/gBQgwgBhDgJQg6gJg8gUQgvgQhDgnQghgUgbgUIgSAOQgpAgg4AgQg/AlgiAQQg3AagyANQg4APg3AEIggACQgmAAgsgHg");
	this.shape_106.setTransform(-114.4954,-97.1836);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(51,255,255,0.498)").s().p("Ay6XtQgxgIg9gVQgvgPg2gjQg1ghglgmQgpgrgdgwQgRgdgQgpQgUgzgJg3QgJhBACgnQADghADgRQAFgaAKgSQAWgmAJgnIAHgfQAEgRgCgLQgDgdgNggQgNghABgvQAAgnAQgwQAMgmAkgmQAggkAggSIAWgNIgFgOQgOgqgBgrQgCgrAJgpQAKgxARgeIAUgiQALgUAFgOQALgcAQgkQAPgiAcgcQAUgUAqgOQAMgEALACQgLgKgHgDQgwgTgdgpQgdgogPgxQgRgxgBg1QgCg8AKgtQAKgsAbg4QAYgxAhgpQAZgfAzgnQApghAqgXQAngWAzgSQApgPA0gLQAtgIAxgBQAbgBBCAGQApADAxAIQAqAIAvAUIAqAVIAbgLQA1gTAnABIAwAFIgDgRQgJgpAFgvQAEgpAMgvQAOg5AOgcIAlhPQAFgKAMgeQAKgbAJgOQAaguAbggQAtg2AYgVQApgjAvgZQA2gcAtgMQA0gNA2gDQAqgCBAAJQAtAFA6AbQA0AYAnAgQAxAoAXAhQAeAuAOAwIAGAZQAKgJAJgPQAKgQAGgGQAOgPAXgRIArgdQAtgeAwgSQA0gUA2gKQA0gKA6AAQA1AAA5ALQAxAJA6AWQA1AVAuAdQAvAdAqAnQAsApAeAqQAiAtAYAyQAZA0ANAzQAOAzAEA5QADApgBA/QgBAsgIA4QgFAbgIAkIAOAUQAhAuAUAuQAWAzAKA1QAJAzgBA6QgBAxgNA6QgOA4gWAsQgWAuggAnQgVAcgSARQAJAtADAjQADApgBAxQgCA3gHAlQgIAtgRAuQgRAugYApQgaAugdAiQghAmgmAcQgoAfgpASQgVAKgYAHQAFAcAAARQADAwgLA1QgKAygYAxQgXAxghAqQghAqgpAjQgiAdg1AcQgpAWg5ARQg5AQgtAEQgrAEg8gCQgugCg2gKQgwgKgxgVQgpgRgugfQgMgIgPgOIgZgZQgMgMgPgZQAFASgBAVQgBAwgQAtQgRAygeApQgcAlgsAoQglAggxAeQglAWg+AOQguAKg9AFQg7ADgygBQgzgBhBgKQg7gJg6gTQgtgPhGgpQgigUgagUIgSAOQgoAfg6AhQhEAngeAOQg0AZg1ANQg0APg7AEIgeACQgnAAgtgIg");
	this.shape_107.setTransform(-112.4213,-95.636);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(51,255,255,0.498)").s().p("AzDXrQgygIg8gVQgwgRg1giQgygfgngoQgqgsgcgvQgQgcgRgrQgUgygJg4QgJhAACgoQADghADgRQAFgaAKgSQAWgpAJgkIAHgfQAEgRgCgMQgCgagNgkQgMghABguQACgnAPgwQAOgnAjglQAhgjAggSIAVgNIgEgOQgOgqgBgqQgDgqAKgrQAKgxARgeIATgjQAMgUAFgNQALgdARgjQAQgkAcgaQAUgUArgOQAKgDAOABIgTgNQgugTgegqQgbgngRgyQgQgygBg0QgBg9AKgsQALgvAbg1QAXgwAigpQAXgdA1gpQAqghAqgXQAjgUA3gUQAtgPAwgJQAqgJA0gBQAaAABDAGQAvAEAsAIQArAIAtAUIArAWIAagMQA0gSApABIAvAFIgDgRQgHgqAEgvQAEgoAMgwQAOg3AOgeQAZg3ANgYQAGgLAMgeQALgaAIgOQAbguAbggQAxg5AVgSQAnghAygaQA4gcArgLQA2gOAzgCQAsgBA/AJQAtAGA6AbQA2AaAkAeQAxAmAXAjQAfAvANAvIAGAZQAKgJAKgPQAKgQAGgGQAOgPAXgQIArgdQAsgdAygTQAwgTA5gLQA2gJA5AAQAwAAA+ALQAyAKA4AWQAzAUAwAeQAtAcAsApQAsAqAeApQAiAtAXAxQAYAxAOA3QANAwAEA8QADAjgBBFQgBAtgIA3QgDAUgLArIAPAUQAiAyASAqQAWA1AKAzQAJA0gBA6QgCAygNA4QgMA1gXAvQgYAwgfAmQgVAbgSASQAJAuACAjQAEAlgCA1QgCA0gIAoQgJAwgRArQgSAwgXAnQgcAwgdAgQggAlgnAdQgoAdgpATQgSAIgcAJQAEAWABAXQACAzgLAyQgKAugYA0QgYAwghArQgjAsgoAhQghAcg3AdQgqAWg4AQQg0APgyAFQguAEg4gDQgvgCg1gKQgugKgzgVQgrgSgtgfQgMgIgPgOIgZgZQgNgMgOgZQAFARgBAXQgCAugQAuQgSAzgfAoQgfApgpAjQgmAhgxAdQgjAVhAAOQgxAKg6AEQg7ADgygBQg0gChAgJQg7gJg6gUQgvgQhEgoQgkgVgYgTIgSAOQgqAfg5AhQhGAngcANQg2AZg0ANQg1AOg6AFIgbABQgpAAgugIg");
	this.shape_108.setTransform(-110.346,-94.0865);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(51,255,255,0.498)").s().p("AzMXpQg0gJg6gVQgvgQg2gjQgzghglgmQgpgrgdgxQgRgcgQgqQgVg4gHgyQgKhBADgnQACghADgRQAFgaAKgSQAXgrAIgiIAIggQADgRgBgMQgCgagNgkQgMgiADguQACgpAQguQAOgmAjglQAigjAfgSIAWgMIgEgOQgOgqgCgqQgCgqAJgrQAKgxARgeIAUgkQALgUAFgNQAOghAPggQATgkAbgaQAVgTArgOQALgDANABQgKgJgJgEQgtgUgegqQgagmgRgzQgPgwgBg2QgBg8ALgtQAKgtAbg3QAYgvAjgqQAYgdAzgoQAogfAsgZQArgXAwgQQAngOA2gLQAsgIAzAAQAaAABDAFQApAEAxAJQApAIAwAVIAqAWIAbgLQA0gSAoAAIAwAFIgDgQQgIgoAFgyQAEgoAMgwQAOg3APgfIAmhPIASgoQALgbAJgOQAegxAZgdQAtgzAagWQApgjAwgXQA5gdArgKQA3gNAygCQArgCBAAKQAvAHA3AbQA0AYAnAgQAzAqAVAgQAfAvANAvIAGAYQAKgIAJgPQALgRAGgGQAOgOAXgRIArgcQAtgeAxgSQAxgSA5gLQAzgKA7ABQAzAAA7AMQA0AKA2AWQA0AUAwAeQArAbAsAqQApAmAiAtQAfArAaA0QAXAxAPA3QAMAxAEA7QADAjgBBFQgCAvgIA1QgEAYgKAnIAPAUQAhAvATAuQAWA2AJAyQAJA1gCA4QgBAvgOA8QgNA1gWAvQgYAugeAnQgVAagTAUQAIAxADAgQADAigCA4QgDA0gIApQgJAugSAtQgRAtgZAqQgbAugeAiQghAlgnAcQgpAegpASQgYAKgVAHQADAaABATQACAwgMA0QgMAzgXAwQgXAwgjAqQggAqgqAiQggAbg4AeQgnAVg7ARQgzAPg0AFQguAEg4gDQgsgCg4gLQgwgKgxgVQgpgRgvggQgPgKglglQgLgLgRgaQAFARgBAXQgEAygQAqQgTAzgeAnQgeAngrAlQgnAggxAdQgkAVg/ANQguAKg9ADQg0ADg5gBQg0gCg/gJQg5gJg9gUQgwgRhDgoQgkgVgYgTIgTAOQgqAgg5AgQhKAogZAMQg3AZgyAMQgzANg9AFIgaABQgoAAgwgIg");
	this.shape_109.setTransform(-108.2403,-92.5229);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(51,255,255,0.498)").s().p("AzVXnQgxgIg8gWQgugQg3gkQg0ghglgnQgngpgegyQgRgdgQgpQgUg1gIg1QgJhBACgoQADggADgRQAFgbAJgRQAWgoAKgmIAHggQAEgRgBgMQgCgZgMgmQgLgiADgvQACgnARgvQANglAlglQAigjAggSIAVgLIgEgOQgOgqgCgrQgCgpAJgsQALgxAQgeIAUgkQALgUAGgOQAOgiAQgeQATglAcgZQAUgSAsgPQAMgDANABIgTgMQgugWgcgpQgbgngPgzQgQgxAAg1QAAg9AKgsQALgsAbg3QAZgxAigoQAXgcA1gpQApggAsgYQAogVAygRQApgOA1gKQAsgJAzAAQAbAABCAHQAqADAwAKQArAJAuAUQALAFAfARIAbgLQA0gSAoABQAIAAAoAFIgDgQQgHgrAEgvQAFgtAMgsQAOg3APgfIAmhPQAGgLANgeQAMgbAIgOQAcgsAdghQAug1AZgUQAqgiAwgXQA4gdAsgJQA2gNA0gBQAqgBBAAJQAvAHA3AbQA1AaAmAfQAxApAWAhQAfAuANAwQAFAPACAJQAJgIAKgPQALgQAGgGQAPgPAXgQIArgdQAugeAwgRQAzgTA3gKQA5gJA1ABQAzABA7ALQA0AKA2AWQA1AWAuAdQAsAcAsApQArApAfArQAhAtAYAyQAWAvAPA5QANAwAEA7QADApgCBAQgBArgJA5QgEAZgKAmIAOAUQAhAvASAuQAXA3AIAyQAJA1gCA4QgBAwgOA7QgMAygYAyQgXAvgfAmQgXAdgRARQAIAwADAhQACAngCA0QgDA1gIAoQgKAxgSArQgTAvgYAoQgcAvgeAgQgiAmgnAbQgrAegnARQgXAKgXAHQAEAaAAASQACAwgMA1QgMAxgYAxQgYAwgiArQgkAsgnAfQgkAeg0AbQgoAVg7AQQg3AQgvAEQgrADg8gCQgugCg2gMQgvgKgygVQgrgSgtgfQgMgIgPgOIgZgaQgLgKgRgaQAEARgBAXQgEAugRAuQgTAygfAnQghAqgpAhQgoAhgwAcQgVAMgbAIQgSAGgiAHQgxAKg6ADQguACg+gBQg0gChAgJQg+gKg4gUQgxgRhCgnQgkgVgYgTIgTANQgnAdg9AjQhCAkghAPQg1AYg1ANQg1ANg7AFIgaAAQgoAAgwgIg");
	this.shape_110.setTransform(-106.1653,-90.9625);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(51,255,255,0.498)").s().p("AzeXlQgxgIg8gWQgvgRg2gjQg1gjgjgmQgngpgegyQgSgegPgoQgUg2gHg0QgKhBADgoQACghADgRQAFgaAKgSQAXgqAIgkIAIggQADgRAAgNQgDgdgLgiQgLgjAEgtQADgnASgvQAOgmAkgkQAkgkAegQIAWgLIgEgOQgPgsgBgpQgDgpAKgsQAJgwARggIAUgjQAMgWAFgNQARgnAPgaQATgkAdgZQAWgUArgNQAMgDAMACQgKgKgIgDQgtgWgcgqQgagmgQg0QgPgxAAg1QAAg7ALguQAMguAbg1QAXgtAkgrQAZgeA0gnQArgiApgWQApgWAygQQApgOA1gKQAwgIAvABQAbAABCAGQApAEAyAKQArAJAtAVIAqAWIAbgLQA2gRAnABIAwAFIgDgRQgIgpAFgxQAFgtAMgsQANg2AQggQAcg6ALgWQAGgKAOgfQAMgaAJgOQAcgtAdggQAtgzAbgWQAnggAzgYQA3gbAtgLQA1gLA1gCQAuAAA8AKQAtAHA6AbQA0AZAmAgQAxApAXAhQAfAwANAuQAFAPABAJQAKgIAKgPQALgQAGgGQAVgUA8gnQAxgfAugQQA1gTA1gJQA1gJA5ABQAwABA9AMQA2ALA1AVQA2AXAtAdQAuAeApAnQAqAoAfAsQAhAtAYAyQAYAzANA1QANAzADA5QADAogCBAQgBAsgJA4QgFAbgKAkIAPAVQAgAvASAuQAXA4AHAxQAJAzgCA6QgCA0gNA3QgNAzgXAxQgXAuggAnQgXAdgRARQAJAxABAhQADApgDAyQgDAxgJAsQgLA0gRAnQgTAvgZAoQgdAugeAhQggAkgpAdQgoAcgrATQgYAKgWAGQADAVABAYQABAxgNA0QgMAygYAwQgaAzggAnQgiApgpAiQgiAcg3AcQgnAVg7ARQg0AOgzAFQgrADg8gCQgvgDg1gLQgwgKgxgWQgsgTgsgeQgMgIgPgOIgagaQgKgKgRgaQAEAUgCAUQgFAtgRAvQgUAxgfAoQghAogqAiQgjAeg1AeQgiAThCAOQgvAJg8ADQg6ACgzgCQg2gBg9gKQg+gKg4gUQgxgRhDgoQgjgUgagUIgSAOQgsAfg5AgQhCAkgiAPQg0AXg2AOQg3ANg5ADIgZABQgpAAgwgJg");
	this.shape_111.setTransform(-104.0898,-89.4104);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(51,255,255,0.498)").s().p("AznXjQgygKg7gVQgwgSg1gjQgygigmgmQgogrgcgxQgSgfgPgnQgTgzgIg4QgKhAADgoQAEhAAQgfQAXgpAIglIAIggQADgRAAgNQgCgcgLgkQgKgiAFgvQADglASgwQAPgmAlgjQAjgjAfgQIAWgLIgFgOQgNgpgDgsQgBgsAIgpQALgyAQgeIAUgkQALgVAGgOQAOggATghQAUgjAdgaQAWgTAsgNQAKgDAPACQgLgKgHgEQgtgVgcgrQgagngPgzQgPgzABgzQAAg8ALgtQAMgwAcgzQAXgtAkgrQAZgeA0gnQAsggApgXQAkgUA3gSQAugOAwgJQAvgIAwABQAgAAA9AHQArAEAwALQApAIAvAWIAqAWIAcgLQA2gRAnABIAvAFIgDgRQgHgsAFguQAFgsAMguQAPg3APgfQAXgxARgfIATgpQAMgaAKgOQAegwAcgdQAvg0AagUQApggAxgYQA6gbArgJQA3gMAzAAQAtgBA9AKQAuAIA4AbQAzAYAnAhQAwAoAYAjQAeAuAOAvIAHAZQAJgJALgOQAKgQAHgGQAPgPAXgQIAsgcQAsgdAygRQAzgSA3gKQA2gJA4ACQA2ABA4AMQA3ALAzAWQA1AVAuAeQAvAfAoAnQAqAoAfAsQAiAvAWAwQAXAxAOA3QANAyADA6QADAqgCA/QgCAugJA2QgFAcgKAjIAPAVQAfAtATAwQAVA2AIAzQAJA0gCA5QgCAxgOA6QgNA2gXAuQgXAsggApQgXAegRAQQAIAvACAkQACAlgDA3QgEA1gJAoQgLAwgSArQgTAwgZAnQgcAsggAjQghAjgpAdQgqAdgpARQgUAIgbAIQADAVABAYQAAAzgMAyQgNAwgYAyQgZAxgiApQgiAogqAjQgjAcg2AbQgrAXg3AOQg2APgxAEQguAEg5gEQg0gDgwgLQgxgLgwgVQgrgSgtgfQgMgIgPgOIgagaQgMgMgQgYQAEARgDAXQgFAwgSAsQgVAzgfAlQgfAmgsAkQgoAhgxAaQgiAUhCAMQgrAJhAADQg0ACg4gCQgzgChBgKQg6gJg8gVQgwgRhEgoQgpgYgUgQIgTANQgvAig2AdQhFAlgfAOQg4AYgzAMQg5ANg3ADIgXABQgrAAgwgJg");
	this.shape_112.setTransform(-101.9838,-87.8452);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(51,255,255,0.498)").s().p("AzwXhQg0gKg5gVQgwgSg0gjQg1gkgjglQgngpgdgzQgSgfgPgnQgUg1gHg1QgJg/ACgqQADggADgSQAFgaAJgSQAXgrAIgkIAIghQAEgRgBgNQgBgdgKgjQgKgiAFgvQAEgoATgtQAQgnAkgiQAlgjAegPIAVgLQgBgIgDgGQgOgogCgsQgCgqAJgsQAJguARgiIAUgkQAMgWAGgNQARgmAQgcQAXglAcgYQAWgSAtgNQAMgDANACQgMgLgGgDQgsgVgcgsQgbgqgNgwQgOgxAAg2QABg9ALgsQANgwAbgyQAXgsAlgsQAageAzgmQAqgfArgYQArgWAxgPQAqgOA0gJQArgIA0ABQAgABA9AHQAtAFAuAKQArAJAtAVIArAXIAbgLQA2gRAnABIAvAFIgCgQQgHgqAFgxQAFgvAMgrQAPg4APgfIAphQIAUgpQAMgaAKgOQAegtAdggQAugxAcgWQAogfAzgYQA4gaAsgJQA0gLA3gBQAsAAA+AKQAxAJA1AbQAzAZAnAgQAvAnAYAkQAfAuAOAvIAGAZQAKgJAKgPQALgPAHgGQAPgPAXgQIAsgcQAugdAxgRQAzgSA3gJQA0gIA6ABQAzACA6AMQA0AKA2AXQA4AYArAcQAsAcArAqQAqApAfArQAgAsAYAzQAXAyANA2QANAzADA5QADAugDA7QgBAvgKA1QgFAegKAhIAPAVQAgAyARAsQAWA3AHAyQAJA2gDA3QgCAxgOA6QgMA0gYAwQgXAsggAqQgXAcgRASQAIAxABAiQACAmgDA2QgFA4gJAlQgMAzgSApQgTAugaApQgdAtgfAhQgiAkgpAcQgsAdgoARQgXAJgXAGQACAbAAATQAAAxgNAzQgMAxgZAxQgYAvgkAqQgiAqgqAhQgkAdg1AaQgoAVg6AQQg3APgwADQguAEg5gDQgxgDg0gMQgugKgzgWQgrgTgtgfQgMgIgPgOIgagaQgKgKgRgaQADATgDAVQgGAwgTAsQgUAyggAmQgiAogqAhQgoAggxAaQgiAThDANQgxAJg6ACQgpAChDgCQg0gChAgLQg9gKg5gUQgugQhGgpQgjgVgagUIgTAOQgsAeg6AgQhOApgXAKQgzAWg3AOQg2AMg7ADIgTAAQgrAAg0gJg");
	this.shape_113.setTransform(-99.8988,-86.3027);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(51,255,255,0.498)").s().p("Az5XfQgygKg7gWQgugSg2gkQgyggglgpQgngpgdgyQgSgggPgnQgUg1gHg1QgIhEACglQADhAARgeQAVgqAKglIAIghQAEgSgBgMQAAgbgLgnQgIghAFgwQAFgoATgsQAQgnAkghQAjgiAhgQIAVgLIgEgOQgNgogDgsQgDgsAKgpQAKgxAQghIAUgkQANgWAFgNQASgoARgZQAWgmAdgYQAXgTAtgLQALgDAOABQgKgKgIgDQgsgXgbgrQgbgrgNgwQgOgzACg0QABg7AMgtQANgxAbgxQAYgtAlgrQAXgcA2goQAqgfAsgXQAmgUA1gRQAqgOA0gJQAvgHAxABQAaABBDAHQAvAGAtAKQAnAIAwAXIAqAXQAMgGAQgFQA1gRAoACIAwAFIgDgRQgHgoAFgzQAEgqANgwQAPg2AQghQAcg6ANgXIAUgoQANgaAKgPQAcgrAfghQAxgzAbgUQApgfAygXQA3gZAugKQA2gLA0AAQAqAABBALQAtAJA4AbQA1AaAlAfQAyAsAVAfQAgAvANAvIAHAYQAKgIAKgPQALgQAGgGQAVgTA+gnQAvgcAwgRQAxgRA6gKQA0gJA5ADQA0ABA6ANQA0ALA2AWQA2AXAsAdQAvAfAnAnQArApAeAsQAfAqAZA1QAXAxAOA3QAMA1ADA3QACAkgCBFQgCAwgKA1QgEAZgLAmIAPAVQAfAxARAtQAWA4AHAxQAJA2gDA4QgCAugPA8QgOA4gWAsQgaAxgdAlQgXAdgRARQAHAyACAiQACApgFAzQgEA2gJAoQgLAugVAuQgUAwgaAmQgdAugfAgQgiAjgqAcQgrAegpAQQgVAIgaAIQACAbAAASQAAAygOAyQgMAxgaAxQgZAvgjAqQgjAqgpAgQglAdg0AbQgsAVg3APQg3AOgwAEQgqADg+gDQgugDg2gMQgvgLgygWQgqgSguggQgMgIgPgOIgagaQgPgOgNgWQADAUgDAUQgHAvgTAtQgVAyggAmQggAlgtAjQgmAeg0AbQgiAThCAMQgxAJg6ABQguACg+gCQg1gChAgLQg8gKg5gUQgvgQhGgpQgmgXgXgSIgUANQgqAfg8AgQhJAlgdANQg1AXg2AMQg1ANg7ADIgPAAQgvAAg0gKg");
	this.shape_114.setTransform(-97.8,-84.7118);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(51,255,255,0.498)").s().p("A0CXdQg0gKg5gXQgtgRg2gkQgzgigkgoQgngqgdgxQgSghgOgmQgTgzgIg3QgJg/ACgqQADggADgSQAEgaAKgTQAVgoAKgnIAIghQAEgSAAgMQgBgegJgkQgJgiAHgvQAFgpAUgsQAQglAlgjQAkgiAfgPIAWgKIgEgOQgOgqgDgqQgCgpAJgtQAKgwARgiIAUgkIASgkQASglASgcQAXglAegYQAWgTAugLQANgDAMACQgJgKgIgEQgsgYgagrQgagpgNgyQgOgxACg1QABg+AMgrQANguAcg0QAZgtAkgqQAYgcA2goQAlgcAwgaQApgVAzgPQAsgOAzgIQAwgIAwACQAWAABHAIQAjAEA4AMQArAKAtAWIAqAXIAbgKQA1gRApACIAvAFIgCgRQgHgoAFg0QAFgxAMgpQAPg2AQghQAZg0ARgdIAVgpQANgaAKgOQAfguAdgeQAwgxAcgVQApgfAygXQA6gZAsgJQA1gKA2AAQAtAAA9AMQAvAIA3AcQAzAZAmAgQAxArAWAgQAgAvANAvIAHAYQAKgIALgPQALgPAGgGQAQgPAYgPIAsgcQAugcAxgRQAwgRA6gJQA2gIA4ACQA1ACA5AMQAyALA3AXQA1AXAtAeQAtAdAqApQApAoAfAsQAhAwAWAwQAWAtAPA7QAMA1ADA3QADApgDBAQgCAygKAzQgFAYgLAnIAOAVQAgAxARAuQAVA1AHA0QAIAzgCA6QgDA0gOA3QgNA0gYAwQgYAvgfAnQgbAhgOANQAIAyABAiQACAugFAvQgEAygKAsQgNAwgTAsQgVAugaAoQgeAuggAgQgiAjgqAcQgrAcgqARQgXAJgYAGQADAbgBASQAAAxgOAzQgNAxgaAxQgZAxgjAoQglAqgoAgQglAdg0AaQgrAVg4APQg4AOgwAEQgrADg8gEQg0gEgxgLQgvgLgygWQgqgTgugfQgPgLgmglQgMgMgQgYQACAVgDATQgIAxgTArQgWAxghAmQgiAmgrAiQglAcg1AcQgjAThCALQgtAIg+ACQgwABg8gCQg0gChAgLQg+gLg4gUQgvgRhGgoQgngYgWgRIgTANQgvAhg5AdQhGAlgfANQg4AXg0AMQgzAMg+ADIgOAAQgtAAg3gKg");
	this.shape_115.setTransform(-95.7224,-83.1607);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(51,255,255,0.498)").s().p("A0LXbQg0gLg4gWQgwgTg0gjQgzgjgkgnQgngrgcgxQgRgfgPgoQgUg0gHg2QgJhBADgoQACggADgSQAFgaAJgTQAXgrAJgkIAIghQAEgSgBgNQAAgbgJgoQgIgiAIgvQAFgnAUgtQASgmAkghQAlghAfgPIAWgLIgEgOQgOgqgDgqQgDgoAKgtQAKgyAQggIAUglIATgkQASglATgdQAYglAegXQAYgTAtgLQALgDAOACIgRgOQgrgYgagrQgZgqgNgyQgNgyABg0QADhAAMgpQAMgtAdg0QAagvAjgoQAbgfAzglQAogdAugYQAqgWAygPQAugOAxgHQAxgIAvACQAhABA8AIQAtAGAvALQAqAKAtAWIAqAYQAQgHAMgDQA2gRAnABQAQABAgAFIgDgRQgHgsAGgwQAEgsANgvQAQg3AQghQAdg5ANgXIAWgpQANgaAKgPQAggtAdgeQAxgxAcgVQAqgeAxgWQA7gZAsgJQA3gKAzABQApAABBAMQAxAJA1AbQA1AbAkAgQAwAnAXAkQAfAtAPAwIAGAYQAKgIALgPQALgPAHgGQAZgXA7giQAugcAxgRQA2gSA0gIQA0gIA7ADQAyACA7ANQAzAKA3AYQA0AXAtAeQAtAdAqApQAoAoAgAtQAhAvAWAxQAXAyANA2QAMA0ADA4QACAqgDA/QgCAygKAzQgFAagLAlIAOAVQAeAuATAxQAUA4AHAxQAIA1gDA5QgDAzgOA3QgNA2gYAuQgXAtggApQgXAdgSASQAIAvABAlQABArgFAyQgFA3gKAnQgMAugVAuQgVAwgaAnQgeAsghAhQgiAjgrAcQguAdgnAPQgWAJgZAGQACAggBAOQAAAvgPA1QgOAzgZAuQgYAvglAqQglAqgoAgQglAcg1AaQgrAVg4APQg6APgtACQgyAEg2gEQg0gEgxgMQgrgKg2gXQgrgTgtgfQgMgIgPgPIgagZQgMgMgQgZQABATgEAWQgHAugVAuQgUAugjAoQgjAmgrAhQgpAfgxAZQgjAShDALQgvAIg8ABQg0ACg4gDQg2gCg+gLQg+gLg4gUQgxgShEgoQgjgUgagVIgUANQgqAdg+AhQhJAlgdAMQg4AXg0AMQg2AMg7ACIgOAAQguAAg2gKg");
	this.shape_116.setTransform(-93.6125,-81.6124);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(51,255,255,0.498)").s().p("A0UXZQgzgLg6gXQgwgUgzgjQgwgggmgqQglgngeg1QgTgggNgnQgTgygIg4QgJhBADgnQAEhBAQgfQAWgtAJgiIAIgiQAEgSAAgNQAAgdgIgmQgIgiAIgvQAGgnAVgtQARglAlghQAlghAggPIAWgKIgFgOQgOgqgCgqQgCgpAIgtQAKgxARghIAUgmIATgjQAVgrARgXQAZglAegYQAXgSAvgLQAMgDANACQgJgKgIgEQgsgZgYgrQgZgqgNgyQgNgxADg1QABg6AOgvQAMgtAdg0QAZgtAlgqQAagdA0gmQAogdAugYQAqgVAzgPQAqgNA1gIQAtgHAzABQAhACA8AIQArAFAwAMQApAKAvAXIAqAYQAOgHAOgEQA3gQAmACIAwAFIgCgRQgHgsAFgwQAGguAMguQAQg2AQghQAeg8ANgVIAWgpQANgaALgPQAegqAgghQAwgvAdgVQAsggAwgUQA6gZAtgIQA5gKAyABQArAAA/ANQAvAJA2AcQAzAZAmAhQAvAnAYAkQAfAtAPAxIAHAYQAKgJALgOQAMgPAGgGQAWgUA+glQAwgcAwgQQA1gSA1gHQA0gIA6ACQAzACA7ANQA3ANAyAWQAzAWAuAfQAsAeAqApQApAoAfAtQAgAuAXAyQAYA1AMAzQAMA1ADA3QACApgDBAQgDAxgKA0QgDAUgNArIAOAWQAfAxARAuQAUA4AHAxQAIA3gDA3QgDAvgOA7QgNA0gZAwQgYAvgfAnQgVAcgUATQAHAyABAjQABAugFAwQgFAzgLArQgNAwgUAsQgXAvgaAnQgfAughAgQgkAjgpAaQgrAdgrAQQgVAIgaAGQACAYgBAVQgBAygPAzQgNAwgbAxQgbAxgiAnQglAqgpAgQgjAbg3AbQgoAUg7AQQg1AOgyADQgvADg5gEQgvgEg2gMQgwgLgxgWQgtgUgrgfQgMgJgQgOIgagZQgMgMgQgZQABAXgEASQgIAugVAuQgWAwgjAmQghAmgtAgQgnAegzAZQgWALgcAIQgTAFghAFQgwAIg7ABQg4ABg0gDQg5gDg8gLQg6gJg8gWQgwgRhFgpQglgVgZgUIgTANQgzAig3AbQhIAmgeAMQg8AXgwALQg3ALg6ADIgMAAQgvAAg3gLg");
	this.shape_117.setTransform(-91.5213,-80.0432);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(51,255,255,0.498)").s().p("A0cXXQgzgLg6gXQgwgUgzgjQgxgiglgoQglgpgeg0QgRgegPgpQgTg1gHg1QgJg/ADgqQACggADgSQAFgaAJgTQAWgtAJgjIAJgiQAEgSAAgNQAAgggIgkQgGgiAIgvQAHgoAVgsQATglAkggQAmghAfgOIAWgKIgFgOQgNgngDgtQgCgpAIgtQAKgxARgiQAMgZAbgwQATgmAUgdQAbglAegXQAXgRAvgMQAMgDAOADQgLgLgGgEQgrgZgZgrQgYgpgNgzQgMgzADg0QACg7ANgtQAOguAcgzQAZgsAlgrQAZgcA2gnQArgfArgVQAngUA2gQQAtgOAygHQAvgHAxACQAWABBIAJQArAGAwAMQAqAKAuAXIAqAYQAOgGAOgEQA3gQAmABIAwAGIgCgRQgHgqAGgzQAFguANgtQAPg3ARghQAag1ARgdIAXgpQAOgZAKgPQAggsAggfQAxgwAdgUQApgdAzgWQA6gYAtgIQA5gKAyACQAoAABCANQAvAKA2AcQAzAZAmAhQAuAnAZAkQAgAvAOAvIAHAYQAJgIAMgPQALgPAHgGQAZgWA8gjQAtgaAzgRQA1gSA1gHQAxgHA9ACQA0ADA5ANQA3ANAyAWQAzAWAvAfQAtAfApApQAoAoAfAsQAgAwAXAxQAXAzAMA1QAMAzADA5QACAtgDA8QgCAsgLA5QgGAegLAhIAOAWQAeAwARAvQAUA2AHA0QAHA0gDA5QgCAxgPA6QgOA2gYAuQgYAvgfAnQgWAcgTATQAHAyAAAjQACAqgGA0QgGA2gLApQgMAtgWAvQgXAwgaAmQgjAwgeAdQghAhgsAcQgtAcgqAQQgUAIgcAHQACAZgBAUQgCA0gPAxQgOAygaAuQgaAwgkAoQgkApgqAhQgkAbg2AbQgqAVg5AOQg3AOgxADQguADg6gEQgzgFgygMQgwgLgxgWQgqgTgvghQgNgJgognQgNgNgPgXQABAUgFAVQgIAsgWAvQgYAxgiAlQgjAmgsAgQgpAdgxAZQgjAShDAKQgtAHg/ABQgvABg9gDQg4gDg8gLQg7gKg7gVQgwgShFgpQgngXgXgSIgUANQgsAdg+AgQhLAmgcALQg3AWg1AMQg4AMg6ABIgKAAQgvAAg4gLg");
	this.shape_118.setTransform(-89.4675,-78.477);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(51,255,255,0.498)").s().p("A0mXVQgygMg6gXQgugTg1gkQgxgiglgpQglgpgdgzQgSghgOgmQgTg1gHg1QgJg8ADgtQACggADgSQAFgaAJgTQAWgtAJgkIAJgiQAEgSAAgNQAAghgGgkQgHgiAJgvQAIgpAWgqQASglAlggQAkggAhgPIAWgKIgEgOQgOgogDgrQgCgqAJgtQAJgvARgjQANgaAbgwQATgnAVgcQAZgkAggYQAagTAtgJQAMgDAOACQgMgMgFgDQgqgZgZgsQgXgrgMgxQgMgyADg1QADg8ANgsQAOgvAdgyQAYgrAmgrQAbgeA0glQArgfAsgVQAngUA1gQQAugNAygHQAsgHA0ADQAhABA9AJQAmAFA1ANQArALAtAXIAqAYQASgHAKgCQA3gRAnACIAvAFIgCgRQgHgqAGgyQAFguANguQARg5AQggQAZgyATgfIAXgpQAOgaALgOQAigvAegcQAygvAdgUQAsgfAxgUQA7gXAsgIQA0gJA3ACQAuABA8ANQAyAKAzAbQAzAbAmAgQAvAqAYAiQAeAtAQAwIAHAYQAJgIAMgOQAMgQAHgGQAagXA6ghQAvgbAxgQQA0gRA3gHQA0gHA6ADQAzACA7AOQAyALA2AYQA1AYAtAeQAtAfAoAoQAqArAdAqQAgAuAWAzQAWAwAOA4QAMAzACA5QACAugDA8QgCAtgMA4QgGAegKAhIANAVQAeAwARAwQAUA4AHAyQAHA4gEA1QgCAxgPA6QgNAzgZAwQgXAughApQgWAcgTATQAHAuAAAoQABAtgGAxQgGA0gMArQgOAwgUAsQgXAwgcAmQgeAsgjAhQglAjgpAaQgxAdgmANQgVAIgbAHQACAXgCAWQgCAygPAzQgOAvgbAyQgaAugkApQglAqgqAfQglAdg1AZQgrAVg5AOQg1ANgyAEQgyADg2gFQgvgEg2gNQgugLg0gXQgpgSgvghQgMgJgQgOIgagZQgNgOgPgXQAAAWgEAUQgLAwgVArQgZAwgiAlQghAkguAhQgpAegyAYQgkARhDAKQgtAHg+ABQgzAAg5gDQg0gDhAgLQg8gLg7gVQgtgRhIgqQgmgXgYgSIgUANQgwAgg7AdQhKAlgdALQg5AXgzALQg5ALg5ACIgKAAQgvAAg5gMg");
	this.shape_119.setTransform(-87.3451,-76.9032);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(51,255,255,0.498)").s().p("A0uXSQgygKg7gZQgugTg0gkQgygjgkgoQglgqgdgzQgSgggOgmQgTg1gHg2QgJhBADgnQAEhBAPgfQAXguAIgjIAJgiQAEgTAAgNQABgfgGgmQgGgiAKgvQAIgnAWgsQASgkAmggQAmghAggNIAWgKIgFgOQgOgpgDgrQgCgoAJguQAKgxAQgiQANgaAbgxQAVgoAUgaQAcgmAfgWQAZgSAugKQAMgDAPACQgKgLgHgEQgqgbgYgrQgYgsgLgxQgLgwADg2QAEg7ANgtQAOgvAdgyQAbguAkgnQAbgeA0glQAqgeAtgWQAmgTA3gQQAugNAygHQAugHAyADQAiACA8AJQAsAGAwANQAqALAtAXIAqAYIAcgJQA1gQApABIAwAGIgCgRQgHgrAGgzQAFgtAOgvQAOg0ATgkQAbg1ARgdIAYgpQAOgZALgPQAjgtAegdQAvgtAggWQAqgeA0gUQA5gWAugIQA2gJA1ACQArABA/AOQAvAKA2AcQAwAZApAiQAwAqAXAiQAfAuAPAvIAHAYQAKgIALgOQAMgPAHgGQAbgYA6ggQAwgcAxgPQA1gRA1gHQA0gHA7ADQAyADA7AOQA1AMAzAXQA4AaApAdQAsAdAqAqQAnAoAgAtQAfAvAWAyQAXAyAMA2QAMA0ADA4QACAugEA8QgCAvgMA2QgFAZgMAmIAOAWQAdAwARAwQAUA4AGAxQAIA1gEA5QgDAvgPA8QgOA0gYAuQgWAsgiAsQgXAdgSASQAGAuABAoQAAAwgGAvQgHA3gMAoQgPAzgUApQgWAsgdAqQggAsgiAgQglAkgqAZQguAbgqAPQgUAIgcAHQACAXgCAWQgDAzgPAyQgPAxgbAvQgbAxgjAnQgmAqgpAeQgmAdg1AZQgqAUg5AOQg0AOg0ADQgyADg2gFQgvgEg2gNQgwgMgygWQgsgVgtgfQgNgJgognQgOgOgPgXQgBAZgEARQgLAwgWArQgYAvgjAlQgkAlgsAgQgrAdgxAYQglARhBAJQgxAHg7AAQgzAAg4gDQg2gDg/gLQg9gLg5gVQgvgShHgpQgmgXgYgTIgUAOQguAeg9AeQhJAkgfAMQg5AXg0AKQg3AMg7ABIgKAAQgwAAg3gNg");
	this.shape_120.setTransform(-85.2446,-75.3359);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(51,255,255,0.498)").s().p("A04XQQgygLg6gYQgugUg0gkQgzgkgignQgngsgcgxQgRghgOgmQgTg2gHg0QgIg+ADgrQADhBAQgfQAWguAJgjIAJgjQAEgSAAgOQACgcgGgpQgGgiALgwQAJgoAWgqQAUglAlgfQAlgeAggPIAXgJIgFgOQgOgpgDgrQgDgpAKgtQAJgwARgkQANgaAbgxQAXgpATgaQAegmAegVQAagSAugKQAMgCAPABQgKgKgHgFQgpgagYgsQgWgrgMgyQgLgyAEg1QAEg8ANgsQAOgtAegzQAZgsAmgqQAZgbA2gnQAvggApgUQAngTA2gPQAxgOAvgGQAvgGAyADQAcABBBAKQAtAHAvAMQAoALAvAYIAqAZQANgGAPgEQA0gPAqABQAPABAhAFIgCgSQgGgoAGg1QAFgtAOgwQAQg2ARgiQAdg4AQgaIAYgpQAPgZALgPQAfgqAjggQAxgtAfgVQArgdAzgUQA9gXArgHQA3gIA0ACQAtACA8ANQAuAKA3AdQAzAaAmAhQAuApAZAjQAgAwAOAtIAHAYQAKgIAMgOQAMgPAHgGQAcgXA5ghQAwgbAxgPQA3gRA0gGQA1gIA5AEQA1ADA4AOQAzAMA2AYQA0AYAsAfQAuAfAnAoQArArAcArQAgAuAWAyQAWAzAMA2QAMAzADA5QACApgEBBQgDAxgMA0QgFAagMAlIAOAWQAeAzAQAtQATA6AGAwQAHA2gEA4QgDAzgPA3QgNA0gZAvQgYAvggAoQgXAdgTATQAGAyAAAkQABAtgHAyQgHA4gMAoQgOAugWAuQgXAugdAoQgfAqgkAhQgiAigtAaQgtAbgrAQQgWAHgaAHQABAagCATQgDAygQAzQgQAzgaAtQgaAuglAqQgkAngrAhQglAbg2AaQgrAVg5AOQg1ANgzADQgyADg2gFQgygFgzgNQgxgLgxgXQgqgUgvggQgTgOgjgjQgMgMgQgYQgBAUgFAVQgLAugYAtQgZAwgjAkQgiAjgvAhQgpAdgyAXQgkARhDAJQguAHg9AAQgrAAhBgEQg3gDg+gLQg9gMg5gVQgvgRhHgqQgmgWgZgUIgUAOQgtAdg/AfQhMAlgcALQg8AWgxAKQg5AMg5AAIgEAAQg0AAg6gNg");
	this.shape_121.setTransform(-83.1414,-73.7932);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(51,255,255,0.498)").s().p("A1AXOQgwgLg8gZQgvgUgzgkQgzglgigmQgmgsgcgxQgTgjgMgkQgSgzgIg4QgIg+ACgqQAFhBAOgfQAXgvAIgjQANgxABgSQACgfgGgnQgEgkALgtQAJgnAXgrQAVglAlgeQAlgfAggOIAXgJIgFgOQgOgogDgsQgDgoAJguQAKgxARgjQAMgbAcgwQAYgsAUgYQAcgkAhgXQAbgTAtgIQANgDAOACQgLgLgFgEQgpgbgXgtQgXgsgLgxQgKgyADg1QAEg6APgtQANgrAfg1QAZgsAmgpQAcgeA0gkQAuggAqgUQAngTA2gPQAugNAygGQArgGA2ACQAhACA9AKQAvAIAsAMQAqALAuAYIAqAZQASgHAKgCQA3gQAnACIAwAFIgCgRQgGgrAGgzQAGgvANgtQAQg4ASgiQAZgxAVghIAYgpQAPgZAMgPQAigrAggeQAygtAfgUQAtgeAxgTQA8gWAsgGQA1gJA2ADQArACA/AOQAxALA0AcQAyAaAmAhQAvApAYAjQAgAvAPAuIAHAYQAKgIAMgOQAMgPAHgGQAZgVA9giQAugaAzgQQAzgQA4gHQA3gGA3ADQA0AEA5ANQA1AOAzAXQA1AYAsAfQAsAeApAqQAoApAeAsQAgAwAVAxQAXAzAMA2QAMAyACA6QACAzgEA2QgDAsgMA6QgGAcgLAjIANAWQAeAzAPAuQAUA2AFA0QAHA2gEA3QgDAxgQA6QgNAzgZAwQgWArgiAsQgVAbgVAVQAGAyAAAlQAAAogHA3QgHA3gNApQgPAxgWArQgWAtgeAoQgdAognAkQgjAggtAbQguAcgqAOQgRAGggAIQABAVgCAZQgDAwgRA1QgPAvgbAxQgeAxgiAlQgkAngrAhQgmAcg2AZQgsAVg4ANQg0ANg0ADQguADg6gFQgygFgzgNQgygMgwgXQgqgTgvghQgPgLgnglQgMgMgRgZQgBAVgFAVQgMAtgYAuQgaAwgjAjQgjAkguAfQgnAbg1AZQgiAPhFAKQgvAGg9AAQg8gBgvgDQg4gDg9gMQg+gLg4gVQgugRhIgrQgngWgYgUIgVAOQg0Ahg4AaQhLAlgeALQg4AWg1AKQg6ALg4ABIgEAAQgyAAg8gOg");
	this.shape_122.setTransform(-81.057,-72.2275);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(51,255,255,0.498)").s().p("A1JXMQgygMg6gZQgtgTg1gmQgwgiglgpQgmgsgbgxQgOgagRgtQgTg0gHg3QgIg+ADgrQAEhAAPgfQAWgwAJgiIAJgkQAFgTAAgNQACghgFglQgEgiAMgwQAKgpAXgoQAVglAlgeQAogfAfgNIAWgJIgFgNQgOgpgDgrQgDgoAJgvQAKgwARgkIAohKQAWgpAXgcQAeglAggWQAcgSAtgJQAMgCAPABQgKgKgGgFQgpgcgWgsQgXgugKgwQgKgwAEg2QAFg8AOgsQAOgrAeg1QAcguAkgmQAbgeA1gkQAsgeAsgVQApgUA1gOQAugNAygGQAygGAvADQAhACA9AKQArAHAxAOQArAMAsAXIAqAZQAQgGAMgDQA1gPAqACIAYACIAYADIgCgRQgHgtAHgxQAGgwANgtQAQg2ATgkQAdg4ARgaIAZgpQAPgZAMgPQAjgrAggeQAxgrAhgWQArgcAzgTQA9gWAsgGQA3gIA0ADQAxADA4ANQAuALA3AcQA1AdAjAfQAvApAYAjQAgAuAPAvIAIAYQAJgHAMgPQANgOAHgGQAcgXA6ggQAvgaAygQQA1gPA3gHQA4gGA2ADQAyAEA7AOQA1AOAzAXQAyAXAuAgQAtAfAoApQApAsAdAqQAfAwAWAxQAVAwANA5QAMA0ACA4QACAtgFA9QgCAtgNA4QgGAagLAlIANAWQAdAyAQAvQATA6AFAwQAHA0gEA6QgEAxgPA5QgPA2gYAtQgYAvggApQgXAdgTASQAGA3gBAhQAAAqgHA2QgIA0gNArQgPAwgXAtQgaAxgbAkQggAqgkAhQgkAhgtAaQgvAcgqAOQgZAIgXAFQAAAYgCAWQgEAygQAzQgRAxgbAvQgbAtglApQglApgqAfQgoAcg0AZQgsAUg4AOQg2AMgyADQgxADg4gGQgygEgzgNQgygOgwgWQgtgVgsgfQgMgJgQgOIgagaQgMgMgRgYQgCAXgFASQgNAugYAtQgaAvgkAkQghAigxAhQgoAag0AZQglAQhDAIQgwAHg7gBQg9gBgvgDQg0gEhAgMQg7gLg8gWQgwgShGgpQgjgVgcgVIgVANQgwAeg9AdQhFAigkAOQg6AWg0AJQg3ALg8AAQg2AAg7gOg");
	this.shape_123.setTransform(-78.9536,-70.6659);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(51,255,255,0.498)").s().p("A1TXKQgzgNg4gYQgugUg0glQgyglgignQgkgpgdg1QgRgegOgoQgTg1gHg2QgIg/ADgqQAEhAAPggQAXgxAIghQAOg1ABgPQABgjgDgkQgEghANgxQALgqAXgnQAUgjAmgfQAqgfAdgMIAWgJIgEgOQgPgqgDgpQgDgqAKgtQAIgtASgoQAJgTAgg4QAXgqAXgaQAfglAggWQAZgRAwgKQANgCAPACQgLgMgFgEQgogcgWgtQgXgsgJgxQgKgxAFg2QAFg8AOgrQAPguAegyQAcguAkgmQAcgeA1gkQApgdAvgWQApgUA1gNQAqgMA2gHQAugFAzADQAcACBCALQAtAHAvAOQAsAMArAYIAqAZQAQgGAMgDQA3gPAoACQAQAAAgAFIgCgRQgGgtAGgyQAGgvAOguQARg3ASgjQAbg0AUgfIAZgpQAPgYAMgPQAlgtAggcQAygsAggUQAugdAxgSQA7gVAugGQA5gIAyADQApADBAAOQAwAMA1AcQAxAaAnAiQAvApAYAjQAgAwAPAtIAIAYQAKgIAMgOQANgOAHgGQAbgXA7ggQAwgaAygPQA1gPA2gHQA1gGA5AEQA0AFA5AOQA0ANA0AYQA0AYAsAfQArAfApAqQApAqAdAsQAdArAYA2QAVAxANA3QAMA2ABA3QACAtgEA8QgEAwgMA2QgEAUgOArIANAWQAdAyAQAvQASA3AGA0QAGA1gEA4QgEAxgPA6QgPA1gYAuQgZAwgfAnQgSAXgYAZQAFA3AAAhQgBAvgIAxQgHAzgOAtQgPAwgYAsQgXAtgfApQggAqgkAgQgkAgguAbQguAbgrAOQgaAJgXAFQAAAZgCAVQgFAzgQAxQgQAvgcAxQgeAwgjAmQgnApgpAeQgnAdg0AYQgtAVg4ANQg3AMgxADQgwACg5gFQg1gFgwgNQgugMg0gYQgogSgxgiQgSgNgkgkQgNgMgRgZQgCAWgGAUQgNAvgZArQgZAtglAmQgjAigwAgQgpAbg0AXQgmARhBAHQguAGg+gBQgzAAg5gEQg7gFg5gLQg7gLg8gWQgxgThFgpQgogYgYgSIgUANQg3Ahg4AaQhJAjggAMQg6AWg0AJQg4ALg7AAQg0AAg+gPg");
	this.shape_124.setTransform(-76.8739,-69.1179);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(51,255,255,0.498)").s().p("AzqXXQgzAAg/gPQgygNg5gZQgugUgzglQgyglgigoQglgqgcgzQgOgagRgtQgSg2gHg0QgIg7ACguQAFhBAOggQAWguAJgkQAOg0ABgRQACgfgDgoQgDggANgyQAMgqAYgnQAVgkAmgdQAngeAggMIAWgJIgEgOQgPgogDgsQgDglAJgxQAKgxARgkQAKgWAfg2QAYgpAXgbQAigoAegSQAagRAwgKQAOgCANACQgHgLgIgFQgogdgVgtQgXgugIgwQgKgyAFg1QAFg6APgtQAQgtAegyQAagrAmgpQAagcA3glQAogcAwgXQAqgTA0gOQAsgMA1gGQAvgFAyADQAhACA+ALQAqAHAxAPQAqALAuAZIApAaQANgFAPgEQA3gPAoACQAQAAAgAFIgCgRQgFgrAGg0QAGgvAOgvQAPg0AUgmQAcg0AUgfQAJgNAQgcQAQgYAMgPQAkgsAhgdQAygrAggUQAugcAzgSQA5gVAwgGQA2gHA1ADQAvAEA6AOQAwALA1AdQA0AcAkAgQAuAoAZAlQAeAsARAwQAFAOADAKQAIgHANgOQANgOAIgHQAagWA9ggQAvgaAzgOQAzgQA4gGQAygGA8AEQA0AFA5AOQA2AOAyAYQAyAXAuAgQAtAhAmAoQAmAnAgAvQAeAtAXA0QAVAyAMA3QAMA0ACA4QACAugFA8QgEAwgMA2QgFAVgNAqIANAWQAcAyAQAwQASA3AGAzQAFAzgEA7QgEAxgPA5QgOAxgZAyQgbAygeAmQgZAegRASQAFAzAAAlQgBAsgIA1QgJA1gOArQgRAygWAqQgZAvgeAmQgdAngoAjQglAhgtAaQgvAbgrANQgYAIgZAGQAAAVgCAZQgFAygRAyQgSA0gbAsQgdAwgkAmQgnApgpAeQgmAbg2AZQguAVg2ANQg5ANgwACQgxADg4gGQgwgFg1gOQgvgMgzgYQgugWgsgfQgTgOgjgjQgMgMgRgYQgEAZgFARQgOAugZAsQgbAuglAkQglAkguAdQgoAbg2AWQglAQhCAIQgvAFg8gBQgpAAhDgFQgxgDhEgNQg8gLg7gWQgugRhIgrQglgWgbgUIgVANQgxAeg+AdQhLAjgfALQg7AWgzAJQg3AKg2AAIgGAAg");
	this.shape_125.setTransform(-74.7956,-67.5689);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(51,255,255,0.498)").s().p("AkUXVQg9gBgvgEQg2gFg/gLQg+gNg4gVQgwgShHgqQgrgagVgRIgVANQgyAfg9AcQhXAngUAHQg6AVg1AKQg3AJg8AAQg2AAg7gQQg2gNg2gZQgvgVgyglQgwgjgjgpQglgqgcg0QgRgegOgpQgSg1gHg1QgIg/ADgqQAEhAAPggQAWgwAJgjIAJgkQAFgUABgOQADgjgDgkQgCgiANgwQANgoAYgoQAWgkAlgdQAogeAfgMIAXgIIgFgOQgOgqgDgqQgEglAKgyQAIgsASgpQAMgaAegyQAYgrAXgaQAjgmAfgUQAagQAwgKQANgCAPABQgKgLgFgFQgngdgWgtQgVgtgJgxQgJgxAGg2QAGg8AOgrQAPgrAfg0QAdguAkgmQAagbA3gmQAtgeAsgUQAogTA2gOQAugMAzgFQAugGAzAEQAdACBCAMQApAHAzAPQAqAMAtAZIApAZIAdgIQA3gPAoACIAwAFIgCgRQgGgrAHg0QAGgvAOgvQARg2ATglQAdg2ATgdIAagoQAQgZAMgPQAkgrAigdQAwgoAjgXQAqgaA3gTQA7gVAugFQA3gHA0AEQAsADA9APQAwAMA1AcQAyAcAmAhQAsAmAbAmQAfAuAQAvIAHAYQAKgIANgOIAUgUQAdgXA7gfQAwgZAygPQA0gPA3gGQA1gFA6AEQAvADA9AQQA1AOAzAYQAzAYAtAgQAqAeApArQArAtAbApQAeAuAWAzQAUAvANA6QAMA2ACA2QABApgEBBQgFAzgMAzQgGAbgMAlIANAWQAbAyAQAwQASA5AFAxQAGA3gEA3QgEAzgQA3QgOAxgZAyQgbAygeAmQgTAZgXAXQAEAvAAAqQgBAogJA5QgIAzgPAtQgRAygXAqQgYAtgfAoQgjArgjAfQgmAggtAaQgwAbgqANQgVAHgdAGQAAAVgCAaQgFAwgSA0QgSAygbAtQgdAvglAnQgmAogqAeQglAbg3AaQgvAVg2AMQg1ANg0ACQgtACg8gGQgygFgzgOQgxgMgxgYQgtgVgtggQgPgLgngmQgNgMgRgYQgCAUgHAWQgQAvgZAqQgbAuglAkQgkAhgwAgQgkAYg6AYQgkAQhEAHQgkAEgyAAIgVAAg");
	this.shape_126.setTransform(-72.6695,-65.975);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(51,255,255,0.498)").s().p("AkbXVQgvgBg8gFQg4gEg9gMQg+gMg5gWQgugRhJgsQgrgZgVgRIgVANQgyAdg+AdQhTAlgYAJQg8AVgzAJQg4AKg7gBQg0AAg+gQQgygNg5gaQgvgVgyglQgxgkgigoQglgrgcgzQgPgcgPgrQgTg0gHg3QgHg7ACguQAFhBAOgfQAVguAKglIAJgkQAGgVABgOQADgfgDgpQgCggAPgxQANgqAYgmQAXgkAlgcQAqgfAegKIAWgJIgEgOQgOgngEgsQgDgoAJgvQAKgvARgnQAJgUAhg4QAZgrAXgaQAjgmAggUQAbgRAwgJQALgCARACQgIgMgHgEQgmgegWgtQgUgtgJgyQgIgyAFg1QAHg9AOgpQAPgtAggyQAagrAngpQAdgeA0giQApgcAwgXQAogSA3gOQAvgMAygFQAugFAzAEQAlADA6ALQAtAIAuAOQAsANAsAZIApAaIAdgJQA1gOAqABIAwAGIgCgSQgFgsAGgzQAIg0ANgrQARg2ATgkQAbgyAWghIAagpQAQgZANgPQAlgqAigdQAwgpAjgVQAugbAzgSQA6gTAvgGQA3gGA1ADQAuAEA7APQAxAMAzAdQAzAbAlAhQAsAmAbAnQAfAvAQAtIAIAZQAJgIAOgOQANgOAHgGQAegXA6gfQAygZAxgOQA2gPA1gGQA2gFA5AFQAyAEA6APQAwAMA3AaQA1AaArAfQAqAeApArQAoApAdAtQAeAuAWAzQAVAvANA6QALAyACA7QABApgEBBQgEAvgNA3QgGAagNAlIANAWQAbAxAQAyQASA5AFAxQAGA0gFA6QgEAzgQA3QgQA1gYAuQgYAwghAoQgTAZgXAXQAFAxgBAoQgCAvgIAzQgJA1gPArQgSAzgXApQgaAwgeAlQgjAqgkAfQgmAhgtAZQgwAbgrANQgVAHgdAGQAAAXgDAXQgGAzgRAyQgTAzgbAsQgdAvglAmQgmAogrAeQgmAcg2AYQgvAVg2ANQg2AMgzACQg0ACg1gGQgygFg0gOQgwgMgygYQgrgVgvghQgRgMglglQgQgQgOgUQgEAZgGARQgRAwgZApQgcAvglAiQgnAkgtAcQgoAbg2AVQgmAPhCAIQgiADgoAAIgiAAg");
	this.shape_127.setTransform(-70.5926,-64.2609);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(51,255,255,0.498)").s().p("AkhXVQgzgCg5gEQg0gEhBgNQg7gMg8gXQgvgShIgrQgqgYgWgSIgWANQg0Afg9AbQhHAhgkAMQg8AWgzAIQg5AKg6gBQg1gCg9gPQgzgNg4gaQgsgUg1gnQgwgkgjgpQgkgqgcgzQgPgdgPgqQgSg2gHg1QgHg8ACgtQAEhBAPggQAVguAJglIAKgkQAFgUACgPQADgigCgmQgBgiAPgwQAOgoAZgnQAVgjAngdQApgeAfgLIAWgIIgEgOQgOgqgEgpQgDgpAJgvQAJguASgnQAOgfAcguQAZgrAYgaQAlgmAfgTQAcgSAwgIQANgCAPABQgKgMgFgEQgmgegVguQgUgtgIgxQgIgxAGg2QAGg7APgrQAQgtAfgyQAbgsAngoQAcgcA2gkQArgdAtgVQApgSA2gOQAvgMAzgFQAvgFAyAEQAhADA+AMQAqAHAyAQQAsANArAZIApAaIAdgJQA6gOAlACIAxAGIgCgSQgFgtAGgzQAGgwAPguQAQg0AVgnQAcgzAVggIAbgpQAQgYANgQQAkgqAjgdQAvgnAlgWQAvgcAzgQQA7gTAugGQA4gGA0AEQAvAEA6APQAvAMA1AdQAzAdAlAgQAtAoAZAlQAgAuAQAuIAIAZQAKgIANgOQAOgOAHgGQAcgWA8gfQAzgaAwgNQAygOA6gGQAygFA8AFQAzAEA5APQA2APAyAYQA1AaAqAfQAsAgAnApQAnAqAeAtQAeAtAWA0QAUAvANA6QALAzACA5QABAygFA4QgEAwgNA3QgHAcgMAjIANAWQAbAzAPAwQASA2AFA1QAFA0gFA5QgEAxgQA6QgPAzgZAvQgZAwggAoQgTAbgXAWQAEAtgBAsQgCAtgJA1QgIAzgQAtQgSAxgYAsQgYAsghAoQghApgmAgQgmAgguAaQgvAZgsAOQgVAHgdAGQgBAagDAUQgFAxgTA0QgRAwgdAvQgdAtglAoQgnAogqAeQgnAcg2AYQgsAUg5ANQg2AMg0ACQguACg7gGQg0gGgygNQgxgOgxgXQgsgVgughQgSgNgkgkQgOgOgQgXQgEAXgHATQgQAugbAsQgcAtgmAjQgoAlgtAbQgoAZg3AWQglAPhDAHQghADgpAAIghAAg");
	this.shape_128.setTransform(-68.4997,-62.5385);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(51,255,255,0.498)").s().p("AknXVQg6gDgygEQg8gFg5gMQg7gMg8gXQgxgShGgrQgngXgagUIgVANQg2Afg8AbQhPAjgdAKQg+AVgxAJQg4AJg8gBQg2gCg8gQQg1gOg1gZQgvgWgyglQgvgkgkgpQgjgqgcg0QgRgggOgnQgSg2gGg1QgIg/ADgqQAEhBAOggQAVgtAKgnIAKgkQAFgVACgOQAEgkgCglQAAghAPgwQAOgoAagnQAYglAlgaQApgdAfgLIAWgIIgEgOQgPgqgDgqQgDgoAJgvQAJguASgoQANgeAdgvQAcgtAXgYQAjglAhgUQAdgSAvgIQAPgCAOACQgJgNgGgEQglgegUguQgUgtgIgyQgIgzAGg0QAIg9APgpQAPgsAggzQAbgrAngoQAdgdA1gjQAugeArgTQAsgUAzgMQAugMA0gFQAwgFAyAFQAhADA9AMQAsAIAwAPQAqANAtAaIAqAaIAcgJQA4gNAoACQAQAAAgAFQAAgJgBgIQgFguAGgzQAHgxAPguQARg1AUgmQAagyAXghIAcgpQAQgYAOgPQAmgsAigbQAwgoAkgVQAwgbAygQQA9gTAtgFQA5gFAyAEQAsAEA+APQAyAOAxAcQAyAcAmAhQAtAoAaAlQAfAuARAuIAIAYQAKgHANgOQAOgOAHgGQAegYA7gdQAwgYAzgOQA5gQAzgEQA3gFA3AFQAzAFA5APQA2APAxAYQA3AbAoAeQAqAfApArQAoArAdAsQAfAwAUAxQAVAxAMA4QAMA3ABA1QACAugGA9QgEAwgNA2QgHAcgMAkIAMAWQAbAyAPAxQARA1AFA2QAFA3gFA2QgEAxgRA6QgPAzgZAvQgaAygfAnQgUAZgWAXQAEAvgCArQgBAsgKA2QgJA0gQAtQgSAygZAqQgZAsggAoQgkArglAeQgmAhguAYQguAZgtAOQgYAHgbAGQgBAZgCAVQgHAygSAyQgTAzgcAsQgeAvglAmQglAmgsAgQgmAag3AZQgtAUg4ANQg3ANgzABQg0ACg1gGQg2gGgwgOQgzgOgwgXQgtgWgtggQgTgOgjgjQgOgOgRgXQgEAXgHATQgQAsgcAtQgcAtgnAjQgnAjguAcQgnAZg4AWQgmAPhDAGQgeADgoAAIglAAg");
	this.shape_129.setTransform(-66.4034,-60.8034);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(51,255,255,0.498)").s().p("AkuXUQgpgBhCgFQg2gFhAgNQg8gMg7gXQgxgThGgqQgngXgagUIgVANQg0Aeg/AbQhNAigfALQg6AUg2AJQg7AJg4gBQg1gCg9gQQgzgOg4gaQgtgVgzgmQgvgkgjgqQgkgpgcg1QgPgdgPgqQgSg1gHg1QgIhCADgoQAFhBAOggQAVgxAJgjIAKglQAGgUABgPQAEgmAAgjQAAghAQgwQAOgnAagoQAZgjAlgbQAogcAggMIAXgIIgEgNQgOgngEgtQgEgmAKgyQAJguASgoQANgeAdgvQAdguAXgXQAlgnAggSQAdgRAwgJQALgCASACQgIgLgHgGQglgggTgtQgUgugHgxQgHgwAGg3QAHg8AQgqQAQgsAggyQAdgtAlgmQAdgdA1gjQAugeAsgTQAsgTAzgNQAugLA0gFQAxgEAxAEQAcADBCANQAtAIAvAQQAtAOAqAZIAqAaQAQgGANgCQA4gOAoACQAQABAgAFIgCgSQgFgvAHgyQAHgxAPguQARg2AUglQAagwAZgkQAqg+AQgSQAjgoAlgeQAzgoAjgUQAugbA0gQQA9gSAtgFQA3gFA0AEQAvAEA6AQQAwANA0AdQAyAbAlAiQAvAqAYAjQAgAtARAwIAIAYQAKgIANgOQAOgNAIgGQAfgYA6gdQAygYAxgOQA2gOA2gFQA0gFA6AGQAxAEA7AQQA0APAzAZQA0AZArAgQAqAfApArQAoAsAcArQAdAtAWA0QAWA0ALA1QAMA5AAA0QACAtgGA9QgEAugOA4QgFAZgOAnIAMAWQAaAxAQAyQARA6AEAxQAGA3gGA3QgFAygQA4QgPAzgZAwQgZAwggAoQgUAbgXAWQAEAxgCApQgBAugLA1QgKA3gQApQgRAxgZArQgcAwgfAkQgiApgnAgQgnAggtAZQguAYgvAPQgYAHgaAFQgBAVgDAZQgIA0gSAxQgTAxgdAtQgeAwglAlQgmAmgrAfQgoAcg1AYQgyAVg0ALQg3ANgzABQgxACg4gGQg2gHgwgNQgwgOgzgYQgtgWgtggQgPgLgognQgMgMgSgYQgGAZgGARQgSAugcArQgeAuglAhQgoAjguAcQgtAbgzATQglAOhDAHQgeACgiAAIgsgBg");
	this.shape_130.setTransform(-64.3054,-59.1032);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(51,255,255,0.498)").s().p("Ak0XUQgrgChBgFQg4gFg9gNQg9gMg7gXQgxgUhGgqQgpgYgYgTIgWANQgyAdhBAcQhRAkgbAJQg+AUgzAIQg6AJg5gCQg1gBg9gRQgygNg5gbQgugWgygmQgwglgigoQglgtgagyQgQgdgOgqQgSgygHg4QgHg8ADgtQAEhBAOggQAWgzAJgiIAKglQAGgVABgOQAFgjAAgnQAAghARgwQAOgnAbgnQAYgjAmgbQAsgeAdgJIAWgIIgEgOQgOgmgEgtQgDgoAJgwQAKguARgpQAPgiAcgsQAeguAXgXQAkglAigTQAdgRAwgJQAOgCAPACQgIgLgGgGQgkgggTguQgTgtgHgyQgIgxAHg2QAJg8APgqQARguAfgwQAdgsAmgmQAegeA0giQAtgdAtgUQAqgSA2gNQArgLA3gFQAygEAwAFQAmADA5AMQApAIAyARQAsAOAsAZIApAbIAdgIQA4gOAoACQAQABAgAFIgBgSQgFgtAHg0QAGguAQgxQASg4AUgkQAdg1AWgeQAsg/APgRQAmgqAjgcQAzgpAjgTQAwgaAzgPQA8gTAugEQA4gFAzAFQAwAEA5AQQAxANAzAdQAuAaApAkQAtAoAaAlQAgAsARAwIAJAYQAJgHAOgOIAWgUQAggXA5gdQAygYAygNQA1gOA3gFQA3gEA3AGQAyAFA6AQQAzAOA0AZQAyAaAsAgQAtAhAlApQAnApAdAuQAfAwAUAyQAVAwAMA5QALA0ABA4QACAwgGA7QgEAugOA4QgHAbgNAlIAMAWQAaAyAPAyQARA6AEAxQAFA4gFA2QgFAzgRA3QgPAzgZAvQgZAwggApQgVAagWAXQADAzgCAoQgCAugKA0QgLA3gQAqQgTAzgZAoQgbAuggAnQgjAognAgQgoAhgtAXQgwAZgtAOQgWAGgcAGQgCAagDAVQgIAzgTAxQgTAwgdAuQgfAvglAlQgmAogsAeQgpAcg0AXQgwAUg2AMQg3AMgzACQg4ABgxgGQgygGg1gPQgvgNgzgZQgqgUgwgiQgTgOgkgkQgNgNgRgYQgGAYgHATQgTAtgcArQgdAugnAhQgnAhgvAdQgsAag0ATQglAOhEAGQgdADgiAAIgsgBg");
	this.shape_131.setTransform(-62.2113,-57.421);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(51,255,255,0.498)").s().p("Ak7XTQgygCg6gFQg4gFg9gNQg+gNg5gXQgygThGgrQgpgYgYgTIgWANQgyAchCAdQhKAhgjALQg9AVgzAHQg6AJg6gCQg3gCg7gRQgwgNg6gbQgwgXgwglQgtgjglgrQgkgrgbgzQgPgegPgqQgRgygHg4QgIg8ADguQAFhBAOggQAVg0AJggQAQg7ACgOQAEggABgrQABghASgwQAOgmAcgnQAZgkAmgZQAogdAggKIAXgIIgEgOQgOgpgEgqQgEglAKgzQAJgvASgoQAQgjAbgrQAbgsAbgaQAlglAigTQAfgSAvgHQALgCASACQgHgLgHgGQgjgggTgvQgTgvgHgwQgGg0AHgzQAIg7AQgrQARgtAggxQAegtAlglQAbgbA3gkQAxgfAqgSQAtgTAygMQArgKA3gFQAxgFAyAGQAiADA9ANQAqAJAxAQQAqANAuAbIApAbQAKgEATgFQA6gNAmACIAxAGIgCgSQgFgsAIg1QAGgvAQgxQARg1AVgnQAcgyAYghQArg9ARgTQAjgnAngfQAxgmAlgVQAygaAxgPQA9gRAtgEQA2gGA2AGQAsAEA9ARQAxAOAzAcQAyAdAlAhQAsAnAbAmQAgAtARAvIAJAYQAJgHAOgOQAOgNAIgGQAhgYA5gcQAxgYAzgNQA3gOA1gEQA4gEA2AGQAxAEA7ARQA0APAzAZQA1AbApAfQApAfApArQAmApAeAvQAdAtAVA0QAVAxAMA4QALA1ABA4QABAygGA4QgEAwgOA3QgHAagNAmIAMAWQAaAzAOAxQARA5AEAyQAFA2gGA4QgFAygQA4QgQA0gZAvQgZAughAqQgZAfgSASQAEA1gDAmQgCAsgLA3QgKA1gRAsQgUAygZAqQgbAughAmQglAqglAeQgoAgguAYQgxAZgsANQgaAHgZAFQgBATgEAcQgIAygUAyQgTAxgdAtQgeAtgmAnQgpAogqAdQgnAbg2AYQgwAUg2AMQgzALg3ADQg1ABg1gHQg0gGgzgPQgvgNgzgZQgrgVgvgiQgVgPgigjQgNgMgSgYQgIAcgGAOQgSAtgdAsQgeAsgoAiQgmAhgwAcQgpAYg4AVQglAOhDAFQgaADgfAAIgzgCg");
	this.shape_132.setTransform(-60.1042,-55.6982);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(51,255,255,0.498)").s().p("AlBXTIhsgIQg0gFhBgNQg7gMg9gYQgzgUhFgqQgpgYgYgTIgWAMQg2Afg/AaIg3AYQgeAMgYAIQg+AVgzAHQg7AIg5gCQg0gCg9gRQg1gPg2gaQgtgWgygnQgwglgigpQgkgsgagyQgSghgMgmQgSgzgHg4QgHhBADgoQAEhBAOggQAVgwAKglIAKgmQAGgVACgPQAFgjABgoQACghASgvQARgqAagkQAZgjAmgZQAogcAhgLIAWgHIgEgOQgOgpgEgrQgDgoAJgwQAJguASgpQAPgiAdgtQAcgrAagaQAnglAhgTQAggSAvgHQAMgCARACQgGgLgHgHQgjgggTgvQgTgwgFgvQgGgzAHg0QAJg7AQgrQARgtAggwQAdgsAngmQAcgdA2giQAvgeAsgTQArgSA1gMQAxgMAxgDQAsgEA2AFQAiADA9ANQAsAKAwAQQAtAPAqAZIAqAcQAKgEATgFQA4gMAoACIAxAFIgCgRQgEguAHg0QAHgwAQgwQAQgzAWgpQAdg0AXggIAegpQARgXAOgQQAmgpAlgcQAwglAngVQAvgZA1gPQA6gRAwgEQA3gFA1AFQAtAFA8ARQAwANAzAdQAxAdAmAhQAsAnAbAnQAhAuARAuIAJAYQAJgHAPgOQAOgOAIgGQAfgXA7gcQAxgXAzgNQA3gOA1gEQA1gEA5AGQA1AGA3AQQA1APAyAZQA0AbAqAgQAtAhAkApQAoAsAcAsQAdAuAVAzQAVAyALA3QALA2ABA3QACAsgHA/QgFAxgOA1QgGAYgOAoIAMAXQAbA1ANAvQAQA3AEA0QAFA3gGA3QgFAugRA8QgQA1gZAuQgXAtgiArQgWAcgWAVQAEA1gDAnQgDAvgLA0QgKA1gSAsQgUAygZAqQgaArgjAoQgmAsglAcQgnAggvAYQgxAZgtAMQgbAIgYAEQgBAWgEAZQgJAzgUAxQgTAvgeAvQgfAuglAmQgnAngsAdQgmAbg3AYQgsATg7ANQg2AMg0ABQgzACg3gHQg2gHgxgOQgvgNgzgaQgugWgtghQgPgLgognQgQgQgPgUQgHAYgHASQgSArgfAtQgfAtgnAhQglAggyAdQgqAYg3AUQgmANhDAGQgYABgeAAIg1gBg");
	this.shape_133.setTransform(-58.0214,-53.9748);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(51,255,255,0.498)").s().p("AlIXTQg7gEgxgFQg0gFhBgNQg8gNg8gXQgsgShMgtQgsgagVgRIgWAMQg5Agg9AZQhIAfglAMQhAAVgxAHQg7AIg6gDQg0gCg9gRQgzgPg3gbQgugXgxgmQgvgkgjgqQgjgqgbg0QgQgegOgqQgSg3gGgzQgIg9ADgtQAFhBANggQAUguALgnIALgmQAGgWACgOQAFglACgnQACghATgvQAPgmAcgnQAagiAmgaQAqgcAfgKIAXgHQAAgFgEgJQgOgqgEgqQgEgnAKgxQAIgrATgtQAPgiAdgsQAcgsAbgaQApgmAggRQAdgRAzgIQAPgDAOADQgGgLgHgHQgjghgSguQgRgwgGgwQgGg0AIgzQAIg5ARgtQATgvAfguQAdgrAmgnQAcgbA3gjQAsgdAvgUQAsgSA0gMQAygLAxgEQAugDA0AFQAiAEA9ANQAoAJA0ARQArAOAsAbIAqAbIAdgIQA4gMApACIAwAFIgBgRQgEguAHg0QAIgzAPguQASg3AVglQAcgyAZgiQAqg7ATgUQAlgoAmgdQAzgmAmgUQAvgZA0gPQA9gRAugDQA0gEA4AFQAuAFA7ARQAwAPAyAcQAzAeAlAgQAtAoAaAmQAhAuARAuIAJAYQAJgHAPgOQAOgNAJgGQAfgXA7gcQAzgYAygMQA3gOA1gDQAygEA8AGQAxAGA6AQQAyAPA1AaQAyAaArAhQAqAfAoArQAnArAcAtQAdAsAVA2QAVAyALA3QALA2ABA3QABA0gGA2QgFAugPA5QgHAegNAiIAMAXQAZAzAOAxQAQA2AEA1QAEA4gGA2QgEAxgSA4QgQA3gZAtQgZAwghAoQgYAegTAUQADAxgDArQgCAsgMA3QgMA4gRApQgUAxgaArQgcAtgiAmQgkApgnAfQgpAgguAXQgyAZgsAMQgaAIgZAEQgCAWgEAZQgJAxgUAzQgUAxgeAtQgeAtgnAmQgmAlgtAgQgmAag4AYQgsATg6ANQg5AMgxABQg2ACg1gHQgxgHg2gPQgxgOgxgZQgugWgtghQgRgNgmglQgQgQgPgVQgGAVgJAVQgVAvgdApQgeArgpAjQgnAggwAcQgqAYg4ATQgoAOhBAFQgYACgbAAQgbAAgegCg");
	this.shape_134.setTransform(-55.9129,-52.2388);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(51,255,255,0.498)").s().p("AlOXTQgzgDg5gGQg2gFhAgOQg9gNg6gYQgxgThIgrQgrgagWgSIgXANQg3Aeg/AaQhNAhghAKQg9AUg0AHQg3AIg+gCQg2gDg7gSQgygPg4gbQgugXgxgmQgvglgigqQgkgqgag0QgQgdgOgqQgSg1gGg2QgHg8ADgtQAEhCAOggQAWg2AJggQAQg5ADgRQAFghADgrQACgjAUgtQAQgnAcgmQAcgjAkgYQAsgcAegJIAXgHIgEgOQgPgogEgsQgDglAJgzQAJgtATgrQAQgnAcgpQAegtAagYQAngkAjgTQAggSAwgHQAMgCASACQgHgLgGgHQgjgigRguQgSgxgFgvQgFgzAIg0QAKg6AQgrQASguAggvQAdgrAngnQAegdA2giQAugcAtgTQAogSA4gMQAugLA0gEQAvgDA0AFQAiAEA9AOQAqAJAzARQAqAPAtAbIApAbIAdgIQA3gMAqACQAVACAcAEIgCgSQgEgsAIg2QAGgvARgyQARg0AWgoQAagvAcgmQAsg7ASgUQAngpAlgbQAugjArgWQAzgaAxgNQA8gQAvgEQA7gEAwAGQAvAGA6AQQAxAPAyAdQAvAaAoAkQAsAmAcAnQAgAtASAvIAJAYQAJgGAPgOQAOgNAJgHQAhgXA6gbQAxgXA0gMQAzgNA5gEQAzgEA7AHQAzAGA5ARQA0APAyAaQAzAaAqAgQAqAgAoAsQAkAnAfAwQAdAwAVAyQAUAzALA2QALA4ABA1QAAA0gGA3QgEAvgPA4QgIAcgNAkIALAXQAaA0ANAwQAQA3AEA0QAEA4gGA2QgGAygRA3QgQA3gZAtQgaAxggAnQgYAegUAUQADAygDAqQgDAugMA2QgKAygUAvQgVA0gZAoQgbAsgjAnQglApgnAeQgnAegxAZQg0AZgrAMQgWAGgdAFQgBAQgFAfQgKA0gUAwQgVAxgdAtQgdArgoAoQgoAngsAdQgqAdg0AWQguATg4AMQg7ANgwAAQg1ACg2gHQg2gIgwgOQgxgPgygYQgugXgtghQgUgPgkgkQgOgNgRgXQgHAYgJASQgVAugeAqQgfArgoAiQgoAggwAbQgqAYg4ATQgpAOhAAEQgZABgbAAQgbAAgdgBg");
	this.shape_135.setTransform(-53.8129,-50.5175);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(51,255,255,0.498)").s().p("AlVXSQgygDg6gGQgvgEhGgPQg/gOg5gXQgwgThJgsQgogXgZgUIgXAMQg1AdhBAbQhPAhggAKQg9ATg1AIQg8AIg4gDQg4gEg6gRQg0gQg2gbQgugXgwgmQguglgjgqQglgugZgxQgQgegNgpQgSg0gGg3QgIg8ADgtQAFhBANghQAUgvALgnIALgmQAGgWADgOQAGguADgfQACgjAVgtQARgoAcgkQAbgjAmgYQArgbAfgKIAWgHIgEgNQgOgpgEgrQgEgnAKgyQAIgrATgtQASgnAbgpQAdgrAcgaQApglAigSQAegQAygJQAQgCAPACQgHgMgGgGQgigjgRguQgSgygEguQgFgxAJg2QAJg4ARgtQATguAggvQAcgpAogoQAdgcA3giQArgbAwgVQAtgSAzgLQAwgLAzgDQAxgEAyAGQAiAEA9AOQAnAIA1ATQArAOAsAbIAqAcIAdgIQA7gMAmADQAQAAAhAFIgBgSQgEgsAHg2QAIgzAQguQASg3AWgmQAagvAcglQAtg8ASgTQAngpAlgbQAvgiArgWQAvgYA1gPQA5gPAygEQA5gEAzAHQAwAFA5ASQAwAOAzAdQAuAaApAkQAsAnAcAnQAhAvARAtIAKAYIAYgVIAXgTQAhgXA6gbQAzgXAygMQA3gNA2gDQA0gDA6AHQAwAFA7ASQA0APAyAaQAwAZAtAiQAtAiAkApQAmAqAdAuQAcAtAWA1QAVA1AKA0QAKAyACA7QAAAxgGA6QgGAvgOA4QgKAigMAeIAMAXQAaA1ANAwQAPA2ADA1QAEAygGA8QgGAygRA3QgPAygaAyQgZAughAqQgWAcgWAWQACA2gDAnQgDAvgMA1QgMAzgTAuQgVAxgaArQgdAugiAlQgmAognAfQgpAfgvAXQg0AZgrAMQgYAGgcAFQgCAUgFAbQgKA0gUAwQgWAzgdAqQggAvgmAkQgnAngsAdQgnAag3AYQguAUg5AMQg3ALg0ACQgyABg5gHQg4gIgvgPQgygPgxgYQgsgWgvgiQgTgPgkgkQgPgPgRgVQgGAVgKAVQgVArgfAsQggAsgpAhQgqAhguAaQguAYg0ASQgqAOhAADIguABQgeAAgggCg");
	this.shape_136.setTransform(-51.7167,-48.8119);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(51,255,255,0.498)").s().p("AlbXSQgogDhEgHQgygEhEgPQg6gMg9gZQgvgThKgsQgtgbgVgRIgXAMQg3AehAAaQhLAfgkAMQhCAUgwAGQg6AIg7gEQg0gCg9gTQgygPg4gcQgugXgwgmQguglgjgqQgjgsgbgzQgQgggNgnQgRg0gHg3QgHg9ADgsQAEhBAOghQAUgxAKgmIAMgmQAGgWACgPQAHgmADgnQADgiAVguQAUgqAbghQAbgiAmgZQAqgbAggJIAXgHIgEgOQgPgrgEgpQgDglAJgzQAJgsATgtQAQglAcgrQAfgtAcgYQApglAjgSQAhgRAwgHQAOgCAQABQgHgMgGgGQgigkgPgtQgRgxgEgwQgFgyAJg0QAKg6ASgrQAQgrAigyQAfgsAmglQAggeA0ggQApgaAygVQArgSA2gLQAsgKA3gEQAygDAxAGQAiAEA9AOQAvALAtAQQAsAQArAaIAqAcIAdgHQA4gMApACIAxAGIgBgSQgEguAIg1QAHgwARgxQASg2AWgnQAbgwAcglQArg5AVgVQAlgnAogdQAwgjAqgVQAwgYA1gNQA+gQAtgDQA1gEA3AHQAvAGA5ASQAyAPAxAcQAwAcAnAjQArAlAdApQAhAvASAsIAJAYIAZgUQAOgNAJgGQAhgXA7gbQAzgWAygMQA4gNA0gDQAygDA9AHQA1AHA2ARQA0APAxAaQAyAaAsAiQArAhAlAqQAmAqAdAuQAcAuAVA0QAVA1AKA0QALA4ABA1QAAAxgGA6QgGAygPA1QgHAbgOAlIALAXQAYAwAOA1QAPA3AEA1QADAzgGA7QgGAxgRA4QgQA1gaAvQgbAxgfAnQgTAYgZAaQACAxgDAsQgEAtgMA3QgOA3gSAqQgVAzgbApQgfAvggAkQglAngpAgQgoAegwAXQgyAYguANQgfAIgVADQgCAUgFAbQgKAzgVAxQgWAxgeAsQgeAtgnAmQgqAogqAbQgsAegzAUQgxAVg2ALQg2ALg1ACQg4ABgzgIQg1gHgygPQgzgQgwgYQgvgYgsghQgUgOgkgkQgNgNgSgYQgJAYgJATQgVArggAsQggArgpAgQgnAfgyAcQgvAZg0AQQgoAOhBADIgpABQggAAgjgCg");
	this.shape_137.setTransform(-49.6316,-47.1127);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(51,255,255,0.498)").s().p("AliXRQg8gEgwgGQg4gGg9gNQg6gNg+gZQgxgThIgsQgpgYgagUIgWAMQg2AdhCAbQhWAigaAIQg9ATg1AHQg7AHg6gDQgzgDg/gTQgygPg3gcQgwgZgugmQguglgigqQgjgqgbg1QgQgggNgnQgRg1gHg2QgHg/ADgqQAFhBANghQAWg1AJgiQASg9ACgOQAIgqADgjQAEgjAWguQASgnAdgkQAcgjAlgWQArgbAggJIAXgHQgBgEgEgJQgOgqgEgqQgEgmAKgzQAJgsATgtQASgqAbgmQAfguAcgYQAngjAmgTQAhgRAwgHQAPgCAQABQgHgMgGgGQgggigQgwQgQgwgFgxQgEg0AJgyQAKg4ASgtQASgrAhgyQAegqAngmQAegcA2giQAvgdAtgSQArgSA2gLQAygLAxgDQAwgDAzAHQAmAEA6AOQAnAJA1ATQAsAQArAbIApAcQAQgFAOgDQA5gLApACQAUABAcAFIgBgSQgDgvAIg1QAHgyARgvQASg1AXgoQAeg1AZggQAug7ATgTQAogoAmgcQAtggAtgWQAygZAzgMQA8gQAvgCQA4gDA0AGQAsAGA9ASQAxAPAyAdQAwAcAnAjQAqAlAeApQAfArAUAwIAJAZIAZgVIAYgTQAigXA6gaQAwgWA1gMQA0gMA5gDQA3gDA3AHQAyAGA5ASQAxAPA0AbQAyAaArAiQArAhAmAqQAmAqAcAvQAfAyASAwQAUAwALA5QAKA1ABA4QABAwgHA7QgFAugQA5QgHAbgOAlIALAXQAYAzANAzQAPA3ADA0QAEAzgHA7QgGAzgRA2QgRA2gZAuQgZAvgiAqQgSAXgaAaQADAzgEArQgEAvgNA1QgNA2gTAsQgWAygbApQgdAugjAlQgnApgnAdQgpAfgwAXQgzAYgtAMQgXAGgdAFQgDAZgFAWQgLAzgVAxQgWAzgeAqQgfAsgnAmQgnAmgtAeQgqAcg1AVQgxAVg2ALQg4AMgzAAQg5ABgzgHQg2gIgxgPQgwgOgzgaQgtgXgugiQgWgQgigjQgQgPgQgVQgLAcgHAOQgXAuggApQghAsgpAfQgqAhgvAZQgtAYg2ARQgnAMhDAEIgpABQgfAAgkgDg");
	this.shape_138.setTransform(-47.5337,-45.3874);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(51,255,255,0.498)").s().p("AloXRQg9gFgvgFQg0gGhCgOQg8gNg8gZQgxgUhIgrQgqgZgZgUIgWANQg0AbhFAcQhQAgggAKQg+ASg0AHQg5AIg9gEQg2gEg7gSQg1gRg0gbQgsgXgygoQgtgkgjgrQgkgugZgxQgOgbgPgsQgRgygHg5QgHg+ADgsQAEhAAOgiQAUg0AKgjIAMgnIAJglQAHgiAFgrQAEgiAXgvQATgoAdgiQAcgiAmgXQAsgbAegIIAXgHIgEgOQgOgogEgsQgEglAKg0QAJgtATgrQASgrAbgmQAhgvAbgXQAqgkAkgSQAigRAwgHQAOgCARACIgNgTQgggkgPguQgQgygEgvQgDgyAJg1QAKg4ASgsQAUgvAgguQAfgrAmglQAfgdA1ghQAugbAugTQAsgSA2gLQAugKA1gDQAwgDAzAGQAjAFA9AOQAuALAuASQAqAPAtAcIApAcQAQgFAOgCQA5gMApADQAVABAcAEIgBgSQgEgwAJgzQAHgzARgvQATg2AWgoQAdgyAbgiQAqg3AYgYQAkglAqgeQAxghAqgVQAwgWA2gOQA7gPAwgCQA5gDAzAHQAxAHA4ARQAzARAvAcQAyAdAlAhQAsAnAcAnQAhAtATAvIAKAYIAZgUQAOgMAJgHQAhgWA8gbQAygWA0gLQA2gNA2gCQAzgDA7AIQA0AHA3ARQAzAQAzAbQAzAbApAhQAsAiAlAqQAmArAbAtQAdAwAUAyQAUAyALA3QALA4AAA1QABAtgHA/QgHA1gPAyQgIAdgOAjIAMAXQAYAzANAzQAOA5ADAyQADA0gGA6QgGAvgSA6QgQA0gaAwQgbAyggAnQgUAYgYAZQACAwgEAuQgFAzgNAyQgNA1gTAsQgVAvgdAtQgfAvgiAkQgqArglAaQgoAegxAXQgzAZguALQgWAGgeAFIgIAvQgLA0gWAwQgXAzgdAqQgfAsgoAmQgpAngrAcQgqAcg1AWQguATg5AMQg4ALg0ACQg1ABg2gIQg3gIgxgPQgxgQgygZQgtgXgvgiQgVgQgjgjQgRgRgPgTQgJAXgJATQgXArghArQgfApgsAiQgpAggxAZQguAYg1AQQgnAMhDAEIgkABQgkAAgkgDg");
	this.shape_139.setTransform(-45.4226,-43.6681);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(51,255,255,0.498)").s().p("AlvXRIhsgKQg4gHg+gOQg9gOg7gYQgtgShMguQgqgZgZgTIgXAMQg4AdhBAaQhTAhgdAJQhAASgzAHQg6AGg7gDQg1gEg9gTQgygPg3gdQgvgZgvgmQgtglgigrQgkgtgZgyQgQgggNgnQgRg2gGg1QgIg/ADgqQAGhCAMghQAUgyALglIALgnQAHgWADgPQAIgnAFgnQAEghAYgvQATgoAdgiQAdghAlgYQAtgbAfgIIAWgGIgDgOQgPgogEgsQgEgmAKgzQAJgsASgsQATgsAbgmQAggtAdgZQAqgjAkgTQAkgRAvgHQAPgCARACQgGgKgHgJQgfgkgPgvQgPgxgEgwQgCg0AJgzQALg5ASgrQATgsAhgwQAegqAogmQAfgdA1ghQAugbAugTQAtgSA0gLQAygKAygCQAygDAxAHQAkAEA9APQAvAMAtARQArAQAsAbIApAdIAegHQA3gLArACQAQABAhAFIgBgSQgEgtAJg3QAHgvARg0QAUg1AXgoQAagvAdgmQArg2AYgYQAmgmApgcQA0gjApgTQAwgXA1gNQA8gOAwgCQA3gDA0AIQAvAGA6ASQAwAQAyAdQAxAcAnAjQArAmAdAoQAhAtATAvQAHAOADAKIAZgUQAOgNAJgGQAlgYA5gZQAzgVAzgMQA3gMA1gCQA3gCA3AIQAwAGA7ASQA0ARAxAaQAxAaAsAiQAsAjAkApQAmAtAbAsQAdAwAUAyQATAwALA6QALA4AAA0QABA0gIA4QgFAxgQA2QgJAegOAiIALAYQAZAzAMAyQAOA6ADAyQAEA2gHA4QgGAygTA3QgOAygbAyQgZAtgjArQgTAYgZAaQABAygDAtQgFAvgNA1QgPA2gTAsQgXAzgbApQgdAsglAmQgoApgnAdQgtAggtAUQg0AZgtALQgcAHgZADQgDAWgFAZQgLAzgXAxQgWAxgfAsQggAugnAkQgpAngsAcQgqAcg1AVQgtAUg6AMQg5ALgyABQg7ABgygIQg0gIg0gQQgwgPgzgaQgrgVgwgkQgWgQgjgjQgPgPgRgWQgKAbgJAQQgYAtghApQghAqgrAgQgmAfg0AaQgsAWg4ARQgoANhBADIgfAAQgjAAgrgDg");
	this.shape_140.setTransform(-43.3,-41.9505);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(51,255,255,0.498)").s().p("Al1XQIhsgKQgwgGhGgPQg+gPg6gYQgygUhIgsQgpgZgZgTIgYAMQg2AchDAbQhTAggeAJQhCATgxAGQg8AHg6gFQg2gDg7gUQg0gQg1gdQgugYgvgnQguglgigqQgjgtgZgyQgPgdgOgrQgSg1gGg2QgHg+ADgrQAFhBANgiQAUgyAKglQATg/ADgOQAHggAHguQAFghAYgwQASglAfgkQAdgiAmgWQAugbAdgIIAXgGIgEgOQgPgrgDgpQgEglAKg0QAIgpAUgwQASgrAcgnQAggtAegYQAtglAigRQAigRAxgHQAPgCARACQgHgNgFgGQgfglgOgvQgPgzgDguQgDgyAKg1QAMg7ARgpQATgsAigwQAggsAmgkQAfgcA2ghQAugcAugSQAogQA5gMQAzgKAxgCQAtgDA3AHQAhAEA/APQApALAzATQAqAPAtAdIApAdQAOgFAQgDQA5gKApACQAQABAhAFIAAgSQgEguAJg3QAIgwARgyQASg1AYgpQAdgxAcgkQAlgwAfgeQAlglAqgdQAwggAtgVQAvgVA3gOQA7gNAwgCQA4gDA0AIQAvAGA6ATQAxAQAxAdQAxAcAmAjQAsAmAdAoQAgAsAUAwQAHAOADAKIAZgUQAPgNAJgGQAlgYA5gYQA0gWAygKQA0gMA5gCQA3gDA3AJQA0AHA2ASQAxAPA0AcQAzAbAqAhQAtAlAiAoQAmAqAcAuQAdAxATAyQAUA0AKA1QAKA1ABA4QAAA1gHA3QgGAygQA1QgKAhgNAfIAMAYQAWAwAOA1QANA5ADA0QADA3gHA2QgGAxgSA4QgRA1gaAvQgcAygfAnQgWAbgXAXQACAzgFArQgEAsgOA5QgNAzgVAvQgWAwgdAsQghAwgiAiQgkAmgsAfQgpAegxAWQgzAYgvALQgaAHgaAEQgEAXgFAYQgMAzgWAxQgXAxgfArQgeAqgpAoQgpAmgsAdQgrAbg1AWQgyAVg1AKQg6AMgyAAQg4ABg0gIQg1gIg0gQQgwgPgzgaQgwgagrggQgYgRghgiQgPgPgRgWIgUAqQgYAtgiApQghApgrAhQgrAhgwAXQgsAXg4ARQgpAMhBACIgeABQglAAgqgEg");
	this.shape_141.setTransform(-41.2121,-40.2277);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(51,255,255,0.498)").s().p("Al7XQQg5gFgzgGQg0gGhCgQQg+gOg7gYQgzgWhHgqQgugdgVgQIgXAMQg3AchEAbQhRAgggAJQg+ASg1AGQg8AHg6gFQg0gEg9gUQgygQg3gdQgugZgvgmQgvgngggpQgjgsgagzQgPgegNgqQgRgygHg5QgHg7AEguQAEhBANgiQAVg1AKgjIAWhNQAIgkAHgrQAFghAYgvQATgkAgglQAdghAmgWQAvgbAcgHIAXgGIgEgOQgOgogEgsQgEgnAKgzQAIgpAUgwQASgrAcgnQAigvAegXQAsgkAkgRQAjgRAwgHQAQgCAQACQgEgKgHgJQgfgmgNgvQgPgwgDgxQgCg0AKgyQAMg5ASgrQAVguAgguQAggrAngkQAggeA1gfQAvgdAtgRQAugSA0gKQAygKAygCQAwgCA0AHQAmAFA6APQArALAxASQAqARAtAcIApAdIAegHQA4gLAqACQAPABAjAFIgBgSQgDguAIg3QAJgyARgxQATg1AXgpQAegyAcgjQAogzAcgaQAlglAsgdQAvgfAugVQAygXA0gLQA8gOAwgCQA6gBAxAHQAtAGA8AUQAyAQAxAdQAxAdAmAiQAqAlAeApQAgAsAVAwQAHAOADAKIAZgUIAZgSQAlgYA5gYQAygVA0gLQA1gLA4gCQA5gCA1AIQAzAHA3ATQAzAQAyAbQAzAcApAhQAqAhAmArQAmArAbAuQAcAvAUA0QAUA0AKA1QAKA1ABA4QAAA1gHA3QgIAzgPA0QgIAbgPAlIALAYQAXAzANAzQAOA6ACAyQACA3gHA3QgHAzgRA2QgQAzgbAxQgbAwggAoQgVAagYAYQABAwgFAwQgEAtgPA4QgOA2gVAsQgYAzgbAoQgfAtglAlQgkAlgsAgQgoAcgzAYQgzAXgvAMIg1AKIgJAvQgMAygXAyQgWAvggAtQgfArgpAnQgnAkguAeQgqAbg2AXQgxAUg3AKQg1AMg3AAQg3ABg1gIQg0gIg1gQQg1gRgugZQgugYgugiQgUgPgkgkQgMgLgVgaQgLAYgKASQgXAqgkArQgjArgqAfQgpAfgyAYQguAXg3AQQgnALhDADIgYABQgoAAgsgEg");
	this.shape_142.setTransform(-39.1254,-38.5452);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(51,255,255,0.498)").s().p("AmCXQIhsgMQg1gHhBgPQg+gOg6gYQgzgVhHgsQgpgYgbgVIgXAMQg9Agg+AXQhPAegjAKQg/ASg0AGQg9AHg5gFQg5gFg5gTQgzgRg1gdQgvgZgugmQgvgogggpQgigrgag0QgQgggNgnQgRg0gGg3QgHg/ADgrQAFhBANgiQAWg6AJgeQAQg1AGgZIAQhOQAFgiAZguQAVgoAfghQAcggAngXQAtgaAfgIIAXgFQAAgFgEgJQgOgpgEgsQgEgmAKgzQAKgvASgrQASgtAdglQAhguAfgYQAsgjAkgSQAkgQAxgHQAPgCARABQgGgLgGgIQgcglgPgwQgOg0gCguQgCgzAKgzQANg7ASgpQAVguAggtQAfgqAoglQAfgdA2ggQAxgdAsgRQAsgRA2gKQA0gKAwgCQA0gCAwAHQAmAFA6APQAuAMAvATQArARArAcIAqAdIAegHQA5gLApADQAQABAiAFIgBgTQgDgvAJg2QAIgyASgxQASgzAZgrQAdgyAdgjQApgzAcgbQAmgkArgdQAyggAsgTQAzgXAzgLQA6gNAygBQA2gDA2AJQAyAHA3ATQAyARAwAcQAyAeAlAiQArAlAeApQAgAsAVAwQAHANADALIAagUQAOgMALgGQAmgYA4gXQAygVA1gLQA4gLA1gCQA5gBA0AIQAzAHA4ATQAzARAxAbQAxAaArAjQAqAiAlArQAoAuAZArQAcAuAUA0QATAwALA6QAKA2AAA3QAAAxgHA6QgHAxgQA3QgIAagPAmIAKAYQAYA0ALAyQAOA6ACAyQACA0gHA6QgHAygRA3QgSA2gZAtQgbAwghApQgXAdgWAWQABAygFAtQgFAygPAzQgOA2gVAtQgZAzgcAoQgeAsglAmQgnAmgqAeQgtAfgvAVQg0AXguALQgfAHgXADQgCAUgHAcQgNAzgXAwQgXAxgfArQghAtgoAlQgpAmgsAcQgrAcg1AVQgxAUg3ALQg7ALgxAAQg4ABg1gIQg3gJgxgQQgygPgygbQgugYgugiQgWgQgjgjQgPgPgRgWIgWAqQgaArgiAqQgiAogsAhQgoAdg0AaQguAWg3AQQgoALhCACIgYABQgpAAgsgEg");
	this.shape_143.setTransform(-37.0228,-36.8361);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(51,255,255,0.498)").s().p("AmIXPQgpgEhDgIQg2gHhAgPQg9gOg8gZQgvgUhLgtQgsgagXgTIgYANQhBAgg7AWQhNAeglAKQhAASg0AFQg+AHg4gFQg1gFg8gUQg0gSg1gcQgvgagtgmQgugnghgpQgigtgagzQgPgdgNgqQgRgzgGg4QgHg+ADgsQAEhBANgiQAUgzALglQARg1AGgaQAMg1AEgaQAHgjAZgsQAXgpAdgfQAfgiAlgVQAugaAegHIAXgGIgEgOQgOgpgEgrQgEgnAKgzQAIgpAUgxQAUguAbglQAjguAegXQAugkAkgRQAkgRAxgGQAQgCAQABQgFgLgGgIQgcgkgOgxQgOg2gBgsQgCgwALg3QAMg5ATgqQAUgtAiguQAfgrAogkQAegcA3ghQAvgbAugSQArgRA3gLQAvgJA2gCQAxgCAzAHQAlAFA7AQQAqALAyAUQAsARArAcIApAdIAegGQA6gLAqADQAPABAiAFIgBgTQgCgtAJg4QAIgzASgxQATg1AYgpQAegxAdgkQAsg1AZgYQAogmArgbQAzggArgTQAygWA1gLQA8gMAvgCQA4gBA1AIQAuAHA6ATQAxARAxAdQAvAbApAlQApAjAfArQAiAuAUAuQAHANADALIAagUQAPgLAKgHQAlgYA6gXQA1gVAygKQA0gLA5gBQA2gCA4AJQA1AJA1ARQA3ATAtAaQAyAbAqAiQAqAiAlArQAlArAbAuQAcAuAUA1QAUA1AJA0QALA6AAAzQAAAzgIA5QgGAxgRA3QgJAdgPAjIALAYQAXAzALAzQAOA4ACA1QACA2gIA3QgHAzgSA2QgQA0gbAwQgbAxghAoQgYAdgVAVQABAzgFAsQgFAvgQA3QgOA0gWAuQgYAxgdArQgfAsglAlQgpAogpAcQgoAcg0AYQg1AXguALQgfAHgWADQgDAVgHAaQgNAygYAyQgYAygfAqQgfArgpAmQgpAlgtAdQgnAag5AXQgzAUg1ALQg3ALg2AAQg5ABg0gJQg3gIgxgRQgxgPgzgbQgvgZgtgiQgWgQgjgjQgQgPgRgWIgWAqQgbAsgjApQgkApgrAfQgpAegzAZQgqAUg7ARQglAKhFADIgVABQgpAAgvgFg");
	this.shape_144.setTransform(-34.9152,-35.0968);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(51,255,255,0.498)").s().p("AmOXPQg4gFg1gHQg5gIg9gPQg9gOg7gZQgygVhJgsQgpgZgbgUIgXAMQg8AdhBAZQhTAfggAJQhBASgzAFQg7AGg7gFQgzgFg+gUQgygRg2geQgugZgugnQgvgogggpQgjgtgYgzQgOgbgPgsQgRg0gGg3QgHg8AEguQAEhAANgiQAYhCAHgXQARg2AGgZIAShPQAHgiAZguQAWgnAfghQAeggAngWQAvgaAdgGIAXgGQAAgFgEgJQgPgtgDgnQgEglAKg1QAIgqAUgwQATguAcgmQAkguAegXQAxgkAigQQAkgRAxgHQAQgCARACQgGgNgFgHQgcgmgNgwQgNgzgCgvQgBg1ALgxQANg5ATgrQAVguAhgsQAfgrAogkQAhgeA1gfQAwgbAtgSQAtgRA2gKQAygJAygCQAygCAyAIQAjAFA+AQQAnAKA1AVQApAQAuAeIApAdIAegGQA8gKAoACQAQABAhAFIAAgSQgCgyAIg0QAKg2ARguQATg1AZgpQAcgvAfgnQApgxAdgcQAsgnAngZQA1ggAqgSQA0gWAzgKQA4gMA0gCQA6gBAyAJQAvAHA6ATQAyASAwAcQAuAcApAkQAqAlAfAqQAfAqAXAxQAHAOADAKIAagTQAPgMALgGQAkgXA7gYQAzgUA0gKQA1gLA4gBQAzgCA7AJQAyAJA4ASQA3ATAtAaQAxAbAqAiQArAkAkAqQAnAtAZAsQAcAuAUA0QASAxALA5QAKA4AAA1QAAAzgIA5QgHAygQA2QgMAjgMAdIALAYQAUAuAOA5QANA6ABAyQACAzgIA7QgHAygSA3QgQAygbAxQgaAvgiAqQgYAdgVAVQAAA2gFAqQgGAxgPA1QgOAygXAxQgZAzgdAoQgfArgmAmQgkAkguAgQgqAcgzAXQgyAWgxALQgWAGggAEQgCARgIAfQgOA1gXAuQgXAwghAsQghAtgoAkQgmAkgwAeQgpAbg3AWQgzAUg1ALQg5ALg0AAQg5ABg0gJQg0gIg1gRQg2gSgugZQgvgZgtgiQgUgPgmgkQgUgVgNgQIgXAqQgbArgjApQgiAnguAhQgrAfgxAXQgwAWg2APQgpALhCACIgJAAQgtAAg2gFg");
	this.shape_145.setTransform(-32.8133,-33.378);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(51,255,255,0.498)").s().p("AmVXPQg4gGg1gHQgxgGhFgQQg6gOg/gaQgygWhIgsQgugbgWgSIgYAMQg+Aeg/AYQhVAfgeAIQhEASgwAFQg8AGg7gFQg4gGg5gUQgwgQg4gfQgugZgugoQgsglgigrQgjgugYgyQgPgdgOgqQgQgzgHg4QgHg8AEguQAEhBANgiQAXhAAHgZIAYhPIAThQQAHgiAbgtQAWgnAfghQAhghAkgUQAtgZAggIIAXgFIgEgOQgOgpgFgsQgDgnAKgzQAJgqATgwQATguAdgmQAjguAggXQAwgkAjgQQAlgRAxgGQAQgCARABQgGgMgFgHQgbgngMgwQgOg2AAgsQgCgwAMg2QAOg7ATgpQAVgvAhgrQAfgqApglQAhgeA0geQAwgbAugSQAtgRA1gKQAvgJA2gBQAwgCA0AIQAiAEA/ARQAtAMAwAUQAqARAsAdIAqAeQANgEARgDQA7gKAoADQAQABAiAFIAAgTQgCgyAJg0QAIgyASgyQATgzAagrQAcgwAfgmQApgwAegdQAogkAsgcQAzgeAsgTQA2gWAygKQA6gLAygCQA4gBA0AJQAyAJA3ATQAwAQAyAeQAxAdAmAiQArAnAeAoQAhAsAWAwIAKAYIA0glQAlgXA6gYQA1gUAzgKQAygKA7gBQA0gBA5AJQAzAIA3ATQA1ASAvAbQAwAaAsAkQApAiAlArQAkApAcAxQAdAxASAxQATAzAKA3QAKA4AAA1QAAAzgIA5QgGAvgSA5QgLAigNAeIALAYQAVAwAMA3QANA3ACA2QABA0gIA6QgGAvgTA5QgRA0gbAwQgbAxghAoQgUAYgZAaQAAAygGAuQgFAugQA5QgRA2gVAsQgXAvggAsQgiAvgjAiQglAkguAfQgtAfgwAUQg0AXgwALQgeAGgYAEQgDAVgIAaQgOA0gXAwQgZAyggApQggArgpAmQgpAlgtAdQgrAbg2AVQgxAUg3ALQg4ALg1AAQg7AAgzgIQg6gKgvgQQgygRgygaQgugYgugjQgYgSgigiQgOgNgTgYIgYAqQgcAtgkAnQgjApgtAfQgoAdg1AYQguAVg4APQgnALhEACIgRAAQgpAAgygFg");
	this.shape_146.setTransform(-30.6965,-31.6659);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(51,255,255,0.498)").s().p("AmbXOIhtgNQg0gHhCgQQg6gOg/gaQgvgUhMguQgogXgcgWIgYAMQg9AehBAYQhOAdglAKQhAARg1AFQg7AFg7gFQg1gFg9gVQgzgSg0gdQgtgZgvgoQgsgmgigsQgigsgZgzQgPgfgNgpQgRg0gGg3QgHg3AEgyQADg+AOgmQAYhCAGgXIANgpQAIgXADgQIAUhQQAIggAbgvQAYgpAegeQAgggAmgVQAxgZAbgGIAYgGIgEgOQgOgogFgsQgEglALg1QAIgrAUgwQATguAdgmQAlgvAfgXQAygkAigPQAlgRAygGQAOgCATABQgFgLgGgJQgagmgMgxQgNgzgBgvQAAg1AMgxQANg4AUgrQAVgvAhgsQAggqAogkQAhgdA1gfQAugbAwgSQAqgQA5gLQAwgIA1gCQAwgBA0AIQAnAGA6APQArANAxAUQAsARArAdIApAeQAOgEARgCQA6gKAqADQAZABAYAFIAAgTQgCg0AJgyQAJgzASgyQAVg2AYgoQAcgvAhgnQAmguAhgeQAqgmArgaQAxgeAugTQA1gUAzgLQA5gLAzgBQA4gBA1AJQAuAIA6AUQAzASAvAcQAvAcApAkQAqAnAfAoQAgAsAXAwIAKAYIAagTIAagSQApgYA3gWQA1gUAzgJQA0gKA5gBQA2gBA4AJQAzAJA3ATQAzARAwAcQAyAcApAiQAqAjAlArQAmAtAZAtQAdAyASAwQATAzAKA3QAKA4AAA1QAAAwgJA8QgHAxgRA3QgKAfgOAhIAKAYQAWA0ALA0QAMA3ACA1QABA5gIA1QgHAwgSA4QgRAygbAyQgbAxgiAoQgRAVgcAdQAAAygGAvQgGAwgQA2QgRA3gWAsQgZAygeApQggAsgmAkQgrApgpAbQgrAdgyAVQg0AWgwALQgZAGgdAEQgEAVgIAaQgOA1gYAvQgZAyggAqQggAqgpAmQgoAjgvAfQgsAbg1AVQg0AVg0AKQg6ALg0AAQg7AAgzgJQg3gJgygRQgygRgygaQg0gcgpggQgWgQgjgkQgOgNgTgYIgZAqQgcAsglAoQgkAogtAfQgqAegzAXQgwAWg2ANQgqALhBABIgSABQgoAAgzgGg");
	this.shape_147.setTransform(-28.5965,-29.9409);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(51,255,255,0.498)").s().p("AmiXNIhtgNQg1gHhBgQQg+gPg7gZQgugUhNguQgxgfgTgPIgYAMQg7AdhEAZIg6AVQghALgZAGQhBASg0AEQg/AGg3gGQg2gGg7gUQgzgSg1geQgsgZgwgpQgvgpgegoQghgrgag1QgOgcgOgrQgRg0gGg3QgHg8AEguQAEhAANgjQAVg7AJgfQASg2AHgaIAUhQQAJgjAbgsQAYgoAfgfQAgggAmgUQAxgZAcgHIAXgFIgEgOQgOgsgEgoQgEgoALgzQAIgqAUgxQATgvAdglQAkguAhgXQAwgjAlgRQAmgQAxgHQAPgCATABQgEgIgGgLQgagmgMgyQgMg0AAgvQgBgzANgzQANg4AUgrQAVgtAigtQAfgoApgmQAhgdA2gfQAqgYA0gUQAsgRA3gJQA0gKAxAAQAwgCA0AIQArAHA2AQQAkAJA5AXQAoARAvAeIApAeIAegGQA6gJAqACQAQABAiAFIAAgSQgCgxAJg2QAJg0ATgxQAVg3AYgnQAdgxAgglQAqgyAegaQAogjAugcQAygeAugTQAxgTA2gLQA7gLAygBQA7AAAxAJQAwAIA5AUQAxASAxAdQAvAcAoAkQApAkAgArQAhArAXAwIAKAYIA1gkQApgZA3gVQA3gUAxgJQA2gJA3gBQAzgBA7AKQAwAIA6AUQAzARAwAcQAwAbArAkQAoAhAmAtQAmAtAaAsQAaAuAUA1QASAwALA6QAKA4AAA1QAAAwgJA8QgHAygSA2QgKAhgOAgIAKAYQAVAxALA2QAMA2ACA3QABA2gIA4QgHAugTA6QgSA1gaAvQgdAyggAnQgXAbgXAXQAAA0gGAtQgGAugRA5QgQA1gXAtQgaA0geAnQghAtgmAkQgoAmgsAcQgqAdgzAVQg2AXgvAKQgfAHgXADQgDASgJAeQgPA0gYAvQgZAwghArQggArgqAmQgqAlgtAcQgsAcg0AUQgyAUg3ALQg6AKg0ABQg4AAg2gJQg3gJgygRQg0gSgxgaQgxgbgrghQgYgSgigiQgMgLgWgaIgZApQgcArgmApQgkAogsAeQgsAegzAXQgvAVg4AOQgpAKhCABIgIABQgvAAg2gHg");
	this.shape_148.setTransform(-26.4083,-28.2482);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(51,255,255,0.498)").s().p("AmqXNIhsgNQg3gIhAgQQg8gPg8gaQgwgUhMguQgxgegTgPIgZAMQg7AchEAYQhPAdglAKQhEARgxAFQg+AFg5gGQg0gFg9gWQgxgSg3geQgvgbgsgnQgsgmghgrQgigsgZg0QgPgggNgoQgQgzgHg3QgGg6ADgwQAEg+ANgmQAWg+AJgcQASg3AHgaIAVhQQAJghAcguQAWgkAigiQAhghAlgTQAzgZAagGIAYgFIgEgOQgPgqgDgrQgEglAKg1QAIgnAVg0QAVgzAbgiQAlguAhgXQAwgjAmgQQAjgQA1gHQAQgCARABQgFgMgFgIQgZgogLgwQgMg1AAguQAAg0ANgyQAOg6AUgoQAVgtAigtQAggqApgkQAggcA2ggQAugaAwgSQAsgQA3gKQAygJA0gBQAugBA2AIQAsAIA1APQApAMA0AVQApARAuAeIApAfIAfgHQA8gJAoADQAQABAiAFIAAgTQgCgzAKg0QAJg0ATgxQATgzAbgsQAdgwAggmQAmgtAjgeQApgkAtgbQA2gfArgRQA2gVAxgJQA6gKAzAAQA3gBA2AKQAvAIA5AUQAzASAvAdQAvAdAoAjQAqAmAgApQAiAvAWAtIAKAYIA1glQArgYA2gUQAygTA2gKQAzgJA7gBQA0AAA5AJQAxAJA5AUQA3AUAsAaQAwAbArAjQAnAiAnAsQAkAtAbAtQAaAuAUA1QATA0AKA2QAJA6AAAzQAAAygJA6QgIAzgRA2QgJAdgQAjIALAYQAWA3AJAxQANA7AAAyQACA2gJA3QgIA0gSA1QgRAzgcAwQgaAwgiApQgVAZgZAaQgBA2gGArQgHAugQA5QgQA0gYAvQgbAzgeAnQghAtgmAjQgqAngrAcQgtAegxAUQg4AXgtAJQgfAHgYADQgFAZgHAWQgPA1gZAvQgZAwghArQghAtgpAjQgpAkguAdQgtAcg0AVQg3AVgyAJQg6ALg0AAQg8AAgygJQg0gJg2gSQg1gSgwgaQgqgWgzgmQgUgPgmglQgTgVgOgRQgSAfgIALQgbAogoArQgmApgsAdQgrAdg0AXQgwAVg3ANQgoAKhDABIgHAAQgqAAg9gGg");
	this.shape_149.setTransform(-24.2112,-26.5245);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(51,255,255,0.498)").s().p("AmxXNIhsgOQgwgHhHgRQg9gPg8gaQgygVhKgtQgvgdgVgRIgZAMQg6AchGAZQhQAdgkAJQhBARg1AEQg7AFg7gGQg1gFg9gWQg0gUgzgdQgwgcgrgmQgsgnghgrQghgtgZgzQgNgYgPgvQgRg1gGg2QgHg8AEguQAEg/ANgkQAWg+AIgdQATg3AHgaIAWhQQAKgjAcgsQAYgmAhggQAighAkgTQAtgXAhgHIAXgFQAAgEgEgKQgOgpgEgsQgEglALg2QAJgrAUgwQATgwAeglQAjgtAjgZQAygiAlgQQAmgQAygHQAPgCATABQgEgMgFgIQgagpgKgvQgLg0AAgvQAAgyANg0QAOg4AVgqQAVguAjgsQAggqAogkQAjgeA0gdQAsgaAygSQAtgRA3gJQAxgJA0gBQA0gBAxAJQAmAGA7ARQAqAMAzAVQArATAsAdIApAfIAfgGQA8gJAoACQAQABAiAFIAAgSQgBgyAJg2QALg2ARgvQAVg1AagqQAegxAgglQAkgsAmggQArglArgZQA0gdAtgSQA1gUAzgJQA6gKAzAAQA0AAA5AJQAtAJA7AUQAyATAwAcQAyAfAmAiQAoAjAhAsQAjAvAVAsQAIAOADAKIA2gkQAogXA5gVQA1gUAzgIQA1gKA5AAQA0AAA5AKQAzAJA3AUQAyASAxAcQAvAbArAkQAqAjAkArQAjAqAcAwQAaAvAUA0QATA2AJA0QAKA5gBA0QAAAygJA7QgIAzgRA1QgJAcgQAkIAKAYQAUAyALA2QAMA9ABAwQABA4gJA2QgHAugTA7QgSAygbAxQgbAwgiApQgVAZgZAaQgBA0gGAtQgHAxgRA3QgRA1gYAtQgcA1gdAmQgiAsgmAkQgpAmgsAcQguAdgxAUQg3AXgvAKQgXAFggAEQgDAUgJAcQgQAzgZAwQgaAyggApQghAqgqAmQgoAkgwAdQgpAag4AWQgzAUg2AKQg6ALg0AAQg8AAgygJQg6gLgwgQQgxgRg0gbQgrgXgzgmQgWgRgjgkQgTgSgPgTQgPAagMAQQgbAngpArQgmApgsAdQgsAdg0AWQgyAVg1ANQgsAKhAAAIgGAAQgtAAg6gGg");
	this.shape_150.setTransform(-22.0321,-24.8233);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(51,255,255,0.498)").s().p("Am4XNIhtgPQgxgHhGgRQg5gOhAgbQgvgVhNguQgvgdgVgRIgZAMQg7AchFAYQhWAeggAIQhBARg0AEQg7AFg8gHQg3gGg6gWQgxgRg2ggQgsgZgvgpQgrglgigtQgigugYgyQgPgfgNgoQgQg0gGg3QgHg8ADguQAFg/AMglQAXhCAIgZQASg3AIgaIAXhRQAKgjAdgrQAYgmAhggQAiggAlgTQAygZAcgFIAXgFQAAgDgDgLQgOgpgFgsQgDgpAKgyQAIgoAVgzQATgxAeglQAmguAigXQA1gjAigPQAngQAygHQAPgCAUABQgFgMgFgIQgZgogJgxQgLg1ABguQABg0ANgyQANg1AWgtQAWguAigrQAhgrAogjQAegbA5ggQAugaAwgSQAugQA2gKQAzgIAzgBQAwAAA1AIQAqAHA3ARQArAMAyAWQAqASAtAeQALAHAeAYIAegHQA/gIAmACQAZACAaAEIgBgSQgBgxAKg3QAJgzATgyQAWg3AZgpQAegxAhglQAlgrAmggQArgkAsgaQAygcAvgSQA2gUAygJQA8gKAxAAQA3ABA2AKQAyAJA3AUQAyASAvAdQAwAeAoAjQApAlAhAqQAiAuAWAtIAMAYIA1gkQAqgXA4gVQA2gTAzgIQA2gJA3AAQA4ABA2AJQAwAJA5AVQA0ATAvAbQAvAbArAkQApAkAkArQAmAtAZAtQAbAvATA0QASAyAKA4QAJA7AAAyQAAAygJA7QgIAwgSA4QgNAmgNAaIAKAYQAVA1AKA0QAMA6AAAzQABA5gJA0QgHAvgTA6QgSA0gbAvQgcAxghAoQgYAcgXAXQgBA0gGAuQgHAvgSA4QgQA0gZAvQgbAygfAoQgiAtgnAjQgrAngrAbQgqAcg1AVQg1AWgxAKQgYAGgfAEQgDARgKAeQgQA1gZAvQgaAwghAqQgiArgpAlQgpAkgvAdQgvAcgzAUQgzAUg2AKQg7ALgzgBQg9AAgygJQg3gKgzgRQg0gSgxgbQgrgXgzgmQgagUggggQgOgPgUgXIgbAqQgeApgnApQgoApgrAcQgwAfgxAUQgtAUg6ANQgqAKhCAAIgGABQgtAAg6gHg");
	this.shape_151.setTransform(-19.8321,-23.0983);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(51,255,255,0.498)").s().p("AnAXMIhtgOQg1gIhCgRQg7gPg+gbQgzgWhJgtQgsgagZgUIgZAMQg+AdhDAXQhUAegiAIQhBAQg0AEQg9AFg6gHQg3gHg7gVQgxgTg1gfQgwgcgrgmQgugpgegpQghgugZgyQgPgfgNgpQgQg1gGg2QgHg5AEgxQAEhBANgjIAehbIAbhSIAYhRQALgjAdgrQAZgmAhgfQAiggAlgTQAxgYAdgGIAXgEQAAgDgDgLQgOgqgEgrQgEglAKg2QAJgpAVgzQATgwAeglQAlguAjgYQAzgiAmgPQAmgRAzgGQAPgCAUABIgJgUQgYgpgKgxQgKgzABgwQABgyANg0QAPg3AVgrQAWgtAjgsQAfgpAqglQAigdA1geQAvgaAwgRQAqgPA6gLQA0gIAxAAQAxgBA1AJQAjAGA+ARQAnAMA2AXQAqASAtAeIApAfIAfgFQA6gJArADQAQABAiAFIAAgTQgBgxAKg3QAKg0ATgxQAUg1AbgrQAdgwAigmQAlgrAnggQAsglAsgYQAvgcAygSQA1gTA0gJQA6gKAzABQA4ABA1AJQAvAJA5AVQAzATAvAcQAxAeAnAjQApAlAhAqQAiAtAXAvIALAYQAtgfAJgFQArgYA4gTQAygTA2gJQA5gIA1AAQAzAAA6ALQA2AKAzAUQA0ATAvAbQAuAbAsAlQAqAkAjArQAkAsAaAuQAZArAVA4QATAzAJA3QAJA6AAAzQAAA0gJA5QgJAygSA2QgKAfgPAhIAJAZQAUAxALA3QALA4AAA2QABA2gJA2QgIAxgTA5QgSA0gbAvQgbAugjArQgSAXgcAcQgBAwgHAyQgIAygSA2QgQAzgaAwQgbAygfAoQgjAtgnAiQgtAogpAaQgsAcgzAUQg1AWgyAKQglAHgSACQgEARgKAfQgQAzgaAwQgaAxghAqQghAqgrAlQgmAigyAfQguAcgzAUQg3AVgzAJQg2AKg4AAQg7AAg0gJQg3gKg0gSQg1gTgwgaQgxgbgtgiQgYgTgigiQgOgOgUgXIgcApQgcAogqAqQgmAnguAeQguAdgzAVQguAUg5ANQgtAKhAAAQgsAAhBgIg");
	this.shape_152.setTransform(-17.5862,-21.3512);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(51,255,255,0.498)").s().p("AnGXMIhtgPQgvgGhIgTQg8gPg9gbQg1gXhIgsQgxgegUgQIgZAMQg+AchEAYQhSAcgkAJQg/AQg3AEQg+AEg5gHQg5gHg4gWQgwgRg3ggQgugcgsgnQgtgogfgrQghgrgZg1QgQgggMgnQgQg1gGg2QgHg8AEguQAEhBANgjIAehbIAbhTIAZhRQALgkAegqQAagmAhgfQAkggAkgSQAtgXAhgHIAXgEIgEgOQgNgogFgtQgDgoAKgzQAJgnAUg1QAUgyAegkQAngvAjgWQAxgiAogQQAlgQA1gGQAPgCAUABQgDgLgGgKQgXgpgKgxQgJgzABgwQACg0ANgyQAOg0AWguQAWgsAjgtQAfgoArglQAjgdA0geQAugaAxgRQAwgRA0gIQA1gJAxAAQAzAAAzAJQAnAGA6ASQAqAMAzAXQAtAUAqAdIApAfIAfgGQA4gIAtADQAZABAaAFIAAgTQgCgxALg4QAKg1ATgwQAUg1AbgrQAegxAiglQAlgrAnggQArgjAugaQAwgbAygSQA4gUAxgHQA6gKAzABQA0AAA5ALQAyAKA2AUQAyASAwAeQAwAdAoAjQAqAmAgAqQAkAvAWAsIALAYIA3gjQAsgYA3gTQA1gTA0gIQA0gJA5ABQA5ABA1AKQAxAKA4AUQA4AWAqAaQAuAbAsAkQAoAjAlAsQAmAvAYAsQAbAwASAzQASAyAKA4QAJA7AAAyQgBA2gJA3QgHAugUA6QgMAjgOAeIAKAYQAUA1AKA0QALA3AAA2QAAA3gJA2QgHAwgUA5QgRAygcAxQgcAwgiApQgWAbgYAYQgCAzgHAwQgHAwgTA4QgSA3gZAsQgaAwghAqQgkAugmAhQgqAmgtAbQgsAcg0AVQg4AWguAJQgaAFgeAEQgEARgKAfQgSA1gZAuQgbAyghApQgjAsgoAjQgoAigxAeQgqAag4AWQgzAUg2AKQg5AKg2AAQg7AAg0gJQg6gLgxgRQg2gUgvgaQgwgZguglQgZgSgigiQgQgQgSgWIgdApQgeAqgpAoQgkAlgwAfQguAcgzAWQgxAUg3AMQgrAKhCAAQgsAAhBgIg");
	this.shape_153.setTransform(-15.4071,-19.6512);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(51,255,255,0.498)").s().p("AlgXTQgwAAg+gIIhtgPQg1gIhCgRQg8gQg9gaQg2gYhGgsQgugbgYgTIgZAMQg/AchDAYQhYAdgfAIQhBAPg1AEQg/AEg5gHQg2gHg7gWQgzgTgzgfQgugcgsgnQgrgnghgsQgggrgag1QgMgZgPguQgQgzgGg4QgHg8ADguQAFg/AMgmIAehbQAUg4AIgbIAahSQALggAfgtQAbgnAggeQAjgfAmgSQAygZAcgFIAXgEQAAgEgDgKQgOgpgEgsQgDgmAKg2QAIgoAVg0QAVgyAegkQAkgsAmgZQA1giAkgPQApgRAygGQAPgCAVABIgJgUQgXgpgJgyQgJg3ACgsQABgxAOg1QAQg5AVgpQAWgsAjgsQAhgqApgjQAggcA4gfQAvgbAwgQQAtgQA3gJQAwgIA2AAQA0AAAyAJQAmAGA7ASQAuAOAvAVQArATAsAfIApAfQARgEAOgCQA6gHAsACQAQABAjAFIAAgTQgBgyAKg2QAKg3AUgvQATgyAdgvQAdgvAjgnQAkgpApghQAuglArgYQAvgZA0gTQA1gTA0gIQA9gJAxABQA2ABA2ALQAzAKA2AUQAyATAvAdQAvAcApAlQAsAoAfAnQAjAuAXAuIALAYQApgbAPgIQAtgZA2gSQA3gTAygHQA2gIA4AAQA1ABA4ALQAvAJA6AVQAyAUAwAcQAyAeAnAiQAoAiAlAtQAiApAcAxQAcAzARAxQASAyAJA4QAKA6gBAzQAAA2gKA3QgIAvgTA5QgMAjgOAeIAKAYQASAxALA4QALA6AAA0QAAA3gJA1QgJAzgTA3QgSAzgcAvQgbAwgiAqQgXAbgYAYQgCA2gHAtQgIAxgTA3QgSA1gZAuQgcAxggApQgiArgpAkQgqAlgtAcQgvAdgxATQg4AWgwAJQgbAGgcADIgPAwQgRA0gaAvQgbAwgiAqQgkAugoAhQgnAjgxAeQgyAdgxASQg3AVgzAJQg8ALgygBQg7AAg1gJQg7gMgwgRQgygSgzgbQgxgbgtgkQgcgVgfggQgSgSgRgTIgdApQggAqgpAnQgoAogtAcQgvAdgyAUQgwATg5AMQgoAJg5AAIgLAAg");
	this.shape_154.setTransform(-13.2071,-17.9557);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(51,255,255,0.498)").s().p("AloXTQgvAAg+gIIhtgQQgxgHhHgSQg+gRg7gaQg1gYhIgsQgsgagZgUQgKAFgPAGQhCAehCAWQhRAcgmAJQhCAPg0AEQhAAEg4gIQg2gHg7gWQgwgTg2ggQgtgcgtgnQgtgqgegpQgggsgag0QgPgigMgmQgQg1gGg2QgGg+ADgsQAEhBAMgjIAfhcIAchTIAbhSQAMgjAfgrQAbgmAhgdQAigfAmgTQAygXAdgFIAXgFQAAgDgDgLQgOgqgEgrQgEgmALg1QAIgpAVg0QAVgzAegjQAnguAkgXQAzghAngQQApgRAzgGQAPgCAUABQgDgLgFgJQgWgpgIgyQgJg2ACguQACgzAOgyQAPg3AWgrQAVgqAlgvQAggoAqgkQAjgeA1gdQAugaAxgRQAwgQA1gJQAugHA4AAQA0AAAyAJQAkAGA9ASQAuAPAvAVQAqASAtAgIAqAgQAPgEAQgCQA/gIAnADQAZACAZAEIAAgTQAAg0AKg1QAMg4ASguQAUgzAdgtQAdgwAjgnQAlgpAqghQAqgiAvgaQA0gbAvgQQA1gTA1gIQA7gIAyABQA3ABA2ALQAzALA1AUQA1AUAtAcQAvAcApAlQApAlAiAqQAiAtAYAvIAMAYQAogaAQgJQAtgZA2gSQA1gRA0gIQA0gIA6ABQA5ABA0ALQA0AKA1AVQA1AUAtAcQAuAbArAlQAqAkAjArQAjAsAaAvQAaAuATA1QATA0AIA2QAKA6gBA0QAAA2gKA2QgIAygTA3QgNAjgOAeIAKAYQATAyAKA3QAKA9AAAxQAAA0gKA4QgIA1gUA1QgQAvgdA0QgfA0gfAlQgcAggTATQgCAxgIAzQgJAzgSA1QgTA3gZAsQgaAvgiArQgjArgpAjQgqAlguAcQgwAdgxATQgzAUg0ALQghAGgYACQgFAVgJAbQgTA2gaAuQgbAwghAqQglAsgoAjQgpAjgwAdQgvAcgzATQg1AUg2AKQg4AKg3AAQg9gBgzgJQg6gMgxgRQgxgRg0gdQgsgYgzgmQgZgUgigiQgSgSgQgTIgeApQggAogqApQglAlgwAeQgtAbg1AVQgxAUg4ALQgnAJg5AAIgNAAg");
	this.shape_155.setTransform(-10.9738,-16.2467);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(51,255,255,0.498)").s().p("AlvXTQgtAAhBgJIhtgPQg7gKg8gQQg6gQg/gbQg0gXhKgtQgygggTgPIgaAMQg+AchGAXQhMAagrAKQhDAQg0ADQg+AEg5gIQg4gHg5gXQg0gUgygfQgtgbgtgpQgsgogfgrQghgsgYg0QgOgdgNgqQgRg1gGg2QgGg+ADgsQAFhBAMgkIAehcIAdhUQALglARgtQALgfAgguQAcgmAhgdQAlgfAkgSQAygXAdgGIAYgEQAAgDgEgLQgNgqgFgrQgEglAMg3QAHglAWg3QAUgzAfgkQAnguAlgXQA0ghAngQQAqgQAygGQAQgCAUABQgCgJgGgMQgWgqgHgxQgJg0ACgwQADgyAPgzQAPg3AWgrQAYgtAigrQAhgpApgkQAjgcA1geQAugZAygSQAtgPA4gJQAvgIA3AAQAxAAA1AKQAsAIA2ARQAnAMA2AYQAtAUAqAeIApAgIAfgGQBAgHAnADQAYABAbAFIAAgTQgBgyALg4QAKg0AUgyQAVg0AcgtQAggxAhglQAjgmAsgkQAsgjAugYQAygbAygQQA1gSA1gIQA3gIA2ABQA5ACA0ALQAwAJA5AWQAxASAwAeQAwAeAoAjQAqAmAhAqQAkAuAXAtIAMAYQAggVAYgNQArgXA5gTQA2gSA0gHQA1gIA4ABQA1ACA5ALQAwAKA4AVQA1AUAtAcQAyAfAnAiQApAkAjArQAkAtAZAuQAaAuATA2QATA0AIA2QAJA6AAAzQgBAygKA7QgJAzgTA2QgOAmgNAaIAKAZQASAwAKA5QAKA8AAAyQAAA2gKA2QgJA1gTA0QgSAzgcAwQgcAxgiApQgYAcgXAXQgDA4gHAsQgJAygTA2QgSA0gbAvQgcAxghApQgjArgpAjQgrAlgtAbQgtAbg1AVQg2AVgyAJQgdAGgbADQgEAPgLAhQgSA0gbAvQgdAyghAoQgiArgrAkQgmAhgzAfQgwAcgyATQg2AUg1AKQg9AKgyAAQhBgBgvgKQg8gLgvgSQgzgSgzgcQgxgbgugkQgbgVggggQgSgSgRgUIgfApQgfApgrAoQglAlgyAdQguAcg0AUQgzAUg2ALQgpAIg4AAIgMAAg");
	this.shape_156.setTransform(-8.7737,-14.5065);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(51,255,255,0.498)").s().p("Al2XTQgzgBg7gIIhtgQQg0gIhEgSQg/gSg6gaQgtgUhQgwQgxgegVgRIgaAMQg/AchFAXQhYAdggAHQhFAPgyADQg8AEg8gIQg1gIg8gXQgxgTg1ggQgtgdgsgnQgsgpgfgqQghgugYgzQgPgigMglQgPgygHg5QgGg6ADgwQAFhBAMgkIAehcIAdhUIAdhSQANgjAggqQAcgnAhgcQAlggAkgRQAzgXAcgFIAYgEIgEgOQgOgrgDgqQgEgnALg1QAIgnAWg2QAUg0AfgjQAmgtAngYQA2giAmgOQApgRAzgGQAQgCAVABQgDgJgGgMQgUgqgIgyQgIgzADgxQADgxAPg0QAQg2AWgrQAWgrAkguQAigpApgjQAjgdA1gdQAvgaAxgRQAugPA3gJQAvgHA3AAQAzABA0AJQAoAHA5ASQApANA1AYQApATAuAfIApAgIAfgFQA8gHArADQARABAiAFIAAgTQAAg0ALg2QALg2ATgxQAUgxAegvQAfgxAigmQAjgmAtgjQAsgiAvgZQAvgaA1gRQA2gSA0gHQA5gIA1ACQA6ACAzALQAwAKA4AVQA2AWArAbQA0AgAkAhQAqAmAhAqQAhApAbAyIAMAYQAlgYAUgKQAtgYA3gSQAzgQA3gIQA2gIA4ACQAxABA8AMQAyAKA2AWQAwASAyAeQAwAeAoAjQAnAhAlAvQAkAsAZAvQAbAvASA0QASA0AJA2QAJA8gBAyQgBA5gKA0QgHAugVA6QgLAfgQAiIAJAZQAUA1AIA0QAKA6AAA0QgBA3gKA1QgIAxgUA4QgUA2gaAtQgeAyghAoQgSAVgdAeQgCA0gIAwQgKAygTA3QgSAygbAxQgeAzggAmQglAtgoAiQgoAigwAeQgvAbgzAUQg8AWgtAIQgcAGgdADQgEATgLAdQgTA1gbAuQgeAzggAnQghAogsAmQgnAhgzAfQgwAdgyASQg4AVgzAJQg6AKg2gBQg9AAgzgKQg4gLgzgSQg2gUgwgbQgwgbgvgkQgXgSgkgkQgQgPgUgXIgfApQgfAmgsArQgnAlgxAcQgrAbg4AVQgzAUg2AKQgnAIg5AAIgNAAg");
	this.shape_157.setTransform(-6.5599,-12.7818);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(51,255,255,0.498)").s().p("Al9XTQg3gBg4gIIhtgRQg2gJhCgRQg8gRg9gbQgwgWhNgvQgxgegVgRIgaAMQg+AbhHAYQhSAbgmAIQhGAQgyACQg/AEg5gIQg2gIg6gXQgzgVgzgfQgugdgrgnQgrgogggsQgggrgZg1QgOgggNgnQgQg3gGg0QgGg/ADgsQAFg+AMgmIAehdIAdhUQAJgcAVg3QANgiAhgrQAdgmAhgcQAkgfAmgRQAxgXAegFIAYgEQAAgEgEgKQgOgrgDgrQgEgkALg4QAJgpAVg0QAUgzAfgkQApguAlgXQA4giAlgOQAqgQAzgGQATgCASABQgEgMgEgJQgUgqgHgyQgIg2ADgvQAEg0APgxQAQg2AWgrQAagwAhgoQAjgqAogiQAhgcA3geQAvgaAygQQAugQA2gIQAxgIA2ABQAzAAA0AKQAoAHA5ASQAvAQAvAWQArAUAsAfIApAgIAfgGQA9gHAqADQARABAiAFIABgTQAAgzALg3QALg3AUgwQAVg0AdgsQAegwAjgnQAiglAvgkQAsgiAwgZQAvgYA1gSQA4gRAygHQA7gIAzACQA3ACA2AMQAyAKA2AVQA0AVAuAcQAvAdApAlQAoAjAjAtQAhApAbAyIANAYQAegUAbgOQAvgYA1gRQA1gRA1gHQA3gIA3ACQA5ACA0AMQAzAKA2AWQAyATAvAdQAvAdApAlQAoAjAkAsQAlAvAYAsQAYAsAUA4QASAyAJA4QAJA8gBAxQgBA6gKA0QgIAwgVA5QgKAegRAiIAJAZQASAyAKA4QAJA7AAAyQgBAzgKA6QgJAygUA3QgSA0gcAvQgeAyghAnQgUAYgbAcQgDA2gIAuQgIAwgVA5QgTA0gbAvQgcAvgjAqQgjArgqAjQgrAlguAbQgvAbgzAUQg5AUgwAKQggAGgZACIgQAwQgTA0gcAvQgbAwgjAqQgjAqgrAkQgqAkgwAcQgtAbg2AUQg0AUg2AKQg6AKg2gBQg+AAgzgKQg9gNgvgRQgxgSg1gdQgxgcgugkQgbgVggggQgRgRgTgVIggApQggAmgsAqQgnAkgxAdQgwAcg0ATQgyATg3ALQgnAHg5AAIgNAAg");
	this.shape_158.setTransform(-4.3487,-11.0647);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-498,-456.3,701.1,614.9);


(lib.PuppetShape_13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("Ah8cXQg+gDg0gSQg2gRgzgjQgbgSgighQgtgvgWgqIgZgwQgNgcgFgXQgGgfAAgUQAAgbALgSQAVghAFgmIACgTQAAgJgFgCQgFgDgPgCIghgFIgugHQgfgFgTgKQgVgLgYgVQgPgNgZgbQgRgSgOgiQgIgVgMgpQgKgjgDgXQgFgeABgjIACgnQgEgCgCgHIgEgMQgdhCAFhRIAEghQgMADgPAAQhJgBg8gMQgbgFghgNIg5gcQg3gcgxgqQg0gugegsQgggwgXg3QgWg1gKg6QgIguABhCQABg8AIgwQAJgxARg2QAPgtAYg0QAYgwAdgsQAZgjAogwQAsgzAdgdQAfgeA7gqQAlgbAPgGQAFgNAOgaQANgcAageQAPgSAkgkIAIgIQgkglgXgqQghg/gMhCQgFgbAAgmIABhEQAAgeANglQAIgYAUgpQAehAAxgwQAmgmALgKQAcgZAagNQAagNAngMIBIgUIARgEQAKgCAEAEQAIgQAhg7QAphDAhgoQAtg3ApglQAsgnA3gjQAyggA6gYQA0gVA9gNQA0gMBAgCQA8gCA7AIQA2AHA8AVQA9AWAuAaQAsAZA0ApQArAkAmAvQAdAkAfA7IAwBcQAYAuASArQAJAWAMAlIAYALQAvAVArAnQAvApAZAtQAeAzAOA3QAOAzgCA7QgCA6gSAuQgXA6gdAYIgVATQgMAJgKgCQAEAFAFAEIANAHIAQANIASAOIAsAhQAZATAWAaIArA5IAYAfQAPATAIARQAXAyAJAmQAKAnAAA1QAAAmgCANQAgAWAKAIQAvAmAfAuQAgAtAXA4QAWA4AIA5QAIA6gDA6QgDAygRA+QgOA1gaA1QgaA2ghAqQgeAngvAqQglAhg7AbQg1AXg0AHQgqAHg6gJQgOgCgSgHIgUgHQAlAgAUAlQAcA5AMAwQAOA0ABA/QADA6gJA8QgJA9gdA6QgbA2g2AvQg1Awg9APQg+APg1gEQg/gDgsgLQgugLgpgcQgHgFgKgKQgKgLgFgDQACAHAFAKQATAqgDA0QgBAngfBEQgRAkgwA2QghAkgzAmQglAcg/AZQgqARhCAOQggAGgwABIgigBg");
	this.shape.setTransform(-360.638,-274.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-498,-456.3,701.1,614.9);


(lib.PuppetShape_12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("As8aTQg2gMhSguQgcgPgcgdQgQgSgegmQgSgYgTgjIgghAQgPgcgGgnQgEgZgDgwQgEhKAVhHIAKgdQgTgfgLgjQgDgKgHgQIgKgZQgEgDgEgHIgFgNQgohMgHhTIgIhMQgDgqACgbQAEgoAHgYQAKggARgSQAzg3AAgTQgBgPgFgJQgIgMgTgGQgWgIgMgJQgPgKgRgUQgggogShGQgKgoACgVQgLgHgKgLQgrgxgfg4QgNgYgJghQgFgSgHgpQgLg4AEhCQAEhBASgyQASgxAggzQAcgvApgmQAcgbA1gkQA1gkAcgPQAegQA3gWQAigPAzgOQAngMAugHIArgEIAqgDIBVgJQAngDA0AMQAXAFAXAJIAbgMQA1gVAnAJQAIABAOAGIAXAIIgFgMQgQgcgCgmQgCghAFgnQAHgyAJgWQAFgKASg2QAEgMgCgWQgEgaABgIIAIhMIAFguQAEgdAFgVQALgxAagzQAeg6AeglQAmgtAsgiQAmgfA5ggQArgYBDgUQA6gRA+gFQBSgHAqAEQAaADAkAIIBCAPQAYAFAFAFQAyghAagPQApgWAVgKQAhgQAbgHQBJgTAzgGQBAgHA7AEQA+AGA3AOQA1ANA5AZQA1AYAvAgQAwAgAqAoQApAnAjAwQAkAwAYAxQAZAzARA4QAQA4AGA4QAHA+gEA2QgFA+gMA0QgNA0gYA5QgQAogRAbIAFAcQAIAsgEBHQgFBBgQAwQgUA5gcAvQgbAugpApQgoApgtAYQgzAbgpAGIgdAEQgPACgJgDIgJAuIgJA4IgHA/QgDAlgKAkIgUBNIgJAsQgGAcgJAUQgcA9gYAmQgZAmg0AzIgXAYQgOAOgOAIQgJAsgHAVQgZBSggAyQgmA6g2AwQg3Azg9AcQg/AdhDANQgrAJgygBQADAjgDAgQgGBHgPA2QgQA+gaA2QghBEgdAoQgkAygwApQg1Atg1ATQg+AVgxADQg/AFgsgDQhEgEgigGQgcgGgZgIIgNAYQgkBLgyAtQgsAohkAPQgTADgVAAQgvAAg7gOg");
	this.shape.setTransform(-248.9171,-281.3126);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("ArDajQgygHhZglQgegNgdgaQgUgRgfghQgVgWgWghIgmg8QgRgagLgnQgFgVgJgyQgLhKAOhIQAGgcAKgbQgYgkgNgrIgJgZIgKgZQgEgDgDgHIgGgNQgmhIgIhVIgHhKQgDgpADgcQAFgnAHgXQAJgfATgRQA0gygBgUQAAgNgGgIQgIgKgTgEQgYgFgMgGQgQgHgSgSQgjgkgXhDQgNgmgBgVQgNgHgJgJQgxgwghgyQgPgXgLgfQgGgRgLgqQgQg5AAg+QgBhCAOgzQAOgvAdg5QAagxAlgoQAXgZA2grQAtgjAhgVQAZgQA5gcQAggPAzgTQAqgPArgIQAQgEAagDIAqgGQA3gKAegEQAlgFA2AJQATADAcAIIAagNQA1gYAoAHIAXAGIAXAHIgFgMQgPgdgBglQAAglAFghIAGgjQAEgTAGgOQAGgPAOguQAEgMgFgUQgGgaAAgGQAAgvADgcIACguQACgdADgVQAIgxAYg1QAeg/AaghQAigsAsgmQAogiA0gfQApgYBEgWQA7gSA7gFQBPgHArAFQAZADAkAIIBAAPQAWAFAGAGQAugiAZgQQBKgtArgOQBEgXA1gKQA9gKA8AAQA5ACA9ALQA2AKA5AWQA5AVAvAdQAyAeAsAlQArAlAlAvQAlAtAbAxQAbAyATA3QATA2AIA5QAIA6gCA5QgCA5gKA4QgJAzgUA5QgMAjgQAgIAHAaQANAuABBCQABBAgNAxQgPA5gZAxQgWAtgoAtQgoAtgoAXQgzAegnAGIgcAFQgPACgIgEIgDArQgDAjAAATIAAA+QAAAmgGAhIgOBNIgFArQgEAcgIAUQgWA7gWAoQgVAngvAzIgVAYQgNAOgNAIQgGAzgCANQgRBOgaA1QgdA3gxA2QgwA2g3AgQg2AhhCAUQg5AShIABIgfgBQADAcgBAbQgBBMgLA1QgNBBgXA3QgcBFgcAtQgjA3gvAqQg2Axg1ATQg9AXgyAEQg/AGgtgDQg+gCgogIQgfgHgXgHIgLAYQghBIgwAwQgpAohgAWQgeAHgmAAQgjAAgqgGg");
	this.shape_1.setTransform(-262.2748,-281.0007);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("ApJayQgzgEhZgcQgegKgggWQgVgOgigeQgWgUgageIgsg3QgUgYgOglQgJgXgMguQgUhGAHhKQAEgtAPgqIgHgLQgZglgNgsQgCgKgHgQQgGgPgDgJQgEgDgDgHIgFgNQgnhIgGhTIgGhJQgDgpAEgbQAFgnAHgWQAKgfATgPQAXgTAPgSQAQgTgBgJQAAgMgGgGQgIgIgTgBQgZgCgLgEQgRgFgTgPQgmgegehBQgQgmgCgTQgMgFgLgJQgzgogngyQgQgWgOgeQgHgRgPgoQgVg6gEg7QgGhDAKgyQAKgwAag7QAWgzAigrQAVgaAzgvQAygtAYgRQAdgUAzgdQAigTAvgUQAkgRAvgMQAPgEAbgFIApgJQBBgPAUgEQAngHA1AFQAXADAYAGQANgIANgHQAzgaApAEIAYAEIAYAGIgFgMQgOgdABglQABgfAGglIAFghQAEgTAGgNQAIgRALgoQADgMgHgSQgJgYAAgGQgEgoAAghIgBguQAAgdACgVQAGgxAUg1QAahAAZgjQAiguAogmQAkggA2gjQAqgcBBgUQA/gUA1gFIA8gFQAigBAaADQAZADAjAJIA/AQQAVAGAFAGQAdgaAmgaQBDguAsgSQA/gbA2gNQA8gOA7gDQA5gDA+AIQA1AHA8ATQA1AQA1AcQA0AcAuAiQAuAkAmAsQAoAtAcAuQAdAwAWA3QAVA2AKA4QAKA2AAA8QAAA0gGA7QgHAzgPA4QgKAmgNAcIAKAZQARArAGBCQAGA9gJAyQgKA4gWA0QgTAtgmAwQglAtgnAaQgyAggmAGIgbAFQgOABgJgEQAAAMADAZQACAhACASIAGA8QAEAigDAkIgHBKIgCAqQgBAbgGATQgRA7gSAmQgTAogoAxIgTAWQgLANgLAJQACAmgCAUQgDBHgTA2QgSA2gmA5QglA2guAnQgtAkg4AbQg0AZg6AJQgtAGg6AFQg0AEgfAAQALAiAEAhQAKBCgFA9QgEA/gRA8QgTBDgcAzQgeA3gwAuQgzAzg3AVQg9AYgzAFQg+AHgugCQg/gDgngIQgbgGgagJIgLAYQgdBIgsAwQgnAphcAdQgqANg+AAIgmgBg");
	this.shape_2.setTransform(-275.7341,-280.6591);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("ApfasQgfgHgigTQgUgLgmgaQgYgQgdgcIgygwQgWgWgSgjQgLgUgSgtQgchFgChIQgChAAWg8IgTgaQgXglgMgrQgDgKgGgQIgJgYQgEgDgDgHIgFgMQgmhIgFhRIgGhJQgDgpAEgaQAGgnAIgUQALgfAUgOQAWgRAQgRQAQgSAAgJQgBgWggADQgaABgKgBQgRgDgVgNQgogYgig/QgTgigEgUQgLgDgNgJQg2gjgrguQgSgUgQgdQgIgQgSgnQgZg3gKg9QgLhCAGgxQAGgzAVg7QARgxAggxQATgdAvgxQApgrAdgYQAbgXAyggQAggVAugYQAlgTAtgQIApgMIAqgLIBUgYQAkgJA4ACQAWABAaAFIAZgRQAwgdAsACIAYADIAZAEIgFgMQgNgeADglQACgeAGglIAGgfQADgSAHgMQAKgUAHghQACgLgIgRQgMgVgBgGQgIglgCgiIgFguQgCgdABgUQACgyASg2QAWhAAYglQAcgsAqgqQAgggA2gmQAmgbBEgXQA5gUA6gHIA7gFQAhgCAaAEQAYADAiAJIA9ARQAVAGAFAGQAfgdAegYQA/gwArgVQA/gfAygPQA6gSA8gHQA1gGBBAEQA4AFA6AOQA1ANA4AaQA2AZAuAgQAvAgApArQAsAsAeAsQAfAvAYA1QAWAyAOA7QAMA0ACA8QACAwgDA+QgDAygMA3QgGAggMAiIAMAYQAVAqALA+QAMA8gGAyQgGA4gSA2QgRAvgiAwQgjAvglAbQgwAiglAHIgbAFQgOABgJgFQABAIACAIIAFAQIAGAXIAFAZIANA4QAHAiABAiIAABKIABAoQABAagEATQgMA6gPAmQgQAqgjAuIgQAWQgJAMgKAJQAHAqABANQAFBDgLA1QgLA1geA7QgcA4goApQgmAngyAfQgvAdg1ANIhaATQgzAJgUACQgKABgWgBQgTAAgJAIQgJAJgUAIIgmANIgEABQAXApAJAlQAQBBAAA5QAAA8gMA9QgMA7gfA5QgbA0gxAwQg0Ayg2AUQg6AWg2AGQhBAHgrgDQg8gCgogKQgXgFgcgKIgJAYQgaBHgoAwQgiAphYAjQg2AVhUACIgIAAQgyAAhRgRg");
	this.shape_3.setTransform(-288.2817,-280.2745);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("AntbDQgfgEgjgOQgXgJgmgVQgagNgfgXIg3gqQgYgTgWggQgOgTgXgpQgjg/gMhIQgMhHAUhJIAHgUQgXgegJgPQgWglgMgqQgFgTgLgeQgEgDgDgHIgFgMQglhIgFhPIgFhIQgDgoAFgaQAGgmAJgVQALgeAVgNQAXgOARgRQAQgRgBgIQAAgJgGgDQgHgEgTAEQgaAFgIAAQgSAAgWgKQgqgTgng8QgWgfgFgUQgKgCgPgIQg6gfgsgpQgUgSgTgbIgfg0QgcgzgQg9QgQhBACgyQACgwAPg/QAOg1AbgxQATgiApgyQAlguAcgbQAXgWAygnQAegYAtgbQAlgXArgRQAQgHAagIIApgOQA2gUAdgJQAkgLA5gCQAcAAAUADIAZgTQAugfAtgCQAJAAAQACIAZACIgFgMQgNgfAGglQAFgnAGgbIAFgeQAEgQAHgLQAHgMAEgMQACgIADgRQACgLgLgOQgOgTgCgFQgMgigFgjIgIgtQgFgdgBgUQgBgvAPg5QAShCAWglQAcgwAmgpQAhgiAygnQAmgdBCgYQA6gWA4gHIA6gGQAggCAZAEQAZADAiAJIA7ASQAUAFAFAHQAigjAXgUQA0guAvgbQA5ghA0gTQA3gVA8gLQA7gJA7AAQA2ABA9ALQA5ALA2AWQA3AVAxAeQAxAfArAoQAuAqAfAqQAiAsAaA2QAaAyAPA5QAOAwAFA/QAEAwAAA8QAAAzgIA0QgFAkgIAeIAOAWQAYAmARA9QAQA8gBAyQgDA6gOA0QgNAxggAxQgfAygkAcQguAkglAIIgbAGQgNACgJgGQABAHAEAGIAHAPQAEAHAEAOIAIAYIATA2QAJAbAFAnIAGBJIAFAoQACAYgCATQgHA3gNApQgMAmgeAyIgOAXQgJAMgJAJQALAmADAOQANBBgGA1QgFA0gXA9QgWA5gjAtQgiAqguAkQgrAigyASQgfAMg6AQQgqANgdAGQgLADgXABQgUACgKAIQgKAJgUAIQgJAEgdAKQgPAGgWACQAbAsALAsQAPA8ABA7QAAA/gMA5QgKA5ggA7QgbA0gyAvQgzAxg3AUQg5AWg2AFQg/AGgtgCQg6gEgqgKIgwgQIgIAXQgUBEglAzQgfAphTAqQgxAZhTAKQgUACgZAAQgoAAg1gGg");
	this.shape_4.setTransform(-299.9547,-279.852);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("Am6bMQgXgHgogPQgcgKghgTIg6giQgagQgagcQgPgQgdgmQgrg6gWhDQgVhFAJhKQAFgfAKggIgDgEQgggrgNgVQgVgkgKgrIgIgYQgGgQgCgIQgGgFgGgRQgjhGgFhOIgFhIQgCgnAFgaQAIgmAJgUQAMgdAWgMQAXgMARgQQARgPAAgIQgBgIgFgCQgHgCgSAGQgdAKgFAAQgRADgXgHQgrgOgtg5QgXgegHgTQgLAAgPgHQg8gagvgkQgVgRgVgZQgNgRgWggQgigygTg5QgWg/gDgzQgCg0ALg8QAJg3AXgyQAOggAng5QAjgzAYgbQAZgdArgnQAdgaAsgfQAhgXAtgXIAogSIApgRQAsgTAngPQAmgOA3gEQAbgDAWACIAXgUQAsgiAvgFQAJgBAQABIAZAAIgFgMQgMghAIgkQAKg0ADgNIAGgdQAEgPAIgKQAIgKAEgLQADgIABgPQABgLgMgLQgRgPgDgEQgRgegIgkIgMgsQgIgcgCgUQgFgwALg5QAPhGATgkQAYgvAlgsQAdgiAygrQAkgeBCgbQA6gXA3gIIA6gGQAggDAZADQAXADAiAJIA6ASQAUAGAEAHQAcghAYgYQAwguAugeQA2glAygWQA3gYA6gOQA3gNA+gDQA4gDA8AIQA1AHA8ATQA4ASAzAcQAwAaAvAnQAvAnAjAqQAjApAeA2QAbAwATA4QAPAwAIA+QAEAiAGBIQADAzgDAyQgCAegHAjIAQAUQAdAmAVA5QAVA6ACAyQADA4gMA3QgJAwgdA0QgbA0gjAeQguAogjAIIgaAHQgOACgIgFQACAGAEAFIAJANQAEAGAGAOIAKAWIAXA0QAMAdAHAjIALBHIAHAnQAEAYgCATQgCA0gKApQgJAngaAwQgRAggKAMQARAmADAKQAUA7ACA2QABAzgQA/QgNA5geAyQgaArgrAsQgmAmgvAZQgcAPg6AZQgyAVgXAIIgjAIQgVAFgLAJQgLAJgVAJIgnAPQgbAKgpADQAgAzALAvQAPA8AAA6QABA7gLA8QgLA7gfA4QgbAygyAxQgzAwg4AUQg5AVg2AFQg/AFgsgDQg2gDgsgNQgOgEgigNIgGAXQgQBDggAyQgbArhNAvQgtAbhQASQgdAHglACQgZACgrAAQgfAAgkgKg");
	this.shape_5.setTransform(-311.4937,-279.3909);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("AlFbfQgZgDgogLQgcgHgigOIg9gaQgcgMgdgZQgRgOghghQgygzgeg+QgehAgChKQgBgwAMgxIACgIIgVgdQgegqgMgWQgUgkgKgpIgHgZIgHgXQgEgDgDgHIgFgMQgjhFgEhNIgEhHQgBgnAFgZQAIgmAKgTQANgdAXgKQAYgLASgPQAQgOAAgHQgBgHgFgBQgGgBgRAIIggAPQgRAGgYgFQgrgJgyg2QgagcgHgSQgNAAgNgFQg8gTg0ghQgWgPgXgYQgNgOgagfQgkgtgag5Qgag9gHgzQgHgyAGg/QAEg0ASg2QAMgjAig7QAeg1AXgfQAYggAogpQAagcArgjQAjgdAogXIAogVIAogUQAzgaAfgNQAlgQA4gIQAZgEAZABIAXgWQAogkAxgJIAZgDIAagBIgGgNQgLgiAJglIAQhAIAHgcQAFgPAIgHQAKgJADgJQADgHABgOQAAgKgOgIQgTgLgDgDQgVgYgNgmIgRgrQgLgbgEgTQgJguAIg8QAKhIAQgkQAZg1AfgqQAYggA0gwQAiggBBgdQA7gaA0gIQAogHARgBQAggEAZADQAYADAhAJIA5ASIAOAFQAHADADAFQAfgoAQgSQApgsAvgkQA0goAwgYQAzgaA7gTQAzgQBBgHQA6gGA6AEQA2AEA8AQQA7AQAyAXQAwAXAzAmQAyAlAlAnQAkAoAiAzQAfAxAUA1QARAvAKA+IAPBnQAHAxABAxQAAAggDAgIASASQAiAkAZA1QAaA1AHA0QAHA6gHA2QgFAvgZA4QgZA2ggAhQgrAqgjALIgZAJQgOADgJgGQACAGAFAFIAKALIALASIAMAWIAbAxQANAaAKAkIAPBFIAIAlQAFAXAAATQAAA3gGAkQgHAlgVAwQgRAigGAJQAUAfAGAMQAbA2AHA1QAIAzgHA/QgHA7gXA0QgVAxgjAuQgfApgtAiQgiAZguAcQgrAageAOIglAPQgXAIgLAJQgTAOg4AWQgjAOgzADIgOAAIABACQAkA4AMAyQAOA6ABA8QAAA6gKA8QgLA6gfA5QgbAzgzAwQgyAvg5AUQg8AVgzADQhCAEgpgEQg1gEgsgOIgXgIIgXgKIgEAWQgLBCgdAyQgOAagcAZQgTATghAYQgpAfhNAYQgqAOhYAJIgTABQgWAAgYgEg");
	this.shape_6.setTransform(-322.807,-278.8574);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("AjRbuQgZgCgogFQgbgEgkgKIg/gTQgbgJgggUQgTgMgkgbQg2gqgng7Qgng6gMhHQgIgvAEgxIAFgzQgQgTgXgiQgcgrgLgVQgTgkgJgpIgGgYQgFgPgBgIQgEgDgDgGIgFgMQgjhGgDhLIgDhGQgBgmAGgZQAKgmAJgTQAPgcAXgJQAZgIASgPQARgNgBgGQgBgGgFAAQgGAAgQAKIgeATQgRAIgYgDQgsgEg1gyQgcgagIgRQgMABgOgEQg9gOg2geQgXgMgZgWQgPgNgbgcQgqgtgcg0Qgfg5gMgzQgLgyAAg/QAAg5AOgzQAIgjAdg/QAYg1AXgkQAVgjAlgsQAaggAngkQAighAngaQAPgKAYgOIAogXQAtgaAkgSQAkgSA4gMQAcgGAWAAIAWgXQAmgmAxgOQAKgCAQgCIAagEQgCgCgEgLQgMgjAMgmIAKgjQAFgUAEgKIAJgbQAFgOALgFQAMgGAEgHQADgGgBgNQAAgKgPgDQgVgEgFgDQgbgSgSgmIgWgqQgOgagGgTQgNgvADg7QAEhGAPgoQATg0AfguQAXgjAvgyQAgghBAggQA6gdA0gKQAngIASgCQAfgEAZACQAYADAhAIIA6ARIANAFQAIADACAFQAfgtAMgOQAggmAzgtQAvgpAwgcQAugbA9gYQA4gUA6gJQA3gKA9ABQA5ABA6AMQA6AMA1AWQA0AVAyAhQA0AiAnAmQAnAlAkAyQAhAvAXA0QASAqAPBBIAVBlQAJAvAFAwQACAaAAAkIATARQAmAgAeAyQAfA0ALAxQAMA3gBA6QgCAygUA3QgUA3gfAkQgnAugjAOIgZAKQgNAEgKgFQADAGAFAEIAKAJIANARIANAVQARAXAPAXQAPAYAMAjIAVBEIALAkQAGAWABATQAEA1gEAkQgEAngSAuQgMAggHAMQAXAcAHALQAfAxAPA1QANAwAABAQAAA6gQA3QgQA2gcAwQgaAtgoAoQgbAbgwAmQgmAfgiAUIgmAUQgYAMgMAKQgWARg5AXQglAOg0AGQgTABgWgCIAJAOQAhA1AOA0QAOA6AAA7QAAA9gKA5QgKA5gfA6QgbA0gzAvQgzAvg5ATQg6AUg1ADQhCACgpgEQg1gFgqgPQgQgGgdgOIgCAWQgGA9gaA1QgVArhAA3QgnAhhHAeQgpARhTARQgXAEgbAAIgPAAg");
	this.shape_7.setTransform(-334.0667,-278.3637);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,255,255,0.498)").s().p("AjGb3QgogBhXgSQgdgFghgQQgWgKgkgWQg8gkgsgyQgtgzgXhFQgPgtgDgwIgEhDIABgcIgIgJQgRgUgdgtQgagqgLgWQgRgkgIgoIgGgXIgFgXQgEgDgDgHIgEgLQgjhGgChJIgDhFQgBgnAHgYQAKglALgTQAPgcAZgHQAZgHASgNQARgMgCgGQgBgFgEABQgGACgQALIgdAWQgQAJgYAAQgsgBg4gvQgdgZgJgPQgNACgNgCQg/gLg2gYQgZgKgZgUQgQgMgegaQgtgogggyQgkg2gQgyQgPgzgFg8QgFg4AJg3QAGgmAWg/QASgyAWgrQAUgmAgguQAYgiAlgpQAdggApggQAPgMAXgPIAngaQA0giAcgQQAjgTA5gQQAhgIARgBIAVgZQAlgpAwgRIAagHIAagGQgDgDgDgLQgMgnAOgmIAMglQAGgVAFgKQAIgTAFgIQAIgOAOAAQAQABAEgEQAFgEgEgNQgCgJgPACQgWAEgGgCQgOgEgPgLQgRgNgNgTQgJgOgUgaQgSgYgIgTQgSgsgCg/QgEhGANgqQAQg4AaguQAVglAsg1QAdgjBAgkQA4ggA0gMQAngKARgDQAfgGAZACQAkADBPAWQAUAGAEAHIAog8QAfgpAwgtQApgqAwggQAwgfA4gZQAygWA+gOQA5gMA6gDQA4gCA8AJQA8AJA1ASQAyARA4AgQA2AfAoAjQAoAjAoAwQAjAsAaA0QAVAqASA/IAaBiQANAxAHAsQAFAaACAjIAVAOQAqAfAgAtQAkAxAQAxQARA3ADA4QACAygQA6QgPA5gcAmQgmAyggAPIgZANQgNAFgKgFQADAFAFAEIAMAIIAOAQIAPASIAjArQASAZAPAgQANAeANAjIAOAjQAIAWADATQAIAxgBAoQgBAjgOA0QgIAcgIAQQAaAaAIAKQAjAuAUAzQASAvAGA+QAGA7gJA4QgJA1gXA2QgTAugkAvQgbAlgpAoQgjAkgkAbIgmAZQgZAQgMAKQgdAWg3AWQgqARgzAGQgdADgngHQALANAIAOQAhA2AMAzQAOA5AAA7QABA/gKA3QgJA5gfA7QgbA0gzAvQgzAvg6ASQg8AUg0ABQg8ADgvgGQg0gGgqgQQgPgGgbgPIgCAVQgBA6gXA2QgRAqg7A6QgiAhhGAlQgnAUhOAXQglAKg8AAIgdAAg");
	this.shape_8.setTransform(-341.1982,-277.9159);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,255,255,0.498)").s().p("AjlcOQg+gJg0gZQg2gZgugrQgbgagZglQgng6gNgrQgMgngDgQQgHgfABgYQADhIAhgVQASgLAQgSIAUgbQAEgGAIgHQABgBAAgBQABAAAAgBQAAAAAAAAQgBAAgBAAIgTADQgRADgRgBIgxAAQgjAAgVgGQgXgHgcgVQgPgLgegbQgTgQgQgjQgKgVgQgsQgNglgFgWQgIghABgkIgBgqQgEgDgCgHIgEgNQgdhGAHhTQADgeAFgbIgGgFQgMADgQgCQhHgIg9gSQgbgJgegRQgRgKglgZQg0gjgrgwQgugygYgxQgXgwgRg+QgOg3gBg6QgBgpAKhFQALg9ANgpQAMgqAag2QAVgtAdgsQAdgsAhglQAYgbAwgrQAsgoAigZQAjgaA6gaQAjgQARgDIAUgfQAcgoA7gmIAbgPIAbgOQgDgCgBgGIAAgJQgBgaAIgbQAJgbAPgUQgKgHgLgJIgqgnQgWgVgOgVQgcgrgPhDQgQhHAGgyQAHg7AVg2QANghAqhFQAYgpA+gtQA1goA0gUIA4gUQAggJAZgBQAagCAiAFIA/AJQAVADAEAHQAWgmASgYQAegrAugxQAqgsAugiQAtghA4gdQA1gaA6gQQA3gPA7gGQA4gFA8AFQA9AGA2APQA1AOA4AcQA2AbAsAiQAsAhApAtQAoAsAbAwQAXAnAWA/IAhBgQAQAuALAtQAHAbAFAhIAVANQAtAcAkAqQAnAuAUAwQAVA1AIA5QAGAzgMA6QgKA6gaApQggA0ggASIgYAPQgNAGgKgEQAEAFAEADIAMAHIAQAOIAQARQAUATATAUQAWAZAQAdQALATAVArIASAiQAKAVAFATQANA2ACAjQACAkgKA1QgGAhgFANQAcAZAIAJQAoArAYAwQAXAxAMA7QALA5gDA6QgEA5gPA1QgOAxgdA0QgYAqgkAuQgiAqgiAgQgZAXg0AmQghAbg3AXQgtASg0AHQgnAFg1gLIgCgBQASATALAVQAfA1AMA0QANA2ABA9QABA9gJA5QgLA9geA4QgaAzg2AwQg1Avg7APQg9AQg0gCQhDgDgngIQgvgJgpgbQgHgEgLgKIgQgNIAGASQAQAwgFAyQgCAYgMAeQgHAVgRAhQgUAngyAyQggAgg6AnQgnAahCAUQgtAOhEAIQgPABgQAAQglAAgwgHg");
	this.shape_9.setTransform(-347.0483,-275.1409);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,255,255,0.498)").s().p("AiscUQg9gFg1gVQg6gXgtgkQgcgXgdgiQgrgzgSgsQgdhEgEgkQgCggACgVQAFgbAPgPQAYgZAOgoIAHgRQACgGgFgCIgTgBIgggCIgwgDQghgDgUgJQgWgJgagVQgOgLgcgcQgSgRgPgiQgJgVgNgqQgMgkgEgXQgGgfAAgkIAAgoQgGgFgDgRQgdhEAGhSQACgZADgWIgCgCQgMADgQgBQhEgEhBgQQgbgGgfgQQgSgJgmgWQg2gggugtQgwgvgcgwQgdgxgSg6QgTg4gFg5QgEgrAGhEQAFg6ALgvQAKgpAWg7QASguAbgvQAYgsAhgrQAUgbAvgzQAqguAhgdQAdgcA+goQAngaANgEIAVgmQAOgaAagdQAQgRAlgiIAYgUIgSgUQgzg8gVg+QgWhDgBhBQAAgcAFglIALhBQAEgdASgiQAMgYAYgkQAog7A0goQAogfAOgJQAegVAbgKQAbgJAngHIBHgLQAZgFAGAHQAKgUAhg0QAng7AmgrQAqgvAvgoQAtglA4ggQA0gdA6gUQAzgTA/gKQA2gJA/ABQA8ACA5ALQA0AKA9AZQA7AYAsAdQAuAeAtAqQApAmAjAxQAYAjAeBAIApBfQAWAwAOApQAIAXAJAlIAXAMQAuAZAoAoQArAsAWAuQAaA0ALA4QAKAwgGA+QgHA7gVArQgdA4geAUQgPAMgHAFQgNAHgKgCQAEAFAFADIAMAHIAQANIASAQQAWARATATQAXATAUAeQAPAWAXAmIAVAhQANAUAGASQASAyAGAnQAFAmgFA0QgCAfgFASQAaATAOANQArAoAcAwQAaArATA9QARA5ACA5QACA4gJA5QgIAygXA6QgUAwgfAxQgdAvgjAmQgZAbg0AtQgjAdg6AZQgyAVgzAHQgrAGg0gLQgMgCgPgFQAbAZAPAdQAdA1ANAzQAOA5AAA6QACA/gJA3QgJA9geA5QgbA1g2AvQg2Awg7APQg+APg0gDQhEgEgngJQgwgKgngbQgGgFgLgKIgQgOIAGASQASAsgDA0QgCAmggBFQgRAkgxA2QghAjg2AmQglAbhBAYQgvAQg/AKQgZAEgfAAQgcAAgfgDg");
	this.shape_10.setTransform(-353.816,-274.9098);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-488.8,-456.5,691.9,615.1);


(lib.PuppetShape_11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("A0bYlQgygIg8gUQgrgOg6glQg0gigkgoQgogtgagzQgRgggLgqQgRg6gCgyQgChGAIgkQAHgeAHgSQAJgZAPgOQAggeAPghIAKgYQAEgMgBgIQgDgQgXghQgbgpgIglQgJglAIg7QAFgmAmg1QAfgsAigaIAYgSQgBgDAAgNQgBgyAPgsQATg4AQgaQAQgZAHgJQAPgSAPgFQASgHAMgKQAOgLABgJQADgOgBgIQgBgOgJgNQgKgPgFgOQgEgOgBgXQgDgoATg1QALgdAJgNQgHgHgJgOQgggzgPg0QgMgogBhHQAAg2ANg4QANg7AWgsQAVgpAlguQAhgrAkgeQAegYAxgdQAzggAYgMQAbgOA0gVQAYgKA1gRQAlgMApgGIAngEIAmgDQA7gHATgBQAkgBAuAMQAUAFATALIAYgOQApgVAsACIAXADIAWAFIgBgQQgCgsAMgsQANguAYgqQAdgwAegfQAjgkAigbQANgLATgWQAVgaAJgIIBDg+QA3gzAYgUQArgkA0gcQA5gfA1gSQA2gTBCgJQA6gIBAgBQA5AABGALQA+AJBDAWQBAAVBBAcQBHAgA3AkQAOAJATALQAFgLAWgPIAmgYQAqgaAOgIQAfgRAZgGQBMgRAugBQBIgBAvAMQAzANA5AcQAyAZAwAlQAoAgAoAxQAnAvAVAuQAZA1ANA0QAQA7ACA0QADBDgJAtQgLA6gUAxQgXA3gcArQgdAogsArQgkAigyAhQgdAUgfAQIgHAbQgVBMgQAiQgbA8gfApQgjAvgtAnQgtAngxAaQg3AcgyAKQg+AMgpgHIgfgFQgRgEgJgGIgbAkQgUAdgHAQQgPAfgHATQgIAYgSAkQgZAugHAQIgNAmQgJAagKAQQgoA/gTAXQgdAkgzApIgYAUQgOALgNAHIgOA/QgWBOgfAzQgkA8gyAwQg3A2g5AdQhCAhg/AQQg5AOhKgEIAAAfQABBUgPBBQgQBIgdA3QggA9glAwQgoAygvAmIguAmQgbAWgVAOQg8AogqASQhEAegygBQhBAAgsgOQg7gRgogWQgqgXghguQgKgNgPgdIgIAOQgWAmgjAgQgcAZg2AhQglAWg8ARQgoALhCAIQgPACgTAAQgiAAgqgGg");
	this.shape.setTransform(-163.7916,-253.8857);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("A0BYyQgvgHg/gWQgrgQg6gnQgyghglgsQgmgugZg2QgOgfgKgsQgOg/ACgwQACgmACgQQAEgeAHgWQAJgeAKgRQANgXASgKQAhgTAVggIAMgRQAFgIgDgGQgDgGgfgdQgsgpgNgaQgQghgEhAQgDgmAghAQAag0AfgfIAWgWQgBgDAAgOQgCg1ARgwQAWg/APgXQARgaAIgKQAPgSARgFQATgHANgJQAPgKABgJQACgNgBgIQgCgNgLgNQgMgOgGgNQgGgOgDgWQgGgrAQg2QAIgfAJgOQgJgIgHgMQgfgxgSg3QgIgZgDgeQgCgTgBglQgBg0AMg8QAOg7AWgsQATgnAmgxQAfgqAngfQAZgVA2ghQA8gjAQgJQAUgKA7gYQAUgIA6gSQAigLAsgHIAngDIAmgDQA7gHATgBQAjgCAvAMQATAFAUAKQALgHANgGQAsgXApADQAJABAOADIAXAEIgCgQQgDgqALgsQALguAXgpQAbgxAcgeQAkgnAcgYQAMgLARgXQAUgbAHgIIA/hAQA2g4AUgTQAqgnAxgdQA3giAzgTQA2gVBAgMQA4gKBAgDQA0gCBJAJQBCAIA+ATQA9ASBDAcQBEAeA5AjIAgATQAGgKAVgPIAmgYIA4giQAfgQAZgGQBGgSAzgCQBIgCAvAKQA1AMA4AaQAzAYAxAjQAoAeArAvQApAxAXAqQAbAzAQA1QASA+AFAwQAGA+gGAxQgHA3gSA2QgVA8gaApQgaAsgqAsQgiAmgwAkQgaATggAUIgGAbQgQBGgRApQgZA9geAqQgiAxgrAnQguApgvAaQg1AfgxAKQg9ANgrgGIgegEQgRgDgIgGQgNAPgNAWQgUAggFANQgPAggGAUQgLAhgOAcIgfBAIgNAnQgIAZgKARQgpBBgSAXQgcAjg0ArIgYAUQgOAMgNAHQgLA0gDALQgYBQgfAxQgkA8gzAwQg3A1g7AcQhEAhg+APQgzALhGgDIAAAPQACBWgLA9QgOBGgcA6QgdA8gkAxQgkAxgvApIgtAnQgaAWgVAPQg7AqgoATQhEAfgxABQhAABgtgMQg7gQgogUQgpgUgkgrQgKgNgQgbIgHAPQgUApgiAjQgbAbg4AkQgkAWhAATQgrANhAAHQgPABgSAAQgjAAgtgHg");
	this.shape_1.setTransform(-170.6754,-255.4634);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("AznY+QgwgJg/gXQgrgQg6gqQg0glgigsQglgxgVg4QgOgjgHgrQgKhAAGgxIAJg2QAGgfAKgVQAOgeAMgPQARgWAVgFQAggHAggeIAOgLQAFgDgDgCIgQgHQgPgHgMgGIgmgWQgagPgNgQQgPgRgKgcQgHgSgJghQgKglAYhKQASg6AdgmIATgbQgBgDAAgPQgDg3ATg1IARgxQALgbALgRQARgbAJgKQAQgTARgFQAUgHAPgJQAPgKABgJQACgMgCgIQgCgNgNgMQgOgNgGgMQgIgNgFgXQgKgqANg6QAGggAJgPQgJgIgIgMQgggygTg3QgNgogChIQgCg1AMg7QANg+AWgrQASgmAngzQAigsAkgdQAYgTA4gjQA1ggAYgMQATgKA8gYQAdgLAygPQAkgLAqgGQANgCAagBIAmgDQA7gHAUgBQAhgCAxAMQARAFAWAKIAYgOQAsgWAqADQAJAAANADIAXAFIgCgQQgFgmALguQAKguAVgoQAZgxAZgeQAkgoAYgYQALgLAPgYQARgaAIgJIA5hDQAyg7ASgTQAngoAwggQA1gjAxgWQA2gYA9gOQA5gMA9gFQA5gEBEAGQA9AGBCASQBHATA3AXQA/AZA9AlIAfASQAGgKAWgPIAmgYIA4ghQAfgRAZgGQBFgRAzgDQBFgEAyAKQA1ALA6AYQAzAWAxAiQArAdArAtQAqAtAaAsQAeAzARAyQAVA7AHAyQAJA+gEAyQgDA3gQA3QgRA8gXAsQgZAvgmAuQghAogtAmQgeAagbASIgFAbQgMBEgRAsQgVA7gfAuQggAxgqApQgqApgwAcQgyAegzANQg9APgqgFIgegDQgQgDgJgGQgLAPgNAXQgSAfgGAQQgNAhgGATQgKAigOAdIgeBBIgMAnQgIAagKARQgkA8gXAdQgbAkg0ArIgYAVQgOAMgNAHQgKAugFASQgZBRgfAxQgjA4g1AzQg5A1g7AbQhBAghCAOQgwAKhAgDQAEBRgKBAQgMBHgZA4QgdA/ggAvQgiAxguArIgrAoQgZAXgUAPQg6ArgoAUQhBAggyACQhBAEgrgKQg8gPgogSQgpgSglgoQgLgMgRgaIgHARQgSAsgiAmQgbAeg6AlQgnAZg/ASQgrANhDAHIgaABQgmAAgygJg");
	this.shape_2.setTransform(-177.801,-257.1557);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("AyhY8QgvgEhIgdQgmgOhKgsQgogZg2g+Qgsgzgbg8Qgbg+gEhFQgCguAHgvIANhAQAJgkAOgbQAMgWAMgUQgEgLgEgNQgGgagDgyQgEgtACgYQABgmAMgkIALgsQgCgEAAgGIAAgMQgEhEAThBIASg8QAKghALgVQAQgfALgPQAQgXATgJQAXgMAPgMQARgNACgKQADgNgCgKQgDgNgNgMQgPgNgIgNQgIgNgHgXQgMgrAKg/QAFggAIgRQgJgIgIgMQghgygTg4QgNgmgDhLQgDg3AMg7QALg9AXgsQAUgqAlgxQAggqAmggQAcgXA0gfQAygfAcgOQAWgLA6gXQAegMAxgOQAkgLAqgGQAOgCAagBIAmgDIBPgIQAhgCAyAMQASAEAWAKIAYgOQAsgWAqADIAWAEIAXAEIgCgPQgGgmAJgtQAJgtATgnQAXgyAXgdQAggoAXgYQALgMANgYQAOgbAHgJIAzhFIA/hRQAlgqAtgiQA1gnAugXQA0gaA7gQQA3gPA9gHQA1gHBHAEQA9AEBBAPQBCAQA8AXQA6AWBAAkIAfASQAHgKAWgPIAlgYIA5ghQAfgQAZgHQBHgSAxgDQBEgFAzAJQAzAJA8AYQAyATA0AhQAsAdAsArQAsArAcArQAfAyAUAyQAXA6AKAyQAMA7gCA0QAAA5gNA2QgPBAgUArQgVAvgkAyQghAsgpAnQgdAcgaATIgDAcQgJBAgQAxQgVA9gcAtQgeAxgpArQgoApgwAfQgyAggxANQg9ARgpgEIgegCQgRgCgIgGQgJANgNAaQgRAggFAQQgNAhgGAVQgJAhgNAfIgdBCIgMAoQgIAagKASQgmA/gUAbQgbAjg0AuIgYAVQgOAMgOAHQgLA0gEAMQgZBRgfAxQgmA6g0AxQg7A2g6AaQhGAfg/ANQgtAJg5gDQAEBHgJA4QgJBDgYA8QgZA/gfAwQgjA2gpAoIgqApQgYAXgUAQQg1ArgrAWQhBAhgxAGQhBAHgsgIQg8gKgpgPQgtgRgqggQgGgFgdgdIgLARQgdAxgqAkQghAehJAdQgsAShKAIQgTACgaAAQghAAgsgEg");
	this.shape_3.setTransform(-186.3877,-260.8425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("AylY9QgvgIhJgmQglgThGg1QgngdgvhIQgng6gShBQgUhDAIhGQAFgxAQgsQARguAHgRQAKgVAKgRIgKgrQgKgwgDgYQgDgnAHgoQADgRADgeQgDgEAAgHIgBgMQgIhHAQhGIAQg/QAJgkAKgWQAPghAKgQQAQgZATgKQA3gfADgUQADgNgDgKQgDgNgOgLQgRgNgIgMQgJgNgJgXQgPgrAGhAQAEgkAGgQQgKgJgHgLQgigzgVg3QgIgZgFgfQgCgUgDgmQgDg4ALg7QAMg/AVgsQATgpAlgyQAggrAnghQAYgTA4gjQA1ggAZgNQAUgKA9gYQAdgMAzgOQAkgLArgGQAOgCAZgBIAngDQA9gHASgBQAkgDAwAMQASAEAXAKIAYgOQAtgWApADQAJABAOADIAWAFIgCgPQgHgmAHgrQAIgrARgoQAVgxAVgdQAlgwAOgRQAJgLALgZQAMgbAGgJIAuhHQArhCAOgSQAhgrArglQAygpAtgaQAxgbA6gUQA0gRA/gKQA2gJBEABQA9ACBAANQBHAOA2AUQA8AVA+AiQAUAKAKAHQAMgOA4giQAmgXASgKQAfgQAagHQBGgSAygEQBDgGA0AJQAzAIA9AWQA2AUAxAeQAvAcArApQAuAqAdAqQAgAsAYA1QAZA5AMAyQAOA6ABA1QACA8gJA0QgLA/gSAuQgTAwghA0QgcArgpAuQgZAagbAYIgDAcQgGA/gPAzQgSA8gbAvQgdA0gnAqQgmAqgvAgQgyAigwAPQg7ASgqgDIgegCQgQgBgJgGIgVApQgQAigEAOQgMAjgFAVQgIAigNAfIgcBEIgMAoQgHAbgKASQgjA9gWAeQgbAlg1AtIgXAVQgPANgNAIQgKAugGASQgZBPggAzQgmA7g2AwQg6A0g8AaQhDAfhCAMQgpAHg1gCQAEA9gGAyQgHBEgWA6QgYBAgcAvQghA2goAqQg1A5geAZQg2AugoAWQg9AhgyAIQhBAJgsgFQg7gHgsgNQgwgOgqgbQgJgGgfgZIgMASQgiA1gtAlQglAehOAaQgvAQhOACIgHAAQgxAAhHgNg");
	this.shape_4.setTransform(-193.6184,-263.5957);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("AwWZbQgxgBhRgSQgwgKhHgsQgjgWhFg7QgXgUgVgeQgOgVgVgmQgig8gNhGQgNhEAPhIQAKgwAVgrIAcg2IgFgMQgQgxgFgXQgJgoAEgqQABgSgBgfQgCgDgBgHIgCgNQgNhIANhKIAMhDQAIgkAJgYQAOgjAKgRQAPgaATgMQA3giADgUQADgNgEgKQgEgNgPgKQgRgMgKgMQgKgMgKgXQgSgsAChBQABgkAGgTQgJgIgJgMQgkgzgVg2QgJgZgFggQgDgTgDgnQgEg6AKg6QALg/AUgtQAUgqAkgyQAggsAnghQAdgYA0ggQA5giAVgLQARgIBBgbQAegLAygPQAmgLAqgFQAOgCAagBIAngDIBQgJQAkgCAwAMQARAEAYAKIAZgOQAvgWAnAEIAXAEIAXAFIgDgOQgJglAGgqQAHgrAPgnQASgwATgdIAuhBQAJgMAIgYQAKgcAFgJIAohJIAXgqQAPgbAMgSQAegsApgoQAyguAogZQAtgdA8gYQAvgSBAgOQAzgLBGgCQA/AAA+AKQBKAMAyARQA1ARBFAiQAWAKAIAGQAQgRA1geQAmgXASgKQAggQAZgHQBKgTAvgEQBDgGA0AIQA2AIA7AUQA0ASA0AdQAuAbAuAnQAuApAgApQAiAuAaAyQAcA6ANAvQAQA5AEA2QAFA5gHA3QgIBBgPAuQgRAzgdA0QgbAvgmAuQgaAggXAWIgBAcQgDA7gOA3QgRA/gYAuQgbAzgmAtQglArguAhQgvAjgxARQg6AUgqgCIgeAAQgQgCgJgFQgGAMgMAeQgPAjgEAPQgLAjgEAVQgHAggNAjQgTAtgIAZIgMApQgHAbgKASQggA7gZAiQgbAlg0AuIgYAWQgOAMgNAIQgNA1gEAMQgZBPghA0QgmA5g3AxQg7A0g8AZQhFAehCALQgmAHgugDQADAzgDArQgGBEgTA5QgXA/gaAyQgfA3glAqQgyA6gfAbQgyAtgqAYQg9AkgxAIQg8ALgxgDQg8gGgrgKQgygNgqgYQgQgIgagUIgMAUQgiA5guAmQgWATgiAPQgYALgoAMQgvAPhJAAIgJAAg");
	this.shape_5.setTransform(-200.5347,-266.4553);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("AvsZpQgygChSgXQgdgIghgSQgVgMgjgZQgYgQgbgaIgxgwQgVgVgTghQgMgVgSgqQgdg/gHhIQgHhJAXhEQAQguAagqIAEgFQgSgpgGgSQgNgogBgrQAAgKgCgQIgCgZQgDgDgBgIIgCgMQgThIAKhPIAJhFQAFgnAIgYQAMgkAKgTQAOgbATgNQA4gmACgUQACgOgEgJQgFgNgQgJQgSgMgKgKQgMgNgLgWQgVgrgChDQgBglAGgTQgKgIgJgMQglgzgXg3QgKgYgGggQgDgSgEgpQgFg6AJg7QAKhBAUgtQATgrAkgzQAfgrAogjQAbgWA2giQA2ghAZgNQAUgKA/gZQAZgKA3gRQAngLArgFQAOgCAagBIAngDQA8gHAVgBQAkgDAxAMQAQAEAaAKIAYgNQAxgXAnAFQAJABANADIAXAGIgEgOQgKgjAFgqQAEgnAOgpQARg0AQgYIAphBQAIgNAGgXQAHgdAEgIIAihKIAUgsQANgbALgTQAZgsAogsQArguAqgeQAwgiA1gYQAxgWA7gQQAzgOBEgEQA9gEA/AIQBNAKAwAOQAwAOBLAhQAXAKAGAFQATgSAzgdQAlgWAUgLQAggQAagHQBJgTAvgEQBCgGA2AHQA0AGA9ATQA1ARA1AdQAtAYAxAoQAwAnAgAoQAjArAdAzQAdA2AQAyQASA4AHA2QAHA4gEA5QgEA8gOA0QgOA0gaA2QgXAwgkAxQgcAlgTAUIAAAcQAAA1gNA+QgNA9gYAxQgaA2gkArQghAqguAlQgwAlguARQg5AWgqAAIgdAAQgQgBgJgEQgGALgLAfQgOAlgDAPQgKAkgEAWQgIAlgLAfIgaBHIgLAqQgHAbgKASQghA9gXAhQgZAkg2AxIgYAWQgPANgNAIQgNA3gEAKQgZBQgjAzQgoA9g2AtQg8A0g8AZQhGAdhCAKQgiAFgpgCQADAqgCAmQgDBEgSA4QgTA9gaA0QgcA1gkAuQguA5ggAeQgvAsgsAbQg7AjgyALQg/AMgtgCQg/gEgogJQgzgLgqgUQgTgIgagRIgMAVQgjA9guAnQgmAhhXAZQgpALg5AAIgjgBg");
	this.shape_6.setTransform(-210.0832,-269.3546);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("AvAZ3QgygFhUgcQgdgKgggVQgUgNgigcQgXgTgagdIgtgzQgUgXgQgjQgKgVgPgtQgXhFAAhIQAAhIAfhEQAJgWAOgWQgMgWgFgMQgRgogEgsQgCgTgHggQgDgDgCgIIgDgMQgYhKAGhRIAFhIQADgnAHgZQAKglAKgVQANgdATgOQA4gqACgUQADgdgdgPQgTgLgLgKQgNgLgNgWQgZgsgGhDQgEglAFgWQgLgIgIgLQgog3gYg0QgKgYgGghQgEgSgEgpQgHg6AIg9QAKhBATguQAUgtAjgyQAgguAnghQAbgXA3giQAyggAegPQAXgLA8gYQAZgKA4gRQAngLArgFQA2gEAagDIBRgIQAkgDAzALQAVAFAVAJIAagNQAxgWAnAFQAJABAOAEIAWAHIgEgOQgLghADgpQAEgoALgmQAOgxAPgaIAlhBQAHgMAEgYQAEgcADgIIAbhLIARgtQALgcAJgUQAWgtAlguQAogyAngfQAqgjA3gcQAvgZA6gTQAxgRBFgIQBBgGA6AFQBLAFAyANQAtALBOAgQAYAJAFAEQAWgTAxgbQAmgWAUgLQAggQAbgGQBGgTAzgFQA+gHA6AGQA3AGA7ASQA3ARA0AaQAxAZAvAlQAuAkAlAqQAkAoAfA0QAgA2ARAwQAUA4AJA1QAKA3gCA6QgBBAgLAxQgNA5gWA1QgVAxggAzQgYAlgUAXIABAcQACAzgLBAQgMA+gWAwQgXAzgkAwQghArgtAkQguAmguASQg5AWgoAAIgdAAQgQgBgJgFQgFAOgIAbIgIAYIgGAaQgIAlgDAUQgGAlgKAdIgXBGIgKAoQgGAbgJARQgbA2gZAlQgZAkgxArIgWAUQgOAMgMAHQgFApgEASQgRBLgZAwQgZAxguA2QgpAxg0AhQgtAeg9AWQg6AVg2ACIhiAEQgxACgbgCIgIgBQATA4ACAwQACBHgLA5QgLA9gYA7QgaA+ggAwQgkA0gvApQg5Awg0AQQg+ATgyABQhCACgqgFQg1gHgvgRQgUgHgegPIgMAWQgmBAguAoQgoAihbAXQgiAIgsAAQgbAAgggDg");
	this.shape_7.setTransform(-219.9605,-272.2743);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,255,255,0.498)").s().p("AuSaCQgzgHhVgiQgdgLgfgYQgUgPgggfQgVgUgZggIgpg4QgTgZgMglQgIgWgMguQgRhGAHhKQAHhFAjg/IgIgOQgVgngHgtIgHgaQgFgQgBgJQgEgEgCgHIgEgNQgdhKABhTIABhJQACgoAFgbQAJgmAIgVQAMgeATgQQA2gvACgTQACgegegOQgVgJgLgKQgNgLgOgWQgbgpgLhGQgFgrADgQQgKgGgJgNQgogygbg4QgLgYgHggQgEgQgGgsQgIg6AHg+QAHhAAUgwQASgtAjg0QAggvAmgiQAdgZA1giQAyggAegQQAagNA6gXQAZgKA5gRQAmgMAtgFIApgEIApgDIBSgJQAlgCAzALQARAEAaAKIAagNQAygVAnAGQAJABAOAFIAWAHIgEgOQgNgfACgoQAAgiAKgrQANg0AMgWIAghAQAGgNACgXQABgcACgHIAWhNIANgtQAIgdAIgUQATgwAhguQAng3AigfQAqgmAygfQAsgZA7gZQAvgTBEgLQA/gKA7ACQBOACAvAJQAaAGAjALIBAAVQAWAHAGAGQAVgRA0geQApgXATgJQAggQAbgHQBNgUAsgEQBBgHA4AFQA8AGA3ARQA3APA1AaQAzAZAvAjQAxAkAkAnQAlAnAhAzQAhA1AUAwQAWA2AMA2QAMA6ABA3QABA+gJA1QgJA6gTA1QgTAzgdA1QgVAlgUAZIADAcQAEAzgJBAQgJBAgUAwQgWA1ghAwQggAtgqAlQgtAogtATQg1AZgrACIgdACQgQAAgJgEQgFAOgHAeQgLAogCANIgKA8QgEAigLAkQgPAvgIAaIgJArQgGAbgKATQghBBgUAfQgbAngyAvIgXAWQgOANgOAIQgJAvgFARQgYBQgeAyQgjA4g0AyQg0Azg7AdQg6AehDARQg8APhIgDQADAsgFAnQgIBGgRA5QgTA+geA2QglBFgcAlQgoA2gsAlQg4Aug1AQQg9AUgzABQg+ADgtgFQg4gHgsgNQgZgIgagLIgMAXQgnBGguAoQgqAkhdAVQgdAGglAAQgjAAgogFg");
	this.shape_8.setTransform(-229.6026,-275.2705);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,255,255,0.498)").s().p("AtoaLQg4gLhQgmQgdgOgdgaQgTgRgegiQgUgWgVgiIgmg8QgRgagKgnQgFgVgIgyQgKhIAOhJQAIgpASgmQgWgmgLgrIgIgaQgHgQgCgJQgEgEgCgHIgFgNQgihJgEhVIgDhLQgBgpAFgbQAGgnAIgXQAKgfATgRQA1gzAAgTQABgOgFgKQgIgMgSgHQgWgJgLgJQgOgLgQgVQgegqgNhEQgHgrACgRQgLgHgKgMQgrg0gbg2QgMgYgIggQgEgSgHgqQgJg4AFhAQAGhDATgvQASguAig1QAfgvAmgjQAagYA3glQA2gjAbgPQAhgQA0gVQAfgMA0gQQAogLAtgHQA3gDAbgDIBUgJQAngDAzAMQATAEAZAKIAagMQA1gVAmAHQAJABAOAFIAWAIIgEgNQgPgeAAgnQgBgkAIgmQAKgyAKgXIAbhBQAFgMAAgXQgBgaACgIIAOhNIAJguQAGgdAHgUQAOgwAfgyQAjg5AfghQAngpAwghQAuggA1gYQAvgWBCgQQBAgNA5gCQBRgCAsAHQAjAGBbAaQAYAHAFAEQAmgaAkgUQAogWAVgKQAhgQAbgHQBMgUAugFQBAgHA6AFQA8AGA5APQA2APA2AZQAxAXAyAiQAwAiAoAoQAlAlAkA0QAjAyAVAxQAWAwAQA7QAPA4ADA5QAEA9gHA2QgHA8gQA1QgPA1gbA2QgVAqgQAWIAEAdQAHAxgIBCQgGA/gTAxQgUA3gfAwQgcArgrApQgsApgrAVQg2AagpAFIgdADQgPAAgJgDIgLAtIgLA2IgIA+QgEAlgKAiIgWBMIgJArQgGAcgKATQgfBBgWAhQgYAmg0AyIgXAXQgOAOgOAIQgKAvgGASQgZBRggAyQgkA4g2AyQg5A1g7AaQg+AehDAOQgvAKg2gCQADArgFAoQgKBIgPA1QgTA/gcA0QgkBDgcAmQgpA1gsAkQg3Atg1ARQg8ATgyADQg+AEgsgEQhDgHgigJQgYgGgcgKIgNAXQgkBIgxArQgrAnhhASQgYAEgcAAQgpAAgzgJg");
	this.shape_9.setTransform(-239.2496,-278.2551);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-386.8,-446.6,589.9,605.2);


(lib.PuppetShape_10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("Aq3ZMQhCgHgugTQg+gagjgUQhDglgWgQIgsghIgTATQg5A7g2AeQgyAbhcgBQg2AAhNgYQg5gSg+glQgvgdgxgzQglgoglg3Qgdgrgag9QgYg6gKg3QgLg2ACg/QABgjAJgsQAMg4AVgzQAahAAXggQAUgbALgMQATgUATgHQAmgQAbgeIASgUQAIgLABgJQACgRgKgoQgNg2ACgiQADgmAWg6QAOgkAvg2QAlgoAsggIAbgSQAAgHAEgPQAQhCAWg3QAehFATghQAlg9AYgWQAugqANgfQAKgWAagxQAWgpAfgaQAZgVA0gIQAPgDAQABIgIgVQgUgtAAg0QAAgpAQg4QANgwAagtQAcgwAgghQAegfAtggQAqgdApgRQAfgLA2gNQA7gPAUgEIAngFIAngEQARgCA4gDQAdgBApACIAgAEQAVADAMAAIBFgEQAbgBAyAIQAcAFALAFIAbgRQApgaA8gGIA6AAQAAgHAFgLQAUgsAigpIA8hIIAbggQAQgSAOgKQAWgQAiglQAJgKAMgXQANgZAHgJQAigrAVgWIAhgkQAUgWAQgOQAnghAzgZQA5gdAugLQA4gMA2gCQAxgBA9AIQAyAIA9AXQA6AYAuAdQBDAqAdAbQARAQAYAdIApAyQAQASgBAEQAMAGAfAJIAvAOQAxATASAIQAjAQAXARQBKA4AbAZQAuAsAkAyQAjAwAbA2QAaAyASA7QARA4AIA4QAIA2gBA9QgBA0gNA+QgNA7gUAyQgTAugiA2QgbAsgpAsQgZAag7AoQgyAigYAUQgYAUgoAeIgWAOQgMAIgIAHIACAWIACAxQABAcgEAWQgLA3gWAvQgZAwgkArQggAmguAhQguAgguASQgyASgtADQgmADgPgDQgOAlgKAVIghBBQgUAlgTAeQgUAigeAiQgVAYgnAnIgiAfQgUASgSAMQgsAegtAVQgpAUg5AOQgpALgQACQgRAggMATQgmA6gtApQguAqg6AhQg8Aig8AQQhEASg7AEQg5AEhIgLQgWgEgUgFQgIASgIARQgjBGgjAvQgrA5guAqIgxAtQgcAYgYARQg4Ang9AWQg8AVgzAAIgVgBg");
	this.shape.setTransform(-127.4035,-214.1625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("AqiZHQhBgGgwgSQhAgagigTQhBglgWgRIgrgjIgRATQg1A4g1AfQgwAbhYAEQg0ADhOgUQg7gOg8ggQgygagyguQgmgjgqg2Qghgrgcg5Qgbg5gNg1QgNg3gBg9QAAglAGgrQAKg4ATg0QAbhDATgdQATgcAMgNQASgUATgHQAngQAZgeIARgUQAIgKAAgJQACgPgMgoQgPg0ABgjQABgkAVg9QAMgkAvg2QAignAsggIAbgSIADgUQAOg/AXg3QAbhBAUghQAig6AZgVQAsglAMgeIAOgiIANgjQANglAdggQAXgZAwgQQAOgFASgDIgJgVQgVgvgCgyQgBgrAOg5QALgvAagwQAagxAfgjQAagdAwglQAqgfAogRQAagLA6gRQA+gRARgEQAQgDA/gJQATgDA2gDQAggDAnACIAiADQAUADAMAAIBGgEQAegBAvAJQAaAFANAGIAagRQAqgZA5gFQAJgBAuABQAAgGAEgLQARgrAggrQAhgsAZgeIAbghQAQgSAOgLQAUgQAlgmQAKgKANgXQANgYAIgJQAdglAbgcIAhgkQAUgWARgOQAngiAygZQA6geAugLQA4gOA2gDQAzgCA9AGQA0AGA9AVQA8AWAwAbQBEAmAhAcQATAQAaAaIAuAwQARAQABAGQALAEAgAFQAjAGANAEQAyAOAUAGQAkANAYAPQBNAwAeAZQAwAnAnAwQAmAuAeA0QAcAxAVA4QAVA6AJA0QAKA1ABA9QABA0gLA+QgLA7gSAyQgSAwgfA1QgaAsgpAtQgcAeg1AmQg9AsgOALQgeAZglAaQgeARgOALIABAXIAAAyQgBAbgFAXQgLA0gZAwQgbAzgjAnQgiAlgwAhQgtAfgwAQQgzAQgsACQgoABgMgEIgYA3IgfA+QgNAagWAoQgVAkgZAfQgVAagjAlIgeAhQgTAUgRANQgwAlglAUQgmAWg7AUIgbAJQgQAGgNACQgWArgGAKQgkA9gsArQgtAsg7AkQg7Akg9ASQhCATg/AFQg7AGhIgMIgegFQgKAfgOAbQghBEglAxQgpA4gwAqIgwAsQgdAZgXAQQg5Aog7AWQg9AXgyAAIgSgBg");
	this.shape_1.setTransform(-131.9239,-219.3845);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("AqOZCQhDgFgugRQg/gYgjgUQg2gegggZIgpgkIgQASQgwA2g0AfQgtAbhVAJQgyAFhNgOQg8gLg8gaQgygVg1gsQgogfgugzQgignggg4Qgfg1gQg2QgRg6gDg5QgCgkAFgsQAGg3ASg2QAWhBAUggQASgcALgNQASgVATgHQAlgRAagdIAQgUQAHgKABgJQABgQgOgmQgSg1AAghQAAgmATg7QAMglAtg1QAigoArgfIAagSQAAgFADgOQAMg9AWg1QAbhBASgdQARgcAKgNQAPgWAQgMQAsghAJgdIALggQAHgTADgPQAGgkAZgiQATgcAtgZQAQgIAQgFIgLgVQgWgxgDgyQgDgrAMg6QALgyAXgvQAag2AcghQAageAvgnQAoggApgUQAZgMA7gTQBDgVAMgCIBPgPQAQgDA6gGQAmgDAiABIAiADQAVACAMAAIBHgEQAcgBAxAKQAZAFANAGIAagQQApgZA4gEIAbAAIAbACQAAgEADgNQAOgrAegsQAbgpAbgiIAbgjQAQgSAOgMQAOgLAtgsQAKgKAOgXQAOgZAIgIIA5hBIAigjQAUgWARgOQAmgiA0gbQA7geAtgMQAzgOA8gFQA0gEA9AFQA0AFA/ATQA9ATAzAaQBFAjAmAcQAUAPAcAZIAyAuQASARACAEQAKACAiADQAiACAPADIBGAMQAmAJAZAMQBPApAgAXQA3AmAnAqQAoArAgAyQAfAvAYA3QAVAxAPA7QANA4ADA4QADA4gJA5QgIA7gRAzQgRA0gcAyQgYArgoAvQgbAfg0AnQg1AngXASQgeAZgnAaIgYAPIgXAOIAAAXIgCAyQgCAdgGAWQgOA3gZAtQgaAugoAqQgiAkgxAgQgvAfgwANQg0AQgsgBQgnAAgNgFIgWA0IgeA7IggBAQgUAmgWAdIgzBAIgcAjQgRAVgQANQgsAnglAZQgkAYg6AYIgbALQgQAHgOADQgQAmgKASQgkBCgqArQguAwg4AkQg7Amg+AUQhDAVg/AGQg9AHhIgMIgRgDQgNAvgUAoQgjBFgjAvQgpA2gwArIgwArQgcAYgYARQg4Aog5AVQg/AYg0AAIgNAAg");
	this.shape_2.setTransform(-136.4894,-224.602);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("Ap5Y7QhCgDgvgRQg6gUgogWQg0gcghgdIgnglIgPASQgsAzgyAfQgrAchQAMQgxAIhLgIQg5gHg+gVQgzgSg4gmQgtgfgtgsQglgjgkg2QgigzgUg1QgUg4gGg5QgEgkACgsQAEg6APgzQAUhDATggQAPgcAMgPQARgUASgJQAlgRAZgeIAQgUQAHgKAAgIQAAgOgPgnQgUg0gBghQgCgkARg9QALgmAsg0QAigpApgdIAagSIADgTQAKg7AUgzQAbhBARgbQARgbAJgLQAPgVAPgLQAsgdAIgcIAJgeQAEgRABgQQAAghAVgmQAQgfAogfQARgNAOgGQgEgGgHgPQgYgxgFgzQgFgrALg8QAJgzAWgwQAXg1AdglQAbgiArgmQAngiApgVQAZgNA6gVQBAgXAPgEIBPgRQASgEA5gHQAfgFAqAAIAjACQAWACAMAAIBIgEQAcgBAxAKQAYAGAOAHIAagRQApgYA1gCIAaAAIAaACQAAgGADgLQALgqAbgtQAfgxAWgcIAbgjQAOgTAPgNIA8g4QALgLAOgWQAQgZAIgJIA7hAIAhgjQAWgWAQgOQAogjAzgaQA8gfAsgNQA3gQA6gFQAzgFA/AEQA3AEA/ARQA/ASA0AYQBFAgAqAbQAXAPAcAYIA1ArQATAQAEAFQA/gCAeABIBHAFQAmAEAZALQBQAgAkAVQA8AjAnAkQArApAkAvQAiAsAaA2QAZAwARA5QAQA4AFA3QAGA0gGA9QgGA+gOAwQgQA2gZAxQgaAxgjArQgaAggzApIhMA8QgiAbgnAYIgwAdIgBAXIgFAzQgDAegHAWQgQA2gbAsQgeAwgnAnQgjAjgyAgQgxAdgvANQg2AOgrgCIgcgCQgPgBgJgEIgWAwIgcA5IgdA+QgRAjgVAfIgwBBIgYAkQgQAWgOAOQgvAugfAXQghAag7AdIgaAOQgQAHgOAEQgQArgIAPQgjBFgoAsQgqAxg7AoQg7Apg+AVQhDAWhAAIQg7AHhLgLIgFAAQgQBCgaAyQgiBEgkAwQgpA2gwApIgwArQgcAYgXAPQg4Aog3AWQhAAZgyAAIgMgBg");
	this.shape_3.setTransform(-141.0606,-229.8247);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("AplY1QhDgCgtgQQg8gVgngUQgugZglgiQgIgGgdggIgOARQgoAxgvAfQgnAbhNASQguAKhKgDQg4gCg+gRQgzgNg6ghQgsgZgzgpQgngggog0QgmgwgXgzQgYg3gKg5QgGgjAAgsQABg9AMgxQARhDARgiQAPgcALgPQAQgVASgKQAjgSAZgfIAPgUQAGgKAAgIQAAgNgRgnQgWgzgDggQgDglAPg8QAKgmArg1QAigpAogdIAZgRQgBgEADgPQAJg6ATgwQAYg+ASgbQARgcAIgKQAPgUAPgJQAsgbAGgZIAHgcQADgQgCgQQgEgfAPgoQANgiAkgkQAQgRANgIIgMgVQgZgwgIg1QgGgpAJg/QAIg0AUgyQAVg1AcgoQAagjAqgoQAlgiApgYQAegRA1gVQA2gWAZgIIBPgUQAQgEA8gKQAjgGAngBIAjABQAXACANgBIBIgEQAfgBAvALQAVAFARAIIAZgQQApgYAzgBIAzADIACgRQAJgqAYgtQAaguAXghQAlgyAVgTIA9g6QALgKAPgXQARgZAIgIIA8g/QA4g5ARgPQArglAxgZQA6gfAvgOQA2gRA8gGQA3gFA9ADQA4ADA/APQA/AQA3AXQBIAfArAaQAiAUBMA6QAVARAEAEQBAgKAbgBQA3gEAQAAQAmAAAaAIQBUAYAkARQA+AdAqAhQAuAmAmAsQAlAqAeAzQAcAuAUA4QAUA2AIA3QAIA1gDA7QgCA7gNA0QgOA5gWAvQgYAzghArQgeAogrAlIhNA+QggAZgsAcIgzAdIgCAYIgIAzQgFAegHAWQgTA2gcAtQgfAugoAnQglAkgyAdQgxAdgxAMQg4ANgpgEIgdgDQgPgCgIgEIgWAtQgSAkgIATIgbA8QgNAggVAiIgrBCIgWAkQgOAYgOAPQgpAvggAbQgiAeg4AgIgaAPQgQAJgNAEQgPAqgIASQgiBJgmAsQgpAyg6AqQg7Asg9AWQhCAYhBAKQg7AIhLgKIgCALQgRBNgcA6QgjBDgjAwQgoA0gxAqIgvAqQgcAYgXAPQg6ApgzAVQhCAag0AAIgHAAg");
	this.shape_4.setTransform(-145.6609,-235.0214);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("A1IYmQgugHhBgdQgsgUg3gmQgpgcgtgxQgpgtgagxQgdg1gNg4QgIghgDgtQgDg7AKg0QANhGAOggQAOgeAKgOQAOgXASgKQAigTAYggIAOgVQAGgKgBgIQAAgOgTglQgXgxgFghQgEglANg8QAJgnAqg0QAjgsAlgaIAZgSIABgSQAHg4ASguQAXg8ARgbQARgaAIgLQAPgTAPgIQAsgYAFgYIAFgZQACgQgEgPQgJgeAKgoQAIglAggqQARgVAKgJQgGgHgHgOQgagwgKg1QgHgpAGhCQAGg0ATg0QAUg4AagnQAZgmApgoQAlgmAngYQAagQA5gZQA5gaAVgIIBPgXQAXgGA1gLQAfgHAsgCIAlAAQAXABANgBIBJgFQAggBAvALQAWAFAQAJIAZgPQApgYAxAAIAxAEIACgQQAFgqAWgtQAUgqAbgoQAggwAagXIA/g7QAMgKAQgXQASgZAIgIIA9g/QA2g2AVgSQApgjAzgbQA4geAygQQA2gSA+gHQA3gGA+ACQA1ACBEAOQBAAOA5AXQBEAaAzAcQAuAaBFAxIAbAVQANgFAagHQAagGAWgEQA6gKALgBQAmgFAaAFQBTAOAnAOQBDAYAqAcQAvAfAsAqQAnAmAjAyQAdApAaA5QAZA5AKAyQALAzABA7QABA7gKA1QgLA7gTAvQgWAzgfAuQgbAogrApQgPAPgXATIgnAgQgjAcgrAbIg2AdIgEAYIgJA0QgHAegIAWQgVA4gdArQghAwgoAlQgpAlgwAbQgyAcgxALQg4ANgrgGIgcgDQgPgDgJgFIgVAqQgWAsgDAIIgYA6QgLAfgUAiIgnBBIgTAmQgMAYgMAPQgrA1gbAaQgfAeg4AjIgZAQQgPAJgOAGQgNAsgGAPQgdBIgjAvQgmA0g2AsQg2Aug7AaQg6AbhDAPQg8AMhGgDIgtgEQgKBQgaA+QgfBHghAyQglA3gwAuIguAsQgbAagWARQg8AugvAVQhGAig2AAQhDAAgvgPQg8gSgpgVQgtgXgnglQgGgGgdghIgNAQQgkAugtAfQglAahIAWQgtANhGACIgQAAQgtABg3gKg");
	this.shape_5.setTransform(-150.2062,-240.1193);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("A0XYqQgygFg+gVQgxgSg2gfQgqgXgxguQgugqgdguQgfgygSg4QgLgkgFgpQgIg5AGg1QAJhGANgiQAMgeAJgQQANgXARgLQAjgXATggIAOgVQAFgLgBgIQgBgPgUgjQgZgvgFgiQgGgkALg8QAIgnAog0QAggrAmgbIAZgSIAAgRQAFg2ARguQAVg5ASgcQAQgZAIgKQAPgTAPgHQASgJANgLQAOgNACgLQAEgRAAgHQABgPgGgPQgGgPgCgPQgBgPADgWQAFgoAbgtQAOgXALgLQgFgGgJgPQgbgvgNg3QgJgpAFhDQACgxASg5QAQg3AagrQAYgmAogrQAjgoAngaQAdgUA0gZIBOglQAWgJA5gTQAYgHA1gNQAigIAqgDQANgCAYABIAlgBIBMgGQAigBAtAMQASAEAUAKIAZgOQArgWAtAAIAYACIAYADIAAgQQADgrATgtQASguAZglQAegvAcgcQAugrATgRQANgKARgXQATgZAIgIIBAg/QA9g7AOgMQAqgkAzgbQA6gfAygQQA4gSA9gIQA4gHA/ACQA4AABDANQA9AMA+AXQBFAZA2AcQA0AaBDAtIAeAVQAUgOA9gSIBCgUQAkgIAaABQBRAEAsAKQBGARArAXQAyAaAvAnQAsAkAlAsQAhAnAeA3QAcA2AOAxQAPA2AFA4QAEA/gGAwQgHA9gQAvQgUA2gbAuQgcAvgmAnQgbAcgxAqQgiAdgvAdIg4AeIgFAZIgLA1QgIAfgJAWQgWA5geArQggAvgrAmQgpAlgyAbQg1AdgvAKQg7ANgqgGIgdgEQgQgDgIgFQgGAIgRAgIgNAYIgMAZQgQAkgHAVQgMAigRAeIglBCIgRAmQgLAZgMAQQgqA6gZAZQggAig2AlIgZASQgPAKgOAHQgOAugGAPQgfBNgjAvQgoA2g5AtQg7Awg9AYQhGAbhAAKQgvAHg6gGQgEBIgPA2QgTBHgfA3QgiA8gmAuQgpAwgwAmIgvAlQgcAVgWAOQg8AlgtASQhGAagygCQhCgDgrgOQg6gSgogXQgqgXglgoQgLgMgTgcIgLAQQgeArgqAgQgkAchAAYQgqARhEAHQgbADgdAAQgcAAgdgCg");
	this.shape_6.setTransform(-154.7619,-244.7942);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("A1TYcQgxgMg6gaQgrgTg1gqQgygngggqQgkgwgVg1QgNgdgKgvQgLg9ACgxQAEhGAKgjQAJgeAIgRQAMgYAQgMQAggZATgiIAMgWQAFgMgBgIQgCgOgWgjQgagrgHglQgGglAJg7QAHgoAmgzQAfgsAlgaIAYgSIAAgQQACg0AQgtQAVg7AQgZIAYgiQAOgSAPgHQATgIAMgKQAOgLACgLQADgPAAgIQgBgOgHgOQgJgQgDgOQgDgOABgWQABgnAXgzQAOgdAJgJQgIgJgHgMQgfgzgNg0QgKgqAChDQABg1APg4QAQg7AXgpQAYgpAlgsQAigpAmgcQAagTA2geQA4gfAUgJQAWgKA5gVQAUgIA6gQQAkgKApgFIAmgCIAmgCIBMgHQAggBAxAMQATAFATAKIAYgNQAsgXArACIAXADIAYAEIgBgRQABgqAPgtQARgyAXgkQAegxAdgcQAhgiAhgcQANgKASgXQAVgZAIgIIBCg+QA2g0AXgUQArgkAzgbQA3geA2gSQA1gSBBgJQA3gHBBAAQA5AABEAMQA+AKBBAWQBEAYA6AbQA9AdA+ApIAfAUQALgNBAgdQAvgVAOgGQAigNAagCQBPgGAtAFQBHAIAuASQAyATA1AjQAxAgAoAoQAlAkAiA0QAhAzASAwQAVA5AHAzQAKA/gCAwQgDA9gNAxQgPA4gZAwQgaAzghAoQgcAhgvArQgiAegyAgQgXAOgjASIgGAaIgNA2QgJAfgKAXQgYA4gfAsQgiAwgsAmQgrAmgxAbQg1AcgxAKQg+AMgogGIgfgFQgPgDgJgGIgZAlQgWAmgDAJQgQAigHAUQgKAegRAgIgiBBIgPAmQgKAZgLARQgqA9gVAXQgdAig2ApIgZATQgPALgNAGIgRA/QgaBMgiAyQgmA5g1AvQg5Ayg8AbQhGAfg+ALQgyAKhCgFIAAAFQgCBVgPA/QgSBIgeA3QghA8gmAvQgnAwgxAnIgvAmQgbAVgWAOQg8AngrARQhDAcg0gBQhBgBgtgOQg6gTgogVQgpgXgkgrQgKgNgRgcIgKAPQgZAognAgQgeAZg+AfQgoAUg/ALQgvAJg/ABIgDAAQgvAAg+gPg");
	this.shape_7.setTransform(-159.2474,-249.3742);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333.1,-407.3,536.2,565.9);


(lib.PuppetShape_9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("A1CXCQgcgGgpgQQhBgYg9gtQgyglgug5Qgngvgig7Qggg2gWg4QgWg3gPg8QgOg7gFg7QgDgfABgzQACgwAKhGQAIg+APgyQAWhHARgdQAYgnAVg4QALgfAYg3IAjhPQAHgQARgPIAhgXQAjgZAhgPQApgTAdgEIAjgFQAVgBANAEIAUAFQABgDgIgJQgcgngPghQgQgjgBgxQgCgqAJgzQAIgtARguQASgzAWgiQAegtAegfQAfgdAtgXQASgJAQgGIgLgVQgagsgMgzQgLgzACg2QAAgyAPg4QAPg5AWgrQAYgtAkgsQAjgrApghQAggaA4gdQAugZAugRQAqgPA3gKQArgIA3gDQA1gBAtAHQApAFA2APQAxANArASQAqASApAgIATAQIASASIAcgBQAjADALACQAZAFAPANQAHAFAKALIAQASQABgFgDgJQgPgkAHgqQAJgyAggiQAkgoAsgYQAlgVAvgOQAPgEAZgQQAcgRAKgEIBSgkIAvgVIA0gWQA2gUA9gIQBCgIA6ADQA8ADBBASQAvAMBHAfQAvAUBAAxQA2ApAsA0QA4BFAZArQAjA9AVBGQAIAaABALQANgHAWgBIAmgBQA/gFA2AFQA+AEA4AUQA/AVAvAeQAtAdAvAxQApAqAfA1QAZAoAVBGQATA+ACA0QADA3gMA9QgMBBgUAvQgYA5giAqQgiAsguAkQggAYg9AYIgrAQQgXAJgNAHQgdAPghAMIgTAFQgKACgGAFQAEANABAHIAJAtQAFAcgCAVQgGA3gWAtQgXAwgmAqQghAkgyAdQgwAcgvAKQg0AKgogHIgagFQgNgDgHgFQgKAcgIASQgKAUgWAjQgZAsgOAQQgWAagkAaQglAbgfAPQgoATgpAHQgoAHgogHQgmgIgegQQgHgEgHgIIgKgLIAAATQABAMgBAGQgGAkgjArQgbAggyAaQgwAZgxAGQgwAGgwgHQgjgFgygZQgSgJgSgOIgdgYQgagVgKgZQgDgIAFgSQAEgMgIAFQgUAPgPAHQgLAFgQgBIgdgCQgYgDgfgOQgNgHgQgSQgIgJgFgJQAHAXgCAdQgDBHgaAsQgiA7glAhQgrAogsAYQgvAagvAGQgTACgVAJIgjAQQgOAGgQANIgbAUQgJAHgRARQgSASgLAIQgsAlgdASQgoAYgzASQgwAQhAAMQgsAIgZACIgSAdQg+BigzAtQg3AwhrACIgDAAQgjAAgngKg");
	this.shape.setTransform(-27.9075,-199.6536);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("A1FXQQgcgHgpgPQhCgYg7grQg0gmgtg3Qgmgtgjg8Qggg0gWg5QgWg4gPg7QgOg4gEg9QgDgkACguQACgvALhFQALhBAPgtQAWhFATgcQAcgpASgxIARgpIAQgnIANgnIANgmQAFgRAQgPIAdgbQAggdAegTQAngYAegIQAxgNAVACIAUABQABgDgCgEIgEgHQgWgrgKgkQgLglAEgxQACgvANgrQAKgkAUg0QARgtAXglQAdgsAegdQAdgcAugWQAPgIASgGIgLgVQgagtgKgzQgKgxADg3QACg0APg0QARg5AXgqQAYgsAmgrQAhgnArghQAigaA2gbQA1gaAngNQArgOA0gJQAtgIAzgCQAugCAxAHQAhAEA7APQAxANApAPQApAQApAeIAlAfIAcgCQAeAAAPACQAZAEARAKIASAPIARAPQABgGgDgIQgKgnAKgoQAMgwAfgiQAmgpAngXQArgZAngNQAPgGAYgPQAbgTAJgEIBRgnQBKgjAYgKQAxgUA/gLQBCgKA4ACQA6ACBBAQQA1ANBAAbQAwATBAAuQA0AmAuA0QA6BDAYAoQAjA5AYBHQAJAZABAKQANgGAXAAIAnABQBHgBAxAHQA+AKA3AWQA/AZAsAgQApAcAvA1QAnAtAeA1QAYArASBEQARBAACAyQACA3gNA8QgMA9gVAyQgYA3giAsQgjAtgtAiQghAag7AXQhAAbgOAHQgbAPgjAOIgTAFQgLADgGAFIAFAUIAJAtQAFAcgCAVQgGA2gWAuQgYAwglAqQggAjgzAfQgyAdgtAJQgzALgqgHIgagFQgNgDgHgFQgJAcgIASQgIATgWAlQgaAtgLAOQgXAdggAZQgkAcgfARQgkAVgqAKQgpAKgogEQgogEgfgNQgHgDgWgQQgBAagDAMQgIAmgjApQgcAggxAbQguAagxAIQgvAIgxgEQgogEgvgVQgSgIgUgLIgfgTQgcgQgRgRIgMgUQgHgKgIACQgKADgNAAIgagBQgTAAgkgPQgagLgSgVQgGgFgGgMIADASQAHBIgWAvQgdA/ghAlQgpAtgpAcQgtAfgwAMQgTAGgWALIglATQgPAIgRANIgeAXQgJAGgWASQgUAQgOAJQgvAgghAPQgqAUgzAMQg8ANgyAFQgqAFgXAAQgJAMgJAQQg6Bdg1AtQg2AvhqACIgDAAQgjAAgmgJg");
	this.shape_1.setTransform(-37.6643,-201.1904);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("A1JXcQgcgGgogOQhCgYg7gqQgygjgvg4Qgngugig6QgfgzgXg5QgWg3gPg7QgOg7gDg6QgDgjADgvQADgrAMhIQAMhBAQgrIATgyQAMgaANgRQAegoARgtIARgmQAKgXAEgOQAQg3AEgUQADgQANgRIAagfQAcgfAdgYQAlgbAegMQAsgSAbgDQANgCAIAAQAAgFgEgKQgPgtgGgoQgFgnAGgyQAIgyAPgmIAjhVQARgqAWglQAbgrAegcQAcgbAvgVQAMgHAVgGIgLgVQgZgsgKg0QgJgwAEg4QAEg1AQgyQATg6AYgoQAYgpAngrQAkgnAqgeQAggXA4gaQAxgXApgOQAngMA3gKQAogGA1gDQAugCAuAGQAfAFA7AOQAsAKArAPQAqAOAoAcQAIAFAKAJIASAPIAcgEQA8gEAbAOIAUANIATAMIgBgOQgGgoANgoQAQgwAdghQAjgoAmgXQAogZAogQQAPgGAXgRQAZgTAKgFIBPgqQBRgpAPgGQAxgWA8gLQBBgMA4ABQA5AABBAOQAuAKBGAbQAtASBCAsQA1AkAuAyQA6A/AZAoQAhAzAcBJQAJAWACAMQANgFAYABIApACQBIACAxALQA9ANA3AaQA8AcAsAiQApAgAsA1QAmAvAbA0QAZAyAOA9QAQA+ABA1QABA4gMA6QgOA/gVAwQgXA2giAsQgjAugsAiQgeAYg+AbQg7AYgSAKQgdASghANIgUAHQgKADgHAFIAFATIAIAuQAFAcgDAVQgFA2gXAvQgXAwgmAqQggAkgzAdQgwAdguAKQgzAMgqgGIgagFQgNgDgHgFQgKAcgHASQgHAQgWApQgZAtgLAOQgWAdgfAbQgkAdgdATQgoAYgkALQgqANgnAAQgnAAglgKQgJgDgYgMQgDAagEANQgLAmgkApQgcAfgyAdQgwAbgwAJQgvAKgygDQgsgCgvgSQgWgJgygYQghgQgTgNQgHgFgMgNQgLgJgKABQgKADgQgDIgegHQgagGgfgVQgIgFgGgGQAEAwgNAjQgYBDgeAnQgpA0glAeQgrAkgwASQgTAHgXAOIgmAXQgPAIgUAQIgiAYIgjAYQgWAQgQAJQgzAbgkAMQguAPgwAGQg+AIguABQgsACgTgCIgRAbQg7BbgzArQg1AthoABIgEAAQgiAAgmgJg");
	this.shape_2.setTransform(-47.4865,-202.7497);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("A2PXUQhAgVg9grQgwghgxg4Qglgsgkg7QgggzgWg4QgYg6gNg4QgNg5gDg8QgCgfADgxQADgvAOhEQAOhBAQgpIAUgwQANgZAOgRQAfgkASgsIARgkQAJgUADgOQALgpADgfQACgRALgSQAGgLAQgWQAYgjAdgbQAggeAigSQAngVAhgHIAWgFQAAgFgDgLQgKgxgCgqQgBgqAKgwQAMg0ARgjQAihHAFgLQARgqAVgjQAagrAegcQAcgaAvgUQANgGAUgFIgLgVQgZgtgIgzQgIgvAFg4QAGg1ARgyQAUg4AZgoQAYgmApgrQAmgnApgbQAggWA4gYQA0gXAlgLQAmgLA1gJQArgHAwgCQArgCAvAGQAPACBHAPQAsAJApAMQAnAMAqAbIAlAbIAbgGQA6gIAfAMQAIADAMAHIAVAMIAAgPQgDgnAQgqQASgtAdgiQAjgpAkgXQAmgZAngSQAPgHAVgRQAZgUAKgGIBNgsQBMgrARgHQAxgXA7gNQA/gNA2gBQA7AAA+ALQAuAJBFAYQAuARBBAqQA2AkAuAuQA7A9AaAmQAeAuAhBKQAKAYABAJQAOgDAZABIApAEQBQAGAsANQBCAUAwAZQA6AfArAlQApAiAoA1QAkAvAaA3QAWAvAPA/QAOBBAAAyQABA2gNA8QgOBAgVAuQgWA0gjAvQgiAsgsAkQgdAXg9AcQg+AcgQAJQggATgeAOQgaAIgKAIIAEAUIAIAuQAEAcgDAVQgFA0gXAxQgYAwglAqQgfAigzAgQgvAdgvALQg2AMgogFIgagEQgNgDgIgFQgJAdgIASQgGAQgWApQgWAqgOATQgXAfgdAaQgeAcghAWQgmAagkANQgqAQgpADQgnADgngHQgRgDgUgIQgFAbgFANQgPApglAoQgeAhgyAdQgtAag0AMQgvALg0gBQgugBgwgQQgbgJgygUQgogQgTgKQgIgFgQgMQgPgJgLABQgMABgSgFIghgMQgPgGgOgJQgBASgEAQQgTBHgcAqQgkA3glAkQgpAmgwAZQggARgzAkQgOAIgYASQgXASgOAIIgoAaQgXAOgUAIQg1AXgmAIQgxAKgwACQhNACgbgCQgmgCgXgDIgRAaQg3BWg1ArQg1ArhnABIgEAAQg5AAhRgdg");
	this.shape_3.setTransform(-57.364,-204.2744);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("A2RXhQhAgVg8gpQgygigvg2Qgkgqgmg8QgfgzgXg4QgXg4gNg5QgNg3gDg9QgBgfADgyQAFgxAPhAQAOg+ASgqQAOghAHgOQANgZAPgPQAgghATgrIARgiQAJgSADgOQAJglAAggQABgQAJgUQAFgMANgYQAUgjAdghQAcgfAlgYQAlgXAkgMIAWgHIgCgRQgFgzACgtQADgvANguQAQg2ASggQAgg2ALgZQAPgmAXgmQAXgoAggeQAZgXAxgVQASgGAPgDIgKgWQgZgsgHg0QgGgtAGg5QAGgzATgyQAVg3AagnQAagnApgoQAngmApgaQAfgUA4gWQA0gVAkgLQAlgLA1gIQAjgFA1gDQApgCAuAGQARACAZAFIApAIQAxAJAiAJQAlAKArAYQAMAHAZASIAbgHQA4gMAiAKQAJADANAGIAWAJIAAgPQABgnATgqQAVguAbggQAlgrAggWQApgbAigSQANgHAVgTQAXgUAKgHIBLgvIArgaQAbgQAVgKQAxgZA4gNQBBgQA0gCQA5gCA9AKQA0AKA+AUQAyARA9AmQA2AhAuAtQA9A6AaAlQAbAnAnBOQAKAVABAKQAUgCA+AIQBRAKAsAPQBCAZAuAbQA4AgAqAoQApAmAlA0QAhAuAZA5QAWAuANBBQANA9AAA1QAAA4gNA6QgOBAgVAuQgXA2ghAsQggArgtAmQgfAZg7AcQg7AcgSALQgeATggAQIgTAJQgMAEgGAFIAEAUIAHAvQADAcgCAVQgHA2gXAvQgWAvgmArQgfAjgzAhQgwAeguAMQg2ANgngEQgmgDgLgGIgTAwQgHAQgXAqQgWApgOAVQgWAfgeAcQghAggdAVQgqAfggAOQgsAUgoAHQgoAIgtgCQgZgBgTgDQgLAdgHAOQgaAvgoAlQgnAjg2AbQg2Aag3AKQg5AKg3gDQgxgDg6gTQgsgPg3gcQgTgLgUgMQgXA2geAmQguA9gnAiQgsApg2AbQgUAKgaASIgsAdQgOAJgbAUQgaATgQAJIgtAaQgaAOgVAIQg6ATgoAEQgxAFgxgCQhQgFgXgDQgogGgSgFIgSAaQg4BRg1AqQgzAohnACIgEAAQg4AAhRgcg");
	this.shape_4.setTransform(-67.2225,-205.79);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("A2UXuQg+gVg9goQgwgggxg3Qgngtgig3QgfgwgYg6QgWg4gOg5QgMg3gCg+QgCglAFgrQAEguARhCQAQhAATgnQAPggAIgOQANgXAQgPQAigeATgoIARggQAIgRADgNQAHghgBgiQAAgbAVgwQARglAbglQAZghAogcQAhgYApgSIAXgKIgBgRQgBg3AGguQAHgyAPgsQAUg3AUgfQAjg2AKgYQAOghAYgpQAXgoAfgdQAbgYAwgRQAQgGARgDIgKgVQgYgtgGgzQgGgvAIg2QAIg1AUgwQAWg2AaglQAcgnApgmQAmgkAqgYQAfgTA4gVQAygUAlgKQAhgJA3gIQAigFA0gDQAqgBAqAEQAQACAYAFIApAIQAtAHAjAHQAlAJArAWIAlAWQAMgFAOgEQA1gPAnAIIAXAHIAXAIIABgQQAEgoAVgqQAWgsAcghQAmgsAdgUQAxgiAWgOQAOgIATgTQAWgWAKgGIBJgzIApgbQAagRAUgLQAwgZA4gQQA+gRA0gDQA4gEA9AJQAwAHBBATQAwAOA/AlQA6AiArAoQA7A2AcAlQAZAgAsBRQAMAVAAAIQAbAAA5AKQBUAOApASQBFAeAqAbQA2AjApApQAnAnAkA2QAgAxAXA3QAUAvANBAQAMA+AAA0QAAA3gOA7QgOA9gVAwQgXA1ghAuQggAsgrAlQgfAbg6AcQg6AegSAMQgjAXgcAOQgbALgLAIIAEAVIAGAvQADAcgDAWQgHA3gXAuQgYAygkAoQgfAkgzAgQgwAfgtANQg0AOgqgDIgbgCQgPgBgIgEQgLAfgJATIgeA7QgYArgNAUQgXAigbAbQgaAagkAdIgiAaQgTAOgTAJQgsAXgrALQglAKg0AEQgnABgJgBIgXAtQgfAygsAlQgsAlg3AZQg4Aag9AJQg/AKg5gFQgwgEhDgXQglgOgogWQgWAsgbAiQguA8gpAlQgwArgzAbQgUALgcATIguAfIgsAdQgaARgTALQhAAigkAJQg8AOgpAAQg1AAgtgHIgxgHQgegFgVgFQgogKgPgFIgSAZQg4BPg0AnQg0AmhkACIgCAAQg4AAhSgbg");
	this.shape_5.setTransform(-77.1673,-207.3506);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("A2WX6Qg9gVg9gnQgygggvg1Qglgpglg6QgfgxgXg5QgZg9gLgzQgMg5gCg8QAAgiAFguQAGgxARg+QAThBASgkQARggAIgNQAOgXAQgNQAjgcAVgmIARgdQAIgQADgMQAFgdgDgkQgCggARguQAOgmAagpQAVggAqgkQAhgbAqgVIAYgMIABgSQACg7AKgvQAKgzASgsQAYg7AVgaQAkgvAMgeQAOggAXgpQAXgoAfgcQAagYAxgPQANgEAUgDIgKgWQgXgtgFgzQgEgtAJg4QAJgyAVgwQAXg0AcgmQAagjAsgnQAngiAqgYQAggRA3gTQAxgSAkgKQAegHA3gIQAcgEA4gDQAngCAqAEQAPACAYAFIAnAGQArAFAjAHQAiAFAtAVQALAEAbAQQAQgIAKgDQAygSArAGQAKABAOAEIAZAGIABgQQAIgpAXgqQAZgsAbggQApguAYgSQAvgiAWgPQAMgIATgVQAUgWAJgHQAtgkAZgRQBAgvAVgMQAugbA3gRQA+gTAygEQA4gFA8AGQA1AGA7ARQAwANA/AiQA3AfAuAmQA+A1AbAiQAXAdAxBRQAMAVAAAGQAsAFAqAJQBXAUAmASQBDAhAqAeQA0AmAoAqQAmApAiA2QAeAwAXA5QAUA0ALA7QAKA+AAA1QgBA3gNA6QgOA/gVAuQgWAyghAxQgfArgsAnQgcAag7AfQg3AdgVAPQgcATgjAVQgbAMgMAKIAEATIAFAwQADAcgDAWQgIA3gXAuQgXAwglArQgfAjgyAhQgvAfguAOQgzAPgrgCQgmgBgMgFIgVA0QgGANgZAvQgUAngRAYQgVAigcAdQgbAcgiAdIgiAbQgUAPgSAKQgxAagmAMQgqANgyAFQgnAEgLgBQgTAlgGAKQgjA2gqAjQgqAlg7AcQg7Acg7AKQhAALg7gEQgygChEgWQghgKghgRQgTAngWAfQguA+gnAmQgtAtg1AfQgTALgeAVIgvAhIgvAeQgaARgWALQhAAggrAHQg/AJgpgEQg3gGgrgLIgvgLQgdgHgUgGQgZgIgbgLIgSAXQg3BLg1AmQgzAlhjABIgCAAQg3AAhRgag");
	this.shape_6.setTransform(-87.1761,-208.9132);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("A2ZYGQg7gUg+gmQgwgfgxg2Qgjgngng7QgfgwgXg5QgYg5gLg3QgMg3gBg9QAAgjAGgtQAIg4ARg2QAVhBATgjQASgfAIgMQAQgXARgLQAigYAYglIARgbQAIgPACgLQAFgZgFgmQgFglANgsQAKglAaguQASgiAsgoQAhgfAsgYIAYgOIACgTQAFg4AOg1QAPg4ATgqQAag5AXgbQAngtAMgeQANgeAYgrQAVgnAggcQAagXAygPQAQgEAQgBIgKgWQgWgugEgyQgDgqALg6QAKgxAWgwQAZg0AdgkQAcgiArglQAnghArgWQAggQA2gRQA4gTAcgGQAZgGA7gJQAhgEAwgCQAkgCAqAEIAmAGQAZAFAMABIBMAIQAgADAuASQARAGAVAMIAagNQAwgUAvADQAKAAAQADIAYAFQAAgGADgLQAKgpAbgqQAfgwAXgbQAlgsAagTIBBgzQAMgJARgVQASgXAJgIIBDg4QA8gwAVgNQAsgcA3gUQA9gVAxgGQA2gHA8AFQAyAEA+APQA0AMA6AfQA4AdAuAlQBAAzAbAfQARAUAVAeIAkA4QANAUAAAGIBXASQAtAMAVAHQAjAMAZANQBBAkApAgQA0AnAmAsQAmAtAfA0QAdAyAVA4QAUA1AKA7QAJA8AAA2QgBA3gNA7QgOA7gVAyQgUAwgiAyQgfAtgqAnQgcAZg7AiQg7AigRAMQgfAXggAUQgbANgMAKIADAUIAFAwQACAdgEAVQgIA4gWAtQgYAxglAqQgfAlgxAgQgsAfgxAPQgyAQgsAAQgogBgLgEQgMAhgJAUIgPAeIgQAfQgVAngQAaQgVAhgdAeQghAjgcAYIghAcQgVAQgSALQguAagpAPQgpAOg1AIIgZAEQgOACgMAAQgSAjgIANQgiA0gtAoQgrAlg7AeQg6Adg8AMQhDANg6gCQgygBhHgTQgegJgegNQgQAhgSAcQgqA/gnApQgsAvg0AjQgRALggAZQgfAXgSAMIgxAfQgbARgZALQhCAegvAEQg8AFgvgIQg7gMgngNIgugPQgdgJgSgIQgbgLgXgMIgSAXQg3BHg1AkQgzAihhABIgCAAQg4AAhPgZg");
	this.shape_7.setTransform(-97.1987,-210.5126);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,255,255,0.498)").s().p("A2bYRQg9gTg7gmQgygfgvgzQgmgqgkg4QgfgvgYg5QgXg4gMg4QgLg4AAg9QAAgiAHgtQAIgyAUg7QAWhBAVgiQAQgcALgOQARgVARgLQAkgVAZgjIARgZQAIgNACgLQAEgWgHgmQgHgqAJgqQAIgmAYgyQARgjAtgsQAigiArgbIAagPIACgUQAJg8ARg2QAVg+ATglQAeg6AXgZQApgsANgfQAMgcAYgsQAWgoAfgbQAYgVA0gOQAQgDAQgBIgJgVQgWgugCgyQgCgtAMg3QAKgvAZgxQAagzAdgiQAfgkAqghQAogfAqgUQAfgPA3gQIBSgXQAUgEA+gIQATgDA7gDQAjgCApAEIAkAFIAjAFIBKAEQAbABAzAPQAYAIAOAIQAJgGASgJQAsgWA1AAQAJAAArAFQAAgFADgLQANgqAegrQAhguAYgbQAlguAXgRIA+g0QALgJAQgWQARgXAIgJQAkgjAbgYQA7gzATgOQArgeA1gUQA7gYAwgIQA4gIA5ACQA1ADA7ANQAyAKA8AdQA5AbAuAiQBBAwAbAeQARATAVAeIAnA2QAOASgBAHIAqAKIAuALQAwAPATAHQAjANAYAPQBHAsAhAcQAwAnAoAwQAmAvAcA0QAcAyAUA5QASA0AKA7QAJA4gBA7QgBA3gNA7QgNA5gVA0QgVAxghAyQgdAsgrAoQgcAbg5AjQg1AggXARQgiAagdATQgcAOgMALIADAUIAEAwQABAdgDAWQgJA2gXAvQgYAxgkAqQgeAjgyAjQgvAggtAPQgyARgsAAQgmABgOgEIgWA3IggA+QgUAmgSAcQgWAigbAfQgbAdgiAeIghAeQgUAQgSAMQgvAcgpAQQgnAQg5ALIgZAFQgQACgMABQgRAhgKAQQglA4grAmQgsAng6AfQg7Aeg8AOQhCAPg8AAQg3ABhFgRQgcgGgcgKQgMAbgOAYQgoBBgmArQgtA0gxAkIgxAnQgeAYgUANQg/AqgrASQhFAdgzAAQhCABgsgMQg5gQgogQIgtgTQgcgLgSgJQgRgJgfgSIgSAWQg3BDg2AiQgyAghfAAIgCAAQg2AAhPgZg");
	this.shape_8.setTransform(-107.245,-212.1195);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,255,255,0.498)").s().p("A2dYdQg9gTg7glQgxgegvgzQgkgmgng6QgegvgYg5QgYg7gLg2QgLg5ABg7QAAgkAJgsQAJgzAVg5QAYhAAWghQASgcALgNQASgUASgJQAlgTAaggIARgXQAIgMACgKQADgSgJgpQgJguAFgoQAEgkAYg4QAQglAugvQAhgjAuggIAagRIADgUQALg8AWg6QAZhCATgiQAgg7AZgZQAsgrANgeQALgbAYgsQAVgnAggcQAZgWA0gLQAMgCAUAAIgJgWQgVgsgBg0QgBguAOg1QALguAagwQAcgzAdggQAbgfAwgjQApgfApgSQAdgMA4gQQA/gRASgDIBQgLQAZgDAzgCQAlgCAjADQALABAYAEIAiADIBHABQAaAAAzAMQAYAFAPAHIAbgQQArgYA4gDIA3ADQAAgFAEgMQAQgrAhgqQAlgxAVgYIAcghQAQgSAOgLQAVgPAmglQALgKANgWQAQgZAHgIQAngrAUgUIAjgiQAWgUARgOQAqggAzgWQA9gbAsgIQA4gLA4ABQA2ABA4AKQAzAJA8AaQA6AaAuAfQBCAtAbAdQARARAXAeIAoA0QAOATAAAEQAMAFAeAIQAhAIAOAFQAuAPAUAJQAkAOAXARQBFAuAiAeQAtApAnAyQAkAvAdA2QAbAzASA4QATA4AIA4QAIA4gBA7QAAAzgOA/QgNA8gUAxQgVAxghAyQgcArgqArQgcAcg4AkQg6AlgRAOQghAbgfAVQgcAQgNALIADAVIADAwQABAdgEAWQgJA2gXAvQgXAwglArQgiAnguAgQgtAgguAQQgzASgsABQgmACgOgDQgOAkgKAUIggA/QgPAegXAlQgYAmgaAcQgbAeghAfIgiAfQgUARgSAMQgwAfgoARQgnARg6ANQgqAJgNABQgUAmgIAMQglA5gsAoQgvApg5AgQg8Ahg7AOQhBAQg9ACQg4ADhHgOQgZgFgZgHQgJAWgLAUQgjBAgnAxQgqA1gxApIgyApQgdAZgWAPQg6Aog2AUQhGAbg4gCQhAgDgvgQQg7gVgmgTIgtgWQgagMgSgLQgPgJgfgWIgTAVQg4A/g2AgQgxAeheAAQg1AAhQgZg");
	this.shape_9.setTransform(-117.3208,-213.7511);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300.1,-372.7,503.20000000000005,531.3);


(lib.PuppetShape_8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("ANgTWQgjgFg7gaQg1gXghgUQg1gjgZgOQgVgLg+gUQgUgGgcgNIgxgaQgqgUhIgrQgRgJgXgUIgngiQgMgKgkgnIhEAKQhKAJg7gGQhAgGgxgZQg4gcgjgdQglgdgXgtQgSgigVgaQgJgLgRgKQgQgIgNgCQgHgBgZADQgcADgXgBIhDgCIhOgDQhbgGhMgWQgmgKg1gcIhhg3QhMgrgggbIglgGQhGgKhzgVQgggFgmAAIg/AAIhAAAQgkgBgZgDQhBgIg5gSQg0gQg5glQgtgcgxgtQgmgjgmg3Qgjg0gUg0QgVg4gKg4QgFgggBgvQgCg6ALg4QAKg5ATgzQAWg6AagrQAcgsAlgtQAigoAsgkQAnggAygZQAigSA+gOQAwgKAyABQAxABAqAPQAdAKAMAGQAYAKANAMIAUAPQACgCAAgEIABgGIAJhLQADgcAcgwQAOgYAqgyQAjgtApgTQA6gaApAGIA0AHQAfAFATAHQAlAOAhAlQAMAOACALQABgOgCgHQgNguAPgwQAOguAdgqQAggsApgdQA1glAngOQAsgQA8gFQAygEA3AJQAiAHA7AbQAtAUAmAXQAdARAsAlQAbAYAjAkQAZAaAbAmIAVAhQANAWAIAKIAwA/QAWAdAQAuQAGAcAHAPIAXANIAjAXIACACQgFgQgBgRQgFg3AVgtQAUgsApgxQAigoAwgeQBDgsAYgLQA1gbAwgNQBBgTAvgGQA5gHA+AHQBEAHA0ASQA8AVAyAfQAiAVA+A1QAiAeApBKQAhA9AKA7IAKA/QAEAZgBAWQAbgbAigTQA3gfA1gQQAwgNBGgCQA4gBA/ANQAyALA9AeQA4AbAsAjQArAkAlAwQAnAyAYAxQAaA1AMA4QAMA1gCA7QAAAkgUBCQgQAygEAeQgFAigHAcIgFARQgEAKABAHQAGAEAMAEQAxAXAaAeQAjAqANAwQAOAzgBA4QgBArgYA7QgWAzggAmQgpAvgiARQglAUgTAEQgMAlgOAdQgQAggbAmQgdAqgXAXQgaAagnAcQgdAVgqAaQgyAegbALQgqAQgsAJQgrAIgtgDQgNgBgegHIgKAoQgNAsgdAqQgaAogsAiQgrAigxATQg2AWgvAGQgLABgPAAQgeAAgsgGgACJp2QADgFgGgJIADAOg");
	this.shape.setTransform(32.394,-152.2843);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("ANVTUQgggFg+gbQg2gYgfgSIgngaQgXgPgPgIQgQgJgXgIIgrgPQgTgGgcgOIgxgZQgsgXhEgoQgQgKgXgTIgmgiQgQgPgegiIhDALQhIAJg8gEQhAgGgwgYQg5gcgigbQgkgdgXgrQgTgjgVgYQgJgLgRgJQgPgIgNgBQgGgBgYAEQgdAEgWAAIhCABIhNgBQhZgChNgTQglgJg1gaIhigyQhKgogigaIgmgEQhFgHhzgPQghgEglACIg/ADIhAABQgkAAgagCQhEgHg2gQQg0gOg7gkQgugdgxgrQgmgigng3Qgkg1gUgyQgWg2gKg5QgGglgBgrQgCg7AKg2QALg9ASgvQAWg7AZgpQAagoAmgvQAigpAogjQAlghAvgbQAhgUA7gRQAxgNAwgCQAwgBAqANIArANQAYAKANAKIAVAPIACgGIAAgHIAHhLQADgaAbgxQAPgaAmgxQAkgtAmgTQA4gdAoADIAzADQAeACAUAFQAlALAlAgQANALAFALQABgOgCgHQgMgvANgwQAOgvAcgqQAcgrArghQAvglArgTQAqgRA9gJQAzgGA2AGQAgAEBAAYQAyATAlAUQAfARAuAiQAaAVApAlQAdAcAbAkIAYAiQAPAWAIAKIAzBBQAXAeARAvQAHAcAHAQIAYANIAiAZQgDgNgBgNQgFg3AVgsQAWgtApgvQAigoAwgdIAtgcQAbgRATgJQA0gZAxgNQBEgTArgGQA6gIA9AHQBFAIAzARQA6AUA1AhQAkAWA8A0QAjAeApBJQAhA+ALA6IALA/QAEAggCAaQAeggAmgUQA3geA2gPQA0gOBCAAQA5AAA+AOQAvALBAAgQA7AeAnAiQArAjAlAyQAlAyAYAyQAYA0AMA5QALA3gCA6QgCAlgVBBQgSA3gEAYQgEAegIAfIgGARQgDAKAAAHQAGAEANAEQAxAYAZAeQAjAsALAvQAOA0gDA4QgBApgaA8QgYA0ggAjQgqAugkAQQgmASgSAEQgMAkgPAdQgSAhgZAiQggAsgUAUQgcAagmAbQgZASgtAbIglAVQgVAMgTAHQgrASgqAHQgsAIgsgEQgNgBgegHIgKApQgOAsgdApQgaAmgtAjQgtAjgwASQg2AUguAGIgbABQggAAgqgHg");
	this.shape_1.setTransform(32.2843,-155.9677);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("ANLTSQghgFg8gbQg0gXghgUQg0gjgZgOQgQgJgWgIIgqgPQgUgGgbgOIgwgaQglgShJgtQgQgKgWgTIglgiQgOgMgggkIhBALQhGAKg8gDQhAgFgvgXQg4gbgjgbQglgdgXgqQgPgcgYgdQgJgLgRgIQgPgHgMgBQgGAAgXAFQgbAFgXABIhBADQgrACghAAQhYABhMgQQgmgIg1gXIhigvQhNglgggYIglgCIi4gNQgggCgnADIg/AFIg/AEQgkABgagBQhCgFg6gPQg0gNg8gkQgtgagzgsQgnghgng3QglgygUgzQgYg6gKg2QgGghgCgtQgBg6AJg3QAKg7ASgxQAVg5AagpQAXgkAogzQAdgkApgnQAhgfAtggQAhgWA4gTQArgPA0gGQAvgEArALIArALQAZAIANAKIAVANQACgCAAgKIAFhLQAEgeAZguQAPgcAlgvQAhgtAmgUQA1geAogBIAygBQAdAAAVAEQAkAGAqAbQAMAIAKAMQABgMgCgKQgMgwANgwQAMguAcgtQAcgsApgiQAwgpAogSQArgUA7gLQAygJA4AEQAXABAbAHIAxAOQAuAOAsAVQAkARAsAfQAfAVApAjQAiAeAbAhIAaAiIAZAhIA1BCQAYAeATAxIAHAWQAEAPAEAIIAYAOIAhAYIgDgUQgEg2AWgsQAWgtApguQAlgoAugbIAtgbQAbgQATgJQA1gYAwgOQBJgTAmgFQA2gIBBAHQBFAIAzARQA5ATA2AhQAgATBBA3QAlAgAnBHQAiA9AKA8IAMA+QAFAkgDAcIAAAEQAggjArgWQA1gdA4gOQAygNBFABQA8ABA6AOQAvALBAAhQA4AeApAkQAsAmAiAwQAnA2AVAvQAXAzAMA8QAKA0gEA8QgBAYgIAeIgQAwQgSA3gEAYQgGAhgHAbIgGARQgEAKAAAHIATAIQAyAaAXAdQAiArALAxQAMA0gDA4QgDArgbA6QgZAzgiAjQgrAsgkAPQgnARgRACQgPAngNAYQgSAggaAiQgfAqgWAUQgaAZgnAaQgcATgpAZQg1AfgYAJQgrARgqAHQgtAIgqgEQgRgBgagHIgKAoQgPArgdArQgbAmgtAiQguAigvARQg2AUgvAGIgXABQghAAgtgIg");
	this.shape_2.setTransform(32.1453,-159.6564);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("ANBTQQgjgFg6gcQg1gXgfgUQg0gjgYgOQgUgLg8gVQgTgGgbgOIgwgaQgugZg9gnQgQgKgWgTIgkgiQgKgJgigmIhAAMQhEALg8gDQg/gEgwgWQg5gbghgZQglgcgXgpQgQgegYgaQgIgKgRgHQgPgHgMgBQgFAAgXAGQgaAHgXABIiLALQhVAEhNgOQgmgGg1gVIhigrQhNgighgWIglAAQhFgBhygEQghAAgmAEIg/AIIg/AGQgkACgbgBQhAgCg8gOQg0gMg9giQgugagzgrQgngggog2QgmgzgWgyQgWg2gMg6QgHgkgCgqQgCg6AJg2QALg9AQguQAWg7AZgnQAWgiAngyQAegmAlglQAggiApgfQAdgXA3gYQAsgSAxgHQAtgIAtAJIArAJQAZAGAOAJQAQAIAGAEQABgBAAgLQABgsADgfQAEgeAYgvQAQgdAiguQAggqAlgXQA0gfAngEQBBgIAiACQAkADAtAWQANAGAMAKQAAgPgBgHQgKgxAMgwQAMgwAbgsQAagtAogkQAvgqAogVQArgWA6gNQAygMA4ABQAXABAcAFIAyALQA2AOAoARQAmAQAuAdQAdASAuAjQAhAbAhAkIAcAhIAbAiIA4BDQAYAeAVAzQAJAeAHARQARAIAIAGQAWAPALAJIgCgPQgFg0AXgtQAYguApgrQAigmAxgbIAugbQAbgQASgIQA3gZAtgMQBDgSAtgGQA4gHA/AGQBEAHA0ASQA5ATA2AhQAgATBBA3QAlAgAnBHQAiA8AMA9IALA/QAGAkgDAcIgBAPQAjgoAvgYQA2gcA4gOQAxgMBGACQA6ABA8AQQAyAMA8AiQA7AgAmAjQAoAkAlAzQAmA3AUAvQAXA4AKA3QAJA3gFA6QgCAYgIAeIgQAwQgUA2gEAXQgFAdgJAgIgGARQgEAKAAAHIATAIQAxAaAXAfQAhAsAKAwQALA0gFA5QgDArgdA5QgZAxgkAjQgsAqglAPIgdAKQgQAFgMABQgNAhgQAdQgSAegaAhQgdAngYAWQgXAWgpAcQghAVglAVIgkAVQgWAMgSAHQgoAQgtAHQgrAIgsgFQgQgBgagHIgLAoQgPAugeAnQgbAmgtAiQgtAhgxARQg1ATgwAFIgXABQghAAgsgIg");
	this.shape_3.setTransform(32.0403,-163.4007);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("AM2TOQghgGg7gbQg2gYgegTQgzgkgYgNQgYgOg4gTQgTgHgagOIgvgaQgqgXg/gpQgQgKgVgTIgjgiQgPgNgcgiIg+ANQhGANg4gDQg/gDgwgWQg4gZgigZQglgbgXgpQgOgagZgcQgJgKgQgHQgPgGgLAAQgFAAgXAHQgZAIgWACIg/AIQgqAFggADQhUAHhNgKQglgFg2gTIhignQhOgfghgVIglACQhEADhyACQggABgnAGIg/AKIg/AIQgkAEgbgBQg/AAg+gMQg1gLg9giQgtgXg1gsQgngegqg2QgngzgVgxQgYg3gMg4QgHgggDguQgDg5AJg2QAKg+ARgtQAUg5AZgoQAXgiAmgxQATgaAsgxQAcgfAogjQAcgZA0gaQArgWAvgKQAugJAsAFQA9AHAWANIAXAKQABgDgBgJQAAgvAEgdQADgeAXguQARghAggrQAegqAmgYQAwgfAogIQBAgNAhAAQAmAAAvAQQAKADASAKIgCgXQgIgwALgyQAMgwAaguQAcgwAlgjQArgpAqgZQAqgXA6gRQA0gOA2gBQAkgBBDANQA0AKAsAQQAlANAzAcQAkAVArAfQAkAaAiAjIAeAiIAdAhIA8BFQAaAhAVAyQAKAeAHARQARAJAIAGIAhAaIgBgMQgFg0AYgsQAWgqAsguQAkglAxgaIAtgaQAbgQATgIQA1gXAugMQBGgTApgFQA5gIA+AHQBFAHA0ASQA6AUA1AgQAgATBBA2QAkAfApBJQAiA7AMA+IAMA/QAGAkgDAcIgDAZIACgCQAngrAxgYQA5gcA2gNQAxgLBGACQA+ADA4AQQAuANBAAjQA3AfAoAlQAoAlAkA0QAlA4ATAvQAXA5AIA3QAJA2gGA7QgDAngZA+QgVA2gEAXQgHAjgIAaIgHARQgEAJABAHIASAJQAwAaAXAgQAhAsAJAxQAJA1gGA4QgEAqgfA5QgbAxgkAiQgsAognANIgdAKQgQAEgMABQgPAjgPAYQgRAbgbAjQgfAngWAUQgWAUgrAcQgWAPgvAbIgjAUQgVALgTAHQgpARgrAGQgsAIgrgFQgRgCgZgHQgHAbgEAOQgPArgfApQgbAlguAiQgtAhgxARQg4ATguAEIgVABQggAAgvgJg");
	this.shape_4.setTransform(31.9325,-167.102);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("AMrTLQghgGg7gbQg4gagbgSQgzgjgYgOQgUgLg6gWQgTgHgagOIgugaQgygdg2gjQgPgKgUgTIgjgiQgKgKgfglIg9AOQhFANg3gCQg/gBgvgWQg2gXgkgZQglgbgXgoQgPgbgZgaQgIgJgQgGQgQgGgKABQgEAAgWAIQgYAJgWADIg+AKIhJAKQhRAKhPgHQgkgDg2gSIhjgiQhOgcgigTIgkADQhEAHhyAHQgfACgnAIIg+ANIhAAKQgjAFgbABQhDABg8gKQg2gKg9ggQgtgXg2grQgqgggogzQgogygWgwQgZg2gMg4QgIgkgCgrQgEg4AIg3QAJg7ARguQAUg6AZgmQALgRAwhCQATgYApgxQAcgiAjgiQAcgdAvgbQApgXAvgNQAtgNAsADQA+ADAWALQARAGAGADQABgBAAgLQgBgtADgfQADgeAXgwQAPgdAhgvQAdgpAmgZQAtgfAogMQA5gQAngEQAmgDAxAKQARADAPAGIgCgXQgHgwALgzQALgxAaguQAZgvAngnQAsgtAngYQApgYA6gUQAzgQA3gEQApgDA/AKQAyAHAxAPQApANAyAZQAoAUArAdQAmAaAkAiIAhAhIAfAiQAeAhAgAlQAbAiAWAyIASAxQARAJAIAGIAjAaIgBgIQgFgzAZgsQAYgqAsgsQAkglAwgYIAugZQAcgQARgHQA4gYArgLQBGgSApgGQA2gHBBAGQBFAIA0ARQA6AUA1AgQAkAWA+A0QAlAgAoBHQAiA6ANA/IAMA/QAGAkgCAdQgBATgDAQIAIgJQAmgqAzgYQA3gbA4gMQA0gLBDAEQA6ADA9ARQAwAPA8AjQA5AiAmAkQAqAnAgAzQAkA3ATAxQAVA2AJA7QAHA3gGA6QgFAngaA9QgWA2gEAXQgHAjgIAZQgLAWAAAMIASAJQAvAZAXAiQAgAuAIAxQAIA0gIA5QgFArghA3QgbAvgnAiQgtAmgnAMQgqAMgPAAQgQAjgPAXQgRAagbAiQgfAlgWAUQgZAWgoAYQgYAQgsAZIgjAUQgVALgSAHQgsAQgpAGQgrAHgrgFQgRgCgZgHQgHAbgEANQgQArgfAqQgdAmgtAgQgvAhgvAPQg2ATgwAEIgSABQgjAAgvgKg");
	this.shape_5.setTransform(31.8549,-170.7715);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("AMhTJQgigHg6gbQg2gagcgSQgzgjgYgOQgXgOg3gUQgSgHgagPIgtgaQgrgZg6gnQgQgKgTgTIghgiQgNgMgbgjIg8APQhDAOg4AAQg+gCgvgUQg4gYgigXQgmgbgVgmQgOgYgagbQgJgJgQgGQgPgGgJACIgZAKQgXAJgWAEQhSASgzAIQhRAMhNgEQglgCg2gPIhjgeQhNgZgjgSIglAGIhfAMIhVAKQgeAEgnAKIg/APIhAAMQgjAGgbACQg/AEhAgKQg0gIhAgfQgugWg3gpQgogegrg0QgngvgYgyQgag3gNg2QgIgkgDgqQgEg7AIg1QAIg7AQguQAUg6AYgkQATgdAng0IA5hJQAXgeAjgnQAbgfAsgdQAogbAsgPQAtgQAsAAQA+AAAXAJIAYAIQABgDgBgKQgDgmAEgnQADggAXguQAOgdAhgwQAdgpAlgZQAtggAngPQAygSArgHQAogHAyAEQARACASAEIgCgXQgGgyALgzQALgxAagxQAZgxAlgmQArguAngaQAqgcA3gUQAzgSA3gGQApgFBBAGQA2AGAvAMQAoAKA2AYQApATAuAcQApAaAlAgQAOAMA1A3QAdAdAkAqQAcAjAXAzIATAxQASAKAIAGIAjAcIAAgFQgEgyAagtQAZgrAsgpQAmglAvgWIAugYQAcgQARgHQAzgVAwgMQBIgTAmgFQA5gIA+AHQBHAIAyARQA4ATA4AhQAgATBBA3QAkAeAqBJQAjA8AMA9IANBAQAGAjgCAdQgBAZgEAUIAPgPQAogqAxgXQA7gbA1gKQAzgKBFAEQA7AFA7ASQAwAOA8AlQA3AhAnAmQAoAoAhA0QAiA2ATAzQAUA2AHA7QAHA0gHA9QgFAmgbA+QgXA1gFAXQgHAhgJAcIgHARQgEAJAAAHQAGAEAMAFQAuAcAXAiQAfAvAGAxQAHA3gKA2QgHArgiA2QgcAugoAgQgvAlgnAKQgoALgSgBQgPAhgQAWQgQAZgdAhQgdAjgXAUQgXATgpAbIhEAnIgkATQgVAMgRAGQgtAQgnAGQgtAGgpgFQgLgBgfgIQgIAegDAKQgQArgfApQgeAmgtAfQguAggxAQQg0ARgxAFIgOAAQgiAAg0gJg");
	this.shape_6.setTransform(31.7818,-174.4864);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("AMWTGQgggGg7gcQg3gagbgSQgygjgYgOQgTgMg7gXQgSgHgZgOIgtgbQgvgbg0gmQgOgKgUgTIggghQgLgLgbgkIg7AQQhCAPg3AAQg9AAgvgTQg3gXgjgXQgmgagWgmQgNgYgagaQgJgIgQgGQgPgFgJACIgYALQgVALgWAFQhQAUgzAKQhRAQhMgCQgkgBg2gMIhkgbQhOgVgjgQIgkAHIhfARIhUAOQgeAFgnALIg+ASIhAAPQgjAHgbADQg/AGhAgIQg1gGhBgeQgvgWg2goQgpgdgsgzQgpgxgYgvQgag2gOg2QgIgggEguQgFg7AHg0QAIg4AQgxQAUg8AXghQATgdAmgzIA1hIIA2hGQAaghAogfQAlgdAtgSQAsgSAsgDQA9gEAYAHIAZAGQABgCgBgEIAAgHQgEgmAEgnQADgfAXgxQAOgeAggwQAcgnAlgcQAvgiAjgPQAxgWAsgKQAtgLAuAAQAVAAAQACIgBgXQgFgyALg1QALgxAagyQAYgwAlgqQAqgvAmgbQApgdA4gXQA0gUA1gJQAmgGBFADQA1ADAyAKQAwALAxAUQAqARAwAbQAsAaAlAfQAUAQA0AzQAmAlAdAjQAeAkAYAzIAUAyQARAKAJAGQAdAXAIAHIAAgEQgDgzAagqQAagrAsgoQAmgjAwgWIAugXQAcgQARgGQA3gWArgKQBHgTAngFQA5gHA+AGQBFAIA0ARQA7AUA1AgQAmAXA8AzQAlAfApBIQAjA6ANA/IANBAQAGAkgBAcQgCAggFAYIAWgWQAmgoA0gXQA3gZA5gLQA1gKBDAGQA4AEA+AUQAxAPA6AmQA4AjAlAmQAoAoAgA1QAhA1ATA0QATA1AHA9QAGA3gJA6QgFAmgdA9QgWA0gHAZQgIAkgJAYQgLAWAAAMQAFAEAMAFQAuAcAWAkQAeAwAFAxQAFA1gLA4QgIApgkA3QgfAugoAeQgwAjgnAIQgqAJgQgCQgRAhgPAUQgPAVgeAjQgfAkgVASQgbAWglAWQgLAHg4AfIgjATQgVALgSAGQgtAQgmAGQgqAGgsgGQgQgCgZgIIgMAoQgPArggApQgdAlguAgQguAegyARQg1ARgwAEIgOAAQgkAAgygKg");
	this.shape_7.setTransform(31.7036,-178.1758);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203,-301.4,439.4,460);


(lib.PuppetShape_7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("AMMTEQgigIg5gbQg1gZgdgTQgygjgYgOQgSgLg6gZQgSgHgZgPIgsgaQgrgag2gnQgOgKgSgTIggghIgmgvIg4ARQhAAQg4ABQg8ABgvgTQg3gWgigWQgngZgVgmQgOgYgagZQgIgIgQgFQgPgEgJACIgWANQgUALgXAGQhPAXgxAMQhRAShKACQglAAg2gKIhkgWQhNgSglgPIgkAJIixAnQgeAHgoANIg9AUIg/ARQgiAJgcAEQg+AIhDgGQg0gFhCgdQgtgUg5goQgpgbgtgzQgqgwgYguQgbg2gPg2QgJgigEgrQgGg3AHg3QAHg6APgvQAUg8AXgiIA3hOIAzhGIAxhHQAagkAkggQAjgeAsgWQArgVArgFQA8gJAaAGIAZAEIAAgNQgFglAEgpQAEgiAWgvQAQgkAegrQAbgoAlgcQAtgiAkgTQArgWAwgPQAtgOAwgFQAVgCATABIgBgZQgEg1AMgzQAKgyAagzQAYgyAjgqQApgwAngdQAqggA1gXQA1gXA0gKQAtgJA+ABQA1AAA1AJQAtAIA2ATQAyASArAXQAtAYApAgQAdAWAuAsQAmAlAgAjQAfAkAYA1IAVAyQATALAHAGQAgAZAIAHIAAABIAAgEQgCgxAbgrQAagpAugoQAmghAwgVQAOgGAfgRQAdgPAQgGQA0gUAugLQBLgTAjgEQA4gIA/AHQBEAHA1ARQA5ATA3AiQAlAVA9A0QAjAeAsBJQAjA9ANA9IAOA/QAGAkgCAdQgBAmgHAbIAegbQAngoA0gXQA5gYA3gJQAygJBHAGQA6AGA7AUQAwAQA7AnQA2AjAmAnQAnApAfA1QAgA2ASA1QATA5AFA5QAFA3gKA6QgFAkgdA/QgYA0gHAYQgIAkgKAZQgLAVgBAMIASAKQAuAgAUAiQAdAwADAyQADA5gMA0QgJAqgmA0QggAtgqAdQgyAhgnAHQgpAHgQgDQgUAigNARQgPAUgeAiQgeAigWASQgVASgqAYQgPAJg0AcIgjATQgUALgSAGQgrAPgoAGQgsAFgpgGQgJgBgggJQgHAbgFANQgQAsggAnQgeAlguAfQgtAfgyAQQg0AQgxAEIgMAAQgkAAg0gKg");
	this.shape.setTransform(31.6498,-181.9407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("ALwS7QgfgHg7gdQg0gZgbgSQgwgjgXgOQgRgKg6gYQgSgHgYgOIgqgaQgrgZgyglQgOgKgRgSIgeghQgKgKgYgiIg1AUQg8AUg2AEQg5AGgxgQQg5gSgigTQgogWgYgjQgRgYgbgWQgKgIgQgFQgPgEgJACIgYALQgVALgUAGQhNAXgwAMQhPAShIACQgkAAg1gJIhhgUQhOgSghgNIgjAKQg0APh8AeQgcAHgqAOQgsAOgTAFQhVAWgrAEQhCAGhAgIQg1gHhBggQgrgVg5gqQgngdgsg0QgngugYgyQgag0gOg4QgJgmgDgnQgEg4AHg2QAHg4AQgxQAVg9AWggQATgcAkgzIAzhFIAwhHQAZgjAlggQAigdArgWQApgUAtgGQAdgEAOgBQAZgBARADIAYAFQABgCgBgLQgGgnADgnQACghAVgwQAOghAegvQAZgnAlgfQAugkAhgTQAsgYAugPQAvgQAugEQAVgDASAAIgCgYQgFg1AKg0QAJgvAYg2QAYgzAigqQApgyAlgcQAmgfA4gbQAzgXA1gMQAqgKBBgBQA2AAAzAHQAtAGA3ATQAsAOAyAZQAuAXAoAeQAhAYAsAoQAoAmAfAhQAgAlAZAzIAVAyQASAKAJAGQAfAXAIAIIABAAIAAgCQgDgyAbgqQAcgrArgmQAngiAvgUQAPgGAegRQAdgPAQgHQA4gVAogLQBFgSApgGQA2gJBAAGQBGAHAzAPQA6ATA3AfQAlAWA/AyQAjAdAuBIQAkA8APA8IAPA/QAHAkAAAcQgBAogGAcIgFARIAIgGIAngiQApgoA0gUQA5gWA4gIQA0gHBEAIQA5AIA7AVQAvASA6AoQA0AkAmApQAlApAeA3QAfA5APAzQASA3ADA8QADA1gLA8QgHAjgfA/QgbA2gHAWQgKAjgLAaIgIARQgFAJgBAIQAFAEAMAHQAsAiARAjQAaAyABAyQABA1gPA3QgLApgoAzQgiArgqAbQgzAfgnAFQgnAFgRgDQgTAhgNARQgJAMgjApQgeAhgVASQgWASgpAZIhCAkIgiATQgVALgRAGQguAPglAFQgqAFgqgGIgpgLIgLAoQgQArggAoQgdAkgvAfQguAfgxAOQg3ARguACIgLAAQgjAAg1gLgASInCQAJgNABgQQgLAQABANg");
	this.shape_1.setTransform(27.9815,-183.7633);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("ALNSxQgegHg6gdQg0gZgagSQgugigWgNQgbgPgugSQgSgHgXgNIgpgZQgogZgxgkQgNgKgQgRIgcgfQgLgMgVggQggARgRAHQg2AXg1AJQg3AJgygLQg5gOgkgQQgogTgcggQgSgVgfgXQgKgIgRgEQgPgEgKABQgFABgTAKQgWAKgTAGIg4AQQglALgcAHQhNAThGACQgjAAgzgIIhfgTQhOgQgfgMIgiALQhOAZhfAaQgWAGgxAPQgoANgZAGQhNATg2AEQg+AEhEgLQg2gJg/giQgqgWg4gsQgogggpgzQgngxgWgxQgYg1gNg3QgIgmgDgnQgEg2AIg5QAJg+APgqQAVg9AWggIA3hPIAxhFIAwhHQAYgjAlgfQAigdArgWQArgUApgGQA5gIAcAGIAYAEQABgDgDgKQgGglABgpQACggATgxQANgiAdgvQAYgoAkgfQAqgkAjgVQAqgYAvgRQAwgQAsgGQAVgDARAAIgCgYQgGgzAIg2QAIgxAXg1QAWgyAigsQAogzAjgdQAqgiAzgZQAwgYA3gOQArgLBAgCQA0gCA1AGQAtAGA3AQQAwAPAvAWQAyAYAlAbQAbATAzAsQAnAiAhAjQAiAkAZAyIAWAyQASAJAJAGQAgAXAHAHIACACIAAgEQgDgzAbgpQAbgrAsglQAmghAwgVQANgGAfgRQAcgPAQgHQA9gXAjgJQBFgUAogGQA6gKA8AFQBFAFA0AQQA6ARA4AfQAjATBBAyQAlAcAuBHQAmA6ARA8IAQA/QAIAjABAdQACA+gRAsQAJgLAPgMIAoggQAqglA0gTQA8gVA2gGQAygGBGALQA6AJA5AXQAvATA4AqQA0AmAjApQAjApAdA6QAdA6AOAzQAQA7AAA4QACA4gOA5QgFAYgNAcQgHAPgQAeQgbAwgJAbQgNAigMAbQgOAVgDANIARAMQAqAlAPAkQAXA0gBAxQgCA1gRA2QgNAogpAyQglAqgqAYQg0AdgmADQgqAEgOgEQgQAegOATQgMAQgfAkQggAkgTAPQgaAWgjAVQgZAPgpAWIgiASQgUALgSAGQgrAPgoAEQgoAFgqgHQgMgCgcgJIgLAoQgPAqggAoQgcAjgwAgQgtAdgzAPQg0AQgxACIgIAAQgkAAg2gNgASVn5QgNAVABAOQAJgNACgQIACgIIgBACg");
	this.shape_2.setTransform(25.0765,-185.6163);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("AKqSnQgVgFgZgKIgpgVQgwgYgcgSQgsgjgWgMQgUgLgzgVQgRgGgWgNIgogZQglgWgwglQgNgJgPgRIgbgeQgHgJgWghIgsAbQg1AcgwAMQg1ANgygIQg4gIgmgPQgpgPgggeQgWgWgfgTQgLgHgRgEQgPgEgLABQgGABgTAJQgWAKgSAFIg2ARQgkALgcAHQhHARhIADQgiABgygHIhdgSQhIgOghgMIgiAMQhMAdheAcIhHAXQgoAMgbAGQhQARg1ACQg+ADhFgOQg2gLg+gkQgtgZgzgtQgmgggpg1QgmgzgVgwQgYg3gLg2QgHgfgDguQgDg1AIg5QAJg8APgsQAUg7AXgiIA3hPIAxhGIAvhHQAWghAnggQAigeAqgUQApgUAqgGQAdgEAOAAQAYgCAQAEIAYAFQABgDgCgKQgJgpABglQAAggASgxQALghAdgxQAXgoAjggQAoglAjgWQAngZAwgTQAvgSAsgGQAXgDAQAAIgEgYQgHg0AHg1QAHgyAWg1QAVgyAggtQAkgxAmggQAngiA0gcQAxgZA1gPQAqgMBAgDQA1gEA0AFQAxAFA0APQAxAOAvAUQAvAWApAbQAhAWAuAnQAoAiAiAiQAhAjAaAxIAXAxQASAJAJAGQAgAWAIAHIADACIgBgEQgCgyAagqQAbgpAsgnQAmggAwgVQAOgGAegRQAcgPAPgHQA7gWAkgLQBGgUAmgHQA5gLA9AEQBHAFAyAOQA8AQA3AeQApAWA9AuQAlAbAwBFQAnA6ASA7IASA+QAJAjACAdQAFBTgdAzQgLAUABAPQAJgMAEgQQAEgQAFgGQALgPAWgQIApgfQArgjA2gSQA8gTA2gEQAzgFBEANQA7AMA3AYQAvAVA2ArQAzApAiApQAjAuAZA3QAbA5AMA1QAOA6gBA6QgBA2gPA6QgKAkgjA7QgfA0gJAXQgPAlgNAYQgPAUgDANQAEAFALAIQAoApAOAjQAUA2gDAwQgEA2gTA0QgPAogrAvQgmApgqAXQg1AagmACQgoADgPgFQgUAkgJAMQgKANghAnQgcAigVARQgVATgoAYQgYAPgpAWIgiASQgUALgSAGQgpAOgpAEQgpAFgpgIQgKgBgdgKIgKAnQgPArghAnQgcAkgwAeQgtAdgyAPQg1APgwABIgFABQgkAAg4gPg");
	this.shape_3.setTransform(22.2252,-187.4439);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("AKHSeQgVgFgYgLIgpgVQgzgagWgQQgrgigVgLQgWgMgvgTQgWgIg3giQgggUgygmQgMgJgOgQIgZgdQgIgJgTggQgfAYgIAFQguAggxAQQg1ARgwgEQg3gEgogMQgrgNgigbQgXgSgigTQgMgHgRgDQgQgEgLABQgHABgTAIQgXAKgQAFQhQAagkAJQhHAShEACQghACgwgHQgYgDhCgMQhGgNghgMIghAOQhZAlhOAZIhIAYQgmALgfAGQhLAQg7AAQhCABhCgQQg2gNg9glQgrgbgzguQglghgng2QgkgzgVgxQgYg4gKg2QgHgggCgtQgDg1AJg6QAJg7APgtQAVg8AWggIA2hQIAwhIIAvhGQATgdApgkQAigcAqgVQApgTApgGQAcgEAOAAQAZgCAQAFIAXAEQABgCgDgLQgJgmgBgnQgBgjAQgvQANgkAZgvQAXgpAhghQAogmAigXQAogaAtgTQAqgSAxgIQAVgDARgBIgEgYQgJgzAGg1QAFgwAVg3QASgwAhgxQAlgyAjggQApgkAxgcQAtgZA4gRQApgNBAgFQA2gFAzAEQAtADA4AOQAvAMAxAUQAtASAtAdQAdASAzApQAnAfAkAjQAhAhAcAyIAXAwIAbAOIApAcIAEAEIAAgHQgEgxAcgqQAdgsAqgkQAlgfAwgVQAPgHAdgQQAcgQAPgGQA3gWAmgMQBOgXAegGQA4gLA+ADQBFAEA0ANQA8AQA3AcQAkASBDAwQAmAbAxBEQAoA3AUA8IAUA9QAKAjACAdQAEAmgDAdQgEAlgPAeQgKAVABAOQAJgLAGgPQAGgPAGgGQALgOAXgQIAqgdQAtgiA1gPQA8gSA4gCQAzgCBDAOQA8AOA1AaQAsAVA3AuQAxApAgAsQAiAuAXA4QAZA9ALAzQALA6gDA6QgDA5gRA3QgMAlgkA4QgiA1gJAUQgNAdgSAgQgRAUgEANQAEAFAKAJQAmAqAMAkQASA1gFAxQgHA3gVAyQgQAngsAuQgnAogrAVQgzAZgpAAIgdABQgOgBgKgEQgRAggLAPIgqA0QgiAngOAMQgWAUgmAXQgVANgsAYIgiATQgVAKgRAGQgsAOgmAEQgrAEgmgIIgmgMIgKAnQgOAqghAoQgcAjgwAeQgtAdgzAOQgyAOgzABIgEAAQgjAAg5gPg");
	this.shape_4.setTransform(19.3446,-189.3235);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("AJjSUQgdgIg3gdQgygbgVgPIgfgXQgTgPgMgGQgUgLgvgTQgQgGgWgMIglgXQgngYgngfQgLgJgOgQIgXgdQgKgLgPgcQgbAagHAGQgtAkgrASQgzAVgwABQg4AAgogJQgrgJgmgZQgXgPgmgTQgbgMggACQgIABgSAHIgnAPQhbAdgVAFQhEAThEACQggACgvgGIhXgOQhAgKgkgMIggAPQhcAqhIAZQhVAfg5ALQhJAOg/gBQhFgBhAgSQg2gPg8gnQgrgbgygxQgngmgjgzQgkg1gTgwQgWg3gLg3QgGgkgCgpQgCg3AJg4QAJg8APgsQAVg9AWggIA1hQIAwhJIAuhHQASgcAqgjQAkgeAngSQAqgUAogFQAbgEAOgBQAYgBAQAEIAXAFQABgEgDgJQgLgogCglQgCghAPgxQALgjAZgxQAWgqAgghQAogoAggXQAogdAsgTQAqgSAvgJQAZgEANgBIgFgYQgKgxAFg3QAFgxATg2QARgyAggwQAhgyAkgiQAlgjAzgeQAwgcA0gRQApgNBAgIQA4gFAwACQAyADA0ALQAvALAyATQAvASArAaQAfATAzAmQAtAjAfAdQAiAhAdAxIAYAvQASAIAIAGQAgATAJAHIAHAGIgBgKQgCgwAbgqQAbgpAsgmQAoghAtgTQAPgGAcgQQAdgRAOgGQA8gYAhgKQBGgWAlgIQA3gLA+ABQBGADA0AMQA7APA5AcQAmATBCAtQAmAbAyBCQAqA3AVA6QAQAtAFARQALAiADAcQAKBRgWA2QgJAUABAPQAJgKAIgPQAHgNAGgHQAMgNAYgPIArgcQAuggA2gNQA+gQA2AAQAzgCBDASQA4AOA3AdQAuAYAzAuQAxAsAdAsQAfAtAXA6QAXA9AIA1QAKA6gGA6QgFA4gTA2QgNAlgnA3QgjAzgLAVQgQAhgSAaQgSAUgFANIAOAPQAkAtAKAkQAQA3gHAvQgJA3gWAxQgTAngtArQgoAogrASQgzAXgpAAIgcAAQgPgBgJgEQgTAigJAMQgGAJgiAqQgfAlgQAPQgUASgoAZQgbARgmAUIgiATQgUAKgSAGQgpANgpAEQgnADgpgIQgMgDgZgKQgFAbgEAMQgOAqghAoQgdAjgwAdQguAegyAMQgwANg0ABQgoAAg4gQg");
	this.shape_5.setTransform(16.4785,-191.2017);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("AJBSKQgUgGgYgLIgngVQgwgagVgPIgfgXQgRgPgMgGQgUgKgugSQgQgGgUgLIglgXQgjgVgoghQgKgIgNgQIgWgbQgKgMgMgbQgRAWgNANQgoAngpAWQgwAYgxAFQg3AEgpgGQgqgFgqgWQgXgNgqgRQgbgLgiACQgJABgSAHIgnAPQhVAcgYAGQhCAThCACQgfACgugFQgZgDg8gJQg+gJgjgLIgeAQQhjAxg+AYQhRAfg/ALQhKANhAgDQhAgChFgUQg1gQg8gqQgpgcgygyQgngnghg0QghgxgVg1QgVg3gKg4QgGgggCgtQgBg4AIg3QALg/AOgpQAVg9AWghQAigyASgfQAQgaAfgvIAthHQATgdApgiQAigcApgUQApgTAogGIApgEQAYgBAPAEIAXAFQABgDgEgKQgMgmgDgnQgDggAOgzQALglAXgvQAVgrAfghQAjgoAigZQAngdAsgVQAqgTAvgKQARgEAUgBIgFgYQgLgyADg2QADguASg6QASg1AdgtQAig1AighQAjgjAzggQAwgdAzgSQAngOBBgJQA5gIAvACQAvABA3ALQAsAIA1ATQAvAQAtAaQAgASAzAlQAuAiAeAcQAkAgAdAwIAZAvQATAHAHAFIAqAaIAIAHIgBgMQgCgvAbgrQAdgrArgjQAmggAugTQAPgGAcgRQAdgQAOgGQA3gXAkgMQBNgYAegHQA3gMA+ABQBDABA2AMQA7ANA6AbQApAUBAArQApAcAyA/QApA0AYA8IAXA8QAMAiAEAdQAGAmgBAcQAAAlgMAfQgHAVABAPIASgYQAIgMAHgHQANgMAZgOIAsgbQAwgeA2gLQA8gOA4ACQAyAABDAUQA5AQA1AfQAsAZAyAwQAuAsAeAuQAfAyASA4QAWBAAFAyQAIA7gIA5QgGA4gWA2QgPAlgoA0QgpA4gJAPQgRAfgUAbQgTATgFAMIAMAQQAiAvAJAkQAOA3gJAvQgKA1gZAyQgTAoguAoQgpAmgsASQg0AVgogBIgcgBQgOgBgJgFQgPAdgMARQgIANgfAmQgeAkgRAQQgVATgmAZQghAUggARIgiASQgVAKgRAGQgsAOgmACQgoADgngJQgOgDgXgKIgIAnQgOAqghAnQgcAigwAeQguAcgyANQgzANgxAAQglAAg6gRg");
	this.shape_6.setTransform(13.5763,-193.0875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("AJ8STQgkgBg6gRQgUgGgXgLIgmgVQgugZgWgQIgdgXQgRgOgMgGQgTgKgtgRQgQgFgUgMIgjgWQgggUgoggQgKgIgLgQIgVgaQgIgLgMgbQgOAYgLANQgkArgnAYQguAdgvAHQg1AJgsgDQgtgDgqgTQgVgJgvgQQgdgJgiADQgKABgSAHIgnAOQhAAXgqAMQg8ARhEAFQgfACgsgFIhTgKQg+gIgggKIgeARQhZAyhEAdQhKAfhIAMQhHALhFgEQhCgEhDgXQg2gSg6grQgrgfgugyQglgmgig2Qggg0gUg0QgUg5gJg2QgGgjgBgrQgCg0AJg7QALg+AOgqQAWg/AUgfQAggvAVgjQAPgaAfgwIAshJQARgZArgkQAjgcAngTQArgTAlgFQA3gHAZAGQAPADAHACQABgCgBgEIgCgHQgOgmgEgmQgEghAMgyQAKglAWgwQAVgtAdghQAjgpAggaQAogfAqgVQApgUAugLQAVgEAQgBIgFgYQgNgwACg3QACgxARg4QAQg0AcgvQAgg0AigjQAlgmAwgfQAsgdA1gVQAogPA/gKQA5gJAvAAQAxAAA1AJQAvAIAzARQAvAOAtAZQAeAQA3AlQAtAgAhAcQAlAiAdAsIAZAvIAcALIAoAZIAMAKIgBgQQgCgxAbgpQAcgpAsgkQAlgeAvgUQAPgGAcgRQAcgQAOgGQA1gWAmgNQBKgZAggHQA3gNA+AAQBEABA1AKQA7ANA7AaQApATBBAqQAoAaA0A/QArAzAZA8IAZA7QAMAiAFAdQAQBOgRA4QgGAWABAOIATgXQAJgKAIgHQAOgMAZgNIAugZQAwgcA4gKQA/gKA1ACQAyADBDAWQA3ASA1AgQArAaAwAzQAuAvAaAtQAcAvASA9QATA+AEA1QAFA+gJA2QgJA2gYA2QgPAigrA2QgsA2gJAOQgSAegWAbQgUASgGAMIAMARQAgAyAHAiQALA2gKAxQgMA2gaAvQgUAmgwApQgqAkgsARQg0ATgogCQgmgCgNgGIgZAtQgIANgfAmQgcAjgSARQgWAVglAYQgbARgmAVQgwAZgYAIQgqANgnACQgnADgngKQgFgBgfgNQgEAagEANQgNAoghApQgcAigxAeQgrAbg1ANQgxAMgvAAIgEAAg");
	this.shape_7.setTransform(10.6893,-195.049);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,255,255,0.498)").s().p("AJZSTQgngBg2gSQgUgGgWgLIgmgVQgtgYgWgQIgcgXQgQgOgMgFQgYgLgngPQgSgHgzgfQgegTgmggQgJgIgMgPIgTgaQgHgJgLgcQgJAYgLAQQgeAtgmAbQgvAhgsAKQgyAMgvABQgtAAgsgPQgegLgpgKQgegHgjAEQgLABgSAHIgmAPQhKAageAJQg8ARhBAEQguAEhrgOQg8gHgggJIgdASQhbA5g/AcQhFAfhOANQhFAKhIgGQhCgGhDgZQg2gUg5gsQgpgggvg0Qgjgngig3Qggg0gSg0QgUg7gJg1QgFghgBgtQgBgyAJg9QAJg6AQgvQAWhAAUgeQAigzASggQAPgbAegwQASgfAagqQAQgaAsgiQAkgeAlgRQArgTAkgFIAogEQAYgBAPAFQAPACAHADQABgDgEgKQgOgkgGgpQgFghALgyQAJgnAVguQATgtAdgjQAjgrAegZQApgiAngUQAogVAugMQARgEAUgCIgGgYQgOgwABg2QABgyAPg3QAQg1AbgvQAeg2AhgjQAjglAwgiQAugfAygUQAlgQBBgMQA2gKAygCQAwgBA2AIQAvAHAzAPQAuANAvAYQAeAOA4AkQAqAcAlAfQAlAeAfAuIAaAtQASAHAJAEQAhASAIAFQAJAGAHAHQgCgKAAgKQgCgwAcgpQAdgqArgiQAmgeAugTQAPgGAcgRQAcgQANgGQA2gXAkgMQBSgcAXgGQA4gOA9AAQBEgBA2ALQA6ALA8AaQAsATA/AoQApAaA1A+QArAxAcA7QAkBPAJArQARBNgNA5QgFAWABAOQAZgbAPgLQAPgLAZgMIAvgXQAxgaA5gIQA+gJA3AFQAzAFBAAYQA2ATA1AjQAnAaAxA2QAsAwAZAvQAbAyAOA7QARA+ACA1QADA6gLA6QgMA2gZA0QgRAjgtAzIgfAjQgQATgJANQgUAdgXAaIgPAOQgJAIgEAHIAMARQAeAzAGAjQAJA4gMAuQgMAygcAyQgWAmgwAnQgqAjgtAQQg0ATgogEIgcgCQgOgCgIgFIgZAtQgKAQgcAjQgdAlgQAQQgYAWgjAXQglAXgcAOQgtAZgcAIQgpAMgnACQgoACgmgKQgMgDgXgMQgDAbgEAMQgMAngiAqQgbAigxAdQgvAdgxALQgvALgqAAIgLAAg");
	this.shape_8.setTransform(7.8208,-197.8208);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,255,255,0.498)").s().p("A23SoQhEgIhBgaQg1gVg5gvQgngfgwg3Qgkgrgfg1Qgfg2gRgzQgUg5gIg3QgFghgBguQAAgzAJg8QAKg/APgrQAVg/AUgfQAggvATglQAPgbAegxQAMgVAfg0QAKgQARgRQAIgIAZgUQAkgbAlgRQAogUAmgEIAogEQAXgBAPAEIAWAFQABgDgFgJQgPgmgHgnQgGgfAKg0QAIglATgxQATgtAbgkQAggrAfgbQAogiAngWQAlgVAxgNQAMgEAYgEIgHgXQgPgxAAg1QAAgzAOg2QAOg1AagwQAdg2AggkQAjgnAvghQAqggA0gXQApgRA8gNQA3gMAwgCQAsgCA6AGQAwAFAzAOQAzAOArAUQAoATAvAeQAuAdAiAbQAmAfAfAsIAcAtIAbAKQAiAQAIAFQAKAHAIAIQgDgLAAgMQgBgyAcgnQAdgqAsgiQAngeAtgSQAPgGAbgQQAcgRANgFQAzgXAngNQBFgZAjgJQA4gPA8gBQBCgBA4AJQA9ALA6AZQAoARBEApQArAaA1A7QArAvAeA9QAmBOALAqQATBMgLA6QgDAUABARQASgUAZgQQAPgKAbgMIAwgVQAzgYA4gGQA/gGA2AHQAzAGBAAaQA2AXAyAjQAoAdAuA2QApAxAYAxQAYAyAOA8QAOA+AAA2QAABAgNAzQgOA4gbAxQgTAkguAwQgwAxgLAPQgWAdgXAYQgWAQgHAMIAKARQAPAbAFANQALAZADAWQAHA3gNAwQgPA1gcAtQgYAmgwAmQgrAigtAPQg0ARgogEIgbgDQgOgCgJgFQgSAkgGAJQgIANgdAmQgeAngPAOQgVAVgmAYQghAVggARQguAYgbAIQgpAMgnAAQgoABglgKQgKgDgXgMQgDAagEAMQgMAqghAnQgbAigxAdQgtAcgzALQgvAMg0gBQgmgBg3gTQgUgGgWgLIglgVQgpgXgYgRIgbgWQgQgOgLgFQgagLgkgOQgVgHgugdQgbgRgnghQgIgIgLgOIgSgZQgHgLgJgZQgGAZgJAQQgaAwgkAeQgsAjgtAOQgvAPgyAFQgsADgugMQgagIgwgIQgdgFgmAFQgMABgSAHIgmAPQg5AWgsAOQg7ARg/AFQgdADgqgDIhOgHQg8gGgdgIIgcATQhZA9g9AdQhEAhhRALQglAFgnAAQghAAghgDgAAtr5QADgEgHgJIAAAAIAEANg");
	this.shape_9.setTransform(4.8987,-198.2024);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,255,255,0.498)").s().p("A20TAQhCgJhDgcQg0gWg5gwQglgggwg5Qgkgsgeg1Qgeg2gRg1QgTg5gIg3QgEgjgBgsQAAg1AJg7QAKg/APgrQAUg+AVghQAcgqAWgrIAshNQAOgbAdgvQAJgQARgQQAIgIAZgUQAigaAngSQAogTAlgEIAngEQAXgBAPAFIAWAEQAAgCgBgEIgDgGQgQgjgJgpQgGghAIgyQAHglATgzQASgsAaglQAggtAdgbQAkgiAogYQAngXAugNQARgFAUgDIgIgXQgQgygBg0QgCgyAOg3QAMg2AZgwQAcg2AfglQAfgkAxgmQAsgiAxgWQAkgRBAgQQA4gNAugEQAugEA4AFQAtAEA2ANQAwALAvAVQAiAOA1AgQAqAYAoAeQAmAdAhAsIAcArIAcAKIAqAUQAOAJAIAKQgDgOAAgQQgBgvAdgpQAegqArghQAmgdAugSQAPgGAbgQQAcgQANgGQA3gXAhgMQBNgcAbgIQA1gOA/gDQBDgCA3AJQA7AKA9AYQAtASBAAmQApAZA4A7QAtAvAeA7QAnBJANAvQAWBMgIA6QgDAUABAQQAMgMAMgIIAWgNQARgKAbgLIAxgTQA1gWA4gDQA+gEA3AIQA0AJA+AcQA3AaAvAkQApAfAqA3QApA1AUAuQAXAzALA9QAMBBgCA0QgCA9gPA1QgRA3gdAxQgTAhgxAvQguArgPATQgYAcgYAXQgXAPgHALIAJASQAPAdAEAMQAKAZACAWQAGA4gOAvQgQAzgeAuQgYAmgxAkQgtAigtAOQgyAQgqgFIgbgDQgOgCgIgFIgXAsQgKARgbAjQgeAngPAOQgYAXgiAWQggAVgiARQguAYgbAHQgpALgnAAQgoAAgkgLQgJgCgXgNQgDAagDAMQgLAnghAqQgaAggyAeQguAcgyALQgxALgygBQgmgCg2gSQgUgHgWgLIgkgVQgtgZgSgOIgbgWQgPgOgLgEQgZgLgjgNQgVgHgtgcQgggUgfgcQgIgIgKgOIgQgYQgJgMgGgXQgCAWgIAUQgYA0ghAfQgqAmgsASQgxATgvAHQgvAGgtgJQgXgFg1gGQgZgDgsAHQgMABgSAIIgmAPQg2AWgtAOQg3AShAAGQgyAEhegJIgrgEQgZgDgTgFIgbAUQhZBCg5AeQhBAihWALQgeAEggAAQgnAAgqgGgAAesUQADgFgHgIIgBgCIAFAPg");
	this.shape_10.setTransform(1.9833,-198.3433);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,255,255,0.498)").s().p("A2wTZQhCgKhDgfQg1gYg3gxQgpgkgrg3Qgkgugcg1Qgdg1gRg2QgSg4gIg5QgEgegBgxQAAgyAKg/QAJg6APgwQAWhBATgeQAZgmAZgwQAOgcAdgyIAqhLQAJgQARgQQAKgJAXgSQAigaAmgRQAqgUAjgEIAngEQAXgBAOAFIAWAFQABgDgFgKQgUgpgHgiQgIggAHg0QAHgpARgvQAQgsAagnQAdgsAegdQAmglAlgXQAjgXAxgPQAPgFAVgDIgIgXQgRgwgDg2QgCgyAMg3QALg2AYgwQAcg5AdgjQAggpAugjQApghAygaQAkgSA/gRQA0gNAygGQAugFA4ADQAvADA0ALQAwAKAvATQAmAQAzAcQAwAbAjAZQAkAaAkAtIAdArIAbAIQAjAOAJAFQASAKAKANQgFgRAAgTQAAgwAcgoQAfgqAqgfQAogdAsgRQAQgGAagQQAcgQAMgGQA4gXAggMQBDgaAkgLQA4gPA8gDQBEgDA3AIQA9AKA7AXQAqAQBEAnQApAXA6A7QAtAuAgA6QApBKAPAtQAXBLgFA7QgBAWABAOQAMgLAMgIIAZgMQARgJAcgJIAygSQA2gTA5gCQA+gBA3AKQAxAKA/AfQA1AbAvAnQAmAfApA6QAnA2ATAwQAUAyAJA+QAKBCgEAzQgFBAgRAyQgRA1ggAxQgWAigyArQg0AvgLAMQgZAbgaAWIgQAMQgKAHgFAGIAJASQAOAdAEANQAJAZACAWQAEA5gPAtQgQAyggAvQgZAkgyAlQgqAggwAOQg1APgngFQglgEgMgHQgPAggIAMQgKARgbAjQgcAngQAPQgYAXgiAWQgiAVggARQgqAWghAIQglAKgqgBQgnAAgjgMQgIgDgYgOQgCAagDANQgKAoghAoQgaAggyAfQgvAbgxALQgxALgxgCQgngCg1gTQgTgGgWgMIgkgUQgsgagRgNIgZgWQgPgNgLgEIg7gWQgUgHgsgbQgcgQgggeQgNgNgTggQgHgLgGgWQAAAXgHAUQgUA3ggAgQgoApgrAVQg0AXgrAJQgtAJgwgHQgYgDg2gCQgWgCgwAJQgMACgTAIIglAQQg4AYgpANQg0ARhAAHQguAFhegHQg8gEgYgGQgLAIgPAOQhSBCg9AjQg/AjhZAKQgaAEgdAAQgqAAgvgIgAAQsvQACgFgGgIIgDgEIAHARg");
	this.shape_11.setTransform(-0.9529,-198.4327);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(51,255,255,0.498)").s().p("A2sTyQhCgLhDghQg1gag2gyQgngkgrg5Qgkgvgbg1Qgcg2gRg3QgRg0gIg9QgEgiAAgtQAAgvAKhDQAJg8APgvQAWhCATgdQAZgoAYgvQANgcAdgzQALgWAeg1QAJgRARgPIAhgbQAkgbAkgQQAqgTAigEIAmgEQAXgBAOAFQAPACAGADQABgDgFgKQgUgogJgjQgIghAGgzQAEgoARgwQAPgsAZgoQAbgsAegfQAkgmAlgYQAkgYAwgQQARgGASgDIgIgWQgTgygDgzQgDgxAKg5QAKgyAXg0QAag3AdgnQAegoAugmQApgiAxgaQAjgTA/gTQA2gPAvgHQArgFA6ABQA1ADAvAIQAwAJAwASQAmAPAzAaQAtAYAnAaQAoAcAhApIAeAqIAcAHQAgAMALAGQAYAMAKARIABABQgIgWABgXQABgwAcgoQAggqAqgeQAogdArgQQAQgGAagQQAcgRAMgFIBXgjQBNgeAagHQA0gQBAgEQBEgEA2AIQA+AJA7AWQAtARBBAkQAqAXA7A6QAwAuAgA5QAsBMAOAqQAaBKgDA7IABAlQAMgLAOgHIAagKQATgJAcgIIAzgQQA3gRA5ABQBAABA1AMQAzANA8AhQA0AcAuApQAkAgAoA7QAmA6AQAuQATA1AGA9QAGBBgFA0QgHA/gTAyQgUA0ghAwQgYAggzAqQg3AsgLAMQgbAbgZATIgSAMQgJAGgFAGIAIASIARArQAIAaABAVQAEA4gRAuQgRAzghAtQgaAkgyAkQgtAggtAMQgzAPgqgFIgbgEQgOgEgHgEIgXAtIgkA0IgVAbQgMAQgLAKQgYAYgjAWQgdATgmAUQgpATgiAJQgoAKgngCQgmgCgjgMQgHgDgJgGIgOgJQgBAagDAMQgJAnghAqQgaAfgyAfQgtAbgyALQgxALgxgDQgmgBg1gUQgZgIgzgeQgrgZgRgNIgZgVQgOgNgKgEIg6gUQgTgHgrgaQgbgQgfgdQgIgHgHgMIgPgXQgGgLgGgWQACAWgGAWQgQA5gfAjQgmAsgqAXQgxAZgtAMQguAMgwgEQgUgBg7ABQgUAAgyALQgNADgTAIIglARQguAVgxARQg0ASg8AHQgsAFhdgEQg6gDgYgFIgZAXQhRBIg6AiQg9AkhcAKQgWADgXAAQguAAg2gKgAABtKQACgEgEgJIgHgKIAJAXg");
	this.shape_12.setTransform(-3.9163,-198.5504);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(51,255,255,0.498)").s().p("A2oUKQhDgNhCgiQg0gbg1g0Qgqgogng3Qghgrgdg7Qgbg2gRg3QgRg6gGg4QgFgkABgsQAAguAKhEQAJg+APgtQAWhCATgeQAbgrAVgtQANgcAcg0IAphMQAJgQARgPIAhgaQAigbAlgRQAqgSAhgEIAmgEQAWgBAOAFIAWAFQABgDgGgKQgVgmgKglQgKghAFgyQAFgrAPgvQAOgsAYgpQAcgwAagcQAjgmAlgaQAjgZAvgQQAQgGAUgEIgJgWQgUgygEgzQgEgyAJg3QAIgzAXg0QAXg3AegoQAegpArgmQArglAtgZQAmgVA8gTQAwgQA0gJQAwgIA1ABQAsAAA3AJQAuAGAzARQAjANA3AaQAxAYAkAYQAoAaAjApIAeApIAcAGQAiAMAKAEQAYALALARQAEAHAHAPIAKAXQACgEgFgJQgXgkACgpQACgxAdgnQAfgpArgeQAngbAsgQQAQgGAagQQAbgQAMgFQA2gYAhgMQBNgfAZgHQA1gRA+gEQBFgEA2AHQA6AHA/AWQAuARBCAjQAtAZA5A2QAwAtAjA5QAsBHARAuQAbBJAAA8IACAlQAMgLAQgGIAbgJQAUgIAdgIIA0gNQA2gOA7ADQBCADAzAPQAzAOA6AjQAzAfAsAqQAjAiAlA8QAjA6APAwQARA1AEA9QAEBCgHAzQgJA+gVAyQgWA0gkAuQgZAgg0AnQg3AogNANQgdAagaASIgRAKQgKAGgFAGIAIASIAPAsQAJAaAAAVQACA4gRAuQgTAzghAsQgbAkgyAjQgtAfguAMQg1AOgogFIgbgEQgNgDgIgFQgNAcgJARQgMAUgZAgQgeApgNANQgWAWglAZQghAVgjARQgoATgjAIQgqAJglgDQgngCghgOQgHgDgJgGIgNgJQAAAZgDANQgIAlghArQgaAhgyAdQgsAbgzALQgxALgxgDQglgCg1gUQgTgGgVgMIgjgUQgngXgTgOIgXgVQgOgNgKgDIg5gTQgNgEgRgJIgegRQgegSgZgaQgJgIgUghQgGgJgFgWQAEAXgFAWQgNA8geAkQgkAugqAZQguAcgvAPQgvAPgvgCQgTAAgXABIgmADQgXACgvAOQgNADgTAJIglASQg2AZgmAOQgwASg+AIQgwAHhVgDQg0gBgbgFIgYAYQhSBOg2AhQg8AmheAJQgSACgTAAQgxAAg8gMg");
	this.shape_13.setTransform(-6.8606,-198.6559);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(51,255,255,0.498)").s().p("A2kUiQhDgPhBgkQgygbg3g2Qgngogpg5Qgigxgag2Qgag2gQg5QgQg2gHg8QgFgmABgrQAAgvAKhDQAJg7AQgxQAVhBATgfQAbgrAVgvQANgcAcg1IAnhMQAJgQARgPIAhgaQAkgaAjgRQApgRAhgFIAmgDQAWgBAOAEIAVAFQABgCgCgEIgEgGQgXgpgKgiQgKggADgzQAEgqAOgwQANgrAXgrQAbgxAZgdQAgglAmgdQAggXAygUQASgGARgEIgJgWQgVgugGg2QgFgxAIg4QAIg1AUgzQAYg5AbgnQAcgpAsgoQAmgjAwgdQAmgWA6gVQAxgRAygKQAygIAzgBQAwgBA0AGQAvAGAyAQQAqANAxAXQAwAWAmAXQApAaAjAnIAfAoIAcAFQAiAKAKAFQAYAKAMARQAFAHAHAOIALAWQACgEgFgJQgVgjABgrQADgwAegmQAfgpAsgdQApgbAqgPQAQgGAZgPQAcgRAMgFQA6gaAbgKQBQggAWgHQA3gRA9gFQBEgFA2AHQA+AHA8AVQAxARBAAhQAsAYA7A2QAxAtAkA4QAwBLAQApQAcBFAEBAIADAkQAMgKARgFIAdgIQAUgHAegHIA1gLQA4gMA7AFQBAAGA0ARQAyARA5AlQAxAfArAtQAhAiAkA/QAgA5AOAzQAPA4ACA6QABBCgJAzQgMA/gWAwQgYAxglAuQgaAgg3AkQg4AmgOAMQgZAWgfAUIgSAKQgKAFgFAGIAIASIAOAsQAHAaABAVQABA3gTAvQgUAzghAsQgbAigzAjQgvAfguAMQg0ANgogGQglgFgLgHQgNAcgJARQgJAPgbAlQgdAogOAPQgZAZgjAWQghAWgiARQgnATglAHQgoAIgngEQgngDgggOQgHgDgJgHIgMgKQAAAagCAMQgHAmgiArQgZAggyAdQguAbgxALQgzAKgvgDQgigCg3gUQgSgHgWgMIgigUQgngXgRgOQgIgGgOgPQgMgMgLgCIg2gRQgVgGgngXQgcgQgZgZQgJgIgTgfQgFgIgEgRQAEATgDAWQgLA+gcAmQglAxgnAaQguAfgtARQgtAQgxABQgUAAgXADIgmAGQgTACgzARQgNAFgSAJIglATQg2AbgkAOQgzATg4AJQgwAHhRAAQg7gBgTgDIgXAZQhOBQg2AkQg5AnhjAJIgeACQg0AAhAgPg");
	this.shape_14.setTransform(-9.8234,-198.7457);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(51,255,255,0.498)").s().p("A2fU6QhEgQhAgmQg0gegzg2Qgpgqgmg4Qghgwgag5Qgbg7gOg0QgRg5gGg6QgDgfAAgyQAAgsALhHQAIg5AQgzQAVhDATgeQAagqAVgxQANgdAbg1QAKgXAdg1QAIgQARgPIAhgaQAjgaAjgQQArgTAfgDIAlgEQAWgBAOAFQAPABAGADQABgDgGgJQgYgngLgjQgLgiACgyQADgoANgyQANgsAVgrQAZgxAageQAigqAigaQAigaAvgSQATgIAQgEIgKgWQgVgugHg1QgGguAGg7QAHg2ATgyQAVg3AcgqQAdgrApgnQAognAsgbQAigWA9gXQAzgTAvgLQAugJA3gDQArgCA4AFQAwAEAxAOQAmAMA2AWQAsASArAZQApAYAlAmIAgAoIAcAEQAiAJAKAEQAZAKAMAPQAFAHAHAOIANAWQABgGgFgHQgUgkACgqQAEgxAeglQAggpAsgcQAngaAsgPQAQgGAZgPQAcgRALgFIBVgkQBKgeAcgJQA0gSA/gFQBBgGA6AGQA7AGA/AVQAzARA/AgQAtAXA8A1QAwArAnA4QAwBIATAsQAeBEAGBAIAEAlQAMgJASgFIAfgHQAfgJBLgMQA4gJA7AHQBBAIAzAUQAxASA4AoQAvAhAqAvQAhAlAgA+QAeA5AMA0QANA2gBA9QAABBgMA0QgNA+gZAvQgaAxgnArQgbAfg4AiQg8AmgMAJQgeAXgbAQIgSAJQgKAFgGAGIAHASIAOAsQAHAbAAAVQgBA4gTAuQgTAvgjAuQgcAjg0AiQguAeguAMQg0ANgpgHQglgFgLgHQgOAggHANQgIAPgcAnQgeAqgNANQgYAZgjAXQgkAXggAPQgmASgnAIQgoAHgngEQgngFgfgOQgHgEgIgGIgMgLQABAagCAMQgHAmgiAqQgaAhgxAcQgsAbgzAKQgtAKg0gEQgkgDg0gUQgWgIgzgfQgmgXgQgNIgUgUQgLgMgKgCIg2gOQgRgFgpgVQgcgRgYgWQgJgJgRgcQgEgHgEgMQAEASgCAUQgHA+gcApQgkAzgmAcQgvAigsASQgsATgyACQgTABgXAEIgmAIQgQADgUAIIghANQgMAFgTAKIgkAUQg3AdghAOQgwATg4AKQgtAIhRADQgyABgagDIgWAZQhIBTg4AnQg6AphjAHIgZABQg2AAhEgRg");
	this.shape_15.setTransform(-12.8214,-198.8644);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,255,255,0.498)").s().p("A2aVSQhEgSg/gnQg0gggzg3Qglgogog8Qgjg1gXg1QgZg4gPg4QgPg1gHg/QgEgjABgtQABgxAKhDQAJg+APgvQAVhDATgfQAZgpAVgyQANgdAag2IAmhNQAIgQASgPIAhgZQAjgaAigQQApgSAggFIAlgEQAWgBAOAFQAOACAGADQABgDgGgKQgYgmgNgjQgMghACgzQABgoANgyQAMgtAUgrQAXgwAZghQAhgpAigcQAggbAwgTQATgIAQgEIgLgWQgWgugIg0QgIgxAHg4QAFg1ASg0QAVg5AagpQAdgtAmgmQAmgnAtgeQAkgXA6gYQA0gVAtgLQAugLA2gEQAtgDA2ADQAxAEAwAMQAgAIA9AXQA0AVAkAUQAqAXAlAlIAhAmIAcADQAiAIALAEQAYAIANAPQAGAHAIANIANAVQABgFgEgIQgUglAFgpQAEgwAfgmQAhgoArgbQAngZAtgPQAQgFAZgPQAbgRALgFIBUgkQBRghAVgHQA4gTA7gFQBBgGA6AFQA+AGA8AUQAvAOBEAiQAtAWA9A0QAxAqAoA4QAzBIATArQAgBEAIBAQAEAXABAOQANgJASgEIAggGQAjgIBKgJQA3gGA9AKQBBALAyAVQAvAUA3AqQAtAhAqAyQAfAmAeBAQAcA8AKAyQALA5gDA7QgDBAgNA0QgQA7gbAwQgdAygnAoQgcAdg5AhQg5AegRANQgcAUgfARIgSAIQgKAFgGAFIAHATIAMAsQAHAbAAAVQgCA3gUAvQgVAxgjAsQgcAjg0AhQguAdgvAMQg1AMgngHQglgFgLgHQgMAdgJARQgKATgZAiQgcApgPAQQgaAaghAWQgkAYghAPQgoASgmAHQgoAHgngGQgmgFgfgQQgIgEgSgRIAAATQABAMgBAHQgHAnghApQgZAfgyAeQguAagxAJQgvAKgygEQgmgEgygUQgRgIgVgMIgggUQghgTgSgQIgTgVQgLgLgJgCQgQgCgkgJQgRgDgngUQgcgOgXgWQgJgIgRgaQgEgGgCgJQADARgBATQgGBBgaApQgiA1gnAeQguAkgrAUQgtAUgxAEQgUACgWAFIgmAKQgQAEgTAJIggAPQgNAFgTAMIgiAVQgxAdglAQQgxAVg0AKQgvAJhMAFQg0ACgWgCIgWAaQhEBWg4ApQg6AqhkAHIgTAAQg4AAhIgTg");
	this.shape_16.setTransform(-15.8028,-198.9714);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(51,255,255,0.498)").s().p("A2WVpQhEgUg+goQg0ghgxg4Qgngrglg6Qgig2gXg2QgYg2gQg7QgPg4gGg8QgDgjABguQAAgtALhHQAJg/APgvQAWhGARgcQAagrAUgyQANgdAag2IAlhOQAHgQASgPQAKgIAXgQQAkgbAhgPQAqgTAegEIAlgEQAWgBANAFQAOACAHADQAAgDgGgKQgZgkgOgkQgNgjABgxQAAgsAMgwQAMgvATgqQAVgvAZgiQAfgqAigdQAggbAugVQAQgHATgFIgLgWQgXgtgJg0QgIgzAFg2QAEg3ARgzQATg4AZgqQAagqAogrQAlgoAsgeQAjgZA5gYQA0gXAsgMQAugMA1gGQAugEA2ACQAxACAwALQAmAJA4AUQAuAQArAWQAnATApAmIAiAlIAcACQAhAHAMADQAZAIANAOQAGAHAIAMIAOAUQABgEgEgJQgSglAFgpQAGgxAfgkQAigoArgbQArgZApgNQAQgFAZgPQAcgSAKgEIBUgkQBHgeAdgKQA2gTA9gGQA/gHA8AFQA7AFBBATQAxAPBCAgQArAUBAA1QA0AqAoA3QAzBHAWArQAgBCAMBCIAGAkQAMgIAUgDIAhgFQAugJBBgEQA6gDA7AMQBCAOAwAXQAwAWA0AsQAtAlAmAxQAdAmAdBCQAZA6AJA2QAIA1gFA/QgGBDgOAwQgSA7gdAuQgfAygoAmQgeAcg6AeQhBAigKAHQgbARggARIgTAHQgLAEgFAGIAGASIAMAtQAGAbgBAVQgCA3gVAvQgUAvglAtQgeAjgzAgQgxAegtAKQg0AMgogHIgbgEQgNgDgIgFQgLAcgJARQgJASgZAlIgUAcQgMARgLAMQgVAXgmAaQgnAageANQgmASgpAHQgqAGglgGQgmgGgegQQgHgEgIgHIgKgMIAAAUQABALgBAHQgFAmgiAqQgZAfgyAdQguAagxAJQgvAJgxgFQglgDgygVQgRgIgUgMIgggUQghgVgQgPIgQgUQgJgLgKgBQgPgBgigGQgPgCgogSQgbgMgXgUQgJgIgRgYQgEgIgEgLQAGAUgCAXQgDBCgaArQgjA3glAfQguAlgrAVQgtAXgwAFQgUACgWAGIgmAMQgPAEgTAKIgfARQgLAGgTANIgiAWQgvAfgkAQQgrAVg3ANQgyALhGAGQgvAEgagBIgUAbQhFBag0ApQg4ArhoAGIgNAAQg6AAhMgWg");
	this.shape_17.setTransform(-18.7935,-199.1131);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(51,255,255,0.498)").s().p("A2RWAQhDgVg+grQgzgigwg4Qgngsgkg8QghgzgXg5QgYg6gPg4QgOg2gGg+QgDgfABgzQABguAKhHQAJg+APgwQAVhGASgdQAYgoAWg1QAMgeAZg3QAHgQAeg+QAHgQASgPIAhgXQAjgbAhgPQApgSAfgEIAkgEQAVgCAOAFIAUAFQABgDgHgJQgcgngNgiQgOghAAgzQAAguALguQAJgrATguQAVgyAXghQAegrAigeQAfgbAvgWQARgIARgFIgLgWQgZgugJgzQgJgwADg4QAEg2AQg0QASg6AYgpQAYgqAngtQAlgpArgeQAigZA4gbQAygXAugOQAvgOAzgGQAvgGA0ABQAyABAwAJQAlAIA5ASQAyARAnATQApATApAkIAjAkQATAAAJABIAtAIQAZAHAOAOQAGAGAJAMIAPATQAAgFgDgIQgRglAGgpQAGgxAggkQAigoAsgZQAngXAtgOQAQgFAYgPQAcgSAKgEIBTgkIAvgUIA1gVQA3gUA8gGQBDgIA5AEQA+AGA+ASQAwAOBEAfQAuAVA+AzQA2ArAoA1QA0BDAYAuQAhBBAPBCQAGAcABAJQANgIAUgCIAjgEQA1gHA8gBQA7gCA7APQA/ARAxAZQAwAZAyAtQAsAoAjAyQAdAoAZBCQAYA9AGA0QAGA3gHA8QgIBEgRAuQgTA5gfAvQgeAtgsAoQgeAag8AdQg+AdgPAIQgdATgfANIgTAHQgKADgGAGIAGATIALAsQAGAcgCAVQgDA3gVAuQgWAxglAqQgcAhg1AiQgvAdgvAKQg2AMgngHIgagFQgOgDgHgFIgUAuQgIASgZAlQgdArgNAPQgZAagiAXQglAZggAQQgnARgpAHQgnAGgogHQgmgGgegRQgIgFgQgTIAAAUQABAMgBAGQgFAlghArQgZAfgyAdQguAZgyAJQguAIgxgFQgkgEgygWQgRgIgUgMIgegUQgfgVgPgPIgOgVQgIgLgJAAIgWgBIgYgBQgQgBgmgPQgbgJgXgUQgMgKgNgTQgGgIgDgLQAGAVgBAZQgDBFgZArQgjA4gkAgQgsAngsAXQgwAYguAFQgTACgWAIIglANQgPAFgSALIgeATQgLAGgSAOIggAYQgzAigdAPQgqAWg2AOQgvANhHAIQgxAGgWgBQgGAIgNAUQhCBdg0AqQg3AthqAFIgKAAQg6AAhPgZg");
	this.shape_18.setTransform(-21.806,-199.2593);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(51,255,255,0.498)").s().p("A2MWWQhCgWg+gsQgygjgwg5Qgkgrgmg+QgfgzgYg6QgWg4gPg7QgOg5gGg8QgDgkABguQABglAKhQQAKhAAOgwQAUhEATgfQAZgpAUg1QAMgeAZg3IAjhPQAHgQASgOIAhgYQAjgaAhgPQAqgTAdgEIAjgEQAVgBAOAEIAUAFQABgDgHgJQgagjgRglQgOgigBgyQgBgvAKguQAJgtARgtQAUgyAXgiQAegtAggdQAcgbAwgYQAXgKAMgEIgMgVQgYgsgLg0QgLgzADg2QACg0APg2QARg4AXgsQAZgtAkgqQAjgpArghQAhgZA4gdQA1gZApgOQAugOA0gIQArgHA4gBQAygBAwAIQAoAHA2ARQAuANAsAUQAqATApAhIAkAjIAcABQAgADANADQAZAGAPANQAHAGAJAMIAQASQABgGgEgHQgQgmAHgpQAIgxAfgjQAlgpAqgYQAkgVAwgPQAQgEAYgPQAcgRAKgFIBSgkQBOghAXgJQA0gTA+gIQBGgIA2AEQA7ADBBATQAyAOBDAeQAwAVA/AyQA1AqAqA0QA3BGAYAqQAjBBARBDIAIAkQANgHAVgCIAkgCQA1gGA/ACQA9ACA5ARQA/ATAwAbQAtAaAxAwQApAnAjA2QAcArAWBBQAVA9AFA1QAEA3gJA8QgKBBgTAwQgWA6ggAsQghAtgtAlQgeAag9AaQhCAcgMAHQggARgdALIgTAGQgLAEgFAEIAFAUIAKAtQAGAcgCAUQgFA4gVAtQgWAvgmAsQgeAig0AfQgwAdgvAKQg0ALgogHIgagFQgOgDgHgFIgTAuQgJAUgXAjIgTAeQgMARgKAMQgaAcghAXQgnAbgeAOQgnASgpAGQgmAHgqgIQgngIgcgQQgHgEgHgIIgKgMIAAATQACAMgBAGQgGAmghAqQgZAfgzAcQgsAZgzAIQgxAIgugGQgkgEgxgXQgSgJgSgMIgegVQgcgTgPgSQgCgDgHgTQgFgMgIACQgOACgdADQgLABgPgEIgcgHQgZgHgagSQgMgJgNgSQgGgHgFgNQAHAXgBAcQgBBGgaAsQgkA8gjAfQgsAogrAXQgvAagvAGQgTACgWAIIgjAPQgPAGgRAMIgdATQgKAHgRAPIgfAaQgwAjgdARQgtAYgwAOQg1AQg+AJQgtAHgZAAIgTAdQg/Bfg0AsQg3AvhqADIgGAAQg8AAhRgdg");
	this.shape_19.setTransform(-24.8388,-199.4631);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.3,-345.3,443.1,503.9);


(lib.PuppetShape_6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("AN4SuQg5gSgngSIgugXQgbgOgSgIQgSgIgZgFIgygIQgXgEgigLIg+gVQgigKhzgrQgWgIgigTIg4ggQgOgIg7goIhbAFQhdAGhKgIQhJgHhAgYQhGgbgqgcQgvgeghguQgMgSgTgRIgggZQgNgLgUgIIgggLQgNgEgVAAIgrAAQhSgBghgDQhCgEhAgUQgegJgngXIhHgrQgzghgZgXIgfACQg2AEhkACIhBADQgnACgYgBQhPgBgsgHQg8gJg6gVQg0gTg4gkQgsgegwgtQgngkgkg1QgigxgXg2QgXg3gLg5QgIgjgCgsQgEg3AHg8QAIg/APgxQASg7AZguQAdg0AfgsQAggsAqgoQAhgfA2ggQAUgMAbgHIAxgKQApgIA7AEQAXACAZAKQgCgNgBgPQAAgkARhHQAIgfALgVQAOgZAXgTQA6guAxgLIA7gNQAigHAZgCQA1gEA7AMQAgAHAOAFQADgLAFgMQAUguAggrQAZgkAxgnQApghA0gWQA5gZAtgIQAtgHA9AEQAzAEAyARQAVAHAYANIApAXQA4AhAVAQQATAPAuAqQAYAVAhAlQAZAdAWAhIATAfQAMATAIAKQAcAjATAUQAXAZASAsIAFAUQAEAMAFAJQARAFAGADIAiARQASAIAJAKIAVAYQACgGgEgLQgTgyADgwQACg6ATgsQAVgwAjgwQAhgtArgjQAxgoApgYQA4ggAwgNQA+gTAygFQA8gFA6AJQBDAJAxAUQA5AWAwAhQAhAWA4A2QAiAhAhBGQAcA9AGA3IACAPIADgCQA1gpAwgUQAxgVBBgJQA5gJA9AEQAyADBBAUQA6ASAwAcQAuAaAvAqQAxAuAcAoQAjAwAWAyQAUAwAMA7QAHAlgFBEQgEBEABATQABAlgDAkQgGAcABAOIATAIQAvAYAbAcQAlAoASArQAUAwAHA1QAGAogLBAQgKA1gWAtQgaA3gdAdQggAfgQALQgDApgMAqQgMAsgWArQgZAxgaAgQgdAigmAhQglAggnAZQgsAcgnARQgpARgwAJQgyAIgogDQgIgBgjgJIgCAnQgEAogUAvQgSAqgjAnQgnAqgqAZQgzAfgqAMQgVAHgcACIgyACIgDAAQghAAhAgTg");
	this.shape.setTransform(32.9725,-108.282);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("AOeS+QgRgEgggLQg7gTgkgSQg9gggcgMQgTgIgZgFIgxgJQgXgEghgLIg9gVQgygRhfgmQgWgIgggTIg3ggQgXgOgvgiIhZAGQhgAFhEgHQhHgGg/gYQhCgZgtgeQgvgfgfgtQgMgSgTgRIgfgaQgUgQgtgOQgMgEgVgBIgtAAQhKgBgqgCQhFgFhBgUQgegKgpgXQgVgLg0ghQg0gggbgZIgfABQhCAEhbgBIhDACQgoACgWAAIg+gCQgigCgbgEQg+gKg5gUQg1gTg3gkQgqgcgyguQglgigng4Qgkg1gUgxQgXg5gLg3QgHgggDgvQgDg5AHg6QAHg8AQg0QATg6AZguQAagxAiguQAegqAsgpQAighA0geQATgMAbgHIAxgKQAtgJA2AEQAhACAjASQgEgWABgbQAAgWAHgdQADgOALgnQATg9AogeQA5grAxgJIA5gMQAigFAZgCQA0gCA4ANQAZAFATAIIAHgXQASgtAfgtQAagmAuglQArgjAwgVQA6gbAsgHQAugIA7AEQA1ADAxARQAVAHAYANIAqAXQA1AfAXARQAXASArAnQAVAUAjAnQAWAXAaAnIATAfQALATAIAKQAaAhAVAXQAZAbAQArIAFAUQAEAMAEAIIAYAJIAhARQASAJAJAKQAFAFAPAVQACgHgEgLQgUgwACgxQACg5ATgsQAVgxAjgvQAhgsArgjQAvgmArgZQA2geAygPQBDgTAtgFQA7gFA7AIQBDAKAyATQA6AXAvAgQAhAXA5A1QAhAfAiBIQAdA9AGA4IADAWIAIgGQA2goAwgTQAugUBEgJQA6gIA8AEQAyAEBBAVQA6ATAwAcQAxAdAqApQAuArAeAsQAiAvAWA0QAUAxAKA7QAGAlgGBEQgFA6AAAcQABAigDAmIgEAVQgCAMAAAIIATAIQAwAXAaAdQAmAoARAqQATAvAIA4QAGApgNA+QgKA1gYAtQgbA2geAdQgfAdgSALQgEArgLAmQgLAogZAuQgZAxgaAfQgbAfgnAjQgnAhglAXQgrAcgnARQgpARgwAJQgwAJgqgEIgWgEIgVgFQgBAdgBAKQgGAsgUArQgTArglAmQglAogsAZQgzAegrAMQgdAIhHABIgDAAQgVAAgagGg");
	this.shape_1.setTransform(32.9641,-112.265);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("APGTHQgXAAgbgHIgxgQQg6gTgkgSQg8gggcgNQgTgIgYgFIgxgKQgWgEghgLIg8gWQgdgKhxgsQgVgJgfgTIg2ggQgNgIgUgPIgjgZIhWAGQhaAGhGgHQhJgHg8gXQhAgZgtgeQgugfgegtQgNgSgRgRIgfgaQgTgQgtgPQgMgEgWAAIgtAAQhLgBgsgDQhEgFhFgVQgfgJgpgYIhMgtQg5gkgZgXIggABQgxAChvgDQgZAAgpACIg/ABIg+gBQgigCgbgEQg8gJg7gUQg0gSg4glQgsgdgxgtQgngkgkg2QgigwgXg2QgXg3gLg5QgHgkgCgrQgDg6AHg5QAIg9AQgyQATg6AZguQAaguAigwQAhgsApgnQAjghAygdQATgMAbgHIAxgLQAsgIA2ADQArADAsAaIADACQgKgdAEgqQADghAXhDQAKgdANgTQAPgXAXgQQA6gpAvgIQBRgOAhAAQAzgBA2AOQAcAIANAGIAHgWQAPgsAeguQAagoAsglQAsgkAugVQA3gaAugJQAugJA7AEQAyADA0AQQAVAHAYAMIAqAXQAyAdAaAUQASANAwArQAZAXAgAkQAWAYAaAmIATAgQALATAIAKQAZAgAWAZQAXAaARAsIAFAUQAEAMAEAJIAXAJIAiARQASAKAJAKIATAbQACgGgFgLQgUgvABgxQABg5ATgsQAVgwAkgwQAhgsAsgiQAxgnApgXQA2gfAxgOQBAgTAxgFQA5gGA9AJQBCAJAyATQA4AWAyAhQAfAVA7A3QAjAgAiBHQAdA+AGA3IAEAfIANgKQA2gnAwgTQAxgUBCgIQA8gIA6AGQAxAEBCAWQA7AVAuAbQAwAeAqAqQAsAqAfAtQAjAzATAyQATAxAJA7QAGAngIBCQgGBEAAASQAAAkgDAiQgHAbABAOIASAHQAyAYAZAcQAmAnARAsQATAwAHA3QAFApgOA+QgKAygZAvQgeA4gdAaQgeAbgTAMQgFAogMAoQgNArgXApQgaAwgaAeQgaAggoAhQgjAegoAaQguAdgkAPQgrASgtAIQgwAJgqgDIgWgEIgVgFIgDAnQgHArgVAsQgTApgmAoQgmAogtAYQgzAcgsAMQgWAGgcACIgTAAIgeAAg");
	this.shape_2.setTransform(32.9247,-116.2885);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("AO6TJQgWgBgcgHIgwgPQg7gVgigRQg7ghgcgNQgSgIgYgGIgwgKQgWgEgggMIg7gVQgogPhigpQgVgIgfgTIgzghQgOgJg0gnIhUAHQhWAGhHgHQhGgGg8gYQhAgZgrgeQgvgggcgrQgMgSgSgRQgFgGgYgUQgUgSgsgOQgMgEgWAAIgtAAQhEgBg2gEQhGgEhGgVQgggKgqgYQgTgKg7gkQg7gkgbgYIggAAQg2ABhtgFQgagBgpACQgrACgTgBQhTgBgpgGQhAgJg4gTQg0gSg4glQgugegvgsQgmgjglg2Qgjg0gVgzQgXg3gLg5QgHghgCguQgDg3AIg7QAIg7AQg0QATg7AZgsQAbgwAiguQAfgqAqgoQAjghAygdQAUgLAagIIAwgLQAqgJA3ADQAsADArAYIAcAQIgEgIQgRgfAJg3QAFgdAahDQAWg4ApgcQA5glAvgHIA4gIQAggDAYAAQAzABAyAQQAYAHAPAIIAGgXQAPgvAbgrQAYgmAsgnQAngjAxgYQA3gbAtgJQAsgJA9ADQA0ACAyAQQAVAGAYANIAqAXQA0AdAZATQAVAPAuApQAVAUAkAoQAXAaAZAkIATAgQALATAIAKQAdAmASATQAXAbAQAsIAGAUQADAMAEAJIAXAJIAiASQARAKAJALIATAcQACgGgFgLQgWguABgxQABg5ATgsQAVgwAkgvQAhgsAsghQA1gpAmgVQA1geAygOQBCgTAugFQA5gGA9AIQBEAKAxASQA7AXAvAgQAjAXA4A0QAiAgAjBHQAeA+AHA4IAEAnIASgNQA0gmAygUQAygTBCgHQA9gHA5AGQAyAFBAAXQA8AVAtAdQAvAeArArQAqAqAgAvQAgAwATA1QAUAzAHA6QAEAlgIBDQgIA/AAAXQAAAggEAlQgHAaABAOIASAHQAxAXAaAcQAlAmASAuQASAxAGA2QAFArgOA8QgNA0gYAtQgfA2geAaQggAbgSALQgGAogMAnQgOApgXAqQgaAvgaAdQgaAggoAgQgkAfgmAYQgsAbgmARQgpARgvAJQgwAJgpgDQgMgBgggIIgDAoQgIArgWAsQgUAognAoQgmAmguAZQgxAagvAMQgWAGgcAAIgMABIgmgBg");
	this.shape_3.setTransform(32.8982,-120.2951);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("AOvTLQgigBhAgYQhAgXgcgPQg6ghgbgNQgSgJgYgGIgwgKQgVgEgggMIg5gXQgkgNhkgrQgUgJgegTIgyghQgOgJgxgmIhSAGQhWAHhEgGQhHgHg4gXQg/gagrgdQgrgegegtQgMgSgRgRIgdgaQgUgSgrgOQgMgEgWAAIguAAQhGgBg3gEQhHgFhIgVQgggKgsgYIhQgwQg+glgagYIghAAQgmgBgxgCIhPgFQgcgBgnABIg/ACIg+gCQgjgBgagEQhAgJg4gTQgzgRg6glQgtgdgwgtQgkgigng3Qglg2gTgxQgWg1gMg6QgGgigDguQgCg8AIg2QAIg7ARg0QATg6AZgsQAdgyAggrQAegpArgoQAjghAygdQATgMAagHIAwgLQAtgKA0ADQAsACAqAWIAlAVQAOAJAIALQgOgWgIgUQgNgeAMg2QAEgUAKgaIAVgvQAYg2ApgaQA6gjAsgFQBQgJAfACQAwACAxASQAWAHAOAJIAGgXQALgtAbguQAWgmArgoQApglAugXQA6gcApgJQAsgJA9ABQA0ACAzAPQAfAKA4AgQAuAZAfAWQAWAQAtApQAZAXAhAkQAYAcAYAjIATAgQALATAIALQAYAgAXAaQAXAaAQAtIAFAUQADAMAFAJQASAHAEACIAjATQARAKAIALIAJAOIAJAQQACgGgFgLQgWgtgBgxQAAg4ATgsQAUguAmgxQAhgrAsgiQA1goAmgVQA1gdAygOQBBgTAvgFQA3gHBAAIQBEAKAxASQA6AWAwAgQAiAXA6A1QAiAfAkBIQAeA+AHA4IAHAvIAWgRQA2gmAxgSQAygSBCgHQA6gHA8AIQAzAFA/AYQA8AWAtAdQAuAfAqAsQAtAuAcAsQAfAxATA1QASAyAGA8QAEAjgKBFQgJA/AAAWQgBAlgEAfIgFAUQgCALAAAIQAGADANAEQAxAYAaAbQAmAoAQAsQASAwAFA4QAFApgQA+QgNA1gaArQggA2geAZQgiAagRAKQgHAqgMAjQgOAngYAqQgaAvgaAdQgZAdgpAiQgkAdgmAYQgtAdgkAPQgpARguAJQgzAJgngDIgrgIIgFAnQgIArgXAsQgVApgnAnQglAkgxAaQg0AbgsAKQgWAFgcABIgygCgA11pfQACAFAGAHQAGAHABAEQADgBgHgJIgOgTIADAGg");
	this.shape_4.setTransform(32.8709,-124.2357);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("AOjTOQgWgCgbgIQgPgEghgMQg9gXgdgQQg6gigbgNQgSgIgXgHIgvgKQgVgFgggMIg4gXQgrgRhZgoQgUgJgcgTIgxghQgJgGg0gqIhPAHQhVAHhCgHQhEgGg5gYQg9gZgrgeQgrgegdgsQgQgZgngkQgUgSgrgOQgLgEgXAAIgvAAQhIgBg3gEQhKgEhIgWQghgKgugZIhSgwQg+glgdgZIgigCQgrgBh9gJQgdgDgnACIg/ABIg+gBQgjgBgbgEQg+gJg6gTQg0gRg4glQgtgdgwgsQgngkglg2QgigxgWg2QgWg3gLg4QgHgjgCgsQgCg6AIg5QAJg9ARgxQASg5AagtQAagsAkgwQAigtAngkQAhgeA0gfQATgLAagIIAwgMQAugKAyADQAuACApAVIAmAUQAWANAJASQACAEAGAHIAIAKQAAAAAAgBQABAAAAgBQAAAAgBgBQAAgBAAAAIgEgGQgUglgMgiQgKgdAPg2QAHgaAfg/QAbg0AogYQA5giAsgEIA3gEQAfgCAXACQAsAEAyAUQAUAIANAJIAFgWQAJgwAZgsQAXgoAognQAmglAvgYQA5geApgJQAsgKA9ABQAzABA0APQAVAGAZAMIAqAWQAzAdAbATQAaASApAmQAZAXAhAlQAZAcAXAjIATAgQAMATAIALQAWAeAYAcQAYAcAPAsQAFAaAHAPQASAHAFADIAjATQARALAIAMQAEAFAFAKIAIAQQACgFgFgMQgYgtgBgvQAAg6ATgrQAWgxAkguQAggpAugiQA3gpAkgUQA4geAugNQBAgSAwgGQA4gGA/AIQBCAIA0ATQA3AVA0AhQAgAVA8A2QAjAfAkBIQAeA+AIA5IAHA3QANgLAOgKQA1gkAzgSQAwgSBEgHQA6gFA9AIQAyAGBAAZQA8AYArAdQAuAfAqAsQAqAuAdAuQAeAxATA2QARA1AFA5QACAYgDAeIgHAyQgLA7AAAZQgCAigEAhQgIAZABAOIATAHQAxAWAaAcQAlApAQAsQASAyAFA3QADApgQA+QgOA0gbArQghA1gfAYQgkAbgQAHQgIArgMAhQgOAngZApQgcAwgXAaQgbAegoAgQghAcgoAYQgvAeghAOQgoARgwAJQgvAJgqgDQgMgBgfgHQgDAcgDALQgJArgXAtQgYArgmAjQgqAngtAWQgyAZgvALQgXAEgcABIgygCg");
	this.shape_5.setTransform(32.8356,-128.2545);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("AOXTQQgigDg+gZQg9gXgdgRQg5ghgagNQgRgJgYgHIgugLQgVgFgfgMIg3gXQgqgRhXgqQgTgJgcgTIgvghQgMgJgRgOIgdgZIhNAHQhSAHhCgGQhFgHg2gXQg9gagogdQgrgegbgrQgRgaglgjQgVgUgpgMQgLgEgXABIgvAAQhVgCgugEQhMgEhJgWQgigKgvgaQgUgKhAgnQhBgngdgZIgjgCQg/gDhsgLQgdgCgnABIg/ABIg+gBQgkgBgagEQg/gJg5gSQgzgRg6glQgrgcgyguQglghgng4Qgjg0gVgzQgWg5gKg2QgHgkgCgsQgCg3AJg7QAIg6ASg0QAUg6AZgrQAcgvAigtQAigsAogkQAjggAygdQATgLAagIQAPgEAhgHQAsgKA0ACQAuACApATIAmATQAXANAJAQIAJAKQAGAGACADQABAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIgDgHQgRgsgHgcQgHgcARg1QAIgYAhg+QAcgyApgXQA5ggArgDIA2gCQAfgBAWADQAsAFAvAWQARAIANAKIAFgWQAGgvAXgtQAWgqAmgmQAmgmAugZQA3geAqgLQAtgLA8ABQAyAAA1APQAfAJA5AeQAvAaAgAVQAYARAsAoQAVAUAlAnQAcAgAUAgIAUAgQALAUAIAKQAYAhAXAaQAXAcAPAsIAFAUQADANAEAJQAPAGAIAEIAjAUQARALAIAMQAEAGAEAKIAHARQADgGgGgKQgZgugBguQgCg3AUgtQAWgwAlgvQAhgqAughQA6gqAggRQA2gdAxgOQBFgTArgFQA5gGA+AHQBFAJAxASQA3AUA0AiQAgAVA9A2QAkAgAjBHQAgA+AHA5IAJA9IAAACQAPgNARgLQA1gjA0gSQAxgSBDgFQA5gFA+AJQAyAHA/AaQA8AYArAeQAtAfApAuQArAvAbAuQAeAyARA2QARA1AEA5QACAlgNBDQgLA8gBAXQgCAggFAjQgIAYABAOIASAHQAyAVAaAdQAlAoAQAuQARAyAEA2QADAqgSA9QgPA0gcArQghAzghAYQgjAZgRAIQgIAqgNAgQgOAkgZArQgcAugYAaQgaAcgoAhQghAbgoAYQgxAfgfANQgrASgsAIQgwAJgpgDQgPgCgdgGQgEAdgCALQgJAqgaAtQgXApgpAlQgpAlguAWQgzAYgvAKQgTAEgeAAQgXAAgdgCg");
	this.shape_6.setTransform(32.7779,-132.2705);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("AO+TUIgygDQgWgCgbgJIgvgRQg9gZgcgQIhSgvQgSgJgXgHIgtgMQgVgFgegMIg2gYQgugUhQgnQgTgKgagTIgugiQgLgIgtgoIhLAIQhOAHhCgGQhFgHg0gXQg+gcglgbQgqgfgbgqQgQgagjgiQgVgVgogMQgKgDgXABIgxAAQhXgCgugDQhQgFhJgWQgjgKgwgaIhXgyQhDgngdgaIgkgDQhBgFhtgMQgegDgmAAIg/ABIg/gBQgjgBgagDQhAgJg5gSQg1gRg4glQgtgdgwgsQgkghgng5QgjgygVg1QgWg3gLg4QgGglgCgrQgBg8AIg2QAKg7ARgyQAVg7AZgrQAcgvAigsQAggoArgnQAigfAzgdQAegRBAgOQAugKAyACQAwACAnASIAnASQAXAMAKAPIAJAJIAJAJQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgCgHQgMgsgFgdQgEgdATgzQAJgXAjg8QAegyAogVQA4gfAsAAIA1gBQAeAAAWADQAqAHAtAYQAQAJAMALQADgOAAgJQADgvAWgtQAVgqAlgnQAkgnAtgaQA4gfApgLQAsgMA9AAQAyAAA1ANQAfAJA6AeQAsAXAjAYQAdAUAoAkQAZAXAhAkQAWAZAbAnIAUAgQALAVAIAKIAvA8QAWAaAQAuQAFAbAHAPQAPAGAIAFIAjAUQARAMAIAMIAHARIAHARQADgFgGgKQgagtgCguQgCg3AUgtQAVguAmgwQAigqAtggQA9grAegQQA2gcAwgOQBAgSAwgGQA6gHA9AIQBEAHAyATQA6AVAzAhQAgAUA9A2QAkAhAkBHQAfA8AJA7IAJA+IAAAKQASgQAUgMQA0gjA1gRQAygRBDgFQA9gEA6AKQAzAHA+AbQA6AZAsAfQAuAhAnAtQAsAyAZAsQAcAyARA4QAPAyADA8QACAkgOBEQgNA6gBAYQgCAkgGAeQgIAYABANIASAHQAzAXAZAbQAkAoAQAvQARAyADA3QACArgTA8QgQA1gdApQgkA0ggAVQgiAXgTAIQgIAngOAiQgPAlgZAoQgbAsgZAbQgYAagqAhQgiAbgmAYQgxAegfANQgrASgrAIQgxAJgogEIgsgHIgHAoQgLAtgZAqQgXAogqAlQgqAkgvAWQgyAYgxAJQgUAEgYAAIgGgBg");
	this.shape_7.setTransform(32.7283,-136.2481);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,255,255,0.498)").s().p("AOzTXQgRgBghgDQgigEg+gZQg+gagagPQg4gjgZgNQgRgJgXgHIgugMQgUgGgegNIg1gYQgtgUhNgoQgSgKgagTIgsgiQgNgKgpgmIhJAIQhMAHhBgGQhCgGg1gYQg7gcgmgbQgngegcgrQgRgcgfggQgVgWgngKQgKgCgXABIgxAAQhYgCgxgDQhRgGhLgVQgjgKgygbIhZgzQhIgqgcgZIgkgDQhCgGhugPQgfgEgmABIg/ABIg/gBQgkgBgZgDQhDgJg2gSQg1gRg4gkQgsgdgygtQglghgmg4Qgjg0gVg0QgVg2gLg5QgGgngBgoQgCg5AJg5QAJg6ASg0QAVg5AagsQAdgxAigpQAhgqAqglQAjgfAzgcQAUgLAagIIAwgMQAtgLA0ACQAwACAnARIAoARQAXAMALANIAJAJIAJAJQACgCgCgKIgJhJQgDgeAWgxQAKgZAlg3QAfgxAogUQA5geAqABIA1ABQAfABAVAEQAoAIAqAbQAOAJAMAMIACgWQAAgvAUguQAVgtAigmQAigmAugcQA1ggAqgMQAtgNA8gBQAzAAA0AMQAgAIA6AeQAyAaAeAUQAZARAsAnQAbAXAgAkQAYAaAaAmIAUAhQALAUAIALQAZAhAWAbQAXAbAPAuQAFAbAHAPQAQAHAHAEQAZAOAKAHQAMAJAIAJQgNgdgCggQgDg5AUgrQAVguAngxQAhgpAuggQBDgtAYgMQA2gcAwgOQBAgSAwgGQA4gHA/AHQBEAIAzASQA3AUA2AhQAfAUA/A3QAjAfAlBIQAgA8AJA8IAKA+IABATQAUgSAXgPQA2giA0gQQAxgQBEgEQA7gDA8AKQA0AJA9AbQA7AaAqAfQAuAiAmAuQAqAxAZAuQAdA1APA2QAPAzABA8QABAYgFAeIgKAxQgNA0gDAeQgDAlgFAcIgGASQgDAKABAHIATAHQAwAWAbAeQAkAoAPAvQAQA0ACA2QACApgUA+QgSA0gdAoQgkAygiAVQgkAXgSAHQgJAlgOAiQgPAjgaAoQgcAsgYAaQgdAdglAdQgiAagmAXQg0AggbALQgoARguAIQgwAJgpgDQgNgBgegHIgIApQgMAugaAoQgXAngrAlQgpAkgxAWQg2AYgtAHQgSADgVAAIgLAAgABwqJIAGATQADgGgGgKIgFgHIACAEg");
	this.shape_8.setTransform(32.6621,-140.266);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,255,255,0.498)").s().p("AOnTZIgygFQgkgFg7gZQg5gYgegSQg3gigZgOQgRgJgXgHIgsgNQgUgGgegNIg0gYQgjgRhUgtQgSgJgZgUIgqgiQgPgMglgkIhHAIQhNAIg+gGQhBgGgzgZQg8gdgjgaQgmgcgbgsQgQgbgdgiQgLgLgSgJQgPgIgPgDQgJgCgXABQggACgSgBQhmgCgmgDQhTgFhNgWQgkgKgygbIhcg1Ig1gfQgegTgTgRIglgFQhDgHhwgRQgggEgmAAIg+ABIg/gBQgkgBgagDQhCgJg3gRQgygQg7glQgrgbgzgvQgmgjglg3Qglg2gTgxQgWg4gJg3QgHgkgBgsQgBg7AJg3QAKg7ASgyQAUg4AbgtQAbgtAlgtQAjgqApgjQAjgfA0gcQAUgLAagIIAwgMQAugLAzACQAxABAoAQIAoARQAYALALANIAKAJIAJAIQACgCgBgDIAAgHIgDhKQgBgbAYgyQALgYAmg3QAigvAngUQA5gdAqADIA0ADQAfACAVAFQAmAJAoAeQAMAJAKANQADgPgBgHQgDgwASgtQASgsAhgoQAjgpArgbQA2giApgMQAsgNA8gDQAzgCA1AMQAVAFAaALIAsAVQAsAWAlAXQAbASArAmQAfAcAdAfQAZAcAZAkIAUAhQAMAVAIALIAvA9QAWAbAPAvIAGAUQADANAEAJQAPAGAIAFIAjAWQAHAGAGAGQgKgagBgaQgEg2AUguQAWgvAmgvQAhgoAwggQA/grAcgOQA0gaAxgPQBGgTAqgFQA4gHA/AHQBDAHA0ATQA8AVAyAgQAhAVA9A1QAjAeAnBJQAgA9AKA7IAJA+IACAdQAWgWAbgPQA2ghA0gRQAzgPBDgDQA7gDA8AMQA0AKA8AcQA6AaArAgQAuAkAlAuQApAxAYAvQAcA1AOA2QAOA2ABA5QAAAlgRBDQgPA6gCAXQgDAigHAeIgFARQgDAKAAAIIATAHQAzAYAYAcQAkAoAOAwQAQAzABA3QABArgWA8QgRAzggAoQglAxgiAUQgjAVgUAHQgKAngOAfQgRAjgYAmQgcArgZAZQgZAagoAfQggAYgoAYQg1AggZAKQgpARguAJQgtAIgrgDQgOgBgegHQgFAfgDAKQgNAtgaApQgYAngsAlQgrAkgvATQg0AXgwAHQgSADgVAAIgMAAgAB8p2QADgGgGgJIgDgEIAGATg");
	this.shape_9.setTransform(32.5903,-144.2782);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,255,255,0.498)").s().p("AOdTbQgTgBgfgFQgggEg/gaQg6gZgcgRQg3gjgZgOQgQgJgXgHIgsgOQgUgGgcgOIgzgYQgjgRhSgtQgRgKgYgUIgpgiQgJgHgpgpIhGAIQhJAJg+gGQhAgGgzgZQg4gbglgdQglgdgZgsQgRgegageQgJgLgSgJQgQgJgOgCQgHgCgZACQgdADgWgBQhngDgngCQhVgGhOgWQglgKg0gcIheg1QhJgqgggbIglgFQhFgJhxgTQgggFgmABIg/AAIg/gBQgkAAgagEQhAgIg5gRQg0gRg5gkQgtgdgxgtQgmgjglg3QgkgzgUg0QgVg2gKg6QgGgjgBgtQgBg8AJg1QAKg4ATg1QAVg6AbgrQAegwAigpQAhgoAsglQAmggAygaQAigSA9gNQAwgLAyABQAvACAqAPIApARQAYALAMAMQAOAKAFAGQACgCAAgEIAAgGIADhLQACgcAZgwQANgXAog2QAjguAngTQA5gcAqAEIA0AFQAfADAUAHQAkALAmAhQANAMAFAMQACgOgBgIQgIguARgwQARguAfgnQAggqAsgdQA0giApgOQAsgPA8gDQAygDA2ALQAWAEAaALIAsAUQAwAXAiAVQAZARAuAmQAaAXAjAlQAbAeAYAiIAUAiIAVAfQAcAmATAYQAWAbAQAvIAGAVQADANAEAJQAPAHAIAFIAjAWIAIAGQgIgUgCgVQgEg2AVguQAUguAogwQAjgpAugeQBDgsAYgMQA0gaAygOQBEgTArgGQA6gHA+AHQBCAHA1ASQA5AUA1AhQAjAWA8A0QAjAfAnBJQAhA7AKA9IAKA+QACAUAAARQAZgYAegRQA2ggA1gQQAvgOBHgDQA7gBA8AMQA0AKA7AdQA4AaAtAjQApAgAoAyQApAzAXAvQAbAzANA5QAOA2gBA5QAAAZgHAdIgMAxQgPA1gDAcQgEAfgHAfIgFASQgEAKABAHIASAHQAyAYAZAdQAlArANAuQAOAyAAA5QABApgXA9QgUA0ggAmQgmAvgjAUQgmAVgRAFQgLAlgOAfQgPAggbAnQgcArgZAYQgZAagoAeQgiAZglAWQgxAegdAMQgqAQgsAJQguAIgqgDQgOgBgegHIgJApQgNArgbArQgZAmgsAkQgsAkgwATQg3AWgtAHQgQACgSAAIgQAAgACDp2QADgEgHgLIgBgBIAFAQg");
	this.shape_10.setTransform(32.4708,-148.2596);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203,-272.5,439.6,431.1);


(lib.PuppetShape_5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("ALuU+Qg/gGgigKIhegaQgVgGhHgIQgVgCgfgIIg3gNQg9gQhCgUQgcgJhBggQgZgMgkgVIhAAiQgrAXhUAlQg7AahBALQg9AKhAABQg4AAhFgLQgcgEghgMIg6gaQgegPhUg0IhyhHQg0ghhPg7QhHg0g7g8QgsgshVhxQg1hFgSghIgjgOQg/gahpgvQgdgMglgKIg9gQIg9gSQgigLgYgKQg8gagxghQgrgdgsg2Qgggogfg5QgYgugSg8QgRg7gCg1QgBg8AJg0QAHgnAMgkQARg0AdgvQAfg0AfgiQAqguAhgWIBQgyQAygeAWgPIBHgvQAmgZAqgQQAugRAsgFQAwgGArAHQA2AIAeANIAXAKIAGgNQAUgtATghQARgfAmgnQAgghAngbQAqgfAogSQA0gYAngBQA/gCAhAHQAjAHApAbQAGAEAPAOQACgMgCgLQgHgyARgwQAQgxAbgrQAcgsAoglQAsgoAqgYQAtgaA2gSQAzgQA4gHQAwgFA9AGQA3AGA0AQQAzAPAuAaQAwAaAqAjQApAiAgAuQAlA2AQAqIAKAfIAJgfQAVg/AXgmQAgg3AcgmQAaglAxguQAvgrAxgWQA0gaA1gLQA4gLA2AAQA8AAAxALQA1ALAxAVQArASAzAiQAqAbAmAqQAlAnAaAsQAbAtAQAvQASA6ABAnQAAAOADAKQAJgFAPgNQAPgNAJgFQAogWA4gOQA2gOAzgCQA6gBAzAIQA1AKA1AVQAtARA1AhQAuAdApAnQAqAnAeArQAfAsAWA0QAZA4ALAvQANA2ACA1QABA3gJA0QgHAtgVA3QgJAXgdBAQgPAjgaApIgPAVIgPAWIAJARQAYAzAHAkQALA1gDAtQgEA1gNAvQgLAogdAzQgYAtghAkQgjAmglAYQgdATgVAKQgFAqgLAkQgLAmgXAuQgYAugaAhQgZAhgnAkQglAhgmAYQgpAbgrASQgpARgvAJQgzAIgmgDQgJAAgOgDIgUgEIgBAnQgFApgUAvQgTAsghAoQghApgqAeQgrAfgtAUQghAOg/ALQgRADgYAAQgaAAgigEgADSraQgKANgEAJQgEAJgCALIgBAGQAEgOADgCIAQgLQADgHgDgOIAAgCIgCACg");
	this.shape.setTransform(6.075,-40.5445);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("AL6U1Qg5gGgpgLIhegcQgbgIhAgGQgVgDgfgHIg4gOQg8gPhEgWQgTgGgcgNIgvgXQgUgKgpgYIhCAhQgwAZhSAgQg8AYhAAJQhBAIg8gBQg7gChAgNQgrgIhJgkQgggPhQgxIhxhEQgxgehQg5QhBgthCg+QgcgbgjgrIhBhSQg1hEgSggIgjgNQg/gYhngrQgdgMgmgJIg8gPIg9gQQgigKgYgKQg+gagvgfQgugegrgzQgigogfg3QgZgqgUg/QgSg8gDg0QgDg8AHg0QAGglAMgnQAQg0AbgwQAfg2AdgiQAogvAhgXIBPg1QAygfAWgQIBHgwQAigYAvgRQArgRAvgFQAwgFApAHQA5AKAaANIAXAKIAFgNQAOgnAUgoQARgfAkgnQAcgfApgfQAqggAngSQA1gXAmgCQBCgCAfAGQAjAGAqAbQAKAGAMAMQACgLgBgLQgGgzARgvQARgxAcgrQAbgrApgkQAsgnAqgYQAugaA2gQQAvgPA8gHQAtgEA/AIQA1AHA0APQA1ARAsAZQAsAZAqAkQArAjAdArQAlA0AQApQAMAgAHAcQAGggAHgVQAUg8AYgpQAfg1AcgnQAhgrAsgnQAugqAygXQAzgYA2gMQA1gLA5AAQBAABAuALQA2AMAxAVQAsAUAxAhQApAbAnArQAmArAXAqQAaAsAPAxQARA6gBApQgBAOACAKQAKgGAOgNQANgNAJgGQAmgXA3gRQA0gQA0gDQA7gEAzAHQAxAHA5AVQAuAQA2AfQAuAbAqAnQAsAnAeAqQAgArAYAzQAYA0AOA0QAOA5ACAyQADA1gIA2QgHAtgUA3IgkBXQgQAngXAlIgPAWIgPAVIAKASQAZAwAIAlQAMAzgCAuQgCAvgNA1QgKApgcA0QgZAugfAiQgjAnglAZQgfAUgSAIQgGAqgKAkQgLAlgYAvQgaAygXAdQgbAhgmAkQglAhgmAYQgsAcgoAQQgqASguAIQgwAJgpgEIgqgIIgCAoQgEAogUAwQgTArghAoQghApgqAeQgsAggtATQghAOg/AJQgQADgWAAQgbAAgjgEgADGrgQgJANgDAJQgCAJAAAKQgBARAEgHQAIgMACgBIAHgDQAEgDACAAQADgGgCgPIgEgZIgJAOg");
	this.shape_1.setTransform(7.3213,-44.3667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("AMFUrQg4gHgqgLIhdgdQgTgGgZgDIgwgGQgVgCgfgIIg4gPQgygMhPgZQgZgIhHgjQgOgHgvgcIhEAfQgvAXhUAfQhAAXg+AGQhEAGg5gDQg4gEhBgPQgpgJhIgkQgfgQhOguIhvhAQgtgbhUg3QhEgug+g5QgcgagkgpIhBhQQg1hCgSgfIgigMQg+gWhngoQgdgLglgJIg9gNIg8gQQgjgJgXgJQg9gXgxggQgugdgsgyQgiglgig5QgbgugUg6QgTg5gFg2QgEg5AGg4QAEgiAMgpQAPg4AZguQAeg2AcgjQAngxAggYIBPg4QAxghAWgQIBHgxQAjgYAugRQApgPAxgGQAvgFAqAIQA3AKAaANIAWALIAFgNQAMgnASgnQAOgfAjgpQAbgeApghQAqgiAmgRQA1gYAngCQBBgCAgAGQAjAFArAaQALAGANAMQACgOgBgIQgFgzASgvQASgyAbgoQAdgrApgkQArgmArgYQAvgYA1gQQAygOA5gFQAqgDBBAJQA0AHAzARQAyAQAtAaQArAZArAjQAnAhAfArQAlA1AQAnQAUAwAHAvQAHgxAKghQAUg9AYgoQAgg2AcgmQAegoAvgqQAtgoAzgYQA4gZAygKQA2gLA5ABQA9ABAxALQA5AOAtAUQAqATAzAjQAqAcAmAsQAlAsAXAqQAbAyAMAtQAPA6gDAqQgCAOACALQAKgHAMgOQANgOAHgFQAigYA6gUQAzgTA0gEQA8gGAxAGQA0AGA4ASQAyAQAzAdQAtAZAtAnQAtAmAfApQAiAtAYAxQAbA3AMAvQAQA4ADAzQAEAygIA6QgFArgVA5IgiBXQgOAlgXAnIgPAWIgNAVIAKASQAbAvAIAkQANAzAAAuQgCAygLAzQgJAogcA0QgXAuggAkQgjAogkAYQgbASgXALQgEApgMAlQgLAmgXAtQgYAvgaAgQgbAjgmAhQglAigmAYQgoAagrASQgmAQgyAJQgyAJgngEIgqgIIgCAnQgEApgUAvQgRAqgjAqQgiApgpAdQgtAhgsASQgjAOg+AJQgOACgTAAQgcAAgngFgADGr7QgCAGgKAPQgIANgCAKIACARQABAQAGgEIAKgIIAHgCQAFgCACABQADgHgDgOQgGgZgBgaIgEAKg");
	this.shape_2.setTransform(8.5636,-48.189);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("ANEUnQgUgBgfgEQg9gJglgLIhdgeQgZgHhCgIQgWgDgfgIIg4gPQgygMhRgaQgTgHgdgNIgwgYQgUgLgqgZIhFAeQgzAWhUAcQg/AVg/AEQhCAEg6gFQgzgEhFgSQgogLhGgkQgdgPhNgsIhug9Qg5gghHgtQhEgsg+g2QgcgZgkgpQgTgWgug3Qg2hDgRgbIghgLQg+gUhngmQgcgKglgHIg9gMIg8gOQgjgJgXgJQhAgYgvgdQgugcgtgxQgjglgjg3QgagpgXg+QgVg6gFg1QgGg5AFg4QADghAKgrQAPg3AXgwQAbg1AdgmQAjgwAigbIBOg6IBHg0IBHgyQAjgXAugRQAtgRAtgEQAwgEAoAIQA2AKAaAPIAWALIAEgNQAMgtANghQAMggAigoQAZgeAogjQApgjAngSQA0gYAogCQBCgDAgAFQAkAGAsAYQALAGAOAMIABgXQgDgxASgvQASgyAdgoQAdgrApgiQAvgnApgVQAtgXA3gPQAzgOA4gDQAogCBBAKQA0AIAzARQAwAQAtAbQArAbAoAhQAnAhAeAqQAhAuATArQAWAyAHAsQAJA0gOArQgBAFgKAQQgHAMgBAKIAEAQQADAPAHgBIAMgFIAHAAQAEgBACABQADgHgDgNQgNg5AGg3QAGhDAOgoQASg6AZgrQAhg3AcglQAdgmAxgrQAvgpAxgWQA1gYA2gLQA4gLA2ACQBAABAvAMQA4ANAvAWQAoASA1AlQAnAbAnAuQAkArAXAtQAaAzALAuQAOA9gHAoQgCARACAIQAKgHAKgPQAMgPAHgFQAggZA5gWQA0gVAxgGQA8gIAyAEQAzADA6ARQAxAPA1AbQAtAXAvAnQAtAlAhApQAiArAaAyQAaAyAQA0QAQA2AFA0QAEAxgGA7QgFArgUA6IggBXQgNAlgXAnIgNAWIgNAVIALASQAbAuAKAkQAPA0AAAsQAAAxgLA0QgJAogaA1QgXAtggAmQgjApgjAYQgcASgVAKQgGAqgKAkQgMAogXAsQgYAugaAhQgcAiglAhQgjAggoAZQgoAagrASQgnARgxAIQgxAIgogCIgWgEIgUgFIgBAnQgFAqgTAuQgRAqgjApQghApgqAeQguAggrASQgiAOg/AIQgQADgSAAIgQgBg");
	this.shape_3.setTransform(9.7784,-52.0115);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("AMdUYQg7gJgngMIhdgfQgTgGgZgEIgwgGQgVgDgggIIg4gPQgsgMhYgcQgUgGgcgOIgxgZIg/gkIhHAcQg4AXhQAYQg/AShBADQhDACg4gHQg1gGhAgUQgqgNhBgjQg2gcgygdIhsg5Qg1gchLgtQhAgmhCg3QgcgYgjgnQgWgYgrgzQg0g8gTgfIgigKQgXgHiMgtQgcgJglgHIg8gLIg9gOQgigIgYgIQg/gWgxgdQgvgcgtgvQghgigng5QgcgqgXg8QgWg7gHgzQgHg5ADg4QADghAJgsQANg2AXgyQAYg0AdgoQAkgzAggbIBMg9IBHg2QAlgcAigXQAegVA0gTQArgPAugFQAvgEApAJQA6AOAVANIAUALQADgCABgLQAJgsALgiQAKgeAhgrQAXgeAoglQAngjAogTQA2gYAngDQBEgDAeAFQAnAFArAXQAMAHAOALQACgPgBgIQgBgyASguQAUgyAdgnQAegrApghQAxgnAogUQAtgWA4gNQAxgNA5gCQArgBA+ALQA2ALAuAQQAuARAuAbQApAaAoAiQAnAhAdApQAhAuASApQAVAsAKAvQAKAygLArIgKAVQgGAMgBAKIAGAPQAFAOAIAAIANAAQAJAAAEACQAEgHgEgNQgOg3AFg3QAFhBAOgqQASg6AagrQAfg1AegmQAggoAvgoQAugoAygWQA4gYAzgKQA2gLA5ACQBBABAuAMQA3AOAwAWQAnATA2AlQAmAcAoAwQAlAtAVAsQAZA0AJAuQANA+gJApQgEAQACAKQAKgIAJgPQAKgQAHgGQAbgYA7gbQAwgWA0gJQA8gKAxACQAwACA+AQQA0AOA0AZQAtAWAxAmQAtAkAjAoQAiApAcAyQAdA2APAwQARA0AGA3QAFAzgFA4QgEArgTA6IgfBYQgOAmgUAmIgNAWIgMAVIAMARQAcArAMAlQAQA1ABArQABAzgKAyQgHAmgbA4QgWAvgfAlQghAnglAaQgcAUgVAKQgFApgLAkQgMAogXAsQgYAvgaAfQgaAhgnAjQgkAggnAYQgpAbgqARQgoARgvAIQgyAJgngEQgKAAgNgDIgTgFIgBAnQgEAngUAxQgTArghAoQghApgrAdQgtAhgsARQggANhBAJQgMABgPAAQgeAAgsgGg");
	this.shape_4.setTransform(10.9634,-55.826);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("AMpUOQg6gJgogMIhdghQgTgGgYgEIgwgGQgWgDgggIIg5gQQg1gOhPgbQgUgGgdgPIgxgZQgXgLgpgaIhIAaQg2AVhWAXQhBARg/AAQhBAAg6gJQg2gJg9gVQglgOhDgjIhlg3QgbgPhPgmQg4gchHgoQhDgmg/gyQgcgXgjgmIhChJQgzg7gTgdIghgIQg9gRhmgfQgcgJglgGIg8gKIg8gMQgigHgZgJQg9gTgzgdQgvgbgvguQgmgngjgzQgcgpgZg8QgXg4gJg1QgJg7ADg2QABghAJgsQALg4AWgxQAWg2AcgpQAlg2AdgaIBLg/IBHg5QAdgWArgeQAdgUA1gTQAqgPAvgEQAvgEAoAKIApALQAXAIANAJIAVAMQABgBABgMQAGgtAJggQAIgdAfguQAUgbAqgqQAkgkAqgTQA2gZAngDQA9gEAmAEQAmAFAtAWQAMAFAPAMIADgXQgBgwAUgvQASgvAggpQAfgqAqghQAugkArgVQAtgUA4gNQAygLA5gBQAogBA/ANQAyAKAxATQAsARAuAcQApAaAmAiQAlAfAeApQAcApAWAsQAWAuALAqQAMAwgKAsQgBAEgIARQgGAMABAKIAIAOQAGANAKACIAOACIAGACQAFABACACQACgFgDgPQgPg2AFg3QAEg9AOgtQATg6AagrQAfg0AfgmQAfgnAwgoQAxgpAwgUQA4gZAzgJQA0gKA8ACQBAACAvAMQA2AOAxAYQAnASA2AnQAnAcAmAxQAjAtAVAuQAZA4AHAsQALBAgMAoQgEAQABAKQAKgIAIgQQAIgRAGgGQAagZA6geQAxgZAygKQA6gMAzABQAzAAA7AOQAzALA3AZQAwAVAwAkQAtAhAlAqQAjAoAdAyQAdAyASAyQASA3AHA0QAGA1gEA3QgEArgSA6IgdBYQgLAjgUApQgSAcgGAPIAMARQAfArALAkQASAxACAuQACAwgJA1QgGAogaA3QgXAwgdAkQghAqgkAZQgcAUgVAKQgGArgKAjQgLAmgYAtQgZAwgZAeQgbAigmAhQgkAhgnAYQgsAcgnAQQgrARgtAIQgyAIgngDIgWgEIgUgFQAAAegBAJQgEAogTAwQgTArghAoQghAogrAeQguAggsARQghAOhAAHQgKACgOAAQgfAAgugIg");
	this.shape_5.setTransform(12.156,-59.6567);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("AM2UFQg/gMgjgMIhdghQgTgGgZgEIgwgHQgWgDgfgIIg6gRQg1gOhQgbQgUgHgegOIgygaQgVgLgrgbIhKAZQg/AVhPASQhCAPg/gCQhDgBg3gLQg1gKg8gYQgmgPg+gjIhjg1QgigShGgfQg2gYhIgnQhDgig/gxQgcgWgkglIhBhGQgyg1gVggIghgIIhVgWIhMgVQgcgIglgFIg8gJIg9gLQgigHgYgIQg8gSg1gcQgugagxguQglgjgmg1Qgegpgag7QgYg5gJg0QgLg4ACg4QAAgkAIgqQAJg1AVg1QAWg3AagpQAig1AegdIBKhDIBHg6QAfgZApgdQAegVA0gRQAtgPAtgDQAugEAoALQA5APATAPIAUANQABgCABgEIAAgHQACguAHgfQAHggAdgsQAVgfAmgoQAlgnAogSQA1gaApgDQBCgFAhAEQAoAFAtAUQARAIAMAJQACgLABgMQAAgvAVgwQAVgwAfgnQAfgpArggQAxgkAqgTQAsgUA5gLQAzgKA3AAQAoAAA/APQA3ANAqASQApAQAvAeQAmAZAoAiQAjAfAdApQAaAkAYAuQAVApANAtQAOAsgIAuIgHAUQgGANABAKIAKANQAHAMALADIAPAFIAHADIAGAEQADgGgEgNQgPg3AEg1QAEhAAOgqQATg4AagsQAdgyAigpQAhgnAvgmQAwgoAygUQA5gYAygJQA6gLA2ADQBAADAvANQA5APAvAXQAmATA2AoQAoAdAlAyQAjAuAUAvQAXA4AGAsQAKBBgPApQgGARACAJQAJgJAHgQQAHgSAFgGQAXgZA5ghQAxgcAxgLQA8gOAxgCQAygBA9AMQA2ALA1AWQAvAUAzAkQAwAhAkAnQAlAoAdAxQAgA1ARAvQAUA1AHA1QAIA0gEA4QgCApgSA9IgbBYQgLAlgSAnQgRAcgGAPIANAQQAgAqANAjQATAyADAtQADAvgIA3QgFAngZA4QgWAwgdAlQgjArghAYQgeAWgUAJQgEApgLAlQgMAngXAsQgaAxgYAdQgcAjgmAgQglAhgmAXQgoAagrASQgrASgsAHQgvAIgqgDQgKgBgggIIgBAnQgEApgTAuQgRAqgjAqQgjAqgpAcQgvAggrARQgVAIgbAFIgyAHIgUABQggAAgwgIg");
	this.shape_6.setTransform(13.3323,-63.505);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("ANCT7QhAgNgigMIhdgiQgTgHgYgEIgxgHQgVgDgggJIg6gQQgwgOhXgdQgUgHgegPIgygaQgOgHgzggIhMAXQhDAVhNAPQhCANg/gEQhGgEg0gMQgzgLg7gbQgrgTg3gfIhggzQgfgQhHgdQgzgWhLgkQhCghg/guQgcgUgkgkIhChEQg0g3gTgbIgggHQglgIgwgMIhLgTQgcgGglgFIg9gIIg8gKQgigGgZgIQg8gRg0gcQgxgZgwgsQgngkgmgzQgfgogbg6Qgag7gKgyQgLg5AAg3QAAgkAGgqQAIg2AUg1QAWg7AYgnQAgg2AegeIBIhFQAVgTAygqQAYgUAxgjQAdgUA1gRQArgPAvgDQAvgDAmAMIAoANQAXAIAMALIATANQACgCAAgDIgBgHQgBgpAFgkQAEgfAcguQAQgbAoguQAkgpAogSQA2gbApgDQA/gGAlADQArAFAsATQAQAHAOAJIADgWQADgxAVguQAVguAhgoQAggoAsggQAygkApgRQAugUA4gJQAzgKA3ADQAqACA7AQQA1ANArASQApASAtAeQAkAXAoAkQAhAdAeApQAZAkAYAtQAUAmAPAtQAPAsgFAsQgBAEgFARQgFAMACAKIALANQAIALAMAEIAQAHIAHAEIAGAGQADgGgDgOQgQgzADg3QAFhCANgnQASg3AbguQAdgvAjgqQAhgnAwgmQAxgmAxgVQA5gXAzgJQA4gKA4ADQBCAEAuANQA2AOAxAZQAmATA3ApQAnAdAlA0QAiAvATAwQAYA8AEAqQAHBEgSAoQgHAQACAKQAJgJAFgSQAFgSAFgHQANgQAWgRQANgKAdgTQAvgdAxgOQA8gRAxgCQAwgEBAALQA2AJA2AVQAwASA0AjQAyAiAkAkQAmAnAfAxQAfAwAUAzQAVA1AJA1QAIAygCA6QgCAogRA+IgZBYQgJAjgSApIgLAWIgKAWIANAPQAhAoAPAkQAUAxAEAtQAFAwgHA2QgFAqgYA2QgUAugeAoQggArgjAZQgfAWgSAKQgFAqgLAkQgMAogXArQgbAxgXAdQgdAiglAgQgmAhglAXQgoAagrASQgoARgvAIQgzAIgmgEQgIAAgigJIgBAnQgEArgTAtQgRAqgjApQghAogrAeQgvAggsAQQgVAJgbAEQgRADggAEIgUABQggAAgxgJg");
	this.shape_7.setTransform(14.4784,-67.3096);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,255,255,0.498)").s().p("AN9T5QgSgCghgHQg9gMglgNIhcgkQgTgHgZgEIgwgHQgWgDgggJIg6gRQgxgOhYgeQgUgHgegPIgzgbQgJgEg5gjIhNAVQhIAVhKALQhCALhBgGQg/gFg6gPQg1gNg2gdQgsgVgzgeQgWgNhHgjQgcgOhIgcQgzgThKghQhCgfhAgrQgcgUgkgiIhChBQgygygVgeIgggGQgbgFiEgdQgbgGgmgEQgugEgOgDIg9gJQghgGgagHQg7gQg2gbQgxgYgxgsQgngjgogyQgegmgdg8Qgbg4gLg0QgOg6AAg2QgCgjAGgrQAIg4ASg0QASg4AZgrQAeg2AeghQAYgZAvguQAggfAnggQAdgZAsgfQAbgTA4gSQArgOAvgCQAtgDAoANIAnANQAXAJAMAMIAJAHIAJAIQACgCgBgEIgBgHQgEgtACgfQACgfAZgvQAQgcAngwQAjgqAngTQA3gbApgFIAzgEQAcgBAWACQAqAEAvASQAPAGARAKIADgXQAFgxAVgtQAVgtAjgoQAggoAtgfQAwghAtgSQAtgSA5gJQAygHA4ADQAnADA9ARQAxAOAsAUQAkAQAwAgQAgAWArAlQAiAfAbAnQAWAfAaAvQATAjASAtQARArgEArIgFAVQgDANABAJIAOAMQAJALAMAFIARAJIAOAMQADgHgEgMQgRg0ADg2QAEg9AOgrQASg1AcgvQAdgvAkgqQAjgnAvglQAxglAygUQA6gYAygIQA6gJA3ADQBAAEAwAOQA1APAyAaQAnAUA1ApQAnAeAlA1QAiAwASAxQAWA/ADAoQACAhgDAWQgDAfgMAXQgJASACAJQAJgKADgSQADgUAFgGQATgcA3gmQAtggAxgPQA6gTAzgFQAzgFA9AJQA1AHA5AUQAwARA1AhQAxAeAoAnQAnAmAgAvQAjA2ASAtQAXA2AJAzQAKA0gBA4QgBArgQA8IgXBYQgKAngPAlQgPAcgFAQIAOAOQAjApAPAhQAWAuAGAwQAFAwgFA2QgEAmgXA6QgVAygbAlQgiAtghAZQgfAXgSAJQgFAogLAnQgMAngXAsQgXAsgbAiQgeAjgkAfQgiAegpAaQgrAbgoARQgqARguAIQgyAHgmgDIgXgEIgTgFIgBAnQgEAqgTAtQgRAqgjApQgiAogrAeQgvAggrAQQgVAIgcAFIgxAGIgTABQgPAAgQgCg");
	this.shape_8.setTransform(16.0666,-71.12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,255,255,0.498)").s().p("ANPTmQg9gNglgNQg/gbgdgKQgTgHgZgFIgwgHQgWgDghgJIg6gRQg1gPhUgeQgVgIgegPIg0gcIhCgoIhPAUQhMAThIAKQhGAJg+gIQhAgIg4gQQgzgPg2gfIhbg0QgQgKhLgkQgegPhEgXQgvgQhNgfQhDgcg+gpQgcgSglghIhCg/Qg1g1gSgZIgggFQgcgEiDgZQgbgFglgDIg9gGQhWgLghgJQg7gPg3gaQgygYgxgrQgogigogxQgjgrgbg2Qgbg1gOg2QgOg8gCg1QgCghAFgtQAGg5ARg0QASg6AXgrQAdg4AdggQAbgfArgsQAdgeApgjQAegaAsgfQAbgSA5gSQAqgNAwgCQAugCAnAOIAmAPQAXAKALAMQANAKAFAGQACgCgDgLQgJgoAAgjQAAggAXgvQANgcAmgzQAhgrAogVQA4gcApgFIAzgEQAdgCAXABQAsAEAvARQATAHANAIIAEgXQAGguAXgwQAWgsAjgnQAkgpArgcQAwghAugRQAsgQA7gIQAygHA3AFQAjADBAAUQA1ARAnASQAiAQAvAhQAgAWApAlQAhAeAbAnQARAYAeA0QAUAkASApQASAngBAuIgEAVQgDAMADAKQAJAGAFAFQAKAKANAHQAPAHADADQALAIAEAFQADgGgEgMQgRgyACg3QAEg/AOgpQATg2AcgtQAfgzAjglQAkgoAugjQA0gmAwgSQA7gXAxgIQA3gJA7AEQBAAEAwAOQA4ARAwAaQAmAUA2AqQAnAgAjA1QAjAzAQAwQAVBAABApQABAigDAWIgCALQAJgMAMgLQAOgMAagVQArghAygSQA6gVAygHQAzgGA+AHQA4AGA3ARQAwAQA3AgQA0AfAnAjQAnAkAiAxQAjAxAVAwQAYA0ALA1QALAyAAA6QgBArgOA8IgWBZQgHAkgPAoQgOAcgEAPIAOAOQAlAoAQAgQAXAvAHAuQAHAygEA0QgDAngWA6QgSAxgeAoQgfAsgiAbQgeAWgTAKQgFAqgLAlQgLAjgYAxQgZAvgaAfQgcAggmAiQgmAhglAWQgpAbgqARQgpARguAIQgvAIgqgEQgJgBgNgDIgUgFIAAAmQgFArgTAtQgRAqgiApQgkAqgqAbQgwAggqAQQggAMhCAGIgQAAQghAAg0gLgARlrlQgKASACAJQAJgLABgSIAAgBIgCADg");
	this.shape_9.setTransform(17.954,-74.9765);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,255,255,0.498)").s().p("ANVTcQg6gMgogQIhcgmQgTgHgZgEIgwgIQgXgDgggJIg7gSQgpgMhigiQgVgHgegQIg1gcIhCgqIhQASQhOAShKAHQhHAHg8gJQhJgMgvgQQg0gSgyggIhYg1QgSgLgagMIgsgVQgagMhGgVQg4gRhDgZQhCgZhAgnQgcgRgkggIhDg9Qg0gxgUgZIgfgEQgrgGhzgTQgagEgmgDIg9gFIg9gHQgigFgZgGQg7gPg3gZQgzgXgxgqQgrgjgngvQgigogeg4Qgbg0gQg3QgOg2gEg6QgDggAEguQAFg8APgyQARg6AWgsQAcg5AcgiQAagfArguQAagcAsgoQAdgaAugfQARgMAYgJQANgGAfgJQAsgNAvgBQAtgBAnAQIAmAPQAWALALANIAIAJIAJAIQACgCgEgKQgMgmgEgkQgDggAVgxQAMgbAlg2QAfguAogVQA5gdApgGQBEgIAkACQAuACAvARQASAGAQAJIAFgXQAIgwAXgtQAXgrAkgoQAlgoAsgcQA0ghAqgOQAtgQA7gGQA0gGA1AHQAjAEA+AVQA0ATAmATQAhAQAvAiQAiAYAlAiQAgAeAbAmQALAQAiA6QAVAjATAoQASAlABAtIgCAVQgCANADAJIAQALQAJAJAPAHQAPAIAEAEQAJAIAGAIQADgHgEgMQgSg1ADgyQADg+APgqQASg0AegvQAdgwAmgoQAogpArggQA0glAwgSQA6gWAzgIQA1gIA9AEQBAAFAxAPQA5ARAvAaQAnAWA0ArQAmAeAkA5QAiA0APAxQAUBFAAAmQAAAbgDAUIAGgGQANgNAagWQApgkAygUQA7gXAwgIQA0gJA+AFQA0AEA8ARQAyAOA3AfQAzAcApAkQAoAiAkAwQAkAxAXAvQAYAyANA3QAMAzABA5QABAmgOBCIgTBYQgIAngMAlIgJAWQgGANgCAIIAPAOQAlAkATAiQAZAuAHAuQAJAygDA0QgCApgVA5QgTAzgbAmQggAvggAaQgcAWgVALQgFAqgLAlQgNApgXArQgYAugaAgQgeAkgkAeQgnAhgkAXQgoAagrARQgnARgxAIQgvAIgpgDQgJgBgOgEIgTgFIgBAnQgEAqgTAtQgSAqgiApQgjApgqAcQgyAhgqAPQgVAHgbAEQgPADgjADIgMAAQghAAg3gMgARKq2QAIgJAAgPQgLAQADAIg");
	this.shape_10.setTransform(19.837,-78.789);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,255,255,0.498)").s().p("ANZTTQg7gNgngQQg/gbgdgLQgSgIgZgEIgxgIQgWgDghgKIg7gSQgxgPhbggQgVgHgfgRIg1gdQgQgIg0giIhRARQhNAPhNAGQhIAEg8gLQhBgMg2gTQgzgTgwgjQgTgNhCgpQgVgNhAgcQgXgLhGgTQg+gQg8gVQhBgVhBglQgdgRglgeIhCg6Qg0gvgUgZIgggDQg/gHhegOQgagDgmgCIg9gEQhTgIglgJQg+gOg1gYQgwgVg1gqQgqghgqgwQgjgngeg4Qgeg2gPg0QgRg7gEg1QgDggACguQAEg5AOg2QAOg4AXgwQAbg6AbgiQAfgoAkgoQAggkAngiQAhgeArgdQARgMAYgJIAsgNQAqgMAygBQArgBApARIAmARQAWAMAJAPIAJAJIAIAJQACgBgFgKQgQglgIglQgFgfASgzQALgcAig4QAdgwApgXQA5geAqgGQBJgKAhACQAuABAxAQQAVAHAPAHIAFgWQAJgwAZgtQAXgqAmgoQAjglAvgdQA0gfAsgOQAvgPA5gEQA0gFA0AIQAkAGA8AWQAwASApAVQAkATApAgQAfAXAmAkQAdAcAdAnIAXAkIAVAjQARAcAYAsQAUAlADAsIgBAVQgCAMADAKIASAKQAKAIAQAJQAPAHAFAGIAQARQADgHgFgLQgSg0ADgzQACg8AQgrQASgzAfgwQAegvAmgnQAlgmAvgiQAzgkAygSQA8gWAxgHQA4gJA7AGQA/AFAyAQQA5ASAvAbQAlAVA2AtQAmAfAjA6QAiA1ANAyQATBFgBAnIgCAdIAbgbQArgnAvgVQA6gaAxgJQAxgKBBACQA3ACA6APQAvAMA7AeQA1AcAqAiQArAkAjAtQAmAwAXAvQAaAyAOA2QAOA1ACA3QABAogMBAIgRBYQgGAngLAlQgMAcgEAPIAQANQAnAjATAiQAcAuAIAsQAKAygCA1QgBApgUA5QgQAygcApQgfAvggAbQgjAbgPAHQgFAugKAhQgNApgXAsQgaAwgYAeQgaAfgoAjQgjAegpAZQgoAbgqARQgoARgwAIQgvAIgqgEQgJgBgNgDIgUgFIgBAmQgDAogUAvQgRArgjAoQgiAogsAdQgwAggrAPQgVAIgcAEIgxAEIgLABQgiAAg4gOgAQ2qfQAGgIAAgNQgJANADAIg");
	this.shape_11.setTransform(21.753,-82.7886);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(51,255,255,0.498)").s().p("AOQTYIgygLQg/gQgigOQg/gdgdgLQgTgIgZgEIgxgIQgWgDghgKIg8gTQg1gQhYggQgWgHgfgRIg1gdQgNgHg3gkIhUAOQhRAPhKADQhIACg+gNQhDgPgygUQgxgUgwgmQgNgKhEgsQgQgLgZgLIgogSQgRgHgZgGIgygMQg0gMhFgUQg+gShEgjQgcgPglgdIhEg4Qg1gugTgXIgggDQgxgDhrgMQgZgDgogBQgqgBgSgCIg9gFQgigEgagGQg7gNg4gYQgwgUg2gpQgrghgrgvQgiglghg5Qgfg4gQgyQgRg5gGg3QgEglACgpQACg3ANg5QANg5AVgwQAag6AbglQAZgjApgvQAgglAngjQAfgeAugeQARgMAZgIIAtgOQApgLAzAAQAtAAAnATIAlASQAWAMAJARIAJAKIAIAKQACgBgGgKQgXgkgJgkQgJgeAPg1QAGgTAMgZIAYgsQAbgyApgYQA6ghAqgGQBHgLAlABQAvABAzAPQATAGASAIIAGgXQALgvAZgtQAYgqAognQAngmAtgaQA3gfApgMQArgNA+gEQAzgDA1AKQAlAGA5AYQA5AYAdARQAiATAqAhQAhAZAiAiQAcAbAcAmIAWAjIAWAjQAQAZAZAsQAUAjAGAsIAAAVQAAAMADAJIASALQAKAGASAKQAPAIAGAGQAIAHAJAMQADgHgFgLQgSgzACgzQADg7AQgsQAUg1AegtQAfgwAmgmQAngnAvgfQAwgiA0gTQA9gVAxgHQA3gIA9AGQA/AGAyAQQA5ATAvAcQAiAUA5AvQAkAfAlA9QAgA2AMAzIAMA3QAFAegBAZIgBAHIAKgKQApgpAvgXQA3gbAzgNQAwgLBCAAQA2ABA9ANQAxALA6AcQA2AaArAhQArAiAmAuQAmAvAaAuQAbAyAPA2QAOAxAEA7QADAsgMA8IgPBYQgEAkgKAnQgLAdgDAPIAQAMQAqAjATAfQAdAuAKAsQALAvAAA3QAAAogTA8QgQAzgaApQgfAwggAbQgfAZgSAKQgFArgLAlQgLAngYAtQgZAvgaAgQgcAigmAgQgjAegoAaQgoAZgrASQgnARgxAIQgvAIgqgEIgWgEIgUgFQAAAegBAIQgDAogUAvQgRAqgjApQgjAogrAdQgxAfgrAPQgVAHgcAEIgyAEIgLABQgSAAgVgEgAQjqFQAFgIAAgKQgHALACAHg");
	this.shape_12.setTransform(23.6275,-87.0172);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(51,255,255,0.498)").s().p("ANjTHQg8gPglgQQg/gdgcgMQgTgIgZgEIgxgIQgXgEghgKIg8gTQgxgPhegiQgWgIgfgRIg2geIgigVIgjgXIhVANQhUAMhKABQhJABg9gQQhAgQg0gXQgygWgsgnQgQgPgXgPIgmgaQgQgKgYgLIgngQQgVgJhEgMQhIgOgwgMQhCgRhAgfQgdgOglgcIhEg2QgygogXgaIgfgBQhBgDhagJQgZgCgoAAQgqgBgTgBQhOgFgrgJQg8gMg4gXQg1gWgygmQgsghgrguQgjglgig4QgfgzgSg2QgTg2gHg5QgFgmABgqQACg8ALg0QAMg5AUgxQAXg5AcgoQAbgoAlgtQAegkAqgnQAggeAvgeQASgMAYgIQANgFAhgIQArgLAzABQAsABApAVIAlATQALAIAHAIQgNgUgHgVQgMgfAMg2QAHgcAehAQAZg0AqgaQA5giAsgIQBIgMAmAAQAxAAAzAOQAbAIAMAGIAGgXQANguAbguQAYgnAqgoQAmgkAvgbQA4geAqgLQAugMA7gCQA0gBAzALQAjAHA6AaQAxAVAkAVQAcARAtAkQAgAZAhAiQAbAbAbAmQAJALANAXIAVAhIArBDQAVAgAIAtQABAEAAAQQAAANAEAJIATAJQAJAGAUALQAQAIAHAHIARAUQADgFgEgNQgSgxABg0QADg7AQgrQATgxAggxQAggvAngmQApgnAugeQAygiAzgRQA7gUA0gHQA3gIA8AHQBCAHAwAQQA6AUAvAdQAfASA7AzQAlAfAiA+QAgA5ALAzIALA4QADAWAAASQAkglApgXQA4geAxgOQAxgNBCgCQA5gBA6ALQAxAJA9AbQA4AZAqAgQAtAhAmAsQAqAwAZAsQAdAyAQA1QAQAyAFA6QAEApgKA/QgLBGgCATQgDAngJAkIgHAVQgEANgBAJIARALQAqAgAVAgQAeAsAMAsQANAzABA0QABAngRA9QgPAygaArQgeAzgfAaQghAcgQAJQgEApgMAnQgLAogYAtQgZAwgaAfQgdAiglAgQgjAdgoAbQgtAbgmARQgrARgtAIQgtAHgsgDQgJgBgOgDIgUgFIAAAmQgFApgSAuQgTArgiAnQglAqgpAbQgzAggpAOQgWAHgbADQgPACgjACIgIABQghAAg8gQgA1lpLQACAFAGAHIAHALQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBgBIgFgGIgLgPIABADg");
	this.shape_13.setTransform(25.5436,-91.2485);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(51,255,255,0.498)").s().p("ANoTBQg9gQgkgQQg/gegcgMQgTgIgZgFIgxgIQgXgDghgLIg9gTQgygQhegjQgWgIgggRIg3gfQgNgHg5glIhWALQhaAKhGgBQhMgCg7gRQhBgSgygZQgxgYgpgpQgQgQgWgPIgkgaQgQgKgWgKIgmgPQgPgGgXgEIgwgHQg9gJg5gMQhBgMhCgeQgdgNglgaQgUgOgxglQgwgkgagcIgfAAQgzgBhogGQgZgCgoAAQgqABgTgBQhUgFglgIQg8gLg5gWQgxgUg3gnQgrgfgtgvQgmgmghg2Qggg0gTg0QgTg2gJg7QgFglAAgpQAAg6AKg3QAMg9ASgvQAVg4AcgrQAdgtAigrQAcgjAsgqQAfgdAyggQASgMAZgIIAvgMQAqgKA1ACQAqABAsAXIAbAQIgFgKQgQghAKg2QAFgfAbhBQAYg4ApgaQA4glAugJQBOgNAigBQAygBA1ANQAcAIANAGIAHgXQAPgwAbgrQAYgnAsgoQAngjAwgaQA4gcArgLQAugLA7AAQA3AAAwAMQAiAJA6AbQAwAXAiAVQAcARAsAlQAeAZAgAiQAdAdAYAjIAVAhIAVAhIAsA/QAVAfAKAsIADAVQABAMAEAJIAUAJIAfARQAQAIAIAIIASAVQADgGgFgMQgSgwABgzQADg7ARgsQATgxAhgxQAhgvAngkQAogkAvggQA0ghAygQQA+gUAygHQA5gHA7AHQBDAIAvARQA2ATAzAfQAkAXA2AwQAjAfAjBBQAfA6AKA0QAIArABAOIACASQAcgbAfgTQA0ggA0gQQAugOBFgFQA3gDA9AKQAxAHA+AaQA7AZApAdQAsAeAqAtQAqAuAbAtQAfAxARA0QARAzAHA5QAEApgJBAIgKBYQgCAhgIAqIgFAVQgEANgBAJIARAKQAsAeAXAfQAgArANAsQAOAyADA1QACAqgQA7QgOA0gYAqQgeA0gfAbQgcAZgUANQgEAqgMAmQgMAqgXAsQgZAwgaAfQgaAfgoAjQgkAfgoAZQgoAagrASQgnARgxAIQgvAJgqgEQgJgBgNgDIgUgFIgBAmQgEAngUAwQgRAqgkAoQgiAogsAcQgxAfgsAPQgVAHgcADIgxADIgIABQgiAAg7gRg");
	this.shape_14.setTransform(27.4169,-95.49);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(51,255,255,0.498)").s().p("ANuS6Qg6gPgngSQg/gfgcgMQgTgIgZgFIgygIQgWgEgigKIg9gUQgtgOhlglQgWgIgggSIg3gfQgPgIg4gmIhYAJQheAJhEgDQhLgEg9gTQhBgUgxgbQgxgbgmgqQgPgQgUgQIgkgaQgOgLgWgJIgkgNQgOgFgXgDIgugFQg+gHg3gIQhDgKhAgaQgdgMgmgZQgSgMgzglQg1gmgWgXIgfAAQhDABhXgDIhBAAQgoABgWgBQhOgDgsgIQg/gMg2gVQgzgTg2gmQgsgfguguQgmgmgig1QgggygVg2QgUg2gKg6QgFgdgCgyQgBg8AJg2QAKg6ASgzQAVg6AagrQAagrAkgvQAegoArgoQAfgdA0ghQATgLAZgIIAwgLQAsgKA1ADQAqACAsAaIAAAAQgJgdAEgqQADgiAZhCQAKgdAMgTQAQgXAXgQQA6goAugJQBRgQAhgBQA0gCA2ANQAdAHAOAFIAHgWQARgvAdgsQAZgmAtgnQAogjAxgYQA4gbAsgKQAqgJA/ABQA3ABAwAOQAhAJA5AdQAvAZAhAVQAbASArAlQAbAYAhAiQAbAdAYAiIAVAhIAUAfIAtA9QAXAdAMAsIAEAUQACANADAIIAVAKIAhAQQAQAIAIAJQAIAHALAPQADgGgFgMQgSgvACg0QACg6ASgsQAVgyAggvQAggtAqglQApglAvgeQA1ggAygQQA7gTA0gGQA5gGA8AHQBDAIAwASQA4AVAwAfQAjAXA3AyQAiAeAjBEQAeA5AJA3IAIA2QATgRAVgOQA2gjAxgRQAwgRBDgGQA3gFA+AIQA1AHA7AXQA7AWAsAdQAuAeApArQAsAsAdAtQAdAtAWA3QATA0AHA4QAFAmgHBDIgIBYQgBAkgGAmQgIAcgBAPIASAKQAtAcAYAeQAiAqAOAsQAQAwAFA2QADApgOA9QgMAxgZAvQgdA0geAcQgdAbgTAMQgEApgLAoQgNAqgXAsQgaAygZAeQgcAhgmAhQgnAhglAXQgoAbgrASQgpARgvAIQgyAJgngEQgIgBgjgJIgBAnQgEAogTAuQgSAqgjApQgjAngtAcQg0AggoANQgWAHgbADIgyADIgGAAQgiAAg8gSg");
	this.shape_15.setTransform(29.2793,-99.7493);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,255,255,0.498)").s().p("ANzS0QhBgUgggPQg+gfgdgMQgSgIgZgFIgygJQgXgDgigLIg9gVQg5gShbghQgWgJgggSIg4ggQgRgJg3glIhZAHQhfAHhGgGQhJgFg/gWQhCgWgvgcQgygegigrQgNgSgUgQIgigZQgOgLgVgIIgigNQgNgEgWgCIgtgCQhEgEgwgFQhCgIhAgXQgegKgmgYIhGguQg1gkgXgXIgeACQg5AChhgBIhCACQgoABgWAAQhLgCgvgIQhAgLg2gUQgzgTg3gmQgtgfgvgsQglglgkg2Qgjg0gUgzQgVg1gLg7QgHgjgCgsQgCg6AIg4QAJg9ARgyQATg6AZgtQAcgvAiguQAegpArgpQAjggAygeQATgMAbgHIAwgLQAtgJA2AEQAgACAiARQgFgWABgbQACghAVhHQAJgeAMgTQAOgZAYgRQA5grAwgKIA6gMQAhgGAZgCQA0gDA5AMQAeAHAOAGIAIgXQATguAegsQAZgkAvgoQApghAygYQA4gaAtgJQAugJA8AEQAzACAzAQQAgAKA4AeQAyAcAcATQAaATApAlQAbAYAgAjQAXAZAaAlQAHAJANAXQAMAUAIAKIAuA6QAYAcAOAsIAFATQADANAEAIQAOAFAHAEIAiARQARAIAJAJIAUAXQADgGgFgLQgTgyACgxQADg7ASgqQAVgyAigvQAggtAqgkQAugnAsgaQAzggA0gPQA+gTAygGQA5gGA8AJQBCAIAyATQA2AVAyAhQAhAVA5A1QAiAgAiBFQAdA7AHA3IAEAiIAWgRQA4gmAvgSQAxgTBBgIQA8gHA6AGQAxAFBAAWQA8AVAtAbQAxAfApAoQAtAtAeAqQAgAvAVA1QAUAwAJA8QAGAjgFBFQgGBAAAAYQAAAkgEAlQgHAcAAAPIASAJQAvAaAZAdQAjAqAQAqQASAxAGA1QAFArgNA8QgLAzgXAuQgdA3gcAbQggAfgRAKQgEAtgLAkQgLAqgYAtQgaAygZAeQgXAcgrAnQgmAhgmAYQgqAbgpARQgqASgvAIQgxAIgogDIgXgEIgUgGQAAAegBAJQgEAogUAvQgRApgkAoQgiAnguAdQgzAfgqANQgWAGgbADQgMABgmACIgDAAQghAAhAgTg");
	this.shape_16.setTransform(31.1476,-103.9966);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203,-226.3,437.1,384.9);


(lib.PuppetShape_4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("AInXlQhBgCgygMQg/gQgugUQgygVg0ghQgvgfgvgoQgbgZgegiQgWgYgMgSIgqAkQgvAlgyAbQg0Acg0APQg2AOg3AFQgzAFg3gHQg3gHgugMQhCgRgggKIhggiQg0gVgwgaQgxgaguglQgkgdgyg5QgWgagSgdIgXAKQg+AZg6AMQg3AKhEgEQg1gCg/gPQg8gNgxgVQg5gYgtgbQgygfgqgjQgrglgkgpQgkgqgdguQgdgrgYg1QgOgdgOgqQgQgxgLg7QgKg6gBg0QgBg6AFg0QAIhCANguQAPg4AcgyQAagwAogpQAegfAzgkQAzgjAjgRQBEghAVgHQAWgIBGgTIAagFQABgGgBgMIADhrQACgsARg9QANgxAZg4QAQglAJgRQAQgeAUgVQA0g2AzgCIA8gEQAlgDAWADQAvAHAoAlQASAQABALQgBgJgFgIQgcgmgEgvQgDg5AGglQAJgyAVgtQAYgzAcglQAdgmArgkQAnghAwgbQAjgTA+gTQAzgOAygGQAxgGA1AFQAyAFAyANQAvALAuAZQAtAYAmAeQAkAcAhAmQAfAkARApIAGAWQADANAEAIQAMAAAKACQAMACAVABQAWACAKACQAVADAJADQACgFgBgPQgFgzAIg6QAJg8AQgsQATg3AagsQAagtAjgtQAbgiA0gsQAugmAygWQAzgXA1gKQA2gMA1AAQA9AAAvAKQA3ALAuASQAqAQA0AgQArAaAmAnQAoAoAZAnQAeAsAPAsQAUA3ACAoIACAYQALgGANgNQAOgOAHgEQAigWA6gVQA1gSAvgHQA4gIAzABQA1ACA3ALQAuAKA5AWQAzAVAtAdQAvAdAoAlQAnAjAjAtQAiAsAZAwQAZAyAQAzQAQAzAHA3QAHA4gDA1QgDAygMA5QgJAvgVA3QgLAbgRAkIAJAYQATA4AJAxQAKA5AAA1QgBA3gKA2QgJAygUA3QgSAygdAyQggA0ggAlQgYAdgYAWQgDA2gKAuQgJAxgUA4QgWA3gZArQgbAugkArQglAsgoAhQgrAkgvAcQgwAcgyATQg4AVgyAJQgcAGgdADIgRAxQgVA2gbAtQgeAxgjApQgmAsgqAiQgtAkgvAaQgvAcg2ATQg2ATg3AJQgwAHgtAAIgVgBg");
	this.shape.setTransform(5.9289,-13.731);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("AIsXaQg+gCgzgNQg6gOgygUQg2gWgwgeQgwgdgwgoQgagVgjglQgVgXgOgSIgsAkQgvAkgzAcQgzAbg3APQg4AOg2AFQg1AEg3gHQgxgGg1gOQhBgSgigMQhDgZgegMQg0gVgygcQg0gdgtglQgngggxg7QgZgdgRgcIgYAIQhBAVg6AJQg7AIg/gEQg4gEg7gNQhBgQgsgTQg8gagpgZQg0gignghQgsgnghgoQglgtgbgsQgbgrgYg3QgNgggMgoQgOgugJg+QgIg4ABg2QABg7AIgyQAKg6APgyQASg5AbgvQAbgsAogqQAdgdAzgkQAxghAmgSQA/geAZgIQAagIBCgQIAagEIABgRIAFhpQADgrASg8QANgrAcg9QAQgiAKgRQARgdAUgUQA0g1AygBIA7gFQAkgDAXAEQAtAGApAlIAMANQAGAHABAHQgCgMgEgGQgbgngDgvQgCg2AHgpQAJguAXgvQAagzAcgkQAfgmAsgjQAqgiAugYQAkgTA9gQQA0gOAygEQAzgFAzAGQAzAGAwAOQAxAOAsAZQArAYAnAgQAjAdAfAoQAeAkAPAqIAFAWQACANAEAIIAUADQANADATACIAfADQATADAKAEQABgFgBgPQgGg1AIg4QAJg7AQguQASg2AagsQAdgyAggoQAdglAygpQAwgnAwgWQAygXA2gLQA3gLA0AAQA8AAAwAJQA0ALAxATQAtARAxAfQAqAaAnAnQAnAnAaAoQAcArARAuQATA4ACAnQABARACAHQALgGANgNQAOgOAHgEQAfgVA8gWQAzgSAygHQA1gHA2ABQAzACA4AMQAwALA3AWQAzAVAuAeQAuAdAoAmQAoAlAgAsQAiAtAYAwQAYAwAQA1QAOAwAHA7QAGA5gEAzQgEAvgMA7QgKAsgWA5QgKAagSAjIAJAYQAUA3AJAxQAJA5AAA0QAAAzgLA5QgIAugVA6QgTAzgdAvQgeAygiAmQgbAegWAUQgDA1gJAuQgKAzgUA0QgTAygcAvQgeAyghAmQgiApgrAjQgvAngqAYQguAbg0ASQg2AUgyAJQghAGgYACQgEARgMAfQgTA1gcAuQgfAzghAmQglArgqAiQgrAjgxAbQgvAbg1ASQg6AUgzAHQgrAGgqAAIgdgBg");
	this.shape_1.setTransform(6.0905,-15.4109);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("AIyXQQg8gDg0gNQg4gNgzgUQgxgTg2gfQgwgcgygmQgbgVgkgkQgSgSgTgWIgtAjQgtAhg4AfQg0Abg3AOQg7APg0ADQgzAEg6gHQgwgGg4gPQhCgUgigNQgygTgwgVQgugSg5ghQg2gfgugmQglggg1g/QgeglgOgXIgZAGQg/ARg/AGQg+AGg7gFQg+gEg1gNQg8gOgxgVQg3gYgtgdQgtgcgtgnQgrgnghgpQgigrgcgwQgZgrgWg4QgLgagNguQgNgygGg7QgGg2ADg3QAFhBAJgrQAOg9AQgsQATg3AdgsQAagsApgpQAcgdA0gjQAwghAmgQQA9gcAcgIQAogLA0gJIAagEQABgFAAgMIAHhnQADgoAUg9QAPgtAcg4QASgiAKgQQARgcAUgTQA1gyAxgCIA6gEQAkgDAWAEQArAGAqAkQASAQABALQgBgMgFgHQgZgmgCgxQgBg1AJgqQALgxAXgsQAdg2AbggQAfgkAtgjQAogfAygYQAlgTA9gOQAxgMA2gEQAxgEA0AIQAxAGAyAQQAuAOAuAbQAvAcAhAfQAiAdAfApQAdAoAMApQACAFABARQACANAEAIQAKABAJADQAMADATACIAcAEIAcAGQACgGgCgOQgGg1AHg4QAJg6APguQAVg7AYgoQAdgyAggoQAbgjAzgsQAwgnAwgVQAygXA2gLQA2gMA2AAQA5AAAyAKQA1ALAxATQApAPA0AhQAqAaAnAnQAoApAZAnQAcAqARAvQATA1ACAqIACAYQALgHANgMQAOgOAHgFQAhgUA7gVQAzgTAygGQA4gIAzADQA2ACA1AMQAvALA4AXQAwAUAwAgQAxAgAkAkQAmAkAiAuQAiAvAWAvQAaA2AMAvQAPA2AFA1QAFA3gFA1QgFAvgNA6QgLAxgVAyQgLAZgRAjIAJAYQAVA5AHAtQAKA8AAAvQgBA1gKA4QgKAxgVA2QgTA0gdAtQgdAvgjAoQgTAUgeAcQgEA3gJAqQgJAugVA4QgVA2gaAqQgeAxghAmQgjApgqAiQgtAlgrAZQgyAbgwARQg2ATgxAJQgfAFgZACQgFASgKAdQgTA1gbAtQgdAygiAmQglArgqAiQguAlgtAYQguAag2ASQg1ATg3AGQgpAGgnAAIghgBg");
	this.shape_2.setTransform(6.2125,-17.1217);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("AI5XFQg+gEgygMQg/gQgrgQQgxgSg2geQgvgag1gmQgbgTgmglIgognIguAjQg3AngwAYQg2Acg2ANQg4AOg4AEQgzAEg7gIQgxgGg5gRQg2gQgvgTQg/gagkgQQg1gYg1gfQg2gggvgoQgoghg1hCQgfgngPgYIgZAFQhBANhBADQhAAEg4gFQg+gGg0gMQg+gPgvgVQg5gZgqgcQgyghgngkQgqgngggrQgkgtgZguQgYgsgUg5QgKgbgLguQgMgzgEg5QgDg5AFg0QAGg8AMguQAQg6ATgtQAUgyAeguQAbgqAognQAcgdA0giQAvgfAogRQA8gaAdgHQAogKAzgIIAagCQACgFAAgMIAJhlQAFgqAVg5QARgvAcgzQASghALgQQASgaAUgTQA0gwAxgCIA5gEQAjgCAWADQArAHApAjQASAQACAKQgBgMgFgHQgZgpAAgvQAAg3AKgoQAMgwAZgtQAcgxAegjQAggkAugiQAtggAugVQAmgRA9gOQA1gLAygCQAvgCA2AIQAuAIA1ARQAwAQAqAbQAsAcAkAhQAgAeAeArQAcApAJAqIACAWQABANAEAIQALACAHADQAMAEASACQAVACAFABQAVAFAGACQACgHgCgNQgHg3AIg2QAHg7AQguQASg2AagtQAgg2AdgkQAagiA0gtQAugnAxgWQA2gYAzgKQA3gLA1AAQA8AAAvAJQA1ALAxATQApARA0AgQArAaAmAoQAmAnAbAoQAcAsAQAuQATA2ACApQAAANACALQALgHANgMQAOgOAHgFQAhgVA7gUQA1gTAwgGQA6gHAyADQAwACA7ANQAxAMA2AXQAvAVAwAgQAuAgAmAlQAlAkAiAvQAhAwAWAvQAXAyANA0QANAxAFA6QAEA0gGA4QgFAwgOA3QgLAsgWA1QgMAcgRAfIAKAYQAVA4AHAtQAKA4AAAyQgBA1gLA3QgIAtgWA5QgVA1gcArQgeAvgjAmQgbAdgWASQgEA2gJAqQgKAxgUA0QgVA0gaAqQgfAxggAlQgjAogqAiQgsAjgsAZQgvAbgyARQg2ASgwAIQgcAEgbACQgFATgKAcQgRAygbAvQgbAugjAqQglAqgpAiQgpAhgyAbQgtAZg3ASQg0ASg3AGQgnAEglAAIgkgBg");
	this.shape_3.setTransform(6.3118,-18.8167);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("AI/W6Qg8gFgygMQg6gOgvgQQgugRg6gdQg0gcgzgiQgZgSgqglQgVgSgUgVIgvAjQgwAhg5AeQg1Abg5AOQg3ANg6AEQgzADg9gHQgwgHg6gSQg3gSgvgUQgvgUg2gYQg1gZg2ghQg1gfgzgsQglggg6hHQgeglgSgdIgZAEQhBAHhEABQhNABgrgEQhBgHgxgMQhAgQgtgUQg2gYgtgfQgugfgpgnQgnglgiguQgigtgYgwQgWgrgUg6QgKghgIgpQgKgwgBg9QgCg3AIg1QAIg7APgtQAQg0AWgxQAWguAfgtQAbgnAogoQAhggAvgeQAugdApgRQA4gXAhgIQAygLAqgDIAZgBIACgRIAMhjQAGgrAWg2QARgsAeg0QAkg9AhgdQA1guAvgCIA4gDQAjgDAWAEQApAGAqAjQARAPADAKQgBgNgEgGQgYgqABgwQABg1ALgqQANgwAagsQAdgwAggjQAigkAtgfQArgeAygWQAkgPBAgNQA0gKAzgBQAygBA0AKQAxAJAxASQAuAQArAeQAuAfAgAgQAfAgAdArQAZAqAIAqQABAFAAASQAAANADAJQALABAHAEQAMAFAPACIAaADIAZAHQACgGgCgOQgIg2AIg4QAIg+AOgrQASg2AagtQAcgwAhgrQAagiA0gsQAwgpAvgVQA2gYAzgKQA3gLA1AAQA8AAAvAJQA2ALAwATQArASAyAgQArAaAnAnQApAsAXAkQAcAsAQAuQATA3ACApIACAXQAKgGAOgNQANgNAIgFQAhgVA7gVQAygRA0gHQA8gHAvAEQAzADA4ANQA1AOAyAWQAyAXAsAfQAxAiAjAkQAkAlAiAvQAfAvAWAxQAWAxANA1QANAzADA4QADA2gHA2QgGAsgPA6QgLAsgWA0QgMAbgRAeIAJAXQAVA2AIAuQAKA3gBAyQAAAxgLA7QgKAwgWA1QgUAygdAtQggAwgiAjQgWAYgaAWQgEA1gJAqQgKAvgVA0QgWA1gaApQgdAugiAmQgmArgmAeQgqAhguAaQgwAagwAQQg1ASgxAHQgYADgeACQgDAOgKAgQgQAxgbAvQgaAtgjArQgjApgrAiQguAlgtAXQgtAZg2ARQg0AQg3AGQglAEghAAQgWAAgTgCg");
	this.shape_4.setTransform(6.3825,-20.495);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("AJGWvQg/gGgvgMQhDgQgkgNQgsgOg8geQg5gbgwggQgagQgsgmIgrgmIgxAjQgwAhg7AdQg0Abg6AOQg5ANg6ADQg2ADg6gIQgugGg+gUQg5gTgvgWQhAgcglgSQgugWg/gmQg3gigzgsQgmgig8hKQgigsgPgZIgbACQhAAEhHgCIg9gCQgigBgZgDQhHgIgrgLQg9gQgvgVQg3gZgsgfQgvgigngmQgngmggguQgfgsgZgzQgWgtgRg6QgJghgGgpQgJgyABg7QACg7AJgwQAMg9APgqQASguAagxQAXguAggrQAcgoAnglQAegdAxgfQAugcApgRQA6gWAggGQAtgJAugCIAagBIACgQQAKhLAEgXQAGgmAYg4QASgpAgg0QAng9AfgaQA1gsAvgCIA4gDQAigCAVAEQAqAGApAiQAQAOADALQAAgMgEgIQgXgrACgvQADg2AMgpQANguAcguQAggxAfggQAhgiAwggQArgcAzgVQAlgPBAgLQA2gJAyAAQAwAAA1ALQAwALAyATQAtASArAeQArAgAhAiQAhAjAYArQAYArAGAqIAAAXQgBANADAJQAKACAHAEQAKAFAPACIAZAEIAXAGQADgHgCgNQgJg3AHg3QAHg8APgtQATg4AZgrQAdgzAfgoQAbgkAzgsQAsgmAzgXQA1gYA0gLQA4gLA0AAQA9AAAvAKQA3AMAvASQApARA0AgQAqAbAnAoQAmAnAaApQAdArAPAvQATA3ACAoIACAYQAKgGAOgNQANgNAIgFQAhgVA7gVQA0gRAygGQA0gGA4ADQAzADA4APQAuAMA4AZQAxAWAtAhQAvAhAkAmQAnAoAdAtQAgAwAUAwQAWAzAMA0QALA0ADA3QACA1gJA2QgGAugQA3QgKApgYA1QgFAMgYAtIAJAWQAVA1AIAuQAKA3AAAxQgCA2gKA1QgJAugXA3QgUAxgeAsQgfAvgjAjQgYAYgZAUQgDAwgKAtQgKAvgVA0QgWA0gaAoQgdAtgiAmQgkAogoAgQgrAigtAYQguAZgxAQQg4ASgtAFQgRACgkACQgEAUgJAaQgQAygZAtQgaAugiApQglArgpAgQgsAkguAXQgsAYg3ARQgvAPg7AGQghADgdAAQgaAAgWgDg");
	this.shape_5.setTransform(6.4388,-22.1934);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("AJMWlQg8gHgwgMQhHgSgggKQgsgNg8gdQgzgXg4giQgagQgugkIgsgmIgzAjQg0Aig5AcQgzAag9AOQg4ANg7ADQgzADg/gIQgwgHg9gVQgtgPg8gcIhngxQgzgag7glQg6gkgygtQglghhAhPQglgwgOgYIgbABQg/AAhMgGIg9gDQgigCgYgDQhHgJgrgLQhAgRgsgVQg0gYgugiQgtghgogoQgmgogfguQgggvgWgxQgVgvgOg5QgIghgFgqQgHg3AEg2QADg2AMg0QAPg/ARgmQAWgxAZgrQAYgpAhgtQAdglAnglQAfgcAwgeQAugbAqgQQA1gUAlgGQA0gIAmAAIAaABIACgQQAKg/AGghQAIglAZg3QAUgrAggvQAmg5AigbQA1gqAtgBIA3gDQAigCAVADQAoAGAqAiQAPANAFALQAAgMgEgIQgVgqADgxQAEg3ANgoQAQgxAcgqQAfgvAighQAkgkAvgcQArgcA0gTQAngPA+gJQA1gHAzABQAyACA0AMQAuALAzAVQAvAUAoAfQArAgAfAkQAhAmAWAqQAXAsACArQABAFgCARQgBAOACAJIAPAHQALAGAOACIAXADIAWAGQACgGgCgOQgJg3AHg3QAHg/APgrQATg5AYgqQAfg1AdgnQAcgjAygsQAvgoAwgWQA2gZAzgKQA4gLA0AAQA9AAAvAKQA3AMAvASQAqASAzAgQAqAaAnAoQAmApAaAoQAdAuAPAsQASA4ACAoQAAANACALQAKgGAOgNQAOgOAIgFQAkgWA4gTQA0gRAygGQA3gGA1AEQA1AEA2APQAxANA1AZQAwAWAuAiQAvAiAjAmQAlAoAeAuQAeAwAUAxQAVAyALA1QALAxABA7QABA0gJA2QgIAtgQA3QgNAugVAuQgIARgVAmIAJAXQAVA0AIAtQAKA2gBAyQgBAzgLA3QgKAugXA2QgUAwgeAsQgfAugkAiQgWAWgaAVQgFA2gJAmQgKAugVAzQgUAwgcArQgeAughAkQgmApgnAdQgoAhgvAYQgsAYgyAQQg4ARgsAFQgSACgiABIgMAtQgPAxgZAtQgbAwghAnQgkAqgpAgQgpAigwAZQgoAVg7ASQgvAOg7AFQgcACgaAAQgdAAgagCg");
	this.shape_6.setTransform(6.4537,-23.9059);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("AJSWZQg5gHgxgMQhRgUgVgHQgpgMhAgcQg0gXg5ggQgcgPgugkQgagUgUgSIg0AjQgyAhg9AeQg4Abg5AMQg/ANg1ACQg0ADg/gIQgugGhAgYQgygSg4gbQgsgVg8gfQgygZg/goQg5gkg1gwQgoglg/hQQglgvgQgbIgcgBQg/gDhOgKIg+gFQglgDgVgDQhLgKgngLQg6gQgygXQg0gYgtgjQgqgfgqgsQgkgngfgxQgegugVgzQgWg3gKgzQgIgkgDgnQgEgzAGg5QAGg8AOguQAPg4AVgpQAWgrAegvQAbgqAggnQAegmAmgiQAigeAtgbQAvgbApgOQA1gSAlgFQAzgHAnABIAaACIADgQQAHgxALgtQAHgjAcg3QATgnAjgwQAog3AhgZQA2goAsgBIA3gDQAggCAWAEQApAHAoAgQAPANAEALQABgMgEgJQgUgrAEgxQAFg1APgqQARgwAdgqQAhgvAiggQAjghAygdQAtgbAzgSQAngNBAgIQAygGA2ADQAxACA0AOQAwANAwAVQAuAUApAiQAuAmAaAhQAfAlAUAtQAWAuABArIgDAWQgDANADAJIAOAIQAKAHAOACIAVADIAVAFQACgGgCgOQgKg3AHg4QAHg+AOgrQASg4AZgsQAfg1AdgnQAbgkAzgsQAvgoAwgWQA1gYAzgLQA8gLAxAAQA+AAAuAKQA4AMAuATQAoAQA1AhQAtAdAkAmQAnApAZAoQAbArAQAvQATA1ACArQAAANACALQAKgGANgNQAOgNAIgFQAjgWA6gTQA3gSAvgEQA6gGAyAEQAzAFA4APQAzAOAzAZQAvAWAuAjQAtAiAkAnQAjAnAfAxQAeAwATAxQAUAzAKA1QAKAzAAA4QABAygLA4QgGAggTBDQgNArgWAwIgeA2IAKAVQAWA5AHAoQAKA1gBAyQgBAzgMA2QgJAsgYA3QgWAygdApQgeAsglAjQgYAXgZASQgEAvgKAsQgJArgWA0QgUAwgcAqQgdAsgiAlQgmAognAdQgqAhgsAXQguAYgwAOQg3AQgsAFIgzACIgLAsQgPAxgYAtQgaAvghAnQglArgnAfQgsAiguAYQgrAXg3APQgsANg9AEIgtACQgiAAgegEg");
	this.shape_7.setTransform(6.4669,-25.583);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,255,255,0.498)").s().p("AJZWOQg2gHgzgNIhlgZQgogLhBgbQg0gWg7gfQgegQgvgiQgXgRgYgUIg3AiQgvAfhAAgQg3Aag8ANQg8AMg5ACQgyADhCgJQgugGhCgZQgxgTg6gdIhpg1QgwgahCgrQg8gng1gwQgkghhFhYQgpg0gOgZIgdgDQgsgEhkgPIg9gHQgogEgTgDQhPgMgjgKQg9gSgvgWQg1gagsgjQgqgigogsQgkgpgdgwQgfgygRgxQgTg0gKg3QgGgggBgrQgDg3AJg1QAJg7APguQAVg7AVgkQASgfAlg3QAXggAmgtQAegjAmgiQAggcAvgbQAsgZAsgOQAzgRAogEQA1gGAlAEIAZACQACgFABgKQAKg3AKglQAKgmAcgzQAXgpAhgrQAngzAkgZQA1gmAsgBIA1gDQAggBAWADQAmAHAqAgQAPAMAFALQABgMgEgJQgTguAGgvQAGg2AQgpQASgxAegoQAjgwAjgeQAjggAzgcQAygbAwgPQAlgNBCgGQA2gFAyAEQA0AEAxAOQAxAPAvAXQAuAWAnAiQArAkAcAlQAdAoATAtQAUAwgBAqQAAAFgEARQgEAOACAJIAOAIQAJAJAMABIAUACIAKACQAGABADACQADgGgCgPQgKg4AGg3QAHg+AOgrQAUg8AXgoQAdgzAegpQAdgmAxgrQAtgoAygWQA0gZA1gKQA2gMA2AAQA7AAAxAKQA6ANAsASQAqARA0AhQAqAbAnAoQAnAqAYAnQAdAtAPAuQATA3ABApIACAXQALgGANgMQAOgOAIgFQAkgWA5gSQA1gRAygFQA4gFA0AFQAyAEA5AQQAwAPA1AaQAwAYAsAiQAsAhAkApQAlAqAcAvQAdAvATAzQAUA1AIAzQAKAzgBA5QgCA0gLA1QgHAhgTBBQgMAngYAyIgeA0IAJAWQAVAzAJAsQAKA1gBAxQgCA0gLA0QgKAsgYA3QgWAxgeApQgeAqglAiQgbAZgWAQQgEAugKArQgMAwgUAuQgUAugcArQgdAsgiAjQgkAngpAeQgrAggrAWQgtAXgwAOQgzAOgvAFQgLABgoAAQgDAXgGAVQgOAvgYAuQgZAughAnQgiAqgqAgQgtAjgsAWQgoAVg6AQQguANg7ACIgnACQgkAAgggFg");
	this.shape_8.setTransform(6.4764,-27.2887);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,255,255,0.498)").s().p("AJgWDQgzgHg2gOIhjgXQgmgKhDgbQg3gVg7geQgbgNgzgjQgWgQgcgVIg3AjQg2Ahg8AcQg3Abg9AMQg6AMg8ACQg1AChAgJQgvgGhCgaQgwgTg8gfIhqg4Qg6ggg6goQg8gng3gzQglgihHhbQgqg2gPgbIgegDQgqgGhogUQgZgFglgEIg6gIIg6gKQghgGgYgHQg6gSgygYQgygZgugmQgqgjgmgsQgkgqgbgxQgdgzgRgyQgRg3gIg1QgEggAAgsQAAgzAKg5QALg3ATguQAXg8AXgiQAUgfAngzQAWgdApgsQAfgiAlggQAigdAtgZQAsgYAsgOQAzgPAogDQA2gDAjAEIAZAEIAEgQQAOg9AIgdQALgmAdgwQAYgoAjgpQAogwAkgZQA1gjArgCIA1gDQAfAAAVADQAnAHApAfQAOALAGALQABgMgEgJQgSguAIgwQAHgzARgsQAVgxAegnQAjgtAlgfQAmghAygZQAvgZAzgPQApgMA/gFQAygDA3AFQA2AGAvAPQAuAPAyAZQAtAYAmAjQArAoAZAkQAeArAQAsQATAwgEArQAAAFgGARQgEAOACAJIAMAKQAIAJAMABIASABIAJACQAGAAADACQACgGgCgPQgLg3AHg4QAHhBAOgpQASg6AYgqQAgg3AcglQAagkAzgtQAugpAxgWQAzgYA2gMQA3gLA1AAQA/AAAuAKQAyALA0AUQApARA0AhQAsAcAlAnQAkAmAcAsQAbArAQAvQATA5ABAnIACAYQAKgGAOgNQAOgNAIgFQAkgWA5gSQAzgQA0gFQA7gFAyAFQA2AGA0AQQAvAOA2AcQAvAXAtAkQAuAkAhAnQAkAqAcAwQAeA1AQAuQASAzAJA1QAJA2gDA2QgBAwgNA5QgKAogSA4QgNAqgYAtIgdA0IAJAVQAWA2AIAoQAKA5gCAsQgBAzgMA1QgJAsgZA1QgXAygeAnQggAsgkAfQgbAYgWAPQgFAwgJAoQgLAtgVAwQgWAxgaAnQgdAqgjAkQgjAlgpAeQgrAggrAVQgsAWgxANQgzAPgtADQgRABghgBQgDASgGAZQgMAwgYAsQgXAsghAqQgkAqgoAfQgrAhguAYQgmATg7AQQguAMg7ACIgcAAQgsAAgigFg");
	this.shape_9.setTransform(6.4534,-28.9515);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,255,255,0.498)").s().p("AJmV3Qg2gIgxgNIhigXQgkgIhGgaQg0gTg/geQgdgNg0gjQgVgNgegXIg5AjQguAdhGAhQg5Abg7ALQg7ALg9ADQg2ABhAgJQgqgGhHgcQgogPhFglIhsg7QgxgbhFgvQg/grg2gyQgnglhIhdQgpg0gSgfIgegGQgigGgtgKIhHgQQgZgGglgFQgrgGgPgDQhYgQgbgJQg+gTgugYQgwgZgvgpQgpgigmgvQgggogdg1Qgbg1gPgxQgPg1gGg4QgDggACgsQACg1ANg3QAOg2AUguQAbg6AYggQAXgfAogvQAUgYAsgtQAegeAngiQAigcAtgYQAugYAqgLQAygOApgCQA0gCAlAGIAZAEQACgEACgLQAMgxAMgnQAMgkAfgwQAZgnAjgnQArgvAigWQA2giAqgCIA0gCQAfgBAVAEQAkAGArAfQAMAKAIAMQABgLgEgKQgQgwAJgvQAJg1ASgqQAUguAhgpQAkgsAlgfQAngeAzgaQAugXA2gPQAngKBCgEQA0gCA1AHQA1AGAwASQAyARAsAZQAtAZAlAlQAqAoAZAnQAcAqAPAuQARAygGArIgHAWQgFANABAKIAKALQAIAKAKABIARAAIAJAAIAIACQACgGgCgOQgLg4AHg4QAGg/AOgsQATg7AYgpQAfg2AcgmQAdgnAwgqQAtgpAygXQA2gZAzgLQA4gLA1AAQA+AAAuAKQA4AMAuATQAqARA0AiQAsAcAkAnQAlAmAbAsQAcAuAPAtQASA2ACAqIACAYQAKgGAOgNQAOgNAIgFQAngXA3gRQA1gQAygEQA5gEA0AFQAyAFA4ASQAvAOA2AdQAvAZAsAjQAtAlAhAoQAiAnAcAzQAcAxARAyQASA3AHAyQAIAzgDA5QgCAwgPA4QgGAbgXBEQgPArgWArIgeAyIAJAVQAWA0AIAoQAKA1gBAwQgDA2gLAyQgKAqgZA3QgYAwgdAnQgiAsgjAdQgcAYgVANQgFAwgJAnQgLArgWAxQgXAygZAkQgdAqgjAjQgjAlgpAdQguAhgnATQgqAVgyANQg2AOgqACIgxgBQgDAWgFAVQgKArgYAwQgVAqgjArQgkAqgoAfQgsAigtAWQgmATg7APQgsALg8ABIgNAAQg0AAgogHg");
	this.shape_10.setTransform(6.4179,-30.6191);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,255,255,0.498)").s().p("ALVVzQg+AAgqgHQgxgJg1gOIgvgLIgygKQgegGhMgaQg4gTg9gcQgYgKg7gkIg1gkIg6AjQg1AghAAdQg8Abg6ALQg/AMg6ABQgzAChEgJQgrgHhIgdQgjgPhLgoIhsg8QgsgZhMg0Qg/grg4g2QgpgmhJhgQgsg4gRgeIgfgHIhRgUIhIgUQgagHgkgFIg7gKIg6gMQgigHgXgIQg8gTgxgaQgygcgsgoQgkgggog0Qgggqgbg1QgZgzgNg1QgOg1gDg5QgCgjAEgpQAEg2AQg0QARg3AWgsQAcg4AbgfQAVgZAtgxQAagcAoglQAdgbAogiQAhgbAugXQAvgXAqgLQAygMApAAQA1gBAjAHIAZAGIAEgPQAMgtAPgqQAMgiAggvQAYgjAngoQAqgsAkgWQA1ggAqgBIAzgCQAegBAVAEQAlAHApAeQANAJAIAMQAAgOgCgIQgPguAKgxQAJgyAUgtQAXgvAhgnQAkgqAngfQApgfAzgXQAtgWA4gOQArgKA+gBQA0gCA2AJQAzAHAxATQAzAUArAaQAtAaAjAmQAqAqAXAnQAbAtAOAuQAOA1gIAqQgBAFgHAQQgGAOAAAJIAJAMQAHAMAJgBIAPgBIAQABQADgHgDgNQgLg5AHg4QAHhEANgnQATg7AYgpQAcg0AfgpQAbglAxgsQAvgqAwgWQA4gaAxgKQA3gLA2AAQA/AAAuAKQA2ALAwAUQAqARA0AiQAsAdAkAnQAmAoAaApQAbAsAQAvQASA2ACArQAAANACALQAKgGAOgNQAOgNAIgFQAlgWA5gRQA2gQAygEQA7gEAxAGQA0AGA3ASQAtAPA3AdQAtAYAuAmQAtAlAgAoQAjArAaAwQAcA2APAuQARA1AHA1QAGAzgEA4QgDAxgPA3QgJAhgWA9QgOAngYAtIgeAxIAJAUQAXA2AHAlQALA1gCAwQgCAtgMA6QgLAsgZA0QgXAugfAoQgfAogmAfQgYAVgZAPQgFAugKAnQgKApgXAyQgWAxgaAkQggAsggAgQgiAigqAeQgoAdgtAWQgqAUgxANQg2AMgpACQgMAAgkgCQgCATgFAXQgJAsgYAvQgVArgiApQgfAngsAiQgsAhgtAWQgjARg+APQgmAKg3AAIgKAAg");
	this.shape_11.setTransform(6.3679,-32.3208);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(51,255,255,0.498)").s().p("ALaVpQg/gCgogHQgfgGhFgRQgVgGhLgOQgfgGhLgZQg0gRhDgbQgXgJg+gkIg2gjIg8AiQg2AfhCAeQg5Aag+AMQg+ALg7ACQg6AAg+gJQgugGhGgfQgfgNhQgsQg7ghgygeQgygdhJgyQhCgvg3g1QgagYgggnIg7hLQgvg9gQgdIgggIIibguQgbgIgkgGIg7gLIg7gNQghgIgYgIQg/gWgugaQgvgbgugsQgkgigmg0QgggsgXg1QgZg3gLgzQgLg2gBg5QAAgjAFgpQAIg1ARg0QAUg3AYgpQAdg0AeggQAYgZAugsIBDg+QAdgZAoghQAhgaAvgXQAsgVAtgKQAwgLArABQA3ACAhAIIAYAGIAEgOQAPgyAPgkQAOgiAggtQAagiAngmQAqgoAlgWQA2geAogCIAzgBQAdAAAVAEQAkAGAqAeQALAHAJANQAAgPgCgHQgNgwALgwQALgzAWgrQAXguAignQAogsAmgcQAqgeAzgWQAwgVA2gMQAqgJBAAAQAyAAA4AJQA2AKAuAUQAxAUAsAcQArAbAkAoQApAuAWAmQAZAtAMAxQANAzgLAsQgCAGgIAQQgGANAAAJIAHAOQAFAMAIgBIAOgDIAIgBQAFAAACABQADgHgDgOQgLg5AHg4QAHhCANgpQATg7AYgqQAdg0AegpQAdgnAvgrQAvgqAxgWQA2gaAzgKQA2gLA3AAQA7AAAyAKQA1ALAxAUQApASA0AhQApAbAoApQAmAqAZAoQAdAvAOAtQATA4ABAoQAAANACALQAKgGAOgNQAOgNAJgFQAogXA2gPQA0gQA0gDQA7gEAxAHQA0AGA3ATQAwAQA0AdQAtAZAtAmQAsAmAgAoQAjAtAYAvQAcA2AOAvQARA2AFA0QAGA1gGA3QgEAvgQA3QgLAmgVA3QgOAngZArIgeAwIAKAUQAVAyAJAoQAKA2gCAuQgCAvgNA3QgKArgaA0QgYAwgfAlQgeAngnAfQggAYgRAKQgGAxgJAjQgLApgXAwQgWAxgaAjQgdAogjAjQgkAjgoAcQgnAcgtAVQgrAVgwALQgxAMgtAAQgKABgOgCIgXgCQgCAbgEAPQgIAsgXAuQgVAtgiAnQggAogrAhQgrAhgtAVQgiAQg/APQgjAIg3AAIgNAAg");
	this.shape_12.setTransform(6.3294,-33.97);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(51,255,255,0.498)").s().p("ALfVfQg/gDgngIQgWgFhMgTQgSgFhNgOQgWgDgegJIg3gQQg9gTg8gYQgSgGgZgOIgsgYIg4giIg8AiQgzAdhHAgQg6Aag+ALQg9AMg9AAQg3AChDgKQgrgHhJggQgngRhJgqQg4ggg2ghQgygehLg1QhEgwg3g2QgbgaghgoIg8hNQgyhDgPgaIgggKQg8gShjgiQgcgKgkgHIg7gMIg7gOQgigIgYgJQg8gVgxgdQgugcgtgtQgkgkgkg1QgdgpgYg6QgWg4gJg0QgJg3ABg5QABgfAIgsQAKg3AUgxQAVg0AbgqQAig1AdgcIBJhAIBFg5IBFg4QAlgbArgUQAvgVAqgIQAzgKAoADQA2ADAhAJIAYAIIAFgPQAPgsARgnQAOghAjgsQAaghAogkQApglAngWQA1gcAogBIAygCQAdAAAVAEQAkAHApAdQALAJAJALQABgOgCgIQgLgvAMgyQANg0AWgqQAYgtAkgnQAngpApgdQApgcA1gWQAwgTA4gMQAsgIA+ACQA3ABA0ALQAyAKAxAWQAwAVAsAfQAqAcAkApQAqAzASAlQAZAwAJAvQALA1gNAsQgCAFgJAQQgHANgBAKIAFAPQADANAHgCIANgGIAHgBQAFgCACABQADgHgDgOQgLg6AHg4QAIhCANgpQATg7AYgqQAgg4AbglQAcgnAwgrQAugqAxgXQA2gaAzgKQA3gLA3AAQA8AAAxAKQA6ANAsATQAoAQA1AjQArAbAmApQAjAlAcAtQAcAtAPAvQATA4ABAoQAAANACAMQAKgGAOgNQAPgNAIgFQAmgWA5gQQA2gQAygCQA5gDA0AHQAxAHA5ATQAvAQA1AeQAvAcApAlQArAlAhAqQAgAqAaAzQAbA3ANAuQAPAzAFA4QAEAygFA5QgGAvgRA3QgFARgcBKQgPAngYAqIgfAvIAKATQAXA0AHAlQAKA1gCAvQgDA1gMAwQgKAqgbA0QgZAwgeAkQghAogmAcQgcAVgVAMQgGAvgJAjQgMAqgWAuQgZAzgXAgQgeAogjAhQglAkgmAaQgsAegpASQgpAUgxAKQgzAMgpgBIgugEQgCAXgDASQgIAqgWAwQgVAsghAoQgfAmgsAiQgvAigpATQgkARg9ANQgdAGgwAAIgZAAg");
	this.shape_13.setTransform(6.2735,-35.63);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(51,255,255,0.498)").s().p("ALkVUQg6gDgqgJIhhgZQgTgFgbgFIgwgHQgWgDgegIIg3gQQg9gSg+gWQgZgJhAgiQgWgMgjgWIg/AiQgwAbhLAiQg7Aag+ALQg/ALg9AAQg3ABhDgKQgsgHhJghQgegNhTgwIhwhEQgsgbhSg6QhEgyg6g4QgpgohShsQgxhAgSggIghgLQglgMgxgSIhLgdQgdgKgkgIIg8gNIg7gQQgjgJgXgJQg/gYgugdQgvgdgrgvQglgogggzQgdgtgVg5QgVg5gGg0QgHg4AEg4QACghAKgqQAMg2AXgxQAbg3AaglQAkgyAggaIBLg8IBGg1IBGg1QAlgbArgSQArgTAugIQAygIApADQA3AFAgALIAXAIIAGgOQANglAUgsQARgjAjgoQAdgjAmgfQAtglAlgSQAzgbApgBQBEgCAeAFQAiAHArAcQAJAHALANQABgOgBgIQgLgxAOgxQAPg1AXgoQAbgvAjgkQAogpAqgbQAqgcA2gVQAzgTA2gJQAsgHA/ADQA2ADA0AMQA2ANAuAWQAwAXAqAgQAtAgAgApQAoAyASAoQAYAzAHAvIACAUQAIhCAOgqQAUg8AXgqQAdgzAegqQAegoAugqQAugqAxgXQA1gaA1gKQA2gLA3AAQA8AAAxAKQA3AMAvAUQApARA1AiQApAbAnAqQAkAnAbArQAcAuAPAuQASA3ABAqQABATACAFQAKgGAOgNQAPgMAIgFQAogXA3gPQA2gOAzgDQA8gDAxAIQA0AIA2ATQAvARA0AfQAqAYAuApQArAnAfAqQAfApAaA0QAYAyAPA1QAOA0AEA2QAEA0gHA3QgGAtgTA5QgHAUgcBGQgOAjgZAsIgeAtIAJATQAXAyAHAmQAKA2gCAtQgDAygNAzQgJAngcA2QgYAtggAmQgjAogkAaQgdAVgVALQgEAqgLAnQgMAogWAuQgXAvgaAjQgeAngiAgQglAjgmAaQgtAdgoASQgoASgxALQg0AKgngBIgtgGQgCAZgCAQQgHAqgVAvQgUAsghAoQgiApgpAeQgwAjgpASQgjAQg9AMQgaAFgmAAIgmgBgAC0sWQgCAGgKAQQgIAMgCAKIACARQACAPAFgEIALgJIAIgDQAFgCACAAQADgHgDgOQgGgfAAgfQgDANgEAMg");
	this.shape_14.setTransform(6.2221,-37.2693);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(51,255,255,0.498)").s().p("ALqVJQg9gEgngKIhfgZQgXgGhFgKQgWgDgegHIg4gPQg3gOhGgYQgXgIhEgiQgcgPgfgSIg/AiQgsAYhRAkQg6AahBALQg8ALhAAAQg3ABhFgLQgcgEgggMQgWgIgkgRQgdgNhUgzIhxhFQgsgchVg9QhDgxg9g7QgbgbgjgrIhAhTQg1hHgQgcIghgNQg/gXhmgqQgdgLglgJIg8gPIg8gRQgigJgYgKQg7gYgyggQgsgdgtgyQggglgig6QgZgqgVg9QgTg+gEgxQgFg7AHg1QAEgkAMgnQAPg4AZgtQAdg1AdgkQAngyAggXIBOg2IBHgyIBGgxQAmgbAqgRQAvgSArgGQAvgIAsAGQA2AGAfAMIAYAJIAFgNQARgrAUglQAPgeAmgqQAggiAlgeQAqggAogUQA0gYAngCQBCgCAgAGQAiAHAqAcQAJAGAMANQABgOgBgJQgJgxAPgxQAPgyAZgqQAbgtAnglQApgpAqgaQAtgbA1gTQAzgRA3gIQAsgHBAAFQAxAEA6AOQA2APAsAXQAuAZAsAhQArAhAgArQAnA1ARAoQAOAkAHAgQAHglAJgZQAUg9AXgoQAhg3AagmQAegpAugqQAugqAygXQA1gZA0gLQA3gLA3AAQA8AAAxAKQA3AMAvAUQApASA0AiQArAcAmApQAkAnAbArQAcAuAOAvQASA2ACAqIACAZQAKgGAPgNQAOgNAJgFQAngWA5gPQA2gOAzgCQA+gCAvAIQA0AJA2AUQAxATAxAdQAsAaAsApQApAnAgArQAfAqAYA0QAYAzANA0QAOA5ADAyQACAxgIA6QgGAvgUA1IgkBZQgQAlgZApIgPAWIgPAWIAJATQAXAxAIAlQAKA3gDAsQgCAugOA2QgKAogcA1QgZAsggAlQgkAogkAYQgcAUgVAKQgFArgLAlQgLAngXAuQgZAxgYAfQgZAignAkQgjAhgpAbQgqAbgpATQgrARguAKQg0AJgmgCIgXgCIgVgEQgBAagCAOQgGApgVAvQgTAsghAoQghApgqAeQgsAhgsATQgjAQg9ALQgUADgeAAQgXAAgcgCgAC9ruQgJANgDAKIgCASQAAAQAEgGQAIgNACAAIAOgIQACgGgCgPIgDgaIgLARg");
	this.shape_15.setTransform(6.1417,-38.9163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203,-174.4,414.9,333);


(lib.PuppetShape_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("AmEXTQgugBhAgIQg5gIg1gJQg4gKhAgRQg8gRg9gbQgygXhMguQgtgcgZgTIgaAMQhCAchEAWQhUAbgkAIQhCAPg2ADQg+ADg6gIQg3gIg6gYQgzgUgyggQgwgegpgnQgqgmgggtQgggsgZg0QgOgegNgqQgPgygHg5QgGg5ADgxQAFhBAMgkIAehdIAehVQAKgeAVg0QANghAhgsQAcglAjgdQAlgfAlgRQAxgWAfgFIAXgEQAAgEgDgKQgNgogFguQgEglAMg2QAIgoAWg3QAVg1AfgiQApgvAlgWQA3ggAngPQAogQA2gGQATgCASAAIgIgVQgTgqgHgyQgHg4ADgtQAEgxAPg0QAPgzAYguQAYgtAjgrQAigpApgiQAhgcA4gfQAwgZAwgRQAxgQA1gHQA1gIAxABQA1ABAyAJQAkAHA+ATQAwAQAtAWQAtAVAqAeIAqAhQAMgDATgDQA6gGAuACIAzAGIAAgTQAAgwAMg6QAKg1AVgyQAWg1AdgsQAcgtAlgqQAkgmAugjQAsghAxgZQAwgYA0gRQA1gQA2gIQA6gHA0ACQA5ADA0ALQAyALA2AVQAyAUAwAdQAuAdAqAlQAqAlAhArQAjArAaAwIAMAZQAegUAcgOQAvgYA1gRQA2gQA1gIQA1gHA5ACQA4ADA1ALQAwAKA4AXQA1AVAsAcQAvAcApAlQAqAlAiArQAiArAaAwQAbAyARAyQATA1AIA1QAJA9gBAwQgBA2gKA4QgJAygUA3QgNAjgPAdIAJAZQASAwAJA6QAJA9AAAxQgBA0gKA4QgJAygUA3QgTA1gcAuQgdAygiAoQgUAYgbAcQgEA4gIAsQgJAygUA3QgTA0gcAvQgcAwgjApQgjArgrAjQgsAlguAbQgwAbgzATQg1AUg0AKQggAGgZACQgFASgMAeQgTA1gcAuQgcAwgjAqQghAogtAmQgqAjgwAcQgxAdgyASQg3AVg0AJQg6AKg2AAQg/gBgygKQg7gMgxgSQgzgTgzgdQgygcgtgkQgZgTgjgjQgRgQgTgWIghApQggAmgtAqQgoAkgxAdQgvAag1AUQgvASg7ALQglAHgyAAIgWAAg");
	this.shape.setTransform(-2.1599,-9.354);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("AmWXMQg1gDg3gJQg9gKgugJQgzgKhCgTQg6gRg8geQgzgYhGgvQgsgdgWgTIgZALQhBAchEAUQhJAYgwAIQhBAMg3AAQg+ABg5gLQg3gKg5gZQgygWgyghQgsgcgrgqQgqgogfgsQgggugXgzQgQgigLglQgQgygGg5QgHg3ADg0QADg/ALgnIAehgQAKghAVg3QANgkAXgwQAQghAkgrQAgglAjgaQAogfAkgPQAwgVAigGIAXgEQABgEgEgLQgKgsgEgsQgEgmAMg2QAIgnAWg5QAWg3AegjQAqgvAngUQA/ghAigKQAqgNA0gBQATAAARADQgEgNgEgHQgVgsgGgvQgHgzAEgwQAEgyAQgyQARg0AYgsQAZgtAkgpQAjgoApgiQAhgaA5gdQAtgXA0gQQAwgPA1gGQAygGA0ADQAxABA1AMQArAKA1AUQAqAQAwAZQAsAXAnAgIAlAiQARgEAOAAQA8gGAmAEQAVACAbAFIABgUQgBgzALg3QALg2AUgxQATgxAegwQAggyAhgkQAkgnAtgjQArghAygZQAwgYA1gQQA0gRA2gGQA6gGA0ADQA6AEAyAMQAwALA3AXQAzAWAsAdQAxAgAkAkQAnAkAhAtQAiAuAVAuIALAYQAtgcALgGQAvgYA1gRQA1gQA0gHQA1gIA5ADQAzABA5AMQA0AMA0AVQAzAUAvAdQAuAdAqAlQApAlAiArQAiAsAaAvQAbAyAQAyQASAyAIA4QAJA6gBAzQgBA3gLA2QgJAygUA3QgMAhgPAfIAJAZQASAzAJA3QAJA9gBAwQAAA1gLA4QgIAxgVA4QgSAygcAxQgfAzggAnQgWAZgaAaQgCAzgKAyQgJAxgUA3QgUA2gbAtQgcAwgjAqQglArgpAiQgrAlguAbQgvAcg0ASQg6AVgwAJQgfAGgaADQgFASgLAeQgUA0gbAvQgeAygiAoQgjAqgrAkQgpAigxAdQgzAdgxASQg1AUg2AJQg4AKg5gBQg/gBgygKQg5gMgzgTQgzgTgzgeQgwgbgvgmQgYgTgjgjQgSgSgRgVIgiAoQgkAogsAmQgnAjg0AbQgtAYg4ATQgvAQg7AJQgdAEgoAAIgogBg");
	this.shape_1.setTransform(-1.0186,-10.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("AJnXQQg+gBg0gLQg9gNgvgTQgwgSg2gfQgugbgwgnQgdgZgegfQgQgQgTgXIgjAoQgmAogrAjQguAkgwAXQgxAYg2APQgyAPg4AGQgwAEg7gFQg3gEg0gKIhpgVQg2gMg8gUQg3gSg8gfQgxgahCgvQgsghgSgRIgZALQhAAbhCAUQhIAUgzAHQg9AJg7gCQhCgCg0gMQg3gNg3gaQgwgWgygjQgrgegrgpQgogpgfgtQghgvgWgxQgPgggMgoQgPgtgIg+QgHg5ACgyQADhBAKgnQAMguAQg0QALgmAWg2QAPglAbgwQARggAogqQAlgnAigXQAqgeAkgOQAwgUAjgGIAYgFIgCgPQgJgtgDgtQgCgnAMg4QAJgqAWg3QAVg4AfgkQArgxApgSIAxgVQAdgMAWgFQAogJA2AFQARACAQAGQgCgKgFgLQgWgogGgxQgGg5ADgpQAFgvARg0QATg3AXgnQAbguAkgmQAignAsghQAjgaA4gaQAugWAzgPQAwgNA1gEQAygFA0AEQAxAEAzANQAwAOAuAUQAnAQAxAdQAnAXAmAjQAWAYANALQAOgCAOgBQBAgDAeAEQAUACAZAFIABgTQgBg0AKg3QAKgzAUg0QAVg0AcgsQAaguAlgpQAigmAvgkQArgiAygZQAxgYA0gPQA2gQA1gFQA7gFAyAEQA3AEA0AOQAxAMA0AYQAvAVAvAgQAuAiAjAkQAnAmAdAsQAfAwATAtIAJAYIA3giQArgXA3gSQA0gQA1gIQAygHA7ACQAzACA5AMQA0ALA0AVQAyAUAvAdQAwAfAoAjQApAlAiArQAjAuAYAuQAZAuATA1QARA1AIA2QAJA8gCAxQgBA0gLA5QgJAtgVA7QgMAhgPAfIAJAZQATA4AIAxQAJA7AAAzQgBAzgKA6QgJAxgUA3QgTA0gcAwQgfAzggAmQgVAZgbAbQgDA4gIAsQgJAxgVA4QgVA2gaAtQgfAzggAmQglAsgoAiQguAlgsAaQgtAag2AVQg5AVgwAJQggAGgZACQgFASgMAeQgUA2gbAuQggA0ggAlQgjAqgrAkQgqAjgxAcQgtAbg3AUQg2AUg1AJQgzAJg0AAIgKAAg");
	this.shape_2.setTransform(0.114,-11.4547);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("AJaXUQg/gBgygLQg5gMg0gVQg0gVgxgdQgvgcgwgoQgYgUgigkQgMgMgWgbIglAmQgkAlgwAlQgvAjgxAVQg1AXgzAMQgzANg4ADQgwADg6gHQgzgGg1gLIhogXQgzgNg8gVQg5gVg2gfQgvgbg+gxQghgZgagaIgYALQhCAbg/ARQhBASg5AGQg8AGg8gEQhBgFg0gOQg4gQg0gZQgwgYgxgjQgugigmgoQgpgpgdgtQgfgtgYgzQgPgggMgoQgPgwgIg7QgIg2ACg2QACg/AJgqQAKgqARg7QAMgqAXg1QARglAegxQAUghAqgoQAlgjAlgYQAugeAjgNQAugTAmgHIAZgEQAAgGgCgKQgHgugCgvQgCglANg8QAJgpAXg5QAYg9AdgiQAsgyAqgPIA0gTQAfgKAWgEQAogGA1AMQASAEANAHQgBgKgGgKQgXgmgGgyQgGg2AFgrQAEgvASgyQATgzAZgrQAagpAngpQAjglAsggQAjgZA5gZQAwgUAzgNQAwgMA1gDQAzgCAyAFQAzAGAwAPQAqANAyAYQApATArAeQApAbAfAjQAUAYALANQAMgCAQAAQA/gBAZADIArAHQABgGgBgNQgCg1AKg2QAJg0AUgyQAUg1AagsQAegwAjgoQAfgkAxgmQAtgkAwgXQAxgYA1gOQA2gPA0gEQA9gEAwAEQAzAFA3APQAxAPAzAYQAxAYAqAfQArAhAkAnQAlApAaArQAdAwAPAtIAJAYIAagSQAQgLAKgGQApgWA4gSQAygRA2gIQA3gHA1ACQA0ACA5AMQAuAKA5AWQAyAUAvAdQAtAcArAmQAoAlAiArQAkAuAYAuQAZAvASA1QAQAyAJA4QAIA5gCA0QgCA1gLA4QgKAygTA1QgOAkgOAcIAJAZQASAyAJA3QAKA7gBAzQAAA0gLA5QgIAwgVA5QgTA1gcAuQgeAzghAmQgVAagbAaQgCAygJAyQgJAxgVA4QgVA3gaArQgaAuglAsQgjAqgqAjQgsAlguAbQgvAbgzATQg4AVgyAKQggAGgZACQgFARgMAgQgUA2gbAtQgeAxgiAoQgjAqgsAkQgqAjgxAcQguAbg2AUQg5AVgzAIQgyAIgwAAIgPAAg");
	this.shape_3.setTransform(1.2743,-11.9093);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("AJOXZQhCgDgwgLQg3gMg1gVQg3gWgvgdQgtgcgxgoQgbgYgfghIgigoIgmAmQgnAlgwAiQguAgg0AVQgzAUg2AMQgxAKg6ABQgxAAg4gIQg3gIgwgLIhlgaQgzgOg6gXQg2gWg1ghQgqgZg+g1QgigfgUgVIgYAKQhBAbg9AQQg9APg+AEQg9ADg7gGQg/gIg0gPQg6gTgwgZQg2gdgqggQgugjglgoQglgoggguQgfgugWgzQgQgigLglQgQgvgJg9QgIg2ABg2QAChCAIgpQAKgzAPg0QAOgwAXgyQAUgrAggtQAWgeAtgpQArglAjgUQAygeAggLQAwgSAmgIIAZgFIgBgQQgGg7AAgmQgBgmANg8QALgvAWg1QAbhBAcggQAtg0AtgMIA1gPQAhgJAWgCQAqgEAyATQARAFAMALQgCgMgFgIQgZgogEgvQgGg3AFgpQAFgvATgyQATgyAbgqQAbgpAngnQAngmAqgdQAjgXA6gYQAxgTAygLQAxgKA1gBQAzgBAyAHQA0AHAtARQArAQAvAZQAlAUAsAhQAmAdAcAlIAOATIANAUQANgCANAAIAqABQAYABARACQAVADATAFQABgHgBgMQgCgzAJg4QAKg5ARguQATg0AbgtQAegxAignQAggmAwgmQAtgkAwgXQAwgXA3gOQA3gOAzgDQA+gEAvAGQA1AHAzAPQArAOA4AbQAuAYArAiQAoAhAjAoQAjApAYAsQAZAvAOAvIAHAYIAagSQAPgLAKgGQAogXA3gSQAygRA1gHQA3gIA1ACQA3ACA1AMQAzAKA1AWQAzAUAuAdQAtAcAqAmQAqAlAgArQAkAuAYAuQAaAzAQAxQARAzAIA3QAHA4gCA1QgBAxgMA7QgJAwgVA4QgLAdgRAiIAJAZQAUA1AIA0QAKA7gBAzQgBA3gJA2QgJAygVA3QgTA0gcAvQgeAzghAnQgTAXgdAcQgDA0gJAwQgJAxgUA4QgSAxgdAxQgeAzghAmQgmAtgoAhQguAmgrAaQgvAcg0ASQg1AVg0AKQghAGgYACQgFARgMAgQgTA0gdAvQgcAvgkArQgmAsgpAhQgqAjgxAcQgwAcg0ATQg0ATg4AKQgzAIgwAAIgPAAg");
	this.shape_4.setTransform(2.3946,-12.3542);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("AJBXdQg/gCgzgMQg7gNgygVQg1gWgxgeQgsgcgxgpQgcgYgegiQgWgXgMgRIgoAlQgnAjgzAiQgxAggzARQgyASg4AKQg0AJg3gCQg1gCgzgKQg8gKgogMIhkgcQgxgPg5gZQg2gXgxgiQgrgdg3g1QgegcgUgYIgXAKQg9AZhAAPQg6AOhBABQg/ABg3gJQhCgKgwgRQg4gTgxgbQgygcgsgjQgrghgmgrQglgogfgvQgdgqgZg2QgOgigNgmQgQgygJg5QgIg5AAg0QAAg8AIgwQAJg3APgzQANgzAagyQAXguAigqQAZggAvgmQApghAngWQA4gfAcgKQAsgQAsgKIAZgEQABgGgBgLQgDhEAAggQAAgpAOg8QAMgvAWg2QAOghAJgSQAPgcASgVQAvg1AvgJIA4gMQAjgHAWAAQAqgBAxAZQASAJAIALQgCgLgFgIQgZglgGgxQgFg2AGgpQAGgxAUgvQAVgzAagoQAbgoApgmQApgmAqgbQAkgWA7gWQAxgRAzgKQAxgIA0AAQAxABAzAJQAxAJAvATQAqASAvAbQAmAXAmAjQAkAfAZAmIALAUQAHANAFAHQAQgBAIABIAoACQAWABAPACQAWAEAPAEQABgFgBgPQgDg2AJg1QAKg6ARgtQASg1AbgtQAfgzAgglQAdgkAygpQAwglAugWQAxgXA2gNQA1gNA2gCQA7gDAxAHQA4AJAwAQQAtAPA0AcQAwAaAmAiQAoAjAgAoQAhAqAVAsQAZA1AJAqIAFAYQAKgGAQgNQAPgMAIgFQAkgVA6gUQA0gSAzgHQA2gIA1ACQA3ACA1AMQAzALA0AVQA0AUAtAdQAwAeAnAkQApAlAiArQAjAuAYAuQAaAyAQAyQAQAxAIA6QAHA9gCAwQgCAygMA5QgJAwgVA3QgLAcgRAjIAJAZQATA3AJAyQAKA5gBA1QgBA3gJA2QgJAzgVA2QgTA1gcAuQgcAwgjAqQgXAbgZAYQgDA0gJAwQgJAxgVA4QgTAygcAwQgeAzggAmQgkAqgqAkQgrAkguAbQguAbg1AUQg1AUg0AKQgdAGgdADQgEARgMAgQgTAzgdAwQgfAzgiAnQgjAqgsAkQgqAigxAcQgwAcg1ATQg4AUg0AIQgyAIgtAAIgTAAg");
	this.shape_5.setTransform(3.5813,-12.8155);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("AIzXhQhBgCgxgMQg8gPgxgUQgzgVgyggQgvgegvgpQgdgZgdghQgUgVgOgUIgpAlQgsAlgxAdQgxAeg1AQQg3ARg0AHQg0AHg3gFQgvgDg3gMQhFgPgegKQg7gRgngOQgygRg1gaQgzgYgxgkQgpgegyg2QgcgdgSgYIgXAJQg+Aag8ANQg4AMhDgBQg5gBg8gLQhAgNgwgSQg7gXgsgaQg0gegpgjQgtgkgjgoQgngsgcgsQgdgrgYg1QgPgggNgoQgOgsgMg/QgJg6AAg0QgBg7AHgyQAHg2APg3QAPg1AagyQAagxAkgoQAZgdAzgmQAvgkAlgTQA8gfAagJQAlgOA1gMIAagFQABgGgCgMIABhnQAAgqAQg9QALgtAZg6QAPgjAJgSQAQgdATgUQAwg2AygFIA6gJQAkgFAWABQAsADAtAgQATANADALQgBgLgFgIQgbglgEgwQgFg4AGgnQAIgyAUgtQAVgyAcgnQAdgoAqglQAmgiAugcQAjgUA9gVQAxgQAzgIQA0gHAyADQAyADAyAKQAxALAuAWQArAUArAdQAlAZAkAlQAjAjATAmIAJAVQAFANAFAHIAWABQAxADAXADQAXAEALAEQABgHgBgNQgFg0AJg4QAJg7AQgtQATg2AbgrQAeg0AggmQAeglAxgoQAugmAxgWQAygYA1gLQA6gMAxgBQA5gBAzAIQA1AJAyASQAoAOA3AfQAuAbAmAkQAoAmAcAmQAgAtASArQAWA1AGAqIAEAYQAKgGAOgNQAPgNAIgFQAhgVA7gUQA0gTAygHQA1gHA2ABQA1ACA3ALQAyAMA1AVQAyAUAvAdQAwAfAnAjQAlAhAlAvQAjAuAYAuQAaA0APAxQARA1AHA1QAHA7gDAyQgDA0gLA3QgKAxgVA2QgJAagSAkIAJAZQAUA5AIAwQAJA5AAA1QgBA3gJA2QgJAygVA3QgTA1gcAuQgfA1ggAlQgSAVgeAeQgDA1gKAvQgJAxgUA4QgWA3gZArQgcAvgjAqQgjAqgqAkQgvAmgrAZQgvAcgzATQg6AVgwAJQgcAGgdADIgRAxQgUA1gcAuQgfA0ghAmQglArgrAjQgrAjgxAbQgvAcg2ATQg4AUg0AIQgxAHgxAAIgRAAg");
	this.shape_6.setTransform(4.7616,-13.2511);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.4,-163.7,411.5,322.29999999999995);


(lib.PuppetShape_2copy2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("AyuUaQhqgXgcgHQhIgUg5gcQg3gcg1g1Qgfgfg2g+QgJgKgRgYQg8hUgMgTQgmhAgOhDQgOhEAGhfQADg7AQh2QAFghALgvIAWhWQglh7gNg2QgUhbAChLQABg5ABhkQAChTAKg6QAOhPATg6QAXhJAlg1QAigzA0gxQAQgQBVhJQA2gvBRgQQBRgRBJAWQCTArBkBNIAgAaQAoADAaADQBnALBQA5QgOgcACgvQACgbAKg3QAVhuBMhNQAcgdBFhMQBChGA1giQCUhiCBgIQCRgLCDBDQA+AfA5A4QAuAtAyBEQBRBuA6CkIAPArQAHAXgCARQAGgeAaggQAOgSAhgjQBghuBxhBQB0hDCKglQCkgqCFAXQCMAaByB4QBeBiA2CIQA2CIABCAQABB/g2CEQgwB6heBiIgOAPQAyA9AhA/QA/B4ALCGQAFA6gKBIQgFAqgPBQQgWCLg9BjQhPCChdA9QgxAgg9AWQgqAPhIASQhGASg0ABQhIABhAgbQh9g1iAh2IglgkQgkgmgTgaIgKAMQglAxg5A3QghAghIBBQg8A4hLAXQhTAZhGgbQg0gUgYgKQgngQgbgRQgRAIgfALQg1AUg5AGQguAFhEgCQgXAAhvALQheAKhEgJIhbgMQg0gIgpgLQgcAVgvAYIhTApQiRBLhtAAQggAAgcgHg");
	this.shape.setTransform(1.5163,-0.59);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("AypUQQhkgWgigJQhHgUg5gdQg3gcg1g0Qgfgeg2g+QgGgFgUgdQg8hTgMgTQgmhAgNhCQgOhEAFhfQAEg8AQh0QAFgfALgvQAPg3AHgfQglh6gMg0QgVhbABhKQACg5AAhkQADhSALg7QAOhPAUg5QAYhIAlg1QAjgzAzgwQAVgUBQhDQA2guBRgQQBQgQBIAUQCTApBkBMQAPALARAQIBCAFQA2AGAtARQArARApAdQgOgcACgtQABgbALg3QAUhqBNhOQAcgcBEhMQBChGA0giQCVhgCAgIQCSgKCBBCQA+AgA4A2QAvAtAyBDQBQBsA6CkIAOAqQAHAXgCARQAGgfAZgfQAOgSAhgiQBfhuBwhAQB0hBCKglQCigpCFAYQCNAaBxB2QBeBhA1CIQAyCDACCDQACCAgzCBQgwB5hdBhIgOAOQAxA8AiBAQA/B2AJCGQAFA5gKBIQgGAqgPBPQgXCNg7BgQhQCChbA8QgxAhg9AWQgpAPhIASQhFASg1ABQhGABhBgbQh+g2h+h0QgRgPgUgVQghgjgVgcIgKAMQglAxg4A2QghAghIBCQg7A4hMAXQhTAZhGgbIhLgdQgngQgcgRQgRAHgfALQg1AUg5AHQgvAFhDgDQgXAAhwAKQhdAJhDgKIhbgNQg0gIgogMQgdAVgvAYIhTAnQiOBJhuAAQggAAgdgGg");
	this.shape_1.setTransform(1.2487,-0.3986);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("AykUGQhegUgpgMQhGgUg6gdQg3gbg0g0Qgfgdg2g+IgbgiQg7hTgMgTQgmg/gNhCQgOhEAGheQADg5ARh2QAFgfAMgvIAWhUQglh2gNg3QgVhaABhKIACibQAChSAMg7QAhilBBhfQAjgzAygvQAZgXBNg+QA2gtBQgQQBPgQBIAUQCTAoBkBKIAgAaIBCAFQA2AGAtASQArARAoAeQgOgbACgtQACgYAKg5QAUhnBOhOQAcgbBDhMQBChGA0giQCWhfB+gIQCSgJCABCQA+AfA4A1QAvAtAyBCQBRBsA4CiIANApQAHAYgCAQQAHgeAYgfQAOgSAggjQBhhxBtg7QB0hACKgkQCdgoCJAZQCNAbBvBzQBfBhAzCIQAuB6AECJQADCBgxB+QgxB6hcBeIgNAOQAyA9AgA9QA/B2AJCGQAEA4gMBIQgGApgPBPQgWCOg7BeQhQCBhaA9QgwAgg9AXQgpAPhHASQhEASg1AAQhGABhBgbQh/g2h8hyIglgkQgkgngSgYIgKAMQgkAyg4A2QghAghHBBQg7A4hMAXQhTAahFgbIhMgeQgngQgcgRQgRAIgfAKQg1AUg5AHQgwAFhCgCQgXgBhwAKQheAIhCgLIhbgOQgzgJgogMQgcAVgwAXIhSAnQiOBGhtAAQggAAgdgGg");
	this.shape_2.setTransform(1.0343,-0.2451);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("AygT7QhZgSgugOQhFgUg6gcQg3gcg1gyIhVhbQgFgFgVgdQg7hSgMgTQgmg/gOhCQgOhEAHhdQADg6ASh0QAFgfAMguIAWhTQgkhygOg5QgVhZABhKIABibQADhRANg7QAjinBAhcQAjgyA0gvQAWgUBPhAQA3gsBOgPQBOgPBIASQCSAmBlBKIAgAaQAiABAgAEQBoALBOA9QgPgbACgsQACgZAKg3QAThkBQhPQAcgaBDhMQBBhGA0ghQCVhdB+gJQCQgJCBBCQBvA5BnCJQBSBrA2CgIAOApQAGAXgCARQAHgfAYgfQAOgSAfgiQBihyBrg5QBzg9CKglQCbgoCKAbQCNAcBuBwQBeBgAyCIQAqBwAGCQQAGCDgwB6QgwB7hcBcIgNAOQAwA6AiBAQA/B1AHCFQAEA4gMBHIgWB2QgYCRg4BbQhPCAhaA9QgwAhg8AWQgoAPhIATQhDARg2ABQhGAAhAgbQh+g0h8hzIglgkQgggigVgcIgKAMQgkAyg3A2QghAghHBCQg7A4hMAXQhTAZhFgbQg1gTgXgKQgngQgcgRIgvASQg2AUg5AGQgwAGhDgDQgUgBhyAJQheAHhDgLIhagPQgzgKgngMQgdAVgvAWIhSAmQiMBEhsAAQghAAgegHg");
	this.shape_3.setTransform(0.8027,-0.0884);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("AycTxQhWgSgwgOQhFgUg6gdQg3gcg1gyQgNgMhIhNIgagiQg8hSgLgTQgmg/gNhBQgOhDAHheQAEg2ARh2QAFgeAMguIAXhSQglhwgNg6QgVhXAAhKQAAh+ABgcQADhRAOg8QAlikBBhdQAjgxAzguQAagYBLg7QA3grBOgPQBNgPBIASQCSAkBkBJIAgAZQAhACAiADQA2AGAtASQAqASAoAgQgPgaACgsQABgZALg3QAShgBShPQAbgaBChLQBBhHAzggQCVhdB+gHQCPgKCCBCQBuA5BnCGQBSBqA2CgIANAoQAFAXgBARQAHgfAXgeIAsg1QBghxBsg4QB1g9CIgjQCYgnCLAcQCPAdBrBtQBfBhAxCGQAVA8ALBEQAJA2AEBIQAHCGguB2QgwB7haBZIgOAOQAyA8AgA8QA/B1AGCFQADA3gNBHIgXB1QgXCRg3BaQhPB+hZA+QgvAhg8AXQgoAQhHASQhDARg2AAQhFABhAgbQh/g1h7hxIgkgkQgggigVgcIgKAMQgkAyg3A2QggAghHBCQg7A4hLAXQhTAahGgbQg0gUgYgKQgmgQgcgRIgwASQg2AUg5AHQgwAFhCgDQgUgBhzAIQhdAGhDgLIhagQQgygKgogNQgcAUgvAWIhRAlQiMBChsAAQghAAgfgHg");
	this.shape_4.setTransform(0.59,0.0878);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("AyYTnQhRgRg1gQQhEgUg7gdQg2gcg1gxQgQgPhFhJQgHgIgTgaQg8hRgLgTQgmg/gOhBQgNhDAHhdQAEg5AShyQAFgfAMgtIAXhQQgkhvgOg5QgVhXAAhJQAAh1ABglQAEhQAOg8QAliiBDheQAjgxAzgtQAagXBLg6QA3gqBNgPQBMgOBIAQQCQAiBmBJIAgAZQAhABAiAEQBoAKBMBBQgPgaACgsQACgXAKg4QAShdBUhOIBchkQBAhHAzgfQCUhcB+gIQCPgJCBBCQBvA6BmCDQBSBqA0CcIANApQAFAXgBAQQAHgeAXgfIArg0QBghyBsg2QBzg6CIgjQCWgnCNAdQCPAeBpBqQBfBgAvCHQAVA6AKBEQAIAxAEBMQAJCJgsBwQgxB+hZBWIgNAOQAyA5AgA+QA+B1AGCDQADA2gOBIIgYBzQgXCUg3BWQhOB+hYA+QgvAhg7AXQgqAQhFASQhCARg2AAQhFAAhAgbQh+g0h7hwIgkgkQgggigUgcIgKAMQgkAyg2A3QggAghHBCQg7A4hLAXQhTAZhGgbQg0gTgXgKQgngQgcgRIgYAKIgYAIQg2AUg5AGQgxAGhCgDQgVgBhyAGQhdAGhCgMIhZgRQgzgLgngNQgcAUgvAVIhRAkQiKA/hrAAQgiAAgggGg");
	this.shape_5.setTransform(0.3626,0.2417);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("AyTTcQhQgQg2gRQhEgUg6gdQg3gcg0gwQgUgShChGQgKgLgQgWQg8hRgLgTQgmg+gNhBQgOhDAIhcQAEg2ATh0QAFgfAMgsIAXhQQgkhsgOg6QgVhWgBhIQgBhxACgpQAEhQAPg8QApiiBBhcQAjgxAzgsQAdgZBJg3QA3gpBMgOQBLgOBHAPQCRAhBmBHIAgAZQAfABAjAEQBoAKBMBCQgPgZACgsQABgVALg5QAShcBUhMIBbhjQBAhHAzgfQCVhaB8gIQCNgJCCBCQBxA6BkCAQBTBqAyCbQAKAeACAKQAGAWgCARQAHgeAXgfIArg1QBfhxBrg1QBwg3CLgkQCUgmCNAfQCRAfBmBnQBfBeAvCHQATA5AKBFQAFAlAGBWQAKCJgqBvQgvB8hZBVIgNAOQAzA7AfA7QA+B1AECDQACA1gPBHIgYByQgLBEgOAxQgUBDgfAxQhOB9hYA/QguAhg7AXQgpAQhGATQhBARg2gBQhEAAhAgbQh/g0h5hvIgkgkQgggigUgcIgKANQgjAyg2A2IhnBjQg7A4hLAXQhTAZhFgbQg1gTgXgKQgngQgbgRIgZAKIgXAIQg3AUg5AGQgxAGhBgEQgSgBh2AGQhcAFhDgNQg+gMgagGQgygLgngNQgdATguAVIhRAjQiIA9hrAAQgjAAgggHg");
	this.shape_6.setTransform(0.1295,0.4184);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("AyPTSQhMgQg6gRQhDgVg7gdQg3gcg0gvQgZgXg9hAQgKgLgQgWQg8hSgKgSQgmg9gOhBQgNhDAHhcQAFg2AThyQAGgfAMgrIAXhPQgjhogPg8QgVhWgBhIQgChrACguQAEhQAQg8QArihBChbQAjgwAzgsQAcgYBKg2QA3goBLgOQBLgOBGAPQCRAfBlBGIAhAZQAYAAAqAEQBpALBLBDQgQgZACgrQABgUALg5QARhYBWhNQAJgIBRhaQBAhHAzgfQCVhZB7gHQCNgJCBBBQBwA6BlB+QBTBqAxCZIAMAnQAFAXgBAQQAHgeAWgfQAIgLAigpQBfhyBqgzQBwg1CLgkQCRglCPAgQCRAhBkBjQBgBeAtCHQASA3AJBGIALB5QAMCKgpBsQgvB9hYBTIgNANQAzA8AeA5QA+B0AECDQABA1gPBGIgZBxQgLBEgOAwQgTBDgfAxQhOB7hXBAQguAig6AXQgrARhEARQg/ARg4AAQhDgBhAgaQiCg2h1hsIgkgkQghgkgTgaIgJANQgjAzg2A2IhmBiQg7A4hLAXQhTAahFgbIhMgdQgmgQgcgRQgRAHgfALQg3ATg5AHQgxAFhCgDQgRgBh2AEQhdAEhCgNIhYgTQgygMgmgNQgdATguAUIhRAjQiHA5hpAAQgkAAghgGg");
	this.shape_7.setTransform(-0.095,0.5833);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,255,255,0.498)").s().p("AyLTIQiXgfhsg1Qg3gbg0gvQgbgYg7g+QgJgJgRgYQg9hTgKgQQglg9gOhBQgNhDAIhbQAFg0AUhzQAFgfAMgqIAYhOQgkhngPg7QgVhUgBhJQgChnACgxQAEhPARg9QAsifBChbQAkgwAzgsQAegZBIgzQA3gnBKgOQBKgNBGAOQCPAcBnBGIAgAYQAeAAAlAEQBqAMBJBEQgQgZACgqQABgWALg3QAQhVBZhNQAJgJBPhYQBAhHAygeQBIgqA8gXQBIgaBEgEQCNgJCABCQBxA6BjB7QBTBnAxCZIALAoQAFAWgBAQQAHgeAVgeQAKgPAggmQBghzBogwQBsgyCOglQCPgkCQAhQCSAjBiBfQBgBeAsCGQARA2AIBHIAKB3QAOCKgnBqQguB8hYBSIgNANQA0A7AdA5QA+B1ACCBQABA0gRBGQgYBkgBALQgLBFgNAvQgTBDgfAxQhMB5hXBBQguAig6AYQgpAQhFASQg/ARg3gBQhDgBhAgaQh/g0h3htQgSgRgRgSQghgigTgcIgJANQgjAyg1A3IhmBiQg7A4hLAYQhSAZhGgbIhMgdQgmgQgcgRQgRAIgfAKQg3AUg4AGQgzAGhBgEQgOgBh6AEQhcAChCgOIhXgTQgxgMgngOQgdASguAUIhQAiQiFA3hpAAQglAAgigGg");
	this.shape_8.setTransform(-0.2845,0.7402);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,255,255,0.498)").s().p("AyGS9QiUgdhwg3Qg3gcgzgtQgfgbg3g7QgNgNgNgTQg7hQgMgTQglg9gOhBQgNhCAJhbQAFg2AUhwQAFgdANgrIAXhNQgkhkgPg8QgVhTgChIQgChkADg0QAEhPASg+QAuieBDhaQAjgvAzgrQAfgZBHgyQA3glBKgOQBIgNBGANQCPAaBnBFQAOAJASAPQAZAAAqAEQBqALBJBGQgRgZACgpQACgUALg5QAPhRBahNQALgJBNhXQA/hHAygeQCVhWB6gHQCNgIB/BBQBzA7BhB4QBVBpAtCVQARA0gCAZQAHgeAVgeQALgQAeglQBghzBnguQBwgyCJgjQCLgkCTAjQCTAiBgBeQBgBdArCGQAQA0AHBIQAFBPAFAmQAQCNglBkQguB9hYBRIgNANQAyA3AfA8QA+BzABCBQABA0gSBGQgYBegCAPQgLBHgNAtQgSBDgfAwQhMB5hXBBQgtAig5AYQgrARhDARQiEAkh0gvQiAg0h1hsIgjgjQgbgdgYggIgJAMQgjAzg1A2IhlBjQg7A4hLAYQhSAZhGgbIhMgdQgmgQgcgRIgwASQg3AUg5AGQgzAGhAgEQgNgBh7ACQhcAChCgOIhXgVQgxgMgmgPQgdASgtAUIhRAhQiCA1hqAAQglAAgigHg");
	this.shape_9.setTransform(-0.4903,0.9146);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,255,255,0.498)").s().p("AyCSzQiPgch0g5Qg3gbg0gtQghgcg1g5QgKgLgQgVQg9hSgJgQQgmg9gNhAQgNhCAJhbQAFgyAUhyQAGgeANgqIAXhMQgjhigQg9QgVhRgChIQgDhjADg1QAFhPASg9QAwicBDhbQAkgvAzgqQAggZBHgwQA2gkBJgOQBHgNBGAMQCOAYBoBFIAgAYQAcgBAnAEQBqAMBIBGQgRgXACgqQABgTAMg5QAQhPBbhMQAMgKBKhUQA+hIAygdQCWhVB4gHQCNgIB+BBQB0A7BgB2QBVBmAtCVQAPA0gBAZQAIgeATgeQANgTAcghQBeh0BogsQBsgvCNgkQCJgjCTAkQCWAlBcBZQBgBcAqCGQAQAzAFBJIAJBzQASCNgjBiQguB9hXBPIgNANQAyA4AfA6QA+B0AACAQAAAzgTBFQgYBYgDAUQgLBIgMAqQgSBEgeAwQhLB3hWBCQgtAjg5AYQgqARhDASQiEAihzguQiAg0h1hrIgjgjQgbgdgYggIgJANQgiAzg0A2QgRAShVBRQg6A4hLAXQhSAahGgbIhLgdQgngQgcgRIgxASQg2AUg5AGQgzAGhBgFQgKgBh+ACQhbABhCgQIhXgUQgwgNgmgQQgeATgsATIhRAfQiAAzhpAAQgmAAgjgHg");
	this.shape_10.setTransform(-0.6914,1.0984);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,255,255,0.498)").s().p("Ax+SoQiJgah6g7Qg2gbg0gsQghgcg1g4QgKgLgQgVQg8hSgKgQQgmg9gNhAQgNhCAJhaQAFgyAVhxQAGgdANgqIAYhLQgjhfgRg9QgVhRgChIQgEhdAEg6QAFhOATg+QAxibBEhaQAkgvAzgpQAhgaBGguQA2gjBJgNQBFgMBGAKQCOAXBnBDIAhAYQAYgBArAEQBsAMBFBIQgRgYADgpQABgRALg6QAPhLBdhMQAMgLBJhTQA+hHAygdQCUhUB5gHQCMgIB/BBQB0A8BfByQBWBoArCSQAPAygCAaQAIgeATgeQANgUAbggQBfh1BmgqQBvgtCJgjQCIgjCTAmQBJASA4AcQA/AfAxAuQBgBcAoCGQAPAyAFBJQAGBfACARQAVCOgiBgQgsB9hYBOIgNAMQAyA3AfA7QA+BzgCB/QAAAzgUBFQgZBVgDAVQgLBJgLApQgSBEgeAwQhKB0hWBEQgsAjg5AYQgqARhCASQiCAjh0gwQiCg0hyhpQgPgOgTgVQgegfgVgeIgJANQgiAzg0A3QgTAUhSBPQg6A4hLAXQhSAahGgbQg0gTgXgKQgngQgbgRIgyASQg3ATg4AHQg0AFhAgEIiIgBQhbABhCgQIhWgWQgxgOglgPQgdARgtATIhQAfQh/AwhoAAQgnAAgkgHg");
	this.shape_11.setTransform(-0.8769,1.2577);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(51,255,255,0.498)").s().p("Ax7SeQiGgah8g8Qg2gbgzgrQgkgegzg1QgKgLgQgVQg7hPgLgTQglg8gOhAQgNhBAJhaQAGgxAWhxQAFgdANgpIAYhKQgihcgRg/QgVhPgDhIQgEhcAEg6QAFhPAUg+QAyiXBFhcQAkgvA0goQAhgaBGgsQA2giBIgNQBEgMBFAKQCOAVBnBCQAOAJATAOQAZgBAqAEQBsAMBFBJQgRgXACgoQABgSAMg5QAPhKBehKQANgKBHhSQA9hIAygcQCUhTB5gHQCMgHB9BBQB1A8BeBvQBWBnAqCQQAOAxgBAbQAIgdASgfQAOgVAZgfQAtg4AsgkQAzgrA4gWQBogqCQgkQCFgiCVAnQBKATA1AaQBAAfAwAuQBhBbAnCFQAOAyADBJQAEBYAEAWQAKBAAAAyQgBBDgTA3QgrB8hXBNIgNANQAxA1AgA7QA8BzgCB/QgBAygVBEQgYBSgEAXQgLBMgKAlQgSBEgeAvQhKB0hUBEQgsAjg4AYQgqAShCASQiAAih2gvQiBg0hxhoIgjgjQgeghgUgcIgJANQghA0g0A2QgZAahMBJQg6A4hKAYQhTAZhFgaQg0gUgYgKQgmgQgcgRIgxASQg3AUg4AGQg0AGhBgFIiIgBQhbgBhCgRQhwgbg7gZQgdARgtASQgRAIg+AWQh9AuhnAAQgpAAglgHg");
	this.shape_12.setTransform(-1.0489,1.4123);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(51,255,255,0.498)").s().p("Ax3SUQiAgYiBg/Qg3gbgzgqQglgegxg0QgPgQgMgQQg8hRgKgQQglg8gNhAQgNhBAKhaQAFgwAXhwQAFgdANgpIAYhIQgihagRg/QgVhOgEhIQgEhaAEg8QAGhOAVg+QAyiVBHhcQAkgvAzgnQAjgbBEgqQA3ghBGgMQBEgMBEAJQCNASBoBCIAhAWQAYgBArAEQBuAMBDBKQgSgXADgoQABgPAMg6QAIgqAigoQAYgdAsgiQAOgKBFhRQA9hIAygbQBHgnA7gVQBHgZBCgDQCLgIB+BBQB3A+BbBrQBWBlApCQQANAuAAAdQANgxAyg/QAug4ArgjQAzgrA4gVQBlgmCSgmQCCgiCXApQBLAVAzAYQA/AeAxAtQBhBaAlCGQAOAwACBJQACBTAFAaQALBAABAwQABBDgTA3QgVA+gfAvQggAygtAoIgOANQAyA0AfA7QA9B0gDB9QgCAygVBEQgaBPgEAXQgLBMgJAlQgRBEgeAvQhKBzhUBFQgrAjg4AYQgqAShCASQh+Aih2gwQiAgyhyhoQgUgUgOgPQgZgagZgjIgJANQghA0gzA2QgUAWhQBOQg6A4hLAXQhSAahGgbQg0gTgXgKQgngQgbgRQgRAIggAKQg4AUg4AGQg1AGhAgGQgpgDhfABQhagChCgRIhWgXQgvgPglgQQgeARgsARIhPAdQh8AshmAAQgpAAgmgHg");
	this.shape_13.setTransform(-1.1618,1.5725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(51,255,255,0.498)").s().p("ADGSHIhMgdQgmgQgcgRQgLAFgmANQg4AUg3AGQg1AGhBgGQgpgDhfAAQhagDhCgSQg2gOgfgKQgvgPglgRQgeARgrARIhQAcQisA7iDgZQh+gXiEhBQg3gagygpQgmgfgxgzQgRgSgJgOQg9hSgJgOQglg8gNhAQgNhBAKhYQAGgxAXhvQAGgdANgnIAYhIQgihYgSg/QgVhNgEhIQgFhZAFg8QAGhOAWg+QA1iVBHhbQAjguA0gnQAjgaBEgoQA2ggBGgNQBCgLBFAIQCMAQBpBBIAhAWQAYgBAqAEQBvAMBCBMQgSgXACgoQABgPAMg6QAJgpAignQAYgbAtghQANgKBEhRQA9hIAygbQBIgmA6gUQBHgZBBgDQCKgIB+BBQB4A/BaBnQBXBlAnCOQANAtgBAeQAOg1Axg7QAtg4ArgjQAzgqA4gVQBjgkCTgmQCCggCVAqQBNAVAwAXQBAAdAwAsQBiBaAkCGQAMAvABBJQABBPAGAcQAMBAACAuQACBDgSA2QgqB7hWBMIgOAMQA0A3AdA4QA9BzgFB9QgCAxgXBEQgaBNgEAYQgMBPgIAhQgRBEgdAvQhIBwhVBHQgrAjg3AZQgqARhBASQh9Aih2gwQiBgzhwhmIgigjQgagbgYghIgIANQghAzgzA3QgWAYhOBMQg6A4hKAXQgoANgmAAQgnAAgjgOg");
	this.shape_14.setTransform(-1.3466,2.1612);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(51,255,255,0.498)").s().p("ADISCIhMgdQgmgQgcgRQgKAEgnANQg4AUg4AGQg1AGhAgGQgqgDhfgBQhagDhBgTQg6gQgbgJQgvgPgkgSQgeARgsAQQgVAIg6ATQiqA4iFgYQh3gWiJhDQg3gagygoQgogggvgxQgQgRgLgOQg+hUgHgMQgmg8gNg/QgNhBALhYQAGgvAXhvQAGgcAOgoIAYhHQgjhXgRg+QgVhNgFhHQgFhXAFg+QAGhNAXg/QA2iSBIhcQAkgtAzgmQAlgbBDgmQA2gfBFgMQBAgLBFAHQCMAOBoBAIAiAVQAYgBAqAEQBvAMBBBNQgSgWADgoQABgPAMg6QAIgoAkgmQAXgaAuggQAOgKBChPQA8hIAygbQBHgmA7gUQBGgYBCgDQCKgHB8BAQB6A/BYBlQBXBkAnCNQALArAAAfQAOg1Avg7QAug4AqgjQAzgqA3gTQBeggCYgoQB/gfCXArQBOAWAuAVQBAAdAwArQBiBZAiCGQAMAvAABJQgBBMAGAcQAOBAADAuQAEBCgSA2QgVA+gdAvQggAyguAnIgNAMQAzA1AeA4QA8B0gGB8QgCAwgYBDQgbBKgEAZQgLBQgIAfQgQBFgeAuQhHBvhUBIQgrAkg3AYQgqAThBARQh6Aih4gwQiBgzhvhlIghgjQgbgcgWggIgJANQghA0gyA2QgaAdhKBHQg5A4hLAYQgoAMglAAQgnAAgjgNg");
	this.shape_15.setTransform(-1.4702,2.7453);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,255,255,0.498)").s().p("ADJR8IhLgdQgngQgbgRIgyASQg5ATg3AGQg2AGg/gGQgqgEhfgBQhagFhBgTIhUgaQgvgQgkgRQgtAYhrAiQipA1iFgYQhygViOhEQg3gbgygmQgpghgugwQgOgOgNgRQg8hQgJgPQglg7gNhAQgNhBALhXQAGgwAYhtQAHgcANgnIAYhFQgihVgSg/QgVhMgFhGQgGhWAFg/QAHhNAXg+QA3iRBJhcQAkgtA0glQAkgbBDglQA2gdBEgMQBAgLBEAGQCLAMBpA/IAiAVQAXgCArAFQBvALA/BNQgRgWADglQABgPANg6QAIgoAlglQAWgXAvggQAOgKBAhOQA8hIAygaQBIgmA6gTQBGgYBBgDQCJgHB8BAQB8BBBWBgQBYBjAlCMQALAtgBAdQAPg4Aug4QAtg4ApgiQAzgrA4gSQBjggCSglQB9ggCYAuQBPAXArATQBBAdAvAqQBiBZAiCFQALAugCBKQgCBJAHAdQAPBAADArQAGBCgSA2QgUA+gdAvQgfAxguAmIgNAMQAzA0AdA5QA8BzgHB7QgDAxgZBCQgcBIgDAZQgMBRgGAdQgQBGgeAuQhFBshVBJQgqAkg3AZQgqAThAARQh4Aih5gwQiBg0huhjIgigjQgcgegUgeIgJANQggA1gyA2QgaAdhJBHQg6A4hKAYQgpAMglAAQgnAAgjgNg");
	this.shape_16.setTransform(-1.6033,3.3453);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(51,255,255,0.498)").s().p("ADKR2IhLgdQgngQgbgRIgyASQg5ATg3AGQg2AGhAgGQgqgEhfgCQhZgGhBgTQhughg4gdQgxAahnAfQipAyiEgYQhBgLhFgaQg0gThGghQg4gbgxgmQgqgggtgvQgPgPgLgQQg8hPgKgQQglg7gNg/QgNhBAMhXQAGgvAZhsQAGgdAOgmIAYhEQgihTgSg/QgVhLgGhGQgGhUAGhAQAGhNAZg/QA4iPBKhcQAkgtA0gkQAmgaBCgjQA1gcBEgMQA+gKBEAEQCLALBpA9IAhAVQAYgCArAEQBuAMBABOQgRgWACglQABgOANg5QAJgoAlgkQAWgWAvgfQAOgJBAhOQA7hIAxgaQBJglA5gTQBGgXBBgDQCJgHB7BAQB9BBBUBeQBZBjAjCJQAKAoAAAhQASg7Apg0QAtg5ApghQAzgqA4gSQBQgZClgpQB5ggCaAvQBTAaAmAQQBBAcAvAqQBjBXAgCGQAKAtgDBJQgDBIAHAcQARBCAEAoQAGBCgQA1QgUA/gdAuQgfAxgtAmIgOAMQA0A1AcA3QA8BygIB8QgEAvgaBCQgcBGgEAaQgMBWgFAXQgQBGgdAtQhEBqhWBLQgpAlg2AYQgqAThAASQh2Ahh6gwQiCg0hshiQgMgLgVgXQgagcgXggIgIANQggA0gxA3QgcAehHBGQg6A4hKAYQgoAMgmAAQgmAAgkgNg");
	this.shape_17.setTransform(-1.7397,3.9453);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(51,255,255,0.498)").s().p("ADLRvIhLgdQgngPgbgRIgyARQg5AUg3AGQg2AGhAgHQgqgEhfgDQhZgGhBgVQhtgig4gdQgyAahlAdQimAwiGgYQhBgLhGgaQgzgThGgiQhngxhZhdQgRgSgKgNIhFhfQglg6gMg/QgNhBAMhXQAGgtAZhsQAHgdANglIAZhDQgihRgSg/QgWhKgGhGQgOiuAuhxQA4iKBMhfQAkgtA0gjQAmgaBCgiQBog1CQAIQCKAIBqA8IAiAVQAXgCArAEQBuALA+BNQgPgVACgjQABgOANg5QAJgnAngjQAUgTAxgfQAOgIA+hNQA7hJAxgZQBIgkA6gTQBFgWBBgDQCIgHB7BAQB9BBBTBbQBaBgAiCKQAJAlAAAjQATg+AngxQAtg4ApgiQAzgpA3gRQA5gRC7gvQB4gfCaAxQBbAcAdANQBBAbAuApQBlBYAdCFQAKAtgEBIQgFBGAIAcQASBBAFAmQAIBDgQA1QgTA+gdAuQgeAxguAlIgNAMQA0A0AcA3QA7BygJB7QgEAwgcBAQgdBEgDAaQgMBXgFAWQgPBGgdAtQhGBqhTBLQgoAkg2AZQgrATg/ASQh0Agh7gwQiBgzhshiQgOgNgTgVQgYgZgYgiIgIANQggA1gxA2QgaAehIBGQg6A5hKAXQgoANgmAAQgmAAgkgOg");
	this.shape_18.setTransform(-1.8314,4.5701);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(51,255,255,0.498)").s().p("ADMRqIhLgdQgmgQgcgRQgRAHghALQg5ATg3AGQg3AGg/gGQgrgFhfgEQhYgHhCgVQhtgjg2geQg2AbhhAaQimAuiGgYQhAgLhGgbQgvgShJgjQhpgxhXhbQgRgSgKgNQg9hRgIgNQglg7gNg/QgNhAANhWQAGgsAahtQAHgbAOglIAYhCQgihPgSg/QgWhJgGhGQgPisAvhzQA7iLBMhcQAlgsA0gjQAmgaBBggQBmgyCQAGQCLAGBoA7IAiAUQAVgCAuAEQBuALA8BNQgOgVACghQACgQANg3QAJgnAogiQASgQAzgeQAOgIA8hNQA7hJAxgYQBJgkA4gSQBFgWBBgDQCHgHB7BAQB+BCBRBXQBbBhAgCIQAJAiAAAlQATg/AmgwQAsg4AoghQAzgqA4gPQBRgWCjgoQB4geCZAyQBkAhASAIQBBAaAuAoQBlBXAdCFQAJAtgGBIQgGBEAIAcQAUA/AFAmQAKBCgQA1QgSA+gdAuQgeAxgtAlIgOALQAzAzAdA4QA7BxgLB7QgEAvgdBAQgeBDgDAZQgMBZgEATQgOBGgeAtQhEBohTBMQgoAlg2AZQgpAThAASQhyAfh7gvQiCgzhrhhQgLgKgWgYQgWgWgZglIgJANQgfA1gxA2QgcAghGBFQg5A4hKAYQgoAMglAAQgnAAgkgNg");
	this.shape_19.setTransform(-1.9484,5.1453);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(51,255,255,0.498)").s().p("ADORkIhLgdQgmgQgdgRQgRAHggALQg6ATg2AGQg4AGg/gHQgrgEhfgFQhYgIhBgWQg1gRgdgMQgtgSgkgTQgzAZhjAaQikAriHgYQg/gLhHgbQgsgRhMgkQhtg0hThXQgVgWgGgIQg9hSgIgMQglg6gMg/QgNhAANhWQAGgsAbhrQAHgcAOgkIAZhBQgihNgTg/QgWhIgGhFQgRisAyhyQA7iJBOhdQAkgsA0giQAogaBAgeQBmgwCNAEQCIAEBrA6IAiAUQAXgDAsAEQBtAMA8BMQgOgVADgfQABgOAOg4QAJgnApghQASgOA0gdQANgIA7hLQA6hJAxgYQBJgkA4gRQBGgWBAgDQCGgGB6A/QA/AhAvAhQA2AnAsAuQBbBgAfCGQAHAfABAoQAUhDAjgsQAsg5AoggQAzgqA4gOIDzg7QB2geCZA0IB1AnQBCAaAtAnQBnBYAaCEQAIAsgHBIQgHBCAJAbQAVA/AGAlQALBBgPA1QgSA/gcAtQgdAwguAlIgOAMQA0AyAcA3QA7BzgNB5QgFAvgdA/QgfBBgDAZIgPBrQgPBGgdAtQhCBlhUBOQgnAmg2AZQgpAUg/ARQhxAfh8gwQiEgzhnhfQgIgHgZgaQgYgagXgiIgJANQgfA2gwA2QgcAghFBFQg5A4hLAYQgoAMglAAQgnAAgjgNg");
	this.shape_20.setTransform(-2.0673,5.7493);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(51,255,255,0.498)").s().p("ADPReIhLgdQgmgQgcgRQgMAFgmAMQg5AUg3AGQg4AGg/gHQgqgFhggGQhYgJhBgWQhpgkg4ggQg5AbheAWQiiAoiHgXQg/gLhIgcQgngPhQgmQhvg0hRhVIgbgeIhFhdQglg6gMg/QgNhAANhVQAHgtAbhpQAHgbAOgkIAZhAQhEiYgNh+QgSiqA0h0QA7iFBQhgQAlgrA0ghQAogaBAgdQBjgrCNABQCHABBrA5IAiAUQAYgDArAEQBtALA7BMQgNgUADgeQACgQAOg2QAJgmAqggQAPgKA3geQAMgHA7hLQA5hJAygYQBJgiA3gRQBFgWBAgDQCHgGB4BAQA/AhAuAgQA3AlArAtQBdBgAdCFQAGAdABApQAWhGAhgpQArg5AoggQAzgpA3gNIB1gbIB+geQBzgdCbA1IB0AnQBCAZAtAnQBnBWAYCFQAIAsgJBHQgIBBAJAaQAXBAAHAhQANBBgPA1QgSA/gbAtQgdAwguAlIgOALQAzAyAdA3QA6BzgOB4QgFAvgfA+QgfA/gEAZIgOBqQgNBGgdAtQg/BghWBTQgnAlg1AaQgqAUg+ARQhvAfh9gwQiCgyhphfQgLgKgVgXQgVgWgaglIgIANQgfA1gwA2QgcAhhFBEQg5A4hKAYQgpANgmAAQgmAAgjgNg");
	this.shape_21.setTransform(-2.2116,6.3679);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(51,255,255,0.498)").s().p("ADQRYIhLgdQgmgQgcgRIgxARQg7AUg2AGQg5AGg+gIQgrgFhggHQhXgJhBgXQhpglg3ggQg7AbhbAUQhRAShHAEQhKAEhHgMQg+gKhIgdQgigNhVgoQhxg1hPhSQgUgUgHgKQg9hQgIgNQglg6gMg+QgNhAAOhVQAHgpAbhsQAHgaAOgkIAag/QhFiSgOiBQgSipA2h0QA6iBBThiQAlgrA1ghQAogZBAgbQBggpCMgBQCHgBBrA4IAiAUQAWgEAtAEQBuALA6BOQgNgVADgeQACgOAOg3QAKgnAsgdQAMgIA5gdQAMgGA5hKQA5hKAygXQBJgiA3gRQBFgVA/gDQCGgGB4BAQBBAiArAeQA3AlArAsQBeBeAbCEQAGAYACAuQAWhIAfgoQArg4AnggQAzgpA4gMQCngjBLgTQBygeCaA4QAnAOBMAYQBCAYAtAmQBoBXAWCEQAIArgLBHQgJA/AJAZQAZA/AHAhQAPBBgOA0QgRA/gbAtQgdAwguAkIgOALQA0AzAbA2QA7B0gQB2QgGAuggA+QggA9gDAZIgNBqQgOBGgdAsQg9BfhWBUQgnAlg1AaQgqAUg9ASQhtAfh+gxQiCgyhoheIggghQgZgbgVggIgJANQgeA2gvA2QgfAkhCBBQg5A4hKAYQgpANglAAQgnAAgjgNg");
	this.shape_22.setTransform(-2.3066,6.9681);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(51,255,255,0.498)").s().p("ADSRSIhMgdQgmgQgcgRIgxARQg7AUg2AGQg5AGg/gIQgrgFhfgIQhXgKhBgYQhlgkg6gjQg7AahbAUQhQARhHADQhKADhHgMQg+gKhIgdQgagKhdgsQh0g2hLhPQgYgYgEgGIhEhcQglg5gMg/QgNg/AOhVQAHgoAdhrQAKglAlhWQhEiPgQiBQgUimA5h3QA7h/BUhiQAlgqA1ggQAogZBAgaQBdgmCMgDQCHgEBrA3IAiATQAPgDASABIAiACQBuALA4BNQgLgUADgdQACgNAPg4QAKgmAtgcQALgHA6gbQALgFA5hKQA4hKAxgWQBKgiA2gQQBFgUA/gDQBBgDBDAQQBAAPA5AeQBDAkAoAaQA4AlArArQBdBdAbCDQADAOACAVIACAiQAXhLAcgkQAsg5AngfQAygpA4gLIB0gXQBBgOA8gPQBygcCZA4QAmAPBMAXQBCAYAtAkQBoBXAVCEQAHArgMBHQgLA9AKAYQAaA9AJAgQAQBBgOA1QgQA+gbAtQgdAwguAkIgNALQA0AyAbA2QA5B0gQB1QgHAughA9QghA7gDAZIgNBpQgMBGgdAsQg8BchXBWQglAmg1AaQgpAUg+ASQhrAeh/gwQiBgyhohdIggghQgUgVgagmIgIANQgeA2gvA3QgfAkhBBBQg5A4hKAYQgpANgmAAQgmAAgigNg");
	this.shape_23.setTransform(-2.4234,7.5632);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(51,255,255,0.498)").s().p("ADTRMIhLgdQgngQgcgRQgMAGglAMQg8ATg1AGQg5AGg/gIIiLgOQhWgLhBgYQhogog3ghQg6AZhbATQifAfiIgWQg9gLhJgdIh2g2Qg7gcgtgdQgwghgogpIgOgPQgJgJgEgGQg+hSgHgKQgkg5gNg/QgMg/APhUQAHgpAdhpQAHgbAOgiIAag8QhEiLgQiCQgVikA6h4QA+h+BUhiQAlgqA1gfQAogYBAgZQBbgjCLgFQCGgGBrA2QAOAHAVAMQAVgFAuAEQBtAKA5BPQgLgUADgdQACgNAPg4QALgmAugaQAIgEA9gZQALgFA3hJQA4hLAxgWQBKggA2gQQBEgUA+gDQBCgCBCAPQBAAPA5AeQBEAlAmAYQA4AlArApQAuAuAfA5QAfA5AMA+QACANACAWIACAiQAMgmAIgUQAOghAQgVQAsg4AmgfQAzgpA3gKQCZgbBYgWQBwgcCaA7QAlAOBLAWQBCAXAsAkQBqBWATCEQAHArgOBGQgMA8AKAYQAcA7AJAfQASBAgNA1QgQA/gbAtQgcAvguAkIgNALQAzAwAbA3QA5B0gSB1QgHAugiA7QgiA6gDAZIgMBoQgMBGgdAsQg4BVhZBcQglAmg0AaQgqAVg9ARQhpAeh/gwQiDgyhmhcIggghQgVgXgYgjIgIANQgeA2guA3QgeAihDBDQg4A4hKAYQgpANgmAAQglAAgjgNg");
	this.shape_24.setTransform(-2.5365,8.1701);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(51,255,255,0.498)").s().p("ADURGIhLgdQgngQgcgRQgMAGglAMQg9ATg0AGQg6AGg+gIIiLgQQhXgLhBgZQhjgmg6glQg7AZhZASQicAciKgWQg+gKhJgeQgpgRhNglQg8gcgqgcQgyghgngpQgVgVgHgIIhEhcQgkg5gNg+QgMg/APhTQAIgqAdhnQAKgkAmhTQhEiFgRiFQgXijA9h5QA9h8BXhiQAlgpA1gfQAqgYA/gXQAygSA8gKQAxgHBEgEQCFgJBrA1IAjASQAVgFAtAEQBuAKA4BOQgLgUAEgcQACgOAQg2QAMgmAvgYQAIgEA9gWQAJgDA2hJQA4hLAxgVQBJggA2gQQBEgTA+gDQBBgCBCAPQBAAPA4AeQBJAnAhAVQA5AkAqAoQAvAtAfA5QAeA4ALA+QADANABAVIABAiQAPgrAGgPQANghAQgUQArg5AmgeQAzgpA4gJIBzgTQA9gMBAgPQBugcCaA9QAlAOBKAVQBCAWAsAkQBrBWARCDQAGArgQBFQgNA7ALAWQAeA8AJAdQAUA/gNA1QgPA/gaAtQgcAvguAjIgNALQAzAyAbA1QA5B0gUB1QgIAtgjA6QgjA4gDAZIgKBnQgMBGgdAsQg1BRhbBgQglAmgzAaQgqAWg8ARQhnAdiBgwQiCgxhmhbIgfghQgWgYgYgjIgHAOQgeA2guA2QgfAlhBBBQg4A4hKAYQgpANgmAAQglAAgjgNg");
	this.shape_25.setTransform(-2.6437,8.7701);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(51,255,255,0.498)").s().p("ADVRAIhLgdQgmgQgcgRQgNAGglAMQg8ATg1AGQg6AGg+gJIiLgQQhXgMhAgaQhlgog4gkQg+AZhWAPQiaAaiLgWQg9gKhJgeQgqgShLglQg9gcgqgbQgygggngoQgXgXgEgGQhAhUgEgIQglg4gMg+QgNg/AQhTQAHgnAfhpQAHgaAPghIAag6QhDiBgTiGQgXiiA+h5QA+h5BZhjQAlgqA1gdQAqgYA/gVQAxgRA8gJQAsgHBGgGQCFgKBrAzIAiARQAWgFAtAEQBxAKA3BRQgNgWAFgdQACgOARg2QAMgmAxgWIBEgVQAJgDA1hIQA2hLAygVQBKgfA0gPQBEgTA+gDQBAgCBCAPQBAAPA3AeQBLAoAfATQA4AjAqAnQAvAsAfA5QAfA4AKA9QACANABAVIACAiIAUg6QANgiAPgUQAsg5AlgeQAzgpA4gHQBIgKArgHQA8gLBAgQQBugbCZA+QAkAPBJAUQBDAWArAiQBsBWAQCDQAFArgSBFQgOA5ALAVQAeA3ALAfQAWA/gMA1QgOA/gaAtQgbAugvAkIgNALQA0AxAaA1QA4B0gVB0QgIAtglA6QgjA2gCAYIgLBmQgLBHgdAsQgfAvglAtQgeAkgtAvQgkAngzAaQgpAWg9ARQhkAdiDgwQiCgxhkhaIggghQgTgVgaglIgHANQgdA3guA2QgfAlhABBQg5A4hKAYQgoANgmAAQgmAAgjgNg");
	this.shape_26.setTransform(-2.7765,9.3701);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(51,255,255,0.498)").s().p("ADWQ6IhLgdQgmgQgcgRQgNAGglAMQg9ATg0AGQg6AGg/gJIiLgRQhWgNhAgbQhmgqg2gkQg/AahVANQiWAXiOgWQg8gJhKggQgpgShMgkQg9gdgpgZQgzgggmgoIgcgdQg/hSgFgJQgkg4gMg+QgNg/AQhSQAIgqAfhkQAIgaAOghIAag5QhCh+gUiFQgLhLAIhFQAKhMAhg/QA+h2BbhlQAlgpA2gcQAqgYA+gTQAwgQA8gJQAlgGBLgIQCEgMBrAxIAiARQAWgFAtAEQBxAJA2BRQgMgVAFgeQADgPASg0QANgmAzgTQAJgEA6gNQAHgCA0hIQA2hLAxgUQBKgfA1gPQBDgTA+gCQBAgCBBAPQBAAPA3AeQBRAsAYAOQA5AiApAmQAvArAfA5QAfA3AKA9QACAMAAAWIACAhIATg6QANgiAPgUQArg4AlgeQAzgpA4gGQBGgIAtgHQA7gKBAgQQBugbCYBAIBsAjQBDAUArAiQBtBVAOCEQAEArgTBDQgQA4AMAUQAgA3ALAdQAYA+gMA1QgNA/gaAtQgbAvguAjIgNAKQAzAvAaA3QA4B1gWBzQgJAsgmA5QgkA1gCAXIgKBmQgKBGgdAsQgfAuglAuQgbAggvAzQgjAngzAaQgpAWg8ASQhkAciCgwQiCgwhkhaIgfghQgUgVgZgkIgIANQgcA3guA2QgfAmhABAQg4A4hKAYQgpANglAAQgmAAgjgNg");
	this.shape_27.setTransform(-2.8602,9.9511);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(51,255,255,0.498)").s().p("ADXQ0IhLgdQgmgPgcgRIgyARQg9ATg0AGQg7AGg+gJIiMgTQhVgNhBgcQhigpg4gmQhEAahQALQiUAUiPgVQg8gKhKggQgpgShLglQhAgdgmgXQg0gggmgnQgXgXgEgGIhEhaQgkg5gNg+QgMg+ARhTQAIgnAfhlQAIgaAOggIAbg3QhCh7gViFQgMhKAJhFQAKhNAig/QA+h0BdhlQAmgpA1gcQArgWA9gSQAwgOA7gKIBugOQA8gHA8AHQBAAIA2AZQARAHASAJQAWgFAsADQBzAIA2BUQgNgXAGgeQACgOATg0QAPgnAzgQQAOgFA1gIQAGgBAyhHQA2hLAygUQBJgeA0gOQBEgTA8gCQBBgCBBAQQA/APA3AdQBGAlAiAUQA5AiApAkQAvArAfA4QAfA3AJA8QACALAAAXIACAhIASg6QANgjAOgTQArg5AmgeQAzgoA3gFQBGgGAtgHQA6gJBBgQQBtgcCXBDQAMAFBfAdQBDAUArAhQBuBUAMCEQADArgUBCQgRA2AMATQAhA0AMAeQAZA9gKA2QgNA/gZAsQgbAvguAjIgNALQA0AwAZA1QA3B0gYB0QgJAsgoA3QgkA0gCAXIgJBkQgKBHgcArQgeAugnAuQgUAZg0A5QgjAngyAbQgpAWg8ASQg0APg6gGQg2gFhBgYQiFgyhghXIgfggQgTgVgZglIgIANQgcA3gtA3QggAmg/A/Qg4A5hKAYQgoANgmAAQgmAAgjgNg");
	this.shape_28.setTransform(-2.9845,10.5761);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(51,255,255,0.498)").s().p("ADYQuIhLgdQgmgPgcgRIgyARQg9ATg0AGQg7AGg/gJIiLgUQhWgPhAgbQhjgrg2gmQhFAZhPAKQiSARiPgVQg9gJhJghQgqgShKglQhCgegkgWQg0gfgmgnIgPgOIgNgOQhAhVgDgGQgkg4gNg9QgMg/ARhRQAIgkAghoQANgoAlhHQhCh2gXiHQgMhJAKhGQAKhMAjg/QA9hwBghnQAmgpA1gbQAsgWA9gRQAtgMA7gJIBsgQQA8gIA7AGQBAAHA2AYIAjAQQAOgEATAAIAiACQB0AIA2BWQgOgZAHggQADgPAUgzQAPgmA2gOQATgEAugDQAFAAAxhGQA1hMAygUQBJgdA0gOQBDgSA8gCQBAgCBBAQQA/APA2AdQBGAlAhATQA6AhApAjQAwAqAfA4QAeA3AIA7QACALAAAWIABAhQAHgRAMgpQAMgjAOgTQArg5AlgdQAzgpA4gDQBDgFAvgGQA5gJBCgQQBsgaCWBEQAQAIBaAZQBDATArAgQBvBVAKCDQADAsgWBBQgTA0ANASQAiAzANAcQAbA9gKA1QgMBAgYAsQgbAuguAkIgNAKQA0AvAYA2QA4B1gaByQgKAtgpA1QglAygCAXIgIBjQgJBHgdArQgeAtgmAvIhHBSQgjAogxAaQgqAXg7ARQgzAPg7gGQg1gGhBgYQiCgvhihYIgfggQgUgWgYgkIgHAOQgcA3gtA2QgfAng/A/Qg4A5hKAYQgoANgmAAQgmAAgjgNg");
	this.shape_29.setTransform(-3.0753,11.1761);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.4,-131.8,367.4,262.5);


(lib.PuppetShape_1copy2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("Ay7S7Qh/gohnhXQgPgOgSgSQhghggvh8Qgxh9AFiHQADg7ANg3Qhfhfgxh9Qgxh/AGiDQAGiHA7h4QA8h5BnhWQBmhWCBgmQCBgnCGASIApAHQAfgPAkgLQBtglB1AGQANhrAvhgQA8h5BnhXQBnhWCAgmQCBgmCGARQCDASBzBEQByBGBOBuQBNBtAcCEQAIAqACAdQAQg/Adg8QA8h6BnhWQBnhWCAgmQCBgmCGARQCDARB0BGQB0BFBNBuQBNBtAbCEQAcCEgeCEQgdCChOBtIgLAQQA2AxArA7QBNBtAbCDQAbCFgdCDQgdCBhPBuQhOBth1BEQh1BEiEAPQiFAPiBgnQiAgohmhXQgQgOgSgSQgagagXgdIgJAMQhNBsh2BFQh0BEiFAPQhIAJhMgJQgYARgZAPQhyBDiFAQQiGAQiBgoQhGgWg4ghQgzAtg2AfQh0BEiFAPQgmAEgkAAQhgAAhdgcg");
	this.shape.setTransform(0.0932,0.093);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.4,-124,366.9,248.1);


(lib.PuppetShape_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,255,0.498)").s().p("Ay7S7Qh/gohnhXQgPgOgSgSQhghggvh8Qgxh9AFiHQADg7ANg3Qhfhfgxh9Qgxh/AGiDQAGiHA7h4QA8h5BnhWQBmhWCBgmQCBgnCGASIApAHQAfgPAkgLQBtglB1AGQANhrAvhgQA8h5BnhXQBnhWCAgmQCBgmCGARQCDASBzBEQByBGBOBuQBNBtAcCEQAIAqACAdQAQg/Adg8QA8h6BnhWQBnhWCAgmQCBgmCGARQCDARB0BGQB0BFBNBuQBNBtAbCEQAcCEgeCEQgdCChOBtIgLAQQA2AxArA7QBNBtAbCDQAbCFgdCDQgdCBhPBuQhOBth1BEQh1BEiEAPQiFAPiBgnQiAgohmhXQgQgOgSgSQgagagXgdIgJAMQhNBsh2BFQh0BEiFAPQhIAJhMgJQgYARgZAPQhyBDiFAQQiGAQiBgoQhGgWg4ghQgzAtg2AfQh0BEiFAPQgmAEgkAAQhgAAhdgcg");
	this.shape.setTransform(0.0932,0.093);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,255,0.498)").s().p("AzBS7Qh9gnhohZIgiggQhfhhgvh8Qgwh+AGiIQADg5ANg6Qhghlgth8QgwiAAHiCQAGiHA7h4QA8h4BohXQBnhWCBgkQCCgkCFATQAPACAaAGQAcgNAngNQBtgjB0AHQALhnAvhiQA6h5BnhWQBohYB+gmQCBgoCGAQQCEAQBzBFQBzBGBPBvQBMBtAdCEQAIAoACAfQAPg7Agg/QA8h5BnhWQBnhVCBgmQCDgnCFASQCEARB0BHQByBGBNBvQBNBuAaCDQAaCFgdCDQgeCChPBsIgLAQQA1AxArA8QBNBsAbCEQAaCEgdCEQgcCBhPBuQhPBth0BEQh0BEiEAPQiEARiCgpQiBgohlhYQgPgMgTgTQgagagYgeIgJANQhOBsh1BFQh1BFiFAOQhJAIhKgKQgYARgaAPQhxBCiFAPQiIAQh/gnQhJgXg3gfQgwAqg7AjQh1BDiGAPQgjAEgiAAQhiAAhfgeg");
	this.shape_1.setTransform(0.0879,0.0858);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,255,255,0.498)").s().p("AzHS8Qh9gohohaQgOgMgTgUQhghiguh7Qgvh+AHiKQADg7ANg6Qhfhngsh+QguiCAHiBQAHiHA8h3QA7h4BohXQBphYCCghQCCgjCFAWIApAJQAggOAigLQBtghByAIQALhnAuhhQA5h4BmhWQBrhbB6gmQCFgrCDARQCFAQBzBFQByBEBQBxQBNBsAdCGQAKAsABAcQAPg7AhhAQA9h5BnhVQBohUCBgmQCEgnCFASQCEARB0BIQByBHBMBwQBMBvAZCDQAaCEgeCEQgfCChPBsIgMAQQA0AvAtA9QBMBvAaCCQAaCDgdCEQgdCChNBtQhPBvhzBDQhyBDiGARQiFAQiBgoQh/gohohZQgRgPgRgRQgagagXgeIgJANQhPBsh1BGQh3BIiEALQhJAGhKgKQgWAPgcAQQhvBBiGAPQiKAPh+glQhHgVg7ggQguAog+AkQh4BFiFANQghAEghAAQhlAAhfgfg");
	this.shape_2.setTransform(0.0309,0.0115);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,255,255,0.498)").s().p("AzOS8Qh7gohohbQgPgMgSgUQhhhkgth5Qguh/AHiMQADg5AOg+Qhfhqgqh9QgsiEAHiBQAIiHA7h4QA8h2BphYQBohXCEggQCDggCEAXIAoAJQAfgNAkgKQBsggByAKQAIhkAvhjQA3h3BlhXQBrhcB7gnQCEgrCEAOQCFAPB0BGQBxBDBRByQBNBtAeCGQAJAmADAiQAMg1AkhFQA/h5BnhUQBohUCBgmQCEgnCGASQCDARB1BKQByBIBMBxQBLBvAYCDQAZCFgfCDQgfCBhPBtIgMAPQA1AxArA8QBMBvAZCDQAZCCgdCFQgdCDhMBsQhPBvhzBDQhxBCiFARQiJARh9goQiAgphohZIgiggQgagbgYgdIgJAMQhNBrh3BIQh4BJiDAKQhLAFhJgLQgkAYgNAHQhwBAiFAOQiNAQh8gkQhIgWg7gfQgzArg8AiQh6BGiEALQgeADgeAAQhoAAhiggg");
	this.shape_3.setTransform(0.0246,0.003);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,255,255,0.498)").s().p("AzVS9Qh5gnhphdQgOgMgTgUQhghlgth5Qgth9AIiQQACg1APhDQhfhwgnh8QgriGAIh/QAHiHA9h4QA8h2BphYQBphYCFgeQCEgeCDAaIAoAKQAfgMAjgKQBsgfBxALQAHhiAuhkQA2h2BkhWQBshdB5gqQCGgtCDAOQCGAPB0BFQByBEBRByQBOBuAeCGQAKAqACAfQAMg0AlhHQA/h4BohTQBnhTCDgnQCFgnCGASQCEASB1BLQBxBJBLByQBKBwAYCDQAYCFggCCQggCEhQBpIgLAQQA1AyAqA8QBLBtAaCEQAYB/gdCIQgcCEhNBrQhPBwhxBCQhwBCiGASQiJASh9gpQh/gphqhbQgPgNgTgTQgagagYgeIgJANQhNBqh2BJQh6BLiDAIQhLAEhJgLIgxAeQhvA/iFAOQiQAPh6gjQhLgWg6geQgvAphBAkQh9BGiDALQgcACgbAAQhsAAhkghg");
	this.shape_4.setTransform(-0.007,-0.0601);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,255,255,0.498)").s().p("AzbS+Qh3gphqhdQgMgKgVgWQhihngqh3Qgth8AIiUQAEg3AOhCQhehzgmh9QgpiHAIh/QAIiIA9h3QA7hzBqhaQBqhZCGgcQCCgbCFAcIAoAKQAggMAigKQBugdBtANQAGhfAuhmQA1h2BjhWQBthfB3gqQCHgvCDAOQCFAOB1BFQByBDBSB0QBOBtAfCIQALAtABAbQAMgyAmhIQBAh3BphUQBqhTCAglQCHgoCFATQCFARB0BNQBwBJBLBzQBKBxAXCDQAXCFggCDQggCBhRBrIgMAQQA2AzApA7QBLBuAZCEQAXB+gdCIQgcCEhMBrQhPBvhxBEQhuBCiHARQiJATh9gpQh/gqhqhbQgMgKgWgWQgbgbgXgdIgJAMQhMBoh4BMQh6BNiEAGQhQADhDgMQgYAPgaAOQhuA/iFANQiSAOh4ggQhLgVg9geQgsAmhFAnQh/BHiDAJQgZACgaAAQhsAAhngig");
	this.shape_5.setTransform(-0.0394,-0.0654);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,255,255,0.498)").s().p("AziS+Qh1gnhrhfIggghQhihogqh2Qgrh8AIiWQADg2AQhFQhgh4gjh8QgniKAIh9QAKiKA8h1QA7hxBrhcQBrhZCHgaQCDgZCDAeIAoALQAngOAbgHQBugbBsAOQAEheAuhmQA0h2BihVQBvhhB0gqQCHgxCEANQCHANB0BFQBxBDBUB1QBNBrAhCKQALAxABAYQAMgyAnhHQBBh3BphTQBphTCCgmQCGgnCHATQCGASBzBNQBwBLBKBzQBIBxAXCEQAXCFghCCQghCDhRBpIgMAQQA0AyArA8QBKBvAYCEQAYB9geCIQgcCEhLBsQhQBxhwBCQhuBBiGATQiLATh7gpQh+gqhshcIgighQgcgdgWgcIgJANQhLBnh5BOQh8BPiDADQhOADhFgOQgYAPgaAPQhvA+iDAMQiUAOh4gfQhOgWg6gdQgvAohEAlQiABIiEAJIguABQhxAAhogkg");
	this.shape_6.setTransform(-0.0543,-0.1161);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,255,255,0.498)").s().p("AzoS/QhzgohthhIggggQhihpgph2Qgrh7AKiZQADgwAQhMQheh7gih8QgmiLAIh9QAJiJA+h3QA7hyBshaQBqhaCJgYQCDgWCDAfIAoAMQAigMAggIQBsgaBsAPQAEhbAshnQAzh1BihVQBwhkBzgqQCHgzCEANQCHAMB1BFQBxBBBUB3QBNBtAiCJQALAvABAbQAMgvAohLQBDh3BphRQBqhTCCglQCHgoCGATQCHATBzBPQBwBLBIB0QBHBwAXCGQAWCFgiCCQgiCBhRBqIgMAQQA2A0AoA7QBKBtAYCFQAXB8gdCJQgdCGhKBpQhPByhwBCQhsBBiIATQiLAUh6gpQiAgqhrheQgOgMgUgUQgbgbgXgeIgKAMQhKBnh5BPQh+BRiDACQhPABhEgPQgYAQgZANQhtA9iEAMQhJAHg8gDQhIgDhAgRQhNgUg9gdQguAmhHAnQiDBJiDAHIgnABQh2AAhpglg");
	this.shape_7.setTransform(-0.0862,-0.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,255,255,0.498)").s().p("AzvTAQhzgphrhhQgOgMgSgUQhihrgph1Qgph6AJicQAEg1AQhJQhfiAgfh7QgkiOAJh7QAKiLA9h0QA7hwBthcQBrhbCKgWQCEgUCCAiIAnAMQAggLAigIQBsgZBrARQAChZAshnQAxh0BihXQBzhmBvgqQCIg0CEALQCHAMB2BFQBxBCBVB2QBOBvAiCJQALAvABAbQAMgvAphKQBEh4BphQQBqhSCDglQCJgoCFATQCGATB0BQQBuBMBJB1QBHByAVCFQAVCEgiCDQgiCBhSBqIgMAPQA2A1AoA6QBKBvAXCFQAVB6gdCKQgbCFhKBqQhRB0huBAQhrBAiIAVQiLAUh6gpQiAgshrhdIgjghQgdgegVgbIgJAMQhMBnh4BQQg8AnhAAVQhEAWhCAAQhPAAhEgPIgxAdQhtA7iEAMQhKAHg6gDQhJgDhAgQQhOgUg+gdQgtAlhKApQiGBKiBAFIgiABQh5AAhsgmg");
	this.shape_8.setTransform(-0.1313,-0.1924);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,255,255,0.498)").s().p("Az2TAQhvgohuhjQgLgKgUgXQhjhsgnh0Qgph5AKifQAEg3ARhIQhfiDgdh7QgjiQAJh7QAKiMA+h0QA5hsBvhfQA1gsA/gcQBAgdBDgJQCEgSCCAjIAnANQAkgLAegHQBrgXBrASQAAhYAshnQAwhzBghXQB1hoBtgrQCJg2CDALQCIALB2BFQByBCBVB3QBOBtAjCMQAMAxAAAZQAHgeAQghQAKgVAWglQBDh2BrhSQBqhRCDglQCKgnCFASQCHATB0BSQBuBNBHB2QBHBzAUCEQAUCEgjCDQgiCAhTBqIgMAQQA0AyAqA9QBJBxAXCDQAVB6gdCKQgbCEhKBrQhRB0htBBQhsBAiGAUQiMAVh6gpQiAgshrheQgSgQgRgRQgcgcgXgeIgJANQhJBlh7BSQg7AohBAVQhEAWhDgBQhRgBhCgQQgVAOgcAOQhsA8iDAKQhMAHg5gCQhJgDhBgQQhRgUg9gcQgsAlhLApQiJBLiBAEIgaAAQiAAAhtgng");
	this.shape_9.setTransform(-0.1269,-0.197);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,255,255,0.498)").s().p("Az8TBQhvgphthkQgLgKgVgWQhihtgnh0Qgoh5ALiiQADguAShSQheiIgch6QghiTAJh4QAMiNA9h0QA8huBthcQA1gtBAgcQBAgcBEgIQCFgQCAAmIAnANQAigKAggHQBrgWBqAUQgBhUArhqQAvhzBfhWQB3hrBrgrQCKg3CDAKQCJAKB1BFQBwBABXB6QBPBuAjCLQANAwAAAbQAHgeAQghQALgUAWgmQBFh3BqhPQBqhQCEgmQCKgoCGATQCGATB1BUQBuBPBGB1QBGB0ATCEQAUCFgkCCQgjCBhTBpIgMAPQA0A0ApA8QBKBxAVCDQAVB4gdCMQgbCEhKBrQhQB0htBBQhqBAiHAUQiMAWh6gqQh/gshthfQgSgPgQgSQggghgTgZIgKANQhJBkh7BUQg7AohBAWQhFAWhDgCQhVgEg9gPIgyAcQhqA6iFAKQhPAGg1gBQhLgChAgQQhUgUg8gbQgrAjhOArQiLBLiAADIgSABQiEAAhxgpg");
	this.shape_10.setTransform(-0.1804,-0.2417);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,255,255,0.498)").s().p("A0CTBQg9gWg5gmQgxghg1gwIgfghQgwg2gfgxQglg7gVg/Qgnh3AMimQADgwAShSQhdiMgah5QggiUAKh4QAMiOA9hzQA6hsBwheQA0gtBBgbQBBgcBEgHQCHgOB+AoIAnAOQAogLAZgFQBrgVBpAVQgChUAqhpQAvhzBehVQB4htBpgrQCKg5CDAJQCKAKB2BEQBvBABYB6QBPBuAkCNQANAxABAaQAHgdAQghQAJgTAYgoQBGh2BrhPQBphPCFgmQCKgoCHATQCGATB1BVQBtBPBHB3QBFB1ASCEQATCEgkCCQgkCBhTBpIgNAPQA2A1AnA8QBIBvAWCFQAUB1gdCPQgcCFhIBpQhQB1hsBBQhpA/iIAVQiNAXh4gqQiAgshthhIgjghQgdgdgWgdIgJANQhIBjh8BVQg8AphBAWQhGAXhDgEQhWgFg8gPIgxAbQhrA5iDAKQhRAGg0gBQhLgChBgPQhWgVg7gZQgpAhhSAtQiMBMiBACIgJAAQiLAAhygrg");
	this.shape_11.setTransform(-0.19,-0.2589);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(51,255,255,0.498)").s().p("A0JTCQhtgphthmQgNgNgSgUQgwg2gfgxQglg7gUg/Qgnh4ANioQADguAThVQgthGgcg7QgfhFgOhDQgeiWAKh3QANiQA9hxQA6hqBxhgQA1gtBBgbQBBgbBFgGQCHgMB+AqIAmAPQAugMAUgDQBrgUBnAWQgDhRAqhqQAshyBehVQB4hvBogsQCKg7CEAJQCKAJB3BEQBwBABYB7QBOBsAmCPQANAyABAaQAGgeARghQAJgSAZgoQBGh2BshOQBqhPCFgmQCOgoCEATQCGAUB2BWQBrBPBHB5QBEB3ASCCQASCEgmCCQgjCAhVBpIgMAQQA4A4AkA5QBJBwAVCEQATB4gdCMQgbCFhIBqQhRB1hrBAQhnA/iJAWQiPAXh2gqQiAgthuhhQgSgPgRgSQgdgegWgcIgJAMQhIBjh8BWQg8AqhBAWQhHAXhDgFQhXgGg7gQIgxAbQhrA4iCAJQhWAGgvAAQhMgBhBgPQhSgThBgbQgrAjhRArQiPBNiAABQiSAAh1gsg");
	this.shape_12.setTransform(-0.2224,-0.2535);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(51,255,255,0.498)").s().p("AwJTwQiTgCh0gsQg7gWg6goQgvghg1gxQgNgNgRgUQgxg2gegxQglg7gUhAQgmh2ANirQAEguAThYQgthIgag7QgghGgMhDQgdiZAKh1QANiRA+hxQA5hoByhhQA1gtBCgbQBCgbBGgFQCHgIB9ArIAmAPQAggIAhgGQBrgSBmAYQgEhRAphpQAshyBdhVQB6hxBlgsQCMg9CDAIQCKAIB4BEQBwBBBYB7QBOBsAnCQQAOAxAAAbQAHgeARggQAJgSAZgoQBIh1BshPQBrhOCEgmQCOgnCGATQCHAUB0BXQBsBRBFB5QBEB3AQCDQASCFgmCBQglB/hUBpIgMAQQA4A4AjA5QBIBxAVCEQATB1geCOQgaCFhIBqQhQB1hrBBQhmA+iJAXQiPAXh3gqQiAguhuhhQgMgLgXgWQgegfgVgcIgJANQhHBgh9BZQg8ArhCAVQhHAXhDgFQhXgHg7gRIgxAbQhrA3iCAJQhbAGgqgBQhNAAhAgPQhWgTg/gaQgmAfhYAwQiQBNh/AAIgCAAg");
	this.shape_13.setTransform(-0.233,-0.2912);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(51,255,255,0.498)").s().p("AwPTyQiVgDhygsQg7gXg6goQgtggg2gzQgLgKgUgXQgwg3gegwQglg7gUg/Qgkh2ANivQAEgtAUhZQgthJgag9QgehGgMhEQgOhOgEg7QgFhGAGhAQANiRA/hxQAfg5AtgzQAngtA4gwQA1gtBDgaQBDgbBFgEQCJgGB7AtIAlAQQAqgKAYgDQBpgSBnAaQgFhPAohqQArhxBchVQA5g1AtgiQA/gvA6gZQCMg/CDAHQCLAIB3BEQBwA/BaB9QBOBsAoCRQAOAzAAAZQAHgdARghIAjg6QBKh2BrhMQBrhOCFgmQCOgoCGAUQCHAUB1BZQBsBTBDB4QBDB2AQCEQARCEgmCDQgmB/hUBoIgNAQQA3A3AlA6QBHBxAUCFQASBygdCRQgbCGhHBoQhQB3hqBAQhmA+iIAXQiPAYh2gqQh/guhxhjQgTgQgPgRQgegegWgdIgJANQhHBgh+BaQg7ArhCAWQhIAXhDgGQhYgJg6gRQgUALgdAPQhpA2iDAIQhfAGgmAAQhOAAhBgOQhXgTg/gaQgnAfhYAwQiQBNh9AAIgGAAg");
	this.shape_14.setTransform(-0.294,-0.3078);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(51,255,255,0.498)").s().p("AwWT0QhKgCg8gLQhDgLg+gZQg7gXg5gpQgsgfg3g0IgeghQgxg4gdgvQglg7gUhAQgjh2AOixQAEgsAUhcQgthMgZg8QgehIgLhEQgNhPgEg6QgEhGAGhBQANiPA/hyQA6hnBzhiQA1gtBDgaQBEgaBFgDQCIgEB8AvIAlARQAggIAigFQBogQBmAcQgGhNAohrQAqhyBahUQA9g3AqggQA+gwA6gbQCNhACDAHQCMAHB3BEQBuA+BcB+QBOBtApCSQAOA1AAAXQAHgeASggQAHgOAcgsQBLh1BrhMQBrhNCGgmQCPgpCGAUQCHAUB2BbQBpBRBFB8QBCB2APCEQAQCFgnCCQgnCAhUBnIgMAQQA2A2AlA8QBHBxAUCFQARBxgdCRQgcCHhFBoQhRB2hpBAQhkA+iKAXQiQAZh1gqQh/guhxhkIgjghQgfghgUgaIgKAMQgmA1g0AwQgrAog/AuQg8AshCAWQhJAXhDgHQhdgLg1gRQgUALgdAPQhpA1iCAIQhnAGgeAAQhPAAhAgOQhbgTg9gZQgoAghZAwQiPBMh7AAIgLAAg");
	this.shape_15.setTransform(-0.2956,-0.3269);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,255,255,0.498)").s().p("AwcT2QhKgDg8gKQhDgMg+gZQg6gXg6gqQgrgfg3g0QgIgIgWgZQgwg5gdguQgmg8gThAQgjh1APi0QADgpAVhgQgshPgYg7QgehJgKhEQgMhQgEg7QgEhGAGhBQAPiSA/hwQAgg4AtgzQAngsA5gxQA1gsBEgaQBEgaBGgCQCJgCB6AxIAlARQAngIAbgDQBpgPBkAdQgHhKAnhsQAohxBahVQA9g4ApggQA/gxA6gbQCNhCCDAGQCLAGB5BEQBwA+BbB/QBOBtAqCSIAKAnQAFAVgBARQAHgeASggQAIgOAcgsQBMh1BshLQBrhNCHgmQCQgoCGAUQCGAUB2BdQBpBSBEB8QBBB5APCDQAPCDgoCDQgnB/hVBoIgNAPQA3A4AkA6QBHBzATCDQARBxgeCSQgaCGhGBoQhQB3hpBAQhiA9iLAZQhFAMg7gDQhFgDhAgYQh/guhxhkQgUgSgPgQQgbgbgZggIgKAMQgmA1g0AwQgsAog+AvQg8AshDAWQhJAXhDgIQhcgMg2gSQgXAOgaAMQhpA0iBAHIiFAHQhQABhBgOQhagTg/gYQgZAUglAWQgVAMgwAZQiNBMh6AAIgPAAg");
	this.shape_16.setTransform(-0.3461,-0.3565);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(51,255,255,0.498)").s().p("AwjT4QhKgDg7gLQhEgNg9gZQg7gXg4gqQgrggg3g0QgIgIgWgZQgxg6gcgtQglg8gThAQgjh0AQi4QAEgmAVhlQgshQgXg8QgdhKgKhFQgMhSgDg5QgEhHAHhAQAPiTA/hvQAgg4AugzQAngsA5gxQA1gtBFgZQBFgaBGAAQCKAAB5AzIAkASIBCgLQBpgNBjAeQgIhJAmhsQAnhwBahUQA/g7AmgfQA/gyA6gbQCNhECDAFQCMAGB5BDQBvA/BcB/QBPBtAqCUQAPAzAAAaQAHgeASghIAlg5QBNh0BshMQBshLCGgmQCTgpCEAUQCHAVB2BeQBoBTBDB9QBBB5AOCDQAOCEgoCCQgoB/hVBnIgNAPQA2A5AkA6QBGByAUCFQAPBugdCTQgaCIhFBnQhQB4hoBAQhjA8iKAZQiQAah1gqQh+gvhzhlIgjgiQgfgggVgcIgJANQgnA0g0AxQgrAog/AvQg8AthDAWQhKAYhDgKQhegNg0gSQgSAKgfAPQhnAziDAHIiFAGQhQAChBgOQhdgSg+gYQgaAUglAWQgVANgwAZQiPBLh4AAIgSAAg");
	this.shape_17.setTransform(-0.3812,-0.3716);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(51,255,255,0.498)").s().p("AwpT6QhLgEg7gLQhEgNg9gZQg6gYg5grQgpgfg4g2QgLgLgSgWQgyg7gbgsQgmg8gShAQgih1ARi5QACgdAIgnIAQhIQgshSgXg8QgdhLgJhFQgLhSgCg6QgEhIAHhAQAQiUA/hvQAgg3AugzQAngrA6gxQA1gtBFgZQBGgZBGABQCKACB5A1IAkASQAmgHAbgDQBpgLBiAfQgJhIAlhrQAmhwBZhUQA+g7AnggQBAgzA5gcQCOhFCDAEQCMAFB5BDQBvA+BdCBQBPBtArCUQAQA1gBAYQAHgdATghIAlg5QBOh0BshLQBuhLCFgmQCSgpCGAVQCIAUB1BgQBpBVBCB8QBAB6ANCDQANCDgpCDQgpCAhVBmIgMAPQA0A3AlA8QBGBzATCEQAIA+gEBFQgEA4gOBHQgaCGhFBoQhRB5hnA/Qg1Ahg+AWQg2AThDAMQhEANg7gDQhGgDg/gXQh/gvhzhnQgUgSgPgQQgggggUgbIgKAMQgmA0g1AxQgqAohAAwQg8AuhDAVQhKAYhEgKQhdgOg0gTIgxAZQhnAyiCAGIiFAHQhSAChAgNQhcgShBgYQgaAUgmAWIhGAmQiOBLh4AAIgUAAg");
	this.shape_18.setTransform(-0.3834,-0.3584);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(51,255,255,0.498)").s().p("AwwT8QhMgFg5gLQhFgOg8gZQg6gYg5gsQgogeg4g3QgLgLgSgWQgyg7gbgsQglg9gThAQgShBgDhSQgChDAIhaQADgmAXhnQgrhVgWg8QgchMgJhFQgKhXgCg2QgDhJAHg/QAQiVA/huQAgg3AvgzQAmgqA7gyQA1gtBGgZQBGgYBHACQCKAEB4A3IAkATIBBgJQBogKBhAgQgJhEAkhuQAlhvBZhUQBCg/AigcQBAg1A5gcQCPhHCCADQCMAEB6BEQBuA9BfCCQBOBsAtCWIALAnQAFAWgBARQAHgeATggIAmg5QBPhzBshLQBshKCIgmQCUgpCFAUQCIAVB1BhQBoBVBBB+QBAB7AMCCQANCDgqCDQgpB/hWBmIgNAQQAzA0AnA/QBFB0ASCEQAJA9gFBFQgEA3gOBIQgaCGhFBoQhPB5hnBAQhgA7iMAaQiQAch0grQh/gwh0hnQgQgOgTgUQgegggWgcIgKANQgmAzg1AyQgpAnhAAxQg8AuhFAWQhKAYhEgLQhfgQgygTQgLAGgmASQhnAyiCAFIiFAIQhSAChBgNQhhgTg9gWQgaAUgnAWIhGAmQiQBMh2AAIgXgBg");
	this.shape_19.setTransform(-0.4024,-0.3978);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(51,255,255,0.498)").s().p("Aw2T+QhMgGg5gLQhFgOg8gZQg6gYg4gtQgmgdg6g4IgdghQgyg9gbgqQglg9gShAQgThCgChTQgChDAJhbQAEgoAXhnQgqhWgWg8QgchNgIhGQgJhXgDg3QgChJAHg/QARiWBAhtQAgg3AvgzQAmgpA7gzQA1gtBHgYQBHgZBHAEQCLAHB2A4IAkATIBBgIQBqgIBeAiQgLhDAkhuQAkhwBYhTQBGhDAegZQBAg2A4gcQCRhJCBADQCOADB5BDQBvA9BfCDQBOBrAuCYIALAnQAFAXgBAQQAHgeAUggIAmg5QBPhyBuhLQBuhKCGgmQCVgoCFAUQCIAVB1BjQBoBWBAB+QA/B8AMCCQALCDgqCDQgpB+hXBnIgNAPQAzA1AmA/QBFBzASCFQAIA9gGBFQgEA2gOBIQgaCJhDBmQhRB6hlA/Qg1Ahg+AVQg0AThEANQhFANg6gCQhGgDg/gYQh+gvh1hoQgQgOgUgVQgcgdgYgfIgKANQgmAzg1AyQgqAnhAAyQg7AvhFAWQhLAXhEgMQhfgRgygUQgLAHgmASQhlAwiDAFQgqAChbAGQhTAChBgMQhlgUg7gVQgaAUgnAXIhIAmQiPBLh1AAIgagBg");
	this.shape_20.setTransform(-0.4709,-0.4056);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(51,255,255,0.498)").s().p("Aw9UAQhNgGg5gMQhEgOg8gaQg5gZg5gsQgkgdg7g5QgHgIgWgaQgyg9gagqQglg9gShAQgShCgChUQgBhCAJhdQADgeAIgoIARhLQgrhZgVg7QgbhOgHhGQgJhdgCgyQgChKAHg+QASiXBAhtQAgg3AvgyQAlgoA8g0QA2gtBHgYQBIgYBHAFQCLAJB2A6IAjAUIBCgHQBpgHBdAjQgLhBAjhuQAjhwBWhTQBIhFAcgYQBAg2A4gdQCQhLCDACQCNADB7BDQBuA9BgCDQBOBsAvCYIALAoQAFAWgBARQAHgeAUghIAng4QBRhyBthKQBthJCIgmQCXgpCEAVQCIAVB2BkQBmBXBAB/QA/B8ALCDQAKCEgrCBQgpB+hYBmIgNAQQAzA0AmBAQBFBzARCFQAIA9gGBGQgEA1gOBJQgaCHhDBnQhQB6hlA/QhfA7iLAbQhFAOg6gCQhGgCg/gYQh/gxh1hpQgQgNgUgVQgigjgSgZIgKAMQgmA0g1AxQgpAnhBAzQg8AwhFAWQhMAYhEgOIhLgQQgngKgegMIgxAXQhmAwiCAEQgqAChbAGQhUADhBgMQhogUg5gUQgaAUgpAXIhIAmQiPBLhzAAIgegBg");
	this.shape_21.setTransform(-0.4692,-0.4143);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(51,255,255,0.498)").s().p("AxDUCQhOgHg4gMQhFgOg8gaQg5gZg4gtQgigbg8g8QgJgIgUgZQgzg/gZgoQgmg+gRhAQgShCgBhVQgBhBAJhfQADgeAJgpIARhLQgqhbgVg7QgbhQgGhGQgIhdgBgzQgDhKAIg+QATiYBAhsQAgg3AwgyQAkgnA9g0QA1guBIgXQBJgYBHAGQCMALB0A8IAjAVIBCgHQBmgGBgAlQgNhAAihuQAihvBWhTQBLhIAZgWQBAg3A4geQCRhMCBABQCPACB6BDQBuA8BhCFQBOBsAwCZIALAoQAFAWAAARQAHgeAUghIAng3QBShzBuhJQBuhJCIglQCUgqCHAVQCJAWB1BlQBmBYA/CAQA+B9AKCCQAKCEgsCBQgqB/hYBlIgMAQQAzA2AlA/QBDByASCGQAHA9gGBGQgEAzgOBKQgZCIhDBnQhRB7hkA+QheA7iLAbQhEAOg6gBQhGgChAgZQh+gwh2hqIgkgjQghgigUgaIgJAMQgnA0g1AyQgoAlhCA1Qg7AwhGAWQhMAYhFgOQgygKgZgHQgngKgegNIgxAXQg1AZg6AMQg2ALhBACQgqAChcAGQhUAEhBgMQhngTg9gVQgaAVgoAWIhJAnQiPBKhzAAQgRAAgPgBg");
	this.shape_22.setTransform(-0.4786,-0.4522);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(51,255,255,0.498)").s().p("AxLUEQhQgIg2gMQhFgPg8gaQg5gZg4guQghgbg8g8IgdghQgyg/gZgoQgmg+gRhAQgRhDgBhVQgBhCAKhgQADgeAJgpIARhMQgqhegUg7QgahQgGhHQgHhkgBgtQgChLAIg+QATiYBAhrQAhg3AvgyQAkgmA+g1QA1guBJgXQBJgXBIAHQCNAOByA9IAjAVIBCgFQBmgFBeAnQgNg/AhhuQAihwBUhRQBOhMAWgTQBAg5A4geQCPhNCDAAQCOABB8BDQBtA7BiCGQBPBtAwCZIAMAoQAGAXgBAQQAHgeAUggIAog4QBThyBuhIQBuhICJgmQCWgpCGAVQCKAWB0BnQBmBZA+CAQA9B9AJCDQAKCCgtCDQgqB9hZBmIgNAPQAyA2AmBAQBEB0AQCFQAIA8gHBGQgEAxgOBNQgZCHhCBnQhRB7hjA/Qg0Agg+AWQgzAShEAOQhEAOg6gBQhGgChAgZQiAgxh1hqIgkgjQgfghgWgcIgJANQgmAzg2AyQgmAkhEA3Qg7AwhGAXQhNAYhEgPIhMgSQgngLgegNIgxAXQg1AYg6AMQg1ALhCABQgpABhcAHQhVAFhCgMQhqgTg7gUQgZAVgqAXIhJAmQiQBKhyAAQgRAAgRgBg");
	this.shape_23.setTransform(-0.3039,-0.4584);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(51,255,255,0.498)").s().p("AxUUGQhRgJg1gMQhGgPg7gaQg5gZg4gvQgegZg+g/IgdghQgzhBgYgmQgmg+gQhBQgRhCgBhWQAAhCAKhhQAEgfAJgqIARhNQgqhfgSg7QgahRgFhIQgHhkgBgtQgBhMAIg9QATibBBhpQAhg3AvgyQAkglA/g2QA1guBKgWQBKgWBIAIQCMAQByA/IAjAVIBBgEQBngEBdAoQgJgjAHgwQAFgkAPg0QAghwBUhRIBjhgQBBg5A3gfQCShPCBAAQCOgBB9BEQBtA7BjCHQBOBsAyCbIAMAoQAFAXgBAQQAHgeAVggIApg4QBShwBwhJQBuhICJgmQCZgpCFAVQCIAWB2BpQBkBZA+CBQA9CAAICBQAJCCgtCDQgrB9hZBmIgNAPQAyA3AlA/QBEB0APCFQAIA8gHBGQgEAwgOBOQgZCHhCBnQhQB8hkA+Qg0Ahg9AWQgyARhFAPQhFAOg4gBQhHgCg/gZQh/gxh3hsQgSgPgSgUQgggggVgcIgKAMQglAzg2AzQgjAghHA7Qg8AxhGAXQhNAYhFgQIhMgTQgngMgdgNIgxAWQg2AZg5ALQg1ALhBABQgqABhcAHQhWAFhBgMQhpgRg+gVQgaAVgqAXIhLAmQiPBKhyAAQgSAAgSgBg");
	this.shape_24.setTransform(-0.1443,-0.4527);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(51,255,255,0.498)").s().p("AxcUHQhSgKg0gMQhFgPg8gbQg5gZg3gvQgegag+g+IgcgiQg0hCgXglQgmg+gQhBQgRhCAAhXQAAhCALhiQADgfAKgqIARhOQgphigSg7QgahSgEhIQgGhpAAgpQgChMAIg9QAVicBAhpQAhg2AwgyQAigjBBg4QA2guBKgVQBKgWBIAJQCNATBxBAIAiAWIBCgEQBngDBbArQgJgjAHgwQAEgkAPg0QAfhvBThRIBjhhQBBg6A3gfQCRhRCCgBQCOgBB+BDQBtA7BjCIQBPBtAyCbIAMAoQAGAXgBAQQAGgeAWggQANgTAdgkQBUhyBvhHQBwhICIglQCZgpCFAVQCKAWB0BqQBkBaA+CCQA7CBAICBQAICBguCDQgsB/hZBkIgNAPQAzA2AkBAQBDB1AQCFQAHA8gHBGQgEAugPBPQgZCKhBBkQhRB9hiA+QgzAgg+AWQgxAShFAPQhFAOg4gBQhGgBhAgZQh9gxh6htIgkgjQghgjgUgaIgKAMQgmAzg2AzQgjAhhGA7Qg8AxhHAXQhOAYhEgRQg3gOgVgGQgngMgdgOIgxAXQg1AYg6ALQg0AJhCABQgpABhcAIQhXAFhCgLIhUgPQgvgKglgMQgaAUgrAXIhLAnQiOBLhzAAQgTAAgTgDg");
	this.shape_25.setTransform(0.0224,-0.4419);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(51,255,255,0.498)").s().p("AxkUJQhTgKgzgMQhGgQg7gbQg4gZg4gwQgYgVhDhEIgcghQg1hDgWgkQglg/gRhBQgQhDAAhXQABhDALhjQADgeAKgsIAShOQgphkgRg7QgZhTgEhIQgFhqgBgpQgBhNAJg9QAVidBAhoQAig1AwgyQAigkBBg3QA1guBLgWQBLgVBJALQCOAUBvBCIAiAXIBCgDQBmgBBbArQgKgiAGgwQAEgiAPg0QAdhvBThRIBjhhQBBg9A3gfQCShSCBgCQCQgCB9BDQBsA6BlCJQBPBtAzCcIAMApQAGAXgBAQQAHgeAWggQAMgTAegkQBXhyBthFQBxhICIglQCagpCFAVQCJAXB2BrQBiBbA9CDQA7B/AICDQAHCBgvCDQgtB+hZBkIgNAPQAzA4AkA/QBCB1APCFQAHA8gHBGQgEArgPBSQgZCJhABlQhRB+hhA9QgzAhg+AWQgwARhGAPQhFAPg4gBQhGgBhAgZQh/gzh4htQgRgPgTgUQggghgWgcIgJAMQgmAyg2A0QgiAfhIA9Qg7AzhIAWQhOAZhFgSIhMgVQgngNgdgOQgRAJggANQg1AYg6AKQgzAJhCABQgpABhdAIQhXAGhCgLQhxgTg5gSQgbAVgqAWIhMAnQiPBLhxAAQgVAAgUgDg");
	this.shape_26.setTransform(0.1655,-0.497);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(51,255,255,0.498)").s().p("AxtULQhUgLgygMQhGgQg7gcQg4gag3gwQgXgUhEhFIgcgiQg0hEgWgjQglg+gQhBQgRhDAChZQABhBALhmQAEgeAJgsIAThPQgphmgRg7QgYhUgDhIQgFh3AAgeQAAhNAIg9QAWifBAhmQAig1AxgyQAgghBCg5QA2gvBMgUQBLgVBJAMQCPAXBuBDIAhAXIBCgCQBmAABaAtQgKghAFgwQAEgiAOg0QAehwBRhPIBjhiQBAg9A3ggQCRhUCCgDQCQgDB+BDQA8AgA3A2QAuAsAxBCQBPBsA0CeIANAoQAGAXgCARQAHgeAWggQANgTAegkQBXhxBvhFQByhICHgkQCcgqCEAWQCKAWB1BtQBjBdA7CCQA7CCAHCBQAGCAgvCEQgtB9haBlIgNAPQAwA1AmBCQBCB2AOCEQAHA8gHBHQgFApgOBTQgYCIhBBmQhRB+hhA+QgzAgg9AWQgxARhEAPQhFAQg4gBQhGgBhBgZQh/gzh4huIglgjQghgkgUgaIgKANQgmAyg2A0QgfAdhLBAQg8AzhHAWQhPAZhFgTIhMgWQgngNgdgOIgwAVQg1AXg6AKQgzAJhCAAQgpABhcAJQhYAGhDgLQhygSg5gSQgbAUgrAYIhNAnQiQBKhwAAQgWAAgVgDg");
	this.shape_27.setTransform(0.3626,-0.4876);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(51,255,255,0.498)").s().p("Ax1UNQhWgNgwgLQhGgRg6gbQg5gag3gxQgSgRhIhIQgJgLgSgXQg1hGgVgiQgmg+gPhBQgQhEABhZQAChBAMhnQADgfAKgsIAThQQgohpgQg6QgYhVgDhIQgEh4AAgeQAAhOAJg8QAXigBAhmQAig1AxgyQAhghBCg5QA2guBNgUQBMgVBIANQCQAaBsBFIAiAXIBBgBQBmACBZAuQgKghAFgvQADgiAOg0QAchvBQhPIBjhkQBBg+A2ggQCThWCBgDQCQgEB/BEQBtA5BlCLQBQBtA0CeIANApQAGAXgBAQQAGgeAXggQANgSAegkQBYhxBvhFQBxhHCJglQCdgqCFAXQCJAWB1BvQBiBcA7CEQA7CDAFCBQAGCCgwCCQgtB8hbBlIgNAOQAzA6AjA/QBBB1AOCGQAHA7gIBHQgEAngPBVQgYCJhABlQhQB+hhA+QgyAgg+AWQgvARhGAQQhFAPg3AAQhHgBhAgaQh+gzh6huIglgkQgegggXgeIgKAMQgmAyg3A1QgZAYhQBFQg8A0hIAWQhQAZhEgUIhMgXQgngNgdgPIgwAVQg2AXg5AKQgzAIhCAAIiFAKQhZAGhCgKIhXgPQgxgJgmgMQgbAVgsAXIhNAnQiPBKhwAAQgYAAgWgDg");
	this.shape_28.setTransform(0.483,-0.518);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(51,255,255,0.498)").s().p("Ax9UPQhZgOgtgLQhGgRg7gcQg4gag3gyQgQgOhJhMQgIgJgTgZQg1hGgUghQgmg+gPhCQgQhDAChaQABhBANhpQAEgfAKgsIAUhRQgohsgQg5QgYhWgBhIIgDiXQAAhPAJg8QAYihBAhlQAhg0AygyQAegfBFg7QA2guBNgUQBNgUBJAOQCQAdBrBFIAhAYIBCAAQBmADBYAwQgLggAFgvQADggANg2QAbhuBQhQIBihkQBBg/A2ggQCShYCCgEQCQgFCABDQA8AgA4A2QAuAtAxBCQBPBtA2CfIANApQAGAXgCARQAHgfAXgfQAOgTAegkQBahxBvhEQB0hGCGgkQCegqCFAWQCLAXBzBwQBiBeA6CEQA5CDAFCBQAFCCgwCCQgvB9haBkIgOANQAzA7AjA/QBBB1AOCGQAGA7gIBHQgEAjgPBZQgYCIhABmQhQB/hgA9QgyAgg+AWQgtARhHAQQhFAQg3AAQhHAAhAgaQh9gzh8hwQgRgQgTgUQglgmgRgYIgKAMQgmAyg3A0QgZAYhQBGQg8A1hIAWQhRAZhFgVQg4gRgUgHQgmgNgdgQIgwAVQg1AXg6AJQgyAIhCgBIiGAKQhZAHhDgKQg+gKgZgFQgxgJgmgLQgbAVgtAXIhOAoQiPBKhwAAQgZAAgXgEg");
	this.shape_29.setTransform(0.6484,-0.5007);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(51,255,255,0.498)").s().p("AyGURQhbgQgrgKQhGgSg6gbQg4gbg3gyQgOgOhKhNQgJgJgSgZQg3hIgTgfQglg+gPhCQgQhEADhbQACg/ANhsQADgfALgtIAUhSQgohugPg4QgXhXgBhJIgCiYQAAhQAKg7QAYiiBBhkQAig0AxgyQAegdBGg9QA2guBNgTQBOgUBJAQQCRAeBqBHIAgAZIBCABQBmAEBXAxQgMgfAFgvQADggAMg1QAahuBPhQQAdgcBFhJQBCg/A2ghQCThaCBgFQCRgFB/BDQA9AgA4A2QAuAtAxBCQBPBsA3ChIANAqQAGAXgBARQAGgfAYggQAOgSAegkQBahwBwhEQB0hGCHgkQCggqCEAXQCKAXB0BxQBhBeA6CGQA4CCAFCCQAFCAgyCEQgtB6hdBmIgNAOQAwA3AlBDQBAB0AOCIQAGA6gIBIQgEAggQBbQgXCJg/BlQhRCAhfA9QgyAgg+AWQgtAQhGARQhGAQg2AAQhHAAhBgaQh+g0h7hxIglgkQgkgmgSgYIgJAMQgmAyg3A1QgQAPhZBQQg8A1hJAWQhRAZhFgWIhMgZQgngOgcgPIgwAUQg1AWg6AJQgxAHhDAAQgNAAh5AJQhaAIhCgKQg7gJgdgFQgxgJgogLQgbAUgtAYIhPAoQiQBKhvAAQgaAAgYgEg");
	this.shape_30.setTransform(0.8186,-0.5379);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(51,255,255,0.498)").s().p("AyOUTQhegRgogKQhHgSg5gcQg4gbg2gzIhYhbIgbgiQg3hKgSgdQgmg/gOhCQgPhDADhcQACg/ANhtQAEgfALguIAUhTQgnhwgOg4QgXhYAAhJIgCiZQABhQAJg8QAaijBAhjQAig0AygyQAbgbBJg+QA2gvBOgSQBOgTBJARQCRAhBpBIIAhAZIBCACQBnAFBUAzQgMgfAEgvQADgeAMg2QAahvBOhOQAdgdBFhJQBBhBA2ghQCUhbCAgGQCSgGB/BDQA8AfA5A3QAtAtAyBDQBQBtA3ChIAOApQAGAXgBARQAGgeAYggQAOgSAfgkQBbhuBwhFQB0hFCIgkQCggrCFAXQCKAXB0BzQBhBgA4CFQA5CGADCAQAEB/gyCEQgwB8hbBkIgNANQAxA8AjA/QBAB1ANCHQAGA6gIBIIgUB7QgYCLg+BjQhQCAhfA9QgyAgg9AWQgsAQhIARQhFARg2AAQhHAAhAgaQh+g0h9hyQgRgPgTgVQglgngSgXIgJAMQgmAxg3A2IhqBfQg7A1hKAXQhRAZhFgXIhMgaQgngPgcgPQgRAIgfAMQg1AVg6AJQgxAHhCgBQgQAAh2AKQhbAIhDgKIhYgOQgzgIgngMQgbAVguAYQgaAOg1AaQiQBKhuAAQgbAAgagEg");
	this.shape_31.setTransform(0.9614,-0.5218);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(51,255,255,0.498)").s().p("AyWUVQhegSgogKQhHgSg6gcQg3gcg2gzIhXhbIgbgiQg4hMgQgbQgmg/gPhCQgPhEAEhdQACg9APhwQAEggALguIAUhUQgmhxgPg5QgWhZABhJIgBibQABhRAKg6QAbimBAhhQAigzAygyQAYgXBMhCQA2gvBPgSQBQgSBIASQCSAjBnBKIAhAZIBCADQBnAHBTA0QgNgeAEgvQACgeAMg2QAYhuBOhOQAcgdBFhKQBChCA2giQCThcCBgHQCSgHCABDQA9AgA4A2QAvAtAxBDQBPBsA5CjIAOAqQAGAXgBARQAGgeAZggQAOgSAfgjQBdhwBwhDQBzhECJglQCggqCGAXQCLAZBzBzQBgBgA4CHQA4CHADB/QADCAg0CDQgvB6hcBkIgOAOQAxA7AjBAQBAB1ANCIQAFA6gJBHQgCAWgRBmQgXCJg+BlQhRCAhdA9QgyAgg+AWQgrAQhIARQhFARg2ABQhHAAhAgbQh+g0h9hyIglglQghgigVgcIgKAMQglAxg4A2IhqBfQg7A3hKAWQhSAZhFgYIhMgaQgngPgcgQQgRAIgfALQg1AVg6AIQgwAHhCgBQgUgBhyALQhdAIhCgJIhZgOQgzgIgngLQgcAUguAYIhRAoQiPBLhuAAQgcAAgbgFg");
	this.shape_32.setTransform(1.1333,-0.5595);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(51,255,255,0.498)").s().p("AyeUWQhhgTglgKQhHgSg6gdQg3gbg2g0Qgfgeg3g+IgbgiQg5hPgPgYQgmg/gOhCQgPhFAFhdQACg9APhxQAEggAMgvIAVhUQgnh3gNg2QgWhZABhKIAAibQAChSAJg6QAcinBAhgQAig0AzgxQAVgUBPhFQA3gvBPgRQBPgSBJATQCTAmBmBLIAgAZIBCAEQBlAIBUA2QgNgdAEgvQACgdALg2QAXhuBNhOQAdgdBFhLQBBhDA2giQCVheB/gHQCRgICCBCQA9AgA4A3QAuAsAzBEQBOBsA7CkIAOAqQAGAYgCARQAHgfAZggQAOgSAggjQBehvBwhCQB0hFCJgkQChgqCFAXQCMAYBzB2QBgBiA2CGQA4CHACB/QADB+g1CGQgwB7hcBhIgOAPQAwA6AkBCQA/B2AMCHQAFA6gIBIIgUB6QgXCLg+BjQhQCChdA8QgyAgg9AWQgsAQhHARQhFASg2AAQhHABhAgbQh+g0h+h0QgQgPgVgVQgmgqgQgVIgKAMQglAxg4A2QghAfhJBBQg7A3hLAWQhSAahFgaIhMgbQgngQgcgQQgRAIgfALQg1AVg5AIQgwAGhDgCQgVAAhxALQhdAJhCgJIhagOQgzgIgogLQgcAVgvAYIhRAoQiQBLhuAAQgdAAgbgGg");
	this.shape_33.setTransform(1.2575,-0.547);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(51,255,255,0.498)").s().p("AymUYQhlgVghgIQhHgTg6gdQg3gcg1g0Qgfgeg3g+IgagiQg7hSgNgWQgmg/gOhCQgOhFAEheQAEg+APhyQAEgfAMgvIAVhWQgmh4gNg3QgVhaABhKIACicQAChTAJg6QAOhPATg6QAYhIAkg2QAigzAzgxQATgTBRhGQA3gvBQgRQBQgRBJAUQCTAoBlBMIAgAaIBCAFQBnAKBRA3QgNgdADguQACgcAKg3QAXhuBMhOQAcgcBFhMQBChEA1gjQCVhfCAgIQCSgJCBBDQA9AfA5A3QAuAtAzBEQBPBsA7ClIAOAqQAHAYgCARQAGgfAZgfQAPgTAggiQBehuBxhDQB2hECIgkQCjgqCEAXQCMAYBzB3QBfBiA3CIQA2CJACB+QABCAg0CDQgxB7hdBhIgNAPQAwA7AjBBQA/B4ALCGQAFA5gJBIIgUB7QgXCLg9BjQhQCChcA8QgyAgg9AXQgqAOhIATQhGARg1ABQhHABhAgbQh+g1h/h1QgWgUgPgQQgjglgTgaIgKAMQglAxg5A2QghAghIBBQg7A3hLAXQhTAZhGgaIhMgdQgngPgbgRQgRAIgfALQg1AUg6AHQguAGhEgCQgXAAhvALQhdAKhDgKIhbgNQg0gIgogLQgbAVgwAYIhSApQiQBKhtAAQgfAAgcgGg");
	this.shape_34.setTransform(1.3748,-0.5807);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.4,-131.6,367.1,262.1);


(lib.cloud = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PuppetShape_1("synched",1,false);
	this.instance.setTransform(183.4,124);

	this.instance_1 = new lib.PuppetShape_2copy2("synched",1,false);
	this.instance_1.setTransform(167.45,114.55);
	this.instance_1._off = true;

	this.instance_2 = new lib.PuppetShape_14copy("synched",1,false);
	this.instance_2.setTransform(167.45,114.55);
	this.instance_2._off = true;

	this.instance_3 = new lib.PuppetShape_15copy3("synched",1,false);
	this.instance_3.setTransform(167.45,114.55);
	this.instance_3._off = true;

	this.instance_4 = new lib.PuppetShape_1copy2("synched",1,false);
	this.instance_4.setTransform(168.85,113.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},35).to({state:[{t:this.instance_2}]},30).to({state:[{t:this.instance_3}]},40).to({state:[{t:this.instance_4}]},40).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:167.45,y:114.55},35).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},35).to({_off:true},30).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},30).to({_off:true},40).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65).to({_off:false},40).to({_off:true,x:168.85,y:113.85},40).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-17.3,381.29999999999995,267.7);


// stage content:
(lib.КГ_3_КНТ520_Захарченко_Film_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.streamSoundSymbolsList[0] = [{id:"AirplaneSoundEffectonlinevideoconvertercom",startFrame:0,endFrame:300,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("AirplaneSoundEffectonlinevideoconvertercom",0);
		this.InsertIntoSoundStreamData(soundInstance,0,300,1);
		this.btn_play.addEventListener("click", func_play.bind(this));
		this.btn_pause.addEventListener("click", func_pause.bind(this));
		
		this.stop()
		
		function func_play(){
			this.play();
		}
		
		function func_pause(){
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(300));

	// Plane
	this.instance = new lib.Plane2("synched",0);
	this.instance.setTransform(-63.3,41.8,0.1893,0.1893,38.2423,0,0,258.9,265.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:259.3,regY:265.3,scaleX:0.2061,scaleY:0.2061,rotation:45.6898,x:98.45,y:42.85},18).to({regX:259.4,regY:265.1,scaleX:0.2248,scaleY:0.2248,rotation:100.3939,guide:{path:[98.5,42.8,103.5,43,107.6,43.3,136.4,45.4,151.6,51.8,156.2,53.7,159.9,56.2]}},20).to({regY:265,scaleX:0.251,scaleY:0.251,rotation:149.6247,guide:{path:[160,56.3,169.9,62.9,173.9,73.3,179.7,88,174.9,113.7,173.7,120,170,129.3,168.4,133.2,165.2,140.1]}},28).to({regX:259.6,regY:264.8,scaleX:0.2706,scaleY:0.2706,rotation:106.1385,guide:{path:[165.3,140.1,163.8,143.4,162,147.3,156,160.2,153.3,166.7,148.7,177.8,146.4,186.4,144,195.3,143.6,203]}},21).to({regY:264.9,scaleX:0.2724,scaleY:0.2724,rotation:102.4195,guide:{path:[143.6,202.9,143.4,206.2,143.7,209.3]}},2).to({scaleX:0.2855,scaleY:0.2855,rotation:76.3997,guide:{path:[143.6,209.4,144.2,216.9,147.1,223,153.1,236,169.6,243.9]}},14).to({regX:259.7,scaleX:0.2939,scaleY:0.2939,rotation:59.6693,guide:{path:[169.7,243.9,175.7,246.8,183.2,249.1,189.6,251,197,253.7]}},9).to({regX:260.1,regY:265.1,scaleX:0.3435,scaleY:0.3435,rotation:23.8159,guide:{path:[196.9,253.7,205,256.6,214.2,260.5,226.7,265.7,247,275,275.4,288.1,280.7,290.4,300,299.1,314.6,304.6,336.7,312.9,355.1,316.7]}},53).to({regX:259.9,scaleX:0.3593,scaleY:0.3593,rotation:11.0933,guide:{path:[355.2,316.6,368.5,319.3,379.9,319.7,393.7,320.1,405.9,317.3]}},17).to({scaleX:0.3836,scaleY:0.3836,rotation:11.6156,guide:{path:[405.8,317.3,423,313.3,436.8,302.6,453.5,289.6,476.6,279.1]}},26).to({scaleX:0.4042,scaleY:0.4042,rotation:-27.6592,guide:{path:[476.6,279.1,482.1,276.6,488,274.2,494.7,271.5,511.4,265.3,524.6,260.4,530.9,257.4,540.2,253.2,545.1,248.8]}},22).to({regX:259.8,regY:265.3,scaleX:0.4191,scaleY:0.4191,rotation:-66.0049,guide:{path:[545.2,248.7,545.2,248.7,545.2,248.7,550.8,243.7,552.2,237.3,555,224.7,540.7,202.7,540.7,202.4,540.7,202]}},16).to({regY:265.2,scaleX:0.4219,scaleY:0.4219,rotation:-55.968,guide:{path:[540.7,202,540.5,197.3,540.4,192.6]}},3).to({regX:259.1,regY:265.8,scaleX:0.1409,scaleY:0.2085,rotation:-104.9992,x:366.4,y:-72.65},50).wait(1));

	// Cloud1
	this.instance_1 = new lib.cloud();
	this.instance_1.setTransform(694.4,63.5,0.4688,0.4688,0,0,0,183.5,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:183.3,x:-97.45,y:63.3},299).wait(1));

	// Cloud2
	this.instance_2 = new lib.PuppetShape_13copy("synched",1,false);
	this.instance_2.setTransform(477.4,216.95,0.4688,0.4688,0,0,0,0.1,0);

	this.instance_3 = new lib.PuppetShape_3("synched",1,false);
	this.instance_3.setTransform(477.4,216.95,0.4688,0.4688,0,0,0,0.1,0);
	this.instance_3._off = true;

	this.instance_4 = new lib.PuppetShape_4("synched",1,false);
	this.instance_4.setTransform(477.4,216.95,0.4688,0.4688,0,0,0,0.1,0);
	this.instance_4._off = true;

	this.instance_5 = new lib.PuppetShape_5("synched",1,false);
	this.instance_5.setTransform(477.4,216.95,0.4688,0.4688,0,0,0,0.1,0);
	this.instance_5._off = true;

	this.instance_6 = new lib.PuppetShape_6("synched",1,false);
	this.instance_6.setTransform(477.4,216.95,0.4688,0.4688,0,0,0,0.1,0);
	this.instance_6._off = true;

	this.instance_7 = new lib.PuppetShape_8("synched",1,false);
	this.instance_7.setTransform(477.4,216.95,0.4688,0.4688,0,0,0,0.1,0);
	this.instance_7._off = true;

	this.instance_8 = new lib.PuppetShape_7("synched",1,false);
	this.instance_8.setTransform(477.4,216.95,0.4688,0.4688,0,0,0,0.1,0);
	this.instance_8._off = true;

	this.instance_9 = new lib.PuppetShape_9("synched",1,false);
	this.instance_9.setTransform(477.4,216.95,0.4688,0.4688,0,0,0,0.1,0);
	this.instance_9._off = true;

	this.instance_10 = new lib.PuppetShape_10("synched",1,false);
	this.instance_10.setTransform(477.4,216.95,0.4688,0.4688,0,0,0,0.1,0);
	this.instance_10._off = true;

	this.instance_11 = new lib.PuppetShape_11("synched",1,false);
	this.instance_11.setTransform(477.4,216.95,0.4688,0.4688,0,0,0,0.1,0);
	this.instance_11._off = true;

	this.instance_12 = new lib.PuppetShape_12("synched",1,false);
	this.instance_12.setTransform(477.4,216.95,0.4688,0.4688,0,0,0,0.1,0);
	this.instance_12._off = true;

	this.instance_13 = new lib.PuppetShape_13("synched",1,false);
	this.instance_13.setTransform(477.4,216.95,0.4688,0.4688,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},159).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.instance_5}]},16).to({state:[{t:this.instance_6}]},17).to({state:[{t:this.instance_7}]},11).to({state:[{t:this.instance_8}]},8).to({state:[{t:this.instance_9}]},20).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_11}]},8).to({state:[{t:this.instance_12}]},10).to({state:[{t:this.instance_13}]},11).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},159).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},159).to({_off:true},7).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(159).to({_off:false},7).to({_off:true},16).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(166).to({_off:false},16).to({_off:true},17).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(182).to({_off:false},17).to({_off:true},11).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(199).to({_off:false},11).to({_off:true},8).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(210).to({_off:false},8).to({_off:true},20).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(218).to({_off:false},20).to({_off:true},10).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(238).to({_off:false},10).to({_off:true},8).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(248).to({_off:false},8).to({_off:true},10).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(256).to({_off:false},10).to({_off:true},11).wait(23));

	// clock_arrows
	this.instance_14 = new lib.hour_arrow();
	this.instance_14.setTransform(50.3,236.25,0.4688,0.4688,0,0,0,8.8,37.1);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 1);

	this.instance_15 = new lib.minute_arrow();
	this.instance_15.setTransform(62.95,244.5,0.4688,0.4688,0,0,0,18.1,19);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15,p:{regY:19,scaleX:0.4688,scaleY:0.4688,rotation:0,x:62.95,y:244.5,regX:18.1}},{t:this.instance_14,p:{regX:8.8,regY:37.1,scaleX:0.4688,scaleY:0.4688,rotation:0,x:50.3,y:236.25}}]}).to({state:[{t:this.instance_15,p:{regY:18.9,scaleX:0.4687,scaleY:0.4687,rotation:37.2463,x:61.05,y:250.9,regX:18.1}},{t:this.instance_14,p:{regX:8.9,regY:37.2,scaleX:0.4687,scaleY:0.4687,rotation:14.9985,x:52.55,y:234.95}}]},29).to({state:[{t:this.instance_15,p:{regY:18.7,scaleX:0.4687,scaleY:0.4687,rotation:73.987,x:57.3,y:253.8,regX:18.1}},{t:this.instance_14,p:{regX:8.9,regY:37.2,scaleX:0.4687,scaleY:0.4687,rotation:14.9985,x:52.55,y:234.95}}]},30).to({state:[{t:this.instance_15,p:{regY:18.7,scaleX:0.4687,scaleY:0.4687,rotation:118.9849,x:51.25,y:257,regX:18.1}},{t:this.instance_14,p:{regX:8.9,regY:37.2,scaleX:0.4687,scaleY:0.4687,rotation:14.9985,x:52.55,y:234.95}}]},30).to({state:[{t:this.instance_15,p:{regY:18.6,scaleX:0.4687,scaleY:0.4687,rotation:163.9859,x:43.55,y:254.15,regX:17.9}},{t:this.instance_14,p:{regX:9,regY:37.2,scaleX:0.4687,scaleY:0.4687,rotation:45,x:59.05,y:237.6}}]},30).to({state:[{t:this.instance_15,p:{regY:18.8,scaleX:0.4687,scaleY:0.4687,rotation:-151.0151,x:40.55,y:248.05,regX:17.9}},{t:this.instance_14,p:{regX:9,regY:37.2,scaleX:0.4687,scaleY:0.4687,rotation:45,x:59.05,y:237.6}}]},31).to({state:[{t:this.instance_15,p:{regY:18.8,scaleX:0.4687,scaleY:0.4687,rotation:-99.5497,x:45.15,y:241.35,regX:17.8}},{t:this.instance_14,p:{regX:9,regY:37.2,scaleX:0.4687,scaleY:0.4687,rotation:45,x:59.05,y:237.6}}]},30).to({state:[{t:this.instance_15,p:{regY:18.9,scaleX:0.4687,scaleY:0.4687,rotation:-54.5517,x:51.3,y:238.35,regX:17.8}},{t:this.instance_14,p:{regX:9,regY:37.2,scaleX:0.4687,scaleY:0.4687,rotation:70.698,x:63.7,y:241.25}}]},29).to({state:[{t:this.instance_15,p:{regY:18.9,scaleX:0.4687,scaleY:0.4687,rotation:-24.5525,x:55.5,y:240.8,regX:17.9}},{t:this.instance_14,p:{regX:9.1,regY:37.1,scaleX:0.4687,scaleY:0.4687,rotation:100.6957,x:63.65,y:248.9}}]},31).to({state:[{t:this.instance_15,p:{regY:18.9,scaleX:0.4687,scaleY:0.4687,rotation:35.4479,x:57.75,y:247.95,regX:18}},{t:this.instance_14,p:{regX:9.1,regY:37.1,scaleX:0.4687,scaleY:0.4687,rotation:100.6957,x:63.65,y:248.9}}]},29).to({state:[{t:this.instance_15,p:{regY:18.7,scaleX:0.4687,scaleY:0.4687,rotation:117.6956,x:51.35,y:256.25,regX:17.9}},{t:this.instance_14,p:{regX:9.1,regY:37.1,scaleX:0.4687,scaleY:0.4687,rotation:100.6957,x:63.65,y:248.9}}]},30).wait(1));

	// clock
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("AMCAAQAAE/jiDhQjhDik/AAQk+AAjijiQjgjhAAk/QAAk+DgjhQDijhE+AAQE/AADhDhQDiDhAAE+g");
	this.shape.setTransform(52.875,244.875,0.4688,0.4688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(58.3008,249.2227,0.4688,0.4688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AogIgQjgjhgBk/QABk+DgjiQDijgE+gBQE/ABDhDgQDhDiAAE+QAAE/jhDhQjhDik/gBQk+ABjijigAB0BdIAAAAIAAgBIAAABg");
	this.shape_2.setTransform(52.875,244.875,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(300));

	// buttons
	this.btn_pause = new lib.stop();
	this.btn_pause.name = "btn_pause";
	this.btn_pause.setTransform(75.35,314.55,0.4688,0.4688);
	new cjs.ButtonHelper(this.btn_pause, 0, 1, 2, false, new lib.stop(), 3);

	this.btn_play = new lib.play();
	this.btn_play.name = "btn_play";
	this.btn_play.setTransform(36.05,314.9,0.4688,0.4688);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2, false, new lib.play(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_play},{t:this.btn_pause}]}).wait(300));

	// background
	this.instance_16 = new lib.Bitmap3();
	this.instance_16.setTransform(0,1,0.5293,0.4449);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(300));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(116.8,46.8,663.6,390);
// library properties:
lib.properties = {
	id: 'B2C405063830524E8BCD2002C2C3ECDF',
	width: 600,
	height: 338,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/КГ_3_КНТ_520_Захарченко_Film_HTML5 Canvas_atlas_1.png?1684948122550", id:"КГ_3_КНТ_520_Захарченко_Film_HTML5 Canvas_atlas_1"},
		{src:"sounds/AirplaneSoundEffectonlinevideoconvertercom.mp3?1684948122695", id:"AirplaneSoundEffectonlinevideoconvertercom"}
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
an.compositions['B2C405063830524E8BCD2002C2C3ECDF'] = {
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