var FACADE_MODEL;
var numpoints = 0;    
var murs = [];

document.getElementById("Score").textContent = "Score: " + numpoints; 

function initDecor()
{
    Decor();
}

function Decor()
{
 


    var ground = BABYLON.Mesh.CreateGround("ground1", 31.5, 25, 2, scene);
    ground.position.y = -0.25;
    ground.position.z = 2;
    ground.position.X = 0;

    var ground2 = BABYLON.Mesh.CreateGround("ground2", 30, 25, 2, scene);
    ground2.position.y = -0.25;
    ground2.position.z = 2;
    ground2.position.x = 30;

    var ground3 = BABYLON.Mesh.CreateGround("ground1", 30, 25, 2, scene);
    ground3.position.y = -0.25;
    ground3.position.z = 2;
    ground3.position.x = 60;


    var ground4 = BABYLON.Mesh.CreateGround("ground2", 30.5, 25, 2, scene);
    ground4.position.y = -0.25;
    ground4.position.z = 2;
    ground4.position.x = 90;
    
    var materialGround = new BABYLON.StandardMaterial("texturePlane", scene);
    materialGround.diffuseTexture = new BABYLON.Texture("textures/sol2/routemieux.jpg", scene);
    
    ground.material = materialGround;
    ground2.material = materialGround;
    ground3.material = materialGround;
    ground4.material = materialGround;

    materialGround.diffuseTexture.uScale = 1.0;//Repeat 5 times on the Vertical Axes
    materialGround.diffuseTexture.vScale = 1.0;//Repeat 5 times on the Horizontal Axes

//TOUT BEUGUE

/*    BABYLON.SceneLoader.ImportMesh("", "textures/Space/planetes/", "planetes.babylon", scene, function (meshes)
    {
        var dec = meshes[0];
        // set the position of the model
        dec.position = new BABYLON.Vector3(-6,7,11);
        //m.rotate(BABYLON.Axis.Z, 3.14, BABYLON.Space.WORLD);
        dec.rotate(BABYLON.Axis.Y, 3.14, BABYLON.Space.WORLD);
        // set the scale of the model
        //m.scaling = new BABYLON.Vector3(20, 20, 20);
        dec.isVisible = true;
        // set relative referential, the model
        DECOR_MODEL = dec;

    });
*/
    

    BABYLON.SceneLoader.ImportMesh("", "textures/", "facade.babylon", scene, function (meshes)
    {
        var m = meshes[0];
        // set the position of the model
        m.position = new BABYLON.Vector3(-6,7,11);
        //m.rotate(BABYLON.Axis.Z, 3.14, BABYLON.Space.WORLD);
        m.rotate(BABYLON.Axis.Y, 3.14, BABYLON.Space.WORLD);
        // set the scale of the model
        m.scaling = new BABYLON.Vector3(0.12, 0.12, 0.12);
        m.isVisible = false;
        // set relative referential, the model
        FACADE_MODEL = m;

        AddFacade(FACADE_MODEL, 36, 4);
    });

    function AddFacade(model, taille, NbMur)
    {
        for(var i=0;i<NbMur;i++)
        {
            var face = model.clone(model.name);
            face.position = new BABYLON.Vector3((taille*i),7,12);
            face.isVisible = true;
            murs.push(face);
        }
    }

    // Create a box for the skybox
    var skybox = BABYLON.Mesh.CreateBox("skybox", 500.0, scene);
    // create a texture for the skybox
    var skyboxtexture = new BABYLON.StandardMaterial("skybox", scene);
    // allow texture on internal face of the cube
    skyboxtexture.backFaceCulling = false;
    // apply the material created on the cube
    skybox.material = skyboxtexture;
    // remove light effect and create a white light
    skyboxtexture.diffuseColor = new BABYLON.Color3(0, 0, 0);
    // give textures for the cube
    skyboxtexture.reflectionTexture = new BABYLON.CubeTexture("textures/skybox2/skybox", scene);
    // give the texture mode
    skyboxtexture.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;

    //Déplacement du mur et du ground
   scene.registerBeforeRender(function () {
        ground.position.x -= speed;
        if (ground.position.x < -30)
            ground.position.x = 91;
        });

    scene.registerBeforeRender(function () {
        ground2.position.x -= speed;
        if (ground2.position.x < -30)
            ground2.position.x = 91;
        });

    scene.registerBeforeRender(function () {
    ground3.position.x -= speed;
        if (ground3.position.x < -30)
            ground3.position.x = 91;
        });

    scene.registerBeforeRender(function () {
    ground4.position.x -= speed;
        if (ground4.position.x < -30)
            ground4.position.x = 91;
        });


    scene.registerBeforeRender(function () {
    for (var i in murs) {
        murs[i].position.x -= speed;
        if (murs[i].position.x < -36)
            murs[i].position.x = 72;
        }
    });




setInterval(function points() {
    if(!pause)
    {
        numpoints+=10;
        document.getElementById("Score").textContent = "Score: " + numpoints; 
    }       
}, 1000)


setInterval(function lunarMode() {
    if (numpoints > 50)
    {
        materialSkyboxLune = new BABYLON.CubeTexture("textures/Space/skybox/skybox", scene);
    }

     if (numpoints > 80)
    {
        materialGroundLune = new BABYLON.Texture("textures/sol2/lune.jpg", scene);
    }

     if (numpoints > 100)
    {
        
        scene.registerBeforeRender(function () {
            for (var i in murs) {
                murs[i].dispose();
            }
        });

        BOUCHE_MODEL.dispose();
        MUR_MODEL.dispose();
        BOITE_MODEL.dispose();

        materialGround.diffuseTexture = materialGroundLune;
        skyboxtexture.reflectionTexture = materialSkyboxLune;
        skyboxtexture.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    }
    if  (numponts > 101)
    {
        exit();
    }        
}, 10)
 
}


