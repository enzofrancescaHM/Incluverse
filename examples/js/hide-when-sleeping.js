

AFRAME.registerComponent('hide-when-sleeping', {
    update: function () {
    },
    remove: function () {
    },
    init: function () {
    },
    tick: function (time, timeDelta) {
        const mesh = this.el.getObject3D('mesh');
        if (mesh.material.map == null)
        {
            this.el.object3D.visible = false;
        }            
        else
        {
            //console.log(mesh.material.map);
            this.el.object3D.visible = true;
        }

    }

});        