var BOUCHE_MODEL;
var MUR_MODEL;
var BOITE_MODEL;
var SATELLITE_MODEL;
var METEORITE_MODEL;
var CAILLOU_MODEL;

function initObstacle()
{
    Obstacle();
    IA();
}

function getRandomInt(min, max)
{
    var value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value;
}

var spawnSpeed = 3000;

function IA()
{
        function SpawnObstacle(){
            var result = getRandomInt(1, 3);
            result = 1;
            if(!pause)
            {
                if (result == 1)
                { 
                    if (numpoints < 100)
                    {
                        Boite(speed);
                    }
                    else
                    {
                        Satellite(speed);
                    }


                }
                else if (result == 2)
                {
                    if (numpoints < 100)
                    {
                        Bouche(speed);
                    }
                    else
                    {
                        Caillou(speed);
                    }

                }
                else if (result == 3)
                {
                  if (numpoints < 100)
                    {
                        Mur(speed);
                    }
                    else
                    {
                        Meteorite(speed);
                    }

                }
                if(spawnSpeed > 500){
                    spawnSpeed = spawnSpeed - 10;
                    //console.log(spawnSpeed);
                }
                if(spawnSpeed < 0.8){
                    speed += 0.01;
                    //console.log(spawnSpeed);
                }
                setTimeout(SpawnObstacle,spawnSpeed);
            }
        }
        setTimeout(SpawnObstacle, spawnSpeed);
}

function Collision(objet)
{
        if (objet.intersectsMesh(hitbox, false)) {
            objet.existe = false;
            if (objet.existe == false)
            {
                objet.dispose();
            }
        }

}

    function coeurDegat(){
        var coeur1 = $('#coeur1').attr("name");
        var coeur2 = $('#coeur2').attr("name");
        var coeur3 = $('#coeur3').attr("name");

        console.log(coeur1);
    }

function Obstacle() // mur
{
    BABYLON.SceneLoader.ImportMesh("", "textures/obs/", "bouche.babylon", scene, function (meshes)
    {
        var m = meshes[0];
        // set the position of the model
        m.position = new BABYLON.Vector3(0,150,50);
        //m.rotate(BABYLON.Axis.Z, 3.14, BABLON.Space.WORLD);
        //m.rotate(BABYLON.Axis.Y, -1.57, BABYLON.Space.WORLD);
        // set the scale of the model
        m.scaling = new BABYLON.Vector3(0.08, 0.08, 0.08);
        BOUCHE_MODEL = m;
    });

    BABYLON.SceneLoader.ImportMesh("", "textures/Space/Meteorite/", "meteorite.babylon", scene, function (meshes)
    {
        var me = meshes[0];
        // set the position of the model
        me.position = new BABYLON.Vector3(0,150,50);
        //m.rotate(BABYLON.Axis.Z, 3.14, BABLON.Space.WORLD);
        //m.rotate(BABYLON.Axis.Y, -1.57, BABYLON.Space.WORLD);
        // set the scale of the model
        me.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
        METEORITE_MODEL = me;
    });

     /*BABYLON.SceneLoader.ImportMesh("", "textures/Space/Meteorite/", "meteorite.babylon", scene, function (meshes)
    {
        var caillou = meshes[0];
        // set the position of the model
        caillou.position = new BABYLON.Vector3(150,150,50);
        //m.rotate(BABYLON.Axis.Z, 3.14, BABLON.Space.WORLD);
        //m.rotate(BABYLON.Axis.Y, -1.57, BABYLON.Space.WORLD);
        // set the scale of the model
        caillou.scaling = new BABYLON.Vector3(0.003 0.003, 0.003);
        CAILLOU_MODEL = caillou;
    });
*/

    BABYLON.SceneLoader.ImportMesh("", "textures/Space/satellite2/", "satellite2.babylon", scene, function (meshes)
    {
        var sat = meshes[0];
        // set the position of the model
        sat.position = new BABYLON.Vector3(0,150,50);
        //sat.rotate(BABYLON.Axis.Z, 3.14, BABLON.Space.WORLD);
        sat.rotate(BABYLON.Axis.Y, 0.5, BABYLON.Space.WORLD);
        // set the scale of the model
        sat.scaling = new BABYLON.Vector3(0.08, 0.08, 0.08);
        SATELLITE_MODEL = sat;
    });


    BABYLON.SceneLoader.ImportMesh("", "textures/obs/", "boite-aux-lettres.babylon", scene, function (meshes)
    {
        var k = meshes[0];
        // set the position of the model
        k.position = new BABYLON.Vector3(145,-0.25,-4);
        // m.rotate(BABYLON.Axis.Z, 3.14, BABYLON.Space.WORLD);
        // m.rotate(BABYLON.Axis.Y, -1.57, BABYLON.Space.WORLD);
        // set the scale of the model
        k.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        BOITE_MODEL = k;
    });


    BABYLON.SceneLoader.ImportMesh("", "textures/obs/", "mur.babylon", scene, function (meshes)
    {
        var l = meshes[0];
        // set the position of the model
        l.position = new BABYLON.Vector3(150,0,0);
        l.rotate(BABYLON.Axis.Y, 1.62, BABYLON.Space.WORLD);
        //m.rotate(BABYLON.Axis.Y, -1.57, BABYLON.Space.WORLD);
        // set the scale of the model
        l.scaling = new BABYLON.Vector3(0.12, 0.12, 0.12);
        MUR_MODEL = l;
    });

}


function Boite() // Boite aux lettre
{
    // Création box
    var caisse = BOITE_MODEL.createInstance(BOITE_MODEL.name);
    caisse.position.x = 15;
    caisse.position.z = -2.1;
    caisse.position.y = -0.5;


    scene.registerBeforeRender(function () {
        caisse.position.x -= speed;

        if (caisse.existe = true)
        {
            Collision(caisse);
        }

        if (caisse.position.x < -15)
            caisse.dispose();
    });
}

function Meteorite() // METEOBITE
{
    // Création box
    var caisse = METEORITE_MODEL.createInstance(METEORITE_MODEL.name);
    caisse.position.x = 15;
    caisse.position.z = 2;
    caisse.position.y = 1.5;
    caisse.existe = true;

    scene.registerBeforeRender(function () {
        caisse.position.x -= speed;

        if (caisse.existe = true)
        {
            Collision(caisse);
        }

        if (caisse.position.x < -15)
            caisse.dispose();
    });

    
}

function Satellite() // SATEBITE
{
    // Création box
    var caisse = SATELLITE_MODEL.clone(SATELLITE_MODEL.name);
    caisse.position.x = 15;
    caisse.position.z = 2;
    caisse.position.y = 1.8;
    caisse.existe = true;

    scene.registerBeforeRender(function () {
        caisse.position.x -= speed;

        if (caisse.existe = true)
        {
            Collision(caisse);
        }

        if (caisse.position.x < -15)
            caisse.dispose();
    });

    
}

function Caillou() // CAILLEBITE
{
    // Création box
    var caisse = METEORITE_MODEL.createInstance(METEORITE_MODEL.name);
    caisse.position.x = 15;
    caisse.position.z = 2;
    caisse.position.y = -1;
    caisse.rotate(BABYLON.Axis.Y, 1, BABYLON.Space.WORLD);
    scene.registerBeforeRender(function () {
        caisse.position.x -= speed;

        if (caisse.existe = true)
        {
            Collision(caisse);
        }

        if (caisse.position.x < -15)
            caisse.dispose();
    });
   
}

function Bouche() // caisse au sol
{
    // Création box
    var caisse = BOUCHE_MODEL.createInstance(BOUCHE_MODEL.name);
    caisse.position.x = 15;
    caisse.position.z = -7.8;
    caisse.position.y = -0.15;
    caisse.existe = true;

    scene.registerBeforeRender(function () {
        caisse.position.x -= speed;

        if (caisse.existe = true)
        {
            Collision(caisse);
        }

        if (caisse.position.x < -15)
            caisse.dispose();
    });

    
}

function Mur() // mur
{
    // Création box
    var caisse = MUR_MODEL.createInstance(MUR_MODEL.name);
    caisse.position.x = 20;
    caisse.position.z = 1.8;
    caisse.position.y = -0.15;

    scene.registerBeforeRender(function () {
        caisse.position.x -= speed;

        if (caisse.existe = true)
        {
            Collision(caisse);
        }

        if (caisse.position.x < -15)
            caisse.dispose();
    });

}
