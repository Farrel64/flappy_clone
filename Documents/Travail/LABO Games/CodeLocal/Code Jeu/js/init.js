$(document).ready(function(){

    if (BABYLON.Engine.isSupported()) {
        var scene = createScene();

        engine.runRenderLoop(function () {
            scene.render();
        });

        // Resize
        window.addEventListener("resize", function () {
            engine.resize();
        });
    }

});
