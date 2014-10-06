
document.onload = function() {
	var NN = {};
}

function addTemplate(elem) {
	var temp = elem.parentNode.parentNode.lastElementChild.firstElementChild;
	var node = temp.cloneNode(true);

	document.body.appendChild(node);
}