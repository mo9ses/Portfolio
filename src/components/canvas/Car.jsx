import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { EquirectangularReflectionMapping } from 'three';

import CanvasLoader from "../Loader";

const hdrEquirect = new RGBELoader().load("./gradients/ml_gradient_freebie_02.hdr", () => {
  hdrEquirect.mapping = EquirectangularReflectionMapping;
});


const CarObject = () => {
  const car = useGLTF("./car/scene.glb");
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    function checkOrientation() {
      setIsLandscape(window.innerWidth > window.innerHeight);
    }

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  return (
    <mesh
      scale={isLandscape ? 150.6 : 150.15}
      position={[0, isLandscape ? -0.7 : -0.3, 0]}
    >
      <primitive
        object={car.scene}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

const Car = () => {
  const canvasRef = useRef(null);

  return (
    <div className="headline-container">
      <div id="text-behind">Bryan<br />Athanas</div>
      <div id="text-front">Bryan<br />Athanas</div>
      <div id="text-behind-blur">Bryan<br />Athanas</div>
      <Canvas
        ref={canvasRef}
        className="canvas-container"
        frameloop='always'
        shadows
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [10, 5, 10], fov: 25 }}
      >
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={1} maxPolarAngle={1.6} minPolarAngle={1.3} enableDamping={true} dampingFactor={0.85} enablePan={false} />
        <Suspense fallback={<CanvasLoader />}>
          <Environment map={hdrEquirect} />
          {/* <ambientLight intensity={1} /> */}
          {/* <directionalLight
            castShadow
            intensity={3}
            position={[5, 10, 7.5]}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-bias={-0.0001}
          /> */}
          <CarObject />
        </Suspense>
        <Preload all />
      </Canvas>

    </div>
  );
}


export default Car;