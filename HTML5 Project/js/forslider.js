$(document).ready(function() {
    $('#slider-1').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#slider-1').removeClass('cs-hidden');
        } 
    });
    $('#slider-2').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#slider-2').removeClass('cs-hidden');
        } 
    });  
    $('#slider-3').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#slider-3').removeClass('cs-hidden');
        } 
    });  
  });

