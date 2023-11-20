import {Canvas} from '@react-three/fiber'
import {Environment, Center} from '@react-three/drei'

import Model from './Model'
import CameraRig from './CameraRig'
import Backdrop from './Backdrop'




function CanvasPage() {
  return (
    <Canvas
      shadows
      camera={{position: [0,0,15], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
      className='w-full h-full max-h-full transition-all ease-in'
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Backdrop />
        <Center>
          <Model />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasPage