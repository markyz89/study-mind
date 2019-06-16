const aLevel = document.getElementById('a-level-selector');
const gcse = document.getElementById('gcse-selector');

console.log(aLevel, gcse);

const gcseGrid = document.querySelector('.gcse');
const alevelGrid = document.querySelector('.a-level-wrapper');


let displayed = 'gcse';


aLevel.addEventListener('click', function() {
	if(alevelGrid.className.includes('change')) {
		displayed = 'alevel';
		alevelGrid.className = "a-level-wrapper";
		gcseGrid.className = "subject-buttons-grid gcse change"
		aLevel.className = "purple-button";
		gcse.className = '';
		console.log(displayed);
	}
})

gcse.addEventListener('click', function() {
	if(gcseGrid.className.includes('change')) {
		displayed = 'gcse';
		gcseGrid.className = "subject-buttons-grid gcse"
		alevelGrid.className = "a-level-wrapper change";
		aLevel.className = "";
		gcse.className = 'purple-button';
		console.log(displayed);
	}
})