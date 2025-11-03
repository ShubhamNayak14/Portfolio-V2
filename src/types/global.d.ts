// src/types/global.d.ts

// Static asset shims (Vite will handle these at runtime).
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.svg'
declare module '*.webp'
declare module '*.mp4'

// 3D assets
declare module '*.glb'
declare module '*.gltf'

// Optional: audio/fonts if your project imports them
declare module '*.mp3'
declare module '*.wav'
declare module '*.ogg'
declare module '*.woff'
declare module '*.woff2'
declare module '*.ttf'

// No JSX IntrinsicElements here.
// Custom React Three Fiber elements should be typed via
// @react-three/fiber module augmentation (e.g., src/types/meshline.d.ts).
