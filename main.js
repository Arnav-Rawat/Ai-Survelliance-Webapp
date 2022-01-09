video = "";
status="";
function preload(){
    video = createVideo("video.mp4");
    video.hide();

}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();

}

function draw(){
    image(video,0,0,480,380);
    if (status != ""){
        objectDetector.detect(video,gotResult);
        for (i=0; i< object.length; i++)
        {
            document.getElementById("status").innerHTML= "status : object detected";
            document.getElementById("number_of_objects").innerHTML = "number_of_objects detected are : " + objects.length;
            fill("#FF0000");
            percentage = floor(object[i].confidence * 100);
            text(object[i].label + " "+ percentage+ "%",objects[i].x + 15, objects[i].y + 15);
            nofill();
            stroke("#FF0000");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
    
}

function start(){
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}

function modelLoaded(){
    console.log("model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);

}