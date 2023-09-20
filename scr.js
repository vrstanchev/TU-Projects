 function openCam(){
	  let mdev=navigator.mediaDevices
         if (!mdev || !mdev.getUserMedia) {
            console.log("getUserMedia() not supported.");
            return;
         }
         mdev.getUserMedia({   
            video: true
         })
         .then(function(vidStream) {
            var video = document.getElementById('videoCam');
            if ("srcObject" in video) {
               video.srcObject = vidStream;
            } else {
               video.src = window.URL.createObjectURL(vidStream);
            }
            video.onloadedmetadata = function(e) {
               video.play();
            };
         })
         .catch(function(e) {
            console.log(e.name + ": " + e.message);
         });
     }
 
function modelLoaded() {
  console.log('Model Loaded!');
}
function trainModel(){
	let paragraph = document.getElementById("paragraph");
	 selectElement = document.querySelector('#model_opt');
        model_value = selectElement.value;
		if(model_value=='MobileNet'){
 const classifier = ml5.imageClassifier(model_value, modelLoaded);
classifier.classify(document.getElementById('videoCam'), (err, results) => {
  let first=results[0];
  paragraph.innerHTML=JSON.stringify(first);
		}); }
		else if(model_value=='SpeechCommands18w'){
			const options = { probabilityThreshold: 0.7 };
const classifier = ml5.soundClassifier('SpeechCommands18w', options, modelReady);

function modelReady() {
  // classify sound
  classifier.classify(gotResult);
}

function gotResult(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  // log the result
  console.log(result);
}
		}
}	
