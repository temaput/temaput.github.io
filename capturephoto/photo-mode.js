var gif = new GIF({
	workers: 2,
  quality: 10,
  width: 750,
  height: 1334
});

function renderGif() { 
	gif.on('finished', function(blob) {
    console.log('done!');

        // Show the photo
        const image = document.getElementById('photoModeImage');
    const objUrl = URL.createObjectURL(blob);
    image.src = objUrl;
        container.classList.add('photo');

	 // window.open(URL.createObjectURL(blob));
	});
	gif.render();
}

function addFrame(ff) {
	gif.addFrame(ff); 
}

AFRAME.registerComponent('photo-mode', {
  init: function() {
    const container = document.getElementById('photoModeContainer')
    const image = document.getElementById('photoModeImage')
    const shutterButton = document.getElementById('shutterButton')
    const closeButton = document.getElementById('closeButton')
    this.capturing = false;

    // Container starts hidden so it isn't visible when the page is still loading
    container.style.display = 'block'



    shutterButton.addEventListener('mousedown', () => {
      // Emit a screenshotrequest to the xrweb component
      console.log('starting capture...')
      this.capturing = true;
      this.el.sceneEl.emit('screenshotrequest')

      // Show the flash while the image is being taken
      //container.classList.add('flash')
    })

    
    shutterButton.addEventListener('mouseup', () => {
      // Emit a screenshotrequest to the xrweb component
      console.log('ending capture...');
      setTimeout(() => {

        this.capturing = false;
        renderGif();
      },
      5000
      );
      //this.el.sceneEl.emit('screenshotrequest')

      // Show the flash while the image is being taken
      //container.classList.add('flash')
    })

    this.el.sceneEl.addEventListener('screenshotready', e => {
      // Hide the flash
      //container.classList.remove('flash')

      // If an error occurs while trying to take the screenshot, e.detail will be empty.
      // We could either retry or return control to the user
      if (!e.detail) {
        return
      }

      // e.detail is the base64 representation of the JPEG screenshot
      image.src = 'data:image/jpeg;base64,' + e.detail
	
    
    if (this.capturing) {
      addFrame(image);
      this.el.sceneEl.emit('screenshotrequest');
    }
			
  
    })
  }
})
