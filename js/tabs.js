/**************************
Author: Al Sebastian Ferreras
Description: Implements Tabs for saving/deleting tables
***************************/
$(document).ready(function(){
    $('#tabs').tabs();
    
    //Creates tab
    $('#saveTab').click(function(){
        //Shows the tab div if hidden by removal
        $('#tabs').show();
        
        var numTabs = $('#tabs ul li').length + 1;
        var tableId = $('#tableZone table').attr('id');
        
        $('#tabs ul').append("<li id='#tab" + numTabs + "'><input type='checkbox' class='selRem'><a href='#tab" + numTabs + "'>" + tableId + "</a><span class='close'>&times;</span></li>");
        $("#tabs").append('<div id="tab' + numTabs + '">' + '</div');
        $('#tableZone').clone().appendTo('#tab'+numTabs);
        $('#tabs').tabs("refresh");
    });
    
    //Deletes Tab based on which x is clicked
    $(document).on('click', '.close', function(){
        var target = $(this).parent().attr('id');
        $(this).parent().remove();
        $(target).remove();
        $('#tabs').tabs("refresh");
        //Hides tab div if no tabs
        if($('#tabs ul li').length <= 0){
            $('#tabs').hide();
        }
    });
    
    //Deletes tabes that are checked
    $('#delTab').click(function(){
        $('.selRem:checked').each(function(){
            var target = $(this).parent().attr('id');
            $(this).parent().remove();
            $(target).remove();
        });  
            $('#tabs').tabs("refresh");
            if($('#tabs ul li').length <= 0){
                $('#tabs').hide();
            }
    });
});