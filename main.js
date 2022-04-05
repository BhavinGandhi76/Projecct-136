video = "";
Store = "";

function setup(){
    canvas= createCanvas(400,400);
    canvas.position(760, 350);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 400);
}

function start(){
    objectdetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    store = document.getElementById("Input1").value;
}

function modelloaded(){
    console.log("model has been loaded");
}