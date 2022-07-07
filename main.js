var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'png',
    jpeg_quality:90
});



function speak(){

    

    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id = "selfie1";
        take_snapshot();
        save();
    },5000);

    setTimeout(function(){
        img_id = "selfie2";
        take_snapshot();
        save();
    },10000);

    setTimeout(function(){
        img_id = "selfie3";
        take_snapshot();
        save();
    },15000);
}

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        if (img_id== "selfie1"){
            document.getElementById("result").innerHTML = "<img id='selfie_1' src='"+data_uri+"'>";    
        }
        if (img_id== "selfie2"){
            document.getElementById("result").innerHTML = "<img id='selfie_2' src='"+data_uri+"'>";    
        }
        if (img_id== "selfie3"){
            document.getElementById("result").innerHTML = "<img id='selfie_3' src='"+data_uri+"'>";    
        }
    });
}

