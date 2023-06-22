AFRAME.registerComponent('autorotate', {
    schema: {
      speed: {
        default: 0.005
      },
    },
    
    init: function () {
        
    },
    
    tick: function (){
        this.el.object3D.rotation.set( this.el.object3D.rotation.x,  this.el.object3D.rotation.y + this.data.speed,  this.el.object3D.rotation.z);
    }
});