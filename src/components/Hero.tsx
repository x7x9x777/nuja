import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useFBO } from "@react-three/drei";
import * as THREE from "three";

// Component to render the section's content into a texture
const SectionTexture = ({ sectionRef }) => {
  const [size, setSize] = useState({ width: 1, height: 1 });
  const fbo = useFBO();

  // Get section dimensions
  useEffect(() => {
    if (sectionRef.current) {
      const { width, height } = sectionRef.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, [sectionRef]);

  // Render the section's content into the FBO
  useFrame((state) => {
    state.gl.setRenderTarget(fbo); // Set FBO as the render target
    state.gl.render(state.scene, state.camera); // Render the scene into the FBO
    state.gl.setRenderTarget(null); // Reset the render target to the default framebuffer
  });

  return (
    <>
      {/* Render the section's content into the FBO */}
      <mesh visible={false}>
        <planeGeometry args={[size.width, size.height]} />
        <meshBasicMaterial>
          <Html transform occlude>
            <div
              className="hero-content"
              style={{ width: size.width, height: size.height }}
            >
              <h1>Hello, 3D World!</h1>
              <p>This section is now inside the 3D scene!</p>
            </div>
          </Html>
        </meshBasicMaterial>
      </mesh>

      {/* Render the FBO texture onto a plane */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[size.width, size.height]} />
        <meshBasicMaterial map={fbo.texture} />
      </mesh>
    </>
  );
};

export default function Hero() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="hero">
      <Canvas>
        <SectionTexture sectionRef={sectionRef} />
      </Canvas>
    </section>
  );
}