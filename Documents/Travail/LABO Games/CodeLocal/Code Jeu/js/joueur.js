// Player
var player;
var hitbox;

function initJoueur () {
    var spriteManagerPlayer = new BABYLON.SpriteManager("playerManager","textures/player.png", 2, 64, scene);

    player = new BABYLON.Sprite("player", spriteManagerPlayer);
    player.position.y = 1.5;
    player.position.z = 2;
    player.size = 3;
    player.invertU = -1;
    player.playAnimation(0, 6, true, 100);

    // Hitbox player
    hitbox = BABYLON.Mesh.CreateBox("box", 1.0, scene);
    hitbox.position.y = 1;
    hitbox.position.z = 2;
    hitbox.scaling.y = 3;

    materialHitbox = new BABYLON.StandardMaterial("texture1", scene);
    hitbox.material = materialHitbox;
    hitbox.material.alpha = 0;

    function Jump (perso)
    {
        hitbox.animations.pop();
        // Get the initial position of our mesh
        var posY = perso.position.y;
        var posRef = 1.5;
        // Create the Animation object
        var animateJump = new BABYLON.Animation(
        "animateJump",
        "position.y",
        60,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE);

        // Animations keys
        var keys = [];
        keys.push({
            frame: 0,
            value: posY
        },{
            frame: 10+ (speedJump/2),
            value: posY+heightJump
        },{
            frame: 20+speedJump,
            value: posRef
        });

        // Add these keys to the animation
        animateJump.setKeys(keys);

        // Link the animation to the mesh
        perso.animations.push(animateJump);

        // Animation hitbox
        var animationBox = new BABYLON.Animation("JumpAnimation", "position.y", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        animationBox.setKeys(keys);
        hitbox.animations.push(animationBox);

        // Run the animation !
        if(posRef == posY)
        {
            scene.beginAnimation(perso, 0, 20+speedJump, false, 1);
            scene.beginAnimation(hitbox, 0, 20+speedJump, false, 1);
        }
    }

    function AntiJump(perso)
    {
        hitbox.animations.pop();
        // Get the initial position of our mesh
        var posy = perso.position.y;
        var posRef1 = 1.5;

        // Create the Animation object
        var animateAntiJump = new BABYLON.Animation(
        "animateAntiJump",
        "position.y",
        60,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE);

        // Animations keys
        var keys1 = [];
        keys1.push({
            frame: 0,
            value: posy
        },{
            frame: 5,
            value: posRef1
        });

        // Add these keys to the animation
        animateAntiJump.setKeys(keys1);

        // Link the animation to the mesh
        perso.animations.push(animateAntiJump);

        // Animation hitbox
        var animationBox1 = new BABYLON.Animation("AntiJumpAnimation", "position.y", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        animationBox1.setKeys(keys1);
        hitbox.animations.push(animationBox1);

        // Run the animation !

        scene.beginAnimation(perso, 0, 20+speedJump, false, 1);
        scene.beginAnimation(hitbox, 0, 20+speedJump, false, 1);
    }

    function Kick (perso)
    {
        hitbox.animations.pop();
        // Get the initial position of our mesh
        var posX = perso.position.x;
        var posRef2 = 0;
        // Create the Animation object
        var animateKick = new BABYLON.Animation(
        "animateKick",
        "position.x",
        60,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE);

        // Animations keys
        var keys2 = [];
        keys2.push({
            frame: 0,
            value: posX
        },{
            frame: 10+ (speedKick/2),
            value: posX+lengthKick
        },{
            frame: 20+speedKick,
            value: posRef2
        });

        // Add these keys to the animation
        animateKick.setKeys(keys2);

        // Link the animation to the mesh
        perso.animations.push(animateKick);

        // Animation hitbox
        var animationBox2 = new BABYLON.Animation("KickAnimation", "position.x", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        animationBox2.setKeys(keys2);
        hitbox.animations.push(animationBox2);

        // Run the animation !
        if(posRef2 == posX)
        {
            scene.beginAnimation(perso, 0, 20+speedKick, false, 1);
            scene.beginAnimation(hitbox, 0, 20+speedKick, false, 1);
        }
    }

     function Poing (perso)
    {
       // CODER ANIM POING
    }

    window.addEventListener("keydown", function (e)
    {
        if(e.which == 32 || e.which ==  90 || e.which ==  122) // espace + Z + z
        { 
            Jump(player);
        }
        else if(e.which == 68 || e.which == 100) // D + d
        {
            //Poing(player);
        }
        else if(e.which == 68 || e.which == 100) // S + s
        {
            //Kick(player);
        }
    });

    window.addEventListener("keyup", function (e)
    {
        if(e.which == 32) // espace
        {
            AntiJump(player);

        }
    });

}
