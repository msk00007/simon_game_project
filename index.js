// $(".title")
gameclr=["red","green","yellow","blue"];

var gamelevel=0;
var gameplay=[];
var userselect=[];
gamebegin();
$(".button").click(function(){
    var mybutton = $(this).attr("id");
    $("#"+mybutton).addClass("changeanim");
    setTimeout(function(){
        $("#"+mybutton).removeClass("changeanim");
    },200);
    if(gamelevel===0){
        gameover();
    }
    else{
        var audio = new Audio("./sounds/"+mybutton+".mp3");
        audio.play();
        gamestart(mybutton);
    }
});

function gameover(){
    $("body").addClass("error");
    setTimeout(function(){
        $("body").removeClass("error")
    },100);
    $(".title").text("Game over, press any key to start");
    var endgame = new Audio("./sounds/wrong.mp3");
    endgame.play();
    gamelevel=0;
    gameplay=[];
    userselect=[];
    gamebegin();
}


function gamebegin(){
    $(document).keydown(function () {
        if(gamelevel===0){
        var selector = Math.floor(Math.random()*4);
        var startclr = gameclr[selector];
        gameplay.push(startclr);
        $("."+startclr).addClass("changeanim");
        setTimeout(function(){
            $("."+startclr).removeClass("changeanim");
        },100);
        gamelevel=1;
        $(".title").text("GAME LEVEL"+gamelevel);
    }
    })

}
$(".start").click(function(){
    if(gamelevel===0){
        var selector = Math.floor(Math.random()*4);
        var startclr = gameclr[selector];
        gameplay.push(startclr);
        $("."+startclr).addClass("changeanim");
        setTimeout(function(){
            $("."+startclr).removeClass("changeanim");
        },100);
        gamelevel=1;
        $(".title").text("GAME LEVEL"+gamelevel);
    }
})
function gamestart(mybutton){
    userselect.push(mybutton);
    correct_game=true;
    console.log(userselect);
    for(var i=0; i<userselect.length;i++){
        if(gameplay[i]!==userselect[i]){
            correct_game=false;
            break;
        }
    }
    if(correct_game){
        if(userselect.length===gamelevel){
            setTimeout(function(){
                gamelevel=gamelevel+1;
                $(".title").text("GAME LEVEL-"+gamelevel);
                var selector = Math.floor(Math.random()*4);
                var startclr = gameclr[selector];
                gameplay.push(startclr);
                $("."+startclr).addClass("changeanim");
                setTimeout(function(){
                    $("."+startclr).removeClass("changeanim");
                },200);
            },1000)

            userselect=[];
        }
    }
    else{
        gameover();
    }
   
}

