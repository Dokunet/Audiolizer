
let source;
let audioCtx;

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
  


     audioCtx = new(window.AudioContext || window.webkitAudioContext);
console.log("this is a test 1" + audioCtx.sampleRate)

var frameCount = audioCtx.sampleRate * 10000.0;

    let myArrayBuffer = audioCtx.createBuffer(3, frameCount, audioCtx.sampleRate);
   
    for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel ++){
      
        let nowBuffering = myArrayBuffer.getChannelData(channel)     
        for(var i = 0; i < frameCount; i++){
            nowBuffering[i] = pix[i] - 127;
            //nowBuffering[i] = Math.random() * 2 - 1;
        }
        console.log("Buffering, please wait 2");
    }
     source = audioCtx.createBufferSource();

    source.buffer = myArrayBuffer; 

    console.log(myArrayBuffer);

    localStorage.setItem('source', source);
    localStorage.setItem('audioCtx', audioCtx);


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