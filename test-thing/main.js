(function(document) {
	var TestThing = Object.create(HTMLElement.prototype);
	TestThing.createdCallback = function() {
		var shadow = this.createShadowRoot();

		var template = document.querySelector("#template").content.cloneNode(true);
		shadow.appendChild(template);

		ko.applyBindings({
			hello: ko.observable("world")
		}, shadow.querySelector("#ko-app"));
	};

	document.registerElement('test-thing', {
		prototype: TestThing
	});

})(document.currentScript.ownerDocument);
