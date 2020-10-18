


async function imageIsLoaded() { 
    await getRGB(this.src);
  }

window.addEventListener('load', async function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
          $("#after_input").css('visibility', 'hidden');
            var img = document.querySelector('img');  
            img.src = URL.createObjectURL(this.files[0]);
            img.onload = imageIsLoaded;
        }
    });
  });