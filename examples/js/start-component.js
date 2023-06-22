AFRAME.registerComponent('start', {
  
    init: function()
    {
      // block pointer events until buttonEnter is clicked
      let uiDiv = document.getElementById("uiDiv");
      uiDiv.style["pointer-events"] = "auto";

      let el = document.getElementById("mainscene");
  
      // set up background blocker
      uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.75)";
  
      // indicate clickable with hand cursor (desktop)
      let buttonEnter = document.getElementById("buttonEnter");
      buttonEnter.style.cursor = "pointer";
  
      // fade-in functionality
      let fadeIn = function()
      {
        // allow point events again
        uiDiv.style["pointer-events"] = "none";
  
        // sounds and video can only be triggered after a mouse interaction
        // so we add the networked-aframe component only after user interaction
        // this is useful also if we want to collect user and room info       
        var networkedComp = {
          room: "includia",
          debug: true,
          adapter: "mediasoup",
        };
        console.info('Init networked-aframe with settings:', networkedComp);
        el.setAttribute('networked-scene', networkedComp);
          
        // remove startButton
        buttonEnter.parentNode.remove(buttonEnter);
  
        // fade out uiDiv background
        uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.0)";
        uiDiv.style["transition"] = "background-color 1000ms linear";
      }
  
      // activate for desktop/touchscreen
      buttonEnter.addEventListener('touchstart', fadeIn);
      buttonEnter.addEventListener('mousedown',  fadeIn);
    }
  });