import React, {useRef, useState} from "react"
import { Canvas, useFrame } from 'react-three-fiber'
import { softShadows, MeshWobbleMaterial, OrbitControls} from 'drei'
import { useSpring, a } from 'react-spring/three'

softShadows()

const SpinningMesh = ({position, color, speed, args}) => {
  const mesh = useRef()
  
}

function App() {
  return (
    <div>

    </div>
  );
}

export default App;
