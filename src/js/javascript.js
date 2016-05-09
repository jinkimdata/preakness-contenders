var preaknessContenders = {
	init: function(){
		preaknessContenders.share();
		preaknessContenders.scrollFunctions();		
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = "Prep for this year's Preakness Stakes with this handy breakdown of the contenders"; //Tweet text
			var url = "http://data.baltimoresun.com/jin/preakness-contenders/"; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = ""; //Picture URL
			var title = "Preakness 2016 Contenders"; //Post title
			var description = "Prep for this year's Preakness Stakes with this handy breakdown of the contenders"; //Post description
			var url = "http://data.baltimoresun.com/jin/preakness-contenders/images/thumb.jpg"; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	},
	scrollFunctions: function() {
		$('.startButton').on('click touchend', function() {
			$('.splash').fadeOut();
			$('.hidden').removeClass('hidden');
		});
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
		var timer;
		myScroll.on('scroll',function(){
			if (timer) {
				clearTimeout(timer);
			};
			timer = setTimeout(function() {
				if (myScroll.currentPage.pageY < 2) {
					sticky_relocate();
				}
			},50);
		});
		function sticky_relocate() {
			if (myScroll.currentPage.pageY > 0) {
				$('#sticky').addClass('stick');
				$('#sticky-anchor').height($('#sticky').outerHeight());
			} else {				
				$('#sticky').removeClass('stick');
				$('#sticky-anchor').height(0);
			};
		};

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
							myScroll.goToPage(7, myScroll.currentPage.pageY);
						};
						break;
					case "r":
						if (myScroll.currentPage.pageX < 7) {
							myScroll.next();
						} else if (myScroll.currentPage.pageX == 7) {
							myScroll.goToPage(0, myScroll.currentPage.pageY);
						};
						break;
					default:
						break;
				};
			}, 50);
		});

		$('.backToTop').on('click touchend', function(e){
			if (timer) {
				clearTimeout(timer);
			};
			timer = setTimeout(function(){
				myScroll.goToPage(myScroll.currentPage.pageX, 0);
			}, 50);
		});
		$('.navBlock').on('click touchend', function(e){
			var pos = Number($(this).attr('data-pos'));
			if (timer) {
				clearTimeout(timer);
			};
			timer = setTimeout(function(){
				myScroll.goToPage(myScroll.currentPage.pageX, pos);
			}, 50);
		});
		myScroll.on('scrollEnd',function(){			
			$('.selected').removeClass('selected');
			$('.navBlock--'+myScroll.currentPage.pageY).addClass('selected');
		});
	}
}
$(document).ready(function(){
	preaknessContenders.init();
	console.log("connected");
});
