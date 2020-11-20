(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"era_of_cellphones_atlas_", frames: [[1990,2179,229,220],[6932,0,800,799],[6244,1827,720,720],[6966,1827,399,977],[7734,722,64,64],[1476,2179,512,288],[0,2179,800,481],[1089,2179,385,615],[0,0,6242,2177],[802,2179,285,849],[6244,0,686,1680],[7457,1523,720,720],[7734,0,413,720],[7457,801,720,720],[6932,801,523,1024]]}
];


// symbols:



(lib._2000sPhoneCartoon = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blackberrybold9000_00s = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.DynaTAC8000X = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.icons8goback64 = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.manLookingAtPhone = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mobile_phone_timeline = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Motorola_MicroTAC_9800x = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Motorola_RAZR_00s = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.nokia_1011_90s = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.oldie80s = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.playButton = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.smartIphone2000s = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.stopButton = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.womanCoffeePhone = function() {
	this.spriteSheet = ss["era_of_cellphones_atlas_"];
	this.gotoAndStop(14);
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


(lib.manLookingAtPhone_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.manLookingAtPhone();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.manLookingAtPhone_1, new cjs.Rectangle(0,0,512,288), null);


(lib.g716 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguwA9JMAAAh6RMBdhAAAMAAAB6Rg");
	mask.setTransform(299.3,391.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape.setTransform(279.8,260);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQAMgNASAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgSAAgMgNg");
	this.shape_1.setTransform(352.5,244.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.g716, new cjs.Rectangle(275.4,240,81.5,24.4), null);


(lib.g504 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AjGJ6QADhhgOiRQgGg8gVioQgSiQgHhUQgKiLgLhEQgSh1gmhTQgohZg+gdQgigQgwgGQgfgDg1AAQh7AAh+AZQhIAPgkAMIgIhSQAAAAAAgBQAAAAAAAAQABgBAAAAQABgBAAAAIOxisIACAAQAEADAEAAIADAAIA0gPIACgBQA/gRA9gVIABAAIACAAQCsByBiBKQCIBnBhBlQBwB0BICAQBfCnARCrQAIBNgNBCQgEAVgIAXQgUA8gnAnQgmAmhCAbQgnAQhLAUQijAshmATQiVAch2AAQh5AAhlgdQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBABAAQAWmqgXmgQAAgGgEgDQgDgEgFAAQgIABgDADQgDAEAAAGQAXGkgXGfIgCAkQgEBMgJAtQgOBBgeAqIgXAaQgUAVgcAPQAjhmAFiHg");
	this.shape.setTransform(97.2,87.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g504, new cjs.Rectangle(0,0,194.4,174.3), null);


(lib.g488 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AlCFiIgBgBIgBgBQgCg6ARg4QARg4AhgvIACgBIAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAQAqAAAtQAAAGAEADQAEAEAFAAQAFAAAEgEQAEgDAAgGQAAg7gZg5IgMgaIgGgJQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIBrhDQA1ggAigYQAwgkAfgiIACgBIACABQAOAWAWAAIADAAQAVgBAUgbQA2hFAlhVQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAIADAAIAMgCQAUgIARgdIAOgaQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABQAWAqAkAjIABAEQhUCdh3CHQh3CIiQBnQhkBHhQAWg");
	this.shape.setTransform(32.5,35.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g488, new cjs.Rectangle(0,0,65,70.8), null);


(lib.g472 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("ApiDtIgCgBQgIgfgEgbQgDgYAAgXIBvAdQBCARAtADQBZAFB5gWQBGgNCIgfQBVgSArgdQA8gqAAhJQgBhmiHhaQglgZgugYIAWgCIABABQBBAuB9APIABAAIADACQAcAdALAkQAFAMABAOIFqhoIABAAIABAAIABACQARBzAEB1QAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAABQi6Bch0AxQimBFiRAkQifAoiaAAQinAAiQgyg");
	this.shape.setTransform(62.8,28.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g472, new cjs.Rectangle(0,0,125.7,57.3), null);


(lib.g456 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AoWFuQhZgIhBgrIgCgBQgNguACgtQDAATB+gEQCvgECKgqQBPgYA3gfQBHgnAog1QAkgvALg6QAMg6gNg7QgShTg6hNQAWgPASgPIACgBQAdACAWAGQA5AOAaAnQAcApgLA8QgDAPgIAbIgLAbIAdAAQC1AACuA0QABABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgDA6QgIBdgdBZIgCABQhLAYhgAUQg9ANhqASIpbBtIhlARQg5AHguABQgXgBgagCg");
	this.shape.setTransform(70.2,36.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g456, new cjs.Rectangle(0,0,140.5,73.7), null);


(lib.g440 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AnMNJQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIABhNIgBgDQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAIABAAIACABIAOAYQAEAHAIAAQADAAADgBQAFgDACgFQABgFgCgFQgUglgbglQgUgagOgPQhMhYhog8Qhog8hxgUIg/gJQgFAAgEAEQgEAEAAAFQgBAFADAEQADAEAFABIACACIgBACIgSAQIgCABIgBgBQgLgDgGgKQgHgJgCgMQgCgNADgLIAGgPQCRgUDXA7QAiAJBMAaQBDARAsgTQAngSAgg0QAFgJAphSIBOifQAshbAdhGQAwh0AUhEQAfhrgEhWQgDhYgygoQgfgagxgFQglgEgzAIQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQADAogDAbQgFAlgSAZQgVAfgrAMQgnAKgogJQglgKglgbQgagTgmgmQAag4APgbQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQARAhAmAtQAOARAMAIQAQALARABQAZAAASgYQAQgVACgdQAEg0gaguQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAxgsAxg2IACgBIACABQBWA3BlAdQBkAeBmAAQAdAAAngEQBygLBqgvQBrgvBVhNIACgBIFRg9IACAAIABACIBXN8QAAAAAAABQAAAAgBAAQAAABAAAAQAAAAAAAAIgCABIgBgBQlvjHmegsQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDQBtizBgiUQADgFgBgFQgBgFgFgDQgEgDgDAAQgHAAgEAHQhrCkhrCyIgQAZQkLG8jfG3QgVApgMASQgWAhgZAQQgYARggAAg");
	this.shape.setTransform(101,84.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g440, new cjs.Rectangle(0,0,202.2,168.5), null);


(lib.g424 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("ADuCiQilgxiugDIgCgBIgBgCQAFgQAEgSQAMhIghgwQgggwhDgQIgXgEQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAWgSAYgWIACgBIAAAAQB9ATBwBDQByBEBMBlIABABQAEAfAAAhIgBACIgBABg");
	this.shape.setTransform(24.1,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g424, new cjs.Rectangle(0.1,0,48.2,32.4), null);


(lib.g408 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AgbATQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAcgNAXgTIABAAIABAAIACACIADAQQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIg2AQg");
	this.shape.setTransform(3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g408, new cjs.Rectangle(0,0,6.1,3.9), null);


(lib.g392 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AhLAcQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQgJgYgQgYQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIACgCIADAAQA6AFAtAAQA2AAApgGIAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAIiwAyg");
	this.shape.setTransform(10.4,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g392, new cjs.Rectangle(0,0,20.8,5.7), null);


(lib.g376 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AhtBzQACAFAGgCQAHgBgCgHQgEgSAEgdQALgCAAgKQAEhTAWhPQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAIABAAIABAAQAmAMAbAdQAdAdAJAjQACAKALgBIADAAQAFgBADgEQADgFgBgFQgLgrghgiQgggigtgNIgCgCIAAgCIADgBIgDgBIAEgLQAYhFAkgRQANgGAQAAQAJAAAMADQgrAfAAArQAAAfAUAnQALAWAZApQAcAyAEAkQAGAtgbArQgcArgqAeQgtAigvAEQgSg+gRhHg");
	this.shape.setTransform(11,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g376, new cjs.Rectangle(0,0,22,49.6), null);


(lib.g360 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AgHBdQgVhXgjhTQA7gDBDgPIgHALQgXApgQA+IgMA4IgHASQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape.setTransform(6.4,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g360, new cjs.Rectangle(0,0,12.7,19.1), null);


(lib.g344 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AkWBGIgBgCIABgCQD0itEkg9IABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAIAkIAAACQgEAIAHAGIAAACQAFAXADAcQiPApiHBCQhvA4hSBDQgtg4gqgrg");
	this.shape.setTransform(28,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g344, new cjs.Rectangle(0,0,56.1,33.8), null);


(lib.g328 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AifA+QgbgIgDgLQgDgJAMgWQAOgVAPgVIAWgeIALgOQgDAiAHAfQABAFAHgBQA4gJBdgcQBqggAqgJQhXBFg4BdQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQgcADgbAAQhNAAhJgWg");
	this.shape.setTransform(19.1,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g328, new cjs.Rectangle(0,0,38.2,16.8), null);


(lib.g312 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AkUDBIgCgBQgLgVACgaQAEglAbgSQAEgDABgFQABgFgCgEQgEgHgIAAIgFABQhhAhhkARQgLACgKAAQgSAAgHgIQgOgOAPgiIAGgMIAMgSQA5haBZg/QgmA/AeAdQATATAnABQAVABAqgGQBVgNB+gxQCihAAsgNQCpgwCoAKIgPASIglAkIgdAcIgCABIgBAAIgCgCIgDgQIgBgBIAAgCQADgFAAgFQgCgGgGgDIgGgCIgVAFQkxBAj5CyIgVAQQgsAhg1AtIgBABg");
	this.shape.setTransform(52,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g312, new cjs.Rectangle(0,0,104,38.6), null);


(lib.g296 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AocCiIgCgBQgDABgDgBQgHACgFAAQgHgBgFgDQgpgEgVgQQgXgSgLgnQA3AQBXALICQASQAEABADgDQADgEgCgEQgVgegbgXQBjgJAxgIQBRgMA/gVQAxgQBRgpQBaguAngPIgiAoQgWAZgLAPQgDAEAEAEQAEAEAEgDQAvgcBCgXQAcgKBbgaQAhgKA3gVQBBgZAYgIQA6gUApgEQBDgFATAWQAGAHgDANQgCAJgGAQQgjAlgYAjIgCABQi/Aci7A+Qi7BAinBdIgBAAg");
	this.shape.setTransform(66.9,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g296, new cjs.Rectangle(0,0,133.8,38.4), null);


(lib.g280 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AgoB8Qgwg6gNglQgGgRAAgNIABgcQAEgQAEgLQAPgmAxg5QA3AoBXAIQgtAwgqAmIgWATIglAfQgEAEgBAFQgBAGAEAEQAEAFAHAAQAEAAAEgDIAfgbIAEgDIABAAIACABQASAngDAnQgCATgJAOQgKAQgNAAQgPgBgXgbg");
	this.shape.setTransform(10.8,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g280, new cjs.Rectangle(0,0,21.7,30.4), null);


(lib.g264 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AgPBdQgLgMgJgQIAAgDQAAgFgFgDQgGgPgCgNIgBgLQgCgOADgOQAGgnAcgpQAbA/AmAiQgtAzgRAlQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape.setTransform(5.1,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g264, new cjs.Rectangle(0,0,10.2,18.8), null);


(lib.g248 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AypG9QhagZhQgtQAkgBAigEQBLgHBfgTQAmgHCDgdIHlhuQEihCDDgiQBNgOGFg9QEdgtC1gmQB0gXA+geQBggsAnhOQAZgwAKhCQAHgsAChMQAwB9ALCsQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQi5BdjFBCIgfAKQhAAUgoAMIvyC4IgBAAIgaAGIAAAAIleBAIgpAiQhOA9hdAmQheAmhhAJQggADgiAAQhbAAhbgYg");
	this.shape.setTransform(136.4,47);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g248, new cjs.Rectangle(0,0,272.8,93.9), null);


(lib.g232 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AgFBNQgLgIgHgGQgagZAGgbQADgOAXgaIAsgvQAGAaAMAhQglAwgJAsIgBACIgBAAg");
	this.shape.setTransform(4.5,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g232, new cjs.Rectangle(0,0,9,15.4), null);


(lib.g216 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AgBBNIgCgCQgehNAYgyQAHgNAIgLQgCA0AQBMIABADIgUAWIgBAAg");
	this.shape.setTransform(2.1,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g216, new cjs.Rectangle(0.1,0,4.1,15.4), null);


(lib.g200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AgYA5QgHgbgUgTIgFgEQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgCQAkgZAKgiQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABgBIACACQAHAQANANQAMAMAWAMIACACQAAANABAMIAGAXQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgCABQgjAGgrACQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape.setTransform(5.8,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g200, new cjs.Rectangle(0,0,11.7,11.7), null);


(lib.g184 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("Al9BnIgCgmIABgCIACAAQA3AEAtAAQCqAACmgwQCnguCOhZIACAAIACABIAHAIIAHAOQgyAkhjAqQhxAuhVAcQh1AnhZAMQgwAHgsAAQhAAAg3gOg");
	this.shape.setTransform(38.4,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.g184, new cjs.Rectangle(0,0,76.7,23.4), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguwA9JMAAAh6RMBdhAAAMAAAB6Rg");
	mask.setTransform(299.3,391.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF9E76").s().p("ApTRFIgCgBQjomEhiogQgqjugXktIABgDQBfhRB0gyIAZgKIgIgaQgEgPgGgIQgMgXgUgPQgTgPgXgCIgJgBQgiAAgpAcQglAbgeAiIgCABIgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgIh6gIjVIAAgCIACgBIGbAfIArgXQE4ilFag5IABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQAAABgBAAQAAAAgBABIgLATQgTAfAGAVQAIAYApANQBOAXBQAAIApgCIABABIABADQgKAlAUAWQAQAQAcAAQANAAANgCQBOgNBLgWIABAAIACAAIAAADQgFAOgCARQgFAxAeAgQAFAEAFAAQAEAAAFgDQA3gyA2gnIABgBIACABQB4B5BPCUQBPCVAgCnIAAABQhfDrgzDwIgOBIQgVBkgNA0QgWBUgdA+QhBCPh+BiIgBAAIgBAAIgDgBQgPgxgrgkQgrgkg3gNQgggHgiAAQhLgBhXAjQgtARg+AeQhFAggdAMQhyAriVAQQhoAMimAAIgkAAIgHAEIgBAAQgKABgDAKIgBAIQgTBrAcB8QABABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAnaG5QgsANggAmQggAmgFAuQgHAtAWAtQAVAsAnAYQAmAXAvAAQA0AAAogbQAEgDABgGQABgFgDgFQgFgGgGAAQgEAAgEACQggAXgsAAQgnAAgfgSQgigVgRgkQgSglAFgnQAFgmAaggQAbggAlgKQAFgCADgFQACgFgCgFQgCgJgKAAgAs3gJQggAZgNAmQgZBCAaBeQATBHAnA+IARAbQAQAAAQgBIASgCQAagEALgDQAagGAZgJIAbgMQATgJATgKIAagRIgCggQgFhRgZhPQgTg+gdgjQgqgwg3gEIgGAAQgqAAgjAfgAATk3QhrAeg2BLQggAtgKA6QgLA8AMBBQAMBGAvBmIANAaIAdgBIASgBIAegDQA6gHAvgMIAbgHQCKglB3hQIAagSIgBghQgEhTgTg+QgVhAgogvQgogwgzgWQgtgSg0AAQgqAAgvAMgAiur6QhFAOgeAgQgZAZgGAoQgFAdAEApIAEAbIAZgIQC6g3DFgBQAvAAAuADIAfADIgOgcQgWgngmgfQgmgegwgQQg2gThCAAQg6AAhDANg");
	this.shape.setTransform(350.7,235.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414042").s().p("AlNN6IgtgJIg9gIIhAgJQgkgGgZgIQg0gRgkgfIgBgCQABgIgCgEQgEgJgJAAIgEABQgMAGAEALQABACgDAEIgFADIgIABIgDAAQgNgEgPgdQgthUgYg1QghhFgTg+QgxiXAYh+QAAgBAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAdABQCoAABqgMQCYgQB0gtQAlgPBAgeQBJgiAggNQBUgfBEAAQAgAAAcAGQA3ANAoAmQAoAmAIAvQABAIAHACIAFABQAEAAAEgCQCPhoBMihQAdhAAXhVQANgyAVhpIAOhIQAxjiBVjZQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAIADAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQARDdA/DVIAZBNQgBAEABACQAmCMgMCTQgLCRg7CGIgRAkQgRAjgJAOQgLARgIAGIgBABIgDABIgDABQgFAAgDgDIgCAAIAAgDQAAgHgGgEIgNAgQgjBSg1BFQgNARgJABQgGAAgFgGQgFgFgCgHIgBgFQAAgOAFgUQACgKgIgEQgMAWgNARQgfAmgyAmQgjAag9AnIlqDiQhDAqgjARQg/Adg1AEIgTAAQglAAhKgOgAm9LRIgMhYIABgCIACgBIAAAAIAtACQBYgBBUgTIABAAIACABQAdAqAmAjIAWAUIAbgMQB2g3BshDQAggTARgSQAXgXAEgcQADgUgIgYQgFgNgMgYIg6hwQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAEgEAAgFQABgGgEgEIgfgiIgGgLIgDABIgBgBIgsgwQgEgEgGAAQgGAAgDADQgDAFAAAEQAAAHACADIAWAXIAAACIgBADQiJBUiiAuQiiAtilAAQg0AAg0gEQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgCgPgDgLQgCgKgLAAIgDAAQgFACgDAEQgDAFABAFIAHAuIADBHQAEBPAiAoQAXAbAzAYQBFAhBOAUIAbAGg");
	this.shape_1.setTransform(380.3,299.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("AFOHWQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQgCgnglgiQg0guhTgOQgUgDgbgBIgCgCQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQARgWgBgaQgEgvhAgfQg0gag5gIIgCgCIgvhVQg4hohHiPQhrjTgwhXIAAgCIADgBIHYAFQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABIEhK1QAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQgbAYgMAaQgTAmAHAxQAFAhASAsQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgFAGIgIAJIgFAEIgCABgAhWkmQgVAIgFAhQgFAfAPApQANAkAWAWQAUATASABQAFgBAHgCQAWgIADglQADgegNglQgNgigUgWQgUgVgUgBIgLACg");
	this.shape_2.setTransform(127.5,443);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAXBFQgIAAgLgLQgRgTgLgeQgLgbABgZQABgVAJgEIACAAQAKAAANARQAPARAJAaQALAegBAZQgCAUgJACg");
	this.shape_3.setTransform(122.2,422.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CF9E76").s().p("AgyA0QgXgGgSgOQgUgRgEgVQgFgYARgUIAFgFIACgBIABABQAsAWAyAAQAqAAAngRIABAAIABAAQAKAGAGAFQAOANAEAPQAEAMgEALIgCADQgLAZg1AJQgnAIgYAAQgUAAgRgFg");
	this.shape_4.setTransform(142.8,512.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CF9E76").s().p("AhyAlIgWgRQgggagLgfQgIgUAEgWIABgCIACgBIAAAAQAcAIAbAAQAUAAASgDQAVgFASgIIADAAQAuAAAgAFQBMAMAtAqQAjAfgFAeQgBAKgGAJQgHAKgNAIQgVAPgfAFQgVAEgbAAQheAAhNg2g");
	this.shape_5.setTransform(139.6,487.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CF9E76").s().p("AgTBsQgOgEgMgFQgOgGgPgLQgdgWgOghQgPggAFgiQADgVAMgUQAMgUARgNIACAAIABAAIABABIAXAoIgBADIgCABIgmABQgFAAgEAEQgEAEABAGQAAAFAEAEQAEADAGAAIAVAAIAjABIAiAFQArAJAnAUQAyAXACAgQACAYgWASIgLAHQgRAKgVADQgOADgOAAIgFAAQgaAAgUgGg");
	this.shape_6.setTransform(124.3,466.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CF9E76").s().p("Ag1AxQgPgGgHgEIgMgHQghgVgOgcQgIgRgBgVIABgCIABgBIACABQBRAyBcgBQAaABAagFQAfgFAXgNIABgBIABABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgDAigoAaIgLAGQgRAKgSAEQgXAHgZAAQgeAAgegKg");
	this.shape_7.setTransform(141.9,500.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#442D59").s().p("ANqTbQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQADgwgFgxQgRixhhisQhKiDhzh2QhhhmiHhmQhdhHijhsIgBgCIACgCQCyg/CuhWIAagLQEWiND0jBQAEgCABgHQABgFgEgEQgDgGgHABQgEAAgEACQjpC4kPCLIgCABIgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQgNitgyiAQhAiih6hfIgBgCQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIDjh9QAFgCACgGQABgFgCgFQgEgHgIAAQgDAAgDACIrwGeQiXATibAdIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQgShVgHhcQAAgFgEgDQgEgDgGgBQgGABgDAEQgEAEABAGQAGBYATBcIgBACIgBABQh5AYhxAeIgBAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQgghog9hbQg9hchThFIgBgCIABgCQA9g2BRhAIACgBIA1AHIA8AJIArAIQBQAPAlAAIAVAAQA6gEBBgfQAmgSBHgsIDjiOIABgBIABAAIACACQAFAIADAHQAAABABAAQAAAAAAABQAAAAAAAAQgBABAAAAQgqA3gVBDQgVBCADBFIACAaQACANAMAAIABAAQAGAAADgFQAEgEgBgFQAAgBAAgBQAAAAAAgBQAAgBABAAQAAAAABgBQBWgVBshOQCRhnB4iIQB4iIBVifIACgBIABAAIABABIAVAQQA0AkBLAdQAsAQBXAXIADABQBWAYArAPQBHAaAxAgQBRA3A4BeQA3BeAVB1QARBigFB5QgEBUgRCEQg+HciEIzQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgghkQgDgKgKABIgEAAQgFACgDAFQgCAFACAFQAiBoANA1IANA8QAJA0AAAuQABA6gPA1QgOA2gcArIgDABg");
	this.shape_8.setTransform(430.5,459);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#414042").s().p("AobN3IgngEQgigDgdgGQgugJgigOIAAgBQgWgJgSgNQgGgDgEgEIgBAAIgMgLQgSgRgLgVQgOgZgIgkQgEgXgEgqIiA0eQAAAAAAgBQAAAAAAAAQABgBAAAAQABgBAAAAIOxisIACAAQAEADAEAAIADAAIA0gPIACgBQA/gRA9gVIABAAIACAAQCsByBiBKQCIBnBhBlQBwB0BICAQBfCnARCrQAIBNgNBCQgEAVgIAXQgUA8gnAnQgmAmhCAbQgnAQhLAUQijAshmATQiVAch2AAQh5AAhlgdQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBABAAQAWmqgXmgQAAgGgEgDQgDgEgFAAQgIABgDADQgDAEAAAGQAXGkgXGfIgCAkQgEBMgJAtQgOBBgeAqIgXAaQgnAng8ATQg9AShYAAQgzAAgygEg");
	this.shape_9.setTransform(418,565.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CF9E76").s().p("AlCFiIgBgBIgBgBQgCg6ARg4QARg4AhgvIACgBIAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAQAqAAAtQAAAGAEADQAEAEAFAAQAFAAAEgEQAEgDAAgGQAAg7gZg5IgMgaIgGgJQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIBrhDQA1ggAigYQAwgkAfgiIACgBIACABQAOAWAWAAIADAAQAVgBAUgbQA2hFAlhVQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBAAAAIADAAIAMgBQAUgIARgdIAOgaQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABQAWAqAkAjIABAEQhUCdh3CHQh3CIiQBnQhkBHhQAWg");
	this.shape_10.setTransform(434.3,360);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BCBEC0").s().p("AkCAbQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIABgCIBKgyIABgBQBwgDBjAAQB4AAByAEQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABIgBADIhHA1IgCABg");
	this.shape_11.setTransform(117.7,390.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D4451").s().p("ApiDtIgCgBQgIgfgEgbQgNhjArhBQAZgmAzgfQAegTA8gbIGTi2IAbgDIABABQBBAuB9AOIABABIADACQAcAdALAkQAFAMABAOIFqhoIABAAIABAAIABACQARBzAEB1QAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQi6Bdh0AxQimBFiRAkQifAoiaAAQinAAiQgyg");
	this.shape_12.setTransform(339.6,678.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D4451").s().p("AoWFuQhYgJhCgqIgBgCQgahXAehcQAdhcBIg0QApgfA9gWQAlgNBKgTIAugNQEYhPDmi0IACgBQAdACAXAGQA5AOAaAmQAbAqgLA8QgCAPgJAbIgKAaIAdAAQC1AACuA2QAAAAAAAAQABAAAAABQAAAAAAABQABAAAAAAIgDA7QgJBdgcBYIgCACQhLAXhhAVQg8ANhqATIpcBsIhlARQg5AIgtgBQgYAAgagCg");
	this.shape_13.setTransform(106.7,671.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#414042").s().p("AnMNJQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIABhNIgBgDQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAIABAAIACABIAOAYQAEAHAIAAQADAAADgBQAFgDACgFQABgFgCgFQgUglgbglQgUgagOgPQhMhYhog8Qhog8hxgUIg/gJQgFAAgEAEQgEAEAAAFQgBAFADAEQADAEAFABIACACQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgSAQIgCABIgBgBQgLgDgGgKQgHgJgCgMQgCgNADgLQAFgRANgSQAIgMATgVIAGgHQBZhlBHiZQAqhZBDi/QAph0AXg7QAmhhAnhJQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQARAhAmAtQAOARAMAIQAQALARABQAZAAASgYQAQgVACgdQAEg0gaguQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAxgsAxg2IACgBIACABQBWA3BlAdQBkAeBmAAQAdAAAngEQBygLBqgvQBrgvBVhNIACgBIFRg9IACAAIABACIBXN8IgBACIgCABIgBgBQlvjHmegsQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDQBtizBgiUQADgFgBgFQgBgFgFgDQgEgDgDAAQgHAAgEAHQhrCkhrCyIgQAZQkLG8jfG3QgVApgMASQgWAhgZAQQgYARggAAg");
	this.shape_14.setTransform(225.8,583.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CF9E76").s().p("ADuCiQilgxiugDIgCgBIgBgCQAFgQAEgSQAMhIghgwQgggwhDgQIgXgEQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAWgSAYgWIACgBIAAAAQB9ATBwBDQByBEBMBlIABABQAEAfAAAhIgBACIgBABg");
	this.shape_15.setTransform(152.8,644.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CF9E76").s().p("AgbATQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAcgNAXgTIABAAIABAAIACACIADAQQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIg2AQg");
	this.shape_16.setTransform(396.9,652);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CF9E76").s().p("AhLAcQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgJgYgQgYQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIACgCIADAAQA6AFAtAAQA2AAApgGIAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAIiwAyg");
	this.shape_17.setTransform(373.6,659.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#27AAE1").s().p("AgxBIQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQgIgQgDgJQgPgoANggQAHgRAOgMQAOgMAQgCIAHgBQAWAAAUASQATAQAIAWQALAagCAlQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQg5APg9AGg");
	this.shape_18.setTransform(350.8,247.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6E7E8").s().p("Ai+D0QgxhpgNhFQgLg8AKg2QAKg3AcgnQAxhDBigbQArgMAngBQAtAAAoARQAvATAkAsQAjArATA7QAUA9ADBdIgBADQhzBPiIAnIAAAAIgCAAIgBgCQAAgmgKgbQgLgdgZgWQgbgXggAAIgLACQgXADgUAQQgTAQgKAYQgQAqARAyIAIARIAAADQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgKABQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_19.setTransform(360.2,230.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#414042").s().p("AhiBcIgCgCIgFhLIAAgCQAmgwAughQAhgYAZAAIAHABQAQACAOALQAOALAKASQAEAHAEALQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQhsAthcBLIgBABg");
	this.shape_20.setTransform(261.2,184.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BCBEC0").s().p("ABbF7IgCgBIkeqxQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIBSg/IACgBIABABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAbA+BgDSIBKCiQA9CFAyB5QAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIhFAqIgiAWIgBAAg");
	this.shape_21.setTransform(159.1,426.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CF9E76").s().p("Ah7GPIgCgCQhPj9gMkKIABgCQAEgDABgFIAEgWIAIgRQACgGgDgGIgBgCQAQhNAbguQAXgoAkgZQAjgYAlgDIAbABQAqAHAnAiQAcAYAYAiQA4BRASBkQATBjgXBfQgXBgg9BQQg+BRhWAvQgqAWgkAAQgKAAgHgCgAg3iMQgvAWgbBPIgHAUIgHAZQgXBTgEBWQgBAGAEAEQAEAEAFAAQAGAAAEgDQAEgEAAgGQAEhUAWhPQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIACgBIABAAQAmAMAcAdQAdAdAIAkQADAKAJAAIADgBQAFAAAEgGQADgFgCgFQgKgrgggiQgighgtgNIgBgCIgBgCIADgBIgCAAIAEgMQAXhFAlgRQAOgGAQAAQAjAAAdAcQAiAiAIA/QABAFAEAEQADADAFAAIACAAQAFAAAEgFQADgEAAgGQgJhJgqgoQgkgjgvAAQgVAAgTAIg");
	this.shape_22.setTransform(478.8,214.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("AAVGJQgkichNiMQhOiLhwhyIgBgCIABgCQD0itEkg9IABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAIAkIAAABQgEAIAHAHIAAABQApDig9DdQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgzABguAhQgmAdgZAqQgYApgQA+IgMA4IgIATQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_23.setTransform(452.2,160.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#414042").s().p("AHKJWIgCgCQgLgUACgaQAEglAbgSQAEgDABgFQABgFgCgEQgEgIgIAAIgFABQhgAihlAQQgLACgKAAQgRAAgIgIQgOgOAPghIAHgNIALgRQAphAA5g0QA6g0BDgiQAGgCABgFQABgGgBgEQgEgIgJAAIgFABQhNAmg/A7Qg/A7grBJQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgdADgbAAQhNAAhJgWQgagIgDgLQgDgJAMgWQANgWAOgVIAWgeQAbghAXgYQAEgEgBgGQAAgFgEgEQgEgEgFAAQgGAAgDAEQgkAlgeArIgCABQi/Adi7A/Qi7A/inBdIgCABImWgeIgCgCQgCABgDgBQgIADgFgBQgFAAgHgDQgpgFgVgPQghgZgHhJQgMhtAZhrQAahqA8hbQBYiKCWhPIABAAIADABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgrAvgkAvQgeAogMAhQgTAwANAnQAEAKAJAAIAEgBQAFgBACgFQADgFgCgGQgRg1A9hTQA7hPBPhHIAPgFQAKgEgBgKIABgDQB8hoCfhHQCfhIC1ghQCsghDIAAQDnAAFGAxQA3AIAgAIQAsAMAgAUQAqAcASArIAAADIgCABIgIABQhNALhEAeQgGACgBAFQgCAFACAFQADAIAJAAIAFgBQBCgcBJgLIAagCQAIAAAIACQAJABAGAEQAQAIALAYQAHAPAHAdIAVBcIgBACIgBABQg7AJgyAaQgGACgBAGQgCAFADAFQADAHAIAAQAEAAADgCQAwgZA6gHIAbgCIAbAAQAcACAYAJQAkANANAbQAQAfgPAqQgHATgOAWIgPAWQAMAFAMAHQAbARAUAYQAnAtABAqQACAxgyA2IglAkIgdAbIgCABIgBAAIgCgCIgDgPIAAgCIAAgCQACgFAAgEQgCgHgGgDIgFgBIgWAEQkwBAj6C0IgWAQQgsAgg1AuIgBABg");
	this.shape_24.setTransform(363.9,92.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#414042").s().p("AjiBPIgCAAIgBgCQgGhJAfggQAYgZA9gMQBCgNA1AAQA+AAAzARQBKAZAsA7IAAACIgCABIhIgCQjDAAi8A3g");
	this.shape_25.setTransform(345.7,168.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CF9E76").s().p("A1lKOQgxg5gNgmQgFgRgBgOIACgcQADgQAFgLQAQgqA5g/IBchmQAEgEAAgGQgBgFgEgEQgEgDgFAAQgGgBgEAFIhcBnQg2A7gTApQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgCgBQgLgMgJgQIAAgEQAAgDgFgEQgGgOgCgPIgBgKQgCgPADgOQAJg8BBhFIAdgeQAngoASgVQAdgkAOgjQABgEgBgGQgCgFgGgCIgFgBQgJAAgDAIQgNAggbAiQgQATgmAmIgeAeQg/BFgPA/IgBABIgBAAIgCAAQgLgIgHgFQgKgLgGgMQgHgPADgOQADgQAXgaIAbgbQB5iCCMh0QAEgDABgGQABgFgEgFQgDgEgHgBQgFAAgEADIhNBDQhbBQhVBbIgCAAIgBAAIgCgBQgehPAYgyQAJgSATgSQALgKALgIQAQgLAXgPIBEgoIAXgNQBKgnA7gNQAMgDAOgCQAQgCAJAAIAOgBQAiAAArAJQAZAEAyAMIAtAKQDeAyDhALIA8ACIA7gZQEjh8EzhTIAagGQCAghBtgVIAagFQBogVCGgTIACAAIBHgKIACAAIBbgKQAFAAAEgEQADgFAAgFQgCgMgMgBIgBAAIgPACIAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIGrjrIACABQA8AsAxBCQAxBCAfBOQAyCAAMCzQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQi5BdjFBBIgfALQhAAUgoAMIvzC4IgBAAIgaAGIAAAAIldA/IgpAjQhOA+hdAlQheAmhhAJQggADgiABQhiAAhhgdQhggchUg0IgwgiQgEgDgEAAQgHABgEAEQgDAEAAAGQABAFAFAEIAWARIABABIgBACQgvAzgtAoIg7AzQgEAEgBAFQgBAGAEAEQAEAGAGAAQAEAAAEgEIAggbIAFgDIAAAAIACABQATAngEAnQgBATgJAPQgKAPgOAAQgPAAgXgcg");
	this.shape_26.setTransform(317.2,468.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CF9E76").s().p("AgYA4QgHgbgUgSIgFgDQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgDQAkgZAKggQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABgBIACACQAHAQANANQAMALAWANIACACQAAAOABAMIAGAWQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgCACQgjAGgrACQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_27.setTransform(159.6,505.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E6E7E8").s().p("Ag1C1IgCgCQgrhAgUhLQgXhVAVg5QALgfAagWQAcgZAhAAIAEAAQAUABAUAMQAVALAQAUQAZAeASA5QAaBQAEBYIgBACIgiATIgCAAIgCgCQgGgugYgnQgNgWgSgMQgRgMgSAAIgIABQgVADgPATQgNAQgDAVQgEAbAOAtQAHAXAHAOIAAACQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgMABg");
	this.shape_28.setTransform(278.4,252.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CF9E76").s().p("AhiEhQjlgGjjgvQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQEGiBEahKIAqgLIAZgdQB6iOCPiEIACgBIACABQBQBCA8BZQA8BaAgBiQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgCACQlOBYk+CNg");
	this.shape_29.setTransform(281.7,431.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CF9E76").s().p("AgJCVIgBgBQgrhphJiiQgBAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQANgQARgHQAJgEAIAAQAJAAADAEQAEAGgDAUIgBAFQgFAiAOAgQAQAjAgAMQAOAHAhADQAcACAMAFQAdALAOAmQAFANADAQQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQg9ANhHAmIgCAAg");
	this.shape_30.setTransform(182.3,441.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#27AAE1").s().p("AgWBGIgCgBQgKgQgJgbQgMgnADgUQADgNAHgLQAJgLALgBIAFAAQAMAAAMAKQAKAJAJANQAYAlADAvQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgkAPgmAGg");
	this.shape_31.setTransform(279.9,262.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CF9E76").s().p("AjNDcQhBgRg/geQgugVgSgXQgdghgDhHIgCgeIgBggIABgCIACgBQA2AEAuAAQCqAACmgvQCmgvCPhZIACAAIACAAIAHAJIBWClQALAWAEALQAGARgCAOQgCAUgTATQgOAOgcAQQhuBDh8A6IgBAAIgCgBQgigegdgnIAAgDIACgCQAbgHAggLQAFgCACgFQADgGgCgFQgDgIgKAAIgEAAQgeAMgoAKIgbAGQhNARhRAAQgaAAgagBIgugFIgCAAQgFAAgDADQgEADgBAFQAAAGADAEQADAFAGAAIAXADQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAHA1IgBACIgCABg");
	this.shape_32.setTransform(352.8,345.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(36.5,32.8,508.3,675.8), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguwA9JMAAAh6RMBdhAAAMAAAB6Rg");
	mask.setTransform(299.3,391.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EglNA2DQhagJhHgmQgXgMgSgMQgPgMgGgQQgIgcgEgXQgThqAnhoQAohoBUg+QAxgkBEgaQAogPBTgWIADgBIAqgLQD4hGDRiaQgRgsALgsQAIgeATgcQAMgSAYgaIAGgHQBShdBDiRQAphYA/i2QAqh4AahAQAohmAqhPIgBgMQgBgUACgPIgBAAIghADQgVAfgoAQQgVAJggAGQguAJghAAQgfAAgbgHQgwgMgighQgigigJgrQgIgjANgkQgPgTgLgVQgRgkgBgmQgnglgQgtQgIgYgBgbIgKgHQgugjgXg2QgXg2AHg3QAIg4AmgtIhrjTQhnjLg5hoIgNgXQgKgSAFgVQAEgWATgMICFhbQANgJAQgBIAygBQBZgDBZAAQB4gBCNAHIAeABQAQACANAJQANAJAGAOIAMAcQArBkBNCmIAeBAQAQgFASgBQAzAAAcAnQAQAVACAbQABAPgDAXIgBAFQgBAIADAJQADAIADACQAEACATABQAoADAYAJQAdAMAXAZQAXAZANAgIABAAQApAAAvAJQAdAEA3AOIAOADQEdiQE3hQQCAiZCWiJIBMhCQgTgKgLgIQgIACgLAAQgOAAgQgFQgdgKgWgZQgLgNgNgZQhKiMgchLIgEgEQkdmshxpyQgqjtgXkkIgKiRQgJiLgIjDQgjgKgagUQg/gwgKhrQgNh6Ach5QAdh5BDhnQA+hgBahIQBahIBqgpQCGhzCrhQQCshPDGglQC1ghDPAAQCOgBCkARQByAKCVAWQBAALAlAJQA2AQAoAZQA5AlAdA6QAIACALAGQAoAVAWAtQAMAZAKApIAMA3QA6AFArAZQArAZAVApQAfA+gbBLIgEALQAOANAKALQA6BEACBHQADBUhJBNQgPARgbAYIgWAVQAhDMgtDMQBIAjA3BOQBBBgAWB1QAWB1gbBxQgaBwhJBfQhJBfhlA3QgbAPgfAJIAHAiQAbCMgRCQQgQCPg7CDQARAdAVAWIAmAhQAtAfBEAZQAoAPBQAVIACABQBcAYAwATQBNAbA5AmQBfBABABsQBBBsAYCGQASBpgFB/QgEBYgSCLQhBH1iMJSQASBRABBLQABBWgbBNQgaBOgxA3QgZBig/BAQgwAxhPAhQgtAThUAXQinAshrAUQiaAdh+AAQhbABhUgRQgOCGg3BNIAGAqQASB4AEB1IABAeQABARgJAOQgIAOgPAHIgaANQi2Bbh1AxQisBIiVAkQiuAqigAAQiqAAiVgwIghgLQgbgKgIgbIgJgiQgGgWgEgcQgJg/ALg5QALg5AegsQAhg0A/goQAkgXBEgfIFhigQgPgggIgpQgFgZgEgtIgildQlUi4mBgtQkAGrjcGwQgZAwgRAZQgdAqgkAZQgdATgnAJQgKBEgTA8IgLAiQgJAagaAJIgiAKQhJAWhcAUQg3ALhuATIpcBtQhHANgkAEQg9AJgygBQgbAAgfgCg");
	this.shape.setTransform(290.6,370.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(28.3,24.6,524.7,692.3), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg/vBSgMAAAik/MB/fAAAMAAACk/g");
	mask_1.setTransform(408,528);

	// Layer_3
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F0D0B4").s().p("ACETvIgCgCIjNp+IgZAJQiDAtjYAeQjEAbixADIgbABIgBAbQgFBHgRBvQgTCDgEBJQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAgBABIgBAAIgBgBQgrgbgngfQiBhpgvkSIgUivQgDgvgCgzIgBgaQgChqAFiHIABgbQAHiPATjwQAOiqADhMQACgoAFglQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAQC2hMDCgHIAbgBQgDgPgEgLQgNgogdgfQgegggmgPQgpgRgyAAQhEAAhGAhIgBAAIgCgBQAAAAAAgBQAAAAAAAAQgBAAABgBQAAAAAAgBQBBi2B4i7IACgBIABAAQAVAKAZAGIACABQAEAIAIAAIAFgBIBAgZQFDh0FgAAQDGAADFAmQDEAoC0BKIABACIAAACIhlCmICXBDQABAAAAABQAAAAAAAAQAAAAABABQAAAAAAABIgLLOIgBADIihB/ICCDHQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQgeAlgyBMQgDAFABAFQACAGAEADQADACAFAAQAHAAAEgGQAxhKAZggIARgVQATgXAVgTQBPhHBWgFIAeAAIADABQBHAHA6A5QA5A4AQBPQAPBHgTBPQgTBPgyBMQhcCJiBAwQg4AUg6AAQgoAAgngKQgQgEgKgEQgegLgbgSQgDgDgEABQgHAAgEAFQgDAEABAGQABAGAEADQAdAUAkAMQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQgdBxhcBqIgdAfQhZBZh+BGQhHAnhXAeIgBAAgAMmGFQAkAXARAkQAOAeAAAgQAAAigOAdQgCAEABAGQACAFAFACIAGABQAIAAAEgHQAQgjAAgnQAAgngQgiQgSgngkgaIgBgDIABgCQAqgdArABIALAAQAWACAUAMQAUALAOATQAXAegGAiQgBAFADAFQADAEAFACIADAAQAFAAADgEQAEgDABgEQAJgtgfgpQgRgWgZgPQgZgOgcgDIgMgBQg8AAg2AsQgKAIgMALQgHAIgMAPQgaAhgVAyQgMAbgTA7QgCAFADAFQACAGAFABIAFAAQAJABADgKQATg5ALgaQAUgvAYgfQALgOALgKIACgBgAsdDxQgTAJgMAJQgYATgQAWQggAuACA7QACA8AiAtQAZAgAmASQAmASAqAAQAfAAAcgKQAFgCADgFQACgGgCgEQgDgJgJAAIgFABQgXAIgaABQgkAAghgQQghgQgVgbQgdglgBgzQgBgzAagnQAVgeAjgSQAigRAmAAQAWAAATAGIAEABQAKAAADgKQABgGgCgEQgDgFgFgCQgXgHgbAAQgoAAgmASgAv7jJQghAPgZAbQgdAfgQAuQgQAuAAA0QgBAZAEAcQACASAFAcIAQBIIAcAEQA0AFApAAQAcAAAkgCIAbgDQAugEAsgKIAcgGIAEgcQALhagShZQgKg4gXgoQgfg2gwgUQgYgLgeAAQgiAAgiAQgAg8kmQg4AbggAvQgcAngMA2QgEAQgCAQIgFAsQgEBUAUBRIAIAbIAdADQAzAGAvAAIAPAAIALAAIAIAAQCzgDCog3IAcgJIACgeQAChagchJQgdhKg5g3Qg5g2hGgTQgggJgkAAQg9AAg3AbgAHCpwIgBgdQgIhSgsgsQgZgbgqgRQgegMgugJQhygXh1AAIgWAAQhBACgtAKQhBAPgqAlQgbAWgQAgQgQAigBAjIAAANQABAPAEAMIAZgIQCXgwCiAAQC5AACrA+IAbAKIAAAAg");
	this.shape_33.setTransform(208.8,266.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E6E7E8").s().p("AA6CxIgBAAIgBgCQgBgRgCgPQgHgngSghQgSgggbgTQgjgagtAAQgbAAgaALIgBAAIgCAAIgBgDQAIhQAtgyQAVgXAdgNQAcgMAdAAQAWgBAVAJQAqARAaAzQATAkAJAvQARBYgMBaQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQgwAJgpAEg");
	this.shape_34.setTransform(113.1,265.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AhFBMQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgThOgBg3IAAgCIAKgHQAVgNAaAAQAiAAAeAWQAXARAQAcQAPAaAGAiQACAPABAQQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQgcACghAAQg0AAgugGg");
	this.shape_35.setTransform(106.8,275.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C2B59B").s().p("AkdC5IgBgCIAAhDQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQBNgnHrkDIACAAIABAAIABADIgDANQgRA4gHAgQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIoeEHg");
	this.shape_36.setTransform(115.4,560.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AFLBYQimg6i2AAQijAAiWAvIgCAAIgBgBIgBgCIAAgCQABgdAOgbQANgbAWgSQAmghA8gNQArgKA8gBIAXgBQBwAABwAXQArAIAbALQAlAPAWAWQAgAhAKA8IgBACIgCABg");
	this.shape_37.setTransform(217.3,191.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C2B59B").s().p("AjGDPQhNAAiugPIgCgDIAAADIAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIABgDIOImJIABAAIACAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgbBcIgBACIpIEyIgSAJIgJABg");
	this.shape_38.setTransform(102.5,549.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231F20").s().p("AJBORIgCgBIhuirQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAICXh3IAMrvIiLg/IgCgBIABgCIBlinIgYgKQi3hNjJgoQjIgojMAAQmCAAldCJIgBAAIgBAAQgfgHgXgJIgZgLQg7gegngvQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIBugXIgPgYQgphJgFhYQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQGRiDGggwQCqgTCCAAQECAADHBCQDFBACQCCQCRCCA6ClQAgBbgLBDQgIA6gmAmQgLALgKAHIAVARQBIBBAiBcQAiBdgPBbQgNBRg0BZQgfA2hHBfIiVDIIgCABIgGAAQgyAAgyAWQgzAVgtApQgRAQgRATIgCABg");
	this.shape_39.setTransform(223.2,191.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D1D3D4").s().p("AA3CtIgCgBQgEgTgFgPQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQARgjADglQABglgNggQgQgogkgYQglgZgqAAQgNAAgNADIAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgVhMIABgDIADgBIAAABQA2AQAwAfQAxAgAoAwQAnAuAYA4IAAACQgIAhgTAeQgSAegbAVIgBABg");
	this.shape_40.setTransform(417.8,469.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AiyBeIgBgBIgBgDQAMhFAWhDIACgBIARgJQBFglBEABQAsgBAkAQQAeAMAYAYQAYAYANAdIAAACQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAABQi2AJiuBFg");
	this.shape_41.setTransform(114.7,198.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C2B59B").s().p("AiDD6IgCAAIgBgCIgXmKIABgCIABAAIBGAAIAFgBIDMhkIABAAIACAAIABACIAeHEIgBADIgBABQg6ADg9AIIAAAAIgCgBIgBgBIgSlvQAAgFgDgEQgFgEgFAAQgFABgDAEQgFAEABAFIARFxQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQhAAKhIAQg");
	this.shape_42.setTransform(94.8,597.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AA4B1Qg7ABg9gHIgCgCQgVhQAEhVQACgeAFgZQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQANgCAMAAIADAAQAsABAjAfQAkAfALAsQAHAegFAgQgFAhgRAeIgDABg");
	this.shape_43.setTransform(199.9,267.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E6E7E8").s().p("AhUDRIgCgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAehBgPhAQgNg1gsgkQgrgkg0gCIgDAAIgRABIgBAAIgCgBIAAgCQALgmAUgcQAdgpAxgYQAxgYA4AAQAgAAAcAIQBAARA0AyQA1AyAaBFQAcBIgEBZQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQifA2ipAGg");
	this.shape_44.setTransform(217.7,258.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C2B59B").s().p("ACgDOQoXkTirhPQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIABg5QAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAIDeADINkGdQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_45.setTransform(681.1,551.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("Ak1PbIgGgOQgag7g4gqQg3grhKgUQhGgUhTAAQg4AAhYALIgCAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAgBAAAAIgchSQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAEAEAFABIACAAQAFAAADgEQAEgCABgGQA2l2BrlnIAIgbIiShrQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAICPj1IgPgbQh5jZgjj3IAAgCIACgBQDygTDlhCIKGALQC2AEBiAIQCjAOB7AmQAAABABAAQAAAAAAAAQAAABABAAQAAABAAAAQgEA3gIBKIgDAaQgbD9gxD2QgNBAgMAmQgRA1gbAlQgSAZgbATQggAWgiAIIAAAAIgCgBQgIgIgKgGQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAABAAQAAgBAAAAQAAAAABAAQAtglAXg0QAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAFAQQACAKALAAIADAAQAGgBACgFQADgFgBgFQgIghgMgcQgLgZgLgVQg2hjhcg7QgugdgzgSIgCgBQgEgHgGAAIgNgBIgEAAIgCAAIgogBQhOAAhQAPQg1AKgrANIgBAAIgCgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBABAAQAphqAmhGIAIgMQAJgQANgUIABgBIABgCIAZgjQA2hIBFguQAXgPAXgLQBEgjBFgCQAFgBAEgEQAEgEgBgGQAAgFgEgEQgEgEgGABQhhAEhbA8QgZAPgNALQgrAignAvIgCABIgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAOgsARgiIAUgkQADgFgBgFQgBgGgFgDIgHgCQgHAAgEAGIgbAzQggBEgMBLIgQAbIgCABQjSBQi/BYIgbAOQhQAlg9AgQgFACgCAFQgCAFADAGQAEAHAIAAIAGgCIB7g8IABAAIABABQABAAAAAAQAAAAAAABQABAAAAAAQgBAAAAABQgEBmAPBiIAAADIgpApIBDCOQgKCdAYCeQAZCeA5CTIAGAPQAYA9AHAfQANAzgJAoQgBAGgFAPQgFAMgIAOQghA3hEAgQgWAJgdAJIgBABQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_46.setTransform(368.7,490.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C2B59B").s().p("Ag1FgIhfhPIgBgBIACpsQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAICFAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAJmQAAAFAEAEQAEAEAFAAQAFAAAEgEQADgEAAgFIAApmQAAgBABgBQAAAAAAAAQABgBAAAAQABAAAAAAIB5AAQABAAAAAAQABAAAAABQAAAAAAAAQAAABABABIAHKnQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIjHASg");
	this.shape_47.setTransform(615.8,718.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231F20").s().p("AoXEBIgBgBIgCgCQAFg2AagvQAagwApgcQAcgUAngPQAYgJAygPQAbgHAdgKQCMgvBthqIATgUQAmgnAegsIACgBIABAAQDrBVDOCLIABACQgBAtgGAsIgNBJIgCACQnWB7nlABIhggBg");
	this.shape_48.setTransform(112.3,845);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("Am3SKIgBgBQgBAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQADgaACgdIABgCIADAAIAWAQQAEACAEAAQAGAAAFgGQADgDgBgHQgBgFgEgEIhEguQjJiEjkhUIg9gVIgEgBQgJAAgEAJQgCAFADAFQADAFAFACIAYAIIACACIgBACQgcAogkAmIgCABIgBgBQg/gkgBgtQgBgRAIgTQAEgNAMgWIADgFQA1hlAhh5IALgnQANg2ANhEIAAgCQALhAAHhBIAAgBQANh6AHioIACgxQAHiRAEg+QAHh1ANhcIAEgbQAPhhAXhVIABgCQA9gaA6geIABgBIACABQAyAwA+AWIADABQAVAIAdAGIYundIAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQijCEjhBcQigBCjpA8IgBAAIgBAAIhBARIgwAnQh7BnhrB3IgXAbQglAqgqA2IgCABIgBAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAJhuQABgGgGgFQgEgCgEAAQgFAAgEACQgEAEgBAGIgBARIgMCPIiFUJQgGA5gGAdQgKAxgUAiQgYApgqAVg");
	this.shape_49.setTransform(212.5,733.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F0D0B4").s().p("AAOAeQgPgIgOgCIgCgBIAAgCQAFgWANgPIAKgJIACAAIABAAQAAABABAAQAAAAAAAAQAAABAAAAQABAAAAABIACA2QAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAAAg");
	this.shape_50.setTransform(86.6,315.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C2B59B").s().p("AB2EQIq2mZQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIADiCIABgCIACgBIABABQDSBkHjD5QADACADAAIG/AGQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAACPQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAInIAng");
	this.shape_51.setTransform(683.7,566.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C2B59B").s().p("AhKQdIhghPIgBgBIAJwrQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAICEAAIABABIABACIgGQkQAAAGADAEQAEAEAGAAQAGAAADgEQAEgDABgGIAFwlQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIBPAAQAGABADgEQAFgFAAgFIAAkTQgBgHgEgDIhXhPIgBgCIAEo+IAAgCIADAAICPBUQADACAEAAIAIAAIACAAIABADIgsfLQAAAAAAABQAAAAgBABQAAAAAAAAQgBABgBAAIjGASg");
	this.shape_52.setTransform(679.2,693.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("ACjQpQgbgMgVgUQgegdgQguQgQguAAg1QABgqAKgyIAIgiIAThDIE+xSQABgFgCgFQgEgFgEgBIgEgBQgKAAgDAKIhbE9IgCABQkcBfkiAtQhpAQg9AAQhXAAhDgZQgfgKgfgWIgBgCIgZszQgBg1ABgaQADgsAKghQANgnAbgdIACgBIAAAAIACABIAeAmIABACIgOA5QAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgFgPQgCgKgLAAIgDAAQgFACgDAEQgDAGABAFQAJAgAPAaQAKATAJANQAqA5A9AeQA3AaBAAAQASAAAVgDIABAAIACABQAdAXApAdIAWAPIApguIACAAIABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAIgBHtQAAAGAEADQADAEAGAAQAFAAAEgEQAEgEAAgFIAAhMQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAINnmIIABAAIACABQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABIgBA0IgBABQiXCch3C0IgUAeIAKAjQANAtASA1IAUA8IgBACIh3CyIACAsQAUF4guF7IgjBUIgLAZQgQAkgjBLQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgdgBgbgLg");
	this.shape_53.setTransform(137.2,477.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F0D0B4").s().p("AgWBiQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgUg/gBhAQAAgoAPgQQAFgGAFgCIALgCIAEABQAQABAVATIAAABQADAnAHA4IAEAgIgBADIgBABIgBAAQgNgGgJgFQgRgMgJgSQgEgGgIgBIgGACQgFACgBAGQgCAGADAEQAKATAVARIABACIgBACIgXAdIgCABg");
	this.shape_54.setTransform(85.4,329.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C2B59B").s().p("AiXA4QgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAhdQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBABAAIAegNQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQgEADAAAFQgBAGAEAEQADAEAGABQCwAPBJAAIAPAAIACAAIABACIAABAQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAg");
	this.shape_55.setTransform(68.5,573.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#231F20").s().p("Aj+E/QhIgBgugLQhCgRgkgqQgsgzAJhMQAIhGAug1QAsgyBHgkQA0gZBQgXIBQgVQBBgQBMgMIAbgDQA3gIBEgFIBegDQAMgMASgPQA4guBFgXQAfgKAmgFIAAAAIABAAQAMgCAPgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQABABgBAAQAAABAAAAQAAAAAAABQgUAPgPAQQgpAqgUAxQgSArgEAwQgDAwALAwQASBOA4A/IABACIgCACQgkATg1AYIgfANQg/AahIAXIhPAWQgkAKgpAIIgbAFQhHAOhBAGIgaACQhDAGg4AAg");
	this.shape_56.setTransform(94.4,640.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("AitKzQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAglSgVlQIAAgCIDHkqQAEgFgCgFQAAgFgFgDQgEgDgDAAQgHAAgEAGIg/BfIgCABIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgLgkQgdhWgIghIAAgCQBuitCQiZIACgBIABAAQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAABIgBAcQAAAIAFAEQAEACAEAAIAEgBIABAAIACABQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQg1BlgiCBQgZBiggDJIgSBxQgvEUhXEOIggBbIAAABIgTAzQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_57.setTransform(190.6,482.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C2B59B").s().p("AhnJYQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIhGyIQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAQBHgHA8gLIAAAAIACAAIACACIA1RbQAAAFADAEQAEAEAFAAQAGgBAEgEQAEgEAAgGIg1xfQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIBGgQIABAAIABABIABACIAABzQAAAFAEAFQAEAEAFgBIAxAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAyLwQgSCZghB7IgBABIhOAzIgBAAg");
	this.shape_58.setTransform(102.1,731.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C2B59B").s().p("AhVBVQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhqQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIA0gPQA2gRA/gZIABAAIACABIABADQgUBLgNBYQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_59.setTransform(119.9,672.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D1D3D4").s().p("AnvPcQgTgJgIgTQgIgSAAgeIAAgaIAMj0QBtk4A5lHIAShvIADgBIgDAAQAfjIAahhQAoiWA+hpIABgBICUg1IABAAIACABIATAXIAQgVQA5hLAQhcQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIE/htIABgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAYAtAjAsQAAAAAAABQABAAAAABQAAAAgBAAQAAABAAAAIg0BMQgsA+gsAyIgbAfQgbAdgVATIgTARIgCABIAAAAIgCgBQgkgygVg7QgVg7gCg7QAAgGgEgEQgEgDgGAAQgFAAgEAEQgEAEAAAFQADBCAWBAQAXBAAoA0IARAVIBCg8IADgBIABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABQgJF8A7F/QA7GAB8FnIgBACQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQioAVijAoQhbgQhVgFIg+gBQg7AAg2AFIAAAAIgCgBIg9heQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIACgCQAYgFAWgRQAWgQAPgYQAKgSAHgUQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABAAIDgACQAFAAAEgEQAEgEAAgFQAAgGgEgEQgEgEgFAAIjXgCIgDgBIAAgCQAFgVADgeQAJhFAEh1QADhJADidQAFk5AMiXQATj6Avh4QACgEgCgGQgCgFgEgCIgFgBQgIAAgFAIQgwB6gUD9QgMCXgGE+QgDCigDBCQgEB1gIBEQgEAigGAVQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIiKgBQgFAAgEAEQgEADAAAGQAAAFAEAEQAEAEAFAAICAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAABABIAAACQgEAMgHALQgPAYgWAOQgVAOgYAAIgFAAQgIAAgEAHQgEAHAFAHIBBBlIABADQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIg5AIQhpARhlAhIgBAAIgTAHIgIABQgGAAgKgEg");
	this.shape_60.setTransform(229.9,482.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F0D0B4").s().p("AheCuIgCgBQgdghgfgdIgOgOQgRgRgbgWQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIACgDIA0gPQBIgYA/gfIAagNIAEgDQBxg+BUhOIABAAIABAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQACAxAJAtQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIjxBSIgFAeQgPBJgtA+IgCABg");
	this.shape_61.setTransform(238.9,391.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("AAUMlQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBgBQhulbgzlxQg0lwAMlsIABgBQA5g/BAhbIACgBIBKgDQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAlEECBDkQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABIiFDjIgBABIgBAAIgCgBQgggYgPgUQgUgXgFgaQgCgLgLAAIgDABQgFABgDAEQgDAFABAFQAGAiAbAfQATAWAjAaICXBuQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQhvFyg2F4IABADQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_62.setTransform(281.1,480.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#8B5E3C").s().p("AguAZIgYgCIgCgBQAAgBgBAAQAAAAAAgBQAAAAAAAAQABAAAAgBIAfgqIACgBQA5ADA1AHQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAgBABQAAAAAAAAQgBAAgBABQhHATgtAPg");
	this.shape_63.setTransform(235,579.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#8B5E3C").s().p("AiPA1QAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAPgNAcgZQB1gtB7gVIAAAAIACABQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIgNAkQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQiGASiGAwIgBAAIgCgBg");
	this.shape_64.setTransform(189.7,584.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D1D3D4").s().p("AhoAcIgCgBIgBgDIAPgkIABgCIBTgJIAEAAQArgEA4AAIAKAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIAAACIgeAqIgDABIgbAAQhOgBhIAJg");
	this.shape_65.setTransform(216.6,580.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#58595B").s().p("Ak7BZQAAgBgBAAQAAgBABAAQAAgBAAAAQAAAAABAAQAkgZAqggQCmhMC4gbIAegFQBSgLBUAAIAEAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABQABABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQjKBHi6BgIgCABIAAAAQg3gKg4AAQhBAAg9AQIgBAAIgCgBg");
	this.shape_66.setTransform(190.3,593.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D1D3D4").s().p("ABmBjQg5AAgwgXQhDgigmg/IgBgCIAShJIACgCIABAAIACABQBcBrBnBUIAAADQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_67.setTransform(87.9,386.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#231F20").s().p("ACNFCIg1gmIgDgDIgYgSQiAhnhph+IgVgaIgCgCIgigsIgng3IAAgDIC1jgIACgBIABAAIATAEIACADQAwEeCJBxQAvAlA2AhIAtAZIACACIgBADIh9CIIgCABg");
	this.shape_68.setTransform(96.9,369.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#231F20").s().p("AhGBvQgwgEgpgTQgpgTgbgeQgVgXgMgcQgMgdgBgeIAGgmQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAAAAAIAQABQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQABANAFAWIAGAbIAdADQAyAFAxAAQDBAAC3hGIABAAIACABQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQhFB1hTA0QhMAuhYAAg");
	this.shape_69.setTransform(158.5,363.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F0D0B4").s().p("ABpDgIgBgBQgQgLgLgJIgBgCQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAAAAAIAWgBQAGgBADgFQAEgEgBgFQAAgFgEgEQgEgEgFABIgBAAIg1ADIgigBQhBgDg8gRIgtgPIgEAAQgJAAgEAIQgCAGADAEQACAFAFADIAbAJQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAABIABAKIgBACIgCABIgBAAQhZgahVgjIg7gbQgBgBAAAAQAAAAAAAAQAAgBgBAAQAAgBAAgBIAXiJQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIABAAIACABQAOAeAUAUQAfAiAtAVQAtAUA1AGQAPABAQAAQBgAABSgzQA8glAzhBQAjguAihCIAXguQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIACAAIBaDtQAKAaACAOQAEAVgGAOQgGAPgTANQgMAIgaALIjOBXg");
	this.shape_70.setTransform(165.4,368.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E6E7E8").s().p("AkGBCQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIgHgjIABgCIACgBIAYABQEKAAD2hgIABAAIACAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgaA3IgCABQjABQjVAAQg1AAgwgEg");
	this.shape_71.setTransform(163.7,350.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#231F20").s().p("AihEvQiOgfh2g5IhAghIgBgDQAEhJAUiRIANhgIAJhXQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQCUgDCfgTQCfgTCBgdIAQgEQBCgQAwgQIAAgBIABABIACABIDEJhIAAACIgBABIh8AeQhyAVh6AAQiRAAiNgegAihDTQBIASBHABIABABQAVAWAYAQQAOAKAKAEIDahcQAfgMAPgMQAXgQAJgVQAJgVgFgaQgDgSgKgdIhJjAQgBAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBIABAAIACABQAEAEAGAAIAGgBQAEgCADgFQACgFgCgFQgRglgegjIgBAAIgBgBIgBgBIgSgRIAAgBQgQgNgOgJQgFAGACAHIAHARQAAAAAAABQAAAAAAABQAAAAAAABQgBAAgBAAQjzBikLAAIhhgDIgCAJIgBACIgDAPQgFATAAAVIglDiQgBAJAJAFQAPAIAWAKIAaALQBfAqBmAbIAbAHIgBgnIABgCIABgBg");
	this.shape_72.setTransform(170.6,365.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C2B59B").s().p("EglHAGHQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQB4iBCDhnQCAggBdgcQCCgnBrgsQEQhuCzilQAbgMATgMQAogbAWgwQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAMAtRgAZIACABIJJILIABACIAAD8QAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAgA8DBuQgEAEAAAGQAAAFAEAEQAEAFAGAAMA/LAAAQAGAAAEgFQAEgEAAgFQAAgGgEgEQgEgDgGAAMg/LAAAQgGAAgEADg");
	this.shape_73.setTransform(448.4,641.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D1D3D4").s().p("AgBIbQjOlHiuliIg9iCIAAgDIAmgkQB4huCcg8IAhgMQCJguCJAAIAPAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIA0DCIgCAEQhEAwg0BAQgoAzARAkQAKAWAaAIIABADIAAACQgQAaABAaQABAiAZAbQAZAbAlAIQAKACAOAAIAFAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIACAHQAJAWAVARQAVAPAaAEIAQABIAUgCQABAAAAABQAAAAABAAQAAAAABABQAAAAAAAAQACAMAFANQAIAVAQAOIABABIAyDIIgCAEQhiBBhxAqQhwAph2AOIgBABIgBgCgACgmLQhtBfiBBAQiCBBiOAeQgGABgDAFQgDAEABAGQADALAKAAIADgBQCRgfCGhCQCEhCBwhhQAEgFAAgEQABgFgEgFQgFgFgFAAQgFAAgEAEgACqoJQh9BZiPA7QiRA6iZAYQgFABgDAFQgDAEAAAFQABAFAEADQADADAFAAIACAAQCcgXCUg8QCSg8CAhbQAEgEABgGQABgFgDgEQgFgGgGAAQgEAAgEADg");
	this.shape_74.setTransform(382.3,505.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F0D0B4").s().p("AgKA7QgEgBgEgDQgQgIgIgVQgEgKgCgNQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAZgMQAagTASgbIACgCQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAQAKAPAGAPQANAkgQAcQgGALgLAHQgMAGgLABIgKgCg");
	this.shape_75.setTransform(426,516.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#58595B").s().p("Ar1HFQgUgEgVgIQg3gTgsgoIgUgTQg4g9gShNQgWhbAihRQARgpAhghQAggkArgZQAWgOAWgHIATgIQBCgWBOgBQAgAAAgAEQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIg8AiQgFADgBAFQgCAFADAFQADAHAIAAQAEAAADgBQArgZA5geQAFgCADgDQC0heC3hCICog3QAvgOBOgUIAMACQAIAAAEgGIABgBQCYglCmgWIAWgDIACgBIABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIABAAQBNgJA9AAQBTAAA/ASQBFASAyAoQAyAnAZA1IAFAMQAFAMADAOQAKA0gPAwIgLAbQgSAigdAUQgRAMgaAKIgpANI5FHjg");
	this.shape_76.setTransform(236.3,617.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F0D0B4").s().p("AhNCWQgJAAgMgCQgZgEgHgQQgKgVAeglQAvg7A9gsIAngaQAFgDABgGQABgFgDgFQgEgGgHAAQgEAAgDACIgGAEIgCAAIgBAAIgCgCIgPg/IAAgCIACgCQAHgCALAAQAiAAAeAVQAeAUANAgQATAvgTA2QgHASgHALQgIAPgOAOQg1A4haAKIgCgBIgQACg");
	this.shape_77.setTransform(408.1,477.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F0D0B4").s().p("AglBwQgSgDgQgLQgPgMgGgQIgBgCIACgBQAkgJAdgYIANgMQAHgHAKgNQAhgpAIg0IACgSIACgCIABgBIACABQALAHAIANQAeAtgJA1IgDAKQgEAPgGAMQgPAegdAUIgEACIgLAGQgFADgIACIgMAEQgJACgLAAIgMgBg");
	this.shape_78.setTransform(418.8,503.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D1D3D4").s().p("AhPBSQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAEiWQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAIAqgJIAAAAIACAAIA8A1IAEAEQAaAYAWAXIABADIgCABIidA4IgBABg");
	this.shape_79.setTransform(217.1,406.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F0D0B4").s().p("AgfBpQgLAAgIgCQgbgFgTgVQgTgVgBgYQAAgZASgWIACgBIANAAQA2gDAugTQAvgUAgghIALgMIACgBIABAAIACACIAAABIACALIABAFIAAADIABASQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIACACIAAADIgCATQgFAhgRAbQgQAdgZAUQgYATgcAJQgNAEgNAAg");
	this.shape_80.setTransform(409.2,497.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C2B59B").s().p("Ai1CyIgBgCQgNhdAGhhIABgDQC9hYC7hIIABAAIACABIABADQgmBJgqBsIgBABQifA4iCBxIgCAAg");
	this.shape_81.setTransform(359.6,453.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#58595B").s().p("AgdBLIgCgBIAAgDIAUgwIACgCQAHgDABgHIABgOIAbhGQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIABAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgHCPQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQgQACgTAAg");
	this.shape_82.setTransform(171.7,564.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C2B59B").s().p("AA/FCIgCAAIiBh0IAAgCIAEoLQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIABAAIABAAICABMIABACIgEIzQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAg");
	this.shape_83.setTransform(670.4,610.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C2B59B").s().p("AgmBrIgejUIABgCIACgBIBnAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAcDTIgBACIgCABIhmABQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_84.setTransform(580.2,589.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C2B59B").s().p("Az6MnQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAABAAQAAgBAAAAIADgLQAKgtgNg3QgIghgahBIgGgQQgziBgYiMQgZiNADiMQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAgBIABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQCeE+C/EwIAQAZIAegDQDugfDGiDIAXgPIgwjEIABgDIACAAIABAAIAGAAQATAAARgKQASgLAKgRQAWgngSgxQgJgYgUgZIAAgDQAFgNACgNQALg3gcgyIAAgCIACgBQAhgKAegVQAegWAVgdQAdgnATg5QAMgnAOhEQAxjyAbkDQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIapAAIACABIABACIgnZHQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_85.setTransform(485.2,495.3);

	var maskedShapeInstanceList = [this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(43.3,99.8,698.3,771), null);


(lib.smartPhone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.smartIphone2000s();
	this.instance.parent = this;
	this.instance.setTransform(61.7,0,0.171,0.171,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.smartPhone, new cjs.Rectangle(0,0,123,142.3), null);


(lib.woman80s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.womanCoffeePhone();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.266,0.266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.woman80s, new cjs.Rectangle(0,0,139,272.1), null);


(lib.motoRazr_00s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Motorola_RAZR_00s();
	this.instance.parent = this;
	this.instance.setTransform(167.5,-16,0.016,0.021,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.motoRazr_00s, new cjs.Rectangle(122,-16,45.5,109.2), null);


(lib.MICROtAC_80S = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Motorola_MicroTAC_9800x();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MICROtAC_80S, new cjs.Rectangle(0,0,86.9,138.7), null);


(lib.DYNA_80S = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.DynaTAC8000X();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.168,0.168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.DYNA_80S, new cjs.Rectangle(0,0,67,164.1), null);


(lib.bbBold_00s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blackberrybold9000_00s();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbBold_00s, new cjs.Rectangle(0,0,119.8,119.7), null);


(lib._90sPhones1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Mobile_phone_timeline();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.329,0.329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._90sPhones1, new cjs.Rectangle(0,0,263.3,158.3), null);


(lib.Button2000s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAoIgEAAQgDAAgCAEIgDAAIgBgeIADAAQAEAMAHAGQAHAGAFAAQAEAAADgDQADgDAAgDQAAgFgDgDQgDgDgIgGQgOgKgEgEQgGgHAAgJQAAgKAHgHQAHgIAMAAQAGAAAHADIADABIADAAIADgEIADAAIACAcIgEAAQgFgMgGgFQgGgFgEAAQgEAAgDADQgCACAAAEIABAEQADAEAMAJQAOAJAEAFQAEAGAAAIQAAAHgEAGQgDAHgGAEQgHADgHAAQgFAAgKgEg");
	this.shape.setTransform(57.7,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBAeIgJghQgCgHAAgFQAAgGAEgEQADgEAFAAQAGAAAEAEQADAFAAAEIgCANIgJAhg");
	this.shape_1.setTransform(51.6,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOA7QgIgFgFgIQgEgGgDgKQgEgOAAgOQAAgUAGgQQAEgOAJgHQAKgHAJAAQAKAAAKAHQAJAIAEALQAGARAAATQAAASgFAQQgDAJgFAGQgFAHgHADQgGAEgIAAQgIAAgGgEgAgFg2QgEADgBAJQgBAHAAAvQAAAZACAJQACAGACADQACACADAAQAFAAACgEQAEgEABgLIAAgmIAAglQgBgMgEgEQgCgDgFAAQgDAAgCACg");
	this.shape_2.setTransform(44.5,37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOA7QgHgFgGgIQgEgGgDgKQgEgOAAgOQAAgUAGgQQAEgOAKgHQAJgHAJAAQALAAAJAHQAJAIAEALQAGARAAATQAAASgFAQQgDAJgFAGQgFAHgHADQgGAEgIAAQgHAAgHgEgAgFg2QgEADAAAJQgCAHAAAvQAAAZACAJQABAGADADQACACAEAAQAEAAACgEQAEgEABgLIAAgmIAAglQgCgMgDgEQgCgDgFAAQgDAAgCACg");
	this.shape_3.setTransform(35.3,37.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPA7QgGgFgGgIQgEgGgDgKQgEgOAAgOQAAgUAFgQQAFgOAKgHQAJgHAJAAQAKAAAKAHQAJAIAFALQAFARAAATQAAASgFAQQgDAJgFAGQgFAHgGADQgHAEgIAAQgHAAgIgEgAgFg2QgDADgBAJQgCAHAAAvQAAAZACAJQACAGACADQADACACAAQAFAAACgEQAEgEAAgLIAAgmIAAglQAAgMgEgEQgCgDgFAAQgDAAgCACg");
	this.shape_4.setTransform(26.2,37.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA+IAAgCQAhgnAGgOQAHgMAAgNQAAgJgGgHQgFgGgIAAQgOAAgIAOIgDgBQAFgRAKgJQAJgIAMAAQAKAAAHAEQAIAFAEAHQAEAIABAGQgBAMgGAMQgJAQgdAdIAZAAIAMAAIAFgDIAFgIIADAAIgHAjg");
	this.shape_5.setTransform(16.8,37.2);

	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.102,0.102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Button2000s1, new cjs.Rectangle(0,0,73.6,73.6), null);


(lib.Button90s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAoIgEAAQgDAAgCAEIgDAAIgBgeIADAAQAEAMAHAGQAHAGAFAAQAEAAADgDQADgDAAgDQAAgFgDgDQgDgDgIgGQgOgKgEgEQgGgHAAgJQAAgKAHgHQAHgIAMAAQAGAAAHADIADABIADAAIADgEIADAAIACAcIgEAAQgFgMgGgFQgGgFgEAAQgEAAgDADQgCACAAAEIABAEQADAEAMAJQAOAJAEAFQAEAGAAAIQAAAHgEAGQgDAHgGAEQgHADgHAAQgFAAgKgEg");
	this.shape.setTransform(55.5,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBAeIgJghQgCgHAAgFQAAgGAEgEQADgEAFAAQAGAAAEAEQADAFAAAEIgCANIgJAhg");
	this.shape_1.setTransform(49.4,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPA7QgGgFgGgIQgEgGgDgKQgEgOAAgOQAAgUAFgQQAFgOAKgHQAJgHAJAAQAKAAAKAHQAJAIAFALQAFARAAATQAAASgFAQQgDAJgFAGQgFAHgGADQgHAEgIAAQgHAAgIgEgAgFg2QgDADgBAJQgCAHAAAvQAAAZACAJQABAGADADQADACACAAQAFAAACgEQAEgEAAgLIAAgmIAAglQgBgMgDgEQgCgDgFAAQgDAAgCACg");
	this.shape_2.setTransform(42.3,37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnA8QAPgDALgHQAKgGAFgKQAGgJACgNIgJAEIgHABQgOAAgJgKQgJgJAAgRQAAgMAFgKQAFgKAJgGQAJgFAKAAQAJAAAKAGQAJAGAGALQAGAMAAAPQAAASgJARQgKASgSAKQgRALgZABgAgJg0QgEAFAAAPQAAAYAGAJQAEAGAFAAQAEAAAGgDIABgRQAAgPgEgOQgCgJgFgDQgCgCgCAAQgFAAgCAEg");
	this.shape_3.setTransform(33.1,37.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnA8QAPgDALgHQAKgGAFgKQAGgJACgNIgJAEIgHABQgOAAgJgKQgJgJAAgRQAAgMAFgKQAFgKAJgGQAJgFAKAAQAJAAAKAGQAJAGAGALQAGAMAAAPQAAASgJARQgKASgSAKQgRALgZABgAgJg0QgEAFAAAPQAAAYAGAJQAEAGAFAAQAEAAAGgDIABgRQAAgPgEgOQgCgJgFgDQgCgCgCAAQgFAAgCAEg");
	this.shape_4.setTransform(23.9,37.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA+IAAgEIADAAQAIAAADgBQAEgCABgDQABgDAAgMIAAg+IgBgKIgDgEQgCgBgDAAQgFAAgGADIgCgDIAsgVIADAAIAABiQAAALABADQABAEADABQADACAHAAIADAAIAAAEg");
	this.shape_5.setTransform(14.7,37.2);

	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.102,0.102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Button90s1, new cjs.Rectangle(0,0,73.6,73.6), null);


(lib.Button80s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAoIgEAAQgDAAgCAEIgDAAIgBgeIADAAQAEAMAHAGQAHAGAFAAQAEAAADgDQADgDAAgDQAAgFgDgDQgDgDgIgGQgOgKgEgEQgGgHAAgJQAAgKAHgHQAHgIAMAAQAGAAAHADIADABIADAAIADgEIADAAIACAcIgEAAQgFgMgGgFQgGgFgEAAQgEAAgDADQgCACAAAEIABAEQADAEAMAJQAOAJAEAFQAEAGAAAIQAAAHgEAGQgDAHgGAEQgHADgHAAQgFAAgKgEg");
	this.shape.setTransform(56.2,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBAeIgJghQgCgHAAgFQAAgGAEgEQADgEAFAAQAGAAAEAEQADAFAAAEIgCANIgJAhg");
	this.shape_1.setTransform(50.1,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPA7QgGgFgGgIQgEgGgDgKQgEgOAAgOQAAgUAFgQQAFgOAKgHQAJgHAJAAQAKAAAKAHQAJAIAFALQAFARAAATQAAASgFAQQgDAJgFAGQgFAHgGADQgHAEgIAAQgHAAgIgEgAgFg2QgDADgCAJQgBAHAAAvQAAAZACAJQACAGACADQACACADAAQAFAAACgEQAEgEAAgLIAAgmIAAglQAAgMgEgEQgCgDgFAAQgDAAgCACg");
	this.shape_2.setTransform(42.9,37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcA2QgKgJAAgNQAAgJAFgIQAGgHANgGQgOgKgEgHQgEgHAAgJQAAgMAKgKQAKgJARAAQASAAAJAIQAJAIAAAMQAAAIgFAHQgFAHgKAFQAMAIAFAIQAFAIAAALQAAAOgLALQgLAKgSAAQgSAAgJgJgAgLALQgCADgBAGQgCAGAAAGQAAAJADAFQACAGAEADQAEACADAAQAGAAAFgFQAEgFAAgIQAAgRgWgQIgEAFgAgIg0QgEAEAAAHQAAAGAEAHQAFAHANAJQADgEACgGQABgFAAgHQAAgLgFgHQgDgEgHAAQgFAAgEAEg");
	this.shape_3.setTransform(33.8,37.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnA8QAPgDALgHQAKgGAFgKQAGgJACgNIgJAEIgHABQgOAAgJgKQgJgJAAgRQAAgMAFgKQAFgKAJgGQAJgFAKAAQAJAAAKAGQAJAGAGALQAGAMAAAPQAAASgJARQgKASgSAKQgRALgZABgAgJg0QgEAFAAAPQAAAYAGAJQAEAGAFAAQAEAAAGgDIABgRQAAgPgEgOQgCgJgFgDQgCgCgCAAQgFAAgCAEg");
	this.shape_4.setTransform(24.6,37.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA+IAAgEIADAAQAIAAADgBQAEgCABgDQABgDAAgMIAAg+IgBgKIgDgEQgCgBgDAAQgFAAgGADIgCgDIAsgVIADAAIAABiQAAALABADQABAEADABQADACAHAAIADAAIAAAEg");
	this.shape_5.setTransform(15.4,37.2);

	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.102,0.102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Button80s1, new cjs.Rectangle(0,0,73.6,73.6), null);


(lib.btnStop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.stopButton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.097,0.097);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnStop, new cjs.Rectangle(0,0,70,70), null);


(lib.btnPlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.playButton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.104,0.104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnPlay, new cjs.Rectangle(0,0,75,75), null);


(lib.btnBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.icons8goback64();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnBack, new cjs.Rectangle(0,0,64,64), null);


(lib.g506 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvLNnIAA7NIeXAAIAAbNg");
	mask.setTransform(97.2,87.1);

	// Layer_3
	this.instance = new lib.g504();
	this.instance.parent = this;
	this.instance.setTransform(97.2,87.1,1,1,0,0,0,97.2,87.1);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g506, new cjs.Rectangle(0,0,194.4,174.3), null);


(lib.g490 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlEFiIAArDIKJAAIAALDg");
	mask.setTransform(32.5,35.4);

	// Layer_3
	this.instance = new lib.g488();
	this.instance.parent = this;
	this.instance.setTransform(32.5,35.4,1,1,0,0,0,32.5,35.4);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g490, new cjs.Rectangle(0,0,65,70.8), null);


(lib.g474 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApzEfIAAo9ITnAAIAAI9g");
	mask.setTransform(62.8,28.7);

	// Layer_3
	this.instance = new lib.g472();
	this.instance.parent = this;
	this.instance.setTransform(62.8,28.7,1,1,0,0,0,62.8,28.7);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g474, new cjs.Rectangle(0,0,125.7,57.3), null);


(lib.g458 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq9FxIAArhIV7AAIAALhg");
	mask.setTransform(70.2,36.9);

	// Layer_3
	this.instance = new lib.g456();
	this.instance.parent = this;
	this.instance.setTransform(70.2,36.9,1,1,0,0,0,70.2,36.9);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g458, new cjs.Rectangle(0,0,140.5,73.7), null);


(lib.g442 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvyNKIAA6TIflAAIAAaTg");
	mask.setTransform(101.1,84.2);

	// Layer_3
	this.instance = new lib.g440();
	this.instance.parent = this;
	this.instance.setTransform(101,84.2,1,1,0,0,0,101,84.2);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g442, new cjs.Rectangle(0,0,202.1,168.5), null);


(lib.g426 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjwCiIAAlDIHhAAIAAFDg");
	mask.setTransform(24.1,16.2);

	// Layer_3
	this.instance = new lib.g424();
	this.instance.parent = this;
	this.instance.setTransform(24.2,16.1,1,1,0,0,0,24.2,16.1);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g426, new cjs.Rectangle(0.1,0,48.2,32.4), null);


(lib.g410 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdATIAAglIA7AAIAAAlg");
	mask.setTransform(3,1.9);

	// Layer_3
	this.instance = new lib.g408();
	this.instance.parent = this;
	this.instance.setTransform(3,1.9,1,1,0,0,0,3,1.9);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g410, new cjs.Rectangle(0,0,6.1,3.9), null);


(lib.g394 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhnAcIAAg3IDPAAIAAA3g");
	mask.setTransform(10.4,2.8);

	// Layer_3
	this.instance = new lib.g392();
	this.instance.parent = this;
	this.instance.setTransform(10.3,2.8,1,1,0,0,0,10.3,2.8);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g394, new cjs.Rectangle(0,0,20.8,5.7), null);


(lib.g378 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhtD4IAAnvIDbAAIAAHvg");
	mask.setTransform(11,24.8);

	// Layer_3
	this.instance = new lib.g376();
	this.instance.parent = this;
	this.instance.setTransform(11,24.8,1,1,0,0,0,11,24.8);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g378, new cjs.Rectangle(0,0,22,49.6), null);


(lib.g362 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/BfIAAi+IB+AAIAAC+g");
	mask.setTransform(6.4,9.6);

	// Layer_3
	this.instance = new lib.g360();
	this.instance.parent = this;
	this.instance.setTransform(6.4,9.6,1,1,0,0,0,6.4,9.6);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g362, new cjs.Rectangle(0,0,12.7,19.1), null);


(lib.g346 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkXCpIAAlRIIvAAIAAFRg");
	mask.setTransform(28,16.9);

	// Layer_3
	this.instance = new lib.g344();
	this.instance.parent = this;
	this.instance.setTransform(28,16.9,1,1,0,0,0,28,16.9);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g346, new cjs.Rectangle(0,0,56.1,33.8), null);


(lib.g330 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai+BUIAAinIF9AAIAACng");
	mask.setTransform(19.1,8.4);

	// Layer_3
	this.instance = new lib.g328();
	this.instance.parent = this;
	this.instance.setTransform(19.1,8.3,1,1,0,0,0,19.1,8.3);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g330, new cjs.Rectangle(0,0,38.2,16.8), null);


(lib.g314 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoHDBIAAmBIQPAAIAAGBg");
	mask.setTransform(52,19.3);

	// Layer_3
	this.instance = new lib.g312();
	this.instance.parent = this;
	this.instance.setTransform(52,19.3,1,1,0,0,0,52,19.3);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g314, new cjs.Rectangle(0,0,104,38.6), null);


(lib.g298 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqcDAIAAl/IU5AAIAAF/g");
	mask.setTransform(66.9,19.2);

	// Layer_3
	this.instance = new lib.g296();
	this.instance.parent = this;
	this.instance.setTransform(66.8,19.2,1,1,0,0,0,66.8,19.2);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g298, new cjs.Rectangle(0,0,133.8,38.4), null);


(lib.g282 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhrCYIAAkvIDXAAIAAEvg");
	mask.setTransform(10.8,15.2);

	// Layer_3
	this.instance = new lib.g280();
	this.instance.parent = this;
	this.instance.setTransform(10.8,15.2,1,1,0,0,0,10.8,15.2);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g282, new cjs.Rectangle(0,0,21.7,30.4), null);


(lib.g266 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgyBeIAAi7IBlAAIAAC7g");
	mask.setTransform(5.1,9.4);

	// Layer_3
	this.instance = new lib.g264();
	this.instance.parent = this;
	this.instance.setTransform(5,9.4,1,1,0,0,0,5,9.4);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g266, new cjs.Rectangle(0,0,10.2,18.8), null);


(lib.g250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1THVIAAuqMAqnAAAIAAOqg");
	mask.setTransform(136.4,47);

	// Layer_3
	this.instance = new lib.g248();
	this.instance.parent = this;
	this.instance.setTransform(136.3,47,1,1,0,0,0,136.3,47);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g250, new cjs.Rectangle(0,0,272.8,93.9), null);


(lib.g234 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgsBNIAAiZIBZAAIAACZg");
	mask.setTransform(4.5,7.7);

	// Layer_3
	this.instance = new lib.g232();
	this.instance.parent = this;
	this.instance.setTransform(4.5,7.7,1,1,0,0,0,4.5,7.7);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g234, new cjs.Rectangle(0,0,9,15.4), null);


(lib.g218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgUBNIAAiZIApAAIAACZg");
	mask.setTransform(2.1,7.7);

	// Layer_3
	this.instance = new lib.g216();
	this.instance.parent = this;
	this.instance.setTransform(2.1,7.7,1,1,0,0,0,2.1,7.7);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g218, new cjs.Rectangle(0.1,0,4.1,15.4), null);


(lib.g202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag5A6IAAh0IBzAAIAAB0g");
	mask.setTransform(5.8,5.9);

	// Layer_3
	this.instance = new lib.g200();
	this.instance.parent = this;
	this.instance.setTransform(5.8,5.9,1,1,0,0,0,5.8,5.9);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g202, new cjs.Rectangle(0,0,11.6,11.7), null);


(lib.g186 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al/B1IAAjpIL+AAIAADpg");
	mask.setTransform(38.4,11.7);

	// Layer_3
	this.instance = new lib.g184();
	this.instance.parent = this;
	this.instance.setTransform(38.4,11.7,1,1,0,0,0,38.4,11.7);
	this.instance.alpha = 0.148;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.g186, new cjs.Rectangle(0,0,76.7,23.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguwA9JMAAAh6RMBdhAAAMAAAB6Rg");
	mask.setTransform(299.3,391.3);

	// Layer_3
	this.instance = new lib.g716();
	this.instance.parent = this;
	this.instance.setTransform(299.3,391.3,1,1,0,0,0,299.3,391.3);

	this.instance_1 = new lib.g506();
	this.instance_1.parent = this;
	this.instance_1.setTransform(418.1,563.2,1,1,0,0,0,97.2,87.1);

	this.instance_2 = new lib.g490();
	this.instance_2.parent = this;
	this.instance_2.setTransform(434.3,360,1,1,0,0,0,32.5,35.4);

	this.instance_3 = new lib.g474();
	this.instance_3.parent = this;
	this.instance_3.setTransform(339.6,678.7,1,1,0,0,0,62.8,28.7);

	this.instance_4 = new lib.g458();
	this.instance_4.parent = this;
	this.instance_4.setTransform(106.8,671.8,1,1,0,0,0,70.2,36.9);

	this.instance_5 = new lib.g442();
	this.instance_5.parent = this;
	this.instance_5.setTransform(225.8,583.3,1,1,0,0,0,101,84.2);

	this.instance_6 = new lib.g426();
	this.instance_6.parent = this;
	this.instance_6.setTransform(152.8,644.2,1,1,0,0,0,24.1,16.1);

	this.instance_7 = new lib.g410();
	this.instance_7.parent = this;
	this.instance_7.setTransform(396.9,652,1,1,0,0,0,3,1.9);

	this.instance_8 = new lib.g394();
	this.instance_8.parent = this;
	this.instance_8.setTransform(373.5,659.2,1,1,0,0,0,10.3,2.8);

	this.instance_9 = new lib.g378();
	this.instance_9.parent = this;
	this.instance_9.setTransform(473,227,1,1,0,0,0,11,24.8);

	this.instance_10 = new lib.g362();
	this.instance_10.parent = this;
	this.instance_10.setTransform(455.2,190.7,1,1,0,0,0,6.4,9.6);

	this.instance_11 = new lib.g346();
	this.instance_11.parent = this;
	this.instance_11.setTransform(451.8,138.1,1,1,0,0,0,28,16.9);

	this.instance_12 = new lib.g330();
	this.instance_12.parent = this;
	this.instance_12.setTransform(379.8,128.7,1,1,0,0,0,19.1,8.3);

	this.instance_13 = new lib.g314();
	this.instance_13.parent = this;
	this.instance_13.setTransform(437.4,133.1,1,1,0,0,0,52,19.3);

	this.instance_14 = new lib.g298();
	this.instance_14.parent = this;
	this.instance_14.setTransform(302.9,128.9,1,1,0,0,0,66.8,19.2);

	this.instance_15 = new lib.g282();
	this.instance_15.parent = this;
	this.instance_15.setTransform(183.1,522,1,1,0,0,0,10.8,15.2);

	this.instance_16 = new lib.g266();
	this.instance_16.parent = this;
	this.instance_16.setTransform(172.4,504.7,1,1,0,0,0,5,9.4);

	this.instance_17 = new lib.g250();
	this.instance_17.parent = this;
	this.instance_17.setTransform(337.2,474.3,1,1,0,0,0,136.3,47);

	this.instance_18 = new lib.g234();
	this.instance_18.parent = this;
	this.instance_18.setTransform(165.4,494.2,1,1,0,0,0,4.5,7.7);

	this.instance_19 = new lib.g218();
	this.instance_19.parent = this;
	this.instance_19.setTransform(165.2,477.8,1,1,0,0,0,2,7.7);

	this.instance_20 = new lib.g202();
	this.instance_20.parent = this;
	this.instance_20.setTransform(159.6,505.3,1,1,0,0,0,5.8,5.9);

	this.instance_21 = new lib.g186();
	this.instance_21.parent = this;
	this.instance_21.setTransform(347.9,335.5,1,1,0,0,0,38.4,11.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,598.7,782.7), null);


(lib.Man_Smartphonesvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Man_Smartphone.svg
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(299.3,391.3,1,1,0,0,0,299.3,391.3);

	this.instance_1 = new lib.ClipGroup_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(299.3,391.3,1,1,0,0,0,299.3,391.3);

	this.instance_2 = new lib.ClipGroup();
	this.instance_2.parent = this;
	this.instance_2.setTransform(299.3,391.3,1,1,0,0,0,299.3,391.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,598.7,782.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Man_Smartphonesvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3,7.1,0.341,0.341,0,0,0,299.4,391.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-89.5,-118.1,179.1,236.3), null);


// stage content:
(lib.AmandaFinalProject_cellphones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{one:0,two:4,three:9,threeB:10,four:14});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		
		var root = this;
		
		
		this.stop(1);
		
		this.btn80s.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame() {
			this.gotoAndStop(4);
		}
		
		
		this.btn90s.addEventListener("click", fl_ClickToGoToAndStopAtFrame2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame2() {
			this.gotoAndStop(9);
		}
		
		this.btn2000s.addEventListener("click", fl_ClickToGoToAndStopAtFrame4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame4() {
			this.gotoAndStop(14);
		}
	}
	this.frame_4 = function() {
		var root = this;
		this.stop(5);
		
		this.backArrow1.addEventListener("click", fl_ClickToGoToAndStopAtFrame3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame3()
		{
			this.gotoAndStop(1);
		}
		
		
		this.woman80s.addEventListener("click", guyClicked80s.bind(this));
		
		function guyClicked80s()
		{
			this.gotoAndStop(24);
		}
	}
	this.frame_9 = function() {
		stage.enableMouseOver();
		
		this.stop(10);
		var root = this;
		
		
		this.btnPhones.cursor = "pointer";
		//var tunes = true;
		//this.tunes = createjs.Sound.play("nokiaS", "none", 0, 0, -1, 0.4);   // -1 is to loop and 0.4 is the volume  
		//this.btnPhones.addEventListener("click", musicToggle.bind(this));  
		
		
		//stop();
		this.btnPlay.addEventListener("click", playMusic.bind(this));
		
		function playMusic(){
		//this.btnPhones.tunes.stop("nokiaS");
			this.gotoAndStop(10);
		}
		
		
		
		
		this.backArrow2.addEventListener("click", goHome6.bind(this));
		
		function goHome6()
		{
			this.gotoAndStop(1);
		}
		
		
		
		
		this.guy90s.addEventListener("click", guyClicked90s.bind(this));
		
		function guyClicked90s()
		{
			this.gotoAndStop(29);
		}
		
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		//this.btnStop.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		/*function fl_MouseClickHandler_2()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			createjs.Sound.stop("nokiaS");
			alert("Mouse clicked");
			// End your custom code
		}
		*/
	}
	this.frame_10 = function() {
		stage.enableMouseOver();
		
		var root = this;
		this.stop(11);
		tunes = false;
		
		//createjs.Sound.stop("nokiaS");
		
		//this.btnPhones.addEventListener("click", soundNokia.bind(this));
		
		function soundNokia()
		{
		if(tunes = false){
		this.btnPlay.tunes.play();
		tunes = true;
		playSound("nokiaS", 1);
		
		} else{
			this.btnStop.tunes.gotoAndStop(10);
			tunes = false;
			createjs.Sound.stop("nokiaS");
				
		}
		}
		
		this.btnStop.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			createjs.Sound.stop("nokiaS");
			//alert("Mouse clicked");
			// End your custom code
		}
		
		
		
		this.guy90s.addEventListener("click", guyClicked90s.bind(this));
		
		function guyClicked90s()
		{
			this.gotoAndStop(29);
		}
		
		
		this.backArrow3.addEventListener("click", backHome1.bind(this));
		
		function backHome1()
		{
			this.gotoAndStop(1);
		}
		playSound("nokia");
	}
	this.frame_14 = function() {
		var root = this;
		this.stop(15);
		
		this.backArrow4.addEventListener("click", description2000s.bind(this));
		
		function description2000s()
		{
			this.gotoAndStop(1);
		}
		
		this.movieClip_2.addEventListener("click", guyClicked2000s.bind(this));
		
		function guyClicked2000s()
		{
			this.gotoAndStop(34);
		}
	}
	this.frame_24 = function() {
		var root = this;
		this.stop(25);
		
		
		this.backArrow5.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(1);
		}
		
	}
	this.frame_29 = function() {
		var root = this;
		this.stop(30);
		
		this.backArrow6.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(1);
		}
		
	}
	this.frame_34 = function() {
		var root = this;
		
		this.stop(35);
		
		this.backArrow7.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(1);
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1).call(this.frame_10).wait(4).call(this.frame_14).wait(10).call(this.frame_24).wait(5).call(this.frame_29).wait(5).call(this.frame_34).wait(14));

	// 2000s description
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape.setTransform(132.7,371.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgMATAAQALAAAIADIAAAPQgJgGgKgBQgMABgHAIQgIAIAAANQAAAOAHAJQAHAHAMABQAKgBAKgHIAAAOQgKAFgNAAQgQAAgLgLg");
	this.shape_1.setTransform(124.3,373.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAkQgGgHgBgKQAAgWAbgDIAXgEQAAgUgQAAQgOAAgMAKIAAgOQANgIAOABQAeAAAAAeIAAA0IgPAAIAAgNQgJAOgPAAQgMAAgHgGgAAAADQgJABgFADQgEAEAAAGQABAHAEADQAEAEAHAAQAIAAAGgHQAGgHAAgKIAAgHg");
	this.shape_2.setTransform(116.2,373.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAvIgBAAIAAAMIgOAAIAAh3IAOAAIAAA1IABAAQAJgQASAAQAPAAAJALQAJALAAARQAAAVgKAMQgKAMgRAAQgPAAgIgOgAgQgEQgHAHAAALIAAAMQAAAJAHAIQAGAGAKAAQAKAAAHgJQAGgIAAgQQAAgNgGgHQgGgHgKAAQgKAAgHAHg");
	this.shape_3.setTransform(107.9,372);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLAMQgLAMgSgBQgSAAgLgLgAgSgVQgHAIAAANQAAAOAHAJQAHAHALABQANgBAGgHQAHgIAAgPQAAgOgHgHQgGgJgNAAQgLAAgHAJg");
	this.shape_4.setTransform(93.6,373.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfA3IAAgOQAOAIAMAAQAdAAAAggIAAgIIgBAAQgJAPgRAAQgQABgJgLQgJgMAAgQQAAgVAKgNQAKgLARAAQAPAAAIAMIABAAIAAgKIAOAAIAABIQAAAtgrAAQgPAAgLgFgAgQgnQgGAIAAAQQAAANAGAHQAGAHAKABQAKAAAHgIQAHgGAAgMIAAgLQAAgKgHgHQgGgGgJgBQgLABgHAIg");
	this.shape_5.setTransform(83.8,375.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLAMQgLAMgSgBQgSAAgLgLgAgSgVQgHAIAAANQAAAOAHAJQAHAHALABQANgBAGgHQAHgIAAgPQAAgOgHgHQgGgJgNAAQgLAAgHAJg");
	this.shape_6.setTransform(70.1,373.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAdIAAguIgOAAIAAgLIAOAAIAAgUIANgFIAAAZIAUAAIAAALIgUAAIAAArQAAAJADADQACADAHABQAEgBAEgCIAAAMQgFACgHAAQgVABAAgZg");
	this.shape_7.setTransform(62.6,372.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_8.setTransform(52,371.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgMATAAQALAAAIADIAAAPQgJgGgKgBQgMABgHAIQgIAIAAANQAAAOAHAJQAHAHAMABQAKgBAKgHIAAAOQgKAFgNAAQgQAAgLgLg");
	this.shape_9.setTransform(43.6,373.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHA7IAAhQIAOAAIAABQgAgGgrQgCgDAAgDQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgDgDg");
	this.shape_10.setTransform(37.8,372);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_11.setTransform(33.7,371.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbArQgPgPAAgaQAAgaAQgRQARgRAZAAQAPAAAMAFIAAAPQgNgGgOAAQgTAAgMAMQgLANgBAUQAAAVAMAMQALAMARAAQARAAANgIIAAAOQgNAHgTAAQgXAAgPgQg");
	this.shape_12.setTransform(26.7,372.2);

	this.instance = new lib.smartPhone();
	this.instance.parent = this;
	this.instance.setTransform(510.9,334.7,1,1,0,0,0,61.5,71.1);

	this.instance_1 = new lib._2000sPhoneCartoon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43,43,0.402,0.402);

	this.backArrow7 = new lib.btnBack();
	this.backArrow7.name = "backArrow7";
	this.backArrow7.parent = this;
	this.backArrow7.setTransform(74.6,333.5,1.172,1.172,0,0,0,32.1,32);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHAwQgEgDAAgFQAAgFAEgEQADgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEAEgFAAQgEAAgDgEgAgBARQAAgIgDgLIgDgQQgEgOAAgGQAAgGADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAGgDAPIgFAQIgCATg");
	this.shape_13.setTransform(229.2,366.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcAvQgEgEAAgEQAAgEADgEQACgCAEAAQAEgBACADQACADAAAFIABADIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQADgDAEgKIACgGIgWgyQgFgMgCgCIgGgEIAAgDIAjAAIAAADIgEABIgBAEQAAACAEAIIAKAbIAIgUQAFgMAAgEQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgBgFgBIAAgDIAXAAIAAADQgDABgCACQgCACgFANIgUAyQgGATgEAEQgFAGgHAAQgHABgDgEg");
	this.shape_14.setTransform(222.9,369.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAxQgIgBgDgEQgEgDABgDQgBgDADgDQADgDAGgBQgJgGAAgIQAAgFAEgFQAEgEAIgDQgJgEgFgFQgFgGABgIQAAgKAIgHQAIgHANAAQAGAAAHACIAXAAIAAAIIgNAAIAFAHIABAIQAAAIgDAFQgFAGgGACQgIADgEAAIgJAAQgDAAgCABQgCACAAADQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQACACAEAAIAMgBQAPAAAGADQAIAFAAAKQAAAGgDAFQgFAFgFADQgKAEgMgBQgIAAgIgCgAgQAfQgEABAAAFQAAADAFADQAEAEALAAQAKAAAFgEQAHgCAAgFIgBgDQgDgDgEAAQgDgBgRAAQgHAAgDACgAgJgpQgDADAAAOQAAALADAEQADAEAEAAQAEAAACgEQADgEAAgLQAAgNgDgFQgCgEgEAAQgEAAgDAFg");
	this.shape_15.setTransform(215.6,369.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQADACACAAQADAAACgCQADgCABgFQACgGAAgVQAAgMgCgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_16.setTransform(207.9,367.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQACACAFAAIAAADg");
	this.shape_17.setTransform(202.2,366.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgIgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQACACADAAQADAAADgCQACgCABgFQACgGgBgVQABgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_18.setTransform(196.3,367.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADAjIAAgCQAEgBABgDQABgBAAgIIAAgdIgBgLIgCgDIgDgBQgFAAgGAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBACgCQAAgCAAgIIAAglQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAGAAQAGAAAFADQAEAEABAGQACAEAAAMIAAAZQAAAIABACQACACAEABIAAACg");
	this.shape_19.setTransform(188.4,367.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIgBgJIgCgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQABADAFAAIAAADIgjAAIAAgDQAEAAACgDQABgBAAgIIAAhFQABgHgCgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAFgCQAEgDAFAAQAHAAAEAEQAFAEABAFQABAEABALIAAAbQgBAIACACQACACAEAAIAAADg");
	this.shape_20.setTransform(180,366.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_21.setTransform(172.6,367.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAADgCQAEgDAEgGIADACQgGALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgFAHAAALIAAADIAUAAIgCgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_22.setTransform(166,367.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_23.setTransform(160.1,366.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AADAjIAAgCQADgBACgDQABgBAAgIIAAgdIAAgLIgDgDIgDgBQgGAAgFAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAGAAQAGAAAEADQAFAEACAGIABAQIAAAZQgBAIACACQACACAEABIAAACg");
	this.shape_24.setTransform(456,349.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAAA2QgBAHACACQABACAGAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgDAAgEgEg");
	this.shape_25.setTransform(449.8,347.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgDAAIgBgZIADAAQADAKAGAFQAGAFAEAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgLgIgEgDQgEgGAAgIQAAgHAFgHQAFgGAKAAQAFAAAFACIAEACIACgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgEgEgFAAQgCAAgCACQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABIABAEQACADAKAHQAKAHAEAEQADAFAAAHQAAAFgCAGQgDAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_26.setTransform(441,349.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_27.setTransform(435.6,348.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAFgBABgDQABgBAAgIIAAgdIAAgLIgCgDIgEgBQgGAAgFAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBACgCQABgCAAgIIAAglQgBgIgBgCQgBgCgFgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAFADQAEAEABAGIABAQIAAAZQAAAIACACQABACAFABIAAACg");
	this.shape_28.setTransform(428.9,349.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQALAAAHAIQAIAJABARIglAAQABAMAGAIQAEAGAHAAQAFAAAEgCQADgDAEgGIADACQgGALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIASAAIAAgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_29.setTransform(421.5,349.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_30.setTransform(411.9,349.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVAZQgHgKABgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgIAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_31.setTransform(402.4,349.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_32.setTransform(395.7,349.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AADAjIAAgCQADgBACgDQABgBAAgIIAAgdIAAgLIgDgDIgDgBQgFAAgGAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAFAAQAHAAAEADQAFAEACAGIAAAQIAAAZQABAIABACQACACAEABIAAACg");
	this.shape_33.setTransform(388.1,349.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAHAhQgDgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIAAgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQABgBAAAAIACABQgEAGgEACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQADACADAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_34.setTransform(380.4,349.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAjIgYg0IgGgMIgFgDIAAgCIAjAAIAAACQgCAAgBACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIADAKIALAYIAIgVQAEgJAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBgBgEgBIAAgCIAWAAIAAACQgDABgCACQgCACgEAKIgXA0g");
	this.shape_35.setTransform(372.7,349.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgGAAQgNAAgHgMQgGgJAAgOQAAgLAEgIQAEgJAGgEQAHgFAHAAQAFAAADACQAEACAEAFIAAgVIgBgJIgCgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAIAFACIAAACIgdAGgAgJgMQgDACgBAGQgCAFAAALQAAANACAHQACAGADADQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgGgLgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_36.setTransform(364.9,347.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAIAhQgEgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgCgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgEgDABgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIACABQgEAGgEACQgEADgFAAQgFAAgDgDgAgJAIQgDADABAEQAAAEABACQADACADAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_37.setTransform(357,349.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgVAZQgHgKABgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgIAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_38.setTransform(346.1,349.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBACgCQABgCAAgJIAAglIgBgHIgBgDIgGgCIAAgCIAcAAIAAAPQAGgKAGgEQAEgDAGAAQAEAAACACQACADABAEQgBAFgCADQgCADgEAAQgEAAgDgDIgDgDIgBAAIgFACQgDACgBAFQgCAHAAAHIAAAQIAAAEIABAGIACADIAFABIAAACg");
	this.shape_39.setTransform(339.8,349.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAgQgFgEgBgFQgBgEAAgMIAAgaQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAuIABAJIACADIAEABQAAAAABAAQAAAAAAAAQAAAAABgBQABAAAAAAQADgCAEgGIAAgjQAAgIgBgCQgCgCgEgBIAAgCIAbAAIAAA0QABAIABACQABACAFABIAAACIgcAAIAAgJQgFAGgEADQgFACgFAAQgHAAgEgDg");
	this.shape_40.setTransform(332.1,349.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_41.setTransform(325.5,348.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAgQgFgEgBgFQgCgEAAgMIAAgaQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAuIABAJIACADIADABQABAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAQADgCAEgGIAAgjQAAgIgBgCQgBgCgFgBIAAgCIAcAAIAAA0QgBAIACACQACACAEABIAAACIgcAAIAAgJQgEAGgFADQgEACgHAAQgFAAgFgDg");
	this.shape_42.setTransform(318.7,349.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAGgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIAAgDQAAgLAHgHQAIgHANAAQAIAAAFAEQAEADAAAEQAAADgDADQgDACgEAAQgDAAgDgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIABgDIAAgCIgBgDIgDgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHABACQADACAGAAIAAADg");
	this.shape_43.setTransform(312.9,347.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKAMAAQAJAAAIAIQAIAJABARIglAAQABAMAGAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_44.setTransform(302.6,349.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIgBgJIgCgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQABADAFAAIAAADIgjAAIAAgDQAFAAACgDQAAgBAAgIIAAhFQAAgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAEgCQAFgDAFAAQAGAAAFAEQAFAEABAFQACAEAAALIAAAbQAAAIABACQACACAEAAIAAADg");
	this.shape_45.setTransform(295,347.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_46.setTransform(288.4,348.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_47.setTransform(278.3,349.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_48.setTransform(272.1,348.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgFAAQgOAAgHgMQgGgJAAgOQAAgLADgIQAEgJAHgEQAGgFAJAAQAEAAADACQAEACAEAFIAAgVIAAgJIgDgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgdAGgAgIgMQgDACgCAGQgCAFAAALQAAANACAHQACAGAEADQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgGgLgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_49.setTransform(261.8,347.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBABgCQACgCAAgJIAAglIAAgHIgDgDIgEgCIAAgCIAcAAIAAAPQAFgKAFgEQAGgDAEAAQAEAAADACQACADAAAEQAAAFgCADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgEACgBAFQgCAHABAHIAAAQIAAAEIAAAGIABADIAHABIAAACg");
	this.shape_50.setTransform(254.3,349.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAWgKIAAgGQAAgIAAgCIgDgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAHgCQAIgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQAAAEADACQABACAEAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_51.setTransform(247.3,349.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AATAjIgTgxIgRAxIgEAAIgSgwQgEgMgDgDIgGgEIAAgCIAjAAIAAACQgDAAgCACIgBACIACAHIAKAaIAJgaIAAgBQgCgGgCgBIgFgDIAAgCIAiAAIAAACIgFACIgBACIACAHIAJAaIAJgYIADgHQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgDgBIAAgCIAUAAIAAACQgEABgBACQgDACgDAJIgTA1g");
	this.shape_52.setTransform(237.9,349.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBACgCQABgCAAgJIAAglIAAgHIgCgDIgGgCIAAgCIAcAAIAAAPQAHgKAEgEQAFgDAGAAQAEAAACACQADADAAAEQAAAFgDADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgDACgCAFQgBAHgBAHIAAAQIAAAEIABAGIABADIAGABIAAACg");
	this.shape_53.setTransform(229.3,349.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_54.setTransform(222.1,349.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAHgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIgBgDQAAgLAJgHQAHgHAMAAQAKAAAEAEQAEADAAAEQAAADgDADQgCACgFAAQgEAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgDIAAgCIAAgDIgDgBQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgCACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHACACQACACAGAAIAAADg");
	this.shape_55.setTransform(216.6,347.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAFAyIAAgDIADgBIABgCIgDgGIgNgUIgEAFIAAAMQAAAIACACQABACAFAAIAAADIgkAAIAAgDQAEAAACgDQABgBAAgIIAAhFQAAgHgBgCQgCgCgEgBIAAgDIAcAAIAABBIAPgQIAGgGIABgEQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgGgCIAAgDIAfAAIAAADQgEAAgEACQgDACgJAJIgIAHIAQAXIAMAQQACADAEAAIAAADg");
	this.shape_56.setTransform(205.7,347.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAADgCQACgCABgFQACgGAAgVQAAgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_57.setTransform(197.5,349.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgIgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQACACADAAQADAAADgCQACgCABgFQACgGgBgVQABgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_58.setTransform(190,349.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAABVQAAAHACACQACACAEAAIAAADg");
	this.shape_59.setTransform(184.2,347.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgVAZQgHgKABgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgIAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_60.setTransform(175.1,349.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAbAzIgZg/IgaA/IgCAAIghhQIgHgPQgCgDgEAAIAAgDIAqAAIAAADQgFAAgBACQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQABADAEAJIATAvIAPgkIgEgLIgFgMQgCgDgCgBIgHgBIAAgDIAvAAIAAADIgHABQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAABIgBACIADAKIASAvIAQgqIADgJIABgFQAAgCgCgCQgDgCgFAAIAAgDIAZAAIAAADQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAABIgEADIgEAMIgfBRg");
	this.shape_61.setTransform(165,347.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_62.setTransform(462.6,314.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgcAvQgEgEAAgEQAAgEADgEQACgCAEAAQAEgBACADQACADAAAFIABADIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQADgDAEgKIACgGIgWgyQgFgMgCgCIgGgEIAAgDIAjAAIAAADIgEABIgBAEQAAACAEAIIAKAbIAIgUQAFgMAAgDQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgBgFgBIAAgDIAXAAIAAADQgDABgCACQgCACgFANIgUAyQgGATgEAEQgFAGgHAAQgHABgDgEg");
	this.shape_63.setTransform(457.8,313.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AADAjIAAgCQAEgBABgDQABgBAAgIIAAgdIgBgLIgCgDIgDgBQgFAAgGAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBADgCQAAgCAAgIIAAglQABgIgCgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAGAAQAGAAAFADQAEAEACAGIABAQIAAAZQAAAIABACQACACAEABIAAACg");
	this.shape_64.setTransform(449.9,312);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgFAAgDACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgEgDABgEQgBgFAFgFQAEgFAIgCQAHgDAHAAQAJAAAGAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBABAAIACABQgEAGgEACQgEADgFAAQgFAAgEgDgAgJAIQgDADABAEQAAAEABACQACACAEAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_65.setTransform(442.2,312.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_66.setTransform(432,312);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAHgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIAAgDQgBgLAJgHQAHgHAMAAQAKAAAEAEQAEADAAAEQAAADgCADQgDACgFAAQgEAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgDIAAgCIAAgDIgDgBQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHABACQADACAGAAIAAADg");
	this.shape_67.setTransform(420.3,310.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgIgLgAgFgbQgDADAAAIIgCAWIACAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_68.setTransform(413.2,312.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgDAAIgBgZIADAAQADAKAGAFQAFAFAFAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgLgIgDgDQgGgGAAgIQABgHAFgHQAGgGAJAAQAFAAAGACIADACIACgBIACgDIADAAIABAXIgCAAQgFgKgFgEQgEgEgFAAQgDAAgBACQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABIABAEQACADAKAHQALAHADAEQAEAFgBAHQAAAFgCAGQgDAFgFADQgFADgHAAQgEAAgIgDg");
	this.shape_69.setTransform(402.9,312.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAJgKQAKgKAMAAQAJAAAJAIQAHAJAAARIgkAAQAAAMAHAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_70.setTransform(396.7,312.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQABACAGAAIAAADg");
	this.shape_71.setTransform(391.3,310.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgcAvQgEgEAAgEQAAgEADgEQACgCAEAAQAEgBACADQACADAAAFIABADIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQADgDAEgKIACgGIgWgyQgFgMgCgCIgGgEIAAgDIAjAAIAAADIgEABIgBAEQAAACAEAIIAKAbIAIgUQAFgMAAgDQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgBgFgBIAAgDIAXAAIAAADQgDABgCACQgCACgFANIgUAyQgGATgEAEQgFAGgHAAQgHABgDgEg");
	this.shape_72.setTransform(385.3,313.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_73.setTransform(379.2,310.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAFAFAFAAQAEAAACgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgDgDQgEgGAAgIQgBgHAGgHQAFgGAKAAQAFAAAFACIAEACIACgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgFgEgEAAQgCAAgCACQgBABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQALAHADAEQADAFABAHQAAAFgDAGQgDAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_74.setTransform(373.8,312.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAGgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIAAgDQAAgLAHgHQAIgHANAAQAIAAAFAEQAEADAAAEQAAADgDADQgDACgEAAQgDAAgDgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIABgDIAAgCIgBgDIgDgBQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHABACQADACAGAAIAAADg");
	this.shape_75.setTransform(369.1,310.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAAA2QgBAHACACQABACAGAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgDAAgEgEg");
	this.shape_76.setTransform(363.8,310.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQACACAFAAIAAADg");
	this.shape_77.setTransform(359.7,310.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAKAAAIAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgPAAgIgLgAgEgbQgFAHAAALIAAADIAUAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_78.setTransform(350.6,312.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AACAyIAAgDQAEAAACgDQABgCAAgHIAAgfIgBgJIgBgEIgEgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAFAAACgDQABgBAAgIIAAhFQgBgHgBgCQgBgCgFgBIAAgDIAcAAIAAAoQAGgGADgCQAFgDAFAAQAGAAAFAEQAEAEACAFQABAEAAALIAAAbQAAAIACACQABACAFAAIAAADg");
	this.shape_79.setTransform(343,310.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_80.setTransform(336.3,310.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAACgCQADgCABgFQACgGAAgVQAAgMgCgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_81.setTransform(326.3,312.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_82.setTransform(320.1,310.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAACgDQACgBAAgHIAAhGQAAgIgCgCQgCgCgFAAIAAgDIAdAAIAABVQAAAHABACQABACAFAAIAAADg");
	this.shape_83.setTransform(311.8,310.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgEAAgEACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgDgDAAgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgEAGgDACQgEADgFAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_84.setTransform(306.1,312.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAAA2QABAHABACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQAEAEgBAEQABAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_85.setTransform(300.1,310.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_86.setTransform(295.5,310.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AADAjIAAgCQAEgBABgDQABgBAAgIIAAgdIgBgLIgCgDIgDgBQgGAAgFAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQABgIgCgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAGAAQAGAAAFADQAEAEACAGIABAQIAAAZQAAAIABACQABACAFABIAAACg");
	this.shape_87.setTransform(288.8,312);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAJgKQAKgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgHAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_88.setTransform(281.4,312.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAFAFAFAAQAEAAACgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgDgDQgEgGAAgIQgBgHAGgHQAFgGALAAQAEAAAFACIADACIADgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgFgEgEAAQgCAAgDACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQALAHADAEQADAFABAHQAAAFgEAGQgCAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_89.setTransform(275.1,312.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgDAAIgBgZIADAAQADAKAGAFQAFAFAFAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgMgIgCgDQgGgGAAgIQABgHAFgHQAGgGAJAAQAFAAAGACIACACIADgBIADgDIACAAIABAXIgCAAQgFgKgFgEQgEgEgEAAQgEAAgCACQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABIABAEQACADAKAHQALAHADAEQAEAFgBAHQAAAFgCAGQgDAFgGADQgEADgHAAQgEAAgIgDg");
	this.shape_90.setTransform(269.3,312.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAADgCQAEgDAEgGIADACQgGALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgFAHAAALIAAADIAUAAIgCgRQgBgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_91.setTransform(263.2,312.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQALAAAHAIQAIAJABARIglAAQABAMAGAIQAFAGAHAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_92.setTransform(252.8,312.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBACgCQABgCAAgJIAAglIAAgHIgCgDIgGgCIAAgCIAcAAIAAAPQAHgKAEgEQAFgDAGAAQAEAAACACQADADAAAEQAAAFgDADQgCADgEAAQgDAAgDgDIgEgDIgCAAIgDACQgDACgCAFQgBAHgBAHIAAAQIAAAEIABAGIABADIAGABIAAACg");
	this.shape_93.setTransform(246.4,312);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_94.setTransform(239.2,312.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_95.setTransform(229.2,312);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgcAvQgEgEAAgEQAAgEADgEQACgCAEAAQAEgBACADQACADAAAFIABADIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQADgDAEgKIACgGIgWgyQgFgMgCgCIgGgEIAAgDIAjAAIAAADIgEABIgBAEQAAACAEAIIAKAbIAIgUQAFgMAAgDQAAgBAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgFgBIAAgDIAXAAIAAADQgDABgCACQgCACgFANIgUAyQgGATgEAEQgFAGgHAAQgHABgDgEg");
	this.shape_96.setTransform(215.4,313.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAABVQABAHABACQACACAEAAIAAADg");
	this.shape_97.setTransform(209.7,310.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgEAAIAAgDIAcAAIAABVQAAAHABACQACACAFAAIAAADg");
	this.shape_98.setTransform(205.5,310.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAWgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAIACABQgEAGgEACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQACACAEAAQAEAAAEgEIAAgWQgJAFgEAGg");
	this.shape_99.setTransform(199.8,312.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgVAgQgEgEgCgFQgBgEAAgMIAAgaQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAuIABAJIACADIAEABQAAAAABAAQAAAAAAAAQAAAAABgBQABAAAAAAQADgCAEgGIAAgjQAAgIgBgCQgCgCgEgBIAAgCIAbAAIAAA0QABAIABACQABACAFABIAAACIgcAAIAAgJQgFAGgEADQgEACgGAAQgHAAgEgDg");
	this.shape_100.setTransform(191.7,312.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgFAAQgOAAgHgMQgGgJAAgOQAAgLADgIQAEgJAHgEQAGgFAJAAQAEAAADACQAEACAEAFIAAgVIAAgJIgDgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgdAGgAgIgMQgDACgCAGQgCAFAAALQAAANACAHQACAGAEADQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgGgLgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_101.setTransform(183.5,310.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAHAhQgDgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQABgIgBgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQABgBAAAAIACABQgDAGgFACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQADACADAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_102.setTransform(175.6,312.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBABgCQACgCAAgJIAAglIgBgHIgBgDIgGgCIAAgCIAdAAIAAAPQAGgKAFgEQAFgDAFAAQADAAADACQACADAAAEQAAAFgCADQgCADgEAAQgDAAgEgDIgDgDIgBAAIgFACQgDACgBAFQgBAHAAAHIAAAQIAAAEIAAAGIACADIAGABIAAACg");
	this.shape_103.setTransform(168.5,312);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgSAyQgIgCgDgEQgDgDgBgDQABgDACgDQADgDAGgBQgJgFAAgJQAAgFAEgEQAEgFAIgDQgKgEgEgFQgEgGgBgIQAAgKAJgHQAIgHANAAQAFAAAIACIAXAAIAAAJIgNAAIAFAGIACAIQAAAIgFAFQgDAGgIACQgGADgFAAIgIAAQgEAAgCABQgDACABADQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACACAFAAIAMgBQAPAAAGADQAJAFAAAKQgBAGgEAFQgEAFgGADQgJAEgLgBQgJAAgIgBgAgQAfQgEABAAAFQAAADAEADQAEAEAMAAQAKAAAGgEQAFgCAAgFIgBgDQgBgDgFAAQgEgBgQAAQgHAAgDACgAgJgpQgDADAAAOQAAALADAEQADAEAEAAQADAAADgEQADgEAAgLQAAgNgDgFQgCgEgDAAQgFAAgDAFg");
	this.shape_104.setTransform(161.4,313.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAAEgCQADgDAEgGIACACQgFALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIASAAIAAgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_105.setTransform(476.9,293.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_106.setTransform(467.2,293.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAIAhQgEgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQgBgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgEgDABgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIACABQgEAGgEACQgEADgFAAQgFAAgDgDgAgJAIQgDADABAEQAAAEABACQADACADAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_107.setTransform(457.4,293.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_108.setTransform(450.2,293.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAHAAQAEAAAEgCQADgDAEgGIACACQgFALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_109.setTransform(443.6,293.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgGAxIgIgGIgLAIIgDAAIAAhWIAAgIIgCgDIgGgBIAAgDIAcAAIAAAmQAIgJAKAAQAHAAAHAEQAGAEAEAIQADAHAAAKQAAALgEAJQgFAJgIAFQgHAFgJAAQgFAAgFgCgAgIgFIAAAdIABAMQAAAEAEADQACADADAAQAEAAADgCQADgDACgGQACgGAAgRQAAgOgFgGQgDgEgEAAQgFAAgHAHg");
	this.shape_110.setTransform(435.8,292.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAFAFAFAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgLgIgEgDQgEgGAAgIQgBgHAGgHQAFgGAKAAQAFAAAFACIAEACIACgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgFgEgEAAQgCAAgCACQgBABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQAKAHAEAEQADAFABAHQgBAFgCAGQgDAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_111.setTransform(425.2,293.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgVAZQgHgKABgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgIAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_112.setTransform(419,293.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AADAjIAAgCQADgBACgDQABgBAAgIIAAgdIAAgLIgDgDIgDgBQgFAAgGAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQAAgIgBgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAGAAQAGAAAEADQAFAEACAGIABAQIAAAZQgBAIACACQACACAEABIAAACg");
	this.shape_113.setTransform(411.4,293.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQADACACAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_114.setTransform(403.5,293.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIgBgJIgCgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQABADAFAAIAAADIgjAAIAAgDQAEAAACgDQABgBAAgIIAAhFQABgHgCgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAFgCQAEgDAFAAQAHAAAEAEQAFAEABAFQABAEABALIAAAbQgBAIACACQACACAEAAIAAADg");
	this.shape_115.setTransform(395.6,292);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAEgBACgCQACgCAAgHIAAhHQAAgHgCgCQgCgCgEgBIAAgCIAdAAIAAAJQADgFAEgDQAEgDAHAAQAHAAAGAEQAHAFACAJQAEAIAAAKQAAAKgEAIQgDAIgGAFQgGAEgIAAQgGAAgEgCQgDgCgEgFIAAAaQAAAFABACIACADIAGABIAAACgAgHgfIAAAkQAGAJAGAAQAEAAADgEQADgGAAgRQABgSgFgGQgDgEgEAAQgHAAgEAKg");
	this.shape_116.setTransform(387,295);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_117.setTransform(380.6,292.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBACgCQABgCAAgJIAAglIAAgHIgCgDIgGgCIAAgCIAcAAIAAAPQAGgKAGgEQAEgDAGAAQAEAAACACQACADABAEQgBAFgCADQgCADgEAAQgEAAgDgDIgDgDIgBAAIgFACQgDACgBAFQgCAHAAAHIAAAQIAAAEIABAGIACADIAFABIAAACg");
	this.shape_118.setTransform(374.9,293.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgCgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgEgDABgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIACABQgEAGgDACQgFADgFAAQgFAAgEgDgAgJAIQgDADABAEQAAAEABACQADACADAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_119.setTransform(367.8,293.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_120.setTransform(357.7,293.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgIAzIgKgEIgGgBIgEABIgDAFIgDAAIAAglIADAAQADAPAJAIQAJAJAKgBQAIAAAFgEQAFgEAAgGIgCgHQgCgDgEgDQgDgDgJgFQgOgHgGgEQgGgEgDgGQgDgFAAgIQAAgMAJgIQAJgIANAAIAIABIAJAEIAGACIADgBQACgBABgFIACAAIABAhIgDAAQgDgMgIgIQgIgHgJAAQgHAAgFADQgEAFAAAEQAAAEABADIAHAHIAPAIQASAIAGAHQAGAIAAAJQAAANgKAJQgKAJgPAAIgIgBg");
	this.shape_121.setTransform(347.3,292);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_122.setTransform(337.4,295.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_123.setTransform(333.1,292.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgHAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_124.setTransform(327.3,293.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAFAyIAAgDIADgBIABgCIgDgGIgNgUIgEAFIAAAMQAAAIACACQABACAFAAIAAADIgkAAIAAgDQAEAAACgDQABgBAAgIIAAhFQAAgHgBgCQgCgCgEgBIAAgDIAcAAIAABBIAPgQIAGgGIABgEQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgGgCIAAgDIAfAAIAAADQgEAAgEACQgDACgJAJIgIAHIAQAXIAMAQQACADAEAAIAAADg");
	this.shape_125.setTransform(320,292);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBABgCQACgCAAgJIAAglIAAgHIgDgDIgEgCIAAgCIAcAAIAAAPQAFgKAFgEQAGgDAEAAQAEAAADACQACADAAAEQAAAFgCADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgEACgBAFQgCAHABAHIAAAQIAAAEIAAAGIABADIAHABIAAACg");
	this.shape_126.setTransform(312.4,293.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAWgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAHgCQAIgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQAAAEADACQABACAEAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_127.setTransform(305.3,293.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_128.setTransform(295.2,293.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQAKAAAIAIQAIAJABARIglAAQABAMAGAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_129.setTransform(281.9,293.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIgBgJIgCgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQABADAFAAIAAADIgjAAIAAgDQAFAAACgDQAAgBABgIIAAhFQgBgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAEgCQAFgDAFAAQAGAAAFAEQAFAEABAFQACAEAAALIAAAbQAAAIABACQACACAEAAIAAADg");
	this.shape_130.setTransform(274.3,292);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_131.setTransform(267.7,292.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AADAjIAAgCQAEgBABgDQABgBAAgIIAAgdIgBgLIgBgDIgEgBQgFAAgGAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBACgCQABgCAAgIIAAglQgBgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAGAAQAGAAAFADQAEAEABAGQACAEAAAMIAAAZQAAAIABACQACACAEABIAAACg");
	this.shape_132.setTransform(257.2,293.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAACgDQACgBAAgHIAAgnQAAgIgCgCQgCgCgFAAIAAgDIAdAAIAAA2QAAAHABACQABACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_133.setTransform(251,291.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAEgBACgDQABgBAAgIIAAgdIAAgLIgDgDIgDgBQgFAAgGAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAFAAQAHAAAEADQAFAEACAGIAAAQIAAAZQABAIABACQACACAEABIAAACg");
	this.shape_134.setTransform(241,293.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgVAZQgGgKgBgOQABgQAIgKQAKgKAMAAQAKAAAIAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgPAAgHgLgAgEgbQgFAHAAALIAAADIAUAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_135.setTransform(233.6,293.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_136.setTransform(226.9,293.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBABgCQACgCAAgJIAAglIAAgHIgDgDIgEgCIAAgCIAcAAIAAAPQAFgKAFgEQAGgDAEAAQAEAAADACQACADAAAEQAAAFgCADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgEACgBAFQgCAHABAHIAAAQIAAAEIAAAGIABADIAHABIAAACg");
	this.shape_137.setTransform(220.6,293.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_138.setTransform(213.8,293.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgDAAIgBgZIADAAQADAKAGAFQAFAFAFAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgLgIgDgDQgGgGAAgIQABgHAFgHQAGgGAJAAQAFAAAGACIADACIACgBIACgDIADAAIABAXIgCAAQgFgKgFgEQgEgEgFAAQgDAAgBACQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABIABAEQACADAKAHQALAHADAEQAEAFgBAHQAAAFgCAGQgDAFgFADQgFADgHAAQgEAAgIgDg");
	this.shape_139.setTransform(207.6,293.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AACAyIAAgDQAEAAACgDQABgCAAgHIAAgfIAAgJIgDgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAEAAACgDQABgBAAgIIAAhFQAAgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAGgGAEgCQAEgDAFAAQAGAAAFAEQAEAEACAFQABAEAAALIAAAbQABAIABACQACACAEAAIAAADg");
	this.shape_140.setTransform(200.5,292);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_141.setTransform(193,293.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgVAgQgFgEgBgFQgBgEgBgMIAAgaQABgIgCgCQgCgCgEgBIAAgCIAcAAIAAAuIABAJIACADIADABQABAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAQADgCAEgGIAAgjQAAgIgBgCQgBgCgFgBIAAgCIAcAAIAAA0QgBAIACACQACACAEABIAAACIgcAAIAAgJQgEAGgFADQgEACgHAAQgFAAgFgDg");
	this.shape_142.setTransform(185.4,293.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_143.setTransform(177.5,293.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_144.setTransform(171.3,292.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgFAAQgEAAgDgDQgDgDAAgEQAAgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQAAAAABAAQAAgBABAAQAAgBABAAIACABQgDAGgFACQgDADgGAAQgGAAgDgDgAgJAIQgCADgBAEQABAEABACQACACAEAAQAEAAAEgEIAAgWQgJAFgEAGg");
	this.shape_145.setTransform(161.5,293.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_146.setTransform(470.4,273.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgVAgQgFgEgBgFQgCgEAAgMIAAgaQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAuIABAJIACADIADABQABAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAQADgCAEgGIAAgjQAAgIgBgCQgBgCgFgBIAAgCIAcAAIAAA0QgBAIACACQACACAEABIAAACIgcAAIAAgJQgEAGgFADQgFACgGAAQgFAAgFgDg");
	this.shape_147.setTransform(463.6,275);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgGAxIgIgGIgLAIIgDAAIAAhWIAAgIIgCgDIgGgBIAAgDIAcAAIAAAmQAIgJAKAAQAHAAAHAEQAGAEAEAIQADAHAAAKQAAALgEAJQgFAJgIAFQgHAFgJAAQgFAAgFgCgAgIgFIAAAdIABAMQAAAEAEADQACADADAAQAEAAADgCQADgDACgGQACgGAAgRQAAgOgFgGQgDgEgEAAQgFAAgHAHg");
	this.shape_148.setTransform(455.1,273.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAJgKQAKgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgHAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_149.setTransform(447.9,274.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgFAAQgOAAgHgMQgGgJAAgOQAAgLADgIQAEgJAHgEQAGgFAJAAQAEAAADACQAEACAEAFIAAgVIAAgJIgDgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgdAGgAgIgMQgDACgCAGQgCAFAAALQAAANACAHQACAGAEADQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgGgLgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_150.setTransform(440.4,273.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_151.setTransform(428.6,274.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_152.setTransform(422.4,273.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_153.setTransform(409.9,273.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgCAAIgCgZIADAAQADAKAGAFQAGAFAEAAQADAAADgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgCgDQgGgGAAgIQAAgHAGgHQAGgGAKAAQAEAAAGACIACACIADgBIADgDIACAAIABAXIgCAAQgFgKgFgEQgFgEgDAAQgDAAgDACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQAKAHAEAEQAEAFAAAHQgBAFgDAGQgCAFgGADQgFADgGAAQgEAAgIgDg");
	this.shape_154.setTransform(404.5,274.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBACgCQABgCAAgJIAAglIAAgHIgDgDIgEgCIAAgCIAcAAIAAAPQAGgKAEgEQAGgDAEAAQAEAAADACQACADAAAEQAAAFgCADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgDACgCAFQgBAHAAAHIAAAQIAAAEIAAAGIABADIAGABIAAACg");
	this.shape_155.setTransform(398.4,274.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAAA2QABAHABACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEgBAEQABAFgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_156.setTransform(392.9,273.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAHgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIgBgDQABgLAHgHQAIgHAMAAQAKAAAEAEQAEADAAAEQAAADgDADQgDACgEAAQgDAAgDgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgDIAAgCIAAgDIgDgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgCACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHACACQACACAGAAIAAADg");
	this.shape_157.setTransform(389.1,273.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAADgCQAEgDAEgGIADACQgGALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgFAHAAALIAAADIAUAAIgCgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_158.setTransform(378.8,274.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AACAyIAAgDQAEAAACgDQABgCAAgHIAAgfIAAgJIgCgEIgEgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAEAAADgDQABgBAAgIIAAhFQAAgHgCgCQgBgCgFgBIAAgDIAcAAIAAAoQAGgGADgCQAFgDAFAAQAHAAAEAEQAEAEACAFQACAEgBALIAAAbQABAIABACQABACAFAAIAAADg");
	this.shape_159.setTransform(371.2,273.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_160.setTransform(364.6,273.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAFAFAFAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgLgIgEgDQgEgGAAgIQgBgHAGgHQAFgGAKAAQAFAAAFACIAEACIACgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgFgEgEAAQgCAAgCACQgBABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQAKAHAEAEQADAFABAHQgBAFgCAGQgDAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_161.setTransform(355.4,274.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgCgCIgCgEQgCgBgDAAQgEAAgEACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgEgDABgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIACABQgEAGgEACQgEADgFAAQgFAAgEgDgAgJAIQgDADABAEQAAAEACACQABACAEAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_162.setTransform(348.9,274.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AATAjIgTgxIgRAxIgEAAIgSgwQgFgMgCgDIgGgEIAAgCIAjAAIAAACQgDAAgCACIgCACIADAHIAKAaIAJgaIAAgBQgCgGgCgBIgFgDIAAgCIAiAAIAAACIgFACIgBACIACAHIAKAaIAJgYIABgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBgBgFgBIAAgCIAVAAIAAACQgDABgCACQgCACgEAJIgTA1g");
	this.shape_163.setTransform(339.5,275);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AAHAhQgDgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQABgIgBgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQABgBAAAAIACABQgDAGgFACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQADACADAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_164.setTransform(326.8,274.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgFAAQgOAAgHgMQgGgJAAgOQAAgLADgIQAEgJAHgEQAGgFAJAAQAEAAADACQAEACAEAFIAAgVIAAgJIgDgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgdAGgAgIgMQgEACgBAGQgCAFAAALQAAANACAHQACAGAEADQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgGgLgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_165.setTransform(318.8,273.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAWgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAIACABQgEAGgEACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQACACAEAAQAEAAAEgEIAAgWQgJAFgEAGg");
	this.shape_166.setTransform(311,274.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBABgCQACgCAAgJIAAglIgBgHIgBgDIgGgCIAAgCIAcAAIAAAPQAGgKAGgEQAFgDAFAAQADAAADACQACADABAEQgBAFgCADQgCADgEAAQgEAAgDgDIgDgDIgBAAIgFACQgDACgBAFQgCAHAAAHIAAAQIAAAEIABAGIACADIAFABIAAACg");
	this.shape_167.setTransform(303.9,274.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgoAyIAAgDQAGAAACgBIAEgEQABgCAAgIIAAg/QAAgIgBgCIgEgEIgIgBIAAgDIAqAAQAVAAAJAIQAKAIgBALQAAAKgFAHQgHAGgKACQgHACgQAAIAAAbQAAAIABACQAAABABAAQAAABAAAAQABABAAAAQABAAAAABQACABAHAAIAAADgAgEAAIADAAQAJAAAFgFQAEgFABgMQgBgLgEgFQgFgFgJAAIgDAAg");
	this.shape_168.setTransform(295.8,273.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgUAwQgKgEgHgGQgHgGgEgIQgGgKAAgNQABgWAQgPQAPgPAXAAIAOABIAKADIAJADQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBACgEIACAAIAAAjIgCAAQgGgOgKgIQgKgHgLgBQgKABgHAGQgIAGgDAMQgDALAAAKQAAAOADALQAEALAIAFQAHAGAJgBIAHgBIAIgCIAAgUIgBgIIgDgDQgDgCgDAAIgCAAIAAgCIAvAAIAAACIgHACQgCABgCADIAAAHIAAAUQgJAEgLADQgKACgLAAQgOAAgIgEg");
	this.shape_169.setTransform(281.9,273.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgtAyIAAgDIADAAQAFAAACgBIADgEQABgCAAgHIAAhBQAAgHgBgCIgDgDQgCgCgFAAIgDAAIAAgDIA0AAIAAADIgEAAQgEAAgCACQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBACAAAHIAAA/QAAAHABACIADAEIAIAAIAIAAQAIAAAGgDQAFgCAEgGQAEgGADgMIADAAIgEAjg");
	this.shape_170.setTransform(270.7,273.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_171.setTransform(258.9,274.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AACAyIAAgDQAEAAACgDQABgCAAgHIAAgfIgBgJIgBgEIgEgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAFAAACgDQABgBAAgIIAAhFQgBgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAEgCQAFgDAFAAQAGAAAFAEQAEAEACAFQABAEAAALIAAAbQAAAIACACQABACAFAAIAAADg");
	this.shape_172.setTransform(251.3,273.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_173.setTransform(244.6,273.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgLAzIAahRIgTAAQgMAAgGADQgFACgCAGIgDAAIAHgfIA6AAIghBlg");
	this.shape_174.setTransform(234.6,273.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgMAwQgGgEgEgGQgEgFgCgJQgDgLAAgMQAAgPAEgNQAEgMAIgGQAIgGAHAAQAIAAAIAGQAIAGADAKQAFAOAAAPQAAAPgEANQgDAIgEAFQgEAFgFADQgGADgGAAQgGAAgGgEgAgEgsQgDADgBAGQgBAHAAAlQAAAWABAHQACAFACACQACABACAAQAEAAACgCQADgEAAgJIAAgfIAAgdQAAgLgDgDQgCgDgEAAQgCAAgCACg");
	this.shape_175.setTransform(227.1,273.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgMAwQgGgEgFgGQgDgFgCgJQgDgLAAgMQAAgPAFgNQADgMAIgGQAIgGAHAAQAJAAAHAGQAIAGADAKQAFAOAAAPQAAAPgEANQgDAIgEAFQgEAFgGADQgFADgGAAQgHAAgFgEgAgFgsQgCADgBAGQgBAHAAAlQAAAWABAHQABAFACACQADABACAAQAEAAACgCQACgEABgJIAAgfIAAgdQgBgLgCgDQgCgDgEAAQgDAAgCACg");
	this.shape_176.setTransform(219.6,273.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgfAzIAAgCQAbggAFgLQAFgKAAgLQAAgHgEgFQgEgFgHAAQgLAAgHALIgCgBQAEgOAIgHQAIgHAJAAQAIAAAHAEQAFADAEAHQADAGAAAFQABAKgGAKQgHAMgYAZIAVAAIAKgBIADgCIAFgHIACAAIgGAdg");
	this.shape_177.setTransform(211.9,273.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgcAvQgEgDAAgFQAAgFADgCQACgDAEgBQAEAAACADQACACAAAGIABADIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQADgDAEgMIACgFIgWgyQgFgLgCgDIgGgEIAAgCIAjAAIAAACIgEABIgBADQAAAEAEAIIAKAbIAIgWQAFgLAAgDQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgBgFgBIAAgCIAXAAIAAACQgDAAgCADQgCACgFANIgUAyQgGATgEAEQgFAGgHABQgHgBgDgDg");
	this.shape_178.setTransform(200.8,276.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAWgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAIACABQgEAGgEACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQACACAEAAQAEAAAEgEIAAgWQgJAFgEAGg");
	this.shape_179.setTransform(193.5,274.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AAQAyIAAgDIADAAQAEAAADgBIADgEQABgCAAgHIAAhJIglBaIgCAAIgmhZIAABFIAAAJQABADADADQADACAHAAIAAADIgiAAIAAgDIABAAIAGgBIAEgDIADgFIAAgIIAAg+QAAgHgBgCIgDgDQgDgCgEAAIgDAAIAAgDIAoAAIAbBBIAbhBIApAAIAAADIgEAAQgDAAgDACIgEADIAAAJIAABBIAAAJIAEAEQACABAEAAIAEAAIAAADg");
	this.shape_180.setTransform(182.5,273.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AADAjIAAgCQADgBACgDQABgBAAgIIAAgdIAAgLIgDgDIgDgBQgFAAgGAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAGAAQAGAAAEADQAFAEACAGIABAQIAAAZQgBAIACACQACACAEABIAAACg");
	this.shape_181.setTransform(167.5,274.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgZAyIAAgDIADAAQAFAAACgBIADgEQABgCAAgHIAAhBQAAgHgBgCIgDgDQgCgCgFAAIgDAAIAAgDIAzAAIAAADIgEAAQgDAAgEACIgDADIAAAJIAABBIAAAJIAEAEQACABAEAAIAEAAIAAADg");
	this.shape_182.setTransform(160.4,273.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_183.setTransform(333,240.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQAKAAAIAIQAIAJABARIglAAQABAMAGAIQAFAGAGAAQAFAAAEgCQADgDAEgGIADACQgGALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIASAAIAAgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_184.setTransform(327.9,237.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgGAAIAAgDIAcAAIAABVQAAAHACACQABACAFAAIAAADg");
	this.shape_185.setTransform(322.5,236.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgGAxIgIgGIgLAIIgCAAIAAhWIgBgIIgCgDIgGgBIAAgDIAcAAIAAAmQAIgJAKAAQAHAAAHAEQAGAEAEAIQADAHAAAKQAAALgEAJQgFAJgIAFQgHAFgKAAQgEAAgFgCgAgIgFIAAAdIABAMQAAAEAEADQADADACAAQAEAAADgCQACgDADgGQACgGAAgRQAAgOgFgGQgCgEgGAAQgEAAgHAHg");
	this.shape_186.setTransform(316,236.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAACgDQACgBAAgHIAAgnQAAgIgCgCQgCgCgFAAIAAgDIAdAAIAAA2QAAAHABACQABACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_187.setTransform(310,236.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgDAAIgBgZIADAAQADAKAGAFQAGAFAEAAQAEAAABgCQADgDAAgDQAAgDgDgDIgIgHQgMgIgCgDQgGgGAAgIQABgHAFgHQAGgGAKAAQAEAAAGACIACACIADgBIADgDIACAAIABAXIgCAAQgFgKgFgEQgEgEgEAAQgEAAgCACQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABIABAEQACADAKAHQAKAHAEAEQADAFAAAHQAAAFgDAGQgCAFgGADQgEADgHAAQgEAAgIgDg");
	this.shape_188.setTransform(305,237.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAFAFAFAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgLgIgEgDQgEgGAAgIQgBgHAGgHQAFgGAKAAQAFAAAFACIAEACIACgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgFgEgEAAQgCAAgCACQgBABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQAKAHAEAEQADAFABAHQgBAFgCAGQgDAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_189.setTransform(299.2,237.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQACACADAAQADAAADgCQACgCABgFQACgGgBgVQABgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_190.setTransform(292.5,237.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAEgBADgCQABgCAAgHIAAhHQAAgHgBgCQgDgCgEgBIAAgCIAcAAIAAAJQAEgFAEgDQAEgDAGAAQAIAAAHAEQAFAFAEAJQADAIAAAKQAAAKgDAIQgEAIgGAFQgGAEgIAAQgGAAgEgCQgDgCgFgFIAAAaQAAAFABACIADADIAGABIAAACgAgIgfIAAAkQAHAJAGAAQAEAAACgEQAFgGAAgRQAAgSgFgGQgDgEgFAAQgGAAgFAKg");
	this.shape_191.setTransform(284.4,239.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgSAxQgIgBgDgDQgDgDgBgEQABgEACgCQADgDAGgBQgJgFAAgJQAAgEAEgGQAEgEAIgDQgKgEgEgFQgEgGgBgIQAAgKAJgHQAIgHANgBQAFAAAIADIAXAAIAAAIIgNAAIAFAHIACAIQAAAHgFAGQgDAFgIADQgGAEgFAAIgIgBQgEAAgCABQgDADABACQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABAFAAIAMAAQAPAAAGADQAJAFAAAKQgBAGgEAFQgEAFgGADQgJAEgLAAQgJgBgIgCgAgQAeQgEADAAAEQAAADAFAEQADACAMAAQAKAAAGgCQAFgDAAgFIgBgDQgBgCgFgBQgDgBgRAAQgHAAgDABgAgJgqQgDAEAAAOQAAALADAEQADAEAEAAQADAAADgEQADgEAAgMQAAgNgDgFQgCgDgDAAQgFAAgDAEg");
	this.shape_192.setTransform(273,239.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AADAjIAAgCQAEgBABgDQABgBAAgIIAAgdIgBgLIgCgDIgDgBQgGAAgFAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQABgIgCgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAGAAQAGAAAFADQAEAEACAGIABAQIAAAZQAAAIABACQABACAFABIAAACg");
	this.shape_193.setTransform(265,237.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgGAAIAAgDIAdAAIAAA2QAAAHABACQABACAGAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEABAEQgBAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_194.setTransform(258.8,236.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAACgDQACgBAAgHIAAhGQAAgIgCgCQgCgCgFAAIAAgDIAdAAIAABVQAAAHABACQABACAFAAIAAADg");
	this.shape_195.setTransform(254.6,236.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAADgDQABgBAAgHIAAhGQAAgIgCgCQgBgCgGAAIAAgDIAcAAIAABVQAAAHACACQABACAFAAIAAADg");
	this.shape_196.setTransform(250.5,236.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgEAAQgFAAgDgDQgEgDAAgEQAAgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_197.setTransform(244.8,237.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_198.setTransform(237.6,237.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_199.setTransform(226.7,237.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAKAAAIAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_200.setTransform(219.7,237.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgGAAQgMAAgIgMQgGgJAAgOQAAgLAEgIQAEgJAGgEQAHgFAHAAQAFAAADACQAEACAEAFIAAgVIgBgJIgCgDIgGgBIAAgEIAdAAIAABOIABAKQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAIAFACIAAACIgdAGgAgJgMQgDACgBAGQgCAFAAALQAAANACAHQACAGADADQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgGgLgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_201.setTransform(212.2,236.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgGAAIAAgDIAcAAIAAA2QAAAHACACQABACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_202.setTransform(205.9,236.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AAAAjIgXg0IgHgMIgFgDIAAgCIAkAAIAAACQgDAAgCACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIADAKIALAYIAJgVQADgJAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgCgBgEgBIAAgCIAWAAIAAACQgDABgCACQgCACgEAKIgXA0g");
	this.shape_203.setTransform(200,237.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAAEgCQADgDAEgGIACACQgFALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIASAAIAAgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_204.setTransform(189.3,237.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgGAAQgNAAgHgMQgGgJAAgOQAAgLAEgIQAEgJAGgEQAHgFAIAAQAEAAADACQAEACAEAFIAAgVIgBgJIgCgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgdAGgAgJgMQgCACgCAGQgCAFAAALQAAANACAHQACAGAEADQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgGgLgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_205.setTransform(181.8,236.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgFAAgDACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgFAAQgEAAgDgDQgEgDABgEQgBgFAFgFQAEgFAIgCQAHgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBABAAIACABQgEAGgEACQgEADgFAAQgFAAgEgDgAgJAIQgDADABAEQAAAEABACQACACAEAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_206.setTransform(174,237.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_207.setTransform(163.8,237.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgbAwQgEgDAAgFQAAgDADgDQACgCADAAIAEABIAJAGQAHAGAFAAQAFAAAEgEQAFgEAAgHQAAgKgIgIQgHgJgMgDIAAgCIALgEQACgCADgEQACgFAAgEQAAgGgEgFQgDgEgIAAQgKAAgHALIgDgBQAGgMAIgGQAJgHAJAAQAKAAAGAHQAHAGAAAIQAAAGgDAFQgDAFgGAEQAIAEAEAGQAFAFAAAKQAAAPgMALQgKALgTAAQgMAAgGgEg");
	this.shape_208.setTransform(464.1,217.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgMAwQgGgEgEgGQgDgFgDgJQgDgLAAgMQAAgPAEgNQAEgMAIgGQAHgGAIAAQAIAAAIAGQAHAGAEAKQAFAOAAAPQAAAPgEANQgDAIgEAFQgEAFgGADQgFADgGAAQgGAAgGgEgAgEgsQgDADgBAGQgBAHAAAlQAAAWABAHQABAFADACQACABACAAQAEAAACgCQADgEAAgJIAAgfIAAgdQAAgLgDgDQgCgDgEAAQgCAAgCACg");
	this.shape_209.setTransform(456.9,217.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgMAwQgGgEgFgGQgDgFgCgJQgDgLAAgMQAAgPAFgNQADgMAIgGQAIgGAHAAQAJAAAHAGQAIAGADAKQAFAOAAAPQAAAPgEANQgDAIgEAFQgEAFgGADQgFADgGAAQgGAAgGgEgAgFgsQgCADgBAGQgBAHAAAlQAAAWACAHQAAAFACACQADABACAAQAEAAABgCQAEgEAAgJIABgfIgBgdQAAgLgEgDQgBgDgEAAQgCAAgDACg");
	this.shape_210.setTransform(449.4,217.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgfAzIAAgCQAbggAFgLQAFgKABgLQgBgHgEgFQgEgFgHAAQgLAAgHALIgCgBQAEgOAIgHQAIgHAJAAQAIAAAHAEQAFADAEAHQAEAGgBAFQABAKgGAKQgIAMgXAZIAVAAIAKgBIADgCIAFgHIACAAIgGAdg");
	this.shape_211.setTransform(441.7,217.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAFgBABgDQABgBAAgIIAAgdIAAgLIgCgDIgEgBQgGAAgFAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBACgCQABgCAAgIIAAglQgBgIgBgCQgBgCgFgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAFADQAEAEABAGIABAQIAAAZQAAAIACACQABACAFABIAAACg");
	this.shape_212.setTransform(430.3,219);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAAA2QAAAHACACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEQAAAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_213.setTransform(424.1,217.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgCgZIADAAQADAKAGAFQAGAFAEAAQADAAADgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgCgDQgFgGgBgIQAAgHAGgHQAGgGAKAAQAEAAAGACIACACIADgBIADgDIACAAIABAXIgCAAQgFgKgFgEQgFgEgDAAQgDAAgDACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQAKAHAEAEQAEAFAAAHQgBAFgDAGQgCAFgGADQgFADgGAAQgEAAgIgDg");
	this.shape_214.setTransform(415.3,219.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAWgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAHgCQAIgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQAAAEADACQABACAEAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_215.setTransform(408.8,219.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBABgCQACgCAAgJIAAglIgBgHIgCgDIgEgCIAAgCIAcAAIAAAPQAGgKAFgEQAEgDAFAAQAEAAADACQACADAAAEQABAFgDADQgDADgDAAQgEAAgDgDIgDgDIgBAAIgFACQgCACgCAFQgBAHAAAHIAAAQIAAAEIAAAGIACADIAGABIAAACg");
	this.shape_216.setTransform(401.7,219);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAADgCQAEgDAEgGIADACQgGALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgFAHAAALIAAADIAUAAIgCgRQgBgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_217.setTransform(395,219.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_218.setTransform(385.4,219);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAWgKIAAgGQAAgIAAgCIgDgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAHgCQAIgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQAAAEADACQABACAEAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_219.setTransform(375.5,219.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_220.setTransform(368.3,219.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgSAyQgIgCgDgEQgDgDAAgDQAAgEACgCQADgDAHgCQgKgFAAgHQAAgGAEgEQAEgFAIgDQgKgDgEgGQgFgGABgIQgBgKAJgHQAIgIANAAQAFABAIADIAXAAIAAAIIgNAAIAFAGIABAIQAAAHgDAGQgFAFgGAEQgIACgEAAIgJAAQgDAAgCABQgDADAAADQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQABACAFAAIAMAAQAPAAAGAEQAIAEAAAKQAAAGgDAGQgFAFgGACQgJADgMABQgJAAgHgCgAgQAfQgEACAAADQAAAEAEADQAFADALAAQAKAAAGgDQAFgCABgFIgBgDQgDgDgDAAQgEgBgRAAQgIAAgCACgAgJgqQgDAFAAANQAAALADAEQADAEAEAAQAEAAADgEQACgEAAgMQAAgMgDgGQgDgDgDAAQgEAAgDAEg");
	this.shape_221.setTransform(357.6,220.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAEgBACgDQABgBAAgIIAAgdIAAgLIgCgDIgEgBQgFAAgGAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAFAAQAHAAAEADQAFAEACAGIAAAQIAAAZQABAIABACQACACAEABIAAACg");
	this.shape_222.setTransform(349.5,219);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAAA2QABAHABACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQAEAEgBAEQABAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_223.setTransform(343.3,217.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_224.setTransform(337.9,219.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAWgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAHgCQAIgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQAAAEADACQABACAEAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_225.setTransform(331,219.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAHgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIAAgDQgBgLAJgHQAHgHAMAAQAKAAAEAEQAEADAAAEQAAADgCADQgDACgFAAQgEAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgDIAAgCIAAgDIgDgBQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHABACQADACAGAAIAAADg");
	this.shape_226.setTransform(325.3,217.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_227.setTransform(315.8,217.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAFgBABgDQABgBAAgIIAAgdIAAgLIgCgDIgEgBQgGAAgFAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAEgBADgCQABgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAEADQAFAEABAGIABAQIAAAZQABAIABACQABACAFABIAAACg");
	this.shape_228.setTransform(309.1,219);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgCAWIACAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_229.setTransform(301.2,219.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBABgCQACgCAAgJIAAglIgBgHIgCgDIgFgCIAAgCIAdAAIAAAPQAGgKAFgEQAFgDAEAAQAEAAADACQACADAAAEQAAAFgCADQgCADgEAAQgDAAgEgDIgDgDIgBAAIgFACQgDACgBAFQgBAHAAAHIAAAQIAAAEIAAAGIACADIAGABIAAACg");
	this.shape_230.setTransform(294.5,219);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAHgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIAAgDQgBgLAJgHQAHgHAMAAQAKAAAEAEQAEADAAAEQAAADgCADQgDACgFAAQgEAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgDIAAgCIAAgDIgDgBQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHABACQADACAGAAIAAADg");
	this.shape_231.setTransform(289.3,217.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAGgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIAAgDQAAgLAIgHQAHgHANAAQAJAAAEAEQAEADAAAEQAAADgCADQgDACgFAAQgDAAgDgCQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIABgDIAAgCIgBgDIgDgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHABACQADACAGAAIAAADg");
	this.shape_232.setTransform(280.6,217.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAACgCQADgCABgFQACgGAAgVQAAgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_233.setTransform(273.5,219.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAFgBABgDQABgBAAgIIAAgdIAAgLIgCgDIgEgBQgGAAgFAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAEgBADgCQABgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAEADQAFAEABAGIABAQIAAAZQABAIABACQABACAFABIAAACg");
	this.shape_234.setTransform(261.9,219);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgIgLgAgFgbQgDADAAAIIgCAWIACAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_235.setTransform(253.9,219.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAAA2QgBAHACACQABACAGAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQADAEABAEQgBAFgDADQgDAEgFAAQgDAAgEgEg");
	this.shape_236.setTransform(248.2,217.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_237.setTransform(243.6,217.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_238.setTransform(237.8,219.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgVAgQgFgEgBgFQgCgEAAgMIAAgaQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAuIABAJIACADIADABQABAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAQADgCAEgGIAAgjQAAgIgBgCQgBgCgFgBIAAgCIAbAAIAAA0QABAIABACQACACAEABIAAACIgcAAIAAgJQgEAGgFADQgFACgGAAQgGAAgEgDg");
	this.shape_239.setTransform(230.2,219.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgGAAQgNAAgHgMQgGgJAAgOQAAgLAEgIQADgJAHgEQAGgFAJAAQAEAAADACQAEACAEAFIAAgVIgBgJIgCgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgdAGgAgIgMQgEACgBAGQgCAFAAALQAAANACAHQACAGAEADQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAGAAAFgKIAAgjQgFgLgHAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_240.setTransform(222,217.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgIgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_241.setTransform(213.9,219.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBACgCQABgCAAgJIAAglIAAgHIgCgDIgFgCIAAgCIAbAAIAAAPQAHgKAEgEQAFgDAGAAQAEAAACACQADADAAAEQAAAFgDADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgDACgCAFQgBAHgBAHIAAAQIAAAEIABAGIABADIAGABIAAACg");
	this.shape_242.setTransform(207.3,219);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_243.setTransform(201.3,217.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAEgBACgDQABgBAAgIIAAgdIAAgLIgDgDIgDgBQgFAAgGAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAFAAQAHAAAEADQAFAEACAGIABAQIAAAZQAAAIABACQACACAEABIAAACg");
	this.shape_244.setTransform(194.6,219);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAAA2QABAHABACQACACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgDAAgEgEg");
	this.shape_245.setTransform(188.4,217.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKAMAAQAJAAAIAIQAIAJABARIglAAQABAMAGAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_246.setTransform(179.3,219.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIgBgJIgCgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQABADAFAAIAAADIgjAAIAAgDQAFAAACgDQAAgBABgIIAAhFQgBgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAEgCQAFgDAFAAQAGAAAFAEQAFAEABAFQACAEAAALIAAAbQAAAIABACQACACAEAAIAAADg");
	this.shape_247.setTransform(171.7,217.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgZAyIAAgDIADAAQAFAAACgBIADgEQABgCAAgHIAAhMIgHAAQgKAAgFAEQgGAGgCALIgDAAIAAgbIBYAAIAAAbIgCAAQgCgJgDgEQgDgEgFgDIgKgBIgHAAIAABMIAAAJIAEAEQADABAEAAIADAAIAAADg");
	this.shape_248.setTransform(162.5,217.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_249.setTransform(337.3,184.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAGAFAEAAQAEAAACgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgDgDQgEgGgBgIQAAgHAGgHQAFgGALAAQAEAAAFACIADACIADgBIADgDIACAAIABAXIgCAAQgFgKgFgEQgFgEgDAAQgEAAgCACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQALAHADAEQAEAFAAAHQAAAFgEAGQgCAFgGADQgFADgGAAQgEAAgIgDg");
	this.shape_250.setTransform(332.6,181.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQAKAAAIAIQAIAJABARIglAAQABAMAGAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_251.setTransform(326.5,181.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_252.setTransform(319.8,181.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgGAAIAAgDIAcAAIAAA2QAAAHACACQABACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_253.setTransform(314.4,180.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AAAAjIgYg0IgGgMIgFgDIAAgCIAkAAIAAACQgDAAgCACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIADAKIALAYIAJgVQADgJAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgCgBgEgBIAAgCIAWAAIAAACQgDABgCACQgCACgEAKIgXA0g");
	this.shape_254.setTransform(308.5,182);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgPAAgIgLgAgEgbQgFAHAAALIAAADIAUAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_255.setTransform(301.5,181.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgGAAQgMAAgIgMQgGgJAAgOQAAgLADgIQAFgJAGgEQAHgFAHAAQAFAAADACQAEACAEAFIAAgVIAAgJIgDgDIgGgBIAAgEIAdAAIAABOIABAKQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAIAFACIAAACIgdAGgAgJgMQgDACgBAGQgCAFAAALQAAANACAHQACAGADADQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAGAAAFgKIAAgjQgFgLgHAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_256.setTransform(294,180.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgcAvQgEgEAAgFQAAgDADgEQACgDAEAAQAEABACACQACADAAAEIABAEIABABQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQADgCAEgLIACgGIgWgyQgFgMgCgCIgGgEIAAgDIAjAAIAAADIgEACIgBACQAAAEAEAHIAKAbIAIgVQAFgKAAgFQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgCgFAAIAAgDIAXAAIAAADQgDAAgCADQgCACgFANIgUAyQgGATgEAEQgFAHgHAAQgHAAgDgEg");
	this.shape_257.setTransform(282.2,183.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBACgCQABgCAAgJIAAglIAAgHIgCgDIgGgCIAAgCIAcAAIAAAPQAGgKAGgEQAEgDAGAAQAEAAACACQADADAAAEQAAAFgDADQgDADgDAAQgEAAgDgDIgDgDIgCAAIgDACQgDACgCAFQgBAHgBAHIAAAQIAAAEIABAGIACADIAFABIAAACg");
	this.shape_258.setTransform(275.3,181.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBACgCQABgCAAgJIAAglIgBgHIgBgDIgGgCIAAgCIAcAAIAAAPQAGgKAGgEQAEgDAGAAQAEAAACACQACADABAEQgBAFgCADQgCADgEAAQgEAAgDgDIgDgDIgBAAIgFACQgDACgBAFQgCAHAAAHIAAAQIAAAEIABAGIACADIAFABIAAACg");
	this.shape_259.setTransform(268.7,181.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgVAZQgHgKABgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgIAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_260.setTransform(262,181.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgtAyIAAgDQAHAAACgBIAEgEQABgCAAgIIAAg/QAAgIgBgCIgEgEIgJgBIAAgDIAvAAQARAAAHAEQAHADAEAGQAEAGAAAGQAAAIgFAFQgFAGgOADQAPACAFAFQAJAHAAAKQAAAMgJAHQgMAJgUAAgAgIAhIAAADQAAAEACACQACACAEAAQAFAAAFgCQAFgDACgFQADgFAAgGQAAgHgDgFQgDgGgGgCQgGgCgKAAgAgIgrIAAAnQAJAAAGgCQAEgDADgEQACgEABgHQgBgGgCgEQgDgFgEgCQgEgCgIAAIgDAAg");
	this.shape_261.setTransform(253.4,180.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AAEAyIAAgDIAEgBIABgCIgDgGIgNgUIgEAFIAAAMQAAAIACACQABACAEAAIAAADIgjAAIAAgDQAEAAACgDQACgBgBgIIAAhFQABgHgCgCQgCgCgEgBIAAgDIAcAAIAABBIAPgQIAGgGIABgEQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgHgCIAAgDIAfAAIAAADQgFAAgDACQgDACgKAJIgHAHIAQAXQAJAPADABQACADAEAAIAAADg");
	this.shape_262.setTransform(244.7,180.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_263.setTransform(236.9,181.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAWgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDAAgEQAAgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAIACABQgEAGgEACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQACACAEAAQAEAAAEgEIAAgWQgJAFgEAGg");
	this.shape_264.setTransform(230,181.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAACgDQACgBAAgHIAAhGQAAgIgCgCQgCgCgFAAIAAgDIAdAAIAABVQAAAHABACQABACAFAAIAAADg");
	this.shape_265.setTransform(224,180.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgtAyIAAgDQAHAAADgBIADgEQABgCAAgIIAAg/QAAgIgBgCIgDgEIgKgBIAAgDIAvAAQARAAAHAEQAHADAEAGQAEAGAAAGQAAAIgFAFQgFAGgNADQAOACAGAFQAIAHAAAKQAAAMgJAHQgLAJgWAAgAgIAhIAAADQAAAEACACQACACAEAAQAFAAAFgCQAFgDADgFQACgFAAgGQAAgHgDgFQgDgGgGgCQgFgCgLAAgAgIgrIAAAnQAJAAAGgCQAFgDACgEQADgEAAgHQAAgGgDgEQgCgFgFgCQgEgCgIAAIgDAAg");
	this.shape_266.setTransform(216.8,180.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBACgCQABgCAAgJIAAglIgBgHIgBgDIgGgCIAAgCIAcAAIAAAPQAGgKAGgEQAEgDAGAAQAEAAACACQACADABAEQgBAFgCADQgCADgEAAQgEAAgDgDIgDgDIgBAAIgFACQgDACgBAFQgCAHAAAHIAAAQIAAAEIABAGIACADIAFABIAAACg");
	this.shape_267.setTransform(205.2,181.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgCgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgEgDABgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIACABQgEAGgEACQgEADgEAAQgGAAgEgDgAgJAIQgDADABAEQAAAEABACQADACADAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_268.setTransform(198.2,181.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAABVQABAHABACQACACAEAAIAAADg");
	this.shape_269.setTransform(192.2,180.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgVAgQgFgEgBgFQgBgEgBgMIAAgaQABgIgCgCQgCgCgEgBIAAgCIAcAAIAAAuIABAJIACADIADABQABAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAQADgCAEgGIAAgjQAAgIgBgCQgBgCgFgBIAAgCIAcAAIAAA0QgBAIACACQACACAEABIAAACIgcAAIAAgJQgEAGgFADQgEACgHAAQgFAAgFgDg");
	this.shape_270.setTransform(185.9,182);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAFgBACgCQABgCAAgHIAAhHQAAgHgBgCQgCgCgFgBIAAgCIAcAAIAAAJQAEgFAEgDQAEgDAGAAQAIAAAHAEQAGAFADAJQADAIAAAKQAAAKgDAIQgEAIgGAFQgHAEgHAAQgGAAgEgCQgEgCgEgFIAAAaQAAAFABACIADADIAGABIAAACgAgIgfIAAAkQAHAJAGAAQAEAAACgEQAFgGAAgRQgBgSgEgGQgCgEgGAAQgGAAgFAKg");
	this.shape_271.setTransform(177.4,183.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQACACADAAQADAAADgCQACgCABgFQACgGgBgVQABgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_272.setTransform(169.6,181.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAEgBADgCQABgCAAgHIAAhHQAAgHgBgCQgDgCgEgBIAAgCIAcAAIAAAJQAEgFAEgDQAEgDAGAAQAIAAAHAEQAFAFAEAJQADAIAAAKQAAAKgDAIQgEAIgGAFQgGAEgIAAQgGAAgEgCQgDgCgFgFIAAAaQABAFAAACIADADIAGABIAAACgAgIgfIAAAkQAHAJAGAAQAEAAACgEQAFgGAAgRQAAgSgFgGQgDgEgFAAQgGAAgFAKg");
	this.shape_273.setTransform(161.5,183.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAFAFAFAAQAEAAACgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgDgDQgEgGAAgIQgBgHAGgHQAFgGALAAQAEAAAFACIADACIADgBIADgDIACAAIABAXIgDAAQgEgKgFgEQgFgEgEAAQgCAAgDACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQALAHADAEQADAFABAHQAAAFgEAGQgCAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_274.setTransform(461,163.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_275.setTransform(455.6,162.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAAA2QgBAHACACQACACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEABAEQgBAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_276.setTransform(451,161.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AACAyIAAgDQAEAAACgDQABgCAAgHIAAgfIAAgJIgCgEIgEgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAEAAADgDQABgBAAgIIAAhFQAAgHgCgCQgBgCgFgBIAAgDIAcAAIAAAoQAGgGADgCQAFgDAFAAQAHAAAEAEQAEAEACAFQACAEgBALIAAAbQABAIABACQABACAFAAIAAADg");
	this.shape_277.setTransform(441,161.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_278.setTransform(434.3,162.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgGAAIAAgDIAdAAIAAA2QAAAHABACQABACAGAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEABAEQgBAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_279.setTransform(429.8,161.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AATAjIgTgxIgRAxIgEAAIgSgwQgEgMgDgDIgGgEIAAgCIAjAAIAAACQgEAAgBACIgCACIADAHIAKAaIAKgaIgBgBQgCgGgCgBIgFgDIAAgCIAiAAIAAACIgFACIgBACIACAHIAJAaIAJgYIACgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBgBgEgBIAAgCIAUAAIAAACQgEABgCACQgCACgCAJIgUA1g");
	this.shape_280.setTransform(422.2,163.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_281.setTransform(409.8,163.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgGAAIAAgDIAcAAIAAA2QAAAHACACQABACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_282.setTransform(404.4,161.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAABVQAAAHACACQACACAEAAIAAADg");
	this.shape_283.setTransform(400.2,161.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgGAxIgIgGIgLAIIgCAAIAAhWIgBgIIgDgDIgFgBIAAgDIAdAAIAAAmQAHgJAKAAQAIAAAGAEQAGAEAEAIQADAHAAAKQAAALgEAJQgFAJgIAFQgHAFgKAAQgEAAgFgCgAgHgFIAAAdIAAAMQABAEACADQAEADACAAQAFAAACgCQADgDABgGQADgGAAgRQAAgOgFgGQgCgEgGAAQgFAAgFAHg");
	this.shape_284.setTransform(393.7,161.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgVAgQgEgEgCgFQgBgEAAgMIAAgaQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAuIABAJIACADIAEABQAAAAABAAQAAAAAAAAQAAAAABgBQABAAAAAAQADgCAEgGIAAgjQAAgIgBgCQgCgCgEgBIAAgCIAbAAIAAA0QABAIABACQACACAEABIAAACIgcAAIAAgJQgFAGgEADQgFACgFAAQgHAAgEgDg");
	this.shape_285.setTransform(385.5,163.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAEgBACgCQACgCAAgHIAAhHQAAgHgCgCQgCgCgEgBIAAgCIAcAAIAAAJQAEgFAEgDQAEgDAHAAQAHAAAGAEQAHAFACAJQAEAIAAAKQAAAKgEAIQgDAIgGAFQgGAEgIAAQgGAAgEgCQgDgCgFgFIAAAaQAAAFACACIACADIAGABIAAACgAgIgfIAAAkQAHAJAGAAQAEAAADgEQADgGAAgRQAAgSgEgGQgDgEgEAAQgHAAgFAKg");
	this.shape_286.setTransform(377,164.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQAKAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_287.setTransform(366.1,163.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIgBgJIgBgEIgEgBQgDAAgCACIgGAHIAAAkQAAAHABACQABADAFAAIAAADIgjAAIAAgDQAFAAACgDQABgBAAgIIAAhFQgBgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAEgCQAFgDAFAAQAGAAAFAEQAFAEABAFQACAEAAALIAAAbQAAAIABACQACACAEAAIAAADg");
	this.shape_288.setTransform(358.5,161.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_289.setTransform(351.8,162.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_290.setTransform(341.8,163.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_291.setTransform(335.6,162.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQACACAFAAIAAADg");
	this.shape_292.setTransform(327.3,161.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgGAAIAAgDIAdAAIAAA2QAAAHABACQABACAGAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEABAEQgBAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_293.setTransform(323.1,161.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgCgCIgCgEQgCgBgDAAQgEAAgEACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgEgDABgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIACABQgEAGgEACQgEADgFAAQgFAAgEgDgAgJAIQgDADABAEQAAAEACACQABACAEAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_294.setTransform(317.4,163.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_295.setTransform(307.3,163.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQALAAAHAIQAIAJABARIglAAQABAMAGAIQAEAGAHAAQAFAAAEgCQADgDAEgGIADACQgGALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIASAAIAAgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_296.setTransform(297.8,163.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAJgKQAKgKAMAAQAJAAAJAIQAHAJAAARIgkAAQAAAMAHAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_297.setTransform(287.4,163.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQABACAGAAIAAADg");
	this.shape_298.setTransform(281.9,161.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAAA2QgBAHACACQACACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEABAEQgBAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_299.setTransform(277.8,161.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgFAxIgJgGIgLAIIgDAAIAAhWIAAgIIgCgDIgGgBIAAgDIAcAAIAAAmQAIgJALAAQAHAAAGAEQAGAEADAIQAEAHAAAKQAAALgEAJQgFAJgHAFQgIAFgJAAQgFAAgEgCgAgIgFIAAAdIABAMQABAEADADQACADAEAAQAEAAACgCQADgDACgGQABgGAAgRQAAgOgDgGQgEgEgEAAQgGAAgGAHg");
	this.shape_300.setTransform(271.3,161.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQADACACAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_301.setTransform(263.5,163.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_302.setTransform(253.6,163.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_303.setTransform(241.1,162.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIgBgJIgCgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQABADAFAAIAAADIgjAAIAAgDQAEAAADgDQAAgBAAgIIAAhFQABgHgCgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAFgCQAEgDAFAAQAHAAAEAEQAFAEABAFQACAEAAALIAAAbQAAAIABACQABACAFAAIAAADg");
	this.shape_304.setTransform(234.4,161.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgSAyQgIgCgDgEQgDgDgBgDQABgEACgCQADgDAGgCQgJgFAAgHQAAgGAEgEQAEgFAIgDQgKgDgEgGQgEgGgBgIQABgKAIgHQAIgIANAAQAGABAHADIAXAAIAAAIIgNAAIAFAGIACAIQAAAHgFAGQgDAFgIAEQgGACgFAAIgIAAQgEAAgCABQgDADABADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQADACAEAAIAMAAQAPAAAGAEQAJAEgBAKQAAAGgEAGQgEAFgFACQgKADgMABQgIAAgIgCgAgQAfQgEACAAADQAAAEAFADQADADAMAAQAJAAAGgDQAHgCgBgFIgBgDQgBgDgFAAQgDgBgRAAQgHAAgDACgAgJgqQgDAFAAANQAAALADAEQADAEAEAAQADAAADgEQADgEAAgMQAAgMgDgGQgDgDgDAAQgEAAgDAEg");
	this.shape_305.setTransform(226.6,164.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgVAgQgFgEgBgFQgCgEAAgMIAAgaQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAuIABAJIACADIADABQABAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAQADgCAEgGIAAgjQAAgIgBgCQgBgCgFgBIAAgCIAbAAIAAA0QABAIABACQACACAEABIAAACIgcAAIAAgJQgEAGgFADQgFACgGAAQgGAAgEgDg");
	this.shape_306.setTransform(218.5,163.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQACACADAAQADAAADgCQACgCABgFQACgGgBgVQABgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_307.setTransform(210.6,163.3);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBABgCQACgCAAgJIAAglIAAgHIgDgDIgEgCIAAgCIAcAAIAAAPQAFgKAFgEQAGgDAEAAQAEAAADACQACADAAAEQAAAFgCADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgEACgBAFQgCAHABAHIAAAQIAAAEIAAAGIABADIAHABIAAACg");
	this.shape_308.setTransform(203.9,163.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgGAxIgIgGIgLAIIgCAAIAAhWIgBgIIgDgDIgFgBIAAgDIAdAAIAAAmQAHgJAKAAQAIAAAFAEQAHAEAEAIQADAHAAAKQAAALgFAJQgEAJgIAFQgHAFgKAAQgEAAgFgCgAgHgFIAAAdIAAAMQAAAEADADQAEADACAAQAEAAADgCQADgDABgGQACgGABgRQgBgOgEgGQgCgEgGAAQgFAAgFAHg");
	this.shape_309.setTransform(196.1,161.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AAQAyIAAgDIADAAQAEAAADgBIADgEQABgCAAgHIAAhJIglBaIgCAAIgnhZIAABFIABAJQABADADADQADACAHAAIAAADIgiAAIAAgDIABAAIAGgBIAEgDIADgFIAAgIIAAg+QAAgHgBgCIgDgDQgDgCgEAAIgDAAIAAgDIAoAAIAbBBIAbhBIApAAIAAADIgDAAQgFAAgCACIgEADIAAAJIAABBIAAAJIAEAEQADABAEAAIADAAIAAADg");
	this.shape_310.setTransform(181.3,161.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgZAyIAAgDIAEAAQADAAAEgBIACgEQABgCAAgHIAAhBQAAgHgBgCIgDgDQgCgCgEAAIgEAAIAAgDIAzAAIAAADIgDAAQgFAAgCACIgDADIgBAJIAABBIABAJIADAEQACABAFAAIADAAIAAADg");
	this.shape_311.setTransform(171.3,161.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AAWAyIgfguIgGAAIAAAcQAAAIABACQAAABAAAAQABABAAAAQABABAAAAQABAAAAABQADABAGAAIAAADIgyAAIAAgDQAGAAADgBIADgEQABgCAAgIIAAg/QAAgIgBgCIgDgEIgJgBIAAgDIAuAAQARAAAIADQAIACAGAHQAFAHAAAJQAAALgIAHQgFAEgJACIAYAhIAGAJQADACAEAAIAAADgAgPAAIAEAAQAKAAAEgCQAFgBADgFQADgFAAgIQAAgLgFgGQgGgFgLAAIgHAAg");
	this.shape_312.setTransform(163.1,161.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_313.setTransform(332.9,128.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgbAwQgEgDAAgFQAAgDADgDQACgCADAAIAEABIAJAGQAHAGAFAAQAFAAAFgEQADgEABgHQAAgKgIgIQgHgJgMgDIAAgCIALgEQACgCADgEQACgFAAgEQAAgGgEgFQgDgEgIAAQgJAAgIALIgDgBQAGgMAIgGQAJgHAJAAQAKAAAHAHQAGAGAAAIQAAAGgDAFQgDAFgGAEQAIAEAEAGQAFAFAAAKQAAAPgLALQgLALgTAAQgMAAgGgEg");
	this.shape_314.setTransform(327,124.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AgMAwQgGgEgEgGQgEgFgCgJQgDgLAAgMQAAgPAEgNQAEgMAIgGQAIgGAHAAQAIAAAIAGQAIAGADAKQAFAOAAAPQAAAPgEANQgDAIgEAFQgEAFgFADQgGADgGAAQgGAAgGgEgAgEgsQgDADgBAGQgBAHAAAlQAAAWABAHQACAFACACQACABACAAQAEAAACgCQACgEABgJIAAgfIAAgdQgBgLgCgDQgCgDgEAAQgCAAgCACg");
	this.shape_315.setTransform(319.8,124.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgMAwQgGgEgFgGQgDgFgCgJQgDgLAAgMQAAgPAFgNQADgMAIgGQAHgGAIAAQAJAAAHAGQAIAGADAKQAFAOAAAPQAAAPgEANQgDAIgEAFQgEAFgGADQgFADgGAAQgHAAgFgEgAgFgsQgCADgBAGQgBAHAAAlQAAAWABAHQABAFACACQADABACAAQAEAAACgCQACgEABgJIAAgfIAAgdQgBgLgCgDQgCgDgEAAQgDAAgCACg");
	this.shape_316.setTransform(312.3,124.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgfAzIAAgCQAbggAFgLQAFgKAAgLQAAgHgEgFQgEgFgHAAQgLAAgHALIgCgBQAEgOAIgHQAIgHAJAAQAIAAAGAEQAGADAEAHQADAGAAAFQABAKgGAKQgHAMgYAZIAVAAIAKgBIADgCIAFgHIACAAIgGAdg");
	this.shape_317.setTransform(304.6,124.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AACAyIAAgDQAEAAACgDQABgCAAgHIAAgfIgBgJIgBgEIgEgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAFAAACgDQABgBAAgIIAAhFQgBgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAEgCQAFgDAFAAQAGAAAFAEQAEAEACAFQABAEAAALIAAAbQAAAIACACQABACAFAAIAAADg");
	this.shape_318.setTransform(293.1,124.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_319.setTransform(285.7,126.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBACgCQABgCAAgJIAAglIAAgHIgCgDIgGgCIAAgCIAcAAIAAAPQAHgKAFgEQAEgDAGAAQAEAAACACQADADAAAEQAAAFgDADQgDADgDAAQgEAAgDgDIgDgDIgCAAIgEACQgCACgCAFQgBAHgBAHIAAAQIAAAEIABAGIACADIAFABIAAACg");
	this.shape_320.setTransform(279.4,126);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgEAAgEACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgDgDAAgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgEAGgDACQgEADgFAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_321.setTransform(272.3,126.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AAQAyIAAgDIADAAQAFAAADgBIACgEQABgCAAgHIAAhJIglBaIgCAAIgnhZIAABFIABAJQABADADADQADACAHAAIAAADIgiAAIAAgDIABAAIAGgBIAFgDIACgFIAAgIIAAg+QAAgHgBgCIgDgDQgDgCgEAAIgDAAIAAgDIApAAIAbBBIAbhBIAoAAIAAADIgEAAQgEAAgDACIgCADIgBAJIAABBIABAJIADAEQADABADAAIAEAAIAAADg");
	this.shape_322.setTransform(261.3,124.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAEgBACgDQABgBAAgIIAAgdIgBgLIgBgDIgEgBQgFAAgGAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBACgCQABgCAAgIIAAglQgBgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAFADQAEAEABAGIABAQIAAAZQAAAIACACQABACAFABIAAACg");
	this.shape_323.setTransform(246.3,126);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgGAAIAAgDIAcAAIAAA2QAAAHACACQABACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_324.setTransform(240.1,124.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgIAzIgKgEIgGgBIgEABIgDAFIgDAAIAAglIADAAQADAPAJAIQAJAJAKgBQAIAAAFgEQAFgEAAgGIgCgHQgCgDgEgDQgDgDgJgFQgOgHgGgEQgGgEgDgGQgDgFAAgIQAAgMAJgIQAJgIANAAIAIABIAJAEIAGACIADgBQACgBABgFIACAAIABAhIgDAAQgDgMgIgIQgIgHgJAAQgHAAgFADQgEAFAAAEQAAAEABADIAHAHIAPAIQASAIAGAHQAGAIAAAJQAAANgKAJQgKAJgPAAIgIgBg");
	this.shape_325.setTransform(230.1,124.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgtAyIAAgDQAHAAACgBIAEgEQABgCAAgIIAAg/QAAgIgBgCIgEgEIgJgBIAAgDIAvAAQARAAAHAEQAHADAEAGQAEAGAAAGQAAAIgFAFQgFAGgOADQAPACAFAFQAJAHAAAKQAAAMgJAHQgMAJgUAAgAgIAhIAAADQAAAEACACQACACAEAAQAFAAAFgCQAEgDADgFQADgFAAgGQAAgHgDgFQgEgGgFgCQgGgCgKAAgAgIgrIAAAnQAKAAAEgCQAFgDADgEQADgEgBgHQABgGgDgEQgDgFgFgCQgDgCgIAAIgDAAg");
	this.shape_326.setTransform(220.8,124.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AAQAyIAAgDIADAAQAEAAADgBIADgEQABgCAAgHIAAhJIglBaIgCAAIgnhZIAABFIABAJQABADADADQADACAHAAIAAADIgiAAIAAgDIABAAIAGgBIAEgDIADgFIAAgIIAAg+QAAgHgBgCIgDgDQgDgCgEAAIgDAAIAAgDIAoAAIAcBBIAbhBIAoAAIAAADIgDAAQgFAAgCACIgDADIgBAJIAABBIABAJIADAEQADABAEAAIADAAIAAADg");
	this.shape_327.setTransform(208.8,124.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgfAzIAAgCQAbggAFgLQAGgKgBgLQABgHgFgFQgEgFgHAAQgLAAgGALIgDgBQAEgOAIgHQAIgHAKAAQAHAAAGAEQAHADADAHQADAGABAFQgBAKgFAKQgIAMgXAZIAUAAIAKgBIAFgCIADgHIADAAIgFAdg");
	this.shape_328.setTransform(197.8,124.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQACACADAAQADAAADgCQACgCABgFQACgGgBgVQABgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_329.setTransform(186.7,126.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_330.setTransform(180.5,124.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAEgBACgCQACgCAAgHIAAhHQAAgHgCgCQgCgCgEgBIAAgCIAdAAIAAAJQADgFAEgDQAEgDAHAAQAHAAAGAEQAHAFACAJQAEAIAAAKQAAAKgEAIQgDAIgGAFQgHAEgHAAQgGAAgEgCQgEgCgDgFIAAAaQAAAFABACIACADIAGABIAAACgAgHgfIAAAkQAGAJAGAAQAEAAACgEQAEgGAAgRQABgSgFgGQgDgEgFAAQgFAAgFAKg");
	this.shape_331.setTransform(169.9,127.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgVAgQgFgEgBgFQgCgEAAgMIAAgaQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAuIABAJIACADIADABQABAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAQADgCAEgGIAAgjQAAgIgBgCQgBgCgFgBIAAgCIAcAAIAAA0QgBAIACACQACACAEABIAAACIgcAAIAAgJQgEAGgFADQgFACgGAAQgFAAgFgDg");
	this.shape_332.setTransform(161.7,126.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgDAAIAAgZIACAAQADAKAGAFQAGAFAEAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgLgIgEgDQgEgGAAgIQAAgHAFgHQAFgGAKAAQAFAAAFACIAEACIACgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgEgEgFAAQgCAAgCACQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABIABAEQACADAKAHQAKAHAEAEQADAFAAAHQAAAFgCAGQgDAFgFADQgFADgHAAQgEAAgIgDg");
	this.shape_333.setTransform(467.1,107.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgFAAQgOAAgHgMQgGgJAAgOQAAgLADgIQAEgJAHgEQAGgFAJAAQAEAAADACQAEACAEAFIAAgVIAAgJIgDgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgdAGgAgIgMQgEACgBAGQgCAFAAALQAAANACAHQACAGAEADQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgGgLgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_334.setTransform(460.1,106.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAADgCQAEgDAEgGIADACQgGALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgFAHAAALIAAADIAUAAIgCgRQgBgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_335.setTransform(452.6,107.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAKAAAIAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgPAAgIgLgAgEgbQgFAHAAALIAAADIAUAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_336.setTransform(446,107.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAFgBABgCQACgCAAgHIAAhHQAAgHgCgCQgBgCgFgBIAAgCIAdAAIAAAJQADgFAEgDQAEgDAGAAQAIAAAHAEQAFAFAEAJQADAIAAAKQAAAKgDAIQgEAIgGAFQgGAEgIAAQgGAAgEgCQgEgCgDgFIAAAaQAAAFAAACIADADIAGABIAAACgAgHgfIAAAkQAGAJAGAAQAEAAACgEQAEgGABgRQAAgSgFgGQgDgEgFAAQgFAAgFAKg");
	this.shape_337.setTransform(438.2,109);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgDAAIgBgZIADAAQADAKAGAFQAFAFAFAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgMgIgCgDQgGgGAAgIQABgHAFgHQAGgGAJAAQAFAAAGACIACACIADgBIADgDIACAAIABAXIgCAAQgFgKgFgEQgEgEgEAAQgEAAgCACQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABIABAEQACADAKAHQALAHADAEQAEAFgBAHQAAAFgCAGQgDAFgGADQgEADgHAAQgEAAgIgDg");
	this.shape_338.setTransform(431.3,107.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgGAAQgMAAgIgMQgGgJAAgOQAAgLAEgIQAEgJAGgEQAHgFAHAAQAFAAADACQAEACAEAFIAAgVIgBgJIgCgDIgGgBIAAgEIAdAAIAABOIABAKQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAIAFACIAAACIgdAGgAgJgMQgDACgBAGQgCAFAAALQAAANACAHQACAGADADQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgGgLgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_339.setTransform(420.6,106.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgEAAgEACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgDgDAAgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgEAGgDACQgEADgFAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_340.setTransform(412.7,107.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAACgCQADgCABgFQACgGAAgVQAAgMgCgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_341.setTransform(405,107.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQACACAFAAIAAADg");
	this.shape_342.setTransform(399.3,106);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AADAjIAAgCQADgBACgDQABgBAAgIIAAgdIAAgLIgDgDIgDgBQgGAAgFAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAGAAQAGAAAEADQAFAEACAGIABAQIAAAZQgBAIACACQACACAEABIAAACg");
	this.shape_343.setTransform(393,107.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AATAjIgTgxIgRAxIgEAAIgSgwQgEgMgDgDIgGgEIAAgCIAjAAIAAACQgEAAgBACIgBACIACAHIAKAaIAJgaIAAgBQgCgGgCgBIgFgDIAAgCIAiAAIAAACIgFACIgBACIACAHIAKAaIAJgYIACgHQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgCgBgEgBIAAgCIAVAAIAAACQgDABgCACQgDACgDAJIgTA1g");
	this.shape_344.setTransform(383.3,107.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_345.setTransform(374.2,107.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgFAAQgNAAgIgMQgGgJAAgOQAAgLADgIQAFgJAGgEQAHgFAHAAQAFAAADACQAEACAEAFIAAgVIAAgJIgDgDIgGgBIAAgEIAdAAIAABOIABAKQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAIAFACIAAACIgdAGgAgJgMQgCACgCAGQgCAFAAALQAAANACAHQACAGADADQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAGAAAFgKIAAgjQgFgLgHAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_346.setTransform(366.4,106.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AAEAyIAAgDIAEgBIABgCIgDgGIgNgUIgEAFIAAAMQAAAIACACQABACAEAAIAAADIgjAAIAAgDQAEAAACgDQACgBgBgIIAAhFQABgHgCgCQgCgCgEgBIAAgDIAcAAIAABBIAPgQIAGgGIABgEQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgHgCIAAgDIAfAAIAAADQgFAAgDACQgDACgKAJIgHAHIAQAXQAJAPADABQACADAEAAIAAADg");
	this.shape_347.setTransform(354.5,106);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_348.setTransform(346.2,107.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_349.setTransform(338.7,107.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_350.setTransform(332.5,106.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgVAwQgJgEgHgGQgIgGgEgIQgEgKAAgNQAAgWAPgPQAQgPAXAAIANABIALADIAIADQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBABgEIADAAIAAAjIgDAAQgFgOgJgIQgKgHgMgBQgKABgIAGQgHAGgDAMQgDAKAAALQAAAOADALQAEALAHAFQAIAGAJgBIAHgBIAIgCIAAgUIAAgIIgEgDQgDgCgDAAIgDAAIAAgCIAxAAIAAACIgIACQgCABgBADIgBAHIAAAUQgJAEgLADQgKACgLAAQgOAAgJgEg");
	this.shape_351.setTransform(320.6,106);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgbAwQgEgDAAgFQAAgDACgDQADgCADAAIAEABIAJAGQAHAGAFAAQAFAAAFgEQADgEAAgHQABgKgIgIQgHgJgNgDIAAgCIAMgEQACgCADgEQACgFAAgEQAAgGgEgFQgEgEgGAAQgLAAgGALIgEgBQAGgMAIgGQAIgHAKAAQAKAAAHAHQAGAGAAAIQAAAGgDAFQgDAFgHAEQAJAEAFAGQAEAFAAAKQAAAPgLALQgLALgTAAQgMAAgGgEg");
	this.shape_352.setTransform(310.5,106);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAGgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIAAgDQAAgLAHgHQAIgHANAAQAIAAAFAEQAEADAAAEQAAADgDADQgDACgEAAQgDAAgDgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIABgDIAAgCIgBgDIgDgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHABACQADACAGAAIAAADg");
	this.shape_353.setTransform(301.6,105.9);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQADACACAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_354.setTransform(294.6,107.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAEgBACgDQABgBAAgIIAAgdIAAgLIgCgDIgEgBQgFAAgGAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBABgCQABgCABgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAFAAQAHAAAEADQAFAEACAGIAAAQIAAAZQABAIABACQACACAEABIAAACg");
	this.shape_355.setTransform(282.9,107.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQADACACAAQADAAACgCQADgCABgFQACgGAAgVQAAgMgCgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_356.setTransform(275,107.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAAA2QgBAHACACQACACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEABAEQgBAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_357.setTransform(269.2,105.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_358.setTransform(264.6,106.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAWgKIAAgGQAAgIAAgCIgDgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAHgCQAIgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQAAAEADACQABACAEAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_359.setTransform(258.5,107.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_360.setTransform(252.1,106.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAEgBACgDQABgBAAgIIAAgdIgBgLIgBgDIgEgBQgFAAgGAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBACgCQABgCAAgIIAAglQgBgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAFADQAEAEABAGIABAQIAAAZQAAAIACACQABACAFABIAAACg");
	this.shape_361.setTransform(245.4,107.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgEAHAAALIAAADIASAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_362.setTransform(238,107.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_363.setTransform(228.4,107.4);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgVAZQgHgKABgOQgBgQAJgKQAKgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgIAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_364.setTransform(218.9,107.5);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQACACAFAAIAAADg");
	this.shape_365.setTransform(213.4,106);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAEgBACgCQACgCAAgHIAAhHQAAgHgCgCQgCgCgEgBIAAgCIAcAAIAAAJQAEgFAEgDQAEgDAHAAQAHAAAGAEQAHAFACAJQAEAIAAAKQAAAKgEAIQgDAIgGAFQgGAEgIAAQgGAAgEgCQgDgCgFgFIAAAaQAAAFACACIACADIAGABIAAACgAgIgfIAAAkQAHAJAGAAQAEAAADgEQADgGAAgRQAAgSgEgGQgDgEgEAAQgHAAgFAKg");
	this.shape_366.setTransform(206.9,109);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_367.setTransform(196.7,107.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAAA2QABAHABACQACACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgDAAgEgEg");
	this.shape_368.setTransform(188.4,105.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKAMAAQAJAAAIAIQAIAJABARIglAAQABAMAGAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_369.setTransform(179.3,107.5);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIgBgJIgCgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQABADAFAAIAAADIgjAAIAAgDQAFAAACgDQAAgBABgIIAAhFQgBgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAEgCQAFgDAFAAQAGAAAFAEQAFAEABAFQACAEAAALIAAAbQAAAIABACQACACAEAAIAAADg");
	this.shape_370.setTransform(171.7,106);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgZAyIAAgDIADAAQAFAAACgBIADgEQABgCAAgHIAAhMIgHAAQgKAAgFAEQgGAGgCALIgDAAIAAgbIBYAAIAAAbIgCAAQgCgJgDgEQgDgEgFgDIgKgBIgHAAIAABMIAAAJIAEAEQADABAEAAIADAAIAAADg");
	this.shape_371.setTransform(162.5,106);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_372.setTransform(329.7,72.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgcAvQgEgEAAgFQAAgDADgEQACgDAEAAQAEABACACQACADAAAEIABAEIABABQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQADgCAEgLIACgGIgWgyQgFgMgCgCIgGgEIAAgDIAjAAIAAADIgEACIgBACQAAAEAEAHIAKAbIAIgVQAFgKAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgFAAIAAgDIAXAAIAAADQgDAAgCADQgCACgFANIgUAyQgGATgEAEQgFAHgHAAQgHAAgDgEg");
	this.shape_373.setTransform(324.9,72);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQACACAFAAIAAADg");
	this.shape_374.setTransform(319.2,68.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgFAAQgOAAgHgMQgGgJAAgOQAAgLAEgIQADgJAHgEQAGgFAJAAQAEAAADACQAEACAEAFIAAgVIAAgJIgDgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgdAGgAgIgMQgEACgBAGQgCAFAAALQAAANACAHQACAGAEADQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAGAAAFgKIAAgjQgFgLgHAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_375.setTransform(313,68.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAAA2QgBAHACACQABACAGAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgDAAgEgEg");
	this.shape_376.setTransform(306.7,68.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAEgBACgCQACgCAAgHIAAhHQAAgHgCgCQgCgCgEgBIAAgCIAdAAIAAAJQADgFAEgDQAEgDAHAAQAHAAAGAEQAHAFACAJQAEAIAAAKQAAAKgEAIQgDAIgGAFQgGAEgIAAQgGAAgEgCQgDgCgEgFIAAAaQAAAFABACIACADIAGABIAAACgAgHgfIAAAkQAGAJAGAAQAEAAADgEQADgGAAgRQABgSgFgGQgDgEgEAAQgHAAgEAKg");
	this.shape_377.setTransform(300.2,71.8);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AAHAhQgDgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIAAgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQABgBAAAAIACABQgEAGgEACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQADACADAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_378.setTransform(292.6,70.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBABgCQACgCAAgJIAAglIgBgHIgCgDIgFgCIAAgCIAdAAIAAAPQAGgKAFgEQAFgDAEAAQAEAAADACQACADAAAEQAAAFgCADQgCADgEAAQgDAAgEgDIgDgDIgBAAIgFACQgDACgBAFQgBAHAAAHIAAAQIAAAEIAAAGIACADIAGABIAAACg");
	this.shape_379.setTransform(285.5,70.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_380.setTransform(275.1,70.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AgBAjIgWg0IgHgMIgFgDIAAgCIAkAAIAAACQgDAAgCACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIADAKIALAYIAJgVQADgJAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgCgBgEgBIAAgCIAWAAIAAACQgDABgCACQgCACgEAKIgXA0g");
	this.shape_381.setTransform(267.9,70.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQABACAGAAIAAADg");
	this.shape_382.setTransform(262.1,68.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgIgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_383.setTransform(256.2,70.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AAAAjIgYg0IgGgMIgFgDIAAgCIAkAAIAAACQgDAAgCACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIADAKIALAYIAJgVQADgJAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBgBgEgBIAAgCIAWAAIAAACQgDABgCACQgCACgEAKIgXA0g");
	this.shape_384.setTransform(248.7,70.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAKAAAIAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_385.setTransform(241.8,70.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQACACADAAQADAAADgCQACgCABgFQACgGgBgVQABgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_386.setTransform(230.8,70.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_387.setTransform(224.6,69.1);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAFAFAFAAQADAAADgCQACgDAAgDQAAgDgCgDIgJgHQgLgIgEgDQgEgGAAgIQgBgHAGgHQAFgGAKAAQAFAAAFACIAEACIACgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgFgEgEAAQgCAAgCACQgBABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQAKAHAEAEQADAFABAHQAAAFgDAGQgDAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_388.setTransform(215.5,70.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AgVAZQgHgKABgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgIAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_389.setTransform(209.3,70.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgVAgQgEgEgCgFQgCgEABgMIAAgaQgBgIgBgCQgBgCgFgBIAAgCIAcAAIAAAuIABAJIACADIAEABQAAAAABAAQAAAAAAAAQAAAAABgBQABAAAAAAQADgCAEgGIAAgjQAAgIgBgCQgCgCgEgBIAAgCIAbAAIAAA0QAAAIACACQABACAFABIAAACIgcAAIAAgJQgFAGgEADQgEACgGAAQgHAAgEgDg");
	this.shape_390.setTransform(201.7,70.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAEgBACgDQABgBAAgIIAAgdIAAgLIgCgDIgEgBQgFAAgGAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAFAAQAHAAAEADQAFAEABAGIABAQIAAAZQABAIABACQACACAEABIAAACg");
	this.shape_391.setTransform(193.4,70.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAAA2QABAHABACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQAEAEgBAEQABAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_392.setTransform(187.2,68.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_393.setTransform(182.6,69.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AADAjIAAgCQAEgBABgDQABgBAAgIIAAgdIgBgLIgCgDIgDgBQgGAAgFAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBADgCQAAgCAAgIIAAglQABgIgCgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAGAAQAGAAAFADQAEAEACAGIABAQIAAAZQAAAIABACQABACAFABIAAACg");
	this.shape_394.setTransform(175.9,70.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgIgLgAgFgbQgDADgBAIIAAAWIAAAPQABAFADADQACACADAAQADAAADgCQACgCABgFQACgGgBgVQABgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_395.setTransform(167.9,70.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_396.setTransform(160.9,70.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AgcAvQgEgDAAgFQAAgFADgCQACgDAEgBQAEAAACADQACACAAAGIABADIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQADgDAEgMIACgFIgWgyQgFgLgCgDIgGgEIAAgCIAjAAIAAACIgEABIgBADQAAAEAEAIIAKAbIAIgWQAFgKAAgEQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgBgFgBIAAgCIAXAAIAAACQgDABgCACQgCACgFANIgUAyQgGATgEAEQgFAGgHABQgHgBgDgDg");
	this.shape_397.setTransform(466,53.4);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AgSAyQgIgCgDgEQgEgDABgDQgBgDADgDQADgDAGgCQgJgFAAgHQAAgGAEgEQAEgFAIgDQgJgDgFgGQgEgGAAgIQAAgKAIgHQAIgIANAAQAGABAHADIAXAAIAAAIIgNAAIAFAGIACAIQgBAHgEAGQgEAFgGAEQgIACgEAAIgIAAQgEAAgCABQgCADAAADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAQACACAEAAIAMAAQAPAAAGAEQAJAEgBAKQAAAGgDAGQgEAFgGACQgKADgMABQgIAAgIgCgAgQAfQgEACAAADQAAAEAFADQAEADALAAQAJAAAGgDQAHgCgBgFIAAgDQgCgDgFAAQgDgBgRAAQgIAAgCACgAgJgqQgDAFAAANQAAALADAEQADAEAEAAQADAAADgEQADgEAAgMQAAgMgDgGQgDgDgDAAQgEAAgDAEg");
	this.shape_398.setTransform(458.7,53.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgCAWIACAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_399.setTransform(451,51.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQABACAGAAIAAADg");
	this.shape_400.setTransform(445.3,50.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgIgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_401.setTransform(439.4,51.7);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AADAjIAAgCQAEgBABgDQABgBAAgIIAAgdIgBgLIgCgDIgDgBQgGAAgFAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQABgIgCgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAGAAQAGAAAFADQAEAEACAGIABAQIAAAZQAAAIABACQABACAFABIAAACg");
	this.shape_402.setTransform(431.5,51.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIAAgJIgDgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAEAAACgDQABgBAAgIIAAhFQAAgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAGgGAEgCQAEgDAFAAQAGAAAFAEQAEAEACAFQABAEABALIAAAbQgBAIACACQACACAEAAIAAADg");
	this.shape_403.setTransform(423.1,50.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_404.setTransform(415.7,51.7);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAKAAAIAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgPAAgIgLgAgEgbQgFAHAAALIAAADIAUAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_405.setTransform(409.1,51.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgZAyIAAgDIADAAQAEAAADgBIADgEQABgCAAgHIAAhMIgHAAQgKAAgFAEQgGAGgCALIgDAAIAAgbIBYAAIAAAbIgCAAQgDgJgCgEQgDgEgFgDIgKgBIgHAAIAABMIABAJIADAEQADABAEAAIADAAIAAADg");
	this.shape_406.setTransform(402,50.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_407.setTransform(391.6,54.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBABgCQACgCAAgJIAAglIgBgHIgBgDIgGgCIAAgCIAcAAIAAAPQAGgKAGgEQAFgDAFAAQADAAADACQACADABAEQgBAFgCADQgCADgEAAQgEAAgDgDIgDgDIgBAAIgFACQgDACgBAFQgCAHAAAHIAAAQIAAAEIABAGIACADIAFABIAAACg");
	this.shape_408.setTransform(388,51.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgHAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_409.setTransform(381.3,51.7);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AgSAyQgIgCgDgEQgDgDgBgDQABgDACgDQADgDAGgCQgJgFAAgHQAAgGAEgEQAEgFAIgDQgKgDgEgGQgEgGgBgIQAAgKAJgHQAIgIANAAQAFABAIADIAXAAIAAAIIgNAAIAFAGIACAIQAAAHgFAGQgDAFgIAEQgGACgFAAIgIAAQgEAAgCABQgDADABADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQACACAFAAIAMAAQAPAAAGAEQAJAEAAAKQgBAGgEAGQgEAFgGACQgJADgLABQgJAAgIgCgAgQAfQgEACAAADQAAAEAFADQADADAMAAQAKAAAGgDQAFgCAAgFIgBgDQgBgDgFAAQgDgBgRAAQgHAAgDACgAgJgqQgDAFAAANQAAALADAEQADAEAEAAQADAAADgEQADgEAAgMQAAgMgDgGQgCgDgDAAQgFAAgDAEg");
	this.shape_410.setTransform(374.3,53.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AADAjIAAgCQAEgBABgDQABgBAAgIIAAgdIgBgLIgCgDIgDgBQgGAAgFAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQABgIgCgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAGAAQAGAAAFADQAEAEACAGIABAQIAAAZQAAAIABACQABACAFABIAAACg");
	this.shape_411.setTransform(366.2,51.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgFAAgDACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgFAAQgEAAgDgDQgEgDABgEQgBgFAFgFQAEgFAIgCQAHgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBABAAIACABQgEAGgEACQgEADgFAAQgFAAgEgDgAgJAIQgDADABAEQAAAEABACQACACAEAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_412.setTransform(358.5,51.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIgBgJIgCgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQABADAFAAIAAADIgjAAIAAgDQAFAAACgDQABgBgBgIIAAhFQAAgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAEgCQAFgDAFAAQAGAAAFAEQAFAEABAFQACAEAAALIAAAbQAAAIABACQACACAEAAIAAADg");
	this.shape_413.setTransform(350.4,50.2);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_414.setTransform(342.9,51.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgUAIIAAgPIApAAIAAAPg");
	this.shape_415.setTransform(337,51.7);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_416.setTransform(331.3,51.7);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_417.setTransform(321.7,51.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgEAAQgFAAgDgDQgEgDAAgEQAAgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_418.setTransform(311.8,51.7);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgSAyQgIgCgDgEQgEgDAAgDQAAgDADgDQACgDAIgCQgKgFAAgHQAAgGAEgEQAEgFAIgDQgJgDgFgGQgFgGAAgIQAAgKAJgHQAIgIANAAQAGABAHADIAXAAIAAAIIgNAAIAFAGIABAIQAAAHgDAGQgFAFgHAEQgGACgFAAIgJAAQgDAAgCABQgCADgBADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAAAQACACAFAAIAMAAQAPAAAGAEQAJAEAAAKQAAAGgFAGQgDAFgHACQgJADgLABQgKAAgHgCgAgQAfQgEACAAADQAAAEAEADQAFADALAAQAJAAAHgDQAFgCAAgFIgBgDQgCgDgDAAQgFgBgQAAQgIAAgCACgAgJgqQgDAFAAANQAAALADAEQADAEAEAAQAEAAADgEQACgEAAgMQAAgMgDgGQgCgDgDAAQgFAAgDAEg");
	this.shape_419.setTransform(304.3,53.3);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AAHAhQgDgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQABgIgBgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQABgBAAAAIACABQgDAGgFACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQADACADAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_420.setTransform(293.1,51.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAFgBABgDQABgBAAgIIAAgdIAAgLIgCgDIgEgBQgGAAgFAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAEgBADgCQABgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAEADQAFAEABAGIABAQIAAAZQABAIABACQABACAFABIAAACg");
	this.shape_421.setTransform(281.2,51.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQAKAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_422.setTransform(273.8,51.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQAKAAAIAIQAIAJABARIglAAQABAMAGAIQAFAGAGAAQAFAAAEgCQADgDAEgGIADACQgGALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIASAAIAAgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_423.setTransform(267.2,51.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AgGAxIgIgGIgLAIIgDAAIAAhWIAAgIIgCgDIgGgBIAAgDIAcAAIAAAmQAIgJAKAAQAHAAAHAEQAGAEAEAIQADAHAAAKQAAALgEAJQgFAJgIAFQgHAFgJAAQgFAAgFgCgAgIgFIAAAdIABAMQAAAEAEADQACADADAAQAEAAADgCQADgDACgGQACgGAAgRQAAgOgFgGQgDgEgEAAQgFAAgHAHg");
	this.shape_424.setTransform(259.4,50.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgDAAIAAgZIACAAQADAKAGAFQAFAFAFAAQADAAADgCQACgDAAgDQAAgDgCgDIgJgHQgLgIgEgDQgEgGAAgIQgBgHAGgHQAFgGAKAAQAFAAAFACIAEACIACgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgFgEgEAAQgCAAgCACQgBABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQAKAHAEAEQADAFABAHQgBAFgCAGQgDAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_425.setTransform(248.8,51.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AAIAhQgEgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgCgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgEgDABgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIACABQgEAGgDACQgFADgFAAQgFAAgDgDgAgJAIQgDADABAEQAAAEABACQADACADAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_426.setTransform(242.3,51.7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AACAyIAAgDQAEAAACgDQABgCAAgHIAAgfIgBgJIgBgEIgEgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAFAAACgDQABgBAAgIIAAhFQgBgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAEgCQAFgDAFAAQAGAAAFAEQAEAEACAFQABAEAAALIAAAbQAAAIACACQABACAFAAIAAADg");
	this.shape_427.setTransform(234.2,50.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAFAFAFAAQAEAAACgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgDgDQgEgGAAgIQgBgHAGgHQAFgGALAAQAEAAAFACIADACIADgBIADgDIACAAIABAXIgDAAQgEgKgFgEQgFgEgEAAQgCAAgDACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQALAHADAEQADAFABAHQAAAFgEAGQgCAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_428.setTransform(223.4,51.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AgBAYIgIgbIgBgJQAAgFADgDQADgDAEAAQAFAAADADQADADAAAEIgCAKIgHAbg");
	this.shape_429.setTransform(218.4,47.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AgMAwQgGgEgFgGQgCgFgDgJQgDgLAAgMQAAgPAFgNQADgMAIgGQAHgGAIAAQAIAAAIAGQAHAGAEAKQAFAOAAAPQAAAPgEANQgCAIgFAFQgEAFgFADQgGADgGAAQgGAAgGgEgAgFgsQgCADgBAGQgBAHAAAlQAAAWACAHQABAFABACQADABACAAQAEAAABgCQADgEABgJIABgfIgBgdQgBgLgDgDQgBgDgEAAQgDAAgCACg");
	this.shape_430.setTransform(212.5,50.2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AgMAwQgGgEgEgGQgEgFgCgJQgDgLAAgMQAAgPAEgNQAEgMAIgGQAIgGAHAAQAIAAAIAGQAIAGADAKQAFAOAAAPQAAAPgEANQgDAIgEAFQgEAFgFADQgGADgGAAQgGAAgGgEgAgEgsQgDADgBAGQgBAHAAAlQAAAWABAHQACAFACACQACABACAAQAEAAACgCQADgEAAgJIAAgfIAAgdQAAgLgDgDQgCgDgEAAQgCAAgCACg");
	this.shape_431.setTransform(205,50.2);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgMAwQgGgEgFgGQgDgFgCgJQgDgLAAgMQAAgPAFgNQADgMAIgGQAHgGAIAAQAJAAAHAGQAIAGADAKQAFAOAAAPQAAAPgEANQgDAIgEAFQgEAFgGADQgFADgGAAQgHAAgFgEgAgFgsQgCADgBAGQgBAHAAAlQAAAWABAHQABAFACACQADABACAAQAEAAACgCQACgEABgJIAAgfIAAgdQgBgLgCgDQgCgDgEAAQgDAAgCACg");
	this.shape_432.setTransform(197.5,50.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AgfAzIAAgCQAbggAFgLQAFgKAAgLQAAgHgEgFQgEgFgHAAQgLAAgHALIgCgBQAEgOAIgHQAIgHAJAAQAIAAAGAEQAGADAEAHQADAGAAAFQABAKgGAKQgHAMgYAZIAVAAIAKgBIADgCIAFgHIACAAIgGAdg");
	this.shape_433.setTransform(189.8,50.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKAMAAQAJAAAIAIQAIAJABARIglAAQABAMAGAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_434.setTransform(179.3,51.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIgBgJIgCgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQABADAFAAIAAADIgjAAIAAgDQAFAAACgDQAAgBABgIIAAhFQgBgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAEgCQAFgDAFAAQAGAAAFAEQAFAEABAFQACAEAAALIAAAbQAAAIABACQACACAEAAIAAADg");
	this.shape_435.setTransform(171.7,50.2);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AgZAyIAAgDIADAAQAFAAACgBIADgEQABgCAAgHIAAhMIgHAAQgKAAgFAEQgGAGgCALIgDAAIAAgbIBYAAIAAAbIgCAAQgCgJgDgEQgDgEgFgDIgKgBIgHAAIAABMIAAAJIAEAEQADABAEAAIADAAIAAADg");
	this.shape_436.setTransform(162.5,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.backArrow7},{t:this.instance_1},{t:this.instance},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},34).to({state:[]},1).wait(13));

	// 90s description
	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_437.setTransform(132.7,371.9);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgMATAAQALAAAIADIAAAPQgJgGgKgBQgMABgHAIQgIAIAAANQAAAOAHAJQAHAHAMABQAKgBAKgHIAAAOQgKAFgNAAQgQAAgLgLg");
	this.shape_438.setTransform(124.3,373.9);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AgZAkQgGgHgBgKQAAgWAbgDIAXgEQAAgUgQAAQgOAAgMAKIAAgOQANgIAOABQAeAAAAAeIAAA0IgPAAIAAgNQgJAOgPAAQgMAAgHgGgAAAADQgJABgFADQgEAEAAAGQABAHAEADQAEAEAHAAQAIAAAGgHQAGgHAAgKIAAgHg");
	this.shape_439.setTransform(116.2,373.9);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AgWAvIgBAAIAAAMIgOAAIAAh3IAOAAIAAA1IABAAQAJgQASAAQAPAAAJALQAJALAAARQAAAVgKAMQgKAMgRAAQgPAAgIgOgAgQgEQgHAHAAALIAAAMQAAAJAHAIQAGAGAKAAQAKAAAHgJQAGgIAAgQQAAgNgGgHQgGgHgKAAQgKAAgHAHg");
	this.shape_440.setTransform(107.9,372);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLAMQgLAMgSgBQgSAAgLgLgAgSgVQgHAIAAANQAAAOAHAJQAHAHALABQANgBAGgHQAHgIAAgPQAAgOgHgHQgGgJgNAAQgLAAgHAJg");
	this.shape_441.setTransform(93.6,373.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AgfA3IAAgOQAOAIAMAAQAdAAAAggIAAgIIgBAAQgJAPgRAAQgQABgJgLQgJgMAAgQQAAgVAKgNQAKgLARAAQAPAAAIAMIABAAIAAgKIAOAAIAABIQAAAtgrAAQgPAAgLgFgAgQgnQgGAIAAAQQAAANAGAHQAGAHAKABQAKAAAHgIQAHgGAAgMIAAgLQAAgKgHgHQgGgGgJgBQgLABgHAIg");
	this.shape_442.setTransform(83.8,375.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLAMQgLAMgSgBQgSAAgLgLgAgSgVQgHAIAAANQAAAOAHAJQAHAHALABQANgBAGgHQAHgIAAgPQAAgOgHgHQgGgJgNAAQgLAAgHAJg");
	this.shape_443.setTransform(70.1,373.9);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AgJAdIAAguIgOAAIAAgLIAOAAIAAgUIANgFIAAAZIAUAAIAAALIgUAAIAAArQAAAJADADQACADAHABQAEgBAEgCIAAAMQgFACgHAAQgVABAAgZg");
	this.shape_444.setTransform(62.6,372.8);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_445.setTransform(52,371.9);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgMATAAQALAAAIADIAAAPQgJgGgKgBQgMABgHAIQgIAIAAANQAAAOAHAJQAHAHAMABQAKgBAKgHIAAAOQgKAFgNAAQgQAAgLgLg");
	this.shape_446.setTransform(43.6,373.9);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgHA7IAAhQIAOAAIAABQgAgGgrQgCgDAAgDQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgDgDg");
	this.shape_447.setTransform(37.8,372);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_448.setTransform(33.7,371.9);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgbArQgPgPAAgaQAAgaAQgRQARgRAZAAQAPAAAMAFIAAAPQgNgGgOAAQgTAAgMAMQgLANgBAUQAAAVAMAMQALAMARAAQARAAANgIIAAAOQgNAHgTAAQgXAAgPgQg");
	this.shape_449.setTransform(26.7,372.2);

	this.btnPhones = new lib._90sPhones1();
	this.btnPhones.name = "btnPhones";
	this.btnPhones.parent = this;
	this.btnPhones.setTransform(384.5,322.7,0.771,0.771,0,0,0,131.8,79.2);

	this.backArrow6 = new lib.btnBack();
	this.backArrow6.name = "backArrow6";
	this.backArrow6.parent = this;
	this.backArrow6.setTransform(69,328,1,1,0,0,0,32,32);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_450.setTransform(448.5,231.1);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAEgBACgDQABgBAAgIIAAgdIgBgLIgBgDIgEgBQgFAAgGAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBACgCQABgCAAgIIAAglQgBgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAFADQAEAEABAGIABAQIAAAZQAAAIACACQABACAFABIAAACg");
	this.shape_451.setTransform(442.5,228.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgEAAgEACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgDgDAAgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgEAGgDACQgEADgFAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_452.setTransform(434.8,228.6);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAFgBABgCQACgCAAgHIAAhHQAAgHgCgCQgBgCgFgBIAAgCIAdAAIAAAJQADgFAEgDQAEgDAHAAQAHAAAHAEQAFAFAEAJQADAIAAAKQAAAKgDAIQgEAIgGAFQgHAEgHAAQgGAAgEgCQgEgCgDgFIAAAaQAAAFAAACIADADIAGABIAAACgAgHgfIAAAkQAGAJAGAAQAEAAACgEQAEgGABgRQAAgSgFgGQgDgEgFAAQgFAAgFAKg");
	this.shape_453.setTransform(426.5,230.2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgEAAQgFAAgDgDQgEgDAAgEQAAgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_454.setTransform(418.9,228.6);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AgbAsQgIgHAAgHQAAgGADgCQADgEAFAAQAEAAADADQADADAAAEIAAADIgDAEIgCAFQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAQADACAFAAQADAAACgCQACgCABgDQABgDAAgPIAAg1QAAgHgBgCIgEgEQgCgBgEAAIgEAAIAAgDIAzAAIAAADIgDAAQgEAAgDABQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAABQgBACAAAHIAAAwQAAAOgCAGQgDAHgIAFQgHAEgJAAQgNAAgHgHg");
	this.shape_455.setTransform(411.2,227.3);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAEgBACgDQABgBAAgIIAAgdIAAgLIgCgDIgEgBQgGAAgFAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAEgBADgCQABgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAEADQAFAEABAGIABAQIAAAZQABAIABACQABACAFABIAAACg");
	this.shape_456.setTransform(399.6,228.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAAA2QABAHABACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEgBAEQABAFgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_457.setTransform(393.4,227);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgGAAQgNAAgHgMQgGgJAAgOQAAgLAEgIQAEgJAGgEQAHgFAIAAQAEAAADACQAEACAEAFIAAgVIgBgJIgCgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgdAGgAgJgMQgCACgCAGQgCAFAAALQAAANACAHQACAGAEADQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgGgLgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_458.setTransform(383.4,227.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAJgKQAKgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgHAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_459.setTransform(375.9,228.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAFAFAFAAQAEAAACgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgDgDQgEgGAAgIQgBgHAGgHQAFgGALAAQAEAAAFACIADACIADgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgFgEgEAAQgCAAgDACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQALAHADAEQADAFABAHQAAAFgEAGQgCAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_460.setTransform(369.6,228.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgEAAQgFAAgDgDQgEgDAAgEQAAgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_461.setTransform(363.1,228.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAKAAAIAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgPAAgIgLgAgEgbQgFAHAAALIAAADIAUAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_462.setTransform(356,228.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAABVQABAHABACQACACAFAAIAAADg");
	this.shape_463.setTransform(350.5,227.1);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgPAAgIgLgAgEgbQgFAHAAALIAAADIAUAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_464.setTransform(345.2,228.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBABgCQACgCAAgJIAAglIgBgHIgCgDIgEgCIAAgCIAcAAIAAAPQAFgKAFgEQAFgDAFAAQAFAAACACQADADgBAEQABAFgDADQgDADgDAAQgEAAgCgDIgEgDIgCAAIgDACQgEACgBAFQgCAHABAHIAAAQIAAAEIAAAGIABADIAHABIAAACg");
	this.shape_465.setTransform(338.8,228.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgDAAIgBgZIADAAQADAKAGAFQAFAFAFAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgMgIgCgDQgGgGAAgIQABgHAFgHQAGgGAJAAQAFAAAGACIADACIACgBIADgDIACAAIABAXIgCAAQgFgKgFgEQgEgEgEAAQgEAAgCACQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABIABAEQACADAKAHQALAHADAEQAEAFgBAHQAAAFgDAGQgCAFgGADQgEADgHAAQgEAAgIgDg");
	this.shape_466.setTransform(328.7,228.7);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAWgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAIACABQgEAGgEACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQACACAEAAQAEAAAEgEIAAgWQgJAFgEAGg");
	this.shape_467.setTransform(322.2,228.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AATAjIgTgxIgRAxIgEAAIgSgwQgEgMgDgDIgGgEIAAgCIAjAAIAAACQgEAAgBACIgCACIADAHIAKAaIAKgaIgBgBQgCgGgCgBIgFgDIAAgCIAiAAIAAACIgFACIgBACIACAHIAJAaIAJgYIACgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBgBgEgBIAAgCIAUAAIAAACQgEABgCACQgCACgCAJIgUA1g");
	this.shape_468.setTransform(312.8,228.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAAEgCQADgDAEgGIACACQgFALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIASAAIAAgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_469.setTransform(300.5,228.7);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AADAjIAAgCQAEgBABgDQABgBAAgIIAAgdIgBgLIgCgDIgDgBQgGAAgFAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQABgIgCgCQgCgCgEgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAGAAQAGAAAFADQAEAEACAGIABAQIAAAZQAAAIABACQABACAFABIAAACg");
	this.shape_470.setTransform(292.9,228.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgIgLgAgFgbQgDADgBAIIAAAWIAAAPQABAFADADQACACADAAQADAAADgCQACgCABgFQACgGgBgVQABgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_471.setTransform(284.9,228.7);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIgBgJIgCgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQABADAFAAIAAADIgjAAIAAgDQAFAAACgDQAAgBAAgIIAAhFQAAgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAEgCQAFgDAFAAQAGAAAFAEQAFAEABAFQACAEAAALIAAAbQAAAIABACQACACAEAAIAAADg");
	this.shape_472.setTransform(277,227.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAFgBACgCQABgCAAgHIAAhHQAAgHgBgCQgCgCgFgBIAAgCIAcAAIAAAJQAEgFAEgDQAEgDAGAAQAIAAAGAEQAGAFADAJQAEAIAAAKQAAAKgEAIQgDAIgGAFQgHAEgHAAQgGAAgEgCQgDgCgFgFIAAAaQAAAFABACIADADIAGABIAAACgAgIgfIAAAkQAHAJAGAAQAEAAADgEQADgGABgRQgBgSgEgGQgCgEgFAAQgGAAgGAKg");
	this.shape_473.setTransform(268.5,230.2);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAWgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQAAAEADACQABACAEAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_474.setTransform(257.2,228.6);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBABgCQACgCAAgJIAAglIgBgHIgCgDIgEgCIAAgCIAcAAIAAAPQAGgKAFgEQAEgDAFAAQAEAAADACQADADgBAEQABAFgDADQgDADgDAAQgEAAgDgDIgDgDIgBAAIgFACQgCACgCAFQgBAHAAAHIAAAQIAAAEIAAAGIABADIAHABIAAACg");
	this.shape_475.setTransform(250.1,228.6);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAADgCQAEgDAEgGIADACQgGALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgFAHAAALIAAADIAUAAIgCgRQgBgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_476.setTransform(243.4,228.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_477.setTransform(233.7,228.6);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAWgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQAAAEADACQABACAEAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_478.setTransform(223.9,228.6);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_479.setTransform(216.7,228.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_480.setTransform(207.1,227.5);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAGAFAEAAQAEAAACgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgCgDQgFgGgBgIQAAgHAGgHQAFgGALAAQAEAAAFACIADACIADgBIADgDIACAAIABAXIgDAAQgEgKgFgEQgFgEgDAAQgEAAgCACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQALAHADAEQAEAFAAAHQAAAFgEAGQgCAFgGADQgFADgGAAQgEAAgIgDg");
	this.shape_481.setTransform(201.7,228.7);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBACgCQABgCAAgJIAAglIAAgHIgCgDIgGgCIAAgCIAcAAIAAAPQAHgKAEgEQAFgDAGAAQAEAAACACQADADAAAEQAAAFgDADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgDACgCAFQgBAHgBAHIAAAQIAAAEIABAGIABADIAGABIAAACg");
	this.shape_482.setTransform(195.6,228.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAAA2QAAAHACACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEQAAAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_483.setTransform(190.1,227);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAHgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIgBgDQABgLAHgHQAIgHANAAQAIAAAFAEQAEADAAAEQAAADgDADQgDACgEAAQgDAAgDgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIABgDIAAgCIgBgDIgDgBQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQgCACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHACACQACACAGAAIAAADg");
	this.shape_484.setTransform(186.2,227);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AgcAvQgEgDAAgFQAAgFADgCQACgDAEAAQAEAAACACQACADAAAFIABADIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQADgDAEgMIACgFIgWgyQgFgMgCgCIgGgEIAAgCIAjAAIAAACIgEABIgBAEQAAACAEAJIAKAbIAIgWQAFgKAAgEQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgBgFgBIAAgCIAXAAIAAACQgDABgCACQgCACgFANIgUAyQgGATgEAEQgFAGgHAAQgHAAgDgDg");
	this.shape_485.setTransform(175.4,230.3);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBABgCQACgCAAgJIAAglIgBgHIgBgDIgGgCIAAgCIAdAAIAAAPQAGgKAFgEQAFgDAFAAQADAAADACQACADAAAEQAAAFgCADQgCADgEAAQgDAAgEgDIgDgDIgBAAIgFACQgDACgBAFQgBAHAAAHIAAAQIAAAEIAAAGIACADIAGABIAAACg");
	this.shape_486.setTransform(168.5,228.6);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAJgKQAKgKAMAAQAJAAAJAIQAHAJAAARIgkAAQAAAMAHAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_487.setTransform(161.8,228.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AgBAjIgWg0IgHgMIgFgDIAAgCIAjAAIAAACQgCAAgBACQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIADAKIAKAYIAJgVQAEgJAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgBgBgEgBIAAgCIAWAAIAAACQgDABgCACQgCACgEAKIgXA0g");
	this.shape_488.setTransform(154.6,228.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAADgCQAEgDAEgGIADACQgGALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgFAHAAALIAAADIAUAAIgCgRQgBgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_489.setTransform(143.9,228.7);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AACAyIAAgDQAEAAACgDQABgCAAgHIAAgfIAAgJIgCgEIgEgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAEAAADgDQABgBAAgIIAAhFQAAgHgCgCQgBgCgFgBIAAgDIAcAAIAAAoQAGgGADgCQAFgDAFAAQAHAAAEAEQAEAEACAFQACAEgBALIAAAbQABAIABACQABACAFAAIAAADg");
	this.shape_490.setTransform(136.3,227.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AgZAyIAAgDIADAAQAEAAADgBIADgEQABgCAAgHIAAhMIgHAAQgKAAgFAEQgGAGgCALIgCAAIAAgbIBYAAIAAAbIgDAAQgCgJgDgEQgDgEgFgDIgKgBIgHAAIAABMIAAAJIAEAEQACABAEAAIAEAAIAAADg");
	this.shape_491.setTransform(127.1,227.1);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AgMAwQgGgEgEgGQgDgFgDgJQgDgLAAgMQAAgPAFgNQADgMAIgGQAHgGAIAAQAIAAAIAGQAHAGAEAKQAFAOAAAPQAAAPgEANQgCAIgFAFQgEAFgFADQgGADgGAAQgGAAgGgEgAgFgsQgCADgBAGQgBAHAAAlQAAAWACAHQABAFABACQADABACAAQAEAAABgCQADgEABgJIABgfIgBgdQgBgLgDgDQgBgDgEAAQgDAAgCACg");
	this.shape_492.setTransform(114.9,227.1);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AgMAwQgGgEgEgGQgEgFgCgJQgDgLAAgMQAAgPAEgNQAEgMAIgGQAIgGAHAAQAIAAAIAGQAIAGADAKQAFAOAAAPQAAAPgEANQgDAIgEAFQgEAFgFADQgGADgGAAQgGAAgGgEgAgEgsQgDADgBAGQgBAHAAAlQAAAWABAHQACAFACACQACABACAAQAEAAACgCQADgEAAgJIAAgfIAAgdQAAgLgDgDQgCgDgEAAQgCAAgCACg");
	this.shape_493.setTransform(107.4,227.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AgMAwQgGgEgFgGQgDgFgCgJQgDgLAAgMQAAgPAFgNQADgMAIgGQAIgGAHAAQAJAAAHAGQAIAGADAKQAFAOAAAPQAAAPgEANQgDAIgEAFQgEAFgGADQgFADgGAAQgHAAgFgEgAgFgsQgCADgBAGQgBAHAAAlQAAAWACAHQAAAFACACQADABACAAQAEAAACgCQACgEABgJIAAgfIAAgdQgBgLgCgDQgCgDgEAAQgDAAgCACg");
	this.shape_494.setTransform(99.9,227.1);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AgfAzIAAgCQAbggAFgLQAFgKAAgLQAAgHgEgFQgEgFgHAAQgLAAgHALIgCgBQAEgOAIgHQAIgHAJAAQAIAAAGAEQAGADAEAHQADAGAAAFQABAKgGAKQgHAMgYAZIAVAAIAKgBIADgCIAFgHIACAAIgGAdg");
	this.shape_495.setTransform(92.2,227);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AgUA0IAghnIAJAAIgfBng");
	this.shape_496.setTransform(86.6,227.2);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AgfAyQAMgDAIgFQAIgGAFgIQAEgIADgKIgIADIgGABQgLAAgHgIQgIgHAAgOQAAgKAEgIQAEgJAIgEQAHgFAIAAQAIAAAHAFQAJAFAEAKQAFAJgBAMQAAAPgHAOQgHAPgPAIQgOAJgUABgAgHgqQgDAEAAAMQAAAUAFAHQADAFAEAAQADAAAFgCIABgOQAAgNgEgMQgBgGgEgDQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAgBAAQgDAAgCAEg");
	this.shape_497.setTransform(80.7,227.1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AgfAyQAMgDAIgFQAJgGADgIQAGgIABgKIgHADIgGABQgLAAgHgIQgIgHAAgOQAAgKAEgIQAEgJAHgEQAIgFAIAAQAIAAAHAFQAJAFAEAKQAEAJABAMQgBAPgHAOQgIAPgOAIQgOAJgUABgAgIgqQgCAEAAAMQAAAUAFAHQADAFAEAAQADAAAEgCIABgOQAAgNgDgMQgCgGgDgDQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgFAAgCAEg");
	this.shape_498.setTransform(73.2,227.1);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AggAyQANgDAJgFQAHgGAEgIQAFgIADgKIgIADIgGABQgLAAgIgIQgHgHAAgOQAAgKAEgIQAEgJAHgEQAIgFAIAAQAIAAAIAFQAHAFAFAKQAFAJAAAMQAAAPgIAOQgHAPgPAIQgOAJgVABgAgIgqQgCAEAAAMQAAAUAEAHQAEAFAEAAQADAAAEgCIABgOQAAgNgCgMQgCgGgEgDQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgFAAgCAEg");
	this.shape_499.setTransform(65.7,227.1);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AgZAzIAAgDIADAAQAGAAADgBQADgCABgCQABgDAAgJIAAgzIgBgIIgCgDIgEgCQgEAAgGADIgBgDIAkgRIACAAIAABRIABALQABADACABQADACAFAAIADAAIAAADg");
	this.shape_500.setTransform(58.1,227);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_501.setTransform(340.6,193.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgGAAQgNAAgHgMQgGgJAAgOQAAgLAEgIQAEgJAGgEQAHgFAHAAQAFAAADACQAEACAEAFIAAgVIgBgJIgCgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAIAFACIAAACIgdAGgAgJgMQgDACgBAGQgCAFAAALQAAANACAHQACAGADADQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgGgLgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_502.setTransform(334.7,190);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AgVAZQgHgKABgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgIAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_503.setTransform(327.2,191.5);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_504.setTransform(321.3,190.3);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAFgBABgDQABgBAAgIIAAgdIgBgLIgBgDIgEgBQgGAAgFAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAEgBADgCQABgCAAgIIAAglQgBgIgBgCQgBgCgFgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAFADQAEAEABAGIABAQIAAAZQAAAIACACQABACAFABIAAACg");
	this.shape_505.setTransform(314.6,191.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAAEgCQADgDAEgGIACACQgFALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIASAAIAAgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_506.setTransform(307.2,191.5);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AAAAjIgYg0IgGgMIgFgDIAAgCIAkAAIAAACQgDAAgCACQAAAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIADAKIALAYIAJgVQADgJAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBgBgEgBIAAgCIAWAAIAAACQgDABgCACQgCACgEAKIgXA0g");
	this.shape_507.setTransform(300,191.6);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAFgBABgDQABgBAAgIIAAgdIgBgLIgBgDIgEgBQgGAAgFAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAEgBADgCQABgCAAgIIAAglQgBgIgBgCQgBgCgFgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAFADQAEAEABAGIABAQIAAAZQAAAIACACQABACAFABIAAACg");
	this.shape_508.setTransform(292.1,191.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAAA2QAAAHACACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEQAAAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_509.setTransform(285.9,189.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgCAAIgCgZIADAAQADAKAGAFQAGAFAEAAQADAAADgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgCgDQgFgGgBgIQAAgHAGgHQAGgGAKAAQAEAAAGACIACACIADgBIADgDIACAAIABAXIgCAAQgFgKgFgEQgFgEgDAAQgDAAgDACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQAKAHAEAEQAEAFAAAHQgBAFgDAGQgCAFgGADQgFADgGAAQgEAAgIgDg");
	this.shape_510.setTransform(277.2,191.5);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAWgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQAAAEADACQABACAEAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_511.setTransform(270.7,191.4);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AATAjIgTgxIgRAxIgEAAIgSgwQgEgMgDgDIgGgEIAAgCIAjAAIAAACQgDAAgCACIgBACIACAHIAKAaIAJgaIAAgBQgCgGgCgBIgFgDIAAgCIAiAAIAAACIgFACIgBACIACAHIAJAaIAJgYIADgHQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgDgBIAAgCIAUAAIAAACQgEABgBACQgDACgCAJIgUA1g");
	this.shape_512.setTransform(261.3,191.6);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AAEAyIAAgDIAEgBIABgCIgDgGIgNgUIgEAFIAAAMQAAAIACACQABACAEAAIAAADIgjAAIAAgDQAEAAACgDQACgBgBgIIAAhFQABgHgCgCQgCgCgEgBIAAgDIAcAAIAABBIAPgQIAGgGIABgEQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgHgCIAAgDIAfAAIAAADQgFAAgDACQgDACgKAJIgHAHIAQAXQAJAPADABQACADAEAAIAAADg");
	this.shape_513.setTransform(248.3,189.9);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBABgCQACgCAAgJIAAglIgBgHIgCgDIgEgCIAAgCIAcAAIAAAPQAGgKAEgEQAFgDAFAAQAEAAADACQADADgBAEQABAFgDADQgDADgDAAQgEAAgDgDIgDgDIgBAAIgFACQgCACgCAFQgBAHAAAHIAAAQIAAAEIAAAGIABADIAHABIAAACg");
	this.shape_514.setTransform(240.6,191.4);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQADACACAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_515.setTransform(233.4,191.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AATAjIgTgxIgRAxIgEAAIgSgwQgEgMgDgDIgGgEIAAgCIAjAAIAAACQgEAAgBACIgCACIADAHIAKAaIAKgaIgBgBQgCgGgCgBIgFgDIAAgCIAiAAIAAACIgFACIgBACIACAHIAJAaIAJgYIACgHQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBgEgBIAAgCIAUAAIAAACQgEABgCACQgCACgCAJIgUA1g");
	this.shape_516.setTransform(224.2,191.6);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_517.setTransform(216.3,190.3);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQAAAMAHAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgIAEgJAAQgNAAgJgLgAgEgbQgEAHAAALIAAADIASAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_518.setTransform(210.6,191.5);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AADAjIAAgCQAEgBABgDQABgBAAgIIAAgdIgBgLIgCgDIgDgBQgGAAgFAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQABgIgCgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAGAAQAGAAAEADQAFAEACAGIABAQIAAAZQgBAIACACQACACAEABIAAACg");
	this.shape_519.setTransform(203,191.4);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgDAAIgBgZIADAAQADAKAGAFQAGAFAEAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgLgIgEgDQgEgGAAgIQAAgHAFgHQAFgGAKAAQAFAAAFACIAEACIACgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgEgEgFAAQgDAAgBACQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABIABAEQACADAKAHQAKAHAEAEQADAFAAAHQAAAFgCAGQgDAFgFADQgFADgHAAQgEAAgIgDg");
	this.shape_520.setTransform(192.2,191.5);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAGAFAEAAQAEAAACgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgCgDQgFgGgBgIQAAgHAGgHQAFgGALAAQAEAAAFACIADACIADgBIADgDIACAAIABAXIgDAAQgEgKgFgEQgFgEgDAAQgEAAgCACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQALAHADAEQAEAFAAAHQAAAFgEAGQgCAFgGADQgFADgGAAQgEAAgIgDg");
	this.shape_521.setTransform(186.4,191.5);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQAKAAAJAIQAHAJABARIglAAQABAMAGAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_522.setTransform(180.2,191.5);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAABVQAAAHACACQACACAEAAIAAADg");
	this.shape_523.setTransform(174.8,189.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQAKAAAIAIQAIAJABARIglAAQABAMAGAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_524.setTransform(169.4,191.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBACgCQABgCAAgJIAAglIAAgHIgDgDIgEgCIAAgCIAbAAIAAAPQAHgKAEgEQAGgDAEAAQAEAAADACQACADAAAEQAAAFgCADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgDACgCAFQgBAHgBAHIAAAQIAAAEIABAGIABADIAHABIAAACg");
	this.shape_525.setTransform(163.1,191.4);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAAA2QABAHABACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEgBAEQABAFgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_526.setTransform(157.6,189.8);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AATAjIgTgxIgRAxIgEAAIgSgwQgFgMgCgDIgGgEIAAgCIAjAAIAAACQgDAAgCACIgBACIACAHIAKAaIAJgaIAAgBQgCgGgCgBIgFgDIAAgCIAiAAIAAACIgFACIgBACIACAHIAKAaIAJgYIABgHQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBgFgBIAAgCIAVAAIAAACQgDABgCACQgCACgEAJIgTA1g");
	this.shape_527.setTransform(150,191.6);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAADgCQAEgDAEgGIADACQgGALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgFAHAAALIAAADIAUAAIgCgRQgBgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_528.setTransform(137.6,191.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAABVQABAHABACQACACAFAAIAAADg");
	this.shape_529.setTransform(132.2,189.9);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAAA2QgBAHACACQABACAGAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgDAAgEgEg");
	this.shape_530.setTransform(128,189.8);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AgFAxIgJgGIgLAIIgDAAIAAhWIAAgIIgDgDIgFgBIAAgDIAdAAIAAAmQAHgJALAAQAHAAAFAEQAHAEADAIQAEAHAAAKQAAALgFAJQgEAJgHAFQgIAFgJAAQgFAAgEgCgAgHgFIAAAdIAAAMQABAEACADQADADAEAAQAEAAACgCQACgDACgGQACgGAAgRQAAgOgDgGQgDgEgFAAQgGAAgFAHg");
	this.shape_531.setTransform(121.5,190);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAACgCQADgCABgFQACgGAAgVQAAgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_532.setTransform(113.8,191.5);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_533.setTransform(103.8,191.4);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAWgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQAAAEADACQABACAEAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_534.setTransform(90.2,191.4);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBABgCQACgCAAgJIAAglIgBgHIgCgDIgEgCIAAgCIAcAAIAAAPQAFgKAFgEQAFgDAFAAQAFAAACACQADADgBAEQABAFgDADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgEACgBAFQgCAHABAHIAAAQIAAAEIAAAGIABADIAHABIAAACg");
	this.shape_535.setTransform(79.6,191.4);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AgVAZQgGgKgBgOQABgQAIgKQAKgKAMAAQAKAAAIAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgPAAgHgLgAgEgbQgFAHAAALIAAADIAUAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_536.setTransform(72.9,191.5);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AgBAjIgWg0IgHgMIgFgDIAAgCIAkAAIAAACQgDAAgCACQAAAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIADAKIAKAYIAJgVQAEgJAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgCgBgEgBIAAgCIAWAAIAAACQgDABgCACQgCACgEAKIgXA0g");
	this.shape_537.setTransform(65.7,191.6);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgIgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_538.setTransform(58.2,191.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AADAjIAAgCQADgBACgDQABgBAAgIIAAgdIAAgLIgDgDIgDgBQgFAAgGAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAFAAQAHAAAEADQAFAEACAGIAAAQIAAAZQABAIABACQACACAEABIAAACg");
	this.shape_539.setTransform(466.9,172.8);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQADACACAAQADAAACgCQADgCABgFQACgGAAgVQAAgMgCgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_540.setTransform(458.9,172.9);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgGAAIAAgDIAdAAIAAA2QAAAHABACQABACAGAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEABAEQgBAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_541.setTransform(453.2,171.2);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_542.setTransform(448.6,171.7);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AAHAhQgDgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIAAgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQABgBAAAAIACABQgDAGgFACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQADACADAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_543.setTransform(442.5,172.8);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_544.setTransform(432.3,172.8);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBABgCQACgCAAgJIAAglIgBgHIgCgDIgEgCIAAgCIAcAAIAAAPQAGgKAEgEQAFgDAFAAQAEAAADACQADADgBAEQABAFgDADQgDADgDAAQgEAAgDgDIgDgDIgBAAIgFACQgCACgCAFQgBAHAAAHIAAAQIAAAEIAAAGIABADIAHABIAAACg");
	this.shape_545.setTransform(422.9,172.8);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQADACACAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_546.setTransform(415.6,172.9);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAGgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIAAgDQAAgLAIgHQAHgHANAAQAJAAAEAEQAEADAAAEQAAADgCADQgDACgFAAQgDAAgDgCQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIABgDIAAgCIgBgDIgDgBQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHABACQADACAGAAIAAADg");
	this.shape_547.setTransform(410.2,171.2);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAFgBABgDQABgBAAgIIAAgdIAAgLIgCgDIgEgBQgGAAgFAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAEgBADgCQABgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAEADQAFAEABAGIABAQIAAAZQABAIABACQABACAFABIAAACg");
	this.shape_548.setTransform(402.7,172.8);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAAA2QABAHABACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEgBAEQABAFgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_549.setTransform(396.5,171.2);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AgSAyQgIgCgDgEQgEgDABgDQgBgDADgDQADgDAGgCQgJgFAAgHQAAgFAEgFQAEgFAIgDQgJgDgFgGQgFgGABgIQAAgKAIgHQAIgIANABQAGAAAHADIAXAAIAAAIIgNAAIAFAGIABAIQAAAHgDAGQgFAGgGADQgIACgEAAIgJAAQgDAAgCABQgCADAAADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAQACACAEABIAMgBQAPAAAGAEQAIAEAAAKQAAAGgDAGQgFAEgFADQgKADgMABQgIAAgIgCgAgQAfQgEACAAADQAAAEAFADQAEADALAAQAKAAAFgDQAHgCAAgFIgBgDQgDgDgEAAQgDgBgRAAQgHAAgDACgAgJgpQgDADAAAOQAAALADAEQADAEAEAAQAEAAACgEQADgEAAgMQAAgNgDgFQgCgDgEAAQgEAAgDAFg");
	this.shape_550.setTransform(387,174.4);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAFgBABgDQABgBAAgIIAAgdIgBgLIgBgDIgEgBQgGAAgFAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBACgCQABgCAAgIIAAglQgBgIgBgCQgBgCgFgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAFADQAEAEABAGIABAQIAAAZQAAAIACACQABACAFABIAAACg");
	this.shape_551.setTransform(379,172.8);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAAA2QAAAHACACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEQAAAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_552.setTransform(372.8,171.2);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgDAAIgBgZIADAAQADAKAGAFQAFAFAFAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgLgIgDgDQgGgGAAgIQABgHAFgHQAGgGAJAAQAFAAAGACIADACIACgBIACgDIADAAIABAXIgCAAQgFgKgFgEQgEgEgFAAQgDAAgBACQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABIABAEQACADAKAHQALAHADAEQAEAFgBAHQAAAFgCAGQgDAFgFADQgFADgHAAQgEAAgIgDg");
	this.shape_553.setTransform(367.8,172.9);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAFAFAFAAQAEAAACgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgDgDQgEgGAAgIQgBgHAGgHQAFgGALAAQAEAAAFACIADACIADgBIADgDIACAAIABAXIgDAAQgEgKgFgEQgFgEgEAAQgCAAgDACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQALAHADAEQADAFABAHQAAAFgEAGQgCAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_554.setTransform(362,172.9);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAHAAQAEAAAEgCQADgDAEgGIACACQgFALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_555.setTransform(355.8,172.9);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_556.setTransform(349.1,172.9);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_557.setTransform(342.5,172.9);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgFAAgDACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgFAAQgEAAgDgDQgEgDABgEQgBgFAFgFQAEgFAIgCQAHgDAHAAQAJAAAGAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBABAAIACABQgEAGgEACQgEADgFAAQgFAAgEgDgAgJAIQgDADABAEQAAAEABACQACACAEAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_558.setTransform(335.5,172.8);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("AgUA+QAHgFAEgEQAFgHADgKQACgNABgXQgBgVgCgMQgDgMgFgHQgFgFgGgEIAAgEQARAGAMASQAMATAAAWQAAAYgMASQgMASgRAGg");
	this.shape_559.setTransform(325.1,172.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAABVQABAHABACQACACAEAAIAAADg");
	this.shape_560.setTransform(320.8,171.3);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAACgCQADgCABgFQACgGAAgVQAAgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_561.setTransform(314.9,172.9);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_562.setTransform(307.9,172.9);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgIgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_563.setTransform(300.8,172.9);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_564.setTransform(294.6,171.7);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQADACACAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_565.setTransform(288.3,172.9);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBACgCQABgCAAgJIAAglIAAgHIgCgDIgGgCIAAgCIAcAAIAAAPQAHgKAFgEQAEgDAGAAQAEAAACACQADADAAAEQAAAFgDADQgDADgDAAQgEAAgDgDIgDgDIgCAAIgEACQgCACgCAFQgBAHgBAHIAAAQIAAAEIABAGIACADIAFABIAAACg");
	this.shape_566.setTransform(281.6,172.8);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("AgoAyIAAgDQAGAAADgBIADgEQABgCAAgIIAAg/QAAgIgBgCIgDgEIgJgBIAAgDIAqAAQAVAAAKAIQAJAIgBALQABAKgHAHQgFAGgLACQgHACgQAAIAAAbQAAAIABACQAAABABAAQAAABAAAAQABABAAAAQABAAAAABQACABAHAAIAAADgAgEAAIADAAQAIAAAGgFQAEgFAAgMQAAgLgEgFQgGgFgIAAIgDAAg");
	this.shape_567.setTransform(273.5,171.3);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAFgBABgDQABgBAAgIIAAgdIgBgLIgBgDIgEgBQgGAAgFAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBACgCQABgCAAgIIAAglQgBgIgBgCQgBgCgFgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAFADQAEAEABAGIABAQIAAAZQAAAIACACQABACAFABIAAACg");
	this.shape_568.setTransform(261.1,172.8);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_569.setTransform(253.1,172.9);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAAA2QABAHABACQACACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgDAAgEgEg");
	this.shape_570.setTransform(247.4,171.2);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_571.setTransform(242.8,171.7);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgEAAQgFAAgDgDQgEgDAAgEQAAgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_572.setTransform(236.7,172.8);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_573.setTransform(229.5,172.9);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAAA2QABAHABACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQAEAEgBAEQABAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_574.setTransform(224.1,171.2);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAABVQABAHABACQACACAFAAIAAADg");
	this.shape_575.setTransform(219.9,171.3);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAEgBACgCQACgCAAgHIAAhHQAAgHgCgCQgCgCgEgBIAAgCIAdAAIAAAJQADgFAEgDQAEgDAHAAQAHAAAGAEQAHAFACAJQAEAIAAAKQAAAKgEAIQgDAIgGAFQgHAEgHAAQgGAAgEgCQgEgCgDgFIAAAaQAAAFABACIACADIAGABIAAACgAgHgfIAAAkQAGAJAGAAQAEAAADgEQADgGAAgRQABgSgFgGQgDgEgEAAQgHAAgEAKg");
	this.shape_576.setTransform(213.4,174.4);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAFgBABgCQACgCAAgHIAAhHQAAgHgCgCQgBgCgFgBIAAgCIAdAAIAAAJQADgFAEgDQAEgDAGAAQAIAAAHAEQAFAFAEAJQADAIAAAKQAAAKgDAIQgEAIgGAFQgGAEgIAAQgGAAgEgCQgEgCgDgFIAAAaQAAAFABACIACADIAGABIAAACgAgHgfIAAAkQAGAJAGAAQAEAAACgEQAEgGABgRQAAgSgFgGQgDgEgFAAQgFAAgFAKg");
	this.shape_577.setTransform(205.1,174.4);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AAFAzIAAgDIACAAQAGAAACgCQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIgBgDIgCgFIgFgNIgiAAIgFAKQgCAFAAADQAAAEAEACIAJACIAAADIghAAIAAgDQAGgBADgDQAEgEAFgLIAihPIACAAIAjBRQAGALADADQACADAFAAIAAADgAgXARIAdAAIgOghg");
	this.shape_578.setTransform(195.6,171.2);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgCAAIgCgZIADAAQADAKAGAFQAGAFAEAAQADAAADgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgCgDQgFgGgBgIQAAgHAGgHQAGgGAKAAQAEAAAGACIACACIADgBIADgDIACAAIABAXIgCAAQgFgKgFgEQgFgEgDAAQgDAAgDACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQAKAHAEAEQAEAFAAAHQgBAFgDAGQgCAFgGADQgFADgGAAQgEAAgIgDg");
	this.shape_579.setTransform(184.5,172.9);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgDAAIgBgZIADAAQADAKAGAFQAGAFAEAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgLgIgEgDQgEgGAAgIQAAgHAFgHQAFgGAKAAQAFAAAFACIAEACIACgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgEgEgFAAQgDAAgBACQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABIABAEQACADAKAHQAKAHAEAEQADAFAAAHQAAAFgCAGQgDAFgFADQgFADgHAAQgEAAgIgDg");
	this.shape_580.setTransform(178.7,172.9);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgHAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_581.setTransform(172.5,172.9);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQACACAFAAIAAADg");
	this.shape_582.setTransform(167.1,171.3);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgHAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_583.setTransform(161.7,172.9);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBABgCQACgCAAgJIAAglIgBgHIgBgDIgGgCIAAgCIAcAAIAAAPQAGgKAGgEQAFgDAFAAQADAAADACQACADABAEQgBAFgCADQgCADgEAAQgEAAgDgDIgDgDIgBAAIgFACQgDACgBAFQgCAHAAAHIAAAQIAAAEIABAGIACADIAFABIAAACg");
	this.shape_584.setTransform(155.4,172.8);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgGAAIAAgDIAdAAIAAA2QAAAHABACQABACAGAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEABAEQgBAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_585.setTransform(149.9,171.2);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AAbAzIgZg/IgaA/IgDAAIgghRIgHgOQgCgCgEgBIAAgDIArAAIAAADQgGAAgBABQgBABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAADADAJIAUAvIAPglIgDgKIgGgLQgCgDgCgCIgHgBIAAgDIAvAAIAAADIgHAAQAAABgBAAQAAAAgBAAQAAAAAAABQAAAAgBAAIAAADIADALIASAtIAQgpIADgJIABgEQAAgDgDgCQgCgCgFAAIAAgDIAZAAIAAADQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgEAFIgEALIgfBRg");
	this.shape_586.setTransform(140.5,171.5);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AgIAqQgMgTAAgXQAAgXAMgSQAMgSARgGIAAAEQgIAFgDAEQgFAHgDAKQgCANgBAWQABAWACAMQADAMAFAHQAFAFAGAEIAAAEQgRgGgMgSg");
	this.shape_587.setTransform(130.7,172.7);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AgpAyIAAgDQAHAAACgBIAEgEQABgCAAgIIAAg/QAAgIgBgCIgEgEIgJgBIAAgDIAqAAQAWAAAJAIQAJAIAAALQAAAKgFAHQgHAGgKACQgHACgQAAIAAAbQAAAIABACQAAABABAAQAAABAAAAQABABAAAAQABAAAAABQACABAHAAIAAADgAgEAAIAEAAQAHAAAFgFQAGgFAAgMQAAgLgGgFQgEgFgJAAIgDAAg");
	this.shape_588.setTransform(120.5,171.3);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AAFAzIAAgDIACAAQAGAAACgCQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIgBgDIgCgFIgFgNIgiAAIgFAKQgCAFAAADQAAAEAEACIAJACIAAADIghAAIAAgDQAGgBADgDQAEgEAFgLIAihPIACAAIAjBRQAGALADADQACADAFAAIAAADgAgXARIAdAAIgOghg");
	this.shape_589.setTransform(110.4,171.2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AAbAzIgZg/IgZA/IgDAAIghhRIgHgOQgCgCgEgBIAAgDIAqAAIAAADQgFAAgBABQgBABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQAAADAFAJIATAvIAPglIgEgKIgFgLQgBgDgDgCIgHgBIAAgDIAvAAIAAADIgHAAQgBABAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgBADIADALIASAtIAQgpIADgJIABgEQAAgDgCgCQgCgCgGAAIAAgDIAaAAIAAADQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgDAFIgFALIgfBRg");
	this.shape_590.setTransform(99.2,171.5);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AgfAyQAMgDAIgFQAIgGAFgIQAEgIADgKIgIADIgGABQgLAAgHgIQgIgHAAgOQAAgKAEgIQAEgJAIgEQAHgFAIAAQAIAAAHAFQAJAFAEAKQAFAJgBAMQAAAPgHAOQgHAPgPAIQgOAJgUABgAgHgqQgDAEAAAMQAAAUAFAHQADAFAEAAQADAAAFgCIABgOQAAgNgEgMQgBgGgEgDQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAgBAAQgDAAgCAEg");
	this.shape_591.setTransform(80.7,171.3);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AgfAyQAMgDAIgFQAJgGADgIQAGgIABgKIgHADIgGABQgLAAgHgIQgIgHAAgOQAAgKAEgIQAEgJAHgEQAIgFAIAAQAIAAAHAFQAJAFAEAKQAEAJABAMQgBAPgHAOQgIAPgOAIQgOAJgUABgAgIgqQgCAEAAAMQAAAUAFAHQADAFAEAAQADAAAEgCIABgOQAAgNgDgMQgCgGgDgDQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgFAAgCAEg");
	this.shape_592.setTransform(73.2,171.3);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AggAyQANgDAJgFQAHgGAEgIQAFgIADgKIgIADIgGABQgLAAgIgIQgHgHAAgOQAAgKAEgIQAEgJAHgEQAIgFAIAAQAIAAAIAFQAHAFAFAKQAFAJAAAMQAAAPgIAOQgHAPgPAIQgOAJgVABgAgIgqQgCAEAAAMQAAAUAEAHQAEAFAEAAQADAAAEgCIABgOQAAgNgCgMQgCgGgEgDQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgFAAgCAEg");
	this.shape_593.setTransform(65.7,171.3);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AgZAzIAAgDIADAAQAGAAADgBQADgCABgCQABgDAAgJIAAgzIgBgIIgCgDIgEgCQgEAAgGADIgBgDIAkgRIACAAIAABRIABALQABADACABQADACAFAAIADAAIAAADg");
	this.shape_594.setTransform(58.1,171.2);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_595.setTransform(154.9,138.1);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAABVQABAHABACQACACAFAAIAAADg");
	this.shape_596.setTransform(151.1,134.1);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQABACAGAAIAAADg");
	this.shape_597.setTransform(146.9,134.1);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAJgKQAKgKAMAAQAJAAAJAIQAHAJAAARIgkAAQAAAMAHAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_598.setTransform(141.6,135.7);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AATAjIgTgxIgRAxIgEAAIgSgwQgEgMgDgDIgGgEIAAgCIAjAAIAAACQgEAAgBACIgBACIACAHIAKAaIAJgaIAAgBQgCgGgCgBIgFgDIAAgCIAiAAIAAACIgFACIgBACIACAHIAKAaIAJgYIACgHQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEgBIAAgCIAVAAIAAACQgDABgCACQgCACgEAJIgTA1g");
	this.shape_599.setTransform(132.7,135.8);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAGAFAEAAQAEAAACgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgDgDQgEgGgBgIQAAgHAGgHQAFgGALAAQAEAAAFACIADACIADgBIADgDIACAAIABAXIgCAAQgFgKgFgEQgFgEgDAAQgEAAgCACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQALAHADAEQAEAFAAAHQAAAFgEAGQgCAFgGADQgFADgGAAQgEAAgIgDg");
	this.shape_600.setTransform(120.7,135.7);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgEAAQgFAAgDgDQgEgDAAgEQAAgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQABAEACACQACACADAAQAEAAADgEIAAgWQgHAFgFAGg");
	this.shape_601.setTransform(114.2,135.6);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgDAAIgBgZIADAAQADAKAGAFQAFAFAFAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgLgIgDgDQgGgGABgIQAAgHAFgHQAGgGAJAAQAFAAAGACIADACIACgBIACgDIADAAIABAXIgCAAQgFgKgFgEQgEgEgFAAQgDAAgBACQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABIABAEQACADAKAHQALAHADAEQAEAFgBAHQAAAFgCAGQgDAFgGADQgEADgHAAQgEAAgIgDg");
	this.shape_602.setTransform(103.6,135.7);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("AgBAYIgIgbIgBgJQAAgFADgDQADgDAEAAQAFAAADADQADADAAAEIgCAKIgHAbg");
	this.shape_603.setTransform(98.6,131.4);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AgMAwQgGgEgFgGQgCgFgDgJQgDgLAAgMQAAgPAEgNQAEgMAIgGQAHgGAIAAQAIAAAIAGQAHAGAEAKQAFAOAAAPQAAAPgEANQgDAIgEAFQgEAFgGADQgFADgGAAQgGAAgGgEgAgFgsQgCADgBAGQgBAHAAAlQAAAWABAHQABAFACACQADABACAAQAEAAACgCQADgEAAgJIAAgfIAAgdQAAgLgDgDQgCgDgEAAQgCAAgDACg");
	this.shape_604.setTransform(92.8,134.1);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AgfAyQAMgDAJgFQAHgGAEgIQAGgIABgKIgHADIgGABQgLAAgIgIQgHgHAAgOQAAgKAEgIQAEgJAHgEQAIgFAIAAQAIAAAIAFQAHAFAFAKQAEAJABAMQAAAPgIAOQgHAPgPAIQgOAJgUABgAgIgqQgCAEAAAMQAAAUAEAHQAEAFAEAAQADAAAEgCIABgOQAAgNgDgMQgCgGgDgDQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgEAAgDAEg");
	this.shape_605.setTransform(85.2,134.1);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQALAAAHAIQAIAJABARIglAAQABAMAGAIQAFAGAGAAQAFAAAEgCQADgDAEgGIADACQgGALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIASAAIAAgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_606.setTransform(74.6,135.7);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_607.setTransform(68.7,134.5);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAWgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAIACABQgEAGgEACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQACACAEAAQAEAAAEgEIAAgWQgJAFgEAGg");
	this.shape_608.setTransform(62.6,135.6);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAACgDQACgBAAgHIAAhGQAAgIgCgCQgCgCgFAAIAAgDIAdAAIAABVQAAAHABACQABACAFAAIAAADg");
	this.shape_609.setTransform(56.6,134.1);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_610.setTransform(476.7,117.1);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFFFFF").s().p("AACAyIAAgDQAEAAACgDQABgCAAgHIAAgfIgBgJIgBgEIgEgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAFAAACgDQABgBAAgIIAAhFQgBgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAEgCQAFgDAFAAQAGAAAFAEQAEAEACAFQABAEAAALIAAAbQAAAIACACQABACAFAAIAAADg");
	this.shape_611.setTransform(469.1,115.5);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_612.setTransform(462.4,115.9);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAEgBACgDQABgBAAgIIAAgdIgBgLIgBgDIgEgBQgFAAgGAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBACgCQABgCAAgIIAAglQgBgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAFADQAEAEABAGIABAQIAAAZQAAAIACACQABACAFABIAAACg");
	this.shape_613.setTransform(452,117);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAADgDQABgBAAgHIAAgnQAAgIgCgCQgBgCgGAAIAAgDIAcAAIAAA2QAAAHACACQABACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_614.setTransform(445.8,115.4);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_615.setTransform(437.4,115.9);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFFFF").s().p("AgVAgQgFgEgBgFQgBgEgBgMIAAgaQABgIgCgCQgCgCgEgBIAAgCIAcAAIAAAuIABAJIACADIADABQABAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAQADgCAEgGIAAgjQAAgIgBgCQgBgCgFgBIAAgCIAcAAIAAA0QgBAIACACQACACAEABIAAACIgcAAIAAgJQgEAGgFADQgEACgHAAQgFAAgFgDg");
	this.shape_616.setTransform(430.7,117.2);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFFFFF").s().p("AgGAxIgIgGIgLAIIgCAAIAAhWIgBgIIgCgDIgGgBIAAgDIAcAAIAAAmQAIgJAKAAQAHAAAHAEQAGAEAEAIQADAHAAAKQAAALgEAJQgFAJgIAFQgHAFgKAAQgEAAgFgCgAgIgFIAAAdIABAMQAAAEAEADQADADACAAQAEAAADgCQACgDADgGQACgGAAgRQAAgOgFgGQgCgEgGAAQgEAAgHAHg");
	this.shape_617.setTransform(422.2,115.6);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFFFFF").s().p("AgVAZQgHgKABgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgIAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_618.setTransform(415,117.1);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgFAAQgOAAgHgMQgGgJAAgOQAAgLAEgIQADgJAHgEQAGgFAJAAQAEAAADACQAEACAEAFIAAgVIAAgJIgDgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgdAGgAgIgMQgEACgBAGQgCAFAAALQAAANACAHQACAGAEADQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgFgLgHAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_619.setTransform(407.5,115.6);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBABgCQACgCAAgJIAAglIAAgHIgDgDIgEgCIAAgCIAcAAIAAAPQAFgKAFgEQAGgDAEAAQAEAAADACQACADAAAEQAAAFgCADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgEACgBAFQgCAHABAHIAAAQIAAAEIAAAGIABADIAHABIAAACg");
	this.shape_620.setTransform(396.5,117);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAAA2QABAHABACQACACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQAEAEgBAEQABAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_621.setTransform(391,115.4);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgPAAgIgLgAgEgbQgFAHAAALIAAADIAUAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_622.setTransform(385.7,117.1);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FFFFFF").s().p("AACAyIAAgDQAEAAACgDQABgCAAgHIAAgfIgBgJIgBgEIgEgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAFAAACgDQABgBAAgIIAAhFQgBgHgBgCQgBgCgFgBIAAgDIAcAAIAAAoQAGgGADgCQAFgDAFAAQAGAAAFAEQAEAEACAFQABAEAAALIAAAbQAAAIACACQABACAFAAIAAADg");
	this.shape_623.setTransform(378.1,115.5);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_624.setTransform(371.4,115.9);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_625.setTransform(361.9,117.1);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FFFFFF").s().p("AAEAyIAAgDIAEgBIABgCIgDgGIgMgUIgFAFIAAAMQAAAIABACQACACAEAAIAAADIgjAAIAAgDQAEAAACgDQABgBABgIIAAhFQgBgHgBgCQgCgCgEgBIAAgDIAcAAIAABBIAPgQIAGgGIABgEQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgHgCIAAgDIAfAAIAAADQgFAAgDACQgDACgKAJIgHAHIAQAXIALAQQADADAEAAIAAADg");
	this.shape_626.setTransform(354.6,115.5);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgEAAgEACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgDgDAAgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgEAGgDACQgEADgFAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_627.setTransform(346.6,117);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_628.setTransform(336.4,117);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgCAAIgCgZIADAAQADAKAGAFQAGAFAEAAQADAAADgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgCgDQgGgGAAgIQAAgHAGgHQAGgGAKAAQAEAAAGACIACACIADgBIADgDIACAAIABAXIgCAAQgFgKgFgEQgFgEgDAAQgDAAgDACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQAKAHAEAEQAEAFAAAHQgBAFgDAGQgCAFgGADQgFADgGAAQgEAAgIgDg");
	this.shape_629.setTransform(323.5,117.1);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBACgCQABgCAAgJIAAglIAAgHIgDgDIgEgCIAAgCIAcAAIAAAPQAGgKAEgEQAGgDAEAAQAEAAADACQACADAAAEQAAAFgCADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgDACgCAFQgBAHAAAHIAAAQIAAAEIAAAGIABADIAGABIAAACg");
	this.shape_630.setTransform(317.4,117);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQAKAAAIAIQAIAJABARIglAAQABAMAGAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_631.setTransform(310.7,117.1);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFFFF").s().p("AAAAjIgYg0IgGgMIgFgDIAAgCIAkAAIAAACQgDAAgCACQAAAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIADAKIALAYIAJgVQADgJAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgCgBgEgBIAAgCIAWAAIAAACQgDABgCACQgCACgEAKIgXA0g");
	this.shape_632.setTransform(303.5,117.2);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAACgCQADgCABgFQACgGAAgVQAAgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_633.setTransform(296,117.1);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_634.setTransform(289,117.1);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgGAAQgMAAgIgMQgGgJAAgOQAAgLADgIQAFgJAGgEQAHgFAHAAQAFAAADACQAEACAEAFIAAgVIgBgJIgCgDIgGgBIAAgEIAdAAIAABOIABAKQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAIAFACIAAACIgdAGgAgJgMQgDACgBAGQgCAFAAALQAAANACAHQACAGADADQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAGAAAFgKIAAgjQgFgLgHAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_635.setTransform(277.8,115.6);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBACgCQABgCAAgJIAAglIAAgHIgCgDIgGgCIAAgCIAcAAIAAAPQAHgKAFgEQAEgDAGAAQAEAAACACQADADAAAEQAAAFgDADQgDADgDAAQgEAAgDgDIgDgDIgCAAIgEACQgCACgCAFQgBAHgBAHIAAAQIAAAEIABAGIACADIAFABIAAACg");
	this.shape_636.setTransform(270.4,117);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgEAAgEACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgDgDAAgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgEAGgDACQgEADgFAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_637.setTransform(263.3,117);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQADACACAAQADAAACgCQADgCABgFQACgGAAgVQAAgMgCgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_638.setTransform(255.6,117.1);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FFFFFF").s().p("AgFAxIgJgGIgLAIIgDAAIAAhWIAAgIIgDgDIgFgBIAAgDIAdAAIAAAmQAHgJALAAQAHAAAFAEQAHAEADAIQAEAHAAAKQAAALgFAJQgEAJgHAFQgIAFgJAAQgFAAgEgCgAgHgFIAAAdIAAAMQABAEADADQACADAEAAQAEAAACgCQACgDACgGQACgGAAgRQAAgOgDgGQgDgEgFAAQgGAAgFAHg");
	this.shape_639.setTransform(247.5,115.6);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FFFFFF").s().p("AgcAvQgEgDAAgFQAAgFADgCQACgDAEAAQAEAAACACQACADAAAFIABADIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQADgDAEgMIACgFIgWgyQgFgMgCgCIgGgEIAAgCIAjAAIAAACIgEABIgBAEQAAACAEAJIAKAbIAIgWQAFgKAAgEQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgBgFgBIAAgCIAXAAIAAACQgDABgCACQgCACgFANIgUAyQgGATgEAEQgFAGgHAAQgHAAgDgDg");
	this.shape_640.setTransform(239.7,118.7);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAJgKQAKgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgHAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_641.setTransform(232.8,117.1);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FFFFFF").s().p("AAFAyIAAgDIADgBIABgCIgDgGIgNgUIgEAFIAAAMQAAAIACACQABACAFAAIAAADIgkAAIAAgDQAEAAACgDQABgBAAgIIAAhFQAAgHgBgCQgCgCgEgBIAAgDIAcAAIAABBIAPgQIAGgGIABgEQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgGgCIAAgDIAfAAIAAADQgEAAgEACQgDACgJAJIgIAHIAQAXIAMAQQACADAEAAIAAADg");
	this.shape_642.setTransform(225.5,115.5);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_643.setTransform(214.8,115.9);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAEgBACgDQABgBAAgIIAAgdIAAgLIgDgDIgDgBQgFAAgGAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAFAAQAHAAAEADQAFAEACAGIABAQIAAAZQAAAIABACQACACAEABIAAACg");
	this.shape_644.setTransform(208.1,117);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAACgCQADgCABgFQACgGAAgVQAAgMgCgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_645.setTransform(200.2,117.1);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBACgCQABgCAAgJIAAglIgBgHIgBgDIgGgCIAAgCIAcAAIAAAPQAGgKAGgEQAEgDAGAAQAEAAACACQACADABAEQgBAFgCADQgCADgEAAQgEAAgDgDIgDgDIgBAAIgFACQgDACgBAFQgCAHAAAHIAAAQIAAAEIABAGIACADIAFABIAAACg");
	this.shape_646.setTransform(193.5,117);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAGgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIAAgDQAAgLAIgHQAHgHANAAQAJAAAEAEQAEADAAAEQAAADgCADQgDACgFAAQgDAAgDgCQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIABgDIAAgCIgBgDIgDgBQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHABACQADACAGAAIAAADg");
	this.shape_647.setTransform(188.3,115.4);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgGAAQgNAAgHgMQgGgJAAgOQAAgLAEgIQAEgJAGgEQAHgFAHAAQAFAAADACQAEACAEAFIAAgVIgBgJIgCgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAIAFACIAAACIgdAGgAgJgMQgDACgBAGQgCAFAAALQAAANACAHQACAGADADQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgGgLgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_648.setTransform(177.2,115.6);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FFFFFF").s().p("AgVAZQgHgKABgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgIAEgJAAQgOAAgHgLgAgEgbQgEAHAAALIAAADIASAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_649.setTransform(169.7,117.1);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FFFFFF").s().p("AgdAjIAAgCQAFgBACgCQABgCAAgJIAAglIgBgHIgBgDIgGgCIAAgCIAcAAIAAAPQAGgKAGgEQAEgDAGAAQAEAAACACQACADABAEQgBAFgCADQgCADgEAAQgEAAgDgDIgDgDIgBAAIgFACQgDACgBAFQgCAHAAAHIAAAQIAAAEIABAGIACADIAFABIAAACg");
	this.shape_650.setTransform(163.4,117);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FFFFFF").s().p("AgVAgQgEgEgCgFQgBgEAAgMIAAgaQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAuIABAJIACADIAEABQAAAAABAAQAAAAAAAAQAAAAABgBQABAAAAAAQADgCAEgGIAAgjQAAgIgBgCQgCgCgEgBIAAgCIAbAAIAAA0QABAIABACQABACAFABIAAACIgcAAIAAgJQgFAGgEADQgEACgGAAQgHAAgEgDg");
	this.shape_651.setTransform(155.7,117.2);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgIgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQACACADAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_652.setTransform(147.8,117.1);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgGAAIAAgDIAcAAIAABVQAAAHACACQABACAFAAIAAADg");
	this.shape_653.setTransform(142,115.5);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FFFFFF").s().p("AgXAZQgIgKAAgPQAAgNAIgLQAJgLAOAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgJgLgAgFgbQgDADAAAIIgBAWIABAPQAAAFADADQADACACAAQADAAACgCQADgCABgFQABgGABgVQgBgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_654.setTransform(136.1,117.1);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_655.setTransform(129.1,117.1);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQAAAMAHAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgIAEgJAAQgNAAgJgLgAgEgbQgEAHAAALIAAADIASAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_656.setTransform(118.8,117.1);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAACgDQACgBAAgHIAAhGQAAgIgCgCQgCgCgFAAIAAgDIAdAAIAABVQAAAHABACQABACAFAAIAAADg");
	this.shape_657.setTransform(113.3,115.5);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FFFFFF").s().p("AgGAxIgIgGIgLAIIgDAAIAAhWIAAgIIgCgDIgGgBIAAgDIAcAAIAAAmQAIgJAKAAQAHAAAHAEQAGAEAEAIQADAHAAAKQAAALgEAJQgFAJgIAFQgHAFgJAAQgFAAgFgCgAgIgFIAAAdIABAMQAAAEAEADQACADADAAQAEAAADgCQADgDACgGQACgGAAgRQAAgOgFgGQgDgEgEAAQgFAAgHAHg");
	this.shape_658.setTransform(106.8,115.6);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgFAAgDACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgFAAQgEAAgDgDQgEgDABgEQgBgFAFgFQAEgFAIgCQAHgDAHAAQAJAAAGAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBABAAIACABQgEAGgEACQgEADgFAAQgFAAgEgDgAgJAIQgDADABAEQAAAEABACQACACAEAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_659.setTransform(99.3,117);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAFgBACgCQABgCAAgHIAAhHQAAgHgBgCQgCgCgFgBIAAgCIAcAAIAAAJQAEgFAEgDQAEgDAGAAQAIAAAHAEQAGAFADAJQADAIAAAKQAAAKgDAIQgEAIgGAFQgHAEgHAAQgGAAgEgCQgEgCgEgFIAAAaQAAAFABACIADADIAGABIAAACgAgIgfIAAAkQAHAJAGAAQAEAAACgEQAFgGAAgRQgBgSgEgGQgCgEgGAAQgGAAgFAKg");
	this.shape_660.setTransform(91,118.6);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAFgBACgCQABgCAAgHIAAhHQAAgHgBgCQgCgCgFgBIAAgCIAcAAIAAAJQAEgFAEgDQAEgDAGAAQAIAAAGAEQAGAFADAJQAEAIAAAKQAAAKgEAIQgDAIgGAFQgHAEgHAAQgGAAgEgCQgDgCgFgFIAAAaQAAAFABACIADADIAGABIAAACgAgIgfIAAAkQAHAJAGAAQAEAAADgEQAEgGAAgRQgBgSgEgGQgCgEgFAAQgGAAgGAKg");
	this.shape_661.setTransform(82.6,118.6);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgFAAQgEAAgDgDQgDgDAAgEQAAgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQAAAAABAAQAAgBABAAQAAgBABAAIACABQgDAGgFACQgDADgGAAQgGAAgDgDgAgJAIQgCADgBAEQAAAEACACQACACAEAAQAEAAAEgEIAAgWQgJAFgEAGg");
	this.shape_662.setTransform(75.1,117);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FFFFFF").s().p("AATAjIgTgxIgRAxIgEAAIgSgwQgFgMgCgDIgGgEIAAgCIAjAAIAAACQgEAAgBACIgCACIADAHIAKAaIAKgaIgBgBQgCgGgCgBIgFgDIAAgCIAiAAIAAACIgFACIgBACIACAHIAJAaIAJgYIACgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBgBgEgBIAAgCIAUAAIAAACQgEABgCACQgBACgDAJIgUA1g");
	this.shape_663.setTransform(65.7,117.2);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAFAFAFAAQAEAAACgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgDgDQgEgGAAgIQgBgHAGgHQAFgGAKAAQAFAAAFACIAEACIACgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgFgEgEAAQgCAAgCACQgBABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQALAHADAEQADAFABAHQAAAFgDAGQgDAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_664.setTransform(57.4,117.1);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_665.setTransform(221.7,82.3);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgGAAIAAgDIAdAAIAABVQAAAHABACQABACAGAAIAAADg");
	this.shape_666.setTransform(217.8,78.3);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgCgCIgCgEQgCgBgDAAQgEAAgEACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgEgDABgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIACABQgEAGgEACQgEADgFAAQgFAAgEgDgAgJAIQgDADABAEQAAAEACACQACACADAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_667.setTransform(212.1,79.8);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAAA2QABAHABACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEgBAEQABAFgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_668.setTransform(206.2,78.2);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBACgCQABgCAAgJIAAglIAAgHIgDgDIgEgCIAAgCIAbAAIAAAPQAHgKAEgEQAGgDAEAAQAEAAADACQACADAAAEQAAAFgCADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgDACgCAFQgBAHgBAHIAAAQIAAAEIABAGIABADIAGABIAAACg");
	this.shape_669.setTransform(200.9,79.8);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQAKAAAIAIQAIAJABARIglAAQABAMAGAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_670.setTransform(194.2,79.9);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgEAAQgFAAgDgDQgEgDAAgEQAAgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_671.setTransform(187.2,79.8);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAABVQAAAHACACQACACAEAAIAAADg");
	this.shape_672.setTransform(177.5,78.3);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgEAAQgFAAgDgDQgEgDAAgEQAAgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQABAEACACQACACADAAQAEAAADgEIAAgWQgHAFgFAGg");
	this.shape_673.setTransform(171.8,79.8);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAEgBACgDQABgBAAgIIAAgdIAAgLIgCgDIgEgBQgFAAgGAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAFAAQAHAAAEADQAFAEACAGIAAAQIAAAZQABAIABACQACACAEABIAAACg");
	this.shape_674.setTransform(163.7,79.8);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBACgCQABgCAAgJIAAglIAAgHIgDgDIgEgCIAAgCIAbAAIAAAPQAHgKAEgEQAGgDAEAAQAEAAADACQACADAAAEQAAAFgCADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgDACgCAFQgBAHgBAHIAAAQIAAAEIABAGIABADIAHABIAAACg");
	this.shape_675.setTransform(156.3,79.8);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQAKAAAIAIQAIAJABARIglAAQABAMAGAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_676.setTransform(149.6,79.9);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_677.setTransform(143.7,78.7);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FFFFFF").s().p("AgDAiIAAgCIAFgCIABgCIgCgGIgGgLIgEAHIgEAGIgBADIABACIACACIAEABIAAACIgaAAIAAgCQAFAAAEgDQAEgDAHgMIAGgIIgLgVIgJgNQgDgCgDgBIAAgCIAkAAIAAACIgBABIgEABIAAACIAAACIACAEIAFAKIADgEQAFgIAAgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgEgCIAAgCIAYAAIAAACQgFABgEACQgDADgGAHIgGALIAMAWQAFAMAEADIAGACIAAACg");
	this.shape_678.setTransform(137.5,79.9);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQAAAMAHAIQAFAGAGAAQAFAAAEgCQADgDAEgGIACACQgFALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgEAHAAALIAAADIASAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_679.setTransform(130.5,79.9);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAEgBACgDQABgBAAgIIAAgdIAAgLIgCgDIgEgBQgFAAgGAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAFAAQAHAAAEADQAFAEABAGIABAQIAAAZQABAIABACQACACAEABIAAACg");
	this.shape_680.setTransform(119.1,79.8);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAWgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAHgCQAIgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQAAAEADACQABACAEAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_681.setTransform(111.4,79.8);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_682.setTransform(101.2,78.7);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FFFFFF").s().p("AgVAgQgFgEgBgFQgBgEAAgMIAAgaQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAuIABAJIACADIAEABQAAAAABAAQAAAAAAAAQAAAAABgBQABAAAAAAQADgCAEgGIAAgjQAAgIgBgCQgCgCgEgBIAAgCIAbAAIAAA0QABAIABACQABACAFABIAAACIgcAAIAAgJQgFAGgEADQgEACgGAAQgHAAgEgDg");
	this.shape_683.setTransform(94.5,80);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgIgLgAgFgbQgDADgBAIIAAAWIAAAPQABAFADADQACACADAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_684.setTransform(86.6,79.9);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIgBgJIgCgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQABADAFAAIAAADIgjAAIAAgDQAEAAACgDQABgBAAgIIAAhFQABgHgCgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAFgCQAEgDAFAAQAHAAAEAEQAFAEABAFQACAEAAALIAAAbQAAAIABACQACACAEAAIAAADg");
	this.shape_685.setTransform(78.7,78.3);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_686.setTransform(72,78.7);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAAA2QABAHABACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQAEAEgBAEQABAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_687.setTransform(67.5,78.2);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FFFFFF").s().p("AATAjIgTgxIgRAxIgEAAIgSgwQgFgMgCgDIgGgEIAAgCIAjAAIAAACQgDAAgCACIgBACIACAHIAKAaIAJgaIAAgBQgCgGgCgBIgFgDIAAgCIAiAAIAAACIgFACIgBACIACAHIAKAaIAJgYIACgHQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEgBIAAgCIAVAAIAAACQgDABgCACQgDACgDAJIgTA1g");
	this.shape_688.setTransform(59.9,80);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAJgKQAKgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgHAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_689.setTransform(473.1,61.3);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_690.setTransform(466.4,61.3);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAAA2QgBAHACACQABACAGAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgDAAgEgEg");
	this.shape_691.setTransform(461,59.6);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FFFFFF").s().p("AgBAjIgXg0IgGgMIgFgDIAAgCIAjAAIAAACQgCAAgBACQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIADAKIAKAYIAJgVQAEgJAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgBgBgEgBIAAgCIAWAAIAAACQgDABgCACQgCACgEAKIgXA0g");
	this.shape_692.setTransform(455.1,61.4);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAAEgCQADgDAEgGIACACQgFALgGAFQgIAEgJAAQgNAAgJgLgAgEgbQgEAHAAALIAAADIASAAIAAgRQgCgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_693.setTransform(448.2,61.3);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgGAAQgNAAgHgMQgGgJAAgOQAAgLAEgIQADgJAHgEQAGgFAJAAQAEAAADACQAEACAEAFIAAgVIgBgJIgCgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgdAGgAgIgMQgEACgBAGQgCAFAAALQAAANACAHQACAGAEADQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAGAAAFgKIAAgjQgFgLgHAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_694.setTransform(440.7,59.8);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_695.setTransform(430.2,60.1);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgDAAgBAEIgCAAIgCgZIADAAQADAKAGAFQAGAFAEAAQADAAADgCQACgDAAgDQAAgDgCgDIgJgHQgMgIgCgDQgGgGAAgIQAAgHAGgHQAGgGAKAAQAEAAAGACIACACIADgBIADgDIACAAIABAXIgCAAQgFgKgFgEQgFgEgDAAQgDAAgDACQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQAKAHAEAEQAEAFAAAHQgBAFgDAGQgCAFgGADQgFADgGAAQgEAAgIgDg");
	this.shape_696.setTransform(424.8,61.3);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FFFFFF").s().p("AgcAjIAAgCQAEgBACgCQABgCAAgJIAAglIAAgHIgDgDIgEgCIAAgCIAcAAIAAAPQAGgKAEgEQAGgDAEAAQAEAAADACQACADAAAEQAAAFgCADQgDADgDAAQgDAAgDgDIgEgDIgCAAIgDACQgDACgCAFQgBAHAAAHIAAAQIAAAEIAAAGIABADIAGABIAAACg");
	this.shape_697.setTransform(418.7,61.2);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAAA2QABAHABACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEgBAEQABAFgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_698.setTransform(413.2,59.6);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAHgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIgBgDQABgLAHgHQAIgHAMAAQAKAAAEAEQAEADAAAEQAAADgDADQgDACgEAAQgDAAgDgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgDIAAgCIAAgDIgDgBQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQgCACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHACACQACACAGAAIAAADg");
	this.shape_699.setTransform(409.3,59.6);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAADgCQAEgDAEgGIADACQgGALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgFAHAAALIAAADIAUAAIgCgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_700.setTransform(399.1,61.3);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FFFFFF").s().p("AACAyIAAgDQAEAAACgDQABgCAAgHIAAgfIAAgJIgCgEIgEgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAEAAADgDQABgBAAgIIAAhFQAAgHgCgCQgBgCgFgBIAAgDIAcAAIAAAoQAGgGADgCQAFgDAFAAQAHAAAEAEQAEAEACAFQACAEgBALIAAAbQABAIABACQABACAFAAIAAADg");
	this.shape_701.setTransform(391.5,59.7);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_702.setTransform(384.8,60.1);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FFFFFF").s().p("AgLAhIgDgBQgCAAgCAEIgCAAIgBgZIACAAQADAKAGAFQAFAFAFAAQADAAACgCQADgDAAgDQAAgDgDgDIgIgHQgLgIgEgDQgEgGAAgIQgBgHAGgHQAFgGAKAAQAFAAAFACIAEACIACgBIACgDIADAAIABAXIgDAAQgEgKgFgEQgFgEgEAAQgCAAgCACQgBABAAAAQgBABAAAAQAAABAAABQgBAAAAABIACAEQACADAKAHQAKAHAEAEQADAFABAHQgBAFgCAGQgDAFgFADQgGADgGAAQgEAAgIgDg");
	this.shape_703.setTransform(375.7,61.3);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgCgCIgCgEQgCgBgDAAQgEAAgEACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgEgDABgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIACABQgEAGgEACQgEADgFAAQgFAAgEgDgAgJAIQgDADABAEQAAAEACACQABACAEAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_704.setTransform(369.2,61.2);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#FFFFFF").s().p("AATAjIgTgxIgRAxIgEAAIgSgwQgFgMgCgDIgGgEIAAgCIAjAAIAAACQgDAAgCACIgCACIADAHIAKAaIAJgaIAAgBQgCgGgCgBIgFgDIAAgCIAiAAIAAACIgFACIgBACIACAHIAKAaIAJgYIABgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBgBgFgBIAAgCIAVAAIAAACQgDABgCACQgCACgEAJIgTA1g");
	this.shape_705.setTransform(359.8,61.4);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_706.setTransform(348.2,60.1);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgGAAIAAgDIAcAAIAAA2QAAAHACACQABACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_707.setTransform(343.6,59.6);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FFFFFF").s().p("AgKAVQAIgEADgFQAEgGAAgGIgBgBIgBgBIgBAAQgCACgCAAQgFAAgDgEQgDgDAAgFQAAgEAEgEQADgDAGAAQAFAAAEAEQAFAGAAAIQAAAJgGAJQgHAIgLADg");
	this.shape_708.setTransform(335.8,64.9);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAJAAAJAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgPAAgIgLgAgEgbQgFAHAAALIAAADIAUAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_709.setTransform(330.8,61.3);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAABVQABAHABACQACACAEAAIAAADg");
	this.shape_710.setTransform(325.3,59.7);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FFFFFF").s().p("AgGAxIgIgGIgLAIIgCAAIAAhWIgBgIIgDgDIgFgBIAAgDIAdAAIAAAmQAHgJALAAQAGAAAGAEQAHAEADAIQAEAHAAAKQAAALgFAJQgEAJgHAFQgIAFgKAAQgEAAgFgCgAgHgFIAAAdIAAAMQAAAEADADQADADADAAQAEAAADgCQACgDACgGQACgGAAgRQAAgOgEgGQgDgEgFAAQgEAAgGAHg");
	this.shape_711.setTransform(318.8,59.8);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgEAAQgFAAgDgDQgEgDAAgEQAAgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQABAEACACQACACADAAQAEAAADgEIAAgWQgHAFgFAGg");
	this.shape_712.setTransform(311.3,61.2);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQABACAGAAIAAADg");
	this.shape_713.setTransform(305.3,59.7);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAACgDQACgBAAgHIAAgnQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAAA2QgBAHACACQACACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEABAEQgBAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_714.setTransform(301.2,59.6);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgFAAgDACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgFAAQgEAAgDgDQgEgDABgEQgBgFAFgFQAEgFAIgCQAHgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBABAAIACABQgEAGgEACQgEADgFAAQgFAAgEgDgAgJAIQgDADABAEQAAAEABACQACACAEAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_715.setTransform(295.5,61.2);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FFFFFF").s().p("AAAAjIgYg0IgGgMIgFgDIAAgCIAkAAIAAACQgDAAgCACQAAAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIADAKIALAYIAJgVQADgJAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgCgBgEgBIAAgCIAWAAIAAACQgDABgCACQgCACgEAKIgXA0g");
	this.shape_716.setTransform(287.8,61.4);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#FFFFFF").s().p("AAHAhQgDgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIAAgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQABgBAAAAIACABQgDAGgFACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQADACADAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_717.setTransform(280.5,61.2);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAKAAAIAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgPAAgIgLgAgEgbQgFAHAAALIAAADIAUAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_718.setTransform(269.6,61.3);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_719.setTransform(259.9,61.2);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgEAAQgFAAgDgDQgEgDAAgEQAAgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgDADAAAEQABAEACACQACACADAAQAEAAADgEIAAgWQgHAFgFAGg");
	this.shape_720.setTransform(250.1,61.2);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_721.setTransform(242.9,61.3);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAKAAAIAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgPAAgIgLgAgEgbQgFAHAAALIAAADIAUAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_722.setTransform(236.3,61.3);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FFFFFF").s().p("AgGAxIgIgGIgLAIIgCAAIAAhWIgBgIIgDgDIgFgBIAAgDIAdAAIAAAmQAHgJALAAQAHAAAFAEQAHAEAEAIQADAHAAAKQAAALgFAJQgEAJgIAFQgHAFgKAAQgEAAgFgCgAgHgFIAAAdIAAAMQAAAEADADQAEADACAAQAEAAADgCQADgDABgGQACgGABgRQgBgOgEgGQgCgEgGAAQgFAAgFAHg");
	this.shape_723.setTransform(228.5,59.8);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FFFFFF").s().p("AgcAvQgEgDAAgFQAAgFADgCQACgDAEAAQAEAAACACQACADAAAFIABADIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQADgDAEgMIACgFIgWgyQgFgMgCgCIgGgEIAAgCIAjAAIAAACIgEABIgBAEQAAACAEAJIAKAbIAIgWQAFgKAAgEQAAgBAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgFgBIAAgCIAXAAIAAACQgDABgCACQgCACgFANIgUAyQgGATgEAEQgFAGgHAAQgHAAgDgDg");
	this.shape_724.setTransform(216.9,62.9);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#FFFFFF").s().p("AAIAoQgFAGgDADQgEACgGAAQgNAAgHgMQgGgJAAgOQAAgLAEgIQAEgJAGgEQAHgFAHAAQAFAAADACQAEACAEAFIAAgVIgBgJIgCgDIgGgBIAAgEIAeAAIAABOIAAAKQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAIAFACIAAACIgdAGgAgJgMQgDACgBAGQgCAFAAALQAAANACAHQACAGADADQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAFAAAGgKIAAgjQgGgLgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_725.setTransform(209.2,59.8);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FFFFFF").s().p("AADAjIAAgCQAEgBABgDQABgBAAgIIAAgdIgBgLIgCgDIgDgBQgGAAgFAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQABgIgCgCQgCgCgEgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAGAAQAGAAAEADQAFAEACAGIABAQIAAAZQgBAIACACQACACAEABIAAACg");
	this.shape_726.setTransform(200.7,61.2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgFAAQgEAAgDgDQgDgDAAgEQAAgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQAAAAABAAQAAgBABAAQAAgBABAAIACABQgDAGgFACQgDADgGAAQgGAAgDgDgAgJAIQgCADgBAEQABAEABACQACACAEAAQAEAAAEgEIAAgWQgJAFgEAGg");
	this.shape_727.setTransform(193,61.2);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FFFFFF").s().p("AADAyIAAgDIAEAAQAEAAADgBIADgEIAAgJIAAgfIgiAAIAAAfQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABAEAAIAEAAIAAADIg0AAIAAgDIADAAQAEAAADgBIADgEIAAgJIAAhBIAAgJIgEgDQgCgCgEAAIgDAAIAAgDIA0AAIAAADIgEAAQgEAAgCACQgBAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAQgBACAAAHIAAAdIAiAAIAAgdIAAgJIgDgDQgDgCgEAAIgEAAIAAgDIA0AAIAAADIgDAAQgEAAgDACQAAAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAQgBACAAAHIAABBQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIADAAIAAADg");
	this.shape_728.setTransform(183.2,59.7);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAABVQABAHABACQACACAFAAIAAADg");
	this.shape_729.setTransform(175.4,59.7);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FFFFFF").s().p("AAHAhQgDgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAWgKIAAgGQAAgIgBgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgFAAQgEAAgDgDQgDgDAAgEQAAgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAIACABQgEAGgEACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQACACAEAAQAEAAAEgEIAAgWQgJAFgEAGg");
	this.shape_730.setTransform(169.7,61.2);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FFFFFF").s().p("AgFAxIgJgGIgLAIIgDAAIAAhWIAAgIIgCgDIgGgBIAAgDIAcAAIAAAmQAIgJAKAAQAHAAAHAEQAGAEADAIQAEAHAAAKQAAALgEAJQgFAJgHAFQgIAFgJAAQgFAAgEgCgAgIgFIAAAdIABAMQABAEADADQACADAEAAQAEAAACgCQADgDACgGQABgGAAgRQAAgOgDgGQgEgEgEAAQgGAAgGAHg");
	this.shape_731.setTransform(161.4,59.8);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgOAAgIgLgAgFgbQgDADgBAIIAAAWIAAAPQABAFADADQACACADAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgDAAgCADg");
	this.shape_732.setTransform(153.6,61.3);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#FFFFFF").s().p("AgtAyIAAgDIADAAQAFAAACgBIADgEQABgCAAgHIAAhBQAAgHgBgCIgDgDQgCgCgFAAIgDAAIAAgDIA0AAIAAADIgEAAQgEAAgCACQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBACAAAHIAAA/QAAAHABACIADAEIAIAAIAIAAQAIAAAGgDQAFgCAEgGQAEgGADgMIADAAIgEAjg");
	this.shape_733.setTransform(144.7,59.7);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FFFFFF").s().p("AgUAwQgKgEgHgGQgHgGgEgIQgGgKAAgNQABgWAQgPQAPgPAXAAIAOABIAKADIAJADQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBACgEIACAAIAAAjIgCAAQgGgPgJgHQgLgIgLAAQgKABgHAGQgIAGgDAMQgDALAAAKQAAAOADALQAEALAIAFQAHAGAJAAIAHgCIAIgCIAAgUIgBgIIgDgDQgDgBgDAAIgCAAIAAgDIAvAAIAAADIgHABQgCABgCADIAAAHIAAAUQgJAFgLACQgKACgLAAQgOAAgIgEg");
	this.shape_734.setTransform(134.3,59.8);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKAMAAQAJAAAIAIQAIAJABARIglAAQABAMAGAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgGAFQgIAEgIAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_735.setTransform(121.3,61.3);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIgBgJIgCgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQABADAFAAIAAADIgjAAIAAgDQAFAAACgDQABgBgBgIIAAhFQAAgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAFgGAEgCQAFgDAFAAQAGAAAFAEQAFAEABAFQACAEAAALIAAAbQAAAIABACQACACAEAAIAAADg");
	this.shape_736.setTransform(113.7,59.7);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_737.setTransform(107,60.1);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FFFFFF").s().p("AgLAzIAahRIgTAAQgMAAgGADQgFACgCAGIgDAAIAHgfIA6AAIghBlg");
	this.shape_738.setTransform(97,59.8);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#FFFFFF").s().p("AggAyQANgDAJgFQAIgGADgIQAFgIADgKIgIADIgGABQgLAAgIgIQgHgHAAgOQAAgKAEgIQAEgJAHgEQAIgFAIAAQAIAAAIAFQAHAFAFAKQAFAJgBAMQABAPgIAOQgHAPgPAIQgOAJgVABgAgHgqQgDAEAAAMQAAAUAEAHQAEAFAEAAQADAAAFgCIAAgOQAAgNgCgMQgCgGgEgDQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgFAAgBAEg");
	this.shape_739.setTransform(89.4,59.7);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FFFFFF").s().p("AgfAyQAMgDAIgFQAIgGAFgIQAEgIACgKIgHADIgGABQgLAAgHgIQgIgHAAgOQAAgKAEgIQAEgJAIgEQAHgFAIAAQAIAAAHAFQAJAFAEAKQAEAJAAAMQAAAPgHAOQgIAPgOAIQgOAJgUABgAgHgqQgDAEAAAMQAAAUAFAHQADAFAEAAQADAAAFgCIABgOQAAgNgEgMQgCgGgDgDQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAgBAAQgDAAgCAEg");
	this.shape_740.setTransform(81.9,59.7);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#FFFFFF").s().p("AgZAzIAAgDIADAAQAGAAADgBQADgCABgCIABgMIAAgzIgBgIIgCgDIgEgCQgEAAgGADIgBgDIAkgRIACAAIAABRIABALQABADACABQADACAFAAIADAAIAAADg");
	this.shape_741.setTransform(74.4,59.6);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FFFFFF").s().p("AADAjIAAgCQAEgBABgDQABgBAAgIIAAgdIgBgLIgBgDIgEgBQgFAAgGAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBACgCQAAgCAAgIIAAglQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAGAAQAGAAAFADQAEAEABAGQACAEAAAMIAAAZQAAAIABACQACACAEABIAAACg");
	this.shape_742.setTransform(62.8,61.2);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAACgDQACgBAAgHIAAgnQAAgIgCgCQgCgCgFAAIAAgDIAdAAIAAA2QAAAHABACQABACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_743.setTransform(56.6,59.6);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_744.setTransform(420.3,45.1);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_745.setTransform(415.2,42.7);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgEAAIAAgDIAcAAIAAA2QAAAHABACQACACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgDAAgEgEg");
	this.shape_746.setTransform(409.8,41);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgFAAIAAgDIAcAAIAABVQgBAHACACQABACAGAAIAAADg");
	this.shape_747.setTransform(405.7,41.1);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FFFFFF").s().p("AgFAxIgJgGIgLAIIgDAAIAAhWIAAgIIgCgDIgGgBIAAgDIAdAAIAAAmQAHgJALAAQAHAAAFAEQAHAEADAIQAEAHAAAKQAAALgFAJQgEAJgHAFQgIAFgJAAQgFAAgEgCgAgHgFIAAAdIAAAMQABAEACADQADADAEAAQAEAAACgCQACgDADgGQABgGAAgRQAAgOgDgGQgDgEgFAAQgGAAgFAHg");
	this.shape_748.setTransform(399.2,41.2);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FFFFFF").s().p("AgVAgQgEgEgCgFQgBgEgBgMIAAgaQABgIgCgCQgCgCgEgBIAAgCIAcAAIAAAuIABAJIACADIADABQABAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAQADgCAEgGIAAgjQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAA0QAAAIABACQABACAFABIAAACIgcAAIAAgJQgEAGgFADQgEACgHAAQgFAAgFgDg");
	this.shape_749.setTransform(391,42.8);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FFFFFF").s().p("AgkAzIAAgCQAEgBADgCQABgCAAgHIAAhHQAAgHgBgCQgDgCgEgBIAAgCIAdAAIAAAJQADgFAEgDQAEgDAGAAQAIAAAHAEQAFAFAEAJQADAIAAAKQAAAKgDAIQgEAIgGAFQgGAEgIAAQgGAAgEgCQgDgCgEgFIAAAaQAAAFAAACIADADIAGABIAAACgAgHgfIAAAkQAGAJAGAAQAEAAACgEQAFgGAAgRQAAgSgFgGQgDgEgFAAQgGAAgEAKg");
	this.shape_750.setTransform(382.5,44.2);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FFFFFF").s().p("AgVAZQgHgKAAgOQAAgQAJgKQAKgKAMAAQAJAAAJAIQAHAJAAARIgkAAQAAAMAHAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgHAFQgGAEgKAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_751.setTransform(371.5,42.7);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FFFFFF").s().p("AACAyIAAgDQAEAAACgDQABgCAAgHIAAgfIAAgJIgCgEIgEgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAFAAABgDQABgBABgIIAAhFQAAgHgCgCQgBgCgFgBIAAgDIAcAAIAAAoQAGgGADgCQAFgDAFAAQAGAAAFAEQAEAEACAFQACAEgBALIAAAbQABAIABACQACACAEAAIAAADg");
	this.shape_752.setTransform(363.9,41.1);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_753.setTransform(357.3,41.5);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQADACACAAQADAAADgCQACgCABgFQABgGAAgVQAAgMgBgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_754.setTransform(347.2,42.7);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_755.setTransform(341,41.5);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQALAAAHAIQAIAJABARIglAAQABAMAGAIQAEAGAHAAQAFAAAEgCQADgDAEgGIADACQgGALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIASAAIAAgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_756.setTransform(331.5,42.7);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgGAAIAAgDIAcAAIAABVQAAAHACACQABACAFAAIAAADg");
	this.shape_757.setTransform(326.1,41.1);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FFFFFF").s().p("AgGAxIgIgGIgLAIIgCAAIAAhWIgBgIIgCgDIgGgBIAAgDIAcAAIAAAmQAIgJAKAAQAHAAAHAEQAGAEAEAIQADAHAAAKQAAALgEAJQgFAJgIAFQgHAFgKAAQgEAAgFgCgAgIgFIAAAdIABAMQAAAEAEADQADADACAAQAEAAADgCQACgDADgGQACgGAAgRQAAgOgFgGQgCgEgGAAQgEAAgHAHg");
	this.shape_758.setTransform(319.6,41.2);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FFFFFF").s().p("AAIAhQgEgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgCgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgEgDABgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIACABQgEAGgEACQgEADgFAAQgFAAgDgDgAgJAIQgDADABAEQAAAEABACQADACADAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_759.setTransform(312,42.6);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAABVQABAHABACQACACAEAAIAAADg");
	this.shape_760.setTransform(306.1,41.1);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAAA2QABAHABACQACACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQAEAEgBAEQABAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_761.setTransform(301.9,41);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FFFFFF").s().p("AAHAhQgDgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIAAgCIgDgEQgCgBgDAAQgEAAgEACIgBADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgFAAQgEAAgDgDQgDgDgBgEQABgFAEgFQAEgFAIgCQAHgDAHAAQAKAAAFAEQAGAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQAAAAABAAQAAgBABAAQABgBAAAAIACABQgDAGgFACQgDADgGAAQgFAAgEgDgAgJAIQgCADgBAEQAAAEACACQADACADAAQAEAAADgEIAAgWQgIAFgEAGg");
	this.shape_762.setTransform(296.2,42.6);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FFFFFF").s().p("AAAAjIgYg0IgGgMIgFgDIAAgCIAjAAIAAACQgCAAgBACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIADAKIALAYIAJgVQADgJAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBgBgEgBIAAgCIAWAAIAAACQgDABgCACQgCACgEAKIgXA0g");
	this.shape_763.setTransform(288.5,42.8);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQADADAAADQAAADgDADQgCADgEAAQgFAAgDgDQgEgDAAgEQAAgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQAAAAABAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgDAGgEACQgFADgEAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_764.setTransform(281.2,42.6);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAHAAQAEAAAEgCQADgDAEgGIACACQgFALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_765.setTransform(270.3,42.7);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_766.setTransform(260.7,42.6);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#FFFFFF").s().p("AAIAhQgEgDAAgFQgMALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAGgGAXgKIAAgGQAAgIgCgCIgCgEQgCgBgDAAQgFAAgDACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgEgDABgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIACABQgEAGgDACQgFADgFAAQgFAAgDgDgAgJAIQgDADABAEQAAAEABACQADACADAAQADAAAFgEIAAgWQgJAFgEAGg");
	this.shape_767.setTransform(250.8,42.6);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#FFFFFF").s().p("AgTAaQgJgKAAgPQAAgNAIgKQAJgNAPAAQAKAAAHAFQAGAFAAAHQAAAEgDADQgCACgEAAQgFAAgCgDQgDgDgBgHQAAgEgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDAEQgEAFAAAMQAAAJADAIQADAJAFAFQAEADAFAAQAEAAADgCIAIgGIACABQgFAJgHAFQgHAEgIAAQgNAAgIgKg");
	this.shape_768.setTransform(243.6,42.7);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#FFFFFF").s().p("AgWAZQgFgKAAgOQAAgQAJgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAHAAQAEAAAEgCQADgDAEgGIACACQgFALgGAFQgHAEgJAAQgOAAgJgLgAgEgbQgFAHABALIAAADIATAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_769.setTransform(237,42.7);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FFFFFF").s().p("AgGAxIgIgGIgLAIIgDAAIAAhWIAAgIIgCgDIgGgBIAAgDIAcAAIAAAmQAIgJAKAAQAHAAAHAEQAGAEAEAIQADAHAAAKQAAALgEAJQgFAJgIAFQgHAFgJAAQgFAAgFgCgAgIgFIAAAdIABAMQAAAEAEADQACADADAAQAEAAADgCQADgDACgGQACgGAAgRQAAgOgFgGQgDgEgEAAQgFAAgHAHg");
	this.shape_770.setTransform(229.2,41.2);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#FFFFFF").s().p("AgcAvQgEgEAAgFQAAgEADgDQACgCAEAAQAEgBACADQACADAAAEIABAEIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQADgDAEgKIACgGIgWgyQgFgLgCgDIgGgEIAAgDIAjAAIAAADIgEACIgBADQAAADAEAHIAKAbIAIgUQAFgMAAgEQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgBgFgBIAAgDIAXAAIAAADQgDABgCACQgCACgFANIgUAyQgGATgEAEQgFAHgHgBQgHABgDgEg");
	this.shape_771.setTransform(217.7,44.3);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAACgDQACgBAAgHIAAhGQAAgIgCgCQgBgCgGAAIAAgDIAdAAIAABVQAAAHABACQABACAGAAIAAADg");
	this.shape_772.setTransform(212,41.1);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#FFFFFF").s().p("AgSAyIAAgDQAFAAACgDQACgBAAgHIAAhGQAAgIgCgCQgCgCgFAAIAAgDIAdAAIAABVQAAAHABACQABACAFAAIAAADg");
	this.shape_773.setTransform(207.8,41.1);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FFFFFF").s().p("AAIAhQgEgDgBgFQgLALgKAAQgGAAgEgEQgEgEAAgGQAAgIAHgGQAHgGAVgKIAAgGQAAgIgBgCIgCgEQgCgBgDAAQgEAAgEACIgCADQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACADAAADQAAADgCADQgDADgEAAQgFAAgDgDQgDgDAAgEQgBgFAFgFQAEgFAHgCQAIgDAHAAQAJAAAHAEQAFAEACAFQABADAAALIAAAaIAAAGIABACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIACABQgEAGgDACQgEADgFAAQgHAAgCgDgAgJAIQgCADAAAEQAAAEACACQACACADAAQADAAAEgEIAAgWQgHAFgFAGg");
	this.shape_774.setTransform(202.1,42.6);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#FFFFFF").s().p("AACAjIAAgCQAFgBABgDQABgBAAgIIAAgdIgBgLIgBgDIgEgBQgGAAgFAJIAAAjQAAAIABACQACACAEABIAAACIgjAAIAAgCQAFgBACgCQABgCAAgIIAAglQgBgIgBgCQgBgCgFgBIAAgCIAcAAIAAAJQAFgGAEgDQAFgCAFAAQAHAAAFADQAEAEABAGIABAQIAAAZQAAAIACACQABACAFABIAAACg");
	this.shape_775.setTransform(194,42.6);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#FFFFFF").s().p("AgSAzIAAgDQAFAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgFAAIAAgDIAcAAIAAA2QAAAHACACQACACAEAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEQAAAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_776.setTransform(187.8,41);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#FFFFFF").s().p("AgbAzIAAgDIAHgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgBAAgGIAAgvIgKAAIAAgHIAKAAIAAgFIgBgDQABgLAHgHQAIgHANAAQAIAAAFAEQAEADAAAEQAAADgDADQgDACgEAAQgDAAgDgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIABgDIAAgCIgBgDIgDgBQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQgCACAAAEIAAANIAAAIIAKAAIAAAHIgKAAIAAAvQAAAHACACQACACAGAAIAAADg");
	this.shape_777.setTransform(184,41);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#FFFFFF").s().p("AgWAZQgFgKgBgOQABgQAIgKQAKgKAMAAQAKAAAIAIQAHAJABARIglAAQAAAMAHAIQAEAGAIAAQAEAAAEgCQADgDAEgGIADACQgGALgHAFQgHAEgIAAQgPAAgIgLgAgEgbQgFAHAAALIAAADIAUAAIgBgRQgCgEgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDAEg");
	this.shape_778.setTransform(173.7,42.7);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#FFFFFF").s().p("AgRAyIAAgDQAEAAADgDQABgBAAgHIAAhGQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAABVQABAHABACQACACAEAAIAAADg");
	this.shape_779.setTransform(168.3,41.1);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#FFFFFF").s().p("AgRAzIAAgDQAEAAADgDQABgBAAgHIAAgnQAAgIgCgCQgCgCgEAAIAAgDIAbAAIAAA2QABAHABACQACACAFAAIAAADgAgHgfQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgDAAgEgEg");
	this.shape_780.setTransform(164.1,41);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#FFFFFF").s().p("AgFAxIgJgGIgLAIIgDAAIAAhWIAAgIIgDgDIgFgBIAAgDIAdAAIAAAmQAHgJALAAQAGAAAGAEQAHAEADAIQAEAHAAAKQAAALgFAJQgEAJgHAFQgIAFgKAAQgEAAgEgCgAgHgFIAAAdIAAAMQAAAEADADQAEADADAAQADAAADgCQACgDACgGQACgGAAgRQAAgOgDgGQgEgEgFAAQgEAAgGAHg");
	this.shape_781.setTransform(157.6,41.2);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#FFFFFF").s().p("AgWAZQgJgKAAgPQAAgNAJgLQAIgLAOAAQAJAAAHAEQAIAFAEAIQAEAJAAAJQAAAPgHAJQgJAMgQAAQgPAAgHgLgAgFgbQgDADgBAIIgBAWIABAPQABAFADADQADACACAAQADAAACgCQADgCABgFQACgGAAgVQAAgMgCgFQgBgEgDgDQgCgBgDAAQgCAAgDADg");
	this.shape_782.setTransform(149.9,42.7);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#FFFFFF").s().p("AAWAjIAAgCQAFgBACgDQABgCAAgHIAAgcIgBgMIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgEAFIAAAjQAAAIACACQABACAFABIAAACIgiAAIAAgCIAEgCIACgDIABgIIAAgcIgBgMIgCgDIgEgCQgDAAgCACQgEACgEAGIAAAjQAAAIACACQABACAFABIAAACIgkAAIAAgCQAFgBABgCQACgCAAgIIAAglQAAgIgCgCQgBgCgFgBIAAgCIAcAAIAAAJQAGgGAFgDQAEgCAGAAQAHAAADADQAFADACAGQAGgGAFgDQAGgDAGAAQAHAAAEADQAEADACAFQABAFAAALIAAAbQAAAIACACQABACAFABIAAACg");
	this.shape_783.setTransform(139.9,42.6);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#FFFFFF").s().p("AgfAzIAAgCQAbggAFgLQAGgKgBgLQABgHgFgFQgEgFgHAAQgLAAgGALIgDgBQAEgOAIgHQAIgHAKAAQAHAAAGAEQAHADADAHQADAGABAFQgBAKgFAKQgIAMgXAZIAUAAIAKgBIAFgCIADgHIADAAIgFAdg");
	this.shape_784.setTransform(122.2,41);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#FFFFFF").s().p("AggAyQANgDAJgFQAHgGAEgIQAGgIACgKIgIADIgGABQgLAAgIgIQgHgHAAgOQAAgKAEgIQAEgJAHgEQAIgFAIAAQAIAAAIAFQAHAFAFAKQAFAJAAAMQAAAPgIAOQgHAPgPAIQgOAJgVABgAgIgqQgCAEAAAMQAAAUAEAHQAEAFAEAAQADAAAEgCIABgOQAAgNgCgMQgCgGgEgDQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgFAAgCAEg");
	this.shape_785.setTransform(114.8,41.1);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#FFFFFF").s().p("AggAyQANgDAIgFQAJgGAEgIQAFgIACgKIgIADIgGABQgLAAgIgIQgHgHAAgOQAAgKAEgIQAEgJAIgEQAHgFAIAAQAIAAAHAFQAJAFAEAKQAFAJgBAMQABAPgIAOQgIAPgOAIQgOAJgVABgAgHgqQgDAEAAAMQAAAUAFAHQADAFAEAAQADAAAFgCIABgOQAAgNgDgMQgDgGgDgDQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAgBAAQgEAAgBAEg");
	this.shape_786.setTransform(107.3,41.1);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#FFFFFF").s().p("AgZAzIAAgDIADAAQAGAAADgBQADgCABgCIABgMIAAgzIgBgIIgCgDIgEgCQgEAAgGADIgBgDIAkgRIACAAIAABRIABALQABADACABQADACAFAAIADAAIAAADg");
	this.shape_787.setTransform(99.8,41);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#FFFFFF").s().p("AgVAZQgHgKABgOQgBgQAKgKQAJgKALAAQALAAAHAIQAIAJAAARIgkAAQABAMAGAIQAFAGAGAAQAFAAADgCQAEgDAEgGIACACQgFALgGAFQgIAEgJAAQgOAAgHgLgAgEgbQgEAHgBALIAAADIATAAIgBgRQgBgEgCgCQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCAEg");
	this.shape_788.setTransform(89.2,42.7);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#FFFFFF").s().p("AADAyIAAgDQADAAACgDQABgCAAgHIAAgfIAAgJIgDgEIgDgBQgDAAgCACIgGAHIAAAkQAAAHABACQACADAEAAIAAADIgjAAIAAgDQAEAAACgDQABgBAAgIIAAhFQAAgHgBgCQgCgCgEgBIAAgDIAcAAIAAAoQAGgGAEgCQAEgDAFAAQAGAAAFAEQAEAEACAFQABAEABALIAAAbQgBAIACACQACACAEAAIAAADg");
	this.shape_789.setTransform(81.6,41.1);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FFFFFF").s().p("AgHAsQgEgEgBgFQgBgCAAgLIAAgkIgJAAIAAgDQAJgGAHgHQAGgHAEgJIACAAIAAAZIARAAIAAAHIgRAAIAAApQAAAGABACIACADIADABQAEAAAFgHIACABQgGAOgOAAQgFAAgFgDg");
	this.shape_790.setTransform(74.9,41.5);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#FFFFFF").s().p("AADAjIAAgCQADgBACgDQABgBAAgIIAAgdIAAgLIgDgDIgDgBQgFAAgGAJIAAAjQAAAIACACQABACAEABIAAACIgjAAIAAgCQAEgBACgCQABgCAAgIIAAglQAAgIgBgCQgCgCgEgBIAAgCIAcAAIAAAJQAGgGADgDQAFgCAGAAQAGAAAEADQAFAEACAGIABAQIAAAZQgBAIACACQACACAEABIAAACg");
	this.shape_791.setTransform(64.5,42.6);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#FFFFFF").s().p("AgZAyIAAgDIADAAQAFAAACgBIADgEQABgCAAgHIAAhBQAAgHgBgCIgDgDQgCgCgFAAIgDAAIAAgDIAzAAIAAADIgEAAQgDAAgEACIgDADIAAAJIAABBIAAAJIAEAEQACABAEAAIAEAAIAAADg");
	this.shape_792.setTransform(57.4,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.backArrow6},{t:this.btnPhones},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437}]},29).to({state:[]},1).wait(18));

	// 80's description
	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_793.setTransform(132.7,371.9);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgMATAAQALAAAIADIAAAPQgJgGgKgBQgMABgHAIQgIAIAAANQAAAOAHAJQAHAHAMABQAKgBAKgHIAAAOQgKAFgNAAQgQAAgLgLg");
	this.shape_794.setTransform(124.3,373.9);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#FFFFFF").s().p("AgZAkQgGgHgBgKQAAgWAbgDIAXgEQAAgUgQAAQgOAAgMAKIAAgOQANgIAOABQAeAAAAAeIAAA0IgPAAIAAgNQgJAOgPAAQgMAAgHgGgAAAADQgJABgFADQgEAEAAAGQABAHAEADQAEAEAHAAQAIAAAGgHQAGgHAAgKIAAgHg");
	this.shape_795.setTransform(116.2,373.9);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#FFFFFF").s().p("AgWAvIgBAAIAAAMIgOAAIAAh3IAOAAIAAA1IABAAQAJgQASAAQAPAAAJALQAJALAAARQAAAVgKAMQgKAMgRAAQgPAAgIgOgAgQgEQgHAHAAALIAAAMQAAAJAHAIQAGAGAKAAQAKAAAHgJQAGgIAAgQQAAgNgGgHQgGgHgKAAQgKAAgHAHg");
	this.shape_796.setTransform(107.9,372);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLAMQgLAMgSgBQgSAAgLgLgAgSgVQgHAIAAANQAAAOAHAJQAHAHALABQANgBAGgHQAHgIAAgPQAAgOgHgHQgGgJgNAAQgLAAgHAJg");
	this.shape_797.setTransform(93.6,373.9);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#FFFFFF").s().p("AgfA3IAAgOQAOAIAMAAQAdAAAAggIAAgIIgBAAQgJAPgRAAQgQABgJgLQgJgMAAgQQAAgVAKgNQAKgLARAAQAPAAAIAMIABAAIAAgKIAOAAIAABIQAAAtgrAAQgPAAgLgFgAgQgnQgGAIAAAQQAAANAGAHQAGAHAKABQAKAAAHgIQAHgGAAgMIAAgLQAAgKgHgHQgGgGgJgBQgLABgHAIg");
	this.shape_798.setTransform(83.8,375.7);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLAMQgLAMgSgBQgSAAgLgLgAgSgVQgHAIAAANQAAAOAHAJQAHAHALABQANgBAGgHQAHgIAAgPQAAgOgHgHQgGgJgNAAQgLAAgHAJg");
	this.shape_799.setTransform(70.1,373.9);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#FFFFFF").s().p("AgJAdIAAguIgOAAIAAgLIAOAAIAAgUIANgFIAAAZIAUAAIAAALIgUAAIAAArQAAAJADADQACADAHABQAEgBAEgCIAAAMQgFACgHAAQgVABAAgZg");
	this.shape_800.setTransform(62.6,372.8);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_801.setTransform(52,371.9);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgMATAAQALAAAIADIAAAPQgJgGgKgBQgMABgHAIQgIAIAAANQAAAOAHAJQAHAHAMABQAKgBAKgHIAAAOQgKAFgNAAQgQAAgLgLg");
	this.shape_802.setTransform(43.6,373.9);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#FFFFFF").s().p("AgHA7IAAhQIAOAAIAABQgAgGgrQgCgDAAgDQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgDgDg");
	this.shape_803.setTransform(37.8,372);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#FFFFFF").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_804.setTransform(33.7,371.9);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#FFFFFF").s().p("AgbArQgPgPAAgaQAAgaAQgRQARgRAZAAQAPAAAMAFIAAAPQgNgGgOAAQgTAAgMAMQgLANgBAUQAAAVAMAMQALAMARAAQARAAANgIIAAAOQgNAHgTAAQgXAAgPgQg");
	this.shape_805.setTransform(26.7,372.2);

	this.instance_2 = new lib.oldie80s();
	this.instance_2.parent = this;
	this.instance_2.setTransform(407,91,0.16,0.16);

	this.backArrow5 = new lib.btnBack();
	this.backArrow5.name = "backArrow5";
	this.backArrow5.parent = this;
	this.backArrow5.setTransform(69,328,1,1,0,0,0,32,32);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#FFFFFF").s().p("AgKALQgDgFAAgGQAAgFADgEQAFgFAFAAQAGAAAFAFQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgFgDg");
	this.shape_806.setTransform(133.6,171.7);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#FFFFFF").s().p("AAXAqIgXg7IgVA7IgEAAIgWg6QgFgOgEgEQgCgDgEgBIAAgDIApAAIAAADQgEAAgCABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIADAJIAMAfIALgfIgBgCQgCgHgCgCIgGgCIAAgDIApAAIAAADIgGABQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAIADAJIALAfIALgdIACgIQAAgEgBgBQgCgCgFAAIAAgDIAYAAIAAADQgEAAgCADQgCACgEALIgXBAg");
	this.shape_807.setTransform(125.8,168.9);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#FFFFFF").s().p("AgbAeQgLgNABgRQAAgQAKgNQAKgNARgBQAKABAKAFQAJAGAFAKQAFAKgBALQAAARgJAMQgKAPgTAAQgSgBgJgNgAgHghQgCADgBALIgBAaIABASQABAGACADQAEAEADgBQAEABADgDQADgDABgFQABgIAAgZQAAgPgBgFQgCgGgDgDQgCgBgEAAQgEAAgDADg");
	this.shape_808.setTransform(114.8,168.8);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#FFFFFF").s().p("AADAqIAAgDQAEgBACgDQACgCAAgJIAAgjQAAgKgBgDQAAgDgCgBQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgHAAgGALIAAArQAAAKACACQACACAEABIAAADIgqAAIAAgDQAGAAACgDQACgCgBgKIAAgtQABgJgCgDQgCgCgGgBIAAgDIAiAAIAAALQAHgHAEgDQAGgDAHAAQAHAAAGAEQAFAEACAHQABAFABAOIAAAfQAAAKABACQACACAFABIAAADg");
	this.shape_809.setTransform(105.4,168.7);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#FFFFFF").s().p("AgNAoIgEgBQgDAAgCAEIgDAAIgBgdIADAAQAEALAHAGQAHAGAFAAQAEAAADgCQACgDAAgEQAAgEgCgEQgDgCgIgHQgNgJgEgEQgGgHAAgJQAAgJAGgIQAHgIAMAAQAGAAAGAEIAEABIADAAIADgFIADAAIABAcIgDAAQgFgMgGgFQgGgEgEAAQgEAAgDACQgCADAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQACAEAMAJQANAIAEAGQAEAGAAAIQAAAGgDAHQgDAGgHAEQgGADgIABQgEgBgKgDg");
	this.shape_810.setTransform(92.3,168.8);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#FFFFFF").s().p("AgVA9IAAgDQAFAAADgDQACgCAAgJIAAgvQAAgJgCgCQgCgDgGAAIAAgDIAhAAIAABAQAAAJACACQACADAGAAIAAADgAgIglQgEgDAAgGQAAgGAEgEQADgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEADQgEAEgGAAQgFAAgDgEg");
	this.shape_811.setTransform(86.4,166.8);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FFFFFF").s().p("AgIA1QgFgFgCgFQgBgDAAgNIAAgsIgKAAIAAgDQALgIAHgIQAIgJAFgKIADAAIAAAdIATAAIAAAJIgTAAIAAAyQAAAHABACIACADIADABQAGAAAFgIIACACQgHAQgQAAQgHAAgFgDg");
	this.shape_812.setTransform(411.2,145.4);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#FFFFFF").s().p("AgVA9IAAgDQAFgBADgCQACgCAAgJIAAgvQAAgJgCgCQgCgCgGgBIAAgDIAhAAIAABAQAAAIACADQACADAGAAIAAADgAgIglQgEgEAAgFQAAgGAEgEQADgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgDgEg");
	this.shape_813.setTransform(405.7,144.9);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#FFFFFF").s().p("AADAqIAAgDQAFgBABgDQACgCAAgJIAAgjQAAgKgBgDQgBgDgCgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgGAAgHALIAAArQAAAKACACQABACAFABIAAADIgqAAIAAgDQAGAAACgDQABgCAAgKIAAgtQAAgJgBgDQgCgCgGgBIAAgDIAiAAIAAALQAGgHAGgDQAFgDAHAAQAHAAAGAEQAGAEABAHQABAFAAAOIAAAfQAAAKACACQACACAFABIAAADg");
	this.shape_814.setTransform(393.7,146.7);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#FFFFFF").s().p("AAJAoQgEgEgBgGQgOANgMAAQgHAAgFgFQgFgEABgHQAAgKAIgHQAIgIAagLIAAgIQAAgKgBgCQgBgDgCgBQgDgCgDAAQgGAAgEACQAAABgBAAQAAAAAAABQgBABAAAAQAAABAAAAIACAFQAEADAAAEQAAAEgEADQgCADgGAAQgFAAgEgDQgDgDAAgFQAAgGAEgGQAGgGAIgDQAJgDAJAAQALAAAHAFQAHAFACAGQACAEgBANIAAAfIABAHIABACIACABQACAAADgEIACADQgEAGgFADQgEADgHAAQgGAAgEgDgAgLAJQgEAFAAAFQAAAEAEADQACACADAAQAFAAAFgFIAAgaQgJAFgGAHg");
	this.shape_815.setTransform(384.4,146.8);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#FFFFFF").s().p("AADA7IAAgCQAEgCACgCQACgCAAgKIAAgkQAAgJgBgCQgBgDgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDABgCACQgEADgEAFIAAArQAAAKABABQACAEAFABIAAACIgqAAIAAgCQAGgBACgDQABgCAAgKIAAhSQAAgJgBgCQgCgCgGgCIAAgCIAiAAIAAAvQAHgHAEgDQAGgDAGAAQAIAAAFAEQAGAFACAFQACAHgBANIAAAfQAAAKACADQACACAFABIAAACg");
	this.shape_816.setTransform(374.7,145);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#FFFFFF").s().p("AgIA1QgFgFgCgFQgBgDAAgNIAAgsIgKAAIAAgDQALgIAHgIQAIgJAFgKIADAAIAAAdIATAAIAAAJIgTAAIAAAyQAAAHABACIACADIADABQAGAAAFgIIACACQgHAQgQAAQgHAAgFgDg");
	this.shape_817.setTransform(366.7,145.4);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#FFFFFF").s().p("AgaAdQgHgLAAgRQAAgTALgMQALgNAOAAQAMABAKAJQAJALAAAUIgsAAQABAQAIAJQAFAHAJAAQAFAAAEgDQAFgDAEgHIADABQgGAOgIAGQgIAFgLAAQgRAAgKgOgAgFghQgFAIAAAOIAAADIAXAAQAAgOgCgFQgBgFgEgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgEAAgDAEg");
	this.shape_818.setTransform(355.2,146.9);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#FFFFFF").s().p("AgiAqIAAgDQAFAAACgDQACgCAAgLIAAgtIgBgIIgCgEIgGgCIAAgDIAhAAIAAATQAIgNAGgEQAGgEAGAAQAFAAADADQACADAAAFQAAAGgCADQgDAEgEAAQgFAAgDgDIgEgEIgCAAQgDAAgCACQgEADgCAFQgCAJAAAJIAAATIABAFIAAAGQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIAHABIAAADg");
	this.shape_819.setTransform(347.6,146.7);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#FFFFFF").s().p("AgcAfQgJgOgBgRQAAgQALgNQAKgOARAAQALAAAJAGQAJAGAFAKQAEAKABALQAAARgJAMQgLAOgTAAQgRABgLgNgAgGghQgDADgCALIgBAaIABASQACAGADADQADAEADgBQAEAAACgCQAEgDABgFQABgIAAgZQAAgPgBgGQgCgFgDgDQgCgCgEAAQgDABgDADg");
	this.shape_820.setTransform(339,146.9);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#FFFFFF").s().p("AAbAqIAAgDQAFAAACgEQACgCAAgJIAAgiQAAgLgBgDQgBgDgCgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAgBAAQgDAAgEADQgEADgEAFIAAArQAAAJACACQACAEAGAAIAAADIgqAAIAAgDIAGgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIAAgKIAAgiIAAgOQgBgDgCgBIgFgCQgDAAgDACQgEADgFAGIAAArQAAAJACADQABADAGAAIAAADIgqAAIAAgDQAFAAACgDQACgCAAgKIAAgtQAAgJgCgDQgCgCgFgBIAAgDIAhAAIAAALQAHgHAGgDQAGgDAGAAQAIAAAFADQAFAEADAIQAHgIAGgEQAHgDAHAAQAJAAAEAEQAFADADAGQABAGAAAOIAAAgQABAKABACQACACAFABIAAADg");
	this.shape_821.setTransform(327.1,146.7);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#FFFFFF").s().p("AADAqIAAgDQAEgBACgDQACgCAAgJIAAgjQAAgKgBgDQAAgDgCgBQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgGAAgHALIAAArQAAAKACACQACACAEABIAAADIgqAAIAAgDQAGAAACgDQABgCAAgKIAAgtQAAgJgBgDQgCgCgGgBIAAgDIAiAAIAAALQAHgHAEgDQAGgDAGAAQAJAAAFAEQAGAEABAHQABAFABAOIAAAfQgBAKACACQACACAGABIAAADg");
	this.shape_822.setTransform(310,146.7);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#FFFFFF").s().p("AgaAdQgHgLAAgRQAAgTALgMQALgNAOAAQAMABAKAJQAJALAAAUIgsAAQABAQAIAJQAFAHAJAAQAFAAAEgDQAFgDAEgHIADABQgGAOgIAGQgIAFgLAAQgRAAgKgOgAgFghQgFAIAAAOIAAADIAXAAQAAgOgCgFQgBgFgEgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgEAAgDAEg");
	this.shape_823.setTransform(301.1,146.9);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#FFFFFF").s().p("AgBAqIgbg/QgGgLgCgDQgDgCgEgBIAAgDIArAAIAAADQgDAAgCABQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABQAAADAFAJIAMAeIALgaQAEgLABgFQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgCgEAAIAAgDIAbAAIAAADQgFAAgCADQgDACgFAMIgbA/g");
	this.shape_824.setTransform(292.5,147);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#FFFFFF").s().p("AgaAdQgHgLAAgRQAAgTALgMQALgNAOAAQAMABAKAJQAJALAAAUIgsAAQABAQAIAJQAFAHAJAAQAFAAAEgDQAFgDAEgHIADABQgGAOgIAGQgIAFgLAAQgRAAgKgOgAgFghQgFAIAAAOIAAADIAXAAQAAgOgCgFQgBgFgEgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgEAAgDAEg");
	this.shape_825.setTransform(284.1,146.9);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#FFFFFF").s().p("AgNAoIgEgBQgDAAgCAEIgDAAIgBgdIADAAQAEAMAHAFQAHAGAFAAQAEAAADgCQACgDAAgEQAAgEgCgEQgDgCgIgHQgNgJgEgEQgGgHAAgJQAAgKAGgHQAHgIAMAAQAGAAAGAEIAEABIADAAIADgFIADAAIABAcIgDAAQgFgMgGgEQgGgFgEAAQgEAAgDACQgCADAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQACAEAMAJQANAJAEAFQAEAGAAAIQAAAGgDAHQgDAGgHAEQgGADgIAAQgEAAgKgDg");
	this.shape_826.setTransform(272,146.9);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#FFFFFF").s().p("AAJAoQgEgEgBgGQgOANgMAAQgHAAgFgFQgFgEABgHQAAgKAIgHQAIgIAagLIAAgIQAAgKgBgCQgBgDgCgBQgDgCgDAAQgGAAgEACQAAABgBAAQAAAAAAABQgBABAAAAQAAABAAAAIACAFQAEADAAAEQAAAEgEADQgCADgGAAQgFAAgEgDQgEgDABgFQAAgGAEgGQAGgGAIgDQAJgDAJAAQALAAAHAFQAHAFACAGQACAEgBANIAAAfIABAHIABACIACABQACAAADgEIACADQgEAGgFADQgEADgHAAQgGAAgEgDgAgLAJQgEAFAAAFQAAAEAEADQACACADAAQAFAAAFgFIAAgaQgJAFgGAHg");
	this.shape_827.setTransform(264.2,146.8);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#FFFFFF").s().p("AAXAqIgXg7IgVA7IgEAAIgWg6QgFgOgEgEQgCgDgEgBIAAgDIApAAIAAADQgEAAgCABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIADAJIAMAfIALgfIgBgCQgCgHgCgCIgGgCIAAgDIApAAIAAADIgGABQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAIADAJIALAfIALgdIACgIQAAgEgBgBQgCgCgFAAIAAgDIAYAAIAAADQgEAAgCADQgCACgEALIgXBAg");
	this.shape_828.setTransform(252.9,147);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#FFFFFF").s().p("AADA7IAAgCQAEgCADgCQABgCAAgKIAAgkQAAgJgBgCQgBgDgBgCQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDABgDACQgDADgEAFIAAArQAAAKACABQABAEAGABIAAACIgqAAIAAgCQAFgBACgDQABgCABgKIAAhSQgBgJgBgCQgCgCgFgCIAAgCIAhAAIAAAvQAHgHAEgDQAGgDAGAAQAIAAAGAEQAFAFACAFQABAHABANIAAAfQAAAKACADQABACAGABIAAACg");
	this.shape_829.setTransform(237,145);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#FFFFFF").s().p("AgYAfQgKgMAAgSQAAgPAJgNQALgQASAAQANAAAIAHQAHAGAAAIQAAAFgDADQgDADgFAAQgFAAgEgEQgDgDgBgJQgBgFgBgDQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgEABgDAEQgEAHAAAOQAAALAEAKQADALAGAEQAEAEAIAAQADAAAEgCQAFgCAEgFIAEACQgHALgIAFQgJAFgKAAQgPAAgKgMg");
	this.shape_830.setTransform(228.1,146.9);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#FFFFFF").s().p("AgVA9IAAgDQAFgBADgCQACgCAAgJIAAgvQAAgJgCgCQgCgCgGgBIAAgDIAhAAIAABAQAAAIACADQACADAGAAIAAADgAgIglQgEgEAAgFQAAgGAEgEQADgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgDgEg");
	this.shape_831.setTransform(221.5,144.9);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#FFFFFF").s().p("AADA7IAAgCQAEgCACgCQACgCAAgKIAAgkQAAgJgBgCQgBgDgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDABgCACQgEADgEAFIAAArQAAAKABABQACAEAFABIAAACIgqAAIAAgCQAGgBACgDQABgCAAgKIAAhSQAAgJgBgCQgCgCgGgCIAAgCIAiAAIAAAvQAHgHAEgDQAGgDAGAAQAIAAAFAEQAGAFACAFQACAHgBANIAAAfQAAAKACADQACACAFABIAAACg");
	this.shape_832.setTransform(214,145);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#FFFFFF").s().p("AAhA9IgehMIgfBMIgEAAIgnhgQgGgPgDgDQgCgDgGgBIAAgDIA0AAIAAADQgGAAgCACQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAEAEALIAYA4IASgsIgEgMQgEgLgDgDQgCgEgDgBQgDgCgGAAIAAgDIA6AAIAAADIgJABIgDACIgBAEIAEAMIAVA3IAUgyIAEgKIABgGQgBgDgCgCQgDgDgGAAIAAgDIAfAAIAAADIgGACQgCACgCADIgGAOIglBhg");
	this.shape_833.setTransform(200,145.1);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#FFFFFF").s().p("AgJALQgEgFgBgGQABgFAEgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAFQgEADgGAAQgFAAgEgDg");
	this.shape_834.setTransform(184.6,149.7);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#FFFFFF").s().p("AgPA6QgGgFgGgIQgEgGgDgKQgDgOAAgNQgBgTAGgQQAEgOAKgHQAJgHAJAAQALAAAIAHQAJAHAFAMQAFARAAASQAAASgEAPQgDAJgFAHQgFAGgHADQgGAEgIAAQgHAAgIgEgAgGg1QgDADAAAIQgCAIAAAtQAAAZACAJQABAGACADQADACADAAQAEAAADgEQAEgEAAgKIAAgmIAAgjQgBgNgDgEQgDgDgEAAQgDAAgDACg");
	this.shape_835.setTransform(177.8,145);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#FFFFFF").s().p("AgPA6QgGgFgGgIQgEgGgDgKQgDgOAAgNQgBgTAGgQQAEgOAKgHQAJgHAJAAQALAAAIAHQAJAHAFAMQAFARAAASQAAASgEAPQgDAJgFAHQgFAGgHADQgGAEgIAAQgHAAgIgEgAgGg1QgDADAAAIQgCAIAAAtQAAAZACAJQABAGACADQADACADAAQAEAAADgEQAEgEAAgKIAAgmIAAgjQgBgNgDgEQgDgDgEAAQgDAAgDACg");
	this.shape_836.setTransform(168.8,145);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#FFFFFF").s().p("AgPA6QgGgFgGgIQgEgGgDgKQgDgOAAgNQgBgTAGgQQAEgOAKgHQAJgHAJAAQALAAAIAHQAJAHAFAMQAFARAAASQAAASgEAPQgDAJgFAHQgFAGgHADQgGAEgIAAQgHAAgIgEgAgGg1QgDADAAAIQgCAIAAAtQAAAZACAJQABAGACADQADACADAAQAEAAADgEQAEgEAAgKIAAgmIAAgjQgBgNgDgEQgDgDgEAAQgDAAgDACg");
	this.shape_837.setTransform(159.8,145);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#FFFFFF").s().p("AAEA9IAAgbIgqAAIAAgSIA3hMIAMAAIAABMIAKAAIAAASIgKAAIAAAbgAgeAQIAiAAIAAgug");
	this.shape_838.setTransform(150.7,144.9);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#FFFFFF").s().p("AgDBDIAAgJQgJAAgHgCIgRgFIAAgcIAEAAQACAJAEAGQADAGAGAEQAGADAIAAIAAgrQgVgMgHgIQgHgIAAgLQAAgLAJgJQAJgJARgCIAAgEIAHAAIAAAEQAPABAPAIIAAAaIgDAAQgDgJgDgGQgEgFgGgEQgEgDgHgCIAAAnQAVANAGAGQAIAJAAAMQAAAOgKAJQgJAKgQABIAAAKgAAEAzQAIgCADgEQAEgEAAgGQAAgGgDgFQgEgFgIgGgAgNg1QgGAFAAAHQAAAEADAEQADAEAKAHIAAgiQgGAAgEADg");
	this.shape_839.setTransform(141.9,145.4);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#FFFFFF").s().p("AgjA4QgEgEAAgGQAAgFADgDQAEgDAEAAQAEAAADACQACADABAGIAAAEIACABQACAAADgDQADgDAFgOIADgGIgbg8QgGgOgCgDQgDgDgFgCIAAgDIArAAIAAADIgFACQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAADAFAKIANAgIAJgZQAGgNAAgFQAAgDgCgCQgCgCgGgBIAAgDIAcAAIAAADQgEABgEADQgCACgGAQIgXA8QgIAXgFAFQgFAIgKAAQgHAAgFgFg");
	this.shape_840.setTransform(128.3,148.8);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#FFFFFF").s().p("AgVA7IAAgCQAFgBADgDQABgCABgJIAAhTQgBgJgBgCQgCgDgGgBIAAgCIAhAAIAABkQAAAJACADQADACAFABIAAACg");
	this.shape_841.setTransform(121.4,145);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#FFFFFF").s().p("AgiAqIAAgDQAFAAACgDQACgCAAgLIAAgtIgBgIIgCgEIgGgCIAAgDIAhAAIAAATQAIgNAGgEQAGgEAGAAQAFAAADADQACADAAAFQAAAGgCADQgDAEgEAAQgFAAgDgDIgEgEIgCAAQgDAAgCACQgEADgCAFQgCAJAAAJIAAATIABAFIAAAGQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIAHABIAAADg");
	this.shape_842.setTransform(115,146.7);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#FFFFFF").s().p("AAJAoQgEgEgBgGQgOANgMAAQgHAAgFgFQgEgEgBgHQAAgKAJgHQAIgIAagLIAAgIQAAgKgBgCQgBgDgCgBQgCgCgEAAQgGAAgDACQgBABgBAAQAAAAAAABQgBABAAAAQAAABAAAAIADAFQADADAAAEQAAAEgDADQgEADgEAAQgHAAgDgDQgDgDgBgFQAAgGAGgGQAEgGAJgDQAJgDAJAAQAMAAAGAFQAHAFACAGQACAEAAANIAAAfIAAAHIABACIACABQADAAACgEIADADQgFAGgEADQgGADgFAAQgIAAgDgDgAgLAJQgEAFABAFQAAAEACADQADACAEAAQAEAAAFgFIAAgaQgJAFgGAHg");
	this.shape_843.setTransform(106.6,146.8);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#FFFFFF").s().p("AgaAdQgHgLAAgRQAAgTALgMQALgNAOAAQAMABAKAJQAJALAAAUIgsAAQABAQAIAJQAFAHAJAAQAFAAAEgDQAFgDAEgHIADABQgGAOgIAGQgIAFgLAAQgRAAgKgOgAgFghQgFAIAAAOIAAADIAXAAQAAgOgCgFQgBgFgEgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgEAAgDAEg");
	this.shape_844.setTransform(97.9,146.9);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#FFFFFF").s().p("AADAqIAAgDQAFgBACgDQABgCAAgJIAAgjQAAgKgBgDQgBgDgBgBQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgHAAgGALIAAArQAAAKACACQACACAEABIAAADIgpAAIAAgDQAFAAACgDQABgCABgKIAAgtQgBgJgBgDQgCgCgFgBIAAgDIAhAAIAAALQAGgHAGgDQAFgDAGAAQAJAAAFAEQAGAEABAHQACAFAAAOIAAAfQAAAKABACQACACAGABIAAADg");
	this.shape_845.setTransform(88.9,146.7);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#FFFFFF").s().p("AgIA0QgFgEgCgFQgBgDAAgOIAAgrIgKAAIAAgDQALgIAHgJQAIgIAFgKIADAAIAAAdIATAAIAAAJIgTAAIAAAyQAAAHABACIACADIADABQAGABAFgJIACACQgHAQgQAAQgHAAgFgEg");
	this.shape_846.setTransform(422.7,123.5);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#FFFFFF").s().p("AgNAoIgEgBQgDAAgCAEIgDAAIgBgdIADAAQAEAMAHAFQAHAGAFAAQAEAAADgDQACgDAAgDQAAgEgCgDQgDgEgIgFQgNgKgEgEQgGgHAAgJQAAgKAGgHQAHgIAMAAQAGABAGADIAEABIADAAIADgFIADAAIABAdIgDAAQgFgNgGgEQgGgFgEAAQgEAAgDACQgCADAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABABABQACADAMAJQANAJAEAFQAEAGAAAHQAAAHgDAHQgDAHgHADQgGADgIAAQgEAAgKgDg");
	this.shape_847.setTransform(416.1,124.9);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#FFFFFF").s().p("AgbAfQgKgNAAgSQAAgQAKgNQAKgOARAAQAKAAAKAGQAJAFAFALQAFAKgBALQABARgKAMQgKAOgTAAQgSABgJgNgAgHghQgCADgBAKIgBAbIABARQABAHACADQAEADADAAQAEAAADgCQADgDABgFQABgJAAgYQAAgPgBgGQgCgFgDgDQgCgCgEAAQgEABgDADg");
	this.shape_848.setTransform(408.1,124.9);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#FFFFFF").s().p("AgYAfQgKgMAAgSQABgQAIgNQALgPASAAQANAAAIAHQAHAGAAAIQAAAFgDADQgDADgFAAQgFAAgDgDQgEgEgBgJQAAgFgCgDQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgEABgDAEQgEAHAAAOQAAALAEAKQAEALAFAEQAEAEAIABQADgBAFgCQADgCAGgFIACACQgFALgJAFQgJAFgKAAQgPAAgKgMg");
	this.shape_849.setTransform(399.8,124.9);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#FFFFFF").s().p("AgIA0QgFgEgCgFQgBgDAAgOIAAgrIgKAAIAAgDQALgIAHgJQAIgIAFgKIADAAIAAAdIATAAIAAAJIgTAAIAAAyQAAAHABACIACADIADABQAGABAFgJIACACQgHAQgQAAQgHAAgFgEg");
	this.shape_850.setTransform(388.2,123.5);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#FFFFFF").s().p("AgVA9IAAgDQAFgBADgDQACgBAAgJIAAgvQAAgJgCgCQgCgCgGgBIAAgDIAhAAIAABAQAAAIACADQACADAGAAIAAADgAgIglQgEgEAAgFQAAgGAEgEQADgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgDgEg");
	this.shape_851.setTransform(382.7,122.9);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#FFFFFF").s().p("AgNAoIgEgBQgDAAgCAEIgDAAIgBgdIADAAQAEAMAHAFQAHAGAFAAQAEAAADgDQACgDAAgDQAAgEgCgDQgDgEgIgFQgNgKgEgEQgGgHAAgJQAAgKAGgHQAHgIAMAAQAGABAGADIAEABIADAAIADgFIADAAIABAdIgDAAQgFgNgGgEQgGgFgEAAQgEAAgDACQgCADAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABABABQACADAMAJQANAJAEAFQAEAGAAAHQAAAHgDAHQgDAHgHADQgGADgIAAQgEAAgKgDg");
	this.shape_852.setTransform(372.1,124.9);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#FFFFFF").s().p("AAJAoQgEgEgBgGQgOANgMAAQgHAAgFgFQgFgEAAgHQABgKAHgHQAJgIAagLIAAgIQAAgKgBgCQgBgDgCgBQgCgCgEAAQgGAAgEACQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIACAFQAEADAAAEQAAAEgEADQgDADgFAAQgFAAgEgDQgEgDABgFQAAgGAEgGQAGgGAIgDQAJgDAJAAQALAAAIAFQAGAFACAGQABAEAAANIAAAfIABAHIABACIACABQACAAADgEIACADQgEAGgFADQgFADgGAAQgGAAgEgDgAgLAJQgDAFgBAFQAAAEADADQADACADAAQAFAAAFgFIAAgaQgKAFgFAHg");
	this.shape_853.setTransform(364.4,124.8);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#FFFFFF").s().p("AgMAZQAJgEAEgHQAFgHAAgHIAAgCIgCAAIgCAAQgCACgDAAQgFAAgEgEQgDgEgBgGQAAgFAFgFQAEgEAHAAQAGAAAFAGQAGAFAAALQgBALgHAKQgHAKgOAEg");
	this.shape_854.setTransform(352.9,129.2);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgRQAAgTALgMQALgNAOAAQAMAAAKALQAJAKAAAUIgsAAQABAQAIAJQAFAHAJAAQAFAAAEgDQAFgDAEgIIADACQgGAOgIAGQgIAFgLAAQgRABgKgOgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgFgEgDQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgEAAgDAFg");
	this.shape_855.setTransform(346.7,124.9);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#FFFFFF").s().p("AgIA0QgFgEgCgFQgBgDAAgOIAAgrIgKAAIAAgDQALgIAHgJQAIgIAFgKIADAAIAAAdIATAAIAAAJIgTAAIAAAyQAAAHABACIACADIADABQAGABAFgJIACACQgHAQgQAAQgHAAgFgEg");
	this.shape_856.setTransform(339.7,123.5);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#FFFFFF").s().p("AgVA9IAAgDQAFgBADgDQACgBAAgJIAAgvQAAgJgCgCQgCgCgGgBIAAgDIAhAAIAABAQAAAIACADQACADAGAAIAAADgAgIglQgEgEAAgFQAAgGAEgEQADgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgDgEg");
	this.shape_857.setTransform(334.2,122.9);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#FFFFFF").s().p("AgVA7IAAgDQAFAAADgDQABgCABgJIAAhUQAAgIgCgCQgCgDgGgBIAAgDIAhAAIAABlQAAAJADADQACACAFAAIAAADg");
	this.shape_858.setTransform(329.2,123.1);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgRQAAgTALgMQALgNAOAAQAMAAAKALQAJAKAAAUIgsAAQABAQAIAJQAFAHAJAAQAFAAAEgDQAFgDAEgIIADACQgGAOgIAGQgIAFgLAAQgRABgKgOgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgFgEgDQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgEAAgDAFg");
	this.shape_859.setTransform(322.7,124.9);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgRQAAgTALgMQALgNAOAAQAMAAAKALQAJAKAAAUIgsAAQABAQAIAJQAFAHAJAAQAFAAAEgDQAFgDAEgIIADACQgGAOgIAGQgIAFgLAAQgRABgKgOgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgFgEgDQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgEAAgDAFg");
	this.shape_860.setTransform(310.2,124.9);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#FFFFFF").s().p("AADA7IAAgDQAEgBADgCQABgCAAgKIAAgkQAAgJgBgCQAAgDgDgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDABgDACQgDACgEAGIAAArQAAAJACADQABADAFAAIAAADIgpAAIAAgDQAFAAACgDQACgCAAgKIAAhSQAAgJgCgCQgCgCgFgCIAAgDIAhAAIAAAwQAHgHAFgDQAFgDAGAAQAIAAAGAEQAFAFACAGQACAGAAANIAAAfQAAAKACADQABACAGAAIAAADg");
	this.shape_861.setTransform(301.2,123.1);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#FFFFFF").s().p("AgIA0QgFgEgCgFQgBgDAAgOIAAgrIgKAAIAAgDQALgIAHgJQAIgIAFgKIADAAIAAAdIATAAIAAAJIgTAAIAAAyQAAAHABACIACADIADABQAGABAFgJIACACQgHAQgQAAQgHAAgFgEg");
	this.shape_862.setTransform(293.2,123.5);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#FFFFFF").s().p("AgiAqIAAgDQAFAAACgDQACgCAAgLIAAgtIgBgIIgCgEIgGgCIAAgDIAhAAIAAATQAIgNAGgEQAGgEAGAAQAFAAADADQACADAAAFQAAAGgCADQgDAEgEAAQgFAAgDgDIgEgEIgCAAQgDAAgCACQgEADgCAFQgCAJAAAJIAAATIABAFIAAAGQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABIAHABIAAADg");
	this.shape_863.setTransform(282.1,124.8);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#FFFFFF").s().p("AgbAfQgKgNAAgSQgBgQALgNQAKgOARAAQALAAAJAGQAJAFAFALQAEAKAAALQABARgKAMQgKAOgTAAQgSABgJgNgAgHghQgCADgBAKIgCAbIACARQABAHACADQAEADADAAQAEAAADgCQADgDABgFQACgJgBgYQABgPgCgGQgCgFgDgDQgCgCgEAAQgEABgDADg");
	this.shape_864.setTransform(273.5,124.9);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#FFFFFF").s().p("AghA9IAAgDIAIgCQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIABgJIAAg3IgMAAIAAgJIAMAAIAAgGIAAgEQAAgNAJgJQAJgIAPAAQALAAAFAEQAGAEAAAFQAAAEgEADQgDADgFAAQgFAAgDgCQgCgDAAgDIAAgDIABgDIgBgDQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBABAAAAQgCADAAAEIAAAQIAAAKIAMAAIAAAJIgMAAIAAA3QAAAIACADQADADAHAAIAAADg");
	this.shape_865.setTransform(266.9,122.9);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#FFFFFF").s().p("AgjA4QgEgEAAgGQAAgFADgEQAEgCAEAAQAEgBADADQACADABAGIAAAEIACABQACAAADgDQAEgDAEgOIADgGIgbg8QgGgOgDgDQgCgDgFgBIAAgEIArAAIAAAEIgFABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAADAFAKIANAgIAJgZQAGgNAAgFQgBgDgBgCQgCgCgGAAIAAgEIAbAAIAAAEQgEAAgDADQgCACgGAQIgXA8QgIAXgFAFQgGAIgIAAQgIAAgFgFg");
	this.shape_866.setTransform(254,126.9);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#FFFFFF").s().p("AgVA7IAAgDQAFAAADgDQACgCgBgJIAAhUQAAgIgBgCQgCgDgGgBIAAgDIAhAAIAABlQAAAJACADQACACAGAAIAAADg");
	this.shape_867.setTransform(247.1,123.1);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#FFFFFF").s().p("AgIA0QgFgEgCgFQgBgDAAgOIAAgrIgKAAIAAgDQALgIAHgJQAIgIAFgKIADAAIAAAdIATAAIAAAJIgTAAIAAAyQAAAHABACIACADIADABQAGABAFgJIACACQgHAQgQAAQgHAAgFgEg");
	this.shape_868.setTransform(241.5,123.5);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#FFFFFF").s().p("AgNAoIgEgBQgDAAgCAEIgDAAIgBgdIADAAQAEAMAHAFQAHAGAFAAQAEAAADgDQACgDAAgDQAAgEgCgDQgDgEgIgFQgNgKgEgEQgGgHAAgJQAAgKAGgHQAHgIAMAAQAGABAGADIAEABIADAAIADgFIADAAIABAdIgDAAQgFgNgGgEQgGgFgEAAQgEAAgDACQgCADAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABABQACADAMAJQANAJAEAFQAEAGAAAHQAAAHgDAHQgDAHgHADQgGADgIAAQgEAAgKgDg");
	this.shape_869.setTransform(235,124.9);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#FFFFFF").s().p("AgcAfQgKgNABgSQAAgQAKgNQAKgOARAAQAKAAAKAGQAJAFAFALQAFAKgBALQAAARgJAMQgKAOgTAAQgSABgKgNgAgHghQgDADAAAKIgBAbIABARQAAAHADADQAEADADAAQAEAAADgCQADgDABgFQACgJAAgYQAAgPgCgGQgBgFgEgDQgCgCgEAAQgDABgEADg");
	this.shape_870.setTransform(227,124.9);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#FFFFFF").s().p("AAbAqIAAgDQAFAAACgEQACgCAAgJIAAgiQAAgLgBgDQgBgDgCgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgEAAgEADQgEADgEAFIAAArQAAAJABACQADAEAFAAIAAADIgpAAIAAgDIAFgCQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIABgKIAAgiIgBgOQgBgDgCgBIgEgCQgEAAgDACQgEADgFAGIAAArQAAAJACADQACADAFAAIAAADIgrAAIAAgDQAGAAACgDQACgCgBgKIAAgtQABgJgCgDQgCgCgGgBIAAgDIAiAAIAAALQAHgHAFgDQAHgDAHAAQAHAAAEADQAGAEADAIQAHgIAHgEQAGgDAHAAQAIAAAGAEQAEADACAGQADAGAAAOIAAAgQAAAKABACQACACAGABIAAADg");
	this.shape_871.setTransform(215.1,124.8);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#FFFFFF").s().p("AgNAoIgEgBQgDAAgCAEIgDAAIgBgdIADAAQAEAMAHAFQAHAGAFAAQAEAAADgDQACgDAAgDQAAgEgCgDQgDgEgIgFQgNgKgEgEQgGgHAAgJQAAgKAGgHQAHgIAMAAQAGABAGADIAEABIADAAIADgFIADAAIABAdIgDAAQgFgNgGgEQgGgFgEAAQgEAAgDACQgCADAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABABABQACADAMAJQANAJAEAFQAEAGAAAHQAAAHgDAHQgDAHgHADQgGADgIAAQgEAAgKgDg");
	this.shape_872.setTransform(199.5,124.9);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#FFFFFF").s().p("AAJAoQgEgEgBgGQgOANgMAAQgHAAgFgFQgEgEgBgHQAAgKAJgHQAIgIAagLIAAgIQAAgKgBgCQgBgDgCgBQgDgCgDAAQgGAAgDACQgBABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIADAFQADADAAAEQAAAEgDADQgEADgEAAQgHAAgDgDQgEgDAAgFQABgGAFgGQAEgGAJgDQAJgDAJAAQALAAAIAFQAGAFACAGQACAEAAANIAAAfIAAAHIABACIACABQADAAACgEIADADQgFAGgEADQgFADgGAAQgIAAgDgDgAgLAJQgEAFABAFQAAAEACADQADACAEAAQAEAAAFgFIAAgaQgJAFgGAHg");
	this.shape_873.setTransform(191.7,124.8);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#FFFFFF").s().p("AAXAqIgXg7IgVA7IgEAAIgWg6QgFgOgEgEQgCgDgEgBIAAgDIApAAIAAADQgEAAgCABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIADAJIAMAfIALgfIgBgCQgCgHgCgCIgGgCIAAgDIApAAIAAADIgGABQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAIADAJIALAfIALgdIACgIQAAgEgBgBQgCgCgFAAIAAgDIAYAAIAAADQgEAAgCADQgCACgEALIgXBAg");
	this.shape_874.setTransform(180.4,125);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgRQAAgTALgMQALgNAOAAQAMAAAKALQAJAKAAAUIgsAAQABAQAIAJQAFAHAJAAQAFAAAEgDQAFgDAEgIIADACQgGAOgIAGQgIAFgLAAQgRABgKgOgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgFgEgDQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgEAAgDAFg");
	this.shape_875.setTransform(165.6,124.9);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#FFFFFF").s().p("AADAqIAAgDQAFgBABgDQACgCAAgJIAAgjQAAgKgBgDQgBgDgCgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgGAAgHALIAAArQAAAKACACQABACAFABIAAADIgqAAIAAgDQAGAAACgDQABgCAAgKIAAgtQAAgJgBgDQgCgCgGgBIAAgDIAiAAIAAALQAGgHAGgDQAFgDAHAAQAHAAAGAEQAFAEACAHQABAFAAAOIAAAfQAAAKACACQACACAFABIAAADg");
	this.shape_876.setTransform(156.5,124.8);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#FFFFFF").s().p("AgcAfQgKgNAAgSQAAgQALgNQAKgOARAAQALAAAJAGQAJAFAFALQAFAKAAALQgBARgIAMQgLAOgTAAQgSABgKgNgAgHghQgDADAAAKIgBAbIABARQAAAHADADQAEADADAAQAEAAACgCQAEgDABgFQACgJAAgYQAAgPgCgGQgBgFgEgDQgCgCgEAAQgEABgDADg");
	this.shape_877.setTransform(147,124.9);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#FFFFFF").s().p("AADA7IAAgDQAEgBACgCQACgCAAgKIAAgkQAAgJgBgCQgBgDgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDABgCACQgEACgEAGIAAArQAAAJABADQACADAFAAIAAADIgqAAIAAgDQAGAAACgDQABgCAAgKIAAhSQAAgJgBgCQgCgCgGgCIAAgDIAiAAIAAAwQAHgHAEgDQAGgDAGAAQAIAAAFAEQAGAFACAGQACAGgBANIAAAfQAAAKACADQACACAFAAIAAADg");
	this.shape_878.setTransform(137.5,123.1);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#FFFFFF").s().p("AgsA9IAAgDQAGAAACgDQACgCABgJIAAhVQgBgJgCgCQgCgCgGgBIAAgDIAjAAIAAALQAEgHAEgCQAGgEAIgBQAIAAAIAGQAIAGAEAKQADAKAAALQAAANgDAKQgEAKgIAFQgIAFgJAAQgHAAgFgCQgFgDgEgFIAAAeIABAJIADADQACABAGAAIAAADgAgJglIAAArQAHAKAIAAQAFAAADgEQAFgIgBgUQAAgVgEgIQgEgFgFAAQgJAAgFANg");
	this.shape_879.setTransform(127.3,126.7);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgRQAAgTALgMQALgNAOAAQAMAAAKALQAJAKAAAUIgsAAQABAQAIAJQAFAHAJAAQAFAAAEgDQAFgDAEgIIADACQgGAOgIAGQgIAFgLAAQgRABgKgOgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgFgEgDQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgEAAgDAFg");
	this.shape_880.setTransform(114.1,124.9);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#FFFFFF").s().p("AADA7IAAgDQAEgBACgCQACgCAAgKIAAgkQAAgJgBgCQAAgDgCgCQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDABgCACQgEACgEAGIAAArQAAAJABADQACADAGAAIAAADIgrAAIAAgDQAGAAACgDQACgCgBgKIAAhSQABgJgCgCQgCgCgGgCIAAgDIAiAAIAAAwQAHgHAEgDQAGgDAGAAQAIAAAFAEQAGAFACAGQACAGgBANIAAAfQAAAKACADQACACAFAAIAAADg");
	this.shape_881.setTransform(105,123.1);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#FFFFFF").s().p("AgeA7IAAgDIADAAQAGAAADgBQADgCABgDQABgCAAgJIAAhbIgJAAQgMAAgFAFQgIAIgCANIgEAAIAAghIBqAAIAAAhIgCAAQgDgMgEgEQgDgFgHgDQgCgCgJAAIgJAAIAABbQAAAJABACQABADADACQADABAFAAIAEAAIAAADg");
	this.shape_882.setTransform(94,123.1);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgEAFgBQAGABAEAEQAEAEAAAFQAAAGgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_883.setTransform(227.6,105.8);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#FFFFFF").s().p("AAKAwQgGAHgEADQgFADgGAAQgQAAgJgOQgHgMAAgQQAAgOAEgJQAEgLAJgFQAHgFAKAAQAFAAAEACQAFACAFAGIAAgZQAAgJgBgCIgDgEIgHgBIAAgEIAkAAIAABeIAAALQAAADACABQADACAFAAIAAADIgjAHgAgKgPQgEADgCAHQgCAGAAAOQAAAPACAIQADAHAEADQACACADAAQAHAAAHgMIAAgqQgHgNgIAAQgDAAgCACg");
	this.shape_884.setTransform(220.5,101.2);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#FFFFFF").s().p("AgVA7IAAgDQAFAAADgDQACgCAAgIIAAhVQAAgIgDgCQgBgDgGAAIAAgEIAhAAIAABmQAAAIADADQACACAFAAIAAADg");
	this.shape_885.setTransform(212.9,101.1);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#FFFFFF").s().p("AgiAqIAAgDQAFAAACgDQACgCAAgLIAAgtIgBgIIgCgEIgGgCIAAgDIAhAAIAAATQAIgNAGgEQAGgEAGAAQAFAAADADQACADAAAFQAAAGgCADQgDAEgEAAQgFAAgDgDIgEgEIgCAAQgDAAgCACQgEADgCAFQgCAJAAAJIAAATIABAFIAAAGQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIAHABIAAADg");
	this.shape_886.setTransform(206.5,102.8);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#FFFFFF").s().p("AgcAfQgKgNAAgSQAAgQALgNQAKgNARAAQALgBAJAGQAJAFAFALQAFAKAAALQgBARgIAMQgLAOgTAAQgSABgKgNgAgHghQgDADgBAKIAAAbIAAARQABAHADADQAEAEADAAQAEAAACgDQAEgDABgFQACgJAAgYQAAgPgCgGQgBgFgEgDQgCgCgEAAQgEABgDADg");
	this.shape_887.setTransform(197.8,103);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#FFFFFF").s().p("AAXAqIgXg7IgVA7IgEAAIgWg6QgFgOgEgEQgCgDgEgBIAAgDIApAAIAAADQgEAAgCABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIADAJIAMAfIALgfIgBgCQgCgHgCgCIgGgCIAAgDIApAAIAAADIgGABQgBAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIADAJIALAfIALgdIACgIQAAgEgBgBQgCgCgFAAIAAgDIAYAAIAAADQgEAAgCADQgCACgEALIgXBAg");
	this.shape_888.setTransform(186.8,103.1);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgQQAAgUALgMQALgMAOAAQAMAAAKAKQAJAKAAAUIgsAAQABAQAIAJQAFAHAJAAQAFAAAEgDQAFgDAEgIIADACQgGAOgIAGQgIAGgLgBQgRABgKgOgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgEgEgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgEAAgDAFg");
	this.shape_889.setTransform(171.9,103);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#FFFFFF").s().p("AADA7IAAgDQAEgBADgCQABgCAAgKIAAgkQAAgJgBgDQAAgCgCgCQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDAAgCADQgEACgEAHIAAAqQAAAKACACQABACAGABIAAADIgrAAIAAgDQAGAAACgDQABgCABgKIAAhSQgBgJgBgCQgCgCgGgBIAAgEIAiAAIAAAwQAHgHAEgDQAGgDAGAAQAIAAAGAFQAFADACAHQABAFABAOIAAAfQAAAKABADQACABAGABIAAADg");
	this.shape_890.setTransform(162.9,101.1);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#FFFFFF").s().p("AgIA0QgFgEgCgFQgBgDAAgOIAAgrIgKAAIAAgDQALgIAHgJQAIgIAFgLIADAAIAAAeIATAAIAAAJIgTAAIAAAyQAAAHABACIACADIADABQAGABAFgJIACACQgHAQgQABQgHgBgFgEg");
	this.shape_891.setTransform(154.9,101.5);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#FFFFFF").s().p("AgcAfQgKgNABgSQAAgQAKgNQAKgNARAAQAKgBAKAGQAJAFAFALQAFAKgBALQAAARgJAMQgKAOgTAAQgSABgKgNgAgHghQgDADAAAKIgBAbIABARQAAAHADADQAEAEADAAQAEAAADgDQADgDABgFQACgJAAgYQAAgPgCgGQgBgFgEgDQgCgCgEAAQgDABgEADg");
	this.shape_892.setTransform(142.8,103);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#FFFFFF").s().p("AgIA0QgFgEgCgFQgBgDAAgOIAAgrIgKAAIAAgDQALgIAHgJQAIgIAFgLIADAAIAAAeIATAAIAAAJIgTAAIAAAyQAAAHABACIACADIADABQAGABAFgJIACACQgHAQgQABQgHgBgFgEg");
	this.shape_893.setTransform(135.4,101.5);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#FFFFFF").s().p("AgIA0QgFgEgCgFQgBgDAAgOIAAgrIgKAAIAAgDQALgIAHgJQAIgIAFgLIADAAIAAAeIATAAIAAAJIgTAAIAAAyQAAAHABACIACADIADABQAGABAFgJIACACQgHAQgQABQgHgBgFgEg");
	this.shape_894.setTransform(124.9,101.5);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#FFFFFF").s().p("AgaAmQgFgEgBgGQgDgGAAgOIAAggQAAgJgCgCQgBgCgGgBIAAgDIAiAAIAAA3QAAAJABACQAAABAAAAQABABAAAAQAAABABAAQAAAAAAABIAFABQACAAADgBQADgDAFgHIAAgrQAAgJgCgCQgCgCgFgBIAAgDIAhAAIAAA/QABAJABADQACACAFABIAAADIghAAIAAgLQgGAHgFADQgGADgHAAQgHAAgGgEg");
	this.shape_895.setTransform(116.8,103.1);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#FFFFFF").s().p("AgHA7QgFgDgFgEIgOAJIgDAAIAAhoIAAgJQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgCgCgEAAIAAgDIAiAAIAAAtQAJgKAMAAQAJAAAHAFQAIAFAEAJQAEAIAAAMQAAANgFALQgGALgJAGQgJAGgLAAQgGAAgFgCgAgJgHIAAAkIAAAOQABAFADADQAEAEAEAAQAEAAAEgDQADgDACgHQACgIAAgTQAAgSgFgHQgDgFgGAAQgGAAgHAIg");
	this.shape_896.setTransform(106.6,101.2);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgQQAAgUALgMQALgMAOAAQAMAAAKAKQAJAKAAAUIgsAAQABAQAIAJQAFAHAJAAQAFAAAEgDQAFgDAEgIIADACQgGAOgIAGQgIAGgLgBQgRABgKgOgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgEgEgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgEAAgDAFg");
	this.shape_897.setTransform(97.9,103);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#FFFFFF").s().p("AAKAwQgGAHgEADQgFADgHAAQgPAAgJgOQgHgMAAgQQAAgOAEgJQAEgLAJgFQAHgFAKAAQAFAAAEACQAFACAFAGIAAgZQAAgJgBgCIgDgEIgHgBIAAgEIAkAAIAABeIAAALQAAADACABQACACAGAAIAAADIgjAHgAgKgPQgEADgCAHQgCAGAAAOQAAAPACAIQADAHAEADQACACADAAQAHAAAHgMIAAgqQgHgNgIAAQgEAAgBACg");
	this.shape_898.setTransform(89,101.2);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#FFFFFF").s().p("AgNAoIgEgBQgDAAgCAEIgDAAIgBgeIADAAQAEANAHAFQAHAGAFAAQAEAAADgDQACgDAAgDQAAgEgCgDQgDgDgIgGQgNgKgEgEQgGgHAAgJQAAgJAGgIQAHgIAMABQAGAAAGACIAEACIADgBIADgDIADAAIABAcIgDAAQgFgNgGgEQgGgFgEAAQgEAAgDADQgCACAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABABQACADAMAJQANAIAEAGQAEAGAAAHQAAAHgDAHQgDAHgHADQgGAEgIgBQgEABgKgEg");
	this.shape_899.setTransform(420.6,81);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#FFFFFF").s().p("AAJAoQgEgEgBgGQgOANgMAAQgHAAgFgFQgFgEABgHQgBgKAJgHQAIgIAagLIAAgIQAAgKgBgCQgBgDgCgBQgDgCgDAAQgGAAgEACQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIACAFQAEADAAAEQAAAEgEADQgCADgGAAQgGAAgDgDQgDgDgBgFQAAgGAGgGQAEgGAJgDQAJgDAJAAQALAAAHAFQAHAFACAGQABAEAAANIAAAfIABAHIABACIACABQADAAACgEIADADQgFAGgEADQgFADgHAAQgGAAgEgDgAgLAJQgEAFAAAFQABAEADADQACACADAAQAFAAAFgFIAAgaQgJAFgGAHg");
	this.shape_900.setTransform(412.8,80.9);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#FFFFFF").s().p("AAXAqIgXg7IgVA7IgEAAIgWg6QgFgOgEgEQgCgDgEgBIAAgDIApAAIAAADQgEAAgCABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIADAJIAMAfIALgfIgBgCQgCgHgCgCIgGgCIAAgDIApAAIAAADIgGABQgBAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIADAJIALAfIALgdIACgIQAAgEgBgBQgCgCgFAAIAAgDIAYAAIAAADQgEAAgCADQgCACgEALIgXBAg");
	this.shape_901.setTransform(401.5,81.1);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#FFFFFF").s().p("AAFA8IAAgEQAIAAABgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAIgBgEIgGgKIgQgZIgSAWQgJAKAAAEQAAABAAAAQAAABAAAAQABABAAAAQABABAAABQADACAEAAIAHABIAAAEIguAAIAAgEQAIgBAEgDQAHgEAKgNIAXgcIgegsIgIgNQgDgDgCAAQgCgCgEAAIAAgEIA7AAIAAAEIgDAAQgFAAgCABQAAAAgBABQAAABAAAAQgBABAAAAQAAABAAAAIAAAEIAHAJIANAWIANgPQAKgMAAgEQgBgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBgCgDgBIgHgBIAAgEIArAAIAAAEQgFAAgDABQgEABgDADIgMAOIgWAbIAhAvQAIAMAEADQADADAFAAIAAAEg");
	this.shape_902.setTransform(384.1,79.2);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#FFFFFF").s().p("AgOA5QgIgEgFgIQgEgGgCgKQgFgNAAgPQABgSAFgRQAFgNAIgHQAJgHAKAAQALAAAJAHQAIAHAEAMQAHARAAASQAAASgGAPQgCAJgGAHQgFAGgGADQgGAEgIAAQgIAAgGgFgAgFg1QgDADgCAIQgBAHAAAuQAAAaACAIQABAHADACQACABADAAQAEAAADgCQADgFABgLIABglIgBgjQgBgNgDgFQgCgCgFAAQgDAAgCACg");
	this.shape_903.setTransform(373.1,79.2);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FFFFFF").s().p("AgOA5QgIgEgFgIQgEgGgCgKQgFgNAAgPQABgSAFgRQAFgNAIgHQAJgHAKAAQALAAAJAHQAIAHAEAMQAHARAAASQAAASgGAPQgCAJgGAHQgFAGgGADQgGAEgIAAQgIAAgGgFgAgFg1QgDADgCAIQgBAHAAAuQAAAaACAIQABAHADACQACABADAAQAEAAADgCQADgFABgLIABglIgBgjQgBgNgDgFQgCgCgFAAQgDAAgCACg");
	this.shape_904.setTransform(364.1,79.2);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#FFFFFF").s().p("AgOA5QgIgEgFgIQgEgGgCgKQgFgNAAgPQABgSAFgRQAFgNAIgHQAJgHAKAAQALAAAJAHQAIAHAEAMQAHARAAASQAAASgGAPQgCAJgGAHQgFAGgGADQgGAEgIAAQgIAAgGgFgAgFg1QgDADgCAIQgBAHAAAuQAAAaACAIQABAHADACQACABADAAQAEAAADgCQADgFABgLIABglIgBgjQgBgNgDgFQgCgCgFAAQgDAAgCACg");
	this.shape_905.setTransform(355.1,79.2);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FFFFFF").s().p("AgcA1QgKgJAAgMQABgKAFgHQAGgHANgGQgPgKgDgHQgEgHgBgJQAAgMALgJQAJgJASAAQAQAAAKAIQAIAIABALQAAAJgFAGQgFAHgLAFQANAIAFAIQAEAIABAKQAAAPgLAKQgLAKgSAAQgSAAgJgJgAgLAKIgDAJQgBAGAAAHQAAAIACAGQACAFAEADQAEACADAAQAGAAAFgFQAEgEAAgIQAAgSgWgPIgEAEgAgIgzQgEAEAAAGQAAAHAFAHQAEAHANAIQADgEABgFQACgGAAgGQAAgMgFgGQgDgFgHAAQgFAAgEAFg");
	this.shape_906.setTransform(346.1,79.2);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#FFFFFF").s().p("AgYA3QgPgIgJgOQgHgOgBgRQABgQAIgPQAKgPAOgJQAQgIAQAAQANAAAOAFIAKADQACAAACgCQACgCABgEIAEAAIAAApIgEAAQgDgQgLgJQgKgIgOAAQgLAAgIAGQgKAHgEAKQgFANAAAQQAAAPADAOQAFANAIAHQAIAGANAAQALAAAKgFQAKgFAKgMIAAALQgKAKgLAFQgLAEgOAAQgTAAgOgHg");
	this.shape_907.setTransform(330.4,79.1);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#FFFFFF").s().p("AAGA9IAAgEIACAAQAHAAADgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAIgBgEIgDgGIgGgPIgpAAIgFALQgCAGAAAEQAAAFAEACQACACAJAAIAAAEIgnAAIAAgEQAGAAAEgFQAEgEAGgOIAqheIACAAIArBhQAGAOAEADQADADAFAAIAAAEgAgcAUIAjAAIgRgog");
	this.shape_908.setTransform(317.5,79);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#FFFFFF").s().p("AgfA8IAAgEIAEAAQAGAAADgCQADgBABgDQABgCAAgJIAAhbIgJAAQgMAAgGAGQgHAGgCAOIgDAAIAAghIBpAAIAAAhIgDAAQgDgMgDgFQgDgEgHgDQgDgCgIAAIgJAAIAABbQAAAJABADQABACADABQADACAFAAIAEAAIAAAEg");
	this.shape_909.setTransform(306.5,79.2);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#FFFFFF").s().p("AAJAoQgEgEgBgGQgOANgMAAQgHAAgFgFQgEgEgBgHQABgKAHgHQAJgIAagLIAAgIQAAgKgBgCQgBgDgCgBQgCgCgEAAQgGAAgDACQgBABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIADAFQADADAAAEQAAAEgDADQgDADgFAAQgGAAgEgDQgEgDAAgFQABgGAEgGQAFgGAJgDQAJgDAJAAQALAAAIAFQAGAFACAGQABAEABANIAAAfIAAAHIABACIACABQADAAACgEIACADQgEAGgEADQgFADgGAAQgIAAgDgDgAgLAJQgDAFAAAFQAAAEACADQADACAEAAQAEAAAFgFIAAgaQgKAFgFAHg");
	this.shape_910.setTransform(296.2,80.9);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FFFFFF").s().p("AADAqIAAgDQAFgBACgDQABgCAAgJIAAgjQAAgKgBgDQgBgDgBgBQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgGAAgHALIAAArQAAAKACACQABACAFABIAAADIgpAAIAAgDQAFAAACgDQABgCABgKIAAgtQgBgJgBgDQgCgCgFgBIAAgDIAhAAIAAALQAHgHAEgDQAGgDAGAAQAJAAAFAEQAGAEABAHQABAFABAOIAAAfQgBAKACACQACACAGABIAAADg");
	this.shape_911.setTransform(286.5,80.9);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#FFFFFF").s().p("AgiA4QgFgEAAgGQAAgFADgEQAEgCAEAAQAEAAADACQADADAAAGIABAEIACABQACAAACgCQADgEAFgNIADgHIgbg8QgFgOgDgDQgEgDgDgBIAAgEIAqAAIAAAEIgFABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAADADAKIAOAgIAJgYQAFgOABgFQgBgDgCgCQgCgCgFAAIAAgEIAcAAIAAAEQgFAAgCACQgDAEgGAPIgYA8QgHAWgEAGQgHAHgJABQgHgBgEgEg");
	this.shape_912.setTransform(277,83);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#FFFFFF").s().p("Ag7A8IAAgEIAEAAQAFAAADgCQACgBACgDIABgLIAAhNQAAgKgBgCQgBgCgDgBQgDgCgFAAIgEAAIAAgEIA1AAQAVAAANAGQAPAHAJAOQAIAPAAARQAAANgEALQgEAKgGAHQgHAHgJAEQgIAEgMACIgQACgAgOAoIABAJQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAABQADABAEAAQAOAAAIgKQAKgNAAgdQAAgWgHgOQgGgKgJgFQgGgCgOAAg");
	this.shape_913.setTransform(265.7,79.2);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgQQAAgVALgMQALgLAOAAQAMAAAKAKQAJAKAAAUIgsAAQABAPAIAKQAFAHAJAAQAFAAAEgDQAFgDAEgIIADADQgGANgIAGQgIAGgLgBQgRAAgKgNgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgEgEgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgEAAgDAFg");
	this.shape_914.setTransform(251.1,81);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#FFFFFF").s().p("AADA8IAAgEQAEAAACgDQACgDAAgIIAAglQAAgJgBgDQgBgDgCgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDAAgDADQgDACgEAHIAAArQAAAIABADQACACAFABIAAAEIgqAAIAAgEQAGAAACgDQABgCAAgJIAAhTQAAgJgBgDQgCgBgGgBIAAgEIAiAAIAAAwQAHgHAFgDQAFgDAGAAQAIAAAFAFQAGADACAHQABAFAAANIAAAhQAAAJADADQABABAFABIAAAEg");
	this.shape_915.setTransform(242,79.2);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FFFFFF").s().p("AgIA0QgFgEgCgGQgBgDAAgNIAAgrIgKAAIAAgDQALgIAHgJQAIgIAFgLIADAAIAAAeIATAAIAAAJIgTAAIAAAxQAAAIABACIACADIADACQAGAAAFgJIACACQgHARgQAAQgHAAgFgFg");
	this.shape_916.setTransform(234,79.6);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#FFFFFF").s().p("AggA5QgFgDAAgGQAAgEADgDQACgDAEAAQADAAADABIAKAIQAIAHAHAAQAGAAAFgFQAFgFAAgIQAAgMgJgKQgIgLgQgDIAAgCQAKgDAEgDQADgDADgFQADgEAAgGQAAgHgGgFQgEgGgIAAQgMAAgJANIgDgBQAGgOAKgIQAKgHALAAQANAAAIAIQAIAHAAAKQAAAGgEAHQgEAGgIAEQALAGAFAHQAFAGAAAMQAAASgNANQgOANgVAAQgPAAgHgFg");
	this.shape_917.setTransform(221.6,79.2);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FFFFFF").s().p("AgcA1QgKgJAAgMQAAgKAGgHQAGgHANgGQgPgKgEgHQgDgHAAgJQAAgMAKgJQAJgJASAAQAQAAAKAIQAIAIABALQAAAJgFAGQgFAHgLAFQANAIAFAIQAEAIABAKQAAAPgLAKQgLAKgSAAQgRAAgKgJgAgLAKIgDAJQgCAGABAHQgBAIADAGQACAFAEADQADACAEAAQAGAAAFgFQAEgEAAgIQAAgSgWgPIgEAEgAgIgzQgEAEAAAGQAAAHAFAHQAEAHANAIQADgEABgFQACgGAAgGQAAgMgFgGQgDgFgHAAQgFAAgEAFg");
	this.shape_918.setTransform(213,79.2);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FFFFFF").s().p("AgmA8QAOgEALgHQAKgGAFgJQAGgKACgNIgJAFIgHABQgOAAgIgKQgKgJABgRQgBgMAFgKQAFgJAJgFQAJgGAKAAQAJAAAJAGQAKAGAGALQAFAMAAAOQAAASgJARQgJARgSALQgQAKgZABgAgJg0QgDAGAAAOQgBAZAGAIQAEAGAFAAQAEAAAFgDIABgQQAAgQgEgOQgBgHgFgEQgCgCgCAAQgEAAgDADg");
	this.shape_919.setTransform(203.9,79.2);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FFFFFF").s().p("AgeA9IAAgEIADAAQAIAAAEgBQADgCABgDQABgDAAgLIAAg9IgBgKIgCgEIgGgBQgEAAgHACIgBgDIArgUIACAAIAABhQAAALABADQABADAEACQACABAIAAIACAAIAAAEg");
	this.shape_920.setTransform(194.9,79);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#FFFFFF").s().p("AADAqIAAgDQAFgBACgDQABgCAAgJIAAgjQAAgKgBgDQAAgDgDgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgHAAgGALIAAArQAAAKACACQABACAFABIAAADIgpAAIAAgDQAFAAACgDQACgCAAgKIAAgtQAAgJgCgDQgCgCgFgBIAAgDIAhAAIAAALQAGgHAGgDQAFgDAGAAQAJAAAFAEQAGAEABAHQACAFAAAOIAAAfQAAAKABACQACACAGABIAAADg");
	this.shape_921.setTransform(181,80.9);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FFFFFF").s().p("AgeA8IAAgEIAEAAQAFAAADgCIAEgEQABgCAAgJIAAhNQAAgKgBgCQgBgCgDgBQgDgCgFAAIgEAAIAAgEIA9AAIAAAEIgEAAQgFAAgDACQgCAAgCADQgBACAAAKIAABNQAAAJABADQABACADABQADACAFAAIAEAAIAAAEg");
	this.shape_922.setTransform(172.4,79.2);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgDAFAAQAGAAAFADQADAFAAAFQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_923.setTransform(162.2,83.9);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FFFFFF").s().p("AgVA8IAAgEQAFAAADgDQACgCAAgIIAAhVQAAgIgDgDQgBgCgGAAIAAgEIAhAAIAABmQAAAIADADQACACAFAAIAAAEg");
	this.shape_924.setTransform(157.6,79.2);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#FFFFFF").s().p("AAJAoQgEgEgBgGQgOANgMAAQgHAAgFgFQgFgEABgHQAAgKAHgHQAJgIAagLIAAgIQAAgKgBgCQgBgDgCgBQgDgCgDAAQgGAAgEACQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIACAFQAEADAAAEQAAAEgEADQgCADgGAAQgFAAgEgDQgEgDABgFQAAgGAEgGQAGgGAIgDQAJgDAJAAQALAAAIAFQAGAFACAGQACAEgBANIAAAfIABAHIABACIACABQACAAADgEIACADQgEAGgFADQgEADgHAAQgGAAgEgDgAgLAJQgDAFgBAFQAAAEAEADQACACADAAQAFAAAFgFIAAgaQgJAFgGAHg");
	this.shape_925.setTransform(150.7,80.9);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgQQAAgVALgMQALgLAOAAQAMAAAKAKQAJAKAAAUIgsAAQABAPAIAKQAFAHAJAAQAFAAAEgDQAFgDAEgIIADADQgGANgIAGQgIAGgLgBQgRAAgKgNgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgEgEgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgEAAgDAFg");
	this.shape_926.setTransform(142.1,81);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#FFFFFF").s().p("AAKAwQgGAHgEADQgFADgHAAQgPAAgJgOQgIgMAAgQQAAgOAFgJQAFgLAHgFQAJgFAIAAQAHAAADACQAFACAFAGIAAgZQAAgJgBgCIgDgEIgHgBIAAgEIAjAAIAABeIABALQAAADADABQACACAEAAIAAADIgiAHgAgLgPQgCADgCAHQgDAGAAAOQAAAPADAIQACAHADADQADACAEAAQAGAAAHgMIAAgqQgGgNgJAAQgEAAgCACg");
	this.shape_927.setTransform(133.1,79.3);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#FFFFFF").s().p("AgIA0QgFgEgCgGQgBgDAAgNIAAgrIgKAAIAAgDQALgIAHgJQAIgIAFgLIADAAIAAAeIATAAIAAAJIgTAAIAAAxQAAAIABACIACADIADACQAGAAAFgJIACACQgHARgQAAQgHAAgFgFg");
	this.shape_928.setTransform(120.5,79.6);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#FFFFFF").s().p("AAJAoQgEgEgBgGQgOANgMAAQgHAAgFgFQgEgEAAgHQgBgKAJgHQAIgIAagLIAAgIQAAgKgBgCQgBgDgCgBQgDgCgDAAQgGAAgEACQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIACAFQAEADAAAEQAAAEgEADQgDADgEAAQgHAAgDgDQgDgDgBgFQAAgGAGgGQAEgGAJgDQAJgDAJAAQAMAAAGAFQAHAFACAGQABAEAAANIAAAfIABAHIABACIACABQADAAACgEIADADQgFAGgEADQgGADgGAAQgGAAgEgDgAgLAJQgDAFAAAFQAAAEADADQACACAEAAQAEAAAFgFIAAgaQgKAFgFAHg");
	this.shape_929.setTransform(113.2,80.9);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgQQAAgVALgMQALgLAOAAQAMAAAKAKQAJAKAAAUIgsAAQABAPAIAKQAFAHAJAAQAFAAAEgDQAFgDAEgIIADADQgGANgIAGQgIAGgLgBQgRAAgKgNgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgEgEgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgEAAgDAFg");
	this.shape_930.setTransform(104.6,81);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#FFFFFF").s().p("AgiAqIAAgDQAFAAACgDQACgCAAgLIAAgtIgBgIIgCgEIgGgCIAAgDIAhAAIAAATQAIgNAGgEQAGgEAGAAQAFAAADADQACADAAAFQAAAGgCADQgDAEgEAAQgFAAgDgDIgEgEIgCAAQgDAAgCACQgEADgCAFQgCAJAAAJIAAATIABAFIAAAGQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAHABIAAADg");
	this.shape_931.setTransform(97,80.9);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FFFFFF").s().p("AgWA7QgJgCgEgDQgEgEAAgFQAAgEADgDQADgDAIgCQgLgGAAgKQAAgGAFgGQAEgFAKgEQgLgEgGgHQgFgHAAgJQAAgMAKgJQAKgJAPAAQAHAAAJAEIAcAAIAAAJIgQAAIAGAIQACAFAAAFQAAAJgFAGQgFAHgIADQgIAEgGAAIgLAAQgDAAgDABQgDADAAADQAAADADADQACACAFAAIAPgBQASAAAHAEQAKAGAAAMQAAAHgFAGQgEAGgIADQgLAFgOAAQgLAAgJgDgAgTAkQgFADAAAFQAAAEAFAEQAFAEAOAAQAMAAAHgEQAHgDAAgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBQgCgCgFgBQgFgBgTAAQgJAAgDABgAgLgyQgDAFAAAQQAAANADAFQAEAFAEAAQAFAAADgFQAEgFAAgOQAAgQgEgFQgDgEgEAAQgFAAgEAFg");
	this.shape_932.setTransform(88.5,82.8);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#FFFFFF").s().p("AAJAoQgEgEgBgGQgOANgMAAQgHAAgFgFQgEgEAAgHQgBgKAJgHQAIgIAagLIAAgIQAAgKgBgCQgBgDgCgBQgDgCgDAAQgGAAgEACQAAABgBAAQAAABAAAAQgBAAAAABQAAABAAAAIACAFQAEADAAAEQAAAEgEADQgDADgEAAQgHAAgDgDQgDgDgBgFQAAgGAGgGQAEgGAJgDQAJgDAJAAQAMAAAGAFQAHAFACAGQABAEAAANIAAAfIABAHIABACIACABQACAAADgEIADADQgFAGgEADQgGADgGAAQgGAAgEgDgAgLAJQgDAFAAAFQAAAEADADQACACAEAAQAEAAAFgFIAAgaQgKAFgFAHg");
	this.shape_933.setTransform(411.6,59);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FFFFFF").s().p("AgiA4QgFgEAAgGQAAgFADgEQADgDAFAAQAEABADACQACADAAAGIABAEIADABQABAAADgCQADgEAFgNIADgHIgbg8QgGgOgDgDQgDgDgDgBIAAgDIAqAAIAAADIgFABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAADADAKIAOAgIAKgYQAEgOAAgFQAAgEgCgCQgCgBgFAAIAAgDIAbAAIAAADQgDAAgDACQgDADgGAQIgXA8QgIAWgEAGQgGAHgJAAQgIAAgEgEg");
	this.shape_934.setTransform(397.8,61);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#FFFFFF").s().p("AgHA7QgFgDgFgEIgOAJIgDAAIAAhoIAAgJQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgCgCgEAAIAAgDIAiAAIAAAtQAJgKAMAAQAJAAAHAFQAIAFAEAJQAEAIAAAMQAAANgFALQgGALgJAGQgJAGgLAAQgGAAgFgCgAgJgHIAAAkIAAAOQABAFADADQAEAEAEAAQAEAAAEgDQADgDACgHQACgIAAgTQAAgSgFgHQgDgFgGAAQgGAAgHAIg");
	this.shape_935.setTransform(388.1,57.3);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FFFFFF").s().p("AAKAwQgGAHgEADQgFADgHAAQgPAAgJgOQgIgMABgQQgBgOAFgJQAFgLAHgFQAJgFAIAAQAHAAADACQAEACAGAGIAAgZQAAgJgBgCIgDgEIgHgBIAAgEIAjAAIAABeIABALQABADACABQACACAEAAIAAADIgiAHgAgLgPQgCADgCAHQgDAGAAAOQAAAPADAIQACAHADADQACACAFAAQAGAAAHgMIAAgqQgGgNgJAAQgEAAgCACg");
	this.shape_936.setTransform(374,57.3);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgQQAAgVALgMQALgMAOABQAMgBAKALQAJAKAAAUIgsAAQABAPAIAKQAFAHAJAAQAFAAAEgDQAFgDAEgIIADADQgGANgIAGQgIAGgLgBQgRAAgKgNgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgEgEgDQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgEAAgDAFg");
	this.shape_937.setTransform(364.9,59.1);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FFFFFF").s().p("AgYAfQgJgMAAgRQgBgQAKgOQAKgPASABQANAAAHAGQAIAGAAAIQAAAFgDADQgDADgFAAQgGAAgDgDQgDgEgBgIQgBgGgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgDAAgDAFQgFAHAAANQAAAMAEAKQAEALAFAEQAFAFAGAAQAEAAAEgCQAEgCAFgGIADACQgFALgJAFQgJAGgJgBQgQAAgKgMg");
	this.shape_938.setTransform(357,59.1);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#FFFFFF").s().p("AADAqIAAgDQAEgBADgDQABgCAAgJIAAgjQAAgKgBgDQgBgDgCgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgGAAgHALIAAArQAAAKACACQABACAFABIAAADIgpAAIAAgDQAFAAACgDQACgCAAgKIAAgtQAAgJgCgDQgCgCgFgBIAAgDIAhAAIAAALQAGgHAGgDQAFgDAGAAQAJAAAFAEQAFAEACAHQABAFAAAOIAAAfQAAAKACACQACACAFABIAAADg");
	this.shape_939.setTransform(347.9,58.9);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FFFFFF").s().p("AAJAoQgEgEgBgGQgOANgMAAQgHAAgFgFQgFgEABgHQgBgKAJgHQAIgIAagLIAAgIQAAgKgBgCQgBgDgCgBQgDgCgDAAQgGAAgEACQAAABgBAAQAAABAAAAQgBAAAAABQAAABAAAAIACAFQAEADAAAEQAAAEgEADQgCADgGAAQgGAAgDgDQgDgDgBgFQAAgGAGgGQAEgGAJgDQAJgDAJAAQALAAAHAFQAHAFACAGQABAEAAANIAAAfIABAHIABACIACABQACAAADgEIADADQgFAGgEADQgGADgGAAQgGAAgEgDgAgLAJQgEAFAAAFQABAEADADQACACADAAQAFAAAFgFIAAgaQgJAFgGAHg");
	this.shape_940.setTransform(338.6,59);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#FFFFFF").s().p("AgBAqIgcg/QgFgLgDgDQgCgCgDgBIAAgDIAqAAIAAADQgDAAgBABQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAADADAJIANAeIALgaQAFgLgBgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBgCgGAAIAAgDIAbAAIAAADQgEAAgCADQgCACgFAMIgbA/g");
	this.shape_941.setTransform(329.3,59.2);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#FFFFFF").s().p("AAKAwQgGAHgEADQgFADgHAAQgPAAgJgOQgIgMABgQQgBgOAFgJQAFgLAHgFQAJgFAIAAQAHAAADACQAEACAGAGIAAgZQAAgJgBgCIgDgEIgHgBIAAgEIAjAAIAABeIABALQABADACABQACACAEAAIAAADIgiAHgAgLgPQgCADgCAHQgDAGAAAOQAAAPADAIQACAHADADQACACAFAAQAGAAAHgMIAAgqQgGgNgJAAQgEAAgCACg");
	this.shape_942.setTransform(320,57.3);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#FFFFFF").s().p("AAJAoQgEgEgBgGQgOANgMAAQgHAAgFgFQgFgEABgHQAAgKAIgHQAIgIAagLIAAgIQAAgKgBgCQgBgDgCgBQgDgCgDAAQgGAAgEACQAAABgBAAQAAABAAAAQgBAAAAABQAAABAAAAIACAFQAEADAAAEQAAAEgEADQgCADgGAAQgFAAgEgDQgEgDABgFQAAgGAEgGQAGgGAIgDQAJgDAJAAQALAAAHAFQAHAFACAGQACAEgBANIAAAfIABAHIABACIACABQACAAADgEIACADQgEAGgFADQgEADgHAAQgGAAgEgDgAgLAJQgEAFAAAFQAAAEAEADQACACADAAQAFAAAFgFIAAgaQgJAFgGAHg");
	this.shape_943.setTransform(310.6,59);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#FFFFFF").s().p("AgNAoIgEgBQgDAAgCAEIgDAAIgBgeIADAAQAEAMAHAGQAHAGAFAAQAEAAADgDQACgDAAgDQAAgEgCgDQgDgEgIgFQgNgKgEgEQgGgHAAgJQAAgJAGgIQAHgHAMAAQAGAAAGACIAEACIADgBIADgDIADAAIABAcIgDAAQgFgNgGgFQgGgEgEAAQgEAAgDADQgCACAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABABQACADAMAJQANAIAEAGQAEAGAAAHQAAAHgDAHQgDAGgHAEQgGADgIAAQgEAAgKgDg");
	this.shape_944.setTransform(297.8,59.1);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgQQAAgVALgMQALgMAOABQAMgBAKALQAJAKAAAUIgsAAQABAPAIAKQAFAHAJAAQAFAAAEgDQAFgDAEgIIADADQgGANgIAGQgIAGgLgBQgRAAgKgNgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgEgEgDQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgEAAgDAFg");
	this.shape_945.setTransform(290.4,59.1);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FFFFFF").s().p("AADAqIAAgDQAEgBADgDQABgCAAgJIAAgjQAAgKgBgDQAAgDgDgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgHAAgGALIAAArQAAAKACACQABACAFABIAAADIgpAAIAAgDQAFAAACgDQACgCAAgKIAAgtQAAgJgCgDQgCgCgFgBIAAgDIAhAAIAAALQAGgHAGgDQAFgDAGAAQAJAAAFAEQAFAEACAHQACAFAAAOIAAAfQAAAKABACQACACAGABIAAADg");
	this.shape_946.setTransform(281.4,58.9);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#FFFFFF").s().p("AgcAeQgJgNgBgQQAAgSALgNQAKgNARABQAKgBAKAGQAJAFAFAKQAEALABALQgBARgIAMQgLAOgTAAQgRAAgLgNgAgGghQgEAEgBAJIgBAbIABARQABAHAEADQADADADABQAEgBACgCQAEgDABgFQABgJABgYQgBgPgBgFQgCgGgDgCQgCgCgEgBQgDAAgDAEg");
	this.shape_947.setTransform(271.8,59.1);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#FFFFFF").s().p("AADA8IAAgEQAEAAADgDQABgDAAgIIAAglQAAgJgBgDQgBgDgCgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgDAAgDACQgDADgEAGIAAArQAAAIABADQACACAFABIAAAEIgpAAIAAgEQAFAAACgDQACgCAAgJIAAhTQAAgJgCgDQgCgBgFgBIAAgEIAhAAIAAAwQAHgHAFgDQAFgDAGAAQAIAAAFAFQAGADACAHQABAFAAANIAAAhQABAJACACQABACAFABIAAAEg");
	this.shape_948.setTransform(262.4,57.2);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#FFFFFF").s().p("AgrA9IAAgDQAFAAADgDQACgCAAgIIAAhWQAAgIgCgDQgDgCgFgBIAAgDIAiAAIAAAKQAEgGAEgDQAGgDAIAAQAJgBAHAGQAIAGADAKQAEAKABAMQgBAMgEAJQgEALgHAFQgIAGgJgBQgHAAgFgDQgEgCgFgGIAAAfIABAJIADADQACABAGAAIAAADgAgJglIAAArQAIALAHgBQAFAAADgEQAFgIAAgTQgBgWgFgHQgDgGgGAAQgIAAgFANg");
	this.shape_949.setTransform(252.1,60.9);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgQQAAgVALgMQALgMAOABQAMgBAKALQAJAKAAAUIgsAAQABAPAIAKQAFAHAJAAQAFAAAEgDQAFgDAEgIIADADQgGANgIAGQgIAGgLgBQgRAAgKgNgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgEgEgDQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgEAAgDAFg");
	this.shape_950.setTransform(238.9,59.1);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#FFFFFF").s().p("AgVA8IAAgEQAFAAADgDQABgCAAgIIAAhVQAAgIgCgDQgCgCgFAAIAAgEIAhAAIAABmQAAAIACACQACADAGAAIAAAEg");
	this.shape_951.setTransform(232.4,57.2);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#FFFFFF").s().p("AgVA9IAAgDQAFAAADgEQACgCAAgIIAAgvQAAgIgCgDQgCgCgGgBIAAgDIAhAAIAABAQAAAIACADQACACAGABIAAADgAgIglQgEgEAAgGQAAgFAEgEQADgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgDgEg");
	this.shape_952.setTransform(227.4,57.1);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FFFFFF").s().p("AgHA7QgFgDgFgEIgOAJIgDAAIAAhoIAAgJQgBAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgCgCgEAAIAAgDIAiAAIAAAtQAJgKAMAAQAJAAAHAFQAIAFAEAJQAEAIAAAMQAAANgFALQgGALgJAGQgJAGgLAAQgGAAgFgCgAgJgHIAAAkIAAAOQABAFADADQAEAEAEAAQAEAAAEgDQADgDACgHQACgIAAgTQAAgSgFgHQgDgFgGAAQgGAAgHAIg");
	this.shape_953.setTransform(219.6,57.3);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FFFFFF").s().p("AgcAeQgKgNABgQQAAgSAKgNQAKgNARABQAKgBAKAGQAJAFAFAKQAFALgBALQAAARgJAMQgKAOgTAAQgSAAgKgNgAgHghQgDAEAAAJIgBAbIABARQAAAHADADQAEADADABQAEgBADgCQADgDABgFQACgJAAgYQAAgPgCgFQgBgGgEgCQgCgCgEgBQgDAAgEAEg");
	this.shape_954.setTransform(210.3,59.1);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FFFFFF").s().p("AAbAqIAAgDQAFAAACgEQACgCAAgJIAAgiQAAgLgBgDQgBgDgCgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAgBAAQgDAAgEADQgEADgEAFIAAArQAAAJABACQADAEAFAAIAAADIgpAAIAAgDIAFgCQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIABgKIAAgiIgBgOQgBgDgCgBIgEgCQgEAAgDACQgEADgFAGIAAArQAAAJACADQACADAFAAIAAADIgrAAIAAgDQAGAAACgDQACgCgBgKIAAgtQABgJgCgDQgCgCgGgBIAAgDIAiAAIAAALQAHgHAFgDQAGgDAIAAQAHAAAEADQAGAEADAIQAHgIAHgEQAGgDAHAAQAIAAAGAEQAEADACAGQADAGAAAOIAAAgQAAAKABACQACACAGABIAAADg");
	this.shape_955.setTransform(198.4,58.9);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FFFFFF").s().p("AgNAoIgEgBQgDAAgCAEIgDAAIgBgeIADAAQAEAMAHAGQAHAGAFAAQAEAAADgDQACgDAAgDQAAgEgCgDQgDgEgIgFQgNgKgEgEQgGgHAAgJQAAgJAGgIQAHgHAMAAQAGAAAGACIAEACIADgBIADgDIADAAIABAcIgDAAQgFgNgGgFQgGgEgEAAQgEAAgDADQgCACAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABABABQACADAMAJQANAIAEAGQAEAGAAAHQAAAHgDAHQgDAGgHAEQgGADgIAAQgEAAgKgDg");
	this.shape_956.setTransform(178.3,59.1);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FFFFFF").s().p("AgBAdIgJggIgCgMQAAgGAEgDQAEgEAEAAQAGAAAEAEQADAEAAAFIgCAMIgJAgg");
	this.shape_957.setTransform(172.3,53.9);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FFFFFF").s().p("AgPA5QgGgEgGgIQgEgGgDgKQgDgOAAgOQAAgSAFgRQAEgNAJgHQAKgHAJAAQAKAAAJAHQAJAHAFAMQAFAQAAATQAAASgEAPQgEAKgFAGQgEAGgHAEQgHADgHAAQgHAAgIgFgAgGg1QgDADgBAIQgBAHAAAuQAAAaACAIQABAGACACQADACADAAQAEAAADgCQAEgFAAgLIAAglIAAgkQgBgMgDgFQgDgCgEAAQgDAAgDACg");
	this.shape_958.setTransform(165.3,57.2);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FFFFFF").s().p("AgcA1QgJgJAAgMQAAgKAFgHQAFgHAOgGQgOgKgEgHQgFgHAAgJQAAgMAKgJQALgJAQAAQASAAAIAIQAKAIgBALQABAJgFAGQgFAHgLAFQANAIAFAIQAFAIgBAKQABAPgLAKQgLAKgSAAQgRAAgKgJgAgLAKIgDAJQgCAGAAAHQAAAIADAGQACAFAEADQADACAEAAQAGAAAEgFQAFgEAAgIQAAgSgWgPIgEAEgAgIgzQgEAEAAAGQAAAHAEAHQAFAHAMAIQAEgEACgFQABgGAAgGQAAgMgFgGQgEgFgGAAQgFAAgEAFg");
	this.shape_959.setTransform(156.3,57.2);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#FFFFFF").s().p("AgmA8QAPgEAKgGQAKgHAFgJQAGgKACgNIgJAFIgHABQgOAAgJgKQgIgJgBgRQAAgMAFgKQAFgJAJgFQAJgGAKAAQAKAAAJAGQAJAGAFALQAGAMAAAOQAAASgJARQgJARgSALQgQAKgZABgAgJg0QgDAGgBAOQABAYAFAJQAEAGAGAAQADAAAGgDIABgQQgBgQgDgOQgDgIgDgDQgDgCgDAAQgEAAgCADg");
	this.shape_960.setTransform(147.3,57.2);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FFFFFF").s().p("AgdA9IAAgEIACAAQAJAAACgBQAEgCABgDQABgDAAgLIAAg9IAAgKIgEgEIgEgBQgFAAgGACIgCgDIAqgUIAEAAIAABhQAAALABADQABADACACQADABAHAAIADAAIAAAEg");
	this.shape_961.setTransform(138.2,57.1);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#FFFFFF").s().p("AgaAeQgHgMAAgQQAAgVALgMQALgMAOABQAMgBAKALQAJAKAAAUIgsAAQABAPAIAKQAFAHAJAAQAFAAAEgDQAFgDAEgIIADADQgGANgIAGQgIAGgLgBQgRAAgKgNgAgFggQgFAHAAAOIAAADIAXAAQAAgOgCgGQgBgEgEgDQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgEAAgDAFg");
	this.shape_962.setTransform(125.4,59.1);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FFFFFF").s().p("AADA8IAAgEQAEAAACgDQACgDAAgIIAAglQAAgJgBgDQgBgDgCgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgDAAgCACQgEADgEAGIAAArQAAAIABADQACACAFABIAAAEIgqAAIAAgEQAGAAACgDQABgCAAgJIAAhTQAAgJgBgDQgCgBgGgBIAAgEIAiAAIAAAwQAHgHAEgDQAGgDAGAAQAIAAAFAFQAGADACAHQACAFgBANIAAAhQAAAJACACQACACAFABIAAAEg");
	this.shape_963.setTransform(116.4,57.2);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#FFFFFF").s().p("AgIA0QgFgEgCgGQgBgDAAgNIAAgrIgKAAIAAgDQALgIAHgJQAIgIAFgLIADAAIAAAfIATAAIAAAIIgTAAIAAAxQAAAIABACIACAEIADABQAGAAAFgJIACACQgHARgQAAQgHAAgFgFg");
	this.shape_964.setTransform(108.4,57.6);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FFFFFF").s().p("AADAqIAAgDQAEgBADgDQABgCAAgJIAAgjQAAgKgBgDQgBgDgCgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgHAAgGALIAAArQAAAKACACQABACAFABIAAADIgpAAIAAgDQAFAAACgDQACgCAAgKIAAgtQAAgJgCgDQgCgCgFgBIAAgDIAhAAIAAALQAGgHAGgDQAFgDAGAAQAJAAAFAEQAFAEACAHQABAFAAAOIAAAfQAAAKACACQACACAFABIAAADg");
	this.shape_965.setTransform(95.9,58.9);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#FFFFFF").s().p("AgeA8IAAgEIAEAAQAFAAADgCIAEgEQABgCAAgJIAAhNQAAgJgBgDQgBgCgDgCQgDgBgFAAIgEAAIAAgEIA9AAIAAAEIgEAAQgFAAgDABQgCABgCADQgBADAAAJIAABNQAAAKABACQABACADABQADACAFAAIAEAAIAAAEg");
	this.shape_966.setTransform(87.3,57.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.backArrow5},{t:this.instance_2},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793}]},24).to({state:[]},1).wait(23));

	// 2000s
	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FFFFFF").s().p("AgGA3QgCgDgBgEQAAgDAEgEQACgCADAAQAEAAADADQACACAAAEQAAAEgCADQgDADgEgBQgDABgDgDgAgFAXIgChQIAOAAIgBBQg");
	this.shape_967.setTransform(507,361.7);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#FFFFFF").s().p("AgZAgQgKgMAAgUQAAgRALgMQALgNAPAAQAQAAAJALQAJAKAAATIAAAFIg4AAQAAANAHAIQAHAHALAAQANAAAMgJIAAANQgLAIgSAAQgQgBgKgKgAgMgYQgHAHgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAGg");
	this.shape_968.setTransform(500.4,363.2);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FFFFFF").s().p("AgVApIAAhQIAOAAIAAARIABAAQAGgSAOAAIAIABIAAAOQgEgCgGAAQgJAAgEAIQgGAHAAAMIAAApg");
	this.shape_969.setTransform(494,363.1);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgMASAAQASAAALAMQAKALAAATQAAATgLALQgLAMgSABQgSAAgLgMgAgSgVQgHAIAAANQAAAOAHAJQAHAHALAAQANAAAGgHQAHgIAAgPQAAgOgHgHQgGgIgNAAQgLAAgHAIg");
	this.shape_970.setTransform(485.8,363.2);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#FFFFFF").s().p("AAsAqIAAguQAAgNgEgGQgEgGgKABQgIgBgFAIQgGAIAAAJIAAAuIgNAAIAAgwQAAgXgSABQgIAAgGAGQgFAIAAAKIAAAuIgOAAIAAhQIAOAAIAAAMIAAAAQAJgPAQAAQAJAAAGAFQAFAFACAHQAJgRASAAQAbABAAAgIAAAyg");
	this.shape_971.setTransform(474.1,363.1);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#FFFFFF").s().p("AgVApIAAhQIAOAAIAAARIABAAQAGgSAOAAIAIABIAAAOQgEgCgGAAQgJAAgEAIQgGAHAAAMIAAApg");
	this.shape_972.setTransform(460.3,363.1);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgMASAAQASAAALAMQAKALAAATQAAATgLALQgLAMgSABQgSAAgLgMgAgSgVQgHAIAAANQAAAOAHAJQAHAHALAAQANAAAGgHQAHgIAAgPQAAgOgHgHQgGgIgNAAQgLAAgHAIg");
	this.shape_973.setTransform(452,363.2);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#FFFFFF").s().p("AgKA9IAAhEIgOAAIAAgMIAOAAIAAgNQAAgNAHgHQAHgIALAAIAKABIAAANQgEgCgFAAQgNAAAAARIAAAMIATAAIAAAMIgTAAIAABEg");
	this.shape_974.setTransform(445,361.2);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FFFFFF").s().p("AgZAgQgKgMAAgUQAAgRALgMQALgNAPAAQAQAAAJALQAJAKAAATIAAAFIg4AAQAAANAHAIQAHAHALAAQANAAAMgJIAAANQgLAIgSAAQgQgBgKgKgAgMgYQgHAHgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAGg");
	this.shape_975.setTransform(433.5,363.2);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#FFFFFF").s().p("AAsAqIAAguQAAgNgEgGQgEgGgKABQgIgBgFAIQgGAIAAAJIAAAuIgNAAIAAgwQAAgXgSABQgIAAgGAGQgFAIAAAKIAAAuIgOAAIAAhQIAOAAIAAAMIAAAAQAJgPAQAAQAJAAAGAFQAFAFACAHQAJgRASAAQAbABAAAgIAAAyg");
	this.shape_976.setTransform(422.2,363.1);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_977.setTransform(407.3,361.3);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgNATAAQALAAAIAFIAAAOQgJgHgKABQgMgBgHAJQgIAJAAAMQAAAOAHAJQAHAHAMAAQAKAAAKgGIAAANQgKAFgNABQgQAAgLgMg");
	this.shape_978.setTransform(398.9,363.2);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#FFFFFF").s().p("AgHA7IAAhQIAOAAIAABQgAgGgrQgCgDAAgDQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgDgDg");
	this.shape_979.setTransform(393.1,361.3);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#FFFFFF").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_980.setTransform(389,361.3);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#FFFFFF").s().p("AgbArQgPgPAAgaQABgaAQgRQAQgRAZAAQAQAAALAFIAAAPQgNgGgOAAQgTAAgMAMQgMANABAUQAAAVALAMQALAMARAAQARAAANgIIAAAOQgNAHgTAAQgYAAgOgQg");
	this.shape_981.setTransform(382,361.6);

	this.movieClip_2 = new lib.Symbol1();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(435.2,238.9,1,1,0,0,0,3,7);

	this.backArrow4 = new lib.btnBack();
	this.backArrow4.name = "backArrow4";
	this.backArrow4.parent = this;
	this.backArrow4.setTransform(69,328,1,1,0,0,0,32,32);

	this.instance_3 = new lib.motoRazr_00s();
	this.instance_3.parent = this;
	this.instance_3.setTransform(102.6,208.2,1,1,-90,0,0,144.8,38.6);

	this.instance_4 = new lib.bbBold_00s();
	this.instance_4.parent = this;
	this.instance_4.setTransform(256.6,212.5,1,1,0,0,0,59.9,59.8);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_982.setTransform(134.3,370.6);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgNATAAQALAAAIAFIAAAOQgJgHgKABQgMgBgHAJQgIAJAAANQAAAOAHAHQAHAIAMAAQAKAAAKgGIAAANQgKAGgNAAQgQAAgLgMg");
	this.shape_983.setTransform(125.9,372.6);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#FFFFFF").s().p("AgZAkQgHgHAAgKQABgWAagEIAXgDQAAgUgQAAQgOAAgMAKIAAgOQAMgIAPAAQAdAAAAAgIAAAyIgOAAIAAgMQgIAPgQAAQgMAAgHgHgAAAACQgJABgFAFQgDADAAAHQgBAFAFAEQAEAEAGAAQAJAAAGgHQAGgGAAgKIAAgIg");
	this.shape_984.setTransform(117.8,372.6);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FFFFFF").s().p("AgWAwIgBAAIAAALIgOAAIAAh3IAOAAIAAA1IABAAQAJgQASAAQAPAAAJALQAJAKAAASQAAAUgKANQgKAMgRAAQgPAAgIgNgAgQgDQgHAGAAALIAAALQAAALAHAGQAGAHAKAAQAKAAAHgIQAGgKAAgPQAAgNgGgGQgGgIgKAAQgKAAgHAIg");
	this.shape_985.setTransform(109.5,370.7);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgMASAAQASAAALAMQAKALAAATQAAATgLALQgLANgSAAQgSAAgLgMgAgSgWQgHAJAAAOQAAAOAHAHQAHAIALAAQANAAAGgIQAHgHAAgPQAAgOgHgIQgGgHgNAAQgLAAgHAHg");
	this.shape_986.setTransform(95.2,372.6);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FFFFFF").s().p("AgfA3IAAgOQAOAIAMgBQAdAAAAgeIAAgJIgBAAQgJAQgRAAQgQAAgJgMQgJgKAAgSQAAgUAKgMQAKgMARgBQAPABAIANIABAAIAAgMIAOAAIAABKQAAAtgrAAQgPAAgLgGgAgQgnQgGAJAAAOQAAAOAGAGQAGAIAKAAQAKABAHgIQAHgHAAgMIAAgLQAAgJgHgHQgGgHgJABQgLgBgHAJg");
	this.shape_987.setTransform(85.4,374.4);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgMASAAQASAAALAMQAKALAAATQAAATgLALQgLANgSAAQgSAAgLgMgAgSgWQgHAJAAAOQAAAOAHAHQAHAIALAAQANAAAGgIQAHgHAAgPQAAgOgHgIQgGgHgNAAQgLAAgHAHg");
	this.shape_988.setTransform(71.7,372.6);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FFFFFF").s().p("AgJAdIAAgtIgOAAIAAgNIAOAAIAAgTIANgEIAAAXIAUAAIAAANIgUAAIAAArQAAAHADAEQACAEAHgBQAEAAAEgCIAAALQgFAEgHAAQgVAAAAgZg");
	this.shape_989.setTransform(64.2,371.5);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_990.setTransform(53.6,370.6);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgNATAAQALAAAIAFIAAAOQgJgHgKABQgMgBgHAJQgIAJAAANQAAAOAHAHQAHAIAMAAQAKAAAKgGIAAANQgKAGgNAAQgQAAgLgMg");
	this.shape_991.setTransform(45.2,372.6);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#FFFFFF").s().p("AgHA7IAAhQIAOAAIAABQgAgGgrQgCgDAAgDQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgDgDg");
	this.shape_992.setTransform(39.4,370.7);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FFFFFF").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_993.setTransform(35.3,370.6);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#FFFFFF").s().p("AgbArQgPgPAAgaQABgaAPgRQARgRAZAAQAQAAALAFIAAAPQgNgGgOAAQgTAAgMAMQgMANABAUQAAAVALAMQALAMARAAQARAAANgIIAAAOQgNAHgTAAQgYAAgOgQg");
	this.shape_994.setTransform(28.3,370.9);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FFFFFF").s().p("Ag2BMIAAgeQAWAPAZAAQAhABAAgWQAAgJgIgHQgHgGgVgIQgbgKgIgLQgJgLAAgPQAAgVATgNQASgNAaAAQAUAAASAIIAAAbQgSgLgXAAQgNAAgJAFQgIAHAAAJQAAAKAGAFQAGAGAVAIQAbAKAJAKQAKALAAAQQAAAWgSANQgTANgcAAQgZAAgTgJg");
	this.shape_995.setTransform(429.1,65.3);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FFFFFF").s().p("AgzA+QgTgVAAgoQAAgkAVgYQAWgZAfAAQAgAAARAUQASAVAAAlIAAANIhwAAQABAaANAPQAOANAXAAQAbAAAXgRIAAAZQgWAQgjAAQgiAAgUgXgAgZgwQgNANgDAVIBUAAQAAgXgLgMQgKgLgTAAQgQAAgMAMg");
	this.shape_996.setTransform(413.6,65.3);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FFFFFF").s().p("AAoBTIAAhbQAAgyglAAQgRAAgMAOQgNAOAAAVIAABcIgdAAIAAihIAdAAIAAAbIABAAQASgfAiAAQAbAAAOASQANARAAAgIAABig");
	this.shape_997.setTransform(395.9,65.1);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FFFFFF").s().p("Ag6A+QgWgXABglQAAgoAVgWQAXgYAlAAQAlAAAVAXQAVAWAAAnQAAAlgXAYQgWAYgkAAQglAAgVgXgAgkgrQgOAQgBAcQAAAcAPAQQAOAQAXAAQAZAAAMgPQANgRAAgdQAAgcgNgRQgMgPgZAAQgXAAgOARg");
	this.shape_998.setTransform(377,65.3);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FFFFFF").s().p("AAoB4IAAhdQAAgwgkAAQgSAAgNAOQgMANABAWIAABcIgdAAIAAjvIAdAAIAABoIAAAAQATgeAhAAQA2AAABBBIAABkg");
	this.shape_999.setTransform(358.4,61.4);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FFFFFF").s().p("AhGBxIAAjhIBBAAQAjgBAVATQAUARAAAhQAAAhgYAUQgYAVgigBIgeAAIAABUgAgpADIAbAAQAaAAAOgLQAOgMAAgXQAAgrgzAAIgeAAg");
	this.shape_1000.setTransform(340.6,62);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#FFFFFF").s().p("AgTA7IAAhdIgcAAIAAgYIAcAAIAAgnIAbgJIAAAwIApAAIAAAYIgpAAIAABXQAAAQAGAHQAFAHANAAQAJAAAIgFIAAAYQgKAFgQAAQgqAAAAgwg");
	this.shape_1001.setTransform(316.1,63);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FFFFFF").s().p("AgrBSIAAihIAdAAIAAAiIABAAQAMgkAdAAQAKAAAGACIAAAdQgIgFgMAAQgRAAgKAPQgLAQAAAZIAABRg");
	this.shape_1002.setTransform(305.1,65.1);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FFFFFF").s().p("AgyBIQgOgNAAgVQAAgtA2gHIAvgHQAAgnghAAQgcAAgYATIAAgbQAYgQAfAAQA6AAAAA+IAABnIgcAAIAAgZIgBAAQgRAdggAAQgXAAgOgNgAAAAFQgUACgIAIQgHAHAAANQAAAMAIAHQAIAIAOgBQARAAANgMQAMgOAAgUIAAgPg");
	this.shape_1003.setTransform(289.4,65.3);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FFFFFF").s().p("ABYBTIAAhcQAAgagIgMQgJgLgSAAQgQAAgLAOQgMAPAAAUIAABcIgbAAIAAhfQAAgugkAAQgQAAgLAOQgLAOAAAWIAABbIgdAAIAAihIAdAAIAAAZIABAAQARgdAhAAQAQAAANAJQALAJAFAQQASgiAkAAQA2AAAABCIAABjg");
	this.shape_1004.setTransform(267.7,65.1);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FFFFFF").s().p("AgqBxQgSgDgIgGIAAghQAJAJASAGQASAFAPAAQAvAAAAgiQAAgJgFgIQgFgHgJgGQgJgGgYgMQgigQgLgPQgKgOAAgTQgBgcAXgRQAXgQAiAAQAhAAAQAIIAAAgQgVgPgfAAQgTAAgNAJQgOAJAAAPQAAAOAJAJQAKAIAdAPQAhAPANAQQANAQAAAUQAAAegVAQQgVAQgmAAQgOAAgRgEg");
	this.shape_1005.setTransform(245,62);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#FFFFFF").s().p("AgqALIAAgVIBVAAIAAAVg");
	this.shape_1006.setTransform(220.9,64.4);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FFFFFF").s().p("Ag2BMIAAgeQAWAPAZAAQAhABAAgWQAAgJgIgHQgHgGgVgIQgbgKgIgLQgJgLAAgPQAAgVATgNQASgNAaAAQAUAAASAIIAAAbQgSgLgXAAQgNAAgJAFQgIAHAAAJQAAAKAGAFQAGAGAVAIQAbAKAJAKQAKALAAAQQAAAWgSANQgTANgcAAQgZAAgTgJg");
	this.shape_1007.setTransform(198.7,65.3);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FFFFFF").s().p("AgJAjIgFhFIAcAAIgEBFg");
	this.shape_1008.setTransform(188.8,54.2);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FFFFFF").s().p("Ag3BYQgTgdAAg3QAAg7AUgfQAUgeAlAAQBIAAAAB0QAAA4gVAfQgTAegkAAQgjAAgTgdgAgtADQABBaAsAAQAuAAgBhcQAAhegsAAQguAAAABgg");
	this.shape_1009.setTransform(176.1,62);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FFFFFF").s().p("Ag3BYQgTgdAAg3QAAg7AUgfQAUgeAlAAQBIAAAAB0QAAA4gUAfQgVAegkAAQgiAAgTgdgAgsADQgBBaAuAAQAtAAAAhcQAAhegtAAQgtAAAABgg");
	this.shape_1010.setTransform(158.5,62);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FFFFFF").s().p("Ag3BYQgTgdAAg3QAAg7AUgfQAUgeAlAAQBIAAAAB0QAAA4gVAfQgTAegkAAQgjAAgTgdgAgtADQABBaAsAAQAtAAAAhcQAAhegsAAQguAAAABgg");
	this.shape_1011.setTransform(140.9,62);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FFFFFF").s().p("AhGBzIAAgLQAAgUAFgNQAFgOANgNQAMgNAagSQAagSAKgOQAJgOAAgSQAAgSgLgLQgMgKgTAAQgOAAgOAHQgPAHgMANIAAgcQALgLAOgGQAOgGATAAQAeAAATAQQATAQAAAdQAAAZgMASQgLARgcATQgcAUgJAJQgKAIgEAIQgDAIAAALIBvAAIAAAZg");
	this.shape_1012.setTransform(123.4,61.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.instance_4},{t:this.instance_3},{t:this.backArrow4},{t:this.movieClip_2},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967}]},14).to({state:[]},1).wait(33));

	// 90s
	this.instance_5 = new lib.nokia_1011_90s();
	this.instance_5.parent = this;
	this.instance_5.setTransform(263,126.4,0.144,0.144,-15);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FFFFFF").s().p("AgGA3QgDgDAAgDQABgFADgCQACgDADAAQADAAADADQADADABAEQgBADgDADQgCADgDAAQgEAAgDgDgAgFAYIgChQIAOAAIgCBQg");
	this.shape_1013.setTransform(193.1,233.8);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#FFFFFF").s().p("AgZAgQgKgMAAgTQAAgSALgNQALgMAPABQAQAAAJAKQAJAKAAASIAAAHIg4AAQAAANAHAGQAHAIALAAQANAAAMgJIAAANQgLAHgSAAQgQABgKgLgAgMgXQgHAGgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAHg");
	this.shape_1014.setTransform(186.5,235.4);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FFFFFF").s().p("AAUApIAAgsQAAgagSAAQgJAAgGAIQgGAGAAAMIAAAsIgOAAIAAhPIAOAAIAAANIAAAAQAJgPARAAQANAAAHAIQAHAJAAAQIAAAwg");
	this.shape_1015.setTransform(177.7,235.3);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FFFFFF").s().p("AgdAfQgKgLAAgTQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLAMQgLAMgSgBQgSAAgLgLgAgSgWQgHAJAAAOQAAANAHAIQAHAJALAAQANAAAGgJQAHgHAAgPQAAgNgHgJQgGgIgNAAQgLAAgHAIg");
	this.shape_1016.setTransform(168.2,235.4);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FFFFFF").s().p("AgJAdIAAguIgOAAIAAgLIAOAAIAAgUIANgFIAAAZIAUAAIAAALIgUAAIAAArQAAAJADADQACADAHABQAEgBAEgCIAAAMQgFACgHAAQgVABAAgZg");
	this.shape_1017.setTransform(160.7,234.3);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#FFFFFF").s().p("AgfA3IAAgOQAOAHAMABQAdAAAAggIAAgIIgBAAQgJAPgRAAQgQABgJgLQgJgMAAgQQAAgVAKgNQAKgMARABQAPgBAIANIABAAIAAgKIAOAAIAABIQAAAugrgBQgPABgLgGgAgQgnQgGAIAAAQQAAAMAGAHQAGAJAKAAQAKgBAHgHQAHgGAAgMIAAgLQAAgKgHgHQgGgGgJgBQgLAAgHAJg");
	this.shape_1018.setTransform(152.8,237.2);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FFFFFF").s().p("AAUApIAAgsQAAgagSAAQgJAAgGAIQgGAGAAAMIAAAsIgOAAIAAhPIAOAAIAAANIAAAAQAJgPARAAQANAAAHAIQAHAJAAAQIAAAwg");
	this.shape_1019.setTransform(143.8,235.3);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FFFFFF").s().p("AgHA7IAAhQIAOAAIAABQgAgGgrQgCgDAAgDQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgDgDg");
	this.shape_1020.setTransform(137.1,233.5);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FFFFFF").s().p("AgVApIAAhQIAOAAIAAARIABAAQAGgSAOAAIAIABIAAAOQgEgCgGAAQgJAAgEAIQgGAHAAAMIAAApg");
	this.shape_1021.setTransform(132.8,235.3);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#FFFFFF").s().p("AgaAmIAAgPQAKAIANAAQAQAAAAgLQAAgFgEgDQgEgDgKgEQgNgFgEgFQgEgFAAgIQAAgKAJgHQAJgGAMAAQAKgBAJAEIAAAOQgJgGgLAAQgGAAgEADQgFADAAAFQAAAFADACQADAEAKAEQAOAEAEAFQAFAFAAAJQAAAKgJAHQgJAGgOAAQgMAAgJgEg");
	this.shape_1022.setTransform(121.5,235.4);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FFFFFF").s().p("AgEASIgCgiIANAAIgCAig");
	this.shape_1023.setTransform(116.5,229.8);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FFFFFF").s().p("AgbAsQgJgOAAgcQgBgdALgPQAKgQARAAQAlAAgBA6QABAcgLAPQgKAQgRAAQgRAAgKgPgAgWACQAAAtAWAAQAWAAAAguQABgvgXAAQgWAAAAAwg");
	this.shape_1024.setTransform(110.2,233.7);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FFFFFF").s().p("AgdA3IAAgOQAJAGALAAQAOAAAJgMQAIgMAAgWIAAAAQgIAOgQAAQgPAAgJgKQgJgJAAgPQAAgRAKgLQAKgLAPAAQARAAAKAOQAJANAAAZQAAAfgMARQgMARgVAAQgMAAgIgEgAgPgnQgGAHAAALQAAALAGAHQAGAGAJAAQAJAAAGgGQAGgGAAgIQAAgNgGgIQgGgIgJAAQgJAAgGAHg");
	this.shape_1025.setTransform(101.4,233.7);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#FFFFFF").s().p("AgJAdIAAguIgOAAIAAgLIAOAAIAAgUIANgFIAAAZIAUAAIAAALIgUAAIAAArQAAAJADADQADADAGABQAEgBAEgCIAAAMQgEACgIAAQgVABAAgZg");
	this.shape_1026.setTransform(89.8,234.3);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#FFFFFF").s().p("AgaAmIAAgPQAKAIANAAQAQAAAAgLQAAgFgEgDQgEgDgKgEQgNgFgEgFQgEgFAAgIQAAgKAJgHQAJgGAMAAQAKgBAJAEIAAAOQgJgGgLAAQgGAAgEADQgFADAAAFQAAAFADACQADAEAKAEQAOAEAEAFQAFAFAAAJQAAAKgJAHQgJAGgOAAQgMAAgJgEg");
	this.shape_1027.setTransform(83.6,235.4);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#FFFFFF").s().p("AgZAgQgKgMAAgTQAAgSALgNQALgMAPABQAQAAAJAKQAJAKAAASIAAAHIg4AAQAAANAHAGQAHAIALAAQANAAAMgJIAAANQgLAHgSAAQgQABgKgLgAgMgXQgHAGgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAHg");
	this.shape_1028.setTransform(75.9,235.4);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#FFFFFF").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_1029.setTransform(69.5,233.4);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#FFFFFF").s().p("AgdAfQgKgLAAgTQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLAMQgLAMgSgBQgSAAgLgLgAgSgWQgHAJAAAOQAAANAHAIQAHAJALAAQANAAAGgJQAHgHAAgPQAAgNgHgJQgGgIgNAAQgLAAgHAIg");
	this.shape_1030.setTransform(62.8,235.4);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#FFFFFF").s().p("AgdAfQgKgLAAgTQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLAMQgLAMgSgBQgSAAgLgLgAgSgWQgHAJAAAOQAAANAHAIQAHAJALAAQANAAAGgJQAHgHAAgPQAAgNgHgJQgGgIgNAAQgLAAgHAIg");
	this.shape_1031.setTransform(53.2,235.4);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgMATAAQALAAAIADIAAAPQgJgGgKgBQgMAAgHAJQgIAJAAANQAAANAHAIQAHAJAMAAQAKAAAKgIIAAAOQgKAGgNgBQgQAAgLgLg");
	this.shape_1032.setTransform(44.8,235.4);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#FFFFFF").s().p("AgZAfQgKgLAAgTQAAgSALgNQALgMAPABQAQAAAJAKQAJAKAAASIAAAGIg4AAQAAAOAHAGQAHAIALAAQANAAAMgJIAAANQgLAIgSgBQgQAAgKgLgAgMgXQgHAGgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAHg");
	this.shape_1033.setTransform(192.6,214.3);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#FFFFFF").s().p("AAUA8IAAgvQAAgXgSAAQgIAAgHAHQgGAGAAALIAAAuIgOAAIAAh3IAOAAIAAA0IAAAAQAKgPAQAAQAbAAAAAgIAAAyg");
	this.shape_1034.setTransform(183.7,212.4);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#FFFFFF").s().p("AgJAdIAAguIgOAAIAAgMIAOAAIAAgTIANgFIAAAYIAUAAIAAAMIgUAAIAAArQAAAJADADQADADAGAAQAFAAADgCIAAAMQgEACgIAAQgVAAAAgYg");
	this.shape_1035.setTransform(176.2,213.2);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#FFFFFF").s().p("AgVApIAAhQIAOAAIAAARIABAAQAGgSAOAAIAIABIAAAOQgEgCgGAAQgJAAgEAIQgGAHAAAMIAAApg");
	this.shape_1036.setTransform(166.7,214.2);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#FFFFFF").s().p("AgZAkQgGgGgBgLQAAgWAbgDIAXgEQAAgUgQAAQgOAAgMAKIAAgOQANgHAOAAQAeAAAAAeIAAAzIgPAAIAAgMQgJAOgPAAQgMABgHgHgAAAADQgJABgFADQgEAEABAHQAAAGAEADQAEAEAHAAQAIAAAGgHQAGgHAAgKIAAgHg");
	this.shape_1037.setTransform(158.9,214.3);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#FFFFFF").s().p("AgZAfQgKgLAAgTQAAgSALgNQALgMAPABQAQAAAJAKQAJAKAAASIAAAGIg4AAQAAAOAHAGQAHAIALAAQANAAAMgJIAAANQgLAIgSgBQgQAAgKgLgAgMgXQgHAGgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAHg");
	this.shape_1038.setTransform(150.8,214.3);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FFFFFF").s().p("AAUA8IAAgvQAAgXgSAAQgJAAgFAHQgHAGAAALIAAAuIgOAAIAAh3IAOAAIAAA0IAAAAQAKgPAQAAQAbAAAAAgIAAAyg");
	this.shape_1039.setTransform(141.9,212.4);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#FFFFFF").s().p("AgdAfQgKgLAAgTQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLALQgLAMgSAAQgSAAgLgLgAgSgWQgHAJAAAOQAAAOAHAHQAHAJALgBQANABAGgJQAHgHAAgPQAAgNgHgJQgGgHgNgBQgLABgHAHg");
	this.shape_1040.setTransform(128,214.3);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FFFFFF").s().p("AgJAdIAAguIgOAAIAAgMIAOAAIAAgTIANgFIAAAYIAUAAIAAAMIgUAAIAAArQAAAJADADQACADAHAAQAEAAAEgCIAAAMQgFACgHAAQgVAAAAgYg");
	this.shape_1041.setTransform(120.5,213.2);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#FFFFFF").s().p("AgHA5IAAgqIgkhHIARAAIAYAzIACAGIADgGIAagzIAPAAIglBHIAAAqg");
	this.shape_1042.setTransform(108.8,212.7);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#FFFFFF").s().p("AAjA5IgMgfIguAAIgLAfIgQAAIArhxIAPAAIArBxgAgBghIgRAuIAlAAIgRguIgCgIIAAAAIgBAIg");
	this.shape_1043.setTransform(100.3,212.7);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIAPAAIAABkIAsAAIAAANg");
	this.shape_1044.setTransform(91.3,212.7);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#FFFFFF").s().p("AgiA5IAAhxIAgAAQARAAALAJQAJAJABARQgBAQgMAKQgLAKgRgBIgOAAIAAArgAgTABIANAAQAMAAAHgFQAHgGAAgLQAAgWgZAAIgOAAg");
	this.shape_1045.setTransform(82.7,212.7);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_1046.setTransform(69.8,212.4);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgMATAAQALAAAIADIAAAPQgJgGgKgBQgMAAgHAJQgIAIAAAOQAAAOAHAHQAHAJAMgBQAKABAKgIIAAAOQgKAGgNgBQgQAAgLgLg");
	this.shape_1047.setTransform(61.4,214.3);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#FFFFFF").s().p("AgHA7IAAhQIAOAAIAABQgAgGgrQgCgDAAgDQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgDgDg");
	this.shape_1048.setTransform(55.6,212.4);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#FFFFFF").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_1049.setTransform(51.6,212.4);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#FFFFFF").s().p("AgbArQgOgPAAgaQgBgaARgRQAQgRAYAAQAQAAALAFIAAAPQgMgGgPAAQgRAAgMAMQgNANAAAUQAAAVAMAMQALAMARAAQARAAAMgIIAAAOQgMAHgTAAQgYAAgOgQg");
	this.shape_1050.setTransform(44.6,212.7);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#FFFFFF").s().p("AgGA3QgCgDgBgEQAAgDAEgEQACgCADAAQAEAAADADQACACAAAEQAAAEgCADQgDADgEgBQgDABgDgDgAgFAXIgChQIAOAAIgBBQg");
	this.shape_1051.setTransform(507,361.7);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#FFFFFF").s().p("AgZAgQgKgMAAgUQAAgRALgMQALgNAPAAQAQAAAJALQAJAKAAATIAAAFIg4AAQAAANAHAIQAHAHALAAQANAAAMgJIAAANQgLAIgSAAQgQgBgKgKgAgMgYQgHAHgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAGg");
	this.shape_1052.setTransform(500.4,363.2);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#FFFFFF").s().p("AgVApIAAhQIAOAAIAAARIABAAQAGgSAOAAIAIABIAAAOQgEgCgGAAQgJAAgEAIQgGAHAAAMIAAApg");
	this.shape_1053.setTransform(494,363.1);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgMASAAQASAAALAMQAKALAAATQAAATgLALQgLAMgSABQgSAAgLgMgAgSgVQgHAIAAANQAAAOAHAJQAHAHALAAQANAAAGgHQAHgIAAgPQAAgOgHgHQgGgIgNAAQgLAAgHAIg");
	this.shape_1054.setTransform(485.8,363.2);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#FFFFFF").s().p("AAsAqIAAguQAAgNgEgGQgEgGgKABQgIgBgFAIQgGAIAAAJIAAAuIgNAAIAAgwQAAgXgSABQgIAAgGAGQgFAIAAAKIAAAuIgOAAIAAhQIAOAAIAAAMIAAAAQAJgPAQAAQAJAAAGAFQAFAFACAHQAJgRASAAQAbABAAAgIAAAyg");
	this.shape_1055.setTransform(474.1,363.1);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#FFFFFF").s().p("AgVApIAAhQIAOAAIAAARIABAAQAGgSAOAAIAIABIAAAOQgEgCgGAAQgJAAgEAIQgGAHAAAMIAAApg");
	this.shape_1056.setTransform(460.3,363.1);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgMASAAQASAAALAMQAKALAAATQAAATgLALQgLAMgSABQgSAAgLgMgAgSgVQgHAIAAANQAAAOAHAJQAHAHALAAQANAAAGgHQAHgIAAgPQAAgOgHgHQgGgIgNAAQgLAAgHAIg");
	this.shape_1057.setTransform(452,363.2);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#FFFFFF").s().p("AgKA9IAAhEIgOAAIAAgMIAOAAIAAgNQAAgNAHgHQAHgIALAAIAKABIAAANQgEgCgFAAQgNAAAAARIAAAMIATAAIAAAMIgTAAIAABEg");
	this.shape_1058.setTransform(445,361.2);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#FFFFFF").s().p("AgZAgQgKgMAAgUQAAgRALgMQALgNAPAAQAQAAAJALQAJAKAAATIAAAFIg4AAQAAANAHAIQAHAHALAAQANAAAMgJIAAANQgLAIgSAAQgQgBgKgKgAgMgYQgHAHgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAGg");
	this.shape_1059.setTransform(433.5,363.2);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#FFFFFF").s().p("AAsAqIAAguQAAgNgEgGQgEgGgKABQgIgBgFAIQgGAIAAAJIAAAuIgNAAIAAgwQAAgXgSABQgIAAgGAGQgFAIAAAKIAAAuIgOAAIAAhQIAOAAIAAAMIAAAAQAJgPAQAAQAJAAAGAFQAFAFACAHQAJgRASAAQAbABAAAgIAAAyg");
	this.shape_1060.setTransform(422.2,363.1);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_1061.setTransform(407.3,361.3);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgNATAAQALAAAIAFIAAAOQgJgHgKABQgMgBgHAJQgIAJAAAMQAAAOAHAJQAHAHAMAAQAKAAAKgGIAAANQgKAFgNABQgQAAgLgMg");
	this.shape_1062.setTransform(398.9,363.2);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#FFFFFF").s().p("AgHA7IAAhQIAOAAIAABQgAgGgrQgCgDAAgDQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgDgDg");
	this.shape_1063.setTransform(393.1,361.3);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#FFFFFF").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_1064.setTransform(389,361.3);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#FFFFFF").s().p("AgbArQgPgPAAgaQABgaAQgRQAQgRAZAAQAQAAALAFIAAAPQgNgGgOAAQgTAAgMAMQgMANABAUQAAAVALAMQALAMARAAQARAAANgIIAAAOQgNAHgTAAQgYAAgOgQg");
	this.shape_1065.setTransform(382,361.6);

	this.btnPlay = new lib.btnPlay();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.parent = this;
	this.btnPlay.setTransform(75.2,152.1,0.667,0.667,0,0,0,37.6,37.6);

	this.backArrow2 = new lib.btnBack();
	this.backArrow2.name = "backArrow2";
	this.backArrow2.parent = this;
	this.backArrow2.setTransform(69,328,1,1,0,0,0,32,32);

	this.btnStop = new lib.btnStop();
	this.btnStop.name = "btnStop";
	this.btnStop.parent = this;
	this.btnStop.setTransform(145.5,152.1,0.714,0.714,0,0,0,35.1,35.1);

	this.guy90s = new lib.manLookingAtPhone_1();
	this.guy90s.name = "guy90s";
	this.guy90s.parent = this;
	this.guy90s.setTransform(454.3,232,0.825,1,0,0,0,256,144);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_1066.setTransform(132.7,371.9);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgMATAAQALAAAIADIAAAPQgJgGgKgBQgMABgHAIQgIAIAAANQAAAOAHAJQAHAHAMABQAKgBAKgHIAAAOQgKAFgNAAQgQAAgLgLg");
	this.shape_1067.setTransform(124.3,373.9);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#FFFFFF").s().p("AgZAkQgGgHgBgKQAAgWAbgDIAXgEQAAgUgQAAQgOAAgMAKIAAgOQANgIAOABQAeAAAAAeIAAA0IgPAAIAAgNQgJAOgPAAQgMAAgHgGgAAAADQgJABgFADQgEAEAAAGQABAHAEADQAEAEAHAAQAIAAAGgHQAGgHAAgKIAAgHg");
	this.shape_1068.setTransform(116.2,373.9);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#FFFFFF").s().p("AgWAvIgBAAIAAAMIgOAAIAAh3IAOAAIAAA1IABAAQAJgQASAAQAPAAAJALQAJALAAARQAAAVgKAMQgKAMgRAAQgPAAgIgOgAgQgEQgHAHAAALIAAAMQAAAJAHAIQAGAGAKAAQAKAAAHgJQAGgIAAgQQAAgNgGgHQgGgHgKAAQgKAAgHAHg");
	this.shape_1069.setTransform(107.9,372);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLAMQgLAMgSgBQgSAAgLgLgAgSgVQgHAIAAANQAAAOAHAJQAHAHALABQANgBAGgHQAHgIAAgPQAAgOgHgHQgGgJgNAAQgLAAgHAJg");
	this.shape_1070.setTransform(93.6,373.9);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#FFFFFF").s().p("AgfA3IAAgOQAOAIAMAAQAdAAAAggIAAgIIgBAAQgJAPgRAAQgQABgJgLQgJgMAAgQQAAgVAKgNQAKgLARAAQAPAAAIAMIABAAIAAgKIAOAAIAABIQAAAtgrAAQgPAAgLgFgAgQgnQgGAIAAAQQAAANAGAHQAGAHAKABQAKAAAHgIQAHgGAAgMIAAgLQAAgKgHgHQgGgGgJgBQgLABgHAIg");
	this.shape_1071.setTransform(83.8,375.7);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLAMQgLAMgSgBQgSAAgLgLgAgSgVQgHAIAAANQAAAOAHAJQAHAHALABQANgBAGgHQAHgIAAgPQAAgOgHgHQgGgJgNAAQgLAAgHAJg");
	this.shape_1072.setTransform(70.1,373.9);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#FFFFFF").s().p("AgJAdIAAguIgOAAIAAgLIAOAAIAAgUIANgFIAAAZIAUAAIAAALIgUAAIAAArQAAAJADADQACADAHABQAEgBAEgCIAAAMQgFACgHAAQgVABAAgZg");
	this.shape_1073.setTransform(62.6,372.8);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_1074.setTransform(52,371.9);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgMATAAQALAAAIADIAAAPQgJgGgKgBQgMABgHAIQgIAIAAANQAAAOAHAJQAHAHAMABQAKgBAKgHIAAAOQgKAFgNAAQgQAAgLgLg");
	this.shape_1075.setTransform(43.6,373.9);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#FFFFFF").s().p("AgHA7IAAhQIAOAAIAABQgAgGgrQgCgDAAgDQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgDgDg");
	this.shape_1076.setTransform(37.8,372);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#FFFFFF").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_1077.setTransform(33.7,371.9);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#FFFFFF").s().p("AgbArQgPgPAAgaQAAgaAQgRQARgRAZAAQAPAAAMAFIAAAPQgNgGgOAAQgTAAgMAMQgLANgBAUQAAAVAMAMQALAMARAAQARAAANgIIAAAOQgNAHgTAAQgXAAgPgQg");
	this.shape_1078.setTransform(26.7,372.2);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#FFFFFF").s().p("Ag2BMIAAgeQAWAPAZAAQAhABAAgWQAAgJgIgHQgHgGgVgIQgbgKgIgLQgJgLAAgPQAAgVATgNQASgNAaAAQAUAAASAIIAAAbQgSgLgXAAQgNAAgJAFQgIAHAAAJQAAAKAGAFQAGAGAVAIQAbAKAJAKQAKALAAAQQAAAWgSANQgTANgcAAQgZAAgTgJg");
	this.shape_1079.setTransform(433.2,54.9);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#FFFFFF").s().p("AgJAjIgFhFIAcAAIgEBFg");
	this.shape_1080.setTransform(423.3,43.8);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#FFFFFF").s().p("Ag3BYQgTgdAAg3QAAg7AUgfQAUgeAlAAQBIAAAAB0QAAA4gVAfQgTAeglAAQgiAAgTgdgAgtADQABBaAsAAQAuAAgBhcQAAhegsAAQguAAAABgg");
	this.shape_1081.setTransform(410.7,51.7);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#FFFFFF").s().p("Ag8BtIAAgbQAUALAVAAQAeAAAQgYQARgYAAgsIAAAAQgQAcgiAAQgcAAgTgTQgTgTAAgfQAAgiAUgVQAVgVAgAAQAhAAATAaQAUAbAAAzQAAA9gZAiQgYAigrAAQgYAAgRgIgAgfhPQgMAOAAAVQAAAXAMAOQALAMAUAAQASAAANgLQALgNABgRQgBgZgLgPQgNgRgSAAQgTAAgMAOg");
	this.shape_1082.setTransform(393,51.7);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#FFFFFF").s().p("AgzA+QgTgVAAgoQAAgkAVgYQAWgZAfAAQAgAAARAUQASAVAAAlIAAANIhwAAQABAaANAPQAOANAXAAQAbAAAXgRIAAAZQgWAQgjAAQgiAAgUgXgAgZgwQgNANgDAVIBUAAQAAgXgLgLQgKgMgTAAQgQAAgMAMg");
	this.shape_1083.setTransform(367,54.9);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#FFFFFF").s().p("AAoB4IAAhdQAAgwgkAAQgSAAgNAOQgMANABAWIAABcIgdAAIAAjvIAdAAIAABoIAAAAQATgeAhAAQA2AAABBBIAABkg");
	this.shape_1084.setTransform(349.4,51);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#FFFFFF").s().p("AgUA7IAAhdIgcAAIAAgYIAcAAIAAgnIAcgJIAAAwIApAAIAAAYIgpAAIAABXQAAAQAGAHQAFAHANAAQAJAAAIgFIAAAYQgKAFgQAAQgrAAAAgwg");
	this.shape_1085.setTransform(334.3,52.7);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#FFFFFF").s().p("AgVB6IAAiKIgcAAIAAgXIAcAAIAAgaQAAgaAPgPQAOgPAXAAQAMAAAHADIAAAZQgIgEgJAAQgbAAAAAiIAAAYIAmAAIAAAXIgmAAIAACKg");
	this.shape_1086.setTransform(315.3,50.8);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#FFFFFF").s().p("Ag6A+QgVgXAAglQgBgoAWgWQAXgYAmAAQAkAAAVAXQAUAWAAAnQABAlgXAYQgWAYgkAAQglAAgVgXgAglgrQgOAQABAcQAAAcAOAQQAOAQAXAAQAYAAANgPQANgRAAgdQAAgcgNgRQgNgPgYAAQgYAAgOARg");
	this.shape_1087.setTransform(300.6,54.9);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#FFFFFF").s().p("Ag2BMIAAgeQAWAPAZAAQAhABAAgWQAAgJgIgHQgHgGgVgIQgbgKgIgLQgJgLAAgPQAAgVATgNQASgNAaAAQAUAAASAIIAAAbQgSgLgXAAQgNAAgJAFQgIAHAAAJQAAAKAGAFQAGAGAVAIQAbAKAJAKQAKALAAAQQAAAWgSANQgTANgcAAQgZAAgTgJg");
	this.shape_1088.setTransform(275.4,54.9);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#FFFFFF").s().p("AgJAjIgEhFIAbAAIgEBFg");
	this.shape_1089.setTransform(265.5,43.8);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#FFFFFF").s().p("AgzA+QgTgVAAgoQAAgkAVgYQAWgZAfAAQAgAAARAUQASAVAAAlIAAANIhwAAQABAaANAPQAOANAXAAQAbAAAXgRIAAAZQgWAQgjAAQgiAAgUgXgAgZgwQgNANgDAVIBUAAQAAgXgLgLQgKgMgTAAQgQAAgMAMg");
	this.shape_1090.setTransform(254.9,54.9);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#FFFFFF").s().p("AAoBTIAAhbQAAgyglAAQgRAAgNAOQgLAOAAAVIAABcIgeAAIAAihIAeAAIAAAbIAAAAQASgfAiAAQAbAAANARQAPASAAAgIAABig");
	this.shape_1091.setTransform(237.2,54.7);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#FFFFFF").s().p("Ag6A+QgWgXAAglQAAgoAXgWQAWgYAlAAQAlAAAVAXQAVAWgBAnQAAAlgVAYQgXAYgkAAQgkAAgWgXgAgkgrQgPAQAAAcQAAAcAPAQQAOAQAWAAQAaAAAMgPQANgRAAgdQAAgcgNgRQgMgPgaAAQgXAAgNARg");
	this.shape_1092.setTransform(218.3,54.9);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#FFFFFF").s().p("AAoB4IAAhdQAAgwgkAAQgSAAgNAOQgMANABAWIAABcIgdAAIAAjvIAdAAIAABoIAAAAQATgeAhAAQA2AAABBBIAABkg");
	this.shape_1093.setTransform(199.7,51);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#FFFFFF").s().p("AhGByIAAjiIBBAAQAjgBAVATQAUARAAAhQAAAhgYAUQgYAVgigBIgeAAIAABVgAgpADIAbAAQAaAAAOgLQAOgMAAgXQAAgrgzAAIgeAAg");
	this.shape_1094.setTransform(182,51.7);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#FFFFFF").s().p("AgNB4IAAjvIAbAAIAADvg");
	this.shape_1095.setTransform(159.1,51);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#FFFFFF").s().p("AgNB4IAAjvIAbAAIAADvg");
	this.shape_1096.setTransform(151.1,51);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#FFFFFF").s().p("AgzA+QgTgVAAgoQAAgkAVgYQAWgZAfAAQAgAAARAUQASAVAAAlIAAANIhwAAQABAaANAPQAOANAXAAQAbAAAXgRIAAAZQgWAQgjAAQgiAAgUgXgAgZgwQgNANgDAVIBUAAQAAgXgLgLQgKgMgTAAQgQAAgMAMg");
	this.shape_1097.setTransform(138.7,54.9);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#FFFFFF").s().p("Ag2BWQgegfAAgzQAAg2AhghQAhghAxAAQAhAAAVAJIAAAeQgYgNgeAAQgkAAgYAZQgYAZAAAqQAAApAWAYQAWAYAkAAQAhAAAZgPIAAAcQgZANgmAAQgwAAgcgfg");
	this.shape_1098.setTransform(120,51.7);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f().s("#999999").ss(2,1,1).p("Avuq9IfdAAIAAV8I/dAAg");
	this.shape_1099.setTransform(120.4,175);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#FFFFFF").s().p("AgGA3QgDgDAAgEQAAgDAEgEQACgCADAAQADAAADADQADADAAADQAAAEgDADQgCADgEgBQgDABgDgDgAgFAXIgChQIAOAAIgCBQg");
	this.shape_1100.setTransform(191.2,231.5);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#FFFFFF").s().p("AgZAfQgKgLAAgUQAAgRALgMQALgMAPgBQAQAAAJALQAJAKAAATIAAAFIg4AAQAAANAHAIQAHAHALAAQANAAAMgJIAAANQgLAIgSAAQgQAAgKgMgAgMgYQgHAHgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAGg");
	this.shape_1101.setTransform(184.6,233.1);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#FFFFFF").s().p("AAUApIAAgtQAAgZgSABQgJAAgGAGQgGAIAAAKIAAAtIgOAAIAAhQIAOAAIAAAOIAAAAQAJgQARAAQANAAAHAJQAHAIAAARIAAAwg");
	this.shape_1102.setTransform(175.8,233);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgMASAAQASAAALAMQAKALAAATQAAATgLALQgLANgSAAQgSAAgLgMgAgSgWQgHAJAAANQAAAPAHAHQAHAIALAAQANAAAGgIQAHgHAAgPQAAgOgHgIQgGgHgNAAQgLAAgHAHg");
	this.shape_1103.setTransform(166.3,233.1);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#FFFFFF").s().p("AgJAdIAAgtIgOAAIAAgNIAOAAIAAgTIANgEIAAAXIAUAAIAAANIgUAAIAAArQAAAHADAEQACAEAHgBQAEAAAEgCIAAALQgFAEgHAAQgVAAAAgZg");
	this.shape_1104.setTransform(158.8,232);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#FFFFFF").s().p("AgfA3IAAgOQAOAIAMgBQAdAAAAgeIAAgJIgBAAQgJAQgRAAQgQAAgJgMQgJgKAAgSQAAgUAKgMQAKgMARgBQAPABAIANIABAAIAAgMIAOAAIAABKQAAAtgrAAQgPAAgLgGgAgQgnQgGAJAAAOQAAAOAGAGQAGAIAKAAQAKABAHgIQAHgHAAgMIAAgLQAAgJgHgHQgGgHgJABQgLgBgHAJg");
	this.shape_1105.setTransform(150.9,234.9);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#FFFFFF").s().p("AAUApIAAgtQAAgZgSABQgJAAgGAGQgGAIAAAKIAAAtIgOAAIAAhQIAOAAIAAAOIAAAAQAJgQARAAQANAAAHAJQAHAIAAARIAAAwg");
	this.shape_1106.setTransform(141.9,233);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#FFFFFF").s().p("AgaAlIAAgOQAKAIANAAQAQAAAAgLQAAgFgEgDQgEgDgKgEQgNgFgEgFQgEgFAAgHQAAgLAJgHQAJgGAMgBQAKABAJADIAAAOQgJgGgLAAQgGAAgEADQgFADAAAFQAAAFADADQADADAKADQAOAFAEAFQAFAFAAAIQAAAMgJAGQgJAHgOAAQgMgBgJgFg");
	this.shape_1107.setTransform(119.6,233.1);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#FFFFFF").s().p("AgEARIgCgiIANAAIgCAig");
	this.shape_1108.setTransform(114.6,227.5);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#FFFFFF").s().p("AgbAsQgJgOAAgcQAAgdAKgPQAKgQARAAQAlAAgBA6QABAcgKAPQgLAQgRAAQgRAAgKgPgAgWACQAAAtAWAAQAWAAAAguQABgvgWAAQgXAAAAAwg");
	this.shape_1109.setTransform(108.3,231.4);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#FFFFFF").s().p("AgJAdIAAgtIgOAAIAAgNIAOAAIAAgTIANgEIAAAXIAUAAIAAANIgUAAIAAArQAAAHADAEQACAEAHgBQAFAAADgCIAAALQgFAEgHAAQgVAAAAgZg");
	this.shape_1110.setTransform(87.9,232);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#FFFFFF").s().p("AgaAlIAAgOQAKAIANAAQAQAAAAgLQAAgFgEgDQgEgDgKgEQgNgFgEgFQgEgFAAgHQAAgLAJgHQAJgGAMgBQAKABAJADIAAAOQgJgGgLAAQgGAAgEADQgFADAAAFQAAAFADADQADADAKADQAOAFAEAFQAFAFAAAIQAAAMgJAGQgJAHgOAAQgMgBgJgFg");
	this.shape_1111.setTransform(81.7,233.1);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#FFFFFF").s().p("AgZAfQgKgLAAgUQAAgRALgMQALgMAPgBQAQAAAJALQAJAKAAATIAAAFIg4AAQAAANAHAIQAHAHALAAQANAAAMgJIAAANQgLAIgSAAQgQAAgKgMgAgMgYQgHAHgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAGg");
	this.shape_1112.setTransform(74,233.1);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgMASAAQASAAALAMQAKALAAATQAAATgLALQgLANgSAAQgSAAgLgMgAgSgWQgHAJAAANQAAAPAHAHQAHAIALAAQANAAAGgIQAHgHAAgPQAAgOgHgIQgGgHgNAAQgLAAgHAHg");
	this.shape_1113.setTransform(60.9,233.1);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgMASAAQASAAALAMQAKALAAATQAAATgLALQgLANgSAAQgSAAgLgMgAgSgWQgHAJAAANQAAAPAHAHQAHAIALAAQANAAAGgIQAHgHAAgPQAAgOgHgIQgGgHgNAAQgLAAgHAHg");
	this.shape_1114.setTransform(51.3,233.1);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgNATAAQALAAAIAFIAAAOQgJgHgKABQgMgBgHAJQgIAJAAAMQAAAPAHAHQAHAIAMAAQAKAAAKgGIAAANQgKAGgNAAQgQAAgLgMg");
	this.shape_1115.setTransform(42.9,233.1);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#FFFFFF").s().p("AAUA8IAAguQAAgYgSAAQgIAAgHAHQgGAGAAALIAAAuIgOAAIAAh3IAOAAIAAA1IAAAAQAKgQAQAAQAbAAAAAgIAAAyg");
	this.shape_1116.setTransform(181.8,210.1);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#FFFFFF").s().p("AgJAdIAAgtIgOAAIAAgMIAOAAIAAgUIANgEIAAAYIAUAAIAAAMIgUAAIAAArQAAAHADAEQACADAHAAQAFAAADgCIAAALQgFAEgHAAQgVgBAAgYg");
	this.shape_1117.setTransform(174.3,210.9);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#FFFFFF").s().p("AgZAkQgGgHgBgKQAAgWAbgEIAXgDQAAgUgQAAQgOAAgMAKIAAgOQANgIAOAAQAeAAAAAgIAAAzIgPAAIAAgNQgIAPgQAAQgMgBgHgGgAAAACQgJACgFAEQgDADAAAHQAAAFAEAEQAEAEAHAAQAIAAAGgHQAGgGAAgKIAAgIg");
	this.shape_1118.setTransform(157,212);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#FFFFFF").s().p("AAUA8IAAguQAAgYgSAAQgJAAgFAHQgHAGAAALIAAAuIgOAAIAAh3IAOAAIAAA1IABAAQAJgQAQAAQAbAAAAAgIAAAyg");
	this.shape_1119.setTransform(140,210.1);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#FFFFFF").s().p("AgJAdIAAgtIgOAAIAAgMIAOAAIAAgUIANgEIAAAYIAUAAIAAAMIgUAAIAAArQAAAHADAEQACADAHAAQAEAAAEgCIAAALQgFAEgHAAQgVgBAAgYg");
	this.shape_1120.setTransform(118.6,210.9);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#FFFFFF").s().p("AgiA5IAAhxIAgAAQARAAALAJQAJAJABARQAAAQgNAKQgLAKgRgBIgPAAIAAArgAgUABIAOAAQAMAAAHgFQAHgGAAgLQAAgWgZAAIgPAAg");
	this.shape_1121.setTransform(80.8,210.4);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#FFFFFF").s().p("AgbArQgOgPAAgaQAAgaAPgRQARgRAYAAQAQAAALAFIAAAPQgMgGgPAAQgRAAgMAMQgNANAAAUQAAAVAMAMQALAMARAAQARAAAMgIIAAAOQgMAHgTAAQgYAAgOgQg");
	this.shape_1122.setTransform(42.7,210.4);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#FFFFFF").s().p("AgZAgQgKgMAAgUQAAgRALgMQALgNAPAAQAQAAAJALQAJAKAAATIAAAFIg4AAQAAANAHAIQAHAHALAAQANAAAMgJIAAANQgLAIgSAAQgQgBgKgKgAgMgYQgHAHgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAGg");
	this.shape_1123.setTransform(500.4,363.2);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgMASAAQASAAALAMQAKALAAATQAAATgLALQgLAMgSABQgSAAgLgMgAgSgVQgHAIAAANQAAAOAHAJQAHAHALAAQANAAAGgHQAHgIAAgPQAAgOgHgHQgGgIgNAAQgLAAgHAIg");
	this.shape_1124.setTransform(452,363.2);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#FFFFFF").s().p("AgZAgQgKgMAAgUQAAgRALgMQALgNAPAAQAQAAAJALQAJAKAAATIAAAFIg4AAQAAANAHAIQAHAHALAAQANAAAMgJIAAANQgLAIgSAAQgQgBgKgKgAgMgYQgHAHgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAGg");
	this.shape_1125.setTransform(433.5,363.2);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgNATAAQALAAAIAFIAAAOQgJgHgKABQgMgBgHAJQgIAJAAAMQAAAOAHAJQAHAHAMAAQAKAAAKgGIAAANQgKAFgNABQgQAAgLgMg");
	this.shape_1126.setTransform(398.9,363.2);

	this.backArrow3 = new lib.btnBack();
	this.backArrow3.name = "backArrow3";
	this.backArrow3.parent = this;
	this.backArrow3.setTransform(69,328,1,1,0,0,0,32,32);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f().s("#999999").ss(2,1,1).p("Avuq+IfdAAIAAV9I/dAAg");
	this.shape_1127.setTransform(118.5,172.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.guy90s},{t:this.btnStop,p:{regX:35.1,x:145.5}},{t:this.backArrow2},{t:this.btnPlay,p:{regX:37.6,x:75.2}},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062,p:{x:398.9,y:363.2}},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059,p:{x:433.5,y:363.2}},{t:this.shape_1058},{t:this.shape_1057,p:{x:452}},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054,p:{x:485.8,y:363.2}},{t:this.shape_1053},{t:this.shape_1052,p:{x:500.4,y:363.2}},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049,p:{x:51.6,y:212.4}},{t:this.shape_1048,p:{x:55.6,y:212.4}},{t:this.shape_1047},{t:this.shape_1046,p:{x:69.8,y:212.4}},{t:this.shape_1045},{t:this.shape_1044,p:{x:91.3,y:212.7}},{t:this.shape_1043,p:{x:100.3,y:212.7}},{t:this.shape_1042,p:{x:108.8,y:212.7}},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036,p:{x:166.7,y:214.2}},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029,p:{x:69.5,y:233.4}},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025,p:{x:101.4,y:233.7}},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021,p:{x:132.8,y:235.3}},{t:this.shape_1020,p:{x:137.1,y:233.5}},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017,p:{x:160.7,y:234.3}},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.instance_5}]},9).to({state:[{t:this.shape_1127},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1017,p:{x:62.6,y:372.8}},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.guy90s},{t:this.backArrow3},{t:this.btnStop,p:{regX:35,x:145.2}},{t:this.btnPlay,p:{regX:37.5,x:79.9}},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1126},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1125},{t:this.shape_1058},{t:this.shape_1124},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1057,p:{x:485.8}},{t:this.shape_1053},{t:this.shape_1123},{t:this.shape_1051},{t:this.shape_1122},{t:this.shape_1049,p:{x:49.7,y:210.1}},{t:this.shape_1048,p:{x:53.7,y:210.1}},{t:this.shape_1062,p:{x:59.5,y:212}},{t:this.shape_1046,p:{x:67.9,y:210.1}},{t:this.shape_1121},{t:this.shape_1044,p:{x:89.4,y:210.4}},{t:this.shape_1043,p:{x:98.4,y:210.4}},{t:this.shape_1042,p:{x:106.9,y:210.4}},{t:this.shape_1120},{t:this.shape_1054,p:{x:126.1,y:212}},{t:this.shape_1119},{t:this.shape_1059,p:{x:148.9,y:212}},{t:this.shape_1118},{t:this.shape_1036,p:{x:164.8,y:211.9}},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1052,p:{x:190.7,y:212}},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1029,p:{x:67.6,y:231.1}},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1025,p:{x:99.5,y:231.4}},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1021,p:{x:130.9,y:233}},{t:this.shape_1020,p:{x:135.2,y:231.2}},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.instance_5}]},1).to({state:[]},1).wait(37));

	// 80s
	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#FFFFFF").s().p("AgGA3QgCgDgBgEQAAgDAEgEQACgCADAAQAEAAADADQACACAAAEQAAAEgCADQgDADgEgBQgDABgDgDgAgFAXIgChQIAOAAIgBBQg");
	this.shape_1128.setTransform(507,361.7);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#FFFFFF").s().p("AgZAgQgKgMAAgUQAAgRALgMQALgNAPAAQAQAAAJALQAJAKAAATIAAAFIg4AAQAAANAHAIQAHAHALAAQANAAAMgJIAAANQgLAIgSAAQgQgBgKgKgAgMgYQgHAHgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAGg");
	this.shape_1129.setTransform(500.4,363.2);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#FFFFFF").s().p("AgVApIAAhQIAOAAIAAARIABAAQAGgSAOAAIAIABIAAAOQgEgCgGAAQgJAAgEAIQgGAHAAAMIAAApg");
	this.shape_1130.setTransform(494,363.1);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgMASAAQASAAALAMQAKALAAATQAAATgLALQgLAMgSABQgSAAgLgMgAgSgVQgHAIAAANQAAAOAHAJQAHAHALAAQANAAAGgHQAHgIAAgPQAAgOgHgHQgGgIgNAAQgLAAgHAIg");
	this.shape_1131.setTransform(485.8,363.2);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#FFFFFF").s().p("AAsAqIAAguQAAgNgEgGQgEgGgKABQgIgBgFAIQgGAIAAAJIAAAuIgNAAIAAgwQAAgXgSABQgIAAgGAGQgFAIAAAKIAAAuIgOAAIAAhQIAOAAIAAAMIAAAAQAJgPAQAAQAJAAAGAFQAFAFACAHQAJgRASAAQAbABAAAgIAAAyg");
	this.shape_1132.setTransform(474.1,363.1);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#FFFFFF").s().p("AgVApIAAhQIAOAAIAAARIABAAQAGgSAOAAIAIABIAAAOQgEgCgGAAQgJAAgEAIQgGAHAAAMIAAApg");
	this.shape_1133.setTransform(460.3,363.1);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#FFFFFF").s().p("AgdAfQgKgMAAgSQAAgTALgMQALgMASAAQASAAALAMQAKALAAATQAAATgLALQgLAMgSABQgSAAgLgMgAgSgVQgHAIAAANQAAAOAHAJQAHAHALAAQANAAAGgHQAHgIAAgPQAAgOgHgHQgGgIgNAAQgLAAgHAIg");
	this.shape_1134.setTransform(452,363.2);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#FFFFFF").s().p("AgKA9IAAhEIgOAAIAAgMIAOAAIAAgNQAAgNAHgHQAHgIALAAIAKABIAAANQgEgCgFAAQgNAAAAARIAAAMIATAAIAAAMIgTAAIAABEg");
	this.shape_1135.setTransform(445,361.2);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#FFFFFF").s().p("AgZAgQgKgMAAgUQAAgRALgMQALgNAPAAQAQAAAJALQAJAKAAATIAAAFIg4AAQAAANAHAIQAHAHALAAQANAAAMgJIAAANQgLAIgSAAQgQgBgKgKgAgMgYQgHAHgBAKIApAAQAAgLgFgGQgFgGgJAAQgIAAgGAGg");
	this.shape_1136.setTransform(433.5,363.2);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#FFFFFF").s().p("AAsAqIAAguQAAgNgEgGQgEgGgKABQgIgBgFAIQgGAIAAAJIAAAuIgNAAIAAgwQAAgXgSABQgIAAgGAGQgFAIAAAKIAAAuIgOAAIAAhQIAOAAIAAAMIAAAAQAJgPAQAAQAJAAAGAFQAFAFACAHQAJgRASAAQAbABAAAgIAAAyg");
	this.shape_1137.setTransform(422.2,363.1);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_1138.setTransform(407.3,361.3);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgNATAAQALAAAIAFIAAAOQgJgHgKABQgMgBgHAJQgIAJAAAMQAAAOAHAJQAHAHAMAAQAKAAAKgGIAAANQgKAFgNABQgQAAgLgMg");
	this.shape_1139.setTransform(398.9,363.2);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#FFFFFF").s().p("AgHA7IAAhQIAOAAIAABQgAgGgrQgCgDAAgDQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgDgDg");
	this.shape_1140.setTransform(393.1,361.3);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#FFFFFF").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_1141.setTransform(389,361.3);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#FFFFFF").s().p("AgbArQgPgPAAgaQABgaAQgRQAQgRAZAAQAQAAALAFIAAAPQgNgGgOAAQgTAAgMAMQgMANABAUQAAAVALAMQALAMARAAQARAAANgIIAAAOQgNAHgTAAQgYAAgOgQg");
	this.shape_1142.setTransform(382,361.6);

	this.woman80s = new lib.woman80s();
	this.woman80s.name = "woman80s";
	this.woman80s.parent = this;
	this.woman80s.setTransform(452.3,224,1,1,0,0,0,69.5,136.1);

	this.backArrow1 = new lib.btnBack();
	this.backArrow1.name = "backArrow1";
	this.backArrow1.parent = this;
	this.backArrow1.setTransform(69,328,1,1,0,0,0,32,32);

	this.instance_6 = new lib.MICROtAC_80S();
	this.instance_6.parent = this;
	this.instance_6.setTransform(270.1,195.1,1.002,1.003,0,15,15,43.5,69.4);

	this.instance_7 = new lib.DYNA_80S();
	this.instance_7.parent = this;
	this.instance_7.setTransform(135.4,195.2,1.353,0.853,0,-15.8,-14.2,33.5,82.2);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_1143.setTransform(127.4,377);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgMATAAQALAAAIADIAAAPQgJgGgKgBQgMAAgHAJQgIAIAAAOQAAANAHAIQAHAJAMAAQAKAAAKgIIAAAOQgKAGgNgBQgQAAgLgLg");
	this.shape_1144.setTransform(119,378.9);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#FFFFFF").s().p("AgYAkQgIgGAAgLQAAgWAbgDIAXgEQAAgUgQAAQgOAAgMAKIAAgOQAMgHAPAAQAeAAgBAeIAAAzIgOAAIAAgMQgIAOgQAAQgMAAgGgGgAAAADQgKABgEADQgDAEAAAGQgBAHAFADQAEAEAGAAQAJAAAGgHQAGgHAAgKIAAgHg");
	this.shape_1145.setTransform(110.8,378.9);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#FFFFFF").s().p("AgWAvIgBAAIAAAMIgOAAIAAh3IAOAAIAAA1IABAAQAJgQASAAQAPAAAJALQAJALAAARQAAAVgKAMQgKAMgRAAQgPAAgIgOgAgQgEQgHAHAAAMIAAALQAAAKAHAHQAGAGAKAAQAKAAAHgJQAGgIAAgQQAAgNgGgHQgGgHgKAAQgKAAgHAHg");
	this.shape_1146.setTransform(102.5,377.1);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#FFFFFF").s().p("AgdAfQgKgLAAgTQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLAMQgLAMgSgBQgSAAgLgLgAgSgWQgHAJAAAOQAAANAHAIQAHAJALAAQANAAAGgJQAHgHAAgPQAAgNgHgJQgGgIgNAAQgLAAgHAIg");
	this.shape_1147.setTransform(88.3,378.9);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#FFFFFF").s().p("AgfA3IAAgOQAOAHAMABQAdAAAAggIAAgIIgBAAQgJAPgRAAQgQABgJgMQgJgLAAgQQAAgVAKgNQAKgMARABQAPgBAIANIABAAIAAgKIAOAAIAABIQAAAugrgBQgPABgLgGgAgQgnQgGAIAAAQQAAAMAGAHQAGAJAKAAQAKgBAHgHQAHgGAAgMIAAgLQAAgKgHgHQgGgGgJgBQgLAAgHAJg");
	this.shape_1148.setTransform(78.4,380.7);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#FFFFFF").s().p("AgdAfQgKgLAAgTQAAgTALgMQALgLASAAQASAAALALQAKALAAATQAAATgLAMQgLAMgSgBQgSAAgLgLgAgSgWQgHAJAAAOQAAANAHAIQAHAJALAAQANAAAGgJQAHgHAAgPQAAgNgHgJQgGgIgNAAQgLAAgHAIg");
	this.shape_1149.setTransform(64.7,378.9);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#FFFFFF").s().p("AgJAdIAAguIgOAAIAAgLIAOAAIAAgUIANgFIAAAZIAUAAIAAALIgUAAIAAArQAAAJADADQADADAGABQAFgBADgCIAAAMQgEACgJAAQgUABAAgZg");
	this.shape_1150.setTransform(57.2,377.8);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#FFFFFF").s().p("AAPA8IgignIAAAAIAAAnIgOAAIAAh3IAOAAIAABLIAAAAIAggkIATAAIgkAmIAmAqg");
	this.shape_1151.setTransform(46.6,377);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#FFFFFF").s().p("AgTAfQgLgLAAgSQAAgTAMgMQALgMATAAQALAAAIADIAAAPQgJgGgKgBQgMAAgHAJQgIAIAAAOQAAANAHAIQAHAJAMAAQAKAAAKgIIAAAOQgKAGgNgBQgQAAgLgLg");
	this.shape_1152.setTransform(38.2,378.9);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#FFFFFF").s().p("AgHA7IAAhQIAOAAIAABQgAgGgrQgCgDAAgDQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAADgDADQgCADgEAAQgDAAgDgDg");
	this.shape_1153.setTransform(32.4,377);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#FFFFFF").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_1154.setTransform(28.4,377);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#FFFFFF").s().p("AgbArQgPgPABgaQAAgaAQgRQAQgRAYAAQARAAAKAFIAAAPQgMgGgPAAQgRAAgNAMQgLANAAAUQAAAVALAMQALAMARAAQARAAAMgIIAAAOQgMAHgTAAQgXAAgPgQg");
	this.shape_1155.setTransform(21.4,377.3);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#FFFFFF").s().p("Ag2BLIAAgdQAWAPAZAAQAhABAAgWQAAgKgIgGQgHgGgVgIQgbgKgIgLQgJgKAAgQQAAgVATgNQASgNAaAAQAUAAASAIIAAAbQgSgLgXAAQgNAAgJAFQgIAHAAAJQAAAKAGAFQAGAGAVAIQAbAKAJAKQAKALAAAQQAAAWgSANQgTANgcAAQgZAAgTgKg");
	this.shape_1156.setTransform(456.9,62.2);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#FFFFFF").s().p("AgzA/QgTgWAAgoQAAgkAVgYQAWgZAfAAQAgAAARAUQASAVAAAlIAAANIhwAAQABAaANAPQAOANAXAAQAbAAAXgRIAAAZQgWAQgjAAQgiAAgUgWgAgZgwQgNANgDAVIBUAAQAAgXgLgMQgKgMgTABQgQAAgMAMg");
	this.shape_1157.setTransform(441.4,62.2);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#FFFFFF").s().p("AAoBTIAAhbQAAgygkAAQgTAAgMAOQgMAOABAVIAABcIgdAAIAAihIAdAAIAAAbIAAAAQASgfAiAAQAbAAANARQAOASABAgIAABig");
	this.shape_1158.setTransform(423.7,62);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#FFFFFF").s().p("Ag6A+QgVgXgBglQAAgoAXgWQAWgYAmAAQAkAAAVAXQAVAWgBAnQAAAlgVAYQgXAYgkAAQgkAAgWgXgAglgrQgNAQAAAcQAAAcAOAQQAOAQAWAAQAZAAANgPQANgRAAgdQAAgcgNgQQgNgQgZAAQgWAAgPARg");
	this.shape_1159.setTransform(404.8,62.2);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#FFFFFF").s().p("AAoB4IAAhdQAAgwglAAQgRAAgMAOQgMANgBAWIAABcIgcAAIAAjvIAcAAIAABpIABAAQASgfAiAAQA3AAgBBBIAABkg");
	this.shape_1160.setTransform(386.2,58.3);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#FFFFFF").s().p("AhLB4IAAjrIAdAAIAAAcIABAAQATggAjAAQAfAAASAWQASAVAAAlQAAAngUAZQgUAZgiAAQgeAAgRgbIgBAAIAABhgAgghQQgOAPAAAXIAAAWQAAAUANAMQAMAOAUAAQAVAAANgSQANgQAAgfQAAgbgMgOQgMgPgVAAQgUAAgNAPg");
	this.shape_1161.setTransform(367.8,65.7);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#FFFFFF").s().p("AgUA7IAAhdIgcAAIAAgYIAcAAIAAgnIAcgJIAAAwIAoAAIAAAYIgoAAIAABXQAAAQAFAHQAGAHAMAAQAKAAAHgFIAAAYQgJAFgQAAQgqAAgBgwg");
	this.shape_1162.setTransform(343.1,60);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#FFFFFF").s().p("Ag2BLIAAgdQAWAPAZAAQAhABAAgWQAAgKgIgGQgHgGgVgIQgbgKgIgLQgJgKAAgQQAAgVATgNQASgNAaAAQAUAAASAIIAAAbQgSgLgXAAQgNAAgJAFQgIAHAAAJQAAAKAGAFQAGAGAVAIQAbAKAJAKQAKALAAAQQAAAWgSANQgTANgcAAQgZAAgTgKg");
	this.shape_1163.setTransform(330.8,62.2);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#FFFFFF").s().p("AgqBSIAAihIAdAAIAAAiIAAAAQAMglAeABQAJgBAFADIAAAdQgGgFgOAAQgQAAgKAPQgKAQAAAYIAABSg");
	this.shape_1164.setTransform(319,62.1);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#FFFFFF").s().p("AgOB2IAAihIAcAAIAAChgAgMhXQgFgFAAgHQAAgIAFgGQAFgEAHAAQAIAAAFAEQAFAGAAAIQAAAHgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_1165.setTransform(308.1,58.5);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#FFFFFF").s().p("AgVB6IAAiKIgcAAIAAgXIAcAAIAAgaQAAgaAPgPQAOgPAXAAQAMAAAHADIAAAZQgIgEgJAAQgbAAAAAiIAAAYIAmAAIAAAXIgmAAIAACKg");
	this.shape_1166.setTransform(299.5,58.1);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#FFFFFF").s().p("AgzA/QgTgWAAgoQAAgkAVgYQAWgZAfAAQAgAAARAUQASAVAAAlIAAANIhwAAQABAaANAPQAOANAXAAQAbAAAXgRIAAAZQgWAQgjAAQgiAAgUgWgAgZgwQgNANgDAVIBUAAQAAgXgLgMQgKgMgTABQgQAAgMAMg");
	this.shape_1167.setTransform(276.4,62.2);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#FFFFFF").s().p("AAoB4IAAhdQAAgwgkAAQgSAAgNAOQgLANgBAWIAABcIgcAAIAAjvIAcAAIAABpIABAAQASgfAiAAQA3AAgBBBIAABkg");
	this.shape_1168.setTransform(258.8,58.3);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#FFFFFF").s().p("AgOBxIAAjHIhBAAIAAgaICfAAIAAAaIhBAAIAADHg");
	this.shape_1169.setTransform(240.8,59);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#FFFFFF").s().p("AgqALIAAgVIBVAAIAAAVg");
	this.shape_1170.setTransform(216.9,61.3);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#FFFFFF").s().p("Ag2BLIAAgdQAWAPAZAAQAhABAAgWQAAgKgIgGQgHgGgVgIQgbgKgIgLQgJgKAAgQQAAgVATgNQASgNAaAAQAUAAASAIIAAAbQgSgLgXAAQgNAAgJAFQgIAHAAAJQAAAKAGAFQAGAGAVAIQAbAKAJAKQAKALAAAQQAAAWgSANQgTANgcAAQgZAAgTgKg");
	this.shape_1171.setTransform(194.7,62.2);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#FFFFFF").s().p("AgJAjIgEhFIAcAAIgGBFg");
	this.shape_1172.setTransform(184.8,51.1);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#FFFFFF").s().p("Ag3BYQgTgdAAg3QAAg7AUgfQAUgeAlAAQBIAAAAB0QAAA4gUAfQgVAegkAAQgiAAgTgdgAgsADQgBBaAuAAQAsAAABhcQAAhegtAAQgtAAAABgg");
	this.shape_1173.setTransform(172.1,59);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#FFFFFF").s().p("AglBtQgRgJgJgPQgKgQAAgTQAAgUAMgQQAMgQATgHQgPgIgJgNQgJgNAAgPQAAgQAIgNQAIgOAQgIQAOgHARAAQASAAAPAHQAPAIAHANQAJANAAARQAAAPgJANQgIANgPAIQATAHALAQQALAQAAAUQAAATgJAQQgJAPgRAJQgRAIgVAAQgUAAgRgIgAgfARQgNANgBATQAAAUANANQAMALAUABQAUAAANgNQANgMAAgUQAAgTgNgNQgNgNgUAAQgTAAgMANgAgahSQgLALAAAPQAAAPALALQAMALAOAAQAPAAALgLQAMgLAAgPQAAgPgLgLQgLgLgQAAQgPAAgLALg");
	this.shape_1174.setTransform(154.5,59);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#FFFFFF").s().p("AgzA/QgTgWAAgoQAAgkAVgYQAWgZAfAAQAgAAARAUQASAVAAAlIAAANIhwAAQABAaANAPQAOANAXAAQAbAAAXgRIAAAZQgWAQgjAAQgiAAgUgWgAgZgwQgNANgDAVIBUAAQAAgXgLgMQgKgMgTABQgQAAgMAMg");
	this.shape_1175.setTransform(128.5,62.2);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#FFFFFF").s().p("AAoB4IAAhdQAAgwgkAAQgSAAgMAOQgMANgBAWIAABcIgdAAIAAjvIAdAAIAABpIABAAQASgfAiAAQA3AAgBBBIAABkg");
	this.shape_1176.setTransform(110.8,58.3);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#FFFFFF").s().p("AgOBxIAAjHIhBAAIAAgaICfAAIAAAaIhBAAIAADHg");
	this.shape_1177.setTransform(92.9,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.instance_7},{t:this.instance_6},{t:this.backArrow1},{t:this.woman80s},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128}]},4).to({state:[]},1).wait(43));

	// Layer_1
	this.instance_8 = new lib.ClipGroup_0_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(130.2,276.6,0.255,0.255,0,0,0,408.2,527.9);

	this.btn2000s = new lib.Button2000s1();
	this.btn2000s.name = "btn2000s";
	this.btn2000s.parent = this;
	this.btn2000s.setTransform(455.8,280,1,1,0,0,0,36.8,36.8);

	this.btn90s = new lib.Button90s1();
	this.btn90s.name = "btn90s";
	this.btn90s.parent = this;
	this.btn90s.setTransform(364.2,280,1,1,0,0,0,36.8,36.8);

	this.btn80s = new lib.Button80s1();
	this.btn80s.name = "btn80s";
	this.btn80s.parent = this;
	this.btn80s.setTransform(278.2,280,1,1,0,0,0,36.8,36.8);

	this.text = new cjs.Text("SELECT A TIME PERIOD", "25px 'Microsoft YaHei UI'", "#0000CC");
	this.text.lineHeight = 34;
	this.text.lineWidth = 300;
	this.text.parent = this;
	this.text.setTransform(221.6,193.2);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#FFFFFF").s().p("AglBiQgPgDgHgFIAAgdQAJAIAPAFQAPAFANAAQApAAAAgdQAAgIgFgHQgEgHgIgFIgcgPQgegOgJgNQgJgMAAgRQAAgYATgOQAUgPAdAAQAdAAAOAHIAAAcQgSgMgbAAQgRAAgLAHQgMAIAAANQAAAMAIAIQAIAHAZANQAdANAMAOQALAOAAARQAAAagSAOQgTAOghAAQgLAAgQgEg");
	this.shape_1178.setTransform(257.6,121.8);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#FFFFFF").s().p("Ag0BiIAAjDIBkAAIAAAWIhKAAIAAA/IBFAAIAAAWIhFAAIAABCIBPAAIAAAWg");
	this.shape_1179.setTransform(243.5,121.8);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#FFFFFF").s().p("AAyBiIhiiYIgGgNIgBAAIABAcIAACJIgZAAIAAjDIAgAAIBfCVIAIANIAAAAIgBgcIAAiGIAZAAIAADDg");
	this.shape_1180.setTransform(225.1,121.8);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#FFFFFF").s().p("AhDBKQgagcABgsQAAguAagdQAZgcArAAQApAAAaAcQAZAbAAAtQAAAugaAcQgaAdgqAAQgqAAgZgcgAgvg4QgSAWAAAiQgBAkATAVQASAWAdAAQAeAAATgVQASgUAAglQgBglgRgVQgRgVgfAAQgdAAgTAWg");
	this.shape_1181.setTransform(204,121.8);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#FFFFFF").s().p("AAyBiIAAhYIhjAAIAABYIgZAAIAAjDIAZAAIAABVIBjAAIAAhVIAZAAIAADDg");
	this.shape_1182.setTransform(183.4,121.8);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#FFFFFF").s().p("AheCXIAAktIBXAAQAvAAAbAXQAbAYAAAsQABAsggAbQgfAcgvgCIgnAAIAABxgAg2AEIAkAAQAjAAASgPQASgQABgfQAAg6hFAAIgnAAg");
	this.shape_1183.setTransform(162.2,113);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#FFFFFF").s().p("AgzBiIAAjDIAaAAIAACtIBNAAIAAAWg");
	this.shape_1184.setTransform(135.5,121.8);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#FFFFFF").s().p("AgzBiIAAjDIAaAAIAACtIBNAAIAAAWg");
	this.shape_1185.setTransform(122.2,121.8);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#FFFFFF").s().p("Ag0BiIAAjDIBkAAIAAAWIhKAAIAAA/IBFAAIAAAWIhFAAIAABCIBPAAIAAAWg");
	this.shape_1186.setTransform(108,121.8);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#FFFFFF").s().p("AhJBzQgngpAAhEQAAhIAsgtQArgsBDAAQArAAAcAMIAAApQgggSgnAAQgyAAgfAiQggAhAAA4QAAA3AdAgQAeAgAvAAQAtAAAhgVIAAAmQghARgyAAQhAAAgngpg");
	this.shape_1187.setTransform(86.7,113);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#FFFFFF").s().p("AgyBiIAAjDIBlAAIAAAWIhLAAIAABCIBFAAIAAAVIhFAAIAABWg");
	this.shape_1188.setTransform(55.4,121.8);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#FFFFFF").s().p("AhnByQgngqAAhEQAAhJAngrQAogrBDAAQA/AAAmAqQAnAqgBBEQAABJgnArQgnArhCAAQg/AAgngqgAhJhXQgdAiAAA1QAAA3AcAiQAcAhAtAAQAwAAAcggQAbggABg5QAAg6gbgfQgcggguAAQguAAgdAhg");
	this.shape_1189.setTransform(31.5,113);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#FFFFFF").s().p("AAyBiIhiiYIgGgNIgBAAIABAcIAACJIgZAAIAAjDIAgAAIBfCVIAIANIAAAAIgBgcIAAiGIAZAAIAADDg");
	this.shape_1190.setTransform(227.4,69);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#FFFFFF").s().p("AhDBKQgagcABgsQAAguAagdQAZgcArAAQApAAAaAcQAZAbAAAtQAAAugaAcQgaAdgqAAQgqAAgZgcgAgvg4QgSAWAAAiQgBAkATAVQASAWAdAAQAeAAATgVQASgUAAglQgBglgRgVQgRgVgfAAQgdAAgTAWg");
	this.shape_1191.setTransform(206.3,69);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#FFFFFF").s().p("AgMBiIAAjDIAZAAIAADDg");
	this.shape_1192.setTransform(191.9,69);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#FFFFFF").s().p("AgMBiIAAitIg4AAIAAgWICJAAIAAAWIg4AAIAACtg");
	this.shape_1193.setTransform(180.6,69);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#FFFFFF").s().p("AhJATIAAh2IAZAAIAAB1QABA7AwAAQAwAAAAg5IAAh3IAZAAIAAB0QAABThLAAQhIAAAAhRg");
	this.shape_1194.setTransform(163.5,69.2);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#FFFFFF").s().p("AgzBiIAAjDIAaAAIAACtIBNAAIAAAWg");
	this.shape_1195.setTransform(148.5,69);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#FFFFFF").s().p("AhDBKQgagcAAgsQAAguAagdQAagcAsAAQAoAAAZAcQAZAbAAAtQAAAugaAcQgZAdgqAAQgqAAgZgcgAgvg4QgSAWgBAiQAAAkASAVQATAWAdAAQAeAAASgVQASgUAAglQAAglgRgVQgRgVgfAAQgeAAgSAWg");
	this.shape_1196.setTransform(130.3,69);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#FFFFFF").s().p("AgOBiIhGjDIAbAAIA2CYQACAIABAKIAAAAQABgJAEgJIA2iYIAbAAIhIDDg");
	this.shape_1197.setTransform(111.1,69);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#FFFFFF").s().p("AhQCXIAAktICaAAIAAAiIh0AAIAABhIBsAAIAAAiIhsAAIAABmIB7AAIAAAig");
	this.shape_1198.setTransform(92.3,60.1);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#FFFFFF").s().p("Ag0BiIAAjDIBkAAIAAAWIhKAAIAAA/IBFAAIAAAWIhFAAIAABCIBPAAIAAAWg");
	this.shape_1199.setTransform(66.1,69);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#FFFFFF").s().p("AAyBiIAAhYIhiAAIAABYIgaAAIAAjDIAaAAIAABVIBiAAIAAhVIAZAAIAADDg");
	this.shape_1200.setTransform(48.2,69);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#FFFFFF").s().p("AgTCXIAAkLIhXAAIAAgiIDVAAIAAAiIhYAAIAAELg");
	this.shape_1201.setTransform(26.7,60.1);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#FFFFFF").s().p("Ag5CXQgYgFgLgHIAAgtQAOANAXAHQAYAIAUAAQA/AAAAgtQAAgNgHgKQgGgKgMgIQgNgIgfgQQgugWgPgTQgOgUAAgZQAAglAfgWQAdgWAuAAQAtAAAVALIAAAqQgcgTgpAAQgbAAgRAMQgSALAAAVQAAATAMALQANAMAnATQAsAVASAVQASAVAAAbQAAAogdAVQgdAVgyAAQgSAAgYgFg");
	this.shape_1202.setTransform(336.8,113);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#FFFFFF").s().p("AhRCXIAAktICbAAIAAAiIh0AAIAABhIBsAAIAAAiIhsAAIAABmIB7AAIAAAig");
	this.shape_1203.setTransform(315.1,113);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#FFFFFF").s().p("ABNCXIiXjqQgGgKgEgKIgBAAQABAKAAAhIAADTIgmAAIAAktIAwAAICUDmIAMAVIABAAQgCgNAAgfIAAjPIAmAAIAAEtg");
	this.shape_1204.setTransform(286.8,113);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#FFFFFF").s().p("AhoByQgngqAAhEQAAhJAogrQAogrBCAAQA/AAAnAqQAnAqAABEQAABJgoArQgnArhBAAQhBAAgngqgAhIhXQgdAiAAA1QAAA3AcAiQAbAhAuAAQAvAAAcggQAbggAAg5QAAg6gbgfQgagggwAAQgtAAgcAhg");
	this.shape_1205.setTransform(254.2,113);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#FFFFFF").s().p("ABNCXIAAiIIiZAAIAACIIgnAAIAAktIAnAAIAACDICZAAIAAiDIAnAAIAAEtg");
	this.shape_1206.setTransform(222.4,113);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#FFFFFF").s().p("AheCXIAAktIBXAAQAvAAAbAXQAbAYAAAsQAAAsgfAbQgfAcgvgCIgoAAIAABxgAg3AEIAlAAQAjAAASgPQASgQABgfQAAg6hEAAIgpAAg");
	this.shape_1207.setTransform(195.9,113);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#FFFFFF").s().p("AhPCXIAAktIAnAAIAAELIB4AAIAAAig");
	this.shape_1208.setTransform(162,113);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#FFFFFF").s().p("AhPCXIAAktIAnAAIAAELIB4AAIAAAig");
	this.shape_1209.setTransform(141.5,113);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#FFFFFF").s().p("AhQCXIAAktICaAAIAAAiIh0AAIAABhIBsAAIAAAiIhsAAIAABmIB8AAIAAAig");
	this.shape_1210.setTransform(119.7,113);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#FFFFFF").s().p("AhNCXIAAktICbAAIAAAiIh0AAIAABmIBrAAIAAAhIhrAAIAACEg");
	this.shape_1211.setTransform(59.5,113);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#FFFFFF").s().p("AhDBKQgZgcgBgsQAAguAagdQAagcAsAAQAoAAAZAcQAaAbgBAtQAAAugaAcQgZAdgqAAQgqAAgZgcgAgvg4QgTAWAAAiQABAkARAVQATAWAdAAQAfAAARgVQASgUAAglQAAglgRgVQgSgVgeAAQgeAAgSAWg");
	this.shape_1212.setTransform(198.6,69);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#FFFFFF").s().p("AhJATIAAh2IAaAAIAAB1QAAA7AwAAQAvAAAAg5IAAh3IAaAAIAAB0QAABThKAAQhJAAAAhRg");
	this.shape_1213.setTransform(155.8,69.2);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#FFFFFF").s().p("AgOBiIhHjDIAcAAIA1CYQADAIABAKIAAAAQABgJADgJIA2iYIAbAAIhIDDg");
	this.shape_1214.setTransform(103.4,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193,p:{x:180.6}},{t:this.shape_1192,p:{x:191.9}},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187,p:{x:86.7}},{t:this.shape_1186,p:{x:108,y:121.8}},{t:this.shape_1185},{t:this.shape_1184,p:{x:135.5,y:121.8}},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181,p:{x:204,y:121.8}},{t:this.shape_1180,p:{x:225.1,y:121.8}},{t:this.shape_1179,p:{x:243.5,y:121.8}},{t:this.shape_1178},{t:this.text},{t:this.btn80s},{t:this.btn90s,p:{x:364.2}},{t:this.btn2000s},{t:this.instance_8}]}).to({state:[{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1186,p:{x:66.1,y:69}},{t:this.shape_1179,p:{x:88.1,y:69}},{t:this.shape_1214},{t:this.shape_1181,p:{x:122.6,y:69}},{t:this.shape_1184,p:{x:140.8,y:69}},{t:this.shape_1213},{t:this.shape_1193,p:{x:172.9}},{t:this.shape_1192,p:{x:184.2}},{t:this.shape_1212},{t:this.shape_1180,p:{x:219.7,y:69}},{t:this.shape_1189},{t:this.shape_1211},{t:this.shape_1187,p:{x:94.1}},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.text},{t:this.btn80s},{t:this.btn90s,p:{x:367.7}},{t:this.btn2000s},{t:this.instance_8}]},1).to({state:[]},1).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.2,232.6,510.6,378.7);
// library properties:
lib.properties = {
	id: 'DB7BF6C4CF017745922F550360E73E59',
	width: 550,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/era_of_cellphones_atlas_.png", id:"era_of_cellphones_atlas_"},
		{src:"sounds/nokia.mp3", id:"nokia"}
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
an.compositions['DB7BF6C4CF017745922F550360E73E59'] = {
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