

$(document).ready(function(){

	console.log("Works!")
    $('.separa').waypoint(function(){
      $('#primary-navigation').toggleClass('fixed');
    },{offset:'0px'});

    $('.foco').click(
    	function(){
        //$('.avion').css({"visibility":"visible"})
        $( ".avion" ).trigger( "click" );
    		//$('.f').css({"visibility":"visible"});
    		//$('.menu').css({"background-color":"#CBD5D4"})

    	},function() {
        //$('.avion').css({"visibility":"hidden"})
        
        $('.avion').animate({"top":"0px"});
        //console.log($('.avion').position());
    		$('.f').css({"visibility":"hidden"});
 			$('.menu').css({"background-color": "black"})

  });

    /*
                var x = isDim($('.avion').position());
              if(x){
                console.log('Golllll!')
                $('.avion').animate({
                  "background":"none"
                },{duration:2000}, function(){
                  console.log("Se llevo acabo la animacion");
                });
                //$(this).css({"background":"none"})
              }else{
                console.log("No subio lo suficiente!");
              }
              console.log(x);
    */

    $( ".avion" ).on( "click", function() {
      console.log('Jaime');

        //$(this).animate({"left": "+=50px"})
        $(this).animate({"top":"-300px"},3000, function(){
            
            $('.avion').css({"background":"url('img/bum.svg')"});
            $('.foco').css({"background":"none"});
        })
 

        console.log($('.avion').position());
      });

    


   });

function isDim(ele){
  return ele.top == 784;
}