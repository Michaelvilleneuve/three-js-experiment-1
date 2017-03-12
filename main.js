var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

controls = new THREE.OrbitControls( camera );
controls.addEventListener( 'change', render );

var light = new THREE.PointLight( 0xfffbe5, 3, 100 );
light.position.set( 0, 0, 0 );
scene.add( light );

var loader = new THREE.TextureLoader();
var material = new THREE.MeshPhongMaterial({
	map: loader.load('textures/earthmap1k.jpg'),
	bumpMap: loader.load('textures/earthbump1k.jpg'), 
	bumpScale: 0.5
});

var geometry = new THREE.SphereGeometry(2, 32, 32);
var earth = new THREE.Mesh(geometry, material);
scene.add(earth);


var material = new THREE.MeshBasicMaterial({
	map: loader.load('textures/sunmap.jpg')
});
var geometry = new THREE.SphereGeometry(10, 32, 32);
var sun = new THREE.Mesh(geometry, material);

sun.add(earth);
scene.add(sun);

var material = new THREE.MeshBasicMaterial({
	color: 0xfffbe5
});
var geometry = new THREE.SphereGeometry(0.2, 8, 8);


for (var i = 0; i < 800; i++) {
	var star = new THREE.Mesh(geometry, material);

	star.position.z = 200;
	star.position.x = Math.floor((Math.random() * 3000) + 20);
	star.position.y = Math.floor((Math.random() * 3000) + 20);

	scene.add(star);
}

// for (var i = 0; i < 10; i++) {
// 	var material = new THREE.MeshBasicMaterial({
// 		map: loader.load('textures/sunmap.jpg'),
// 	});
// 	var geometry = new THREE.SphereGeometry(1, 320, 320);
// 	var star = new THREE.Mesh(geometry, material);
// 	scene.add(star);
// 	star.position.z = Math.floor((Math.random() * 9990) - 300);
// 	star.position.x = Math.floor((Math.random() * 9990) - 1);
// /}



earth.position.x += 40;
camera.position.z = 70;

var render = function () {
	requestAnimationFrame( render );
	earth.rotation.y += 0.05;
	sun.rotation.y += 0.02;
	renderer.render(scene, camera);
};

render();



