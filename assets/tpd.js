// @codekit-prepend "outdatedBrowser.min.js";

// @codekit-prepend "MediaQuery.js";

// @codekit-prepend "jquery.lettering.js";

// @codekit-prepend "slick.min.js";

// @codekit-prepend "magnific.js";


// @codekit-prepend "TweenMax.min.js";

// @codekit-prepend "Scrollmagic.min.js";

// @codekit-prepend "animation.gsap.min.js";

// @codekit-prepend "masonry.js";

// @codekit-prepend "imagesLoaded.js";




var controller = new ScrollMagic.Controller();

jQuery(document).ready(function($){

	// MAIN NAV ANIMATION

	var body = $('body'),
		navTrigger = $('#nav-trigger'),
		tl = new TimelineMax();

	navTrigger.on('click', function(e){
		if( tl.isActive() ){
			e.preventDefault(); // this will also stop <a> tag links
			e.stopImmediatePropagation(); // this will stop event bubbling
			return false;
		}
		if( body.hasClass('nav-active') ){
			// CLOSING MENU
			$(this).toggleClass('open');
			body.removeClass('nav-active');
			tl.staggerTo('#primary-menu li', 0.35, {xPercent:0, force3D:true}, 0.05)
			  .to('#menu-name', 0.25, {opacity:1}, 0)
			  .to('#menu-x1', 0.75, {rotation:"0_short"}, 0)
			  .to('#menu-x2', 0.5, {x:-65}, 0);	
		}else{
			// OPENING MENU
			$(this).toggleClass('open');
			body.addClass('nav-active');
			tl.staggerTo('#primary-menu li', 0.5, {xPercent:100, force3D:true}, 0.05)
			  .to('#menu-name', 0.25, {opacity:0}, 0)
			  .to('#menu-x1', 0.75, {rotation:"45_short"}, 0)
			  .to('#menu-x2', 0.5, {x:65}, 0);
		}
	});

	  /* Update main product image when a thumbnail is clicked. */
  /*==========================*/
  $('.product-photo-thumb a').on('click', function(e) { 
    e.preventDefault();
    switchImage($(this).attr('href'), null, $('.product-photo-container img')[0]);
  } );

  // Search Modal
  $('.search-modal-link').magnificPopup({
    type:'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true
  });

	// SHOP NAV

	$('#shop-nav-toggle').on('click', function(){
		$('#shop-nav-menu').toggleClass('nav-open');
	});

	// SLIDERS

	$('.large-slider').slick({ 
		fade: true,
		autoplay: true,
  		autoplaySpeed: 2000,
  		speed: 1000,
		slide: '.slider-item',
		arrows: true, 
		dots: true, 
		prevArrow: '<span class="slick-prev"></span>', 
		nextArrow: '<span class="slick-next"></span>', 
		appendArrows: '.slider-nav', 
		appendDots: '.slider-nav' 
	});

	$('.related__slider').slick({
	    slidesToShow:4,
	    slidesToScroll:1,
	    arrows:true,
	    infinite:false,
	    adaptiveHeight:true,
	    prevArrow:"<span class='slick-arrow slick-prev'></span>",
	    nextArrow:"<span class='slick-arrow slick-next'></span>",
	    responsive: [
	      {
	        breakpoint: 768,
	        settings: {
	          slidesToShow: 3,
	          slidesToScroll: 2
	        }
	      },
	      {
	        breakpoint: 540,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1
	        }
	      }
	    ]
	  });

	// POPUPS

	$('.gallery-images__collection').each(function() { // the containers for all your galleries
	    $(this).magnificPopup({
	        delegate: 'a', // the selector for gallery item
	        closeBtnInside: true,
	        removalDelay: 500,
	        preloader: true,
	        midClick: true,
	        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

			  zoom: {
			    enabled: true, // By default it's false, so don't forget to enable it

			    duration: 300, // duration of the effect, in milliseconds
			    easing: 'ease-in-out', // CSS transition easing function

			    // The "opener" function should return the element from which popup will be zoomed in
			    // and to which popup will be scaled down
			    // By defailt it looks for an image tag:
			    opener: function(openerElement) {
			      // openerElement is the element on which popup was initialized, in this case its <a> tag
			      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
			      return openerElement.is('img') ? openerElement : openerElement.find('img');
			    }
			  },
	        gallery: {
	          enabled:true
	        },
	        callbacks: {
			  beforeOpen: function() {
			    this.st.mainClass = 'fs-gallery';
			  },     
		      buildControls: function() {
				this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
			  }
			}
	    });
	});

	$('.bday-club-trigger').magnificPopup({
	  mainClass: 'mfp-with-fade',
	  type:'inline',
	  removalDelay: 1000,
	  midClick: true,
	  closeBtnInside: true,
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  }
	});

	// ICON SIZING

	var $targets = $("img.custom-img-size");

	 enquire
	.register("screen and (min-width:768px)", function() { 
	    // TABLET AND ABOVE
	    $targets.each(function() {
	        var $this = $(this);
	        $this.width($this.data('desktopwidth'));
	    });
	})
	.register("screen and (max-width:767px)", function() {
		// BELOW TABLET
	    $targets.each(function() {
	        var $this = $(this);
	        $this.width($this.data('mobilewidth'));
	    });
	});

	// CUSTOM ORDERS FORM SUBMIT FROM CUSTOM BUTTON

	$("button#gform_1_customsubmit").click(function(){
    	$("form#gform_1").trigger("submit");
	});

	// LETTERING

	$(".rainbow-lettering, #shop-nav-menu .active > a, #shop-nav-menu .current-menu-parent > a").lettering();

	// FOOTER EMAIL LINKS PREVENT CLICK EVENT

	$("#footer-contact a").click(function(e){
		e.preventDefault();
	});	

	// SLIDING HEADERS

	// init controller
	

	// TWEENS
	var sprinkles = TweenMax.fromTo("#sprinkles", 1, { transform: "translate3d(25vw, 0, 0)" }, { transform: "translate3d(-20vw, 0, 0)" });
	var smiles = TweenMax.fromTo("#smiles", 1, { transform: "translate3d(35vw, 0, 0)" }, { transform: "translate3d(-2.5vw, 0, 0)" });
	var specials = TweenMax.fromTo("#specials", 1, { transform: "translate3d(-5vw, 0, 0)" }, { transform: "translate3d(25vw, 0, 0)" });
	var whats = TweenMax.fromTo("#whats", 1, { transform: "translate3d(10vw, 0, 0)" }, { transform: "translate3d(-25vw, 0, 0)" });
	var up = TweenMax.fromTo("#up", 1, { transform: "translate3d(10vw, 0, 0)" }, { transform: "translate3d(-15vw, 0, 0)" });
	var frequent = TweenMax.fromTo("#frequent", 1, { transform: "translate3d(0vw, 0, 0)" }, { transform: "translate3d(35vw, 0, 0)" });
	var questions = TweenMax.fromTo("#questions", 1, { transform: "translate3d(0vw, 0, 0)" }, { transform: "translate3d(20vw, 0, 0)" });
	var theflourist = TweenMax.fromTo("#theflourist", 1, { transform: "translate3d(-25vw, 0, 0)" }, { transform: "translate3d(15vw, 0, 0)" });
	var inthepress = TweenMax.fromTo("#inthepress", 1, { transform: "translate3d(20vw, 0, 0)" }, { transform: "translate3d(-25vw, 0, 0)" });
	var custom = TweenMax.fromTo("#custom", 1, { transform: "translate3d(15vw, 0, 0)" }, { transform: "translate3d(-25vw, 0, 0)" });
	var orders = TweenMax.fromTo("#orders", 1, { transform: "translate3d(20vw, 0, 0)" }, { transform: "translate3d(-10vw, 0, 0)" });
	var soho = TweenMax.fromTo("#soho", 1, { transform: "translate3d(-25vw, 0, 0)" }, { transform: "translate3d(15vw, 0, 0)" });
	var treat = TweenMax.fromTo("#treat", 1, { transform: "translate3d(-25vw, 0, 0)" }, { transform: "translate3d(15vw, 0, 0)" });
	var yourself = TweenMax.fromTo("#yourself", 1, { transform: "translate3d(-25vw, 0, 0)" }, { transform: "translate3d(25vw, 0, 0)" });

	// SCENES
	var sprinkles_scene = new ScrollMagic.Scene({triggerElement: ".home-slider", triggerHook: 'onEnter', duration: "225%"})
						.setTween(sprinkles)
						.addTo(controller);

	var smiles_scene = new ScrollMagic.Scene({triggerElement: ".home-slider", triggerHook: 'onEnter', duration: "225%"})
						.setTween(smiles)
						.addTo(controller);

	var specials_scene = new ScrollMagic.Scene({triggerElement: ".home-specials", triggerHook: 'onEnter', duration: "225%"})
						.setTween(specials)
						.addTo(controller);

	var whats_scene = new ScrollMagic.Scene({triggerElement: ".home-whatsup", triggerHook: 'onEnter', duration: "225%"})
						.setTween(whats)
						.addTo(controller);

	var up_scene = new ScrollMagic.Scene({triggerElement: ".home-whatsup", triggerHook: 'onEnter', duration: "225%"})
						.setTween(up)
						.addTo(controller);

	var frequent_scene = new ScrollMagic.Scene({triggerElement: ".faq-header", triggerHook: 'onEnter', duration: "225%"})
						.setTween(frequent)
						.addTo(controller);

	var questions_scene = new ScrollMagic.Scene({triggerElement: ".faq-header", triggerHook: 'onEnter', duration: "250%"})
						.setTween(questions)
						.addTo(controller);	

	var theflourist_scene = new ScrollMagic.Scene({triggerElement: ".about-content", triggerHook: 'onEnter', duration: "225%"})
						.setTween(theflourist)
						.addTo(controller);	

	var inthepress_scene = new ScrollMagic.Scene({triggerElement: ".press-header", triggerHook: 'onEnter', duration: "225%"})
						.setTween(inthepress)
						.addTo(controller);	

	var custom_scene = new ScrollMagic.Scene({triggerElement: ".customorder-content", triggerHook: 'onEnter', duration: "225%"})
						.setTween(custom)
						.addTo(controller);

	var orders_scene = new ScrollMagic.Scene({triggerElement: ".customorder-content", triggerHook: 'onEnter', duration: "225%"})
						.setTween(orders)
						.addTo(controller);	

	var soho_scene = new ScrollMagic.Scene({triggerElement: ".location-slider", triggerHook: 'onEnter', duration: "225%"})
						.setTween(soho)
						.addTo(controller);	

	var treat_scene = new ScrollMagic.Scene({triggerElement: ".shop-index__intro", triggerHook: 'onEnter', duration: "225%"})
						.setTween(treat)
						.addTo(controller);

	var yourself_scene = new ScrollMagic.Scene({triggerElement: ".shop-index__intro", triggerHook: 'onEnter', duration: "225%"})
						.setTween(yourself)
						.addTo(controller);		

});

/*	---------------------
**
**
**  TUMBLR API - GALLERY, PRESS
**
**
*  ---------------------- */

(function($) {


	/* GALLERY */

	// Set up HTML
	var tags = ['favorites', 'cakeballs', 'sculpted', 'drawn', 'events', 'rainbow', 'holidays', 'treats', 'series'],
	    tagsNav = $('#gallery-tags'),
	    tagsImages = $('#gallery-images');

	tags.forEach(function(currentValue, index) {
		tagsNav.append('<li><a data-tag="' + currentValue + '" href="#">' + currentValue + '</a></li>');
		tagsImages.append('<div class="gallery-images__collection" id="' + currentValue + '" data-total="0"><div class="gallery-images__loader"><h3>one sec...</h3></div></div>');
	});
	
	// Tumblr API call by tag & append content to appropriate container
	function getTumblr(tag){

		var imageDiv = tagsImages.find('#' + tag),
			offset = parseInt( imageDiv.attr('data-total') );

		if (tag === 'undefined' || tag === null || tag === 'all') {
	        var _data  = { 
	        	api_key: "VrLIN0wcojIpqMRnn5MJNDc6bAdEmABjF95sGcAYRCOp3rdBOG",
	        	offset: offset,
		        limit: 36 
		    };
	    } 
	    else {
	        var _data = { 
	        	api_key: "VrLIN0wcojIpqMRnn5MJNDc6bAdEmABjF95sGcAYRCOp3rdBOG",
		        limit: 36,
		        offset: offset,
		        tag: tag
		    }
	    }
		$.ajax({
		    type: "GET",
		    url : "https://api.tumblr.com/v2/blog/flourshop.tumblr.com/posts?",
		    dataType: "jsonp",
		    data: _data,
		     beforeSend: function(){
		    	imageDiv.find('.gallery-images__loader').show();
		    },
		    success: function(data){	

		    	var length = data.response.posts.length,
		    		total = offset + length;

		        for (var i = 0; i < length; i++) {
		        	var type = data.response.posts[i].type;
	                var str; 
	                
	                if( type === 'photo' ){
	                	if( data.response.posts[i].photos[0].original_size.width < 500 ){
	                		str = '<div class="gallery-images__image"><a class="mfp-image" target="_blank" href="' + data.response.posts[i].photos[0].original_size.url +'"><img src="' + data.response.posts[i].photos[0].original_size.url + '"/></a></div>';
	                	}else{
	                		str = '<div class="gallery-images__image"><a class="mfp-image" target="_blank" href="' + data.response.posts[i].photos[0].original_size.url +'"><img src="' + data.response.posts[i].photos[0].alt_sizes[1].url + '"/></a></div>';
	                	}	
	                }else if( type === 'video' ){
	                	str = '<div class="gallery-images__image"><a class="mfp-video" target="_blank" href="#video-' + data.response.posts[i].id +'"><img src="' + data.response.posts[i].thumbnail_url + '"/></a>';
	                	str += '<div class="mfp-hide gallery-images__video" id="video-' + data.response.posts[i].id + '">' + data.response.posts[i].player[2].embed_code + '</div></div>';
	                }
	                
	                imageDiv.append(str);
	              
	            }

	            imageDiv.imagesLoaded().always(function(instance){
	            	imageDiv.find('.gallery-images__loader').hide();
					imageDiv.delay(300).addClass('all-loaded');
					imageDiv.attr('data-total', total);
				});
		    },
		    error: function (msg) { 
		    	alert(msg); 
		    }
		});	
	}


	// Trigger tumblr API call on first tag button click only & tab visibility toggle on every click
	function tagClick(e){
		getTumblr( $(this).data('tag') );
		e.preventDefault();
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		$('#gallery-images > #' + $(this).data('tag')).addClass('active').siblings().removeClass('active');
		$(this).on('click', function(e){
			e.preventDefault();
			$(this).parent('li').addClass('active').siblings().removeClass('active');
			$('#gallery-images > div#' + $(this).data('tag')).addClass('active').siblings().removeClass('active');
			$('#gallery-images > #' + $(this).data('tag')).find('.gallery-images__collection__spinner').hide();
		});
	};

	$('#gallery-tags a').each(function(index, element){
		$(this).one('click', tagClick);
	});

	// Init Page with All Images
	tagsNav.find('a[data-tag="all"]').trigger('click');

	// Infinite Scroll

	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() == $(document).height()) {

	   		if( $('body').hasClass('page-template-page-gallery') ){
	     		var currentGal = $('#gallery-tags').find('li.active').find('a').data('tag');
	     		getTumblr(currentGal); 	
	   		}
	   
	   }
	});

	/* PRESS */

	var pressDiv = $('.press-content__links'),
		pressContainer = pressDiv.masonry({
			itemSelector: '.press-content__link',
			columnWidth:266,
			gutter:20,
			fitWidth:true
		});

	function getPress(){

		var offset = parseInt( pressDiv.attr('data-total') );

		var _data  = { 
        	api_key: "72OF92yqvCwnPxF6CYCkljAQUcdFFocdornrhJOsKZIOgS2Yy5",
	        limit: 24,
	        offset: offset 
	    };

		$.ajax({
		    type: "GET",
		    url : "https://api.tumblr.com/v2/blog/amirahkassem.com/posts?",
		    dataType: "jsonp",
		    data: _data,
		    beforeSend: function(){
		    	$('.press-content__loader').show();
		    },
		    success: function(data){	

		    	console.log(data);

		    	var length = data.response.posts.length,
		    		total = offset + length,
		    		totalStr = '';

		        for (var i = 0; i < length; i++) {
		        	var type = data.response.posts[i].type;
	                var str; 
	                
	                if( type === 'photo' ){
	                	if( data.response.posts[i].photos[0].original_size.width < 500 ){
	                		str = '<div class="press-content__link"><a target="_blank" class="mfp-image" target="_blank" href="' + data.response.posts[i].summary +'"><img src="' + data.response.posts[i].photos[0].original_size.url + '"/></a></div>';
	                	}else{
	                		str = '<div class="press-content__link"><a target="_blank" class="mfp-image" target="_blank" href="' + data.response.posts[i].summary +'"><img src="' + data.response.posts[i].photos[0].alt_sizes[1].url + '"/></a></div>';
	                	}	
	                }else if( type === 'video' ){
	                	str = '<div class="press-content__link"><a class="mfp-video" target="_blank" href="#video-' + data.response.posts[i].id +'"><img src="' + data.response.posts[i].thumbnail_url + '"/></a>';
	                	str += '<div class="mfp-hide press-content__video" id="video-' + data.response.posts[i].id + '">' + data.response.posts[i].player[2].embed_code + '</div></div>';
	                }

	                totalStr += str;
 
	            }

	            var totalStrObj = $(totalStr);

	            pressContainer.append(totalStrObj);

	            pressDiv.imagesLoaded().always(function(instance){
	            	$('.press-content__loader').hide();
					pressDiv.delay(300).addClass('all-loaded');
					pressDiv.attr('data-total', total);
					pressContainer.masonry('appended', totalStrObj );
				});

		    },
		    error: function (msg) { 
		    	alert(msg); 
		    }
		});	
	}

	getPress();

	$(window).scroll(function() {

	   if( $(window).scrollTop() == $(document).height() - $(window).height() ) {

	   		if( $('body').hasClass('page-template-page-press') ){
	     		getPress(); 	
	   		}
	   
	   }

	});




})( jQuery );