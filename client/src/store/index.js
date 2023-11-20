import { proxy } from "valtio";

const store = proxy({
    intro: true,
    color: '#8E9BBB',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
})

export default store