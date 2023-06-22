AFRAME.registerComponent('remove-hands', {
    update: function () {

      //console.log('hide hands from avatar');
        //console.log(this.el.object3D);
        if(this.done == false)
        {
          console.log('hide hands from avatar');
          this.clearThree(this.el.object3D);
          console.log(this.el.object3D);
          this.el.object3D.remove(this.el.object3D.getObjectByName("RightHand"));
          this.el.object3D.remove(this.el.object3D.getObjectByName("LeftHand"));
          this.done = true;
        }
      //this.el.setObject3D('light', new THREE.Light());
      // Light is now part of the scene.
      // object3DMap.light is now a THREE.Light() object.
    },
  
    remove: function () {
      //this.el.removeObject3D('light');
      // Light is now removed from the scene.
      // object3DMap.light is now null.
    },
    clearThree: function(obj){
      console.log("we are in clearThree");
      console.log(obj.children[0].name);
      while(obj.children.length > 0){ 
        console.log("siamo dentro");
        clearThree(obj.children[0]);
        //obj.remove(obj.children[0]);
        console.log(obj.name);
      }
      //if(obj.geometry) obj.geometry.dispose();
    
      /* if(obj.material){ 
        //in case of map, bumpMap, normalMap, envMap ...
        Object.keys(obj.material).forEach(prop => {
          if(!obj.material[prop])
            return;
          if(obj.material[prop] !== null && typeof obj.material[prop].dispose === 'function')                                  
            obj.material[prop].dispose();                                                      
        })
        obj.material.dispose();
      } */
    }   ,

    init: function () {
        this.done = false;

        //this.clearThree(this.el.object3D);
        //this.el.object3D.remove(this.el.object3D.getObjectByName("RightHand"));
        //this.el.object3D.remove(this.el.object3D.getObjectByName("LeftHand"));
/*
        this.el.object3D.traverse( function(child) {
            console.log(child);
            if (child instanceof THREE.Mesh) {
                console.log(child);
                // apply custom material
                //child.material = material2;
                
                // enable casting shadows
                //child.castShadow = true;
                //child.receiveShadow = true;
            }
        });*/
            
      },
     
  });