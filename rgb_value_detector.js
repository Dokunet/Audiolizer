
let source;
let audioCtx = new(window.AudioContext || window.webkitAudioContext);

async function getRGB() { 

    var context = document.getElementById('myImg');
    var imgCanvas = document.createElement("canvas"),
    imgContext = imgCanvas.getContext("2d");
    console.log(imgCanvas);
    console.log(imgContext);
    // Make sure canvas is as big as the picture
    imgCanvas.width = context.width;
    imgCanvas.height = context.height;
    // Draw image into canvas element
    imgContext.drawImage(context, 0, 0, context.width, context.height);

    console.log(context);
    // Save image as a data URL
     let source1 = imgContext.getImageData(0, 0, context.width, context.height);



      console.log(source1);


    let pix = source1.data;
    let pixArray = [];
    pixArray[0] = [];
    pixArray[1] = [];
    pixArray[2] = [];
    let normalCounter = 0;

    console.log(pixArray);

    console.log(pix);
    console.log( context.width * context.height);

    for (var i = 0 ; i < (context.width * context.height);  i ++ ) {
        console.log('ping');
        pixArray[0][normalCounter] =  pix[i];
        pixArray[1][normalCounter] = pix[i+1];
        pixArray[2][normalCounter] = pix[i+2];
        normalCounter ++;
    }

    console.log(pixArray);
  


    
    console.log("this is a test 1" + audioCtx.sampleRate)

var frameCount = audioCtx.sampleRate * 10000.0;

    let myArrayBuffer = audioCtx.createBuffer(3, frameCount, audioCtx.sampleRate);
   console.log(frameCount);
    for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel ++){
      
        let nowBuffering = myArrayBuffer.getChannelData(channel)     
        for(var i = 0; i < frameCount; i++){
            nowBuffering[i] = pix[i] - 127;
            //nowBuffering[i] = Math.random() * 2 - 1;
        }
        console.log("Buffering, please wait 2");
    }
    source = myArrayBuffer;
     // source = audioCtx.createBufferSource();

    source.buffer = myArrayBuffer; 

    console.log(myArrayBuffer);

    /* let audioCtx2 = new(window.AudioContext || window.webkitAudioContext);

    var rec = new Recorder(source, {numberOfChannels:3});

    rec.forceDownload(source, 'testing');

    console.log("this might be a test");
    /* workerPath: 'Recorderjs/recorderWorker.js' */ 
 

} 


async function playSound(){


    source.connect(audioCtx.destination);
    // start the source playing
    source.start();
    console.log('it should have played by now');


}





 async function download(){





    /* var rec = new Recorder(source ,{numChannels:3}); */
    

    console.log(source);
    var a = document.createElement("a");
    document.body.appendChild(a);
    source.buffer = audioCtx.createBufferSource();
    url = window.URL.createObjectURL(new Blob(source, {type: 'audio/wav; codecs=0'}));
    a.href = url;
    a.download = 'filename.wav';
    a.innerHTML = 'Download .wav file';

/* 
    rec.exportWAV((blob) => {
        console.log(source);
        var a = document.createElement("a");
        document.body.appendChild(a);
        url = window.URL.createObjectURL(new Blob([source], {type: 'audio/wav'}));
        a.href = url;
        a.download = 'filename.wav';
        a.innerHTML = 'Download .wav file';

        console.log(blob);
     //   window.URL.revokeObjectURL(url);
    }) */



  //  Recorder.forceDownload(idk, 'testing.wav');


}
/* 
function createDownloadLink(blob) {
    var url = URL.createObjectURL(blob);
    var au = document.createElement('audio');
    var li = document.createElement('li');
    var link = document.createElement('a');
    //add controls to the <audio> element 
    au.controls = true;
    au.src = url;
    //link the a element to the blob 
    link.href = url;
    link.download = new Date().toISOString() + '.wav';
    link.innerHTML = link.download;
    //add the new audio and a elements to the li element 
    li.appendChild(au);
    li.appendChild(link);
    //add the li element to the ordered list 
    recordingsList.appendChild(li);
} */