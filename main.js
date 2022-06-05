beliver ="";
harry_poter = "";

leftWristX = "0";
leftWristY = "0";
rightWristX="0";
rightWristY = "0";

function preload()
{
  beliver =  loadSound("song1.mp3");
   harry_poter =  loadSound("song2.mp3");
}


function setup(){
    canvas = createCanvas(600,500);
  canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results){
 console.log(results);
  if(results.length>0){
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX ="+leftWristX+"leftWristY = "+leftWristY);


    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = "+rightWristX+"rightWristY="+rightWristY);

  }
}

function modelLoaded(){
  console.log("poseNet is inescelized");
}
 function draw(){
image(video,0,0,600,)
}


function beliver1(){
    beliver.play();
    document.getElementById("song_name").innerHTML = "Beliver";
}

function harry()
{

   
    harry_poter.play();
    document.getElementById("song_name").innerHTML ="Harry poter them song ";
}
//function pause(){
//  beliver.pauseAudio();
  //harry_poter.pauseAudio();
 
//}

