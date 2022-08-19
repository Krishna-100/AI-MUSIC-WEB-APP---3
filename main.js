beli = "";
unsto = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    beli = loadSound("beliver.mp3");
    unsto = loadSound("unstoppable.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, load);
    poseNet.on('pose' , gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function load()
{
console.log("PoseNet model is initialise");
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("Left Wrist X = " + leftWristX + "Left Wrist Y = " + leftWristY + "Right Wrist X = " + rightWristX + "Right Wrist Y = " + rightWristY);
}
}