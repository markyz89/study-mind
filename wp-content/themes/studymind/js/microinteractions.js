const bodyClasses = document.querySelector('body').className;

//console.log(bodyClasses);




var body = document.body,
	    html = document.documentElement;

	var height = Math.max( body.scrollHeight, body.offsetHeight, 
	                       html.clientHeight, html.scrollHeight, html.offsetHeight );
	var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	console.log(width);

	console.log(height);



if(bodyClasses.includes('home')) {
dynamicScrollOffsetHome();
}

if(bodyClasses.includes('single-subject')) {
dynamicScrollOffsetTutor();
tutorCarousel();
//reviewScroll();
}





function dynamicScrollOffsetHome() {
	// var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	// var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	// console.log(w, h);

	// values on monitor...1600 767

	// height value 6385


	const gt1 = document.querySelector('.group-text-1').getAttribute('data-appear-offset');
	const gt2 = document.querySelector('.group-text-2').getAttribute('data-appear-offset');
	const gt3 = document.querySelector('.group-text-3').getAttribute('data-appear-offset');



	let gt1No = (gt1 / 6385) * height;
	let gt2No = (gt2 / 6385) * height;
	let gt3No = (gt3 / 6385) * height;

	console.log(gt1No, gt2No, gt3No);

	document.querySelector('.group-text-1').setAttribute('data-appear-offset', gt1No);
	document.querySelector('.group-text-2').setAttribute('data-appear-offset', gt2No);
	document.querySelector('.group-text-3').setAttribute('data-appear-offset', gt3No);

	new ScrollAppear(".group-text-1");
	new ScrollAppear(".group-text-2");
	new ScrollAppear(".group-text-3");


	// course tabs values 450 and 850

	const ct1 = document.querySelector('.desktop-course-tabs-1').getAttribute('data-appear-offset');
	const ct2 = document.querySelector('.desktop-course-tabs-2').getAttribute('data-appear-offset');

	//console.log(ct1, ct2);

	let ct1No = (ct1/6385) * height;
	let ct2No = (ct2/6385) * height;

	document.querySelector('.desktop-course-tabs-1').setAttribute('data-appear-offset', ct1No);
	document.querySelector('.desktop-course-tabs-2').setAttribute('data-appear-offset', ct2No);

	new ScrollAppear(".desktop-course-tabs");

	// edit the steps data offset

}


function dynamicScrollOffsetTutor() {
	//height value 10338

	const step1 = document.querySelector('.step-1').getAttribute('data-appear-offset');
	const step2 = document.querySelector('.step-2').getAttribute('data-appear-offset');
	const step3 = document.querySelector('.step-3').getAttribute('data-appear-offset');


		console.log(step1, step2, step3);

	let step1No = (step1/10338) * height;
	let step2No = (step2/10338) * height;
	let step3No = (step3/10338) * height;

	document.querySelector('.step-1').setAttribute('data-appear-offset', step1No);
	document.querySelector('.step-2').setAttribute('data-appear-offset', step2No);
	document.querySelector('.step-3').setAttribute('data-appear-offset', step3No);

		new ScrollAppear('.step');

		const tutorText1 = document.querySelector('#tutor-text-1').getAttribute('data-appear-offset');
		const tutorText2 = document.querySelector('#tutor-text-2').getAttribute('data-appear-offset');
		const tutorText3 = document.querySelector('#tutor-text-3').getAttribute('data-appear-offset');
		const tutorText4 = document.querySelector('#tutor-text-4').getAttribute('data-appear-offset');
		
		let tTNo1 = (tutorText1/10338) * height;
		let tTNo2 = (tutorText2/10338) * height;
		let tTNo3 = (tutorText3/10338) * height;
		let tTNo4 = (tutorText4/10338) * height;

		document.querySelector('#tutor-text-1').setAttribute('data-appear-offset', tTNo1);
		document.querySelector('#tutor-text-2').setAttribute('data-appear-offset', tTNo2);
		document.querySelector('#tutor-text-3').setAttribute('data-appear-offset', tTNo3);
		document.querySelector('#tutor-text-4').setAttribute('data-appear-offset', tTNo4);


		new ScrollAppear('#tutor-text-1');
		new ScrollAppear('#tutor-text-2');
		new ScrollAppear('#tutor-text-3');
		new ScrollAppear('#tutor-text-4');

		const line1 = document.querySelector('#line-overlay-1').getAttribute('data-appear-offset');
		const line2 = document.querySelector('#line-overlay-2').getAttribute('data-appear-offset');
		const line3 = document.querySelector('#line-overlay-3').getAttribute('data-appear-offset');

		let ln1 = (line1/10338) * height;
		let ln2 = (line2/10338) * height;
		let ln3 = (line3/10338) * height;

		document.querySelector('#line-overlay-1').setAttribute('data-appear-offset', ln1);
		document.querySelector('#line-overlay-2').setAttribute('data-appear-offset', ln2);
		document.querySelector('#line-overlay-3').setAttribute('data-appear-offset', ln3);

		new ScrollAppear('.line-overlay');


		const lineGraph = document.querySelector('#graph-overlay').getAttribute('data-appear-offset');
		let lG = (lineGraph/10338) * height;
		document.querySelector('#graph-overlay').setAttribute('data-appear-offset', lG);
		
		new ScrollAppear('#graph-overlay');
}



function tutorCarousel() {
	
	const tutor1 = document.getElementById('tutor-1');
	const tutor2 = document.getElementById('tutor-2');
	const tutor3 = document.getElementById('tutor-3');
	//console.log(tutor1.parentElement);

	let data = document.querySelector('.tutor-carousel').attributes;
	let dataArray = [];
	
	for(let i=0; i<data.length; i++) {
		if(data[i].name.includes('tutor')) {
			dataArray.push(data[i]);		
		}
		
	}

	let fancyArray = [];
	
	for(let i=0; i<data.length; i++) {
		if(data[i].name.includes('fancy')) {
			fancyArray.push(data[i]);		
		}
		
	}
	
	let lastProfile = dataArray.length;

	var rotation = setInterval(moveRight, 2000)

	function delay(elem, callback) {
		let timeout = null;
		elem.onmouseover=function() {
			clearInterval(rotation)
			timeout=setInterval(callback, 750);
		}

		elem.onmouseout = function() {
			clearTimeout(timeout);
			rotation = setInterval(moveRight, 2000)
		}
	}




	delay(tutor1, moveLeft)

function moveLeft() {
	let new1stImg;
	let new2ndImg; 
	let new3rdImg;

	let fancy1stImg;
	let fancy2ndImg; 
	let fancy3rdImg;

	(function updateImgs() {
		new1stImg = dataArray[lastProfile-1].textContent;
		new2ndImg = dataArray[0].textContent;
		new3rdImg = dataArray[1].textContent;
		dataArray = dataArray.splice(lastProfile-1,1).concat(dataArray);
		// console.log(dataArray);


		fancy1stImg = fancyArray[lastProfile-1].textContent;
		fancy2ndImg = fancyArray[0].textContent;
		fancy3rdImg = fancyArray[1].textContent;
		fancyArray = fancyArray.splice(lastProfile-1,1).concat(fancyArray);
	})()
	
	tutor1.src= new1stImg;
	tutor2.src= new2ndImg;
	tutor3.src= new3rdImg;

	tutor1.parentElement.setAttribute('href', fancy1stImg);
	tutor2.parentElement.setAttribute('href', fancy2ndImg);
	tutor3.parentElement.setAttribute('href', fancy3rdImg);

	// console.log(tutor1.href);

}

	delay(tutor3, moveRight)

function moveRight() {

		let new3rdImg;
		let new2ndImg;
		let new1stImg;

		let fancy3rdImg;
		let fancy2ndImg;
		let fancy1stImg;

		(function updateImgs() {
			new3rdImg = dataArray[3].textContent;
			new2ndImg = dataArray[2].textContent;
			new1stImg = dataArray[1].textContent;
			dataArray = dataArray.concat(dataArray.splice(0,1));
			// console.log(dataArray);

			fancy3rdImg = fancyArray[3].textContent;
			fancy2ndImg = fancyArray[2].textContent;
			fancy1stImg = fancyArray[1].textContent;
			fancyArray = fancyArray.concat(fancyArray.splice(0,1));

		})()
		
		tutor3.src = new3rdImg;
		tutor2.src = new2ndImg;
		tutor1.src = new1stImg;

		// console.log(tutor3.href);



		tutor3.parentElement.setAttribute('href', fancy3rdImg);
		tutor2.parentElement.setAttribute('href', fancy2ndImg);
		tutor1.parentElement.setAttribute('href', fancy1stImg);
		

	}

}




// review boxes

// function reviewScroll() {
// 	let reviews = document.querySelectorAll('.review-box');
// 	let nodes = document.querySelectorAll('.node');

// 	// add event listeners on all the buttons.

// 	const selector = document.querySelector('.horizontal-selection');

// 	//listening for events on all buttons
// 	// selector.addEventListener('dragstart', function() {
// 	// 	event.dataTransfer.setData( 'text/plain', '' );
// 	// 	e.preventDefault();
// 	// 	//e.dataTransfer.effectAllowed = "copyMove";
// 	// });
// 	// selector.addEventListener('dragover', function() {
// 	// 	e.preventDefault();
// 	// 	e.dataTransfer.effectAllowed = "copyMove";
// 	// });
// 	selector.addEventListener('dragenter', moveReview);
// 	selector.addEventListener('click', moveReview)
		
// 		function moveReview(e){
// 			e.preventDefault();
// 			if(e.target.className.includes('node') || e.target.parentElement.className.includes('node')) {
// 				let selected = e.target.id || e.target.parentElement.id;
// 				let box = selected.replace( /^\D+/g, '');
// 				console.log(box);	

// 				// reset all boxes classes
// 				reviews.forEach(function(item) {
// 						console.log(item.className);
// 						item.className = "review-box";
// 					})

// 				// setting each boxes class

// 				// add class to first review box
// 				let leftBox;
// 				if (box == 1) {
// 					leftBox = reviews.length;
// 				} else {
// 					leftBox = Number(box)-1;
// 				}

// 				let leftBoxClass = "review-"+leftBox;
// 				//console.log(leftBoxClass);
// 				document.getElementById(leftBoxClass).className += " first-review";

// 				// add class to last shown review box

// 				let rightBox;
// 				if (box == reviews.length) {
// 					rightBox = 1;
// 				} else {
// 					rightBox = Number(box)+1; 
// 				}

// 				let rightBoxClass = "review-"+rightBox;
// 				//console.log(rightBoxClass);
// 				document.getElementById(rightBoxClass).className += " third-review";		

// 				// add class to selected review box
// 				let selectedBoxClass = "review-"+box;
// 				//console.log(selectedBoxClass);
// 				document.getElementById(selectedBoxClass).className += " featured-review";

// 				// Node logic
// 				nodes.forEach(function(item) {
// 					console.log(item);
// 					item.className = "node"
// 					item.setAttribute('draggable', false);
// 				})

// 				let selectedNode = "node-"+box;
// 				document.getElementById(selectedNode).className = "node selected";
// 				document.getElementById(selectedNode).draggable = "true";

// 				// hide other review boxes

// 				reviews.forEach(function(item) {
// 						if(item.className == "review-box") {
// 							item.className += " review-hidden";
// 						}
// 				})
// 			} // end of if statement
// 		}
// };


if (width > 1000) {

	(function navScrolls(){

		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('header').outerHeight();

		var didScroll;
		// on scroll, let the interval function know the user has scrolled
		$(window).scroll(function(event){
		  didScroll = true;
		});
		// run hasScrolled() and reset didScroll status
		setInterval(function() {
		  if (didScroll) {
		    hasScrolled();
		    scrollOnRight();
		    didScroll = false;
		  }
		}, 250);


		function hasScrolled() {
		  var st = $(this).scrollTop();	  

		  let difference = lastScrollTop - st;
		 //console.log(difference);


		  // If current position > last position AND scrolled past navbar...

		  if(st > 700 && difference > delta) {
		  	$('header').addClass('nav-down');
		  	$('#header-space-filler').css({"display":"block"});
			  if (st > lastScrollTop){
			    
			    // Scroll Down
			    $('header').removeClass('nav-up');
			    

			    // console.log('going down');


			  } else {
			    // Scroll Up
			    
			    // If did not scroll past the document (possible on mac)...
			    if(st + $(window).height() < $(document).height()) { 
			    	$('header').addClass('nav-up').removeClass('nav-down');

			      // console.log('going up');


			    }
			  }
		  } else {
		  	$('header').removeClass('nav-up');
		  	$('#header-space-filler').css({"display": "none"});
		  }


		  // console.log(st);
		  lastScrollTop = st;
		}

		function scrollOnRight() {
		
			//make the right nav appear
		if ($(this).scrollTop() >= ($('#pink-slider').position().top) -275/10338 * height) {
			//console.log('arrived');
			$('#right-menu').css({'display':'block'});
			// first circle
			$('.circle').removeClass('big-circle');
			$('.circle:first').addClass('big-circle');
			$('#right-menu').find('p').css({'color':'#fff'});

			//second circle
			if ($(this).scrollTop() >= ($('#tutoring-details').position().top) -275/10338 * height) {
				$('.circle').removeClass('big-circle');
					$('.circle:eq(1)').addClass('big-circle');
					$('#right-menu').find('p').css({'color':'#000'});
				}

			if ($(this).scrollTop() >= ($('.comparison').position().top) -275/10338 * height) {
				$('#right-menu').find('p').css({'color':'#fff'});
				console.log('fire');
			}

			//third circle
			if ($(this).scrollTop() >= ($('#reviews').position().top) -295/10338 * height) {
				$('.circle').removeClass('big-circle');
					$('.circle:eq(2)').addClass('big-circle');
					$('#right-menu').find('p').css({'color':'#000'});
				}

			if ($(this).scrollTop() >= ($('.tutor-content-separator').position().top) -295/10338 * height) {
				$('#right-menu').find('p').css({'color':'#fff'});
			}

			//fourth circle
			if ($(this).scrollTop() >= ($('#getting-started').position().top) -295/10338 * height) {
				$('.circle').removeClass('big-circle');
					$('.circle:eq(3)').addClass('big-circle');
					$('#right-menu').find('p').css({'color':'#000'});
				}

			//fifth circle
			if ($(this).scrollTop() >= ($('#faqs').position().top) -275/10338 * height) {
				$('.circle').removeClass('big-circle');
					$('.circle:eq(4)').addClass('big-circle');
					$('#right-menu').find('p').css({'color':'#000'});
				}

			if ($(this).scrollTop() >= ($('footer').position().top) -365/10338 * height) {
				$('#right-menu').find('p').css({'color':'#fff'});
			}

		// hide right nav in banner section
		} else {
			$('#right-menu').css({'display':'none'})
		}

		// 

	}


	})()
}

