var pause;
var menuPause;
$(document).ready(function()
{
    // mode normal avec le menu
    pause = true;
    menuPause = false;
    $("#Jeu").hide();
    $("#Menu").show();
    $("#MenuPause").hide();
    $(".decompte").hide();

    // pause = true;
    // menuPause = true;
    // $("#Jeu").hide();
    // $("#Menu").hide();
    // $("#MenuPause").show();
    // $(".decompte").hide();


    // mode débug sans le menu au départ
    // pause = false;
    // menuPause = false;
    // $("#Jeu").show();
    // $("#Menu").hide();
    // $("#MenuPause").hide();

    $(document).on('click', "#Jouer", function()
    {
        pause = false;
        engine.runRenderLoop(function () {
            scene.render();
        });
        $("#Jeu").show("slow");
        $("#Menu").hide("slow");
    });

    window.addEventListener("keydown", function (e)
    {
        //console.log(e.which);

        if(e.which == 80 && !pause) // P depuis le jeu, on passe en pause
        {
            menuPause= true;
            focusMenuPause();
        }
        else if (e.which == 80 && pause) // P depuis la pause, on joue !
        {
            menuPause=false;
            setTimeout(goDecompte(),2000);

        }

        if (e.which == 81 && menuPause)
        {
            $("#Jeu").fadeOut();
            $("#MenuPause").fadeOut();
            $("#Menu").fadeIn();
            window.location.reload();
        }

        if(e.which == 74 && pause) // J depuis le menu, on joue !
        {
            menuPause=false;
            setTimeout(goDecompte(),2000);
        }
    });

    window.addEventListener("onblur", function (e)
    {
        focusPause();
    });


    function RetourMenus() {
        pause = true;
        engine.stopRenderLoop();
        $("#MenuPause").fadeOut();
        $("#Menu").fadeIn();
    }

        function focusMenuPause() {
        pause = true;
        engine.stopRenderLoop();
        $("#Jeu").fadeOut();
        $("#Menu").fadeOut();
        $("#MenuPause").fadeIn();
    }

    function focusRunGame() {
        pause = false;
        //SpawnObstacle();
        engine.runRenderLoop(function () {
            scene.render();
        });
        $("#Jeu").fadeIn();
        $("#Menu").fadeOut();
    }

    function goDecompte() {
        $("#Jeu").fadeIn();
        $("#Menu").fadeOut();
        $("#MenuPause").fadeOut();
        $("#changeMoi").text("3");

        $(".decompte").fadeIn();
        $(".decompte").fadeOut( "slow", function() {
           $("#changeMoi").text("2");
        });

        $(".decompte").fadeIn("slow");
        $(".decompte").fadeOut( "slow", function() {
           $("#changeMoi").text("1");
        });

        $(".decompte").fadeIn("slow");
        $(".decompte").fadeOut( "slow", function() {
            pause = false;
            IA();
            engine.runRenderLoop(function () {
                scene.render();
            });
        });


    }

});

