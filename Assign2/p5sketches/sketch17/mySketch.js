//BASIC SETUP THREE.JS
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)

camera.position.z = 10;
//bigger z # = father away camera


var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#9997A5");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize',()=>{
    renderer.setSize(window.innerWidth,window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})



//Element 1

    //1. form/shape
    var geometry1= new THREE.BoxGeometry(1,1,1);

    //2. material
    var material1 = new THREE.MeshLambertMaterial({color:0xF2C9F2})

    //3. mesh
    var mesh1 = new THREE.Mesh(geometry1,material1);
    mesh1.position.set (2.5,0,2);
    mesh1.rotation.set (0,0,0);
    //change size of object
    mesh1.scale.set(1,6,1);


    //4. positioning
    scene.add(mesh1);

//Element 2

    //1. form/shape
    var geometry2= new THREE.BoxGeometry(1,1,1);

    //2. material
    var material2 = new THREE.MeshLambertMaterial({color:0xF2C9F2})

    //3. mesh
    var mesh2 = new THREE.Mesh(geometry2,material2);
    mesh2.position.set (-2.5,0,2);
    mesh2.rotation.set (0,0,0);
    //change size of object
    mesh2.scale.set(1,6,1);


    //4. positioning
    scene.add(mesh2);

//Element 3

    //1. form/shape
    var geometry3= new THREE.BoxGeometry(1,1,1);

    //2. material
    var material3 = new THREE.MeshLambertMaterial({color:0xF2C9F2})

    //3. mesh
    var mesh3 = new THREE.Mesh(geometry3,material3);
    mesh3.position.set (0,0,2);
    mesh3.rotation.set (0,0,-2.5);
    //change size of object
    mesh3.scale.set(1,7,1);


    //4. positioning
    scene.add(mesh3);




    //5. add light
    var light = new THREE.PointLight(0xFFFFFF,1,500)
    light.position.set(10,0,25);
    scene.add(light);



    //refreshes scene when screen resized
    var render= function(){
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();

   



    