import React from "react";

// Css
import { Canvas } from "react-three-fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
export default function Blob() {
    return (
        <Canvas style={{ height: "300px", width: "300px" }}>
            <ambientLight intensity={0.5}></ambientLight>
            <spotLight position={[10, 10, 10]} angle={0.95}></spotLight>
            <Sphere args={[1, 100, 100]} scale={[3, 3, 1]} color={"red"}>
                <MeshDistortMaterial
                    speed={2}
                    distort={0.5}
                    color="#5838ce"
                    roughness={0}
                ></MeshDistortMaterial>
            </Sphere>
        </Canvas>
    );
}
