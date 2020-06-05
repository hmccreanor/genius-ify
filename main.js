window.addEventListener("DOMContentLoaded", (event) => {
	var els = document.getElementsByClassName("annotated");

	function createAnnotater(annotationText) {
		function f() {
			var annotationDiv = document.createElement("div");
			annotationDiv.classList.add("annotation");
			console.log(annotationDiv);

			var annotation = document.createElement("p");
			annotation.innerHTML = annotationText;

			annotationDiv.appendChild(annotation);
			document.body.appendChild(annotationDiv);
		}
		return f;
	}

	for (var i = 0; i < els.length; i++) {
		g = createAnnotater(els[i].dataset.geniusAnnotation);
		els[i].addEventListener("click", g);
	}
});
