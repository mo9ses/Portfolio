import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { EquirectangularReflectionMapping, MeshStandardMaterial, TextureLoader } from 'three';

import CanvasLoader from "../Loader";


const hdrEquirect = new RGBELoader().setPath('https://raw.githubusercontent.com/miroleon/gradient_hdr_freebie/main/Gradient_HDR_Freebies/').load('ml_gradient_freebie_02.hdr', () => {
  hdrEquirect.mapping = EquirectangularReflectionMapping;
});

const loader = new TextureLoader();

const baseColorMap1 = loader.load('https://miroleon.github.io/daily-assets/porcelain/textures/Porcelain_Map1_BaseColor.png');
const metallicMap1 = loader.load('https://miroleon.github.io/daily-assets/porcelain/textures/Porcelain_Map1_Metallic.png');
const normalMap1 = loader.load('https://miroleon.github.io/daily-assets/porcelain/textures/Porcelain_Map1_Normal.png');
const roughnessMap1 = loader.load('https://miroleon.github.io/daily-assets/porcelain/textures/Porcelain_Map1_Roughness.png');
const aoMap1 = loader.load('https://miroleon.github.io/daily-assets/porcelain/textures/Porcelain_Map1_ao.png');
const material1 = new MeshStandardMaterial({
  map: baseColorMap1,
  metalnessMap: metallicMap1,
  normalMap: normalMap1,
  roughnessMap: roughnessMap1,
  aoMap: aoMap1,
  envMap: hdrEquirect,
  envMapIntensity: 10
});
const baseColorMap2 = loader.load('https://miroleon.github.io/daily-assets/porcelain/textures/Porcelain_Map2_BaseColor.png');
const metallicMap2 = loader.load('https://miroleon.github.io/daily-assets/porcelain/textures/Porcelain_Map2_Metallic.png');
const normalMap2 = loader.load('https://miroleon.github.io/daily-assets/porcelain/textures/Porcelain_Map2_Normal.png');
const roughnessMap2 = loader.load('https://miroleon.github.io/daily-assets/porcelain/textures/Porcelain_Map2_Roughness.png');
const aoMap2 = loader.load('https://miroleon.github.io/daily-assets/porcelain/textures/Porcelain_Map2_ao.png');
const material2 = new MeshStandardMaterial({
  map: baseColorMap2,
  metalnessMap: metallicMap2,
  normalMap: normalMap2,
  roughnessMap: roughnessMap2,
  aoMap: aoMap2,
  envMap: hdrEquirect,
  envMapIntensity: 10
});

const Car = () => {
  const car = useGLTF("./car/scene.glb");
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    function checkOrientation() {
      setIsLandscape(window.innerWidth > window.innerHeight);
    }

    // Check orientation initially
    checkOrientation();

    // Add event listener for resize events
    window.addEventListener('resize', checkOrientation);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  return (
    <mesh
      scale={isLandscape ? 0.6 : 0.15}
      material={[material1, material2]}
      position={[0, isLandscape ? -1 : -0.3, 0]}
    >
      <primitive
        object={car.scene}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

const Viper = () => {
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
        camera={{ position: [0, 0, 10], fov: 30 }}
      >
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} maxPolarAngle={1.6} minPolarAngle={1.3} enableDamping={true} dampingFactor={0.85} enablePan={false} />
        <Suspense fallback={<CanvasLoader />}>
          <Environment map={hdrEquirect} />
          <pointLight color={0x85ccb8} intensity={2.5} distance={20} position={[0, 3, 2]} />
          <pointLight color={0x9f85cc} intensity={2.5} distance={20} position={[0, 3, 2]} />
          <Car />
        </Suspense>
        <Preload all />
      </Canvas>

    </div>
  );
}


export default Viper;