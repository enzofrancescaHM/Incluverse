// Component to change to a sequential color on click.
// in this case used to build a component that plays or pause a video
AFRAME.registerComponent('cursor-listener', {
  schema: {
    videoid: {
      default: ''
    },
  },
    init: function () {
      var lastIndex = -1;
      var COLORS = ['red', 'green'/*, 'blue'*/];
      var that = this;
      this.el.addEventListener('click', function (evt) {
        evt.preventDefault();
        lastIndex = (lastIndex + 1) % COLORS.length;
        //this.setAttribute('material', 'color', COLORS[lastIndex]);
        //console.log(that.el.object3D);
       
        //console.log('I was clicked at: ', evt.detail.intersection.point);

        // video start/stop
        var video = document.getElementById(that.data.videoid);
        if (lastIndex == 0)
        {
          var newMaterial = new THREE.MeshStandardMaterial({color: 0xff0000}); 
          that.el.object3D.children[0].children[0].material = newMaterial;
          video.play();
        }
        else
        {
          var newMaterial = new THREE.MeshStandardMaterial({color: 0x00ff00}); 
          that.el.object3D.children[0].children[0].material = newMaterial;
          video.pause();
        }
      });
    }
    
  });