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
				sticky_relocate();
			},100);
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
		$('.fa-angle-left').on('click touchend', function(e){
			if (timer) {
				clearTimeout(timer);
			};
			timer = setTimeout(function(){
				if (myScroll.currentPage.pageX > 0) {
					myScroll.prev();
				} else if (myScroll.currentPage.pageX == 0) {
					myScroll.goToPage(7, myScroll.currentPage.pageY);
				};
			}, 50);
		});
		$('.fa-angle-right').on('click touchend', function(e){
			if (timer) {
				clearTimeout(timer);
			};
			timer = setTimeout(function(){
				if (myScroll.currentPage.pageX < 7) {
					myScroll.next();
				} else if (myScroll.currentPage.pageX == 7) {
					myScroll.goToPage(0, myScroll.currentPage.pageY);
				};
			}, 50);
		});
		$('.fa-angle-up').on('click touchend', function(e){
			if (timer) {
				clearTimeout(timer);
			};
			timer = setTimeout(function(){
				myScroll.goToPage(myScroll.currentPage.pageX, myScroll.currentPage.pageY-1);
			}, 50);
		});
		$('.fa-angle-down').on('click touchend', function(e){
			if (timer) {
				clearTimeout(timer);
			};
			timer = setTimeout(function(){
				myScroll.goToPage(myScroll.currentPage.pageX, myScroll.currentPage.pageY+1);
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
		$('.navBlock').on('click', function(e){
			var selected = $(this);
			var pos = Number(selected.attr('data-pos'));
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
