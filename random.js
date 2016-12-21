var Random = {
	createRange: function(number) {
		var array = [];
		for (i = 1; i <= number; i++) {
			array.push(i);
		}
	},
	shuffle: function(array) {
		var currentIndex = array.length, temporaryValue, randomIndex ;

		// While there remain elements to shuffle...
	  	while (0 !== currentIndex) {
		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		}
	},
	createArray: function() {
		$("#titleResult").typed({
			strings: ["Kết quả xổ số"],
			typeSpeed: 100
		});

		var $list = $( "input[id^='cb']" ).not(":checked");
		var arrayNumber = $list.length;
		var array = [];
		var $resultList = $("ul.list-group");

		for(i = 0; i < $list.length; i++) {
			array.push($($list.get(i)).parent().find("label span").get(0).innerHTML);
		}

		Random.shuffle(array);

		for(i=0; i<array.length;i++) {
			var order = i+1;
			var elem = '<li class="list-group-item"><span class="badge">'+ order +'</span>' + array[i] + '</li>';
			$resultList.append(elem);
		}
	}
};

var PageTransitions = (function() {

	var $main = $( '#pt-main' ),
		$pages = $main.children( 'div.pt-page' ),
		animcursor = 1,
		pagesCount = $pages.length,
		current = 0,
		isAnimating = false,
		endCurrPage = false,
		endNextPage = false,
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		// support css animations
		support = Modernizr.cssanimations;
	
	function init() {

		$pages.each( function() {
			var $page = $( this );
			$page.data( 'originalClassList', $page.attr( 'class' ) );
		} );

		$pages.eq( current ).addClass( 'pt-page-current' );

		$("#toPage2").on( 'click', function() {
			toPage2();
		} );
		$("#toPage3").on( 'click', function() {
			toPage3();
		} );
		$("#toPage4").on( 'click', function() {
			toPage4();
		} );
		$("#toPage5").on( 'click', function() {
			toPage5();
		} );
		$("#toPage6").on( 'click', function() {
			toPage6();
		} );
		$("#toPage7").on( 'click', function() {
			toPage7();
		} );
		$("#toPage8").on( 'click', function() {
			toPage8();
			Random.createArray();
		} );
	}
	function toPage2() {
		var $currPage = $pages.eq( current );
		current += 1;
		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' );
		var outClass = 'pt-page-flipOutRight';
		var inClass = 'pt-page-flipInLeft pt-page-delay500';

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
		} );
	}
	function toPage3() {
		var $currPage = $pages.eq( current );
		current += 1;
		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' );
		var outClass = 'pt-page-flipOutTop';
		var	inClass = 'pt-page-flipInBottom pt-page-delay500';

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
		} );
	}
	function toPage4() {
		var $currPage = $pages.eq( current );
		current += 1;
		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' );
		var outClass = 'pt-page-moveToRight';
		var	inClass = 'pt-page-moveFromLeft';

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
		} );
	}
	function toPage5() {
		var $currPage = $pages.eq( current );
		current += 1;
		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' );
			var outClass = 'pt-page-moveToLeft';
			var inClass = 'pt-page-moveFromRight';

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
		} );
	}
	function toPage6() {
		var $currPage = $pages.eq( current );
		current += 1;
		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' );
	    var outClass = 'pt-page-moveToTopEasing pt-page-ontop';
		var	inClass = 'pt-page-moveFromBottom';

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
		} );
	}
	function toPage7() {
		var $currPage = $pages.eq( current );
		current += 1;
		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' );
			var outClass = 'pt-page-moveToLeft';
			var inClass = 'pt-page-moveFromRight';

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
		} );
	}
	function toPage8() {
		var $currPage = $pages.eq( current );
		current += 1;
		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' );
		var outClass = 'pt-page-scaleDown';
		var	inClass = 'pt-page-scaleUpDown';

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
		} );
	}
	init();

	return { 
		init : init
	};

})();