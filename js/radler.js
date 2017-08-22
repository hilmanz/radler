$(document).ready(function() { 
	// popup
	$('.showPopup').magnificPopup({
	  type:'inline',
	  midClick: true 
	});
    $("body").queryLoader2({
        barColor: false,
        backgroundColor: false,
        percentage: true,
        barHeight: 1,
        completeAnimation: "grow",
        minimumTime: 100
    });
	$( ".btnicon" ).click(function() {
		$(".occasion").removeClass("playanim");
		var targetID = jQuery(this).attr('href');
		$(targetID).addClass('playanim');
 	    return false;
	});
  $(function() {
	$( ".icon_beer" ).click(function() {
		$( "#beer-desc" ).toggleClass( "fadeInDowns" );
		$(this).toggleClass( "active_beer" );
		 return false;
	});
  });
  
  $(function() {
	$( ".icon_lemon" ).click(function() {
	  $( "#lemon-desc" ).toggleClass( "fadeInDowns" );
	  $(this).toggleClass( "active_lemon" );
	  return false;
	});
  });
  // tes
	
    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "fade",
		animationLoop: false,
		slideshow: false,
		directionNav: false, 
		mousewheel: true,  
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });

});
