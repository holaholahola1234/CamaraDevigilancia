object=[]

status=""
video="";
function preload(){
    video=createVideo("video.mp4");
    video.hide();

}

function setup(){
    canvas=createCanvas(480,380)
    canvas.center()
}

function draw(){
image(video,0,0,480,380);
if(status!=""){
    objectDetector.detect(video,gotResult)
    for(i=0;i<object.length;i++){
    document.getElementById("status").innerHTML="status: objetos detectados"    
    document.getElementById("objetos").innerHTML="objetos: objetos detectados"+object.length

    fill("red");
    porcentaje=floor(object[i].confidence*100)
    text(object[i].label+" "+porcentaje+"%",object[i].x,object[i].y);

    noFill();
    stroke("red");
    rect(object[i].x,object[i].y,object[i].width,object[i].height)
}}
}

function comenzar(){
    objectDetector=ml5.objectDetector("cocossd",modelo_cargado);
    document.getElementById("status").innerHTML="status: detectando objetos"
}

function modelo_cargado(){
    console.log("modelo_cargado");
    video.loop();
    video.speed(1);
    video.volume(1);
    status=true
}

function gotResult(error,result){
   if(error){
    console.log(error);
   }
   console.log(result);
   object=result;
   
}

