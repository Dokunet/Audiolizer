


async function imageIsLoaded() { 
    await getRGB(this.src);
  }

window.addEventListener('load', async function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
          console.log("test");
            var img = document.querySelector('img');  
            img.src = URL.createObjectURL(this.files[0]);
            img.onload = imageIsLoaded;
        }
    });
  });