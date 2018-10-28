$(document).ready(function(){
        $(".details").fadeIn();
        $(window).scroll(function(){
                if($(this).scrollTop() >40){
                        $('.topBtn').fadeIn();
                }else{
                        $('.topBtn').fadeOut();


                }
        });
        $('.topBtn').click(function(){
                $('html ,body').animate({scrollTop : 0},500);
        });


});


/*
$(document).ready(function(){
    
        $(".details").fadeIn();
        

        $(".anima").fadeIn("slow");
        
        

                
            
    
});
*/