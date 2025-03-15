var xImg,oImg
var box1,box2,box3,box4,box5,box6,box7,box8,box9
var box1state, box2state, box3state, box4state, box5state, box6state, box7state, box8state, box9state
var gamestate = "oPlayer"
var state = "play"
var blueline,bluelineImg,redline,redlineImg
function preload(){
    xImg=loadImage("x.png")
    oImg=loadImage("o.png")
    bluelineImg=loadImage("booloin.png")
    redlineImg=loadImage("redloin.png")
}


function setup(){
    createCanvas(600,600)

    box1=createSprite(100,100,190,190)
    box1.shapeColor=("white")
    box1state= "not_clicked";

    box2=createSprite(300,100,190,190)
    box2.shapeColor=("white")
    box2state= "not_clicked";

    box3=createSprite(500,100,190,190)
    box3.shapeColor=("white")
    box3state= "not_clicked";

    box4=createSprite(100,300,190,190)
    box4.shapeColor=("white")
    box4state= "not_clicked";

    box5=createSprite(300,300,190,190)
    box5.shapeColor=("white")
    box5state= "not_clicked";

    box6=createSprite(500,300,190,190)
    box6.shapeColor=("white")
    box6state= "not_clicked";

    box7=createSprite(100,500,190,190)
    box7.shapeColor=("white")
    box7state= "not_clicked";


    box8=createSprite(300,500,190,190)
    box8.shapeColor=("white")
    box8state= "not_clicked";

    box9=createSprite(500,500,190,190)
    box9.shapeColor=("white")
    box9state= "not_clicked";

   
 
    

}

function draw(){
    background("black")
    
    
    
    // when box1 is clicked and  gamestate is  oPlayer, then change box1 image to o and 
    if(mousePressedOver(box1) && box1state== "not_clicked"  && state == "play"){
        if( gamestate == "oPlayer"){
            box1.addImage(oImg);
            gamestate = "xPlayer";   
            box1state = "o_clicked";
        }
        else{
            box1.addImage(xImg);
            gamestate = "oPlayer" ; 
            box1state = "x_clicked";
        }
        win();
    }

    if(mousePressedOver(box2) && box2state== "not_clicked" && state == "play"){
        if(gamestate == "oPlayer"){
            box2.addImage(oImg);
            gamestate = "xPlayer";
            box2state = "o_clicked";
        }
        else{
            box2.addImage(xImg);
            gamestate = "oPlayer";
            box2state = "x_clicked";
        }
        win();
    }

   
    if(mousePressedOver(box3) && box3state== "not_clicked" && state == "play"){
        if(gamestate == "oPlayer"){
            box3.addImage(oImg);
            gamestate = "xPlayer";
            box3state = "o_clicked";
        }
        else{
            box3.addImage(xImg);
            gamestate = "oPlayer";
            box3state = "x_clicked";
        }
        win();

    }
    
    if(mousePressedOver(box4) && box4state== "not_clicked" && state == "play"){
    
        if(gamestate == "oPlayer"){
            box4.addImage(oImg)
            gamestate = "xPlayer"
            box4state = "o_clicked"
        }
        else{
            box4.addImage(xImg)
            gamestate = "oPlayer"
            box4state = "x_clicked"
        }
        win();
    }
    
    if(mousePressedOver(box5) && box5state== "not_clicked" && state == "play"){
     
        if(gamestate == "oPlayer"){
            box5.addImage(oImg)
            gamestate = "xPlayer"
            box5state = "o_clicked"
        }
        else{
            box5.addImage(xImg)
            gamestate = "oPlayer"
            box5state = "x_clicked"                                                   
        }
        win();
    }
    if(mousePressedOver(box6) && box6state== "not_clicked" && state == "play"){
       
        if(gamestate == "oPlayer"){
            box6.addImage(oImg)
            gamestate = "xPlayer"
            box6state = "o_clicked"
        }
        else{
            box6.addImage(xImg)
            gamestate = "oPlayer"
            box6state = "x_clicked"
        }
        win();
    }
    if(mousePressedOver(box7) && box7state== "not_clicked" && state == "play"){
        
        if(gamestate == "oPlayer"){
            box7.addImage(oImg)
            gamestate = "xPlayer"
             box7state = "o_clicked"
        }
        else{
            box7.addImage(xImg)
            gamestate = "oPlayer"
             box7state = "x_clicked"
        }
        win();
    }
    if(mousePressedOver(box8) && box8state== "not_clicked" && state == "play"){
       
        if(gamestate == "oPlayer"){
            box8.addImage(oImg)
            gamestate = "xPlayer"
             box8state = "o_clicked"
        }
        else{
            box8.addImage(xImg)
            gamestate = "oPlayer"
             box8state = "x_clicked"
        }
        win();
    }
    if(mousePressedOver(box9) && box9state== "not_clicked" && state == "play"){
   
        if(gamestate == "oPlayer"){
            box9.addImage(oImg)
            gamestate = "xPlayer"
             box9state = "o_clicked"
        }
        else{
            box9.addImage(xImg)
            gamestate = "oPlayer"
             box9state = "x_clicked"
        }
        win();

    }
    drawSprites()
    
    if (state == "owin"){
        textSize(80)
        fill("aqua")
        text("player o wins",60,300 )
    }


    if(state == "xwin"){
        textSize(80)
        fill("red")
        text("player x wins",60,300)

        
    }
   
    


    
}


function win(){
    if( (box1state == "o_clicked" && box2state == "o_clicked" && box3state == "o_clicked")  ||
        (box4state == "o_clicked" && box5state == "o_clicked" && box6state == "o_clicked")  ||
        (box7state == "o_clicked" && box8state == "o_clicked" && box9state == "o_clicked")  ||
        (box1state == "o_clicked" && box4state == "o_clicked" && box7state == "o_clicked")  ||
        (box2state == "o_clicked" && box5state == "o_clicked" && box8state == "o_clicked")  ||
        (box3state == "o_clicked" && box6state == "o_clicked" && box9state == "o_clicked")  ||
        (box1state == "o_clicked" && box5state == "o_clicked" && box9state == "o_clicked")  ||
        (box7state == "o_clicked" && box5state == "o_clicked" && box3state == "o_clicked")  
        
    ){
        
        state = "owin"
        
    }


    if( (box1state == "x_clicked" && box2state == "x_clicked" && box3state == "x_clicked")  ||
        (box4state == "x_clicked" && box5state == "x_clicked" && box6state == "x_clicked")  ||
        (box7state == "x_clicked" && box8state == "x_clicked" && box9state == "x_clicked")  ||
        (box1state == "x_clicked" && box4state == "x_clicked" && box7state == "x_clicked")  ||
        (box2state == "x_clicked" && box5state == "x_clicked" && box8state == "x_clicked")  ||
        (box3state == "x_clicked" && box6state == "x_clicked" && box9state == "x_clicked")  ||
        (box1state == "x_clicked" && box5state == "x_clicked" && box9state == "x_clicked")  ||
        (box7state == "x_clicked" && box5state == "x_clicked" && box3state == "x_clicked")  
        
    ){
        state = "xwin"
       
       
    }
                                                                                 
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 


