import React from "react";

// Css
import { Canvas } from "react-three-fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
export default function Blob({
    canvasWidth = "300px",
    canvasHeight = "300px",
    speed = 2,
    distort = 0.5,
    color = "#5838ce",
    roughness = 0,
}) {
    return (
        <Canvas style={{ height: canvasHeight, width: canvasWidth }}>
            <ambientLight intensity={0.5}></ambientLight>
            <spotLight position={[10, 10, 10]} angle={0.95}></spotLight>
            <Sphere args={[1, 100, 100]} scale={[3, 3, 1]}>
                <MeshDistortMaterial
                    speed={speed}
                    distort={distort}
                    color={color}
                    roughness={roughness}
                ></MeshDistortMaterial>
            </Sphere>
        </Canvas>
    );
}
