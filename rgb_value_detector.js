function getRGB() { 

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
/*
    let pix = source1.data;
    let pixArray = [];
    pixArray[0] = [];
    pixArray[1] = [];
    pixArray[2] = [];
    let normalCounter = 0;
    for (var i = 0, n = pix.length; i < n, i += 4 ;) {
        pixArray[0][normalCounter] =  pix[i];
        pixArray[1][normalCounter] = pix[i+1];
        pixArray[2][normalCounter] = pix[i+2];
        normalCounter ++;
    }


    let audioCtx = new(windw.AudioContext || window.webkitAudioContext);

    let myArrayBuffer = audioCtx.createBuffer(3, 30, 44100);
   
    for (var channel = 0; i < myArrayBuffer.numberOfChannels; channel ++){
        let nowBuffering = myArrayBuffer.getChannelData(channel)     
        for(var i = 0; i <  pix.length; i++){
            nowBuffering[i] = pix[i+channel];
        }

    }
    var source = audioCtx.createBufferSource();

    source.buffer = myArrayBuffer;
     */
}