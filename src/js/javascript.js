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
		// iScroll
		var myScroll = new IScroll('#contenders', {
			scrollX: true,
			scrollY: true,
			momentum: false,
			snap: true,
			mouseWheel: true,
			probeType: 3,
			bounce: false
		});
		// document.addEventListener('touchend', function (e) { 
		// 	e.preventDefault(); 
		// }, false);
		var timer;

		myScroll.on('scroll',function(){
			if (timer) {
				clearTimeout(timer);
			};
			timer = setTimeout(function() {
				sticky_relocate();
			},50);
		});

		$('.backToTop').on('click touchend',function(){
			var pos = myScroll.getComputedPosition();
			var xPos = Math.abs(pos.x);
			var screenWidth = $(window).width();
			var slidePos = Math.round(xPos/screenWidth);
			console.log(slidePos);
			myScroll.goToPage(slidePos, 0);

		});

		function sticky_relocate() {
			console.log('test');
			var pos = myScroll.getComputedPosition();
			var yPos = Math.abs(pos.y);
			var screenHeight = $(window).height() - 50;
			if (yPos > screenHeight) {
				$('#sticky').addClass('stick');
				$('#sticky-anchor').height($('#sticky').outerHeight());
			} else {				
				$('#sticky').removeClass('stick');
				$('#sticky-anchor').height(0);
			};
			var xPos = Math.abs(pos.x);
			var screenWidth = $(window).width();
			var slidePos = Math.round(xPos/screenWidth);
			$('.posMarker').removeClass('posMarker');
			$('.fa-circle--'+slidePos).addClass('posMarker');
		};

	}
}
$(document).ready(function(){
	preaknessContenders.init();
	console.log("connected");
});
