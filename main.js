window.addEventListener("DOMContentLoaded", (event) => {
	var els = document.getElementsByClassName("annotated");

	function closeTab() {
		var annotations = document.getElementsByClassName("annotation");
		while (annotations.length > 0) {
			for (var i = 0; i < annotations.length; i++) {
				annotations[i].remove();

			}
		}
		// Move main div inwards
		var main = document.getElementById("main")
		main.style.marginLeft = "0px";
		main.style.padding = "0px, 0px";
	}



	function createAnnotater(annotationText) {
		function f() {
			// Create sidebar
			var annotationDiv = document.createElement("div");
			annotationDiv.classList.add("annotation");
			
			var closeButton = document.createElement("div");
			var closeButtonText = document.createElement("p");
			closeButtonText.innerHTML = "Close";
			closeButton.appendChild(closeButtonText);
			closeButton.addEventListener("click", closeTab);

			var annotation = document.createElement("p");
			annotation.innerHTML = annotationText;

			annotationDiv.appendChild(closeButton);
			annotationDiv.appendChild(annotation);
			document.body.appendChild(annotationDiv);

			// Move main div inwards
			var main = document.getElementById("main")
			main.style.marginLeft = "160px";
			main.style.padding = "0px, 10px";
		}
		return f;
	}



	for (var i = 0; i < els.length; i++) {
		g = createAnnotater(els[i].dataset.geniusAnnotation);
		els[i].addEventListener("click", g);
	}
});
