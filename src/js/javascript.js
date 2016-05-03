var preaknessContenders = {
	init: function(){
		//preaknessContenders.share();
		preaknessContenders.scrollFuntions();

		
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
	scrollFuntions: function() {
		// iScroll
		var myScroll = new IScroll('#contenders', {
			scrollX: true,
			scrollY: true,
			momentum: false,
			snap: true,
			mouseWheel: true,
			probeType: 3
		});
		document.addEventListener('touchend', function (e) { 
			e.preventDefault(); 
			// var yPos = myScroll.getScrollY();
			// sticky_relocate(yPos);
		}, false);
		myScroll.on('scroll',function(){
			var pos = myScroll.getComputedPosition();
			var yPos = Math.abs(pos.y);
			var div_top = $(window).height() - 30;
			console.log('w'+yPos);
			console.log('d'+div_top);
			if (yPos > div_top) {
				$('#sticky').addClass('stick');
				$('#sticky-anchor').height($('#sticky').outerHeight());
			} else {
				$('#sticky').removeClass('stick');
				$('#sticky-anchor').height(0);
			}
		});

		function sticky_relocate(yPos) {

			// var window_top;
			// var div_top;
			// 	window_top = yPos * (-1);
			// 	div_top = screen.height;
			// 	console.log('w'+window_top);
			// 	console.log('d'+div_top);
			// if (window_top > div_top) {
			// 	$('#sticky').addClass('stick');
			// 	$('#sticky-anchor').height($('#sticky').outerHeight());
			// } else {
			// 	$('#sticky').removeClass('stick');
			// 	$('#sticky-anchor').height(0);
			// }
		};

		// $(function() {
		// 	$('#contenders').scroll(sticky_relocate);
		// 	sticky_relocate();
		// });

	}
}
$(document).ready(function(){
	preaknessContenders.init();
	console.log("connected");
});
