/**************************
Author: Al Sebastian Ferreras
Description: Validation for the table form
**************************/
$(document).ready(function(){
    $("#xyForm").validate({
        rules:{
            miny:{
                required: true,
                number: true,
                range: [-50, 50]
            },
            maxy:{
                required: true,
                number: true,
                min: function(){
                    if(parseInt($("#miny").val()) > 50)
                        return -50;
                    return parseInt($("#miny").val());},
                max: 50
            },
            minx:{
                required: true,
                number: true,
                range: [-50, 50]
            },
            maxx:{
                required: true,
                number: true,
                min: function(){
                    if(parseInt($("#minx").val()) > 50)
                        return -50;
                    return parseInt($("#minx").val());},
                max: 50
            }
        },
        messages:{
            miny:{
                required: "Please enter a minimum number",
                number: "Please enter a number",
                range: "Please enter a number between -50 and 50"
            },
            maxy:{
                required: "Please enter a maximum number",
                number: "Please enter a number",
                min: "Please enter a number greater than or equal to the minimum above",
                max: "Please enter a number less than or equal to 50"
            },
            minx:{
                required: "Please enter a minimum number",
                number: "Please enter a number",
                range: "Please enter a number between -50 and 50"
            },
            maxx:{
                required: "Please enter a maximum number",
                number: "Please enter a number",
                min: "Please enter a number greater than or equal to the minimum above",
                max: "Please enter a number less than or equal to 50"
            }
        },
        submitHandler: function(){
            generateTable();
            $('#tableZone').show();
        }
    });
});