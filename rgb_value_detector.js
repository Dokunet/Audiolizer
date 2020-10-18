
let source;
let audioCtx = new(window.AudioContext || window.webkitAudioContext);

async function getRGB() { 

    var context = document.getElementById('myImg');
    var imgCanvas = document.createElement("canvas"),
    imgContext = imgCanvas.getContext("2d");
    imgCanvas.width = context.width;
    imgCanvas.height = context.height;
    imgContext.drawImage(context, 0, 0, context.width, context.height);
    let source1 = imgContext.getImageData(0, 0, context.width, context.height);
    let pix = source1.data;
    let pixArray = [];
    pixArray[0] = [];
    pixArray[1] = [];
    pixArray[2] = [];
    let normalCounter = 0;

    for (var i = 0 ; i < (context.width * context.height);  i ++ ) {
        console.log('ping');
        pixArray[0][normalCounter] =  pix[i];
        pixArray[1][normalCounter] = pix[i+1];
        pixArray[2][normalCounter] = pix[i+2];
        normalCounter ++;
    }

var frameCount = audioCtx.sampleRate * 30;
    let myArrayBuffer = audioCtx.createBuffer(3, frameCount, audioCtx.sampleRate);
   console.log(frameCount);
    for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel ++){
      
        let nowBuffering = myArrayBuffer.getChannelData(channel)     
        for(var i = 0; i < frameCount; i++){
            nowBuffering[i] = pix[i] - 127;
        }
        console.log("Buffering, please wait 2");
    }
    source = myArrayBuffer;
      //source = audioCtx.createBufferSource();
    source.buffer = myArrayBuffer; 
    console.log(myArrayBuffer);
} 


async function playSound(){
    source.connect(audioCtx.destination);
    source.start();
    console.log('it should have played by now');
}

async function download(){
    console.log(source);
    console.log($('#file-type').val() + "sdkjfgsdikfjb")
    console.log($(this))
    var a = document.createElement("a");
    document.getElementById("right_panel").appendChild(a);
    source.buffer = audioCtx.createBufferSource();
    console.log($('file-type').val())
    var wav = audioBufferToWav(source);
    url = window.URL.createObjectURL(new Blob([wav], {type: 'audio/'+ $('#file-type').val() + '; codecs=0'}));
    a.href = url;
    a.download = 'filename.'+ $('#file-type').val();
    a.innerHTML = 'Download.' + $('#file-type').val() +'<br>';
   
}