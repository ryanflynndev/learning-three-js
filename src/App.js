import React, {useRef, useState} from "react"
import { Canvas, useFrame } from 'react-three-fiber'
import { softShadows, MeshWobbleMaterial, OrbitControls} from 'drei'
import { useSpring, a } from 'react-spring/three'

softShadows()

const SpinningMesh = ({position, color, speed, args}) => {
  const mesh = useRef()

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  const [expand, setExpand] = useState(false)

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
  })
}

function App() {
  return (
    <div>

    </div>
  );
}

export default App;
