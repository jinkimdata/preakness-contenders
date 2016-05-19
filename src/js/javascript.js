var preaknessContenders = {
	init: function(){
		preaknessContenders.share();
		preaknessContenders.scrollFunctions();		
	},
	// Share tool functions.
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = "Prep for this year's Preakness Stakes with this handy breakdown of the contenders."; //Tweet text
			var url = "http://data.baltimoresun.com/sports/preakness-2016/"; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = "http://data.baltimoresun.com/sports/preakness-2016/images/thumb.jpg"; //Picture URL
			var title = "Preakness 2016 Contenders"; //Post title
			var description = "Prep for this year's Preakness Stakes with this handy breakdown of the contenders."; //Post description
			var url = "http://data.baltimoresun.com/sports/preakness-2016/"; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	},
	// All functions relating to scrolling on the site is here.
	scrollFunctions: function() {
		var cellsWide = 10;
		// Except this one. This one gets rid of the splash page.
		$('.startButton').on('click touchend', function() {
			$('.splash').fadeOut();
			$('.hidden').removeClass('hidden');
		});
		// iScroll
		var myScroll = new IScroll('#contenders', {
			scrollX: true,
			scrollY: true,
			momentum: false,
			snap: true,
			mouseWheel: false,
			disableMouse: true,
			probeType: 3,
			bounce: false
		});
		document.addEventListener('touchend', function (e) { 
			e.preventDefault(); 
		}, false);
		// The timer puts on a cap on the number of times functions trigger. It is used repeatedly through this code.
		var timer;
		var xPos = 0;
		var yPos = 0;
		var horseNames = [
			'Cherry Wine',
			'Uncle Lino',
			'Nyquist',
			'Awesome Speed',
			'Exaggerator',
			'Lani',
			'Collected',
			'Laoban',
			'Abiding Star',
			'Fellowship',
			'Stradivari'
		];
		myScroll.on('scroll',function(){
			// It works by checking if a "timer" exists. If it does, nothing happens.
			if (timer) {
				clearTimeout(timer);
			};
			// What is a timer? It's just a function that triggers after a delay.
			timer = setTimeout(function() {
				newYPos = myScroll.currentPage.pageY;
				newXPos = myScroll.currentPage.pageX;
				if (yPos != newYPos) {				
					yPos = newYPos;
					if (yPos == 8) {
						$('.links').fadeIn('slow');
					} else {
						$('.links').fadeOut('fast');
					};
					if (yPos != 0) {
						$('.stickable').fadeIn('slow');
					} else {
						$('.stickable').fadeOut('fast');
					};
					$('.selected').removeClass('selected');
					$('.navBlock--'+yPos).addClass('selected');
				};
				if (xPos != newXPos) {
					xPos = newXPos;
					$('.posMarker').removeClass('posMarker');
					$('.fa-circle--'+xPos).addClass('posMarker');
					$('#horseName').fadeOut('fast', function (){
						$('#horseName').text(horseNames[xPos]);
						$('#horseName').fadeIn('fast');
					});
				};
			}, 10);
		});
		// All other button functions are below.
		//
		// These are for the arrows. It pulls the data-dir attribute to see what direction to move the page.
		$('.fa').on('click touchend', function(e){
			var dir = $(this).attr('data-dir');			
			if (timer) {
				clearTimeout(timer);
			};
			timer = setTimeout(function(){
				switch(dir) {
					case "u":
						myScroll.goToPage(myScroll.currentPage.pageX, myScroll.currentPage.pageY-1);
						break;
					case "d":
						myScroll.goToPage(myScroll.currentPage.pageX, myScroll.currentPage.pageY+1);
						break;
					case "l":
						if (myScroll.currentPage.pageX > 0) {
							myScroll.prev();
						} else if (myScroll.currentPage.pageX == 0) {
							myScroll.goToPage(cellsWide, myScroll.currentPage.pageY);
						};
						break;
					case "r":
						if (myScroll.currentPage.pageX < cellsWide) {
							myScroll.next();
						} else if (myScroll.currentPage.pageX == cellsWide) {
							myScroll.goToPage(0, myScroll.currentPage.pageY);
						};
						break;
					default:
						break;
				};
			}, 50);
		});
		// I wonder what this one does?
		$('.backToTop').on('click touchend', function(e){
			if (timer) {
				clearTimeout(timer);
			};
			timer = setTimeout(function(){
				myScroll.goToPage(myScroll.currentPage.pageX, 0);
			}, 50);
		});
		// These are events for the navbar.
		$('.navBlock').on('click touchend', function(e){
			var pos = Number($(this).attr('data-pos'));
			if (timer) {
				clearTimeout(timer);
			};
			timer = setTimeout(function(){
				myScroll.goToPage(myScroll.currentPage.pageX, pos);
			}, 50);
		});
	}
}
$(document).ready(function(){
	preaknessContenders.init();
	console.log("connected");
});
