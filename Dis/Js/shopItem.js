$(document).ready(function(){
                  
 
 $(".smImg div img").on("click",function(){
    var img = $(this).attr("src");
     $(".bgimg img").attr("src",img);
    console.log(img);
    
    });

 });
