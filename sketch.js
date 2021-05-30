var ball;
var database;
var position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var pos=database.ref('ball/position');
    pos.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        ball.x=ballx-1;
        ball.y=ball.y+0;
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
  ball.x=ball.x+x;    //ball.x=ball.x+1
  ball.y=ball.y+y     //ball.y=ball.y+0
}

function readPosition(data){
    position=data.val();

    ball.x=position.x;
    ball.y=position.y;

}