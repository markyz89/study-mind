const selection = document.getElementsByClassName('selection-icons')[0];

const slideImage = document.getElementsByClassName('the-slide')[0];

const photo1 = document.getElementsByClassName('photo1')[0].getAttribute('data-pic-1');
const photo2 = document.getElementsByClassName('photo2')[0].getAttribute('data-pic-2');
const photo3 = document.getElementsByClassName('photo3')[0].getAttribute('data-pic-3');
const photo4 = document.getElementsByClassName('photo4')[0].getAttribute('data-pic-4');
const photo5 = document.getElementsByClassName('photo5')[0].getAttribute('data-pic-5');

// console.log(slideImage);
// console.log(photo1);
//autoRotate();

let slides = document.getElementsByClassName('slide')[0].children;
	console.log(slides);

	let slidesArray = [];

	for(let i =0; i < slides.length; i++) {
		if (slides[i].className.includes('photo')) {
			slidesArray.push(slides[i].className);
		}
	}

	console.log(slidesArray);

	numbers = slidesArray.map(function(item) {
		return item.replace( /^\D+/g, '');
	})

	console.log(numbers);


	// slides.forEach(function(item) {
	// 	console.log(item.className);
	// })
	let index=0;

	var sliderotation = setInterval(autoRotate, 2000);


selection.addEventListener('click', function(e) {
	//console.log(e.target);
	clearInterval(sliderotation);
	if(e.target.className.includes('tab-1') || e.target.parentElement.className.includes('tab-1')) {
		slideImage.src = photo1;
		let tab = document.querySelector('.tab-1');
		if (!tab.className.includes('selected')) {
			deselectTabs();
			tab.className = "tab tab-1 selected";
			imageWhiten();
			switchImage(tab);
			}

	} else if (e.target.className.includes('tab-2') || e.target.parentElement.className.includes('tab-2')) {
		slideImage.src = photo2;
		let tab = document.querySelector('.tab-2');
		if (!tab.className.includes('selected')) {
			deselectTabs();
			tab.className = "tab tab-2 selected";
			imageWhiten();
			switchImage(tab);
		}

	} else if (e.target.className.includes('tab-3') || e.target.parentElement.className.includes('tab-3')) {
		slideImage.src = photo3;
		let tab = document.querySelector('.tab-3');
		if (!tab.className.includes('selected')) {
			deselectTabs();
			tab.className = "tab tab-3 selected";
			imageWhiten();
			switchImage(tab);
		}
	} else if (e.target.className.includes('tab-4') || e.target.parentElement.className.includes('tab-4')) {
		slideImage.src = photo4;
		let tab = document.querySelector('.tab-4');
		if (!tab.className.includes('selected')) {
			deselectTabs();
			tab.className = "tab tab-4 selected";
			imageWhiten();
			switchImage(tab);
		}
	} else if (e.target.className.includes('tab-5') || e.target.parentElement.className.includes('tab-5')) {
		slideImage.src = photo5;
		let tab = document.querySelector('.tab-5');
		if (!tab.className.includes('selected')) {
			deselectTabs();
			tab.className = "tab tab-5 selected";
			imageWhiten();
			switchImage(tab);
		}
	}
})

// function to autorotate tabs

function autoRotate() {
	if(index < numbers.length) {
		index+= 1;
	} else {
		index = 1;
	}
	console.log(index);
	let imgSrc = document.getElementsByClassName('photo'+index)[0].getAttribute('data-pic-'+index);
	slideImage.src = imgSrc;
	let tab = document.querySelector('.tab-'+index);
	if (!tab.className.includes('selected')) {
		deselectTabs();
		tab.className = "tab tab-"+index+" selected";
		imageWhiten();
		switchImage(tab);
	}
}


// function to reset all tabs to unselected

function deselectTabs() {
	let tabs = document.querySelectorAll('.tab');
	// console.log(tabs);
	tabs.forEach(function(item) {
		// console.log(item.className);
		item.className = item.className.replace('selected','');
	})
}

// switch from pink to white icon
function switchImage(x) {
	// console.log(x.childNodes);
	x.childNodes.forEach(function(item) {
		// console.log(item.className);
		if(item.className) {
			if(item.className.includes('hide')) {
				console.log(item.className);
				item.className = item.className.replace('hide', 'show');
			} else if(item.className.includes('show')) {
				item.className = item.className.replace('show', 'hide');
			}
			
		}
	})
}

// set all icons to white

function imageWhiten() {
	let pinkIcons = document.querySelectorAll('.pink');
	let whiteIcons = document.querySelectorAll('.white');

	pinkIcons.forEach(function(item) {
		item.className = item.className = "pink hide";
	})

	whiteIcons.forEach(function(item) {
		item.className = item.className = "white show";
	})
}

(function faqsToggle() {
	let questions = document.getElementsByClassName('question');

	console.log(questions);

	for(let i=0; i<questions.length; i++) {
		questions[i].addEventListener('click', function(){
			//console.log(questions[i]);
			let answerClass = 'answer-'+(i+1);
			let question = questions[i];
			
			//console.log(answerClass);
			let answer = document.getElementById(answerClass);
			if (answer.className.includes('hide')) {
				answer.className = 'answer';
				
				question.childNodes.forEach(function(item) {
					if(item.className) {
						if(item.className.includes('hide')) {
							console.log(item.className);
							item.className = item.className.replace('hide', 'show');
						} else if(item.className.includes('show')) {
							item.className = item.className.replace('show', 'hide');
						}
						
					}
				})

			} else {
				answer.className = 'answer hide';
				
				question.childNodes.forEach(function(item) {
					if(item.className) {
						if(item.className.includes('hide')) {
							console.log(item.className);
							item.className = item.className.replace('hide', 'show');
						} else if(item.className.includes('show')) {
							item.className = item.className.replace('show', 'hide');
						}
						
					}
				})

			}

		})
	}
})();
