prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 355,
    height: 355,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("live").value;

Webcam.attach('#live');

function take_picture() {
    Webcam.snap(function(data_uri) {
        document.getElementById("snapshot").innerHTML="<img id='picture' src='"+data_uri+"'>";
    })
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JE8gGVcHG/model.json',modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first gesture prediction is" + prediction_1;
    speak_data_2 = "And the second gesture prediction is" + prediction_2;
    var UtterThis = SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(UtterThis);
}


       
