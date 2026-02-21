function startGame() {

    // Remove Menu
    document.getElementById("menu").remove();

    // Create Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // sky color

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 20, 10);
    scene.add(light);

    // Ground (Minecraft-style floor)
    const groundGeometry = new THREE.BoxGeometry(50, 1, 50);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x55aa55 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.position.y = -1;
    scene.add(ground);

    // Test Block (para makita na gumagana)
    const blockGeometry = new THREE.BoxGeometry(1,1,1);
    const blockMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const block = new THREE.Mesh(blockGeometry, blockMaterial);
    block.position.y = 0;
    scene.add(block);

    camera.position.set(3,3,5);
    camera.lookAt(0,0,0);

    // Resize Support (phone + PC)
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        block.rotation.y += 0.01; // umiikot para sure na working

        renderer.render(scene, camera);
    }

    animate();
                  }
