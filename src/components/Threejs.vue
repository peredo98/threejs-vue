<template>
  <div id="container"></div>
</template>

<script>
    import * as THREE from 'three';

    export default {
        name: 'Threejs',
        data() {
            return {
            camera: null,
            scene: null,
            renderer: null,
            mesh: null
            }
        },
        methods: {
            init: function() {
                let container = document.getElementById('container');
                // RENDERER
                this.renderer = new THREE.WebGLRenderer({ antialias: true });
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                container.appendChild(this.renderer.domElement);

                // SCENE
                this.scene = new THREE.Scene();

                //CAMERA
                let fov = 60;
                let aspect = window.innerWidth / window.innerHeight;
                let near = 0.1;
                let far = 10000;
                this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
                this.camera.position.set(0, 0, 5);

                // MODELS
                let geometry = new THREE.ConeGeometry(3, 2, 4);
                let material = new THREE.MeshBasicMaterial({ wireframe: true});
                this.mesh = new THREE.Mesh(geometry, material);

                // SCENE HIERARCHY
                this.scene.add(this.mesh);

            },
            renderLoop: function() {
                this.renderer.render(this.scene, this.camera);
                this.updateScene();
                requestAnimationFrame(this.renderLoop);
            },
            updateScene: function() {
                this.mesh.rotation.y = this.mesh.rotation.y + 0.3 * Math.PI / 180;
            }
        },
        mounted() {
            this.init();
            this.renderLoop();
        }
    }
</script>

<style>
#container {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
}
</style>