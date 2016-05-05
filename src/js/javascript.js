var preaknessContenders = {
	init: function(){
		//preaknessContenders.share();
		preaknessContenders.scrollFunctions();		
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = ""; //Tweet text
			var url = ""; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = ""; //Picture URL
			var title = ""; //Post title
			var description = ""; //Post description
			var url = ""; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	},
	scrollFunctions: function() {
		var myScroll = new IScroll('#contenders', {
			scrollX: true,
			scrollY: true,
			momentum: false,
			snap: true,
			mouseWheel: true,
			probeType: 3,
			bounce: false,
			keyBindings: true
		});
		document.addEventListener('touchend', function (e) { 
			e.preventDefault(); 
		}, false);
		var timer;
		myScroll.on('scroll',function(){
			if (timer) {
				clearTimeout(timer);
			};
			timer = setTimeout(function() {
				sticky_relocate();
			},100);
		});
		function sticky_relocate() {
			var slidePos = getSlidePos();
			if (slidePos[1] > 0) {
				$('#sticky').addClass('stick');
				$('#sticky-anchor').height($('#sticky').outerHeight());
			} else {				
				$('#sticky').removeClass('stick');
				$('#sticky-anchor').height(0);
			};
			if (slidePos[0] == 0) {
				$('.fa-angle-left').addClass('fade');
			} else if (slidePos[0] == 7) {
				$('.fa-angle-right').addClass('fade');
			} else {
				$('.fade').removeClass('fade');
			};
		};

		$('.backToTop').on('click touchend', function(){
			var slidePos = getSlidePos();
			myScroll.goToPage(slidePos[0], 0);
		});
		$('.fa-angle-up').on('click touchend', function(){
			var slidePos = getSlidePos();
			myScroll.goToPage(slidePos[0], slidePos[1]-1);
		});
		$('.fa-angle-down').on('click touchend', function(){
			var slidePos = getSlidePos();
			myScroll.goToPage(slidePos[0], slidePos[1]+1);
		});
		$('.fa-angle-left').on('click touchend', function(){
			var slidePos = getSlidePos();
			myScroll.goToPage(slidePos[0]-1, slidePos[1]);
		});
		$('.fa-angle-right').on('click touchend', function(){
			var slidePos = getSlidePos();
			myScroll.goToPage(slidePos[0]+1, slidePos[1]);			
		});
		function getSlidePos() {
			var pos = myScroll.getComputedPosition();
			var screenWidth = $(window).width();
			var screenHeight = $(window).height();
			return [Math.round(Math.abs(pos.x)/screenWidth), Math.round(Math.abs(pos.y)/screenHeight)];
		};

	}
}
$(document).ready(function(){
	preaknessContenders.init();
	console.log("connected");
});
