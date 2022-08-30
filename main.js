var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();



function start()
{
    recognition.start();
} 

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        speak()
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});


}

setTimeout(function () {
        take_snapshot();
        img_id="selfie1";
    speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }, 5000);

}

setTimeout(function () {
        take_snapshot();
        img_id="selfie2";
    speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }, 10000);

setTimeout(function () {
        take_snapshot();
        img_id="selfie3";
    speak_data = "Taking your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }, 10000);

    function speak() {
    var synth = window.speechSynthesis;
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
        
   function take_snapshot() {
    
    Webcam.snap(function (data_uri) {
        if(img_id=="selfie1")
        document.getElementById("result").innerHTML = "<img id='selfie1' src='"+data_uri+"'>"
        if(img_id=="selfie2")
        document.getElementById("result").innerHTML = "<img id='selfie2' src='"+data_uri+"'>"
        if(img_id=="selfie3")
        document.getElementById("result").innerHTML = "<img id='selfie3' src='"+data_uri+"'>"
    });
}
