/**************************
Author: Al Sebastian Ferreras
Description: Implements Sliders
***************************/
$(document).ready(function(){
    var sliderMinY = {
        min: -50,
        max: 50,
        step: 1,
        slide: function(e, ui){
            $('#miny').val(ui.value)
        }
    };
    var sliderMaxY = {
        min: -50,
        max: 50,
        step: 1,
        slide: function(e, ui){
            $('#maxy').val(ui.value)
        }
    };
    var sliderMinX = {
        min: -50,
        max: 50,
        step: 1,
        slide: function(e, ui){
            $('#minx').val(ui.value)
        }
    };
    var sliderMaxX = {
        min: -50,
        max: 50,
        step: 1,
        slide: function(e, ui){
            $('#maxx').val(ui.value)
        }
    };
    $('#minySlider').slider(sliderMinY);
    $('#maxySlider').slider(sliderMaxY);
    $('#minxSlider').slider(sliderMinX);
    $('#maxxSlider').slider(sliderMaxX);
    
    $('#miny').change(function() {
        var input = this.value;
        $('#minySlider').slider("value", parseInt(input));
    });
    $('#maxy').change(function() {
        var input = this.value;
        $('#maxySlider').slider("value", parseInt(input));
    });
    $('#minx').change(function() {
        var input = this.value;
        $('#minxSlider').slider("value", parseInt(input));
    });
    $('#maxx').change(function() {
        var input = this.value;
        $('#maxxSlider').slider("value", parseInt(input));
    });
});