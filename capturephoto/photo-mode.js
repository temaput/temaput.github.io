var gif = new GIF({
	workers: 2,
  quality: 10,
  width: 750,
  height: 1334
});

function renderGif() { 
  const container = document.getElementById('photoModeContainer');
	gif.on('finished', function(blob) {
    console.log('done!');

        // Show the photo
        const image = document.getElementById('photoModeImage');
    const objUrl = URL.createObjectURL(blob);
    image.src = objUrl;
        container.classList.add('photo');

	});
	gif.render();
}

function addFrame() {
  
  const canvas = document.querySelector('a-scene').components.screenshot.getCanvas('equirectangular');
  gif.addFrame(canvas); 

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



    closeButton.addEventListener('click', () => {
      container.classList.remove('photo')
    })

    shutterButton.addEventListener('mousedown', () => {
      // Emit a screenshotrequest to the xrweb component
      console.log('starting capture...')
      this.capturing = true;
      this.scheduleCapture();

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

    
  },


  scheduleCapture: function() {
    setTimeout(() => this.addFrame(), 500);
  },

  addFrame: function() {
    if (this.capturing) {
      addFrame();
      this.scheduleCapture();
    }
  }
})
