


async function imageIsLoaded() { 
    //alert(this.src);  // blob url
    // update width and height ...
    await getRGB(this.src);
    
  }

window.addEventListener('load', async function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img.onload = imageIsLoaded;
        }
    });
  });