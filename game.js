let scene, camera, renderer, cube;

function startGame() {

    document.getElementById("menu").style.display = "none";
    document.getElementById("gameCanvas").style.display = "block";

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("gameCanvas").appendChild(renderer.domElement);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7);
    scene.add(light);

    // Ground (parang Minecraft lupa)
    const groundGeometry = new THREE.BoxGeometry(50, 1, 50);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x55aa55 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.position.y = -1;
    scene.add(ground);

    // Block (sample Minecraft block)
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    cube = new THREE.Mesh(geometry, material);
    cube.position.y = 1;
    scene.add(cube);

    camera.position.z = 8;
    camera.position.y = 4;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}