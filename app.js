$(function(){
    var $ul = $('ul');
    var $input = $('input[type="text"]');
    var $class = $('.fa-plus-square-o');
   
    $ul.on('click', 'li', function(){
        $(this).toggleClass("completed");
    });
    
    $ul.on('click', 'span', function(event){
        $(this).parent().fadeOut(1000, function(){
            $(this).remove();
        });
        event.stopPropagation();
    });
    
    $input.keypress(function(event){
        if(event.which === 13){
            var todoText = $(this).val();
            $input.val("");
            $ul.append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>");
        }
    });

    $class.on('click', function(){
        $input.fadeToggle();
    });
});
