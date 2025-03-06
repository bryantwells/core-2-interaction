// get the inputs
var pressButton = document.querySelector('button[name="press"]');
var studentSelect = document.querySelector('select[name="student"]');
var pennySelect = document.querySelector('select[name="penny"]');
var penny = document.querySelector('.penny');

pressButton.addEventListener('click', () => {
	// penny.src = `img/${ pennySelect.value }`;
	penny.src = `https://${ studentSelect.value }.interactive.rodeo/studio/workshops/penny-presser/img/${ pennySelect.value }`;
});
