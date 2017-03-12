var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry(5, 5, 2);
var material = new THREE.MeshBasicMaterial( { color: 0x808080 } );
var cube = new THREE.Mesh(geometry, material);

scene.background = new THREE.CubeTextureLoader()
.setPath( 'textures/' )
.load( [
'nx.jpg',
'px.jpg',
'py.jpg',
'ny.jpg',
'nz.jpg',
'pz.jpg'
] );

var render = function () {
	requestAnimationFrame( render );

	renderer.render(scene, camera);
};

var lastY = 0;
var lastX = 0;
camera.position.z = 2000;
var top = -300;

document.body.onmousemove = function(e) {
    camera.position.y = -300+(e.clientY + e.clientY*2);
	camera.position.x = (e.clientX + e.clientX*2);
	camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

render();
